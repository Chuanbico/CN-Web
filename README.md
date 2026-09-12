# Bài tập 1 — HTML, CSS

**Môn:** Công nghệ Web — Trường Công nghệ Thông tin và Truyền thông, ĐHBK Hà Nội
**Sinh viên:** Nguyen Duc Truong Phuc

---

## Nội dung

| Bài | Thư mục | Mô tả | Trạng thái |
|-----|---------|-------|------------|
| Exercise 1 | [`01-domain-git/`](01-domain-git/) | Tên miền `.id.vn` miễn phí + Git/GitHub | Phần Git xong; phần đăng ký tên miền chờ tự thực hiện |
| Exercise 2 | [`02-portfolio-card/`](02-portfolio-card/) | Portfolio Card — trang giới thiệu cá nhân | Xong |
| Exercise 3 | [`03-landing-page/`](03-landing-page/) | Landing page sản phẩm **DriveGuard** — chạy cùng bộ prompt trên 2 công cụ AI | Xong |

Đề bài gốc: [`requirement.txt`](requirement.txt) · [`de-bai/`](de-bai/)

## Nhánh

| Nhánh | Nội dung |
|-------|----------|
| `main` | Gộp cả 3 bài |
| `exercise1.1` | Riêng Exercise 1 |
| `exercise1.2` | Riêng Exercise 2 |
| `exercise1.3` | Riêng Exercise 3 |

## Nhật ký Vibe Coding

Mỗi bài có nhật ký riêng ghi lại đủ 5 mục đề bài yêu cầu
(prompt ban đầu → kết quả → vấn đề phát sinh → prompt tinh chỉnh → thay đổi thủ công):

- [`02-portfolio-card/AI-LOG.md`](02-portfolio-card/AI-LOG.md)
- [`03-landing-page/Claude-Opus-5/AI-LOG.md`](03-landing-page/Claude-Opus-5/AI-LOG.md) — công cụ 1: Claude Opus 5
- [`03-landing-page/Gemini-3.8-Flash/AI-LOG.md`](03-landing-page/Gemini-3.8-Flash/AI-LOG.md) — công cụ 2: Gemini 3.8 Flash
- [`03-landing-page/AI-COMPARISON.md`](03-landing-page/AI-COMPARISON.md) — so sánh 2 công cụ AI
- [`03-landing-page/PROMPTS.md`](03-landing-page/PROMPTS.md) — bộ prompt chuẩn dùng chung

## Chạy thử

Cả hai trang đều là HTML/CSS/JS thuần, **không có phụ thuộc bên ngoài** (không CDN,
không Google Fonts, không ảnh tải từ internet) nên mở thẳng file là chạy được.

```bash
# hoặc chạy server tĩnh để đường dẫn tương đối hoạt động chuẩn
python3 -m http.server 8000
# rồi mở http://localhost:8000/02-portfolio-card/
#        http://localhost:8000/03-landing-page/Claude-Opus-5/
#        http://localhost:8000/03-landing-page/Gemini-3.8-Flash/
```
