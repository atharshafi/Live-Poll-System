CREATE TABLE IF NOT EXISTS polls (
  id SERIAL PRIMARY KEY,
  question TEXT,
  options TEXT[],
  expires_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS votes (
  id SERIAL PRIMARY KEY,
  poll_id INTEGER REFERENCES polls(id),
  user_id TEXT,
  option TEXT,
  UNIQUE(poll_id, user_id)
);
