import React, {Component} from "react";
import { TextField } from "@material-ui/core";
import { Grid} from "@material-ui/core";

class StartDate extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="StartDateContainer">
                <Grid container spacing={3}  >
                    <Grid item ml={2} >
                        <label id="StartText" >Start </label>
                    </Grid>
                    <Grid item >
                <TextField type="date" id="StartDate" className="StartDateField" />
                </Grid>
                </Grid>
            </div>
        )
    }
}
export default StartDate;