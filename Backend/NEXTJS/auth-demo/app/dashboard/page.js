import Link from "next/link";
import { requireAuth } from "../lib/auth";
import { logout } from "../login/actions";

export const instant = false;

export default async function DashboardPage({ searchParams }) {
  const user = await requireAuth();
  const { error, required, current } = await searchParams;

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome, {user.name}</h1>

      {error === "unauthorized" && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Access denied: your role is {current || user.role}, but this page
          requires the {required || "requested"} role.
        </p>
      )}

      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      {user.role === "admin" && (
        <Link href="/admin">Admin Dashboard</Link>
      )}

      {user.role === "student" && (
        <Link href="/student">Student Dashboard</Link>
      )}

      <br /><br />

      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}