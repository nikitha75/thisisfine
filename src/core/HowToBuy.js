import React from 'react';
import tifSticker2 from '../images/TIF-sticker2.png';
import cliff from '../images/Vektor-Smartobjekt-howtobuy.png';


const HowToBuy = () => {
    return (
        <>
            <div className='howtobuy-container  mt-20 mb-20 bg-[#cfb9a7] pb-14 '>
                <div className='flex  w-[80%] mx-auto   '>
                    <div className=' '>
                        <img src={tifSticker2} className='w-[200px]' alt="" />
                    </div>
                    <div className='w-[625px]'>
                        <h2 className='pt-14 font-crafty font-black text-[28px] text-center'>How To Buy</h2>
                        <div className='mt-10 grid gap-y-6'>
                            <div className=''>
                                <h4 className='font-semibold'>Bag a Wallet</h4>
                                <p className='mt-2'>Grab Metamask or another wallet that tickles your fancy from the app store or Google Play store for the grand price of zip, zilch, nada. Desktop peeps, nab the Google Chrome extension by heading to metamask.io.</p>
                            </div>
                            <div>
                                <h4 className='font-semibold'>Stock Up on ETH</h4>
                                <p className='mt-2'>You'll need some ETH to swap for $FINE. No ETH, no problem! Buy direct on Metamask, transfer from a different wallet, or grab some on an exchange and forward it to your wallet.</p>
                            </div>
                            <div>
                                <h4 className='font-semibold'>Head to Uniswap</h4>
                                <p className='mt-2'>Time to make friends with Uniswap. Visit app.uniswap.org in Google Chrome or inside your Metamask app's browser. Pair up your wallet. Paste the $FINE token address into Uniswap, select "This Is Fine", and give it the nod. When Metamask asks for a wallet autograph, scribble away.</p>
                            </div>
                            <div>
                                <h4 className='font-semibold'>Swap ETH for $FINE</h4>
                                <p className='mt-2'>Swap your ETH for $FINE. We got ZERO taxes, so no need to stress over specific slippage, though market shenanigans might need some slippage adjustment.</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img src={cliff} className='w-[200px] mt-[350px]' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowToBuy