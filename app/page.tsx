"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";


const projects = [
  {
    title: "COB(CarOnBoard) - a cars collection showcase",
    url: "https://car-showroom-beryl.vercel.app/",
    description: "Using of ReactJS, NextJS Tailwind CSS and RAPID API Fetch cars data from Rapid API and shows on the app with custom filters show more and car details pop up functionality",
    image: "/images/car-hub.png",
    technologies: [
      {
        title: "React",
        image: "/images/react.png"
      },
      {
        title: "Next Js",
        image: "/images/next.png"
      },
      {
        title: "Tailwind Js",
        image: "/images/tailwind.png"
      },
      {
        title: "Rapid Api",
        image: "/images/rapid-api.png"
      }
    ]
  },
  {
    title: "BookByte - a books mangement view case ",
    url: "https://github.com/rahulk67/bookbyte",
    description: "Using of MERN Stack there is a CRUD operation on books where user can edit/update/delete/create books and display on the store with and also can the relational database of books on the MongoDB ",
    image: "/images/book-byte.png",
    technologies: [
      {
        title: "js",
        image: "/images/javascript.png"
      },
      {
        title: "react Js",
        image: "/images/react.png"
      },
      {
        title: "node Js",
        image: "/images/node-js.png"
      },
      {
        title: "mongo db",
        image: "/images/mongodb.svg"
      }
    ]
  }
]

const skills = [
  {
    technologies: [
      {
        title: "Python",
        image: "/images/python.png"
      },
      {
        title: "Javascript",
        image: "/images/javascript.png"
      },
      {
        title: "React Js",
        image: "/images/react.png"
      },
      {
        title: "Next Js",
        image: "/images/next.png"
      },
      {
        title: "Node Js",
        image: "/images/node-js.png"
      },
      {
        title: "SQl Server",
        image: "/images/sql-server.png"
      },

    ]
  }
]

const education = [
  {
    title: "Bachelor of Technology ",
    description: "Rajasthan Technical University",
    date: "",
    image: "/images/rtu.jfif",
  },
  {
    title: "Senior Secondary",
    description: "SRK Institute ",
    date: "",
    image: "/images/school.png",
  },
];

const navabr = [
  // {
  //   title: "Work Experience",
  //   link: "workExperience"
  // },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Skills",
    link: "skills",
  },
  {
    title: "Education",
    link: "education",
  },
  // {
  //   title: "Resume",
  //   link: "resume",

  // },
  // {
  //   title: "Contact",
  //   link: "Contact",
  // },

]


