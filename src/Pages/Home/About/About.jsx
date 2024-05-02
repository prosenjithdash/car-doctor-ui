import about1 from '../../../../src/assets/images/about_us/person.jpg'
import about2 from '../../../../src/assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content  lg:flex-row flex-col-reverse mb-[100px]">
                <div className='lg:w-1/2 relative'>
                    <img src={about1} className="lg:max-w-[460px] max-w-[340px] h-[273px] lg:h-[473px] rounded-lg " />
                    <img src={about2} className="lg:max-w-[327px] max-w-[280px] lg:h-[332px] rounded-lg  absolute lg:right-[60px] lg:top-[220px] right-[30px] top-[180px] border-[10px] border-white " />
                </div>
                <div className='lg:w-1/2'>
                    <h4 className='text-[#FF3811] text-[20px] mb-[20px] font-bold'>About Us</h4>

                    <h1 className="text-5xl font-bold text-[45px] mb-[30px]">We are qualified <br /> & of experience <br /> in this field</h1>

                    <p className='mb-[20px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    
                    <p className='mb-[30px] text-[#737373]'>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                    <button className='bg-[#FF3811] border-0 lg:py-[15px] lg:px-[22px]  py-[5px] px-[4px] border-white rounded-[5px] text-white text-[12px] font-bold'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;