import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import formImg from "../assets/donate-form.jpg"
import Footer from "../components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
const DonationDetails = () => {
    const { donationId } = useParams();
    const donationData = useLoaderData();
    const [donation, setDonation] = useState({});
    useEffect(() => {
        const singleDonationData = donationData.find(item => item.id == donationId);
        setDonation(singleDonationData);
    }, [donationData, donationId]);
    const { title, image, description, contactInfo, division } = donation;
    //FORM DATA
    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        additionalNotes: "",
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.");
        setFormData({ quantity: "", itemType: "", pickupLocation: "", additionalNotes: "" });
    };
    return (
        <div>
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <div className="flex flex-col">
                {/* Donation Details */}
                <div className="w-full">
                    <div>
                        <figure className="relative">
                            <img
                                src={image}
                                alt={title}
                                className="object-cover h-52 lg:h-72 w-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                        </figure>
                        <div className="card-body">
                            <h2 className="text-gray-800 text-3xl lg:text-6xl font-bold">{title}</h2>
                            <p className="text-gray-700 text-lg lg:text-xl mt-2 ">{description}</p>
                            <div className="flex gap-2 items-center mt-2">
                                <h2 className="text-xl lg:text-2xl text-gray-900 font-semibold">Division:</h2><span className="text-xl lg:text-2xl text-gray-600"> {division}</span>
                            </div>
                            <div className="flex gap-2 items-center mt-2">
                                <h2 className="text-lg lg:text-xl text-gray-900 font-semibold">Contact:</h2><span className="text-lg lg:text-xl text-gray-600">{contactInfo}</span>
                            </div>
                            <div className="card-actions justify-start mt-2">
                            </div>
                        </div>
                    </div>
                </div>
                {/* Donation Form */}
                <div>
                    <h3 className="text-center text-4xl text-gray-800 font-semibold lg:font-bold mb-6">Donation Form</h3>
                    <div className="card lg:card-side bg-[#eff0f7]  shadow-xl max-w-4xl mx-auto">
                        <figure className="w-full lg:w-2/4">
                            <img
                                src={formImg}
                                alt="Donation"
                                className="object-cover w-full h-full"
                            />
                        </figure>
                        <div className="card-body lg:w-1/2 flex justify-center items-center">
                            <form onSubmit={handleSubmit} className="space-y-6 w-full px-6">
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    required
                                    placeholder="Quantity (e.g., 2)"
                                    className="w-full border-2 border-gray-200 px-3 py-2 rounded-xl"
                                />
                                <select
                                    name="itemType"
                                    value={formData.itemType}
                                    onChange={handleChange}
                                    required
                                    className="w-full border-2 border-gray-200 px-3 py-2 rounded-xl"
                                >
                                    <option value="">Select Item Type</option>
                                    <option value="Blanket">Blanket</option>
                                    <option value="Jacket">Jacket</option>
                                    <option value="Sweater">Sweater</option>
                                </select>
                                <input
                                    type="text"
                                    name="pickupLocation"
                                    value={formData.pickupLocation}
                                    onChange={handleChange}
                                    required
                                    placeholder="Pickup Location"
                                    className="w-full border-2 border-gray-200 px-3 py-2 rounded-xl"
                                />
                                <textarea
                                    name="additionalNotes"
                                    value={formData.additionalNotes}
                                    onChange={handleChange}
                                    placeholder="Additional Notes (Optional)"
                                    className="w-full border-2 border-gray-200 px-3 py-2 rounded-xl"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <footer className="mt-40">
                <Footer></Footer>
            </footer>
            <ToastContainer position="top-center"  />
        </div>
    );
};

export default DonationDetails;