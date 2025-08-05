# Overview

This is a modern portfolio website for Shahmeer Saud, a Computer Science & Finance student at Rutgers University. The application is a full-stack single-page application built with React on the frontend and Express on the backend, showcasing projects, skills, leadership experience, and providing a contact form for potential employers and collaborators.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool and development server
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **UI Components**: Comprehensive component library based on shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build System**: Vite with custom aliases for clean import paths (@, @shared, @assets)

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API with a single contact form endpoint (`POST /api/contact`)
- **Development Setup**: Hot module replacement through Vite integration in development mode
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Custom request logging middleware that tracks API calls with duration and response data

## Data Management
- **Database**: PostgreSQL with Drizzle ORM for schema definition and migrations
- **Schema**: Minimal user schema defined in shared directory for potential future authentication
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Validation**: Zod schemas for both client and server-side data validation

## Development Experience
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared types
- **Code Organization**: Monorepo structure with shared schemas and types between client and server
- **Development Tools**: ESBuild for production bundling, TSX for development server execution
- **Environment**: Replit-optimized with development banner and cartographer integration

# External Dependencies

## UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Lucide React**: Icon library for consistent iconography

## Data and State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for type-safe data handling
- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema migrations

## Database and Storage
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Neon Database**: Serverless PostgreSQL driver for cloud database connectivity

## Development and Build Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment integration and error handling

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx/tailwind-merge**: Conditional CSS class management
- **nanoid**: Unique ID generation
- **wouter**: Lightweight client-side routing