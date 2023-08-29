import Link from 'next/link';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "~/components/ui/dialog"
import { Button } from '../ui/button';

  
const Policy: React.FC = () => {
  return (
    <div className="mr-8 text-[#275a85]">
      <div className="ml-8">
        <div className="mt-6 text-sm">
          <p>
            Pickup available at{" "}
            <strong className="font-semibold">Business Bay</strong>
          </p>
          <p className="mt-1"> Usually ready in 1 Hour </p>
        </div>
        <div className="mt-1">
          <Dialog>
            <DialogTrigger className="text-md underline">
              {" "}
              View store information{" "}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">
                  Buisness Bay
                </DialogTitle>
                <DialogDescription>
                  {" "}
                  Pickup available, usually in 1 hour{" "}
                </DialogDescription>
              </DialogHeader>
              <div>
                <p>
                  Bay Square <br />
                  Building 13 <br />
                  Dubai DU <br />
                  United Arab Emirates <br />
                  +971521419184
                </p>
              </div>
              <Button className='bg-[#275a85]'>
                <Link href={'https://www.google.com/maps?q=Bay+Square+Building13'} legacyBehavior >
                  <a target="_blank">Open Location in Maps</a>
                </Link>
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-5">
        <p className="mb-3 text-lg underline">Pickup and Drop Location:</p>
        <ul className="list-inside list-disc pl-4">
          <li>
            <strong className="font-semibold">Charges: {""}</strong>
            If you want it delivered to your location, additional charges will
            apply.
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="mb-3 text-lg underline">Cancellation Policy:</p>
        <ul className="list-inside list-disc pl-4">
          <li>
            This experience is non-refundable and cannot be changed for any
            reason. If you cancel or ask for an amendment, the amount you paid
            will not be refunded.
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="mb-3 text-lg underline">Benefits of renting with BIYIY</p>
        <ul className="list-inside pl-4">
          <li className="mb-4">
            <strong className="font-semibold">Innovation: {""}</strong>
            Be at the heart of technological innovations and offer services to
            your employees.
          </li>
          <li className="mb-4">
            <strong className="font-semibold">
              Sustainable development: {""}
            </strong>
            Engage in an eco-responsible approach for your company's dynamic and
            evolving image.
          </li>
          <li className="mt-2">
            <strong className="font-semibold">Welness: {""}</strong>
            Using our solutions leads to an improvement in well-being at work,
            productivity, and absenteeism reduction.
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="mb-3 text-lg underline"> Benefits for You</p>
        <p className="mb-4">
          <strong className="font-semibold">
            An eco-responsible approach: {""}
          </strong>
          Go green by reducing greenhouse gas emissions.
        </p>
        <p className="mb-4">
          <strong className="font-semibold">
            A moment of pleasure and team-building: {""}
          </strong>
          Escaping and relaxing after work with your team becomes a real moment
          of joy.
        </p>
        <p className="mb-4">
          <strong className="font-semibold">
            Regular sports activity: {""}
          </strong>
          Maintain physical fitness to improve overall health and productivity.
        </p>
      </div>
      <div>
        <p>
          {" "}
          Our offers are tailored-made and flexible, please {""}
          <Link href={"/contact"} className=" text-black">
            contact us
          </Link>{" "}
          if you are a corporate and would like to discuss a collaboration.
        </p>
      </div>
    </div>
  );
}

export default Policy