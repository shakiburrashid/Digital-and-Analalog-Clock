
function App() {

  return (
    <>
      <div className="h-[100vh] m-auto flex justify-center items-center">
        <div className="w-200 h-120 border-2 border-solid border-red-400 flex items-center justify-around">
          <div className="bg-[url(./assets/Clockimage.png)] w-100 h-100 bg-no-repeat bg-size-[100%] relative">
            <div className=""></div>
            <div className="minute"></div>
            <div className="second"></div>


          </div>
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="grid grid-cols-2 gap-5 items-center text-7xl font-bold">
              <h1 className="row-span-2 text-[8rem]">12</h1>
              <h1>20</h1>
              <h1>30</h1>
            </div>
            <div>
              <h1 className="text-5xl">Sunday,10 2025</h1>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
