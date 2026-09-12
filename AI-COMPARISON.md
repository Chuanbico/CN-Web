# So sánh 2 công cụ AI — Exercise 3

| | Công cụ 1 | Công cụ 2 |
|---|---|---|
| **Tên** | Claude Opus 5 (qua Claude Code) | Gemini 3.8 Flash (gemini.google.com) |
| **Thư mục mã nguồn** | [`Claude-Opus-5/`](Claude-Opus-5/) | [`Gemini-3.8-Flash/`](Gemini-3.8-Flash/) |
| **Nhật ký chi tiết** | [`Claude-Opus-5/AI-LOG.md`](Claude-Opus-5/AI-LOG.md) | [`Gemini-3.8-Flash/AI-LOG.md`](Gemini-3.8-Flash/AI-LOG.md) |
| **Hội thoại gốc** | — | https://share.gemini.google/rmqF7ZMARH6H |
| **Ngày chạy** | 12/09/2026 | 12/09/2026 |

Cả hai công cụ nhận **cùng một bộ 3 prompt**, chép nguyên văn từ
[PROMPTS.md](PROMPTS.md), gửi lần lượt trong cùng một cuộc hội thoại. Kết quả của
Gemini được giữ nguyên văn, không sửa một dòng nào, để phép so sánh phản ánh đúng
chất lượng đầu ra của từng công cụ.

---

## 1. So sánh theo từng vòng prompt

| Vòng | Claude Opus 5 | Gemini 3.8 Flash |
|------|---------------|------------------|
| **Vòng 1**<br>Khung HTML | Đủ 10 phần. Thẻ ngữ nghĩa đúng, một `<h1>` duy nhất, hỏi đáp dùng `<details>` nên đóng/mở được cả khi tắt JS. Có sẵn nút menu 3 gạch kèm `aria-expanded`, skip-link. **Tự thêm cả hệ thống class BEM — vượt phạm vi "chỉ cần khung thô"**. Icon SVG chưa giới hạn kích thước nên phình to khi chưa có CSS | Đủ 10 phần. **Bám phạm vi chặt hơn: HTML thuần, không một class nào**. Thẻ ngữ nghĩa đa dạng hơn (`<dl>`, `<figure>`, `<address>`, `<aside>`, `<fieldset>`). Biểu mẫu đầy đủ hơn (4 trường). Nội dung tiếng Việt tự nhiên hơn. **Không có nút menu 3 gạch**, không skip-link, dùng `<blockquote>` bọc con số thống kê (sai ngữ nghĩa) |
| **Vòng 2**<br>CSS & màu sắc | Bám đúng bảng màu, biến CSS đầy đủ. Grid 4 lưới, 2 mốc chuyển giao 960/640px. Ảnh minh hoạ thiết bị vẽ bằng CSS. **Nhưng**: nút 3 gạch chỉ có vỏ nên mobile không điều hướng được, HUD chật ở màn hẹp, cỡ chữ và spacing đặt cứng nên nhảy bậc | Bám đúng bảng màu, biến CSS đầy đủ, thêm biến "glow". **Lưới dùng `repeat(auto-fit, minmax(...))` — tự đổi số cột, không cần media query nào, linh hoạt hơn Claude**. Tự thêm `radial-gradient` cho hero. **Nhưng**: header dính cao **194px = 25% màn hình** mobile, link nav chỉ cao **18px**, và CSS phải bám cấu trúc DOM (`#bang-gia article:nth-child(2)`) vì vòng 1 không có class |
| **Vòng 3**<br>Polish | Làm đủ cả 4 nhóm. Spacing về 2 biến `clamp()` dùng chung, fade-in bằng `IntersectionObserver` có `unobserve`, menu mobile hoạt động kèm khoá cuộn nền và đóng bằng Esc. Tự thêm `prefers-reduced-motion` và scrollspy. Kiểm thử thật: menu chạy, form bắt đúng 3 trường hợp, console sạch | **Hỏng hoàn toàn. Đo được 0/14 bộ chọn khớp với HTML của chính nó.** Vì vòng 1 không có class nào mà vòng 3 lại viết CSS/JS bám vào class. Nhóm 1–2 cũng vô hiệu vì bộ chọn theo thẻ (`h1`, `section`) thua bộ chọn theo `id` của vòng 2. Giao diện gần như không đổi so với vòng 2 |

## 2. So sánh theo tiêu chí

