const CampaignCard = ({ donation }) => {
    const {
        title,
        image,
        description,
        status,
        contactInfo,
        division
    } = donation;

    return (
        <div data-aos="zoom-in" className="hover:scale-105 ease-in-out duration-1000 card bg-base-100 rounded-lg w-full mt-10">
            <figure className="relative">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover h-52 w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </figure>
            <div className="card-body">
                <h2 data-aos="fade-right" className="card-title text-gray-800 text-lg font-bold">{title}</h2>
                <p className="text-gray-700 text-sm">{description}</p>
                <div className="flex justify-between items-center mt-2">
                    <span
                        className={`badge p-3 ${status === 'Active' ? 'bg-green-500/35 border-2 border-green-500' :
                            status === 'Upcoming' ? 'bg-yellow-500/35 border-2 border-yellow-500' :
                                status === 'Ongoing' ? 'bg-blue-500/35 border-2 border-blue-500' :
                                    status === 'Completed' ? 'bg-pink-500/35 border-2 border-pink-500' :
                                        'badge-error'
                            }`}
                    >
                        {status}
                    </span>
                    <span className="text-sm text-gray-500">Division: {division}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Contact: {contactInfo}</p>
                <div className="card-actions justify-start mt-2">
                    <button className="btn bg-[#3d84a8] text-gray-50 ">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
