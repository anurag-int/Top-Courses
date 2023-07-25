import React from "react";
import Card from "./Card"

const  Cards = ({courses}) => {
    let allCourses = [];

    // return you a  list of all courses received from the api response
    const getCourses = () => {
        console.log(courses);
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
     }
    
    return(  
        <div>
            {!courses ? (
                <div>
                    <p>No data found</p>
                </div>
            ) : (
                getCourses().map( (course) => {
                return <Card key={course.id}>course={course}</Card>
            })
            )}
        </div>
    )
}

export default Cards;


