import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../components/CampaignCard/CampaignCard';

const Campaigns = () => {
    const donations=useLoaderData();
    console.log(donations)
    return (
        <div className='w-11/12 mx-auto'>
            campaigns
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    donations.map(donation=><CampaignCard key={donation.id} donation={donation}></CampaignCard>)
                }
            </div>
    
        </div>
    );
};

export default Campaigns;