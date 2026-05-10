# Tài liệu Cấu trúc Lớp Dữ liệu (Data Layer)

Tài liệu này đặc tả cấu trúc và mục đích của các tệp cơ sở dữ liệu tĩnh được lưu trữ tại phân hệ `src/data/` trong dự án. Việc phân tách lớp dữ liệu khỏi lớp giao diện (UI Layer) tuân thủ nguyên tắc thiết kế phần mềm, giúp tối ưu hóa khả năng bảo trì và mở rộng hệ thống.

## 1. Tổng quan kiến trúc

Thư mục `src/data/` đóng vai trò là cơ sở dữ liệu tĩnh (Static Database) cho ứng dụng React. Thay vì nhúng trực tiếp dữ liệu (hard-code) vào các component, toàn bộ nội dung được quản lý tập trung thông qua các cấu trúc dữ liệu (Interfaces) được định nghĩa bằng TypeScript.

## 2. Danh sách các tệp cấu trúc dữ liệu

### 2.1. `src/data/videoContent.ts`
* **Mục đích:** Quản lý siêu dữ liệu (metadata) và cấu trúc phân đoạn của các tệp đa phương tiện định dạng video xuất hiện trên trang `/library`.
* **Cấu trúc dữ liệu dự kiến:**
  * `id`: Chuỗi định danh duy nhất (Unique Identifier).
  * `title`, `description`: Tiêu đề và mô tả nội dung.
  * `duration`, `viewCount`: Các chỉ số định lượng.
  * `speakers`: Danh sách diễn giả.
  * `chapters`: Mảng đối tượng chứa thông tin phân đoạn (timestamp, title, key takeaways).
  * `resources`: Danh sách tài liệu đính kèm.

### 2.2. `src/data/imageGallery.ts`
* **Mục đích:** Lưu trữ thông tin của các tệp hình ảnh được hiển thị trong khu vực Thư viện đa phương tiện, hỗ trợ phân loại và tối ưu hóa công cụ tìm kiếm (SEO).
* **Cấu trúc dữ liệu dự kiến:**
  * `id`: Định danh hình ảnh.
  * `url`: Đường dẫn tương đối hoặc tuyệt đối tới tệp hình ảnh.
  * `altText`: Văn bản thay thế (phục vụ Accessibility và SEO).
  * `category`: Phân loại hình ảnh (Ví dụ: Sự kiện, Hoạt động nhóm).
  * `caption`: Chú thích chi tiết.

### 2.3. `src/data/blogPosts.ts`
* **Mục đích:** Quản lý nội dung văn bản học thuật và chia sẻ kinh nghiệm trên trang `/blog`.
* **Cấu trúc dữ liệu dự kiến:**
  * `id`: Định danh bài viết.
  * `title`, `author`, `publishedDate`: Thông tin cơ bản.
  * `thumbnail`: Đường dẫn ảnh bìa.
  * `summary`: Đoạn trích dẫn tóm tắt.
  * `content`: Nội dung chi tiết (định dạng HTML hoặc Markdown).
  * `tags`: Danh sách thẻ phân loại (Ví dụ: An toàn mạng, Kỹ năng số).

### 2.4. `src/data/teamMembers.ts`
* **Mục đích:** Đặc tả thông tin của đội ngũ nghiên cứu và phát triển dự án, hiển thị trên trang `/team`.
* **Cấu trúc dữ liệu dự kiến:**
  * `id`: Định danh nhân sự.
  * `fullName`: Họ và tên đầy đủ.
  * `role`: Vị trí đảm nhiệm trong dự án.
  * `affiliation`: Đơn vị công tác/học tập.
  * `avatarUrl`: Đường dẫn ảnh chân dung.
  * `socialLinks`: Mảng chứa các liên kết mạng xã hội chuyên nghiệp (LinkedIn, GitHub).

### 2.5. `src/data/opportunities.ts`
* **Mục đích:** Quản lý hệ thống dữ liệu động cho các nhóm thẻ thông tin trên trang `/opportunities`, phân tách rõ rệt hai mảng nội dung.
* **Cấu trúc dữ liệu dự kiến:**
  * Phân chia thành hai mảng (Arrays) riêng biệt: `opportunitiesList` và `challengesList`.
  * Mỗi phần tử bao gồm:
    * `id`: Định danh mục nội dung.
    * `title`: Tiêu đề chính.
    * `icon`: Tên biểu tượng (tham chiếu tới hệ thống Material Symbols hoặc Lucide Icons).
    * `description`: Nội dung mô tả chi tiết.
    * `actionLink`: Đường dẫn điều hướng để tìm hiểu thêm.

## 3. Kiểu TypeScript và vị trí mẫu dữ liệu

Đã thêm các interface TypeScript tập trung tại `src/types/data.ts` và các dữ liệu mẫu (sample data) đã được đặt ở `src/data/*` như sau:

- `src/types/data.ts` — chứa các interface:
  - `Video` (với `VideoChapter`): `id, title, description?, duration?, viewCount?, speakers?, thumbnailUrl?, chapters?, resources?`
  - `ImageItem`: `id, url, altText, category?, caption?`
  - `BlogPost`: `id, title, author?, publishedDate?, thumbnail?, summary?, content?, tags?`
  - `TeamMember`: `id, fullName, role?, affiliation?, avatarUrl?, socialLinks?`
  - `OpportunityCard`: `id, title, icon?, description?, actionLink?`

- Dữ liệu mẫu đã tạo:
  - `src/data/videoContent.ts` → exports `videoContent: Video[]`
  - `src/data/imageGallery.ts` → exports `imageGallery: ImageItem[]`
  - `src/data/blogPosts.ts` → exports `blogPosts: BlogPost[]`
  - `src/data/teamMembers.ts` → exports `teamMembers: TeamMember[]`
  - `src/data/opportunities.ts` → exports `opportunitiesList: OpportunityCard[]` và `challengesList: OpportunityCard[]`

## 4. Ví dụ import và sử dụng

Trong component, import và dùng trực tiếp mảng dữ liệu:

```ts
import { videoContent } from '../data/videoContent';
import { imageGallery } from '../data/imageGallery';

// ví dụ render
videoContent.map(v => <img src={v.thumbnailUrl} alt={v.title} />)
```

Lưu ý: các file dữ liệu sử dụng `import type` cho các kiểu từ `src/types/data.ts` để tương thích với cờ TypeScript (verbatimModuleSyntax).

## 5. Kiểm tra nhanh

Để kiểm tra types/build nhanh:

```bash
npm run build
```

Kết quả build thành công nghĩa là các interface và import hoạt động đúng.

