import React from 'react';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const tabList = props.tabs.map((item, index) =>
    <li key={index}>{item.name}</li>
  );
  return <ul>{tabList}</ul>
 }

 Nav.propTypes = {
   tabs: PropTypes.array.isRequired,
 }

 export default Nav;
