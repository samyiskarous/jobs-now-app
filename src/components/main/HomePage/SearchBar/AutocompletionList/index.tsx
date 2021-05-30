import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import handleGetAndAttachSkillsToAutocompletionJobs from '../../../../../actions/attachSkillsToAutocompletionJobs';
import './styles.css'

const AutocompletionList = (props: any) => {
    const {dispatch, autocompletionJobs} = props;

    useEffect(() => {
        dispatch(handleGetAndAttachSkillsToAutocompletionJobs(autocompletionJobs))
    }, []);

    return (
        <div className="autocompletionList">
            {autocompletionJobs.map((job: any, index: any) => {
                return <Link key={index} to="#">{job.suggestion}</Link>
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