import React, { useState } from 'react';

const AttendanceTracking = () => {
  const [attendanceData, setAttendanceData] = useState([
    { date: '2024-01-01', totalCheckIns: 100 },
    { date: '2024-01-02', totalCheckIns: 120 },
    { date: '2024-01-03', totalCheckIns: 90 },
  ]);

  return (
    <div>
      <h2>Attendance & Usage Tracking</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Check-Ins</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.totalCheckIns}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTracking;