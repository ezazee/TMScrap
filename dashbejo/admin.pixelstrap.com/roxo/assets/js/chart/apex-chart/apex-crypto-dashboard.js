/*========================
   Widgets 4 Sparkiline Chart
 ============================*/
function widgets4SparklineOption(data, toolTipMini) {
  return {
    series: [
      {
        data: data.data,
      },
    ],
    chart: {
      type: 'line',
      width: '100%',
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: [data.color],
    stroke: {
      curve: 'smooth',
      width: 3,
    },

    tooltip: {
      ...toolTipMini,
    },
    responsive: [
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: 50,
          },
        },
      },
    ],
  };
}

/*===== Widgets 1 =====*/
const widgets4_1 = {
  data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19],
  color: 'var(--primary)',
};

const widgets4_1sparkLineLineEl = document.querySelector('#widgets4_1');
if (widgets4_1sparkLineLineEl) {
  var widgets4_1sparkLineLine = new ApexCharts(widgets4_1sparkLineLineEl, widgets4SparklineOption(widgets4_1, toolTipMini));
  widgets4_1sparkLineLine.render();
}

/*===== Widgets 2 =====*/
const widgets4_2 = {
  data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
  color: 'var(--secondary)',
};

const widgets4_2sparkLineLineEl = document.querySelector('#widgets4_2');
if (widgets4_2sparkLineLineEl) {
  var widgets4_2sparkLineLine = new ApexCharts(widgets4_2sparkLineLineEl, widgets4SparklineOption(widgets4_2, toolTipMini));
  widgets4_2sparkLineLine.render();
}

/*===== Widgets 3 =====*/
const widgets4_3 = {
  data: [10, 14, 8, 14, 20, 9, 11, 18, 10.5, 7, 8, 7.5, 7.8],
  color: 'var(--warning)',
};
const widgets4_3sparkLineLineEl = document.querySelector('#widgets4_3');
if (widgets4_3sparkLineLineEl) {
  var widgets4_3sparkLineLine = new ApexCharts(widgets4_3sparkLineLineEl, widgets4SparklineOption(widgets4_3, toolTipMini));
  widgets4_3sparkLineLine.render();
}

/*===== Widgets 4 =====*/
const widgets4_4 = {
  data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
  color: 'var(--success)',
};
const widgets4_4sparkLineLineEl = document.querySelector('#widgets4_4');
if (widgets4_4sparkLineLineEl) {
  var widgets4_4sparkLineLine = new ApexCharts(widgets4_4sparkLineLineEl, widgets4SparklineOption(widgets4_4, toolTipMini));
  widgets4_4sparkLineLine.render();
}
/*==================
   Mining Status 
 =====================*/
var miningStatusChartOption = {
  series: [
    {
      name: 'Bandwidth',
      data: [65, 55, 65, 75, 65, 75, 65, 75, 65, 55, 65, 45],
    },
    {
      name: 'Storage',
      data: [55, 45, 55, 65, 55, 65, 55, 65, 55, 45, 55, 35],
    },
  ],
  chart: {
    height: 234,
    width: '100%',
    type: 'area',
    stacked: true,
    offsetX: 0,
    offsetY: -30,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
    padding: {
      left: -18,
      right: -15,
      bottom: -30,
      top: 0,
    },
  },
  colors: ['#6659ff', '#fa8070'],
  fill: {
    type: 'solid',
    opacity: 0.1,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  markers: {
    size: 0,
    hover: {
      size: 10,
      strokeWidth: 4,
    },
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
    tooltip: {
      enabled: false,
    },
    labels: {
      offsetX: 0,
      show: true,
      maxHeight: 20,
      offsetY: -30,
      tickAmount: 10,
      tickPlacement: 'between',
      style: {
        colors: '#7690AC',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
        fontWeight: 400,
      },
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

  yaxis: {
    low: 0,
    offsetX: 0,
    offsetY: 0,
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
  tooltip: {
    ...toolTipMini,
  },

  responsive: [
    {
      breakpoint: 1800,
      options: {
        chart: {
          height: 196,
        },
      },
    },
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 186,
        },
      },
    },
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 375,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
};
const miningStatusChartEl = document.querySelector('#miningStatusChart');
if (miningStatusChartEl) {
  var miningStatusChart = new ApexCharts(miningStatusChartEl, miningStatusChartOption);
  miningStatusChart.render();
}

/*====================
  Table Sparkline Chart
 =======================*/
function priceGraphChartOptions(data, toolTipMini) {
  return {
    series: [
      {
        data: data.data,
      },
    ],
    chart: {
      type: 'line',
      width: '100%',
      height: 15,
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: [data.color],
    stroke: {
      curve: 'smooth',
      width: 3,
    },

    tooltip: {
      enabled: false,
    },
  };
}

/*===== Table Sparkline 1 =====*/
const priceGraph1 = {
  data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19],
  color: 'var(--primary)',
};
const priceGraphChart1El = document.querySelector('#priceGraphChart1');
if (priceGraphChart1El) {
  var priceGraphChart1 = new ApexCharts(priceGraphChart1El, priceGraphChartOptions(priceGraph1, toolTipMini));
  priceGraphChart1.render();
}

/*===== Table Sparkline 2 =====*/
const priceGraph2 = {
  data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19],
  color: 'var(--secondary)',
};
const priceGraphChart2El = document.querySelector('#priceGraphChart2');
if (priceGraphChart2El) {
  var priceGraphChart2 = new ApexCharts(priceGraphChart2El, priceGraphChartOptions(priceGraph2, toolTipMini));
  priceGraphChart2.render();
}

/*===== Table Sparkline 3 =====*/
const priceGraph3 = {
  data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19],
  color: 'var(--warning)',
};
const priceGraphChart3El = document.querySelector('#priceGraphChart3');
if (priceGraphChart3El) {
  var priceGraphChart3 = new ApexCharts(priceGraphChart3El, priceGraphChartOptions(priceGraph3, toolTipMini));
  priceGraphChart3.render();
}

