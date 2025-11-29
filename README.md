# Frontend Documentation

**Complete documentation for the Talk2Partners frontend monorepo**

This documentation is designed for knowledge transfer and smooth onboarding of new engineers.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Quick Start](#quick-start)
3. [Architecture](#architecture)
4. [Documentation Index](#documentation-index)
5. [Onboarding Checklist](#onboarding-checklist)

---

## 🎯 Project Overview

### Purpose

This is a **monorepo** containing multiple Next.js applications for the Talk2Partners platform:

- **Admin App** (`apps/admin`) - Admin dashboard for managing courses, users, content, and platform operations
- **Account App** (`apps/account`) - User account management and authentication
- **Web App** (`apps/web`) - Public-facing website and course content

### Core Features

- **Course Management**: Create, edit, and manage courses with folders, content, videos, quizzes
- **User Management**: Admin dashboard for user administration
- **Authentication**: Phone number and OTP-based authentication with Better Auth
- **Content Management**: Rich text editing with Lexical, file uploads, video streaming
- **Analytics**: Real-time analytics and reporting
- **Notifications**: Push notifications and messaging system
- **Payment Integration**: Razorpay integration for payments
- **Real-time Features**: Socket.io for live chat and support

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.3.0+ | React framework with App Router |
| **React** | 19.1.0 | UI library |
| **TypeScript** | 5.8.2 | Type safety |
| **Tailwind CSS** | 4.1.11 | Styling |
| **pnpm** | 9.0.0 | Package manager |
| **Turborepo** | 2.5.4 | Monorepo build system |
| **Better Auth** | 1.3.8 | Authentication |
| **TanStack Query** | 5.83.0 | Server state management |
| **Zustand** | 5.0.6 | Client state management |
| **React Hook Form** | 7.60.0 | Form handling |
| **Zod** | 3.25.76 | Schema validation |
| **Lexical** | 0.33.1 | Rich text editor |
| **Socket.io** | 4.8.1 | Real-time communication |

### Architecture Overview

```
frontend/
├── apps/
│   ├── admin/          # Admin dashboard (port 3000)
│   ├── account/        # User account app (port 3002)
│   └── web/            # Public website (port 3001)
├── packages/
│   ├── ui/             # Shared component library
│   ├── eslint-config/  # Shared ESLint configs
│   └── typescript-config/ # Shared TS configs
└── turbo.json          # Turborepo configuration
```

**Key Architecture Decisions:**

- **Monorepo**: Single repository for all frontend apps and shared packages
- **App Router**: Next.js 15 App Router for all applications
- **Shared UI Package**: `@t2p-admin/ui` for reusable components
- **Feature-based Organization**: Features organized by domain (course, user, notification, etc.)
- **Type-safe API**: `@better-fetch/fetch` with Zod schemas for type-safe API calls
- **Server Components**: Leveraging React Server Components where possible

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: >= 18 (check with `node --version`)
- **pnpm**: 9.0.0 (install with `npm install -g pnpm@9.0.0`)
- **Git**: For version control

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd frontend

# Install dependencies
pnpm install

# Set up environment variables (see Environment Variables section)
cp .env.example .env
# Edit .env with your values

# Run development server
pnpm dev

# Or run specific app
pnpm dev:admin    # Admin app on port 3000
pnpm dev:web      # Web app on port 3001
pnpm dev:account  # Account app on port 3002
```

### Verify Installation

1. Open `http://localhost:3000` (admin app)
2. You should see the login page
3. Check browser console for any errors

---

## 📚 Documentation Index

### Core Documentation

- **[Folder Structure](./docs/FOLDER_STRUCTURE.md)** - Detailed explanation of project structure
- **[Environment Variables](./docs/ENVIRONMENT_VARIABLES.md)** - All environment variables explained
- **[Local Development Setup](./docs/LOCAL_DEVELOPMENT.md)** - Complete local setup guide

### Development Guides

- **[Code Style & Conventions](./docs/CODE_STYLE.md)** - Naming, linting, formatting rules
- **[State Management](./docs/STATE_MANAGEMENT.md)** - Zustand and React Query usage
- **[API Integration](./docs/API_INTEGRATION.md)** - How to make API calls
- **[UI Components](./docs/UI_COMPONENTS.md)** - Component library documentation
- **[Routing & Navigation](./docs/ROUTING.md)** - Next.js routing patterns
- **[Authentication Flow](./docs/AUTHENTICATION.md)** - Auth implementation details

### Advanced Topics

- **[Error & Loading States](./docs/ERROR_HANDLING.md)** - Error boundaries, loading states
- **[Performance Optimization](./docs/PERFORMANCE.md)** - Caching, optimization strategies
- **[Build & Deployment](./docs/DEPLOYMENT.md)** - Vercel deployment guide
- **[CI/CD](./docs/CI_CD.md)** - GitHub Actions and automation
- **[Testing](./docs/TESTING.md)** - Testing strategies and examples
- **[Troubleshooting](./docs/TROUBLESHOOTING.md)** - Common issues and solutions

---

## ✅ Onboarding Checklist

For new engineers joining the project:

- [ ] **Environment Setup**
  - [ ] Install Node.js >= 18
  - [ ] Install pnpm 9.0.0
  - [ ] Clone repository
  - [ ] Run `pnpm install`
  - [ ] Set up `.env` file (see [Environment Variables](./docs/ENVIRONMENT_VARIABLES.md))

- [ ] **Verify Setup**
  - [ ] Run `pnpm dev` and verify all apps start
  - [ ] Access admin app at `http://localhost:3000`
  - [ ] Check browser console for errors

- [ ] **Understand Structure**
  - [ ] Read [Folder Structure](./docs/FOLDER_STRUCTURE.md)
  - [ ] Explore `apps/admin` directory
  - [ ] Review `packages/ui` components

- [ ] **Learn Core Concepts**
  - [ ] Read [Authentication Flow](./docs/AUTHENTICATION.md)
  - [ ] Understand [API Integration](./docs/API_INTEGRATION.md)
  - [ ] Review [State Management](./docs/STATE_MANAGEMENT.md)

- [ ] **Development Workflow**
  - [ ] Read [Code Style & Conventions](./docs/CODE_STYLE.md)
  - [ ] Set up your editor (ESLint, Prettier)
  - [ ] Review [Routing & Navigation](./docs/ROUTING.md)

- [ ] **First Task**
  - [ ] Create a feature branch
  - [ ] Make a small change (e.g., update a component)
  - [ ] Run `pnpm lint` and `pnpm check`
  - [ ] Test your changes locally
  - [ ] Create a pull request

---

## 🛠️ Common Commands

```bash
# Development
pnpm dev              # Run all apps in dev mode
pnpm dev:admin        # Run only admin app
pnpm dev:web          # Run only web app
pnpm dev:account      # Run only account app

# Building
pnpm build            # Build all apps
pnpm build:admin      # Build admin app only
pnpm build:web        # Build web app only
pnpm build:account    # Build account app only

# Code Quality
pnpm lint             # Lint all apps
pnpm format           # Format code with Prettier
pnpm check            # Check formatting and linting

# Type Checking
cd apps/admin && pnpm check-types  # Type check admin app
```

---

## 📞 Getting Help

- **Documentation**: Check the [docs](./docs/) folder for detailed guides
- **Code Examples**: Look at existing features in `apps/admin/features/`
- **Component Library**: See `packages/ui/src/components/`
- **Issues**: Check [Troubleshooting](./docs/TROUBLESHOOTING.md) guide

---

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turborepo.org/docs)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Last Updated**: 2025-01-27
