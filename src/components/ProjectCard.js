import { AiOutlineGithub } from "react-icons/ai"
import { CgWebsite } from "react-icons/cg"

import nftMarketplace from "../imgs/Capture.PNG"

export default function ProjrctCard() {
    return (
        <div className="xl:w-[280px] xl:h-[150px] bg-[#8892b0] w-[150px] h-[80px] lg:w-[190px] lg:h-[110px] md:w-[160px] md:h-[100px] rounded-md shadow-lg shadow-neutral-300 mb-3 mx-2 ">
            <div style={{ backgroundImage: `url(${nftMarketplace})` }} className="h-full w-full bg-no-repeat hover:scale-[1.2] duration-300 rounded-md">

                {/* <div className="text-[#8892b0] xl:text-[10px] md:text-[6px] lg:text-[7px] text-[5px] h-full opacity-0 hover:opacity-100 hover:bg-neutral-900 hover:bg-opacity-80 relative p-2 rounded-md">
                    this is a statement this is a statement this is a statement this is a statement
                    this is a statement this is a statement this is a statement this is a statement
                    this is a statement this is a statement this is a statement this is a statement
                    this is a statement this is a statement this is a statement this is a statement

                    <div className="absolute bottom-1 lg:bottom-2 right-2 flex">
                        <button className='mr-1 hover:text-[#ccd6f6] xl:text-xl lg:text-lg md:text-sm text-sm'>
                            <CgWebsite />
                        </button>

                        <button className='mr-1 hover:text-[#ccd6f6] xl:text-xl lg:text-lg md:text-sm text-sm'>
                            <AiOutlineGithub />
                        </button>
                    </div>
                </div> */}

            </div>

        </div>
    )
}