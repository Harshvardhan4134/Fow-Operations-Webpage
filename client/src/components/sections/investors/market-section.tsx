import { motion } from "framer-motion";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function MarketSection() {
return (
<section id="market-opportunity" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div
                className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]">
            </div>
        </div>
        <motion.div
            className="absolute -bottom-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-blue-900/20 to-blue-800/10 opacity-60 blur-[100px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }} transition={{ duration: 10, repeat: Infinity,
            ease: "easeInOut" }} />
    </div>

    <div className="container max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                    $120 Billion
                </span> Market Opportunity
            </h2>
            <div className="h-[1px] w-24 mx-auto bg-white/20 mb-6"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
                The manufacturing operations management software market is experiencing rapid growth, driven by digital
                transformation initiatives and Industry 4.0 adoption.
            </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Market Size Breakdown */}
            <ScrollReveal delay={0.1}
                className="bg-zinc-800 rounded-xl border border-zinc-700 p-8 relative overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
                </div>

                <h3 className="text-white text-2xl font-light mb-8 relative z-10">Market Opportunity</h3>

                <div className="space-y-8 relative z-10">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-white/70">Global Market Size</span>
                            <span className="text-white font-medium">$120B</span>
                        </div>
                        <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                                initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.2 }} />
                        </div>
                        <div className="mt-1 text-xs text-white/50">Total manufacturing operations software market</div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-white/70">AI in Manufacturing</span>
                            <span className="text-white font-medium">$16B</span>
                        </div>
                        <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                                initial={{ width: 0 }} whileInView={{ width: "13%" }} viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.4 }} />
                        </div>
                        <div className="mt-1 text-xs text-white/50">Current AI-powered solutions segment</div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-white/70">Our Target Segment</span>
                            <span className="text-white font-medium">$4.5B</span>
                        </div>
                        <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                            <motion.div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                                initial={{ width: 0 }} whileInView={{ width: "3.75%" }} viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6 }} />
                        </div>
                        <div className="mt-1 text-xs text-white/50">Mid-market manufacturers in target industries</div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Market Growth Trends */}
            <ScrollReveal delay={0.2}
                className="bg-zinc-800 rounded-xl border border-zinc-700 p-8 relative overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2">
                </div>

                <h3 className="text-white text-2xl font-light mb-8 relative z-10">Market Growth Drivers</h3>

                <div className="space-y-6 relative z-10">
                    <div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-900/30 rounded-lg p-3 flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                                    <path d="M5.3 15c.9-2.3 3-4 7-4 4 0 6 1.7 7 4"></path>
                                    <line x1="12" y1="7" x2="12" y2="7.01"></line>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white text-lg mb-1">Industry 4.0 Adoption</h4>
                                <p className="text-white/70 text-sm">
                                    76% of manufacturers have ongoing Industry 4.0 initiatives, with 15% CAGR in smart
                                    factory implementations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-900/30 rounded-lg p-3 flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                                    <line x1="6" y1="2" x2="6" y2="4"></line>
                                    <line x1="10" y1="2" x2="10" y2="4"></line>
                                    <line x1="14" y1="2" x2="14" y2="4"></line>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white text-lg mb-1">AI Integration</h4>
                                <p className="text-white/70 text-sm">
                                    AI in manufacturing growing at 24% CAGR, with 62% of manufacturers planning to
                                    implement AI solutions by 2025.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-900/30 rounded-lg p-3 flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3v19"></path>
                                    <path d="M5 8l14 8"></path>
                                    <path d="M5 16l14-8"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white text-lg mb-1">Labor Challenges</h4>
                                <p className="text-white/70 text-sm">
                                    Manufacturing facing 2.1 million unfilled jobs by 2030, driving demand for
                                    automation and efficiency solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-900/30 rounded-lg p-3 flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="6" y1="3" x2="6" y2="15"></line>
                                    <circle cx="18" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white text-lg mb-1">Supply Chain Optimization</h4>
                                <p className="text-white/70 text-sm">
                                    86% of manufacturers investing in resilient and transparent supply chain solutions
                                    post-pandemic.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        {/* Target Facilities Section */}
        <ScrollReveal delay={0.3} className="mt-16">
            <h3 className="text-white text-2xl font-light mb-8 text-center">Market Focus</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                { number: "45K+", label: "North American facilities", icon: "map" },
                { number: "8K+", label: "Mid-market target segment", icon: "server" },
                { number: "3-5", label: "Initial pilot partners goal", icon: "globe" },
                { number: "15%", label: "Industry growth rate", icon: "trending-up" }
                ].map((item, index) => (
                <motion.div key={index} className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-5 text-center"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }} whileHover={{ y: -5,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" , transition: { duration: 0.2 } }}>
                    <div className="inline-flex justify-center items-center w-10 h-10 mb-4 rounded-full bg-blue-800/40">
                        {item.icon === "map" && (
                        <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                            <line x1="8" y1="2" x2="8" y2="18"></line>
                            <line x1="16" y1="6" x2="16" y2="22"></line>
                        </svg>
                        )}
                        {item.icon === "server" && (
                        <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                        )}
                        {item.icon === "globe" && (
                        <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path
                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                            </path>
                        </svg>
                        )}
                        {item.icon === "trending-up" && (
                        <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                        )}
                    </div>
                    <div className="text-2xl font-light text-white mb-1">{item.number}</div>
                    <div className="text-xs text-white/60">{item.label}</div>
                </motion.div>
                ))}
            </div>
        </ScrollReveal>

        {/* Industry Analysis */}
        <ScrollReveal delay={0.4} className="mt-16 bg-zinc-800 rounded-xl border border-zinc-700 p-8">
            <h3 className="text-white text-2xl font-light mb-6 text-center">Industry Analysis</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-zinc-700/40 p-5 rounded-lg">
                    <h4 className="text-white font-medium mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="m18 16 4-4-4-4"></path>
                            <path d="m6 8-4 4 4 4"></path>
                            <path d="m14.5 4-5 16"></path>
                        </svg>
                        Current Challenges
                    </h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            65% of manufacturers struggle with legacy systems integration
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Planned downtime costs $50B+ annually in the US alone
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Manual quality control has error rates of 20-30%
                        </li>
                    </ul>
                </div>

                <div className="bg-zinc-700/40 p-5 rounded-lg">
                    <h4 className="text-white font-medium mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        Competitive Landscape
                    </h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Current solutions require 6+ months implementation
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Most competitors offer point solutions rather than integrated platforms
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            AI capabilities are nascent with limited predictive accuracy
                        </li>
                    </ul>
                </div>

                <div className="bg-zinc-700/40 p-5 rounded-lg">
                    <h4 className="text-white font-medium mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-400" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        Our Advantage
                    </h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Innovative AI approach with potential performance gains
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Target implementation of under 30 days
                        </li>
                        <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Designed for integration with common manufacturing systems
                        </li>
                    </ul>
                </div>
            </div>
        </ScrollReveal>
    </div>
</section>
);
}