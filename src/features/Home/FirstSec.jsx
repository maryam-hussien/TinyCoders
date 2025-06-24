import CustomButton from '../../components/CustomButton';

const FirstSec = () => {
  return (
    <div className="relative w-full md:h-[550px] h-[520px]  overflow-hidden ">
      <img
        src="https://res.cloudinary.com/dwhn5gjgf/image/upload/v1750602891/1920x730_slide2_lohg4r.jpg"
        alt="Background"
className="w-full h-full object-cover object-top absolute top-0 left-0"
loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4 sourGummyFont">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to TinyCoders</h1>
        <p className="mb-6 text-lg md:text-xl">Let’s become more creative with TinyCoders</p>
        <div className="flex gap-4">
         <CustomButton 
        text="Start For Free"
        style={{ backgroundColor: 'var(--popy)' }}
        className='text-xl'
      />
 <CustomButton 
        text="Read More"
        style={{ backgroundColor: 'transparent' }}
        className=" text-[var(--white)] text-xl border border-[var(--white)] "
      />
        </div>
      </div>
    </div>
  )
}

export default FirstSec
