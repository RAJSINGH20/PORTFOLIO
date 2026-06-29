import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto">

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6"
        >

          <h2 className="text-4xl font-bold text-center text-white">
            Contact Me
          </h2>

          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-cyan-400" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-900 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-cyan-400" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-900 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div className="relative">
            <FaCommentDots className="absolute left-4 top-4 text-cyan-400" />
            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full bg-slate-900 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold flex justify-center items-center gap-3 hover:scale-105 transition"
          >
            <FaPaperPlane />
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
};

export default ContactForm;