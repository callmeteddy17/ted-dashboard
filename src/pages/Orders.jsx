import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Page,
  Filter,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid, contextMenuItems } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className=" md:m-5 m-10 md:p-5 p-10 bg-white rounded-3xl">
      <Header category="Page" title="Order" />
      <GridComponent
        id="gridcomp"
        allowPaging
        allowSorting
        dataSource={ordersData}>
        <ColumnsDirective>
          {ordersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Page,
            Filter,
            ExcelExport,
            PdfExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
