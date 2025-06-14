import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  console.log('🔍 Verificando diretório:', postsDirectory);
  
  // Verificar se o diretório existe
  if (!fs.existsSync(postsDirectory)) {
    console.log('❌ Diretório não existe:', postsDirectory);
    return [];
  }

  console.log('✅ Diretório existe');

  try {
    // Obter nomes dos arquivos em /content/blog
    const fileNames = fs.readdirSync(postsDirectory);
    console.log('📁 Arquivos encontrados:', fileNames);

    const allPostsData = fileNames
      .filter(fileName => {
        const isMarkdown = fileName.endsWith('.md');
        console.log(`📄 ${fileName}: ${isMarkdown ? 'É Markdown' : 'Não é Markdown'}`);
        return isMarkdown;
      })
      .map((fileName) => {
        console.log(`🔄 Processando: ${fileName}`);
        
        // Remover ".md" do nome do arquivo para obter o id
        const id = fileName.replace(/\.md$/, '');

        // Ler arquivo markdown como string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Usar gray-matter para analisar a seção de metadados do post
        const matterResult = matter(fileContents);
        
        console.log(`✅ Post processado: ${id}`, {
          title: matterResult.data.title,
          category: matterResult.data.category,
          date: matterResult.data.date
        });

        // Combinar os dados com o id
        return {
          id,
          ...matterResult.data,
        };
      });

    console.log(`🎯 Total de posts processados: ${allPostsData.length}`);

    // Ordenar posts por data
    const sortedPosts = allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

    console.log('📊 Posts ordenados:', sortedPosts.map(p => ({ id: p.id, title: p.title })));
    
    return sortedPosts;
  } catch (error) {
    console.error('❌ Erro ao processar posts:', error);
    return [];
  }
}

export function getAllPostIds() {
  // Verificar se o diretório existe
  if (!fs.existsSync(postsDirectory)) {
    console.log('❌ Diretório não existe para getAllPostIds');
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
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  console.log(`🔍 Buscando post: ${id} em ${fullPath}`);

  // Verificar se o arquivo existe
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ Arquivo não encontrado: ${fullPath}`);
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usar gray-matter para analisar a seção de metadados do post
    const matterResult = matter(fileContents);

    // Usar remark para converter markdown em HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    console.log(`✅ Post carregado: ${id}`);

    // Combinar os dados com o id e contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  } catch (error) {
    console.error(`❌ Erro ao carregar post ${id}:`, error);
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
  
  const categoriesArray = Array.from(categories);
  console.log('🏷️ Categorias encontradas:', categoriesArray);
  
  return categoriesArray;
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




