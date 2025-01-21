
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../../config/config';

const Kitemember = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);

    useEffect(() => {
        const fetchTeamMember = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_single_myteam/${id}`);
                console.log("response", response.data);
                setMember(response.data);
            } catch (err) {
                console.error('Error fetching team member:', err);
            }
        };
        fetchTeamMember();
    }, [id]);

    if (!member) {
        return <div>Loading...</div>; // Loading state while data is being fetched
    }

    return (
        <div>


            <div>
                {/* banner img  */}
                <div className="team_banner page_cont" style={{backgroundImage: `url(${config.API_BASE_URL}/${member.img}`,}}>
                    <div className="overlay"></div>
                    <div className="content">
                        <h2 className="lifestyle_heading fs-1 fw-bold">
                            {/* Roderickje Pijls */}
                            {member.name}   

                        </h2>
                    </div>
                </div>

                {/* main container  */}

                <div className='container-fluid mt-3 pt-3'>
                    <div className='row mt-5' >
                        <div className='col-md-6'>
                            {/* <div className='lifestyle_div text-center'>
                                <img src={roadrickesimg} className='lifestyle w-100' alt="lifestyle" />
                            </div> */}
                            {member.img && (
                                <img
                                    src={`${config.API_BASE_URL}/${member.img}`}
                                    className='lifestyle w-100'
                                    alt={member.name}
                                />
                            )}
                        </div>

                        <div className='col-md-6'>
                            <div className="life_style_div">
                                <div className="">
                                    <h2 className="lifestyle_heading fs-1">
                                        {/* Roderickje Pijls */}
                                        {member.name}
                                    </h2>
                                </div>
                                <div className="">
                                    <p className='lifestyle_text'>
                                        '{member.nickname}'
                                    </p>
                                </div>
                                <div className="">
                                    <h1 className="lifestyle_para">
                                        <p>
                                            {/* Having a background of professional kitesurfer for over 12 years has taught me a lot. Seeing many cultures, meeting great people and knowing everything from the best spots in the world has convinced me to start sharing this with everyone who has that little 'Columbus' inside him/ herself. */}
                                            {member.fullIntro}
                                        </p>
                                    </h1>
                                </div>
                                <div className="">
                                    <div className="lifestyle_text m-0 p-0">
                                        <div className="text_span">
                                            Overview
                                        </div>
                                    </div>
                                    <p className='lifestyle_para'>
                                        <div>
                                            <ul className='px-0 fs-5'>
                                                <li className='list-group-item mb-3'><strong>Nickname:</strong> {member.nickname}</li>
                                                <li className='list-group-item mb-3'><strong>Date of birth: </strong> {member.dob}</li>
                                                <li className='list-group-item mb-3'><strong>Home spot:</strong> {member.homeSpot}</li>
                                                <li className='list-group-item mb-3'><strong>Kite since: </strong> {member.kiteSince}</li>
                                                <li className='list-group-item mb-3'><strong>Teaching since:</strong>  {member.teachingSince}</li>
                                                <li className='list-group-item mb-3'><strong>Favorite trick:</strong>  {member.favoriteTrick}</li>
                                                <li className='list-group-item mb-3'><strong>Favorite discipline:</strong> {member.favoritediscip}</li>
                                            </ul>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Kitemember
