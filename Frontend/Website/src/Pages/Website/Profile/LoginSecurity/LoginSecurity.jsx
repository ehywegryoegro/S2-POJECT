import React from 'react';
import { motion } from 'framer-motion';

export default function LoginSecurity() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      LoginSecurity
    </motion.div>
  )
}