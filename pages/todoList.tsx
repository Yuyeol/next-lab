import Seo from '@/components/Seo';
import Todo, { TTodo } from '@/models/todo.model';
import dbConnect from '@/utils/mongodb';

type Props = {
  todos: TTodo[] | [];
};

const TodoList = ({ todos }: Props) => {
  console.log(todos);

  const form: TTodo = {
    title: 'title1',
    content: 'content1',
  };
  const contentType = 'application/json';
  const postData = async (form: TTodo) => {
    try {
      await fetch('/api/todo', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });
    } catch (error) {}
  };

  return (
    <div>
      <Seo title="TodoList" />
      <div onClick={() => postData(form)}>TodoList</div>
      <div>{todos.map((todo: TTodo) => todo.title)}</div>
    </div>
  );
};

export async function getServerSideProps() {
  await dbConnect();
  const result = await Todo.find({});
  const todos = result.map((doc) => {
    const todo = doc.toObject();
    todo._id = todo._id.toString();
    return todo;
  });

  return { props: { todos: todos } };
}

export default TodoList;
