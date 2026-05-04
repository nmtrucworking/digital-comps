import { Rocket, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-xl pb-lg px-6 md:px-20 max-w-container-max mx-auto w-full flex flex-col md:flex-row items-center gap-gutter min-h-auto md:min-h-[819px]">
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
          <div className="flex flex-col sm:flex-row gap-4 mt-sm w-full">
            <Link to="/opportunities" className="bg-gradient-to-r from-tertiary to-primary-container text-on-primary font-button text-button uppercase px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(120,37,234,0.39)] hover:shadow-[0_6px_20px_rgba(120,37,234,0.23)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
              Khám phá ngay
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-primary-container text-primary-container font-button text-button uppercase px-8 py-4 rounded-full hover:bg-primary-container/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
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

      {/* Team Section */}
      <section className="relative py-12 md:py-xl px-6 md:px-20 max-w-container-max mx-auto w-full">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Đội ngũ phát triển
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Những người đồng hành cùng bạn trên chặng đường xây dựng một cộng đồng số vững mạnh và an toàn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mt-12">
          {/* Member 1 */}
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-[0_8px_32px_rgba(0,209,193,0.1)] transition-all hover:-translate-y-1">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-surface-container">
              <img src="https://i.pravatar.cc/150?img=11" alt="Thành viên 1" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Nguyễn Văn A</h3>
            <p className="font-label-bold text-sm text-primary mb-3">Trưởng dự án</p>
            <p className="font-body-md text-sm text-on-surface-variant line-clamp-3">
              Chuyên gia an ninh mạng với hơn 5 năm kinh nghiệm nghiên cứu hành vi số của sinh viên.
            </p>
          </div>

          {/* Member 2 */}
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-[0_8px_32px_rgba(0,209,193,0.1)] transition-all hover:-translate-y-1">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-surface-container">
              <img src="https://i.pravatar.cc/150?img=32" alt="Thành viên 2" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Trần Thị B</h3>
            <p className="font-label-bold text-sm text-tertiary mb-3">Chuyên gia nội dung</p>
            <p className="font-body-md text-sm text-on-surface-variant line-clamp-3">
              Giảng viên thiết kế với đam mê lan tỏa văn hóa ứng xử trực tuyến một cách sáng tạo.
            </p>
          </div>

          {/* Member 3 */}
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-[0_8px_32px_rgba(0,209,193,0.1)] transition-all hover:-translate-y-1">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-surface-container">
              <img src="https://i.pravatar.cc/150?img=60" alt="Thành viên 3" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Lê Hoàng C</h3>
            <p className="font-label-bold text-sm text-secondary-container mb-3">Kỹ sư phần mềm</p>
            <p className="font-body-md text-sm text-on-surface-variant line-clamp-3">
              Đảm nhiệm việc tối ưu hóa hệ thống và tạo ra những trải nghiệm tương tác số tốt nhất.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
