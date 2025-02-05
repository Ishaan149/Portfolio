import React from 'react'
import heroimage from '../assets/hero.png'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-#221E1E'>
        
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={heroimage} alt="hero image"/>
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                <span className="primary-color">
                    I'm a
                </span> <br/>
                <TypeAnimation
                sequence={[
                    "CS Student",
                    1000,
                    "Full-Stack Dev",
                    1000,
                    "ML Enthusiast",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
            My name is Ishaan Kurmi, a Computer Science student at ASU.
            </p>

            <div className='my-8'>
                <a href='https://drive.google.com/uc?export=download&id=1dA7I8GGzdf4PJ4EpDiOeQh69IT0Xc8HY
                    ' className='px-6 py-3 w-full rounded-xl mr-4 
                                    bg-gradient-to-br from-[#ea98da] to-[#5b6cf9] text-white'>
                    Download cv
                </a>

                <a href='https://github.com/Ishaan149' 
                target="_blank" 
                rel="noopener noreferrer"
                className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-[#ea98da] to-[#5b6cf9] text-white hover:border-none'>
                        
                        GitHub
                </a>

                <a href='https://www.linkedin.com/in/ishaan-kurmi-35ab92290'
                target="_blank" 
                rel="noopener noreferrer" 
                className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-[#ea98da] to-[#5b6cf9] text-white hover:border-none'>
                        LinkedIn
                </a>
            </div>

        </div>
    </div>
  )
}

export default Hero