# Gingerbread MBTI Quiz

An interactive personality quiz app built with Next.js that determines your MBTI type through a gingerbread-themed story.

A work of ❤️ from (Hope SG)[https://www.hopesingapore.org.sg/] x (Indigitous SG)[https://www.indigitous.sg/]

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Add required fonts:
- Place `Answers.otf` in `src/app/fonts/`

4. Add images:
- Question backgrounds: `public/images/s1.png` to `s12.png`
- Start screen: `public/images/start.jpg`
- MBTI type results: `public/images/types/` (INFP.jpg, ENFP.jpg, etc.)

5. Start development server:
```bash
npm run dev
```

## Tech Stack
- Next.js 14
- Tailwind CSS
- Next/font for custom font loading
- Next/image for optimized image loading

## Features
- Responsive design
- Custom button styling
- MBTI personality calculation
- Progress tracking
- Results sharing via Typeform integration