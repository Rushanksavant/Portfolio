import ethersLogo from "../imgs/ethersjs.PNG"
import JS from "../imgs/JS.PNG"
import Sol from "../imgs/Sol.PNG"
import py from "../imgs/python.PNG"
import hardhat from "../imgs/hardhat.PNG"
import chai from "../imgs/chai.PNG"
import mocha from "../imgs/mocha.PNG"
import reactLogo from "../imgs/react.PNG"
import tailwind from "../imgs/tailwind.PNG"
import bootstrap from "../imgs/boot.PNG"
import ipfs from "../imgs/ipfs.PNG"
import rust from "../imgs/rust.PNG"
import graph from "../imgs/graph.PNG"
import mytril from "../imgs/mythril.PNG"

export default function Skills() {
    return (
        <div name='skills' className='w-full h-screen overflow-y-auto bg-neutral-900 border-b-[1px] border-gray-700'>
            <div className='flex flex-col pt-[50px] lg:pl-[150px] pr-[50px]'>
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] ml-2 md:mb-[50px] mb-[20px] border-b-[3px] md:border-b-[5px] border-pink-500">
                    Ask me about</span>
                <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 mb-[50px] sm:mb-[50px] px-[10px] gap-4">
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={JS} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">JavaScript</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={Sol} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">Solidity</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={py} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">Python</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={ethersLogo} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">EthersJS</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={hardhat} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">Hardhat</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={chai} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">Chai</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={mocha} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">Mocha</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={reactLogo} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">ReactJS</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={tailwind} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">Tailwind</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={bootstrap} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">Bootstrap</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={ipfs} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">IPFS</span>
                    </div>
                </div>


                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] ml-2 md:mb-[50px] mb-[20px] border-b-[3px] md:border-b-[5px] border-pink-500">
                    Exploring {/*<span className="text-sm sm:text-xl">(before June 2022)</span>*/}</span>
                <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 pb-[15px] px-[10px] gap-4">
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={rust} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">Rust</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={graph} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">The Graph</span>
                    </div>
                    <div className="text-[#ccd6f6] font-semibold mx-auto bg-neutral-800 hover:scale-110 hover:bg-neutral-700 duration-300 p-3 w-[100px] md:w-[130px] xl:w-[180px] flex flex-col shadow-lg shadow-neutral-600">
                        <img src={mytril} className='h-[50px] lg:h-[75px] mx-auto mb-2' />
                        <span className="md:text-md lg:text-lg text-sm mx-auto">Mythril</span>
                    </div>
                </div>

            </div>

        </div>
    )
}