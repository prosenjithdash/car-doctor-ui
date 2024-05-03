import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
    const { user } = useContext(AuthContext);

    const service = useLoaderData();
    console.log(service)
    const { _id, title, price ,img} = service;
    
    const handleService = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = user.email;
        const date = form.date.value;
        
        console.log(name, email, date)
        
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price
        }
        console.log(booking)

        // post booking api ui side
        fetch('http://localhost:8000/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Booking added successfully.')

                }
        })

    }
    return (
        <div className="max-w-[1240px] mx-auto ">
            <h2>Service : {title}</h2>
            
            <div className="hero min-h-[500px] rounded-lg my-[50px] bg-base-200 max-w-[1100px] mx-auto ">
                <div className="card shrink-0 w-full max-w-[1000px]  bg-base-100">
                    <form onSubmit={handleService} className="card-body w-full">
                        <div className="flex gap-5 w-full ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" defaultValue={user.displayName} className="input input-bordered w-full " required />

                            </div>
                            <div className="form-control  w-full">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" placeholder="Date" className="input input-bordered  w-full" required />

                            </div>
                        </div>
                        <div className="flex gap-5 w-full ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" defaultValue={user.email} className="input input-bordered w-full" required />
ea
                            </div>
                            <div className="form-control  w-full">
                                <label className="label">
                                    <span className="label-text">Due Payment</span>
                                </label>
                                <input type="text" defaultValue={'$' + price} placeholder="Due Payment" name="due" className="input input-bordered   w-full" required />

                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811]">Check Out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;