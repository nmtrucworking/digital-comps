import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lock, Database, Shield, Cookie, Link2, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';

const sectionIcons = {
  informationCollection: <Database className="w-5 h-5" />,
  dataUsage: <Shield className="w-5 h-5" />,
  dataProtection: <Lock className="w-5 h-5" />,
  cookies: <Cookie className="w-5 h-5" />,
  thirdParty: <Link2 className="w-5 h-5" />,
  userRights: <CheckCircle2 className="w-5 h-5" />,
  contact: <AlertCircle className="w-5 h-5" />,
};

interface TableOfContentsItem {
  id: string;
  label: string;
}

export default function Privacy() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('informationCollection');

  const tableOfContents: TableOfContentsItem[] = [
    { id: 'informationCollection', label: t('privacy.sections.informationCollection.title') },
    { id: 'dataUsage', label: t('privacy.sections.dataUsage.title') },
    { id: 'dataProtection', label: t('privacy.sections.dataProtection.title') },
    { id: 'cookies', label: t('privacy.sections.cookies.title') },
    { id: 'thirdParty', label: t('privacy.sections.thirdParty.title') },
    { id: 'userRights', label: t('privacy.sections.userRights.title') },
    { id: 'contact', label: t('privacy.sections.contact.title') },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background text-on-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/35 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/25 rounded-full blur-3xl"></div>
        </div>

        {/* Decorative Lock Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-container rounded-xl p-3 text-on-primary shadow-lg">
                    <Lock className="w-6 h-6" />
                  </div>
                  <span className="font-label-bold text-primary uppercase tracking-widest text-xs">{t('common.siteName')}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="font-display-xl text-on-background leading-tight">
                  {t('privacy.title')}
                </h1>
                <p className="font-body-lg text-on-surface-variant leading-relaxed ">
                  {t('privacy.introDescription')}
                </p>
              </div>
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-surface-container-high/80 backdrop-blur rounded-xl p-4 border border-outline-variant hover:border-primary/50 transition-all shadow-md">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="font-body-sm text-on-surface-variant">Data Encrypted</div>
                </div>
                <div className="bg-surface-container-high/80 backdrop-blur rounded-xl p-4 border border-outline-variant hover:border-tertiary/50 transition-all shadow-md">
                  <div className="text-2xl font-bold text-tertiary">GDPR</div>
                  <div className="font-body-sm text-on-surface-variant">Compliant</div>
                </div>
              </div>
              <p className="font-body-sm text-on-surface-variant italic pt-2">
                {t('privacy.lastUpdated')}: May 11, 2026
              </p>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative h-80 hidden md:flex items-center justify-center">
              {/* Shield Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-tertiary/10 rounded-3xl border-2 border-primary/20"></div>
                  {/* Middle Ring */}
                  <div className="absolute inset-4 bg-gradient-to-tr from-primary/5 to-transparent rounded-3xl border border-primary/10 flex items-center justify-center">
                    {/* Center Icon */}
                    <div className="bg-gradient-to-br from-primary to-primary-container p-6 rounded-2xl text-on-primary shadow-2xl">
                      <Lock className="w-16 h-16" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Feature Cards */}
              <div className="absolute top-8 right-0 bg-surface-container-highest rounded-xl p-4 shadow-lg border border-outline-variant w-48 hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="font-label-bold text-xs text-on-background">Secure</span>
                </div>
                <p className="font-body-xs text-on-surface-variant">Your data is protected</p>
              </div>
              <div className="absolute bottom-8 left-0 bg-surface-container-highest rounded-xl p-4 shadow-lg border border-outline-variant w-48 hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-tertiary" />
                  <span className="font-label-bold text-xs text-on-background">Privacy First</span>
                </div>
                <p className="font-body-xs text-on-surface-variant">Your rights matter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-6 md:px-20">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                <p className="font-label-bold text-on-surface uppercase tracking-wider text-xs px-4 mb-4">
                  Contents
                </p>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-body-md transition-all flex items-center justify-between group ${
                        activeSection === item.id
                          ? 'bg-primary/10 text-primary border-l-2 border-primary'
                          : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                      }`}
                    >
                      <span className="text-sm">{item.label.replace(/^\d+\.\s/, '')}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === item.id ? 'translate-x-1' : ''}`} />
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Section 1: Information Collection */}
              <div id="informationCollection" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                    {sectionIcons.informationCollection}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('privacy.sections.informationCollection.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('privacy.sections.informationCollection.content1')}</p>
                  <p>{t('privacy.sections.informationCollection.content2')}</p>
                  <ul className="space-y-3 pl-6">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('privacy.sections.informationCollection.bullet1')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('privacy.sections.informationCollection.bullet2')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('privacy.sections.informationCollection.bullet3')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Data Usage */}
              <div id="dataUsage" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-tertiary/10 rounded-lg text-tertiary">
                    {sectionIcons.dataUsage}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('privacy.sections.dataUsage.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('privacy.sections.dataUsage.description')}</p>
                  <ul className="space-y-3 pl-6">
                    <li className="flex gap-3">
                      <span className="text-tertiary font-bold">•</span>
                      <span>{t('privacy.sections.dataUsage.bullet1')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tertiary font-bold">•</span>
                      <span>{t('privacy.sections.dataUsage.bullet2')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tertiary font-bold">•</span>
                      <span>{t('privacy.sections.dataUsage.bullet3')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tertiary font-bold">•</span>
                      <span>{t('privacy.sections.dataUsage.bullet4')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Data Protection */}
              <div id="dataProtection" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary">
                    {sectionIcons.dataProtection}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('privacy.sections.dataProtection.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('privacy.sections.dataProtection.content1')}</p>
                  <p>{t('privacy.sections.dataProtection.content2')}</p>
                </div>
              </div>

              {/* Section 4: Cookies */}
              <div id="cookies" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                    {sectionIcons.cookies}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('privacy.sections.cookies.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('privacy.sections.cookies.description')}</p>
                  <p>{t('privacy.sections.cookies.details')}</p>
                </div>
              </div>

              {/* Section 5: Third-party Services */}
              <div id="thirdParty" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-tertiary/10 rounded-lg text-tertiary">
                    {sectionIcons.thirdParty}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('privacy.sections.thirdParty.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('privacy.sections.thirdParty.description')}</p>
                </div>
              </div>

              {/* Section 6: User Rights */}
              <div id="userRights" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary">
                    {sectionIcons.userRights}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('privacy.sections.userRights.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('privacy.sections.userRights.description')}</p>
                  <ul className="space-y-3 pl-6">
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">•</span>
                      <span>{t('privacy.sections.userRights.bullet1')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">•</span>
                      <span>{t('privacy.sections.userRights.bullet2')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">•</span>
                      <span>{t('privacy.sections.userRights.bullet3')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 7: Contact */}
              <div id="contact" className="scroll-mt-20">
                <div className="bg-gradient-to-br from-primary/10 to-tertiary/10 rounded-2xl p-8 border border-primary/20 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/20 rounded-lg text-primary">
                      {sectionIcons.contact}
                    </div>
                    <div>
                      <h2 className="font-display-md text-on-background">
                        {t('privacy.sections.contact.title')}
                      </h2>
                    </div>
                  </div>
                  <p className="font-body-md text-on-surface-variant">
                    {t('privacy.sections.contact.description')}
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 font-button px-6 py-3 bg-gradient-to-r from-tertiary to-primary-container text-on-primary rounded-xl hover:shadow-[0_6px_20px_rgba(0,209,193,0.23)] transition-all"
                  >
                    {t('privacy.sections.contact.cta')}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
