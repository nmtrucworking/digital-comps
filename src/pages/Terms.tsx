import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Zap, AlertTriangle, Scale, Briefcase, Users, Link2, RefreshCw, Gavel, Phone, ChevronRight } from 'lucide-react';

const sectionIcons = {
  acceptance: <FileText className="w-5 h-5" />,
  useLicense: <Zap className="w-5 h-5" />,
  disclaimer: <AlertTriangle className="w-5 h-5" />,
  limitations: <Scale className="w-5 h-5" />,
  intellectualProperty: <Briefcase className="w-5 h-5" />,
  userConduct: <Users className="w-5 h-5" />,
  thirdPartyLinks: <Link2 className="w-5 h-5" />,
  modifications: <RefreshCw className="w-5 h-5" />,
  governingLaw: <Gavel className="w-5 h-5" />,
  contact: <Phone className="w-5 h-5" />,
};

interface TableOfContentsItem {
  id: string;
  label: string;
}

export default function Terms() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('acceptance');

  const tableOfContents: TableOfContentsItem[] = [
    { id: 'acceptance', label: t('terms.sections.acceptance.title') },
    { id: 'useLicense', label: t('terms.sections.useLicense.title') },
    { id: 'disclaimer', label: t('terms.sections.disclaimer.title') },
    { id: 'limitations', label: t('terms.sections.limitations.title') },
    { id: 'intellectualProperty', label: t('terms.sections.intellectualProperty.title') },
    { id: 'userConduct', label: t('terms.sections.userConduct.title') },
    { id: 'thirdPartyLinks', label: t('terms.sections.thirdPartyLinks.title') },
    { id: 'modifications', label: t('terms.sections.modifications.title') },
    { id: 'governingLaw', label: t('terms.sections.governingLaw.title') },
    { id: 'contact', label: t('terms.sections.contact.title') },
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/35 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-tertiary/25 rounded-full blur-3xl translate-x-1/3"></div>
        </div>

        {/* Decorative Legal Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, currentColor, currentColor 2px, transparent 2px, transparent 8px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-container rounded-xl p-3 text-on-secondary shadow-lg">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="font-label-bold text-secondary uppercase tracking-widest text-xs">{t('common.siteName')}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="font-display-xl text-on-background leading-tight">
                  {t('terms.title')}
                </h1>
                <p className="font-body-lg text-on-surface-variant leading-relaxed ">
                  {t('terms.introDescription')}
                </p>
              </div>
              {/* Key Info Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-surface-container-high/80 backdrop-blur rounded-xl p-4 border border-outline-variant hover:border-secondary/50 transition-all shadow-md">
                  <div className="text-2xl font-bold text-secondary">10</div>
                  <div className="font-body-sm text-on-surface-variant">Key Sections</div>
                </div>
                <div className="bg-surface-container-high/80 backdrop-blur rounded-xl p-4 border border-outline-variant hover:border-primary/50 transition-all shadow-md">
                  <div className="text-2xl font-bold text-primary">Clear</div>
                  <div className="font-body-sm text-on-surface-variant">Language Used</div>
                </div>
              </div>
              <p className="font-body-sm text-on-surface-variant italic pt-2">
                {t('terms.lastUpdated')}: May 11, 2026
              </p>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative h-80 hidden md:flex items-center justify-center">
              {/* Document Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative space-y-3">
                  {/* Main Document Card */}
                  <div className="bg-surface-container-highest rounded-2xl p-8 shadow-2xl border border-outline-variant w-80 transform hover:scale-105 transition-transform">
                    <div className="space-y-4">
                      <div className="h-3 bg-primary/20 rounded w-3/4"></div>
                      <div className="h-2 bg-primary/10 rounded w-full"></div>
                      <div className="h-2 bg-primary/10 rounded w-5/6"></div>
                      <div className="pt-2 border-t border-outline-variant mt-4">
                        <div className="h-2 bg-secondary/10 rounded w-4/5 mt-3"></div>
                        <div className="h-2 bg-secondary/10 rounded w-3/4 mt-2"></div>
                      </div>
                    </div>
                  </div>
                  {/* Floating Label Cards */}
                  <div className="absolute -top-4 -right-8 bg-surface-container-highest rounded-lg p-3 shadow-lg border border-outline-variant w-40 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <Gavel className="w-4 h-4 text-secondary" />
                      <span className="font-label-bold text-xs text-on-background">Legal Binding</span>
                    </div>
                    <p className="font-body-xs text-on-surface-variant">Enforceable terms</p>
                  </div>
                  <div className="absolute -bottom-4 -left-8 bg-surface-container-highest rounded-lg p-3 shadow-lg border border-outline-variant w-40 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <Scale className="w-4 h-4 text-primary" />
                      <span className="font-label-bold text-xs text-on-background">Fair & Balanced</span>
                    </div>
                    <p className="font-body-xs text-on-surface-variant">Transparent policies</p>
                  </div>
                </div>
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
                          ? 'bg-secondary/10 text-secondary border-l-2 border-secondary'
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
              {/* Section 1: Acceptance */}
              <div id="acceptance" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary">
                    {sectionIcons.acceptance}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('terms.sections.acceptance.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('terms.sections.acceptance.content')}</p>
                </div>
              </div>

              {/* Section 2: Use License */}
              <div id="useLicense" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                    {sectionIcons.useLicense}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('terms.sections.useLicense.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('terms.sections.useLicense.content1')}</p>
                  <p>{t('terms.sections.useLicense.content2')}</p>
                  <p className="font-semibold text-on-background">{t('terms.sections.useLicense.restrictions')}</p>
                  <ul className="space-y-3 pl-6">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('terms.sections.useLicense.bullet1')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('terms.sections.useLicense.bullet2')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('terms.sections.useLicense.bullet3')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('terms.sections.useLicense.bullet4')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Disclaimer */}
              <div id="disclaimer" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-tertiary/10 rounded-lg text-tertiary">
                    {sectionIcons.disclaimer}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('terms.sections.disclaimer.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('terms.sections.disclaimer.content1')}</p>
                  <p>{t('terms.sections.disclaimer.content2')}</p>
                </div>
              </div>

              {/* Section 4: Limitations */}
              <div id="limitations" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary">
                    {sectionIcons.limitations}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('terms.sections.limitations.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('terms.sections.limitations.content')}</p>
                </div>
              </div>

              {/* Section 5: Intellectual Property */}
              <div id="intellectualProperty" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                    {sectionIcons.intellectualProperty}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('terms.sections.intellectualProperty.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('terms.sections.intellectualProperty.content')}</p>
                </div>
              </div>

              {/* Section 6: User Conduct */}
              <div id="userConduct" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-tertiary/10 rounded-lg text-tertiary">
                    {sectionIcons.userConduct}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('terms.sections.userConduct.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('terms.sections.userConduct.description')}</p>
                  <ul className="space-y-3 pl-6">
                    <li className="flex gap-3">
                      <span className="text-tertiary font-bold">•</span>
                      <span>{t('terms.sections.userConduct.bullet1')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tertiary font-bold">•</span>
                      <span>{t('terms.sections.userConduct.bullet2')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tertiary font-bold">•</span>
                      <span>{t('terms.sections.userConduct.bullet3')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-tertiary font-bold">•</span>
                      <span>{t('terms.sections.userConduct.bullet4')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 7: Third-party Links */}
              <div id="thirdPartyLinks" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary">
                    {sectionIcons.thirdPartyLinks}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('terms.sections.thirdPartyLinks.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('terms.sections.thirdPartyLinks.content')}</p>
                </div>
              </div>

              {/* Section 8: Modifications */}
              <div id="modifications" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                    {sectionIcons.modifications}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('terms.sections.modifications.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('terms.sections.modifications.content')}</p>
                </div>
              </div>

              {/* Section 9: Governing Law */}
              <div id="governingLaw" className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary">
                    {sectionIcons.governingLaw}
                  </div>
                  <div>
                    <h2 className="font-display-md text-on-background">
                      {t('terms.sections.governingLaw.title')}
                    </h2>
                  </div>
                </div>
                <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant">
                  <p>{t('terms.sections.governingLaw.content')}</p>
                </div>
              </div>

              {/* Section 10: Contact */}
              <div id="contact" className="scroll-mt-20">
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-secondary/20 rounded-lg text-secondary">
                      {sectionIcons.contact}
                    </div>
                    <div>
                      <h2 className="font-display-md text-on-background">
                        {t('terms.sections.contact.title')}
                      </h2>
                    </div>
                  </div>
                  <p className="font-body-md text-on-surface-variant">
                    {t('terms.sections.contact.description')}
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 font-button px-6 py-3 bg-gradient-to-r from-secondary to-primary text-on-primary rounded-xl hover:shadow-[0_6px_20px_rgba(0,209,193,0.23)] transition-all"
                  >
                    {t('terms.sections.contact.cta')}
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
