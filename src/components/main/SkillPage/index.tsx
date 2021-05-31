import React, { ReactNode } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TwoSidedView from '../../reusable/TwoSidedView';
import '../../../assets/css/main-view-common-styles.css'
import './styles.css'

interface SkillPagePropsInterface{

}

const SkillPage = (props: any) => {
    const {skillPage} = props;
    console.log(props)

    const relatedSkillsList: ReactNode = (
        <ul>
            {/* {skillPage.relatedSkills.map((relatedSkill: any, index: any) => {
                return (
                    <li key={index}>
                        <Link target="_blank" to={`/skills/${relatedSkill.uuid && 0}`} className="medium-font plainLink">
                            {relatedSkill.title && 'Job Title'}
                        </Link>
                    </li>
                )
            })} */}
        </ul>
    )

    return (
        <>
            <p className="xlarge-font bold mainPageTitleSpacings">Skill Title</p>
            
            <TwoSidedView
                mainViewChildren={
                    <div className="pageMainView">
                        <p className="large-font bold descriptionTitle">Description: </p>
                        <p className="medium-font descriptionParagraph">knowledge of principles and methods for moving people or goods by air, rail, sea, or road, including the relative costs and benefits.</p>

                        <p className="large-font bold relatedJobsTitle">Related Jobs: </p>

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
                    title: 'Related Skills:',
                    listData: relatedSkillsList
                }}
            />
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        skillPage: state.skillPage,
    }
}

const ConnectedSkillPage = connect(mapStateToProps)(SkillPage);

export default ConnectedSkillPage;