| Tiêu chí | Claude Opus 5 | Gemini 3.8 Flash |
|----------|---------------|------------------|
| **Bám sát phạm vi prompt** | Thường làm vượt yêu cầu (tự thêm accessibility, class BEM ngay vòng 1) | Vòng 1 bám rất sát, nhưng vòng 2 lại vượt (tự thêm `clamp()`, hover — vốn là việc của vòng 3) |
| **Chất lượng HTML ngữ nghĩa** | Tốt. `<details>` cho hỏi đáp là lựa chọn thực dụng | **Tốt hơn** về độ đa dạng thẻ (`<dl>`, `<address>`, `<fieldset>`), nhưng sai một chỗ: `<blockquote>` bọc con số |
| **Kiến trúc CSS** | Class BEM + biến + thang spacing dùng chung → đổi màu hoặc chèn thẻ đều không vỡ | Lưới `auto-fit` linh hoạt hơn, nhưng **phải bám cấu trúc DOM nên rất dễ vỡ**: chèn một thẻ hoặc đổi thứ tự gói giá là style hỏng |
| **Tính nhất quán giữa các vòng** | Vòng sau dùng lại đúng class vòng trước đặt ra | **Điểm yếu chí mạng.** Vòng 3 viết cho một trang hoàn toàn khác với trang vòng 1–2 của chính nó |
| **Chất lượng JavaScript** | Có xử lý Esc, khoá cuộn nền, `unobserve`. Còn một chỗ viết mong manh (`form.name`) phải sửa tay | Chất lượng code tốt hơn khi xét riêng lẻ: regex SĐT chặt hơn, có `aria-current`, có lọc ký tự khi gõ. **Nhưng không chạy được dòng nào** vì sai hết bộ chọn |
| **Khả năng tiếp cận** | Chủ động từ vòng 1, không cần nhắc | Chỉ có `aria-label` cho nav. Thiếu skip-link, thiếu nút menu, vùng chạm 18px |
| **Phụ thuộc bên ngoài** | Không CDN/font ngoài/ảnh internet — chạy ngoại tuyến | Tương tự — chạy ngoại tuyến |
| **Tự phát hiện lỗi của chính mình** | Không tự phát hiện lỗi gõ ký tự full-width trong mã màu; phải kiểm thử mới ra | **Không nhận ra HTML của chính nó không có class nào**, cũng không nhận ra trang không hề có HUD mà vẫn viết CSS sửa HUD |
| **Chất lượng nội dung tiếng Việt** | Lần đầu còn sáo rỗng, phải viết lại thủ công phần lớn | **Tốt hơn rõ rệt ngay từ đầu.** Câu trích dẫn đúng giọng tài xế đường dài, địa danh và chi tiết kỹ thuật cụ thể |
| **Mức độ phải sửa tay** | 5 chỗ nhỏ, trang chạy đúng ngay | Chỉ tách file CSS. Nhưng để vòng 3 chạy được thì phải **tự viết lại class cho toàn bộ HTML** |

## 3. Nhận xét tổng hợp

**Công cụ nào bám prompt sát hơn?**
Gemini ở vòng 1, Claude ở vòng 2 và 3. Gemini hiểu "chưa cần style, chỉ cần cấu
trúc" theo nghĩa đen nhất — không đặt một class nào. Claude thì ngay từ vòng 1 đã
tự chuẩn bị sẵn cho các vòng sau.

**Công cụ nào cho code dễ bảo trì hơn?**
Claude, và khoảng cách rất lớn. Điều trớ trêu là chính chỗ Gemini "bám prompt tốt
hơn" ở vòng 1 lại là nguyên nhân làm vòng 3 sụp đổ: không có class thì vòng 2 buộc
phải bám vào `id` và vị trí thẻ, rồi vòng 3 sinh ra CSS/JS theo class nên không
khớp vào đâu cả. Đây là bài học đáng giá nhất của bài tập: **với một chuỗi prompt
nhiều vòng, đầu ra vòng trước phải là đầu vào dùng được của vòng sau. "Bám sát
prompt" mà bỏ qua điều đó thì càng về sau càng hỏng.**

**Công cụ nào cần sửa tay nhiều hơn?**
Gemini. Bản Claude chỉ cần 5 chỉnh sửa nhỏ là chạy đúng. Bản Gemini muốn chạy được
vòng 3 thì phải tự đi thêm class vào toàn bộ HTML — tức là người dùng làm phần việc
mà AI đáng lẽ phải làm.

**Một điểm quan trọng: lỗi im lặng.**
JavaScript của Gemini không ném lỗi nào ra console. Nó thoát êm ở dòng
`if (!form) return;` vì không tìm thấy `#register-form`. Nếu chỉ mở trang xem
lướt và liếc console thấy sạch, rất dễ tưởng mọi thứ đã chạy. Chỉ khi đếm số bộ
chọn khớp mới thấy con số 0/14.

**Nếu làm lại thì chọn công cụ nào cho việc gì?**
- **Viết nội dung tiếng Việt**: chọn Gemini. Giọng văn tự nhiên hơn hẳn, số liệu
  và chi tiết cụ thể hơn, đỡ công viết lại.
- **Dựng và sửa code qua nhiều vòng**: chọn Claude. Nó giữ được mạch giữa các vòng,
  và quan trọng hơn là nó chạy được mà không cần mình vá.
- **Cách làm tối ưu**: lấy nội dung từ Gemini, đưa cho Claude dựng code. Hoặc nếu
  dùng Gemini xuyên suốt thì **phải yêu cầu rõ ngay từ vòng 1**: "đặt class cho mọi
  thành phần theo quy ước BEM, kèm nút menu 3 gạch" — tức là tự mình bù vào đúng
  chỗ nó thiếu tầm nhìn.

## 4. Mã nguồn

- Repo: https://github.com/Chuanbico/CN-Web
- Branch: `exercise1.3`
