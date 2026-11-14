import Link from "next/link";
import { login } from "./actions";

export const instant = false;
export default async function LoginPage({ searchParams }) {
  const { error } = await searchParams;
  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>
      {error && <p>Invalid email or password!</p>}

      <form action={login}>
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
          required
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <br />
      <p>
        Don&apos;t have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
}