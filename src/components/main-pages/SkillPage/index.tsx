import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import TwoSidedView from '../../reusable/TwoSidedView';
import '../../../assets/css/main-view-common-styles.css'
import './styles.css'
import getAndSetSkillPageData from '../../../redux/actions/getSkillPageData';
import { SkillPageStateInterface } from '../../../redux/reducers/skillPageReducer';
import { JobInterface, SkillInterface } from '../../../util/api-functions';
import Loader from '../../reusable/Loader';

interface SkillPagePropsInterface{
    skillPageState: SkillPageStateInterface;
    callGetAndSetSkillPageData?: any;
}

const SkillPage = (props: SkillPagePropsInterface) => {
    const {callGetAndSetSkillPageData, skillPageState} = props;
    const {skill, relatedSkills, relatedJobs} = skillPageState.data;

    const {uuid: skillUUID} = useParams<any>();

    useEffect(() => {
        callGetAndSetSkillPageData(skillUUID)
    }, [callGetAndSetSkillPageData, skillUUID])
    
    if(skillPageState.loading){
        return <Loader />
    }

    return (
        <>
            <p className="xlarge-font bold mainPageTitleSpacings alignTextCenterResponsive">{skill.skill_name}</p>
            
            <TwoSidedView
                mainViewChildren={
                    <div className="pageMainView">
                        <p className="large-font bold descriptionTitle">Description: </p>
                        <p className="medium-font descriptionParagraph">{skill.description}</p>

                        <p className="large-font bold relatedJobsTitle">Related Jobs: </p>

                        <div className="mainViewCardsList">
                            {relatedJobs.map((job, index) => {
                                return <JobCard key={index} job={job}/>
                            })}
                        </div>
                    </div>
                }
                sidebarData={{
                    title: 'Related Skills:',
                    listData: <RelatedSkillsList relatedSkills={relatedSkills}/>
                }}
            />
        </>
    );
}

const JobCard = (props: {job: JobInterface}) => {
    const {job} = props;

    return (
        <div className="mainViewCard">
            <Link 
                to={`/jobs/${job.job_uuid}`} 
                className="large-font bold plainLink skillTitle">
                {job.job_title}
            </Link>
            <div className="cardProperties">
                <span className="small-font cardProperty">
                    <span className="bold">Level: &nbsp;</span>
                    {0}
                </span>
                <span className="small-font cardProperty">
                    <span className="bold">Importance: &nbsp;</span>
                    {0}
                </span>

            </div>
        </div>
    );
}



const RelatedSkillsList = (props: {relatedSkills: SkillInterface[]}) => (
    <ul>
        {props.relatedSkills.map((relatedSkill, index) => {
            return (
                <li key={index}>
                    <Link to={`/skills/${relatedSkill.uuid}`} className="medium-font plainLink">
                        {relatedSkill.skill_name}
                    </Link>
                </li>
            )
        })}
    </ul>
);

const mapStateToProps = (state: any) => {
    return {
        skillPageState: state.skillPageState,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        callGetAndSetSkillPageData: (skillUUID: string) => {
            dispatch(getAndSetSkillPageData(skillUUID))
        }
    }
}

const ConnectedSkillPage = connect(mapStateToProps, mapDispatchToProps)(SkillPage);

export default ConnectedSkillPage;