import React from 'react';

import './ExpensDate.css';

const ExpensDate = props => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="expens-date">
      <div className="expens-date__month">{month}</div>
      <div className="expens-date__day">{day}</div>
      <div className="expens-date__year">{year}</div>
    </div>
  );
};

export default ExpensDate;
