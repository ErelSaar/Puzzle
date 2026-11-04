import type { Metadata } from 'next'
import { Frank_Ruhl_Libre, IBM_Plex_Sans_Hebrew } from 'next/font/google'
import './globals.css'

/* Headings (H1, H2, logo wordmark) — classical, editorial Hebrew serif */
const frank = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-frank',
  weight: ['400', '500', '700'],
})

/* Body, UI, navigation, forms — clean, highly readable Hebrew sans-serif */
const plex = IBM_Plex_Sans_Hebrew({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-plex',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'פאזל | מענה חקירתי למשרדי עורכי דין',
  description:
    'פאזל מנהלת את הצרכים החקירתיים של משרדי עורכי דין בתיקי נזיקין. הגדרת הצורך, תיאום אנשי מקצוע, ניהול המשימה ומסירת תוצרים – דרך כתובת אחת.',
  keywords: 'מענה חקירתי למשרדי עורכי דין, תיקי נזיקין, ניהול צרכים חקירתיים, פאזל',
  robots: 'index, follow',
  openGraph: {
    title: 'פאזל | מענה חקירתי למשרדי עורכי דין',
    description:
      'פאזל מנהלת את הצרכים החקירתיים של משרדי עורכי דין בתיקי נזיקין. כתובת אחת לכל הצרכים החקירתיים בתיק.',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${frank.variable} ${plex.variable}`}>
      <body className="font-plex bg-canvas text-text-primary">
        {children}
      </body>
    </html>
  )
}
