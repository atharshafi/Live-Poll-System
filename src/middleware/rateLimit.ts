import rateLimit from 'express-rate-limit';

// Define the rate limiter for the API
export const rateLimitMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
  headers: true, // Enable rate limit headers
});

