/* eslint react/destructuring-assignment: off */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { getClassNameVariants } from 'scenes/components/Header/SummaryBlock/utils';

import StatusContainer from 'scenes/components/Header/SummaryBlock/StatusContainer';
import StatusLabel from 'scenes/components/Header/SummaryBlock/StatusLabel';
import StatusIcon from 'scenes/components/Header/SummaryBlock/StatusIcon';
import Wrapper from 'scenes/components/Header/SummaryBlock/Wrapper';
import Stat from 'scenes/components/Header/SummaryBlock/Stat';


// Exercise 01/02
// ===========
//
// We are going to focus more on component usage, but pulling in
// components used in the demo app. We'll attempt to reconstruct
// the status summary icon blocks, which display a statistic alongside
// the consultant status.
//
// Tasks
// --------
// ✅    Your component should accept a 'status' prop, which renders the status label
// ✅    Your component should accept a 'stat' prop, which renders a statistic
// ✅    Using the provide components, you should try and aim to reproduce the demo app status block
//      @see: http://localhost:6006/?selectedKind=Header%2FSummaryBlock&selectedStory=Available&full=0
//
// Notes
// -------
// `StatusContainer`  Only accepts `children` prop
// `StatusLabel`      Should be given a `label` prop; accepts no other props
// `StatusIcon`       Should be given a `iconClassName` prop; accepts no other prop
// `Wrapper`          Should be given a `colorClassName` prop
// `Stat`             Should be given the `stat` as a `children` prop; this accepts no other properties
//
// The following components are designed to be "parent" elements:
// 1. `Wrapper` is the outermost component
// 2. `StatusContainer` wraps the `Status*` components
//
// Tip
// ------
// 🐨  The imported components should be sufficiently semantic in their naming
//    that how they might be used to construct the desired layout seems logical.

function StatusBlock({ status, stat }) {
  const { color, icon } = getClassNameVariants(status)

  return (
    <Wrapper colorClassName={color}>
      <StatusContainer>
        <StatusIcon iconClassName={icon} />
        <StatusLabel label={status} />
      </StatusContainer>
      <Stat>{stat}</Stat>
    </Wrapper>
  );
}

export default StatusBlock;
