# Authentication and Authorization Teaching Guide

## 1. What This Example Demonstrates

This Next.js application demonstrates:

- Authentication: verifying email and password
- Signup validation and duplicate-email checks
- Password hashing with bcrypt
- Authorization using user roles
- Session creation with a signed JWT
- Session storage in an HTTP-only cookie
- Protected server-rendered routes
- Access-denied messages
- Logout and cookie deletion
- The concept of a proxy or middleware
- Browser validation and server validation

The example is suitable for teaching, not production deployment. It stores users in memory and resets them when the development server restarts.

---

## 2. Folder Structure

```text
auth-demo/
|-- app/
|   |-- page.js                 Redirects the root route to login
|   |-- login/
|   |   |-- page.js             Login form
|   |   `-- actions.js          Login, signup, and logout actions
|   |-- signup/
|   |   `-- page.js             Signup form and signup messages
|   |-- dashboard/
|   |   `-- page.js             Common authenticated dashboard
|   |-- student/
|   |   `-- page.js             Student-only route
|   |-- admin/
|   |   `-- page.js             Admin-only route
|   `-- lib/
|       |-- users.js            In-memory users and user lookup
|       |-- session.js          JWT session and cookie functions
|       `-- auth.js             Authentication and authorization helpers
|-- proxy.js                    Verifies sessions and role access before routes
|-- .env.local                  Contains SESSION_SECRET
|-- package.json                Dependencies and npm commands
`-- next.config.mjs             Next.js configuration
```

---

## 3. Core Concepts

### Authentication

Authentication answers:

> Who is this user?

The login flow checks the submitted email and password and then creates an authenticated session.

### Authorization

Authorization answers:

> What is this authenticated user allowed to access?

The application has two roles:

- `student`
- `admin`

A student can access student routes, while an admin can access admin routes.

### Session

A session records that a user has already authenticated successfully. This application stores the session in a signed JWT inside an HTTP-only cookie.

### Cookie

A cookie is browser-managed state sent with requests to the application. The cookie in this project is named `session`.

### Proxy or Middleware

A proxy or middleware runs before a request reaches a route. It is useful for early request filtering, such as:

- Redirecting users without a session
- Redirecting users with the wrong role
- Adding headers
- Logging requests
- Applying global request rules

In Next.js 16, the framework convention name is `proxy`. Older Next.js documentation calls this middleware.

This project contains a custom root-level [proxy.js](proxy.js). It runs before requests for `/dashboard`, `/admin`, and `/student` and performs authentication and role checks.

The route pages still use `requireAuth()` and `requireRole()` as a second server-side defense. Using the proxy and server-page checks together demonstrates two security layers.

---

## 4. Complete Request Flow

### Signup Flow

```text
Student opens /signup
    -> Browser checks required fields and password length
    -> Form calls signup(formData)
    -> Server checks name, email, and password again
    -> Server hashes the password with bcrypt
    -> createUser() checks for an existing email
    -> A student user is added to the users array
    -> createSession() creates a signed JWT
    -> JWT is stored in the session cookie
    -> Student is redirected to /student
```

Relevant files:

- [Signup page](app/signup/page.js)
- [Signup server action](app/login/actions.js)
- [User creation and lookup](app/lib/users.js)
- [Cookie and JWT creation](app/lib/session.js)

### Login Flow

```text
Student opens /login
    -> login(formData) receives email and password
    -> getUserByEmail() finds the user
    -> bcrypt.compare() compares password with passwordHash
    -> createSession() creates a signed JWT
    -> JWT is stored in the session cookie
    -> Admin is redirected to /admin
    -> Student is redirected to /student
```

An invalid email or password redirects to `/login?error=1` and shows an invalid login message.

### Protected Route Flow

```text
Browser requests /admin
    -> Admin page calls requireRole("admin")
    -> requireRole() calls requireAuth()
    -> requireAuth() calls verifySession()
    -> verifySession() reads the session cookie
    -> jwtVerify() verifies the JWT signature and expiration
    -> getUserById() finds the JWT subject
    -> Role is compared with "admin"
    -> Matching role: render /admin
    -> Wrong role: redirect to /dashboard with access-denied details
    -> No session: redirect to /login
```

Relevant files:

- [Authentication and role helpers](app/lib/auth.js)
- [JWT and cookie implementation](app/lib/session.js)
- [Admin route](app/admin/page.js)
- [Student route](app/student/page.js)
- [Dashboard](app/dashboard/page.js)

