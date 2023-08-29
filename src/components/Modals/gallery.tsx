import React from 'react'

const Gallery = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
    Unlock Your Adventure with <span className="text-[#7ccc6b]">Biyiy</span>
  </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Embark on a journey of exhilaration and exploration with Biyiy's cutting-edge electric bikes. Feel the thrill as you traverse urban streets, coastal paths, and scenic landscapes, all while enjoying the seamless blend of technology and freedom.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/Gallery/highwaysmall.jpg" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/Gallery/himiway6small.jpg" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/Gallery/himiway3small.jpg" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/Gallery/himiway2small.jpg" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/Gallery/himiway4small.jpg" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/Gallery/himiway5.jpg" />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Gallery