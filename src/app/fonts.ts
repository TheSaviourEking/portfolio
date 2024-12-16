import { GFS_Neohellenic } from "next/font/google"

export const gfsNeohellenic = GFS_Neohellenic(
    {
      weight: ['400', '700'],
      style: ['normal', 'italic'],
      display: 'swap',
      subsets: ['greek'],
      variable: '--font-neohellenic',
      preload:true,
      
    }
  )