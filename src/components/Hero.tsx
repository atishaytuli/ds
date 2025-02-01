import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Hero() {
    const headingsRef = useRef<HTMLDivElement>(null); // Explicitly type the ref

    useGSAP(() => {
        // Explicitly type the animatedHeadings array as HTMLElement[]
        const animatedHeadings = gsap.utils.toArray<HTMLElement>(".animated-heading");

        // Set initial opacity to 0 and position all headings in the same spot
        gsap.set(animatedHeadings, {
            opacity: 0,
            y: 30,
            position: "absolute",
            top: 0,
            left: 0,
        });

        const tl = gsap.timeline({ repeat: -1 });

        animatedHeadings.forEach((heading) => { // Removed unused `index`
            tl.to(heading, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
                .to(heading, { opacity: 0, y: -30, duration: 0.8, ease: "power3.in" }, "+=2"); // Stay for 2 sec
        });
    }, { scope: headingsRef });

    return (
        <>
            <main className="w-full h-screen flex">
                <div className="flex flex-col left w-[60%] h-screen px-24 gap-20">
                    <div className="headings mt-[30%] text-8xl font-[LO]">
                        <h1 className="text-7xl">WE CREATE</h1>
                        <h1 className="flex items-center gap-2 font-[SM] text-7xl font-semibold italic mt-3">
                        <span className="flex items-center justify-center h-12 w-12 lg:h-20 lg:w-20 rounded-full bg-white text-black shadow-lg transition-transform">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 14 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="rotate-90 w-6 h-6 lg:w-8 lg:h-8"
                            >
                                <path
                                    d="M8.03629 9.72484C8.04689 9.73414 8.37179 9.80525 8.75822 9.88282C9.14471 9.96038 9.46509 10.012 9.47025 9.99759C9.47535 9.98314 9.51534 9.74889 9.55906 9.477C9.6469 8.93102 9.85958 8.29355 10.0868 7.89487C10.7952 6.65237 12.0661 5.82966 13.6075 5.61583L14 5.56136L14 5.01248L14 4.46356L13.6442 4.41144C11.3134 4.06995 9.79382 2.54799 9.50955 0.270372C9.491 0.121646 9.46882 7.51559e-07 9.46028 7.52278e-07C9.38167 7.58905e-07 8.07913 0.274135 8.05449 0.295852C8.03668 0.311555 8.04993 0.45098 8.08399 0.605634C8.4609 2.31815 9.54012 3.71167 10.9406 4.29433L11.2766 4.4341L4.36832 4.44505L-4.67662e-07 4.452L-3.74024e-07 5.56284L4.37956 5.5698L11.2715 5.58079L10.8474 5.76845C9.7471 6.25525 8.87599 7.21016 8.36301 8.49189C8.21682 8.85705 7.99625 9.68954 8.03629 9.72484Z"
                                    fill="currentcolor"
                                />
                            </svg>
                        </span>
                            AWESOME ..
                        </h1>
                        <div className="relative h-20 font-[LO] font-semibold" ref={headingsRef}>
                            <h1 className="animated-heading bg-yellow-400 w-fit px-4 py-1 rounded-2xl mt-5">WEBSITES</h1>
                            <h1 className="animated-heading bg-blue-400 w-fit px-4 py-1 rounded-2xl mt-5">MOBILE APPS</h1>
                            <h1 className="animated-heading bg-green-500 w-fit px-4 py-1 rounded-2xl mt-5">DESIGNS</h1>
                            <h1 className="animated-heading bg-red-400 w-fit px-4 py-1 rounded-2xl mt-5">UI / UX</h1>
                            <h1 className="animated-heading bg-indigo-300 w-fit px-4 py-1 rounded-2xl mt-5">WEB APPS</h1>
                            <h1 className="animated-heading bg-orange-300 w-fit px-4 py-1 rounded-2xl mt-5">TECHNOLOGY</h1>
                            <h1 className="animated-heading bg-violet-400 w-fit px-4 py-1 rounded-2xl mt-5">SAAS</h1>
                            <h1 className="animated-heading bg-rose-300 w-fit px-4 py-1 rounded-2xl mt-5">SOFTWARES</h1>
                        </div>
                    </div>

                    <button className="flex items-center gap-3 border border-black py-5 px-7 rounded-full font-[SR] w-fit mt-10">
                        Contact Us
                        <span>
                            <svg width="16" height="12" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.03629 9.72484C8.04689 9.73414 8.37179 9.80525 8.75822 9.88282C9.14471 9.96038 9.46509 10.012 9.47025 9.99759C9.47535 9.98314 9.51534 9.74889 9.55906 9.477C9.6469 8.93102 9.85958 8.29355 10.0868 7.89487C10.7952 6.65237 12.0661 5.82966 13.6075 5.61583L14 5.56136L14 5.01248L14 4.46356L13.6442 4.41144C11.3134 4.06995 9.79382 2.54799 9.50955 0.270372C9.491 0.121646 9.46882 7.51559e-07 9.46028 7.52278e-07C9.38167 7.58905e-07 8.07913 0.274135 8.05449 0.295852C8.03668 0.311555 8.04993 0.45098 8.08399 0.605634C8.4609 2.31815 9.54012 3.71167 10.9406 4.29433L11.2766 4.4341L4.36832 4.44505L-4.67662e-07 4.452L-3.74024e-07 5.56284L4.37956 5.5698L11.2715 5.58079L10.8474 5.76845C9.7471 6.25525 8.87599 7.21016 8.36301 8.49189C8.21682 8.85705 7.99625 9.68954 8.03629 9.72484Z" fill="currentcolor"></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="flex right w-[40%] h-screen items-center ">
                    <div className="relative w-full max-w-[370px] aspect-square p-4 ml-20 mt-14">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-violet-600/30 rounded-2xl blur-2xl"></div>
                        <div className="relative h-full w-full bg-white dark:bg-gray-800 rounded-[2rem] p-1 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                            <video
                                className="h-full w-full object-cover rounded-[1.7rem]"
                                src="/ds.mp4"
                                loop
                                muted
                                autoPlay
                                playsInline
                            ></video>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Hero;