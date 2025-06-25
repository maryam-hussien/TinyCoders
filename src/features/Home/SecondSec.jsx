import CustomButton from "../../components/CustomButton";
import LevelCard from "../../components/LevelCard";

const mockLevels = [
  {
    id: 1,
    name: "Level 1",
    progress: 100,
    isOpen: true,
    isStarted: true,
    isFinished: true,
  },
  {
    id: 2,
    name: "Level 2",
    progress: 30,
    isOpen: true,
    isStarted: true,
    isFinished: false,
  },
  {
    id: 3,
    name: "Level 3",
    progress: 0,
    isOpen: true,
    isStarted: false,
    isFinished: false,
  },
  {
    id: 4,
    name: "Level 4",
    progress: 0,
    isOpen: false,
    isStarted: true,
    isFinished: false,
  },
  {
    id: 5,
    name: "Level 5",
    progress: 0,
    isOpen: false,
    isStarted: false,
    isFinished: false,
  },
  {
    id: 6,
    name: "Level 6",
    progress: 0,
    isOpen: false,
    isStarted: false,
    isFinished: false,
  },
];


const SecondSec = () => {
 const colorPalette = ["var(--forest)", "var(--popy)", "var(--lavender)"];

const activeLevels = mockLevels
  .filter((level) => !level.isFinished)
  .slice(0, 3)
  .map((level, index) => ({
    ...level,
    color: colorPalette[index % colorPalette.length],
  }));



  return (
    <section className="w-[90%] mx-auto -mt-7 z-[5] relative sourGummyFont bg-[#e9e8e8f0] rounded-4xl px-4 py-8 shadow-2xl mb-8 ">
      <h2 className="text-2xl md:text-4xl text-center font-bold text-[var(--darkLavender)] mb-6 sourGummyFont">
        Available Levels
      </h2>

      <div className="flex flex-col md:flex-row gap-2 items-center">
        {/* Robot + Animated Title */}
        <div className="flex flex-col items-center md:items-center">
          <div className="text-xl md:text-[40px] font-bold ">
            {"Let's Learn".split("").map((char, idx) => (
              <span
                key={idx}
                className="animated-letter"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  color: ["#FFD43B", "#ee5a36", "#1a9562", "#1a9562", "#9fc4e8", "#1a9562", "#9b3d95", "#cfa4cc", "#ee5a36", "#1a9562"][idx % 10],
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
            className="w-40 md:w-80 md:h-80 h-40 "
          />
        </div>
   {/* Levels List */}
        <div className="flex flex-col gap-4 md:w-[85%] w-full">
          {activeLevels.length > 0 ? (
            activeLevels.map((level) => (
              <LevelCard key={level.id} level={level} />
            ))
          ) : (
            <p className="text-[var(--darkLavender)] font-medium">
              🎉 You’ve completed all available levels!
            </p>
          )}

          <div className="w-fit mx-auto">
            <CustomButton
              text="More Levels..."
              color="white"
              className="text-lg text-[var(--darkLavender)] mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSec;
