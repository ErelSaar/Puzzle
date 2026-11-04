import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
  weight: ['300', '400', '500', '600', '700'],
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
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-heebo bg-canvas text-text-primary">
        {children}
      </body>
    </html>
  )
}
