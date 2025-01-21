import React, { useEffect, useState } from 'react';
import config from '../../../config/config';
import axios from 'axios';

import hosted_earth from "../../../Images/earth.webp";
import hosted_at from "../../../Images/at.webp";

const Hosted = ({ hostedData, selectedLanguage }) => {
  const [memberDetails, setMemberDetails] = useState([]);
  console.log("memberDetails", memberDetails)

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        if (hostedData?.members?.length > 0) {
          console.log("hostedData", hostedData);
          const responses = await Promise.all(
            hostedData.members.map(async (id) => {
              const res = await axios.post(`${config.API_BASE_URL}/api/admin/get_single_myteam/${id}`);
              return res.data;
            })
          );
          setMemberDetails(responses); // Set fetched member details in state
          console.log("responses", responses);
        }
      } catch (error) {
        console.error("Error fetching member details:", error.message || error);
      }
    };
  
    fetchMemberDetails();
  }, [hostedData]);
  

  if (!memberDetails.length) {
    return <div>Loading member details...</div>;
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="row p-4">
          {memberDetails.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="hosted_card h-100 shadow text-center">
                <img src={`${config.API_BASE_URL}/${item.img}`} className="hosted_card_img" alt="card" width="100%" />
                <div className="hosted_card_body">
                  <p className="hosted_card_title">{item.name}</p>
                  <p>{item.position}</p>
                  <p className="hosted_card_year">{item.totalExp}</p>
                  <p>{item.shortIntro}</p>
                  <p className="hosted_card_last">
                    <span>
                      <img
                        className="me-2"
                        src={hosted_earth}
                        alt="icon"
                        style={{ maxWidth: '25px' }}
                      />
                    </span>
                    <span className="hosted_card_last">
                      <b>Top Destination</b>
                    </span>
                  </p>
                  <p className="hosted_card_last2">{item.destination}</p>
                  <p className="hosted_card_last">
                    <span>
                      <img
                        className="me-2"
                        src={hosted_at}
                        alt="icon"
                        style={{ maxWidth: '25px' }}
                      />
                    </span>
                    <span>
                      <b>Kite active</b>
                    </span>
                  </p>
                  <p className="hosted_card_last2">{item.kiteactiveExp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hosted;