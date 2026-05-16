import { useState } from 'react';
import { Images, Maximize2, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { videoContent } from '../data/videoContent';
import { imageGallery } from '../data/imageGallery';
import type { ImageItem } from '../types/data';

type FilterType = 'all' | 'video' | 'image';

export default function Library() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Khai báo video nổi bật (Hero Video)
  const heroVideo = videoContent[3];
  
  // Lọc danh sách video loại trừ hero video
  const remainingVideos = videoContent.filter(v => v.id !== heroVideo?.id);

  const getAlbumSizeLabel = (item: ImageItem) => {
    const totalImages = 1 + (item.subImages?.length ?? 0);
    return totalImages > 1 ? `${totalImages} ảnh` : '1 ảnh';
  };

  const activeBtnClass = "px-6 py-2.5 rounded-full font-label-bold text-label-bold bg-primary text-on-primary shadow-md transition-all";
  const inactiveBtnClass = "px-6 py-2.5 rounded-full font-label-bold text-label-bold bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors";

  return (
    <div className="flex-grow w-full max-w-[1440px] mx-auto px-8 md:px-20 py-xl flex flex-col gap-lg">
      {/* Tiêu đề & Mô tả */}
      <section className="flex flex-col items-center text-center gap-md mb-8">
        <h1 className="font-display-xl text-display-xl text-on-background relative">
          {t('library.title')}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {t('library.description')}
        </p>
      </section>

      {/* Cụm Nút Lọc (Filter) */}
      <section className="flex justify-center gap-4 mb-8">
        <button 
          onClick={() => setActiveFilter('all')} 
          className={activeFilter === 'all' ? activeBtnClass : inactiveBtnClass}
        >
          {t('library.filters.all')}
        </button>
        <button 
          onClick={() => setActiveFilter('video')} 
          className={activeFilter === 'video' ? activeBtnClass : inactiveBtnClass}
        >
          {t('library.filters.video')}
        </button>
        <button 
          onClick={() => setActiveFilter('image')} 
          className={activeFilter === 'image' ? activeBtnClass : inactiveBtnClass}
        >
          {t('library.filters.image')}
        </button>
      </section>

      {/* KHU VỰC 1: VIDEO NỔI BẬT (Chỉ hiện khi chọn 'Tất cả' hoặc 'Video') */}
      {(activeFilter === 'all' || activeFilter === 'video') && heroVideo && (
        <section className="mb-12">
          <Link
            to={`/library/video/${heroVideo.id}`}
            className="block relative rounded-2xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.15)] group cursor-pointer bg-surface border border-outline-variant/50 w-full aspect-video md:aspect-[21/9] text-left"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={heroVideo.thumbnailUrl}
              alt={heroVideo.title}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-primary/80 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,209,193,0.6)]">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-on-primary fill-current ml-1" />
              </div>
              <span className="bg-primary text-on-primary font-label-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full w-max mb-3">Video Nổi bật</span>
              <h3 className="font-headline-lg text-2xl md:text-4xl text-white font-bold mb-2 md:w-2/3">{heroVideo.title}</h3>
              <p className="font-body-md text-white/80 line-clamp-2 md:w-2/3">{heroVideo.description}</p>
            </div>
          </Link>
        </section>
      )}

      {/* KHU VỰC 2: ALBUM HÌNH ẢNH (Chỉ hiện khi chọn 'Tất cả' hoặc 'Hình ảnh') */}
      {(activeFilter === 'all' || activeFilter === 'image') && imageGallery.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline-md text-2xl font-bold text-on-background flex items-center gap-2">
              <Images className="w-6 h-6 text-primary" />
              Album & Hình Ảnh
            </h2>
          </div>
          {/* Lưới hình ảnh chuẩn hóa tỷ lệ 1:1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {imageGallery.map((img) => (
              <Link
                key={img.id}
                to={`/library/album/${img.id}`}
                className="block relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container text-left shadow-sm hover:shadow-[0_8px_24px_rgba(0,209,193,0.12)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative aspect-square">
                  <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={img.url} alt={img.altText} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      <Images className="h-3.5 w-3.5" />
                      Album
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="mb-2 inline-block rounded-full bg-primary/20 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-primary uppercase border border-primary/20">
                      {img.category ?? 'Hình ảnh'}
                    </span>
                    <h4 className="line-clamp-2 font-body-lg text-base font-semibold text-white">{img.caption ?? img.altText}</h4>
                    <div className="flex items-center justify-between mt-2">
                       <span className="text-white/70 text-xs font-medium">{getAlbumSizeLabel(img)}</span>
                       <Maximize2 className="h-4 w-4 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* KHU VỰC 3: DANH SÁCH VIDEO (Chỉ hiện khi chọn 'Tất cả' hoặc 'Video') */}
      {(activeFilter === 'all' || activeFilter === 'video') && remainingVideos.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline-md text-2xl font-bold text-on-background flex items-center gap-2">
              <Play className="w-6 h-6 text-primary" />
              Video Khác
            </h2>
          </div>
          {/* Lưới video chuẩn hóa tỷ lệ 16:9 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingVideos.map((v) => (
              <Link
                key={v.id}
                to={`/library/video/${v.id}`}
                className="block relative rounded-xl overflow-hidden shadow-sm hover:shadow-[0_8px_24px_rgba(0,209,193,0.12)] transition-all duration-300 group cursor-pointer bg-surface-container border border-outline-variant/30 text-left hover:-translate-y-1"
              >
                <div className="relative aspect-video">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={v.thumbnailUrl} alt={v.title} loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/70 text-white font-label-bold text-xs px-2 py-1 rounded backdrop-blur-md">
                      {v.duration}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-primary/80 group-hover:border-primary transition-all">
                      <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-outline-variant/20">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">Video</span>
                  <h4 className="font-body-lg text-on-surface font-bold line-clamp-2 leading-snug">{v.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}