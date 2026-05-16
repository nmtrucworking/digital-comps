import type { Video } from '../types/data';

import landingThumbnail from '../assets/images/thumbnail-heo-videopng.png';

const seminarVideo = 'https://drive.google.com/file/d/1WtV5b9qcNgRAtQMe6tskEsltlT8xi8Vv/view?usp=sharing';
const seminarThumbnail = 'https://drive.google.com/thumbnail?id=1WtV5b9qcNgRAtQMe6tskEsltlT8xi8Vv&sz=w1600';
const landingVideo = 'https://drive.google.com/file/d/132ZCJSFW1nwv2KHgAYKQWO_nZsAi04nH/view?usp=sharing';

export const videoContent: Video[] = [
	{
		id: 'vid-001',
		title: 'Toạ đàm: Sinh viên và An toàn không gian mạng',
		description: 'Buổi toạ đàm bàn về các nguy cơ an toàn mạng phổ biến và cách bảo vệ thông tin cá nhân.',
		duration: '45:12',
		viewCount: 512,
		speakers: ['TS. Nguyễn A', 'PGS. Trần B'],
		videoUrl: seminarVideo,
		thumbnailUrl: seminarThumbnail,
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
		speakers: ['Chuyên gia bảo mật C'],
		videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		thumbnailUrl: 'https://via.placeholder.com/800x450.png?text=Video+2'
	},
	{
		id: 'vid-003',
		title: "Cuộc thi Sáng tạo nội dung số 2024 - Tổng hợp",
		duration: '12:20',
		viewCount: 842,
		speakers: ['Chuyên gia bảo mật D'],
		videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		thumbnailUrl: 'https://via.placeholder.com/1200x720.png?text=Video+3'
	},
	{
		id: 'vid-004',
		title: 'Video Landing-Page: Digital Citizen',
		description: 'Tổ hợp 8 tài nguyên đa phương tiện (5 ảnh tĩnh tĩnh, 3 video động) thành một chuỗi thông tin liên tục, có tính logic nhân quả nhằm tối ưu hóa tỷ lệ chuyển đổi trên trang chủ.',
		duration: '00:30',
		viewCount: 0,
		speakers: ['Digital Citizen Team'],
		videoUrl: landingVideo,
		thumbnailUrl: landingThumbnail,
		chapters: [
			{ time: '00:00:00', title: 'Lời Mở Đầu - Không Gian Siêu Kết Nối' },
			{ time: '00:00:05', title: 'Mặt Sáng - Cơ Hội Không Giới Hạn' },
			{ time: '00:00:12', title: 'Mặt Tối - Cạm Bẫy Trực Tuyến' },
			{ time: '00:00:18', title: 'Giải Pháp - Trang Bị Năng Lực Số' },
			{ time: '00:00:24', title: 'Trực Quan Hóa Sản Phẩm Nhóm' },
			{ time: '00:00:27', title: 'Điều Hướng Chuyển Đổi (CTA)' }
		]
	}
];
