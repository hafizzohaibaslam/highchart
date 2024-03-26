import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MyBarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      width: 900,
      style: {
        fontFamily: 'Arial'
      }
    },
    title: {
      text: 'Income Rugby Fans vs National Average',
      align: 'left',
      style: {
        fontSize: '24px'
      }
    },
    subtitle: {
      text: 'As of 2024',
      align: 'left',
      style: {
        fontSize: '14px'
      }
    },
    legend: {
        align: 'center', // Aligns the legend to the center
        verticalAlign: 'top', // Positions it at the bottom
        layout: 'horizontal', // Layout the items horizontally
        y: 0 // You can adjust this value to bring it closer or further from the subtitle
      },
    xAxis: {
      categories: ['Rugby Union', 'General Population'],
      gridLineWidth: 1, // Set the width of the grid line
      gridLineColor: "#e6e6e6",
      title: {
        text: null
      }
    },
    yAxis: {
        min: 0,
        title: {
          text: 'Percentage (%)',
          align: 'high'
        },
        gridLineWidth: 0,
        gridLineColor: "#e6e6e6",
        labels: {
          enabled: false // This will hide the y-axis labels
        }
      },
      
    tooltip: {
      valueSuffix: '%'
    },
    plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
            formatter: function() {
              return this.y + '%'; // Adds a percentage sign after the label
            },
          },
          stacking: 'normal'
        }
      },
      

      
    credits: {
      enabled: false
    },
    series: [{
      name: 'Up to £14,999',
      data: [13, 16],
      color: '#C2C7FC'
    }, {
      name: '£15,000 to £24,999',
      data: [19, 21],
      color:'#A0A7FA'
    }, {
      name: '£25,000 to £39,999',
      data: [26, 29],
      color:'#7681FC'
    }, {
      name: '£40,000 to £59,999',
      data: [20, 19],
      color:'#545FE8'
    }, {
      name: '£60,000 to £99,999',
      data: [15, 12],
      color:'#3A45B0'
    }, {
      name: '£100,000 or above',
      data: [7, 4],
      color: '#2F337D'

    }]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MyBarChart;
