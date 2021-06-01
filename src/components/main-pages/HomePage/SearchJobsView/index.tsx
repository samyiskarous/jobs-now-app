import React, { ReactNode } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AutocompletionJobsStateInterface } from '../../../../redux/reducers/autocompletionJobsReducer';
import { AutocompletionJobsWithSkillsStateInterface } from '../../../../redux/reducers/autocompletionJobsWithSkillsReducer';
import JobsList from '../../../reusable/JobsList';
import Loader from '../../../reusable/Loader';
import TwoSidedView from '../../../reusable/TwoSidedView';
import './styles.css'

interface SearchJobsViewPropsInterface{
    searchText: string;
    autocompletionJobsWithSkillsState: AutocompletionJobsWithSkillsStateInterface;
    autocompletionJobsState: AutocompletionJobsStateInterface;
    persistedSearchQueries: string[];
}

const SearchJobsView = (props: SearchJobsViewPropsInterface) => {

    const {
        autocompletionJobsWithSkillsState, 
        searchText, 
        autocompletionJobsState,
        persistedSearchQueries
    } = props;

    
    const sidebarList: ReactNode = (
        <ul>
            {persistedSearchQueries.map((searchQueryValue, index) => {
                return (
                    <li key={index}>
                        <Link target="_blank" to={`/search?query=${searchQueryValue}`} className="medium-font plainLink">
                            {searchQueryValue}
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
    
    if(autocompletionJobsWithSkillsState.loading
        || autocompletionJobsState.loading)
        return <Loader />
    
    return (
        <>
            <p className="xlarge-font bold mainPageTitleSpacings alignTextCenterResponsive">
                {`"${searchText}" jobs (${autocompletionJobsState.data.length})`}
            </p>

            <TwoSidedView 
                mainViewChildren={
                    <JobsList jobs={autocompletionJobsWithSkillsState.data} loadOnScrollEnabled={false}/>
                }
                sidebarData={{
                    title:"Search History:",
                    listData: sidebarList
                }}
            />
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        autocompletionJobsWithSkillsState: state.autocompletionJobsWithSkillsState,
        autocompletionJobsState: state.autocompletionJobsState
    }
}
  
const ConnectedSearchJobsView = connect(mapStateToProps)(SearchJobsView);

export default ConnectedSearchJobsView;