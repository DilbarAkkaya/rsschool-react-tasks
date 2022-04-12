import React from 'react';
import ReactDom from 'react-dom';

class Portal extends React.Component {
  el = document.createElement('div');
  componentDidMount() {
    document.body.appendChild(this.el);
  }
  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDom.createPortal(this.props.children, this.el);
  }
}

export default Portal;
