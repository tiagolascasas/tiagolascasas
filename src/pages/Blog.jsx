import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { getPosts } from '../utils/posts';
import './Blog.css';

export default function Blog() {
    const posts = getPosts();

    return (
        <div className="blog-container fade-in">
            <div className="blog-header">
                <h1>Blog</h1>
                <p>Thoughts on engineering, research, and technology.</p>
            </div>

            <div className="posts-list">
                {posts.map(post => (
                    <article key={post.id} className="blog-post-card">
                        <Link to={`/blog/${post.slug}`} className="post-link">
                            <h2 className="post-title">{post.title}</h2>
                        </Link>

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

                        <Link to={`/blog/${post.slug}`} className="read-more">
                            Read more →
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
