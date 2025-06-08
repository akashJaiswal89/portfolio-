"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import imgT1 from "../../../public/images/projects/1.png"
import imgS2 from "../../../public/images/projects/2.jpg"
import imgW3 from "../../../public/images/projects/3.jpg"
import imgR4 from "../../../public/images/projects/4.jpg"
import imgB5 from "../../../public/images/projects/5.png"
 const projectsData = [
  {
    id: 1,
    title: "TestBest.com",
    description: "An ed-tech platform for test creation, analytics, and student performance tracking. Built with Next.js, postgresSQL, and Drizzel ORM.",
    image: imgT1,
    tag: ["All", "Web"],
    previewUrl: "https://testbest.com",
  },
  {
    id: 2,
    title: "Billingcrow.com",
    description: "Billing and inventory platform similar to MyBillBook, developed using Next.js, and ScyllaDB.",
    image: imgB5,
    tag: ["All", "Web"],
    previewUrl: "https://billingcrow.com",
  },
  {
    id: 3,
    title: "Surgeparty",
    description: "Event platform with RSVP features and Payload CMS, built using Next.js.",
    image: imgS2,
    tag: ["All", "Web"],
    previewUrl: "https://surgeparty.com",
  },
  {
    id: 4,
    title: "WestSVR",
    description: "A server management dashboard using ReactJS",
    image:imgW3,
    tag: ["All", "Web"],
    previewUrl: "https://westsvr.com",
  },
  {
    id: 5,
    title: "Realm (React Native App)",
    description: "A social music app built with Expo and React Native. Users challenge each other in music battles, earn XP based on community votes, and post like Instagram.",
    image: imgR4,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=com.mobile.realm.prod&pli=1",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
