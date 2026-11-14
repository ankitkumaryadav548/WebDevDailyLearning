import { requireRole } from "../lib/auth";

export const instant = false;

export default async function AdminPage() {
  const user = await requireRole("admin");

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>

      <h2>Welcome, {user.name}</h2>

      <p>You can manage the application.</p>
    </div>
  );
}