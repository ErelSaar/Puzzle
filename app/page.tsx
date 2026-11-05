import Nav from '@/components/Nav'
import Logo from '@/components/Logo'
import ContactForm from '@/components/ContactForm'

/* ─── Contact config (read at build time for public env vars) ─────────── */
const PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? ''
const WHATSAPP = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? ''

/* ─── Abstract hero network graphic ───────────────────────────────────── */
function HeroGraphic() {
  const peripherals: [number, number, number][] = [
    [70, 55, 3],
    [200, 38, 3],
    [330, 55, 3],
    [52, 180, 3.5],
    [348, 180, 3.5],
    [70, 305, 3],
    [200, 322, 3],
    [330, 305, 3],
    [130, 108, 2.5],
    [270, 108, 2.5],
    [130, 252, 2.5],
    [270, 252, 2.5],
  ]

  return (
    <svg
      viewBox="0 0 400 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full max-w-[300px] md:max-w-none opacity-80"
    >
      {/* Dashed orbit rings */}
      <circle cx="200" cy="180" r="130" stroke="#0f766e" strokeWidth="0.6" opacity="0.1" strokeDasharray="4 7" />
      <circle cx="200" cy="180" r="88"  stroke="#0f766e" strokeWidth="0.6" opacity="0.15" strokeDasharray="3 5" />

      {/* Connection lines to center */}
      {peripherals.map(([x, y], i) => (
        <line key={i} x1="200" y1="180" x2={x} y2={y} stroke="#0f766e" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      ))}

      {/* Light cross-connections */}
      <line x1="70"  y1="55"  x2="200" y2="38"  stroke="#0f766e" strokeWidth="0.7" opacity="0.15" />
      <line x1="200" y1="38"  x2="330" y2="55"  stroke="#0f766e" strokeWidth="0.7" opacity="0.15" />
      <line x1="130" y1="108" x2="270" y2="108" stroke="#0f766e" strokeWidth="0.7" opacity="0.15" />
      <line x1="130" y1="252" x2="270" y2="252" stroke="#0f766e" strokeWidth="0.7" opacity="0.15" />
      <line x1="70"  y1="305" x2="200" y2="322" stroke="#0f766e" strokeWidth="0.7" opacity="0.15" />
      <line x1="200" y1="322" x2="330" y2="305" stroke="#0f766e" strokeWidth="0.7" opacity="0.15" />
      <line x1="52"  y1="180" x2="130" y2="108" stroke="#0f766e" strokeWidth="0.7" opacity="0.1" />
      <line x1="348" y1="180" x2="270" y2="108" stroke="#0f766e" strokeWidth="0.7" opacity="0.1" />
      <line x1="52"  y1="180" x2="130" y2="252" stroke="#0f766e" strokeWidth="0.7" opacity="0.1" />
      <line x1="348" y1="180" x2="270" y2="252" stroke="#0f766e" strokeWidth="0.7" opacity="0.1" />

      {/* Peripheral nodes */}
      {peripherals.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#71717a" opacity="0.6" />
      ))}

      {/* Central hub */}
      <circle cx="200" cy="180" r="22" fill="#042f2e" />
      <circle cx="200" cy="180" r="16" fill="#0f766e" opacity="0.9" />
      <circle cx="200" cy="180" r="9"  fill="#0a0a0b" />
      <circle cx="200" cy="180" r="5"  fill="#14b8a6" />
      <circle cx="200" cy="180" r="26" stroke="#0f766e" strokeWidth="1.5" opacity="0.18" />
      <circle cx="200" cy="180" r="34" stroke="#0f766e" strokeWidth="1"   opacity="0.07" />
    </svg>
  )
}

/* ─── Service icons (Feather-style SVG paths) ──────────────────────────── */
function IconCamera() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}
function IconPeople() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconGlobe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconEye() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}
function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconDots() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="4"  cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8.25" stroke="#0f766e" strokeWidth="1.25" />
      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

