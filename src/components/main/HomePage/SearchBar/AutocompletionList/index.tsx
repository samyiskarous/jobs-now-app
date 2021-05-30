import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css'

const AutocompletionList = (props: any) => {
    const {autocompletionJobs} = props;

    return (
        <div className="autocompletionList">
            {autocompletionJobs.map((job: any, index: any) => {
                return <Link key={index} to="#" title="Click to view the Job">{job.suggestion}</Link>
            })}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        autocompletionJobs: state.autocompletionJobs,
    };
}

const ConnectedAutocompletionList = connect(mapStateToProps)(AutocompletionList);

export default ConnectedAutocompletionList;