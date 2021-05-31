import React, { ReactNode } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TwoSidedView from '../../reusable/TwoSidedView';
import '../../../assets/css/main-view-common-styles.css';
import './styles.css'

interface JobPagePropsInterface{

}

const JobPage = (props: any) => {
    const {jobPage} = props;
    console.log(props)

    const relatedJobsList: ReactNode = (
        <ul>
            {/* {jobPage.relatedJobs.map((relatedJob: any, index: any) => {
                return (
                    <li key={index}>
                        <Link target="_blank" to={`/jobs/${relatedJob.id && 0}`} className="medium-font plainLink">
                            {relatedJob.title && 'Job Title'}
                        </Link>
                    </li>
                )
            })} */}
        </ul>
    )

    return (
        <>
            <p className="xlarge-font bold mainPageTitleSpacings">Job Title</p>
            
            <TwoSidedView
                mainViewChildren={
                    <div className="pageMainView">
                        <p className="large-font bold relatedSkillsTitle">Related Skills</p>

                        <div className="mainViewCardsList">
                            {/* {jobWithSkills.skills.map} */}
                            <div className="mainViewCard">
                                <div className="cardProperties">
                                    <span className="small-font">
                                        <span className="bold">Property: &nbsp;</span>
                                        3.7
                                    </span>
                                    <span className="small-font">
                                        <span className="bold">Property: &nbsp;</span>
                                        3.7
                                    </span>
                                    <span className="small-font">
                                        <span className="bold">Property: &nbsp;</span>
                                        3.7
                                    </span>
                                </div>
                            </div>
                            <div className="mainViewCard">
                                <div className="cardProperties">
                                    <span className="small-font">
                                        <span className="bold">Property: &nbsp;</span>
                                        3.7
                                    </span>
                                    <span className="small-font">
                                        <span className="bold">Property: &nbsp;</span>
                                        3.7
                                    </span>
                                    <span className="small-font">
                                        <span className="bold">Property: &nbsp;</span>
                                        3.7
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                sidebarData={{
                    title: 'Related Jobs:',
                    listData: relatedJobsList
                }}
            />
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        jobPage: state.jobPage,
    }
}

const ConnectedJobPage = connect(mapStateToProps)(JobPage);

export default ConnectedJobPage;