import type { Video } from '../types/data';
import seminarVideo from '../assets/videos/A_professional_academic_semina.mp4';

export const videoContent: Video[] = [
	{
		id: 'vid-001',
		title: 'Toạ đàm: Sinh viên và An toàn không gian mạng',
		description: 'Buổi toạ đàm bàn về các nguy cơ an toàn mạng phổ biến và cách bảo vệ thông tin cá nhân.',
		duration: '45:12',
		viewCount: 512,
		speakers: ['TS. Nguyễn A', 'PGS. Trần B'],
		videoUrl: seminarVideo,
		thumbnailUrl: 'https://via.placeholder.com/1200x675.png?text=Digital+Safety+Seminar',
		chapters: [
			{ time: '00:00:00', title: 'Giới thiệu' },
			{ time: '00:05:12', title: 'Nguy cơ phổ biến' },
			{ time: '00:25:40', title: 'Giải pháp & Q&A' }
		],
		resources: [
			{ title: 'Slides', url: '#' }
		]
	},
	{
		id: 'vid-002',
		title: 'Hướng dẫn bảo mật cơ bản',
		duration: '03:45',
		viewCount: 1280,
		thumbnailUrl: 'https://via.placeholder.com/800x450.png?text=Video+2'
	},
	{
		id: 'vid-003',
		title: "Cuộc thi Sáng tạo nội dung số 2024 - Tổng hợp",
		duration: '12:20',
		viewCount: 842,
		thumbnailUrl: 'https://via.placeholder.com/1200x720.png?text=Video+3'
	}
];
