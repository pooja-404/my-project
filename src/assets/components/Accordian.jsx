import React from 'react'

function Accordian() {
    return (
        <div className='position-relative z-1 '>
            <div className='my-container'>
                <div className='d-flex justify-content-center mt-5'>
                    <p className='text-white ff-poppins lh-136 mt-5 pb-3 text-white pt-5  fw-semibold fs-xl'>FAQs</p>
                </div>
                <div class="accordion margin-x-auto " id="accordionExample">
                    <div data-aos="fade-right" class="accordion-item mb-3">
                        <h2 class="accordion-header"><button class="accordion-button text-white ff-Montserrat fw-medium fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> What’s the blockchain the buddybullies call home ? </button></h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body fs-xs ff-Montserrat op-7 fw-medium text-white mw-818"> Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="accordion-item mb-3">
                        <h2 class="accordion-header"><button class="accordion-button collapsed text-white ff-Montserrat fw-medium fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What’s the blockchain the buddybullies call home ?</button></h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body fs-xs ff-montserrat op-7 fw-medium text-white mw-818">Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                    <div data-aos="fade-right" class="accordion-item mb-3">
                        <h2 class="accordion-header"><button class="accordion-button collapsed text-white ff-Montserrat fw-medium fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What’s the blockchain the buddybullies call home ? </button></h2>
                        <div id="collapseThree" class="accordion-collapse collapse fs-lg fw-medium ff-monterset text-white" data-bs-parent="#accordionExample">
                            <div class="accordion-body fs-xs ff-Montserrat op-7 fw-medium text-white mw-818">Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                    <div data-aos="fade-left" class="accordion-item mb-3">
                        <h2 class="accordion-header"><button class="accordion-button collapsed text-white ff-Montserrat fw-medium fs-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What’s the blockchain the buddybullies call home ?</button></h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body fs-xs  ff-Montserrat op-7 fw-medium text-white mw-818">Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blue-ellipse2'></div>
        </div>

    )
}

export default Accordian
