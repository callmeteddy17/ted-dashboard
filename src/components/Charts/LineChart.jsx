import {
  ChartComponent,
  SeriesCollectionDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  SeriesDirective,
  LineSeries,
} from '@syncfusion/ej2-react-charts';
import React from 'react';

import {
  LinePrimaryYAxis,
  LinePrimaryXAxis,
  lineCustomSeries,
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373e' : '#fff'}>
      <Inject services={[LineSeries, Tooltip, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, i) => (
          <SeriesDirective key={i} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
