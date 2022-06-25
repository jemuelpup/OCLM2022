//import OCLMM from '.components/OCLMM/OCLMM';//cut it and paste to the component
import React, {useState,useEffect,Fragment,useRef,memo} from 'react';
import './OCLMM.scss';
import Schedules from "../../schedule.json";
import brothers from "../../brothers.json";
import sisters from "../../sisters.json";
import congregationMembers from "../../congregationMembers.json";
import AssignmentSlip from "../../components/AssignmentSlip/AssignmentSlip";
import AssignmentTable from "../../components/AssignmentTable/AssignmentTable";
import WithoutAssignmentTable from "../../components/WithoutAssignmentTable/WithoutAssignmentTable";
import SearchFilters from "../../components/SearchFilters/SearchFilters";

const OCLMM = ({

}) => {

    const [nameFilter, setNameFilter] = useState("");

    return <div className='OCLMMContainer'>
        <header className="App-header">
            <h1>OCLMM Assignment slips</h1>
        </header>
        <div className="filter-container">
            <SearchFilters 
            nameFilter={nameFilter}
            setNameFilter={setNameFilter}/>
        </div>
        <div className="assignment-slips-container">
            <div className="body-container">
                {Schedules.map((dateData,i)=>{
                    const publishersPart = [...dateData.publishersPart]
                    return publishersPart.filter(
                        publishersPart => {

                            // create assigment filter
                            // create location filter
                            // this is for the name filter
                            return  publishersPart.name.toLowerCase().indexOf(nameFilter.toLowerCase()) > -1 ||
                                    publishersPart.assistant.toLowerCase().indexOf(nameFilter.toLowerCase()) > -1 
                        }
                    ).map(
                        (e,i2)=><AssignmentSlip key={i+i2} date={dateData.date} assignmentInfo={e}
                    />)
                })}
            </div>
        </div>
        <div className="students-assignment-count-container">
            <AssignmentTable Schedules={Schedules} />
            <WithoutAssignmentTable
                Schedules={Schedules}
                congregationMembers={congregationMembers}
            /> 
        </div>
    </div>
}

export default OCLMM;