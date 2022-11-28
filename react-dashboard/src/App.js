import Sidebar from "./components/Sidebar";
import TopCard from "./components/TopCard";
import Table from "./components/Table";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className=" fixed w-screen h-20 bg-white pl-96 flex items-center">
        <span className="text-black ml-16 ">Welcome Back!</span>
      </div>
      <Sidebar />
      
      <div className="bg-[#f5f7fa] h-screen w-screen pl-96 pr-16 pt-36">
        <div className="flex justify-between">
          <TopCard />
          <TopCard />
          <TopCard />
          <TopCard />
        </div>
        <div className="flex justify-between">
          <div className="h-96 w-1/3 bg-white ml-16 p-8 mt-16 flex items-center justify-center">
          <span className="font-bold text-xl">PIE CHART</span>
          </div>

          <div className="h-96 w-full bg-white ml-16 p-8 mt-16 flex items-center justify-center">
            <span className="font-bold text-xl">LINE CHART</span>
          </div>
        </div>

        <div className="mt-16 ml-16">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
