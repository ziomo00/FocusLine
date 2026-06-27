import { useState } from "react";
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";

import { ru } from "date-fns/locale";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  // Дедлайны для примера
  const deadlines = [
    new Date(2026, 0, 7),
    new Date(2026, 0, 15),
    new Date(2026, 0, 23),
  ];

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart, {
    weekStartsOn: 1,
  });

  const calendarEnd = endOfWeek(monthEnd, {
    weekStartsOn: 1,
  });

  const days = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  return (
    <div className="p-6 bg-white rounded-3xl shadow text-black">
      {/* HEADER */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-muted text-sm font-bold">
            КАЛЕНДАРЬ
          </p>

          <h2 className="text-xl font-black mt-1">
            {format(currentMonth, "LLLL yyyy", {
              locale: ru,
            })}
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              setCurrentMonth(
                subMonths(currentMonth, 1)
              )
            }
            className="
              w-10
              h-10
              rounded-xl
              bg-gray-100
              hover:bg-gray-200
              transition
            "
          >
            ←
          </button>

          <button
            onClick={() =>
              setCurrentMonth(
                addMonths(currentMonth, 1)
              )
            }
            className="
              w-10
              h-10
              rounded-xl
              bg-gray-100
              hover:bg-gray-200
              transition
            "
          >
            →
          </button>
        </div>
      </div>

      {/* WEEKDAYS */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="
              text-center
              text-xs
              font-bold
              text-muted
            "
          >
            {day}
          </div>
        ))}
      </div>

      {/* DAYS */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const isSelected = isSameDay(
            day,
            selectedDay
          );

          const isDeadline = deadlines.some(
            (deadline) =>
              isSameDay(deadline, day)
          );

          const isCurrentMonth = isSameMonth(
            day,
            currentMonth
          );

          return (
            <button
              key={day.toISOString()}
              onClick={() =>
                setSelectedDay(day)
              }
              className={`
                h-12
                rounded-xl
                text-sm
                font-semibold
                transition-all

                ${
                  isSelected
                    ? "bg-gradient-to-br from-violet-600 to-blue-500 text-white"
                    : isDeadline
                    ? "bg-violet-100 text-black"
                    : isCurrentMonth
                    ? "bg-gray-100 text-black"
                    : "bg-gray-50 text-gray-400"
                }
              `}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;