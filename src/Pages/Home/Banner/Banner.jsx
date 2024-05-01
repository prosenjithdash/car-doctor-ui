import banner1 from'../../../../src/assets/images/banner/1.jpg'
import banner2 from '../../../../src/assets/images/banner/2.jpg'
import banner3 from '../../../../src/assets/images/banner/3.jpg'
import banner4 from '../../../../src/assets/images/banner/4.jpg'
import banner5 from '../../../../src/assets/images/banner/5.jpg'
import banner6 from '../../../../src/assets/images/banner/6.jpg'



const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[600px] h-[300px] mt-[50px] rounded-[10px]">

            {/* Banner - 01 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner5} className="w-full" />

                <div className="absolute flex items-center h-full  justify-start  left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='lg:pl-[100px] pl-[20px] lg:space-y-[20px] space-y-[10px] lg:w-[522px] w-[226px]'>
                        <h2 className='lg:text-[60px] text-[30px]  text-white font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='lg:text-[18px] text-[10px] text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:gap-[20px] gap-[10px]'>
                            <button className='bg-[#FF3811] border-0 lg:py-[15px] lg:px-[22px]  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Discover More</button>

                            <button className='hover:bg-[#FF3811]  lg:py-[15px] lg:px-[22px] border-2  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-[20px] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide2" className="btn btn-circle border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

            {/* Banner - 02 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex items-center h-full  justify-start  left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='lg:pl-[100px] pl-[20px] lg:space-y-[20px] space-y-[10px] lg:w-[522px] w-[226px]'>
                        <h2 className='lg:text-[60px] text-[30px]  text-white font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='lg:text-[18px] text-[10px] text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:gap-[20px] gap-[10px]'>
                            <button className='bg-[#FF3811] border-0 lg:py-[15px] lg:px-[22px]  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Discover More</button>

                            <button className='hover:bg-[#FF3811]  lg:py-[15px] lg:px-[22px] border-2  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-[20px] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide3" className="btn btn-circle border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

            {/* Banner - 03 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />

                <div className="absolute flex items-center h-full  justify-start  left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='lg:pl-[100px] pl-[20px] lg:space-y-[20px] space-y-[10px] lg:w-[522px] w-[226px]'>
                        <h2 className='lg:text-[60px] text-[30px]  text-white font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='lg:text-[18px] text-[10px] text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:gap-[20px] gap-[10px]'>
                            <button className='bg-[#FF3811] border-0 lg:py-[15px] lg:px-[22px]  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Discover More</button>

                            <button className='hover:bg-[#FF3811]  lg:py-[15px] lg:px-[22px] border-2  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Latest Project </button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-[20px] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide4" className="btn btn-circle border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

            {/* Banner - 04 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />

                <div className="absolute flex items-center h-full  justify-start  left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='lg:pl-[100px] pl-[20px] lg:space-y-[20px] space-y-[10px] lg:w-[522px] w-[226px]'>
                        <h2 className='lg:text-[60px] text-[30px]  text-white font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='lg:text-[18px] text-[10px] text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:gap-[20px] gap-[10px]'>
                            <button className='bg-[#FF3811] border-0 lg:py-[15px] lg:px-[22px]  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Discover More</button>

                            <button className='hover:bg-[#FF3811]  lg:py-[15px] lg:px-[22px] border-2  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Latest Project </button>
                        </div>
                    </div>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-[20px] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide5" className="btn btn-circle border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

            {/* Banner - 05 */}
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />

                <div className="absolute flex items-center h-full  justify-start  left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='lg:pl-[100px] pl-[20px] lg:space-y-[20px] space-y-[10px] lg:w-[522px] w-[226px]'>
                        <h2 className='lg:text-[60px] text-[30px]  text-white font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='lg:text-[18px] text-[10px] text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:gap-[20px] gap-[10px]'>
                            <button className='bg-[#FF3811] border-0 lg:py-[15px] lg:px-[22px]  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Discover More</button>

                            <button className='hover:bg-[#FF3811]  lg:py-[15px] lg:px-[22px] border-2  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Latest Project </button>
                        </div>
                    </div>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-[20px] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide6" className="btn btn-circle border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

            {/* Banner - 06 */}
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full" />

                <div className="absolute flex items-center h-full  justify-start  left-0  bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='lg:pl-[100px] pl-[20px] lg:space-y-[20px] space-y-[10px] lg:w-[522px] w-[226px]'>
                        <h2 className='lg:text-[60px] text-[30px]  text-white font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='lg:text-[18px] text-[10px] text-gray-300'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex lg:gap-[20px] gap-[10px]'>
                            <button className='bg-[#FF3811] border-0 lg:py-[15px] lg:px-[22px]  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Discover More</button>

                            <button className='hover:bg-[#FF3811]  lg:py-[15px] lg:px-[22px] border-2  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Latest Project </button>
                        </div>
                    </div>
                </div>


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-[20px] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide1" className="btn btn-circle border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;