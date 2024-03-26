import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useState, useEffect } from "react";
import { db, collection, getDocs } from "./firebase";

function App() {
  const [chartData, setChartData] = useState({
    series: [],
  });

  console.log("charData", chartData)

  // ... inside your App component
  useEffect(() => {
    // Fetch data from Firestore
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'chartData'));
        let seriesData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          console.log("snap data", data)
          return {
            // Ensure that the year is formatted as a string and revenue as a number
            name: data.year.toString(),
            y: parseFloat(data.revenue)
          };
        });
  
        // Sort the series data by year
        seriesData = seriesData.sort((a, b) => {
          // Assuming year format is "YYYY/YY" and is consistent
          return a.name.localeCompare(b.name);
        });
  
        // Set the fetched data as series for your chart
        setChartData({
          series: [{
            name: 'Revenue',
            data: seriesData
          }]
        });
      } catch (error) {
        console.error("Error fetching chart data: ", error);
        // Handle error appropriately
      }
    };
  
    fetchData();
  }, []);
  

  const chartOptions = {
    chart: {
      type: "line",
      backgroundColor: "transparent",
    },
    title: {
      text: "Domestic Cup History",
      align: "left",
      style: {
        color: "#000000",
        fontSize: "24px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: "From 2016 to 2022",
      align: "left",
      style: {
        color: "#000000",
        fontSize: "18px",
      },
    },
    xAxis: {
      categories: [
        "2016/17",
        "2017/18",
        "2018/19",
        "2019/20",
        "2020/21",
        "2021/22",
      ],
      labels: {
        style: {
          color: "#000000",
          fontSize: "14px",
        },
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      categories: ["Final", "Semi Final", "Quarter Final", "Fifth Round"],
      min: 0,
      max: 3,
      reversed: true, // false because we've corrected the categories' order
      labels: {
        style: {
          color: "#000000",
          fontSize: "14px",
        },
        x: -10, // Adjust label position if necessary
      },
      tickmarkPlacement: "on", // Place ticks between categories
      tickWidth: 0, // Hide the axis ticks
      gridLineWidth: 1, // Adjust grid line width if needed
      gridLineDashStyle: "Solid", // Solid lines; change to 'Dash' if you want dashed lines
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      gridLineColor: "#e6e6e6",
    },

    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
      floating: true,
      itemStyle: {
        color: "#000000",
        fontSize: "14px",
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
        name: "FA Cup",
        data: [0, 1, 2, 3, 1, 2], // Index corresponds to the stage, 0 for 'Fifth Round', 3 for 'Final'
        color: "#9E5EFD", // purple
      },
      {
        name: "Carabao Cup",
        data: [1, 2, 1, 0, 2, 3],
        color: "#08BDBA", // teal
      },
    ],
  };

  const columnStacked = {
    chart: {
      type: 'column'
  },
  title: {
      text: 'Major trophies for some English teams',
      align: 'left'
  },
  subtitle: {
      text: 'From 2016 to 2022',
      align:'left',
      style:{
        color:'#000000',
        fontSize:'16px'
      },
  },
  xAxis: {
      categories: ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester United']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Count trophies'
      },
      stackLabels: {
          enabled: true
      }
  },
  legend: {
    layout: "horizontal",
    align: "right",
    verticalAlign: "top",
    floating: true,
    borderColor: '#CCC',
      borderWidth: 1,
      shadow: false,
    itemStyle: {
      color: "#000000",
      fontSize: "14px",
    },
  },
  tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true
          }
      }
  },
  series: [{
      name: 'BPL',
      data: [50,60,70,80,90,100],
      color:"#7681FC"

  }, {
      name: 'FA Cup',
      data: [110,110,110,110,110,110],
      color: "#2F337D",
  }, ]

  }

  const barChartOptions = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      style: {
        fontFamily: "Arial", // Set the font family if it's specified in your design
      },
    },
    title: {
      text: "Title Partner Revenue history",
      align: "left",
      style: {
        color: "#545FE8",
        fontSize: "14px",
        marginTop:"10px"
        // fontWeight: "bold",
      },
    },
    subtitle: {
      useHTML: true,
      text: '<span style="font-weight: bold; font-size:24px">£714m </span>' +
            '<span style="color:#077D55; font-weight: bold;">↑ 26% </span><br/>' +
            '<span style="display: block; margin-top:10px; color:#697077">From 2016 to 2022 (In million pounds)</span>',
      align: 'left',
      style: {
        color: '#000000',
        fontSize: '16px',
        marginBottom:'20px'
      },
      y: 35// Adjust the y position as needed
    },
    
    

    xAxis: {
      categories: ['2016/17', '2017/18', '2018/19', '2019/20', '2020/21', '2021/22'].sort(),
      labels: {
        style: {
          color: "#000000",
          fontSize: "14px",
        },
      },
      crosshair: true, // Adds a line across the plot area on hover
    },
    yAxis: {
      min: 0,
      title: {
        text: "Revenue (m)",
        style: {
          color: "#000000",
          fontSize: "14px",
        },
      },
      gridLineColor: "#e6e6e6",
      labels: {
        style: {
          color: "#000000",
          fontSize: "14px",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} m</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
        color: "#C2C7FC", // Use the same purple color as before
      },
    },
    legend: {
      enabled: false, // No legend needed for a single series
    },
    series: chartData.series,
    // series: [{
    //   name: 'Revenue',
    //   data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0], // Replace with your data
    //   color: '#C2C7FC', // Purple color
    // }]
  };

  const stackedBarChartOptions = {
    chart: {
      type: "bar",
      backgroundColor: "#FFFFFF", // Set the background color to white
      height: 600, // Adjust the height to match your design
      width: 900,
    },
    title: {
      text: "% Attendance of Stadium Capacity",
      align: "left",
      style: {
        color: "#333333", // Dark text for the title
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: "2022-2023 Season",
      align: "left",
      style: {
        color: "#000000",
        fontSize: "16px",
      },
    },
    xAxis: {
      categories: [
        "Gloucester",
        "Bristol",
        "Sale",
        "Leicester Tigers",
        "Exeter Chiefs",
      ].reverse(), // Reverse the order to match the design
      gridLineWidth: 1, // Set the width of the grid line
      gridLineColor: "#e6e6e6",
      labels: {
        style: {
          color: "#333333",
          fontSize: "13px", // Match font size to your design
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: null, // No title for yAxis
      },
      gridLineWidth: 0, // Set the width of the grid line
      gridLineColor: "#e6e6e6",

      labels: {
        style: {
          color: "#333333",
          fontSize: "13px", // Match font size to your design
        },
      },
    },
    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
      floating: true,
      itemStyle: {
        color: "#000000",
        fontSize: "14px",
      },
    },
    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
    },
    plotOptions: {
      series: {
        stacking: "normal",
        borderRadius: 5, // If the bars in the design are rounded
        borderWidth: 0,
      },
      bar: {
        dataLabels: {
          enabled: true,
          inside: true, // To match the design
          align: "right", // To match the design
          color: "#FFFFFF", // White text for data labels
        },
      },
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        name: "Stadium Capacity",
        data: [200, 100, 100, 100, 100], // Dummy data
        color: "#7681FC", // Light blue color from the image
      },
      {
        name: "% of Attendance",
        data: [150, 65, 80, 85, 90], // Dummy data
        color: "#2F337D", // Dark blue color from the image
      },
    ],
  };


  const barBasicChartOptions = {
    chart:{
      type: 'bar',
      backgroundColor:'transparent',
      height:'550'
    }, 
    title:{
      text:'Social high-low followers for teams',
      align:'left',
      style:{
        color:'#000000',
        fontSize:'20px',
        fontWeight:'bold'
      }
    },
    subtitle:{
      text:"As of 3024",
      align:"left", 
      style:{
        color:"#000000",
        fontSize:"16px"
      }
    },
    xAxis:{
      categories:['Manchester United', 'Chelsea', 'Arsenal', 'Liverpool', 'Manchester City'],
      labels:{
        style:{
          color:'#000000',
          fontSize:'14px'
        }
      },
      gridLineWidth: 1, // Set the width of the grid line
      gridLineColor: "#e6e6e6",
      crosshair:true
    },
    yAxis:{
      min:0,
      title:{
        text:'',
        style:{
          color:'#000000',
          fontSize:'14px'
        }
      },
      gridLineWidth: 0, // Set the width of the grid line
      gridLineColor:'#e6e6e6',
      labels:{
        style:{
          color:'#000000',
          fontSize:'14px'
        }
      }
    },

    legend: {
      layout: "horizontal",
      align: "right",
      verticalAlign: "top",
      floating: true,
      itemStyle: {
        color: "#000000",
        fontSize: "14px",
      },
    },



    tooltip:{
      headerFormat:'<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} m</b></td></tr>',
      footerFormat:'</table>',
      shared:true,
      useHTML:true
    },
    series: [
          {
            name: "Stadium Capacity",
            data: [200, 100, 100, 100], // Dummy data
            color: "#7681FC", // Light blue color from the image
          },
        ],
    
  }



  const areaStackedOptions = {
    chart: {
      type: 'area',
  },
  title: {
      useHTML: true,
      text: 'Countries/regions with highest Gt CO<sub>2</sub>-emissions',
      align: 'left'
  },
  subtitle: {
      text: 'Source: ' +
          '<a href="https://energiogklima.no/klimavakten/land-med-hoyest-utslipp/"' +
          'target="_blank">Energi og Klima</a>',
      align: 'left'
  },
  accessibility: {
      point: {
          valueDescriptionFormat: '{index}. {point.category}, {point.y:,.1f} billions, {point.percentage:.1f}%.'
      }
  },
  yAxis: {
      labels: {
          format: '{value}%'
      },
      title: {
          enabled: false
      }
  },
  tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.1f} billion Gt)<br/>',
      split: true
  },
  plotOptions: {
      series: {
          pointStart: 1990
      },
      area: {
          stacking: 'percent',
          marker: {
              enabled: false
          }
      }
  },
  series: [{
      name: 'China',
      data: [2.5, 2.6, 2.7, 2.9, 3.1, 3.4, 3.5, 3.5, 3.4, 3.4, 3.4,
          3.5, 3.9, 4.5, 5.2, 5.9, 6.5, 7, 7.5, 7.9, 8.6, 9.5, 9.8,
          10, 10, 9.8, 9.7, 9.9, 10.3, 10.5, 10.7, 10.9
      ],
      color:"#C2C7FC"
  }, {
      name: 'USA',
      data: [5.1, 5.1, 5.2, 5.3, 5.4, 5.4, 5.6, 5.7, 5.7, 5.8, 6, 5.9,
          5.9, 6, 6.1, 6.1, 6.1, 6.1, 5.9, 5.5, 5.7, 5.5, 5.3, 5.5,
          5.5, 5.4, 5.2, 5.2, 5.4, 5.3, 4.7, 5
      ],
      color:"#545FE8"

  }, {
      name: 'EU',
      data: [3.9, 3.8, 3.7, 3.6, 3.6, 3.6, 3.7, 3.7, 3.6, 3.6, 3.6, 3.7,
          3.7, 3.7, 3.8, 3.7, 3.7, 3.7, 3.6, 3.3, 3.4, 3.3, 3.3, 3.2, 3,
          3.1, 3.1, 3.1, 3, 2.9, 2.6, 2.7],
          color:"#2F337D"
  }]
  }






  // const dualChartOptions = {
  //   chart: {
  //     zoomType: 'xy',
  //     backgroundColor: '#f0f0f0' // Light gray background as seen in the image
  //   },
  //   title: {
  //     text: 'Playing Staff Expenses vs League Position',
  //     align: 'center',
  //     style: {
  //       color: '#333333', // Dark text color
  //       fontSize: '20px' // Larger font size for the title
  //     }
  //   },
  //   subtitle: {
  //     text: 'From 2016 to 2022 (In million pounds)',
  //     align: 'center',
  //     style: {
  //       color: '#666666' // Lighter text color for the subtitle
  //     }
  //   },
  //   xAxis: [{
  //     categories: ['2016/17', '2017/18', '2018/19', '2019/20', '2020/21', '2021/22'],
  //     crosshair: true,
  //     labels: {
  //       style: {
  //         color: '#333333' // Dark text color for the labels
  //       }
  //     }
  //   }],
  //   yAxis: [{ // Primary yAxis for column series
  //     labels: {
  //       format: '{value} m',
  //       style: {
  //         color: '#333333' // Dark text color for the labels
  //       }
  //     },
  //     title: {
  //       text: 'Revenue (m)',
  //       style: {
  //         color: '#333333' // Dark text color for the title
  //       }
  //     }
  //   }, { // Secondary yAxis for line series
  //     title: {
  //       text: 'Rank',
  //       style: {
  //         color: '#333333' // Dark text color for the title
  //       }
  //     },
  //     labels: {
  //       format: '{value}',
  //       style: {
  //         color: '#333333' // Dark text color for the labels
  //       }
  //     },
  //     opposite: true,
  //     reversed: true, // To have the rank 1 at the top
  //     max: 8, // Assuming 8 is the highest rank
  //     min: 1
  //   }],
  //   tooltip: {
  //     shared: true
  //   },
  //   plotOptions: {
  //     column: {
  //       borderColor: '#666666', // Border color for the columns
  //     },
  //     line: {
  //       marker: {
  //         enabled: true,
  //         fillColor: '#FFFFFF', // White fill for the markers
  //         lineColor: '#111111'// Inherits from series color
  //       }
  //     }
  //   },
  //   series: [{
  //     name: 'Season Finish Rank',
  //     type: 'line',
  //     yAxis: 1,
  //     data: [3, 1, 4, 5, 2, 3], // Dummy data for rank
  //     color: '#000000', // Black line
  //     marker: {
  //       symbol: 'circle'
  //     }
  //   }, {
  //     name: 'Staff Expenses',
  //     type: 'column',
  //     data: [290, 310, 270, 350, 300, 320], // Dummy data for expenses
  //     color: '#7cb5ec', // Blue for the columns
  //   }]
  // };


  const dualChartOptions={
    chart: {
      zoomType: 'xy'
  },
  title: {
      text: 'Karasjok weather, 2021',
      align: 'left'
  },
  subtitle: {
      text: 'Source: ' +
          '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
          'target="_blank">YR</a>',
      align: 'left'
  },
  xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      crosshair: true
  }],
  yAxis: [{ // Primary yAxis
      labels: {
          format: '{value}°C',
          style: {
              color: '#111111'
          }
      },
      title: {
          text: 'Temperature',
          style: {
              color: '#111111'
          }
      }
  }, { // Secondary yAxis
      title: {
          text: 'Precipitation',
          style: {
              color: '#111111'
          }
      },
      labels: {
          format: '{value} mm',
          style: {
              color: '#111111'
          }
      },
      opposite: true
  }],
  tooltip: {
      shared: true
  },
  legend: {
      align: 'right',
      verticalAlign: 'top',
      floating: true,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || // theme
          'rgba(255,255,255,0.25)'
  },
  series: [{
      name: 'Precipitation',
      type: 'column',
      yAxis: 1,
      data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4],
      color:'#C2C7FC',
      tooltip: {
          valueSuffix: ' mm'
      }

  }, {
      name: 'Temperature',
      type: 'spline',
      data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0],
      color:"#2F337D",
      tooltip: {
          valueSuffix: '°C'
      }
  }]
  }




  return (
    <>
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>

      <br />
      <br />
      <br />
      <br />

      <div>
        <HighchartsReact highcharts={Highcharts} options={barChartOptions} />
      </div>

      <br />
      <br />
      <br />
      <br />

      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={stackedBarChartOptions}
        />
      </div>


      <br />
      <br />
      <br />
      <br />

      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={barBasicChartOptions}
        />
      </div>



      <br />
      <br />
      <br />
      <br />

      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={columnStacked}
        />
      </div>




      <br />
      <br />
      <br />
      <br />

      {/* <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={areaStackedOptions}
        />
      </div>
      <br />
      <br />
      <br />
      <br /> */}

      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={dualChartOptions}
        />
      </div>



    </>
  );
}

export default App;
