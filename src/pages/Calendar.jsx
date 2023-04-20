import React from 'react';
import {
  ScheduleComponent,
  Inject,
  ViewDirective,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className="md:m-5 m-10 md:p-5 p-10 bg-white rounded-3xl">
      <Header category={'App'} title={'Calendar'} />
      <ScheduleComponent
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2023, 0, 4)}
        height={850}>
        <Inject
          services={[Day, Week, Month, Resize, WorkWeek, DragAndDrop, Agenda]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
