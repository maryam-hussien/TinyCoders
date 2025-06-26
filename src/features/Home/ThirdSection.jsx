import { GiPuzzle, GiTrophyCup, GiClown } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";

const ThirdSection = () => {
  const navigate = useNavigate();
  const bgImage =
    "https://res.cloudinary.com/drxaf5tun/image/upload/v1750793728/offer-fotor-enhance-20250624223452_axobvn.jpg";

  const offers = [
    {
      title: "Games",
      desc: "Engaging games that help reinforce learning in a fun way.",
      icon: <GiPuzzle className="text-[var(--popy)] text-3xl" />,
    },
    {
      title: "Challenges",
      desc: "Exciting challenges to test and motivate your child.",
      icon: <GiTrophyCup className="text-[var(--mango)] text-3xl" />,
    },
    {
      title: "Funny Learning Way",
      desc: "Creative and funny methods to make learning enjoyable.",
      icon: <GiClown className="text-[var(--babyBlue)] text-3xl" />,
    },
    {
      title: "Bonus Points",
      desc: "Reward system to encourage participation and progress.",
      icon: <FaGift className="text-[var(--forest)] text-3xl" />,
    },
  ];

  return (
    <div
      className="py-20 pb-10 bg-cover bg-center text-[var(--lavender)] sourGummyFont px-15 mt-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div>
        <h2 className="text-4xl text-center font-bold mb-12">What We Offer</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-35">
          {offers.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl p-8 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-3 ">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed mb-4">{item.desc}</p>
              <CustomButton  color="var(--lavender)" text ="Learn More" className="mt-auto text-sm font-medium  text-white py-1.5 px-4 rounded-full transition duration-200"
                      onClick={() => navigate('/about-us')}
/>
                
        
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
