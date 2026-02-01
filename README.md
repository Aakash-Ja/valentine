# 💕 Valentine Wish

> Celebrate your love story with a beautiful, interactive web app. This project is designed to be a heartfelt digital experience for your Valentine's Day, featuring personalized greetings, memory galleries, love stories, and more.

---

## 🌟 Features

- **Interactive Pages**: 6 unique pages to explore and celebrate your love
- **Greeting Cards**: Beautiful flip-card greetings with smooth animations
- **Love Story Timeline**: Relive your special moments together
- **Gallery**: Browse cherished memories and moments
- **Message Board**: Share and collect sweet messages
- **Surprise Reveal**: Click to reveal special messages and surprises
- **Theme Toggle**: Switch between Light, Dark, Romantic, and Sunset themes
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Dark Mode Support**: Full dark mode with automatic system detection

---

## 🚀 Getting Started

### Prerequisites

- [Node.js & npm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Aakash-Ja/valentine-wish.git
   cd valentine-wish
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

### Edit in GitHub

- Use the GitHub web editor to make quick changes and commit directly.

### Codespaces

- Launch a cloud development environment with GitHub Codespaces for instant setup.

---

## 🗺️ Navigation & Structure

- **Home**: Welcome, quick links, and main CTA
- **Greeting Card**: Personalized flip-card greetings
- **Love Story**: Timeline of your memories
- **Gallery**: Photo memories and moments
- **Messages**: Message board for sweet thoughts
- **Surprise**: Reveal a special surprise

Navigation is always available at the top of the screen for easy access.

---

## 🎨 Customization

### Adding Your Own Messages

Edit greeting card messages in [src/pages/GreetingCard.tsx](src/pages/GreetingCard.tsx):

```tsx
const greetings = [
  {
    title: "Your Title",
    message: "Your custom message here",
    color: "from-pink-500 to-rose-500",
  },
  // Add more cards...
];
```

### Update Love Story Timeline

Edit [src/pages/LoveStory.tsx](src/pages/LoveStory.tsx):

````tsx
const story = [
  {
    year: "Your Date",
    title: "Your Title",
    description: "Your story description here",
  },
- **Change messages:** Edit text in each page under `src/pages/`.
- **Update greeting cards:** Modify greeting messages in [src/pages/GreetingCard.tsx](src/pages/GreetingCard.tsx).
- **Edit timeline:** Update the love story timeline in [src/pages/LoveStory.tsx](src/pages/LoveStory.tsx).
- **Add gallery photos:** Update gallery photos in [src/pages/Gallery.tsx](src/pages/Gallery.tsx).
- **Styling:** Tailwind CSS and shadcn-ui make it easy to tweak colors, animations, and layouts in [src/index.css](src/index.css).

---

## 📂 Project Structure

- `src/pages/` – Main pages (Home, Greeting, Love Story, Gallery, Messages, Surprise)
- `src/components/` – UI components (Navigation, ThemeToggle, FloatingHearts, PageWrapper)
- `src/hooks/` – Custom hooks (useTheme for theme management)
- `index.html` – Main HTML template

---

## 📝 Development

### Adding New Pages

Create a new component in `src/pages/` and add routing in [src/App.tsx](src/App.tsx)

### Modifying Styles

Update global styles in [src/index.css](src/index.css) or component-specific styles using Tailwind classes

### Adding Components

Create custom components in `src/components/` and reuse them across pages

## 🧪 Testing

Run tests with:
```bash
npm run test          # Run all tests once
npm run test:watch    # Run tests in watch mode
````

---

## 📄 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `vitest.config.ts` - Vitest configuration

---

## 🛠️ Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy

Deploy the `dist` folder to your preferred hosting:

- Vercel (recommended)
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3

---

## 🧩 Troubleshooting

- If you see errors, make sure your Node.js version is up to date.
- Delete `node_modules` and run `npm install` if dependencies are missing.
- For routing issues, ensure your hosting supports SPA fallback (serve `index.html` for all routes).

---

## 💡 Tips

- Personalize every page for your love story.
- Add new sections or animations to make it even more special.
- Share the link with your special someone!

---

## 👨‍💻 Developer

**Aakash Jaiswal**

- GitHub: [@Aakash-Ja](https://github.com/Aakash-Ja)
- Portfolio: https://aakash-ja.vercel.app

---

## 📄 License

Copyright © 2026 Aakash Jaiswal

This project is open source under the MIT License.
Any use, modification, or distribution must include credit to the original author.

---

## ❤️ Support

If you like this project, give it a ⭐ on GitHub and share it with others!

---

## 🎉 Credits

This project is a celebration of your unique love story. Enjoy, customize, and make it yours!
