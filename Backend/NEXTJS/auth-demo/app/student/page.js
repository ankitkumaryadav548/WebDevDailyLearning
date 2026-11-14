import { requireRole } from "../lib/auth";

export const instant = false;

export default async function StudentPage() {
  const user = await requireRole("student");

  return (
    <div style={{ padding: 40 }}>
      <h1>Student Dashboard</h1>

      <h2>Welcome, {user.name}</h2>
      <h1>Welcome to NExtjs course</h1>

      <p>You can access your learning materials.</p>
    </div>
  );
}