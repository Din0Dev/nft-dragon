import React from 'react';

const DragonToken = (props) => {
    return(
        <div className="container max-w-screen-xl m-auto mb-5 px-4">
            <div className="bg-blue3 rounded-lg overflow-hidden">
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-10">
                    <div className="col-span-4 px-2 md:px-6 py-4 md:py-8 text-white flex flex-col justify-center">
                        <p>Dragon War is a decentralized blockchain game with Play-To-Earn concept. You can earn DRAGON Stones tokens by playing game then use them to swap or continue playing.</p>
                        <div className="flex justify-center sm:justify-start">
                            <button className="flex items-center justify-center border-white text-white font-bold border-2 rounded-3xl py-1.5 px-6 sm:py-2 sm:px-7 mt-3 sm:mt-7 btn-blue">Get DRAGON Token</button>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <img src="/img/home-slider-1.png" className="w-full h-full round-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DragonToken;