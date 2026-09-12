# Bài tập 1 — Portfolio Card

Trang giới thiệu cá nhân dạng card, dùng để chia sẻ trên mạng xã hội hoặc gửi kèm CV.

## Cấu trúc

```
Exer1/
├── index.html                 # Cấu trúc trang
├── style.css              # Toàn bộ style + responsive
├── assets/avatar.svg          # Ảnh đại diện (monogram SVG)
├── AI-LOG.md                  # Nhật ký Vibe Coding (bắt buộc nộp)
├── README.md
└── screenshots/               # Ảnh minh hoạ cho AI-LOG
```

## Chạy thử

Mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
python3 -m http.server 8123 --directory Exer1
# rồi mở http://localhost:8123
```

## Đáp ứng yêu cầu đề bài

| Yêu cầu | Vị trí trong code |
|---------|-------------------|
| Ảnh đại diện hình tròn | `.card__avatar` (`border-radius: 50%`) |
| Tên | `.card__name` |
| Ngành học | `.card__major` |
| Kỹ năng dạng badge | `.skills > .badge` (6 badge) |
| Liên kết mạng xã hội | `.socials` — GitHub, LinkedIn, Facebook, Email |
| Responsive | `@media (max-width: 400px)`, `(max-width: 330px)`, `(min-width: 768px)` |

Đã kiểm thử ở **360×640**, **390×860** và **1280×900**.

## Muốn sửa nội dung?

- **Đổi ảnh đại diện:** thay `assets/avatar.svg` bằng ảnh thật, sửa `src` trong
  `index.html`. CSS đã có `object-fit: cover` nên ảnh chữ nhật vẫn hiển thị đẹp.
- **Đổi màu chủ đạo:** sửa các biến ở đầu `style.css` (`--navy-900`, `--accent`…).
- **Thêm/bớt kỹ năng:** thêm thẻ `<li class="badge">` trong `<ul class="skills">`.
  Dùng `class="badge badge--ghost"` cho kỹ năng phụ (nền nhạt).
- **Thêm số điện thoại:** hiện đang cố ý bỏ ra để tránh spam khi chia sẻ công khai
  (xem lý do trong `AI-LOG.md`). Nếu cần, thêm một thẻ `<a class="social" href="tel:...">`.
