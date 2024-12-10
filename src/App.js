import './App.css';
import equilibrium from './images/image-equilibrium.jpg';
import ethereum from './images/icon-ethereum.svg';
import clock from './images/icon-clock.svg';
import avatar from './images/image-avatar.png';
import view from './images/icon-view.svg'

function App() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center font-Overfit">
      <div className='w-[85%] h-[70vh] tablet:max-w-[350px] tablet:max-h-[600px] bg-VeryDarkBlueC rounded-2xl px-6 shadow-2xl'>
        <div className='relative w-[100%] h-[35vh] my-5 flex justify-center items-center rounded-2xl overflow-hidden'>
          <img className='w-[100%] h-[100%]' src={equilibrium} alt="image" />
          <div className='absolute w-[100%] h-[35vh] flex justify-center items-center bg-Cyan2 opacity-0 transition-opacity opacity-0 z-999 hover:cursor-pointer hover:opacity-100'>
            <img src={view} alt="view" />
          </div>
        </div>
        <h1 className='text-[22px] text-White font-semibold mb-5 tablet:mb-2 cursor-pointer hover:text-Cyan'>Equilibrium #3429</h1>
        <p className='text-[17px] text-SoftBlue font-light'>Our Equilibrium collection promotes balance and calm.</p>
        
        <div className='flex justify-between border-b-[1px] border-VeryDarkBlueL'>
          <div className='flex items-center py-5'>
            <img src={ethereum} alt="Ethereum Logo" />
            <h4 className='text-Cyan font-semibold'>0.041 ETH</h4>
          </div>
          <div className='flex items-center gap-2'>
            <img className='size-5 aspect-square' src={clock} alt="Clock Logo" />
            <p className='text-SoftBlue'>3 days left</p>
          </div>
        </div>

        <div className='flex items-center gap-4 py-5 tablet:py-2'>
          <img className='size-8 border-2 rounded-full' src={avatar} alt="Avatar" />
          <p className='text-White'><span className='text-SoftBlue'>Creation of</span> <span className='hover:text-Cyan cursor-pointer'>Jules Wyvern</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
