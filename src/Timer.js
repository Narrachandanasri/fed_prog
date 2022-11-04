import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState();
  const tick = () => {
    const d = new Date();
    const hrs = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const newtime = `${hrs}:${min}:${sec}`;
    setTime(newtime);
  };
  useEffect(() => {
    const t = setInterval(tick, 1000);
  }, [time]);
  return <h1>{time}</h1>;
}
