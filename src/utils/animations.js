export const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

export const imageReveal = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.65 } },
}
