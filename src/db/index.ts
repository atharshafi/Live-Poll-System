import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.POSTGRES_URL });

export const db = {
  async createPoll(question: string, options: string[], expiresAt: string) {
    const result = await pool.query(
      'INSERT INTO polls (question, options, expires_at) VALUES ($1, $2, $3) RETURNING id',
      [question, options, expiresAt]
    );
    return { id: result.rows[0].id };
  },

  async vote(pollId: string, user: string, option: string) {
    await pool.query('INSERT INTO votes (poll_id, user_id, option) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING', [pollId, user, option]);
    return { voted: true };
  },

  async getPoll(id: string) {
    const poll = await pool.query('SELECT * FROM polls WHERE id = $1', [id]);
    const votes = await pool.query('SELECT option, count(*) FROM votes WHERE poll_id = $1 GROUP BY option', [id]);
    return { ...poll.rows[0], results: votes.rows };
  }
};
