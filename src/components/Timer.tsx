import React, { useState, useEffect } from "react";

interface TimerProps {
  initialSeconds: number; // Пропс для начального времени в секундах
}

const Timer: React.FC<TimerProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>; // Используем для записи интервала

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }
  }, [isActive, seconds]);

  // Преобразуем секунды в формат MM:SS
  const formatTime = (s: number) => {
    const minutes = Math.floor(s / 60);
    const secondsDisplay = s % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      secondsDisplay
    ).padStart(2, "0")}`;
  };

  return (
    <div className="inline m-0">
      <div className="text-2xl font-bold mb-4">{formatTime(seconds)}</div>
    </div>
  );
};

export default Timer;
