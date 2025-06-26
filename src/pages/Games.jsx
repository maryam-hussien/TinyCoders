import { useState } from "react";
import { FaLock } from "react-icons/fa";
import CustomButton from "../components/CustomButton";

const games = [
  {
    id: 1,
    title: "Logic Puzzle",
    description: "Patterns & Sequences",
    image:
      "https://cdn.pixabay.com/photo/2017/01/31/20/16/puzzle-2022683_960_720.png",
    points: 25,
    requiredPoints: 20,
  },
  {
    id: 2,
    title: "Word Builder",
    description: "Build words and grow your vocab!",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/12/46/abc-159579_960_720.png",
    points: 20,
    requiredPoints: 20,
  },
  {
    id: 3,
    title: "Shape Sorter",
    description: "Match shapes and learn geometry!",
    image:
      "https://cdn.pixabay.com/photo/2016/03/31/19/58/shapes-1293927_960_720.png",
    points: 15,
    requiredPoints: 25,
  },
];

const Games = () => {
  const [userPoints, setUserPoints] = useState(18); // demo: not enough for all

  const handlePlay = (game) => {
    if (userPoints >= game.requiredPoints) {
      setUserPoints(userPoints - game.requiredPoints);
      alert(`Enjoy playing ${game.title}!`);
    }
  };

  return (
    <section className="w-[90%] mx-auto py-10 sourGummyFont">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--darkLavender)]">
          🧠 Learn Through Games
        </h1>
        <p className="text-lg text-[var(--forest)] mt-2">
          Pick a game to boost your brain while having fun!
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
      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => {
          const isLocked = userPoints < game.requiredPoints;

          return (
            <div
              key={game.id}
              className="bg-white rounded-3xl p-4 shadow-xl hover:scale-[1.02] transition flex flex-col"
            >
              <img
                src={game.image}
                alt={game.title}
                className="rounded-xl h-40 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-[var(--darkLavender)] text-center">
                {game.title}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-2">
                {game.description}
              </p>
              <p className="text-center text-[var(--popy)] text-sm mb-4">
                🎁 Earn {game.points} pts | 🔓 Needs {game.requiredPoints} pts
              </p>

              {isLocked ? (
                <button
                  disabled
                  className="bg-gray-200 text-gray-500 py-1 px-4 rounded text-sm cursor-not-allowed flex justify-center items-center gap-2"
                >
                  <FaLock /> Need {game.requiredPoints - userPoints} pts
                </button>
              ) : (
                <CustomButton
                  text="Play Now"
                  className="text-white bg-[var(--forest)] w-full text-sm"
                  onClick={() => handlePlay(game)}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Earn More Info */}
      <div className="mt-10 bg-[var(--lavender-light)] p-6 rounded-3xl shadow-xl text-center">
        <h2 className="text-xl font-bold text-[var(--popy)] mb-3">
          🎯 Want More Plays?
        </h2>
        <p className="text-sm text-[var(--darkLavender)]">
          ✅ Watch level lessons (+10 pts) <br />✅ Solve quizzes (+15 pts)
          <br />✅ Win challenges (+30 pts)
        </p>
      </div>
    </section>
  );
};

export default Games;
