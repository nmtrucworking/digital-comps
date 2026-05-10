import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Play, Maximize2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { videoContent } from '../data/videoContent';
import { imageGallery } from '../data/imageGallery';
import type { Video } from '../types/data';

export default function Library() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const heroVideo = videoContent[0];

  useEffect(() => {
    if (!activeVideo) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeVideo]);

  const getEmbeddableVideoUrl = (url?: string) => {
    if (!url) {
      return null;
    }

    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (driveMatch?.[1]) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }

    return url;
  };

  const openVideo = (url?: string) => {
    const previewUrl = getEmbeddableVideoUrl(url);
    if (previewUrl) {
      const selectedVideo = videoContent.find((video) => getEmbeddableVideoUrl(video.videoUrl) === previewUrl);
      setActiveVideo(selectedVideo ?? null);
    }
  };

  const closeVideo = () => setActiveVideo(null);

  const formatViewCount = (count?: number) => {
    if (count == null) {
      return null;
    }

    return new Intl.NumberFormat('vi-VN').format(count);
  };

  return (
    <div className="flex-grow w-full max-w-[1440px] mx-auto px-8 md:px-20 py-xl flex flex-col gap-lg">
      {/* Header Section */}
      <section className="flex flex-col items-center text-center gap-md">
        <h1 className="font-display-xl text-display-xl text-on-background relative">
          {t('library.title')}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {t('library.description')}
        </p>
      </section>

      {/* Filters / Tabs */}
      <section className="flex justify-center gap-sm">
        <button className="px-6 py-2 rounded-full font-label-bold text-label-bold bg-primary-container text-on-primary shadow-md">
          {t('library.filters.all')}
        </button>
        <button className="px-6 py-2 rounded-full font-label-bold text-label-bold bg-primary-container/10 text-primary-container hover:bg-primary-container/20 transition-colors">
          {t('library.filters.video')}
        </button>
        <button className="px-6 py-2 rounded-full font-label-bold text-label-bold bg-primary-container/10 text-primary-container hover:bg-primary-container/20 transition-colors">
          {t('library.filters.image')}
        </button>
      </section>

      {/* Gallery Grid (rendered from typed data) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Large video (first videoContent item) */}
        {heroVideo && (
          <button
            type="button"
            key={heroVideo.id}
            onClick={() => openVideo(heroVideo.videoUrl)}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-2xl border border-white/50 text-left"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={heroVideo.thumbnailUrl}
              alt={heroVideo.title}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,209,193,0.5)]">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
              <span className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-3 py-1 rounded-full w-max mb-2">Video</span>
              <h3 className="font-headline-md text-headline-md text-white mb-2">{heroVideo.title}</h3>
              <p className="font-body-md text-body-md text-white/80">{heroVideo.description}</p>
            </div>
          </button>
        )}

        {/* Render two image gallery items */}
        {imageGallery.slice(0, 2).map((img) => (
          <div key={img.id} className="relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/50 aspect-square">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={img.url} alt={img.altText} loading="lazy" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Maximize2 className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <span className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-2 py-1 rounded-full text-xs w-max mb-1 inline-block">Hình ảnh</span>
              <h4 className="font-body-lg text-body-lg text-white font-semibold">{img.caption}</h4>
            </div>
          </div>
        ))}

        {/* Render next video thumbnails */}
        {videoContent.slice(1).map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => openVideo(v.videoUrl)}
            className="relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/50 aspect-video md:col-span-2 lg:col-span-1 text-left"
          >
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={v.thumbnailUrl} alt={v.title} />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4">
              <div className="flex justify-end">
                <span className="bg-black/50 text-white font-label-bold text-label-bold px-2 py-1 rounded text-xs">{v.duration}</span>
              </div>
              <div className="self-center w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <span className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-2 py-1 rounded-full text-xs w-max mb-1 inline-block">Video</span>
                <h4 className="font-body-lg text-body-lg text-white font-semibold line-clamp-1">{v.title}</h4>
              </div>
            </div>
          </button>
        ))}
      </section>

      {activeVideo
        ? createPortal(
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md md:p-8" onClick={closeVideo}>
              <div
                className="flex h-[100dvh] w-full max-w-7xl flex-col overflow-hidden rounded-none border-0 bg-slate-950 shadow-[0_24px_120px_rgba(0,0,0,0.45)] md:h-auto md:max-h-[calc(100dvh-4rem)] md:rounded-3xl md:border md:border-white/15 md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex min-h-0 flex-[1.7] flex-col bg-black">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white/90 md:px-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/50">Video</p>
                      <h3 className="mt-1 line-clamp-1 text-lg font-semibold md:text-xl">{activeVideo.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={closeVideo}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    >
                      Đóng
                    </button>
                  </div>
                  <div className="relative flex-1 bg-black">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={getEmbeddableVideoUrl(activeVideo.videoUrl) ?? undefined}
                      title={activeVideo.title}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <aside className="flex min-h-0 flex-[1] flex-col border-t border-white/10 bg-white/5 md:border-l md:border-t-0">
                  <div className="min-h-0 flex-1 overflow-y-auto p-5 md:p-6">
                    <div className="space-y-5 text-white">
                      <div>
                        <span className="inline-flex rounded-full bg-secondary-container px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-on-secondary-container">
                          Thông tin video
                        </span>
                        <h4 className="mt-3 text-2xl font-semibold leading-tight">{activeVideo.title}</h4>
                        {activeVideo.description && (
                          <p className="mt-3 text-sm leading-6 text-white/75 md:text-base">{activeVideo.description}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
                        {activeVideo.duration && (
                          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <div className="text-white/50">Thời lượng</div>
                            <div className="mt-1 text-base font-semibold text-white">{activeVideo.duration}</div>
                          </div>
                        )}
                        {formatViewCount(activeVideo.viewCount) && (
                          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <div className="text-white/50">Lượt xem</div>
                            <div className="mt-1 text-base font-semibold text-white">{formatViewCount(activeVideo.viewCount)}</div>
                          </div>
                        )}
                      </div>

                      {activeVideo.speakers?.length ? (
                        <div>
                          <h5 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">Diễn giả</h5>
                          <ul className="mt-3 space-y-2 text-sm text-white/85">
                            {activeVideo.speakers.map((speaker) => (
                              <li key={speaker} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                                {speaker}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {activeVideo.chapters?.length ? (
                        <div>
                          <h5 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">Nội dung</h5>
                          <ul className="mt-3 space-y-2 text-sm text-white/85">
                            {activeVideo.chapters.map((chapter) => (
                              <li key={`${chapter.time}-${chapter.title}`} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                                <div className="font-semibold text-white">{chapter.time}</div>
                                <div className="mt-1 text-white/75">{chapter.title}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {activeVideo.resources?.length ? (
                        <div>
                          <h5 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">Tài liệu</h5>
                          <ul className="mt-3 space-y-2 text-sm text-white/85">
                            {activeVideo.resources.map((resource) => (
                              <li key={resource.title} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                                <a className="font-medium text-white transition-colors hover:text-secondary-container" href={resource.url} target="_blank" rel="noreferrer">
                                  {resource.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </aside>
              </div>
            </div>,
            document.body,
          )
        : null}

      {/* Load More */}
      <div className="flex justify-center mt-md">
        <button className="border-2 border-primary text-primary font-button text-button px-8 py-3 rounded-full hover:bg-primary/5 transition-colors uppercase">
          {t('library.loadMore')}
        </button>
      </div>
    </div>
  );
}
