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
                            Crypto-ArbitrageBot</span>
                        <div className="flex flex-col gap-1">
                            <a href="https://github.com/Rushanksavant/cryptoArbitrageBot_V1" target="_blank">
                                <button>
                                    <FaGithub className="lg:text-3xl sm:text-xl md:text-2xl text-lg text-pink-500 hover:text-pink-300" />
                                </button></a>
                        </div>
                    </div>

                    {/* <div className="text-pink-300 xl:text-lg lg:text-md md:text-[12px] text-[10px]">
                        (Kindly connect your wallet to ropsten network and wait for a few seconds, it might show "No NFTs listed yet" before NFTs load)
                    </div>

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-3">
                        Deployed on Ropsten testnet: 0xA3b10D635C92a5A1ae051293C26a107c272cc34B
                    </div> */}

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        {/* <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            Features:</span> */}
                        {/* <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                            <li>
                                Buy the NFTs listed on marketplace, and resell them at higher price for profits.
                            </li>
                            <li>
                                Create NFT of your ART.
                            </li>
                            <li>
                                Pay listing price(0.025 ETH) to list your NFT on Marketplace.
                            </li>
                            <li>
                                Earn ROYALTIES (2% from seller's profit) from your NFT reselling.
                            </li>
                        </ul> */}

                        This would be an infinitely running function (until the user decides to stop it), that will find Arbitrage opportunities between Uniswap and Kyber swap. If price differences are greater than a certain amount then swaps will be made (to buy ETH or any ERC20 at lower price and sell at higher). The transactions will be done directly from the user's wallet.
                        Focusing on ETH-DAI pools as of now.
                    </div>

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            Currently</span>
                        <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                            <li>
                                Getting anomalies in price fetches
                            </li>
                            <li>
                                Unable to test the code (inaction) because there is no liquidity for test nets. Will fork mainnet for testing.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}