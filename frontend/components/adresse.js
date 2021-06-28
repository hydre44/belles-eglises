export function Adresse ({city,departement,street}) {
    return (
        <div>
                <div className="bg-[#DBCCAA] flex">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#FF1654]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </i>
                    <div>
                        <div className="flex">
                            <div className="font-semibold text-2xl flex">{city}</div>
                            <div className="ml-3 my-1 font-extralight">{departement}</div>
                        </div>
                        <div className="font-thin italic text-xl">{street}</div>
                    </div>
                </div>
            </div>
    )
}