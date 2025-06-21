import "./App.css";
function App() {
  return (
    <>
     <div style={{ backgroundColor: 'var(--popy)' ,fontFamily:'var(--font-Mystery-Quest)'}} className="text-3xl font-bold text-white p-2">
        Custom color: Popy and font Mystery-Quest
      </div>

      <div style={{ backgroundColor: 'var(--mango)',fontFamily:'var(--font-Butterfly-Kids)'}} className="text-3xl font-bold text-white p-2">
        Custom color: Mango and font Butterfly-Kids
      </div>
      <div style={{ backgroundColor: 'var(--forest)',fontFamily:'var(--Sour-Gummy)'}} className="text-3xl font-bold text-white p-2">
        Custom color: forest and font Sour-Gummy
      </div>
      <div style={{ backgroundColor: 'var(--lavender)' ,fontFamily:'var(--Roboto)'}} className="text-3xl font-bold text-white p-2">
        Custom color: lavender and font Roboto
      </div>
      <div style={{ backgroundColor: 'var(--babyBlue)'}} className="text-3xl font-bold text-white p-2">
        Custom color: babyBlue no font
      </div>
    </>
  );
}

export default App;
