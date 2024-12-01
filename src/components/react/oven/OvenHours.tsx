import { useEffect, useState } from "react";

export const OvenHours = () => {
  const hour = new Date().getHours();
  const [hours, setHours] = useState(hour);

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
    }, 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  return <span>{hours}</span>;
};
