import PropTypes from 'prop-types'; // Import PropTypes


export const Todos = ({ todos }) => {
 

  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? 'Completed' : 'Mark as complete'}</button>
        </div>
      ))}
    </div>
  );
};

// Add PropTypes validation
Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
