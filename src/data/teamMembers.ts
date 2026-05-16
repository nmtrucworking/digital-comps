import type { TeamMember } from '../types/data';
import nmtAvt from '../assets/member-avts/nmt.jpg'
import ptptAvt from '../assets/member-avts/ptpt.jpg'
import lyAvt from '../assets/member-avts/ly.jpg'
import dctpAvt from '../assets/member-avts/dctp.jpg'


export const teamMembers: TeamMember[] = [
	{
		id: 'tm-001',
		fullNameKey: 'teamMembers.tm-001.fullName',
		roleKey: 'teamMembers.tm-001.role',
		bioKey: 'teamMembers.tm-001.bio',
		avatarUrl: nmtAvt,
		socialLinks: [{ label: 'GitHub', url: 'https://github.com/nmtrucworking' }]
	},
	{
		id: 'tm-002',
		fullNameKey: 'teamMembers.tm-002.fullName',
		roleKey: 'teamMembers.tm-002.role',
		bioKey: 'teamMembers.tm-002.bio',
		avatarUrl: ptptAvt,
		socialLinks: [{ label: 'GitHub', url: '#' }]
	},
	{
		id: 'tm-003',
		fullNameKey: 'teamMembers.tm-003.fullName',
		roleKey: 'teamMembers.tm-003.role',
		bioKey: 'teamMembers.tm-003.bio',
		avatarUrl: dctpAvt,
		socialLinks: [{ label: 'Website', url: '#' }]
	},
	{
		id: 'tm-004',
		fullNameKey: 'teamMembers.tm-004.fullName',
		roleKey: 'teamMembers.tm-004.role',
		bioKey: 'teamMembers.tm-004.bio',
		avatarUrl: lyAvt,
		socialLinks: [{ label: 'Website', url: '#' }]
	}
];
