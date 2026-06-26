import { useEffect } from "react";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  useEffect(() => {
    const handleCleanup = () => {
      const sessionId = sessionStorage.getItem("paperpilot_session_id");
      if (sessionId) {
        const API_BASE = import.meta.env.VITE_API_URL || (import.meta.env.DEV 
          ? "http://localhost:5000" 
          : "https://backendpilot-rnyj.onrender.com");
        
        const url = `${API_BASE}/api/ocr/cleanup`;
        const payload = JSON.stringify({ sessionId });

        if (navigator.sendBeacon) {
          const blob = new Blob([payload], { type: "text/plain" });
          navigator.sendBeacon(url, blob);
        } else {
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: payload,
            keepalive: true,
          }).catch((err) => console.error("Unload fetch failed:", err));
        }
      }
    };

    window.addEventListener("beforeunload", handleCleanup);
    window.addEventListener("pagehide", handleCleanup);

    return () => {
      window.removeEventListener("beforeunload", handleCleanup);
      window.removeEventListener("pagehide", handleCleanup);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
