import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    const { donationId } = useParams();
    const donationData = useLoaderData();
    const [donation, setDonation] = useState({});
    useEffect(() => {
        const singleDonationData = donationData.find(item => item.id == donationId);
        setDonation(singleDonationData);
    }, [donationData, donationId]);
    const { title, image, description, contactInfo, division } = donation;
    return (
        <div>
            <div className=" card bg-base-100 rounded-lg">
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
                        {/* <Link to={`/donation/${id}`} className="btn bg-[#3d84a8] text-gray-50 ">Donate Now</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;