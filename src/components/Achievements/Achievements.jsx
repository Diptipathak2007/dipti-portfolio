import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Award, Cpu } from 'lucide-react';
import { achievements } from '../../constants';

const iconMap = {
    Code: <Code className="w-8 h-8 text-purple-500" />,
    Globe: <Globe className="w-8 h-8 text-purple-500" />,
    Award: <Award className="w-8 h-8 text-purple-500" />,
    Cpu: <Cpu className="w-8 h-8 text-purple-500" />,
};

const Achievements = () => {
    return (
        <section id="achievements" className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] bg-[#050414]">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white uppercase tracking-wider">Achievements</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto italic">
                    Milestones and highlights of my development journey and academic success.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, translateY: -5 }}
                        className="group relative bg-[#0d081f] p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-xl overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                        <div className="relative flex items-start space-x-6">
                            <div className="flex-shrink-0 p-4 bg-[#1a1436] rounded-xl group-hover:bg-[#251f4d] transition-colors duration-300">
                                {iconMap[achievement.icon]}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                                    {achievement.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-base">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
