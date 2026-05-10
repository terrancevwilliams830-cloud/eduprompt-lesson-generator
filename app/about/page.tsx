import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
        color: "#0f172a",
      }}
    >
      <div style={{ maxWidth: "850px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#2563eb", fontWeight: 700 }}>
          ← Back to Home
        </Link>

        <h1 style={{ fontSize: "44px", marginTop: "32px" }}>
          About EduPrompt Lesson Generator
        </h1>

        <p style={{ fontSize: "19px", lineHeight: 1.8, color: "#475569" }}>
          EduPrompt Lesson Generator helps teachers quickly create structured,
          classroom-ready lesson plans with objectives, I Can statements,
          instructional activities, differentiation supports, assessments, and
          closure.
        </p>

        <p style={{ fontSize: "19px", lineHeight: 1.8, color: "#475569" }}>
          This standalone app is part of the larger EduPrompt Solutions
          ecosystem, which is being built to support lesson planning,
          assignments, multilingual supports, ECS goals, and teacher review
          workflows.
        </p>

        <Link href="/generator">
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "16px 26px",
              fontSize: "16px",
              fontWeight: 800,
              cursor: "pointer",
              marginTop: "24px",
            }}
          >
            Open Generator →
          </button>
        </Link>
      </div>
    </main>
  );
}
