import React from 'react';
import { Card } from "../components/Card";
import tifSticker3 from '../images/TIF-sticker3.png';
import fieryCliff from '../images/Vektor-Smartobjekt-roadmap.png';




const Roadmap = () => {
    return (
        <>
            <div className='roadmap-container  mt-2 pt-14 pb-14 '>
                <div className='flex'>
                    <div>
                        <img src={fieryCliff} className='w-[200px] mt-[300px] ' alt="" />
                    </div>
                    <div className='w-[80%] px-[150px]'>
                        <div className=''>
                            <h2 className='font-black font-crafty text-[28px] text-center'>Roadmap</h2>
                            <p className=' max-w-[350px] mt-4 mx-auto text-center '>We ain't spilling all the beans for $FINE yet, but expect a chuckle or two along the way </p>
                        </div>
                        <div className='mt-10 grid grid-cols-3 gap-x-4 text-[13px]'>
                            <Card backgroundColor="#f7c315">
                                <h3 className='font-black font-crafty text-[16px]'>Phase 1</h3>
                                <h4 className='bg-[#e76351] text-[#ffffff] inline-block px-1 mt-1 text-[14px]'>Meme Making</h4>
                                <ul className='list-disc mt-4 pl-[5px]'>
                                    <li>Launch</li>
                                    <li>CoinGecko/Coin-Market-Cap Listings</li>
                                    <li>1,000+ Holders</li>
                                    <li>Get #FINE trending on Twitter with our memetastic prowess</li>
                                </ul>
                            </Card>
                            <Card backgroundColor="#f7e733">
                                <h3 className='font-black font-crafty text-[16px]'>Phase 2</h3>
                                <h4 className='bg-[#e76351] text-[#ffffff] inline-block px-1 mt-1 text-[14px]'>Chillax and HODL</h4>
                                <ul className='list-disc mt-4 pl-[5px]'>
                                    <li>Community Chill Sessions</li>
                                    <li>"This Is Fine" Times digital newsletter</li>
                                    <li>Formation of our token-gated Discord crib, "This Is Fine" Fortress, for holders</li>
                                    <li>CEX Listings, 10,000+ holders</li>
                                </ul></Card>
                            <Card backgroundColor="#dbdb4d">
                                <h3 className='font-black font-crafty text-[16px]'>Phase 4</h3>
                                <h4 className='bg-[#e76351] text-[#ffffff] inline-block px-1 mt-1 text-[13.5px]'>Meme World Domination</h4>
                                <ul className='list-disc mt-4 pl-[5px]'>
                                    <li> "This Is Fine" Merch</li>
                                    <li>"This Is Fine" Academy</li>
                                    <li>"This Is Fine" Tools</li>
                                    <li>T1 Exchange Listings, 100,000+ holders</li>
                                    <li>Meme Domination</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                    <div className=''>
                        <img src={tifSticker3} className='w-[200px] mt-[300px] ' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Roadmap;