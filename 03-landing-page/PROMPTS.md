# Bộ prompt chuẩn — dùng chung cho cả 2 công cụ AI

> **Cách dùng:** copy nguyên văn từng prompt bên dưới, gửi lần lượt (vòng 1 → 2 → 3)
> vào công cụ AI thứ hai (ChatGPT hoặc Gemini) trong **cùng một cuộc hội thoại**.
> Không thêm, không bớt chữ nào — có giữ nguyên prompt thì phần so sánh mới công bằng.
>
> Kết quả trả về lưu vào thư mục `03-landing-page/<Tên-công-cụ>/`
> (ví dụ `03-landing-page/ChatGPT-5/`) gồm `index.html`, `style.css`, `script.js`
> và ảnh chụp màn hình sau mỗi vòng.

---

## Vòng 1 — Khung cấu trúc HTML

```text
Tạo khung HTML tổng thể cho một landing page một trang giới thiệu DriveGuard —
camera AI đặt trong cabin xe, phát hiện tài xế buồn ngủ và mất tập trung rồi cảnh
báo tức thì. Gồm các phần: header/nav, hero, thanh logo khách hàng, danh sách tính
năng, cách hoạt động (các bước), dải số liệu, bảng giá 3 gói, đánh giá khách hàng,
hỏi đáp, CTA cuối kèm form đăng ký, footer.

Chưa cần style, chỉ cần cấu trúc HTML rõ ràng, dùng thẻ ngữ nghĩa (semantic), nội
dung tiếng Việt và viết như người thật chứ đừng viết kiểu quảng cáo sáo rỗng.
```

---

## Vòng 2 — Styling & màu sắc

```text
Thiết kế CSS cho khung HTML trên theo phong cách "safety tech ban đêm": nền xanh
mực rất tối (#0b1220) cho hero/footer xen kẽ với nền sáng cho các phần nội dung,
màu điểm nhấn teal (#2dd4bf), màu hổ phách cho cảnh báo. Dùng font sans-serif hệ
thống, bo góc lớn, layout dạng CSS Grid cho lưới tính năng / các bước / bảng giá.
Khai báo màu thành biến CSS. Đảm bảo responsive cơ bản trên tablet và mobile.
```

---

## Vòng 3 — Chi tiết & polish

```text
Tinh chỉnh lại trang theo 4 nhóm:

1. Spacing: chuẩn hoá khoảng cách giữa các section về một biến dùng chung, cho co
   giãn liên tục theo bề rộng màn hình bằng clamp() thay vì nhảy bậc qua media query.
2. Typography: cỡ chữ tiêu đề dùng clamp().
3. Hiệu ứng: nút bấm và thẻ nhô lên khi rê chuột, hiệu ứng hiện dần (fade-in) khi
   cuộn tới, vạch quét trong ảnh thiết bị chạy qua lại, đèn LED nhấp nháy.
4. JavaScript: làm nút menu 3 gạch hoạt động được trên mobile, đánh dấu mục đang xem
   trên thanh nav, kiểm tra biểu mẫu đăng ký (tên + số điện thoại Việt Nam) ngay
   trên trang.

Đồng thời sửa lỗi bảng HUD bị chật ở màn hình hẹp, và tôn trọng thiết lập
prefers-reduced-motion.
```

---

## Sau khi chạy xong, cần ghi lại gì?

Với **mỗi vòng** của công cụ thứ hai, ghi vào `AI-LOG.md` trong thư mục của công cụ đó:

- **Kết quả nhận được** — mô tả ngắn công cụ đã sinh ra gì
- **Kết quả giao diện** — ảnh chụp desktop + mobile
- **Vấn đề phát sinh** — chỗ nào chưa đúng / chưa đẹp
- **Thay đổi thủ công** — mình phải tự sửa gì và vì sao

Rồi điền các ô `_(chưa chạy)_` trong [AI-COMPARISON.md](AI-COMPARISON.md).
