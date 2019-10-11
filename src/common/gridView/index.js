import React from 'react';
import Paper from '@material-ui/core/Paper';
import { PagingState, CustomPaging } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel
} from '@devexpress/dx-react-grid-material-ui';

export default data => {
  return (
    <Paper>
      <Grid columns={data.tableConfig.columns} rows={data.data}>
        <PagingState
          defaultCurrentPage={data.defaultCurrentPage}
          defaultPageSize={data.defaultPageSize}
        />
        <CustomPaging totalCount={data.totalCount} />
        <Table cellComponent={data.cellComponent} />
        <TableHeaderRow />
        <PagingPanel pageSizes={data.tableConfig.PAGE_SIZES} />
      </Grid>
    </Paper>
  );
};
