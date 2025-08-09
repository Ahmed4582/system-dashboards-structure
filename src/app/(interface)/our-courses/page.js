import React from 'react'
import CourseCardList from '../_components/Courses'
import HeaderCourses from './_components/HeaderCourses'

const page = () => {
  return (
    <div>
      <HeaderCourses />
       <CourseCardList bg={false} />
    </div>
  )
}

export default page
