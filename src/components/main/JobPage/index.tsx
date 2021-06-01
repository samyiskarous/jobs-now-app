import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import TwoSidedView from '../../reusable/TwoSidedView';
import '../../../assets/css/main-view-common-styles.css';
import './styles.css'
import getAndSetJobPageData from '../../../redux/actions/getJobPageData';
import { RelatedJobInterface, SkillInterface } from '../../../util/api-functions';
import { JobPageStateInterface } from '../../../redux/reducers/jobPageDataReducer';


interface JobPagePropsInterface{
    jobPageState: JobPageStateInterface;
    callGetAndSetJobPageData?: any;
}

const JobPage = (props: JobPagePropsInterface) => {
    const {callGetAndSetJobPageData, jobPageState} = props;
    const {jobWithSkills, relatedJobs} = jobPageState.data;

    const {uuid: jobUUID} = useParams<any>();

    useEffect(() => {
        callGetAndSetJobPageData(jobUUID)
    }, [callGetAndSetJobPageData, jobUUID])
    
    if(jobPageState.loading){
        return null;    
    }
    
    return (
        <>  
            <p className="xlarge-font bold mainPageTitleSpacings alignTextCenterResponsive">{jobWithSkills.title}</p>
    
            <TwoSidedView
                mainViewChildren={
                    <div className="pageMainView">
                        <p className="large-font bold relatedSkillsTitle">Related Skills</p>

                        <div className="mainViewCardsList">
                            {jobWithSkills.skills.map((skill, index) => {
                                return <SkillCard key={index} skill={skill}/>
                            })}
                            
                        </div>
                    </div>
                }
                sidebarData={{
                    title: 'Related Jobs:',
                    listData: <RelatedJobsList relatedJobs={relatedJobs}/>
                }}
            />
        </>
    );
}

const SkillCard = (props: {skill: SkillInterface}) => {
    const {skill} = props;

    return (
        <div className="mainViewCard">
            <Link 
                to={`/skills/${skill.skill_uuid}`} 
                className="large-font bold plainLink skillTitle">
                {skill.skill_name}
            </Link>
            <p className="skillDescription">{skill.description}</p>
            <div className="cardProperties">
                <span className="small-font cardProperty">
                    <span className="bold">Level: &nbsp;</span>
                    {skill.level}
                </span>
                <span className="small-font cardProperty">
                    <span className="bold">Importance: &nbsp;</span>
                    {skill.importance}
                </span>

            </div>
        </div>
    );
}



const RelatedJobsList = (props: {relatedJobs: RelatedJobInterface[]}) => (
    <ul>
        {props.relatedJobs.map((relatedJob, index) => {
            return (
                <li key={index}>
                    <Link to={`/jobs/${relatedJob.uuid}`} className="medium-font plainLink">
                        {relatedJob.title}
                    </Link>
                </li>
            )
        })}
    </ul>
);

const mapStateToProps = (state: any) => {
    return {
        jobPageState: state.jobPageState,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        callGetAndSetJobPageData: (jobUUID: string) => dispatch(getAndSetJobPageData(jobUUID))
    }
}

const ConnectedJobPage = connect(mapStateToProps, mapDispatchToProps)(JobPage);

export default ConnectedJobPage;