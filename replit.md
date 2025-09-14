# Overview

This is a modern personal portfolio website built with a full-stack TypeScript architecture. The application showcases a developer's work, skills, and experience through a minimalistic black-and-white themed design with smooth animations and responsive layouts. The portfolio includes sections for home/hero, about, projects, skills, and contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend uses React with TypeScript in a component-based architecture:

- **UI Framework**: React 18 with functional components and hooks
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: Radix UI primitives with custom shadcn/ui components
- **State Management**: React Query (TanStack Query) for server state and React hooks for local state
- **Animations**: Custom scroll-based animations using Intersection Observer API
- **Build Tool**: Vite for fast development and optimized production builds

The application follows a modular component structure with reusable UI components, custom hooks for shared logic, and a clean separation between presentation and business logic.

## Backend Architecture

The backend is built with Express.js in a lightweight REST API pattern:

- **Framework**: Express.js with TypeScript
- **Architecture**: Simple MVC pattern with routes and storage abstraction
- **Storage**: Currently uses in-memory storage with an interface that can be swapped for database implementations
- **Development**: Hot module replacement and middleware for request logging

The backend is minimal and focused on serving the frontend application, with provisions for future API endpoints and database integration.

## Data Storage Solutions

- **Current Implementation**: In-memory storage using Map data structures
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Schema**: User entity with username/password fields, designed for potential authentication features
- **Migration Support**: Drizzle Kit configured for database migrations

## Authentication and Authorization

Basic user schema is defined but authentication is not currently implemented. The architecture supports future addition of session-based or token-based authentication.

## External Dependencies

- **Database**: Neon Database (PostgreSQL) configured but not actively used
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Images**: Unsplash for placeholder images in portfolio sections
- **Development**: Replit-specific plugins for development environment integration
- **UI Components**: Extensive Radix UI component library for accessible, unstyled primitives
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation utilities