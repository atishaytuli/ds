const Footer = () => {
  const teamAvatars = [
    'https://designingsolutions.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish_DS.d94d7731.png&w=384&q=75',
    'https://designingsolutions.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDavinder_DS.41f2ae9b.png&w=384&q=75',
    'https://designingsolutions.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSwaraj2_DS.e96cc55e.png&w=384&q=75',
    'https://media.licdn.com/dms/image/v2/D5603AQG-TkAB7BpeaQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714753655454?e=1743638400&v=beta&t=GNuFqar3vie5tmET89xR-uehrePTsa8aS3ztDJGc7Eo',
  ];

  return (
    <footer className="w-full h-screen flex flex-col">
      <div className="h-[25vh] w-full bg-white flex items-center justify-center">
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-[LO] text-center leading-none">
          SAY
          <span className="inline-block mx-4 mr-10">
            <img
              src="https://cdn.prod.website-files.com/6729ec93314d1a742cfeb184/6729ec93314d1a742cfeb217_hi-hello%202.gif"
              alt="Wave"
              className="w-36 h-24 object-contain"
            />
          </span>
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
      <div className="w-full h-[75vh] flex-1 bg-black text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">

            <div className="space-y-12">

              <div className="flex -space-x-4">
                {teamAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-1 overflow-hidden ring-2 ring-white"
                  >
                    <img
                      src={avatar}
                      alt={`Team member ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h2 className="font-[SR] text-4xl md:text-4xl font-light leading-tight">
                  Talk to one of our friendly team members <span className="flex -space-x-4">{teamAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-1 overflow-hidden ring-2 ring-white"
                  >
                    <img
                      src={avatar}
                      alt={`Team member ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}</span> Let's do something brilliant together.
                </h2>
              </div>

              {/* CTA Button */}
              <button className="group inline-flex items-center space-x-3 border-2 border-white rounded-full px-8 py-4 text-lg hover:bg-white hover:text-black transition-all duration-300">
                <span>Get in touch</span>

              </button>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipMK16HTc5ZKb1ngcUFw31T5u0AMlm_yNnPtHc2y=s1360-w1360-h1020"
                  alt="Team photo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-medium">Careers</h3>
                <p className="text-xl text-gray-300">
                  Ready to transform your business with innovative solutions? Let's collaborate!
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
              <div className="flex flex-wrap gap-8 text-sm uppercase tracking-wider text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Business
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span className="hover:text-white transition-colors">
                  ©2024 DESIGNINGSOLUTIONS. ALL RIGHTS RESERVED
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