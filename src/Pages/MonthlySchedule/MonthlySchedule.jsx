//import MonthlySchedule from '.components/MonthlySchedule/MonthlySchedule';//cut it and paste to the component
import React, {useState,useEffect,Fragment,useRef,memo} from 'react';
import './MonthlySchedule.scss';
import Schedules from "../../month-schedule.json";
import MidWeekSchedule from "../../components/MidWeekSchedule/MidWeekSchedule"

const MonthlySchedule = ({

}) => {
    console.log(Schedules)
    const color = "#000748";
    return <div className='MonthlyScheduleContainer'>
        {Schedules.map(monthlySchedule=>{
            return <Fragment key={monthlySchedule.id}>
                {/* <div className="heading-section" style={{ backgroundColor: monthlySchedule.color }}>
                    <div className="section-row">
                        <div className="section-col w25p"  style={{ borderColor: monthlySchedule.color,borderRightColor: "#fff" }}>
                            <p className="congregation">GALAS<br/>CONGREGATION</p>
                        </div>
                        <div className="section-col w75p centered"  style={{ borderColor: monthlySchedule.color }}>
                            <p className="title">{monthlySchedule.month} {monthlySchedule.year}<br/>Iskedyul ng Pulong sa Gitnang Sanlinggo</p>
                        </div>
                    </div>
                </div> */}
                {monthlySchedule.schedule.map((weeklySchedule,i)=>{
                    return <Fragment key={i}>
                        {i%2 == 0 ? <div className="heading-section" style={{ backgroundColor: monthlySchedule.color }}>
                            <div className="section-row">
                                <div className="section-col w25p"  style={{ borderColor: monthlySchedule.color,borderRightColor: "#fff" }}>
                                    <p className="congregation">GALAS<br/>CONGREGATION</p>
                                </div>
                                <div className="section-col w75p"  style={{ borderColor: monthlySchedule.color, justifyContent: "right" }}>
                                    <p className="title">Iskedyul ng Pulong sa Gitnang Sanlinggo</p>
                                </div>
                            </div>
                        </div> : ""}
                        <MidWeekSchedule 
                        key={i}
                        color={monthlySchedule.color}
                        weeklySchedule={weeklySchedule} />
                    </Fragment>})}
            </Fragment>
        })}
    </div>
}

export default MonthlySchedule;