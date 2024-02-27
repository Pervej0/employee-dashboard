import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const Dashboard = () => {
  const chartOptions: ApexOptions = {
    chart: {
      height: 350, // Add your desired height
      zoom: {
        enabled: false, // Add zoom configuration as needed
      },
    },
    xaxis: {
      categories: [
        2015, 2016, 2016, 2017, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
      ],
    },
    colors: ["#3341ff"],
    plotOptions: {
      bar: {
        horizontal: false, // Add your plotOptions as needed
      },
    },
    dataLabels: {
      enabled: false, // Add your dataLabels configuration as needed
    },
    legend: {
      show: true,
      showForSingleSeries: false, // Add your legend configuration as needed
      horizontalAlign: "center",
    },
  };

  const chartSeries = [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 125, 125, 150],
    },
  ];

  const options = {
    series: [60, 30, 3, 7],
    labels: ["Happy", "Mid Of Mood", "Overthinker", "Mentally Stressed"],
  };

  return (
    <div className="flex gap-5">
      <div>
        <h2>Employers Rate</h2>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          width="500"
        />
      </div>
      <div>
        <h2>Employers Health</h2>
        <Chart
          options={options}
          series={options.series}
          type="pie"
          width="500"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
