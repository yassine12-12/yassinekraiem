const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping bg-cyan-400"></span>
          <span className="btn-ping_dot bg-cyan-300"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
