import React, { useState } from 'react';

const RevenueTracking = () => {
    const [revenue, setRevenue] = useState([
        { month: 'January', membershipRevenue: 5000, trainingRevenue: 2000 },
        { month: 'February', membershipRevenue: 5200, trainingRevenue: 2100 },
        { month: 'March', membershipRevenue: 5400, trainingRevenue: 2300 },
    ]);

    return (
        <div>
            <h2>Revenue Tracking</h2>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Membership Revenue ($)</th>
                        <th>Training Revenue ($)</th>
                        <th>Total Revenue ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {revenue.map((data, index) => (
                        <tr key={index}>
                            <td>{data.month}</td>
                            <td>{data.membershipRevenue}</td>
                            <td>{data.trainingRevenue}</td>
                            <td>{data.membershipRevenue + data.trainingRevenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RevenueTracking;