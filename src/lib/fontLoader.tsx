import localFont from "next/font/local"

export const monocraft = localFont({
  src: '../../public/fonts/Monocraft.otf',  // has to be hard-coded since it's optimized at build time :(
  variable: '--font-monocraft',
  display: 'swap',
})
