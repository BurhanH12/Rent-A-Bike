import React from 'react'

const About = () => {
  return (
    <div className="py-12 px-24">
      <h1 className="text-5xl text-[#275a85] mb-6">Our Story</h1>
      <div className="prose text-[#6890b4]">
        <p>
          Our story at{' '}
          <strong className="font-semibold">BIYIY</strong> (which means{' '}
          <strong className="font-semibold">'ecological'</strong> in Arabic)
          began like many others in discovering the simple joy and pleasure of
          learning how to ride a bike. From the humble and simple pleasure of
          taking a ride in the fresh air as a kid to discovering new adventures
          on two wheels, this memory of simpler times has inspired our founding
          of BIYIY e-bikes - bikes built to discover new horizons.
        </p>
        <p className='py-3 mt-4'>
          BIYIY bikes are designed for the planet and the people. Built for
          comfort and journey, we’ve created a ride that’s adaptable for all
          users while benefiting the environment through sustainable design. It
          is our mission to create an active community and breathe new life into
          city dwellers by optimizing their journeys and by providing a fun,
          enjoyable biking experience.
        </p>
        <div className="space-y-4">
          <p className="font-semibold text-[25px]">Our Values</p>
          <p className="italic">Sustainability</p>
          <ul>
            <li className='list-disc list-inside pl-6'>
              We believe that everyone has their part in contributing towards a
              sustainable future for our planet. That’s why at BIYIY bikes
              we’ve designed our bikes to consume minimal electricity to
              reduce our carbon footprint.
            </li>
          </ul>
          <p className="italic">Quality</p>
          <ul>
            <li className='list-disc list-inside pl-6'>
              We believe that quality material and design contributes to less
              waste overall. That’s why BIYIY bikes are built to last and
              enjoy over the long run.
            </li>
          </ul>
          <p className="italic">Adventure</p>
          <ul>
            <li className='list-disc list-inside pl-6'>
              We believe that life is a little bit more fun when spent outdoors.
              That’s why BIYIY bikes are built to explore vast terrains from
              desert dunes to cityscapes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About