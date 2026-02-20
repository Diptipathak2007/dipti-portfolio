import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Send, Sparkles } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_q8g0ek5",
        "template_e61zvsc",
        form.current,
        "r44pt5q35IKoS6cz7"
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] bg-[#050414] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-bold text-white uppercase tracking-wider">Contact Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg font-medium max-w-xl mx-auto">
          Got a project in mind or just want to chat? Reach out and let's build something amazing together!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#0d081f]/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          {/* Form Header */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Sparkles className="text-purple-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Send a Message</h3>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors w-5 h-5" />
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#131025]/50 text-white border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#131025]/50 text-white border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 text-gray-500 group-focus-within:text-purple-500 transition-colors w-5 h-5" />
              <textarea
                name="message"
                placeholder="Your Message..."
                rows="5"
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#131025]/50 text-white border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder:text-gray-600 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSending}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column: Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="hidden lg:flex flex-col items-center justify-center text-center space-y-8"
        >
          <div className="relative">
            {/* Animated Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-80 h-80 rounded-full border-2 border-dashed border-purple-500/30 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-60 h-60 rounded-full border-2 border-dashed border-pink-500/20 flex items-center justify-center"
              ></motion.div>
            </motion.div>

            {/* Central Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  filter: ["drop-shadow(0 0 20px rgba(130,69,236,0.3))", "drop-shadow(0 0 40px rgba(130,69,236,0.6))", "drop-shadow(0 0 20px rgba(130,69,236,0.3))"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="p-8 bg-gradient-to-br from-[#1a1436] to-[#0d081f] rounded-full border border-purple-500/50"
              >
                <Mail className="w-16 h-16 text-purple-400" />
              </motion.div>
            </div>

            {/* Floating Particles/Icons Effect */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-10 p-3 bg-[#131025] border border-gray-700 rounded-xl shadow-lg"
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-4 p-3 bg-[#131025] border border-gray-700 rounded-xl shadow-lg"
            >
              <Send className="w-6 h-6 text-purple-400" />
            </motion.div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Let's Connect!</h3>
            <p className="text-gray-400 text-lg max-w-sm">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
