# Interactive Card Form

A modern, interactive credit card form built with React, TypeScript, Vite, and TailwindCSS. Users can enter card details and see a live preview of the card, with real-time validation and formatting.

## Features

- **Live Card Preview:** Card details update in real time as you type.
- **Form Validation:** Required fields, card number length, expiry formatting, and CVV checks.
- **Thank You State:** After successful submission, a thank you message is displayed.
- **Responsive Design:** Mobile and desktop backgrounds, fully responsive layout.
- **Custom UI Components:** Button, Input, Label, Avatar (for card images).
- **Modern Stack:** Uses React 19, TypeScript, Vite, TailwindCSS, Radix UI, and React Hook Form.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Hook Form](https://react-hook-form.com/)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Project Structure

- `src/App.tsx` — Main app layout and state management
- `src/components/cardform.tsx` — The form for entering card details
- `src/components/cardsection.tsx` — Renders card images and overlays details
- `src/components/creditcard.tsx` — Wrapper for the card form
- `src/components/completestate.tsx` — Thank you/confirmation state
- `src/utils/helper.ts` — Formatting helpers for card number and expiry
- `src/constant/types.ts` — TypeScript types for form and props
- `src/index.css` — Tailwind and custom CSS
- `vite.config.ts` — Vite config with path aliasing

## Customization

- **Change card backgrounds:** Edit images in `public/`.
- **Update color theme:** Edit `src/index.css` theme variables.
- **Add fields/validation:** Update `CardForm` and types in `src/constant/types.ts`.

---

_This project was bootstrapped with Vite and uses best practices for modern React development._
