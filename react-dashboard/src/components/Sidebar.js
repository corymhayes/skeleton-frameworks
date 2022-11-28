function Sidebar() {
    return (
      <div className="App">
          <nav className="fixed bg-[#181f2e] h-screen w-96">
            <div className="w-full h-24 flex items-center justify-center">
              <span className="text-white uppercase font-bold text-2xl">Test Company</span>
            </div>
            <ul className="text-[#909295] font-bold text-xl">
              <li className="py-6 px-6 hover:bg-[#626770] hover:text-white">
                Dashboard
              </li>
              <li className="py-6 px-6 hover:bg-[#626770] hover:text-white">
                Products
              </li>
              <li className="py-6 px-6 hover:bg-[#626770] hover:text-white">
                Statistics
              </li>
              <li className="py-6 px-6 hover:bg-[#626770] hover:text-white">
                Invoices
              </li>
            </ul>
          </nav>
      </div>
    );
  }
  
  export default Sidebar;
  