import React from 'react';
import tifSticker1 from '../images/TIF-sticker1.png';
import tifSticker4 from '../images/TIF-sticker1.png';
import ellipse from '../images/Ellipse.png';
import arc from '../images/Arc.png';




const Tokenomics = () => {
  return (
    <>
      <div className='tokenomics-container  px-[320px] mt-2 pt-14 pb-14 '>
        {/* <div className='grid grid-cols-2'> */}
          {/* <div className='   pl-[320px]  '> */}
          <div className=' '>
            <div className='text-center'>
              <h2 className='font-black font-crafty text-[28px]'>Tokenomics</h2>
              <p className='mt-6 font-semibold'>Token Supply:</p>
              <p className='mt-2 bg-[#ffd17b] px-1 font-semibold inline-block'>420,690,000,000,000</p>
              <p className='mt-6 font-semibold'>No Taxes, No BS. Simple as that.</p>
              <p>93.1% of the tokens headed to the liquidity pool, LP tokens got torched, and contract got yeeted. The remaining 6.9% of the supply chillin' in a multi-sig wallet, just waiting to be used for future centralized exchange listings, bridges, and liquidity pools. Track this wallet easily with the ENS name “finecexwallet.eth”</p>
            </div>
            <div className='grid grid-cols-3 place-items-center '>
              <div>
                <img src={tifSticker1} className='w-[200px]' alt="" />
              </div>
              <div>
                <img src={ellipse} className='w-[200px]' alt="" />
              </div>
              <div className='w-[100px]'>
                <ul>
                  <li>CEX Listings 6.9 %</li>
                  <li>Liquidity Pool 93.1 %</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div>
            <img src={tifSticker4} className='w-[200px]' alt="" />
          </div> */}
        {/* </div> */}
      </div>
    </>
  )
}



export default Tokenomics