"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createUser, getUserByEmail } from "@/app/lib/users";
import { createSession, deleteSession } from "@/app/lib/session";

// Login
export async function login(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = getUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    redirect("/login?error=1");
  }

  await createSession(user);

  redirect(user.role === "admin" ? "/admin" : "/student");
}

export async function signup(formData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");

  if (name.length < 2 || !email || password.length < 8) {
    redirect("/signup?error=invalid");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await createUser({ name, email, passwordHash });

  if (!user) {
    redirect("/signup?error=exists");
  }

  await createSession(user);
  redirect("/student");
}

// Logout
export async function logout() {
  await deleteSession();

  redirect("/login");
}