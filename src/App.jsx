import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
          const menu = document.querySelector('.mobile-links');
          menu.classList.toggle('hidden')
  }
  return (
    <>
     <div className='w-[1920px] xsm:w-full mx-auto scroll-smooth'>
      <nav className='bg-gray-800 mx-auto flex justify-between lg:justify-start items-center fixed top-0 left-0 w-full z-50'>
        <div className='logo p-2 w-1/6'>
          <img src="img/logo.png" width="100" alt="" />
        </div>
        <div className='links m-auto lg:block hidden  md:4/6 ml-5'>
          <ul className='menu flex items-center justify-center gap-5'>
            <li><a href="#" className='link '>Home</a></li>
            <li><a href="#play" className='link whitespace-nowrap'>Play Together</a></li>
            <li><a href="#explore" className='link'>Explore</a></li>
            <li><a href="#" className='border-4 text-ellipsis whitespace-nowrap border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500'>Bowser Fury</a></li>
            <li><a href="#" className='rounded-full bg-red-500 text-white font-bold px-4 py-3 whitespace-nowrap hover:text-black hover:bg-white transition duration-500'>Buy Now</a></li>
          </ul>
        </div>

        <div className='block lg:hidden w-1/6 lg:w-4/6'>
          <a  className='link cursor-pointer' onClick={handleClick} id='mobile-menu'>Menu</a>
          <ul className='mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800'>
            <li><a href="#" className='link ' onClick={handleClick}>Home</a></li>
            <li><a href="#play" className='link whitespace-nowrap' onClick={handleClick}>Play Together</a></li>
            <li><a href="#explore" className='link' onClick={handleClick}>Explore</a></li>
            <li><a href="#" onClick={handleClick} className='border-4 text-ellipsis whitespace-nowrap border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500'>Bowser Fury</a></li>
            <li><a href="#" onClick={handleClick} className='my-5 inline-block rounded-full bg-red-500 text-white font-bold px-4 py-3 whitespace-nowrap hover:text-black hover:bg-white transition duration-500'>Buy Now</a></li>
          </ul>
        </div>

      </nav>

      <section className='header mt-[60px] sm:mt-[70px] md:mt-[80px]  lg:mt-[100px] xl:mt-[120px] 2xl:mt-[140px]'>
        <img src="img/hero.jpg" alt="" id='home'/>
      </section>
      
      <section>
        <div className='bg-wave-pattern h-6 bg-repeat-x relative -top-2'></div>
        <div className='bg-wave-pattern-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center'>
          <a href="#" className='inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 '>Buy Now</a>
          <a href="#trailer" className='inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 '>Watch the Trailer</a>

        </div>

        <div className='bg-wave-pattern bg-repeat-x h-6 relative top-2'></div>
      </section>
      <section className='bg-pattern-characters-red py-28'>
        <div className='lg:container  mx-auto md:flex gap-5 md:w-full p-3'>
          <div id='play' className="left bg-characters-mario bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 mx-auto">
            <div className='card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5'>
              <div className="cover bg-black">
                <video id='trailer' src="videos/video01.mp4" autoPlay loop muted></video>
              </div>
              <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
                <h3 className='font-black text-4xl py-10'>Play Together</h3>
                <p className='text-xl'>
                  Work with (or against) your friends and family
                </p>
                <a href="#" className='xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group'>
                  Watch the trailer
                  <span className='w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4'></span>
                </a>
              </div>
              <div className="dots flex justify-between p-4 ">
                <div className="dot "  ></div>
                <div className="dot"  ></div>
              </div>
            </div>
          </div>
          <div id='explore' className="right w-5/6 md:w-1/2 text-center mx-auto">
            <h2 className='font-black text-white text-6xl py-8 '>Available Now</h2>
            <p className='font-bold text-white text-2xl mx-auto py-10 w-4/5'>
              Team up for a paws-itively adorable adventure!
            </p>
            <p className=' text-white mx-auto w-4/5'>
              Bowser is up to his old tricks again and only Mario and his friends can save the day! Use power-ups like the Super Bell, Which grants catlike abilities like climbing and scratching, to overcome Bowser and his minions. 
            </p>

            <div  className='card text-center bg-white 2xl:w-5/6 mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5'>
              <div className="cover bg-black">
                <video  src="videos/video02.mp4" autoPlay loop muted></video>
              </div>
              <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
                <h3 className='font-black text-4xl py-10'>Explore</h3>
                <p className='text-xl'>
                  Prowl through some popular places. 
                </p>
                <a href="#" className='boton group'>
                  Take a look!
                  <span className='arrow group-hover:border-red-500 xl:group-hover:ml-4'></span>
                </a>
              </div>
              <div className="dots flex justify-between p-4 ">
                <div className="dot "  ></div>
                <div className="dot"  ></div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer text-center flex justify-center gap-9 pt-10'>
          <img src="img/coin.gif" alt="" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]'/>
          <img src="img/coin.gif" alt="" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]'/>
          <img src="img/coin.gif" alt="" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]'/>
          <img src="img/coin.gif" alt="" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block'/>
          <img src="img/coin.gif" alt="" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block'/>
          <img src="img/coin.gif" alt="" className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block'/>
        </div>
      </section>

      <section className='bg-yellow-dots'>
        <div className='bg-wave-pink bg-repeat-x h-6 relative -top-4'></div>

        <div className='xsm:w-full sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6'>
          <div className="left xl:w-1/3 lg:w1/2 p-5" >
            <h3 className="text-yellow-900 font-black xsm:text-3xl sm:text-4xl">
              Cat <br /> Transformation <br /> Center
            </h3>
            <p className='py-4 text-xl'>
              We're not kitten-transform into a cat-tastic new you!
            </p>

            <p>
              <a href="#" className='boton group'>
                Meow! <span className="arrow group-hover:border-red-500 xl:group-hover:ml-4"></span>
              </a>
            </p>
          </div>
          <div className="right xl:w-2/3 lg:w-1/2">
            <img src="img/activity_img3.png" className='md:w-full' alt="" />
          </div>
        </div>

      </section>

      <section className='bg-black'>
        <div className='bg-wave-pattern bg-repeat-x h-6 relative -top-4'></div>
        <div className='container mx-auto text-center py-10 w-2/3'>
          <div className="pb-5">
            <a href="#" className="boton group">
              Customer Support
              <span className="arrow group-hover:border-red-500 xl:group-hover:ml-4"></span>
            </a>
          </div>

          <div className="text-white">
            <p className="py-2">
              *Additional games, systems and/or accesories may be required for multiplayer mode
            </p>
            <p className="py-2">
              ** Nintendo Switch Online membership (sold separately) and Nintendo Account required for online features. Not available in all countries. Internet access required for online <br /> features. A Nintendo Account is required to receive an redeem My Nintendo points. Terms apply.nintendo.com/switch-omline. 
            </p>
            <p className="py-2">
              Game, sistems, some accesories and amiibo sold separely. Visit amiibo.com for details on amiiibo functionality.
            </p>
            <p className="py-2">
              Nintendo Switch Life plays all games that support handhelp mode.
            </p>
            <p className="py-2">
            ©2013-2021 Nintendo. Super Mario and Nintendo Switch are trademarks of Nintendo.
            </p>
          </div>
        </div>
      </section>
     </div>
    </>
  )
}

export default App
