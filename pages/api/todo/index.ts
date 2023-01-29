import Todo from '@/models/todo.model';
import dbConnect from '@/utils/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      dbConnect();
      const todos = Todo;

      const allTodos = await todos.find({});

      res.status(200).json(allTodos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    try {
      dbConnect();
      const todos = Todo;
      const { title, content } = req.body;
      const todo = new todos({ title, content });
      await todo.save();
      res.status(200).json({ message: 'Todo created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
