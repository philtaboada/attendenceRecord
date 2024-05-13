'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useZxing } from 'react-zxing';

const apiRoute = 'https://fidenzaasistencia.ue.r.appspot.com/api/'

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [result, setResult] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [horaPeru, setHoraPeru] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
            readedQr(result.getText())
        },
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const updatedHoraPeru = () => {
            const now = new Date();
            const options = { timeZone: 'America/Lima' };
            const hours = now.toLocaleString('en-US', options).split(',')[1].split(':')[0];
            const minutes = now.toLocaleString('en-US', options).split(',')[1].split(':')[1];
            const seconds = now.toLocaleString('en-US', options).split(',')[1].split(':')[2].split(' ')[0];
            const horaPeru = `${hours}:${minutes}:${seconds}`;
            setHoraPeru(horaPeru);
        }

        const interval = setInterval(updatedHoraPeru, 1000);

        return () => clearInterval(interval);
    }, [])

    const onSubmit = (event: any) => {
        setIsLoading(true)
        event.preventDefault()
        axios.put(`${apiRoute}workEndTime/${result}`, {
            "data": {
                "date": new Date().toLocaleDateString('es-ES', { timeZone: 'America/Lima' }).split(',')[0],
                "workEndTime": horaPeru,
                "workStartTime": " ",
            }
        })
            .then((response) => {
                console.log(response)
                window.location.href = `/finishday`
            })
            .catch((error) => {
                console.log(error)
                window.location.href = `/badrequest`
            })
    }

    const readedQr = (number: string) => {
        axios.put(`${apiRoute}workEndTime/${number}`, {
            "data": {
                "date": new Date().toLocaleDateString('es-ES', { timeZone: 'America/Lima' }).split(',')[0],
                "workEndTime": horaPeru,
                "workStartTime": " ",
            }
        })
            .then((response) => {
                console.log(response)
                window.location.href = `/finishday`
            })
            .catch((error) => {
                console.log(error)
                window.location.href = `/badrequest`
            })
    }

    return (
        <>
            <div className="flex flex-col justify-center w-screen h-screen" >
                <p className='text-center font-bold text-lg mb-6'>Coloca tu QR cerca a la cámara</p>

                <div className='flex flex-col items-center justify-center w-[100%] h-[60%]'>
                    <video className='w-[450px] h-[450px]' ref={ref} />
                    <dt className="mb-2 text-3xl md:text-4xl font-extrabold">{horaPeru}</dt>
                </div>

                <div className='flex flex-col justify-center items-center my-14 mx-12'>
                    <h3 className='text-center mb-4'>
                        O ingresa con tu número de DNI
                    </h3>
                    <form onSubmit={(event) => onSubmit(event)} className='flex flex-col justify-center items-center'>
                        <input
                            value={result}
                            onChange={(event) => setResult(event.target.value)}
                            placeholder='Ingresa tu DNI'
                            className="mb-3 peer block min-h-[auto] w-full rounded border-2 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0" type="text" />
                        {!isLoading ?
                            <button
                                type="submit"
                                className="inline-block rounded border-2 bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                                Enviar
                            </button>
                            :
                            <button
                                disabled
                                type="submit"
                                className="inline-block rounded border-2 bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-light-3 transition duration-150 ease-in-out hover:bg-primary-dark hover:shadow-light-2 focus:bg-primary-dark focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-primary-dark active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                                Enviar
                            </button>
                        }
                    </form>
                </div>
            </div >
        </>

    )
}

export default page