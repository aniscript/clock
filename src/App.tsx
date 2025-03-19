import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [time, setTime] = useState(new Date());
  // const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const toggleFormat = () => setIs24Hour(!is24Hour);
  // const hours = is24Hour ? time.getHours() : time.getHours() % 12 || 12;
  const hours = time.getHours() % 12;
  const amPm = time.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = {
    hours: hours.toString().padStart(2, "0"),
    minutes: time.getMinutes().toString().padStart(2, "0"),
    seconds: time.getSeconds().toString().padStart(2, "0"),
  };

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="text-amber-400 text-9xl font-bold flex gap-2 font-michroma"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span>{formattedTime.hours}:</span>
          <span>{formattedTime.minutes}:</span>
          <span>{formattedTime.seconds}</span>
          {/* {!is24Hour && <span className="text-4xl">{amPm}</span>} */}
          <span className="text-4xl">{amPm}</span>
        </motion.div>
        <div className="text-4xl text-gray-300 ">
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        {/* <button
          onClick={toggleFormat}
          className="px-4 py-2 text-lg font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-500 transition"
        >
          Toggle {is24Hour ? "12" : "24"}-Hour Format
        </button> */}
      </div>
    </main>
  );
}

export default App;
