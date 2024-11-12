import React, { useState } from 'react';

const ProfitMargins = () => {
    const [profitData, setProfitData] = useState([
        { month: 'January', revenue: 7000, expenses: 4000 },
        { month: 'February', revenue: 7300, expenses: 4200 },
        { month: 'March', revenue: 7700, expenses: 4500 },
    ]);

    return (
        <div>
            <h2>Profit Margins</h2>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Revenue ($)</th>
                        <th>Expenses ($)</th>
                        <th>Profit ($)</th>
                        <th>Profit Margin (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {profitData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.month}</td>
                            <td>{data.revenue}</td>
                            <td>{data.expenses}</td>
                            <td>{data.revenue - data.expenses}</td>
                            <td>{(((data.revenue - data.expenses) / data.revenue) * 100).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProfitMargins