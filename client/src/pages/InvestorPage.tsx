import { FC } from 'react';
import { motion } from 'framer-motion';
import { MarketSection } from '@/components/sections/investors/market-section';
// import { TeamSection } from '@/components/sections/investors/team-section';
// import { CompetitiveSection } from '@/components/sections/investors/competitive-section';
import { FinancialSection } from '@/components/sections/investors/financial-section';
import { ButtonLink } from '@/components/ui/button-link';
import { ArrowRight, Download } from 'lucide-react';

const InvestorsPage: FC = () => {
    return (
        <>
            {/* Investor Hero Section */}
            <section className="pt-32 pb-20 bg-black text-white relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                    </div>
                    <motion.div
                        className="absolute top-0 right-0 w-[40%] h-[30%] rounded-full bg-gradient-to-bl from-blue-900/20 to-transparent opacity-70 blur-[100px]"
                        animate={{
                            opacity: [0.5, 0.7, 0.5],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 w-[50%] h-[40%] rounded-full bg-gradient-to-tr from-blue-900/20 to-transparent opacity-60 blur-[120px]"
                        animate={{
                            opacity: [0.4, 0.6, 0.4],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                </div>

                <div className="container max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col"
                        >
                            <span className="inline-block text-blue-400 text-sm font-medium mb-2">INVESTMENT OPPORTUNITY</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
                                The Future of <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                                    Manufacturing
                                </span>
                                <br /> Operations
                            </h1>

                            <div className="h-[1px] w-16 bg-white/20 my-8"></div>

                            <p className="text-white/80 text-lg mb-12 max-w-md leading-relaxed">
                                FlowOps aims to bring AI-powered solutions to the $120B manufacturing operations market to help drive efficiency and reduce costs.
                            </p>

                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <ButtonLink
                                    href="#market-opportunity"
                                    variant="default"
                                    className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3.5 rounded-lg shadow-lg group relative overflow-hidden transition-all duration-300"
                                >
                                    <span className="relative z-10 font-medium">Explore Opportunity</span>
                                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                                    {/* Button glow effect */}
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -z-10"
                                        animate={{
                                            x: ['-100%', '200%'],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            repeatType: 'loop',
                                            ease: 'linear',
                                            repeatDelay: 1,
                                        }}
                                    />
                                </ButtonLink>

                                <ButtonLink
                                    href="#contact"
                                    variant="default"
                                    className="border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-lg transition-colors duration-300 flex items-center justify-center group"
                                >
                                    <span>Download Deck</span>
                                    <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                                </ButtonLink>
                            </div>

                            {/* <div className="mt-16 grid grid-cols-2 gap-4">
                                <div className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300">
                                    <div className="text-xs text-blue-400 mb-1 tracking-wider">MARKET SIZE</div>
                                    <div className="text-xl font-medium">$120B</div>
                                </div>
                                <div className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300">
                                    <div className="text-xs text-blue-400 mb-1 tracking-wider">INDUSTRY GROWTH</div>
                                    <div className="text-xl font-medium">15% CAGR</div>
                                </div>
                            </div> */}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute -top-10 -left-10 w-20 h-20 border border-white/10 rounded-xl"></div>
                            <div className="absolute -bottom-10 -right-10 w-20 h-20 border border-white/10 rounded-xl"></div>

                            <div className="bg-gradient-to-br from-blue-900/30 to-black p-8 rounded-xl border border-white/10 relative">
                                <h3 className="text-white text-xl mb-6">Our Vision</h3>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Massive Market Opportunity</h4>
                                            <p className="text-white/70 text-sm">Manufacturing operations software growing at 15% CAGR</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">AI-Focused Solution</h4>
                                            <p className="text-white/70 text-sm">Leveraging modern AI capabilities for manufacturing</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Industry Pain Points</h4>
                                            <p className="text-white/70 text-sm">Addressing critical manufacturing efficiency challenges</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Integration Focus</h4>
                                            <p className="text-white/70 text-sm">Designed to work with existing manufacturing systems</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">Scalable SaaS Model</h4>
                                            <p className="text-white/70 text-sm">Cloud-based solution with subscription pricing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <MarketSection />
            <FinancialSection />
            {/* <CompetitiveSection /> */}
            {/* <TeamSection /> */}

            {/* Investment opportunity CTA */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="container max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                    <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-xl p-8 lg:p-12 border border-blue-900/30 text-center">
                        <motion.h3
                            className="text-white text-2xl lg:text-3xl font-light mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Ready to Invest in Manufacturing's Future?
                        </motion.h3>
                        <motion.p
                            className="text-white/80 text-lg max-w-2xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            FlowOps is a new startup seeking seed funding to develop our innovative manufacturing operations platform.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <ButtonLink
                                href="/docs/investment-deck.pdf"
                                variant="default"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
                            >
                                <span>Investment Deck</span>
                                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                            </ButtonLink>
                            <ButtonLink
                                href="#contact"
                                variant="default"
                                className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
                            >
                                <span>Schedule a Call</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </ButtonLink>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InvestorsPage;
