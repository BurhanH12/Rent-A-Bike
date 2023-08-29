import Link from 'next/link';
import React from 'react'
import { api } from '~/utils/api';



const Rental = () => {

  const getbikes = api.bike.getBikeData.useQuery({title: "Mountain Explorer 2000"})
  const firstbike = getbikes?.data?.bike?.title;
  console.log(firstbike);

  const getAllBikes = api.bike.getAllBikes.useQuery({});
  const bikes = getAllBikes.data?.allBikes || [];
  console.log(bikes,"bbbb");
  
  

  return (
    <div className="p-10">
      <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
        <h1 className="text-[50px] text-[#275a85]">Rentals</h1>
        <div className="h-1 w-[180px] rounded bg-[#6c94ac]"></div>
      </div>
      <div>
        <section className="body-font text-gray-600">
          <div className="container mx-auto px-5 py-16">
            <div className="-m-4 flex flex-wrap">
              {/* <!--Card--> */}
              {bikes.map((bike: any) => (
                <div key={bike.id} className="w-full p-4 md:w-1/2 lg:w-1/4">
                  <Link href={`/product/${bike.title}`} >
                  <a className="relative block h-56 overflow-hidden rounded">
                    <img
                      alt={bike.title}
                      className="block h-full w-full object-cover object-center"
                      src={`https://crimson-instant-amphibian-770.mypinata.cloud/ipfs/${bike.images}`} 
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      {bike.type}
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      {bike.title}
                    </h2>
                    <p className="mt-1">${bike.price}</p>
                  </div>
              </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <div>
        <p className="text-2xl text-black">{`This is my first bike ${firstbike}`}</p>
      </div> */}
      </div>
      </div>
  );
}

export default Rental