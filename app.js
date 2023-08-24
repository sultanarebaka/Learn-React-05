
import React from 'react';
import ReactDOM from 'react-dom/client';

class Somapti extends React.Component {
  render() {
    return <h2>Hi, I am a Somapti!</h2>;
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Somapti />);
