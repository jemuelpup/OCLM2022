//import AssignmentTable from '.components/AssignmentTable/AssignmentTable';//cut it and paste to the component
import React, {useState,useEffect,Fragment,useRef,memo} from 'react';
import './AssignmentTable.scss';

const AssignmentTable = ({
    Schedules
}) => {
    
    const studentPerDate = Schedules.map(e=>e.publishersPart.map(e2=>e2.name)).reduce((a, b) => [...a, ...b], []);
    const occurrences = studentPerDate.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});

    return <div className='AssignmentTableContainer'>
        <h2>List of students with Assigment</h2>
        <table className="assignments-table">
        <tr>
            <th>Name</th>
            <th>Num of assignments</th>
        </tr>
        {Object.entries(occurrences).sort((a,b)=>b[1]-a[1]).map(e=><tr><td>{e[0]}</td><td>{e[1]}</td></tr>)}
        </table>
    </div>
}

export default AssignmentTable;