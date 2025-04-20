import React from 'react'
import python     from '../assets/python.png'
import java       from '../assets/java.png'
import reactLogo  from '../assets/react.png'
import node       from '../assets/node.png'
import sql        from '../assets/sql.png'
import mongo      from '../assets/mongo.png'
import tailwind   from '../assets/tailwind.png'
import scikit     from '../assets/scikit.png'
import pandas     from '../assets/pandas.png'
import swift      from '../assets/swift.png'
import typescript from '../assets/typescript.png'

const icons = [
  [python,     'Python'],
  [java,       'Java'],
  [reactLogo,  'React'],
  [node,       'Node.js'],
  [sql,        'SQL'],
  [mongo,      'MongoDB'],
  [tailwind,   'Tailwind'],
  [scikit,     'SciKit‑Learn'],
  [pandas,     'Pandas'],
  [swift,      'Swift'],
  [typescript, 'TypeScript'],
]

export default function SkillsMarquee() {
    return (
      <div className="text-white max-w-[1200px] mx-auto my-12" id="skills">
        <div className="flex justify-center mb-6">
          <h2 className="primary-color text-4xl font-bold text-center">
            My Tech Stack
          </h2>
        </div>
  
        <div className="relative overflow-hidden">
          <div className="inline-flex whitespace-nowrap animate-marquee py-8 space-x-8">
            {icons.map(([src, label]) => (
              <div key={label} className="flex flex-col items-center w-32">
                <img
                  src={src}
                  alt={label}
                  className="h-24 w-24 object-contain"
                />
                <p className="mt-2 text-gray-400">{label}</p>
              </div>
            ))}
            {icons.map(([src, label]) => (
              <div key={`dup-${label}`} className="flex flex-col items-center w-32">
                <img
                  src={src}
                  alt={label}
                  className="h-24 w-24 object-contain"
                />
                <p className="mt-2 text-gray-400">{label}</p>
              </div>
            ))}
          </div>
  
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16"
            style={{ background: 'linear-gradient(to right, #221E1E, transparent)' }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16"
            style={{ background: 'linear-gradient(to left, #221E1E, transparent)' }}
          />
        </div>
      </div>
    )
  }
  
  
