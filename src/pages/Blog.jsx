import { Calendar, Tag } from 'lucide-react';
import './Blog.css';

const posts = [
    {
        id: 1,
        title: 'Welcome to my new website',
        date: 'January 13, 2025',
        excerpt: 'I finally decided to build a proper personal website to showcase my research and projects. Built with React and Vite for optimal performance.',
        tags: ['Personal', 'Web Dev']
    },
    {
        id: 2,
        title: 'Holistic Partitioning in CPU-FPGA Systems',
        date: 'December 20, 2024',
        excerpt: 'A brief overview of the challenges in partitioning C/C++ applications across heterogeneous systems and how my research addresses them.',
        tags: ['Research', 'FPGA', 'HLS']
    }
];

export default function Blog() {
    return (
        <div className="blog-container fade-in">
            <div className="blog-header">
                <h1>Blog</h1>
                <p>Thoughts on engineering, research, and technology.</p>
            </div>

            <div className="posts-list">
                {posts.map(post => (
                    <article key={post.id} className="blog-post">
                        <h2 className="post-title">{post.title}</h2>

                        <div className="post-meta">
                            <div className="meta-item">
                                <Calendar size={16} />
                                <span>{post.date}</span>
                            </div>
                            <div className="meta-item">
                                <Tag size={16} />
                                <div className="tags-list">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="post-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="post-excerpt">{post.excerpt}</p>

                        <a href="#" className="read-more">Read more →</a>
                    </article>
                ))}
            </div>
        </div>
    );
}
