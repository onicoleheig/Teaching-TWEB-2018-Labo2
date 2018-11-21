import React from 'react';

import Table from '@material-ui/core/Table';

import Issue from './Issue';

function TableIssues(props) { 
  const { items } = props;
  return(
    <Table>
      {items.map(item => (
        <Issue
          status = {item.status}
          title = {item.title}
          activity = {item.activity}
          nbComments = {item.nbComments}
        ></Issue>
      ))}
    </Table>
  );
}

export default TableIssues;