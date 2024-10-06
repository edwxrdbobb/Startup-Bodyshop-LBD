import { Bar } from 'react-chartjs-2'; // Import the chart component
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Register the scales and the BarElement
Chart.register(CategoryScale, LinearScale, BarElement);

const Piechart: React.FC<{ data: any }> = ({ data }) => {
    return <Bar data={data} />;
}

export default Piechart;