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
                            DappNet V1.0</span>
                        <div className="flex flex-col gap-1">
                            <a href="https://github.com/Rushanksavant/DappNet-V1.0" target="_blank">
                                <button>
                                    <FaGithub className="lg:text-3xl sm:text-xl md:text-2xl text-lg text-pink-500 hover:text-pink-300" />
                                </button></a>

                            <a href="https://dappnet-v1.netlify.app/" target="_blank">
                                <button>
                                    <CgWebsite className="lg:text-3xl sm:text-xl md:text-2xl text-lg text-pink-500 hover:text-pink-300" />
                                </button></a>
                        </div>
                    </div>

                    <div className="text-pink-300 xl:text-lg lg:text-md md:text-[12px] text-[10px]">
                        (Kindly wait a few seconds after connecting your wallet to ropsten net, it will display posts created by users on the main page)
                    </div>

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-3">
                        Deployed on Ropsten testnet:
                        <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                            <li>
                                Post- 0xCC11252eccB8141616099cC8adb9868927dE9cB6
                            </li>
                            <li>
                                Profile- 0xc6f2A25E1EF3A946e1C8567b9D3Ec9177eC6f977
                            </li>
                        </ul>

                    </div>

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            Features:</span>
                        <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                            <li>
                                Make a profile on network to create post, like/comment on other's post. Profile requires name, bio and profile image (all needed).
                            </li>
                            <li>
                                Profile can be created from "Your Profile" section. User cannot interact (like, comment, post) if user profile is not created. Only one profile
                                permitted per address.
                            </li>
                            <li>
                                Create a post with image and caption. Others can comment and like on your post. You can delete anyone's comment you dont want on your post.
                            </li>
                            <li>
                                Owner of DappNet (me) can delete posts and comments on anyone's post if inappropriate content is posted.
                            </li>
                            <li>
                                View your activity, Posts created/deleted, Posts liked/cancle liked, Comment you posted/deleted on any post in "Your Activity".
                            </li>
                        </ul>

                        Solidity, hardhat, ethersjs, reactJS, tailwindCSS, chai, mocha, ipfs
                    </div>

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            Limitations:</span>

                        <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                            <li>
                                Responsiveness of the application.
                            </li>
                            <li>
                                The contract can be further optimized for gas.
                            </li>
                        </ul>
                    </div>

                    <div className="text-[#ccd6f6] xl:text-xl lg:text-lg md:text-[15px] text-[13px] mt-[50px]">
                        <span className="text-[#ccd6f6] font-bold xl:text-3xl lg:text-2xl md:text-[19px] text-[17px] border-b-2 border-pink-500">
                            What's for V2.0?</span>
                        <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "circle" }}>
                            <li>
                                Responsiveness and better UI
                            </li>
                            <li>
                                Optimized smart contract
                            </li>
                            <li>
                                Features:
                                <ul className="mt-3 ml-7 mb-3" style={{ listStyleType: "square" }}>
                                    <li>
                                        Follow/unfollow a user (similar to what we have on general socila media platforms, like Instagram)
                                    </li>
                                    <li>
                                        Convert your post into a NFT or a yeild generating asset
                                    </li>
                                    <li>
                                        get incentives for likes/comments on your post
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        and more...
                    </div>
                </div>
            </div>
        </div>
    )
}