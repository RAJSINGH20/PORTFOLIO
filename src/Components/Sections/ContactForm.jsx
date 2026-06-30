import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_7wywb0b",
        "template_u4wkvoq",
        form.current,
        "W9leOMt_fOm4yf0ap"
      );

      toast.success("Message sent successfully! 🚀");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-slate-950 via-gray-900 to-black"
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl"
          >
            <h2 className="text-4xl font-black text-center">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Contact Me
              </span>
            </h2>

            <p className="text-center text-gray-400">
              Have a project or opportunity? Feel free to send me a message.
            </p>

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-lg" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-900/80 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-500 transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-lg" />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-900/80 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-500 transition"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaCommentDots className="absolute left-4 top-5 text-cyan-400 text-lg" />
              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full bg-slate-900/80 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 outline-none focus:border-cyan-500 resize-none transition"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={!loading ? { scale: 1.03 } : {}}
              whileTap={!loading ? { scale: 0.97 } : {}}
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white flex justify-center items-center gap-3 transition-all duration-300 ${
                loading
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/30"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="w-6 h-6 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-20"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-90"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending Message...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
};

export default ContactForm;