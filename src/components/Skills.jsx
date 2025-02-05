import React from 'react'
import react from '../assets/react.png'
// Node.js
import node from '../assets/node.png'
//Express
import sql from '../assets/sql.png'
//MongoDB
import mongo from '../assets/mongo.png'
//Python
import python from '../assets/python.png'
//Scikit-Learn
import scikit from '../assets/scikit.png'
//pandas
import pandas from '../assets/pandas.png'
//Swift
import swift from '../assets/swift.png'
import tailwind from '../assets/tailwind.png'
//TypeScript 
import typescript from '../assets/typescript.png'
import java from '../assets/java.png'


const skills = () => {
  return (
    <div className=" bg-#221E1E text-gray-400 max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center py-8">

        
        <h2 className='primary-color text-2xl md:text-4xl font-bold m-4'>
            My <br/> Tech <br/> Stack
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={python} alt="" width={100} height={100}/>
            <p className='mt-2'>Python</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={java} alt="" width={100} height={100} className="h-24 w-24 object-contain"/>
            <p className='mt-2'>Java</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt="" width={100} height={100}/>
            <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={node} alt="" width={100} height={100}/>
            <p className='mt-2'>Node.js</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={sql} alt=""/>
            <p className='mt-2'>SQL</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={mongo} alt="" width={100} height={100}/>
            <p className='mt-2'>MongoDb</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt="" width={100} height={100}/>
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={scikit} alt="Scikit-Learn logo" className="h-24 w-24 object-contain"/>
            <p className='mt-2'>SciKit-Learn</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={pandas} alt="" width={100} height={100}/>
            <p className='mt-2'>Pandas</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={swift} alt="" width={100} height={100}/>
            <p className='mt-2'>Swift</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={typescript} alt="" width={100} height={100}/>
            <p className='mt-2'>TypeScript</p>
        </div>
    </div>           
  )
}

export default skills