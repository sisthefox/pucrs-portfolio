import request from 'supertest';
import app from '../app.js';

describe('Tasks API', () => {
  let taskId;

  it('should create a new task', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test task' });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test task');
    expect(response.body.id).toBeDefined();

    taskId = response.body.id;
  });

  it('should list all tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should update a task', async () => {
    const response = await request(app)
      .put(`/api/tasks/${taskId}`)
      .send({ title: 'Updated task' });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Updated task');
  });

  it('should delete a task', async () => {
    const response = await request(app).delete(`/api/tasks/${taskId}`);
    expect(response.status).toBe(204);
  });

  it('should return 404 when deleting nonexistent task', async () => {
    const response = await request(app).delete(`/api/tasks/999999`);
    expect(response.status).toBe(404);
  });
});
