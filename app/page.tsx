import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #f8fbff, #eef4ff)",
        fontFamily: "Arial, sans-serif",
        color: "#0f172a",
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 20px 80px",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            background: "#dbeafe",
            color: "#2563eb",
            padding: "12px 24px",
            borderRadius: "999px",
            fontWeight: 700,
            marginBottom: "40px",
            fontSize: "15px",
          }}
        >
          EduPrompt Lesson Generator
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "72px",
            lineHeight: 1.05,
            fontWeight: 800,
            maxWidth: "900px",
            margin: "0 auto 30px",
            letterSpacing: "-2px",
          }}
        >
          Build AI-Powered
          <br />
          Lesson Plans Faster
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "28px",
            color: "#475569",
            maxWidth: "850px",
            margin: "0 auto 50px",
            lineHeight: 1.6,
          }}
        >
          Create standards-aligned lesson plans for any grade
          level, subject, and learning style in minutes.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}
        >
          <Link href="/generator">
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "20px 38px",
                borderRadius: "16px",
                fontSize: "20px",
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
                padding: "20px 38px",
                borderRadius: "16px",
                fontSize: "20px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              About This Tool
            </button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Standards-Aligned Plans",
              text: "Professional classroom-ready instructional support powered by AI.",
            },
            {
              title: "Differentiated Instruction",
              text: "Create accommodations and supports for diverse learners.",
            },
            {
              title: "Printable Activities",
              text: "Generate worksheets, bell ringers, and practice activities.",
            },
            {
              title: "Exit Tickets & Assessments",
              text: "Quick formative assessment tools in seconds.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "40px 30px",
                border: "1px solid #e2e8f0",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "18px",
                  fontWeight: 800,
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: 1.7,
                  fontSize: "20px",
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