/* ─── Data ─────────────────────────────────────────────────────────────── */
const services = [
  {
    icon: <IconCamera />,
    title: 'תיעוד זירה וסביבה',
    description: 'תיעוד צילומי וויזואלי של מקום תאונה, מפגע, או אזור רלוונטי — בהתאם לנסיבות ולדין החל.',
  },
  {
    icon: <IconPeople />,
    title: 'איתור עדים ואיסוף מידע',
    description: 'איתור עדים ואנשים אחרים הקשורים לתיק ואיסוף מידע מהם.',
  },
  {
    icon: <IconGlobe />,
    title: 'בדיקת מקורות פומביים',
    description: 'בחינת מידע ממקורות גלויים, לרבות אתרי אינטרנט ורשתות חברתיות.',
  },
  {
    icon: <IconEye />,
    title: 'בדיקות שטח ותצפיות',
    description: 'בדיקות שטח, תצפיות ותיעוד פעילות — בהתאם לנסיבות ולמסגרת המשימה.',
  },
  {
    icon: <IconChart />,
    title: 'בדיקות פיננסיות וסקירות אנליטיות',
    description: 'בחינת היבטים פיננסיים וניתוח מידע רלוונטי לתיק.',
  },
  {
    icon: <IconDots />,
    title: 'צרכים חקירתיים נוספים',
    description: 'בהתאם לתיק ולמשימה, ניתן לנהל צרכים חקירתיים נוספים שעולים במהלך הטיפול.',
  },
]

const steps = [
  {
    num: '01',
    title: 'פותחים ערוץ עבודה',
    description: 'יוצרים קשר ומגדירים דרך נוחה לעבודה שוטפת בין המשרד לפאזל.',
  },
  {
    num: '02',
    title: 'מגדירים את הצורך בתיק',
    description: 'בכל תיק משתפים את פאזל בצורך החקירתי ומחדדים יחד מה נדרש לבדוק.',
  },
  {
    num: '03',
    title: 'פאזל מנהלת ומעדכנת',
    description: 'פאזל מתאמת את אנשי המקצוע המתאימים, מנהלת את המשימה ומעדכנת את המשרד לאורך הדרך.',
  },
  {
    num: '04',
    title: 'מקבלים את תוצרי החקירה',
    description: 'בסיום, פאזל מעבירה למשרד את התוצרים באופן מסודר.',
  },
]

