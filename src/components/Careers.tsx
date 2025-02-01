const Careers = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-[85%] h-[65%] bg-[#F3EEE4] rounded-3xl flex">

          <div className="w-[55%] h-full p-4">
            <h1 className="font-[SR] text-4xl lg:text-[2.5rem] mb-8 leading-[3rem]">
              Can't see the job for you? Don't worry. We're always looking out for talented people to join our team.
            </h1>
            <button
              className="flex items-center justify-between rounded-full text-lg px-6 py-2 border-2 border-black"
            >
              <span className="bg-black text-white px-3 py-2 rounded-full mr-2">@</span> 
              Email Careers
            </button>
          </div>

          <div className="w-[55%] h-full overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQHyGWlX3ja9Og/feedshare-shrink_1280/B56ZREtcVpGsAk-/0/1736319551873?e=1741219200&v=beta&t=GqVbxwwAN0MmWBZ69Eqykr0BLBnVpen6wVHsd1iEkb0"
              alt="Team gathering"
              className="w-full h-full object-cover overflow-hidden rounded-r-3xl"
            />
          </div>
      </div>
    </div>

  );
};

export default Careers;