import React from 'react'

const Footer = () => {
    return (
        <div className="flex justify-center border-t-2 border-gray-200">
            <div>
                <ul className="flex pt-2 pb-2">
                <li className="mr-6">
                        <h2 className="text-black ">Created by</h2>
                    </li>
                    <li className="mr-6 border-b-4">
                        <h2 className="text-black transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-xl">Jason Stuart</h2>
                    </li>
                    <li className="mr-6 border-b-4">
                        <h2 className="text-black transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-xl ">Nikita Zaytsev</h2>
                    </li>
                    <li className="mr-6 border-b-4">
                        <h2 className="text-black transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-xl">Andrew Appuhamy</h2>
                    </li>
                    <li className="mr-6 border-b-4">
                        <h2 className="text-black transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-xl">Jeremy West</h2>
                    </li>
                    <li className="mr-6 border-b-4">
                        <h2 className="text-black transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-xl">Shane Grouber</h2>
                    </li>
                </ul>
            </div>
        </div>
      )
    }

export default Footer