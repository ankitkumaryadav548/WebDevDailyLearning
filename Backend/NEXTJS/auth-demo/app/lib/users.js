export const users = [
  

// # node -e "require('bcrypt').hash('nitish123',12).then(console.log)"
// #  node -e "require('bcrypt').hash('YourPasswordHere', 10).then(console.log)"
//npm install bcrypt
  {
    id: "1",
    name: "Admin",
    email: "admin@gmail.com",
    passwordHash: "$2b$10$DdPe1bm4HbPmdov3U1TSBegqqiwLwMDAKy.jOVT0z.mSN0JKhc7zO",
    role: "admin",
  },
  {
    id: "2",
    name: "Student",
    email: "student@gmail.com",
    passwordHash: "$2b$10$nWYoTgXSQE86tl/5Gzy.g.r0x/PpsiZTBzGVGxVXWfNKuSFaQgDva",
    role: "student",
  },
];

export function getUserByEmail(email) {
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
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