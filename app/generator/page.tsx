import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f8fbff 0%, #eef5ff 50%, #ffffff 100%)",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            background: "#dbeafe",
            color: "#2563eb",
            padding: "8px 18px",
            borderRadius: "999px",
            fontWeight: 700,
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          EduPrompt Lesson Generator
        </div>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: 1.05,
            marginBottom: "24px",
            color: "#0f172a",
            fontWeight: 800,
          }}
        >
          Build AI-Powered
          <br />
          Lesson Plans Faster
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.7,
            color: "#475569",
            maxWidth: "720px",
            margin: "0 auto 40px",
          }}
        >
          Create standards-aligned lesson plans for any grade level, subject,
          and learning style in minutes.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          <Link href="/generator">
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "16px 28px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Start Generating
            </button>
          </Link>

          <Link href="/about">
            <button
              style={{
                background: "white",
                color: "#0f172a",
                border: "1px solid #cbd5e1",
                padding: "16px 28px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              About This Tool
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Standards-Aligned Plans",
            "Differentiated Instruction",
            "Printable Activities",
            "Exit Tickets & Assessments",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "white",
                padding: "28px",
                borderRadius: "18px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "12px",
                  color: "#0f172a",
                }}
              >
                {item}
              </h3>

              <p style={{ color: "#64748b", lineHeight: 1.6 }}>
                Professional classroom-ready instructional support powered by AI.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
