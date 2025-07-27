import { useEffect, useState } from "react";

function App() {


  const [time, setTime] = useState(new Date())


  useEffect(() => {
    const timefind = setInterval(() => {
      setTime(new Date())

    }, 1000);

    return () => {
      clearInterval(timefind);
    }

  }, []);




  function hour() {
    let hour = time.getHours() % 12 || 12;
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
    let d = time.getDate();
    let m = time.getMonth();
    let y = time.getFullYear();
    return `${d} / ${m} / ${y}`
  }



  return (
    <>
      <div className="h-[100vh] m-auto flex justify-center items-center">
        <div className="w-200 h-120 border-2 border-solid border-red-400 flex items-center justify-around">
          <div className="bg-[url(./assets/Clockimage.png)] w-100 h-100 bg-no-repeat bg-size-[100%] relative">
            <div className="hour bg-black w-[3.5%] h-[28%] rounded-xl absolute top-[22%] left-[49.4%]"></div>
            <div className="minute bg-black w-[3%] h-[33%] rounded-xl absolute top-[17.8%] left-[49.4%] "></div>
            <div className="second bg-red-500 w-[2.5%] h-[38%] rounded-xl absolute top-[13%] left-[49.7%]"></div>
            <div className="bg-black w-[10%] h-[10%] rounded-full absolute top-[44%] left-[46%]"></div>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="grid grid-cols-2 gap-5 items-center text-7xl font-bold">
              <h1 className="row-span-2 text-[8rem]">{hour()}</h1>
              <h1>{minute()}</h1>
              <h1>{seconds()}</h1>
            </div>
            <div>
              <h1 className="text-5xl">{datemonthyear()}</h1>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
