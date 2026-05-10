# Kế hoạch Triển khai Đa ngôn ngữ (i18n) cho Website

Tài liệu này phác thảo phương pháp tiếp cận để nâng cấp toàn bộ website sang kiến trúc hỗ trợ đa ngôn ngữ (Tiếng Việt và Tiếng Anh), giúp tiếp cận được lượng người dùng quốc tế.

## User Review Required
> [!IMPORTANT]
> - Để thực hiện tính năng này, tôi sẽ cài đặt thư viện tiêu chuẩn ngành là `i18next` và `react-i18next`. Bạn sẽ cần chạy `npm install` sau khi tôi cấu hình xong `package.json`.
> - Việc này sẽ thay thế toàn bộ text cứng (hardcoded text) thành các biến (ví dụ: `t('hero.title')`). Khối lượng công việc khá lớn (từ Header, Footer đến tất cả các trang nội dung).
> - Bạn có đồng ý với phương pháp sử dụng `react-i18next` và các ngôn ngữ khởi điểm là Tiếng Việt (VI) và Tiếng Anh (EN) không?

## Proposed Changes

### Configuration
Cấu hình hệ thống i18n và thêm thư viện.

#### [MODIFY] [package.json](file:///e:/Workspace/project/dig-comp/package.json)
- Thêm `i18next` và `react-i18next` vào `dependencies`.

#### [NEW] [src/i18n/config.ts](file:///e:/Workspace/project/dig-comp/src/i18n/config.ts)
- Khởi tạo cấu hình của thư viện `i18next`, đăng ký các locale. Thiết lập Tiếng Việt làm ngôn ngữ mặc định.

#### [NEW] [src/i18n/locales/vi.json](file:///e:/Workspace/project/dig-comp/src/i18n/locales/vi.json)
- File chứa toàn bộ từ điển giao diện Tiếng Việt.

#### [NEW] [src/i18n/locales/en.json](file:///e:/Workspace/project/dig-comp/src/i18n/locales/en.json)
- File chứa toàn bộ từ điển giao diện Tiếng Anh tương ứng.

#### [MODIFY] [src/main.tsx](file:///e:/Workspace/project/dig-comp/src/main.tsx)
- Import file `config.ts` để khởi chạy i18n ngay từ lúc ứng dụng React được mount.

### Components
Thêm bộ chuyển đổi ngôn ngữ.

#### [NEW] [src/components/LanguageSwitcher.tsx](file:///e:/Workspace/project/dig-comp/src/components/LanguageSwitcher.tsx)
- Component nút bấm cho phép người dùng chuyển đổi qua lại giữa VI và EN (hiển thị cờ hoặc chữ VI/EN).

#### [MODIFY] [src/components/Layout.tsx](file:///e:/Workspace/project/dig-comp/src/components/Layout.tsx)
- Bổ sung `<LanguageSwitcher />` vào thanh điều hướng Header.
- Thay thế toàn bộ text cứng của thanh Menu và Footer thành key của `i18n`.

### Pages
Dịch thuật tất cả các trang nội dung.

#### [MODIFY] [src/pages/Home.tsx](file:///e:/Workspace/project/dig-comp/src/pages/Home.tsx)
- Chuyển text cứng thành `t('home.hero.title')`, `t('home.hero.description')`, v.v.

#### [MODIFY] [src/pages/Team.tsx](file:///e:/Workspace/project/dig-comp/src/pages/Team.tsx) & [src/pages/Opportunities.tsx](file:///e:/Workspace/project/dig-comp/src/pages/Opportunities.tsx) & [src/pages/Library.tsx](file:///e:/Workspace/project/dig-comp/src/pages/Library.tsx) & [src/pages/Blog.tsx](file:///e:/Workspace/project/dig-comp/src/pages/Blog.tsx)
- Lần lượt bóc tách nội dung text và chuyển vào từ điển JSON để dịch sang tiếng Anh.

## Verification Plan

### Automated Tests
- Kiểm tra syntax của file JSON (đảm bảo không dư dấu phẩy).

### Manual Verification
- Bạn cần chạy lệnh `npm install`.
- Truy cập vào web và nhấp vào nút `Language Switcher` trên Navbar.
- Đảm bảo thanh menu, footer, và nội dung trang chủ thay đổi tức thì từ Tiếng Việt sang Tiếng Anh mà không bị reload lại trang (Seamless Translation).
