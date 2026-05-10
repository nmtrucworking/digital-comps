import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, Copy } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitMessage(t('contact.form.successMessage'));
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);

      setTimeout(() => setSubmitMessage(''), 3000);
    }, 1000);
  };

  return (
    <div className="bg-background text-on-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-container rounded-xl p-3 text-on-primary shadow-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-label-bold text-primary uppercase tracking-widest text-xs">{t('common.siteName')}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-display-xl text-on-background leading-tight">
                  {t('contact.title')}
                </h1>
                <p className="font-body-lg text-on-surface-variant leading-relaxed ">
                  {t('contact.description')}
                </p>
              </div>
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-surface-container-high/80 backdrop-blur rounded-xl p-4 border border-outline-variant hover:border-primary/50 transition-all shadow-md">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="font-body-sm text-on-surface-variant">Available Support</div>
                </div>
                <div className="bg-surface-container-high/80 backdrop-blur rounded-xl p-4 border border-outline-variant hover:border-tertiary/50 transition-all shadow-md">
                  <div className="text-2xl font-bold text-tertiary">&lt;2h</div>
                  <div className="font-body-sm text-on-surface-variant">Response Time</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative h-96 hidden md:flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tertiary/5 rounded-3xl border border-outline-variant/30"></div>
              <div className="relative space-y-6">
                {/* Floating Cards */}
                <div className="absolute top-0 right-0 bg-surface-container rounded-2xl p-6 shadow-xl border border-outline-variant w-72 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg text-primary flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-label-bold text-sm text-on-background">Message</span>
                  </div>
                  <p className="font-body-sm text-on-surface-variant">Get in touch with our team</p>
                </div>
                <div className="absolute bottom-0 left-0 bg-surface-container rounded-2xl p-6 shadow-xl border border-outline-variant w-72 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-tertiary/10 rounded-lg text-tertiary flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-label-bold text-sm text-on-background">Call Us</span>
                  </div>
                  <p className="font-body-sm text-on-surface-variant">Direct phone support available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Email Card */}
            <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant hover:border-primary/30 hover:shadow-[0_4px_16px_rgba(0,209,193,0.1)] transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-headline-md font-label-bold text-on-background">
                  {t('contact.info.email.title')}
                </h3>
              </div>
              {/* add quick copy for email */}
              <p className="font-body-md text-on-surface-variant flex flex-row items-center gap-1">
                {t('contact.info.email.value')}
                <button 
                    className="ml-2 text-primary hover:text-primary/80 focus:outline-none cursor-pointer" 
                    onClick={() => navigator.clipboard.writeText(t('contact.info.email.value'))}>
                  <Copy className="w-4 h-4" />
                </button>
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant hover:border-tertiary/30 hover:shadow-[0_4px_16px_rgba(0,209,193,0.1)] transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-tertiary/10 rounded-lg text-tertiary">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-headline-md font-label-bold text-on-background">
                  {t('contact.info.phone.title')}
                </h3>
              </div>
              <p className="font-body-md text-on-surface-variant flex flex-row items-center gap-1">
                {t('contact.info.phone.value')}
                <button 
                    className="ml-2 text-primary hover:text-primary/80 focus:outline-none cursor-pointer" 
                    onClick={() => navigator.clipboard.writeText(t('contact.info.phone.value'))}>
                  <Copy className="w-4 h-4" />
                </button>
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant hover:border-secondary/30 hover:shadow-[0_4px_16px_rgba(0,209,193,0.1)] transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-headline-md font-label-bold text-on-background">
                  {t('contact.info.location.title')}
                </h3>
              </div>
              <p className="font-body-md text-on-surface-variant">
                {t('contact.info.location.value')}
              </p>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Response Time */}
            <div className="lg:col-span-1">
              {/* Response Time Box */}
              <div className="bg-gradient-to-br from-primary/10 to-tertiary/10 rounded-2xl p-8 border border-primary/20 space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-headline-md font-label-bold text-on-background">
                    {t('contact.info.responseTime.title')}
                  </h3>
                </div>
                <p className="font-body-md text-on-surface-variant">
                  {t('contact.info.responseTime.value')}
                </p>
              </div>

              {/* Quick Support Box */}
              <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h3 className="text-headline-md font-label-bold text-on-background">
                    {t('contact.form.support.title')}
                  </h3>
                </div>
                <ul className="space-y-3 font-body-md text-on-surface-variant">
                  {/* Support Items of list */}
                  {(t('contact.form.support.items', { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-bold">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant">
                <h2 className="text-headline-md font-label-bold text-on-background mb-6">
                    {t('contact.form.title')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-label-bold text-on-background mb-2">
                        {t('contact.form.labels.name')} <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface-container-highest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-body-md"
                        placeholder={t('contact.form.placeholders.name')}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block font-label-bold text-on-background mb-2">
                        {t('contact.form.labels.email')} <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface-container-highest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-body-md"
                        placeholder={t('contact.form.placeholders.email')}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block font-label-bold text-on-background mb-2">
                      {t('contact.form.labels.subject')} <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface-container-highest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-body-md"
                      placeholder={t('contact.form.placeholders.subject')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-label-bold text-on-background mb-2">
                      {t('contact.form.labels.message')} <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-surface-container-highest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-body-md resize-none"
                      placeholder={t('contact.form.placeholders.message')}
                    />
                  </div>

                  {/* Success Message */}
                  {submitMessage && (
                    <div className="p-4 bg-primary/10 border border-primary rounded-xl flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-body-md text-primary">{submitMessage}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-tertiary to-primary-container text-on-primary font-button px-6 py-3 rounded-xl hover:shadow-[0_6px_20px_rgba(0,209,193,0.23)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  </button>

                  {/* Form Note */}
                  <p className="text-on-surface-variant font-body-sm text-center">
                    {t('contact.form.note')}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
