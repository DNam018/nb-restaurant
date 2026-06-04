@AGENTS.md

# Ngọc Bích Wedding & Event — Tổng quan dự án

## 1. Yêu cầu chính

Xây dựng landing page hiện đại cho **Ngọc Bích Wedding & Event** (nhà hàng tiệc cưới & sự kiện Việt Nam) với:
- Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion
- next-intl (vi/en), React Hook Form + Zod, Lucide React
- Tham khảo UI: https://whosestudio.vn/

### Các lần sửa UI đã thực hiện
**Lần 1:** Sửa font lỗi tiếng Việt, hero ảnh mờ hơn, nav cursor/hover, button rounded, hero image fit.
**Lần 2:** About section dùng màu emerald chủ đạo, event images bo góc `rounded-2xl`, fix font toàn app bằng `next/font/google`, tất cả buttons tròn (`rounded-full`).

---

## 2. Các khái niệm kỹ thuật chính

- **Next.js 16.2.7** với App Router và Turbopack
- **Next.js 16 dùng `proxy.ts` thay `middleware.ts`** cho middleware (breaking change)
- **Tailwind CSS v4:** dùng `@import "tailwindcss"` + `@theme {}` (KHÔNG có `tailwind.config.js`)
- **Tailwind v4 canonical classes:** `bg-emerald-deep`, `text-gold`, `bg-gold`, `after:bg-gold` (định nghĩa trong @theme)
- **next-intl i18n:** routes `/vi` và `/en`, defaultLocale `vi`
- **`next/font/google`** (KHÔNG dùng `@import url()`) với `subsets: ['vietnamese', 'latin']`
- **Fonts:** Cormorant Garamond (serif heading) + Be Vietnam Pro (body) — cả hai hỗ trợ tiếng Việt
- **Framer Motion** cho animation (fadeInUp, whileInView, scroll reveal)
- **React Hook Form + Zod** cho form liên hệ/đặt bàn
- **Màu sắc thiết kế:**
  - Deep Emerald `#0F3D3E`
  - Gold `#C9A86A`
  - Cream `#FAF7F2`
  - Soft Black `#171717`
  - Muted `#8A8178`

---

## 5. Giải quyết vấn đề

| Vấn đề | Giải pháp |
|---|---|
| Font tiếng Việt bị lỗi | Đổi từ Playfair Display → Cormorant Garamond; dùng `next/font/google` thay `@import url()` |
| Hero ảnh bị bể/lặp | Dùng Tailwind classes `bg-cover bg-center bg-no-repeat` thay inline styles (linter comment out inline styles) |
| About section màu sai | Nền `bg-white` → `bg-emerald-deep`, heading → `text-white`, số liệu → `text-gold` |

---

## 7 & 8. Trạng thái hiện tại

Build thành công, không có TypeScript error. Tất cả yêu cầu từ 2 lần review đã được implement xong.

**Cấu trúc chính:**
- `app/[locale]/layout.tsx` — Locale layout với next/font/google
- `app/[locale]/page.tsx` — Compose tất cả sections
- `proxy.ts` — next-intl middleware (Next.js 16 convention)
- `components/sections/` — HeroSection, AboutSection, ServicesSection, HostedEventsSection, GallerySection, WhyChooseUsSection, BookingProcessSection, ContactSection
- `components/layout/` — Navbar, Footer
- `messages/vi.json` + `messages/en.json` — Bản dịch đầy đủ
- `data/` — services.ts, events.ts, whyChooseUs.ts, bookingSteps.ts
