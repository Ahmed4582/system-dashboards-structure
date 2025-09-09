## System Dashboard – Project Structure & Guide

This repository is a modular, dashboard‑focused Next.js application with Auth, multi‑language (AR/EN/TR), and a clean, extensible UI foundation.

### Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4 (token-driven, darkMode: class)
- ESLint 9 + next/core-web-vitals
- Radix UI primitives (Dropdown, Dialog, etc.)
- lucide-react (icons)
- react-hot-toast (toasts)
- axios (ready to integrate)

### Scripts
```bash
npm run dev     # start dev server (Turbopack)
npm run build   # build production
npm run start   # start production server
npm run lint    # run eslint
```

### Routing Overview
- `/` → redirects to `/login`
- `(auth)` group: `/login`, `/register`, `/forgetpassword`, `/changepassword`, `/confirmEmail`
- `(dashboard)` group:
  - `/dashboard` (overview)
  - `/dashboard/reports` (stub)
  - `/dashboard/settings` (stub)
- `/services` – panels catalogue (HRPanel, CRMPanel, FinancePanel, POSPanel, InventoryPanel, ManagementPanel, Archive)

### Project Structure (key paths)
```
src/
  app/
    layout.jsx                # root layout, fonts, I18nProvider, dark cookie class
    globals.css               # Tailwind tokens, CSS variables, dark theme
    page.jsx                  # redirect('/') → '/login'

    (auth)/
      layout.js
      login/page.js           # uses LoginForm
      register/page.js
      forgetpassword/page.js

    (dashboard)/
      layout.jsx              # wraps children with DashboardClient
      _comon/
        DashboardClient.jsx   # shell: Sidebar + Header + content
        SideBar.jsx           # 2 items: Overview + More (dropdown)
        Header.jsx            # search, theme toggle, language switcher, user menu
        LanguageSwitcher.js   # AR/EN/TR via context, cookie 'lang'
        NotificationsMenu.jsx
        SettingsButton.jsx
        ToggelThem.jsx        # theme toggle (cookie 'dark')
        UserMenu.jsx
      _context/
        PopupContext.js
      dashboard/page.jsx      # overview (placeholders)
      reports/page.jsx        # stub
      settings/page.jsx       # stub

    services/page.jsx         # panels grid (HRPanel, CRMPanel, ...)

  components/
    ui/                       # shared UI primitives (button, card, etc.)

  context/
    translate-api.js          # I18nProvider (AR/EN/TR) + direction

public/
  locales/
    ar.js en.js tr.js         # translation dictionaries
  images/
    login.png register.png    # used by Auth pages
    forget.png                # used by forget password
    # (legacy interface images removed/optional)
```

### Internationalization (i18n)
- Provider: `src/context/translate-api.js`
- Dictionaries: `public/locales/{ar,en,tr}.js`
- Cookie: `lang` – persists locale on client
- Direction: `rtl` for AR, `ltr` otherwise (applied on `<html dir>`)

Usage in components:
```js
import { useI18n } from '@/context/translate-api'
const { t, locale, direction, changeLanguage } = useI18n()
```

### Theming (Dark / Light)
- Cookie: `dark`
- Toggle: `src/app/(dashboard)/_comon/ToggelThem.jsx`
- Class `dark` is applied to `<html>`; `globals.css` defines light/dark tokens.

### Path Aliases
- Configured in `tsconfig.json` and `jsconfig.json`:
```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"],
    "@/components/*": ["./src/components/*"]
  }
}
```

### Tailwind CSS
- `tailwind.config.js`: content set to `./src/**`, `darkMode: 'class'`.
- `globals.css`: declares design tokens (oklch), radii, sidebar variables, and dark theme values.

### Environment Variables
- Recommended (when adding API calls):
```
NEXT_PUBLIC_BASE_URL=https://api.example.com
```
Create an axios instance under `src/lib/axios.ts` (or `.js`) and consume it in server/client as needed.

### Add a New Dashboard Panel
1) Create a route: `src/app/(dashboard)/<panel>/page.jsx`
2) Add navigation item in `SideBar.jsx`
3) Build the page UI using components in `src/components/ui`

### Development Notes
- Root layout wraps the app with `I18nProvider` and reads cookies (locale/dark).
- `/services` presents the key modules: HRPanel, CRMPanel, FinancePanel, POSPanel, InventoryPanel, ManagementPanel, Archive.
- Keep only necessary images in `public/images` (auth illustrations). Legacy interface images can be removed safely.

### Getting Started
```bash
npm install
npm run dev
# open http://localhost:3000
```

