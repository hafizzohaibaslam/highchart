import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function App() {
  const chartOptions = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
    },
    title: {
      text: 'Domestic Cup History',
      align: 'left',
      style: {
        color: '#000000',
        fontSize: '24px',
        fontWeight: 'bold',
      },
    },
    subtitle: {
      text: 'From 2016 to 2022',
      align: 'left',
      style: {
        color: '#000000',
        fontSize: '18px',
      },
    },
    xAxis: {
      categories: ['2016/17', '2017/18', '2018/19', '2019/20', '2020/21', '2021/22'],
      labels: {
        style: {
          color: '#000000',
          fontSize: '14px',
        },
      },
    },
    yAxis: {
      title: {
        text: '',
      },
      categories: ['Final', 'Semi Final', 'Quarter Final', 'Fifth Round'],
      min: 0,
      max: 3,
      reversed: true, // false because we've corrected the categories' order
      labels: {
        style: {
          color: '#000000',
          fontSize: '14px',
        },
        x: -10, // Adjust label position if necessary
      },
      tickmarkPlacement: 'on', // Place ticks between categories
      tickWidth: 0, // Hide the axis ticks
      gridLineWidth: 1, // Adjust grid line width if needed
      gridLineDashStyle: 'Solid', // Solid lines; change to 'Dash' if you want dashed lines
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      gridLineColor: '#e6e6e6',
    },
    
    legend: {
      layout: 'horizontal',
      align: 'right',
      verticalAlign: 'top',
      floating: true,
      itemStyle: {
        color: '#000000',
        fontSize: '14px',
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
        enableMouseTracking: true,
      },
      series: {
        marker: {
          enabled: true,
          radius: 5,
        },
      },
    },
    series: [
      {
        name: 'FA Cup',
        data: [0, 1, 2, 3, 1, 2], // Index corresponds to the stage, 0 for 'Fifth Round', 3 for 'Final'
        color: '#9E5EFD', // purple
      },
      {
        name: 'Carabao Cup',
        data: [1, 2, 1, 0, 2, 3],
        color: '#08BDBA', // teal
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default App;
