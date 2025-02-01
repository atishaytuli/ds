import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

function Navbar() {
    const menuRef = useRef<HTMLUListElement>(null);

    useGSAP(() => {
        if (!menuRef.current) return;

        const menuItems = menuRef.current.querySelectorAll("li");

        menuItems.forEach((item: HTMLLIElement) => {
            const link = item.querySelector("a");
            if (link) {
                const duplicateLink = document.createElement("a");
                duplicateLink.textContent = link.textContent;
                duplicateLink.href = link.href;
                duplicateLink.className = "duplicate";

                item.style.position = "relative";
                item.style.overflow = "hidden";
                item.style.display = "flex";
                item.style.alignItems = "center";
                item.style.justifyContent = "center";
                item.style.height = "20px";

                link.style.position = "absolute";
                link.style.top = "0";
                link.style.left = "50%";
                link.style.transform = "translateX(-50%)";
                link.style.width = "100%";
                link.style.textAlign = "center";

                duplicateLink.style.position = "absolute";
                duplicateLink.style.top = "100%";
                duplicateLink.style.left = "50%";
                duplicateLink.style.transform = "translateX(-50%)";
                duplicateLink.style.width = "100%";
                duplicateLink.style.textAlign = "center";

                item.appendChild(duplicateLink);
            }
        });

        const mouseOverAnimation = (elem: HTMLLIElement) => {
            gsap.to(elem.querySelector("a:first-child"), {
                y: "-100%",
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(elem.querySelector(".duplicate"), {
                y: "-100%",
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const mouseOutAnimation = (elem: HTMLLIElement) => {
            gsap.to(elem.querySelector("a:first-child"), {
                y: "0%",
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(elem.querySelector(".duplicate"), {
                y: "0%",
                duration: 0.3,
                ease: "power2.out",
            });
        };

        menuItems.forEach((item: HTMLLIElement) => {
            item.addEventListener("mouseenter", () => mouseOverAnimation(item));
            item.addEventListener("mouseleave", () => mouseOutAnimation(item));
        });

        return () => {
            menuItems.forEach((item: HTMLLIElement) => {
                item.removeEventListener("mouseenter", () => mouseOverAnimation(item));
                item.removeEventListener("mouseleave", () => mouseOutAnimation(item));
            });
        };
    }, { scope: menuRef });

    return (
        <>
            <nav className="fixed bg-white w-full h-20 px-24 py-6 flex justify-between items-center z-999">
                <h3 className="flex items-center gap-2 font-[SM] font-medium text-2xl">
                    <span>
                        <img
                            className="w-10 h-10 object-cover"
                            src="https://designingsolutions.co.in/_next/static/media/Final-logo.cd09f72c.svg"
                            alt="logo"
                        />
                    </span>
                    designing
                    <span className="font-[SR] font-normal"> solutions</span>
                </h3>

                <div></div>

                <ul ref={menuRef} className="flex font-[SR] relative">
                    <li className="relative h-[30px] w-[120px] flex justify-center items-center overflow-hidden">
                        <a href="#">Projects</a>
                    </li>
                    <li className="relative h-[30px] w-[140px] flex justify-center items-center overflow-hidden">
                        <a href="#">Testimonials</a>
                    </li>
                    <li className="relative h-[30px] w-[100px] flex justify-center items-center overflow-hidden">
                        <a href="#">About</a>
                    </li>
                    <li className="relative h-[30px] w-[120px] flex justify-center items-center overflow-hidden">
                        <a href="#">Services</a>
                    </li>
                </ul>

                <button className="flex items-center gap-3 border border-black py-3 px-5 rounded-full font-[SR] bg-[#F3EEE4]">
                    Let's Talk{" "}
                    <span>
                        <svg
                            width="14"
                            height="10"
                            viewBox="0 0 14 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.03629 9.72484C8.04689 9.73414 8.37179 9.80525 8.75822 9.88282C9.14471 9.96038 9.46509 10.012 9.47025 9.99759C9.47535 9.98314 9.51534 9.74889 9.55906 9.477C9.6469 8.93102 9.85958 8.29355 10.0868 7.89487C10.7952 6.65237 12.0661 5.82966 13.6075 5.61583L14 5.56136L14 5.01248L14 4.46356L13.6442 4.41144C11.3134 4.06995 9.79382 2.54799 9.50955 0.270372C9.491 0.121646 9.46882 7.51559e-07 9.46028 7.52278e-07C9.38167 7.58905e-07 8.07913 0.274135 8.05449 0.295852C8.03668 0.311555 8.04993 0.45098 8.08399 0.605634C8.4609 2.31815 9.54012 3.71167 10.9406 4.29433L11.2766 4.4341L4.36832 4.44505L-4.67662e-07 4.452L-3.74024e-07 5.56284L4.37956 5.5698L11.2715 5.58079L10.8474 5.76845C9.7471 6.25525 8.87599 7.21016 8.36301 8.49189C8.21682 8.85705 7.99625 9.68954 8.03629 9.72484Z"
                                fill="currentcolor"
                            ></path>
                        </svg>
                    </span>
                </button>
            </nav>
        </>
    );
}

export default Navbar;