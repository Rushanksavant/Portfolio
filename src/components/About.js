import myPic from "../imgs/myPicColored.jpg"
export default function About() {
    return (
        <div name='about' className='w-full border-b-[1px] border-gray-700'>
            <div className='flex flex-col bg-black text-white pt-[90px]'>
                <div className="grid lg:grid-cols-2 gap-8 lg:mx-auto mb-3">
                    <div className="text-white mx-auto pl-[150px] xl:h-[350px] xl:w-[650px] lg:h-[290px] lg:w-[530px] md:h-[240px] md:w-[480px] h-[170px] w-[360px] md:ml-auto">
                        <img src={myPic} className="lg:flex" alt="Profile" />

                    </div>
                    <div className="mr-auto mb-7">
                        <span className="text-3xl md:text-5xl xl:text-6xl lg:text-5xl font-bold text-[#ccd6f6] ml-2 border-b-[3px] md:border-b-[5px] border-pink-500">About</span>
                        <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 mt-2 p-4'>
                            Freshly graduated with B.Tech, and currently working on creating smart contracts (and dapps) for multiple applications including DeFi and NFT.<br></br>
                            Maintaining my streak to be better than yesterday (I spend no day not learning) <br></br>
                            Currently learning gas-optimization and security vulnerabilities of smart contracts (<a href="https://dev.to/rushanksavant"><u className="text-pink-500 hover:text-pink-300">dev</u></a>). And, solidity assembly.
                            Getting better at building responsive and user-friendly frontend applications using ReactJS and TailwindCSS.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 w-full gap-[55px] md:flex-col lg:px-[100px]">
                    <div className="lg:mx-auto mr-auto ml-2 flex-col">
                        <span className="text-2xl sm:text-4xl font-bold text-[#ccd6f6] border-b-[3px] border-pink-500">Previous Work</span>
                        <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 p-2'>
                            <ul style={{ listStyleType: "circle" }}>
                                <li>
                                    Blockchain Developer - Nu10 <br></br>
                                    Developed a smart contract for NFT Marketplace and integrated it with a simple front end.
                                    And worked along with the team on payouts using Tatum for a Casino project.
                                </li>
                                <li>
                                    Have past experience working as Data Scientist at a unicorn edutech start-up. And as a Python developer in animation industry (the Lego animations you might have seen)

                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="lg:mx-auto mr-auto ml-2 flex-col">
                        <span className="text-2xl sm:text-4xl font-bold text-[#ccd6f6] border-b-[3px] border-pink-500">What I can deliver?</span>
                        <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 p-2'>
                            <ul style={{ listStyleType: "circle" }}>
                                <li>Smart Contract development</li>
                                <li>Testing smart contracts</li>
                                <li>Frontend application with Smart contract(s) integration</li>
                                <li>Interacting with defi protocols like Compound, Uniswap, etc.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="lg:mx-auto mr-auto ml-2 flex-col">
                        <span className="text-2xl sm:text-4xl font-bold text-[#ccd6f6] border-b-[3px] border-pink-500">Plans for next 30 days</span>
                        <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 p-2'>
                            <ul style={{ listStyleType: "circle" }}>
                                <li>Get better at gas-optimization</li>
                                <li>Detect and prevent security vulnerabilities</li>
                                <li>Explore and work with Defi and NFT protocols</li>
                                <li>Start my next project, "Tathastu" </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
