import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import { api } from '~/utils/api';

const AddBikes = () => {
    const { data: session, status } = useSession();
    const { handleSubmit, register } = useForm<any>();

    //PINATA API KEYS
    const JWT: string = `${process.env.NEXT_PUBLIC_PINATA_JWT}`;
    const API_KEY: string = `${process.env.NEXT_PUBLIC_PINATA_API_KEY}`;
    const API_SECRET: string = `${process.env.NEXT_PUBLIC_PINATA_API_SECRET}`;


    type FormValues = {
        title?: string,
        description?: string,
        images?: string,
        price?: number,
        rentPerHour?: number,
        availability?: boolean,
        specifications?: Array<string>,
        condition?: string,
        rentCount?: number
    }

    const addBike = api.bike.addBike.useMutation({
        onSuccess: (res: any) => {
            console.log('success', res);
        }, onError: (err) => {
            console.log("Error Occured", err.message);
            
        }
    })

    if (status === 'authenticated') {
        return (
            <div>

            </div>
        );
    }
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
        <p className="text-gray-500 mb-6">Please sign in using Admin Email.</p>
        <Link href="/api/auth/signin">
          <p className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign In</p>
        </Link>
      </div>
    </div>
  )
}

export default AddBikes