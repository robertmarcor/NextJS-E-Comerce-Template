# E-Commerce-Template

A modern, customizable e-commerce template built with [Next.js](https://nextjs.org/), [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), and [Supabase](https://supabase.com/) for authentication and database. Payments are handled via [Stripe Checkout](https://stripe.com/docs/checkout).

---

## Features

- ⚡ **Next.js** for fast, scalable React apps
- 🎨 **shadcn/ui** and **Tailwind CSS v4** for beautiful, customizable UI
- 🪄 **Framer Motion** for smooth animations
- 🔐 **Supabase Auth** for user authentication
- 🗄️ **Supabase Database** for data storage
- 💳 **Stripe Checkout** for secure payments

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/e-commerce-template.git
cd e-commerce-template
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add your Supabase and Stripe credentials.  
**Do not use the example keys below in production! Replace them with your own.**

```env
# Stripe keys
# Get your keys from https://dashboard.stripe.com/test/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key

# Supabase credentials
# Get your credentials from https://supabase.com/dashboard/project/_/settings/api
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Usage Guide

- **Authentication:**  
  Users can sign up and log in using Supabase Auth.

- **Products & Cart:**  
  The cart accepts products, each requiring a Stripe Price ID for checkout.
  See /lib/types.ts

- **Checkout:**  
  On checkout, the app uses Stripe Checkout.  
  After a successful payment, the app returns the [Stripe session response object](https://docs.stripe.com/api/checkout/sessions/create).

---

## Environment Variables Reference

| Key                               | Description                        |
|------------------------------------|------------------------------------|
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | Stripe publishable API key         |
| STRIPE_SECRET_KEY                  | Stripe secret API key              |
| NEXT_PUBLIC_SUPABASE_URL           | Supabase project URL               |
| NEXT_PUBLIC_SUPABASE_ANON_KEY      | Supabase anon public API key       |

---

## Credits

- Built by Me
- UI powered by [shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/)
- Auth & DB by [Supabase](https://supabase.com/)
- Payments by [Stripe](https://stripe.com/)

---

## License

This project is licensed under the [MIT License](./LICENSE).  
**Please credit the original author in any derivative works or distributions.**
