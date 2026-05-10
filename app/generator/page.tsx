"use client";

import { useState } from "react";
import Link from "next/link";

const grades = [
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
];

const subjects = [
  "Math",
  "Reading",
  "Literature",
  "Science",
  "Social Studies",
  "Economics",
  "Personal Finance",
  "CTAE",
  "Art",
  "PE",
];

const durations = ["30 minutes", "45 minutes", "60 minutes", "90 minutes"];

const states = [
  "Georgia",
  "Alabama",
  "Florida",
  "North Carolina",
  "South Carolina",
  "Tennessee",
  "Texas",
  "California",
  "New York",
  "Other",
];

export default function GeneratorPage() {
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [state, setState] = useState("");
  const [standard, setStandard] = useState("");
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState("");
  const [loading, setLoading] = useState(false);

  function generateLesson() {
    setLoading(true);

    setTimeout(() => {
      const output = `
LESSON TITLE:
${topic || "Untitled Lesson"}

GRADE / SUBJECT / DURATION:
Grade: ${grade || "Not selected"}
Subject: ${subject || "Not selected"}
State: ${state || "Not selected"}
Duration: ${duration || "Not selected"}

STANDARD:
${standard || "Teacher will add standard."}

OBJECTIVE:
Students will understand and apply key concepts related to ${topic || "the lesson topic"} through direct instruction, guided practice, and independent application.

I CAN STATEMENT:
I can explain and apply what I learned about ${topic || "today's topic"}.

WARM-UP:
Students will complete a short bell ringer that activates prior knowledge and introduces the lesson topic.

DIRECT INSTRUCTION:
The teacher will introduce vocabulary, model examples, explain the core concept, and connect the lesson to real-world or classroom examples.

GUIDED PRACTICE:
Students will complete practice examples with teacher support. The teacher will check for understanding and provide feedback.

INDEPENDENT PRACTICE:
Students will complete a short activity, worksheet, written response, or problem set to demonstrate understanding.

DIFFERENTIATION:
- Provide sentence starters
- Preview key vocabulary
- Use visuals and examples
- Allow partner discussion
- Provide small-group support
- Offer extension questions for advanced learners

ASSESSMENT:
The teacher will assess student understanding through questioning, observation, student work, and the exit ticket.

EXIT TICKET:
1. What is one thing you learned today?
2. Complete one example connected to ${topic || "the lesson"}.
3. What question do you still have?

TEACHER NOTES:
Use exit ticket responses to plan reteaching, enrichment, or small-group instruction.
      `.trim();

      setLesson(output);
      setLoading(false);
    }, 800);
  }

  function copyLesson() {
    navigator.clipboard.writeText(lesson);
    alert("Lesson copied!");
  }

  function printLesson() {
    window.print();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        color: "#0f172a",
        padding: "50px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#2563eb", fontWeight: 700 }}>
          ← Back to Home
        </Link>

        <h1 style={{ fontSize: "52px", marginTop: "30px" }}>
          Lesson Plan Generator
        </h1>

        <p style={{ fontSize: "20px", color: "#475569", marginBottom: "35px" }}>
          Create a structured lesson plan with objectives, activities,
          assessment, exit ticket, and differentiation.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(300px, 420px) 1fr",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <section
            style={{
              background: "white",
              padding: "28px",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h2>Lesson Details</h2>

            <Field label="Grade Level">
              <select value={grade} onChange={(e) => setGrade(e.target.value)} style={input}>
                <option value="">Select grade</option>
                {grades.map((g) => <option key={g}>{g}</option>)}
              </select>
            </Field>

            <Field label="Subject">
              <select value={subject} onChange={(e) => setSubject(e.target.value)} style={input}>
                <option value="">Select subject</option>
                {subjects.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>

            <Field label="Duration">
              <select value={duration} onChange={(e) => setDuration(e.target.value)} style={input}>
                <option value="">Select duration</option>
                {durations.map((d) => <option key={d}>{d}</option>)}
              </select>
            </Field>

            <Field label="State">
              <select value={state} onChange={(e) => setState(e.target.value)} style={input}>
                <option value="">Select state</option>
                {states.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>

            <Field label="Standard">
              <input
                value={standard}
                onChange={(e) => setStandard(e.target.value)}
                placeholder="Example: CRM.MM.1"
                style={input}
              />
            </Field>

            <Field label="Topic">
              <input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Example: Functions in real life"
                style={input}
              />
            </Field>

            <button onClick={generateLesson} style={primaryBtn}>
              {loading ? "Generating..." : "Generate Lesson Plan"}
            </button>
          </section>

          <section
            style={{
              background: "white",
              padding: "28px",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <h2>Generated Lesson Output</h2>

              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={copyLesson} style={darkBtn}>Copy</button>
                <button onClick={printLesson} style={outlineBtn}>Print</button>
              </div>
            </div>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                background: "#f1f5f9",
                padding: "24px",
                borderRadius: "16px",
                minHeight: "520px",
                fontSize: "16px",
                lineHeight: 1.7,
                border: "1px solid #e2e8f0",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {loading
                ? "Loading animation: Building your lesson plan..."
                : lesson || "Your generated lesson plan will appear here."}
            </pre>

            <div
              style={{
                marginTop: "20px",
                padding: "18px",
                background: "#eff6ff",
                borderRadius: "14px",
                color: "#1e40af",
                fontWeight: 700,
              }}
            >
              Export Section: Copy, print, or paste this lesson into your LMS,
              Canvas, Google Docs, or district lesson plan template.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "block", marginTop: "18px" }}>
      <strong style={{ display: "block", marginBottom: "8px" }}>{label}</strong>
      {children}
    </label>
  );
}

const input: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
};

const primaryBtn: React.CSSProperties = {
  width: "100%",
  marginTop: "24px",
  padding: "16px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontWeight: 800,
  fontSize: "16px",
  cursor: "pointer",
};

const darkBtn: React.CSSProperties = {
  background: "#0f172a",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "10px 16px",
  fontWeight: 800,
  cursor: "pointer",
};

const outlineBtn: React.CSSProperties = {
  background: "white",
  color: "#0f172a",
  border: "1px solid #cbd5e1",
  borderRadius: "10px",
  padding: "10px 16px",
  fontWeight: 800,
  cursor: "pointer",
};
