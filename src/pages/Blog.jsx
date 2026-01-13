import { Calendar, Tag } from 'lucide-react';
import './Blog.css';

const posts = [
    {
        id: 1,
        title: 'Welcome to my new website',
        date: 'January 13, 2025',
        excerpt: 'Welcome to my personal corner on the web! This space will serve as a hub for my academic research, technical projects, and thoughts on software engineering and embedded systems.',
        content: `
      <p>I finally decided to build a proper personal website to showcase my research and projects. After relying on institutional profiles and scattered repositories, I wanted a central place to document my work.</p>
      <p>This site is built with <strong>React</strong> and <strong>Vite</strong>, hosted statically on <strong>GitHub Pages</strong>. It's designed to be lightweight, fast, and easy to maintain.</p>
      <p>In the coming months, I plan to write about:</p>
      <ul>
        <li>CPU-FPGA Co-design and Heterogeneous Computing</li>
        <li>High-Level Synthesis (HLS) optimization techniques</li>
        <li>Updates on my PhD research progress</li>
        <li>Interesting coding challenges and solutions</li>
      </ul>
      <p>Feel free to look around and reach out if you'd like to collaborate!</p>
    `,
        tags: ['Personal', 'Announcement']
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

                        {/* 
               For a simple static blog without a separate post page, 
               we can render the content directly or using HTML parsing.
               For this "Welcome" request, I'll render the excerpt and content inline 
               to make it look like a full entry since there's only one.
            */}

                        <div
                            className="post-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                    </article>
                ))}
            </div>
        </div>
    );
}
