// Students average score //
var groupChartOption = {
  series: [
    {
      name: 'Good',
      data: [120, 150, 180, 280, 150, 120, 350, 120],
    },
    {
      name: 'Very Good',
      data: [320, 170, 50, 150, 180, 250, 150, 280],
    },
    {
      name: 'Average',
      data: [160, 130, 220, 180, 220, 40, 90, 130],
    },
    {
      name: 'Low',
      data: [250, 250, 150, 200, 70, 150, 260, 200],
    },
  ],
  colors: ['#6659FF', '#FA8070', '#FEB858', '#63D5BE'],
  chart: {
    type: 'bar',
    height: 362,
    width: '100%',
    offsetY: 0,
    offsetX: -16,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: 'top',
      },
    },
  },
  fill: {
    opacity: 1,
  },
  grid: {
    show: true,
    borderColor: 'var(--light)',
    padding: {
      top: 5,
      right: -20,
      bottom: -13,
      left: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '66%',
      barHeight: '100%',
      s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
      e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
    },
  },

  stroke: {
    show: true,
    width: 1,
    colors: ['#fff'],
  },
  tooltip: {
    shared: true,
    intersect: false,
    x: {
      show: true,
      format: 'dd MMM',
      formatter: undefined,
    },
    y: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 400,
    logBase: 100,
    tickAmount: 4,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: true,
      offsetX: 0,
      offsetY: -27,
      rotate: 0,
      style: {
        colors: 'var(--dark)',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
        fontWeight: 500,
      },
    },
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
    show: false,
    labels: {
      formatter: function (value) {
        return value;
      },
      style: {
        colors: '#7690AC',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    style: {
      colors: [],
      fontSize: '12px',
      fontWeight: 400,
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 465,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 380,
        },
      },
    },
    {
      breakpoint: 991,
      options: {
        chart: {
          height: 350,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 260,
        },
      },
    },
    {
      breakpoint: 426,
      options: {
        chart: {
          height: 180,
          offsetY: 0,
          offsetX: 0,
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
            offsetY: 0,
          },
        },
        grid: {
          show: true,

          padding: {
            top: 0,
            right: 0,
            bottom: -13,
            left: 0,
          },
        },
      },
    },
    {
      breakpoint: 375,
      options: {
        chart: {
          height: 160,
          offsetX: 0,
        },
      },
    },
  ],
};

var groupBarChart = new ApexCharts(document.querySelector('#groupBarChart'), groupChartOption);
groupBarChart.render();

// Admission Ratio //
var admissionRatioOption = {
  series: [
    {
      name: '',
      data: [
        29, 30.31, 30.7, 31.69, 31.32, 31.65, 31.13, 31.77, 31.79, 31.67, 32.39, 32.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 32.37, 32.19, 32.51, 32.53, 31.37, 30.43, 30.44, 30.2,
        30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 30.02, 30.33, 30.95, 31.89, 31.01, 30.88, 30.69, 30.58, 32.02, 32.14, 32.37, 32.51, 32.65, 32.64, 32.27, 32.1, 32.91, 33.65, 33.8, 33.92,
        33.75, 33.84, 33.5, 32.26, 32.32, 32.06, 31.96, 31.46, 31.27, 31.43, 32.26, 32.79, 32.46, 32.13, 32.43, 32.42, 32.81, 33.34, 33.41, 32.57, 33.12, 34.53, 33.83, 33.41, 32.9, 32.53, 32.8, 32.44,
        32.62, 32.57, 32.6, 32.68, 32.47, 32.23, 31.68, 31.51, 31.78, 31.94, 32.33, 33.24, 33.44, 33.48, 33.24, 33.49, 33.31, 33.36, 33.4, 34.01, 34.02, 34.36, 34.39, 34.24, 34.39, 33.47, 32.98, 32.9,
        32.7, 32.54, 32.23, 32.64, 32.65, 32.92, 32.64, 32.84, 33.4, 33.3, 33.18, 33.88, 34.09,
      ],
    },
  ],
  chart: {
    type: 'area',
    height: 125,
    width: '100%',
    offsetY: 0,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: true,
    borderColor: 'var(--light)',
    padding: {
      top: 5,
      right: 0,
      bottom: -30,
      left: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  colors: ['#6659FF'],
  xaxis: {
    tooltip: {
      enabled: false,
    },
    labels: {
      show: false,
      style: {
        colors: '#7690AC',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    opposite: false,
    min: 29,
    max: 35,
    logBase: 100,
    tickAmount: 4,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: true,
      offsetX: -12,
      offsetY: -15,
      rotate: 0,
      style: {
        colors: 'var(--dark)',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
        fontWeight: 500,
      },
    },
  },
  legend: {
    horizontalAlign: 'left',
  },
  responsive: [
    {
      breakpoint: 1800,
      options: {
        chart: {
          height: 102,
        },
      },
    },
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 115,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 180,
        },
      },
    },
    {
      breakpoint: 426,
      options: {
        chart: {
          height: 120,
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
          },
        },
      },
    },
  ],
};

var admissionRatio = new ApexCharts(document.querySelector('#admissionRatio'), admissionRatioOption);
admissionRatio.render();

/// Popular Curse ///
var popularCurseOption = {
  series: [800, 1100, 1179, 1179],
  labels: ['Remain', 'Exam Mark', 'Attendance', 'Assignment'],
  chart: {
    type: 'donut',
    width: '100%',
    height: 318,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: 'bottom',
    itemMargin: {
      horizontal: 0,
      vertical: 0,
    },
    labels: {
      colors: 'var(--dark)',
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
  colors: ['#F5F5F5', '#6659FF', '#FA8070', '#63D5BE'],
  tooltip: {
    fillSeriesColor: false,
    x: {
      show: false,
    },
  },

  stroke: {
    show: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: true,
          value: {
            show: true,
            fontSize: '24px',
            fontFamily: 'Roboto, san-serif',
            fontWeight: 600,
            color: 'var(--dark)',
            offsetY: -18,
            formatter: function (val) {
              return val;
            },
          },
          name: {
            show: true,
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: '#7690AC',
            offsetY: 18,
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: 'Score this year',
            fontSize: '14px',
            fontFamily: 'Roboto, san-serif',
            fontWeight: 400,
            color: '#7690AC',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            },
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 1800,
      options: {
        chart: {
          height: 305,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 390,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 365,
        },
      },
    },
    {
      breakpoint: 871,
      options: {
        chart: {
          height: 338,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 310,
        },
      },
    },
    {
      breakpoint: 650,
      options: {
        chart: {
          height: 285,
        },
      },
    },
  ],
};

var popularCurseChart = new ApexCharts(document.querySelector('#popularCurseChart'), popularCurseOption);
popularCurseChart.render();
