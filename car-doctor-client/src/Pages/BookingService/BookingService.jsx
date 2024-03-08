import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const BookingService = () => {

    const loadedService = useLoaderData();
    console.log(loadedService);
    const {title,_id,price,img} = loadedService;
    const {user} = useContext(AuthContext)

    const handleOrderService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phn = form.phn.value;
        const message = form.message.value;
        // const email = form.email.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price,
            phn,
            message
        }
        console.log(booking);
        // const price = form.price.value;
        // const message = form.message.value;

        fetch('http://localhost:4000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('booking successfully')
            }
        })
    }

    return (
        <div>
            <h2 className=" text-3xl text-center">Book Services: {title}</h2>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={handleOrderService}>
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" defaultValue={user?.displayName} name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Date</label>
                                        <input required type="date" id="date" name="date" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Phone</label>
                                        <input type="text" id="phn" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label className="leading-7 text-sm text-gray-600">Email</label>
                                        <input defaultValue={user?.email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label  className="leading-7 text-sm text-gray-600">Due Amount</label>
                                        <input type="text" id="" name="price" defaultValue={'$' + price} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label  className="leading-7 text-sm text-gray-600">Your Message</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    {/* <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                                    <input className="btn btn-primary w-full" type="submit" value="Order Confirm" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BookingService;