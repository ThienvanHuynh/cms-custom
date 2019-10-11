import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import CellAction from '../../../../common/gridView/cellAction';

const TableCell = (events, props) => {
  const { column } = props;
  const mapProps = { ...props, ...{ events } };
  switch (column.name) {
    case 'action':
      return <CellAction {...mapProps} />;
    default:
      return <Table.Cell {...props} />;
  }
};

TableCell.propTypes = {
  column: PropTypes.object
};

export default TableCell;
