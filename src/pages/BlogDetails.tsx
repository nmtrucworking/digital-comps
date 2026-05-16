import { ArrowLeft, Calendar, Clock, User, ExternalLink, FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '../data/blogPosts';
import type { BlogPost } from '../types/data';

const stripMarkdown = (value: string): string => {
  return value
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/[#>*_~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const calculateReadingTime = (text?: string): number => {
  if (!text) return 5;
  const wordsPerMinute = 200;
  const wordCount = stripMarkdown(text).split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const formatDate = (dateString?: string): string => {
  if (!dateString) return 'Ngày không xác định';
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
};

const getRelatedPosts = (current: BlogPost): BlogPost[] => {
  const currentTags = new Set(current.tags || []);
  return blogPosts
    .filter((p) => p.id !== current.id)
    .map((p) => {
      const shared = (p.tags || []).reduce((acc, tag) => (currentTags.has(tag) ? acc + 1 : acc), 0);
      return { post: p, shared };
    })
    .filter((x) => x.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, 3)
    .map((x) => x.post);
};

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="w-full bg-gradient-to-b from-background to-surface-dim">
        <section className="w-full px-8 md:px-20 py-xl max-w-container-max mx-auto">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg text-center">
            <h1 className="font-headline-lg text-2xl md:text-3xl text-on-background font-bold mb-sm">Không tìm thấy bài viết</h1>
            <p className="text-on-surface-variant mb-md">Bài viết có thể đã bị xóa hoặc đường dẫn không đúng.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container rounded-lg font-button transition-all hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại Blog
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const contentText = post.content || post.summary || '';
  const relatedPosts = getRelatedPosts(post);

  return (
    <div className="w-full bg-gradient-to-b from-background to-surface-dim">
      <section className="w-full px-8 md:px-20 py-lg max-w-container-max mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-container transition-colors font-label-bold">
          <ArrowLeft className="w-4 h-4" />
          Quay lại Blog
        </Link>
      </section>

      <section className="w-full px-8 md:px-20 pb-lg max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-8">
            <div className="rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-low shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <div className="relative h-[240px] md:h-[360px] bg-gradient-to-br from-surface-container to-surface overflow-hidden">
                {post.thumbnail ? (
                  <img className="absolute inset-0 w-full h-full object-cover" src={post.thumbnail} alt={post.title} />
                ) : (
                  <div className="absolute inset-0 bg-surface-container-high" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/35 to-transparent" />
                <div className="absolute bottom-0 left-0 p-lg w-full">
                  <div className="flex flex-wrap gap-xs mb-sm">
                    {(post.tags || []).slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 bg-primary-container/90 backdrop-blur-sm text-on-primary-container rounded-full font-label-bold text-xs uppercase tracking-wider shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="font-headline-lg text-2xl md:text-4xl text-on-primary font-bold leading-tight">{post.title}</h1>
                </div>
              </div>

              <div className="p-lg md:p-xl">
                <div className="flex flex-wrap items-center gap-md text-on-surface-variant mb-md">
                  <div className="flex items-center gap-sm">
                    <User className="w-4 h-4" />
                    <span className="font-label-bold text-sm">{post.author || 'Tác giả'}</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="font-label-bold text-sm">{formatDate(post.publishedDate)}</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <Clock className="w-4 h-4" />
                    <span className="font-label-bold text-sm">{calculateReadingTime(contentText)} phút đọc</span>
                  </div>
                </div>

                <div className="max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => <h1 className="text-on-background font-bold text-2xl md:text-3xl mt-6 mb-3">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-on-background font-bold text-xl md:text-2xl mt-6 mb-3">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-on-background font-bold text-lg md:text-xl mt-5 mb-2">{children}</h3>,
                      p: ({ children }) => <p className="text-on-background leading-relaxed my-3">{children}</p>,
                      ul: ({ children }) => <ul className="list-disc pl-6 my-3 space-y-2 text-on-background">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal pl-6 my-3 space-y-2 text-on-background">{children}</ol>,
                      li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                      a: ({ children, href }) => (
                        <a
                          href={href}
                          className="text-primary underline underline-offset-4 hover:text-primary-container transition-colors"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {children}
                        </a>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary/40 pl-4 py-1 my-4 text-on-surface-variant bg-surface-container/40 rounded-r-lg">
                          {children}
                        </blockquote>
                      ),
                      hr: () => <hr className="my-6 border-outline-variant/40" />,
                      code: ({ children, className }) => {
                        const isBlock = typeof className === 'string' && className.includes('language-');
                        if (isBlock) {
                          return <code className={className}>{children}</code>;
                        }
                        return (
                          <code className="px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 text-on-background text-sm">
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => (
                        <pre className="my-4 p-4 overflow-auto rounded-xl bg-surface-container-high border border-outline-variant/30 text-on-background">
                          {children}
                        </pre>
                      )
                    }}
                  >
                    {post.content || post.summary || ''}
                  </ReactMarkdown>

                  {!post.content && (
                    <div className="mt-md bg-surface-container border border-outline-variant/30 rounded-xl p-md">
                      <p className="text-on-surface-variant text-sm">
                        Nội dung chi tiết của bài viết này đang được cập nhật. Hiện tại bạn có thể xem phần tóm tắt và các bài viết liên quan bên cạnh.
                      </p>
                    </div>
                  )}

                  {post.slidesUrl && (
                    <div className="mt-8 bg-surface-container-low border border-outline-variant/50 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-on-surface">Tài liệu đính kèm: Slide-show Báo cáo Dự án</h4>
                          <p className="text-xs text-on-surface-variant">Hệ thống trình chiếu trực quan minh họa nội dung nghiên cứu.</p>
                        </div>
                      </div>
                      
                      {/* Khung iframe với tỷ lệ 16:9 (aspect-video) */}
                      <div className="relative w-full rounded-lg overflow-hidden bg-black aspect-video border border-outline-variant/30 shadow-inner">
                        <iframe
                          src={post.slidesUrl.replace(/\/view.*$/, '/preview')}
                          className="absolute top-0 left-0 w-full h-full border-0"
                          allow="autoplay; encrypted-media; fullscreen"
                          allowFullScreen
                          title="Slide-show Presentation"
                        ></iframe>
                      </div>
                      
                      <div className="mt-3 text-right">
                         <a 
                            href={post.slidesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                          >
                            Mở rộng toàn màn hình
                            <ExternalLink className="w-4 h-4" />
                          </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-md">
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg">
              <h2 className="font-headline-md text-xl text-on-background font-bold mb-sm">Bài viết liên quan</h2>
              {relatedPosts.length > 0 ? (
                <div className="space-y-sm">
                  {relatedPosts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/blog/${p.id}`}
                      className="block rounded-xl border border-outline-variant/30 bg-surface-container hover:bg-surface-container-high transition-all p-md"
                    >
                      <div className="flex items-start gap-sm">
                        {p.thumbnail ? (
                          <img className="w-16 h-16 rounded-lg object-cover flex-shrink-0" src={p.thumbnail} alt={p.title} />
                        ) : (
                          <div className="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0" />
                        )}
                        <div className="min-w-0">
                          <p className="font-label-bold text-on-background line-clamp-2">{p.title}</p>
                          <p className="text-xs text-on-surface-variant mt-1">{formatDate(p.publishedDate)}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-on-surface-variant text-sm">Chưa có bài viết liên quan.</p>
              )}
            </div>

            <div className="bg-gradient-to-r from-primary-container/20 to-tertiary-container/20 border border-primary-container/30 rounded-2xl p-lg">
              <h3 className="font-headline-md text-xl font-bold text-on-background mb-xs">Nhận bài viết mới</h3>
              <p className="text-on-surface-variant text-sm">Đăng ký để nhận thông báo khi có bài viết mới.</p>
              <Link
                to="/blog"
                className="inline-flex mt-md items-center justify-center px-5 py-3 bg-primary-container text-on-primary-container rounded-lg font-button transition-all hover:shadow-md w-full"
              >
                Khám phá thêm bài viết
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
