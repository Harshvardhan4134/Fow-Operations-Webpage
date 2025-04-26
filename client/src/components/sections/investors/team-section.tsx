import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/constants";
import { Linkedin, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function TeamSection() {
    return (
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                </div>
                <motion.div
                    className="absolute top-0 right-0 w-[40%] h-[30%] rounded-full bg-gradient-to-bl from-blue-900/20 to-transparent opacity-70 blur-[100px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                        Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Leadership</span> Team
                    </h2>
                    <div className="h-[1px] w-24 mx-auto bg-white/20 mb-6"></div>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Our team combines deep expertise in AI, manufacturing, and enterprise software to deliver transformative solutions.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="aspect-square relative overflow-hidden">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 flex space-x-3">
                                        <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                                            <Linkedin className="w-4 h-4 text-white" />
                                        </a>
                                        <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                                            <ExternalLink className="w-4 h-4 text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-medium text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-blue-400 text-sm mb-3">
                                    {member.role}
                                </p>
                                <p className="text-white/70 text-sm">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Advisors Section */}
                <ScrollReveal className="mt-20">
                    <h3 className="text-2xl font-light mb-10 text-center">Advisory Board</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Dr. Elena Rodriguez",
                                role: "AI Research Advisor",
                                bio: "Former Head of AI Research at MIT, 20+ publications on manufacturing AI applications",
                                imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop"
                            },
                            {
                                name: "Robert Chang",
                                role: "Manufacturing Strategy",
                                bio: "Former SVP Manufacturing at GE, scaled global operations across 12 countries",
                                imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop"
                            },
                            {
                                name: "Katherine Winters",
                                role: "Investment Strategy",
                                bio: "Partner at Sequoia Capital, led investments in 15+ successful enterprise SaaS startups",
                                imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=400&fit=crop"
                            }
                        ].map((advisor, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-6 flex gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            >
                                <img
                                    src={advisor.imageUrl}
                                    alt={advisor.name}
                                    className="w-16 h-16 rounded-full object-cover object-center flex-shrink-0"
                                />
                                <div>
                                    <h4 className="text-white text-lg font-medium">{advisor.name}</h4>
                                    <p className="text-blue-400 text-xs mb-2">{advisor.role}</p>
                                    <p className="text-white/70 text-sm">{advisor.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Key Milestones */}
                <ScrollReveal delay={0.3} className="mt-20">
                    <h3 className="text-2xl font-light mb-10 text-center">Company Milestones</h3>

                    <div className="relative">
                        {/* Timeline connector */}
                        <div className="absolute left-[12px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-zinc-700"></div>

                        <div className="space-y-8 relative">
                            {[
                                {
                                    date: "Mar 2022",
                                    title: "Company Founded",
                                    description: "FlowOps founded by Michael Chen and Sarah Johnson after identifying major inefficiency gaps at Tesla and Google."
                                },
                                {
                                    date: "Sep 2022",
                                    title: "Seed Round - $3.5M",
                                    description: "Raised seed funding from top Silicon Valley investors to develop the core AI engine and initial platform."
                                },
                                {
                                    date: "Jan 2023",
                                    title: "Alpha Product Launch",
                                    description: "First version deployed with two pilot customers, achieving 22% efficiency improvement in 30 days."
                                },
                                {
                                    date: "Jun 2023",
                                    title: "Beta Program - 10 Customers",
                                    description: "Expanded to 10 beta customers across aerospace, automotive and consumer electronics manufacturing."
                                },
                                {
                                    date: "Nov 2023",
                                    title: "Official Product Launch",
                                    description: "Released v1.0 of FlowOps platform with full analytics, AI optimization and mobile capabilities."
                                },
                                {
                                    date: "Present",
                                    title: "Series A Fundraising",
                                    description: "Currently raising Series A to scale operations, expand market reach, and enhance AI capabilities."
                                }
                            ].map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row gap-4 md:gap-0 items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Date marker */}
                                    <div className="flex-1 md:flex md:justify-end md:pr-8 md:text-right pt-0 md:pt-2">
                                        <div className={`${index % 2 === 0 ? 'md:text-left md:pl-8 md:pr-0' : 'md:text-right md:pr-8'}`}>
                                            {index % 2 === 0 ? (
                                                <div className="hidden md:block"></div>
                                            ) : (
                                                <div className="font-medium text-blue-400">{milestone.date}</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-2">
                                        <div className="w-6 h-6 rounded-full bg-blue-900 border-4 border-zinc-800 z-10 relative">
                                            <motion.div
                                                className="absolute inset-0 rounded-full bg-blue-400 opacity-40"
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pl-10 md:pl-8 md:pt-0">
                                        <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-0'}`}>
                                            {index % 2 === 0 && (
                                                <div className="font-medium text-blue-400 md:hidden">{milestone.date}</div>
                                            )}
                                            {index % 2 === 0 && (
                                                <div className="hidden md:block font-medium text-blue-400">{milestone.date}</div>
                                            )}
                                            <h4 className="text-white text-lg font-medium mt-1">{milestone.title}</h4>
                                            <p className="text-white/70 text-sm mt-1">{milestone.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
