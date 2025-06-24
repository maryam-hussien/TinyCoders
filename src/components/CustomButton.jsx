const CustomButton = ({
  text = "Click Me",
  children,
  onClick,
  color = "var(--forest)",
  style = {},
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ backgroundColor: color, ...style }}
      className={`px-5 py-2 rounded-full shadow-md transition ${className} cursor-pointer hover:scale-105 active:scale-95`}
    >
      {children || text}
    </button>
  );
};

export default CustomButton;
