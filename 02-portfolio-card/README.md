# Bài tập 1 — Portfolio Card

Trang giới thiệu cá nhân dạng card, dùng để chia sẻ trên mạng xã hội hoặc gửi kèm CV.

## Cấu trúc

```
02-portfolio-card/
├── index.html                 # Cấu trúc trang
├── style.css                  # Toàn bộ style + responsive
├── assets/avatar.svg          # Ảnh đại diện (monogram SVG)
├── AI-LOG.md                  # Nhật ký Vibe Coding (bắt buộc nộp)
├── README.md
└── screenshots/               # Ảnh minh hoạ cho AI-LOG
```

## Chạy thử

Mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
# chạy ngay trong thư mục này
python3 -m http.server 8123
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
