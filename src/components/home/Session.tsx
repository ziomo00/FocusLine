import { useState, useEffect } from "react";
import Card from "../ui/Card";

const DAILY_GOAL_SECONDS = 130 * 60; // 7800

function Session() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const percent = (elapsedSeconds / DAILY_GOAL_SECONDS) * 100;
  const size = 164;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percent / 100) * circumference;

  return (
    <Card className="bg-gradient-to-br from-[#25233f] to-[#5e35d4] text-white">
      <p className="text-sm font-bold text-white/65">ФОКУС-СЕССИЯ</p>
      <h2 className="text-2xl font-extrabold tracking-tight mt-1">
        Сегодня: 2ч 10м
      </h2>

      <div className="relative mx-auto mt-7 w-[164px] h-[164px] grid place-items-center">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="white"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            className="transition-[stroke-dashoffset] duration-500 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <strong className="text-[35px] font-extrabold leading-none -tracking-[0.06em]">
            {Math.round(percent)}%
          </strong>
          <span className="text-[13px] font-semibold text-white/70">
            дневной план
          </span>
        </div>
      </div>

      <button
        onClick={() => setIsRunning((prev) => !prev)}
        className="mt-5 w-full rounded-full bg-white py-3 px-4 font-extrabold text-[#322070] shadow-[0_12px_25px_rgba(68,88,242,0.24)] hover:brightness-95 transition"
      >
        {isRunning ? "Пауза" : "Запустить таймер"}
      </button>
    </Card>
  );
}

export default Session;