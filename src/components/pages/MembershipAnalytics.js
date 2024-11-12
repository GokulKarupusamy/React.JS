import React, { useState } from 'react';

const MembershipAnalytics = () => {
    const [memberships, setMemberships] = useState([
        { month: 'January', newMembers: 30, canceledMembers: 5 },
        { month: 'February', newMembers: 25, canceledMembers: 3 },
        { month: 'March', newMembers: 40, canceledMembers: 8 },
    ]);

    return (
        <div>
            <h2>Membership Analytics</h2>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>New Members</th>
                        <th>Canceled Members</th>
                        <th>Churn Rate (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {memberships.map((data, index) => (
                        <tr key={index}>
                            <td>{data.month}</td>
                            <td>{data.newMembers}</td>
                            <td>{data.canceledMembers}</td>
                            <td>{((data.canceledMembers / data.newMembers) * 100).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MembershipAnalytics;