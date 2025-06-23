import CustomButton from "../../components/CustomButton";

const SecondSec = () => {
  return (
    <div className=" w-[80%] mx-auto -mt-10 z-[5] relative ">
      <div className='flex justify-center items-center gap-2 overflow-hidden left-0 flex-col  bg-white border border-[var(--darkLavender)] rounded-2xl p-5'>
        <div className='h-30 w-[80%] bg-[var(--lavender)] rounded-4xl'></div>
        <div className='h-30 w-[80%] bg-[var(--forest)] rounded-4xl'></div>
        <div className='h-30 w-[80%] bg-[var(--mango)] rounded-4xl'></div>
        <CustomButton text="More Levels..." color="transparent" className="text-lg  text-[var(--darkLavender)] mt-4" />
      </div>
    </div>
  )
}

export default SecondSec