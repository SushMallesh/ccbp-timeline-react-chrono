import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard courseData={item} />
    }
    return <ProjectTimelineCard projectData={item} />
  }

  return (
    <div className="timeline-container">
      <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{secondary: 'white'}}
        items={timelineItemsList}
      >
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
