import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div className="">

            <div className=" text-center">
                <h2 className="text-[#FF3811] text-[20px] mb-[10px] font-semibold">Service</h2>
                <h2 className="text-black text-[45px] font-bold mb-[10px]">Our Service Area</h2>
                <p className="text-[#737373] mb-[50px]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[50px]">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>

            <div className="mb-[130px] text-center">
                <button className="text-[#FF3811] border border-[#FF3811] rounded-[5px] py-[17px] px-[22px] text-[18px] hover:bg-[#FF3811] hover:text-white">More Services</button>
            </div>

        </div>
    );
};

export default Services;