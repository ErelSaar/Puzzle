import type { Metadata } from 'next'
import { Assistant } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-assistant',
  weight: ['400', '500', '600', '700'],
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
    <html lang="he" dir="rtl" className={assistant.variable}>
      <body className="font-assistant bg-canvas text-text-primary">
        {children}
      </body>
    </html>
  )
}
