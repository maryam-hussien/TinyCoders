import CustomButton from "../../components/CustomButton";

const mockLevels = [
  {
    id: 1,
    name: "Level 1",
    progress: 100,
    color: "var(--lavender)",
    isOpen: true,
    isStarted: true,
    isFinished: true,
  },
  {
    id: 2,
    name: "Level 2",
    progress: 30,
    color: "var(--forest)",
    isOpen: true,
    isStarted: true,
    isFinished: false,
  },
  {
    id: 3,
    name: "Level 3",
    progress: 0,
    color: "var(--popy)",
    isOpen: true,
    isStarted: false,
    isFinished: false,
  },
  {
    id: 4,
    name: "Level 4",
    progress: 0,
    color: "var(--babyBlue)",
    isOpen: false,
    isStarted: true,
    isFinished: false,
  },
  {
    id: 5,
    name: "Level 5",
    progress: 0,
    color: "var(--mango)",
    isOpen: false,
    isStarted: false,
    isFinished: false,
  },
  {
    id: 6,
    name: "Level 6",
    progress: 0,
    color: "var(--lavender)",
    isOpen: false,
    isStarted: false,
    isFinished: false,
  },
];

const SecondSec = () => {
  // Filter out finished levels
  const activeLevels = mockLevels
    .filter((level) => !level.isFinished)
    .slice(0, 3); // ✅ Only first 3

  return (<section className="w-[90%] md:w-[80%] mx-auto -mt-10 z-[5] relative sourGummyFont bg-[#ffffff] border border-[var(--darkLavender)] rounded-2xl p-6">
    <h2 className="text-2xl md:text-3xl text-center font-bold text-[var(--darkLavender)] mb-6 sourGummyFont">
  Available Levels
</h2>

  <div className="flex flex-col md:flex-row gap-6 items-center ">

    {/* 👾 Robot + Rainbow Title */}
    <div className="flex flex-col items-start md:items-start ">
      <div className="text-2xl md:text-5xl font-bold mb-1">
{"Let's Learn".split("").map((char, idx) => (
  <span
    key={idx}
    className="animated-letter"
    style={{
      animationDelay: `${idx * 0.1}s`,
      color: ["#FF6B6B", "#FFA94D", "#FFD43B", "#69DB7C", "#38D9A9", "#4DABF7", "#9775FA", "#F783AC", "#FF922B", "#845EF7"][idx % 10],
      marginRight: char === " " ? "8px" : "1px",
    }}
  >
    {char}
  </span>
))}

      </div>
      <img
        src="https://res.cloudinary.com/dwhn5gjgf/image/upload/t_lets learn robot/v1750771847/photo_2025-06-24_16-29-57_hfcei3.jpg"
        alt="Let's Learn Robot"
        className="w-40 md:w-65 h-65"
      />
    </div>

    {/* 🧩 Levels List */}
    <div className="flex flex-col gap-4 md:w-2/3 w-full">
      {activeLevels.length > 0 ? (
        activeLevels.map((level) => (
          <div
            key={level.id}
            className="w-full bg-[var(--babyBlue)] text-white rounded-xl p-2 shadow-md"
            style={{ backgroundColor: level.color }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">🧩 {level.name}</h3>
              <span>{level.progress}% Complete</span>
            </div>

            {/* Progress Bar or Locked */}
            {level.isOpen ? (
              <div className="w-full bg-white h-3 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${level.progress}%`,
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
            ) : (
              <div className="text-lg text-white">Locked</div>
            )}

            {/* Status Button */}
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
        ))
      ) : (
        <p className="text-[var(--darkLavender)] font-medium">
          🎉 You’ve completed all available levels!
        </p>
      )}

     <div className="w-fit mx-auto">
  <CustomButton
    text="More Levels..."
    color="transparent"
    className="text-lg text-[var(--darkLavender)] mt-4"
  />
</div>

    </div>
  </div>
</section>

  );
};

export default SecondSec;
