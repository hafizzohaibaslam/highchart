import Highcharts from 'highcharts';
import Accessibility from 'highcharts/modules/accessibility';

// Apply Accessibility module
Accessibility(Highcharts);

const highchartsTheme = {
  colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],

  chart: {
    backgroundColor: 'transparent',
    style: {
      fontFamily: 'Arial'
    },
    borderColor: '#EBBA95',
    borderWidth: 2,
    className: 'my-chart', // Custom class for styling
    plotBackgroundColor: '#F0F0F0',
    plotBorderColor: '#BBBBBB',
    plotBorderWidth: 1
  },

  title: {
    style: {
      color: '#333333',
      fontSize: '18px',
      fontWeight: 'bold'
    }
  },

  subtitle: {
    style: {
      color: '#666666',
      fontSize: '15px'
    }
  },

  xAxis: {
    gridLineWidth: 1,
    gridLineColor: '#F3F3F3',
    lineColor: '#F3F3F3',
    minorGridLineColor: '#F3F3F3',
    tickColor: '#F3F3F3',
    tickWidth: 1,
    labels: {
      style: {
        color: '#999999'
      }
    }
  },

  yAxis: {
    title: {
      style: {
        color: '#333333',
        fontSize: '14px',
        fontWeight: 'bold'
      }
    },
    gridLineColor: '#E6E6E6',
    labels: {
      style: {
        color: '#999999'
      }
    }
  },

  legend: {
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false,
    itemStyle: {
      color: '#333333',
      fontSize: '12px'
    },
    itemHoverStyle: {
      color: '#000'
    },
    itemHiddenStyle: {
      color: '#CCC'
    },
    title: {
      style: {
        fontWeight: 'bold'
      }
    }
  },

  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    style: {
      color: '#333333'
    }
  },

  plotOptions: {
    series: {
      dataLabels: {
        color: '#B0B0B3'
      },
      marker: {
        lineColor: '#333'
      }
    },
    boxplot: {
      fillColor: '#505053'
    },
    candlestick: {
      lineColor: 'white'
    },
    errorbar: {
      color: 'white'
    }
  },

  credits: {
    enabled: false
  },

  labels: {
    style: {
      color: '#707073'
    }
  },

  drilldown: {
    activeAxisLabelStyle: {
      color: '#F0F0F3'
    },
    activeDataLabelStyle: {
      color: '#F0F0F3'
    }
  },

  navigation: {
    buttonOptions: {
      symbolStroke: '#DDDDDD',
      theme: {
        fill: '#505053'
      }
    }
  },

  rangeSelector: {
    buttonTheme: {
      fill: '#505053',
      stroke: '#000000',
      style: {
        color: '#CCC'
      },
      states: {
        hover: {
          fill: '#707073',
          stroke: '#000000',
          style: {
          color: 'white'
          }
        },
        select: {
          fill: '#000003',
          stroke: '#000000',
          style: {
          color: 'white'
          }
        }
      }
    },
    inputBoxBorderColor: '#505053',
    inputStyle: {
      backgroundColor: '#333',
      color: 'silver'
    },
    labelStyle: {
      color: 'silver'
    }
  },

  navigator: {
    handles: {
      backgroundColor: '#666',
      borderColor: '#AAA'
    },
    outlineColor: '#CCC',
    maskFill: 'rgba(255,255,255,0.1)',
    series: {
      color: '#7798BF',
      lineColor: '#A6C7ED'
    },
    xAxis: {
      gridLineColor: '#505053'
    }
  },

  scrollbar: {
    barBackgroundColor: '#808083',
    barBorderColor: '#808083',
    buttonArrowColor:'#808083',
  }
}