---

## 5. Authentication Implementation

Authentication is implemented in [login/actions.js](app/login/actions.js).

For login, the submitted password is checked against a bcrypt hash:

```javascript
const user = getUserByEmail(email);

if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
  redirect("/login?error=1");
}
```

`bcrypt.compare()` does not decrypt the password hash. It hashes the entered password using the stored hash parameters and compares the result securely.

Explain that this code must always run on the server. Exposing password hashes in browser code or client components would be unsafe.

---

## 6. Signup Validation

The signup page provides browser validation:

- `required` prevents empty fields
- `type="email"` requires an email-like value
- `minLength="2"` checks the name length
- `minLength="8"` checks the password length

The browser should never be the only validation layer. [login/actions.js](app/login/actions.js) repeats validation on the server:

```javascript
if (name.length < 2 || !email || password.length < 8) {
  redirect("/signup?error=invalid");
}
```

The server also checks duplicate emails through:

```javascript
createUser()
```

browser validation and server validation have different purposes:

| Validation Layer | Purpose |
|---|---|
| Browser validation | Immediate feedback and better user experience |
| Server validation | Security and enforcement, even when browser tools are bypassed |
| Database constraints | Data integrity and duplicate prevention in a real application |

---

## 7. Password Storage

Passwords should never be stored as plain text.

Signup creates a bcrypt hash:

```javascript
const passwordHash = await bcrypt.hash(password, 10);
```

The user record stores this hash instead of the original password.

Demo password hashes are already configured for:

- `admin@gmail.com` / `Admin123!`
- `student@gmail.com` / `Student123!`

The exact demo user list is in [users.js](app/lib/users.js).

---

## 8. Session and JWT Implementation

The session implementation is in [session.js](app/lib/session.js).

After login, the server creates a JWT containing:

- The user role as a normal payload field
- The user ID as the JWT `subject`
- Issued-at time
- Expiration time of one hour

Conceptually:

```text
Header: algorithm = HS256
Payload: role, subject, issued-at, expiration
Signature: verifies who created the token and that it was not modified
```

The JWT is created with a secret read from the environment:

```javascript
process.env.SESSION_SECRET
```

Never commit, display, copy, or share the real session secret with students. It is environment configuration, not application code.

On protected requests, `jwtVerify()` verifies the signature and expiration before the user is loaded by ID.

---

## 9. Cookie Implementation

[session.js](app/lib/session.js) stores the JWT in a cookie named `session`.

```javascript
cookieStore.set("session", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60,
});
```

### What each option means

| Option | Teaching meaning |
|---|---|
| `httpOnly` | Browser JavaScript cannot read the cookie |
| `secure` | In production, send the cookie only through HTTPS |
| `sameSite: "lax"` | Restricts cross-site cookie sending |
| `path: "/"` | The cookie is available on application routes |
| `maxAge: 3600` | The cookie remains for one hour |

Logout calls:

```javascript
await deleteSession();
```

The session cookie is deleted, so protected routes no longer find a valid session.

---

## 10. Authorization Implementation

[auth.js](app/lib/auth.js) contains two helpers:

```javascript
requireAuth()      // Is the user logged in?
requireRole(role)  // Is the logged-in user allowed for this role?
```

Authentication happens first:

```javascript
const user = await verifySession();
if (!user) redirect("/login");
```

Authorization happens second:

```javascript
if (user.role !== role) {
  redirect("/dashboard?error=unauthorized&required=...&current=...");
}
```

The dashboard reads the authorization error and displays a message such as:

> Access denied: your role is student, but this page requires the admin role.

This example intentionally keeps the explanation visible for teaching. A production application might use a generic permission message and controlled logging.

---

## 11. Route Table

| Route | Authentication | Authorization |
|---|---|---|
| `/` | Public | Redirects to `/login` |
| `/login` | Public | None |
| `/signup` | Public | Creates a `student` account |
| `/dashboard` | Required | Any valid logged-in role |
| `/student` | Required | Role must be `student` |
| `/admin` | Required | Role must be `admin` |

Login redirects are role-based:

- Admin redirects to `/admin`
- Student redirects to `/student`
- Signup creates a student and redirects to `/student`

---

## 12. Middleware, Proxy, and Route Protection

There are two different layers in a properly protected application.

### Proxy or middleware layer

Runs early and can:

- Redirect unauthenticated requests before rendering
- Protect a route prefix
- Inspect the session cookie
- Apply a header or redirect

