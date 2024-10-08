// import React from 'react';
// import { PolarArea } from 'react-chartjs-2'; // Import the PolarArea component
// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register the required elements for the PolarArea chart
// ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// // Define the types for the stat object
// type Stat = {
//   subtitle: string;
//   number: string;
// };

// const Piechart: React.FC<{ stats: Stat[] }> = ({ stats }) => {
//   const data = {
//     labels: stats.slice(0, 2).map((stat) => stat.subtitle), // Use 'Male' and 'Female' labels
//     datasets: [
//       {
//         label: 'Gender Distribution',
//         data: stats.slice(0, 2).map((stat) => parseInt(stat.number)), // Extract and convert the numbers for the chart
//         backgroundColor: [
//           'rgba(54, 162, 235, 0.5)', // Color for 'Male'
//           'rgba(255, 99, 132, 0.5)', // Color for 'Female'
//         ],
//         borderColor: [
//           'rgba(54, 162, 235, 1)', // Border color for 'Male'
//           'rgba(255, 99, 132, 1)', // Border color for 'Female'
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       r: {
//         pointLabels: {
//           display: true,
//           centerPointLabels: true, // Center point labels
//           font: {
//             size: 18, // Adjust font size
//           },
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         position: 'top' as const, // Use a valid type for the position ('top' | 'bottom
