import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '../../../../common/gridView';
import { tableConfig } from './const';
import { SearchInput } from 'components';
const useStyles = makeStyles(theme => ({
  searchInput: {
    marginRight: theme.spacing(0)
  }
}));
const data = [
  { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
  { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
  { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
  { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
  { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
  { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
  { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
  { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
  { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
  { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
  { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
  { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' },
  { name: 'Thiện', gender: 'Male', city: 'HCM', car: 'Honda' },
  { name: 'Thiện1', gender: 'Male', city: 'HCM1', car: 'Yamaha' }
];

const UsersTable = () => {
  const generateRows = data => {
    return data.map((item, index) => {
      const { name, gender, city, car } = item;
      return {
        name,
        gender,
        city,
        car,
        index: index + 1
      };
    });
  };
  const [rows] = useState(generateRows(data));
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div>
      <Grid
        data={rows}
        defaultPageSize={5}
        defaultCurrentPage={0}
        tableConfig={tableConfig}
      />
    </Fragment>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;
