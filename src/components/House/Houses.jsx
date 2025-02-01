import { useEffect, useState } from "react";
import House from './House'

const Houses = () => {

    const [value, setValue] = useState(6)
    const [houses, setHouses] = useState([])

    useEffect(() => {
        fetch(`https://api2-kohl.vercel.app/allhouses`)
            .then(res => res.json())
            .then(data => setHouses(data))
    }, []);


    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="mt-20 text-center font-bold text-4xl text-gray-800 py-3">Apartment</h2>
            <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minus necessitatibus sequi eos magni, fugiat dignissimos error cumque. Ea necessitatibus qui molestias, sapiente dolor corrupti voluptatibus molestiae nulla dolorum cumque!</p>

            <div className="mt-10 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    houses.length ? houses.slice(0, value).map(house => <House key={house.id} house={house}></House>) : <div className="grid grid-cols-3 gap-36">
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                }
            </div>
            <div className="mt-5 flex justify-center">
                {
                    value === 6 ? <button className="bg-gradient-to-r from-accent-content via-accent-content to-gray-900 text-white p-3 rounded cursor-pointer" onClick={() => setValue(houses.length)}>View All</button> : <button className="bg-gradient-to-r from-accent-content via-accent-content to-gray-900 text-white p-3 rounded cursor-pointer" onClick={() => setValue(6)}>View Less</button>
                }
            </div>

        </div>
    )
}
export default Houses;