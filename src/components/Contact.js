export default function Contact() {
    return (
        <div name='contact' className='w-full h-screen overflow-y-auto bg-neutral-900 border-b-[1px] border-neutral-600'>
            <div className='flex flex-col text-white pt-[75px] lg:pl-[150px] pr-[50px]'>
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] ml-2 mb-[50px] border-b-[3px] md:border-b-[5px] border-pink-500">
                    Contact</span>

                <form method="POST" action="https://getform.io/f/3f67c5fd-3d21-4172-a519-bef0e8ef9ebc" className="flex flex-col w-2/3 mx-auto">
                    <input className="mb-3 bg-neutral-700 p-3 text-[#ccd6f6] rounded-md" type="text" placeholder='Name' name='name' required />
                    <input className="mb-3 bg-neutral-700 p-3 text-[#ccd6f6] rounded-md" type="email" placeholder='Email' name='email' required />
                    <textarea className="mb-3 bg-neutral-700 p-3 text-[#ccd6f6] rounded-md" name="message" rows="10" placeholder='Message' required />
                    {/* <button className="bg-[#8892b0] w-1/5 mt-3 rounded-md hover:border-pink-800 border-4 border-[#8892b0] text-[#ccd6f6] p-2 font-bold md:text-lg text-sm hover:bg-pink-500 hover:">
                        Submit</button> */}
                    <button className="bg-zinc-700 xl:w-[150px] xl:text-xl xl:py-3 lg:w-[120px] lg:text-lg lg:py-2 md:w-[100px] md:text-md md:py-2 w-[80px] text-md py-1 mt-3 rounded-md hover:border-pink-800 border-4 border-[#8892b0] hover:bg-pink-500 font-semibold">
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}