It should not be the only security control because client requests, server actions, APIs, or route changes may bypass UI-level assumptions.

### Server page and action layer

The route calls:

- `requireAuth()` for authenticated users
- `requireRole()` for role-based access

This project uses both proxy protection and server-page protection:

```text
Browser request
    -> proxy.js verifies the session cookie and JWT role
    -> Request is allowed or redirected
    -> Protected page calls requireAuth() or requireRole()
    -> Server page verifies the session again
    -> Page is rendered or access is denied
```

The root [proxy.js](proxy.js) contains the actual implementation. Its `matcher` controls which paths run the proxy:

```javascript
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/student/:path*"],
};
```

For unauthenticated requests, the proxy redirects to `/login`. For an invalid or expired JWT, it deletes the session cookie and redirects to `/login`. For a role mismatch, it redirects to `/dashboard` with required and current role information.

---

## 13. In-Memory User Storage

Users are currently stored in:

```javascript
export const users = [];
```

More accurately for this project, `users` is an array containing the demo accounts and newly signed-up accounts.

Important limitations:

- Restarting the server resets signup accounts
- User data is not persisted
- Signing up does not create a database record
- Data is not suitable for multiple server instances
- A real system should use PostgreSQL, MySQL, MongoDB, or another database
- The database should enforce unique email addresses

---

## 14. Complete Code-Walkthrough with File Names

Teach this section in order. For every step, show the named file in the editor and explain the highlighted flow before opening the browser.

### Step 1: Create the public entry route

**File:** `app/page.js`

```javascript
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
}
```

**What to explain:**

- `/` is the public entry point.
- It immediately redirects the visitor to `/login`.
- This file does not perform authentication or authorization.
- Route navigation is handled by Next.js.

### Step 2: Create the login form

**File:** `app/login/page.js`

```javascript
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
        <input name="email" type="email" placeholder="Email" required />
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
        Don't have an account? <Link href="/signup">Sign up</Link>
      </p>
    </div>
  );
}
```

**What to explain:**

- The form sends a `FormData` object to the `login` Server Action.
- `name="email"` and `name="password"` become form fields.
- `required` and `type="email"` provide browser validation.
- Server validation still matters because browser validation can be bypassed.
- The login error is passed using the query parameter `error`.

### Step 3: Create the signup form

**File:** `app/signup/page.js`

```javascript
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
        <input name="name" type="text" minLength="2" required />
        <br /><br />
        <input name="email" type="email" required />
        <br /><br />
        <input name="password" type="password" minLength="8" required />
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
```

**What to explain:**

- Browser validation gives immediate feedback.
- `searchParams` reads signup messages after a redirect.
- Duplicate and server-invalid input produce different messages.
- The server action performs the final validation.

### Step 4: Store demo users and create new students

**File:** `app/lib/users.js`

```javascript
export const users = [
  {
    id: "1",
    name: "Admin",
    email: "admin@gmail.com",
    passwordHash: "ADMIN_BCRYPT_HASH",
    role: "admin",
  },
  {
    id: "2",
    name: "Student",
    email: "student@gmail.com",
    passwordHash: "STUDENT_BCRYPT_HASH",
    role: "student",
  },
];

export function getUserByEmail(email) {
  return users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser({ name, email, passwordHash }) {
  const normalizedEmail = email.trim().toLowerCase();

  if (getUserByEmail(normalizedEmail)) {
    return null;
  }

  const user = {
    id: String(Date.now()),
    name: name.trim(),
    email: normalizedEmail,
    passwordHash,
    role: "student",
  };

  users.push(user);
  return user;
}
```

**What to explain:**

- `users` is an in-memory array, not a database.
- Each user has an ID, name, email, bcrypt hash, and role.
- A new signup receives the `student` role automatically.
- The server creates the account in this array only.
- Restarting the server removes new signup accounts.

### Step 5: Implement login, signup, and logout actions

**File:** `app/login/actions.js`

```javascript
"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createUser, getUserByEmail } from "@/app/lib/users";
import { createSession, deleteSession } from "@/app/lib/session";

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

export async function logout() {
  await deleteSession();
  redirect("/login");
}
```

**Authentication explanation:**

```text
Submitted password
    -> bcrypt.compare()
    -> compare against stored password hash
    -> valid password: create session
    -> invalid password: redirect with login error
```

**Signup explanation:**

```text
Name, email, and password
    -> server validation
    -> bcrypt.hash(password, 10)
    -> createUser()
    -> createSession()
    -> redirect student to /student
```

