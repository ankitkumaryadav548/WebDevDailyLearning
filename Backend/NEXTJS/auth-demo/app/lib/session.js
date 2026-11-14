import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { getUserById } from "./users";
//install - npm install jose 
const secret = new TextEncoder().encode(
  process.env.SESSION_SECRET
);

// Create session
export async function createSession(user) {
  const token = await new SignJWT({ role: user.role })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);

  const cookieStore = await cookies();

  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  });
}

// Verify session
export async function verifySession() {
  try {
    const token = (await cookies()).get("session")?.value;

    if (!token) return null;

    const { payload } = await jwtVerify(token, secret);

    return getUserById(payload.sub);
  } catch {
    return null;
  }
}

// Destroy session
export async function deleteSession() {
  (await cookies()).delete("session");
}