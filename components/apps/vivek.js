import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about vivek" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    {/* <iframe src="https://github.com/sponsors/vivek9patel/button" title="Sponsor vivek9patel" width={"100%"} height={"100%"} ></iframe> */}
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Vivek Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Atulit Gaur</span>,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Developer & Founder!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-4/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Graduate Student</span> studying Computer Science, and I’m really passionate about AI. I also have solid experience in web and app development, which helps me bring my tech interests to life. (Hit me up <a className='text-underline' href='mailto:atulit23@gmail.com'><u>@atulit23@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building">I enjoy building awesome softwares that solve practical problems. Currenlty building <a className="underline" href="https://www.xanderco.in" target="_blank" rel="noreferrer"> Xander  Co</a> with my team!</li>
                <li className=" mt-3 list-time"> When I am not coding the next small thing, I like to spend my time reading books, playing chess, studying physics or watching shows (currently watching <a className="underline" href="https://www.primevideo.com/detail/0ND6SUNF6JYPN6XDBEPGJ9TDWR/ref=atv_dp_season_select_s1?jic=8%7CEgNhbGw%3D" target="_blank" rel="noreferrer"> House</a>).</li>
                <li className=" mt-3 list-star"> And I also have interest in Game Development!</li>
            </ul>
        </>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Maharaja Agrasen Institute of Technology
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - 2026</div>
                    <div className=" text-sm md:text-base">Computer Science</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 8.5/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup> (GHPS)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 - 2022</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 92.4%</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Web Development & Artificial Intelligence!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="python" />
                        <img className="m-1" src="https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white" alt="dart" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="HTML" /></a>
                        <img className="m-1" src="https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white" alt="csharp" />
                        <img className="m-1" src="https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white" alt="c" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white" alt="redux" />
                        <img className="m-1" src="https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white" alt="unity" />
                        <img className="m-1" src="https://img.shields.io/badge/Unreal%20Engine-0E1128?style=flat&logo=unrealengine&logoColor=white" alt="unreal" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt=" next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt=" react" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt=" tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt=" node.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt=" redux" />
                        <img className="m-1" src="https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white" alt="tensorflow" />
                        <img className="m-1" src="https://img.shields.io/badge/PyTorch-EA2F2F?style=flat&logo=pytorch&logoColor=white" alt="pytorch" />
                        <img className="m-1" src="https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB" alt="react native" />
                        <img className="m-1" src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" alt="flask" />
                        <img className="m-1" src="https://img.shields.io/badge/Django-092D43?style=flat&logo=django&logoColor=white" alt="django" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="vivek linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Xander Co",
            date: "June 2024",
            link: "https://www.xanderco.in",
            description: [
                "A no code AI platform for training and deployment of AI models without writing a single line of code!",
            ],
            domains: ["javascript", "react.js", "django", "node.js", "tensorflow", "transformers", "google cloud"],
            type: "other"
        },
        {
            name: "AI Legal Assistant",
            date: "Sept 2023",
            link: "https://github.com/Atulit23/Legal-Assist",
            description: [
                "An AI Chatbot powered by LLaMA 2 capable of providing with assistance with user's legal queries along with generation of necessary documents.",
            ],
            domains: ["javascript", "react.js", "LLAMA", "node.js"]
        },
        {
            name: "Moodingo",
            date: "Sept 2024",
            link: "https",
            description: [
                "An AI powered music generator app that not only generates spotify playlists based on your music taste but also provides a psych analysis on you based on your music taste.",
            ],
            domains: ["javascript", "react.js", "gemini", "node.js"]
        },
        {
            name: "PDF Editor",
            date: "Oct 2023",
            link: "",
            description: [
                "Created a fully functional PDF Editor in ReactJS, more or less from scratch, user could draw shapes, add text, relocate the shapes, add images on multiple pages and download the updated PDF. I built this for my internship.",
            ],
            domains: ["javascript"],
            type: "other"
        },
        {
            name: "Browser Extension",
            date: "Feb 2024",
            link: "https://github.com/Atulit23/final_extension",
            description: [
                "This extension can successfully detect upto 10 dark patterns like fake urgency, subscription trickery etc. employed by various e-commerce websites. ",
            ],
            domains: ["javascript", "react.js", "LLMs", "tensorflow", "flask", "node.js"]
        },
        {
            name: "Zen Zone",
            date: "Apr 2024",
            link: "https://github.com/Atulit23/zen-zone",
            description: [
                "Built a game focusing on mental health, in this you could actually talk with a therapist powered by a LLM and then the therapist would speak back, creating a comfortable environment. Additionally, there was a rage room incorporated where users could break stuff and calm themselves.",
            ],
            domains: ["unity3d", "flask", "gemini", "TTS"]
        },
        {
            name: "Misleading Info Detection",
            date: "Feb 2024",
            link: "https://github.com/Atulit23/misleading-flan",
            description: [
                "Created a web scraper that gathers product details from one website and uses an LLM to compare this information with another site, ensuring that any misleading claims are identified.",
            ],
            domains: ["flask", "selemium", "LLM"]
        },
        {
            name: "GPT from scratch",
            date: "Mar 2024",
            link: "https://github.com/Atulit23/gpt_from_scratch",
            description: [
                "Developed a custom GPT language model with multi-head attention and feedforward layers for text generation, capable of training and generating sequences based on input tokens.",
            ],
            domains: ["pytorch"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "node.js": "purple-400",
        "django": "green-600",
        "python": "green-200",
        "pytorch": "green-600",
        "codeforces-api": "gray-300",
        "unity3d": "gray-300",
        "tailwindcss": "blue-300",
        "TTS": "blue-300",
        "next.js": "purple-600",
        "LLAMA": "yellow-600",
        "react.js": "purple-600",
        "flask": "yellow-600",
        "gemini": "purple-600",
        "django": "yellow-600",
        "transformers": "purple-600",
        "google cloud": "blue-600",
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.includes("/") ? project.link.split('/') : null
                    const projectName = projectNameFromLink !== null && projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link !== "" && project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name}</div>
                                        {!project.type && <iframe src={`https://ghbtns.com/github-btn.html?user=Atulit23&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>}
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Atulit-gaur-Resume.pdf" title="vivek patel resume" frameBorder="0"></iframe>
    )
}