import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './PaginationDot.css'

const styles = {
  root: {
    height: 20,
    width: 20,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    padding: 0,
  },
  dot:  {
    backgroundColor: '#EAEAEA',
    height: 12,
    width: 12,
    borderRadius: 10,
  },
  active: {
    backgroundColor: '#FFFFFF',
    height: 12,
    width: 12,
    borderRadius: 10,
  },
};

class PaginationDot extends React.Component {
  handleClick = event => {
    this.props.onClick(event, this.props.index);
  };

  render() {
    const { active } = this.props;

    let styleDot;

    if (active) {
      styleDot = Object.assign({}, styles.dot, styles.active);
    } else {
      styleDot = styles.dot;
    }

    return (
      <button type="button" className={'paginationDot'} style={styles.root} onClick={this.handleClick}>
        <div style={styleDot} />
      </button>
    );
  }
}

PaginationDot.propTypes = {
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationDot;