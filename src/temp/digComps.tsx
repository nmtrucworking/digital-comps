import { 
  Users, 
  PlayCircle, 
  Network, 
  BookOpen 
} from 'lucide-react';

export default function App() {
  // Dữ liệu mô phỏng cho nhóm thực hiện dựa trên dự án gốc
  const teamMembers = [
    { id: 1, name: 'Nguyễn Minh Trúc', mssv: '2400003987', role: 'Nhóm trưởng / Quản lý dự án' },
    { id: 2, name: 'Thành viên 02', mssv: '240000XXXX', role: 'Thiết kế Canva' },
    { id: 3, name: 'Thành viên 03', mssv: '240000XXXX', role: 'Biên tập Camtasia' },
    { id: 4, name: 'Thành viên 04', mssv: '240000XXXX', role: 'Thiết kế ProShow' },
    { id: 5, name: 'Thành viên 05', mssv: '240000XXXX', role: 'Tổng hợp nội dung' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* THANH ĐIỀU HƯỚNG (STICKY NAVIGATION) */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Network className="text-blue-600" size={28} />
              <span className="font-bold text-xl tracking-tight text-blue-900">DigitalCitizen.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Tổng quan</a>
              <a href="#context" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Bối cảnh</a>
              <a href="#team" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Nhóm thực hiện</a>
              <a href="#media" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Video dự án</a>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 1: KHU VỰC BIỂU NGỮ CHÍNH (HERO BANNER) 
          Yêu cầu: Tỷ lệ 16:9, Flat Design, thể hiện sự kết nối mạng lưới 
      */}
      <section id="hero" className="relative w-full aspect-video max-h-[700px] bg-slate-900 flex items-center justify-center overflow-hidden">
        {/* Lớp nền mô phỏng Flat Design & Network (Thay thế ảnh Canva tĩnh) */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-blue-400/30 rounded-full border-dashed animate-spin-slow"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-semibold text-blue-100 bg-blue-800/50 rounded-full border border-blue-400/30">
            Báo cáo học phần: Năng lực số & Khai thác tài nguyên giáo dục mở
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Công dân số trong kỷ nguyên mạng xã hội
          </h1>
          <p className="text-lg md:text-2xl text-blue-200 font-light">
            Cơ hội và thách thức đối với sinh viên Việt Nam
          </p>
        </div>
      </section>

      {/* SECTION 2: ĐẶT VẤN ĐỀ (CONTEXT & DEFINITION)
          Yêu cầu: Dưới 150 chữ, phông Sans-serif, giảm tải nhận thức
      */}
      <section id="context" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="text-blue-600" size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Bối cảnh & Khái niệm</h2>
          <p className="text-lg text-slate-600 leading-relaxed text-justify md:text-center">
            Trong kỷ nguyên công nghệ, <strong>"Công dân số" (Digital Citizen)</strong> được định nghĩa là những cá nhân có khả năng sử dụng công nghệ thông tin một cách an toàn, có trách nhiệm và mang tính phản biện. 
            Đối với sinh viên Việt Nam, mạng xã hội đã trở thành hệ sinh thái cốt lõi phục vụ học tập và giao tiếp. 
            Sự chuyển dịch này mở ra cơ hội lớn trong việc tiếp cận tài nguyên giáo dục mở (OER) và hợp tác trực tuyến. 
            Tuy nhiên, nó đồng thời mang lại những thách thức phức tạp về an toàn dữ liệu, tin giả và ứng xử trên không gian mạng. 
            Việc làm chủ năng lực số là yêu cầu tất yếu để sinh viên phát triển bền vững.
          </p>
        </div>
      </section>

      {/* SECTION 3: GIỚI THIỆU NHÓM (TEAM PROFILES)
          Yêu cầu: Profile Cards, Grid Layout, Responsive
      */}
      <section id="team" className="py-20 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nhóm Thực Hiện</h2>
            <p className="text-slate-500">Đội ngũ xây dựng nội dung và phát triển sản phẩm số</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col items-center group">
                <div className="w-24 h-24 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Users size={36} />
                </div>
                <h3 className="font-bold text-slate-800 text-center mb-1">{member.name}</h3>
                <p className="text-sm font-mono text-slate-500 mb-4">{member.mssv}</p>
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full text-center">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: VIDEO GIỚI THIỆU (MULTIMEDIA)
          Yêu cầu: Tích hợp iframe, mô phỏng video từ Camtasia
      */}
      <section id="media" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tổng Quan Dự Án</h2>
            <p className="text-slate-500">Video minh họa thực trạng sinh viên sử dụng mạng xã hội</p>
          </div>

          {/* Iframe Wrapper - Giữ đúng tỷ lệ 16:9 */}
          <div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group cursor-pointer">
            
            {/* Vùng Placeholder khi chưa có link iframe thực tế */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <div className="w-20 h-20 bg-blue-600/80 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <PlayCircle size={48} className="text-white ml-1" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Video Camtasia (1-2 Phút)</h3>
              <p className="text-slate-300 text-center text-sm max-w-md">
                Khu vực nhúng iframe (YouTube/Google Drive). Video sử dụng hiệu ứng Text Animation và Voice-over để làm nổi bật từ khóa.
              </p>
            </div>
            
            {/* Mã HTML chuẩn để nhúng thực tế (hiện bị comment để hiện placeholder) */}
            {/* <iframe 
              src="LINK_YOUTUBE_HOAC_DRIVE_CUA_BAN" 
              title="Video giới thiệu dự án Công dân số" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe> 
            */}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-8 text-center border-t border-slate-800">
        <p className="text-slate-400 text-sm">
          © 2026 Bản quyền thuộc về Nhóm dự án học phần. Sản phẩm phục vụ mục đích giáo dục (OER).
        </p>
      </footer>
    </div>
  );
}