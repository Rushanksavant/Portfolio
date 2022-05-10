import pic from "../imgs/Capture.PNG"
import myPic from "../imgs/myPicColored.jpg"
export default function About() {
    return (
        <div name='about' className='w-full border-b-[1px] border-gray-700'>
            <div className='flex flex-col bg-black text-white pt-[90px]'>
                <div className="grid lg:grid-cols-2 gap-8 lg:mx-auto mb-3">
                    <div className="text-white mx-auto pl-[150px] xl:h-[350px] xl:w-[650px] lg:h-[290px] lg:w-[530px] md:h-[240px] md:w-[480px] h-[170px] w-[360px] md:ml-auto">
                        <img src={myPic} className="lg:flex" />

                    </div>
                    <div className="mr-auto mb-7">
                        <span className="text-3xl md:text-5xl xl:text-6xl lg:text-5xl font-bold text-[#ccd6f6] ml-2 border-b-[3px] md:border-b-[5px] border-pink-500">About</span>
                        <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 mt-2 p-4'>
                            I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                            I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                            I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 w-full gap-[55px] md:flex-col lg:px-[100px]">
                    <div className="lg:mx-auto mr-auto ml-2 flex-col">
                        <span className="text-2xl sm:text-4xl font-bold text-[#ccd6f6] border-b-[3px] border-pink-500">what i do?</span>
                        <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 p-2'>
                            I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                            I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                        </p>
                    </div>
                    <div className="lg:mx-auto mr-auto ml-2 flex-col">
                        <span className="text-2xl sm:text-4xl font-bold text-[#ccd6f6] border-b-[3px] border-pink-500">weaknesses</span>
                        <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 p-2'>
                            I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                            I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                        </p>
                    </div>
                    <div className="lg:mx-auto mr-auto ml-2 flex-col">
                        <span className="text-2xl sm:text-4xl font-bold text-[#ccd6f6] border-b-[3px] border-pink-500">my say on web3?</span>
                        <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 p-2'>
                            I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                            I’m a full-stack developer specializing in building (and occasionally
                            designing) exceptional digital experiences. Currently, I’m focused on
                            building responsive full-stack web applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// pic
// background
// what i do
// weakness
// my say on web 3