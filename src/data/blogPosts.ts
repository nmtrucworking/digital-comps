import type { BlogPost } from '../types/data';

export const blogPosts: BlogPost[] = [
	{
		id: 'post-001',
		title: 'Xây dựng Personal Brand trên LinkedIn cho sinh viên',
		author: 'Hoàng Nam',
		publishedDate: '2025-09-12',
		thumbnail: 'https://via.placeholder.com/1200x675.png?text=Post+1',
		summary: 'Hướng dẫn từ profile đến networking cho sinh viên chưa có kinh nghiệm.',
		tags: ['Personal Branding', 'Career']
	},
	{
		id: 'post-002',
		title: 'Phân biệt Phishing Email tinh vi trong môi trường học thuật',
		author: 'Thanh Tú',
		publishedDate: '2025-10-03',
		summary: 'Những mánh lừa đảo và cách nhận biết bằng trực giác số.'
	}
];