### Step 6: Create the JWT and cookie session

**File:** `app/lib/session.js`

```javascript
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { getUserById } from "./users";

const secret = new TextEncoder().encode(process.env.SESSION_SECRET);

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

export async function deleteSession() {
  (await cookies()).delete("session");
}
```

**Session flow to explain:**

```text
User login
    -> Create signed JWT
    -> Store JWT in HTTP-only cookie named session
    -> Protected request reads cookie
    -> Verify signature and expiration
    -> Find user from JWT subject
    -> Allow route or redirect
```

### Step 7: Create reusable authentication and authorization helpers

**File:** `app/lib/auth.js`

```javascript
import { redirect } from "next/navigation";
import { verifySession } from "./session";

export async function requireAuth() {
  const user = await verifySession();

  if (!user) {
    redirect("/login");
  }

  return user;
}

export async function requireRole(role) {
  const user = await requireAuth();

  if (user.role !== role) {
    redirect(
      `/dashboard?error=unauthorized` +
      `&required=${encodeURIComponent(role)}` +
      `&current=${encodeURIComponent(user.role)}`
    );
  }

  return user;
}
```

**Difference to explain:**

- `requireAuth()` answers: Is the user logged in?
- `requireRole("student")` answers: Is the logged-in user a student?
- `requireRole("admin")` answers: Is the logged-in user an admin?
- These checks run on the server.

### Step 8: Protect the dashboard

**File:** `app/dashboard/page.js`

```javascript
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
          Access denied: your role is {current || user.role},
          but this page requires the {required || "requested"} role.
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

      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
```

This route requires authentication, but not a specific role. Students and admins may both access it.

### Step 9: Protect role-specific pages

**File:** `app/student/page.js`

```javascript
import { requireRole } from "../lib/auth";

export const instant = false;

export default async function StudentPage() {
  const user = await requireRole("student");

  return (
    <div style={{ padding: 40 }}>
      <h1>Student Dashboard</h1>
      <h2>Welcome, {user.name}</h2>
      <p>You can access your learning materials.</p>
    </div>
  );
}
```

**File:** `app/admin/page.js`

```javascript
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
```

Explain that hiding navigation links is not authorization. These pages independently check the user's role, so manually entering the URL does not bypass protection.

### Step 10: Add the Next.js proxy

**File:** `proxy.js`

```javascript
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.SESSION_SECRET);

export async function proxy(request) {
  const token = request.cookies.get("session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    const role = payload.role;
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/admin") && role !== "admin") {
      const dashboardUrl = new URL("/dashboard", request.url);
      dashboardUrl.searchParams.set("error", "unauthorized");
      dashboardUrl.searchParams.set("required", "admin");
      dashboardUrl.searchParams.set("current", String(role));
      return NextResponse.redirect(dashboardUrl);
    }

    if (pathname.startsWith("/student") && role !== "student") {
      const dashboardUrl = new URL("/dashboard", request.url);
      dashboardUrl.searchParams.set("error", "unauthorized");
      dashboardUrl.searchParams.set("required", "student");
      dashboardUrl.searchParams.set("current", String(role));
      return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("session");
    return response;
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/student/:path*",
  ],
};
```

**Proxy teaching flow:**

```text
Incoming browser request
    -> Read session cookie
    -> Missing cookie: redirect /login
    -> JWT valid: read role
    -> Wrong role: redirect /dashboard with an error
    -> Correct role: allow the request
    -> Invalid or expired JWT: clear cookie and redirect /login
```

The `matcher` list means the proxy runs only for dashboard, admin, and student paths. The proxy is an early guard; `requireAuth()` and `requireRole()` are server-side checks inside route code.

### Step 11: Demonstrate the complete route table

| Route | Proxy behavior | Server authorization |
|---|---|---|
| `/login` | Public | None |
| `/signup` | Public | Creates a student account |
| `/dashboard` | Session cookie required | Any authenticated role |
| `/student` | Student role required | `requireRole("student")` |
| `/admin` | Admin role required | `requireRole("admin")` |

### Teaching sequence summary

```text
Public pages
    -> Login or signup form
    -> Server action validates data
    -> Password checked or hashed
    -> Signed JWT created
    -> HTTP-only cookie stored
    -> Proxy checks requests
    -> Protected page checks authentication
    -> Protected page checks authorization
    -> Logout deletes cookie
```

---

## 15. Recommended Step-by-Step Classroom Demonstration

