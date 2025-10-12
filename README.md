# TJ Corporate Website

A modern, responsive corporate website built with Next.js 15, TypeScript, and Tailwind CSS.
The site features dynamic pages optimized for SEO.

## Installation

Clone the project

```bash
  git clone https://github.com/Torisho-Nihon-KK/tj-corporate-website
  cd tj-corporate-website
```

Install dependencies

```bash
  npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file provided in `env.example` file.

## Scripts

| Command         | Description                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------- |
| `npm run dev`   | Start dev server                                                                            |
| `npm run lint`  | Lint the code                                                                               |
| `npm run email` | Runs the email preview app provided by [React Email](https://react.email/docs/introduction) |

## Project Structure

```
corporate-website/
├── app/
│   ├── (landing)/          # Landing page
│   │   ├── api/            # APIs
│   │   ├── about/          # About Us page
│   │   ├── contact/        # Contact page
│   │   ├── legal-sct/      # Legal SCT page
│   │   ├── privacy/        # Privacy page
│   │   ├── services/       # Services page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # Reusable UI components
├── lib/                    # Helpers & utilities
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── package.json
└── tsconfig.json
└── .env.example            # Environment Variables Template
```
