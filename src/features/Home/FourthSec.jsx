import CustomButton from "../../components/CustomButton";
import { FaPuzzlePiece, FaGamepad, FaStar } from "react-icons/fa";

const FourthSec = () => {
  const challenges = [
  {
    id: 1,
    icon: <FaPuzzlePiece className="text-[var(--mango)] text-3xl" />,
    title: "Solve a Puzzle",
    points: 20,
  },
  {
    id: 2,
    icon: <FaGamepad className="text-[var(--forest)] text-3xl" />,
    title: "Play a Game",
    points: 30,
  },
  {
    id: 3,
    icon: <FaStar className="text-[var(--babyBlue)] text-3xl" />,
    title: "Answer a Quiz",
    points: 15,
  },
];

  const currentPoints = 80; // You can get this from props or API

  return (
    <section className="w-[90%]  mx-auto   sourGummyFont bg-[#e9e8e8f0] rounded-4xl p-4 shadow-2xl h-100 mb-8 py-10 -mt-25">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[var(--darkLavender)] mb-4 ">
        🎯 Your Current Points
      </h2>
      <div className="text-center text-4xl font-extrabold text-[var(--popy)] mb-4">{currentPoints} pts</div>

      <p className="text-center text-lg text-[#6c3eb6] mb-6">
        Want to earn more? Try our fun challenges below!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition"
          >
            {challenge.icon}
            <h3 className="font-bold text-lg text-[#444] mt-2">{challenge.title}</h3>
            <p className="text-sm text-gray-500 mb-3">+{challenge.points} pts</p>
            <CustomButton
              text="Try Now"
              color="var(--popy)"
              className="text-white  px-4 py-1 text-sm"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FourthSec