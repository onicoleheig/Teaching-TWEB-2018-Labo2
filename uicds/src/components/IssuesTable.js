import React from 'react';

import Table from '@material-ui/core/Table';

import Issue from './Issue';

function TableIssues(props) { 
  return(
    <Table>
      <Issue
        status = {props.status}
        title = {props.title}
        activity = {props.activity}
        nbComments = {props.nbComments}
      ></Issue>
    </Table>
  );
}

export default TableIssues;