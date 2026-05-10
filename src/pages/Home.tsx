import { Rocket, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Globe from '../components/Globe';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { teamMembers } from '../data/teamMembers';

export default function Home() {
  const { t } = useTranslation();
  const roleColorClassByIndex = ['text-primary', 'text-tertiary', 'text-secondary'];

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 md:px-20 max-w-container-max mx-auto w-full flex flex-col md:flex-row items-center gap-gutter min-h-[calc(100vh-80px)] py-12 overflow-visible">
        {/* Premium Background Glows */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-tertiary/15 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 -z-10"></div>
        
        <div className="flex-1 flex flex-col gap-md z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-container/10 text-primary font-label-bold text-label-bold px-4 py-2 rounded-full w-max inline-flex items-center gap-2"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-sm w-full"
          >
            <Link to="/opportunities" className="bg-gradient-to-r from-tertiary via-primary to-tertiary bg-[length:200%_auto] animate-text-gradient text-on-primary font-button text-button uppercase px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(0,106,98,0.3)] hover:shadow-[0_12px_28px_rgba(120,37,234,0.4)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-1 border border-white/20">
              {t('home.hero.cta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-primary text-primary font-button text-button uppercase px-8 py-4 rounded-full hover:bg-primary/5 transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-0.5">
              <PlayCircle className="w-5 h-5" />
              {t('home.hero.watchVideo')}
            </button>
          </motion.div>
        </div>
        <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mt-12 cursor-pointer">
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
    </>
  );
}
