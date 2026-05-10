import { Star, Lightbulb, Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Blog() {
  const { t } = useTranslation();
  return (
    <div className="w-full">
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
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_EqhZuNhTxn4wag6D0ppYZi0ZIhc7LUNMbMXwL4pESxrABzyrblUCgQQ7qi-dny3BcLfkc08vSDA40ZYO_g5SlY38qTCZBnnEeqS0MgdZQA_FLXGW0wdlVB0SkaDQgYjQCqze0jH9rpuhYH6LbUT704sdlLzoZCT0S6i6N4W9R4nBUwwnSraQHSFUKILvzZYqYCOmtV4gxil7LRW-K6lWNC7b6U4V5uDFzAWFjm2IX9906tLtUrQzCQ64HThKKSvB8m4bqTSVxg" 
              />
            </div>
            {/* 3D Decorative elements simulated with CSS */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr from-primary-container to-primary-fixed rounded-full blur-xl opacity-60 mix-blend-multiply"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-tertiary to-tertiary-container rounded-full blur-2xl opacity-40 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Featured Stories (Bento Grid) */}
      <section className="w-full px-8 md:px-20 py-lg max-w-container-max mx-auto space-y-md">
        <div className="flex items-center gap-sm mb-lg">
          <div className="p-3 bg-surface-container-high rounded-lg text-primary-container shadow-sm">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-background">{t('blog.featured.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-auto md:auto-rows-[300px]">
          {/* Render featured stories from i18n data */}
          {(t('blog.featured.stories', { returnObjects: true }) as any[]).map((story: any, idx: number) => (
            idx === 0 ? (
              // Large Feature Card for first story
              <div key={idx} className="col-span-1 md:col-span-8 md:row-span-2 h-[400px] md:h-full relative group rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.01]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBol_F-vDsMVj43OmIR72PIyZHYhFs9gfiza0pNn8fE1dBnIzBivS0SWKgNUopj06LJ_2Z84J3_migenfDZ2JDkyhLuuhP4nG_B4a6cHpsPuWT3Ycsup7nlJDZXW0sBwHFt3I1EJk8drgdhzH-ESVGVIhnG6uJKYoPZCL6q95Vw-QgXvP5UmGawgyhySXdonhwp567_4_JKikY4qctbnR33ANNZtmQbr8csbLivR-iR9prtWXwhzkrHSn9si57z7OumL_vOwAKfiw" 
                  alt="Minh Trang"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-lg w-full md:w-3/4">
                  <span className="inline-block px-3 py-1 mb-sm bg-primary-container text-on-primary-container rounded-full font-label-bold text-xs uppercase tracking-wider">{story.tag}</span>
                  <h3 className="font-headline-lg text-headline-md text-on-primary mb-sm leading-tight group-hover:text-primary-fixed transition-colors">
                    {story.title}
                  </h3>
                  <p className="font-body-md text-body-md text-surface-container-highest mb-md line-clamp-2">
                    {story.description}
                  </p>
                  <div className="flex items-center gap-sm">
                    <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border-2 border-primary-container">
                      <img 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgV0cvhAQ2sC4Qi2Z-jGnHJkbA4sZM_clxDp3Y2vhdpDConmLyQ4mcg4ODI7OscIu_vMyGXfOlvK7jcToejAj8ZwgH8QTyMhI2mNxVRntKJYpH8lS526XVuini9PavybslKCsFj2nLHoQ5LLRFVzKac2hfk68hYRQ54qL4y3VgXXlYPpP_gLrg5lBnSO4U6-ATRUATIOHYbr6nAchURFk2uNJ3zsAaz0ICUFT8cMgWBqb64__vnP8w0MuZNlAFaE1wqDj_tVW0Dw" 
                        alt="Portrait"
                      />
                    </div>
                    <div>
                      <p className="font-label-bold text-label-bold text-on-primary">{story.author}</p>
                      <p className="text-xs text-surface-dim">{story.university}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Small Feature Cards for subsequent stories
              <div key={idx} className="col-span-1 md:col-span-4 h-[250px] md:h-full relative group rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] bg-surface-container-low border border-outline-variant/30 flex flex-col justify-end p-md hover:bg-surface-container transition-colors">
                <div className="absolute top-md right-md">
                  {idx === 1 && <Lightbulb className="w-8 h-8 text-tertiary-container fill-current" />}
                </div>
                <span className={`inline-block px-3 py-1 mb-xs rounded-full font-label-bold text-[10px] uppercase w-fit ${
                  idx === 1 ? 'bg-tertiary-container/20 text-tertiary' : ''
                }`}>{story.tag}</span>
                <h4 className="font-headline-md text-xl font-bold text-on-background mb-xs leading-snug">
                  {story.title}
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant mb-sm line-clamp-2">
                  {story.description}
                </p>
                <p className="font-label-bold text-xs text-primary">Bởi {story.author} - {story.university}</p>
              </div>
            )
          ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="w-full px-8 md:px-20 py-xl max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-lg border-b border-outline-variant/30 pb-md">
          <h2 className="font-headline-md text-headline-md text-on-background">Bài viết mới nhất</h2>
          {/* Category Filter Pills */}
          <div className="hidden md:flex gap-base">
            <button className="px-4 py-2 bg-primary-container text-on-primary-container rounded-full font-label-bold text-sm shadow-sm transition-all">Tất cả</button>
            <button className="px-4 py-2 bg-surface text-on-surface border border-outline-variant rounded-full font-label-bold text-sm hover:bg-surface-container transition-all">An toàn mạng</button>
            <button className="px-4 py-2 bg-surface text-on-surface border border-outline-variant rounded-full font-label-bold text-sm hover:bg-surface-container transition-all">Sáng tạo nội dung</button>
            <button className="px-4 py-2 bg-surface text-on-surface border border-outline-variant rounded-full font-label-bold text-sm hover:bg-surface-container transition-all">Cân bằng cuộc sống số</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Post Card 1 */}
          <article className="h-full bg-white/40 backdrop-blur-md border border-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col hover:shadow-[0_8px_32px_rgba(0,209,193,0.1)] transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZL4Htvgyu9FUkeV_m2jEep3ocZEpjdY8JOfuca4jPhSPJ44cxHPynuPnPN-l_LYM-g3jSicJidqQsePXRW2Nev6FOZmqmOIyh7xokTw20Me0fK_p6jnvSYk6J-P3QKaEjrKjWTS1GIMRetSJRPjV8VHcW0PELGBaLQ1DN3dK_LH8OH5olSuKN4gssKCqDoIok_7Ln9HbHGT-ls5qZQYsO86Z_h7k6WDc1nlj5j6XAwh3lUI71XoYghmEPqBOIb_QtW2ews07Vcg" 
                alt="Post 1"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-container rounded-full font-label-bold text-xs uppercase shadow-sm">Xu hướng</span>
              </div>
            </div>
            <div className="p-md flex-1 flex flex-col">
              <h3 className="font-headline-md text-xl font-bold text-on-background mb-2 group-hover:text-primary transition-colors">Xây dựng Personal Brand trên LinkedIn cho sinh viên</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-4 flex-1">Bắt đầu từ đâu khi bạn chưa có kinh nghiệm làm việc thực tế? Hướng dẫn từng bước từ profile đến networking.</p>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold text-xs">H</div>
                  <span className="font-label-bold text-xs text-on-surface">Hoàng Nam</span>
                </div>
                <span className="text-xs text-outline font-body-md">5 phút đọc</span>
              </div>
            </div>
          </article>
          
          {/* Post Card 2 */}
          <article className="h-full bg-white/40 backdrop-blur-md border border-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col hover:shadow-[0_8px_32px_rgba(0,209,193,0.1)] transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB45uEoIMZMB7-ZTjUuf7lbCWE5_Pk7W6vsa1yOPd2RLTkkgiVBsuMYUTXCyOoSn4_SqihQ9FTCZcJvuPgAx9x0fy7suBVKwxOgkx27jSBFj3mi9rSvKIQYrSNmp1kgb3MW6WgouCoB-IJ3UbFF6FF6SLZ-OovTxOa6W2ruKJckariBMAKUi2P2SITLEnRbsAeJmmaicef7mcerkhdlG6M7kyDJLKfzSAmW9WFgp329sImMGfO8J3Momdnu1Oceg6p5SRUSpWhcWA" 
                alt="Post 2"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-error rounded-full font-label-bold text-xs uppercase shadow-sm">An toàn mạng</span>
              </div>
            </div>
            <div className="p-md flex-1 flex flex-col">
              <h3 className="font-headline-md text-xl font-bold text-on-background mb-2 group-hover:text-primary transition-colors">Phân biệt Phishing Email tinh vi trong môi trường học thuật</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-4 flex-1">Những mánh khóe lừa đảo nhắm vào sinh viên mùa đóng học phí và cách nhận biết bằng trực giác số.</p>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xs">T</div>
                  <span className="font-label-bold text-xs text-on-surface">Thanh Tú</span>
                </div>
                <span className="text-xs text-outline font-body-md">7 phút đọc</span>
              </div>
            </div>
          </article>

          {/* Post Card 3 */}
          <article className="h-full bg-white/40 backdrop-blur-md border border-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col hover:shadow-[0_8px_32px_rgba(0,209,193,0.1)] transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative bg-surface-container flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/30 to-surface opacity-50"></div>
              <Brain className="w-16 h-16 text-tertiary relative z-10" />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-tertiary rounded-full font-label-bold text-xs uppercase shadow-sm">Cảm nhận</span>
              </div>
            </div>
            <div className="p-md flex-1 flex flex-col">
              <h3 className="font-headline-md text-xl font-bold text-on-background mb-2 group-hover:text-primary transition-colors">Nỗi sợ bị bỏ lỡ (FOMO) và áp lực 'phải năng suất'</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-4 flex-1">Góc nhìn chân thật từ một sinh viên năm cuối về việc học cách nói 'không' với những khóa học online không cần thiết.</p>
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-xs">L</div>
                  <span className="font-label-bold text-xs text-on-surface">Linh Chi</span>
                </div>
                <span className="text-xs text-outline font-body-md">4 phút đọc</span>
              </div>
            </div>
          </article>
        </div>
        <div className="mt-lg flex justify-center">
          <button className="px-6 py-3 border-2 border-primary-container text-primary-container rounded-lg font-button uppercase hover:bg-primary-container/5 transition-colors">
            Tải thêm bài viết
          </button>
        </div>
      </section>
    </div>
  );
}
