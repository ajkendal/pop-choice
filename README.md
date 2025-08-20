# PopChoice

A Scrimba-inspired project built with **React + Vite**, **Supabase**, **Cloudflare Workers**, **Vercel**, **SCSS Modules**, **Figma**, the **TMDB API**, and the **OpenAI API**. PopChoice helps users create and vote on movie suggestions, surfaces trending picks, and—optionally—uses AI to summarize community sentiment about films.

---

## ✨ Features

- Suggest movies
- Real-time updates backed by Supabase
- Movie metadata fetched from **TMDB API** (posters, descriptions, ratings)
- Cloudflare Worker API for secure server-side actions
- AI summaries via OpenAI
- Fast, modern UI with React + Vite and SCSS Modules
- Flexible deployment with **Vercel** for frontend hosting
- **Figma** for design collaboration and UI prototyping [Figma File](https://www.figma.com/design/v7vyKvGJOjBieBdiP7TXBY/PopChoice?node-id=0-1&t=XMeGa25fXxi4bTPL-1)

---

## 🧰 Tech Stack

- **Frontend:** React 18, Vite, TypeScript, SCSS Modules
- **Hosting:** Vercel
- **Backend:** Cloudflare Workers (Wrangler)
- **Database/Auth:** Supabase (Postgres + Row Level Security)
- **APIs:** TMDB API (movie data), OpenAI API (summaries / recommendations)
- **Design:** Figma

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ (or **pnpm**/**yarn**)
- A **Supabase** project (free tier ok)
- A **Cloudflare** account with **Wrangler** CLI
- A **Vercel** account (for frontend deployment)
- A **TMDB** API key (for movie metadata)
- **OpenAI** account + API key
- **Figma** account (for accessing design files)

## 🎯 Stretch Goals

- Support **multiple user feedback** on each movie suggestion
- Compare and contrast feedback to surface the **best recommendation**
- Enhanced AI summaries that highlight **community consensus**

---

## 🙏 Acknowledgements

- Built as part of the **Scrimba** curriculum/project
- Thanks to Supabase, Cloudflare Workers, Vercel, Figma, TMDB, and OpenAI for awesome tooling
