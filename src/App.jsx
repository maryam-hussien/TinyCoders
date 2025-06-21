import "./App.css";
function App() {
  return (
    <>
     <div style={{ backgroundColor: 'var(--popy)' }} className="text-3xl font-bold text-white p-2 mysteryFont">
        Custom color: Popy and font Mystery-Quest
      </div>

      <div style={{ backgroundColor: 'var(--mango)'}} className="text-3xl font-bold text-white p-2 butterflyFont">
        Custom color: Mango and font Butterfly-Kids
      </div>
      <div style={{ backgroundColor: 'var(--forest)'}} className="text-3xl font-bold text-white p-2 sourGummyFont">
        Custom color: forest and font Sour-Gummy
      </div>
      <div style={{ backgroundColor: 'var(--lavender)'}} className="text-3xl font-bold text-white p-2 robotoFont">
        Custom color: lavender and font Roboto
      </div>
      <div style={{ backgroundColor: 'var(--babyBlue)'}} className="text-3xl font-bold text-white p-2">
        Custom color: babyBlue no font
      </div>
    </>
  );
}

export default App;
