import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { teamMembers } from '../data/teamMembers';

export default function TeamMemberDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="w-full max-w-container-max mx-auto px-8 md:px-xl py-xl">
        <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg text-center">
          <h1 className="font-headline-lg text-2xl md:text-3xl text-on-background font-bold mb-sm">Không tìm thấy thành viên</h1>
          <p className="text-on-surface-variant mb-md">Thành viên có thể không tồn tại hoặc đường dẫn không đúng.</p>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container rounded-lg font-button transition-all hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại trang Team
          </Link>
        </div>
      </div>
    );
  }

  const fullName = member.fullNameKey ? t(member.fullNameKey) : (member.fullName ?? '');
  const role = member.roleKey ? t(member.roleKey) : (member.role ?? '');
  const bio = member.bioKey ? t(member.bioKey) : (member.bio ?? '');

  return (
    <div className="w-full max-w-container-max mx-auto px-8 md:px-xl py-xl">
      <div className="mb-lg">
        <Link to="/team" className="inline-flex items-center gap-2 text-primary hover:text-primary-container transition-colors font-label-bold">
          <ArrowLeft className="w-4 h-4" />
          Quay lại trang Team
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-4">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-surface-container mb-md">
              <img src={member.avatarUrl} alt={fullName} className="w-full h-full object-cover" />
            </div>
            <h1 className="font-headline-lg text-2xl text-on-background font-bold">{fullName}</h1>
            <p className="text-primary font-label-bold mt-xs">{role}</p>
            {member.affiliation && <p className="text-on-surface-variant text-sm mt-xs">{member.affiliation}</p>}
          </div>
        </div>

        <div className="lg:col-span-8 space-y-md">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg">
            <h2 className="font-headline-md text-xl text-on-background font-bold mb-sm">Giới thiệu</h2>
            <p className="text-on-background leading-relaxed">{bio}</p>
          </div>

          {member.socialLinks && member.socialLinks.length > 0 && (
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-lg">
              <h2 className="font-headline-md text-xl text-on-background font-bold mb-sm">Liên kết</h2>
              <div className="flex flex-wrap gap-sm">
                {member.socialLinks.map((link) => (
                  <a
                    key={`${member.id}-${link.label}`}
                    href={link.url}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 text-on-background hover:bg-surface-container-high transition-all font-label-bold text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
