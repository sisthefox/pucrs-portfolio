import request from 'supertest';
import app from '../app.js';

describe('Fibonacci API', () => {
  it('should return Fibonacci sequence for n = 5', async () => {
    const response = await request(app).get('/api/fibonacci/5');
    expect(response.status).toBe(200);
    expect(response.body.result).toEqual([0, 1, 1, 2, 3]);
  });

  it('should return 400 for invalid parameter', async () => {
    const response = await request(app).get('/api/fibonacci/invalid');
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});
