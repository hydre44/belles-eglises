export function Lien({ nomLien,image,descriptionImage,lien }) {
    return (
        <div className="px-6 pt-4 bg-[#DBCCAA]">
            <a href={lien} className="flex cursor-pointer hover:bg-[#B3A090] justify-between items-center border-b-2 border-black pb-2">
                <div className="h-28 w-28 bg-gray-400 relative">
                    <img className="h-28 w-full object-cover" src={image} alt={descriptionImage} />
                </div>
                <div className="text-3xl font-medium text-[#707070]">{nomLien}</div>
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#827963] h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </i>
            </a>
        </div>
    )
}
