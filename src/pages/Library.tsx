import { Play, Maximize2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

      {/* Gallery Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Video Item 1 (Bento style large) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-2xl border border-white/50">
          <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVSZs53VF_LuHS0xKXTirtDv264Q2fQ6r_7Ypfhd6iNxxuO4Tw2-LARU4u2X_-VK4pfSbgCZcBX-8jcEtyIWdIvLnA08ey1H9q21ABbgRrLL2R25e4MksK0DzgvR0dCKQTmmDE5hfOfJkVEJUhs9VbpIL1GB1DMZVADkxXt_fdGEXHLlL71LBeS80YfK1XpUh963QqtCtGGsfnzrl1w4c7z4E2gNOFx51Q08CpjVJmYlQXj8k_Q6mqgY1cEN-7LQxCUVkDNjVp0w" 
            alt="Video thumbnail 1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,209,193,0.5)]">
              <Play className="w-8 h-8 text-white fill-current" />
            </div>
            <span className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-3 py-1 rounded-full w-max mb-2">Video</span>
            <h3 className="font-headline-md text-headline-md text-white mb-2">Toạ đàm: Sinh viên và An toàn không gian mạng</h3>
            <p className="font-body-md text-body-md text-white/80">Sự kiện thu hút hơn 500 sinh viên tham gia với các diễn giả hàng đầu.</p>
          </div>
        </div>

        {/* Image Item 1 */}
        <div className="relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/50 aspect-square">
          <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvNiZ_Eg-jINIChpXjAjTow79wJiALgiAEu9C6yYV4Q7KV0GEWN6MCPfP9B877v1DYLfnkovQn_4Jk5cT6R4RuBdBrblBibEMbFSF5e0Fnx3GhAPycxI8-dE9y5UN3OTtUbkEmWRDqBZA3Is-a8WDZULTqOeyfCnl2pVozls6TepYQM08gQ_DCFrUROp23OYoEuFQj5yJ2feNLd1VajJPolY0Bfze8o827jIZXWUOLwGmBRnvFEdPHg-E6pyal0sjQkJGvzYUW0w" 
            alt="Gallery image 1"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Maximize2 className="w-8 h-8 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
            <span className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-2 py-1 rounded-full text-xs w-max mb-1 inline-block">Hình ảnh</span>
            <h4 className="font-body-lg text-body-lg text-white font-semibold">Giao diện ứng dụng mới</h4>
          </div>
        </div>

        {/* Image Item 2 */}
        <div className="relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/50 aspect-square">
          <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCykSWRaKbtCVffQbwLpouE05UR9wjiY4hvROzw6cFBN8ODM6lyR9ROe4bSKpTPrjxwOsEBEqr-GZEnq2WyeTr0eFy-VSQgHIA-ra6LHjLhOUJyBt78dmgxK6LvqRoRlt_tl89GSV3NeFYcexgB1CGpjc8saUuvEZhXFz_VxellL7itogavk4-1dkIYcDauckUneFROrkXElcLJn4uQaDGemzWI07cJ7fhSFUzVR6sSoH-nYUo1XxKCxSpA8iC6brVYfUbfbiCE3Q" 
            alt="Gallery image 2"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Maximize2 className="w-8 h-8 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
            <span className="bg-primary-container text-on-primary-container font-label-bold text-label-bold px-2 py-1 rounded-full text-xs w-max mb-1 inline-block">Hình ảnh</span>
            <h4 className="font-body-lg text-body-lg text-white font-semibold">Hoạt động nhóm</h4>
          </div>
        </div>

        {/* Video Item 2 */}
        <div className="relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/50 aspect-video md:col-span-2 lg:col-span-1">
          <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOrJyxpNmu9uKER70_A2nsULVbFKHwLCRDMRCPbqLLDxCpc_bO0xj-e16Pg-UU6C3o2LSaUm4kvykMECXqx6E25wIFRRUxy5IgBIW16qfdB4rG49bybgoKEOU5HDQXzZhiMfnAKq9OY7ig0B2jF4uZ3HChhA5DqC-bgyFnBvla5StUmJi60RWU41EwulEfe75esWd-hQFgf6o6FJsX0hTTGFjmpplCTqonQkLTHo2ORXrDlPKy3UrbOpdsYj84d-beXWIvg6fhnQ" 
            alt="Video thumbnail 2"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4">
            <div className="flex justify-end">
              <span className="bg-black/50 text-white font-label-bold text-label-bold px-2 py-1 rounded text-xs">03:45</span>
            </div>
            <div className="self-center w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <span className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-2 py-1 rounded-full text-xs w-max mb-1 inline-block">Video</span>
              <h4 className="font-body-lg text-body-lg text-white font-semibold line-clamp-1">Hướng dẫn bảo mật cơ bản</h4>
            </div>
          </div>
        </div>

        {/* Video Item 3 */}
        <div className="relative rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] group cursor-pointer bg-white/20 backdrop-blur-xl border border-white/50 aspect-video md:col-span-2">
          <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGX_hfHVkr_lbL_LecqTzuDQ99MgywA4ojeDFQqpaduT8mH8-4CQlu4z5chS3QHHdsmo6fOC-4CJJMOR7-5l2kdlU3ltEQGG2Vw6AsFE4oZ4cxOeqaa-9zfI828H3gODshCE9BWh084D_sm1EuzQBHfGY5o-z-rNxvzEQN3SxdQF3DegmBmsJ_S6VrPjJ0SGpzv_SNl-mldoIy0F8EEK2OQznzHmcW2tNYj0gU1mEC2CWHXJGWrs5x9hv-6vL7XAyJk1SMl6D6sQ" 
            alt="Video thumbnail 3"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4 md:p-6">
            <div className="flex justify-end">
              <span className="bg-black/50 text-white font-label-bold text-label-bold px-2 py-1 rounded text-xs">12:20</span>
            </div>
            <div className="self-center w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-current" />
            </div>
            <div>
              <span className="bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-3 py-1 rounded-full text-xs w-max mb-2 inline-block">Video</span>
              <h4 className="font-headline-md text-headline-md text-white line-clamp-1">Cuộc thi Sáng tạo nội dung số 2024</h4>
            </div>
          </div>
        </div>
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
