import React from 'react';

const AmryTournament = (props) => {
    return(
        <div className="mx-4 md:mx-10 my-12 mt-0">
            <div className="container max-w-screen-lg m-auto">
                <div className="grid gird-cols-1 md:grid-cols-4 mb-12 md:mb-24 ">
                    <div className="m-auto h-full col-span-2 pt-4 w-full">
                        <div className="mx-4 md:mx-10">
                            <div className="rounded-lg border-4 lg:border-8 overflow-hidden h-full border-blue2 p-0 mt-12 md:mt-16 flex justify-center items-end home-card-dragon bg-center bg-no-repeat bg-cover bg-amry">
                                <div className="text-white text-center py-6 md:py-8 w-full px-4 bg-blur-black">
                                    <h3 className="text-xl text-white  md:text-3xl font-bold">Army</h3>
                                    <div className="mt-1.5" style={{minHeight: '48px'}}>Own your dragons with many different skills based on their genes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-auto h-full col-span-2 pt-4 w-full">
                        <div className="mx-4 md:mx-10">
                            <div className="rounded-lg border-4 lg:border-8 overflow-hidden h-full border-blue2 p-0 mt-12 md:mt-16 flex justify-center items-end home-card-dragon bg-center bg-no-repeat bg-cover bg-tournament">
                                <div className="text-white text-center py-6 md:py-8 w-full px-4 bg-blur-black">
                                    <h3 className="text-xl text-white md:text-3xl font-bold">Tournament</h3>
                                    <div className="mt-1.5" style={{minHeight: '48px'}}>
                                        <p>PvP battle to earn real <br/> money rewards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AmryTournament;