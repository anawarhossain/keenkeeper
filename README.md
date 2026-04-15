# KeenKeeper

KeenKeeper is a React + Vite application for managing and nurturing personal friendships. It provides a clean dashboard for tracking friend relationships, viewing details, logging interactions, and exploring engagement analytics.

## Key Features

- Home dashboard with friend summaries and quick status cards
- Friend detail pages with next contact due date, relationship goals, and quick check-in actions
- Timeline view for browsing interaction history by type (Call, Text, Video)
- Stats page with an interactive Recharts pie chart measuring interaction distribution
- Responsive UI built with Tailwind CSS and DaisyUI
- Client-side routing using React Router
- Toast notifications via React Toastify

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- DaisyUI
- React Router 7
- Recharts
- React Toastify

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the app.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

- `src/main.jsx` - application entry point
- `src/router/Routes.jsx` - route definitions and page layout
- `src/context/ContextProvider.jsx` - global state and friend interaction logic
- `src/pages/home/Home.jsx` - dashboard overview
- `src/pages/friendDetails/FriendDetails.jsx` - friend detail and action page
- `src/pages/timeLine/TimeLine.jsx` - timeline view for interaction history
- `src/pages/stats/Stats.jsx` - analytics page with chart visualization
- `src/components/ui/card/` - reusable UI card components
- `public/friends.json` - sample friend data source

## Usage

- Browse the home page to view friend counts and relationship metrics.
- Click a friend card to open the detail page for that friend.
- Use the Timeline page to filter interactions by type.
- Visit the Stats page to see an interaction breakdown by Calls, Texts, and Videos.

## Notes

The app uses `public/friends.json` as the initial dataset and manages interactions through React context. It is a strong starting point for adding features like friend creation, persistence, user authentication, and editable goals.

# 👨‍💻 Author
**Md Anawar Hossain**
- **GitHub:** [@anawarhossain](https://github.com/anawarhossain)
- **Facebook:** [Anawar Hossain](https://web.facebook.com/AnawarHossain55)
- **LinkeIn:** [Anawar Hossain](https://www.linkedin.com/in/anawarhossain/)
- **X(Twitter):** [Anawar Hossain](https://x.com/MDANAWAR22)
- **WhatsApp:** [Anawar Hossain](https://wa.me/+8801701020694)
- **Role:** Junior Developer
