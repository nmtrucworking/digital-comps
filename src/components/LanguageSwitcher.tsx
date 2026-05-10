import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/10 text-primary-container hover:bg-primary-container/20 transition-colors font-label-bold text-label-bold"
      title={`Switch to ${i18n.language === 'vi' ? 'English' : 'Vietnamese'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-semibold">{i18n.language === 'vi' ? 'EN' : 'VI'}</span>
    </button>
  );
}
