import React from 'react';
import {motion} from 'framer-motion';

export default function Notification() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Notification
    </motion.div>
  )
}
