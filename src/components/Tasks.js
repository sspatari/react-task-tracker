import PropTypes from 'prop-types';

function Tasks({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      reminder: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tasks;