/*===== Table Sparkline 4 =====*/
const priceGraph4 = {
  data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19],
  color: 'var(--success)',
};
const priceGraphChart4El = document.querySelector('#priceGraphChart4');
if (priceGraphChart4El) {
  var priceGraphChart4 = new ApexCharts(priceGraphChart4El, priceGraphChartOptions(priceGraph4, toolTipMini));
  priceGraphChart4.render();
}

/*===== Table Sparkline 5 =====*/
const priceGraph5 = {
  data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19],
  color: 'var(--primary)',
};

const priceGraphChart5El = document.querySelector('#priceGraphChart5');
if (priceGraphChart5El) {
  var priceGraphChart5 = new ApexCharts(priceGraphChart5El, priceGraphChartOptions(priceGraph5, toolTipMini));
  priceGraphChart5.render();
}

/*====================
  Live Mark Cap Box Chart
 =======================*/
var liveMarkCapBoxChartOption = {
  series: [
    {
      name: 'box',
      type: 'boxPlot',
      data: [
        {
          x: 'Jan 2015',
          y: [23, 30, 33, 36, 43],
        },
        {
          x: 'Jan 2016',
          y: [13, 24, 29, 33, 37],
        },
        {
          x: 'Jan 2017',
          y: [28, 33, 37, 42, 46],
        },
        {
          x: 'Jan 2018',
          y: [12, 15, 20, 25, 30],
        },
        {
          x: 'Jan 2019',
          y: [24, 32, 38, 42, 48],
        },
        {
          x: 'Jan 2020',
          y: [13, 17, 22, 25, 31],
        },
        {
          x: 'Jan 2021',
          y: [35, 37, 40, 42, 45],
        },
        {
          x: 'Jan 2022',
          y: [19, 24, 28, 34, 38],
        },
      ],
    },
  ],
  chart: {
    type: 'boxPlot',
    height: 174,
    width: '100%',
    offsetY: 0,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },

  stroke: {
    colors: ['var(--dark)'],
  },

  plotOptions: {
    boxPlot: {
      colors: {
        upper: 'var(--primary)',
        lower: 'var(--secondary)',
      },
    },
    bar: {
      columnWidth: '50%',
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      var dataY = series[0][dataPointIndex];
      var dataX = w.globals.initialSeries[seriesIndex].data[dataPointIndex].x;
      return '<ul class="boxChartTooltip">' + '<li><b>Price</b>: ' + dataY + '</li>' + '<li><b>Date</b>: ' + dataX + '</li>' + '</ul>';
    },
  },

  grid: {
    borderColor: 'var(--light)',
    padding: {
      top: -20,
      right: -20,
      bottom: -10,
    },
  },

  xaxis: {
    labels: {
      style: {
        colors: '#7690AC',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
      },
      minHeight: 0,
      maxHeight: 30,
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
  yaxis: {
    logBase: 10,
    tickAmount: 4,
    min: 10,
    max: 50,
    labels: {
      style: {
        colors: 'var(--dark)',
        fontSize: '12px',
        fontFamily: 'Roboto, san-serif',
        fontWeight: 500,
      },
      minWidth: 0,
      maxWidth: 22,
      formatter: (value) => {
        return `${value}K`;
      },
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 190,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 218,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          offsetY: 0,
          offsetX: 0,
        },
        grid: {
          padding: {
            top: -20,
            right: 0,
            left: 0,
            bottom: -10,
          },
        },
        xaxis: {
          labels: {
            show: true,
            rotate: -30,
            rotateAlways: true,
            minHeight: 48,
          },
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          offsetY: 0,
          offsetX: 0,
        },
        grid: {
          padding: {
            top: -20,
            right: 0,
            left: 0,
            bottom: -10,
          },
        },
        xaxis: {
          labels: {
            show: true,
            rotate: 0,
            rotateAlways: false,
            minHeight: 48,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        xaxis: {
          labels: {
            show: true,
            rotate: -25,
            rotateAlways: true,
            minHeight: 45,
          },
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        chart: {
          height: 174,
        },
      },
    },
  ],
};

const liveMarkCapBoxChartEl = document.querySelector('#liveMarkCapBoxChart');
if (liveMarkCapBoxChartEl) {
  var liveMarkCapBoxChart = new ApexCharts(liveMarkCapBoxChartEl, liveMarkCapBoxChartOption);
  liveMarkCapBoxChart.render();
}

/*==================== 
    Investing Pie Chart 
 ======================*/
function investingOption(data) {
  return {
    series: data.series,
    labels: data.labels,
    chart: {
      ...data.chart,
    },
    plotOptions: {
      ...data.plotOptions,
    },
    colors: data.colors,
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },

    tooltip: {
      fillSeriesColor: false,
      x: {
        show: false,
      },
    },

    stroke: {
      show: false,
    },

    responsive: data.responsive,
  };
}

/*===== Outer Chart =====*/
const investingChartOuster = {
  series: [70, 5, 10, 15],
  labels: ['Bitcoin', 'Litecoin', 'Ethereum', 'Ripple'],
  chart: {
    type: 'donut',
    width: '100%',
    height: 312,
  },
  plotOptions: {
    pie: {
      startAngle: -30,
      endAngle: 330,
      donut: {
        size: '80%',
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
              return `${val}%`;
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
            label: 'Bitcoin',
            fontSize: '14px',
            fontFamily: 'Roboto, san-serif',
            fontWeight: 400,
            color: '#7690AC',
            formatter: function (w) {
              return `${w.globals.series[0]}%`;
            },
          },
        },
      },
    },
  },
  colors: ['var(--primary)', 'var(--warning)', 'var(--secondary)', 'var(--success)'],
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
      breakpoint: 1700,
      options: {
        chart: {
          height: 280,
        },
      },
    },
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 310,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 264,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 228,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 307,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
};

const responsiveInner = JSON.parse(JSON.stringify(investingChartOuster.responsive));

responsiveInner.map((item) => {
  item.options.chart.height = item.options.chart.height - 75;
});

/*===== inner Chart =====*/
const investingChartInner = {
  series: investingChartOuster.series,
  labels: investingChartOuster.labels,
  chart: {
    type: 'donut',
    width: '100%',
    height: investingChartOuster.chart.height - 75,
  },
  plotOptions: {
    pie: {
      startAngle: investingChartOuster.plotOptions.pie.startAngle,
      endAngle: investingChartOuster.plotOptions.pie.endAngle,
      donut: {
        size: '90%',
      },
    },
  },
  colors: investingChartOuster.colors,
  responsive: responsiveInner,
};

const investingOuterChartEl = document.querySelector('#investingOuterChart');
if (investingOuterChartEl) {
  var investingOuterChart = new ApexCharts(investingOuterChartEl, investingOption(investingChartOuster));
  investingOuterChart.render();
}

const investingInnerChartEl = document.querySelector('#investingInnerChart');
if (investingInnerChartEl) {
  var investingInnerChart = new ApexCharts(investingInnerChartEl, investingOption(investingChartInner));
  investingInnerChart.render();
}
