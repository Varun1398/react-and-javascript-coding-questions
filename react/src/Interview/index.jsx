/*
create a ticket system
   create a form with 2 fields 
   a) Incident name
   b) description
   Submit button --> once the ticket is submitted then that ticket should be shown in open ticket, then from open ticket the technical person can drag and drop the ticket to progress and from progress to closed ticket
   There will be 3 boxes
   1) open ticket  2) In-progress  3) closed ticket
*/

import React, { useEffect, useRef, useState } from "react";

const InterviewKPMG = () => {
  const [incidentInput, setIncidentInput] = useState("");
  const [descriptionInput, setDecriptionInput] = useState("");
  const [incidentList, setIncidentList] = useState([]);
  const [descriptionList, setDescriptionList] = useState([]);
  const [inProgress, setInprogress] = useState([]);
  const handleIncidentInput = (e) => {
    setIncidentInput(e);
  };
  const handleDescriptionInput = (e) => {
    setDecriptionInput(e);
  };

  const handleFormSubmit = () => {
    setIncidentList([...incidentList, incidentInput])
    setDescriptionList([...descriptionList, descriptionInput]);
    setIncidentInput("");
    setDecriptionInput("")
  };

  const handleDrag = (e,dragItem) => {
    e.dataTransfer.setData("incident", dragItem)
  }

  const handleDrop = (e) => {
    console.log(e)
    let inprogressList = e.dataTransfer.getData("incident");
    console.log(inprogressList)
    setInprogress([...inProgress, inprogressList])
  }
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // }

  return (
    <div>
      <h1>Tcket system</h1>
      <input
        type="text"
        placeholder="Enter Incident Name"
        value={incidentInput}
        onChange={(e) => handleIncidentInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description"
        value={descriptionInput}
        onChange={(e) => handleDescriptionInput(e.target.value)}
      />
      <button onClick={handleFormSubmit}>Submit</button>
      <div>
        <h2>Open Ticket</h2>
        {
          incidentList.map((list, index) => {
            return <div key={index} 
            draggable
            onDragStart={(e) => handleDrag(e, list)}>
              <li>{list}</li>
            </div>
          })
        }
        <h2 onDrop={(e) => handleDrop(e.target.value)}>In progress</h2>
        <h2>Closed Ticket</h2>
      </div>
    </div>
  );
};

export default InterviewKPMG;
