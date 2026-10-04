const USERS_STORAGE_KEY = "techshelf-users";
const CURRENT_USER_STORAGE_KEY = "techshelf-current-user";

function readStorage(key, fallback) {
  try {
    const storedData = localStorage.getItem(key);

    return storedData ? JSON.parse(storedData) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getUsers() {
  return readStorage(USERS_STORAGE_KEY, []);
}

export function findUserByEmail(email) {
  const users = getUsers();

  const normalizedEmail = email.trim().toLowerCase();

  return (
    users.find(
      (user) => user.email === normalizedEmail,
    ) ?? null
  );
}

export function createUser({
  name,
  email,
  password,
}) {
  const users = getUsers();

  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.email === normalizedEmail,
  );

  if (existingUser) {
    throw new Error(
      "An account with this email already exists.",
    );
  }

  const newUser = {
    id: `user_${crypto.randomUUID()}`,
    name: name.trim(),
    email: normalizedEmail,

    // Temporary frontend-only authentication.
    // This must NOT be used in production.
    password,

    createdAt: new Date().toISOString(),
  };

  writeStorage(USERS_STORAGE_KEY, [
    ...users,
    newUser,
  ]);

  return newUser;
}

export function getCurrentUser() {
  return readStorage(
    CURRENT_USER_STORAGE_KEY,
    null,
  );
}

export function setCurrentUser(user) {
  const safeUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  writeStorage(
    CURRENT_USER_STORAGE_KEY,
    safeUser,
  );

  return safeUser;
}

export function clearCurrentUser() {
  localStorage.removeItem(
    CURRENT_USER_STORAGE_KEY,
  );
}