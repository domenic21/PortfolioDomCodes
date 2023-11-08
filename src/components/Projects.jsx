import React from "react";
import SectionWrap from "../hoc/SectionWrap";
import { motion } from "framer-motion";
import  {projects} from "../constants";
const Projects = () => {

  return (
    <div  >
      <h2 className="text-2xl font-bold text-center mb-10">Projects</h2>
      {projects.map((project) => (
      <article className=" flex-wrap flex  gap-3 mx-auto  lg:w-[90%]">
        
        <img
          alt={project.name}
          src={project.image}
          className="h-52 w-52 grow rounded-xl cursor-pointer object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
          <a href="#">
            <h3 className="text-lg font-medium text-orange-400">
              {project.name}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {project.description}
            
          </p>
        </div>
      </article>
      ))}
    </div>
    
  );
};

export default   SectionWrap(Projects, "projects");
