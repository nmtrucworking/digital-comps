import { ArrowLeft, Clock, Eye, User } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { videoContent } from '../data/videoContent';

export default function VideoDetails() {
  const { id } = useParams();
  const video = videoContent.find((v) => v.id === id);

  const getEmbeddableVideoUrl = (url?: string) => {
    if (!url) return null;
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (driveMatch?.[1]) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }
    return url;
  };

  const formatViewCount = (count?: number) => {
    if (count == null) return null;
    return new Intl.NumberFormat('vi-VN').format(count);
  };

  if (!video) {
    return (
      <div className="w-full bg-gradient-to-b from-background to-surface-dim">
        <section className="w-full px-8 md:px-20 py-xl max-w-container-max mx-auto">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg text-center">
            <h1 className="font-headline-lg text-2xl md:text-3xl text-on-background font-bold mb-sm">Không tìm thấy video</h1>
            <p className="text-on-surface-variant mb-md">Video này không tồn tại hoặc đã bị xóa.</p>
            <Link to="/library" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container rounded-lg font-button transition-all hover:shadow-md">
              <ArrowLeft className="w-4 h-4" />
              Quay lại Thư viện
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-b from-background to-surface-dim">
      <section className="w-full px-8 md:px-20 py-lg max-w-container-max mx-auto">
        <Link to="/library" className="inline-flex items-center gap-2 text-primary hover:text-primary-container transition-colors font-label-bold">
          <ArrowLeft className="w-4 h-4" />
          Quay lại Thư viện
        </Link>
      </section>

      <section className="w-full px-8 md:px-20 pb-lg max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-8">
            <div className="rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-low shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              {/* iframe container */}
              <div className="relative w-full aspect-video bg-black border-b border-outline-variant/30">
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src={getEmbeddableVideoUrl(video.videoUrl) ?? undefined}
                  title={video.title}
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-lg md:p-xl">
                 <div className="flex flex-wrap gap-xs mb-sm">
                    <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-bold text-xs uppercase tracking-wider shadow-sm">
                        Video
                    </span>
                 </div>
                 <h1 className="font-headline-lg text-2xl md:text-3xl text-on-background font-bold leading-tight mb-md">{video.title}</h1>
                 
                 <div className="flex flex-wrap items-center gap-md text-on-surface-variant mb-md pb-4 border-b border-outline-variant/20">
                   {video.duration && (
                     <div className="flex items-center gap-sm">
                       <Clock className="w-4 h-4" />
                       <span className="font-label-bold text-sm">{video.duration}</span>
                     </div>
                   )}
                   {video.viewCount != null && (
                     <div className="flex items-center gap-sm">
                       <Eye className="w-4 h-4" />
                       <span className="font-label-bold text-sm">{formatViewCount(video.viewCount)} lượt xem</span>
                     </div>
                   )}
                 </div>

                 {video.description && (
                     <p className="text-on-background leading-relaxed my-3">{video.description}</p>
                 )}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-md">
             {video.speakers && video.speakers.length > 0 && (
                <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg">
                    <h2 className="font-headline-md text-xl text-on-background font-bold mb-sm">Diễn giả</h2>
                    <ul className="space-y-2">
                        {video.speakers.map(speaker => (
                            <li key={speaker} className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-outline-variant/20">
                                <User className="w-5 h-5 text-primary" />
                                <span className="text-on-surface font-medium">{speaker}</span>
                            </li>
                        ))}
                    </ul>
                </div>
             )}

             {video.chapters && video.chapters.length > 0 && (
                 <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg">
                    <h2 className="font-headline-md text-xl text-on-background font-bold mb-sm">Nội dung</h2>
                    <ul className="space-y-3">
                        {video.chapters.map(chapter => (
                            <li key={`${chapter.time}-${chapter.title}`} className="flex gap-4 p-3 bg-surface-container rounded-lg border border-outline-variant/20">
                                <span className="text-primary font-label-bold whitespace-nowrap">{chapter.time}</span>
                                <span className="text-on-surface-variant">{chapter.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
             )}

             {video.resources && video.resources.length > 0 && (
                <div className="bg-gradient-to-r from-primary-container/10 to-tertiary-container/10 border border-primary-container/20 rounded-2xl p-lg">
                    <h2 className="font-headline-md text-xl text-on-background font-bold mb-sm">Tài liệu đính kèm</h2>
                    <ul className="space-y-2">
                        {video.resources.map(res => (
                            <li key={res.title}>
                                <a href={res.url} target="_blank" rel="noreferrer" className="text-primary hover:text-tertiary transition-colors underline font-medium">
                                    {res.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
             )}
          </aside>
        </div>
      </section>
    </div>
  );
}