const benefits = [
  {
    title: 'כתובת אחת מול המשרד',
    description: 'המשרד עובד ישירות מול פאזל — ערוץ תקשורת ברור אחד לכל הצרכים החקירתיים בתיק.',
  },
  {
    title: 'הגדרת המשימה יחד',
    description: 'פאזל מסייעת להגדיר את הצורך בתיק ולחדד מה נדרש לבדוק לפני שמתחילים.',
  },
  {
    title: 'ניהול מקצועי של התהליך',
    description: 'פאזל מתאמת את אנשי המקצוע המתאימים ומנהלת את העבודה עד להשלמתה.',
  },
  {
    title: 'עדכונים ותוצרים מסודרים',
    description: 'המשרד מקבל עדכוני התקדמות ותוצרים מסודרים לאורך הדרך ובסיומה.',
  },
]

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <Nav />

      <main>
        {/* ── 1. Hero ───────────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center pt-[70px]"
          aria-label="כותרת ראשית"
        >
          {/* Radial gradient accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 55% 55% at 25% 50%, rgba(15,118,110,0.07) 0%, transparent 70%)',
            }}
          />

          <div className="relative max-w-6xl mx-auto px-5 py-20 w-full">
            {/*
              RTL flex-row: first child → right side, second child → left side.
              Mobile: flex-col so text appears above graphic.
            */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

              {/* Text — appears first in DOM = right side on desktop in RTL */}
              <div className="flex-1 flex flex-col items-start gap-6">
                <h1 className="text-[1.875rem] sm:text-[2.375rem] lg:text-[2.75rem] font-semibold text-text-primary leading-[1.2]">
                  כשעולה צורך חקירתי בתיק, פונים לפאזל.
                </h1>

                <p className="text-base sm:text-[1.0625rem] text-text-secondary leading-[1.75] max-w-xl">
                  פאזל מגדירה יחד עם המשרד את הצורך בתיק, מתאמת את אנשי המקצוע המתאימים, מנהלת
                  את העבודה ומעבירה עדכונים ותוצרים לאורך הדרך.
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3.5 rounded-md bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
                  >
                    לתיאום שיחת היכרות
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-border hover:border-zinc-600 text-text-secondary hover:text-text-primary text-sm transition-colors"
                  >
                    איך זה עובד
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Graphic — appears second in DOM = left side on desktop in RTL */}
              <div className="flex-shrink-0 w-full md:w-[360px] lg:w-[400px] flex items-center justify-center">
                <HeroGraphic />
              </div>

            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 2. Services ───────────────────────────────────────────────── */}
        <section
          id="services"
          className="bg-surface py-20 lg:py-24"
          aria-labelledby="services-heading"
        >
          <div className="max-w-6xl mx-auto px-5">
            <div className="mb-12">
              <h2
                id="services-heading"
                className="text-[1.5rem] sm:text-[2rem] font-medium text-text-primary mb-4 leading-[1.3]"
              >
                מענה לצרכים חקירתיים בתיקי נזיקין
              </h2>
              <p className="text-text-secondary leading-[1.75] max-w-2xl">
                בכל תיק עשויים לעלות פערים ושאלות אחרות. פאזל מסייעת למשרד להגדיר מה נדרש לבדוק
                ולנהל את המענה המתאים.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
              {services.map((s, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-border bg-elevated hover:border-accent/40 transition-colors p-6 flex flex-col gap-3"
                >
                  <span className="text-accent-light w-fit">{s.icon}</span>
                  <h3 className="text-base font-semibold text-text-primary">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.description}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs text-text-muted leading-relaxed border-r-2 border-border pr-3 max-w-2xl">
              סוגי העבודה המפורטים לעיל הם דוגמאות אפשריות בלבד. ההיקף הרלוונטי לכל תיק נקבע
              בהתאם לנסיבות, לצורך החקירתי הספציפי ולדין החל.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 3. How it works ───────────────────────────────────────────── */}
        <section
          id="how-it-works"
          className="py-20 lg:py-24"
          aria-labelledby="how-heading"
        >
          <div className="max-w-6xl mx-auto px-5">
            <h2
              id="how-heading"
              className="text-[1.5rem] sm:text-[2rem] font-medium text-text-primary mb-16 text-center leading-[1.3]"
            >
              איך זה עובד
            </h2>

            {/*
              Steps layout:
              - Desktop: 4 columns, each step has a top border that visually connects them.
              - Mobile: single column with a right border acting as a vertical guide.
            */}
            <ol className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 list-none" role="list">
              {steps.map((step, i) => (
                <li
                  key={i}
                  className="
                    md:border-t-2 border-border
                    border-r-2 md:border-r-0
                    pr-5 md:pr-0
                    md:pt-6
                    flex flex-col gap-3
                  "
                >
                  {/* Step indicator */}
                  <div className="flex items-center gap-3 md:block">
                    <span
                      className="
                        inline-flex items-center justify-center
                        w-10 h-10 rounded-full
                        border-2 border-accent bg-accent-subtle
                        text-accent-light text-sm font-mono font-semibold
                        flex-shrink-0 md:mb-4
                      "
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-text-primary leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 4. Why Puzzle ─────────────────────────────────────────────── */}
        <section
          id="why-puzzle"
          className="bg-surface py-20 lg:py-24"
          aria-labelledby="why-heading"
        >
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Heading side (right in RTL) */}
              <div>
                <h2
                  id="why-heading"
                  className="font-semibold text-text-primary mb-5 flex flex-col gap-2"
                >
                  <span className="text-[1.5rem] sm:text-[2rem] leading-[1.2]">כתובת אחת</span>
                  <span className="text-[1.5rem] sm:text-[2rem] leading-[1.2]">תהליך אחד</span>
                  <span className="text-[1.5rem] sm:text-[2rem] leading-[1.2]">קשר רציף עם המשרד </span>

                </h2>
                <p className="text-text-secondary leading-[1.75] mb-8">
                  פאזל פועלת כמנהלת התהליך מול המשרד. המשרד לא צריך לתאם ישירות מול אנשי
                  מקצוע שונים — פאזל מנהלת את הצד התפעולי ומעדכנת את המשרד בכל שלב.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-3 rounded-md bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
                >
                  לתיאום שיחת היכרות
                </a>
              </div>

              {/* Benefits list (left in RTL) */}
              <ul className="flex flex-col gap-5 list-none" role="list">
                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <IconCheck />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-semibold text-text-primary">{b.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{b.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── 5. Contact ────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-20 lg:py-24"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

              {/* Info (right in RTL — col-span-2) */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div>
                  <h2
                    id="contact-heading"
                    className="text-[1.5rem] sm:text-[2rem] font-medium text-text-primary mb-4 leading-[1.3]"
                  >
                    יש צורך חקירתי בתיק? נתחיל בשיחה.
                  </h2>
                  <p className="text-text-secondary leading-[1.75]">
                    ספרו לנו כיצד אפשר לחזור אליכם. בשיחה נבין את הצורך הראשוני ונראה אם
                    ואיך ניתן להתקדם.
                  </p>
                </div>

                {/* Contact links — displayed only when configured */}
                {(PHONE || WHATSAPP) && (
                  <div className="flex flex-col gap-3 pt-1">
                    {PHONE && (
                      <a
                        href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`}
                        dir="ltr"
                        className="inline-flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors w-fit"
                        aria-label={`חייגו: ${PHONE}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.62-1.37a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {PHONE}
                      </a>
                    )}
                    {WHATSAPP && (
                      <a
                        href={`https://wa.me/972${WHATSAPP.replace(/^0/, '').replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="inline-flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors w-fit"
                        aria-label={`WhatsApp: ${WHATSAPP}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        WhatsApp
                      </a>
                    )}
                  </div>
                )}

                {/* Logo mark */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                  <Logo size={30} />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-text-primary leading-snug">פאזל</span>
                    <span className="text-xs text-text-muted leading-tight">ניהול צרכים חקירתיים למשרדי עורכי דין</span>
                  </div>
                </div>
              </div>

              {/* Form (left in RTL — col-span-3) */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-5 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

            {/* Brand */}
            <a href="#" className="flex items-center gap-2.5 group" aria-label="פאזל – חזרה לראש הדף">
              <Logo size={28} />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-text-primary leading-snug">פאזל</span>
                <span className="text-xs text-text-muted">ניהול צרכים חקירתיים למשרדי עורכי דין</span>
              </div>
            </a>

            {/* Footer nav */}
            <nav aria-label="ניווט תחתית">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none" role="list">
                {[
                  { label: 'השירותים', href: '#services' },
                  { label: 'איך זה עובד', href: '#how-it-works' },
                  { label: 'למה פאזל', href: '#why-puzzle' },
                  { label: 'יצירת קשר', href: '#contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-xs text-text-muted hover:text-text-secondary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-text-muted">
            <p>&copy; {new Date().getFullYear()} פאזל. כל הזכויות שמורות.</p>
            <p className="max-w-sm leading-relaxed">
              האתר אינו מהווה ייעוץ משפטי. לשמירה על פרטיות הלקוחות, אין לשלוח דרך טפסי האתר מידע חסוי על לקוחות או תיקים.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
