# Ngọc Bích Wedding & Event

Landing page hiện đại cho **Nhà hàng Ngọc Bích** — chuyên tổ chức tiệc cưới, lễ đính hôn, sinh nhật, tiệc gia đình và sự kiện công ty tại Thành phố Đồng Nai.

---

## Tính năng

- **Đa ngôn ngữ** (Tiếng Việt / English) với `next-intl`
- **Animation mượt mà** với Framer Motion (scroll reveal, fade-in, parallax)
- **Form đặt tiệc** với React Hook Form + Zod validation
- **Responsive** toàn diện — mobile, tablet, desktop
- **SEO-ready** với Next.js App Router metadata
- **Font tiếng Việt** tối ưu (Cormorant Garamond + Be Vietnam Pro via `next/font/google`)
- **Language switcher** dropdown với animation

## Các section

| Section | Mô tả |
|---|---|
| Hero | Full-screen banner với overlay và CTA |
| Về chúng tôi | Giới thiệu + số liệu thống kê |
| Dịch vụ | 4 loại dịch vụ (cưới, đính hôn, sinh nhật, công ty) |
| Sự kiện đã tổ chức | Bộ sưu tập sự kiện nổi bật |
| Thư viện ảnh | Gallery với filter theo danh mục |
| Tại sao chọn chúng tôi | 4 điểm nổi bật |
| Quy trình đặt tiệc | Timeline 4 bước |
| Liên hệ | Form đặt tiệc + thông tin liên hệ |

## Tech Stack

| Công nghệ | Phiên bản | Vai trò |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.7 | Framework (App Router + Turbopack) |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | latest | Animation |
| [next-intl](https://next-intl-docs.vercel.app/) | latest | i18n |
| [React Hook Form](https://react-hook-form.com/) | latest | Form |
| [Zod](https://zod.dev/) | latest | Validation |
| [Lucide React](https://lucide.dev/) | latest | Icons |

## Thiết kế

### Bảng màu

| Tên | Hex | Tailwind class |
|---|---|---|
| Deep Emerald | `#0F3D3E` | `bg-emerald-deep` / `text-emerald-deep` |
| Gold | `#C9A86A` | `bg-gold` / `text-gold` |
| Cream | `#FAF7F2` | `bg-cream` |
| Soft Black | `#171717` | `text-soft-black` |
| Muted | `#8A8178` | `text-muted` |

### Typography

- **Heading:** Cormorant Garamond — `font-serif`
- **Body:** Be Vietnam Pro — `font-sans`

## Cài đặt & Chạy

```bash
# Clone repo
git clone <repo-url>
cd nb-restaurant

# Cài dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) → tự động redirect về `/vi`.

```bash
# Build production
npm run build

# Chạy production
npm start
```

## Cấu trúc thư mục

```
nb-restaurant/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx      # Font loading + NextIntlClientProvider
│   │   └── page.tsx        # Compose tất cả sections
│   ├── globals.css         # Tailwind v4 @theme design tokens
│   └── page.tsx            # Redirect → /vi
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed nav + mobile menu
│   │   └── Footer.tsx      # Footer với thông tin liên hệ
│   ├── sections/           # 8 page sections
│   └── ui/                 # Button, SectionTitle, LanguageSwitcher
├── data/                   # Static data (services, events, ...)
├── i18n/                   # next-intl routing + request config
├── messages/
│   ├── vi.json             # Bản dịch tiếng Việt
│   └── en.json             # English translations
├── proxy.ts                # next-intl middleware (Next.js 16)
└── public/
    └── images/             # Hero + service images
```

## Thông tin liên hệ nhà hàng

- **Cơ sở 1:** Thôn An Hòa, phường Đồng Phú, Thành phố Đồng Nai
- **Cơ sở 2:** Tổ 50, khu phố Bàu Ké, Đồng Phú, Thành phố Đồng Nai
- **Hotline:** 0392 999 839 (Bích) — 0916 788 479 (Anh Thông)

---

© 2026 Ngọc Bích Wedding & Event
