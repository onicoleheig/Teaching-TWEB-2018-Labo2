import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown/with-html';

import { storiesOf } from '@storybook/react';

import IssueActivity from '../components/IssueActivity';
import IssueTitle from '../components/IssueTitle';
import IssueTable from '../components/IssuesTable';
import IssueStatusIcon from '../components/IssueStatusIcon';
import IssueCommentNumber from '../components/IssueCommentNumber';

storiesOf('IssueTable', module)
  .add('Example full', () => (
    <IssueTable status="open" title="The keyboard shows and hide when clicking on input in android/chrome" activity="#14063 opened 36 minutes ago by Aykelith" nbComments="10"></IssueTable>
  ))
  .add('Example without comments', () => (
    <IssueTable status="open" title="The keyboard shows and hide when clicking on input in android/chrome" activity="#14063 opened 36 minutes ago by Aykelith" nbComments="0"></IssueTable>
  ))
  .add('Example closed', () => (
    <IssueTable status="closed" title="The keyboard shows and hide when clicking on input in android/chrome" activity="#14063 opened 36 minutes ago by Aykelith" nbComments="10"></IssueTable>
  ))
  .add('Usage', () => <ReactMarkdown source="```<IssueTable status='open' title='The keyboard shows and hide when clicking on input in android/chrome' activity='#14063 opened 36 minutes ago by Aykelith' nbComments='10'></IssueTable>```" />);

storiesOf('IssueTitle', module)
  .add('Example', () => <IssueTitle text="This is a title"></IssueTitle>)
  .add('Usage', () => <ReactMarkdown source="```<IssueTitle text='This is a title'></IssueTitle>```" />);

storiesOf('IssueActivity', module)
  .add('Example', () => <IssueActivity text="This is the activity title"></IssueActivity>)
  .add('Usage', () => <ReactMarkdown source="```<IssueActivity text='This is the activity title'></IssueActivity>```" />);

storiesOf('IssueStatusIcon', module)
  .add('Example open', () => <IssueStatusIcon status="open"></IssueStatusIcon>)
  .add('Example closed', () => <IssueStatusIcon status="closed"></IssueStatusIcon>)
  .add('Usage', () => <ReactMarkdown source="```<IssueStatusIcon status='open'></IssueStatusIcon>```" />);

storiesOf('IssueCommentNumber', module)
  .add('Example 10 comments', () => <IssueCommentNumber nbComments="10"></IssueCommentNumber>)
  .add('Example empty', () => <IssueCommentNumber nbComments="0"></IssueCommentNumber>)
  .add('Usage', () => <ReactMarkdown source="```<IssueCommentNumber nbComments='10'></IssueCommentNumber>```" />);