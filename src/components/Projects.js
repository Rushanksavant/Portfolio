import NFT_marketplace from './Projects/nftMarketplcae/ProjectCard';
import DappNet from './Projects/DappNet/ProjectCard';
import Go_GetterETH from './Projects/goGetterETH/ProjectCard';
// import ArbitrageBot from "./Projects/arbitrageBot/ProjectCard"
import BridginhChains from './Projects/bridgingChains/ProjectCard';

export default function Projects() {
  return (
    <div
      name='projects'
      className='w-full h-screen overflow-y-auto bg-black border-b-[1px] border-gray-700'
    >
      <div className='flex flex-col text-white pt-[70px] lg:pl-[150px] pr-[50px]'>
        <span className='text-3xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] ml-2 mb-[50px] border-b-[3px] md:border-b-[5px] border-pink-500'>
          Projects
        </span>
        <div className='grid md:grid-cols-3 grid-cols-2 lg:gap-[50px] mx-auto'>
          <BridginhChains />
          <DappNet />
          <Go_GetterETH />
          <NFT_marketplace />
        </div>
      </div>

      {/* <div className='flex flex-col text-white pt-[70px] lg:pl-[150px] pr-[50px]'>
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] ml-2 mb-[50px] border-b-[3px] md:border-b-[5px] border-pink-500">
                    Ongoing</span>
                <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-[50px] mx-auto">
                    <ArbitrageBot />
                </div>
            </div> */}
    </div>
  );
}
