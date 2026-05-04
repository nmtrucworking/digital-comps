import { Rocket, GraduationCap, Network, AlertTriangle, Shield, ShieldAlert } from 'lucide-react';

export default function Opportunities() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-20 py-xl w-full">
      {/* Header Section */}
      <header className="text-center mb-xl">
        <h1 className="font-display-xl text-display-xl text-on-background mb-md">Hai mặt của thế giới số</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
          Khám phá tiềm năng vô hạn và nhận diện những rủi ro tiềm ẩn để trở thành công dân số thông minh, an toàn.
        </p>
      </header>

      {/* Side by Side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter relative">
        {/* VS Badge (Absolute center on desktop) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-surface z-10 rounded-full shadow-lg items-center justify-center font-display-xl text-2xl text-on-surface border border-outline-variant">
          VS
        </div>

        {/* Cơ Hội Column */}
        <div className="space-y-gutter">
          <div className="sticky top-[100px] bg-background/80 backdrop-blur-md py-4 z-10 border-b border-primary-container/20 mb-8">
            <h2 className="font-headline-lg text-headline-lg text-primary flex items-center gap-sm">
              <Rocket className="w-10 h-10 text-primary-container" />
              Cơ hội
            </h2>
          </div>

          {/* Card 1: Học tập */}
          <article className="bg-white/40 backdrop-blur-[40px] border border-white/60 rounded-[2rem] p-8 shadow-[0_8px_32px_0_rgba(0,209,193,0.05)] hover:shadow-[0_16px_48px_0_rgba(0,209,193,0.15)] transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 text-on-primary-fixed shadow-inner">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">
              Học tập toàn cầu không giới hạn
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Tiếp cận kho tàng tri thức nhân loại từ các trường đại học hàng đầu thế giới chỉ với một cú click chuột.
            </p>
            <div className="h-48 rounded-2xl bg-surface-container overflow-hidden relative">
              <img 
                alt="Học tập toàn cầu" 
                className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTST61LJTxso7y2ae4-s-fxjAK1nxiz8PGKfEyW7cR-UBD74db9oRohDPPbofDEipB0-j5t6cIhUUhSfJUVGVkywbwiK_v1GzwPgXaynvtlzRKgT2BGkt579YrUa8aEmoUlD74T2Z4B3xToT5YkO3NmBwhknXt2sZyDMfZ22gWFgcpiVzL3f2wgRRx6j4oUJsMo4Uk5OifqWoWVP6lRCGVZl7BOLUFXt2e7UrrGcPsCe8c8rBFxGTpFAEqZigJMAF40Eva9XS-cg" 
              />
            </div>
          </article>

          {/* Card 2: Kết nối */}
          <article className="bg-white/40 backdrop-blur-[40px] border border-white/60 rounded-[2rem] p-8 shadow-[0_8px_32px_0_rgba(0,209,193,0.05)] hover:shadow-[0_16px_48px_0_rgba(0,209,193,0.15)] transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 text-on-primary-fixed shadow-inner">
              <Network className="w-8 h-8" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">
              Kết nối cộng đồng phi biên giới
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Xóa nhòa khoảng cách địa lý, giao lưu văn hóa và xây dựng mạng lưới quan hệ quốc tế dễ dàng hơn bao giờ hết.
            </p>
          </article>
        </div>

        {/* Thách Thức Column */}
        <div className="space-y-gutter">
          <div className="sticky top-[100px] bg-background/80 backdrop-blur-md py-4 z-10 border-b border-error/20 mb-8">
            <h2 className="font-headline-lg text-headline-lg text-error flex items-center gap-sm">
              <AlertTriangle className="w-10 h-10 text-error" />
              Thách thức
            </h2>
          </div>

          {/* Card 1: An ninh mạng */}
          <article className="bg-error-container/20 backdrop-blur-[40px] border border-error/10 rounded-[2rem] p-8 shadow-[0_8px_32px_0_rgba(186,26,26,0.05)] hover:shadow-[0_16px_48px_0_rgba(186,26,26,0.1)] transition-all duration-300 group">
            <div className="w-16 h-16 bg-error-container rounded-2xl flex items-center justify-center mb-6 text-on-error-container shadow-inner">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-error transition-colors">
              An ninh & Bảo mật dữ liệu cá nhân
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Nguy cơ rò rỉ thông tin, lừa đảo trực tuyến và các cuộc tấn công mạng ngày càng tinh vi đe dọa sự an toàn số.
            </p>
            <div className="h-48 rounded-2xl bg-surface-container overflow-hidden relative">
              <img 
                alt="Bảo mật mạng" 
                className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale hover:grayscale-0 transition-all" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtXmQzVavp4_WhJYhtcSeDZscwYLKxsU33k48ReZEOF_E1KQmPtl2G88zJ1cbE8A3RDjGNzRfvJfYC-Egs_eh3ovNZ0uzzQA4Ymvfz3ZwTYCrqxiWRMDLM8oXFF47mSdcWo_4KrCdmHai1UJ2gbcCjwHfZVO5dkhrA1W8bIprjlZiLEUbp9tDnv2NTD4tZJxVuVaSiki1qLhLrkpC2K4fxabW9SjNzISoItDR3u-88nXCoF-o9ZeSrYobw9YfeO7Pl53720zuLOg" 
              />
            </div>
          </article>

          {/* Card 2: Tin giả */}
          <article className="bg-error-container/20 backdrop-blur-[40px] border border-error/10 rounded-[2rem] p-8 shadow-[0_8px_32px_0_rgba(186,26,26,0.05)] hover:shadow-[0_16px_48px_0_rgba(186,26,26,0.1)] transition-all duration-300 group">
            <div className="w-16 h-16 bg-error-container rounded-2xl flex items-center justify-center mb-6 text-on-error-container shadow-inner">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-error transition-colors">
              Vấn nạn tin giả & Thao túng thông tin
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Sự lan truyền nhanh chóng của thông tin sai lệch đòi hỏi kỹ năng kiểm chứng tư duy phản biện nhạy bén.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
