import { Images, Maximize2, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { videoContent } from '../data/videoContent';
import { imageGallery } from '../data/imageGallery';
import type { ImageItem } from '../types/data';

export default function Library() {
  const { t } = useTranslation();

  const heroVideo = videoContent[3];

  const getAlbumSizeLabel = (item: ImageItem) => {
    const totalImages = 1 + (item.subImages?.length ?? 0);
    return totalImages > 1 ? `${totalImages} ảnh` : '1 ảnh';
  };

  return (
    <div className="flex-grow w-full max-w-[1440px] mx-auto px-8 md:px-20 py-xl flex flex-col gap-lg">
      <section className="flex flex-col items-center text-center gap-md">
        <h1 className="font-display-xl text-display-xl text-on-background relative">
          {t('library.title')}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {t('library.description')}
        </p>
      </section>

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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {heroVideo && (
          <Link
            to={`/library/video/${heroVideo.id}`}
            className="block col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-2xl border border-white/50 text-left"
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
          </Link>
        )}

        {imageGallery.map((img) => (
          <Link
            key={img.id}
            to={`/library/album/${img.id}`}
            className="block relative overflow-hidden rounded-xl border border-white/50 bg-white/20 text-left shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] transition-transform duration-300 hover:-translate-y-1"
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
          </Link>
        ))}

        {videoContent.slice(4).map((v) => (
          <Link
            key={v.id}
            to={`/library/video/${v.id}`}
            className="block relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/50 aspect-video md:col-span-2 lg:col-span-1 text-left"
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
          </Link>
        ))}
      </section>
    </div>
  );
}