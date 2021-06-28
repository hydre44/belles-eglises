export function ContactEtInfo({ NomInfo, NomLien }) {
    return (
        <a href={NomLien}>
            <div className="bg-[#B3A090] border-2 border-[#707070]">
                <div className="flex justify-between">
                    <div className="flex text items-center">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </i>
                        <div className="text-2xl font-bold">{NomInfo}</div>
                    </div>
                    <div>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#707070]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
        </a>
    )
}
