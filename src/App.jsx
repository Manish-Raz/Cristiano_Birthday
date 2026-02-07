import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';

const App = () => {
  const stairParentRef = useRef(null);


  useGSAP(function () {
    const tl = gsap.timeline()

    tl.to(stairParentRef.current, {
      display: 'block'
    })

    //this is to fall all div one by one from rightside from top
    tl.from('.stair', {
  height: 0,
  duration: 0.6,
  ease: "power2.out",
  transformOrigin: "bottom",
  stagger: {
    amount: 2.2
  }
})
//this will hold the timeline for 3s
tl.to({}, { duration: 3 })


    //this is to bring all div from top to down one by one 
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.8
      }
    })

    tl.to(stairParentRef.current, {
      display: 'none'
    })
  })
  return (
    <div>
      <div key={stairParentRef} className='h-screen w-full fixed top-0 z-50 '>
    
        <div className='h-full w-full flex fixed gap-4 bg-black '>
          <div className="stair   cursor-pointer hover:bg-green-700 h-full w-1/5 bg-red-50 flex items-center justify-center flex-col overflow-hidden">
<div className="
  text-black
  font-bold
   flex flex-col
  drop-shadow-md
  mb-6 sm:mb-10 md:mb-16 lg:mb-20
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
">
  HAPPY
</div>

            <div className='flex flex-col items-center justify-center'>
              <img className='h-[15vw] mb-5' src="https://upload.wikimedia.org/wikipedia/sco/3/3e/Sporting_Clube_de_Portugal.png" alt="" />
<p className="
  text-black
  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
">
  ( 2002 – 2003 )
</p>

            </div>

          </div>

          <div className="stair cursor-pointer hover:bg-red-700 h-full w-1/5 bg-red-50 flex items-center justify-center  flex-col overflow-hidden">
            <div className="
  text-black
  font-bold
              flex flex-col
  drop-shadow-md
  mb-6 sm:mb-10 md:mb-16 lg:mb-20
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
">
  BIRTHDAY
</div>

            <div className='flex flex-col items-center justify-center'>
              <img className='h-[15vw] mb-5' src="https://upload.wikimedia.org/wikipedia/sco/thumb/7/7a/Manchester_United_FC_crest.svg/960px-Manchester_United_FC_crest.svg.png" alt="" />
           <p className="
  text-black
  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
">
  ( 2003 – 2009 )
</p>

            </div>
          </div>

          <div className="stair cursor-pointer hover:bg-blue-500 h-full w-1/5 bg-red-50 flex items-center justify-center  flex-col overflow-hidden">
         <div className="
  text-black
  font-bold
            flex flex-col
  drop-shadow-md
  mb-6 sm:mb-10 md:mb-16 lg:mb-20
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
">
  TO
</div>

            <div className='flex flex-col items-center justify-center'>
              <img className='h-[15vw] mb-5' src="https://static.vecteezy.com/system/resources/thumbnails/066/118/666/small/real-madrid-cf-logo-transparent-background-football-club-icon-digital-download-free-png.png" alt="" />
              <p className="
  text-black
  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
">
  ( 2009 – 2018 )
</p>

            </div>
          </div>

          <div className="stair cursor-pointer hover:bg-amber-200 h-full w-1/5 bg-red-50 flex items-center justify-center  flex-col overflow-hidden">
  <div className="
  text-black
  font-bold
     flex flex-col
  drop-shadow-md
  mb-6 sm:mb-10 md:mb-16 lg:mb-20
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
">
  CRISTIANO
</div>

            <div className='flex flex-col items-center justify-center'>
              <img className='h-[15vw] mb-5' src="https://images.seeklogo.com/logo-png/29/2/juventus-logo-png_seeklogo-297826.png" alt="" />
              <p className="
  text-black
  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
">
  ( 2018 – 2021 )
</p>

            </div>
          </div>


          <div className="stair cursor-pointer hover:bg-amber-300 h-full w-1/5 bg-red-50 flex items-center justify-center  flex-col overflow-hidden">
         <div className="
  text-black
  font-bold
            flex flex-col
  drop-shadow-md
  mb-6 sm:mb-10 md:mb-16 lg:mb-20
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
">
  RONALDO
</div>

            <div className='flex flex-col items-center justify-center'>
              <img className='h-[15vw] mb-5' src="https://logodownload.org/wp-content/uploads/2023/07/al-nassr-fc-logo.png" alt="" />
<p className="
  text-black
  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
">
  ( 2023 – present )
</p>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
