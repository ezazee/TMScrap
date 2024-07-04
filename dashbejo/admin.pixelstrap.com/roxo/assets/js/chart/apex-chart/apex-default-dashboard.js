// Polar Chart
var options = {
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  chart: {
    type: 'polarArea',
    width: '100%',
    height: 270,
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
  },
  stroke: {
    colors: ['var(--light)'],
  },
  fill: {
    opacity: 0.8,
  },
  grid: {
    borderColor: 'var(--light)',
  },
  responsive: [
    {
      breakpoint: 991,
      options: {
        chart: {
          height: 210,
        },
      },
    },
  ],
};

const polarChartEl = document.querySelector('#polarChart');
if (polarChartEl) {
  var polarChart = new ApexCharts(polarChartEl, options);
  polarChart.render();
}

// Widgets Card Bar Chart
function widgetsCommonOption(data) {
  return {
    series: [
      {
        data: data.widgetsYseries,
      },
    ],
    chart: {
      type: 'bar',
      width: '90%',
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
    fill: {
      colors: data.color,
    },
    states: {
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    grid: {
      show: false,
      padding: {
        top: -40,
        right: 0,
        bottom: -40,
        left: 0,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
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
  };
}

const widgetsData1 = {
  widgetsYseries: [100, 140, 80, 140, 200, 90, 110, 180, 105, 70, 80, 75, 78],
  color: '#6659FF',
};
const widgetsData2 = {
  widgetsYseries: [100, 140, 80, 140, 200, 90, 110, 190, 105, 70, 80, 75, 78],
  color: '#FA8070',
};
const widgetsData3 = {
  widgetsYseries: [100, 140, 80, 140, 200, 90, 110, 190, 105, 70, 80, 75, 78],
  color: '#FEB858',
};
const widgetsData4 = {
  widgetsYseries: [100, 140, 80, 140, 200, 90, 110, 190, 105, 70, 80, 75, 78],
  color: '#63D5BE',
};

const widgetsBarChart1El = document.querySelector('#widgetsBarChart1');
if (widgetsBarChart1El) {
  var widgetsBarChart1 = new ApexCharts(widgetsBarChart1El, widgetsCommonOption(widgetsData1));
  widgetsBarChart1.render();
}

const widgetsBarChart2El = document.querySelector('#widgetsBarChart2');
if (widgetsBarChart2El) {
  var widgetsBarChart2 = new ApexCharts(widgetsBarChart2El, widgetsCommonOption(widgetsData2));
  widgetsBarChart2.render();
}

const widgetsBarChart3El = document.querySelector('#widgetsBarChart3');
if (widgetsBarChart3El) {
  var widgetsBarChart3 = new ApexCharts(widgetsBarChart3El, widgetsCommonOption(widgetsData3));
  widgetsBarChart3.render();
}

const widgetsBarChart4El = document.querySelector('#widgetsBarChart4');
if (widgetsBarChart4El) {
  var widgetsBarChart4 = new ApexCharts(widgetsBarChart4El, widgetsCommonOption(widgetsData4));
  widgetsBarChart4.render();
}

// Revenue Growth Stack Chart
var revenueChartOption = {
  series: [
    {
      name: 'Debited',
      data: [180, 110, 110, 110, 82, 115, 115, 300, 120, 130, 200, 110],
    },
    {
      name: 'Credited',
      data: [200, 100, 200, 100, 220, 105, 105, 80, 120, 130, 130, 195],
    },
    {
      name: 'Interest',
      data: [70, 100, 150, 100, 100, 105, 105, 80, 100, 110, 110, 195],
    },
  ],
  chart: {
    type: 'bar',
    width: '100%',
    height: 310,
    stacked: true,
    offsetY: 0,
    offsetX: -15,
    toolbar: {
      show: false,
    },
  },
  colors: ['#FA8070', '#6659FF', '#63D5BE'],
  grid: {
    borderColor: 'var(--light)',
    show: true,
    padding: {
      top: 5,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 7,
      columnWidth: '28%',
      barHeight: '100%',
      s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
      e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff'],
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Dec'],
    show: false,
    minHeight: undefined,
    maxHeight: 50,
    labels: {
      show: true,
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
    min: 0,
    max: 500,
    logBase: 100,
    tickAmount: 5,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: true,
      offsetX: 0,
      offsetY: -22,
      rotate: 0,
      style: {
        colors: 'var(--dark)',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
        fontWeight: 500,
      },
    },
  },
  tooltip: {
    show: true,
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 325,
        },
      },
    },
    {
      breakpoint: 991,
      options: {
        chart: {
          height: 284,
        },
      },
    },
    {
      breakpoint: 575,
      options: {
        chart: {
          height: 220,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        chart: {
          height: 200,
        },
      },
    },
    {
      breakpoint: 370,
      options: {
        chart: {
          height: 180,
        },
        xaxis: {
          labels: {
            rotateAlways: true,
            rotate: -45,
            maxHeight: 40,
            style: {
              fontSize: '11px',
              fontFamily: 'Roboto, san-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: '38%',
          },
        },
      },
    },
  ],
};

const revenueChartEl = document.querySelector('#revenueChart');
if (revenueChartEl) {
  var revenueChart = new ApexCharts(revenueChartEl, revenueChartOption);
  revenueChart.render();
}

// Line Chart Common Option
function lineChart1(data) {
  return {
    series: [
      {
        name: data.name,
        data: data.series,
      },
    ],
    chart: {
      width: '100%',
      height: 40,
      type: 'line',
      offsetX: 0,
      offsetY: 0,

      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    tooltip: {
      ...toolTipMini,
    },
    dataLabels: {
      enabled: false,
    },
    colors: [data.color],
    stroke: {
      curve: 'smooth',
      lineCap: 'butt',
      width: 5,
    },
    title: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
      padding: {
        top: -30,
        right: 2,
        bottom: -12,
        left: 2,
      },
    },
    xaxis: {
      show: false,
      tooltip: {
        enabled: false,
      },
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
    yaxis: {
      show: false,
      min: 0,
      max: 30,
      logBase: 5,
      tickAmount: 3,
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
        show: true,
      },
    },
    responsive: [
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: 54,
          },
        },
      },
      {
        breakpoint: 1499,
        options: {
          chart: {
            height: 55,
          },
        },
      },
    ],
  };
}
const reviewChartData = {
  series: [0, 15, 5, 25, 6, 13, 5],
  color: '#6659FF',
  name: 'review',
};
const feedbackChartData = {
  series: [5, 20, 5, 18, 0, 25, 6],
  color: '#FA8070',
  name: 'feedback',
};

// Sparkling Chart
const lineCharReviewEl = document.querySelector('#lineCharReview');
if (lineCharReviewEl) {
  var lineCharReview = new ApexCharts(lineCharReviewEl, lineChart1(reviewChartData));
  lineCharReview.render();
}

const lineCharFeedbackEl = document.querySelector('#lineCharFeedback');
if (lineCharFeedbackEl) {
  var lineCharFeedback = new ApexCharts(lineCharFeedbackEl, lineChart1(feedbackChartData));
  lineCharFeedback.render();
}

var sparkLineLineOption = {
  series: [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ],
  chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true,
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ['#6659FF'],
  stroke: {
    curve: 'smooth',
    width: 3,
  },

  tooltip: {
    ...toolTipMini,
  },
};

const sparkLineLineEl = document.querySelector('#sparkLineLine');
if (sparkLineLineEl) {
  var sparkLineLine = new ApexCharts(sparkLineLineEl, sparkLineLineOption);
  sparkLineLine.render();
}

var sparkLineBarOption = {
  series: [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ],
  chart: {
    type: 'bar',
    width: 100,
    height: 35,
    offsetY: 0,
    offsetX: 0,
    sparkline: {
      enabled: true,
    },
  },
  colors: ['#6659FF'],
  fill: {
    opacity: 1,
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: -12,
    },
  },
  tooltip: {
    ...toolTipMini,
  },
};

