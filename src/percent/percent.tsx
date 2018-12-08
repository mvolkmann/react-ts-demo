import React from 'react';
import './percent.scss';

interface IProps {
  count: number;
  total: number;
}

export default React.memo(
  ({count, total}: IProps): JSX.Element => {
    const percent = total === 0 ? 0 : (count / total) * 100;
    return (
      <div className="percent">
        <span>{percent.toFixed(2)}%</span>
      </div>
    );
  }
);
