import { motion } from "framer-motion";
import { COMPETITIVE_ADVANTAGES } from "@/lib/constants";
import { Cpu, Plug, Zap, BarChart4 } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const iconComponents = {
    "cpu": Cpu,
    "plug": Plug,
    "zap": Zap,
    "bar-chart-4": BarChart4
};

export function CompetitiveSection() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                </div>
                <motion.div
                    className="absolute bottom-0 left-0 w-[60%] h-[40%] rounded-full bg-gradient-to-r from-blue-900/20 to-transparent opacity-60 blur-[120px] -translate-x-1/2 translate-y-1/4"
                    animate={{
                        opacity: [0.4, 0.2, 0.4]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Potential</span> Advantage
                    </h2>
                    <div className="h-[1px] w-24 mx-auto bg-white/20 mb-6"></div>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        FlowOps aims to address key manufacturing challenges through innovative approaches to AI integration and operations management.
                    </p>
                </ScrollReveal>

                {/* Competitive advantages grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {COMPETITIVE_ADVANTAGES.map((advantage, index) => {
                        const IconComponent = iconComponents[advantage.icon as keyof typeof iconComponents];

                        return (
                            <motion.div
                                key={index}
                                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-blue-500/30 transition-colors duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center mb-4">
                                    <IconComponent className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-white text-xl mb-2">{advantage.title}</h3>
                                <p className="text-white/70 text-sm">{advantage.description}</p>
                            </motion.div>
                        );
                    })}
                </div>



                {/* Target use cases */}
                <ScrollReveal delay={0.3}>
                    <h3 className="text-2xl font-light mb-8 text-center">Target Use Cases</h3>
                    <p className="text-white/70 text-center max-w-3xl mx-auto mb-10">
                        While we're in the early stages of development, we've identified key industry problems our solutions aim to solve. Here are potential applications we're targeting:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                company: "Aerospace Manufacturing",
                                logo: "https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE2MzY2MTM3MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50",
                                challenge: "Complex quality issues causing high rejection rates",
                                solution: "AI-assisted quality control and defect prediction",
                                results: [
                                    "Potential defect reduction",
                                    "Labor cost savings",
                                    "Improved quality compliance"
                                ]
                            },
                            {
                                company: "Automotive Industry",
                                logo: "https://images.unsplash.com/photo-1565043666747-69f6646db940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE2MzY2MTM3MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50",
                                challenge: "Production line downtime and efficiency issues",
                                solution: "Real-time monitoring and predictive maintenance",
                                results: [
                                    "Reduced unplanned downtime",
                                    "Increased throughput potential",
                                    "Optimized maintenance scheduling"
                                ]
                            },
                            {
                                company: "Medical Devices",
                                logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE2MzY2MTM3MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=50",
                                challenge: "Time-consuming regulatory documentation processes",
                                solution: "Automated compliance tracking and reporting",
                                results: [
                                    "Streamlined documentation workflows",
                                    "Improved compliance consistency",
                                    "Reduced administrative overhead"
                                ]
                            }
                        ].map((study, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="border-b border-zinc-800 p-6">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-medium text-white">{study.company}</h4>
                                    </div>
                                    <p className="text-white/70 text-sm">
                                        <span className="text-blue-400 font-medium">Challenge:</span> {study.challenge}
                                    </p>
                                </div>
                                <div className="p-6">
                                    <p className="text-white/70 text-sm mb-4">
                                        <span className="text-blue-400 font-medium">Solution:</span> {study.solution}
                                    </p>
                                    <h5 className="text-white text-sm font-medium mb-3">Potential Benefits:</h5>
                                    <ul className="space-y-2">
                                        {study.results.map((result, idx) => (
                                            <li key={idx} className="flex items-start text-white/70 text-sm">
                                                <svg className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 8v4"></path>
                                                    <path d="M12 16h.01"></path>
                                                </svg>
                                                {result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
