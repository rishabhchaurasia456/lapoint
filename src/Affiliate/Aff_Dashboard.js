// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Table } from 'react-bootstrap'
// import config from '../config/config'

// const Aff_Dashboard = () => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         fetchAffiliateBooking();
//     }, []);

//     const fetchAffiliateBooking = async () => {
//         try {
//             const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/getall_affiliate_sale`);
//             if (response.data) {
//                 setData(response.data);
//                 console.log(response.data)
//             }
//         } catch (error) {
//             console.error('Error fetching affiliate data:', error);
//             alert('Failed to fetch affiliate data.');
//         }
//     };
//     return (
//         <div>
//             <div class="container mt-5">
//                 <div class="row">
//                     <Table className='table-striped'>
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Status</th>
//                                 <th>Balance</th>
//                                 <th>Earnings</th>
//                                 <th>First Name</th>
//                                 <th>Last Name</th>
//                                 <th>Email</th>
//                                 <th>Company</th>
//                                 <th>Website</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>1</td>
//                                 <td>Active</td>
//                                 <td>0.00</td>
//                                 <td>0.00</td>
//                                 <td>RoderickP</td>
//                                 <td>PijlsR</td>
//                                 <td>Batmanroderick@hotmail.com</td>
//                                 <td>Eoderick</td>
//                                 <td>www.eoderick.com</td>
//                             </tr>
//                         </tbody>
//                     </Table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Aff_Dashboard




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import config from '../config/config';

const Aff_Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAffiliateBooking();
    }, []);

    const fetchAffiliateBooking = async () => {
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/affiliate/getall_affiliate_sale`);
            if (response.data) {
                setData(response.data);
                console.log(response.data);
            }
        } catch (error) {
            console.error('Error fetching affiliate data:', error);
            alert('Failed to fetch affiliate data.');
        }
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <Table className="table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Balance</th>
                                <th>Earnings</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Company</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Loop through the data array and create a row for each affiliate sale */}
                            {data.map((item) => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.totalPrice}</td>
                                    <td>{item.totalPrice}</td> {/* Assuming Earnings and Balance are same for now */}
                                    <td>{item.affiliateId.first_name}</td>
                                    <td>{item.affiliateId.last_name}</td>
                                    <td>{item.affiliateId.email}</td>
                                    <td>{item.affiliateId.company}</td>
                                    <td>{item.affiliateId.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Aff_Dashboard;
