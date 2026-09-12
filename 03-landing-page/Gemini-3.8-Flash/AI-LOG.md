# Nhật ký Vibe Coding — Exercise 3 (Landing Page) — Công cụ 2

**Sản phẩm:** DriveGuard — camera AI trong cabin, cảnh báo tài xế buồn ngủ và mất tập trung
**Công cụ AI:** **Gemini 3.8 Flash** (gemini.google.com)
**Ngày thực hiện:** 12/09/2026
**Prompt sử dụng:** chép nguyên văn từ [`../PROMPTS.md`](../PROMPTS.md) — cùng bộ với Claude

| Vòng | Chủ đích | Trạng thái |
|------|----------|------------|
| 1 | Khung cấu trúc HTML | Xong |
| 2 | Styling & màu sắc | Xong |
| 3 | Chi tiết & polish | Chưa chạy |

Link hội thoại gốc: https://share.gemini.google/QU1K7gfFAIaZ

---

## VÒNG 1 — Khung cấu trúc HTML

### Prompt ban đầu

Giống hệt prompt đã gửi Claude (xem [`../PROMPTS.md`](../PROMPTS.md) — Vòng 1).

### Kết quả nhận được

Một file `index.html` duy nhất, đủ 10 phần theo yêu cầu. Điểm đáng chú ý:

- **Bám sát phạm vi prompt rất chặt.** Đề bài vòng này nói "chưa cần style, chỉ cần
  cấu trúc HTML" — Gemini trả về HTML **thuần, không một thuộc tính `class` nào**.
  Đây là điểm khác biệt lớn nhất so với Claude (Claude tự đặt sẵn cả hệ thống class
  theo quy ước BEM).
- **Chọn thẻ ngữ nghĩa đa dạng hơn:**
  - `<dl>/<dt>/<dd>` cho phần hỏi đáp
  - `<figure>/<blockquote>/<figcaption>` cho đánh giá khách hàng
  - `<ol>` lồng `<article>` có `<header>` riêng cho từng bước
  - `<address>` trong footer cho thông tin liên hệ
  - `<aside>` cho dòng ghi chú phụ trong hero
- **Biểu mẫu đầy đủ hơn Claude:** có `<fieldset>` + `<legend>`, thêm ô `<textarea>`
  ghi chú, và `placeholder` cụ thể cho từng ô.
