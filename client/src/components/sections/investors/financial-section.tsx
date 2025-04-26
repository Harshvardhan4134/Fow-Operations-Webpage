import { motion } from "framer-motion";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

export function FinancialSection() {
    return (
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                </div>
                <motion.div
                    className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-green-900/20 to-transparent opacity-50 blur-[100px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
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
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                            Investment
                        </span> Opportunity
                    </h2>
                    <div className="h-[1px] w-24 mx-auto bg-white/20 mb-6"></div>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        FlowOps is a new startup in the manufacturing operations space, seeking seed funding to bring our innovative AI solution to market.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Market Opportunity */}
                    <ScrollReveal delay={0.1} className="bg-zinc-800 rounded-xl border border-zinc-700 p-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-40 h-40 bg-green-600/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

                        <h3 className="text-white text-2xl font-light mb-8 relative z-10">Market Opportunity</h3>

                        <div className="space-y-8 relative z-10">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/70">Manufacturing Software Market</span>
                                    <span className="text-white font-medium">$120B</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "80%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.2 }}
                                    />
                                </div>
                                <div className="mt-1 text-xs text-white/50">Total addressable market size</div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/70">Industry Growth Rate</span>
                                    <span className="text-white font-medium">15%</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "15%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.4 }}
                                    />
                                </div>
                                <div className="mt-1 text-xs text-white/50">Annual CAGR for manufacturing software</div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/70">AI Adoption in Manufacturing</span>
                                    <span className="text-white font-medium">22%</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "22%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.6 }}
                                    />
                                </div>
                                <div className="mt-1 text-xs text-white/50">Current market penetration rate</div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/70">Potential Target Facilities</span>
                                    <span className="text-white font-medium">45,000+</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "45%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.8 }}
                                    />
                                </div>
                                <div className="mt-1 text-xs text-white/50">Manufacturing facilities in North America</div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Go-to-Market Strategy */}
                    <ScrollReveal delay={0.2} className="bg-zinc-800 rounded-xl border border-zinc-700 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-green-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="text-white text-2xl font-light mb-8 relative z-10">Go-to-Market Strategy</h3>

                        <div className="space-y-6 relative z-10">
                            <div className="relative">
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 flex items-center justify-center rounded-lg mr-4">
                                            <span className="text-green-400 text-xl">1</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white text-lg font-medium mb-1">Prototype Development</h4>
                                            <p className="text-white/70 text-sm">Complete our AI-driven manufacturing operations platform with initial funding</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 flex items-center justify-center rounded-lg mr-4">
                                            <span className="text-green-400 text-xl">2</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white text-lg font-medium mb-1">Pilot Programs</h4>
                                            <p className="text-white/70 text-sm">Partner with 3-5 manufacturing facilities for beta testing and case studies</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 flex items-center justify-center rounded-lg mr-4">
                                            <span className="text-green-400 text-xl">3</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white text-lg font-medium mb-1">Industry Expansion</h4>
                                            <p className="text-white/70 text-sm">Target high-value manufacturing segments beginning with automotive and electronics</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 flex items-center justify-center rounded-lg mr-4">
                                            <span className="text-green-400 text-xl">4</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white text-lg font-medium mb-1">Series A Funding</h4>
                                            <p className="text-white/70 text-sm">Seek Series A investment to accelerate growth after demonstrating market validation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-zinc-700">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-white text-sm mb-1">Initial Funding Target</div>
                                        <div className="flex items-baseline">
                                            <span className="text-2xl font-light text-white">$1.5M</span>
                                            <span className="text-xs text-white/60 ml-2">seed round</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white text-sm mb-1">Path to Profitability</div>
                                        <div className="flex items-baseline">
                                            <span className="text-2xl font-light text-white">24-36</span>
                                            <span className="text-xs text-white/60 ml-2">months</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Business Model */}
                <ScrollReveal delay={0.3} className="mb-20">
                    <h3 className="text-2xl font-light mb-8 text-center">Planned Business Model</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "SaaS Subscription",
                                icon: "repeat",
                                description: "Tiered pricing based on facility size and module selection.",
                                details: [
                                    "Enterprise: Custom pricing",
                                    "Mid-market: $50K-80K / year (planned)",
                                    "Small facilities: $20K-40K / year (planned)"
                                ]
                            },
                            {
                                title: "Implementation Services",
                                icon: "settings",
                                description: "Setup fees for installation, integration and configuration.",
                                details: [
                                    "15-20% of first year contract value",
                                    "Target implementation time: 30 days",
                                    "Training and onboarding included"
                                ]
                            },
                            {
                                title: "Value-Added Services",
                                icon: "plus-circle",
                                description: "Optional services for customization and analytics.",
                                details: [
                                    "AI model customization",
                                    "Process optimization consulting",
                                    "Data analytics services"
                                ]
                            }
                        ].map((model, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 25px -5px rgba(22, 163, 74, 0.1)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="bg-green-900/30 p-3 rounded-lg inline-block mb-4">
                                    {model.icon === "repeat" && (
                                        <svg className="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m17 2 4 4-4 4"></path>
                                            <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                            <path d="m7 22-4-4 4-4"></path>
                                            <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                                        </svg>
                                    )}
                                    {model.icon === "settings" && (
                                        <svg className="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    )}
                                    {model.icon === "plus-circle" && (
                                        <svg className="w-6 h-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    )}
                                </div>
                                <h4 className="text-xl text-white mb-3">{model.title}</h4>
                                <p className="text-white/70 text-sm mb-4">{model.description}</p>
                                <ul className="space-y-2">
                                    {model.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span className="text-white/70 text-sm">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Funding Requirements & Use of Funds */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Seeking Initial Funding */}
                    <ScrollReveal delay={0.4} className="bg-zinc-800 rounded-xl border border-zinc-700 p-8">
                        <h3 className="text-white text-2xl font-light mb-6">Seeking Initial Funding</h3>

                        <div className="space-y-6">
                            <div className="relative pl-6">
                                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-blue-500 -translate-x-1.5"></div>
                                <div className="inline-flex items-center bg-blue-900/30 text-blue-400 px-3 py-1 rounded text-xs font-medium mb-2">CURRENT STAGE</div>
                                <h4 className="text-white font-medium">Seed Funding - $1.5M</h4>
                                <p className="text-white/50 text-sm mb-2">Q2 2024</p>
                                <p className="text-white/70 text-sm">Seeking seed investment to complete our AI-driven platform development and launch pilot programs with early adopters.</p>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-white text-lg font-medium mb-4">Key Milestones for Seed Round</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-green-900/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <span className="text-green-400 font-medium">1</span>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-medium mb-1">MVP Development</h5>
                                            <p className="text-white/70 text-sm">Complete core platform with AI integration capabilities</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-green-900/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <span className="text-green-400 font-medium">2</span>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-medium mb-1">Beta Testing</h5>
                                            <p className="text-white/70 text-sm">Secure 3-5 manufacturing partners for pilot implementation</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 bg-green-900/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <span className="text-green-400 font-medium">3</span>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-medium mb-1">Market Validation</h5>
                                            <p className="text-white/70 text-sm">Demonstrate value through case studies and testimonials</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Use of Funds */}
                    <ScrollReveal delay={0.5} className="bg-zinc-800 rounded-xl border border-zinc-700 p-8">
                        <h3 className="text-white text-2xl font-light mb-6">Use of Seed Funds</h3>

                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/70">Product Development</span>
                                    <span className="text-white font-medium">50%</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-blue-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "50%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    />
                                </div>
                                <div className="mt-1 text-xs text-white/50">AI algorithm development and platform completion</div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/70">Pilot Programs</span>
                                    <span className="text-white font-medium">30%</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-blue-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "30%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                    />
                                </div>
                                <div className="mt-1 text-xs text-white/50">Implementation with early adopters and refinement</div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/70">Marketing & Sales</span>
                                    <span className="text-white font-medium">15%</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-blue-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "15%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    />
                                </div>
                                <div className="mt-1 text-xs text-white/50">Industry-focused marketing and initial sales efforts</div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-white/70">Operations</span>
                                    <span className="text-white font-medium">5%</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-blue-500 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "5%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    />
                                </div>
                                <div className="mt-1 text-xs text-white/50">Basic operational infrastructure</div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-700">
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2v20"></path>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Runway Goal</h4>
                                    <p className="text-white/70 text-sm mt-1">Initial seed funding aimed to provide 12-15 month runway to reach development milestones and establish proof of concept with early adopters.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
