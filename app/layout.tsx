import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduPrompt Lesson Generator",
  description:
    "Create standards-aligned lesson plans with objectives, differentiation, assessments, and classroom-ready activities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
