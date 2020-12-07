import React, { useState } from 'react'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import {Button} from "@material-ui/core"
import "./SearchDates.css"
function SearchDates() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:"selection"
    }

    const handleSelect = (ranges)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    return (
        <div className="searchBox">
        <DateRangePicker className="dateRange" ranges={[selectionRange]} onChange={handleSelect} />
        <h2 className="head">
                Number of guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button className="button" >Confirm</Button>
        </div>
    )
}

export default SearchDates
