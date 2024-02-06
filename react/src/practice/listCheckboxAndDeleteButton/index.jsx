import React, { useState } from "react";

/**
 * Problem statement:-
 * give array -> show it in list -> with a checkbox in front of each -> when checkbox clicked -> delete button should appear next to it ->
 * -> when delete is pressed it should be removed
 * */

const ListCheckBoxDelete = () => {
  const arr = ["Play cricket", "Play video game", "Read book"];
  const [copyArr, setCopyArr] = useState(arr);
  const [showButton, setShowButton] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const handleDelete = (index) => {
    let newArr = [...copyArr]
    let filteredArr = newArr.filter((item,i) => i!==index)
    setCopyArr(filteredArr)
    setCurrentIndex(null)
    setShowButton(true)
  }

  const handleCheckbox = (item,index) => {
    if(item && copyArr.indexOf(item) == index){
        setCurrentIndex(index)
        setShowButton(true)
    }
  }
  return (
    <div>
        {copyArr.map((item, index) => {
            return <ul key={index}>
                <li>
                <input type='checkbox'
                checked={currentIndex === index}
                onChange={()=>handleCheckbox(item,index)}
                />
                {item}
                {showButton&&currentIndex==index&&<button onClick={() => handleDelete(index)}>delete</button>}
                </li>
                
            </ul>
        })
        
        }
    </div>
  );
};

export default ListCheckBoxDelete;
