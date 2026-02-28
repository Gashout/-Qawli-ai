import { useMemo, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowLeftRight,
  CheckCircle2,
  Clock3,
  DollarSign,
  Eye,
  FileText,
  MessageCircle,
  Moon,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react'
import './index.css'

const WHATSAPP_NUMBER = '601121717319'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

const LANG = {
  AR: 'ar',
  EN: 'en',
}

function App() {
  const [lang, setLang] = useState(LANG.AR)
  const [theme, setTheme] = useState('dark')

  const howItWorksRef = useRef(null)
  const topRef = useRef(null)

  const isArabic = lang === LANG.AR

  const t = useMemo(
    () =>
      isArabic
        ? {
            navLogo: 'Qawli قولي',
            navItems: [
              { id: 'problem', label: 'المشكلة' },
              { id: 'how', label: 'كيف يشتغل' },
              { id: 'boss', label: 'للإدارة' },
              { id: 'trades', label: 'لأي تخصص' },
            ],
            hero: {
              badge: 'لشركات التكييف والسباكة والكهرباء في السعودية والإمارات',
              title: 'وقف عن كتابة العروض. ابدأ تتكلم.',
              subtitle:
                'أرسل رسالة صوتية على الواتساب من الموقع. يوصلك عرض سعر احترافي PDF بأسعارك خلال ٣ دقائق – بدون كتابة ولا إكسل.',
              primaryCta: 'اطلب تجربة مجانية',
              secondaryCta: 'شوف كيف يشتغل',
              trust: 'مبني للصيانة والمقاولات في الخليج – يدعم العربي والإنجليزي ولهجات العمال.',
            },
            problem: {
              title: 'كم ساعة تضيع كل يوم في كتابة العروض؟',
              cards: [
                {
                  stat: '٢-٣ ساعات',
                  label: 'تضيع كل مساء في كتابة العروض',
                  icon: <Clock3 />,
                },
                {
                  stat: '١٥-٢٠٪',
                  label: 'إيرادات ضائعة بسبب بنود منسية',
                  icon: <DollarSign />,
                },
                {
                  stat: 'صفر',
                  label: 'رؤية للمدير على العروض المرسلة',
                  icon: <Eye />,
                },
              ],
              quote: 'ما صرت فني تكييف عشان أقعد بالليل أكتب عروض بالإكسل.',
            },
            how: {
              title: 'كيف يشتغل؟',
              steps: [
                {
                  title: 'تتكلم',
                  description: 'أرسل رسالة صوتية على الواتساب من الموقع.',
                },
                {
                  title: 'الذكاء يفهم',
                  description:
                    'يستخرج كل بند وكمية وماركة وتفصيل حتى لو مخلوطة عربي/إنجليزي.',
                },
                {
                  title: 'ينشئ العرض',
                  description:
                    'PDF احترافي بأسعارك وشعارك وشروطك، جاهز ترسله للعميل.',
                },
                {
                  title: 'يوصل فوراً',
                  description: 'يرجع لك على الواتساب خلال ٣ دقائق.',
                },
              ],
              bottom: 'العميل يستلم العرض قبل ما تطلع من بيته.',
            },
            docs: {
              title: 'رسالة صوتية واحدة. ٤ مستندات.',
              subtitle:
                'كل رسالة صوتية تنشئ ٤ مستندات تلقائياً — بدون أي عمل إضافي.',
              items: [
                {
                  color: 'var(--c-blue)',
                  title: 'عرض السعر',
                  audience: 'يشوفه العميل',
                  description:
                    'PDF احترافي — شعار، بنود، أسعار، ضريبة، إجمالي، شروط.',
                },
                {
                  color: 'var(--c-orange)',
                  title: 'تكلفة داخلية',
                  audience: 'المدير فقط',
                  description:
                    'سعر التكلفة مقابل سعر البيع. شوف هامش الربح فوراً.',
                },
                {
                  color: 'var(--c-purple)',
                  title: 'تقرير الزيارة',
                  audience: 'سجلات الشركة',
                  description:
                    'سجل كامل لنطاق العمل. ما في ملاحظات ضائعة.',
                },
                {
                  color: 'var(--c-teal)',
                  title: 'الفاتورة',
                  audience: 'عند موافقة العميل',
                  description:
                    'تنشأ تلقائياً من العرض الموافق عليه. صفر إعادة كتابة.',
                },
              ],
            },
            diff: {
              title: 'الفرق',
              without: 'بدون Qawli',
              with: 'مع Qawli',
              rows: [
                ['وقت إرسال العرض', '٤-٨ ساعات', 'أقل من ٣ دقائق'],
                ['المستندات', '١ (يدوي)', '٤ (تلقائي)'],
                ['بنود منسية', 'شائع', 'صفر'],
                ['رؤية المدير', 'ما في', 'لوحة تحكم مباشرة'],
                ['هوامش الربح', 'غير معروفة', 'واضحة لكل بند'],
                ['الفوترة', 'إعادة كتابة يدوية', 'تلقائية'],
                ['مساء الفني', 'كتابة لل١٠ ليلاً', 'في بيته ال٥ عصراً'],
              ],
            },
            boss: {
              title: 'وش يستفيد المدير؟',
              subtitle: 'لوحة تحكم كاملة لمتابعة كل شي في شركتك.',
              items: [
                {
                  title: 'شوف كل عرض',
                  description: 'كل عروض فريقك أمامك لحظياً.',
                },
                {
                  title: 'تتبع الهوامش',
                  description: 'سعر التكلفة وسعر البيع لكل بند.',
                },
                {
                  title: 'تتبع الحالة',
                  description: 'مرسل، موافق، مرفوض، منتهي.',
                },
                {
                  title: 'إدارة الأسعار',
                  description: 'عدّل قائمة أسعارك أي وقت.',
                },
              ],
            },
            whyWhatsApp: {
              title: 'ليش واتساب؟',
              subtitle: 'لأنه المكان اللي تشتغل فيه أصلاً.',
              bullets: [
                'ما تحتاج تحمل تطبيق جديد — فريقك عنده واتساب.',
                'ما تحتاج تدريب — هم أصلاً يرسلون رسائل صوتية كل يوم.',
                'يشتغل على أي جوال، حتى بإنترنت ضعيف في الموقع.',
                'فنيك بس يرسل رسالة صوتية لرقم ثاني. بس.',
              ],
              stats: [
                { stat: '+٢ مليار', label: 'مستخدم واتساب حول العالم' },
                { stat: '٠', label: 'تطبيقات جديدة تحملها' },
                { stat: '٠ ثانية', label: 'تدريب مطلوب' },
              ],
            },
            trades: {
              title: 'يشتغل لأي تخصص',
              items: [
                'تكييف ❄️',
                'سباكة 🔧',
                'كهرباء ⚡',
                'MEP 🏗️',
                'تشطيبات 🏠',
                'دهانات 🎨',
                'أسقف 🏚️',
                'تنسيق حدائق 🌳',
              ],
              bottom: 'أسعارك. شعارك. شروطك. تخصصك.',
            },
            languages: {
              title: 'يشتغل بأي لغة',
              cards: ['عربي', 'إنجليزي (أي لهجة)', 'هندي / أردو', '+٥٠ لغة أخرى'],
              info: 'فنيك يقدر يخلط عربي وإنجليزي في نفس الجملة والذكاء يفهم تمام.',
            },
            finalCta: {
              title: 'وقف عن كتابة العروض. ابدأ تتكلم.',
              subtitle:
                'ارسل لنا رسالة صوتية الآن وشوف أول عرض يطلع لك خلال دقائق.',
              primary: 'اطلب تجربة مجانية',
              phoneLabel: 'رقم الواتساب',
              emailLabel: 'الإيميل',
            },
            footer: {
              company: '© Qawli قولي. جميع الحقوق محفوظة.',
              madeFor: 'مبني في الخليج، لشركات الخليج.',
            },
            langSwitchLabel: 'عربي',
            langOtherLabel: 'English',
          }
        : {
            navLogo: 'Qawli',
            navItems: [
              { id: 'problem', label: 'Problem' },
              { id: 'how', label: 'How it works' },
              { id: 'boss', label: 'For managers' },
              { id: 'trades', label: 'Trades' },
            ],
            hero: {
              badge: 'Built for HVAC, plumbing, electrical and MEP contractors in KSA & UAE',
              title: 'Stop typing quotes. Start talking.',
              subtitle:
                'Send a WhatsApp voice note from the site. Get a professional PDF quotation back with your prices in under 3 minutes — no typing, no Excel.',
              primaryCta: 'Request a Free Demo',
              secondaryCta: 'See How It Works',
              trust: 'Designed for service and contracting teams in the Gulf – supports Arabic, English and mixed speech.',
            },
            problem: {
              title: 'How many hours do you waste every day typing quotes?',
              cards: [
                {
                  stat: '2–3 hours',
                  label: 'wasted every evening typing quotes',
                  icon: <Clock3 />,
                },
                {
                  stat: '15–20%',
                  label: 'revenue lost from forgotten line items',
                  icon: <DollarSign />,
                },
                {
                  stat: 'Zero',
                  label: "visibility for the boss on what's being quoted",
                  icon: <Eye />,
                },
              ],
              quote:
                "I didn't become a technician to spend my nights typing in Excel.",
            },
            how: {
              title: 'How It Works',
              steps: [
                {
                  title: 'You Talk',
                  description:
                    'Send a WhatsApp voice note from the job site describing the work.',
                },
                {
                  title: 'AI Understands',
                  description:
                    'Extracts every item, quantity, brand and detail — even with mixed Arabic/English.',
                },
                {
                  title: 'Quote Generated',
                  description:
                    'Professional PDF with your logo, your price list, your terms.',
                },
                {
                  title: 'Delivered Instantly',
                  description: 'Back to you on WhatsApp in under 3 minutes.',
                },
              ],
              bottom: 'The customer gets the quote before you leave the property.',
            },
            docs: {
              title: 'One Voice Note. Four Documents.',
              subtitle:
                'Every voice note generates 4 documents automatically — no extra work.',
              items: [
                {
                  color: 'var(--c-blue)',
                  title: 'Customer Quotation',
                  audience: 'Customer sees this',
                  description:
                    'Professional PDF — logo, line items, VAT, total, terms.',
                },
                {
                  color: 'var(--c-orange)',
                  title: 'Cost Breakdown',
                  audience: 'Boss sees this',
                  description:
                    'Cost vs sell price per item. See your profit margin instantly.',
                },
                {
                  color: 'var(--c-purple)',
                  title: 'Site Visit Report',
                  audience: 'Company records',
                  description:
                    'Complete record of the job scope. No more lost notes.',
                },
                {
                  color: 'var(--c-teal)',
                  title: 'Invoice',
                  audience: 'On customer approval',
                  description:
                    'Auto-generated from the approved quote. Zero retyping.',
                },
              ],
            },
            diff: {
              title: 'The Difference',
              without: 'Without Qawli',
              with: 'With Qawli',
              rows: [
                ['Time to quote', '4–8 hours', 'Under 3 minutes'],
                ['Documents created', '1 (manual)', '4 (automatic)'],
                ['Forgotten items', 'Common', 'None'],
                ['Boss visibility', 'None', 'Real-time dashboard'],
                ['Profit margins', 'Unknown', 'Visible per item'],
                ['Invoicing', 'Manual retyping', 'Auto-generated'],
                [
                  "Technician's evening",
                  'Typing until 10 PM',
                  'Home with family by 5 PM',
                ],
              ],
            },
            boss: {
              title: 'What the Boss Gets',
              subtitle:
                'A complete dashboard with full visibility into your company’s quoting activity.',
              items: [
                {
                  title: 'See Every Quote',
                  description:
                    'Every quote across all technicians, visible in real time.',
                },
                {
                  title: 'Track Margins',
                  description:
                    'Cost vs sell price per item. Know your profit instantly.',
                },
                {
                  title: 'Track Status',
                  description:
                    'Sent, approved, rejected, expired — at a glance.',
                },
                {
                  title: 'Manage Prices',
                  description:
                    'Edit your price list anytime. Import from Excel easily.',
                },
              ],
            },
            whyWhatsApp: {
              title: 'Why WhatsApp?',
              subtitle: 'Because it’s where your team already works.',
              bullets: [
                'No new apps to install — your whole team already has WhatsApp.',
                'No training needed — they already send voice notes every day.',
                'Works on any phone, even with weak signal on site.',
                'Your technician just sends a voice note to another number. That’s it.',
              ],
              stats: [
                { stat: '2B+', label: 'WhatsApp users globally' },
                { stat: '0', label: 'new apps to download' },
                { stat: '0 sec', label: 'training needed' },
              ],
            },
            trades: {
              title: 'Works for Any Trade',
              items: [
                'HVAC ❄️',
                'Plumbing 🔧',
                'Electrical ⚡',
                'MEP 🏗️',
                'Fit-out 🏠',
                'Painting 🎨',
                'Ceilings 🏚️',
                'Landscaping 🌳',
              ],
              bottom: 'Your prices. Your logo. Your terms. Your trade.',
            },
            languages: {
              title: 'Works in Any Language',
              cards: [
                'Arabic (Gulf, Egyptian, Levantine)',
                'English (any accent)',
                'Hindi / Urdu (common on Gulf job sites)',
                '50+ other languages',
              ],
              info: 'Technicians can mix Arabic and English in the same sentence and the AI still understands.',
            },
            finalCta: {
              title: 'Stop typing quotes. Start talking.',
              subtitle:
                'Send us a voice note now and see your first quote generated in minutes.',
              primary: 'Request a Free Demo',
              phoneLabel: 'WhatsApp number',
              emailLabel: 'Email',
            },
            footer: {
              company: '© Qawli. All rights reserved.',
              madeFor: 'Built in the Gulf for Gulf contractors.',
            },
            langSwitchLabel: 'English',
            langOtherLabel: 'عربي',
          },
    [isArabic],
  )

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleScrollHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      handleScrollTo('how')
    }
  }

  const handleTopClick = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const direction = isArabic ? 'rtl' : 'ltr'
  const isLight = theme === 'light'

  return (
    <div
      ref={topRef}
      className="page-root"
      data-direction={direction}
      data-lang={lang}
      data-theme={theme}
    >
      <header className="nav">
        <div className="nav-inner">
          <button
            className="nav-logo"
            type="button"
            onClick={handleTopClick}
            aria-label="Qawli home"
          >
            <span className="nav-logo-mark">Q</span>
            <span className="nav-logo-text">{t.navLogo}</span>
          </button>
          <nav className="nav-links" aria-label="Primary">
            {t.navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="nav-link"
                onClick={() => handleScrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="nav-actions">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              <MessageCircle size={18} />
              <span>{t.hero.primaryCta}</span>
            </a>
            <button
              type="button"
              className="theme-toggle"
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              onClick={() => setTheme(isLight ? 'dark' : 'light')}
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              type="button"
              className="lang-toggle"
              onClick={() => setLang(isArabic ? LANG.EN : LANG.AR)}
            >
              <ArrowLeftRight size={16} />
              <span>{t.langOtherLabel}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="section hero" id="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="hero-badge">
                <Sparkles size={16} />
                <span>{t.hero.badge}</span>
              </div>
              <h1 id="hero-title" className="hero-title">
                {t.hero.title}
              </h1>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
              <div className="hero-ctas">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary-whatsapp"
                >
                  <MessageCircle />
                  <span>{t.hero.primaryCta}</span>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleScrollHowItWorks}
                >
                  <ArrowDownRight />
                  <span>{t.hero.secondaryCta}</span>
                </button>
              </div>
              <p className="hero-trust">
                <ShieldCheck size={16} />
                <span>{t.hero.trust}</span>
              </p>
              <div className="hero-contact">
                <div className="hero-contact-item">
                  <PhoneCall size={16} />
                  <span>{`WhatsApp: +60 11-2171 7319`}</span>
                </div>
                <div className="hero-contact-item">
                  <FileText size={16} />
                  <span>info@qawli.com</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="wa-header">
                    <div className="wa-avatar">Q</div>
                    <div className="wa-header-text">
                      <span className="wa-title">Qawli Assistant</span>
                      <span className="wa-status">
                        {isArabic ? 'يتصل…' : 'typing…'}
                      </span>
                    </div>
                    <div className="wa-header-icon">
                      <PhoneCall size={16} />
                    </div>
                  </div>
                  <div className="wa-body">
                    <div className="wa-message wa-message-out">
                      <div className="wa-message-bubble">
                        <div className="wa-voice">
                          <div className="wa-voice-icon">
                            <MessageCircle size={18} />
                          </div>
                          <div className="wa-voice-wave" />
                          <span className="wa-voice-time">0:45</span>
                        </div>
                        <span className="wa-time">16:22</span>
                      </div>
                    </div>
                    <div className="wa-message wa-message-in">
                      <div className="wa-message-bubble">
                        <div className="wa-pdf">
                          <div className="wa-pdf-icon">
                            <FileText size={18} />
                          </div>
                          <div className="wa-pdf-text">
                            <span className="wa-pdf-name">
                              {isArabic ? 'عرض سعر - فيلا ٢٣.pdf' : 'Quote - Villa 23.pdf'}
                            </span>
                            <span className="wa-pdf-meta">
                              {isArabic ? '1.2 MB · PDF' : '1.2 MB · PDF'}
                            </span>
                          </div>
                        </div>
                        <span className="wa-time">16:24 ✓✓</span>
                      </div>
                    </div>
                  </div>
                  <div className="wa-input-row">
                    <div className="wa-input-placeholder">
                      {isArabic ? 'ارسل رسالة صوتية...' : 'Send a voice note...'}
                    </div>
                    <div className="wa-input-mic">
                      <MessageCircle size={18} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-badge-floating">
                <CheckCircle2 size={18} />
                <span>
                  {isArabic
                    ? 'عرض جاهز أقل من ٣ دقائق'
                    : 'Quote ready in under 3 minutes'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section
          className="section problem"
          id="problem"
          aria-labelledby="problem-title"
        >
          <div className="section-inner">
            <div className="section-header">
              <h2 id="problem-title">{t.problem.title}</h2>
            </div>
            <div className="problem-grid">
              {t.problem.cards.map((card) => (
                <article key={card.stat} className="stat-card">
                  <div className="stat-icon">{card.icon}</div>
                  <div className="stat-number">{card.stat}</div>
                  <div className="stat-label">{card.label}</div>
                </article>
              ))}
            </div>
            <blockquote className="problem-quote">
              <span>“{t.problem.quote}”</span>
            </blockquote>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          ref={howItWorksRef}
          className="section how"
          id="how"
          aria-labelledby="how-title"
        >
          <div className="section-inner">
            <div className="section-header">
              <h2 id="how-title">{t.how.title}</h2>
            </div>
            <ol className="steps-grid">
              {t.how.steps.map((step, index) => (
                <li key={step.title} className="step-card">
                  <div className="step-number">{index + 1}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </li>
              ))}
            </ol>
            <p className="how-bottom">{t.how.bottom}</p>
          </div>
        </section>

        {/* ONE VOICE NOTE / FOUR DOCS */}
        <section
          className="section docs"
          id="docs"
          aria-labelledby="docs-title"
        >
          <div className="section-inner">
            <div className="section-header">
              <h2 id="docs-title">{t.docs.title}</h2>
              <p className="section-subtitle">{t.docs.subtitle}</p>
            </div>
            <div className="docs-grid">
              {t.docs.items.map((item) => (
                <article
                  key={item.title}
                  className="doc-card"
                  style={{ borderTopColor: item.color }}
                >
                  <div className="doc-tag">{item.audience}</div>
                  <h3 className="doc-title">{item.title}</h3>
                  <p className="doc-description">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section
          className="section diff"
          id="diff"
          aria-labelledby="diff-title"
        >
          <div className="section-inner">
            <div className="section-header">
              <h2 id="diff-title">{t.diff.title}</h2>
            </div>
            <div className="diff-table-wrapper">
              <table className="diff-table">
                <thead>
                  <tr>
                    <th />
                    <th className="diff-col-bad">{t.diff.without}</th>
                    <th className="diff-col-good">{t.diff.with}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.diff.rows.map(([label, without, withText]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{without}</td>
                      <td>{withText}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BOSS DASHBOARD */}
        <section
          className="section boss"
          id="boss"
          aria-labelledby="boss-title"
        >
          <div className="section-inner">
            <div className="section-header">
              <h2 id="boss-title">{t.boss.title}</h2>
              <p className="section-subtitle">{t.boss.subtitle}</p>
            </div>
            <div className="boss-grid">
              {t.boss.items.map((item) => (
                <article key={item.title} className="feature-card">
                  <div className="feature-icon">
                    <Eye size={18} />
                  </div>
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-description">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY WHATSAPP */}
        <section
          className="section why"
          id="why-whatsapp"
          aria-labelledby="why-title"
        >
          <div className="section-inner">
            <div className="section-header">
              <h2 id="why-title">{t.whyWhatsApp.title}</h2>
              <p className="section-subtitle">{t.whyWhatsApp.subtitle}</p>
            </div>
            <div className="why-layout">
              <ul className="why-list">
                {t.whyWhatsApp.bullets.map((bullet) => (
                  <li key={bullet} className="why-item">
                    <CheckCircle2 size={18} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="why-stats">
                {t.whyWhatsApp.stats.map((stat) => (
                  <div key={stat.label} className="why-stat-card">
                    <div className="why-stat-number">{stat.stat}</div>
                    <div className="why-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRADES */}
        <section
          className="section trades"
          id="trades"
          aria-labelledby="trades-title"
        >
          <div className="section-inner">
            <div className="section-header">
              <h2 id="trades-title">{t.trades.title}</h2>
            </div>
            <div className="trades-grid">
              {t.trades.items.map((trade) => (
                <div key={trade} className="trade-card">
                  <span>{trade}</span>
                </div>
              ))}
            </div>
            <p className="trades-bottom">{t.trades.bottom}</p>
          </div>
        </section>

        {/* LANGUAGES */}
        <section
          className="section languages"
          id="languages"
          aria-labelledby="languages-title"
        >
          <div className="section-inner">
            <div className="section-header">
              <h2 id="languages-title">{t.languages.title}</h2>
            </div>
            <div className="languages-grid">
              {t.languages.cards.map((card) => (
                <article key={card} className="language-card">
                  <h3>{card}</h3>
                </article>
              ))}
            </div>
            <div className="languages-info">
              <Sparkles size={18} />
              <span>{t.languages.info}</span>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="section final-cta"
          id="contact"
          aria-labelledby="final-title"
        >
          <div className="section-inner final-cta-inner">
            <div className="final-cta-text">
              <h2 id="final-title">{t.finalCta.title}</h2>
              <p className="section-subtitle">{t.finalCta.subtitle}</p>
              <div className="hero-ctas">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary-whatsapp"
                >
                  <MessageCircle />
                  <span>{t.finalCta.primary}</span>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleTopClick}
                >
                  <ArrowDownRight />
                  <span>{isArabic ? 'رجع للأعلى' : 'Back to top'}</span>
                </button>
              </div>
            </div>
            <div className="final-cta-contact">
              <div className="final-contact-item">
                <span className="final-contact-label">{t.finalCta.phoneLabel}</span>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="final-contact-value"
                >
                  +60 11-2171 7319
                </a>
              </div>
              <div className="final-contact-item">
                <span className="final-contact-label">{t.finalCta.emailLabel}</span>
                <a
                  href="mailto:info@qawli.com"
                  className="final-contact-value"
                >
                  info@qawli.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-main">
            <span>{t.footer.company}</span>
            <span className="footer-made">{t.footer.madeFor}</span>
          </div>
          <div className="footer-lang">
            <button
              type="button"
              className={`footer-lang-btn ${isArabic ? 'is-active' : ''}`}
              onClick={() => setLang(LANG.AR)}
            >
              {t.langSwitchLabel}
            </button>
            <button
              type="button"
              className={`footer-lang-btn ${!isArabic ? 'is-active' : ''}`}
              onClick={() => setLang(LANG.EN)}
            >
              {t.langOtherLabel}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
