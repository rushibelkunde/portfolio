import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./app.css";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Rushikesh Belkunde — Software Developer with 2.5+ years of experience in React, Node.js, Go, and AI/LLM integration."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#09090b] text-zinc-200 min-h-screen antialiased">
        {/* Background ambient glow orbs */}
        <div
          className="bg-glow"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            right: "-200px",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)",
          }}
        />
        <div
          className="bg-glow"
          style={{
            width: "500px",
            height: "500px",
            bottom: "20%",
            left: "-150px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)",
          }}
        />

        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
