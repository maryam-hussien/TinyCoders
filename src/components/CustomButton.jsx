
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
      className={`px-5 py-2 rounded-full shadow-md transition ${className} cursor-pointer hover:scale-105 active:scale-95`}
    >
      {text}
    </button>
      )
}

export default CustomButton 