// /* eslint-disable no-undef */
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [selectedDate, setSelectedDate] = useState(null)
// const [date, setdate] = useState(null)
// const [minDate, setminDate] = useState(null)
// const [maxDate, setmaxDate] = useState(null)

// useEffect(() => {
//     const minsec = ms('2d')
//     const maxsec = ms('7d')
//     const min_date = new Date(-minsec)
//     const max_date = new Date(+maxsec)
//     setminDate(moment(min_date).format('YYYY-MM-DD'))
//     setmaxDate(moment(max_date).format('YYYY-MM-DD'))
//   })

// async function requestDates(){
//     return(
//         <div className='datepicker'>
//             <DatePicker
//                 placeholderText='Please select a game day'
//                 selected={selectedDate}
//                 onChange={date => setSelectedDate(date)}
//                 dateFormat='yyyy/MM/dd'
//                 includeDates={[extractDays(new Date(), -2), addDays(new Date(), 7)]}
//                 //maxDate={date => (new Date(), 7)} // 5 is number of days from today
//                 isClearable={true}
//             />
//         </div>

//     )
// }
// export default DatePicker;

// <DatePicker selected={selectedDate}
//       onChange={date => setSelectedDate(date)}
//       dateFormat='yyyy/MM/dd'
//       // minDate={(new Date(), -2)}
//       maxDate={[addDays(new Date(), 5)]}
//       />
