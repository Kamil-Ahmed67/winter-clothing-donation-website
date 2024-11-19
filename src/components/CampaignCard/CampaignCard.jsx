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
        <div className="card bg-base-100 w-full">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="object-cover h-52 w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{title}</h2>
                <p className="text-gray-700 text-sm">{description}</p>
                <div className="flex justify-between items-center mt-2">
                    <span
                        className={`badge p-3 ${status === 'Active' ? 'badge-success' :
                                status === 'Upcoming' ? 'badge-warning' :
                                status === 'Ongoing' ? 'badge-info' :
                                status === 'Completed' ? 'badge-secondary' :
                                'badge-error'
                            }`}
                    >
                        {status}
                    </span>
                    <span className="text-sm text-gray-500">Division: {division}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Contact: {contactInfo}</p>
                <div className="card-actions justify-start mt-4">
                    <button className="btn btn-primary">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
