import Link from "next/link";

export default function GeneratorPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fbff",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#2563eb",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          ← Back to Home
        </Link>

        <h1
          style={{
            fontSize: "54px",
            marginTop: "30px",
            marginBottom: "20px",
            color: "#0f172a",
          }}
        >
          Lesson Plan Generator
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#475569",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          Create classroom-ready lesson plans with AI assistance.
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <input
            placeholder="Grade Level"
            style={{
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
            }}
          />

          <input
            placeholder="Subject"
            style={{
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
            }}
          />

          <textarea
            placeholder="Lesson Topic"
            rows={6}
            style={{
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
            }}
          />

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "18px",
              borderRadius: "14px",
              fontWeight: 700,
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Generate Lesson Plan
          </button>
        </div>
      </div>
    </main>
  );
}
