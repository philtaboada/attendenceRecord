'use client'
import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';
import data from '../userData.json'
import axios from 'axios';

const qrRegister = () => {

    const readedQr = (text: string) => {
        const user = data.find((user) => user.number === text)
        if (user) {
            window.location.href = `/`
        } else {
            alert('Usuario no registrado')
        }

        axios.post('http://localhost:3000/api/qr', {
            number: text
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <>
            <div className="flex flex-col justify-center w-screen h-screen" >
                <p className='text-center font-bold text-lg mb-6'>Coloca tu QR cerca a la cámara</p>

                <Scanner
                    onResult={(text) => readedQr(text)}
                    onError={(error) => console.log(error?.message)}
                    components={
                        {
                            audio: false,
                        }
                    }
                />
            </div >
        </>

    )
}

export default qrRegister