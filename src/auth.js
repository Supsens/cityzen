// src/auth.js
export const users = [
    { id: 1, username: "deepak", password: "1234", role: "user" },
    { id: 2, username: "admin",  password: "1234", role: "admin" },
  ];
  
  export function authenticate(username, pwd) {
    const user = users.find(u => u.username === username && u.password === pwd);
    if (!user) return null;
    // simulate token
    const token = btoa(`${user.id}:${user.role}`);
    localStorage.setItem("auth", JSON.stringify({ id: user.id, role: user.role, token }));
    return { id: user.id, role: user.role };
  }
  
  export function signout() {
    localStorage.removeItem("auth");
  }
  
  export function getAuth() {
    return JSON.parse(localStorage.getItem("auth") || "null");
  }
  