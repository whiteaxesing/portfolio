# Portfolio

A modern, minimalist portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Material-UI**, and **Supabase**.

Clean. Fast. Professional.

---

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: Material-UI (MUI) with custom theming
- **Database**: Supabase
- **Styling**: Tailwind CSS + MUI emotion
- **Animations**: Framer Motion + custom scroll animations
- **Type Safety**: TypeScript
- **Code Quality**: ESLint + Prettier

---

## Pages

- **Home** - Hero, services, technologies, companies
- **About** - Career timeline, philosophy, future plans
- **Resume** - Featured projects, experience, education, skills (unified page)
- **Blog** - Articles powered by Supabase
- **Contact** - Form + Calendly integration

---

## Installation

Install dependencies:

```bash
npm install
```

Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials.

---

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format

# Lint and format
npm run check
```

Open [http://localhost:3000](http://localhost:3000).

---

## Supabase Setup

### Blog Table Schema

Create a table called `blog_posts` in your Supabase project:

```sql
create table blog_posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  excerpt text not null,
  content text not null,
  published_at timestamp with time zone not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  tags text[] default '{}',
  featured_image text,
  read_time integer
);

-- Add RLS policy for public read access
alter table blog_posts enable row level security;

create policy "Blog posts are publicly readable"
  on blog_posts for select
  using (true);
```

### Adding Blog Posts

Use the Supabase dashboard to insert blog posts, or create an admin interface.

---

## Customization

### Update Social Links

Edit `src/components/Footer.tsx`:

```typescript
const socialLinks = [
  { name: 'LinkedIn', url: 'your-linkedin-url', icon: <LinkedInIcon /> },
  { name: 'GitHub', url: 'your-github-url', icon: <GitHubIcon /> },
  { name: 'Email', url: 'mailto:your-email', icon: <EmailIcon /> },
];
```

### Update Projects

Edit `src/data/projectsData.tsx` to add your own projects.

### Update Experience

Edit `src/data/experienceData.tsx` to add your work history and skills.

---

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or deploy to any platform that supports Next.js.

---

## License

MIT
