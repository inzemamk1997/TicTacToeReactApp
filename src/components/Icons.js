import React from "react";
import {FaTimes,FaPen,FaRegCircle} from "react-icons/fa";


const Icons = ({name}) => {
    return (
        <h1>
            <FaPen className = "icon" />
            <FaTimes className = "icon" />
            <FaRegCircle className = "icon" />
        </h1>
    );
};

export default Icons;