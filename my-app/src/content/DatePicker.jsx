import React from "react";
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function DatePicker(props){
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
      const a="dateField "+props.class;
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={a}
                label="Date picker dialog"
                format="yyyy/MM/dd"
                id={props.id}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker;