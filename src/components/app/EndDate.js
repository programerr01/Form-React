import React, {Component}from "react";
import { Select,MenuItem, FormControl, Grid,TextField } from "@material-ui/core";
class EndDate extends Component {
    constructor(props) {
        super(props);
        this.state = { value: -1 };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(props) {
        if (props !== undefined) {
            this.setState({value : props.target.value });
        }
    }
    check(value) {
        if (value === 2) {
            return (<label>
                <TextField id="RepeatExecution" variant="outlined" type="number" required size="small" />
                Execution
                </label>
            )
        }
        if (value === 3) {
            return (
                <TextField  type="date"  id="StartDate" className="StartDateField"  />

            )
        }
    }

    render() {
        return (
            <div className="EndDateContainer">
                <Grid container spacing={3}>
                    <Grid item>
                        <label id="EndText">End</label>
                    </Grid>
                    <Grid item>
                <FormControl>
                    <Select className="SelectEnd"  id="EndDate"  onChange={this.handleChange}>
                    <MenuItem value="1" >Never</MenuItem>
                    <MenuItem value="2" >Repeat</MenuItem>
                    <MenuItem value="3" >On Date</MenuItem>
                    </Select>
                 </FormControl> 
                        {this.check(this.state.value)}
                </Grid>
                  
                

                
            </Grid>
            </div>
        )
    }
}
export default EndDate;