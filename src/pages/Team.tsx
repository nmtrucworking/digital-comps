import { Target, CheckCircle, Lightbulb, ArrowRight, BarChart, Users, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamMembers';
import heroImg from '../assets/images/team-hero_sec.png';

export default function Team() {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-container-max mx-auto px-8 md:px-xl py-xl">
      {/* Hero Section */}
      <header className="mb-xl text-center flex flex-col items-center">
        <span className="bg-primary-container/10 text-on-primary-container font-label-bold text-label-bold px-4 py-2 rounded-full mb-6 border border-primary-container/20">
          {t('team.hero.badge')}
        </span>
        <h1 className="font-display-xl text-display-xl text-on-surface mb-md">
          {t('team.hero.title')} <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-primary-container">{t('team.hero.titleHighlight')}</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {t('team.hero.description')}
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
            <h2 className="font-headline-lg text-headline-lg text-on-surface">{t('team.objectives.title')}</h2>
          </div>
          <ul className="space-y-4 font-body-lg text-body-lg text-on-surface-variant relative z-10">
            {(t('team.objectives.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary-container shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ý nghĩa (Smaller block) */}
        <div className="col-span-1 md:col-span-4 bg-white/20 backdrop-blur-[40px] border border-white/40 rounded-xl p-md shadow-[0_8px_32px_0_rgba(120,37,234,0.05)] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white mb-4 shadow-lg shadow-tertiary/30">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{t('team.significance.title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t('team.significance.description')}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-tertiary font-label-bold text-label-bold cursor-pointer hover:text-tertiary-container transition-colors group">
            <span>{t('team.significance.detailedReport')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </section>

      {/* Phương pháp nghiên cứu (Infographic-style layout) */}
      <section className="mb-xl">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">{t('team.methodology.title')}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t('team.methodology.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(t('team.methodology.methods', { returnObjects: true }) as any[]).map((method: any, idx: number) => (
            <div key={idx} className="h-full flex flex-col bg-surface-container-lowest rounded-xl p-md border border-outline-variant/50 hover:border-primary-container/50 transition-colors shadow-sm hover:shadow-md relative pt-12">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-surface shadow-sm">
                {idx === 0 && <BarChart className="w-8 h-8 text-secondary-container" />}
                {idx === 1 && <Users className="w-8 h-8 text-tertiary" />}
                {idx === 2 && <Globe className="w-8 h-8 text-primary" />}
              </div>
              <h3 className="font-headline-md text-headline-md text-center text-on-surface mb-3 mt-2">{method.title}</h3>
              <p className="font-body-md text-body-md text-center text-on-surface-variant">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-xl">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">{t('team.members.title')}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t('team.members.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              to={`/team/${member.id}`}
              className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-[0_8px_32px_rgba(0,209,193,0.1)] transition-all hover:-translate-y-1"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-surface-container">
                <img src={member.avatarUrl} alt="" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface">
                {member.fullNameKey ? t(member.fullNameKey) : member.fullName}
              </h3>
              <p className="font-label-bold text-sm text-primary mb-3">
                {member.roleKey ? t(member.roleKey) : member.role}
              </p>
              <p className="font-body-md text-sm text-on-surface-variant line-clamp-3">
                {member.bioKey ? t(member.bioKey) : member.bio}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Illustration Image */}
      <section className="rounded-xl overflow-hidden shadow-lg h-96 relative group">
        <img 
          alt="Students working together" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          src={heroImg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 to-transparent flex items-end p-8">
          <p className="font-headline-md text-headline-md text-on-primary">
            {t('team.illustration.caption')}
          </p>
        </div>
      </section>
    </div>
  );
}
