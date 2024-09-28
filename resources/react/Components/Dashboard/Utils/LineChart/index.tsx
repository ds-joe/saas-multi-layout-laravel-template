// Dependencies
import Chart from "react-apexcharts";

// Redux
import { useSelector } from "react-redux";
import { DashboardRootState } from "@/redux/store";

// Hooks
import useTheme from "@/hooks/useTheme";

// Utils
import apexchart from "@/utilities/charts/apexchart";

// Types
import type { LineChartProps } from '@/types/Components/Dashboard/Utils/LineChart';

const LineChart: RC<LineChartProps> = ({ series, categories, options }) => {
  const reduxDarkMode = useSelector((state: DashboardRootState) => state.dashboard.layout.darkMode) ? 'dark' : 'light';
  const chartTheme = useTheme().dashboard.utilities.chart;
  const chartOptions = {
    xaxis: {
      labels: {
        style: {
          colors: chartTheme[reduxDarkMode].labels.colors
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: chartTheme[reduxDarkMode].labels.colors
        }
      }
    },
    grid: {
      borderColor: chartTheme[reduxDarkMode].grid.borderColor,
    },
    colors: chartTheme.colors,
    ...options
  }

  const chartConfig = apexchart.lineChart(series, categories, chartOptions);

  return <Chart {...chartConfig} />
}


export default LineChart;
