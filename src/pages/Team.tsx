import { Target, CheckCircle, Lightbulb, ArrowRight, BarChart, Users, Globe } from 'lucide-react';

export default function Team() {
  return (
    <div className="w-full max-w-container-max mx-auto px-8 md:px-xl py-xl">
      {/* Hero Section */}
      <header className="mb-xl text-center flex flex-col items-center">
        <span className="bg-primary-container/10 text-on-primary-container font-label-bold text-label-bold px-4 py-2 rounded-full mb-6 border border-primary-container/20">
          Giới thiệu đề tài
        </span>
        <h1 className="font-display-xl text-display-xl text-on-surface mb-md">
          Kiến tạo thế hệ <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-primary-container">Công Dân Số</span> ưu tú
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Dự án nghiên cứu chuyên sâu về năng lực số của sinh viên Việt Nam trong bối cảnh toàn cầu hóa, hướng tới việc xây dựng một môi trường mạng an toàn, sáng tạo và đầy trách nhiệm.
        </p>
      </header>

      {/* Bento Grid: Objectives & Significance */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
        {/* Mục tiêu (Takes up more space) */}
        <div className="col-span-1 md:col-span-8 bg-white/20 backdrop-blur-[40px] border border-white/40 rounded-xl p-lg shadow-[0_8px_32px_0_rgba(0,106,98,0.05)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary-container/30">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Mục tiêu nghiên cứu</h2>
          </div>
          <ul className="space-y-4 font-body-lg text-body-lg text-on-surface-variant relative z-10">
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-primary-container shrink-0 mt-1" />
              <span>Đánh giá toàn diện thực trạng nhận thức và hành vi của sinh viên Việt Nam trên không gian mạng hiện nay.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-primary-container shrink-0 mt-1" />
              <span>Xác định các lỗ hổng kỹ năng số cần được bồi đắp trong chương trình giáo dục đại học.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-primary-container shrink-0 mt-1" />
              <span>Đề xuất bộ tiêu chuẩn "Công dân số 2.0" phù hợp với văn hóa và định hướng phát triển của quốc gia.</span>
            </li>
          </ul>
        </div>

        {/* Ý nghĩa (Smaller block) */}
        <div className="col-span-1 md:col-span-4 bg-white/20 backdrop-blur-[40px] border border-white/40 rounded-xl p-md shadow-[0_8px_32px_0_rgba(120,37,234,0.05)] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white mb-4 shadow-lg shadow-tertiary/30">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Ý nghĩa thực tiễn</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Kết quả nghiên cứu cung cấp cơ sở dữ liệu quý giá cho các nhà hoạch định chính sách, các trường đại học trong việc xây dựng chương trình đào tạo kỹ năng mềm và kỹ năng số thời kỳ 4.0.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-tertiary font-label-bold text-label-bold cursor-pointer hover:text-tertiary-container transition-colors group">
            <span>Xem báo cáo chi tiết</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </section>

      {/* Phương pháp nghiên cứu (Infographic-style layout) */}
      <section className="mb-xl">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Phương pháp nghiên cứu</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Tiếp cận đa chiều, đảm bảo tính khách quan và khoa học.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Method 1 */}
          <div className="h-full flex flex-col bg-surface-container-lowest rounded-xl p-md border border-outline-variant/50 hover:border-primary-container/50 transition-colors shadow-sm hover:shadow-md relative pt-12">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-surface shadow-sm">
              <BarChart className="w-8 h-8 text-secondary-container" />
            </div>
            <h3 className="font-headline-md text-headline-md text-center text-on-surface mb-3 mt-2">Định lượng</h3>
            <p className="font-body-md text-body-md text-center text-on-surface-variant">
              Khảo sát diện rộng với hơn 5.000 mẫu từ 20 trường đại học lớn trên toàn quốc thông qua bảng hỏi chuẩn hóa.
            </p>
          </div>
          {/* Method 2 */}
          <div className="h-full flex flex-col bg-surface-container-lowest rounded-xl p-md border border-outline-variant/50 hover:border-tertiary/50 transition-colors shadow-sm hover:shadow-md relative pt-12">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-surface shadow-sm">
              <Users className="w-8 h-8 text-tertiary" />
            </div>
            <h3 className="font-headline-md text-headline-md text-center text-on-surface mb-3 mt-2">Định tính</h3>
            <p className="font-body-md text-body-md text-center text-on-surface-variant">
              Phỏng vấn sâu và thảo luận nhóm (FGD) với các chuyên gia an ninh mạng, giảng viên và nhóm sinh viên tiêu biểu.
            </p>
          </div>
          {/* Method 3 */}
          <div className="h-full flex flex-col bg-surface-container-lowest rounded-xl p-md border border-outline-variant/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md relative pt-12">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-surface shadow-sm">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-headline-md text-headline-md text-center text-on-surface mb-3 mt-2">Nghiên cứu tài liệu</h3>
            <p className="font-body-md text-body-md text-center text-on-surface-variant">
              Tổng hợp và phân tích các khung năng lực số quốc tế (UNESCO, DigComp) để đối chiếu với bối cảnh Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* Illustration Image */}
      <section className="rounded-xl overflow-hidden shadow-lg h-96 relative group">
        <img 
          alt="Students working together" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuACt_Rhuc_5JqxpyH3IHplPkXXqDYZO2mOakllLeUoO7NAHNFygTcB5DCG6dVtVUsgtBfqpGibDP3xD7PUnoNYySg-zCeGfq4fOpugmACquT04tW1ftpOFqPzkXbiCQU6vZjlU8MNE_wLMwSMpOgXAgZwo382Ccf9Yafj7XeDqm9KE-2jwrNxQQegr7fpuG2byLA1FjNKjekAgt2Kpwf96oNWD1cAA46uW-j4_RS3KcWLaPL1hWdPUJDYZH9iKqIYG8Hc5QUTzBRg" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 to-transparent flex items-end p-8">
          <p className="font-headline-md text-headline-md text-on-primary">
            Khởi tạo tương lai số bền vững bắt đầu từ những nhận thức nhỏ nhất.
          </p>
        </div>
      </section>
    </div>
  );
}
