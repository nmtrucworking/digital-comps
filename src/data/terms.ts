export type TermsSectionId =
  | 'acceptance'
  | 'useLicense'
  | 'disclaimer'
  | 'limitations'
  | 'intellectualProperty'
  | 'userConduct'
  | 'thirdPartyLinks'
  | 'modifications'
  | 'governingLaw'
  | 'contact';

export type TermsContentBlock =
  | { type: 'paragraph'; key: string }
  | { type: 'title'; key: string }
  | { type: 'list'; items: string[]; bulletClassName: string };

export interface TermsSectionData {
  id: TermsSectionId;
  titleKey: string;
  icon: TermsSectionId;
  iconWrapperClassName: string;
  bodyClassName: string;
  layout: 'standard' | 'contact';
  blocks: TermsContentBlock[];
  cta?: {
    labelKey: string;
    href: string;
    className: string;
  };
}

const standardBodyClassName =
  'bg-surface-container- rounded-2xl p-8 border border-outline-variant space-y-4 font-body-md text-on-surface-variant';

export const termsSections: TermsSectionData[] = [
  {
    id: 'acceptance',
    titleKey: 'terms.sections.acceptance.title',
    icon: 'acceptance',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary',
    bodyClassName: standardBodyClassName,
    layout: 'standard',
    blocks: [{ type: 'paragraph', key: 'terms.sections.acceptance.content' }],
  },
  {
    id: 'useLicense',
    titleKey: 'terms.sections.useLicense.title',
    icon: 'useLicense',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary',
    bodyClassName: standardBodyClassName,
    layout: 'standard',
    blocks: [
      { type: 'paragraph', key: 'terms.sections.useLicense.content1' },
      { type: 'paragraph', key: 'terms.sections.useLicense.content2' },
      { type: 'title', key: 'terms.sections.useLicense.restrictions' },
      {
        type: 'list',
        bulletClassName: 'text-primary',
        items: [
          'terms.sections.useLicense.bullet1',
          'terms.sections.useLicense.bullet2',
          'terms.sections.useLicense.bullet3',
          'terms.sections.useLicense.bullet4',
        ],
      },
    ],
  },
  {
    id: 'disclaimer',
    titleKey: 'terms.sections.disclaimer.title',
    icon: 'disclaimer',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-tertiary/10 rounded-lg text-tertiary',
    bodyClassName: standardBodyClassName,
    layout: 'standard',
    blocks: [
      { type: 'paragraph', key: 'terms.sections.disclaimer.content1' },
      { type: 'paragraph', key: 'terms.sections.disclaimer.content2' },
    ],
  },
  {
    id: 'limitations',
    titleKey: 'terms.sections.limitations.title',
    icon: 'limitations',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary',
    bodyClassName: standardBodyClassName,
    layout: 'standard',
    blocks: [{ type: 'paragraph', key: 'terms.sections.limitations.content' }],
  },
  {
    id: 'intellectualProperty',
    titleKey: 'terms.sections.intellectualProperty.title',
    icon: 'intellectualProperty',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary',
    bodyClassName: standardBodyClassName,
    layout: 'standard',
    blocks: [{ type: 'paragraph', key: 'terms.sections.intellectualProperty.content' }],
  },
  {
    id: 'userConduct',
    titleKey: 'terms.sections.userConduct.title',
    icon: 'userConduct',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-tertiary/10 rounded-lg text-tertiary',
    bodyClassName: standardBodyClassName,
    layout: 'standard',
    blocks: [
      { type: 'paragraph', key: 'terms.sections.userConduct.description' },
      {
        type: 'list',
        bulletClassName: 'text-tertiary',
        items: [
          'terms.sections.userConduct.bullet1',
          'terms.sections.userConduct.bullet2',
          'terms.sections.userConduct.bullet3',
          'terms.sections.userConduct.bullet4',
        ],
      },
    ],
  },
  {
    id: 'thirdPartyLinks',
    titleKey: 'terms.sections.thirdPartyLinks.title',
    icon: 'thirdPartyLinks',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary',
    bodyClassName: standardBodyClassName,
    layout: 'standard',
    blocks: [{ type: 'paragraph', key: 'terms.sections.thirdPartyLinks.content' }],
  },
  {
    id: 'modifications',
    titleKey: 'terms.sections.modifications.title',
    icon: 'modifications',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary',
    bodyClassName: standardBodyClassName,
    layout: 'standard',
    blocks: [{ type: 'paragraph', key: 'terms.sections.modifications.content' }],
  },
  {
    id: 'governingLaw',
    titleKey: 'terms.sections.governingLaw.title',
    icon: 'governingLaw',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-secondary/10 rounded-lg text-secondary',
    bodyClassName: standardBodyClassName,
    layout: 'standard',
    blocks: [{ type: 'paragraph', key: 'terms.sections.governingLaw.content' }],
  },
  {
    id: 'contact',
    titleKey: 'terms.sections.contact.title',
    icon: 'contact',
    iconWrapperClassName: 'flex-shrink-0 p-3 bg-secondary/20 rounded-lg text-secondary',
    bodyClassName: 'bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20 space-y-6',
    layout: 'contact',
    blocks: [{ type: 'paragraph', key: 'terms.sections.contact.description' }],
    cta: {
      labelKey: 'terms.sections.contact.cta',
      href: '/contact',
      className:
        'inline-flex items-center gap-2 font-button px-6 py-3 bg-gradient-to-r from-secondary to-primary text-on-primary rounded-xl hover:shadow-[0_6px_20px_rgba(0,209,193,0.23)] transition-all',
    },
  },
];