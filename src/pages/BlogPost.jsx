import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../utils/posts';
import './Blog.css';

export default function BlogPost() {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="blog-container fade-in">
            <Link to="/blog" className="back-link">
                <ArrowLeft size={20} />
                <span>Back to Blog</span>
            </Link>

            <article className="blog-post-detail">
                <header className="post-header">
                    <h1 className="detail-title">{post.title}</h1>
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
                </header>

                <div className="post-content">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>
        </div>
    );
}
