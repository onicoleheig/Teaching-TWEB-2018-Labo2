import React from 'react';

function issueCommentsNumber(props) {
  return props.nbComments !== "0" ? <span>{props.nbComments}</span> : <span></span>;
}

export default issueCommentsNumber;


