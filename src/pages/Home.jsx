import FifthSec from '../features/Home/FifthSec';
import FirstSec from '../features/Home/FirstSec';
import FourthSec from '../features/Home/FourthSec';
import SecondSec from '../features/Home/SecondSec';
import ThirdSection from '../features/Home/ThirdSection';

const Home = () => {
  return (
<div className='md:mt-3 mt-12'>
<FirstSec/>
<SecondSec/>
<ThirdSection/>
<FourthSec/>
<FifthSec/>
</div>
  )
}

export default Home