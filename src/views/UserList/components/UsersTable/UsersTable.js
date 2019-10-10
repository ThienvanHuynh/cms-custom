import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '../../../../common/gridView';
import { tableConfig } from '../../const';
import { SearchInput } from 'components';
import { getListUser } from '../../action';
const useStyles = makeStyles(theme => ({
  searchInput: {
    marginRight: theme.spacing(0)
  }
}));
const UsersTable = props => {
  const { getListUser, ListUser } = props;

  const generateRows = data => {
    if (data && data.length) {
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
    }
  };
  const rows = generateRows(ListUser);
  const classes = useStyles();
  useEffect(() => {
    getListUser();
  }, []);
  return (
    <Fragment>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div>
      {ListUser && (
        <Grid
          data={rows}
          defaultPageSize={5}
          defaultCurrentPage={0}
          tableConfig={tableConfig}
          totalCount={ListUser ? ListUser.length : 0}
        />
      )}
    </Fragment>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  const getDataUser = state.reducerUser;
  const ListUser = getDataUser.get('ListUser');
  return {
    ListUser
  };
};
const mapDispatchToProps = {
  getListUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersTable);
