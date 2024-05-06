import Link from 'next/link'
import React from 'react'
import { CiForkAndKnife } from "react-icons/ci";
import { CiAlarmOn } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Registered = () => {

    

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                <Link
                    href="/asistence"
                    className="group w-[200px] h-[200px] flex flex-col justify-center items-center rounded-lg border border-zinc-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-6"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        <CiAlarmOn className='text-6xl' />
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Registra tu ingreso
                    </p>
                </Link>

                <Link
                    href="/lunch"
                    className="group w-[200px] h-[200px] flex flex-col justify-center items-center rounded-lg border border-zinc-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-6"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        <CiForkAndKnife className='text-6xl' />
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Registra tu hora de almuerzo
                    </p>
                </Link>

                <Link
                    href="/returnlunch"
                    className="group w-[200px] h-[200px] flex flex-col justify-center items-center rounded-lg border border-zinc-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-6"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        <CiLight className='text-6xl' />
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Registra tu hora de regreso del almuerzo
                    </p>
                </Link>

                <Link
                    href="/endday"
                    className="group w-[200px] h-[200px] flex flex-col justify-center items-center rounded-lg border border-zinc-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 m-6"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        <CiTwitter className='text-6xl' />
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Registra tu salida
                    </p>
                </Link>

            </div>
        </div>
    )
}

export default Registered