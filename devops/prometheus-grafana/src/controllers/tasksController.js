import Task from '../models/task.js';
// Tasks Controller
export async function getTasks(req, res) {
  const tasks = await Task.find();
  res.json(tasks);
}

export async function createTask(req, res) {
  const { title } = req.body;
  const task = new Task({ title });
  await task.save();
  res.status(201).json(task);
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { title } = req.body;
  const task = await Task.findByIdAndUpdate(id, { title }, { new: true });
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.status(204).end();
}
