import { Rocket, ArrowRight, PlayCircle, Sparkles, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';
import Globe from '../components/Globe';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { teamMembers } from '../data/teamMembers';

export default function Home() {
  const { t } = useTranslation();
  const roleColorClassByIndex = ['text-primary', 'text-tertiary', 'text-secondary'];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 md:px-20 max-w-container-max mx-auto w-full min-h-[90vh] py-20 flex items-center">
        {/* Premium Background Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/25 rounded-full blur-[140px] pointer-events-none translate-x-1/4 -translate-y-1/4 -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary/20 rounded-full blur-[140px] pointer-events-none -translate-x-1/4 translate-y-1/4 -z-10"></div>
        <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,209,193,0.25),transparent_50%),radial-gradient(circle_at_80%_40%,rgba(120,37,234,0.22),transparent_40%)]"></div>
        
        <div className="relative z-20 flex flex-col gap-lg max-w-2xl before:absolute before:-inset-y-8 before:-inset-x-4 sm:before:-inset-x-8 before:rounded-[2.5rem] before:bg-white/30 before:backdrop-blur-md before:border before:border-white/40 before:-z-10 before:shadow-[0_24px_80px_rgba(0,106,98,0.1)]">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-container/15 text-primary font-label-bold text-label-bold px-4 py-2 rounded-full w-max inline-flex items-center gap-2 border border-primary/15 shadow-[0_10px_30px_rgba(0,106,98,0.15)]"
          >
            <Rocket className="w-5 h-5" />
            {t('home.hero.badge')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display-xl text-display-xl text-transparent bg-clip-text bg-gradient-to-br from-primary via-[#6200cb] to-[#fb7800] bg-[length:200%_auto] animate-text-gradient pb-2 drop-shadow-sm"
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl"
          >
            {t('home.hero.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 bg-white/70 border border-white/60 text-on-surface px-4 py-2 rounded-full text-xs font-label-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-tertiary" />
              Creative Digital Skills
            </span>
            <span className="inline-flex items-center gap-2 bg-white/70 border border-white/60 text-on-surface px-4 py-2 rounded-full text-xs font-label-bold tracking-wide">
              <Orbit className="w-3.5 h-3.5 text-primary" />
              Global Learning Orbit
            </span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-sm w-full items-stretch"
          >
            <Link to="/blog" className="bg-gradient-to-r from-tertiary via-primary to-tertiary bg-[length:200%_auto] animate-text-gradient text-on-primary font-button text-button uppercase px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(0,106,98,0.3)] hover:shadow-[0_12px_28px_rgba(120,37,234,0.4)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-1 border border-white/20 relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              {t('home.hero.cta')}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <button className="border border-primary/35 bg-white/60 text-primary font-button text-button uppercase px-8 py-4 rounded-full hover:bg-white/80 transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-0.5 backdrop-blur-md shadow-[0_8px_24px_rgba(0,106,98,0.12)]">
              <PlayCircle className="w-5 h-5" />
              {t('home.hero.watchVideo')}
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="absolute right-10 md:right-20 top-20 md:top-32 z-30 hidden md:flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/80 border border-white/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,209,193,0.25)]"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-tertiary to-secondary-container flex items-center justify-center text-white shadow-lg">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">digital impact</p>
            <p className="text-lg font-headline-md text-on-surface">Globe Interactive</p>
          </div>
        </motion.div>
        {/* Globe Container - Đã sửa lỗi bị cắt */}
        <div className="absolute -right-10 md:right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] lg:w-[750px] lg:h-[750px] z-[10] pointer-events-none drop-shadow-[0_0_50px_rgba(0,209,193,0.15)]">
          <Globe />
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-12 md:py-xl px-6 md:px-20 max-w-container-max mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-lg"
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            {t('team.members.title')}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t('team.members.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, idx) => (
            (() => {
              const fullName = member.fullNameKey ? t(member.fullNameKey) : (member.fullName ?? '');
              const role = member.roleKey ? t(member.roleKey) : (member.role ?? '');
              const bio = member.bioKey ? t(member.bioKey) : (member.bio ?? '');

              return (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-[0_8px_32px_rgba(0,209,193,0.1)] transition-all hover:-translate-y-1"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-surface-container">
                <img src={member.avatarUrl} alt={fullName} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface">{fullName}</h3>
              <p className={`font-label-bold text-sm mb-3 ${roleColorClassByIndex[idx % roleColorClassByIndex.length]}`}>{role}</p>
              <p className="font-body-md text-sm text-on-surface-variant line-clamp-3">
                {bio}
              </p>
            </motion.div>
              );
            })()
          ))}
        </div>
      </section>
    </div>
  );
}