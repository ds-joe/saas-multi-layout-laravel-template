// Types
import type { Props } from 'react-apexcharts';

// Tailwind utils
import colors from '~tailwind/custom/colors';

const lineChart = (
  series: Props['series'],
  categories: Array<string | number>,
  options: Props['options'] = {},
): Props => {
  return {
    type: 'line',
    height: 300,
    series,
    options: {
      chart: {
        toolbar: {
          show: false,
          ...options.chart?.toolbar,
        },
        ...options.chart,
      },
      title: {
        // @ts-ignore it works fine but has type issue
        show: '',
        ...options.title,
      },
      dataLabels: {
        enabled: false,
        ...options.dataLabels,
      },
      colors: [colors.primary.secondary, colors.success.secondary],
      stroke: {
        lineCap: 'round',
        curve: 'smooth',
        ...options.stroke,
      },
      markers: {
        size: 0,
        ...options.markers,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
            ...options.xaxis?.labels?.style,
          },
          ...options.xaxis?.labels,
        },
        categories,
        ...options.xaxis,
      },
      yaxis: {
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
            // @ts-ignore it works fine but has type issue
            ...options.yaxis?.labels.style,
          },
          // @ts-ignore it works fine but has type issue
          ...options.yaxis?.labels,
        },
        ...options.yaxis,
      },
      grid: {
        show: true,
        borderColor: '#dddddd',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
            ...options.grid?.xaxis?.lines,
          },
          ...options.grid?.xaxis,
        },
        padding: {
          top: 5,
          right: 20,
          ...options.grid?.padding,
        },
        ...options.grid,
      },
      fill: {
        opacity: 0.8,
        ...options.fill,
      },
      tooltip: {
        theme: 'dark',
        ...options.tooltip,
      },
      ...options,
    },
  };
};

export default lineChart;