- **Nội dung tiếng Việt rất tự nhiên.** Các câu trích dẫn khách hàng viết đúng giọng
  tài xế đường dài ("mắt díp lại kinh khủng nhất", "giật bắn mình tấp xe vào lề rửa
  mặt liền"), địa danh cụ thể (Định Quán, Hải Phòng – Lạng Sơn). Chi tiết kỹ thuật
  cũng cụ thể: LED hồng ngoại 940nm, cảm biến con quay hồi chuyển 6 trục.

### Kết quả giao diện

![Vòng 1 — Gemini, HTML chưa có CSS](screenshots/round1-html-tho.png)

Vì không có icon SVG nội tuyến nên trang thô của Gemini **dễ đọc hơn** trang thô của
Claude (bên Claude bị icon SVG phình to chiếm gần hết bề rộng).

### Vấn đề phát sinh

| Vấn đề | Diễn giải |
|--------|-----------|
| **Không có nút menu 3 gạch** | Header chỉ có `<nav>` với danh sách link. Không có `<button>` nào cho menu mobile, cũng không có `aria-expanded`/`aria-controls`. Tới vòng 2–3 sẽ phải bổ sung thẻ mới vào HTML chứ không chỉ viết CSS/JS |
| **Thiếu link "bỏ qua tới nội dung chính"** | Claude tự thêm skip-link ngay vòng 1; Gemini không có |
| **Dùng `<blockquote>` để bọc con số thống kê** | `<blockquote>94%</blockquote>` — sai ngữ nghĩa. `<blockquote>` dành cho đoạn trích dẫn, không phải cho số liệu. Đúng ra nên dùng `<p>` hoặc `<strong>` trong `<figure>` |
| **Hỏi đáp dùng `<dl>` nên không tự đóng/mở được** | Claude dùng `<details>/<summary>` — đóng mở được ngay cả khi tắt JavaScript. Bản Gemini sẽ phải viết thêm JavaScript ở vòng 3 để làm accordion |
| **Toàn bộ `<div>` không có tên** | Bám prompt thì đúng, nhưng sang vòng 2 sẽ không có "móc" để viết CSS. Hoặc Gemini phải sửa lại HTML, hoặc phải viết CSS dựa vào bộ chọn theo cấu trúc (dễ vỡ) |
| **Lỗi lặp từ trong nội dung** | Phần hỏi đáp có câu "...tải lên máy chủ **máy chủ** đám mây" — lặp chữ "máy chủ" |
| **Số liệu không khớp với bản Claude** | Gemini tự chọn 0,2 giây / 94% / -68% / 3.200.000 km; Claude chọn 0,3 giây / 96,4% / -41% / 12.400 xe. Không phải lỗi (prompt không cho số cụ thể), nhưng cần lưu ý khi so sánh: hai bản là hai sản phẩm khác nhau về nội dung |

### Thay đổi thủ công

Chưa sửa gì — giữ nguyên đúng những gì Gemini trả về để phần so sánh ở vòng sau
được công bằng.

---

## VÒNG 2 — Styling & màu sắc

### Prompt tinh chỉnh

Giống hệt prompt đã gửi Claude (xem [`../PROMPTS.md`](../PROMPTS.md) — Vòng 2).

### Kết quả nhận được

Một khối CSS ~700 dòng, chia 13 mục có đánh số và tiêu đề rõ ràng.

- **Bảng màu bám đúng yêu cầu** và khai báo đầy đủ thành biến CSS: `--bg-night`,
  `--accent-teal`, `--warning-amber`, kèm cả biến "glow" bán trong suốt
  (`--accent-teal-glow`) để dùng cho đổ bóng phát sáng.
- **Nhịp sáng–tối xen kẽ** đúng như prompt: header/hero tối → thanh logo sáng →
  tính năng sáng → cách hoạt động trắng → số liệu tối → bảng giá sáng → đánh giá
  trắng → hỏi đáp sáng → form CTA tối → footer tối nhất (`#060a12`).
- **Lưới dùng `repeat(auto-fit, minmax(260px, 1fr))`** cho cả 4 khu vực. Cách này
  tự đổi số cột theo bề rộng mà **không cần media query** — linh hoạt hơn cách
  Claude làm (cố định 4 cột rồi ghi đè qua 2 media query).
- **Hai điểm nhấn thị giác tự nghĩ thêm**: `radial-gradient` toả từ giữa cho hero
  và form CTA (mô phỏng ánh đèn táp-lô trong khoang lái ban đêm), và chấm tròn
  teal phát sáng đặt trước chữ "DriveGuard" bằng `::before`.
- Thẻ gói giữa được làm nổi bằng `transform: scale(1.02)` + viền teal + quầng sáng.

### Kết quả giao diện

Desktop 1280px:

![Vòng 2 — Gemini, desktop](screenshots/round2-desktop.png)

Mobile 390px:

![Vòng 2 — Gemini, mobile](screenshots/round2-mobile.png)

### Vấn đề phát sinh

| Vấn đề | Diễn giải |
|--------|-----------|
| **Thanh header chiếm 25% màn hình điện thoại** | Đo thực tế ở 390×780: header cao **194px**. Vì vòng 1 không có nút menu 3 gạch nên vòng 2 chỉ còn cách xếp dọc (`flex-direction: column`) — logo một hàng, 4 link nav xuống hàng, nút CTA một hàng. Header lại đang `position: sticky` nên khối này **dính theo suốt lúc cuộn**, che mất 1/4 màn hình |
| **Vùng chạm của link nav chỉ cao 18px** | Đo thực tế. Chuẩn tối thiểu của Apple/Google là 44px. Trên điện thoại rất dễ bấm trượt sang link bên cạnh |
| **CSS phụ thuộc vào cấu trúc DOM, rất dễ vỡ** | Hệ quả trực tiếp của việc vòng 1 không có class nào. Gemini phải viết những bộ chọn như `#bang-gia article:nth-child(2)`, `body > header > a:first-child`, `#hero a[href="#dang-ky"]`, `#bang-gia header p:nth-of-type(1)`. Chỉ cần chèn thêm một thẻ hoặc đổi thứ tự gói giá là style hỏng. Bản Claude dùng class nên không gặp vấn đề này |
| **Làm vượt phạm vi vòng 2** | Prompt vòng 2 chỉ yêu cầu styling và màu sắc, nhưng Gemini đã tự thêm `clamp()` cho tiêu đề, hiệu ứng hover nhô thẻ, và `transition` — đây vốn là nội dung của vòng 3. Lặp lại đúng xu hướng đã thấy ở vòng 1 |
| **Hỏi đáp vẫn là danh sách phẳng** | `<dl>` được tạo kiểu cho đẹp nhưng cả 4 câu trả lời đều mở sẵn, không gập lại được. Phần hỏi đáp vì vậy dài lê thê. Bản Claude dùng `<details>` nên gập sẵn từ vòng 1 |
| **Không có `prefers-reduced-motion`** | Có `transition: all 0.2s ease` áp cho mọi thẻ `<a>` nhưng không có khối tôn trọng thiết lập giảm chuyển động của hệ điều hành |

### Thay đổi thủ công

| Thay đổi | Lý do |
|----------|-------|
| Tách CSS ra file `style.css` riêng và thêm thẻ `<link>` vào `index.html` | Gemini hướng dẫn dán CSS vào thẻ `<style>` trong `<head>`. Tách ra file riêng để cấu trúc thư mục giống hệt bản Claude, đối chiếu cho công bằng. Nội dung CSS giữ nguyên 100%, không sửa một dòng nào |

---

---

## VÒNG 3 — Chi tiết & polish

_(Chưa chạy)_
