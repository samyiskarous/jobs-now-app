import React from 'react'
import { connect } from 'react-redux';

const SearchInput = (props: any) => {
    return null;
}

const mapStateToProps = (state: any) => {
    return state;
}

const ConnectedSearchInput = connect(mapStateToProps)(SearchInput);

export default ConnectedSearchInput