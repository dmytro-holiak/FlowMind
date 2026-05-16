# FlowMind

FlowMind is an AI-powered adaptive daily planner designed to help users prioritize tasks intelligently, generate daily plans based on calendar and tasks, and adapt schedules dynamically when plans break. It also provides weekly insights and productivity analysis, integrating seamlessly with Google Calendar.

## Features
- **AI Task Prioritization**: Helps users focus on what matters most.
- **Dynamic Daily Planning**: Automatically adjusts schedules when plans change.
- **Weekly Insights**: Offers productivity analysis and actionable insights.
- **Google Calendar Integration**: Syncs tasks and events effortlessly.

## Tech Stack
- **Next.js**: App Router for server-side rendering and routing.
- **TypeScript**: Ensures type safety and scalability.
- **TailwindCSS**: Provides utility-first styling with dark mode support.
- **shadcn/ui**: Pre-built UI components for rapid development.
- **Zustand**: Lightweight state management.
- **Supabase**: (Planned) Backend-as-a-Service for authentication and database.
- **OpenAI API**: (Planned) AI capabilities for task prioritization and planning.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Bumbilo/FlowMind.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
- `/app`: Next.js App Router structure.
- `/components`: Reusable UI components.
- `/features`: Business logic for tasks, AI planning, and calendar sync.
- `/lib`: Utility files for Supabase, OpenAI, and Google Calendar integrations.
- `/store`: Zustand state management.
- `/types`: TypeScript type definitions.

## License
This project is licensed under the MIT License.
