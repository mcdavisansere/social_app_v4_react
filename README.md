# EventHub - React Social Event Discovery App

A complete React social event discovery app with dark/light mode theming and full event management features.

## Quick Start

```bash
npm install
npm start
```

Visit http://localhost:3000 to see the app running.

## Alternative: Standalone Demo

For a quick preview without setup:
```bash
open index-standalone.html
```

This standalone version runs directly in the browser with React loaded from CDN.

## Features Implemented

✅ **Explore Page** - Browse all events with beautiful card design
✅ **Event Filtering** - Filter by category (Social, Fitness, Creative, Professional)
✅ **Saved Events** - Save/unsave favorite events with heart icon
✅ **Event Details Modal** - View complete event information
✅ **Create Event Modal** - Form to create new events
✅ **Messages Page** - Chat interface with message list
✅ **Profile Page** - User profile with stats and settings
✅ **Dark/Light Mode** - Theme toggle in header
✅ **Bottom Navigation** - Fixed navigation bar with 5 tabs
✅ **Responsive Design** - Mobile-first 414px width design
✅ **Smooth Animations** - Hover effects and transitions

## Pages

### 1. Explore (🔍)
- View all events with gradient card designs
- Filter by category
- Save/unsave events
- Click event cards to view details

### 2. Saved (❤️)
- View all saved events
- Unsave events from this page

### 3. Messages (💬)
- Chat interface with message list
- Shows unread message count

### 4. Create (+)
- Form to create new events
- Categories: Social, Fitness, Creative, Professional
- Fields: Title, Category, Date, Time, Location, Cost, Max Attendees, Description

### 5. Profile (👤)
- User profile header with avatar and stats
- Upcoming events section
- Connection preferences toggle
- Account settings menu

## Customization

### Change Colors
Edit the CSS variables in `App.css`:
```css
:root {
  --bg-primary: #0f0f0f;
  --bg-secondary: #1a1a1a;
  --accent: #6366f1;
  /* ... other colors */
}
```

### Add Real Data
Replace the `INITIAL_EVENTS` and `INITIAL_MESSAGES` in `App.jsx` with your actual data source.

### Connect to Backend
- Replace event data fetching with API calls
- Add form submission handlers to create events
- Integrate messaging system with websockets

## Notes

- The app uses React hooks (useState) for state management
- CSS variables are used for theming (dark/light mode)
- All modal interactions are handled with React state
- Event creation form is fully functional and adds events to the list
- The responsive design works best on mobile/tablet sizes

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT - Feel free to use and modify
