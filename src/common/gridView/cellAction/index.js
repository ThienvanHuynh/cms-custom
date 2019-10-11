import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { Fab, Tooltip } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const CellAction = ({ ...props }) => {
  const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing()
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    },
    btnRed: {
      backgroundColor: '#d32f2f'
    }
  }));
  const classes = useStyles();
  return (
    <Table.Cell {...props}>
      <Tooltip title="Xem">
        <Fab
          variant="extended"
          size="small"
          color="inherit"
          aria-label="Xem"
          className={classes.fab}
          //   onClick={() => handleDetail(row.id)}
        >
          <VisibilityIcon fontSize="small" />
        </Fab>
      </Tooltip>
      <Tooltip title="Chỉnh sửa">
        <Fab
          variant="extended"
          size="small"
          color="secondary"
          aria-label="Sửa"
          className={classes.fab}
          //   onClick={() => handleDetail(row.id)}
        >
          <EditIcon fontSize="small" />
        </Fab>
      </Tooltip>
      <Tooltip title="Xóa">
        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="Xóa"
          className={(classes.fab, classes.btnRed)}
          //   onClick={() => handleDetail(row.id)}
        >
          <DeleteIcon fontSize="small" />
        </Fab>
      </Tooltip>
    </Table.Cell>
  );
};

CellAction.propTypes = {
  actions: PropTypes.object,
  props: PropTypes.object,
  row: PropTypes.object.isRequired,
  events: PropTypes.object,
  authorized: PropTypes.object
};

export default CellAction;
