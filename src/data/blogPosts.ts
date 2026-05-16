import type { BlogPost } from '../types/data';
import linkedInBlog from '../assets/images/blog-linkedIn.png';
import phishingBlog from '../assets/images/blog-phishing.png';
import fomoBlog from '../assets/images/blog-fomo.png';
import useSMSmartBlog from '../assets/images/blog-useSMSmart.png';
import createContentBlog from '../assets/images/blog-createContent.png';
import scamBlog from '../assets/images/blog-scam.png';
import timeManagementBlog from '../assets/images/blog-timeManagement.png';
import useAIBlog from '../assets/images/blog-useAI.png';
import thumbNailSlideShow01 from '../assets/images/thumbnail-slide-show.png';

export const blogPosts: BlogPost[] = [
	{
		id: 'post-001',
		title: 'Xây dựng Personal Brand trên LinkedIn cho sinh viên',
		author: 'Hoàng Nam',
		publishedDate: '2025-09-12',
		thumbnail: linkedInBlog,
		summary: 'Hướng dẫn từ profile đến networking cho sinh viên chưa có kinh nghiệm.',
		content: `![LinkedIn for students](${linkedInBlog})

LinkedIn không chỉ dành cho người đã đi làm. Với sinh viên, đây là nơi **định vị** bản thân: bạn học gì, quan tâm điều gì, và đang xây dựng năng lực nào.

> Mục tiêu: để người khác hiểu “bạn là ai” trong 10 giây.

## 1. Tối ưu hồ sơ (Profile)
- Ảnh đại diện rõ mặt, nền đơn giản; ảnh bìa thể hiện lĩnh vực bạn theo đuổi.
- Headline: vai trò + mục tiêu + thế mạnh.
  - Ví dụ: \`Sinh viên CNTT | Quan tâm An toàn mạng | Thực hành SOC cơ bản\`
- About: 5–7 dòng, tập trung vào: bạn đang học gì, dự án/hoạt động tiêu biểu, mục tiêu 6 tháng tới.

## 2. Làm “bằng chứng năng lực” (Proof of work)
- Ghim 1–2 dự án (GitHub/portfolio), bài thuyết trình, báo cáo nghiên cứu, sản phẩm thiết kế.
- Mô tả dự án theo cấu trúc: **Bối cảnh → Bạn làm gì → Kết quả → Bài học**.

## 3. Xây mạng lưới (Networking) đúng cách
- Kết nối với: anh/chị khóa trên, mentor, recruiter, người làm trong ngành bạn thích.
- Khi gửi lời mời, viết 1–2 câu cá nhân hóa: bạn biết họ từ đâu và muốn học điều gì.

## 4. Lịch đăng nội dung cho người mới
- Tuần 1: giới thiệu bản thân + mục tiêu học tập.
- Tuần 2: chia sẻ 1 bài học từ môn học/dự án.
- Tuần 3: tổng hợp tài nguyên hữu ích (tool, khóa học, checklist).
- Tuần 4: phản hồi/quan điểm về một xu hướng (AI, an toàn mạng, dữ liệu).

## 5. Lỗi thường gặp
- Copy headline “Open to work” chung chung mà không có hướng đi cụ thể.
- Thêm quá nhiều kỹ năng nhưng thiếu dự án minh chứng.
- Kết nối ồ ạt nhưng không tương tác (comment có giá trị mới là điểm cộng).

### Gợi ý bắt đầu ngay
Hoàn thiện headline + About, sau đó đăng một bài ngắn: **“3 điều mình học được khi làm dự án X”**.`,
		tags: ['Personal Branding', 'Career']
	},
	{
		id: 'post-002',
		title: 'Phân biệt Phishing Email tinh vi trong môi trường học thuật',
		author: 'Thanh Tú',
		publishedDate: '2025-10-03',
		thumbnail: phishingBlog,
		summary: 'Những mánh lừa đảo và cách nhận biết bằng trực giác số.',
		content: `![Phishing email awareness](${phishingBlog})

Phishing trong môi trường học thuật thường giả mạo: phòng đào tạo, thư viện, hệ thống học trực tuyến, hoặc email “từ thầy/cô”. Mục tiêu là **đánh cắp tài khoản trường**, chiếm email, hoặc cài mã độc.

## 1. Dấu hiệu nhận biết nhanh
- Người gửi lạ hoặc domain “na ná” domain trường (ví dụ: \`.edu-vn\` thay vì \`.edu.vn\`).
- Nội dung tạo áp lực: “Tài khoản sẽ bị khóa trong 2 giờ”, “nộp phí ngay”.
- Link dẫn đến trang đăng nhập nhìn giống thật nhưng URL khác.
- File đính kèm dạng \`.zip\` / \`.exe\` / \`.iso\` hoặc macro trong \`.docm\`.

## 2. Kiểm tra link an toàn
- Di chuột lên link để xem URL thật trước khi bấm.
- Ưu tiên **tự gõ địa chỉ website** của trường và đăng nhập từ đó.
- Nếu phải đăng nhập, xem kỹ **HTTPS + tên miền** chính xác.

## 3. Những “mánh” tinh vi
- Email viết rất đúng chính tả, có logo, chữ ký, template.
- Dùng tên người thật trong khoa/lớp (lộ từ mạng xã hội).
- Gửi vào đúng thời điểm nhạy cảm: đăng ký môn, học phí, cấp lại mật khẩu.

## 4. Checklist hành động
- Không vội: dừng 30 giây để kiểm tra người gửi + link + yêu cầu.
- Không mở file lạ: nếu cần, xác minh qua kênh khác (Zalo lớp, số điện thoại văn phòng).
- Báo cáo: forward cho bộ phận IT/giáo vụ nếu nghi ngờ.

## 5. Nếu lỡ bấm link/nhập mật khẩu
- Đổi mật khẩu ngay, bật **2FA** nếu có.
- Đăng xuất khỏi tất cả thiết bị (nếu hệ thống hỗ trợ).
- Kiểm tra email: \`Forwarding rules\`, \`Filters\`, và lịch sử đăng nhập.

> Thói quen quan trọng nhất: luôn xác minh qua **2 kênh** khi email yêu cầu thao tác nhạy cảm. Phishing thắng vì chúng ta vội. Bạn thắng khi bạn kiểm tra.`,
		tags: ['Cybersecurity', 'Digital Safety']
	},
	{
		id: 'post-003',
		title: 'Nỗi sợ bị bỏ lỡ (FOMO) và áp lực phải năng suất',
		author: 'Linh Chi',
		publishedDate: '2025-08-28',
		thumbnail: fomoBlog,
		summary: 'Góc nhìn chân thật từ một sinh viên năm cuối về việc học cách nói không với những khóa học online không cần thiết.',
		content: `![FOMO and productivity](${fomoBlog})

FOMO không chỉ là sợ “bị bỏ lỡ tin tức”. Với sinh viên, FOMO thường là: sợ bỏ lỡ cơ hội học thêm, chứng chỉ, workshop, internship… và rồi biến thành áp lực phải làm mọi thứ cùng lúc.

## 1. Nhận diện FOMO “năng suất”
- Bạn đăng ký nhiều khóa học nhưng không hoàn thành.
- Bạn liên tục so sánh với người khác trên mạng xã hội.
- Bạn thấy tội lỗi khi nghỉ ngơi dù đã làm đủ.

## 2. Tư duy chuyển đổi: từ “làm nhiều” sang “làm đúng”
- Mục tiêu không phải hoàn thành tất cả, mà là hoàn thành những thứ quan trọng nhất.
- Chọn 1–2 trục chính mỗi học kỳ (ví dụ: **GPA + 1 dự án**).

## 3. Bộ lọc 3 câu hỏi trước khi nhận thêm việc
1. Việc này có phục vụ mục tiêu 3 tháng tới không?
2. Nếu làm việc này, mình sẽ bỏ thứ gì?
3. Mình có thể hoàn thành ở mức “đủ tốt” không?

## 4. Thiết kế lịch nghỉ như lịch học
- Chặn giờ nghỉ trong tuần (đi bộ, thể thao, gặp bạn).
- Tắt thông báo ứng dụng gây phân tâm trong giờ tập trung.

## 5. “Nói không” mà không thấy áy náy
- Dùng câu trả lời trung tính: “Mình đang tập trung vào X nên chưa tham gia được.”
- Đề nghị phương án khác: “Mình không tham gia full, nhưng có thể góp ý tài liệu.”

> Điểm mấu chốt: bạn không cần chạy đua với timeline của người khác. Bạn cần một nhịp điệu bền vững để đi đường dài.`,
		tags: ['Mental Health', 'Work-Life Balance']
	},
	{
		id: 'post-004',
		title: 'Cách sử dụng mạng xã hội một cách thông minh cho sinh viên',
		author: 'Minh Trang',
		publishedDate: '2025-09-05',
		thumbnail: useSMSmartBlog,
		summary: 'Tối đa hóa lợi ích và giảm thiểu những ảnh hưởng tiêu cực của mạng xã hội trong cuộc sống hàng ngày.',
		content: `![Use social media smart](${useSMSmartBlog})

Mạng xã hội có thể là công cụ học tập, kết nối và xây dựng hình ảnh cá nhân. Vấn đề là chúng ta dùng nó theo thói quen, không theo mục tiêu.

## 1. Xác định mục tiêu dùng mạng xã hội
- **Học tập:** theo dõi kênh chia sẻ kiến thức, nhóm học thuật.
- **Nghề nghiệp:** theo dõi công ty, recruiter, cộng đồng chuyên ngành.
- **Giải trí:** chọn nội dung lành mạnh, giới hạn thời gian.

## 2. Dọn “feed” theo nguyên tắc 80/20
- 80% nội dung nuôi dưỡng: kiến thức, kỹ năng, sức khỏe tinh thần.
- 20% giải trí: để thư giãn, không phải để “trốn chạy”.

## 3. Giới hạn thời gian theo ngữ cảnh
- Sáng: không lướt 30 phút đầu ngày.
- Khi học: để điện thoại xa tầm tay, dùng chế độ tập trung.
- Trước khi ngủ: tắt màn hình trước 45 phút.

## 4. Kỹ năng kiểm chứng thông tin
- Đọc tiêu đề chưa đủ: mở nguồn gốc, xem tác giả/đơn vị.
- Tìm ít nhất 2 nguồn độc lập trước khi tin và chia sẻ.
- Cẩn thận với nội dung kích động cảm xúc (giận, sợ, sốc).

## 5. Bảo vệ quyền riêng tư
- Không đăng công khai lịch trình chi tiết.
- Rà soát quyền truy cập ứng dụng và thiết bị.
- Bật **2FA** cho các tài khoản quan trọng.

### Gợi ý thực hành
Thử “một tuần có chủ đích” — mỗi ngày bạn chỉ mở mạng xã hội khi đã hoàn thành **1 việc quan trọng**. Bạn sẽ thấy mình chủ động hơn rất nhiều.`,
		tags: ['Digital Citizenship', 'Social Media']
	},
	{
		id: 'post-005',
		title: '5 cách tạo nội dung chất lượng cao khi bạn là người mới bắt đầu',
		author: 'Quân Đặng',
		publishedDate: '2025-09-18',
		thumbnail: createContentBlog,
		summary: 'Từ blogging đến YouTube - hướng dẫn bắt đầu tạo nội dung mà không cần có kinh nghiệm làm phim hay viết lách.',
		content: `![Content creation basics](${createContentBlog})

Bạn không cần “thiên phú” để tạo nội dung tốt. Bạn cần một hệ thống đơn giản để làm đều và cải thiện dần.

## 1. Chọn 1 chủ đề cốt lõi (Niche) trong 30 ngày
- Ví dụ: “kỹ năng học tập”, “an toàn mạng cơ bản”, “phỏng vấn thực tập”.
- Đừng chọn quá rộng. Rộng quá sẽ khó nhất quán.

## 2. Dùng công thức nội dung dễ áp dụng
- Vấn đề → Nguyên nhân → Giải pháp → Ví dụ → Checklist.
- Hoặc: “Mình đã sai gì → Mình sửa thế nào → Kết quả”.

## 3. Tối ưu cho người xem, không phải cho thuật toán
- Tiêu đề rõ lợi ích: “5 dấu hiệu email lừa đảo” thay vì “Chuyện hôm nay”.
- Mở đầu 2 câu nêu ngay nội dung chính.

## 4. Lặp lại format để tiết kiệm năng lượng
- Video: intro 5s → 3 ý chính → 1 ví dụ → tổng kết.
- Bài viết: 1 đoạn mở → bullet point → ví dụ → kết.

## 5. Nâng chất lượng bằng phản hồi nhỏ
- Mỗi tuần chọn 1 yếu tố để cải thiện: âm thanh, ánh sáng, cấu trúc, thumbnail.
- Đừng cố nâng mọi thứ cùng lúc.

> Chỉ cần đăng 8–12 nội dung trong tháng đầu là bạn đã có “đà”. Chất lượng sẽ đi lên khi bạn làm đều và biết mình đang cải thiện cái gì.`,
		tags: ['Content Creation', 'Personal Branding']
	},
	{
		id: 'post-006',
		title: 'Các loại scam tiền mã hóa mà sinh viên cần biết',
		author: 'Thanh Tú',
		publishedDate: '2025-09-22',
		thumbnail: scamBlog,
		summary: 'Nhận diện các chiêu thức lừa đảo liên quan đến cryptocurrency và cách bảo vệ tài sản số của bạn.',
		content: `![Crypto scam awareness](${scamBlog})
Tiền mã hóa hấp dẫn vì lợi nhuận “nghe có vẻ” nhanh. Scam cũng bùng nổ vì nhiều người mới thiếu kiến thức nền.

## 1. Scam “lợi nhuận cam kết”
- Hứa lãi 1–3%/ngày, “không rủi ro”.
- Dấu hiệu: không giải thích cơ chế tạo lợi nhuận, chỉ tập trung dụ nạp tiền.

## 2. Ponzi/đa cấp đội lốt đầu tư
- Trả thưởng bằng tiền người sau nạp vào.
- Thường có “leader” và nhóm chat hô hào, khoe lãi, thúc nạp thêm.

## 3. Airdrop/Website giả mạo
- Dẫn bạn vào trang “kết nối ví” rồi xin quyền ký giao dịch.
- Chỉ một lần approve nhầm có thể mất toàn bộ token.

## 4. Lừa “khôi phục ví”
- Ai đó giả làm support yêu cầu seed phrase/12–24 từ.
- Không ai có quyền hỏi seed phrase của bạn, kể cả “support”.

## 5. Cách tự bảo vệ
- Dùng ví phụ để thử nghiệm, số tiền nhỏ.
- Không ký giao dịch nếu không hiểu: đọc kỹ nội dung approve/transfer.
- Bật **2FA** cho sàn, dùng mật khẩu mạnh và không dùng lại.
- Không tin lời hứa “cam kết” — thị trường biến động luôn có rủi ro.

> Nguyên tắc sống còn: **seed phrase** là chìa khóa két sắt. Ai có nó là có tất cả. Tuyệt đối không chia sẻ.`,
		tags: ['Cybersecurity', 'Financial Safety']
	},
	{
		id: 'post-007',
		title: 'Sử dụng AI một cách có đạo đức trong việc học tập',
		author: 'Hoàng Nam',
		publishedDate: '2025-09-25',
		thumbnail: useAIBlog,
		summary: 'Tìm cân bằng giữa việc sử dụng công cụ AI để hỗ trợ học tập mà vẫn phát triển kỹ năng thực sự.',
		content: `![Ethical AI usage](${useAIBlog})

AI giúp học nhanh hơn, nhưng cũng dễ khiến chúng ta “mượn năng lực” thay vì xây năng lực. Dùng AI có đạo đức nghĩa là: **minh bạch**, đúng quy định, và vẫn học thật.

## 1. Dùng AI như gia sư, không phải “người làm hộ”
- Nhờ giải thích khái niệm, gợi ý hướng giải, tạo bài tập tương tự.
- Tránh: copy nguyên bài làm nộp như của mình.

## 2. Quy tắc minh bạch
- Nếu bài/đồ án cho phép dùng AI, hãy ghi rõ bạn dùng công cụ gì và dùng ở bước nào.
- Nếu không cho phép, chỉ dùng để học, không dùng vào sản phẩm nộp.

## 3. Kỹ năng đặt câu hỏi (Prompt) để học sâu
- “Giải thích như cho người mới, kèm ví dụ.”
- “Đưa 3 cách giải, so sánh ưu/nhược.”
- “Hỏi ngược lại mình 5 câu để kiểm tra hiểu.”

## 4. Kiểm chứng và trích dẫn
- AI có thể sai. Luôn kiểm tra lại bằng sách, bài giảng, nguồn đáng tin.
- Khi AI tóm tắt tài liệu, hãy đối chiếu với tài liệu gốc.

## 5. Bảo vệ dữ liệu cá nhân
- Không đưa thông tin nhạy cảm: mã số SV, dữ liệu nội bộ, đề thi chưa công bố.

> Mục tiêu cuối cùng: AI giúp bạn hiểu nhanh hơn, nhưng bài làm phản ánh tư duy thật của bạn. Làm được điều đó là dùng AI đúng cách.`,
		tags: ['AI', 'Digital Citizenship']
	},
	{
		id: 'post-008',
		title: 'Cách quản lý thời gian khi công việc, học tập, và sở thích cạnh tranh',
		author: 'Linh Chi',
		publishedDate: '2025-09-30',
		thumbnail: timeManagementBlog,
		summary: 'Kỹ thuật quản lý thời gian thực tế mà giúp bạn không cảm thấy choáng ngợp bởi mọi thứ.',
		content: `![Time management](${timeManagementBlog})

Quản lý thời gian thực ra là quản lý năng lượng và ưu tiên. Khi bạn có quá nhiều “vai”, bạn cần một hệ thống đủ nhẹ để duy trì.

## 1. Chốt 3 ưu tiên mỗi tuần
- 1 việc học tập (bài tập lớn/ôn thi).
- 1 việc công việc/CLB (deliverable).
- 1 việc cá nhân (sức khỏe/quan hệ).

## 2. Time-block theo nhịp năng lượng
- Sáng: việc cần tập trung sâu (đọc, làm bài, code).
- Chiều: việc trao đổi (họp, trả lời tin nhắn).
- Tối: việc nhẹ (tổng kết, chuẩn bị).

## 3. Quy tắc 2 phút để chống trì hoãn
- Nếu việc làm dưới 2 phút (trả email ngắn, tạo ghi chú), làm ngay.

## 4. Giảm “chuyển ngữ cảnh”
- Gom việc cùng loại: trả lời tin nhắn 2 lần/ngày thay vì rải cả ngày.
- Khi học, dùng Pomodoro 25/5 hoặc 50/10 tùy bạn.

## 5. Dành “buffer” cho cuộc sống thật
- Mỗi ngày để 30–60 phút trống. Sẽ luôn có việc phát sinh.
- Không có buffer là lịch sẽ vỡ.

> Bạn không thiếu thời gian. Bạn thiếu một cách chọn việc phù hợp với mục tiêu và năng lượng của mình. Bắt đầu nhỏ: lên lịch 1 ngày mẫu, rồi lặp lại.`,
		tags: ['Productivity', 'Work-Life Balance']
	},
	{
    id: 'blog-digital-citizen-portrait',
    title: 'Khung Năng Lực Số Và Trách Nhiệm Hành Vi Của Sinh Viên Trong Kỷ Nguyên Siêu Kết Nối',
    summary: 'Bài viết phân tích mô hình năng lực số dành cho sinh viên hiện đại, tập trung vào kỹ năng khai thác thông tin phản biện, bảo mật dữ liệu và đạo đức ứng xử trực tuyến.',
    content: `
	### 1. Đặt vấn đề và bối cảnh nghiên cứu\nTrong bối cảnh chuyển đổi số giáo dục toàn diện, không gian mạng không còn đơn thuần là công cụ tra cứu thứ cấp, mà đã dịch chuyển thành môi trường học tập, giao tiếp và vận hành chính yếu của sinh viên đại học. Việc thiết lập một khung năng lực số toàn diện là cơ sở tảng để đảm bảo hiệu suất học thuật và giảm thiểu các rủi ro an ninh thông tin cá nhân.\n\n### 2. Năng lực khai thác và quản lý dữ liệu chủ động\nTương tác dữ liệu hiệu quả đòi hỏi sinh viên vượt qua kỹ năng tìm kiếm từ khóa thông thường, tiến tới quy trình phân loại, lưu trữ và đồng bộ hóa tài nguyên học thuật một cách hệ thống. Việc sử dụng các công cụ quản lý điện toán đám mây và nền tảng cộng tác trực tuyến giúp tối ưu hóa cấu trúc dữ liệu cá nhân, phục vụ tiến trình nghiên cứu dài hạn.\n\n### 3. Tư duy phản biện và cơ chế kiểm chứng thông tin\nĐối diện với thực trạng bùng nổ thông tin và sự gia tăng của các dạng thức tin giả (Fake News) trên các nền tảng truyền thông xã hội, tư duy phản biện đóng vai trò như một bộ lọc kỹ thuật. Quy trình kiểm chứng yêu cầu sinh viên thực hiện đối chiếu chéo nguồn lực (cross-referencing), xác minh tính chính danh của tác giả và đánh giá các dẫn chứng định lượng trước khi tiếp thu hoặc tái lan truyền thông tin.\n\n### 4. Nguyên tắc bảo mật thông tin và an toàn không gian mạng\nQuản lý định danh số cá nhân đòi hỏi việc thực thi các biện pháp phòng ngừa nghiêm ngặt trước các phương thức tấn công phi kỹ thuật (Phishing) và mã độc (Malware). Việc cấu hình mật khẩu phức tạp, kích hoạt xác thực hai yếu tố (2FA) và kiểm soát quyền riêng tư của tài khoản là các hành vi bắt buộc nhằm bảo vệ quyền tác giả học thuật và dữ liệu cá nhân.\n\n### 5. Đạo đức số và trách nhiệm hành vi cộng đồng (Netiquette)\nHành vi ứng xử trên môi trường trực tuyến là thước đo năng lực văn hóa của một công dân số. Sinh viên cần nhận thức rõ ranh giới pháp lý và quy chuẩn đạo đức khi thực hiện phát ngôn, tranh luận học thuật hoặc chia sẻ thông tin trực tuyến, nhằm duy trì một hệ sinh thái mạng lành mạnh, có tính xây dựng cao.\n\n### 6. Kết luận và Khuyến nghị hệ thống\nKhung năng lực số không phải là một tập hợp các thao tác kỹ thuật cố định, mà là một tiến trình cập nhật tri thức liên tục. Sinh viên cần chủ động tham gia vào các hoạt động thực nghiệm, ứng dụng công nghệ mới để hoàn thiện chân dung công dân số của bản thân.
	`,
    publishedDate: '2026-05-17',
    author: 'Digital Citizen Team',
    thumbnail: thumbNailSlideShow01,
    tags: ['Năng lực số', 'Nghiên cứu sinh viên', 'An toàn thông tin'],
    slidesUrl: 'https://drive.google.com/file/d/1lZZaMznmj6z-AIMzbUeS1Yj22zSJe11A/view?usp=sharing'
  }
];
