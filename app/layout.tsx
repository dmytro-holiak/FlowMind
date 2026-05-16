import "../styles/globals.css";

export const metadata = {
  title: "FlowMind",
  description: "AI-powered adaptive daily planner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
