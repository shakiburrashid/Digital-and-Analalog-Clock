import { useEffect, useState } from "react";

function App() {


  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const timefind = setInterval(() => {
      setTime(new Date())

    }, 1000);

    return () => {
      clearInterval(timefind);
    }

  }, []);


  const exactHour = time.getHours() % 12 || 12;

  function hour() {
    // const exactHour = time.getHours() % 12 || 12;
    // let hour = (time.getHours() % 12 || 12) < 10 ? ("0" + time.getHours() % 12 || 12) : ("" + time.getHours() % 12 || 12);
    let hour = exactHour < 10 ? "0" + exactHour : "" + exactHour;
    return hour;
  }
  function minute() {
    let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : "" + time.getMinutes();
    return minute;
  };
  function seconds() {
    let second = time.getSeconds() < 10 ? "0" + time.getSeconds() : "" + time.getSeconds();
    return second;
  };
  function datemonthyear() {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = time.getDate();
    let m = month[time.getMonth()];
    let y = time.getFullYear();
    let days = weekday[time.getDay()]
    return `${days} ${m} ${d} , ${y}`
  }
  const hourRotation = time.getHours() * 30 + time.getMinutes() / 2;
  const minuteRoation = time.getMinutes() * 6;
  const secondRotation = time.getSeconds() * 6;



  return (
    <>
      {/* <div className="h-[100vh] m-auto flex justify-center items-center"> */}
      <div className="h-[80vh] flex items-center md:justify-center gap-35 p-5 || max-md:flex-col max-md:w-[100%] max-md:h-[75vh] max-md:gap-8 max-md:items-center max-md:justify-center">
        <div className="bg-[url(./assets/Clockimage.png)] bg-no-repeat bg-size-[100%]  w-[100vh] h-[100vh]   relative origin-bottom mt-[10%] || max-md:bg-size-[100%] max-md:w-[45vh] max-md:h-[60vh]">

          <div className="w-[100vh] h-[100vh] || max-md:bg-size-[100%] max-md:w-[45vh] max-md:h-[50vh] ">
            <div className="HOUR bg-black w-[3.5%] h-[28%] rounded-xl absolute top-[22%] left-[49.4%] origin-bottom     || max-md:top-[16.9%] max-md:left-[49%] " style={{ transform: `rotate(${hourRotation}deg)` }}></div>
            <div className="MINUTE bg-black w-[3%] h-[33%] rounded-xl absolute top-[17.8%] left-[49.4%] origin-bottom   || max-md:top-[11.5%] max-md:left-[50%] " style={{ transform: `rotate(${minuteRoation}deg)` }}></div>
            <div className="SECOND bg-red-500 w-[2.5%] h-[38%] rounded-xl absolute top-[13%] left-[49.9%] origin-bottom || max-md:top-[5%] max-md:left-[50%] " style={{ transform: `rotate(${secondRotation}deg)` }}></div>
            <div className="CENTER CIRCLE  bg-black w-[10%] h-[10%] rounded-[100%] absolute top-[44%] left-[46%] || max-md:top-[39%] max-md:left-[48%] max-md:"></div>
          </div>


        </div>
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="grid grid-cols-2 gap-5 items-center text-7xl font-bold || max-md:flex max-md:gap-2 max-md:justify-center max-md:items-center">
            <h1 className="row-span-2 text-[12rem] || max-md:text-7xl">{hour()}</h1>
            <h1 className="md:hidden">:</h1>
            <h1>{minute()}</h1>
            <h1 className="md:hidden">:</h1>
            <h1>{seconds()}</h1>
          </div>
          <div>
            <h1 className="text-5xl font-bold || max-md:text-3xl">{datemonthyear()}</h1>
          </div>
        </div>

      </div>

      {/* </div> */}
    </>
  )
}

export default App
