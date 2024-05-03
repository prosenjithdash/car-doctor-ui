import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {

    const { user } = useContext(AuthContext);

    const [booking, setBookings] = useState([])

    const url = `http://localhost:8000/bookings?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div className="max-w-[1240px] mx-auto">
            <h2>bookings page</h2>

        </div>
    );
};

export default Bookings;