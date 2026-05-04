import { Rocket, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-xl pb-lg px-8 md:px-20 max-w-container-max mx-auto w-full flex flex-col md:flex-row items-center gap-gutter min-h-[819px]">
        <div className="flex-1 flex flex-col gap-md z-10">
          <span className="bg-primary-container/10 text-primary-container font-label-bold text-label-bold px-4 py-2 rounded-full w-max inline-flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            Dự án Dành cho Sinh viên Việt Nam
          </span>
          <h1 className="font-display-xl text-display-xl text-on-surface">
            Công dân số trong kỷ nguyên mạng xã hội
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Định hình lại cách chúng ta tương tác, học tập và phát triển trong không gian số. Trang bị những kỹ năng thiết yếu để trở thành một công dân mạng văn minh, an toàn và sáng tạo.
          </p>
          <div className="flex gap-4 mt-sm">
            <Link to="/opportunities" className="bg-gradient-to-r from-tertiary to-primary-container text-on-primary font-button text-button uppercase px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(120,37,234,0.39)] hover:shadow-[0_6px_20px_rgba(120,37,234,0.23)] transition-all flex items-center gap-2">
              Khám phá ngay
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-primary-container text-primary-container font-button text-button uppercase px-8 py-4 rounded-full hover:bg-primary-container/10 transition-all flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Xem Video
            </button>
          </div>
        </div>
        <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
          {/* 3D Graphic Placeholder */}
          <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
            <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-[100px]"></div>
            <img 
              alt="3D Network Globe" 
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,209,193,0.3)] animate-pulse" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB25uwapFFbqubKka10jq1MtLAp9aIcVb1dxFoDQw6YQfK1rBKcca3gjyfVg6caeEETwUGsqeWxQUe9IBSao1fnWEZo3O6qkgTXL1-bvF4uTF2CZ1oqEK0nDFtATxdIxiDQxOcobJyfKbOz-QZZVz1HtJtSAmIAnoDDwn4sBX2KW-TmUvz3kYyocGhaeDDXlRSj887Y8xjw-vTDfs8BdPN4hb1n8R8zBOTaljRJJ2gOXHlGgWoDK6gBcEO9-aUlcj1IV1miyOCUOg" 
            />
          </div>
        </div>
      </section>
    </>
  );
}
