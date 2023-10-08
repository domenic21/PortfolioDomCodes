import React ,{ useState }from "react";
import { technologies } from "../constants";

// this would be the stack banner component 
// this would use map properties to display the icons in the /constants.js file
// use state to generate the hover effect 
// this would be imported in the cards component 
//onmouse enter to set activer hover effects 
//onmouse leave to set hover effects to null
//make sure to use key to set unique id for each icon
const StackBanner = () => {
    const [activeTechnology, setActiveTechnology] = useState(null);

    return (
            <div className="flex flex-wrap gap-5">
                {technologies.map((technology) => (
                    <div
                        className="lg:w-28 lg:h-28 relative  cursor-pointer"
                        key={technology.name}
                        onMouseEnter={() => setActiveTechnology(technology)}
                        onMouseLeave={() => setActiveTechnology(null)}
                    >
                        <img
                            src={technology.icon}
                            alt={technology.name}
                            className="lg:w-full lg:h-full object-cover sm:w-10 sm:h-10  xs:w-10 xs:h-10 rounded-lg "
                        />
                        {activeTechnology === technology && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                                <h3 className="text-white text-xl font-bold">
                                    {technology.name}
                                </h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>

    );
};

export default StackBanner;

