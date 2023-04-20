import {
  ChartComponent,
  SeriesCollectionDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  SeriesDirective,
  SplineAreaSeries,
  LineSeries,
} from '@syncfusion/ej2-react-charts';
import React from 'react';

import {
  areaPrimaryYAxis,
  areaPrimaryXAxis,
  areaCustomSeries,
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title={'Inflation Rate'} />
      <ChartComponent
        id="area-chart"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373e' : '#fff'}>
        <Inject services={[LineSeries, SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, i) => (
            <SeriesDirective key={i} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
