import React from 'react';
import vektorSmartobjektHome from '../images/Vektor-Smartobjekt-home.png';


const Home = () => {
    return (
        <>
            <div className='home-container h-[570px] px-[320px] mx-auto pt-14 '>
                <div className='flex  '>
                    <div className='  '>
                        <h1 className='mt-24 font-black text-4xl font-crafty'>
                            The finest meme-token ever minted.
                        </h1>
                        <p>
                            Doges had their walkies, now it's This Is Fine's time to strut.
                        </p>
                    </div>
                    <div className=''>
                        <img src={vektorSmartobjektHome} className='w-[800px] h-[450px] ' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;