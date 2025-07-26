import { tasks } from '../models/tasksModel.js';

// List all tasks
export function listTasks(req, res) {
  res.json(tasks);
}
// Create a new task
export function createTask(req, res) {
  const { title } = req.body;
  const newTask = { id: Date.now(), title };
  tasks.push(newTask);
  res.status(201).json(newTask);
}
// Update an existing task
export function updateTask(req, res) {
  const { id } = req.params;
  const { title } = req.body;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.title = title;
  res.json(task);
}
// Delete a task
export function deleteTask(req, res) {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });
  tasks.splice(index, 1);
  res.status(204).end();
}