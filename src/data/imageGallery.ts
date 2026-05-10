import type { ImageItem } from '../types/data';
import imgNewFE from '../assets/images/library-newFE.png';
import imgColab from '../assets/images/library-colab.png';
import imgWorkingTogether from '../assets/images/library-working_together.png';

export const imageGallery: ImageItem[] = [
	{
		id: 'img-001',
		url: imgNewFE,
		altText: 'Giao diện ứng dụng mới',
		category: 'Hoạt động',
		caption: 'Giao diện ứng dụng mới',
		subImages: [
			{ 
				id: 'sub-1-1', 
				url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800', 
				caption: 'Khách mời phát biểu', 
				altText: 'Khách mời phát biểu' 
			},
			{ 
				id: 'sub-1-2', 
				url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', 
				caption: 'Toàn cảnh hội trường', 
				altText: 'Toàn cảnh hội trường' 
			}
		]
	},
	{
		id: 'img-002',
		url: imgColab,
		altText: 'Hoạt động nhóm',
		category: 'Sự kiện',
		caption: 'Hoạt động nhóm',
		subImages: [
			{ 
				id: 'sub-2-1', 
				url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', 
				caption: 'Làm việc nhóm', 
				altText: 'Làm việc nhóm' 
			}
		]
	},
	{
		id: 'img-003',
		url: imgWorkingTogether,
		altText: 'Students working together',
		category: 'Illustration',
		caption: 'Students working together'
	}
];