### Step 1: Start the application

From the project folder, run:

```powershell
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

If port 3000 is occupied, use the local URL shown by Next.js.

### Step 2: Explain public routes

Demonstrate:

1. Open `/login`
2. Select the Login form
3. Explain that anyone can access public routes
4. Open `/signup`

### Step 3: Demonstrate authentication

Login as the student:

```text
Email: student@gmail.com
Password: Student123!
```

Explain that:

- The email finds a user
- bcrypt compares the password
- A session is created
- The student is redirected to `/student`

Try a wrong password and explain why the server redirects to the login error message.

### Step 4: Demonstrate browser validation

Open `/signup` and demonstrate:

- Empty required fields
- Invalid email format
- Password shorter than eight characters
- Duplicate email signup

Explain that browser validation improves UX but can be bypassed. The server repeats the validation.

### Step 5: Demonstrate successful signup

Create a new student:

```text
Name: Test Student
Email: test.student@example.com
Password: Test1234!
```

Explain that:

- The password is hashed
- The original password is not stored
- The user receives the `student` role
- The user is logged in and redirected to `/student`

### Step 6: Demonstrate the cookie

After login:

1. Open browser Developer Tools
2. Open Application or Storage
3. Find the `session` cookie
4. Show that it is HTTP-only
5. Explain that JavaScript should not be able to read it directly

Refresh `/dashboard`, `/student`, and `/admin` to show that the session remains.

### Step 7: Demonstrate logout

1. Open `/dashboard`
2. Select Logout
3. Open browser Developer Tools
4. Confirm that the `session` cookie is removed
5. Manually open `/dashboard`
6. The user should redirect to `/login`

### Step 8: Demonstrate authorization

Login as the student:

```text
Email: student@gmail.com
Password: Student123!
```

Manually open `/admin`.

Expected result:

- A redirect to `/dashboard`
- The message says the role is `student`
- The required role is `admin`

Then login as the admin:

```text
Email: admin@gmail.com
Password: Admin123!
```

Open:

- `/admin` and expect access
- `/dashboard` and expect common authenticated access
- `/student` and expect an access-denied message

### Step 9: Demonstrate unauthenticated access

1. Logout
2. Open `/dashboard`
3. The user is redirected to `/login`
4. Explain the difference:
   - No session: authentication failure
   - Wrong role: authorization failure

---
## 16. Answers Students Often Ask

### What is the difference between authentication and authorization?

- Authentication: verifies identity
- Authorization: verifies permissions

Example:

```text
Login proves that the student is a known user. The role check decides whether
the student is allowed to view the admin page.
```

### Is a JWT the same as a session?

In this example, the JWT represents the session. The JWT is stored inside a cookie and verified when a protected route runs.

### Why verify a cookie on the server?

Cookies can be viewed in browser tools and are not automatically trusted. The server verifies the JWT signature and expiration.

### Is HTTP-only cookie protection automatic?

HTTP-only prevents normal browser JavaScript from reading the cookie. The browser still sends it with matching requests. HTTPS, SameSite, CSRF controls, and server validation must still be considered in production.

### Is hiding a link enough to protect authorization?

No. Navigation links are only UI controls. The server route must enforce authorization even if a user manually types the URL or calls an API.

### Is the dashboard protected for every role?

Yes. `/dashboard` calls `requireAuth()`. It is available to authenticated students and admins but not to unauthenticated users.

### What is the role of a proxy?

A proxy or middleware performs request-level filtering before route rendering. It is similar to security screening at the entrance, while `requireAuth()` and `requireRole()` perform security checks inside the protected application area.

---

## 17. Verification Commands

Install dependencies:

```powershell
npm install
```

Start development mode:

```powershell
npm run dev
```

Create a production build:

```powershell
npm run build
```

Start the production build:

```powershell
npm run start
```

Run lint:

```powershell
npm run lint
```

---

## 18. Production Limitations

Do not copy this demo directly into production. Important missing areas include:

- Persistent database users
- Password reset flow
- Email verification
- Session revocation or logout-all
- MFA
- Account lockout or login rate limits
- Production CSRF protection
- Security audit logging
- Encrypted or managed session secrets
- Database unique constraints
- Standardized error handling

The central teaching point is:

```text
Authentication identifies the user.
Authorization decides what that identity may access.
Validation rejects invalid and unsafe input.
Sessions preserve authentication across requests.
Cookies transport session data securely to the browser.
Proxy and server protection enforce access before or during route handling.
```
