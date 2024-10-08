import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/download.png";
import { motion } from "framer-motion";
const container = (delay) => ({
    hidden: { x:-100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: delay, duration: 1 }
    }
})
const Home = () => {
    return (
        <>
            <div className="border-b border-neutral-900 pb-4 lg:mb-35">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start">
                            <motion.h1 
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                                Yash Parmar
                            </motion.h1>
                            <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent">Full Stack Developer</motion.span>
                            <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2  flex justify-center items-center">
                        <div className="flex justify-center w-[60%]">
                            <motion.img 
                            className="rounded-[100%] border-8 border-neutral-500 overflow-hidden"
                            initial={{x:100, opacity: 0}}
                            animate={{x:0, opacity: 1}}
                            transition={{delay: 1.2, duration: 1}}
                            src={profilePic} alt="Yash Parmar" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;