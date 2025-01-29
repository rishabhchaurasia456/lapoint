import React, { useEffect, useState } from 'react'
import hosted_earth from "../../src/Images/ALENTEJO.jpg";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config/config';

const ActivityPage = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const fetchTeamMember = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_single_activitypage/${id}`);
                console.log("response", response.data);
                setActivity(response.data.ActivityPages);
            } catch (err) {
                console.error('Error fetching team member:', err);
            }
        };
        fetchTeamMember();
    }, [id]);

    console.log("activitypageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", activity)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="lifestyle_heading text-center my-5">
                        {activity?.activityName}
                    </h1>
                </div>

                <div className='row mt-5'>
                    {activity?.pagedata.map((data, index) => (
                        <>
                            {data.img_position === 'left' && (
                                <div className='col-md-6'>
                                    <div className='lifestyle_div'>
                                        <img src={`${config.API_BASE_URL}/${data.img}`} className='lifestyle w-75' alt="lifestyle" />
                                    </div>
                                </div>
                            )}
                            <div className='col-md-6'>
                                <div className="life_style_div">
                                    <div className="">
                                        <h1 className="lifestyle_heading ">
                                            {data.title}
                                        </h1>
                                    </div>
                                    <div className="">
                                        <h1 className="lifestyle_para">
                                            <p>{data.para}</p>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            {data.img_position === 'right' && (
                                <div className='col-md-6'>
                                    <div className='lifestyle_div'>
                                        <img src={`${config.API_BASE_URL}/${data.img}`} className='lifestyle w-75' alt="lifestyle" />
                                    </div>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ActivityPage;
