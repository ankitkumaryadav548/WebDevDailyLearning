//authentication and Authorasation
"use client";
import { useState } from "react";
// http://localhost:3000/AuthentANDAuthor

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  
  async function handlesubmit(e) {
    e.preventDefault();
    setMessage("");

    // Validate before calling the API
    if (!email || !password) {
      setMessage("Please enter both email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api4/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Request failed");
        return;
      }

      setMessage(data.message || "Login successful");
    } catch (error) {
      setMessage("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>University Portal</h1>

      <form onSubmit={handlesubmit}>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Click me"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </main>
  );
}
