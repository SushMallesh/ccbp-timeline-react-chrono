import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props

  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectData

  return (
    <div className="project-card">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="project-title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration">
          <AiFillCalendar className="calender" />
          <p>{duration}</p>
        </div>
      </div>

      <p className="project-description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
