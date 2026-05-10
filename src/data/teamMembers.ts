import type { TeamMember } from '../types/data';

export const teamMembers: TeamMember[] = [
	{
		id: 'tm-001',
		fullName: 'Nguyễn Văn A',
		role: 'Project Lead',
		affiliation: 'Đại học ABC',
		avatarUrl: 'https://via.placeholder.com/256.png?text=NV_A',
		socialLinks: [{ label: 'LinkedIn', url: '#' }]
	},
	{
		id: 'tm-002',
		fullName: 'Trần Thị B',
		role: 'Frontend',
		affiliation: 'Đại học XYZ',
		avatarUrl: 'https://via.placeholder.com/256.png?text=TT_B',
		socialLinks: [{ label: 'GitHub', url: '#' }]
	}
];
