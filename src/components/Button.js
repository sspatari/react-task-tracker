import PropTypes from 'prop-types';

function Button({ color, text, onClick }) {
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
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'steelblue',
};

export default Button;
