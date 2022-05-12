import {
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from "../imgs/logo.PNG"

export default function Footer() {
    return (
        <div className="lg:h-[200px] md:h-[175px] h-[150px] w-full bg-black flex justify-end">
            <div className="text-white lg:text-4xl md:text-3xl text-2xl pt-1 my-auto ml-10 mr-3">
                <img src={logo} className="lg:h-[100px] md:h-[80px] h-[65px]" alt='Logo' />
            </div>
            <div className="h-2/3 my-auto bg-gray-500 w-[1px]"></div>
            <div className="flex flex-col text-gray-500 my-auto ml-3 mr-10">
                <span className="lg:text-lg md:text-md text-sm">rssavant34@gmail.com</span>
                <span className="lg:text-lg md:text-md text-sm">(IND)+91 9003517181</span>
                <div className="flex lg:hidden justify-between mt-3 mr-7">

                    <a href="https://www.linkedin.com/in/rushank-savant/"
                        target="_blank" rel="noreferrer">
                        <button className='hover:text-pink-500'>
                            <FaLinkedin size={20} />
                        </button>
                    </a>
                    <a href="https://github.com/Rushanksavant"
                        target="_blank" rel="noreferrer">
                        <button className='hover:text-pink-500'>
                            <FaGithub size={20} />
                        </button>
                    </a>
                    <a href="https://twitter.com/irss350"
                        target="_blank" rel="noreferrer">
                        <button className='hover:text-pink-500'>
                            <FaTwitter size={20} />
                        </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1rOidHaSG51uxlBejILbda_GuMqQ74qBf/view?usp=sharing"
                        target="_blank" rel="noreferrer">
                        <button className='hover:text-pink-500'>
                            <BsFillPersonLinesFill size={20} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}