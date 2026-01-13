import fm from 'front-matter';

// Load all markdown files from ../posts/
const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });

export function getPosts() {
    const posts = Object.entries(modules).map(([path, fileContent]) => {
        const { attributes, body } = fm(fileContent);
        // Extract slug from filename (e.g., ../posts/my-post.md -> my-post)
        const slug = path.split('/').pop().replace('.md', '');

        return {
            id: slug, // slug is a good ID
            slug,
            ...attributes, // title, date, excerpt, tags
            content: body // raw markdown content
        };
    });

    // Sort by date descending (optional but good practice)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
    const posts = getPosts();
    return posts.find(post => post.slug === slug);
}
