import { Star, Lightbulb, Calendar, User, ArrowRight, Search, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { blogPosts } from '../data/blogPosts';

// Calculate reading time based on word count
const calculateReadingTime = (text?: string): number => {
  if (!text) return 5;
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

// Format date in Vietnamese
const formatDate = (dateString?: string): string => {
  if (!dateString) return 'Ngày không xác định';
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
};

export default function Blog() {
  const { t } = useTranslation();
  const [selectedTag, setSelectedTag] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique tags
  const allTags = ['Tất cả', ...new Set(blogPosts.flatMap(post => post.tags || []))];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesTag = selectedTag === 'Tất cả' || post.tags?.includes(selectedTag);
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredPosts = filteredPosts.slice(0, 3);

  return (
    <div className="w-full bg-gradient-to-b from-background to-surface-dim">
      {/* Hero Section */}
      <section className="w-full px-8 md:px-20 py-xl max-w-container-max mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high via-surface to-background -z-10 rounded-xl opacity-50 blur-3xl"></div>
        <div className="flex flex-col md:flex-row gap-gutter items-center">
          <div className="w-full md:w-1/2 space-y-md">
            <h1 className="font-display-xl text-display-xl text-on-background relative z-10">
              {t('blog.hero.title')} <span className="text-primary-container relative">{t('blog.hero.titleHighlight')}
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-tertiary-container/40 -z-10" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <path d="M0 10 Q50 20 100 10" fill="none" stroke="currentColor" strokeWidth="8"></path>
                </svg>
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {t('blog.hero.description')}
            </p>
            <div className="flex flex-wrap gap-sm pt-sm">
              {(t('blog.hero.tags', { returnObjects: true }) as string[]).map((tag: string, idx: number) => (
                <span key={idx} className={`px-4 py-2 rounded-full font-label-bold text-label-bold ${
                  idx === 0 ? 'bg-primary-container/10 text-primary-container' :
                  idx === 1 ? 'bg-tertiary-container/20 text-tertiary' :
                  'bg-secondary-container/10 text-secondary-container'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px]">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-xl border border-white/40 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
              <img 
                alt="Student blogging" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80" 
                src="../assets/images/blog-hero_sec.png" 
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr from-primary-container to-primary-fixed rounded-full blur-xl opacity-60 mix-blend-multiply"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-tertiary to-tertiary-container rounded-full blur-2xl opacity-40 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="w-full px-8 md:px-20 py-lg max-w-container-max mx-auto space-y-md">
        <div className="flex items-center gap-sm mb-lg">
          <div className="p-3 bg-surface-container-high rounded-lg text-primary-container shadow-sm">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-background">Bài viết nổi bật</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-auto md:auto-rows-[300px]">
          {featuredPosts.length > 0 ? (
            featuredPosts.map((post, idx) => (
              idx === 0 ? (
                <div key={post.id} className="col-span-1 md:col-span-8 md:row-span-2 h-[400px] md:h-full relative group rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] cursor-pointer">
                  <img 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={post.thumbnail || 'https://via.placeholder.com/1200x675?text=Featured+Post'} 
                    alt={post.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-background/95 via-on-background/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-lg w-full">
                    <div className="flex flex-wrap gap-xs mb-md">
                      {post.tags?.slice(0, 2).map((tag, i) => (
                        <span key={i} className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-full font-label-bold text-xs uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-headline-lg text-2xl md:text-3xl text-on-primary mb-sm leading-tight font-bold">
                      {post.title}
                    </h3>
                    <p className="font-body-md text-body-md text-surface-container-highest mb-md line-clamp-2">
                      {post.summary}
                    </p>
                    <div className="flex items-center gap-md">
                      <div className="flex items-center gap-sm">
                        <User className="w-4 h-4 text-surface-dim" />
                        <span className="font-label-bold text-sm text-on-primary">{post.author || 'Tác giả'}</span>
                      </div>
                      <div className="flex items-center gap-sm">
                        <Calendar className="w-4 h-4 text-surface-dim" />
                        <span className="font-label-bold text-sm text-on-primary">{formatDate(post.publishedDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={post.id} className="col-span-1 md:col-span-4 h-[250px] md:h-full relative group rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] bg-surface-container-low border border-outline-variant/30 flex flex-col justify-end p-md hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:bg-surface-container transition-all cursor-pointer">
                  {post.tags && post.tags.length > 0 && (
                    <div className="absolute top-md right-md">
                      <span className="inline-block px-2 py-1 bg-tertiary-container/20 text-tertiary rounded-full font-label-bold text-[10px] uppercase">
                        {post.tags[0]}
                      </span>
                    </div>
                  )}
                  <h4 className="font-headline-md text-lg font-bold text-on-background mb-xs leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant mb-md line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between pt-md border-t border-outline-variant/20">
                    <span className="font-label-bold text-xs text-on-surface">Bởi {post.author || 'Tác giả'}</span>
                    <span className="text-xs text-primary font-semibold">→</span>
                  </div>
                </div>
              )
            ))
          ) : (
            <div className="col-span-1 md:col-span-12 py-lg text-center">
              <p className="text-on-surface-variant">Không có bài viết nào.</p>
            </div>
          )}
        </div>
      </section>

      {/* All Posts */}
      <section className="w-full px-8 md:px-20 py-xl max-w-container-max mx-auto">
        <div className="mb-lg space-y-md">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-lg text-2xl md:text-3xl text-on-background font-bold">Bài viết mới nhất</h2>
            <span className="text-sm text-on-surface-variant">{filteredPosts.length} bài viết</span>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-outline-variant bg-surface-container placeholder-on-surface-variant text-on-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full font-label-bold text-sm transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-primary-container text-on-primary-container shadow-md'
                    : 'bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-lg">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.id} className="h-full bg-surface-container-low rounded-xl overflow-hidden flex flex-col hover:shadow-[0_12px_48px_rgba(0,209,193,0.15)] transition-all duration-300 group border border-outline-variant/30 hover:border-primary/50">
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-surface-container to-surface">
                  {post.thumbnail ? (
                    <img 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      src={post.thumbnail} 
                      alt={post.title}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-surface-container-high">
                      <Lightbulb className="w-12 h-12 text-surface-dim opacity-50" />
                    </div>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1.5 bg-primary-container/90 backdrop-blur-sm text-on-primary-container rounded-full font-label-bold text-xs uppercase shadow-sm">
                        {post.tags[0]}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-md flex-1 flex flex-col">
                  <h3 className="font-headline-md text-lg font-bold text-on-background mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant mb-4 flex-1 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20 mt-auto">
                    <div className="flex flex-col gap-1">
                      <p className="font-label-bold text-xs text-on-surface flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {post.author || 'Tác giả'}
                      </p>
                      <p className="text-xs text-on-surface-variant">{formatDate(post.publishedDate)}</p>
                    </div>
                    <span className="text-xs font-semibold text-primary-container bg-primary-container/10 px-2 py-1 rounded-full">
                      {calculateReadingTime(post.summary)} phút
                    </span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-xl text-center">
              <div className="flex flex-col items-center gap-md">
                <Search className="w-12 h-12 text-on-surface-variant opacity-30" />
                <div>
                  <p className="text-on-surface-variant font-body-md">Không tìm thấy bài viết</p>
                  <p className="text-sm text-on-surface-variant/70">Hãy thử tìm kiếm hoặc lọc khác</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Load More */}
        {filteredPosts.length > 0 && filteredPosts.length < blogPosts.length && (
          <div className="flex justify-center">
            <button className="px-8 py-3 border-2 border-primary-container text-primary-container rounded-lg font-button uppercase hover:bg-primary-container/10 transition-all duration-200 flex items-center gap-2">
              Tải thêm bài viết
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="w-full px-8 md:px-20 py-xl max-w-container-max mx-auto">
        <div className="bg-gradient-to-r from-primary-container/20 to-tertiary-container/20 border border-primary-container/30 rounded-2xl p-lg md:p-xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-md">
            <div className="flex-1">
              <h3 className="font-headline-md text-2xl font-bold text-on-background mb-sm">
                Cập nhật bài viết mới
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Đăng ký nhận thông báo khi có bài viết mới về kỹ năng số và an toàn mạng.
              </p>
            </div>
            <div className="w-full md:w-auto flex gap-xs">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="px-4 py-3 rounded-lg bg-surface-container border border-outline-variant text-on-background placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button className="px-6 py-3 bg-primary-container text-on-primary-container rounded-lg font-button transition-all hover:shadow-md flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Đăng ký</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
