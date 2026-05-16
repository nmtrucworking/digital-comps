import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Images, Maximize2, Play, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { videoContent } from '../data/videoContent';
import { imageGallery } from '../data/imageGallery';
import type { ImageItem, Video } from '../types/data';

type GalleryImage = {
  id: string;
  url: string;
  altText: string;
  caption?: string;
};

export default function Library() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<ImageItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const heroVideo = videoContent[3];

  useEffect(() => {
    if (!activeVideo && !activeAlbum) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeAlbum, activeVideo]);

  const getGalleryImages = (item: ImageItem): GalleryImage[] => [
    {
      id: item.id,
      url: item.url,
      altText: item.altText,
      caption: item.caption,
    },
    ...(item.subImages ?? []),
  ];

  const getAlbumSizeLabel = (item: ImageItem) => {
    const totalImages = getGalleryImages(item).length;
    return totalImages > 1 ? `${totalImages} ảnh` : '1 ảnh';
  };

  const activeAlbumImages = activeAlbum ? getGalleryImages(activeAlbum) : [];
  const activeGalleryImage = activeAlbumImages[activeImageIndex] ?? activeAlbumImages[0];

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

  const closeImage = () => {
    setActiveAlbum(null);
    setActiveImageIndex(0);
  };

  const openAlbum = (item: ImageItem) => {
    setActiveAlbum(item);
    setActiveImageIndex(0);
  };

  const showPreviousImage = () => {
    if (!activeAlbumImages.length) {
      return;
    }

    setActiveImageIndex((currentIndex) => (currentIndex - 1 + activeAlbumImages.length) % activeAlbumImages.length);
  };

  const showNextImage = () => {
    if (!activeAlbumImages.length) {
      return;
    }

    setActiveImageIndex((currentIndex) => (currentIndex + 1) % activeAlbumImages.length);
  };

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

        {/* Render image gallery items */}
        {imageGallery.map((img) => (
          <button
            key={img.id}
            type="button"
            onClick={() => openAlbum(img)}
            className="relative overflow-hidden rounded-xl border border-white/50 bg-white/20 text-left shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-square">
              <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={img.url} alt={img.altText} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <Images className="h-3.5 w-3.5" />
                  Album
                </span>
                {img.subImages?.length ? (
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {getAlbumSizeLabel(img)}
                  </span>
                ) : null}
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
                <div className="min-w-0">
                  <span className="mb-2 inline-block rounded-full bg-primary-container px-2 py-1 text-xs font-semibold text-on-primary-container">
                    {img.category ?? 'Hình ảnh'}
                  </span>
                  <h4 className="line-clamp-2 font-body-lg text-body-lg font-semibold text-white">{img.caption ?? img.altText}</h4>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <Maximize2 className="h-5 w-5 text-white/90" />
                  {img.subImages?.length ? (
                    <div className="flex items-center -space-x-2">
                      {img.subImages.slice(0, 3).map((subImage) => (
                        <img
                          key={subImage.id}
                          src={subImage.url}
                          alt={subImage.altText}
                          loading="lazy"
                          className="h-8 w-8 rounded-full border-2 border-slate-950 object-cover"
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {img.subImages?.length ? (
              <div className="flex items-center gap-2 border-t border-white/10 bg-slate-950/70 px-4 py-3 text-xs text-white/75 backdrop-blur-md">
                {img.subImages.slice(0, 2).map((subImage) => (
                  <span key={subImage.id} className="truncate rounded-full bg-white/5 px-2 py-1">
                    {subImage.caption ?? subImage.altText}
                  </span>
                ))}
              </div>
            ) : null}
          </button>
        ))}

        {/* Render next video thumbnails */}
        {videoContent.slice(4).map((v) => (
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

      {activeAlbum && activeGalleryImage
        ? createPortal(
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8" onClick={closeImage}>
              <div
                className="flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden rounded-none border-0 bg-slate-950 shadow-[0_24px_120px_rgba(0,0,0,0.45)] md:h-auto md:max-h-[calc(100dvh-4rem)] md:rounded-3xl md:border md:border-white/15 md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex min-h-0 flex-[1.6] items-center justify-center bg-black p-4 md:p-6">
                  <div className="relative w-full">
                    <img className="max-h-[calc(100dvh-8rem)] w-full rounded-2xl object-contain" src={activeGalleryImage.url} alt={activeGalleryImage.altText} />
                    {activeAlbumImages.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={showPreviousImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-3 text-white backdrop-blur-md transition-colors hover:bg-black/70"
                          aria-label="Ảnh trước"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={showNextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-3 text-white backdrop-blur-md transition-colors hover:bg-black/70"
                          aria-label="Ảnh tiếp theo"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>

                <aside className="flex min-h-0 flex-[0.9] flex-col border-t border-white/10 bg-white/5 md:border-l md:border-t-0">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white md:px-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/50">Hình ảnh</p>
                      <h3 className="mt-1 line-clamp-1 text-lg font-semibold md:text-xl">{activeGalleryImage.caption ?? activeGalleryImage.altText}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={closeImage}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    >
                      <X className="h-4 w-4" />
                      Đóng
                    </button>
                  </div>

                  <div className="min-h-0 flex-1 overflow-y-auto p-5 md:p-6">
                    <div className="space-y-4 text-white">
                      <div>
                        <span className="inline-flex rounded-full bg-primary-container px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-on-primary-container">
                          {activeAlbum.category ?? 'Hình ảnh'}
                        </span>
                        <p className="mt-4 text-sm leading-6 text-white/75 md:text-base">{activeGalleryImage.altText}</p>
                      </div>
                      {activeAlbumImages.length > 1 ? (
                        <div>
                          <h5 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">Các ảnh trong album</h5>
                          <div className="mt-3 grid grid-cols-3 gap-2">
                            {activeAlbumImages.map((image, index) => (
                              <button
                                key={image.id}
                                type="button"
                                onClick={() => setActiveImageIndex(index)}
                                className={`overflow-hidden rounded-xl border transition-all ${
                                  index === activeImageIndex ? 'border-secondary-container ring-2 ring-secondary-container/50' : 'border-white/10'
                                }`}
                              >
                                <img className="h-20 w-full object-cover" src={image.url} alt={image.altText} loading="lazy" />
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : null}
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/80">
                        Nhấn bên ngoài ảnh hoặc nút Đóng để quay lại thư viện. Nếu album có nhiều ảnh, bạn có thể dùng nút mũi tên hoặc thumbnail để chuyển ảnh.
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>,
            document.body,
          )
        : null}

      {/* Load More */}
      {/* <div className="flex justify-center mt-md">
        <button className="border-2 border-primary text-primary font-button text-button px-8 py-3 rounded-full hover:bg-primary/5 transition-colors uppercase">
          {t('library.loadMore')}
        </button>
      </div> */}
    </div>
  );
}
