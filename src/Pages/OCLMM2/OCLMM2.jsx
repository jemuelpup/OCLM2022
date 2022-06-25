//import OCLMM2 from '.components/OCLMM2/OCLMM2';//cut it and paste to the component
import React, {useState,useEffect,Fragment,useRef,memo} from 'react';
import './OCLMM2.scss';
// import Schedules from "../../schedule.json";
import brothers from "../../brothers.json";
import sisters from "../../sisters.json";
import congregationMembers from "../../congregationMembers.json";
import AssignmentSlip from "../../components/AssignmentSlip/AssignmentSlip";
import AssignmentTable from "../../components/AssignmentTable/AssignmentTable";
import WithoutAssignmentTable from "../../components/WithoutAssignmentTable/WithoutAssignmentTable";
import SearchFilters from "../../components/SearchFilters/SearchFilters";
import Schedules from "../../month-schedule.json";

const OCLMM2 = ({

}) => {

    const [nameFilter, setNameFilter] = useState("");
    console.log(Schedules);
    const formattedMonthlySchedule = Schedules.map(s=>{
        return s.schedule.map(weeklySchedule => {
            return {
                date: weeklySchedule.date,
                publishersPart: [
                ...weeklySchedule.bibleReading.filter(e => e.name != ""),
                ...[].concat.apply([], weeklySchedule.publishersPart).filter(e => e.name != "" || !e.isVideo)
                ]
            }
        })
    })
    console.log(formattedMonthlySchedule);
    return <div className='OCLMM2Container'>
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
                {formattedMonthlySchedule.map(monthlySchedule => monthlySchedule.map((dateData,i)=>{
                    const publishersPart = [...dateData.publishersPart]
                    console.log(publishersPart)
                    return publishersPart.filter(e=>e.place==1).filter(
                        publishersPart => {

                            // create assigment filter
                            // create location filter
                            // this is for the name filter
                            return  publishersPart.name.toLowerCase().indexOf(nameFilter.toLowerCase()) > -1 ||
                                    publishersPart.assistant.toLowerCase().indexOf(nameFilter.toLowerCase()) > -1 
                        }
                    ).map(
                        (e,i2)=>{
                            // console.log(e);
                            return <AssignmentSlip key={i+i2} date={dateData.date} assignmentInfo={e}/>
                        })
                }))}
                
            </div>
        </div>
        {/* <div className="students-assignment-count-container">
            <AssignmentTable Schedules={Schedules} />
            <WithoutAssignmentTable
                Schedules={Schedules}
                congregationMembers={congregationMembers}
            /> 
        </div> */}
    </div>
}

export default OCLMM2;