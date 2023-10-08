import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";

import SectionWrap from "../hoc/SectionWrap";
import { slideIn } from "../utils/motion";

const contact = () => {
  const FormRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleChanges = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="mx-auto max-w-screen-xl  px-4 py-16 sm:px-6 lg:px-8 gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="mx-auto max-w-lg text-center bg-[#1d1836] rounded-2xl"
      >
        <div className="pt-12">
        <p className={styles.sectionSubText}>Get in touch!</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        </div>
        <form
          ref={FormRef}
          onSubmit={handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 ">Your Name </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChanges}
              className=" bg-gray-200 py-4 px-6 placeholder:text-gray-500
            text-white
            rounded-lg outline-none border-none font-medium"
              placeholder="What's your name?"
            ></input>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChanges}
              className="bg-gray-200  py-4 px-6 placeholder:text-secondary 
            text-white
            rounded-lg outline-none border-none font-medium"
              placeholder="What's your email?"
            ></input>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Message </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChanges}
              className="bg-gray-200  py-4 px-6 placeholder:text-secondary 
            text-white
            rounded-lg outline-none border-none font-medium"
              placeholder="Leave me message.Will get back to you soon!"
            ></textarea>
          </label>
          <button 
          type="submit" 
          className="bg-tertinary py-3 px-8 rounded-xl w-fit 
            text-white font-bold outline-none shadow-md bg-blue-700 "
          >
            {loading ? "Sending..." : "Send"}

          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrap(contact, "contact");
