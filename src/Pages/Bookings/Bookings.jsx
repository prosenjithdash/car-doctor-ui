import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import { set } from "firebase/database";

const Bookings = () => {

    const { user } = useContext(AuthContext);

    const [booking, setBookings] = useState([])

    // handleDelete
    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete ?')
        if (proceed) {
            fetch(`http://localhost:8000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successful.')
                        const remaining = booking.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    // handleUpdate
    const handleUpdate = id => {
        fetch(`http://localhost:8000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        alert('Update successful.')
                        const remaining = booking.filter(booking => booking._id !== id)
                        const updated = booking.find(booking => booking._id === id)
                        updated.status = 'confirm'
                        const newBookings = [updated, ...remaining]
                        setBookings(newBookings)
                        
                    }
                })
    }

    const url = `http://localhost:8000/bookings?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
        })
    }, [url])
    return (
        <div className="max-w-[1240px] mx-auto my-[50px]">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                            booking.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleUpdate={handleUpdate}></BookingRow>)
                        }
                       
                    </tbody>
                    

                </table>
            </div>

        </div>
    );
};

export default Bookings;