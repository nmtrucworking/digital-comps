import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MessageCircle, Globe, Share2, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "text-[#00D1C1] border-b-2 border-[#00D1C1] pb-1 font-bold font-['Space_Grotesk'] font-medium active:scale-95 duration-150 ease-in-out";
    }
    return "text-slate-600 dark:text-slate-300 hover:text-[#00D1C1] transition-colors hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg transition-all font-['Space_Grotesk'] font-medium";
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `block px-4 py-3 rounded-xl transition-all font-['Space_Grotesk'] font-medium text-lg ${
      isActive ? 'bg-[#00D1C1]/10 text-[#00D1C1] font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
    }`;
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
      {/* TopNavBar */}
      <nav className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-[0_8px_32px_0_rgba(0,209,193,0.1)] border-b border-white/10 dark:border-slate-800/50">
        <div className="flex justify-between items-center w-full px-6 md:px-20 py-4 max-w-[1440px] mx-auto">
          <Link to="/" className="text-2xl font-black tracking-tighter text-[#00D1C1] font-['Space_Grotesk'] font-medium">
            {t('common.siteName')}
          </Link>
          
          <div className="hidden md:flex gap-8 items-center">
            <Link className={getLinkClass('/')} to="/">{t('navigation.home')}</Link>
            <Link className={getLinkClass('/team')} to="/team">{t('navigation.about')}</Link>
            <Link className={getLinkClass('/opportunities')} to="/opportunities">{t('navigation.opportunities')}</Link>
            <Link className={getLinkClass('/library')} to="/library">{t('navigation.library')}</Link>
            <Link className={getLinkClass('/blog')} to="/blog">{t('navigation.blog')}</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button className="bg-gradient-to-r from-tertiary to-primary-container text-on-primary font-button text-button px-6 py-3 rounded-full shadow-[0_4px_14px_0_rgba(0,209,193,0.39)] hover:shadow-[0_6px_20px_rgba(0,209,193,0.23)] transition-all">
              {t('common.joinButton')}
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg py-4 px-6 flex flex-col gap-2">
            <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('/')} to="/">{t('navigation.home')}</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('/team')} to="/team">{t('navigation.about')}</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('/opportunities')} to="/opportunities">{t('navigation.opportunities')}</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('/library')} to="/library">{t('navigation.library')}</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('/blog')} to="/blog">{t('navigation.blog')}</Link>
            <div className="mt-4 flex gap-2">
              <LanguageSwitcher />
              <button className="flex-1 bg-gradient-to-r from-tertiary to-primary-container text-on-primary font-button text-button px-6 py-3 rounded-xl shadow-md transition-all">
                {t('common.joinNowButton')}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <div key={location.pathname} className="animate-fade-in flex-grow flex flex-col">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant mt-xl">
        <div className="max-w-container-max mx-auto px-8 md:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
            {/* Column 1: Brand & Social */}
            <div className="flex flex-col gap-md">
              <div className="text-2xl font-bold tracking-tighter text-primary font-display-xl">
                {t('common.siteName')}
              </div>
              <p className="text-on-surface-variant font-body-md">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                  <Globe className="w-5 h-5" />
                </a>
                <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                  <Share2 className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Column 2: About Project */}
            <div className="flex flex-col gap-base">
              <h4 className="font-label-bold text-on-surface uppercase tracking-wider mb-2">{t('navigation.about')}</h4>
              <ul className="flex flex-col gap-3">
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" to="/team">Giới thiệu chung</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" to="/team">Đội ngũ phát triển</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" to="/team">Sứ mệnh & Tầm nhìn</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" to="/blog">Tin tức & Sự kiện</Link></li>
              </ul>
            </div>
            
            {/* Column 3: Topics */}
            <div className="flex flex-col gap-base">
              <h4 className="font-label-bold text-on-surface uppercase tracking-wider mb-2">Chủ đề</h4>
              <ul className="flex flex-col gap-3">
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" to="/opportunities">An toàn không gian mạng</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" to="/opportunities">Kỹ năng tìm kiếm số</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" to="/opportunities">Sáng tạo nội dung số</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" to="/opportunities">Đạo đức mạng xã hội</Link></li>
              </ul>
            </div>
            
            {/* Column 4: Newsletter */}
            <div className="flex flex-col gap-base">
              <h4 className="font-label-bold text-on-surface uppercase tracking-wider mb-2">Đăng ký nhận tin</h4>
              <p className="text-on-surface-variant font-body-md mb-2">Nhận những kiến thức và tài liệu mới nhất trực tiếp qua email.</p>
              <form className="flex flex-col gap-sm">
                <div className="relative">
                  <input className="w-full px-4 py-3 bg-surface-container-highest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Email của bạn" type="email" />
                </div>
                <button className="bg-primary text-on-primary font-button px-6 py-3 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all" type="submit">
                  Đăng ký ngay
                </button>
              </form>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md">
            <p className="text-on-surface-variant font-body-md text-sm italic">
              © 2024 {t('common.siteName')} - Dự án dành cho Sinh viên Việt Nam. Sáng tạo & Trách nhiệm.
            </p>
            <div className="flex gap-6 text-sm font-label-bold text-on-surface-variant">
              <a className="hover:text-primary" href="#">Chính sách bảo mật</a>
              <a className="hover:text-primary" href="#">Điều khoản sử dụng</a>
              <a className="hover:text-primary" href="#">Liên hệ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
