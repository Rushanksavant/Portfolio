import myPic from '../imgs/myPicColored.jpg';
export default function About() {
  return (
    <div name='about' className='w-full border-b-[1px] border-gray-700'>
      <div className='flex flex-col bg-black text-white pt-[90px]'>
        <div className='grid lg:grid-cols-2 gap-8 lg:mx-auto mb-3'>
          <div className='text-white mx-auto pl-[150px] xl:h-[350px] xl:w-[650px] lg:h-[290px] lg:w-[530px] md:h-[240px] md:w-[480px] h-[170px] w-[360px] md:ml-auto'>
            <img src={myPic} className='lg:flex' alt='Profile' />
          </div>
          <div className='mr-auto mb-7'>
            <span className='text-3xl md:text-4xl xl:text-5xl lg:text-4xl font-bold text-[#ccd6f6] ml-2 border-b-[3px] md:border-b-[5px] border-pink-500'>
              Previous Work
            </span>
            <p className='text-[#8892b0] py-4 max-w-[700px] ml-5 p-2'>
              <ul style={{ listStyleType: 'circle' }}>
                <li className='mt-3'>
                  <span className='font-semibold text-lg md:text-xl xl:text-2xl lg:text-xl'>
                    Web3.0 Developer
                  </span>{' '}
                  -{' '}
                  <a
                    href='https://instadapp.io/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <u className='text-pink-500 hover:text-pink-300 my-auto font-semibold'>
                      InstaDapp
                    </u>
                  </a>{' '}
                  <br></br>
                  Worked on projects like Asset Bridging Bots, Formal
                  Verification of smart contracts, 3x leveraged positions and
                  more. You can learn more about it{' '}
                  <a
                    href='https://github.com/Rushanksavant/InstaDapp-Tasks'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <u className='text-pink-500 hover:text-pink-300'>here</u>
                  </a>
                </li>
                <li className='mt-3'>
                  <span className='font-semibold text-lg md:text-xl xl:text-2xl lg:text-xl'>
                    Blockchain Developer
                  </span>{' '}
                  -{' '}
                  <a href='https://nu10.co/' target='_blank' rel='noreferrer'>
                    <u className='text-pink-500 hover:text-pink-300 font-semibold'>
                      Nu10
                    </u>
                  </a>{' '}
                  <br></br>
                  Developed a smart contract for NFT Marketplace and integrated
                  it with a simple front end. And worked along with the team on
                  payouts using Tatum for a Casino project.
                </li>
                <li className='mt-3'>
                  Have past experience working as Data Scientist and Python
                  developer
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 w-full gap-[55px] md:flex-col lg:px-[100px]'>
          <div className='lg:mx-auto mr-auto ml-2 flex-col'>
            <span className='text-2xl sm:text-4xl font-bold text-[#ccd6f6] border-b-[3px] border-pink-500'>
              About
            </span>
            <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 mt-2 p-4'>
              I’m a self-taught developer and I love to create smart contracts
              (and dapps) for multiple applications including DeFi and NFT. I
              also write blogs on gas-optimization and security vulnerabilities
              of smart contracts (
              <a
                href='https://dev.to/rushanksavant'
                target='_blank'
                rel='noreferrer'
              >
                <u className='text-pink-500 hover:text-pink-300'>dev</u>
              </a>
              ). Enjoy working with team and open to feedbacks. My daily goal is
              to be better than yesterday.
            </p>
          </div>
          <div className='lg:mx-auto mr-auto ml-2 flex-col'>
            <span className='text-2xl sm:text-4xl font-bold text-[#ccd6f6] border-b-[3px] border-pink-500'>
              What I can deliver?
            </span>
            <p className='text-[#8892b0] py-4 max-w-[700px] ml-2 mt-2 p-4'>
              <ul style={{ listStyleType: 'circle' }}>
                <li>Smart Contract development</li>
                <li>Testing smart contracts</li>
                <li>Frontend application with Smart contract(s) integration</li>
                <li>
                  Interacting with defi protocols like Compound, Uniswap, etc.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
