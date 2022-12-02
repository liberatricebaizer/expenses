import React from 'react';

import ExpensDate from './ExpensDate';
import Card from '../UI/Card';
import './ExpensItem.css';

const ExpensItem = props => {
  return (
    <li>
      <Card className="expense-item">
        <ExpensDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpensItem;
