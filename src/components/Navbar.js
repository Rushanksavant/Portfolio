import { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from "../imgs/logo.PNG"
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaDev
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Navbar() {

    const [smallMenue, setSmallMenue] = useState(false)

    function handleClick() {
        setSmallMenue(!smallMenue)
    }

    return (
        <div className="fixed  w-full bg-black h-20 justify-between flex p-4 border-b-[1px] border-neutral-600">
            <div className="text-white text-4xl">
                <img src={Logo} className="lg:h-[75px] pb-3 lg:w-[110px] h-[60px] w-[90px]" alt='Logo' />
            </div>


            {/* Normal Screen */}
            <ul className="hidden text-white md:flex justify-between my-auto w-2/3 lg:w-1/3">
                <li>
                    <button>
                        <Link to='home' smooth={true} duration={500} className='hover:text-pink-500'>
                            Home
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to='about' smooth={true} duration={500} className='hover:text-pink-500'>
                            About
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to='skills' smooth={true} duration={500} className='hover:text-pink-500'>
                            Skills
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to='projects' smooth={true} duration={500} className='hover:text-pink-500'>
                            Projects
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to='contact' smooth={true} duration={500} className='hover:text-pink-500'>
                            Contact
                        </Link>
                    </button>
                </li>
            </ul>

            {/* menu button */}
            <div onClick={handleClick} className='md:hidden z-10 my-auto'>
                {!smallMenue ? <button>
                    <FaBars className='text-white h-6 w-6 hover:text-pink-500' />
                </button> :
                    <button>
                        <FaTimes className='text-white h-6 w-6 hover:text-pink-500' />
                    </button>}
            </div>

            {/* Mobile menue */}
            <ul className={
                smallMenue ?
                    "flex flex-col h-screen bg-black absolute top-0 left-0 w-full justify-center items-center text-white" :
                    "hidden"
            }>
                <li className='py-6 text-4xl'>
                    <button>
                        <Link onClick={handleClick} to='home' smooth={true} duration={500} className='hover:text-pink-500'>
                            Home
                        </Link>
                    </button>
                </li>
                <li className='py-6 text-4xl'>
                    <button>
                        <Link onClick={handleClick} to='about' smooth={true} duration={500} className='hover:text-pink-500'>
                            About
                        </Link>
                    </button>
                </li>
                <li className='py-6 text-4xl'>
                    <button>
                        <Link onClick={handleClick} to='skills' smooth={true} duration={500} className='hover:text-pink-500'>
                            Skills
                        </Link>
                    </button>
                </li>
                <li className='py-6 text-4xl'>
                    <button>
                        <Link onClick={handleClick} to='projects' smooth={true} duration={500} className='hover:text-pink-500'>
                            Projects
                        </Link>
                    </button>
                </li>
                <li className='py-6 text-4xl'>
                    <button>
                        <Link onClick={handleClick} to='contact' smooth={true} duration={500} className='hover:text-pink-500'>
                            Contact
                        </Link>
                    </button>
                </li>
            </ul>


            {/* Side Bar */}
            <div className='fixed top-[35%] left-0 lg:flex flex-col hidden'>
                <ul>
                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-700'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 p-2 font-bold'
                            href='https://www.linkedin.com/in/rushank-savant/'
                            target="_blank" rel="noreferrer"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 p-2 font-bold'
                            href='https://github.com/Rushanksavant'
                            target="_blank" rel="noreferrer"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>

                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-400'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 p-2 font-bold'
                            href='https://twitter.com/irss350'
                            target="_blank" rel="noreferrer"
                        >
                            Twitter <FaTwitter size={30} />
                        </a>
                    </li>

                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-black'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 p-2 font-bold'
                            href='https://dev.to/rushanksavant'
                            target="_blank" rel="noreferrer"
                        >
                            Dev <FaDev size={30} />
                        </a>
                    </li>

                    <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 p-2 font-bold'
                            href='https://docs.google.com/document/d/1KIe0PjwFNhEx27eI_nd97-UeGK4qn4NXRAeiTwyx42I/edit?usp=sharing'
                            target="_blank" rel="noreferrer"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>

        </div >


    )
}