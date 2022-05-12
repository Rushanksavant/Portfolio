import { AiOutlineGithub } from "react-icons/ai"
import { GiArrowCursor } from "react-icons/gi"
import { HiCursorClick } from "react-icons/hi"
import { FaGithub } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"
import { useState } from "react"
import PostDetailed from "./ProjectDetailed"

import image from "./download.jfif"


export default function ArbitrageBot() {

    const [modalOn, setModalOn] = useState(false);

    return (
        <div className="xl:w-[280px] xl:h-[150px] bg-[#8892b0] w-[150px] h-[80px] lg:w-[190px] lg:h-[110px] md:w-[170px] md:h-[110px] rounded-md shadow-lg shadow-neutral-300 mb-3 mx-2">

            <div className="h-full w-full bg-no-repeat bg-cover hover:scale-[1.2] duration-300 rounded-md bg-black"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => setModalOn(true)}>

                <div className="h-full w-full bg-black bg-opacity-40 hover:bg-opacity-20 group grid grid-rows-3">

                    <span className="p-3 mr-auto text-white text-[12px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-bold">
                        Crypto-ArbitrageBot</span>

                    <GiArrowCursor className="h-5/6 mx-auto xl:text-3xl lg:text-2xl sm:text-lg md:text-xl text-lg group-hover:hidden" />
                    <HiCursorClick className="h-5/6 mx-auto xl:text-3xl lg:text-2xl sm:text-lg md:text-xl text-lg group-hover:flex hidden" />

                    <div className="flex justify-start ml-auto mr-3 gap-3">
                        <a href="https://github.com/Rushanksavant/cryptoArbitrageBot_V1" target="_blank">
                            <button>
                                <FaGithub className=" mx-auto lg:text-2xl sm:text-lg md:text-xl text-lg hover:text-pink-200" />
                            </button>
                        </a>
                    </div>
                </div>

            </div>

            {/* <div className="h-full w-full relative">
                <img src={nftMarketplace} />
            </div> */}

            {modalOn && <PostDetailed setModalOn={setModalOn} />}

        </div>

    )
}