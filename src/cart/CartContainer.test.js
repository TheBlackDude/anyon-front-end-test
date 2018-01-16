import React from 'react';
import ReactDOM from 'react-dom';
import CartContainer from './CartContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartContainer />, div);
});
