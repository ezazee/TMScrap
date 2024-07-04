// widget card chart js
function widgetsCommonOption(data) {
  return {
    series: [
      {
        data: [8, 15, 3, 25, 18, 40, 15, 30, 20, 40, 30, 40],
      },
    ],
    chart: {
      type: 'line',
      width: '100%',
      height: '35%',
      offsetX: 0,
      offsetY: 0,
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      ...toolTipMini,
    },
    colors: [data.color],
    stroke: {
      width: 4,
      curve: 'smooth',
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
      padding: {
        top: -30,
        right: 0,
        bottom: -15,
        left: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
}

const widgetsDataEcommerce1 = {
  color: '#6659ff',
};

const widgetsLineChart1El = document.querySelector('#widgetsLineChart1');
if (widgetsLineChart1El) {
  var widgetsLineChart1 = new ApexCharts(widgetsLineChart1El, widgetsCommonOption(widgetsDataEcommerce1));
  widgetsLineChart1.render();
}

const widgetsDataEcommerce2 = {
  color: '#feb858',
};

const widgetsLineChart2El = document.querySelector('#widgetsLineChart2');
if (widgetsLineChart2El) {
  var widgetsLineChart2 = new ApexCharts(widgetsLineChart2El, widgetsCommonOption(widgetsDataEcommerce2));
  widgetsLineChart2.render();
}

const widgetsDataEcommerce3 = {
  color: '#63d5be',
};

const widgetsLineChart3El = document.querySelector('#widgetsLineChart3');
if (widgetsLineChart3El) {
  var widgetsLineChart3 = new ApexCharts(widgetsLineChart3El, widgetsCommonOption(widgetsDataEcommerce3));
  widgetsLineChart3.render();
}

// total sale chart js
var options = {
  series: [
    {
      data: [
        [1336946400000, 32.23],
        [1337032800000, 32.33],
        [1337119200000, 32.36],
        [1337205600000, 32.01],
        [1337292000000, 31.31],
        [1337551200000, 32.01],
        [1337637600000, 32.01],
        [1337724000000, 32.18],
        [1337810400000, 31.54],
        [1337896800000, 31.6],
        [1338242400000, 32.05],
        [1338328800000, 31.29],
        [1338415200000, 31.05],
        [1338501600000, 31.0],
        [1338760800000, 31.31],
        [1338847200000, 30.7],
        [1338933600000, 31.69],
        [1339020000000, 31.32],
        [1339106400000, 31.65],
        [1339365600000, 31.13],
        [1339452000000, 31.77],
        [1339538400000, 31.79],
        [1339624800000, 31.67],
        [1339711200000, 32.39],
        [1339970400000, 32.63],
        [1340056800000, 32.89],
        [1340143200000, 31.99],
        [1340229600000, 29.82],
        [1340467000000, 31.57],
        [1340575200000, 30.84],
        [1340661600000, 31.07],
        [1340748000000, 31.41],
        [1340834400000, 31.17],
        [1340920800000, 32.37],
        [1341180000000, 32.19],
        [1341266400000, 32.51],
        [1341439200000, 32.53],
        [1341525600000, 31.37],
        [1341784800000, 30.43],
        [1341871200000, 30.44],
        [1341957600000, 30.2],
        [1342044000000, 30.14],
        [1342130400000, 30.65],
        [1342389600000, 30.4],
        [1342476000000, 30.65],
        [1342562400000, 31.43],
        [1342648800000, 31.89],
        [1342735200000, 31.38],
        [1342994400000, 30.64],
        [1343080800000, 30.02],
        [1343167200000, 30.33],
        [1343253600000, 30.95],
      ],
    },
  ],
  chart: {
    id: 'area-datetime',
    type: 'area',
    height: 140,
    toolbar: {
      show: false,
    },
    zoom: {
      autoScaleYaxis: true,
    },
  },
  colors: ['#6659ff'],
  stroke: {
    width: 3,
    curve: 'smooth',
  },
  grid: {
    show: false,
    padding: {
      top: -65,
      bottom: -28,
      left: 0,
      right: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6,
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
    ...toolTipMini,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.75,
      opacityTo: 0.3,
      stops: [0, 95, 100],
    },
  },
  responsive: [
    {
      breakpoint: 767,
      options: {
        chart: {
          height: 110,
        },
      },
    },
  ],
};

const timelineChartEl = document.querySelector('#timeline-chart');
if (timelineChartEl) {
  var chart = new ApexCharts(timelineChartEl, options);
  chart.render();
}

// customer bar chart js
var customerChartOptions = {
  series: [
    {
      name: 'PRODUCT A',
      data: [35, 55, 25, 25, 35, 45, 15],
    },
    {
      name: 'PRODUCT B',
      data: [45, 30, 25, 25, 25, 35, 15],
    },
    {
      name: 'PRODUCT C',
      data: [30, 30, 30, 55, 35, 35, 25],
    },
    {
      name: 'PRODUCT D',
      data: [30, 45, 45, 45, 25, 45, 15],
    },
  ],
  chart: {
    type: 'bar',
    height: 140,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: ['#6659ff', '#f1523d', '#63d5be', '#feb858'],
  stroke: {
    width: 2,
    colors: ['#fff'],
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '60%',
    },
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      top: -50,
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2022 GMT', '01/02/2022 GMT', '01/03/2022 GMT', '01/04/2022 GMT', '01/05/2022 GMT', '01/06/2022 GMT', '01/07/2022 GMT'],
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  tooltip: {
    ...toolTipMini,
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 0.92,
  },
  responsive: [
    {
      breakpoint: 767,
      options: {
        chart: {
          height: 110,
        },
      },
    },
  ],
};

const customerChartEl = document.querySelector('#customerChart');
if (customerChartEl) {
  var customerChart = new ApexCharts(customerChartEl, customerChartOptions);
  customerChart.render();
}

// inovice overview chart js
var invoiceChartoptions = {
  series: [
    {
      name: 'Desktops',
      data: [60, 61, 61.5, 61, 60, 59, 58, 57, 56, 55.5, 55, 55.2, 55.5, 55.8, 56.2, 57.1, 57.8, 59, 60],
    },
    {
      name: 'Low - 2013',
      data: [58, 57.5, 57, 56.5, 56.2, 56.4, 56.8, 57.5, 58, 58.5, 59, 59.5, 60, 59.8, 59.5, 59.2, 58.8, 58.5, 58.1, 57.8],
    },
  ],
  chart: {
    height: 310,
    type: 'line',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#6659ff', '#f1523d'],
  stroke: {
    width: 3,
    fillOpacity: 0.2,
    curve: 'smooth',
  },
  markers: {
    size: 4,
    strokeWidth: 0,
    hover: {
      size: 5,
    },
  },
  grid: {
    borderColor: 'var(--light)',
    padding: {
      top: -10,
      right: 0,
    },
  },
  fill: {
    opacity: 0.7,
  },
  legend: {
    show: false,
  },

  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    tickAmount: 12,
    tickPlacement: 'between',
    labels: {
      rotate: 0,
      style: {
        colors: '#7690AC',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      color: 'var(--light)',
    },
  },
  yaxis: {
    labels: {
      offsetX: 0,
      offsetY: -30,
      style: {
        colors: 'var(--dark)',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
        fontWeight: 500,
      },
    },
  },
  responsive: [
    {
      breakpoint: 1787,
      options: {
        grid: {
          padding: {
            right: -5,
          },
        },
      },
    },
    {
      breakpoint: 1680,
      options: {
        grid: {
          padding: {
            right: -3,
          },
        },
      },
    },
    {
      breakpoint: 1199,
      options: {
        chart: {
          height: 300,
          yaxis: {
            labels: {
              offsetX: 0,
              offsetY: -32,
            },
          },
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          yaxis: {
            labels: {
              offsetX: 0,
              offsetY: -40,
            },
          },
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 280,
        },
        yaxis: {
          labels: {
            offsetX: 0,
            offsetY: -25,
            maxHeight: 54,
            style: {
              colors: '#44588f',
              fontSize: '12px',
              fontFamily: 'Roboto, san-serif',
              fontWeight: 500,
            },
          },
        },
      },
    },
    {
      breakpoint: 720,
      options: {
        grid: {
          padding: {
            right: -10,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 250,
        },
        xaxis: {
          labels: {
            rotateAlways: true,
            rotate: -45,
          },
        },
        grid: {
          padding: {
            right: 0,
          },
        },
      },
    },
    {
      breakpoint: 530,
      options: {
        grid: {
          padding: {
            right: 20,
          },
        },
      },
    },
    {
      breakpoint: 361,
      options: {
        chart: {
          height: 200,
          yaxis: {
            offsetX: 0,
            offsetY: 30,
          },
        },
        grid: {
          padding: {
            right: -5,
          },
        },
      },
    },
  ],
};

const invoiceChartEl = document.querySelector('#invoice-chart');
if (invoiceChartEl) {
  var invoiceChart = new ApexCharts(invoiceChartEl, invoiceChartoptions);
  invoiceChart.render();
}
