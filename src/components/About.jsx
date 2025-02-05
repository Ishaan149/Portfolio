import React from 'react'
import aboutImg from '../assets/about.png'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className="text-base lg:text-lg">
                    Hi! I'm Ishaan Kurmi, a Computer Science student at Arizona State University with a passion for software development, data analysis, and machine learning. I love solving problems and building full-stack applications, predictive models, and iOS apps that turn ideas into impactful solutions.<br/>

                    <br/>I’m particularly fascinated by machine learning and its potential to drive innovation, automate decisions, and uncover hidden insights. From training deep learning models to optimizing algorithms, I enjoy experimenting with AI-driven solutions that solve real-world problems efficiently.<br/>

                    <br/>I’m always eager to learn, innovate, and take on new challenges. Let’s connect on GitHub and LinkedIn to create something amazing!
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={500} height={300}/>
        </div>
    </div>
  )
}

export default About