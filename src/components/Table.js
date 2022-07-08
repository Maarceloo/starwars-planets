import React from 'react';
import Context from '../context/Context';

function Table() {
  return (
    <div>
      <table>
        <Context.Consumer>
          {(value) => value.map((item) => console.log(item))}
        </Context.Consumer>
      </table>
    </div>
  );
}

export default Table;
