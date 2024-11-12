import React, { useState } from 'react';

const LifetimeValue = () => {
    const [ltvData, setLtvData] = useState([
        { memberId: 1, name: 'John Doe', monthsActive: 12, avgMonthlyRevenue: 50 },
        { memberId: 2, name: 'Jane Smith', monthsActive: 8, avgMonthlyRevenue: 55 },
    ]);

    return (
        <div>
            <h2>Lifetime Value (LTV)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Member Name</th>
                        <th>Months Active</th>
                        <th>Avg Monthly Revenue ($)</th>
                        <th>Lifetime Value ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {ltvData.map((member) => (
                        <tr key={member.memberId}>
                            <td>{member.name}</td>
                            <td>{member.monthsActive}</td>
                            <td>{member.avgMonthlyRevenue}</td>
                            <td>{member.monthsActive * member.avgMonthlyRevenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LifetimeValue;