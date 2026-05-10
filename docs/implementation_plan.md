# Tối ưu hóa UI/UX và Thêm Hiệu ứng Landing Page

Kế hoạch này tập trung vào việc làm cho trang chủ (landing page) trở nên sinh động, hiện đại hơn và sửa các lỗi UI/UX, đặc biệt là các lỗi về độ tương phản và khả năng truy cập (accessibility).

## User Review Required
> [!IMPORTANT]
> - Để hiển thị quả địa cầu 3D (model có thể xoay được), tôi dự định thêm thư viện `cobe` (một thư viện WebGL siêu nhẹ, khoảng 5kB). Bạn sẽ cần chạy lệnh `npm install` sau khi tôi cập nhật mã nguồn. Bạn có đồng ý với việc thêm thư viện này không?
> - Các hiệu ứng chữ sẽ được thực hiện bằng pure CSS/Tailwind thông qua `tailwind.config.ts` để đảm bảo hiệu năng tối đa mà không cần thêm thư viện nặng như Framer Motion.

## Proposed Changes

### Configuration
Sửa cấu hình Tailwind để thêm các keyframes cho hiệu ứng chuyển động chữ.

#### [MODIFY] [tailwind.config.ts](file:///e:/Workspace/project/dig-comp/tailwind.config.ts)
- Thêm `text-gradient` keyframes và animation để tạo hiệu ứng màu sắc chữ thay đổi liên tục.
- Thêm `slide-up` animation để các thành phần xuất hiện mượt mà khi load trang.

### Dependencies
Thêm thư viện 3D model siêu nhẹ.

#### [MODIFY] [package.json](file:///e:/Workspace/project/dig-comp/package.json)
- Thêm `"cobe": "^0.6.3"` vào phần `dependencies`.

### Components
Tạo component Quả địa cầu mới.

#### [NEW] [Globe.tsx](file:///e:/Workspace/project/dig-comp/src/components/Globe.tsx)
- Xây dựng một React Component bọc thư viện `cobe`, cho phép tự động xoay và có thể tương tác (kéo/thả để xoay) bằng chuột.

### Pages
Áp dụng thiết kế mới và sửa lỗi UI/UX cho trang chủ.

#### [MODIFY] [Home.tsx](file:///e:/Workspace/project/dig-comp/src/pages/Home.tsx)
- **Fix lỗi UI/UX (Độ tương phản)**: Thay đổi các class sử dụng `text-primary-container` (màu cyan sáng) thành `text-primary` (màu xanh lục đậm) để đảm bảo độ tương phản an toàn cho mắt đọc trên nền sáng. Tương tự với các border và nút bấm.
- **Thêm Hiệu ứng Chữ**: Áp dụng animation `text-gradient` cho tiêu đề chính "Công dân số trong kỷ nguyên mạng xã hội". Thêm animation `slide-up` với độ trễ (delay) khác nhau cho các đoạn văn bản.
- **Tích hợp Model 3D**: Thay thế hình ảnh tĩnh `3D Graphic Placeholder` bằng component `<Globe />` mới tạo. Thêm các hiệu ứng ánh sáng (glow) xung quanh quả địa cầu để tăng tính thẩm mỹ.

## Verification Plan

### Manual Verification
- Bạn cần chạy `npm install` để cài đặt thư viện `cobe`.
- Mở trình duyệt và truy cập trang chủ.
- Kiểm tra hiệu ứng gradient trên dòng tiêu đề chính.
- Kiểm tra quả địa cầu 3D xem có tự động xoay và tương tác bằng chuột được không.
- Kiểm tra lại khả năng đọc của các nút (Contrast Ratio) đã được cải thiện.
