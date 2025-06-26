import LevelCard from "../components/LevelCard";
import CustomButton from "../components/CustomButton";

const mockLevels = [
  { id: 1, name: "Shapes", progress: 100, status: "finished" },
  { id: 2, name: "Colors", progress: 40, status: "open" },
  { id: 3, name: "Numbers", progress: 0, status: "locked" },
  { id: 4, name: "Animals", progress: 0, status: "open" },
  { id: 5, name: "Fruits", progress: 60, status: "open" },
  { id: 6, name: "Vehicles", progress: 100, status: "finished" },
  { id: 7, name: "Body Parts", progress: 0, status: "locked" },
  { id: 8, name: "Seasons", progress: 10, status: "open" },
  { id: 9, name: "Emotions", progress: 0, status: "locked" },
  { id: 10, name: "Family", progress: 90, status: "open" },
  { id: 11, name: "Jobs", progress: 100, status: "finished" },
  { id: 12, name: "School", progress: 0, status: "locked" },
];


const Levels = () => {
  // Enhance each level with needed props for LevelCard
  const colorPalette = ["var(--forest)", "var(--lavender)" ];
 const levelsWithProps = mockLevels.map((level, i) => ({
  ...level,
  color: colorPalette[i % colorPalette.length],
  isOpen: level.status === "open",
  isStarted: level.progress > 0 && level.progress < 100,
  isFinished: level.status === "finished",
}));


  return (
    <div className="w-[90%] mx-auto py-8 sourGummyFont">
      {/* Header */}
      <div className="text-center mb-6">
<h1 className="text-3xl md:text-4xl font-bold text-[var(--darkLavender)]">
  🧩 Explore All Learning Levels
</h1>
<p className="text-[var(--forest)] mt-2 text-lg">
  Pick any level to explore new lessons, learn exciting topics, solve quizzes, and earn points along the way!
</p>

      </div>

      {/* Points Summary */}
      <div className="bg-white rounded-2xl shadow-lg p-4 text-center mb-6">
        <p className="text-lg font-semibold text-[var(--popy)]">
          🌟 You have <span className="text-[var(--forest)]">420</span> points!
        </p>
        <p className="text-sm mt-1 text-[var(--darkLavender)]">
  💡 Earn more points by completing level lessons, quizzes, and extra challenges!
</p>

      </div>

      {/* Levels Grid with LevelCard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{levelsWithProps.map((level) => (
  <LevelCard key={level.id} level={level} />
))}

      </div>

      {/* Robot Tip & Challenge */}
      <div className="bg-white mt-10 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center gap-4">
        <img
          src="https://res.cloudinary.com/dwhn5gjgf/image/upload/t_transparent logo/v1750771847/photo_2025-06-24_16-29-57_hfcei3.jpg"
          alt="robot"
          className="w-32 h-32"
        />
        <div>
          <h3 className="text-xl font-bold text-[var(--popy)] mb-2">
            🤖 Robot Tip:
          </h3>
          <p className="text-[var(--darkLavender)] mb-2">
            Try completing Level 2’s challenge to unlock 100 extra points!
          </p>
          <CustomButton
            text="Go to Challenge"
            className="bg-[var(--forest)] text-white text-sm px-4 py-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Levels;
