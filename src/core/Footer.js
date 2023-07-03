import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTelegram, faTwitter } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <>
            <div className='tokenomics-container px-[320px]  mt-2 pt-14 pb-14 '>
                <div>
                    {/* <FontAwesomeIcon icon={faTelegram} /> */}
                    {/* <FontAwesomeIcon icon={faTwitter} /> */}
                </div>
                <div className='text-center'>
                    <p>
                        $FINE ain't buddies with KC Green or his creation "This Is Fine." This token's just tipping the hat to a meme we all love and facepalm to.
                    </p>
                    <p className='mt-4'>
                        $FINE is a meme coin with zilch intrinsic value or expectation of financial return. No official team, no roadmap. The token's about as useful as a chocolate
                    </p>
                </div>
            </div>

        </>
    )
}

export default Footer