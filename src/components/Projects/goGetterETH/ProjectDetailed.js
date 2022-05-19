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
                            Go-Getter ETH</span>
                        <div className="flex flex-col gap-1">
                            <a href="https://github.com/Rushanksavant/Crypto-Long-Short-Trades" target="_blank">
                                <button>
                                    <FaGithub className="lg:text-3xl sm:text-xl md:text-2xl text-lg text-pink-500 hover:text-pink-300" />
                                </button></a>
                        </div>
                    </div>

                    <div className="text-pink-300 xl:text-lg lg:text-md md:text-[12px] text-[10px]">
                        Crypto-Long-Short-Trades<br></br>
                        running project on localhost mainnet-fork, blocknumber-12964900 (before london)
                    </div>

                    {/* <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-3">
                        
                    </div> */}

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            About:</span><br></br>
                        <div className="mt-3 ml-7 mb-3" >
                            Many consider ETH as storage of value. This project focuses on maximizing the profits by taking advantage of rise/fall in ETH price.
                            Solidity smart contracts were developed to interact with defi-protocols Compound finance and UniswapV2 contracts for making Long/Short operations possible. These
                            contracts were further tested and integrated to a simple frontend.
                            The smart contracts are explained in detail on GitHub Readme.
                        </div>

                        Solidity, hardhat, ethersjs, reactJS, tailwindCSS, chai, mocha <br></br>
                        Compound Finance, UniswapV2
                    </div>

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            Curious about Long/Short operations?</span><br></br>
                        <div className="mt-3 ml-7 mb-3">
                            <span className="text-[#ccd6f6] font-bold xl:text-2xl lg:text-xl md:text-[17px] text-[15px] border-b-2 border-pink-500">
                                Going Long on ETH:</span>
                            <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                                <li>
                                    Supply eth to Compound Protocol
                                </li>
                                <li>
                                    Borrow stable coin from Compound Protocol (against eth supplied)
                                </li>
                                <li>
                                    Buy eth on Uniswap with this borrowed stable coin
                                </li>
                                <li>
                                    hold until eth price goes up
                                </li>
                                <li>
                                    Sell eth on Uniswap, in exchange of stable coin
                                </li>
                                <li>
                                    Repay borrowed stable coin to Compound(along with borrow interest)
                                </li>
                                <li>
                                    Keep the difference(and interests earned on Compound) as profits
                                </li>
                                <li>
                                    Profits will be in stable coin (can be exchanged)
                                </li>
                            </ul>

                            <span className="text-[#ccd6f6] font-bold xl:text-2xl lg:text-xl md:text-[17px] text-[15px] border-b-2 border-pink-500">
                                Going Short on ETH:</span>
                            <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                                <li>
                                    Supply stable coin to Compound Protocol
                                </li>
                                <li>
                                    Borrow eth from Compound Protocol
                                </li>
                                <li>
                                    Buy stable coin on Uniswap with this borrowed eth
                                </li>
                                <li>
                                    hold until eth price goes down
                                </li>
                                <li>
                                    Sell stable coin on Uniswap, in exchange of eth
                                </li>
                                <li>
                                    Repay borrowed eth to Compound(along with borrow interest)
                                </li>
                                <li>
                                    Keep the difference(and interests earned on Compound) as profits
                                </li>
                                <li>
                                    Profits will be in eth (can be exchanged)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}