import { useState } from "react"
import { FaTimes } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"


export default function PostDetailed(props) {
    return (
        <div className="bg-black bg-opacity-80 fixed inset-0 z-50">
            <button className='absolute right-10 top-10' onClick={() => { props.setModalOn(false) }}>
                <FaTimes className="lg:text-3xl sm:text-xl md:text-2xl text-lg text-pink-500 hover:text-pink-300" />
            </button>

            <div className="flex justify-center items-center h-screen">

                <div id="style-3"
                    className="flex-col justify-center bg-black h-3/4 w-4/5 md:w-3/4 border-4 border-pink-500 rounded-lg max-w-1/2 overflow-y-auto p-8 ">

                    <div className="flex justify-between">
                        <span className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-[#ccd6f6]">
                            Bridging Chains</span>
                        <div className="flex flex-col gap-1">
                            <a href="https://github.com/Rushanksavant/Bridging-chains" target="_blank">
                                <button>
                                    <FaGithub className="lg:text-3xl sm:text-xl md:text-2xl text-lg text-pink-500 hover:text-pink-300" />
                                </button></a>

                            <a href="https://bridge-eth-bsc.netlify.app/" target="_blank">
                                <button>
                                    <CgWebsite className="lg:text-3xl sm:text-xl md:text-2xl text-lg text-pink-500 hover:text-pink-300" />
                                </button></a>
                        </div>
                    </div>

                    <div className="text-pink-300 xl:text-lg lg:text-md md:text-[12px] text-[10px]">
                        A decentralized Ropsten - BSC Testnet bridge to transfer a ERC20 token (BTT)
                    </div>


                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            Details:</span>
                        <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                            <li>
                                Made an ERC20 compilent "Bridge Testing Token (BTT)"
                            </li>
                            <li>
                                Developed a completely decentralized bridge between Ethereum (Ropsten) and Binance Smart Chain (BSC Testnet).
                            </li>
                            <li>
                                BTT can be transfered effortlessly between the chains using this bridge.
                            </li>
                            <li>
                                All these interactions can be done using the dapp, the user only needs to change the metamask network while clicking respective buttons
                            </li>
                        </ul>

                        Solidity, hardhat, ethersjs, reactJS, Tailwind CSS
                    </div>

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            What's next?</span>
                        <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                            <li>
                                Integrating a Polygon bridge to existing BTT bridge for Ropsten - BSC Testnet
                            </li>
                            <li>
                                There are some edge-cases to be considered for achieving this.
                            </li>
                        </ul>
                    </div>

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            Contracts:</span> <br></br>

                        <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>

                            <li>
                                Contracts on Ropsten testnet:
                                <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "square" }}>
                                    <li>
                                        Token: 0xF13Ae42D204F38f9e40fCc39f3Dd8a688c4f4C47
                                    </li>
                                    <li>
                                        Bridge: 0x6963C0E683a239fDcBD257EcF37f9533B7219C0E
                                    </li>
                                </ul>

                            </li>
                            <li>
                                Contracts on BSC testnet:
                                <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "square" }}>
                                    <li>
                                        Token: 0xD399FA471baC243E230F91A419853b8C9993Cf2d
                                    </li>
                                    <li>
                                        Bridge: 0xA020813490F7D49b3795F67Ac24ad6cBF4860077
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}