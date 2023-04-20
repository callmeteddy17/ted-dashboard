import React from 'react';
import {
  KanbanComponent,
  ColumnDirective,
  ColumnsDirective,
} from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    <div className="md:m-5 m-10 md:p-5 p-10 bg-white rounded-3xl">
      <Header category={'App'} title={'Kanban'} />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        keyField="Status"
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}>
        <ColumnsDirective>
          {kanbanGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
