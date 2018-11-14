import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import IssueTitle from "./IssueTitle";
import IssueActivity from "./IssueActivity";
import IssueCommentNumber from './IssueCommentNumber';
import IssueStatusIcon from './IssueStatusIcon';

function Issue(props) {  
  return(
    <TableRow>
      <TableCell>
        <IssueStatusIcon status={props.status} />
      </TableCell>
      <TableCell>
        <IssueTitle text={props.title}></IssueTitle>
        <IssueActivity text={props.activity}></IssueActivity>
      </TableCell>
      <TableCell>
        <IssueCommentNumber nbComments={props.nbComments}></IssueCommentNumber>
      </TableCell>
    </TableRow>
  );
}

export default Issue;