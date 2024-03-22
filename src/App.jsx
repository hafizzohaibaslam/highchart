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



  const barChartOptions = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Arial' // Set the font family if it's specified in your design
      }
    },
    title: {
      text: 'Title Partner Revenue history',
      align: 'left',
      style: {
        color: '#000000',
        fontSize: '20px',
        fontWeight: 'bold',
      },
    },
    // subtitle: {
    //   useHTML: true,
    //   text: '£714m ↑ 26%<br/>From 2016 to 2022 (In million pounds)',
    //   align: 'left',
    //   style: {
    //     color: '#000000',
    //     fontSize: '16px',
    //   },
    // },
    
    xAxis: {
      categories: ['2016/17', '2017/18', '2018/19', '2019/20', '2020/21', '2021/22'],
      labels: {
        style: {
          color: '#000000',
          fontSize: '14px',
        },
      },
      crosshair: true // Adds a line across the plot area on hover
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Revenue (m)',
        style: {
          color: '#000000',
          fontSize: '14px',
        },
      },
      gridLineColor: '#e6e6e6',
      labels: {
        style: {
          color: '#000000',
          fontSize: '14px',
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} m</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true
        },
        color: '#9E5EFD', // Use the same purple color as before
      }
    },
    legend: {
      enabled: false // No legend needed for a single series
    },
    series: [{
      name: 'Revenue',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0], // Replace with your data
      color: '#C2C7FC', // Purple color
    }]
  };
  




  const stackedBarChartOptions = {
    chart: {
      type: 'bar',
      backgroundColor: 'transparent',
      height: 600 // Adjust height as necessary to match the design
    },
    title: {
      text: '% Attendance of Stadium Capacity',
      align: 'left',
      style: {
        color: '#333333', // Color adjusted to a dark shade, assumed from the image
        fontSize: '20px',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: ['Newcastle Falcons', 'Gloucester', 'Bristol', 'Sale', 'Leicester Tigers', 'Exeter Chiefs', 'Saracens', 'Bath', 'Harlequins', 'Northampton Saints'],
      title: {
        text: null
      },
      labels: {
        style: {
          color: '#333333',
          fontSize: '14px'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: null
      },
      labels: {
        overflow: 'justify',
        style: {
          color: '#333333',
          fontSize: '14px'
        }
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: ' units' // Modify as per the data unit
    },
    plotOptions: {
      bar: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: '#FFFFFF' // Set to white or as per design for visibility
        },
        // Remove the border radius if you want the bars to be flat without rounded corners
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true,
      reversed: true // To maintain the order in the design
    },
    credits: {
      enabled: false // Disable the Highcharts credits
    },
    series: [{
      name: '% of Attendance',
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], // Sample data
      color: '#7cb5ec' // Light blue color from the image
    }, {
      name: 'Stadium Capacity',
      data: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200], // Sample data
      color: '#434348' // Dark blue color from the image
    }]
  };





  return (

    <>
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>

    <br/>
    <br/>
    <br/>
    <br/>


    <div>
      <HighchartsReact highcharts={Highcharts} options={barChartOptions} />
    </div>

    <br/>
    <br/>
    <br/>
    <br/>


    <div>
      {/* <HighchartsReact highcharts={Highcharts} options={stackedBarChartOptions} /> */}
    </div>

    </>
  );
}

export default App;
