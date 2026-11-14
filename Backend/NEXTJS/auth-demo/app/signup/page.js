import Link from "next/link";
import { signup } from "../login/actions";

export const instant = false;

export default async function SignupPage({ searchParams }) {
  const { error } = await searchParams;

  const message =
    error === "exists"
      ? "An account with this email already exists."
      : error === "invalid"
        ? "Enter a name and use a password with at least 8 characters."
        : null;

  return (
    <div style={{ padding: 40 }}>
      <h1>Sign Up</h1>

      {message && <p>{message}</p>}

      <form action={signup}>
        <input
          name="name"
          type="text"
          placeholder="Full name"
          minLength="2"
          required
        />

        <br /><br />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          minLength="8"
          required
        />

        <br /><br />

        <button type="submit">Create account</button>
      </form>

      <br />
      <p>
        Already have an account? <Link href="/login">Log in</Link>
      </p>
    </div>
  );
}
