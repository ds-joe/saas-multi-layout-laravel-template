import type { Props } from 'react-apexcharts';

export type LineChartProps = {
  series: Props['series'];
  categories: Array<string | number>;
  options?: Props['options'];
};