const sparkLineBarEl = document.querySelector('#sparkLineBar');

if (sparkLineBarEl) {
  var sparkLineBar = new ApexCharts(sparkLineBarEl, sparkLineBarOption);
  sparkLineBar.render();
}

// Customer and Total Sale Chart
var saleAndCustomer = {
  chart: {
    height: 265,
    width: '100%',
    type: 'area',
    stacked: true,
    toolbar: {
      show: false,
    },
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min));
      },
    },
  },
  colors: ['#6659FF'],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: 'transparent',
    padding: {
      left: -26,
      right: -8,
      bottom: -12,
      top: -60,
    },
  },
  stroke: {
    curve: 'straight',
    width: [2],
  },
  markers: {
    size: 0,
    hover: {
      size: 10,
      strokeWidth: 4,
    },
  },
  series: [
    {
      name: 'sale',
      type: 'area',
      data: [37.3, 36.6, 39.5, 32.55, 32.55, 35.6, 30.45, 39.6, 37.5, 38.3, 36.2, 37.25, 37.22, 33.3, 34.23, 32.3, 34.23, 36.3, 38.28, 37.1, 39.28, 36.22, 36.22, 38.55, 36.22, 40.5, 40.8, 39.5],
    },
    {
      name: 'customer',
      type: 'column',
      data: [13.6, 11, 7, 8, 9, 15, 18, 10, 8, 10, 8, 8, 6, 11, 13.6, 11, 6, 8, 9, 15, 18, 10, 8, 10, 8, 7, 6, 11],
    },
  ],
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      show: false,
    },
    z: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  xaxis: {
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    tooltip: {
      enabled: false,
    },
    labels: {
      low: 0,
      show: false,
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 255,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 224,
        },
      },
    },
    {
      breakpoint: 575,
      options: {
        chart: {
          height: 220,
        },
      },
    },
  ],
};

const saleAndCustomerChartEl = document.querySelector('#saleAndCustomerChart');
if (saleAndCustomerChartEl) {
  var saleAndCustomerChart = new ApexCharts(saleAndCustomerChartEl, saleAndCustomer);
  saleAndCustomerChart.render();
}
