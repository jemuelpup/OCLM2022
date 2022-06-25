//import WithoutAssignmentTable from '.components/WithoutAssignmentTable/WithoutAssignmentTable';//cut it and paste to the component
import React, {useState,useEffect,Fragment,useRef,memo} from 'react';
import './WithoutAssignmentTable.scss';

const WithoutAssignmentTable = ({
    Schedules,
    congregationMembers
}) => {
    
    const toRemove = new Set([].concat.apply([],Schedules
        .map(
            e=>e.publishersPart
            .map(e2=>{
                return e2.assistant != "" ? [e2.name,e2.assistant] : [e2.name]
            }))
            .reduce((a, b) => [...a, ...b], [])));

    // var merged = [].concat.apply([], toRemove);

    // console.log(toRemove)
    // console.log(congregationMembers)

    const difference = congregationMembers.filter( x => !toRemove.has(x) );

    // console.log(difference); // ["a", "d", "e", "f"]

    return <div className='WithoutAssignmentTableContainer'>
        <h2>List of students without Assigment</h2>
        <table className="assignments-table">
        <tr>
            <th>Name</th>
            <th>Num of assignments</th>
        </tr>
        {difference.map((e,i)=><tr key={i}><td>{e}</td><td>0</td></tr>)}
        </table>
    </div>
}

export default WithoutAssignmentTable;