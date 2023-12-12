import React from 'react'
import Prime from '../images/prime.png'
import bulli from '../images/bulli.png'
import meta from '../images/meta.png'

function Section6() {
    return (
        <div>
            <div className='custom-container mt-5 '>
                <h2 className='ff-poppins fs-xl fw-semibold lh-136 text-white text-center pt-5  pb-3'>Our Team</h2>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-md-6 col-12 text-center pt-5 pt-lg-0'>
                        <img className='w_100' src={Prime} alt="prime" />
                        <p className='fs-2lg lh-136 ff-poppins fw-semibold text-white text-center pt-4'>Prime Bullister</p>
                        <p className='fs-s fw-normal ff-poppins lh-136 text-white text-center'>Pruduct Designer</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 text-center pt-5 pt-lg-0'>
                        <img className='w_100' src={bulli} alt="bulli" />
                        <p className='fs-2lg lh-136 ff-poppins fw-semibold text-white text-center pt-4'>Solvador Bulli</p>
                        <p className='fs-s fw-normal ff-poppins lh-136 text-white text-center'>Artist</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 text-center pt-5 pt-lg-0'>
                        <img className='w_100' src={meta} alt="meta" />
                        <p className='fs-2lg lh-136 ff-poppins fw-semibold text-white text-center pt-4'>Meta Bully</p>
                        <p className='fs-s fw-normal ff-poppins lh-136 text-white text-center'>Developer</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section6
