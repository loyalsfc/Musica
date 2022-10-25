import { motion } from 'framer-motion';

const animationConfiguration = {
    initial: { opacity: 0, width: '100%', overflow: 'hidden' },
    animate: { opacity: 1, width: '100%', overflow: 'hidden' },
    exit: { opacity: 0, width: '100%', overflow: 'hidden' },
};

const Transitions = ({ children }) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};
export default Transitions;