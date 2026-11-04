# פאזל — אתר האינטרנט

אתר שיווקי חד-עמודי למשרד **פאזל**, ניהול צרכים חקירתיים למשרדי עורכי דין.

Built with: Next.js 14 · TypeScript · Tailwind CSS · Web3Forms

---

## הרצה מקומית

### דרישות מקדימות

- Node.js 18 ומעלה
- npm (או pnpm / yarn)

### התקנה

```bash
npm install
```

### הגדרת משתני סביבה

```bash
cp .env.example .env.local
```

פתחו את `.env.local` ומלאו את הערכים (ראו פירוט בסעיף הבא).

### הפעלה בסביבת פיתוח

```bash
npm run dev
```

האתר יהיה זמין בכתובת [http://localhost:3000](http://localhost:3000).

---

## תצורה נדרשת לפני פרסום

### 1. Web3Forms — מפתח גישה

**מיקום:** `.env.local` (לפיתוח), ומשתני הסביבה בפלטפורמת הפרסום (כגון Vercel).

**שם המשתנה:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

**כיצד לקבל מפתח:**
1. היכנסו ל־[web3forms.com](https://web3forms.com)
2. הירשמו עם כתובת המייל שתקבל את הפניות
3. מפתח הגישה מופיע בדשבורד לאחר ההרשמה
4. העתיקו אותו לקובץ `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_key_here
   ```

**אימות כתובת המייל בחשבון Web3Forms:**
- כתובת המייל שתקבל את הטפסים מוגדרת בחשבון Web3Forms — לא בקוד האתר.
- ודאו שהמייל הרשום בחשבון הוא הכתובת הנכונה לקבלת פניות מהאתר.
- לאחר רישום, Web3Forms ישלח אימות למייל — יש לאשר אותו.

**כיצד לבדוק שליחת טופס:**
1. הפעילו את האתר מקומית עם המפתח מוגדר ב־`.env.local`
2. מלאו את הטופס בדף יצירת הקשר ולחצו "שליחה"
3. בדקו שמופיעה הודעת "ההודעה נשלחה"
4. בדקו שהמייל הרשום ב־Web3Forms קיבל את ההודעה
5. ניתן גם לבדוק את הלוח של Web3Forms לצפייה בפניות

**הערה:** המפתח מוגדר עם קידומת `NEXT_PUBLIC_` ולכן גלוי בקוד הקליינט — זה מכוון. Web3Forms מאבטחים את המפתח ברמת ה-domain, לא ברמת הסודיות שלו. כדי להגביל שימוש לדומיין שלכם בלבד, הגדירו Domain Allowlist בדשבורד של Web3Forms.

---

### 2. פרטי טלפון ו-WhatsApp

**מיקום:** `.env.local` ומשתני סביבה בפרסום.

```
NEXT_PUBLIC_CONTACT_PHONE=050-0000000
NEXT_PUBLIC_CONTACT_WHATSAPP=050-0000000
```

- אם הערכים ריקים (ברירת המחדל), לינקי הטלפון ו-WhatsApp **לא יוצגו** באתר.
- לאחר שיש מספר טלפון אמיתי — הכניסו אותו למשתנים הנ"ל.
- WhatsApp: הקוד ממיר אוטומטית מספר ישראלי (מתחיל ב-0) לפורמט בינלאומי (+972).

---

### 3. פרסום ב-Vercel

1. העלו את הקוד ל-GitHub
2. צרו פרויקט חדש ב-Vercel וחברו אותו ל-repository
3. ב-Vercel › Settings › Environment Variables הוסיפו:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — מפתח ה-Web3Forms
   - `NEXT_PUBLIC_CONTACT_PHONE` — מספר טלפון (אם קיים)
   - `NEXT_PUBLIC_CONTACT_WHATSAPP` — מספר WhatsApp (אם קיים)
4. פרסמו

---

### 4. מדיניות פרטיות

נכון לעכשיו, האתר מכיל הערת פרטיות קצרה בלבד בתחתית הדף ובטופס.

אם תרצו להוסיף דף מדיניות פרטיות מלא:
- יש ליצור קובץ `app/privacy/page.tsx`
- הנוסח המשפטי המלא חייב לבוא ממקור משפטי מוסמך — **אין לשכפל נוסח ללא ייעוץ**
- הוסיפו לינק לדף הפרטיות ב-Footer ב-`app/page.tsx`

---

## מבנה הקוד

```
├── app/
│   ├── layout.tsx          — HTML root, lang="he" dir="rtl", Heebo font, metadata
│   ├── page.tsx            — כל הסקשנים: Hero, Services, How-it-works, Why-puzzle, Contact, Footer
│   └── globals.css         — Tailwind directives + base styles
├── components/
│   ├── Nav.tsx             — ניווט עליון עם תפריט מובייל (client component)
│   ├── Logo.tsx            — לוגו SVG מופשט (server component)
│   └── ContactForm.tsx     — טופס יצירת קשר עם Web3Forms (client component)
├── .env.example            — תבנית למשתני סביבה
├── tailwind.config.ts      — פלטת צבעים, גופנים
└── README.md               — הקובץ הזה
```

---

## עיצוב

| אלמנט | ערך |
|---|---|
| פונט | Heebo (Google Fonts, עברי + לטיני) |
| רקע ראשי | `#0a0a0b` |
| Surface | `#111113` / `#18181b` |
| Accent | `#0f766e` (teal-700) |
| טקסט ראשי | `#f4f4f5` |
| טקסט משני | `#a1a1aa` |
| כיוון | RTL (`dir="rtl"`, `lang="he"`) |

---

## Build לפרסום

```bash
npm run build
npm run start
```
