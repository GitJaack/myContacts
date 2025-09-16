const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

async function apiRequest(path, { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  const authToken = token || localStorage.getItem("token");
  if (authToken) headers["Authorization"] = `Bearer ${authToken}`;

  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  let data = null;
  try {
    data = await response.json();
  } catch (e) {}

  if (!response.ok) {
    const error = new Error((data && data.message) || "Request failed");
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}

export function registerUser(email, password) {
  return apiRequest("/auth/register", {
    method: "POST",
    body: { email, password },
  });
}

export function loginUser(email, password) {
  return apiRequest("/auth/login", {
    method: "POST",
    body: { email, password },
  });
}

export function getContacts() {
  return apiRequest("/contacts", { method: "GET" });
}

export function createContact(payload) {
  return apiRequest("/contacts", { method: "POST", body: payload });
}

export function updateContact(id, updates) {
  return apiRequest(`/contacts/${id}`, { method: "PATCH", body: updates });
}

export function deleteContact(id) {
  return apiRequest(`/contacts/${id}`, { method: "DELETE" });
}

export { API_URL };
