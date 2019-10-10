/* eslint
  react/destructuring-assignment: off,
  react/prop-types: off,
*/
import React from 'react';
import ReactDOM from 'react-dom';

// Exercise 01/01
// ===========
//
// At this stage we are not interesting in layout, just
// getting used to JSX and some of its features. Therefore,
// don't worry about how the component renders/looks, focus
// on making sure the right data is rendered.
//
// Tasks
// --------
// ✅    Your component should accept a 'status' prop, which renders the status label
// ✅    Your component should accept a 'stat' prop, which renders a statistic
// ✅    Your component should render one of the allowed status icons
//
// 🚫    Styling & layout are out of scope for this exercise
//
// ⭐️    Capitalise the first letter of the status label
//
// Tip
// ------
// 🐨   You can create an icon using the 'i' DOM node, and with either of the following class names:
//        Unavailable  =>    'fas fa-user-slash'
//        Available    =>    'far fa-user'
//        Busy         =>    'fas fa-user'

function StatusBlock(props) {
  return (
    <div>
      <Status status={props.status} />
      <Statistics stat={props.stat} />
    </div>
  );
}

function Status(props) {
  const capitalizedStatus = props.status[0].toUpperCase() + props.status.slice(1);

  return (
    <div>
      <StatusIcon status={props.status} />
      <h1>Your status is {capitalizedStatus}</h1>
    </div>
  );
}

function StatusIcon(props) {
  const icon = {
    unavailable: "fas fa-user-slash",
  }
  switch (props.status) {
    case 'unavailable':
      return  <UnavailableIcon />;
    case 'available':
      return <AvailableIcon />;
    case 'busy':
      return <BusyIcon />;
    default:
      return "Wrong status"
  }
}

function UnavailableIcon(props) {
  return (
    <i className="fas fa-user-slash" />
  );
}

function AvailableIcon(props) {
  return (
    <i className="far fa-user" />
  );
}

function BusyIcon(props) {
  return (
    <i className="fas fa-user" />
  );
}

function Statistics(props) {
  return (
    <div>Statistics is {props.stat}</div>
  );
}

export default StatusBlock;
