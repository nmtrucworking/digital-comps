# Báo cáo Nâng cấp UI/UX Landing Page

## Tổng quan
Dựa trên yêu cầu của dự án, trang chủ (Landing Page) đã được tái cấu trúc và bổ sung các hiệu ứng thị giác nhằm tăng cường trải nghiệm người dùng (UX) và tạo ấn tượng mạnh mẽ ngay từ cái nhìn đầu tiên (UI).

## Các thay đổi chính

### 1. Tích hợp Quả địa cầu 3D (Interactive Globe)
- **Vấn đề cũ**: Khu vực Hero sử dụng một hình ảnh tĩnh (`img`) làm placeholder, thiếu sức sống và không tạo được cảm giác tương tác mạng lưới toàn cầu.
- **Giải pháp**: Thay thế bằng một model 3D tương tác sử dụng thư viện siêu nhẹ `cobe` (~5kB) bọc trong React Component `<Globe />`.
- **Chi tiết UX**: 
  - Quả địa cầu tự động xoay nhẹ nhàng (auto-rotation).
  - Có thể kéo thả để tương tác, thay đổi góc nhìn.
  - Sử dụng hệ màu đồng bộ với theme (`baseColor`, `markerColor`) nhằm đảm bảo tính thống nhất thị giác.

### 2. Bổ sung Hiệu ứng Chuyển động (Framer Motion)
- **Vấn đề cũ**: Các thành phần tải lên trang một cách tĩnh lặng, thiếu sự mượt mà và cảm giác "premium" của một sản phẩm công nghệ.
- **Giải pháp**: Tích hợp `framer-motion` để áp dụng hiệu ứng xuất hiện (fade-in, slide-up).
- **Chi tiết UX**:
  - Các đoạn văn bản và nút bấm ở phần Hero xuất hiện lần lượt với độ trễ (stagger delay) tạo hiệu ứng thác đổ mượt mà.
  - Các thẻ thành viên (Team Cards) xuất hiện khi người dùng cuộn chuột tới (`whileInView`).
  - Tiêu đề chính sử dụng hiệu ứng gradient chuyển màu liên tục (`animate-text-gradient`), thu hút sự chú ý vào thông điệp cốt lõi.

### 3. Khắc phục Lỗi Khả năng truy cập (Accessibility - Contrast Ratio)
- **Vấn đề cũ**: Một số nút bấm và chữ sử dụng màu `primary-container` (cyan sáng) hoặc `secondary-container` trên nền màu sáng (`#f3fbf8`). Điều này tạo ra tỉ lệ tương phản (Contrast Ratio) rất thấp (~1.5:1), vi phạm tiêu chuẩn WCAG và gây khó khăn cho người dùng khi đọc văn bản.
- **Giải pháp**: 
  - Đổi các class `text-primary-container`, `border-primary-container` thành `text-primary` và `border-primary` cho nút bấm "Xem Video" và nhãn.
  - Đổi màu thẻ thành viên từ `text-secondary-container` thành `text-secondary` để đảm bảo độ tương phản an toàn (>4.5:1).
  - Điều chỉnh nút "Khám phá ngay" để sử dụng gradient sang màu `primary` thay vì `primary-container` nhằm giữ được màu chữ trắng `text-on-primary` an toàn.

## Yêu cầu kỹ thuật
Để khởi chạy các cập nhật mới nhất, hệ thống yêu cầu cài đặt bổ sung hai thư viện:
- `cobe`: Render WebGL Globe.
- `framer-motion`: Quản lý hệ thống animation vật lý.

Vui lòng chạy lệnh sau tại thư mục gốc:
```bash
npm install
```

## Kết luận
Bản nâng cấp giúp trang chủ đạt được tiêu chuẩn thiết kế hiện đại, tương tác tốt và đáp ứng các tiêu chuẩn cơ bản về trợ năng (accessibility), từ đó sẵn sàng mang lại trải nghiệm chuyên nghiệp cho người dùng.
