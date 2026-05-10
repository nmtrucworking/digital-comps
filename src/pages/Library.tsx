import { Play, Maximize2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { videoContent } from '../data/videoContent';
import { imageGallery } from '../data/imageGallery';

export default function Library() {
  const { t } = useTranslation();
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
        {videoContent[0] && (
          <div key={videoContent[0].id} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-2xl border border-white/50">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={videoContent[0].thumbnailUrl} alt={videoContent[0].title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,209,193,0.5)]">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
              <span className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-3 py-1 rounded-full w-max mb-2">Video</span>
              <h3 className="font-headline-md text-headline-md text-white mb-2">{videoContent[0].title}</h3>
              <p className="font-body-md text-body-md text-white/80">{videoContent[0].description}</p>
            </div>
          </div>
        )}

        {/* Render two image gallery items */}
        {imageGallery.slice(0, 2).map((img) => (
          <div key={img.id} className="relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/50 aspect-square">
            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={img.url} alt={img.altText} />
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
          <div key={v.id} className="relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/50 aspect-video md:col-span-2 lg:col-span-1">
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
          </div>
        ))}
      </section>

      {/* Load More */}
      <div className="flex justify-center mt-md">
        <button className="border-2 border-primary text-primary font-button text-button px-8 py-3 rounded-full hover:bg-primary/5 transition-colors uppercase">
          {t('library.loadMore')}
        </button>
      </div>
    </div>
  );
}
