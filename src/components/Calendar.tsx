import React from "react";

function getDayWeekIndex(date: Date) {
  let dayIndex = date.getDay();
  if (dayIndex === 0) {
    dayIndex = 7;
  }
  return dayIndex;
}

interface Props {
  date: Date;
  setDate?: (date: Date) => any;
}

function Calendar(props: Props) {
  const { date, setDate = () => {} } = props;
  const dayIndex = date.getDate();
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const dayNumberOfPreviosMonth = getDayWeekIndex(monthStart) - 1;
  const dayNumberOfCurrentMonth = monthEnd.getDate();
  const dayNumberOfNextMonth = 7 - getDayWeekIndex(monthEnd);
  const allDays = [];
  // @ts-ignore
  const handleDayClick = (e) => {
    const day = +e.target.dataset.day;
    if (day) {
      const newDate = new Date(date.getFullYear(), date.getMonth(), day);
      setDate(newDate);
    }
  };

  for (let i = 0; i < dayNumberOfPreviosMonth; i++) {
    allDays.push(
      <div
        key={`prev-${i}`}
        className="Calendar-day Calendar-day__previosMonth"
      ></div>
    );
  }

  for (let i = 1; i <= dayNumberOfCurrentMonth; i++) {
    allDays.push(
      <div
        key={`cur-${i}`}
        data-day={i}
        className={`Calendar-day Calendar-day__currentMonth ${
          i === dayIndex ? "Calendar-day__currentDay" : ""
        }`}
      >
        {i}
      </div>
    );
  }

  for (let i = 0; i < dayNumberOfNextMonth; i++) {
    allDays.push(
      <div
        key={`next-${i}`}
        className="Calendar-day Calendar-day__nextMonth"
      ></div>
    );
  }
  
  return (
    <div className="Calendar" onClick={handleDayClick}>
      {allDays}
    </div>
  );
}

export default Calendar;
