import { useEffect, useState } from "react";

export const OvenMinutes = () => {
  const minute = new Date().getMinutes();
  const [minutes, setMinutes] = useState(String(minute).padStart(2, "0"));

  useEffect(() => {
    const interval = setInterval(() => {
      const minutes = new Date().getMinutes();
      setMinutes(String(minutes).padStart(2, "0"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{minutes}</span>;
};
