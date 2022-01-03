import PropTypes from 'prop-types';

function Button({ color, text }) {
  const onClick = () => {
    console.log('click');
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
      type="submit"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: 'steelblue',
};

export default Button;
