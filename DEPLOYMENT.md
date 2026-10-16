# VYRA GAMES — Production Deployment & CI/CD Guide

This document outlines the automated deployment pipeline and domain configuration for the **Vyra Games** studio website.

---

## 1. Hosting Architecture Overview

- **Framework**: React 19 + TypeScript + Vite + Express Backend API
- **Target Hosting**: Vercel (or Node.js container / Cloud Run)
- **Primary Domain**: `vyragames.com` / `vyragames.in`
- **Asset CDN**: Edge caching for vector SVGs, logo artwork, and optimized fonts

---

## 2. Deploying to Vercel

### Step 1: Connect GitHub Repository
1. Push this codebase to your GitHub organization or personal repository: `github.com/your-org/vyra-games-web`.
2. Navigate to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and select the `vyra-games-web` repository.

### Step 2: Build & Output Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Vercel Serverless Function Config (for `/api/waitlist` & `/api/contact`)
If running purely on Vercel Serverless rather than a persistent Node container:
- The Express routes in `server.ts` can be exported directly or deployed using Vercel's Node runtime.
- For full-stack Node container hosting (e.g. Google Cloud Run, Railway, Render), execute:
  ```bash
  npm run build
  npm start
  ```

---

## 3. Custom Domain & DNS Configuration

To configure your official brand domain (e.g. `vyragames.com` or `vyragames.in`):

1. In the Vercel project dashboard, navigate to **Settings > Domains**.
2. Enter your domain: `vyragames.com` and `www.vyragames.com`.
3. Configure the following DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, Google Domains):

| Type  | Name | Value / Target          | TTL  |
|-------|------|-------------------------|------|
| **A** | `@`  | `76.76.21.21`           | Auto |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Auto |

4. Vercel will automatically provision a free SSL/TLS certificate (Let's Encrypt) within 5–15 minutes.

---

## 4. Automated CI/CD Pipeline (GitHub Actions)

A pre-configured GitHub Actions workflow is provided in `.github/workflows/deploy.yml`.

### Automated Pipeline Stages:
1. **Lint & Type Check**: Validates TypeScript compilation with `npm run lint`.
2. **Production Build**: Executes `npm run build` to verify clean bundle compilation.
3. **Automated Preview / Production Deploy**: Deploys preview URLs on pull requests and pushes to production on merges to `main`.

### Required GitHub Secrets:
Add the following secrets under **Repository Settings > Secrets and variables > Actions**:
- `VERCEL_TOKEN`: Personal access token generated in your Vercel account settings.
- `VERCEL_ORG_ID`: Found in your Vercel team/account settings.
- `VERCEL_PROJECT_ID`: Found in your Vercel project settings.
