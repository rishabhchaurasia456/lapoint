import React from 'react'
import { Table } from 'react-bootstrap'

const Aff_Dashboard = () => {
    return (
        <div>
            <div class="container mt-5">
                <div class="row">
                    <Table className='table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Status</th>
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
                            <tr>
                                <td>1</td>
                                <td>Active</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>RoderickP</td>
                                <td>PijlsR</td>
                                <td>Batmanroderick@hotmail.com</td>
                                <td>Eoderick</td>
                                <td>www.eoderick.com</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Aff_Dashboard