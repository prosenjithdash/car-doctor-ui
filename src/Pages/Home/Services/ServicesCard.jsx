
const ServicesCard = ({ service }) => {

    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border border-gray-200">
            <figure className="px-10 pt-10">
                <img className="w-[314px] h-[208px]" src={img} />
            </figure>

            <div className="card-body ">

                <h2 className="text-black text-[25px] font-bold">{title}</h2>
               
                <div className="flex justify-between text-[#FF3811] font-semibold text-[20px] items-center">
                    <h2>Price : ${price}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

            </div>
            <div>
                
            </div>

        </div>
    );
};

export default ServicesCard;