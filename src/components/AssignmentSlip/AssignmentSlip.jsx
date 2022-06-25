//import AssignmentSlip from '.components/AssignmentSlip/AssignmentSlip';//cut it and paste to the component
import React, { createRef, useState,useEffect,Fragment,useRef,memo} from 'react';
import './AssignmentSlip.scss';
import { useScreenshot, createFileName } from 'use-react-screenshot'

const AssignmentSlip = ({
    date,
    assignmentInfo
}) => {
    const ref = createRef(null);
    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });

    const download = (image, { name = `assignment-${date}-${assignmentInfo?.name.replaceAll(" ","-")}`, extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

    return <div>
        <button className="download-assignment-slip" onClick={downloadScreenshot}>Download screenshot</button>    
        <div className='AssignmentSlipContainer'>
            <div className="assignmentForm" ref={ref}>
                <h2>our christian life and ministry meeting assignment</h2>
                <div className="sectionBlock01">
                    <p><b>Name: </b>{assignmentInfo?.name}</p>
                    <p><b>Assistant: </b>{assignmentInfo?.assistant}</p>
                    <p><b>Date: </b>{date}</p>
                </div>
                <div className="sectionBlock02">
                    <p><b>Assignment:</b></p>
                    <div className="assignment">
                        <ul>
                            <li className="assignment-list-container">
                                <span className={`checkbox-style ${assignmentInfo.assignment===0 ? "checked" : ""}`}></span>
                                <div className="assignment-name-and-notes">
                                    <p className="name">Bible reading</p>
                                    {assignmentInfo.notes && assignmentInfo.assignment===0 ? <p className="notes">{assignmentInfo.notes}</p> : ""}
                                </div>
                            </li>
                            <li className="assignment-list-container">
                                <span className={`checkbox-style ${assignmentInfo.assignment===1 ? "checked" : ""}`}></span>
                                <div className="assignment-name-and-notes">
                                    <p className="name">Initial call {(assignmentInfo.assignment===1 && assignmentInfo?.title) && <b>({assignmentInfo?.title})</b>}</p>
                                    {assignmentInfo.notes && assignmentInfo.assignment===1 ? <p className="notes">{assignmentInfo.notes}</p> : ""}
                                </div>
                            </li>
                            <li className="assignment-list-container">
                                <span className={`checkbox-style ${assignmentInfo.assignment===2 ? "checked" : ""}`}></span>
                                <div className="assignment-name-and-notes">
                                    <p className="name">Return visit {(assignmentInfo.assignment===2 && assignmentInfo?.title) && <b>({assignmentInfo?.title})</b>}</p>
                                    {assignmentInfo.notes && assignmentInfo.assignment===2 ? <p className="notes">{assignmentInfo.notes}</p> : ""}
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li className="assignment-list-container">
                                <span className={`checkbox-style ${assignmentInfo.assignment===3 ? "checked" : ""}`}></span>
                                <div className="assignment-name-and-notes">
                                    <p className="name">Bible study {(assignmentInfo.assignment===3 && assignmentInfo?.title) && <b>({assignmentInfo?.title})</b>}</p>
                                    {assignmentInfo.notes && assignmentInfo.assignment===3 ? <p className="notes">{assignmentInfo.notes}</p> : ""}
                                </div>
                            </li>
                            <li className="assignment-list-container">
                                <span className={`checkbox-style ${assignmentInfo.assignment===4 ? "checked" : ""}`}></span>
                                <div className="assignment-name-and-notes">
                                    <p className="name">Talk</p>
                                    {assignmentInfo.notes && assignmentInfo.assignment===4 ? <p className="notes">{assignmentInfo.notes}</p> : ""}
                                </div>
                            </li>
                            <li className="assignment-list-container">
                                <span className={`checkbox-style ${assignmentInfo.assignment>4 ? "checked" : ""}`}></span>
                                <div className="assignment-name-and-notes">
                                    <p className="name">Other:</p>
                                    {assignmentInfo.notes && assignmentInfo.assignment>4 ? <p className="notes">{assignmentInfo.notes}</p> : ""}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="assignmentPlace">
                        <p><b>To be given in: </b></p>
                        <ul>
                            <li><span className={`checkbox-style ${assignmentInfo.place===1 ? "checked" : ""}`}></span>Main hall</li>
                            <li><span className={`checkbox-style ${assignmentInfo.place===2 ? "checked" : ""}`}></span>Auxillary classroom 1</li>
                            <li><span className={`checkbox-style ${assignmentInfo.place===3 ? "checked" : ""}`}></span>Auxillary classroom 2</li>
                        </ul>
                    </div>
                </div>
                <p className="note"><b>Note to student: </b> The source material and study point for your assignment can be found in the <span className="italized">Life and Ministry meeting Workbook</span>. Please work on the listed study point, which is discussed in the <span className="italized">Teaching</span> brochure</p>
                <p>S-89-E     11/20</p>
                <p className="small">Please contact Bro.Sales if you cannot do your assignment in OCLMM.(09223865473)</p>
            </div>
        </div>
    </div>
    
}

export default AssignmentSlip;