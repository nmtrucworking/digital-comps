import { Rocket, GraduationCap, Network, AlertTriangle, Shield, ShieldAlert, Lightbulb, Brain, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Opportunities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="max-w-[1440px] mx-auto px-6 md:px-20 py-12 md:py-xl w-full overflow-hidden">
      {/* Header Section */}
      <header className="text-center mb-xl relative reveal opacity-0 translate-y-10 transition-all duration-1000">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 blur-[100px] -z-10 rounded-full animate-pulse" />
        <h1 className="font-display-xl text-display-xl text-on-background mb-md tracking-tight">
          Hai mặt của <span className="text-primary">thế giới số</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Khám phá tiềm năng vô hạn và nhận diện những rủi ro tiềm ẩn để trở thành công dân số thông minh, an toàn.
        </p>
      </header>

      {/* Side by Side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter relative mb-xl">
        {/* VS Badge (Absolute center on desktop) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-20 items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-white rounded-full shadow-[0_0_40px_rgba(0,0,0,0.1)] border border-outline-variant/30 backdrop-blur-sm" />
          <div className="absolute inset-[-4px] border border-primary/20 rounded-full animate-[ping_3s_linear_infinite]" />
          <span className="relative font-display-xl text-2xl font-black text-on-surface tracking-tighter bg-gradient-to-br from-primary to-error bg-clip-text text-transparent">
            VS
          </span>
        </div>

        {/* Cơ Hội Column */}
        <div className="space-y-8 relative">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10 rounded-full" />
          <div className="sticky top-[80px] bg-background/60 backdrop-blur-xl py-6 z-10 border-b border-primary-container/10 mb-8 transition-all">
            <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              Cơ hội
            </h2>
          </div>

          <div className="grid gap-6">
            {/* Card 1: Học tập */}
            <div className="group bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,106,98,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden reveal opacity-0 translate-y-10 delay-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 text-on-primary-fixed shadow-inner group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                Học tập toàn cầu không giới hạn
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1 leading-relaxed">
                Tiếp cận kho tàng tri thức nhân loại từ các trường đại học hàng đầu thế giới chỉ với một cú click chuột.
              </p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-label-bold text-sm hover:text-primary-container transition-colors w-max group/btn">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all group-hover/btn:after:w-full">Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Kết nối */}
            <div className="group bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,106,98,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden reveal opacity-0 translate-y-10 delay-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 text-on-primary-fixed shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Network className="w-7 h-7" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                Kết nối cộng đồng phi biên giới
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1 leading-relaxed">
                Xóa nhòa khoảng cách địa lý, giao lưu văn hóa và xây dựng mạng lưới quan hệ quốc tế dễ dàng hơn bao giờ hết.
              </p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-label-bold text-sm hover:text-primary-container transition-colors w-max group/btn">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all group-hover/btn:after:w-full">Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Sáng tạo số */}
            <div className="group bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,106,98,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden reveal opacity-0 translate-y-10 delay-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
              <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 text-on-primary-fixed shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                Sáng tạo & Khởi nghiệp số
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1 leading-relaxed">
                Tận dụng nền tảng mở để phát triển bản thân, xây dựng thương hiệu cá nhân và khai mở cơ hội khởi nghiệp.
              </p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-label-bold text-sm hover:text-primary-container transition-colors w-max group/btn">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all group-hover/btn:after:w-full">Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Thách Thức Column */}
        <div className="space-y-8 relative">
          <div className="absolute inset-0 bg-error/5 blur-[120px] -z-10 rounded-full" />
          <div className="sticky top-[80px] bg-background/60 backdrop-blur-xl py-6 z-10 border-b border-error/10 mb-8 mt-12 lg:mt-0 transition-all">
            <h2 className="font-headline-md text-headline-md text-error flex items-center gap-3">
              <div className="w-10 h-10 bg-error/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              Thách thức
            </h2>
          </div>

          <div className="grid gap-6">
            {/* Card 1: An ninh mạng */}
            <div className="group bg-error-container/5 backdrop-blur-xl border border-error/10 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(186,26,26,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden reveal opacity-0 translate-y-10 delay-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 blur-3xl -z-10 group-hover:bg-error/10 transition-colors" />
              <div className="w-14 h-14 bg-error-container rounded-2xl flex items-center justify-center mb-6 text-on-error-container shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-4 group-hover:text-error transition-colors">
                An ninh & Bảo mật dữ liệu
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1 leading-relaxed">
                Nguy cơ rò rỉ thông tin, lừa đảo trực tuyến và các cuộc tấn công mạng ngày càng tinh vi đe dọa sự an toàn số.
              </p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-error font-label-bold text-sm hover:text-error/80 transition-colors w-max group/btn">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-error after:transition-all group-hover/btn:after:w-full">Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Tin giả */}
            <div className="group bg-error-container/5 backdrop-blur-xl border border-error/10 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(186,26,26,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden reveal opacity-0 translate-y-10 delay-200">
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 blur-3xl -z-10 group-hover:bg-error/10 transition-colors" />
              <div className="w-14 h-14 bg-error-container rounded-2xl flex items-center justify-center mb-6 text-on-error-container shadow-inner group-hover:scale-110 transition-transform duration-500">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-4 group-hover:text-error transition-colors">
                Vấn nạn tin giả & Thao túng
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1 leading-relaxed">
                Sự lan truyền nhanh chóng của thông tin sai lệch đòi hỏi kỹ năng kiểm chứng và tư duy phản biện nhạy bén.
              </p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-error font-label-bold text-sm hover:text-error/80 transition-colors w-max group/btn">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-error after:transition-all group-hover/btn:after:w-full">Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Tâm lý */}
            <div className="group bg-error-container/5 backdrop-blur-xl border border-error/10 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(186,26,26,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden reveal opacity-0 translate-y-10 delay-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 blur-3xl -z-10 group-hover:bg-error/10 transition-colors" />
              <div className="w-14 h-14 bg-error-container rounded-2xl flex items-center justify-center mb-6 text-on-error-container shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-4 group-hover:text-error transition-colors">
                Áp lực tâm lý & Sức khỏe
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1 leading-relaxed">
                Hội chứng FOMO, so sánh độc hại và bắt nạt trên mạng (Cyberbullying) ảnh hưởng nghiêm trọng đến Gen Z.
              </p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-error font-label-bold text-sm hover:text-error/80 transition-colors w-max group/btn">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-error after:transition-all group-hover/btn:after:w-full">Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-on-background rounded-[3rem] p-12 md:p-20 text-center mt-24 md:mt-32 max-w-5xl mx-auto shadow-2xl reveal opacity-0 translate-y-10 transition-all duration-1000">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,209,193,0.1),transparent)] pointer-events-none" />
        <h2 className="font-headline-lg text-4xl md:text-5xl text-white mb-6 relative z-10 leading-tight">
          Bạn đã sẵn sàng đối mặt với <br className="hidden md:block" /> <span className="text-primary-container">không gian số?</span>
        </h2>
        <p className="font-body-md text-body-lg text-white/70 mb-10 max-w-2xl mx-auto relative z-10">
          Đừng chỉ là một người dùng thụ động. Hãy trang bị kiến thức, tự bảo vệ mình và lan tỏa những giá trị tích cực để xây dựng một cộng đồng số vững mạnh.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <Link to="/library" className="group bg-primary text-on-primary font-button px-10 py-5 rounded-full shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
            <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Đọc cẩm nang an toàn
          </Link>
          <Link to="/team" className="group border-2 border-white/20 text-white font-button px-10 py-5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
            Tham gia cộng đồng
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
