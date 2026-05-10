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
  "Literature",
  "Math",
  "Reading",
  "Science",
  "Social Studies",
  "PE",
  "Art",
  "CTAE",
  "Economics",
  "Personal Finance",
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

const needs = [
  "General Education",
  "Inclusion / Co-Teaching",
  "Small Group",
  "Remediation",
  "Enrichment",
];

const supports = [
  "Reading Support",
  "Vocabulary Support",
  "Math Support",
  "Behavior / Engagement",
  "ELL Support",
  "IEP Support",
];

export default function GeneratorPage() {
  const [grade, setGrade] = useState("9th Grade");
  const [subject, setSubject] = useState("Math");
  const [duration, setDuration] = useState("60 minutes");
  const [state, setState] = useState("Georgia");
  const [standard, setStandard] = useState("");
  const [topic, setTopic] = useState("");
  const [studentNeed, setStudentNeed] = useState("General Education");
  const [support, setSupport] = useState("Vocabulary Support");
  const [lesson, setLesson] = useState("");

  function generateLesson() {
    const finalTopic = topic || "the selected topic";
    const finalStandard = standard || "teacher-selected standard";

    const output = `
LESSON TITLE:
${finalTopic} — ${grade} ${subject} Lesson

GRADE / SUBJECT / DURATION:
Grade: ${grade}
Subject: ${subject}
State: ${state}
Duration: ${duration}

STANDARD:
${finalStandard}

LEARNING OBJECTIVE:
Students will understand and apply key concepts related to ${finalTopic} through guided instruction, collaborative practice, and independent application.

I CAN STATEMENT:
I can explain and apply what I learned about ${finalTopic} using examples, academic vocabulary, and classroom practice.

MATERIALS:
- Teacher presentation or board notes
- Student notebook or worksheet
- Vocabulary list
- Practice problems or reading passage
- Exit ticket

WARM-UP / BELL RINGER:
Students will respond to a short prompt connected to ${finalTopic}. The teacher will review responses to activate prior knowledge and identify misconceptions.

DIRECT INSTRUCTION:
The teacher will introduce the lesson objective, explain key vocabulary, model examples, and connect the topic to real-world or classroom examples. Students will take notes and ask clarifying questions.

GUIDED PRACTICE:
Students will work through sample tasks with teacher support. The teacher will check for understanding, provide corrective feedback, and model thinking aloud.

INDEPENDENT PRACTICE:
Students will complete a short assignment that requires them to apply the lesson skill independently. The task should include at least one written response or explanation.

DIFFERENTIATION SUPPORTS:
Student Need: ${studentNeed}
Support Focus: ${support}

Suggested supports:
- Provide sentence starters or guided notes
- Reduce language load when needed
- Use visuals, examples, or vocabulary previews
- Allow partner discussion before written response
- Provide small-group reteaching for students needing extra support
- Offer extension questions for advanced learners

ASSESSMENT / EXIT TICKET:
Students will complete a 3-question exit ticket:
1. What is one key idea you learned today?
2. Solve or explain one example related to ${finalTopic}.
3. What question do you still have?

CLOSURE:
The teacher will review the I Can statement, summarize the main learning, and preview how the skill connects to the next lesson.

TEACHER NOTES:
Use student responses from the exit ticket to plan reteaching, small-group support, or enrichment for the next class period.
    `.trim();

    setLesson(output);
  }

  function clearForm() {
    setStandard("");
    setTopic("");
    setLesson("");
  }

  async function copyLesson() {
    if (!lesson) return;
    await navigator.clipboard.writeText(lesson);
    alert("Lesson plan copied!");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        color: "#0f172a",
      }}
    >
      <header
        style={{
          background: "white",
          borderBottom: "1px solid #e2e8f0",
          padding: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#0f172a" }}>
            <strong style={{ fontSize: "22px" }}>EduPrompt Lesson Generator</strong>
          </Link>

          <nav style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/" style={navLink}>Home</Link>
            <Link href="/generator" style={navLink}>Generator</Link>
            <Link href="/about" style={navLink}>About</Link>
          </nav>
        </div>
      </header>

      <section style={{ padding: "48px 20px" }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>
            Lesson Plan Generator
          </h1>

          <p style={{ color: "#64748b", fontSize: "18px", marginBottom: "32px" }}>
            Build a classroom-ready lesson plan with objectives, activities,
            differentiation, assessment, and closure.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(280px, 420px) 1fr",
              gap: "24px",
              alignItems: "start",
            }}
          >
            <section style={cardStyle}>
              <h2 style={{ marginBottom: "20px" }}>Lesson Details</h2>

              <Field label="Grade Level">
                <select value={grade} onChange={(e) => setGrade(e.target.value)} style={inputStyle}>
                  {grades.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>

              <Field label="Subject">
                <select value={subject} onChange={(e) => setSubject(e.target.value)} style={inputStyle}>
                  {subjects.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>

              <Field label="State">
                <select value={state} onChange={(e) => setState(e.target.value)} style={inputStyle}>
                  {states.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>

              <Field label="Lesson Duration">
                <select value={duration} onChange={(e) => setDuration(e.target.value)} style={inputStyle}>
                  {durations.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>

              <Field label="Standard">
                <input
                  value={standard}
                  onChange={(e) => setStandard(e.target.value)}
                  placeholder="Example: CRM.MM.1 or ELAGSE9-10RI2"
                  style={inputStyle}
                />
              </Field>

              <Field label="Lesson Topic">
                <input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Example: Functions in real life"
                  style={inputStyle}
                />
              </Field>

              <Field label="Student Need">
                <select value={studentNeed} onChange={(e) => setStudentNeed(e.target.value)} style={inputStyle}>
                  {needs.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>

              <Field label="Differentiation Focus">
                <select value={support} onChange={(e) => setSupport(e.target.value)} style={inputStyle}>
                  {supports.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>

              <button onClick={generateLesson} style={primaryButton}>
                Generate Lesson Plan
              </button>

              <button onClick={clearForm} style={secondaryButton}>
                Clear Form
              </button>
            </section>

            <section style={cardStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}
              >
                <h2>Generated Lesson Plan</h2>

                <button onClick={copyLesson} style={copyButton}>
                  Copy Lesson Plan
                </button>
              </div>

              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  background: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "22px",
                  minHeight: "560px",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {lesson || "Your generated lesson plan will appear here."}
              </pre>

              <Link href="/" style={{ display: "inline-block", marginTop: "18px", color: "#2563eb", fontWeight: 700 }}>
                ← Back to Home
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: "block", marginBottom: "16px" }}>
      <span
        style={{
          display: "block",
          fontWeight: 700,
          marginBottom: "7px",
          color: "#334155",
        }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

const navLink: React.CSSProperties = {
  color: "#334155",
  textDecoration: "none",
  fontWeight: 700,
};

const cardStyle: React.CSSProperties = {
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "20px",
  padding: "26px",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
};

const primaryButton: React.CSSProperties = {
  width: "100%",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  padding: "15px",
  fontWeight: 800,
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};

const secondaryButton: React.CSSProperties = {
  width: "100%",
  background: "white",
  color: "#0f172a",
  border: "1px solid #cbd5e1",
  borderRadius: "12px",
  padding: "14px",
  fontWeight: 800,
  fontSize: "15px",
  cursor: "pointer",
  marginTop: "12px",
};

const copyButton: React.CSSProperties = {
  background: "#0f172a",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "12px 16px",
  fontWeight: 800,
  cursor: "pointer",
};
