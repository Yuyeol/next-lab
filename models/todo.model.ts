import mongoose, { Schema, models } from 'mongoose';

export type TTodo = {
  title: string;
  content: string;
};

export const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Todo = models?.Todo || mongoose.model('Todo', TodoSchema);

export default Todo;
