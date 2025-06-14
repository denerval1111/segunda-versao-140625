import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  // Verificar se o diretório existe
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // Obter nomes dos arquivos em /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remover ".md" do nome do arquivo para obter o id
      const id = fileName.replace(/\.md$/, '');

      // Ler arquivo markdown como string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Usar gray-matter para analisar a seção de metadados do post
      const matterResult = matter(fileContents);

      // Combinar os dados com o id
      return {
        id,
        ...matterResult.data,
      };
    });

  // Ordenar posts por data
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  // Verificar se o diretório existe
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
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  // Verificar se o arquivo existe
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Usar gray-matter para analisar a seção de metadados do post
  const matterResult = matter(fileContents);

  // Usar remark para converter markdown em HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combinar os dados com o id e contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
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


