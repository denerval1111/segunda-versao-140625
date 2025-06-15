import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  try {
    // Verificar se o diretório existe
    if (!fs.existsSync(postsDirectory)) {
      console.error('❌ Diretório content/blog não encontrado');
      return [];
    }

    // Obter nomes dos arquivos
    const fileNames = fs.readdirSync(postsDirectory);
    const markdownFiles = fileNames.filter(fileName => fileName.endsWith('.md'));
    
    if (markdownFiles.length === 0) {
      console.error('❌ Nenhum arquivo .md encontrado');
      return [];
    }

    const allPostsData = markdownFiles.map((fileName) => {
      try {
        // Remover ".md" do nome do arquivo para obter o id
        const id = fileName.replace(/\.md$/, '');
        
        // Ler arquivo markdown
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Parse do frontmatter
        const matterResult = matter(fileContents);
        
        // Validar dados obrigatórios
        if (!matterResult.data.title || !matterResult.data.date) {
          console.error(`❌ Post ${fileName} está faltando title ou date`);
          return null;
        }

        return {
          id,
          slug: id,
          title: matterResult.data.title || 'Título não definido',
          excerpt: matterResult.data.excerpt || 'Descrição não disponível',
          date: matterResult.data.date || '2024-01-01',
          author: matterResult.data.author || 'Dr. Denerval',
          category: matterResult.data.category || 'Geral',
          image: matterResult.data.image || '/images/blog/default.jpg',
          readTime: matterResult.data.readTime || '5 min de leitura',
          tags: matterResult.data.tags || []
        };
      } catch (error) {
        console.error(`❌ Erro ao processar ${fileName}:`, error.message);
        return null;
      }
    }).filter(post => post !== null);

    // Ordenar por data
    const sortedPosts = allPostsData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    console.log(`✅ ${sortedPosts.length} posts carregados com sucesso`);
    return sortedPosts;

  } catch (error) {
    console.error('❌ Erro geral ao carregar posts:', error.message);
    return [];
  }
}

export function getAllPostIds() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        return {
          params: {
            id: fileName.replace(/\.md$/, ''),
          },
        };
      });
  } catch (error) {
    console.error('❌ Erro ao obter IDs dos posts:', error.message);
    return [];
  }
}

export async function getPostData(id) {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ Post não encontrado: ${id}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Converter markdown para HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      title: matterResult.data.title || 'Título não definido',
      excerpt: matterResult.data.excerpt || 'Descrição não disponível',
      date: matterResult.data.date || '2024-01-01',
      author: matterResult.data.author || 'Dr. Denerval',
      category: matterResult.data.category || 'Geral',
      image: matterResult.data.image || '/images/blog/default.jpg',
      readTime: matterResult.data.readTime || '5 min de leitura',
      tags: matterResult.data.tags || []
    };
  } catch (error) {
    console.error(`❌ Erro ao carregar post ${id}:`, error.message);
    return null;
  }
}

export function getPostsByCategory(category) {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => post.category === category);
}

export function getAllCategories() {
  const allPosts = getSortedPostsData();
  const categories = new Set();
  
  allPosts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });

  return Array.from(categories);
}

export function getAllTags() {
  const allPosts = getSortedPostsData();
  const tags = new Set();
  
  allPosts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });

  return Array.from(tags);
}

export function getPostsByTag(tag) {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => 
    post.tags && Array.isArray(post.tags) && post.tags.includes(tag)
  );
}








