import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Search from './Search';

import { fetchCompanies } from '../actions';

class NavbarMenu extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCompanies());
  }

  render() {
    const { names } = this.props;
    return (
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to={'/'} className="navbar-item">
            Home
          </Link>
          <Link to={'/about'} className="navbar-item">
            About
          </Link>
          <Link to={'/visualiza'} className="navbar-item">
            Visuliza
          </Link>
          {/*<div className="navbar-item has-dropdown is-hoverable">*/}
          {/*  <div className="navbar-link">Company List</div>*/}
          {/*  <div className="navbar-dropdown is-right">*/}
          {/*    {names.map((name, idx) => (*/}
          {/*      <a key={idx} className="navbar-item">*/}
          {/*        {name}*/}
          {/*      </a>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="navbar-end">
          <Search />
        </div>
      </div>
    );
  }
}

NavbarMenu.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  names: state.companies.names
});

export default connect(mapStateToProps)(NavbarMenu);
