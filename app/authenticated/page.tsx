"use client";

import { useRouter } from "next/navigation";

export default function AuthenticatedPage() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <p style={{ fontSize: "24px", fontWeight: 600 }}>authenticated</p>
      <button
        onClick={handleLogout}
        style={{
          padding: "8px 16px",
          fontSize: "14px",
          background: "transparent",
          border: "1px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Log out
      </button>
    </main>
  );
}
