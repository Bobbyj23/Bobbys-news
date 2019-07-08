import React, { Component } from 'react';

class AppNav extends Component {

  render() {
    const navI = this.props.navItems
    const handleme = this.props.handleNavClick
    return (
      <nav>
        {navI.map((menuI) => (
          <a href='#' onClick={handleme}>{menuI.label} | </a>
        ))}
      </nav>
    )
  }
}

export default AppNav;


