const today = new Date();

const days = [ 'Monday', 'Tuesday', 'Wednesday', 
               'Thursday', 'Friday', 'Saturday', 
               '-1' ];

const months = [ 'January', 'February', 'March', 
                 'April ', 'May ', 'June ', 'July', 
                 'August', 'September', 'October ', 
                 'November', 'December' ];

let gottenDay;
const curDayNum = today.getDay() - 1;
curDayNum === -1 ? gottenDay = 'Sunday' : gottenDay = days[curDayNum];

const gottenMonth = (months[today.getMonth()]).slice(0, 3);
const gottenYear = today.getFullYear();
const gottenDate = today.getDate();

const initialState = {
    date: {
        day: gottenDay,
        month: gottenMonth,
        year: gottenYear,
        date: gottenDate
    }
};

const headingReducer = (state = initialState, action) => {
    return state;
};

export default headingReducer;