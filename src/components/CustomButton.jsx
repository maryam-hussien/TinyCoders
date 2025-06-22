
const CustomButton  = ({ 
  text = "Click Me", 
  onClick, 
  color = "var(--forest)", 
  style = {}, 
  className = "" 
}) => {
  return (
  <button
      onClick={onClick}
      style={{ backgroundColor: color, ...style }}
      className={`px-5 py-2 rounded-full shadow-md transition ${className}`}
    >
      {text}
    </button>
      )
}

export default CustomButton 