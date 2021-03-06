import { DatePicker } from "react-materialize";
import { useState } from "react";
export const EntryDatePicker = (props) => {
    const [newDate, setNewDate] = useState('');

    const updateDate = (val)=>{
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        val = val.toDateString('en-US',options);
        setNewDate(val);
        return props.changeDate(val);
    }
    return (
        <DatePicker
        value={newDate}
        onChange={updateDate}
        id="entryTitle"
        label="Entry Title"
        options={{
            autoClose: false,
            container: null,
            defaultDate: null,
            disableDayFn: null,
            disableWeekends: false,
            events: [],
            firstDay: 0,
            format: 'mmm dd, yyyy',
            i18n: {
            cancel: 'Cancel',
            clear: 'Clear',
            done: 'Ok',
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            monthsShort: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            nextMonth: '›',
            previousMonth: '‹',
            weekdays: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            weekdaysAbbrev: [
                'S',
                'M',
                'T',
                'W',
                'T',
                'F',
                'S'
            ],
            weekdaysShort: [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat'
            ]
            },
            isRTL: false,
            maxDate: null,
            minDate: null,
            onClose: null,
            onDraw: null,
            onOpen: null,
            onSelect: null,
            parse: null,
            setDefaultDate: false,
            showClearBtn: false,
            showDaysInNextAndPreviousMonths: false,
            showMonthAfterYear: false,
            yearRange: 10,
        }}
        />
    )
}