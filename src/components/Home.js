// import Typed from 'react-typed';

export default function Home() {
  return (
    <div name='home' className='w-full h-screen border-b-[1px] border-gray-700'>
      {/* Container */}
      <div className='w-full flex flex-col justify-center h-full'>
        <div className='mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Rushank Savant
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Full Stack Web3 Developer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[800px]'>
            I’m a Data Scientist turned Web3.0 developer specializing in
            building Solidity smart contracts, testing them using Chai, Mocha,
            and integrating them to a frontend using EthersJS.
            {/* Currently, I’m focused on gas-optimization and security vulnerabilities of smart contract, and building responsive web applications. */}
          </p>
          <p className='text-[#ccd6f6] py-4 max-w-[800px]'>
            Mobile no: +91-9003517181 <br></br>
            Email: rssavant34@gmail.com
          </p>

          <a
            href='https://drive.google.com/file/d/1_d0SbrPWcwUMzT1gXB41eWxs1gS0IPHA/view?usp=sharing'
            className='mr-auto'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-white border-4 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-900'>
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
