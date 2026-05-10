import { Rocket, GraduationCap, Network, AlertTriangle, Shield, ShieldAlert, Lightbulb, Brain, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';

export default function Opportunities() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [isFullscreenPoster, setIsFullscreenPoster] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const closePosterModal = useCallback(() => setIsPosterOpen(false), []);
  const openFullscreenPoster = useCallback(() => setIsFullscreenPoster(true), []);
  const closeFullscreenPoster = useCallback(() => {
    setIsFullscreenPoster(false);
    setZoomLevel(1);
  }, []);
  const zoomIn = useCallback(() => setZoomLevel(prev => Math.min(prev + 0.2, 3)), []);
  const zoomOut = useCallback(() => setZoomLevel(prev => Math.max(prev - 0.2, 1)), []);
  const resetZoom = useCallback(() => setZoomLevel(1), []);

  const fullscreenPoster = isFullscreenPoster && typeof document !== 'undefined'
    ? createPortal(
        <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
          {/* Left: Poster with Zoom */}
          <div className="w-full lg:w-3/4 h-full flex items-center justify-center bg-on-background/5 overflow-auto p-4 lg:p-8">
            <div className="flex items-center justify-center min-h-full">
              <img
                src="/poster-opportunities.png"
                alt={t('opportunities.posterAlt', 'Opportunities poster')}
                className="max-h-[90vh] w-auto object-contain transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>
          </div>

          {/* Right: Controls & Info */}
          <div className="hidden lg:flex flex-col w-1/4 h-full bg-surface-container rounded-l-3xl border-l border-outline-variant p-8 space-y-6 overflow-y-auto">
            {/* Header */}
            <div>
              <h2 className="font-headline-lg text-2xl mb-2">{t('opportunities.posterTitle', 'Poster: Cơ hội & Thách thức')}</h2>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {t('opportunities.posterExcerpt', 'Tải xuống hoặc xem poster ở kích thước đầy đủ để khám phá các cơ hội và thách thức trong môi trường số.')}
              </p>
            </div>

            {/* Zoom Controls */}
            <div className="space-y-3 border-t border-outline-variant pt-6">
              <p className="text-sm font-label-bold text-on-surface-variant">{t('common.zoom', 'Phóng to/Thu nhỏ')}</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={zoomOut}
                    disabled={zoomLevel <= 1}
                    className="flex-1 bg-surface-variant text-on-surface px-3 py-2 rounded-lg text-sm font-button hover:bg-surface-variant/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    −
                  </button>
                  <span className="text-center px-3 py-2 bg-surface-container-highest rounded-lg font-button text-sm min-w-16">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={zoomIn}
                    disabled={zoomLevel >= 3}
                    className="flex-1 bg-surface-variant text-on-surface px-3 py-2 rounded-lg text-sm font-button hover:bg-surface-variant/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={resetZoom}
                  className="w-full bg-secondary text-on-secondary px-3 py-2 rounded-lg text-sm font-button hover:shadow-md transition-all"
                >
                  {t('common.reset', 'Đặt lại')}
                </button>
              </div>
            </div>

            {/* Download & Actions */}
            <div className="space-y-3 border-t border-outline-variant pt-6">
              <a
                href="/poster-opportunities.png"
                download
                className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary px-4 py-3 rounded-full font-button hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t('opportunities.downloadPoster', 'Tải xuống')}
              </a>
            </div>

            {/* Close Button */}
            <div className="flex-1" />
            <button
              onClick={closeFullscreenPoster}
              className="w-full flex items-center justify-center gap-2 border border-outline-variant px-4 py-3 rounded-full font-button hover:bg-white/5 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              {t('common.close', 'Đóng')}
            </button>
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={closeFullscreenPoster}
            className="lg:hidden absolute top-4 right-4 bg-surface-container rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>,
        document.body,
      )
    : null;

  const posterModal = isPosterOpen && typeof document !== 'undefined'
    ? createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4" onClick={closePosterModal}>
          <div className="max-w-4xl w-full bg-transparent" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-3">
              <button onClick={closePosterModal} className="text-white bg-white/10 px-3 py-2 rounded-md hover:bg-white/20">{t('common.close', 'Đóng')}</button>
            </div>
            <div className="rounded-md overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img src="/poster-opportunities.png" alt={t('opportunities.posterAlt', 'Opportunities poster')} className="w-full h-auto block" />
            </div>
            <div className="mt-3 text-right">
              <a className="inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full" href="/poster-opportunities.png" download>
                {t('opportunities.downloadPoster', 'Tải xuống')}
              </a>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePosterModal();
    };
    if (isPosterOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isPosterOpen, closePosterModal]);

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
          {t('opportunities.header.title')} <span className="text-primary">{t('opportunities.header.titleHighlight')}</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t('opportunities.header.description')}
        </p>
      </header>

      {/* Main Layout with Content + Sticky Poster */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter relative mb-xl lg:min-h-[800px]">
        
        {/* Cơ Hội Column */}
        <div className="space-y-8 relative">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10 rounded-full" />
          <div className="sticky top-[80px] bg-background/60 backdrop-blur-xl py-6 z-10 border-b border-primary-container/10 mb-8 transition-all">
            <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6" />
              </div>
              {t('opportunities.opportunities.title')}
            </h2>
          </div>

          <div className="grid gap-6">
            {(t('opportunities.opportunities.cards', { returnObjects: true }) as any[]).map((card: any, idx: number) => (
              <div key={idx} className="group bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,106,98,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden reveal opacity-0 translate-y-10 delay-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 text-on-primary-fixed shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {idx === 0 && <GraduationCap className="w-7 h-7" />}
                  {idx === 1 && <Network className="w-7 h-7" />}
                  {idx === 2 && <Lightbulb className="w-7 h-7" />}
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1 leading-relaxed">
                  {card.description}
                </p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-label-bold text-sm hover:text-primary-container transition-colors w-max group/btn">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all group-hover/btn:after:w-full">{t('common.learnMore')}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Poster Column (Center) */}
        <div className="hidden lg:flex flex-col items-center sticky top-20 h-fit reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200">
          <div className="w-full bg-surface-container-highest rounded-3xl overflow-hidden border border-outline-variant shadow-2xl hover:shadow-primary/20 transition-all duration-300">
            <img
              src="/poster-opportunities.png"
              alt={t('opportunities.posterAlt', 'Opportunities poster')}
              className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
              loading="lazy"
              onClick={() => openFullscreenPoster()}
            />
            <div className="p-6 space-y-4 bg-gradient-to-t from-on-background/5 to-transparent">
              <h3 className="font-headline-sm text-headline-sm text-center">{t('opportunities.posterTitle', 'Poster: Cơ hội & Thách thức')}</h3>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => openFullscreenPoster()}
                  className="w-full bg-primary text-on-primary font-button px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all text-sm"
                >
                  {t('opportunities.viewPoster', 'Xem poster')}
                </button>
                <a 
                  href="/poster-opportunities.png" 
                  download 
                  className="w-full text-center border border-outline-variant px-4 py-2 rounded-full text-sm hover:bg-white/5 transition-colors"
                >
                  {t('opportunities.downloadPoster', 'Tải xuống')}
                </a>
              </div>
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
              {t('opportunities.challenges.title')}
            </h2>
          </div>

          <div className="grid gap-6">
            {(t('opportunities.challenges.cards', { returnObjects: true }) as any[]).map((card: any, idx: number) => (
              <div key={idx} className="group bg-error-container/5 backdrop-blur-xl border border-error/10 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(186,26,26,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden reveal opacity-0 translate-y-10 delay-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 blur-3xl -z-10 group-hover:bg-error/10 transition-colors" />
                <div className="w-14 h-14 bg-error-container rounded-2xl flex items-center justify-center mb-6 text-on-error-container shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {idx === 0 && <Shield className="w-7 h-7" />}
                  {idx === 1 && <ShieldAlert className="w-7 h-7" />}
                  {idx === 2 && <Brain className="w-7 h-7" />}
                </div>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-4 group-hover:text-error transition-colors">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1 leading-relaxed">
                  {card.description}
                </p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-error font-label-bold text-sm hover:text-error/80 transition-colors w-max group/btn">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-error after:transition-all group-hover/btn:after:w-full">{t('common.learnMore')}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Poster - Shows on small screens */}
      <div className="lg:hidden max-w-2xl mx-auto mb-xl reveal opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-surface-container-highest rounded-3xl overflow-hidden border border-outline-variant shadow-2xl">
          <img
            src="/poster-opportunities.png"
            alt={t('opportunities.posterAlt', 'Opportunities poster')}
            className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
            loading="lazy"
            onClick={() => openFullscreenPoster()}
          />
          <div className="p-6 space-y-4">
            <h3 className="font-headline-sm text-headline-sm text-center">{t('opportunities.posterTitle', 'Poster: Cơ hội & Thách thức')}</h3>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => openFullscreenPoster()}
                className="w-full bg-primary text-on-primary font-button px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                {t('opportunities.viewPoster', 'Xem poster')}
              </button>
              <a 
                href="/poster-opportunities.png" 
                download 
                className="w-full text-center border border-outline-variant px-4 py-2 rounded-full text-sm hover:bg-white/5 transition-colors"
              >
                {t('opportunities.downloadPoster', 'Tải xuống')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Poster View */}
      {fullscreenPoster}

      {/* Poster Modal (Old style - kept for backward compatibility) */}
      {posterModal}

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
