import { motion } from "framer-motion"

const conatinerVariant = {
    hidden: { opacticy: 1 },
    show: {
        opacticy: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const boxVariants = {
    hidden: { x: 0, y: 0 },
    show: { x: 200, y: 100, transition: { type: 'spring' } }
}

export default function FramerMotion2() {
    return (
        <div>
            <h1> Framer motion with multiple Boxes </h1>
            <motion.div
                variants={conatinerVariant}
                initial='hidden'
                animate='show'
            >
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        variants={boxVariants}
                        style={{
                            width: '100px',
                            height: '100px',
                            backgroundColor: 'red',
                            margin: '10px'
                        }}
                    />
                ))}
            </motion.div>
        </div>
    )
}

