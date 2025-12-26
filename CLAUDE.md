# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EventHub is a social event discovery app built with React 18 using Create React App. The project consists of a **single-page monolithic component** (`src/App.jsx`) with inline CSS (`src/App.css`).

## Project Structure

```
social_app_v4_react/
├── public/
│   └── index.html              # Root HTML template
├── src/
│   ├── App.jsx                 # Main monolithic component (712 lines)
│   ├── App.css                 # Complete stylesheet with CSS variables
│   └── index.js                # React entry point
├── index-standalone.html       # Standalone demo (CDN version, no build needed)
├── package.json
└── CLAUDE.md
```

## Running the Application

### Development Mode (Primary)
```bash
npm install    # First time only
npm start      # Start development server at http://localhost:3000
```

### Production Build
```bash
npm run build  # Creates optimized build in build/ folder
```

### Standalone Demo (No Build Required)
```bash
# Open the standalone version directly
open index-standalone.html

# OR run with local server
python3 -m http.server 8000
# Visit: http://localhost:8000/index-standalone.html
```

**Note**: `index-standalone.html` contains the entire app with React loaded from CDN. Use for quick demos only.

## Architecture

### Component Structure
The entire application is contained in a **single monolithic component** (`src/App.jsx`):
- **No component hierarchy** - all UI rendering happens within the main `App` component
- **Page rendering functions** - `renderExplorePage()`, `renderSavedPage()`, `renderMessagesPage()`, `renderProfilePage()` are inline functions that return JSX
- **Modal rendering** - Event details, create event form, and chat modals are conditionally rendered based on `activeModal` state

### State Management
All state is managed with `useState` hooks in the root `App` component:
- `currentPage` - Navigation state ('explore', 'saved', 'messages', 'create', 'profile')
- `events` - Array of event objects (includes filtering and saved status)
- `messages` - Message thread data
- `selectedCategories` - Active category filters
- `activeModal` - Controls which modal is displayed ('eventDetails', 'createEvent', 'advancedFilters', 'chat')
- `selectedEvent` - Currently viewed event in detail modal
- `lightMode` - Theme toggle state
- `formData` - Create event form state

**Critical**: There is no persistence layer. All data resets on page refresh.

### Data Structure
Events contain:
```javascript
{
  id, title, category, date, time, location, description,
  attendees, maxAttendees, image (gradient string),
  host, cost, attendeesList, saved (boolean)
}
```

Categories: `'social'`, `'fitness'`, `'creative'`, `'professional'`

### Styling Architecture
**CSS Variables** drive the theming system:
- Root variables defined in `:root` for dark mode
- `body.light-mode` overrides for light mode
- Theme toggle applies/removes `.light-mode` class to `<body>`
- Max width constrained to `414px` (mobile-first design)
- Event cards use gradient backgrounds defined in event data as `linear-gradient()` strings

## Key Implementation Patterns

### Event Filtering
Multi-select category filtering via `selectedCategories` array:
- Empty array = show all events
- Populated array = show only events matching selected categories

### Event Saving
Save/unsave updates the event's `saved` boolean in state:
```javascript
setEvents(events.map(ev =>
  ev.id === event.id ? { ...ev, saved: !ev.saved } : ev
))
```

### Modal System
Modals are controlled by `activeModal` state:
- Set to modal name to open: `setActiveModal('eventDetails')`
- Set to `null` to close
- Event details modal also requires setting `selectedEvent`

### Form Handling
Create event form uses controlled inputs via `formData` state:
- Updates with `setFormData({ ...formData, [field]: value })`
- On submit, creates new event object and adds to `events` array
- Form resets and navigates to explore page after creation

## Development Considerations

### Adding New Features
Since this is a monolithic component, new features should:
1. Add necessary state variables to the root component in `src/App.jsx`
2. Create inline render functions for complex UI sections
3. Update existing render functions to integrate new features
4. Add CSS to `src/App.css` using existing variable system

### Backend Integration
To connect to a real backend:
1. Replace `INITIAL_EVENTS` and `INITIAL_MESSAGES` with API fetches
2. Update event creation to POST to API endpoint
3. Add useEffect hooks for data fetching on mount
4. Consider adding loading states for async operations

### Theme Extension
To add new theme colors:
1. Add CSS variable to both `:root` and `body.light-mode`
2. Use `var(--variable-name)` in CSS rules
3. Ensure both themes have matching variable definitions

### Current Limitations
- No persistence (localStorage, backend)
- No authentication/user management
- No real-time features (WebSockets for chat)
- No image uploads (gradients only)
- No routing (single URL, all navigation is state-based)
- Theme preference not saved between sessions
- All event data is hardcoded in component
