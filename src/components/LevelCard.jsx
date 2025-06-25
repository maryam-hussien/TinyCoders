// components/LevelCard.jsx
import CustomButton from "./CustomButton";

const LevelCard = ({ level }) => {
  return (
    <div
      className="w-full text-white rounded-xl p-2 shadow-xl hover:scale-[1.01] transition-transform duration-300"
      style={{ backgroundColor: level.color }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">🧩 {level.name}</h3>
        <span>{level.progress}% Complete</span>
      </div>

      {level.isOpen ? (
        <div className="w-full bg-white h-3 rounded-full overflow-hidden mb-3">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${level.progress}%`,
              backgroundColor: "black",
              boxShadow: "0 0 4px rgba(0,0,0,0.2)",
            }}
          ></div>
        </div>
      ) : (
        <div className="text-lg text-white">Locked</div>
      )}

      <div className="text-right">
        {level.isOpen ? (
          <CustomButton
            text={level.isStarted ? "Continue" : "Start"}
            className="px-4 py-2 font-semibold text-sm text-[var(--darkLavender)]"
            color="white"
          />
        ) : (
          <button
            disabled
            className="px-4 py-2 bg-white text-[var(--darkLavender)] rounded cursor-not-allowed text-sm"
          >
            Locked 🔒
          </button>
        )}
      </div>
    </div>
  );
};

export default LevelCard;
