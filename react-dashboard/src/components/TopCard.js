function TopCard() {
    return (  
        <div className="relative w-96 bg-white ml-16 p-8">
            <div className="flex justify-between mb-6">
                <div className="flex flex-col border-l-8 border-[#405dcf] pl-6">
                <span className="text-[#b6b6b6] text-2xl">Customers</span>
                <span className="text-[#181f2e] font-bold text-3xl">1,456</span>
                </div>
                <div className="h-10 w-10 bg-[#eceffa]"></div>
            </div>

            <span className="font-bold text-[#53b289]">+6.5%</span> Since last week
        </div>
    );
  }
  
  export default TopCard;
  