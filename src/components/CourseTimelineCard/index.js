import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, description, duration, tagsList} = courseData

  return (
    <div className="course-card">
      <div className="title-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <p className="tag-name" type="button">
              {eachTag.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
