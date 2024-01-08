import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import ParticlesContainer from "../../components/ParticlesContainer";
import Toaster from "../../components/Toaster";
import { sendContactForm } from "../../lib/api";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", subject: "" });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleValidationOnSubmit = () => {
    let hasErrors = false;

    if (!values.name) {
      errors.name = true;
      hasErrors = true;
    } else {
      errors.name = false;
    }

    if (!values.email) {
      errors.email = true;
      hasErrors = true;
    } else {
      errors.email = false;
    }

    if (!values.subject) {
      errors.subject = true;
      hasErrors = true;
    } else {
      errors.subject = false;
    }

    setErrors({ ...errors });

    return !hasErrors;
  };

  const sendMail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const isValid = handleValidationOnSubmit();

      if (isValid) {
        setValues({ name: "", email: "", subject: "" });

        const response = await sendContactForm(values);

        if (response.ok) {
          toast.success("Email sent successfully");
        } else {
          throw new Error("Failed to send email");
        }
      } else {
        setErrors({ ...errors });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full">
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto"
      >
        <div>
          {!loading ? (
            <h1 className="h1">
              contact <span className="text-accent">me.</span>
            </h1>
          ) : (
            <h1 className="h1 loading-text">
              sending <span className="text-accent">.</span>
              <span className="text-accent">.</span>
              <span className="text-accent">.</span>
            </h1>
          )}
        </div>
        <form className="gap-y-6 flex flex-col xl:max-w-[600px] sm:w-full items-center z-10">
          <input
            name="name"
            value={values.name}
            onChange={handleInputChange}
            type="text"
            className="input"
            placeholder={errors.name ? "Name is required" : "Name"}
          />
          <input
            name="email"
            value={values.email}
            onChange={handleInputChange}
            type="email"
            className="input"
            autoComplete="off"
            placeholder={errors.email ? "Email is required" : "Email"}
          />
          <textarea
            name="subject"
            onChange={handleInputChange}
            value={values.subject}
            type="text"
            className="textarea"
            placeholder={errors.subject ? "Subject is required" : "Subject"}
          />
          <div className="flex justify-start w-full">
            <button onClick={sendMail} type="submit" className="btn-primary">
              get in <span className="text-accent">touch.</span>
            </button>
            <Toaster />
          </div>
        </form>
      </motion.div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Contact;
