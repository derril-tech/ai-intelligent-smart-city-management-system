# Frontend Development Instructions - CivitasIQ

## Overview
This directory contains the Next.js 14 frontend application for the CivitasIQ Smart City Management System.

## Current Status
- ✅ Basic project structure and configuration
- ✅ Landing page with hero section and features
- ✅ Dashboard placeholder with KPI cards
- ✅ About page with platform information
- ✅ Tailwind CSS configuration with custom design tokens
- ✅ TypeScript configuration with path mappings

## TODO: Components to Implement

### Core Components (`/components`)
- [ ] `Layout/` - Main layout components
  - [ ] `Header.tsx` - Navigation header with user menu
  - [ ] `Sidebar.tsx` - Collapsible sidebar navigation
  - [ ] `Footer.tsx` - Application footer
- [ ] `UI/` - Reusable UI components
  - [ ] `Button.tsx` - Primary, secondary, and variant buttons
  - [ ] `Card.tsx` - Content cards with headers and actions
  - [ ] `Modal.tsx` - Modal dialogs and overlays
  - [ ] `Table.tsx` - Data tables with sorting and pagination
  - [ ] `Form.tsx` - Form components with validation
  - [ ] `Chart.tsx` - Chart components using Recharts
- [ ] `Map/` - Geospatial components
  - [ ] `MapView.tsx` - Main map component with Mapbox
  - [ ] `MapLayers.tsx` - Layer management and controls
  - [ ] `MapPopup.tsx` - Information popups for map features
- [ ] `Dashboard/` - Dashboard-specific components
  - [ ] `KPICard.tsx` - Key performance indicator cards
  - [ ] `IncidentList.tsx` - List of active incidents
  - [ ] `AlertPanel.tsx` - Real-time alerts and notifications
  - [ ] `TrendChart.tsx` - Time-series trend visualization

### Custom Hooks (`/hooks`)
- [ ] `useAuth.ts` - Authentication state management
- [ ] `useWebSocket.ts` - WebSocket connection management
- [ ] `useMapData.ts` - Map data fetching and state
- [ ] `useIncidents.ts` - Incident data management
- [ ] `useAnalytics.ts` - Analytics data fetching
- [ ] `useNotifications.ts` - Notification management

### Utility Functions (`/utils`)
- [ ] `api.ts` - API client with authentication
- [ ] `formatting.ts` - Data formatting utilities
- [ ] `validation.ts` - Form validation schemas
- [ ] `constants.ts` - Application constants
- [ ] `helpers.ts` - General helper functions

### Type Definitions (`/types`)
- [ ] `api.ts` - API response types
- [ ] `incidents.ts` - Incident-related types
- [ ] `analytics.ts` - Analytics data types
- [ ] `map.ts` - Map and geospatial types
- [ ] `user.ts` - User and authentication types

## TODO: Pages to Implement

### Dashboard Pages (`/app/dashboard`)
- [ ] `mobility/page.tsx` - Traffic and transit management
- [ ] `utilities/page.tsx` - Energy, water, and waste management
- [ ] `safety/page.tsx` - Public safety and emergency management
- [ ] `analytics/page.tsx` - Advanced analytics and reporting
- [ ] `admin/page.tsx` - System administration

### Feature Pages
- [ ] `incidents/[id]/page.tsx` - Individual incident details
- [ ] `reports/page.tsx` - Report generation and viewing
- [ ] `settings/page.tsx` - User and system settings
- [ ] `profile/page.tsx` - User profile management

## TODO: Integration Points

### API Integration
- [ ] Implement API client with React Query
- [ ] Add authentication token management
- [ ] Implement error handling and retry logic
- [ ] Add request/response interceptors

### Real-time Features
- [ ] WebSocket connection for live updates
- [ ] Real-time incident notifications
- [ ] Live map data updates
- [ ] Real-time analytics updates

### Map Integration
- [ ] Mapbox GL JS integration
- [ ] Layer management system
- [ ] Geospatial data visualization
- [ ] Interactive map features

### AI Features
- [ ] AI recommendation display
- [ ] Predictive analytics visualization
- [ ] Natural language query interface
- [ ] Automated report generation

## Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Implement proper error boundaries
- Add loading states for async operations

### Performance
- Implement proper memoization (useMemo, useCallback)
- Use React Query for server state management
- Optimize bundle size with code splitting
- Implement lazy loading for routes

### Accessibility
- Add proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Add screen reader support

### Testing
- Write unit tests for components
- Add integration tests for user flows
- Implement E2E tests for critical paths
- Add visual regression tests

## Environment Setup

### Required Environment Variables
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token
NEXT_PUBLIC_WS_URL=ws://localhost:8000
```

### Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

## File Structure Guidelines

### Component Organization
- Group related components in feature folders
- Use index files for clean imports
- Keep components small and focused
- Separate business logic from presentation

### State Management
- Use React Query for server state
- Use Zustand for client state
- Keep state as local as possible
- Avoid prop drilling with context

### Styling Approach
- Use Tailwind utility classes
- Create custom components for repeated patterns
- Use CSS variables for theming
- Maintain consistent spacing and typography

## Next Steps Priority

1. **High Priority**
   - Implement authentication system
   - Create core UI components
   - Set up API integration
   - Add map integration

2. **Medium Priority**
   - Implement real-time features
   - Add analytics components
   - Create incident management
   - Add user management

3. **Low Priority**
   - Add advanced features
   - Implement reporting system
   - Add admin functionality
   - Performance optimization

## Notes for AI Development

When implementing components:
- Follow the existing design patterns
- Use the established color scheme and typography
- Implement proper TypeScript types
- Add appropriate loading and error states
- Ensure mobile responsiveness
- Follow accessibility best practices

The frontend should provide a modern, intuitive interface for city operators to monitor and manage urban systems effectively.
