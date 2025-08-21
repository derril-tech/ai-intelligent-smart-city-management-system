# CivitasIQ Frontend

The frontend application for the CivitasIQ Intelligent Smart City Management System, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Backend API running (see backend README)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-intelligent-smart-city-management-system/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # Dashboard pages
│   ├── about/             # About page
│   └── globals.css        # Global styles
├── components/            # Reusable components (TODO)
├── hooks/                 # Custom React hooks (TODO)
├── lib/                   # Utility libraries (TODO)
├── types/                 # TypeScript type definitions (TODO)
├── utils/                 # Helper functions (TODO)
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design System

The application uses a custom design system built with Tailwind CSS:

### Colors
- **Primary**: Blue shades for main actions and branding
- **Secondary**: Gray shades for secondary elements
- **Success**: Green shades for positive states
- **Warning**: Yellow/Orange shades for caution states
- **Danger**: Red shades for error states

### Components
- **Buttons**: Primary, secondary, and variant styles
- **Cards**: Content containers with consistent styling
- **Forms**: Input fields with validation states
- **Tables**: Data tables with sorting and pagination
- **Modals**: Overlay dialogs for focused interactions

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000

# Mapbox Configuration
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here

# Application Configuration
NEXT_PUBLIC_APP_NAME=CivitasIQ
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_APP_ENVIRONMENT=development
```

### Tailwind Configuration

The Tailwind configuration includes:
- Custom color palette
- Custom animations
- Responsive breakpoints
- Component utilities

## 📱 Features

### Current Features
- ✅ Responsive landing page
- ✅ Dashboard layout with KPI cards
- ✅ About page with platform information
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript support
- ✅ Mobile-responsive design

### Planned Features
- 🔄 Real-time data visualization
- 🔄 Interactive maps with Mapbox
- 🔄 AI-powered analytics dashboard
- 🔄 Incident management interface
- 🔄 User authentication and authorization
- 🔄 Real-time notifications
- 🔄 Advanced reporting tools

## 🔌 API Integration

The frontend integrates with the CivitasIQ backend API:

### Authentication
- JWT token-based authentication
- Role-based access control
- Session management

### Real-time Features
- WebSocket connections for live updates
- Real-time incident notifications
- Live map data updates

### Data Management
- React Query for server state
- Optimistic updates
- Error handling and retry logic

## 🧪 Testing

### Unit Testing
```bash
npm run test
```

### E2E Testing
```bash
npm run test:e2e
```

### Visual Regression Testing
```bash
npm run test:visual
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

### Code Style
- Use TypeScript for all components
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Implement proper error boundaries
- Add loading states for async operations

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run type-check`
- Verify environment variables are set correctly

**Runtime Errors**
- Check browser console for JavaScript errors
- Verify API endpoints are accessible
- Ensure backend services are running

**Styling Issues**
- Clear browser cache
- Restart development server
- Check Tailwind CSS configuration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the documentation
- Review existing issues
- Create a new issue with detailed information
- Contact the development team

---

**CivitasIQ** - Intelligent Smart City Management System
