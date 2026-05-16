import { useState } from 'react';
import { ArrowLeft, Images, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { imageGallery } from '../data/imageGallery';
import type { ImageItem } from '../types/data';

type GalleryImage = {
  id: string;
  url: string;
  altText: string;
  caption?: string;
};

export default function AlbumDetails() {
  const { id } = useParams();
  const album = imageGallery.find((img) => img.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!album) {
    return (
      <div className="w-full bg-gradient-to-b from-background to-surface-dim">
        <section className="w-full px-8 md:px-20 py-xl max-w-container-max mx-auto">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg text-center">
            <h1 className="font-headline-lg text-2xl md:text-3xl text-on-background font-bold mb-sm">Không tìm thấy album</h1>
            <Link to="/library" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container rounded-lg font-button transition-all hover:shadow-md">
              <ArrowLeft className="w-4 h-4" />
              Quay lại Thư viện
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const getGalleryImages = (item: ImageItem): GalleryImage[] => [
    {
      id: item.id,
      url: item.url,
      altText: item.altText,
      caption: item.caption,
    },
    ...(item.subImages ?? []),
  ];

  const activeAlbumImages = getGalleryImages(album);
  const activeGalleryImage = activeAlbumImages[activeImageIndex] ?? activeAlbumImages[0];

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) => (currentIndex - 1 + activeAlbumImages.length) % activeAlbumImages.length);
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % activeAlbumImages.length);
  };

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
              
              <div className="relative w-full aspect-[4/3] bg-black flex items-center justify-center group border-b border-outline-variant/30">
                 <img 
                    className="max-w-full max-h-full object-contain" 
                    src={activeGalleryImage.url} 
                    alt={activeGalleryImage.altText} 
                 />
                 
                 {activeAlbumImages.length > 1 && (
                     <>
                        <button
                          onClick={showPreviousImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:bg-primary opacity-0 group-hover:opacity-100 shadow-lg"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={showNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-3 text-white backdrop-blur-md transition-all hover:bg-primary opacity-0 group-hover:opacity-100 shadow-lg"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                     </>
                 )}
              </div>

              <div className="p-lg md:p-xl">
                 <div className="flex flex-wrap gap-xs mb-sm">
                    <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-full font-label-bold text-xs uppercase tracking-wider shadow-sm">
                        {album.category ?? 'Album Hình ảnh'}
                    </span>
                 </div>
                 <h1 className="font-headline-lg text-2xl md:text-3xl text-on-background font-bold leading-tight mb-md">
                     {activeGalleryImage.caption ?? activeGalleryImage.altText}
                 </h1>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-md">
             {activeAlbumImages.length > 1 && (
                <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg sticky top-24">
                    <h2 className="font-headline-md text-xl text-on-background font-bold mb-md flex items-center gap-2">
                        <Images className="w-5 h-5 text-primary" />
                        Hình ảnh trong album ({activeAlbumImages.length})
                    </h2>
                    <div className="grid grid-cols-3 gap-3">
                        {activeAlbumImages.map((image, index) => (
                            <button
                                key={image.id}
                                onClick={() => setActiveImageIndex(index)}
                                className={`aspect-square overflow-hidden rounded-xl border-2 transition-all ${
                                  index === activeImageIndex ? 'border-primary ring-2 ring-primary/50 opacity-100' : 'border-transparent hover:border-outline-variant/50 opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img className="w-full h-full object-cover" src={image.url} alt={image.altText} loading="lazy" />
                            </button>
                        ))}
                    </div>
                </div>
             )}
          </aside>
        </div>
      </section>
    </div>
  );
}