import React from 'react';

function CommentsForm(props) {
  return props.nbComments !== "0" ? <span>{props.nbComments}</span> : <span></span>;
}

export default CommentsForm;


