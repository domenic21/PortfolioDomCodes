import {
   
    javascript,
    domFaviCon,
    html,
    css,
    reactjs,
    tailwind,
    
    git,
    carrent,
    jobit,
    tripguide,
  
  } from "../assets";
 

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  

  
  const technologies = [
    {
      name: "HTML ",
      icon: html,
    },
    {
      name: "CSS ",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind ",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Operations Assisant logistics",
      company_name: "Daybreak Express",
      icon: domFaviCon,
      iconBg: "#FFFFFF",
      date: "December 2020 - Present",
      points: [
        'Successfully provide administrative assistance to the operations department including working with drivers to assign routes and process paperwork, answering telephones to ',
        'set appointments, trace shipments or route to the appropriate person',
        ' Answer telephones and emails in a prompt and courteous manner to provide customer service including setting appointments and tracing shipments',
        ' Prepare and maintain daily paperwork to move freight including DOT files to ensure confidentiality, accuracy and timeliness',
        'Scan documents such as Bill of Ladings and Delivery Receipts into our system',
      ],
    },
    {
      title: "Personal Trainer",
      company_name: "Dom Fortan Trainin system",
      icon: domFaviCon,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - Feb 2021",
      points: [
        "Online and in person training in different locations incluiding private gyms",
        "Create and sustain a client base with custom training programs geared to maximize client goals, provide safety and guidance in proper exercise technique and variations of exercises to meet goals of the client",
        "Including clearance to exercise documentation, Health History Questionnaire, and Physical Clearance forms prior to conducting a session",
        "Develop protocols for each client, communicate with the client to ensure satisfaction with the online and in person services"
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export {  technologies, experiences,  projects };