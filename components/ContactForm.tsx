'use client'

import { useState, useRef } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!ACCESS_KEY) {
      setErrorMessage('שגיאת הגדרה: מפתח הטופס אינו מוגדר. אנא פנו אלינו ישירות.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const payload = {
      access_key: ACCESS_KEY,
      subject: 'פנייה חדשה מאתר פאזל',
      from_name: formData.get('name') as string,
      name: formData.get('name'),
      firm: formData.get('firm'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message') || '(ללא הודעה נוספת)',
      botcheck: formData.get('botcheck'),
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (json.success) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        setErrorMessage(json.message ?? 'הגשת הטופס נכשלה. נסו שוב או פנו אלינו ישירות.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('אירעה שגיאת רשת. בדקו את החיבור ונסו שוב.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="alert"
        className="rounded-xl border border-accent/40 bg-accent-subtle px-6 py-10 text-center"
      >
        <svg
          className="mx-auto mb-4 text-accent-light"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <path
            d="M12 20.5l5.5 5.5 10.5-11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-lg font-semibold text-text-primary mb-2">ההודעה נשלחה</h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          קיבלנו את פנייתכם ונחזור אליכם בהקדם.
        </p>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      aria-label="טופס יצירת קשר"
    >
      {/* Honeypot — anti-spam, hidden from real users */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        style={{ display: 'none' }}
        defaultChecked={false}
      />

      {/* Row: name + firm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-text-secondary">
            שם מלא <span className="text-accent-light" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="ישראל ישראלי"
            className="w-full rounded-md bg-elevated border border-border px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firm" className="text-sm font-medium text-text-secondary">
            משרד עורכי דין <span className="text-accent-light" aria-hidden="true">*</span>
          </label>
          <input
            id="firm"
            name="firm"
            type="text"
            required
            placeholder="שם המשרד"
            className="w-full rounded-md bg-elevated border border-border px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row: email + phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-text-secondary">
            כתובת אימייל <span className="text-accent-light" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="name@firm.co.il"
            dir="ltr"
            className="w-full rounded-md bg-elevated border border-border px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-start"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-text-secondary">
            טלפון <span className="text-accent-light" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="050-0000000"
            dir="ltr"
            className="w-full rounded-md bg-elevated border border-border px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-start"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-text-secondary">
          הודעה כללית{' '}
          <span className="text-text-muted font-normal">(לא חובה)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="תארו בקצרה את הצורך הכללי, ללא פרטי לקוחות או תיקים ספציפיים."
          className="w-full rounded-md bg-elevated border border-border px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
        />
      </div>

      {/* Privacy reminder */}
      <p className="text-xs text-text-muted leading-relaxed border-r-2 border-border pr-3">
        לשמירה על פרטיות הלקוחות, נא לא לכלול בהודעה פרטים מזהים או מידע חסוי על לקוחות או תיקים.
      </p>

      {/* Error message */}
      {status === 'error' && (
        <div
          role="alert"
          className="rounded-md border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-300"
        >
          {errorMessage || 'אירעה שגיאה. נסו שוב או פנו אלינו ישירות.'}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto sm:self-start mt-1 px-8 py-3.5 rounded-md bg-accent hover:bg-accent-hover disabled:bg-accent/50 text-white text-sm font-medium transition-colors cursor-pointer disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'שולח...' : 'שליחה'}
      </button>
    </form>
  )
}