export default function Home() {

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);


  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  })

  return (

    <div>



      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 10 }}
        transition={{ duration: 2 }}
        className="min-h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
     [background-size:16px_16px] 
     [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_70%,transparent_100%)]">


        {/* navabar start from here */}

        <motion.div
          animate={isHidden ? "hidden" : "visible"}
          whileHover="visible"
          onFocusCapture={() => setIsHidden(false)}
          variants={{
            hidden: {
              y: '-90%'
            },
            visible: {
              y: '0%'
            }
          }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 md:flex w-full justify-center pt-3 hidden">

          <div className="flex bg-white gap-x-4 items-center rounded-xl">
            {navabr.map((item) =>
              <ScrollLink
                key={item.title}
                to={item.link}
                smooth={true}
                duration={500}
                className="border px-4 py-3 rounded-xl text-center flex items-center justify-center cursor-pointer hover:bg-gray-100"
              >
                {item.title}

              </ScrollLink>
            )}


            <a href="https://drive.google.com/file/d/1Zc7HVZzc4FQtZnbtTNmQbL8ZVE81F20S/view" target="blank" className="border px-4 py-3 rounded-xl text-center flex items-center justify-center cursor-pointer hover:bg-gray-100">Resume</a>

            <a href="https://www.linkedin.com/in/rahulk67" target="black" className="border px-4 py-3 rounded-xl text-center flex items-center justify-center cursor-pointer hover:bg-gray-100">Contact</a>


          </div>
        </motion.div>


        <div className="md:w-3/5 mx-auto px-6 md:px-0 pb-20 ">
          <div className="pt-10 justify-end items-center flex underline md:hidden">
            <a href="https://www.linkedin.com/in/rahulk67" target="blank">Contact</a>
          </div>

          <div className="pt-4 justify-end items-center flex underline md:hidden">
            <a href="https://drive.google.com/file/d/1Zc7HVZzc4FQtZnbtTNmQbL8ZVE81F20S/view" target="blank">Resume</a>
          </div>

          <div className="md:flex md:gap-x-10 items-center md:pt-28">
            <Image src={"/images/IMG_20240617_135117.jpg"}
              alt="rahul"
              width={10000}
              height={10000}
              className="rounded-xl w-40 mt-4" />

            <div className="space-y-2">
              <motion.div
                style={{
                  paddingRight: "15px",
                  display: "inline-block",
                }}
                animate={{ rotate: [0, 20, 0] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0,
                }}
                className="text-4xl my-4 hidden md:block">
                👋
              </motion.div>

              <h1 className="text-xl lg:text-4xl font-semibold">
                <Typewriter
                  words={['Hi, I am Rahul I am a software developer building web stuffs...']} />
              </h1>

              <p className="text-muted-foreground text-lg md:pr-8">
                I have done some cool and good full stack projects for self learn the web techies.
              </p>

              <p className="text-muted-foreground text-lg">
                Feel free to reach out to me on <i className="fa fa-linkedin"></i>
                <a className="underline" href="https://www.linkedin.com/in/rahulk67/" target="blank">linkedin</a>  I am always happy to connect with you...
              </p>

            </div>
          </div>

          {/* projce section from here  */}
          <Element
            name="projects">
            <div>
              <h2 className="text-xl pt-10 font-semibold">Projects</h2>
              {projects.map(project =>
                <div
                  key={project.title}
                  className="my-4"
                  onClick={() => window.open(project.url)}


                >

                  <div className="md:flex md:gap-x-10 cursor-pointer items-center border rounded-2xl p-4 bg-white">

                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      className="rounded-md w-full md:w-1/5" />


                    <div className="flex flex-col space-y-2">
                      <h2 className="text-md font-semibold mt-4 md:mt-0">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>

                      <div className="flex gap-x-2">
                        {project.technologies.map(technology =>
                          <div key={technology.title} className="flex items-center">
                            <Image
                              src={technology.image}
                              alt={technology.title}
                              width={10000}
                              height={10000}
                              className="w-8" />
                          </div>
                        )}
                      </div>
                    </div>

                  </div>


                </div>
              )}

            </div>
          </Element>



          {/* skill section from here  */}
          <Element name="skills">


            <div>
              <h2 className="text-xl pt-10 font-semibold">Skills</h2>
              {skills.map(skill =>
                <div>
                  <div className="md:flex md:gap-x-10 cursor-pointer items-center border rounded-2xl p-4 bg-white">
                    <div className="flex flex-col space-y-2">
                      <div className="flex gap-x-8">
                        {skill.technologies.map(technology =>
                          <div key={technology.title} className="flex items-center">
                            <Image
                              src={technology.image}
                              alt={technology.title}
                              width={10000}
                              height={10000}
                              className="w-8" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Element>


          <Element name="education">
            <div className="education section">
              <h2 className="text-xl pt-10 font-semibold">Education</h2>
              {education.map(item => (
                <div key={item.title} className="my-4">
                  <div className="md:flex justify-between cursor-pointer items-center border rounded-2xl p-4 bg-white">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="rounded-md w-20"
                      />

                      <div className="">
                        <h2 className="text-md font-semibold mt-4 md:mt-0">
                          {item.title}
                        </h2>
                        <p className="text-muted-foreground ">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="text-muted-foreground text-sm mt-4 md:mt-0">
                        {" "}
                        {item.date}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Element>





        </div>









      </motion.div>

    </div>
  );
}
