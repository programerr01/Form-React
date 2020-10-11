import React, {Component}from "react";
import { FormControl,MenuItem, Select,Grid} from "@material-ui/core";
import {RadioGroup,FormControlLabel,Radio,Input} from "@material-ui/core"
import { InputLabel }  from "@material-ui/core"

class Repeat extends Component{
    constructor(props) {
        super(props);
        this.state = {value:-1}
        this.handleChange = this.handleChange.bind(this);
    }
    Months() {
        return (
        <Select>
                                           
        <MenuItem value="Jan">Jan</MenuItem>
        <MenuItem value="Feb">Feb</MenuItem>
        <MenuItem value="Mar">Mar</MenuItem>
        <MenuItem value="Apr">Apr</MenuItem>
        <MenuItem value="May">May</MenuItem>
        <MenuItem value="Jun">Jun</MenuItem>
        <MenuItem value="Jul">Jul</MenuItem>
        <MenuItem value="Aug">Aug</MenuItem>
        <MenuItem value="Sep">Sep</MenuItem>
        <MenuItem value="Oct">Oct</MenuItem>
        <MenuItem value="Nov">Nov</MenuItem>
        <MenuItem value="Dec">Dec</MenuItem>
    
            </Select>
        )
    }
    handleChange(props) {
        if (props !== undefined) {
            this.setState({value:props.target.value})
        }
    }
    check(value) {
        if (value === 1) {
            return (
                <Grid container>
                    <RadioGroup>
                        <Grid item>
                            <FormControlLabel value="on" control={<Radio />} label="on" />
                            <FormControl>
                                <Grid container>
                                    <Grid item>
                                        {this.Months()}
                                    </Grid>
                                    <Grid item>
                                        <Input type="number" placeholder="day" id="RepeatDay" />
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </Grid>
                        <Grid item  >
                            <FormControlLabel value="on date" control={<Radio />} label="on day" />
                            <FormControl>
                                <Grid container>
                                    <Grid item>
                                        <Select>
                                            <MenuItem value="First">First</MenuItem>
                                            <MenuItem value="Second">Second</MenuItem>
                                            <MenuItem value="Third">Third</MenuItem>
                                            <MenuItem value="Fourth">Fourth</MenuItem>
                                            <MenuItem value="Last">Last</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item>
                                        <Select>
                                            <MenuItem value="Monday">Monday</MenuItem>
                                            <MenuItem value="Tuesday">Tuesday</MenuItem>
                                            <MenuItem value="Wednesday">Wednesday</MenuItem>
                                            <MenuItem value="Thursday">Thursday</MenuItem>
                                            <MenuItem value="Friday">Friday</MenuItem>
                                            <MenuItem value="Saturday">Saturday</MenuItem>
                                            <MenuItem value="Sunday">Sunday</MenuItem>
                                            <MenuItem value="Weekday">Weekday</MenuItem>
                                            <MenuItem value="Weekend Day">Weekend Day</MenuItem>
                                    
                                        </Select>
                                    </Grid>
                                    <Grid item>
                                        <label>
                                            of
                                        {this.Months()}
                                        </label>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </Grid>
                    </RadioGroup>
                   
                </Grid>
            )
        }

        if (value === 2) {
            return (
                <Grid container>
                    <Grid item>
                        <InputLabel>every</InputLabel>
                        <FormControl>
                            <Input type="number" placeholder="1" id="RepeatMonths" /> month(s)
                        </FormControl>
                    </Grid>
                    <RadioGroup>
                        <Grid item>
                            <FormControlLabel value="on Day" control={<Radio />} label="On Day" />
                            <FormControl>
                                <Input type="number" placeholder="day" id="RepeatDay" />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControlLabel value="on the" control={<Radio />} label="On The" />
                            <FormControl>
                                <Select>
                                    <MenuItem value="First">First</MenuItem>
                                    <MenuItem value="Second">Second</MenuItem>
                                    <MenuItem value="Third">Third</MenuItem>
                                    <MenuItem value="Fourth">Fourth</MenuItem>
                                    <MenuItem value="Last">Last</MenuItem>
                                </Select>
                                <Select>
                                    <MenuItem value="Monday">Monday</MenuItem>
                                    <MenuItem value="Tuesday">Tuesday</MenuItem>
                                    <MenuItem value="Wednesday">Wednesday</MenuItem>
                                    <MenuItem value="Thursday">Thursday</MenuItem>
                                    <MenuItem value="Friday">Friday</MenuItem>
                                    <MenuItem value="Saturday">Saturday</MenuItem>
                                    <MenuItem value="Sunday">Sunday</MenuItem>
                                    <MenuItem value="Weekday">Weekday</MenuItem>
                                    <MenuItem value="Weekend Day">Weekend Day</MenuItem>
                            
                                </Select>
                            </FormControl>
                        </Grid>
                    </RadioGroup>
                </Grid>
            )
        }
        if (value === 3) {
            return (
                <Grid container>
                     <Grid item>
                        <InputLabel>every</InputLabel>
                        <FormControl>
                            <Input type="number" placeholder="1" id="RepeatWeeks" /> week(s)
                        </FormControl>
                    </Grid>
                    
                
                <Grid item>
                        <div className="WeekSelector">
                    
                        <MenuItem>Mon</MenuItem>
                        <MenuItem>Tue</MenuItem>
                        <MenuItem>Wed</MenuItem>
                        <MenuItem>Thu</MenuItem>
                        <MenuItem>Fri</MenuItem>
                        <MenuItem>Sat</MenuItem>
                        <MenuItem>Sun</MenuItem>
                     
                </div>
                    </Grid>
             </Grid>
            )
        }
    }
    
    render() {
       
        return (
          
            <div className="RepeatDateContainer">
                  <Grid container spacing={3}>
                    <Grid item ml={6} style={{ display: "inline" }} >
                        <label id="RepeatText">Repeat</label>
                </Grid>
                <Grid item ml={6}  style={{ display: "inline" }} >
                    <FormControl className="RepeatFormControl">
                    <Select   className="SelectRepeat"  onChange={this.handleChange}>
                    <MenuItem value="1" >Yearly</MenuItem>
                    <MenuItem value="2" >Monthly</MenuItem>
                    <MenuItem value="3" >Weekly</MenuItem>
                    </Select>
                    </FormControl> 
                    </Grid>
                </Grid>
                {this.check(this.state.value)}
                </div>
                
        )
    }
}

export default Repeat;