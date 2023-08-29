import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { api } from '~/utils/api'
import DropdownComponent from '~/components/ui/dropdown';
import { Slider } from '~/components/ui/slider';
import { Button } from '~/components/ui/button';
import Policy from '~/components/Modals/policy';


const Title = () => {
    const router = useRouter()
    const { title } = router.query

    const [selectedDuration, setSelectedDuration] = useState<string>(""); //Duration from Drop Down
    const [totalHours, setTotalHours] = useState<number>(1); // Default total hours
    const [totalPrice, setTotalPrice] = useState<number>(0); // State to hold the calculated total price
    const [quantity, setQuantity] = useState<number>(1); // Default quantity




    //API to get Data for the bike against it's Title
    const getbikes = api.bike.getBikeData.useQuery({title: `${title}`})
    const firstbikeTitle:string | undefined = getbikes?.data?.bike?.title;
    const rentPerHour:number | undefined = getbikes?.data?.bike?.rentPerHour; //Rent for the first hour
    // console.log(rentPerHour);
    

    
    const handleDurationChange = (duration: string) => {
      setSelectedDuration(duration);
      const parsedDuration = parseInt(duration);
      if (!isNaN(parsedDuration)) {
        setTotalHours(parsedDuration); // Update totalHours using setTotalHours
      }
    };

    //Calculate the Total Rent
    const calcPrice = (rentPerHour: number, quantity: number, totalHours: number) => {
      if (rentPerHour === undefined) {
        return 0; // Return 0 if rentPerHour is undefined
        console.log("Rent is undefined");    
      }

      const priceForHours: number = (totalHours - 1) * 50; //Increase the price by 50 for each extra Hour
      const totalPrice: number = (priceForHours + rentPerHour) * quantity;
      return totalPrice;
    }

    

    // Calculate the price based on totalHours whenever it changes
  useEffect(() => {
    // Calculate the price using calcPrice function
    const calculatedPrice = calcPrice(rentPerHour || 0, quantity, totalHours);
    setTotalPrice(calculatedPrice); // Update the total price state
  }, [totalHours]);


    // Calculate the price based on total quantity whenever it changes
  useEffect(() => {
    console.log("Quantity changed:", quantity);
    const calculatedPrice = calcPrice(rentPerHour || 0, quantity, totalHours);
    setTotalPrice(calculatedPrice); // Update the total price state
  }, [quantity]);



  return (
    <div className="mt-14">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="ml-3 grid gap-4">
          <div>
            <img
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              className="h-auto max-w-full rounded-lg "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="gap-6 grid mr-3">
          <div>
            <img
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid col-span-2 ml-6 gap-0">
          <div className="mb-0">
            <p className="mb-0 text-xs text-[#84c970]">BIYIY.COM</p>
          </div>
          <h1
            className="mt-0 text-5xl"
            style={{
              fontFamily:
                "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
              fontStyle: "normal",
              fontWeight: 400,
              letterSpacing: "calc(1.3 * .06rem)",
              color: "rgb(43, 93, 134)",
              lineHeight: "calc(1 + .3/max(1,1.3))",
              wordBreak: "break-word",
            }}
          >
            {firstbikeTitle}
          </h1>
          {/* Quantity And Duration Selection */}
          <div className="mt-10">
            <p className="mb-3 text-lg text-[#275a85]">Duration</p>
            <DropdownComponent onDurationChange={handleDurationChange} />
          </div>
          <div className="mt-6">
            <div className='flex flex-row'>
            <p className="mb-3 text-lg text-[#275a85]"> Quantity </p>
            <div className="ml-3">
                <div className="flex h-7 w-5 items-center justify-center rounded-md border border-[#275a85] p-1">
                  <p className="text-lg text-[#275a85]">{quantity}</p>
                </div>
              </div>
              </div>
            <div className="flex flex-row">
              <p className="mr-2 text-lg text-[#275a85]"> 1 </p>
              <Slider
                className="w-64"
                defaultValue={[1]}
                max={10}
                min={1}
                step={1}
                onValueCommit={(i: number[]) => {
                  if (i[0] !== undefined) {
                    setQuantity(i[0]);
                  }
                }}
              />
              <p className="ml-2 text-lg text-[#275a85]"> 10 </p>
            </div>
          </div>
          {/* Price Section */}
          <div className="mt-8">
            <p className="text-3xl text-[#275a85]">Dhs. {totalPrice} AED </p>
            <p className='text-[#275a85] text-sm'> Tax Included </p>
          </div>
          {/* Add to Cart Button */}
          <div className='mt-10'>
            <Button size={'lg'} className='bg-[#275a85] w-64'>
              Add to Cart
            </Button>
          </div>
          {/* Policy */}
          <Policy />
        </div>
      </div>
    </div>
  );
}

export default Title