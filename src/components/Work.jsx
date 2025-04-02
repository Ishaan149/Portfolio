import React from 'react';
import proj1 from '../assets/Proj1.jpeg';
import proj2 from '../assets/Proj2.jpeg';
import proj3 from '../assets/Proj3.jpeg';
import proj4 from '../assets/Proj4.jpeg';
import proj5 from '../assets/Proj5.jpeg';

const projects = [
    {
        image: proj1,
        title: "MovieNest",
        description: "MovieNest is a full-stack movie review platform designed for seamless user engagement. Built with HTML, CSS, JavaScript, Node.js, and MongoDB, it features a responsive interface that enhances user experience across devices. The platform efficiently manages and retrieves reviews, achieving sub-2-second load times for search and review functions. With over 200 user reviews in its initial phase, MovieNest demonstrates expertise in backend logic, database management, and performance optimization.",
        github: "https://github.com/Ishaan149/Movie-Review"
    },
    {
        image: proj2,
        title: "Stock Price Prediction Model",
        description: "This machine learning-driven model predicts Apple's stock price movements with a 90% AUC-ROC score. Built using Python, Pandas, Scikit-Learn, and XGBoost, it employs data cleaning and normalization techniques to enhance predictive accuracy. The model leverages logistic regression, support vector machines, and other ML algorithms, with Matplotlib visualizations providing insights into stock trends and volatility for improved decision-making.",
        github: "https://github.com/Ishaan149/Apple_stock"
    },
    {
        image: proj5,
        title: "Ai Job Coach",
        description: "An AI-powered web app that helps users prepare for job interviews by generating personalized questions based on uploaded resumes and job descriptions. Built using React.js and FastAPI, it features dynamic flashcards, role-based questions, and AI-generated ideal answers to improve response quality. The app enhances interview readiness through realistic practice sessions and intelligent feedback.",
        github: "https://github.com/Ishaan149/Ai-job-coach",
        live: "https://ai-interview-coach.netlify.app/"
    }, 
    {
        image: proj3,
        title: "Habit Tracker iOS App",
        description: "A full-stack iOS application designed to help users efficiently build, manage, and track their habits. Developed using Swift, SwiftUI, and UIKit, it features dynamic calendar components, push notifications for reminders, and an intuitive interface. The app achieved 95% positive user feedback and increased daily habit completion rates by 20% through seamless user interactions and refined UX design.",
        github: "https://github.com/Ishaan149/Atomic"
    },  
    {
        image: proj4,
        title: "Color Sort Game",
        description: "An interactive web-based game designed to enhance cognitive skills through engaging color-sorting challenges. Built with React.js, JavaScript, and CSS, it features dynamic game logic, real-time feedback on moves, and a scoring system to encourage re-playability. The game improves user engagement by 30% through smooth color transfers, validation checks, and an intuitive interface.",
        github: "https://github.com/Ishaan149/color-sort"
    },  
];

const Work = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-5' id='work'>
            <div className='pb-8'>
                <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
                <p className='text-gray-400'>Check out some of my recent projects</p>
            </div>

            <div className='grid gap-8'>
                {projects.map((project, index) => (
                    <div key={index} className='flex flex-col md:flex-row items-center bg-[#161616] shadow-lg p-5 rounded-lg'>
                        <img src={project.image} alt={project.title} className='w-full md:w-1/3 rounded-lg'/>
                        <div className='md:ml-6 mt-4 md:mt-0 text-center md:text-left'>
                            <h3 className='text-2xl font-bold text-white'>{project.title}</h3>
                            <p className='text-gray-300 mt-2'>{project.description}</p>
                            <div className='flex justify-center md:justify-start gap-4 mt-4'>
                                <a href={project.github} target='_blank' rel='noopener noreferrer'>
                                    <button className='bg-white text-gray-800 px-4 py-2 rounded-lg font-bold'>View on GitHub</button>
                                </a>
                                {project.live && (
                                    <a href={project.live} target='_blank' rel='noopener noreferrer'>
                                        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg font-bold'>View Live</button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
