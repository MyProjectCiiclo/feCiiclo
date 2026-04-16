const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log("BASE_URL =", BASE_URL);
export async function http(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  const text = await res.text(); // 👈 đọc raw trước

  console.log("RAW RESPONSE:", text); // 👈 bạn sẽ thấy HTML hay JSON

  try {
    return JSON.parse(text); // thử parse JSON
  } catch (err) {
    console.log("NOT JSON ERROR:", err);
    return {}; // tránh crash app
  }
}