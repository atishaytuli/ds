const Footer = () => {
  const teamAvatars = [
    'https://designingsolutions.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish_DS.d94d7731.png&w=384&q=75',
    'https://designingsolutions.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDavinder_DS.41f2ae9b.png&w=384&q=75',
    'https://designingsolutions.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSwaraj2_DS.e96cc55e.png&w=384&q=75',
    'https://media.licdn.com/dms/image/v2/D5603AQG-TkAB7BpeaQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714753655454?e=1743638400&v=beta&t=GNuFqar3vie5tmET89xR-uehrePTsa8aS3ztDJGc7Eo',
    'https://designingsolutions.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSandeep_DS.a5421a67.png&w=384&q=75',
  ];

  return (
    <footer className="w-full h-[105vh] flex flex-col">
      <div className="h-[25vh] w-full bg-white flex items-center justify-center">
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-[LO] text-center leading-none">
          SAY
          HELL
          <span className="inline-block mx-2">
            <img
              className="w-24 h-24 object-contain"
              src="https://cdn.prod.website-files.com/6729ec93314d1a742cfeb184/6729ec93314d1a742cfeb21e_glass2.3%201.avif"
              alt="Glasses"
            />
          </span>
          !
        </h1>
      </div>

      <div className="w-full flex-1 bg-black text-white py-16 px-4 md:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-light leading-tight">

                    <span className="inline-flex items-center justify-center -space-x-2">
                      {teamAvatars.slice(0, 3).map((avatar, index) => (
                        <span key={index} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden ring-2 ring-white">
                          <img src={avatar} alt={`Team member ${index + 1}`} className="w-full h-full object-cover" />
                        </span>
                      ))}
                    </span>
                    <span className="ml-4 font-[SM]">Talk to one of our friendly team members</span>

                    <span className="inline-flex items-center justify-center -space-x-2 ml-3 mt-2">
                      {teamAvatars.slice(3, 5).map((avatar, index) => (
                        <span key={index} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden ring-2 ring-white">
                          <img src={avatar} alt={`Team member ${index + 4}`} className="w-full h-full object-cover" />
                        </span>
                      ))}
                    </span>
                    <span className="ml-4 font-[SM]">Let’s create something awwwesome together. what are you waiting for ?? </span>
                  </h2>

                  <button className="group flex items-center justify-center space-x-3 border-2 border-white rounded-full px-6 py-3 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300 mt-16">
                    <span>Get in touch</span>
                    <span className="text-xl">→</span>
                  </button>
                </div>


            <div className="w-full lg:w-1/2 flex flex-col items-end">
              <div className="w-86 h-56 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipMK16HTc5ZKb1ngcUFw31T5u0AMlm_yNnPtHc2y=s1360-w1360-h1020"
                  alt="Team photo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-6 w-[54%]">
                <h3 className="text-xl font-medium font-[SM]">Careers</h3>
                <p className="text-md text-gray-300 mt-4 font-[SR]">
                  Ready to transform your business with innovative solutions?
                  Let's collaborate !!
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
              <div className="flex flex-wrap gap-8 text-sm tracking-wider text-white font-[SM]">
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Business
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span className="hover:text-white transition-colors">
                  ©2024 DS &nbsp; All Rights Reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
