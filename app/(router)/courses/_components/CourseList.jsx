import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect } from 'react'

function CourseList() {

    useEffect(()=>{
      getAllCourses();
    },[]);
    // fetch course list
    const getAllCourses=()=>{
        GlobalApi.getAllCourseList().then(resp=>{
            console.log(resp);
        })
    }
  return (
    <div>CourseList</div>
  )
}

export default CourseList