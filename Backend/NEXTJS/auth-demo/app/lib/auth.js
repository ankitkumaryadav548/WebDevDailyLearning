import { redirect } from "next/navigation";
import { verifySession } from "./session";

// Authentication
export async function requireAuth() {
  const user = await verifySession();

  if (!user) redirect("/login");

  return user;
}

// Authorization / Role checking
export async function requireRole(role) {
  const user = await requireAuth();

  if (user.role !== role) {
    redirect(
      `/dashboard?error=unauthorized&required=${encodeURIComponent(role)}&current=${encodeURIComponent(user.role)}`
    );
  }

  return user;
}