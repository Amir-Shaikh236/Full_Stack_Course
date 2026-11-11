
import { motion } from "framer-motion"

export default function FramerMotion() {
    return (
        <div>
            <h1>Framer Motion</h1>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: 500 }}
                transition={{
                    type: 'spring',
                    stiffness: 60,
                }}

                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'blue'
                }}
            />
        </div>
    )
}

