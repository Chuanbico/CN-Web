# So sánh 2 công cụ AI — Exercise 3

| | Công cụ 1 | Công cụ 2 |
|---|---|---|
| **Tên** | Claude Opus 5 (qua Claude Code) | _(chưa chạy — điền sau)_ |
| **Thư mục mã nguồn** | [`Claude-Opus-5/`](Claude-Opus-5/) | `<Tên-công-cụ>/` |
| **Nhật ký chi tiết** | [`Claude-Opus-5/AI-LOG.md`](Claude-Opus-5/AI-LOG.md) | `<Tên-công-cụ>/AI-LOG.md` |
| **Ngày chạy** | 12/09/2026 | _(chưa chạy)_ |

Cả hai công cụ nhận **cùng một bộ 3 prompt**, chép nguyên văn từ
[PROMPTS.md](PROMPTS.md), gửi lần lượt trong cùng một cuộc hội thoại.

> ⚠️ **Trạng thái hiện tại:** mới chạy xong công cụ 1. Phần của công cụ 2 đang để
> trống chờ chạy ChatGPT/Gemini. Các ô `_(chưa chạy)_` bên dưới sẽ được điền sau.

---

## 1. So sánh theo từng vòng prompt

| Vòng | Claude Opus 5 | _(Công cụ 2)_ |
|------|---------------|---------------|
| **Vòng 1** — Khung HTML | Đủ 10 phần. Thẻ ngữ nghĩa đúng, một `<h1>` duy nhất, hỏi đáp dùng `<details>` nên chạy được cả khi tắt JS. Tự chủ động thêm `aria-*`, skip-link và hệ thống class BEM — **vượt phạm vi "chỉ cần khung thô"** của prompt. Icon SVG nội tuyến chưa giới hạn kích thước nên phình to khi chưa có CSS | _(chưa chạy)_ |
| **Vòng 2** — CSS & màu sắc | Bám đúng bảng màu được yêu cầu, khai báo thành biến CSS. Grid đúng cho cả 4 lưới. Hai mốc chuyển giao 960/640px. **Nhưng**: nút menu 3 gạch chỉ có vỏ (không JS → mobile không điều hướng được), HUD chật ở màn hình hẹp, cỡ chữ và spacing đặt cứng nên nhảy bậc | _(chưa chạy)_ |
| **Vòng 3** — Polish | Làm đủ cả 4 nhóm yêu cầu. Đưa spacing về 2 biến `clamp()` dùng chung, heading dùng `clamp()`, fade-in bằng `IntersectionObserver` có `unobserve` nên cuộn nhanh không giật, menu mobile hoạt động kèm khoá cuộn nền + đóng bằng Esc. Tự thêm `prefers-reduced-motion` và scrollspy | _(chưa chạy)_ |

## 2. So sánh theo tiêu chí

| Tiêu chí | Claude Opus 5 | _(Công cụ 2)_ |
|----------|---------------|---------------|
| Bám sát phạm vi prompt | Thường làm **vượt** yêu cầu (tự thêm accessibility, design token) | _(chưa chạy)_ |
| Chất lượng HTML ngữ nghĩa | Tốt ngay từ vòng 1 | _(chưa chạy)_ |
| Kiến trúc CSS | Biến CSS đầy đủ, thang spacing dùng chung, dễ đổi màu chủ đạo ở một chỗ | _(chưa chạy)_ |
| Chất lượng JavaScript | Có xử lý bàn phím (Esc), khoá cuộn nền, `unobserve` sau khi hiện. Còn một chỗ viết mong manh (`form.name`) phải sửa tay | _(chưa chạy)_ |
| Khả năng tiếp cận | Chủ động, không cần nhắc | _(chưa chạy)_ |
| Phụ thuộc bên ngoài | Không dùng CDN/Google Fonts/ảnh internet — trang chạy ngoại tuyến | _(chưa chạy)_ |
| Tự phát hiện lỗi của chính mình | Không tự phát hiện lỗi gõ `６` full-width trong mã màu; phải kiểm thử mới ra | _(chưa chạy)_ |
| Chất lượng nội dung tiếng Việt | Lần đầu còn sáo rỗng kiểu quảng cáo, phải viết lại thủ công phần lớn | _(chưa chạy)_ |

## 3. Nhận xét tổng hợp

_(Viết sau khi chạy xong công cụ 2 — cần nêu ít nhất: công cụ nào bám prompt sát hơn,
công cụ nào cho code dễ bảo trì hơn, công cụ nào cần sửa tay nhiều hơn, và nếu làm
lại thì sẽ chọn công cụ nào cho việc gì.)_

## 4. Mã nguồn

- Repo: https://github.com/Chuanbico/CN-Web
- Branch: `exercise1.3`
