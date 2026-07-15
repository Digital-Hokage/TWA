/**
 * Seeds the database from the content that previously lived hardcoded in the
 * app (media page, homepage partners/FAQs, impact stats). Safe to run
 * repeatedly — stats upsert by key; the rest skip rows that already exist.
 *
 * Run with: npx prisma db seed
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const SITE_STATS: { key: string; value: string }[] = [
  { key: 'patients',         value: '199' },
  { key: 'bmts',             value: '300+' },
  { key: 'years',            value: '20+' },
  { key: 'cost',             value: '₹0' },
  { key: 'founded',          value: '2006' },
  { key: 'deaths',           value: '23' },
  { key: 'cvs_procedures',   value: '100+' },
  { key: 'babies_delivered', value: '9' },
]

type SeedArticle = {
  publication: string
  date: string
  year: number
  headline: string
  excerpt: string
  relevance: string
  url: string | null
  featured: boolean
  byDrRevathi: boolean
}

const MEDIA_ARTICLES: SeedArticle[] = [
  {
    publication: 'Times of India — Chennai', date: '15 May 2026', year: 2026,
    headline: 'Hosp marks World Thalassemia Day',
    excerpt: 'Coverage of World Thalassemia Day events in Chennai — awareness drives, patient stories, and a spotlight on the progress made in comprehensive care across Tamil Nadu, including work at centres like VHS Taramani.',
    relevance: 'Provides current-year context on World Thalassemia Day activities and regional awareness.',
    url: null, featured: false, byDrRevathi: false,
  },
  {
    publication: 'The Hindu — Chennai', date: 'March 2025', year: 2025,
    headline: 'Survivor stories highlight the need for early thalassemia diagnosis and treatment',
    excerpt: 'First-hand accounts from thalassemia survivors and their families underline how early diagnosis and systematic care transform lives. Clinicians discuss how timely intervention — including gene therapy prospects — can help patients lead full, healthy lives.',
    relevance: 'Patient-centred feature from The Hindu illustrating the impact of long-term care programmes like TWA.',
    url: 'https://www.thehindu.com/news/cities/chennai/survivor-stories-highlight-the-need-for-early-thalassemia-diagnosis-and-treatment/article70979048.ece',
    featured: true, byDrRevathi: false,
  },
  {
    publication: 'Adyar Times — Chennai', date: '21 March 2025', year: 2025,
    headline: 'Rotary Club hits the right note for Thalassemia Care',
    excerpt: 'The Rotary Club of Chennai Port City donated ₹2 lakh to the Thalassemia Welfare Association at VHS Taramani. The cheque was received at a musical concert fundraiser — part of a broader effort to support free patient care and community education.',
    relevance: 'Direct local media coverage of fundraising for the Chennai TWA centre.',
    url: 'https://adyartimes.in/rotary-club-hits-the-right-note-for-thalassemia-care/',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'LiveChennai', date: '18 March 2025', year: 2025,
    headline: 'Rotary Club Blends Music and Charity for a Noble Cause',
    excerpt: "LiveChennai reports on the Rotary Club of Chennai Port City's fundraising concert for the Thalassemia Welfare Association, with a ₹2 lakh donation presented to support free thalassemia care at VHS Taramani.",
    relevance: 'Parallel coverage of the same concert fundraiser for TWA.',
    url: 'https://www.livechennai.com/detailnews.asp?newsid=73866',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'The Hindu — Chennai', date: 'May 2024', year: 2024,
    headline: 'Prevention is key for a thalassemia-free India, say doctors',
    excerpt: "Haematologists and thalassemia specialists, including those working at centres in Chennai, emphasise that mandatory prenatal screening and genetic counselling are the most effective tools for reducing new thalassemia births in India. Dr. Revathi Raj's approach of combining treatment with prevention advocacy is highlighted.",
    relevance: "Features prevention-first advocacy by Chennai thalassemia clinicians aligned with TWA's mission.",
    url: 'https://www.thehindu.com/news/cities/chennai/prevention-is-key-for-a-thalassemia-free-india-say-doctors/article68153289.ece',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'Adyar Times — Chennai', date: '18 May 2024', year: 2024,
    headline: 'Everyone can be part of World Thalassemia Day by donating blood',
    excerpt: 'On World Thalassemia Day, the Adyar Times spotlights how regular blood donation is the most direct way for the public to support thalassemia patients. The article calls on residents of the Adyar neighbourhood to register as blood donors for patients at nearby VHS Taramani.',
    relevance: 'Encourages public blood donation for TWA patients at VHS Taramani — drives local donor registration.',
    url: 'https://adyartimes.in/everyone-can-be-part-of-world-thalassemia-day-by-donating-blood/',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'New Indian Express', date: '9 May 2024', year: 2024,
    headline: 'Joy of giving: Thalassemia survivor meets donor from Germany',
    excerpt: 'A thalassemia survivor in India meets their bone marrow donor from Germany in an emotional reunion — illustrating the power of international bone marrow registries. The story underlines the importance of DATRI and similar registries that TWA works with to facilitate haploidentical BMT.',
    relevance: 'Shows the role of bone marrow registries (such as DATRI, which TWA partners with) in curative BMT outcomes.',
    url: 'https://www.newindianexpress.com/states/karnataka/2024/May/09/joy-of-giving-thalassemia-survivor-meets-donor-from-germany',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'The News Minute', date: '1 June 2023', year: 2023,
    headline: 'Rays of hope for thalassemia: Cutting-edge techniques promise a brighter future for patients',
    excerpt: 'An in-depth feature authored by Dr. Revathi Raj, covering haploidentical bone marrow transplantation, advances in gene therapy, and the evolving landscape of thalassemia care in India. The piece outlines why early intervention and prenatal diagnosis remain the most powerful tools for families today.',
    relevance: "Authored by Dr. Revathi Raj — demonstrates the clinical expertise and thought leadership behind TWA's protocols.",
    url: null, featured: true, byDrRevathi: true,
  },
  {
    publication: 'New Indian Express', date: '7 June 2023', year: 2023,
    headline: 'Treading to combat thalassemia',
    excerpt: "A feature on thalassemia awareness and advocacy work in Chennai, covering TWA's ongoing efforts to expand patient reach, promote prenatal screening, and support families managing the disease. Includes perspectives from clinicians and patient families.",
    relevance: "Profiles TWA's community outreach and awareness work in Chennai.",
    url: 'https://www.newindianexpress.com/cities/chennai/2023/jun/07/treading-to-combat-thalassemia-2582449.html',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'Apollo Hospitals — Press Release', date: '31 May 2023', year: 2023,
    headline: 'The highest number of thalassemia affected children successfully treated at Apollo Cancer Centre, Chennai under TNCMCHI scheme',
    excerpt: "Apollo Cancer Centre Chennai reports record numbers of thalassemia-affected children treated under the Tamil Nadu Chief Minister's Comprehensive Health Insurance scheme — the same government programme TWA has helped its patients access for fully free bone marrow transplantation.",
    relevance: 'Shows the scale of BMT treatment in Chennai through the government scheme TWA patients are enrolled in.',
    url: null, featured: false, byDrRevathi: false,
  },
  {
    publication: 'DATRI Blood Stem Cell Donors Registry', date: '2023', year: 2023,
    headline: 'Managing Thalassemia — Insights from Dr. Revathi Raj',
    excerpt: 'Dr. Revathi Raj discusses the clinical management of thalassemia, the importance of bone marrow registries like DATRI for haploidentical transplantation, and how long-term support systems like TWA address both the medical and emotional needs of patients and families in India.',
    relevance: 'Authored by Dr. Revathi Raj — expert perspective on BMT registries and holistic patient care at TWA.',
    url: 'https://datri.org/managing-thalassemia-insights-from-dr-revathi-raj/',
    featured: true, byDrRevathi: true,
  },
  {
    publication: 'Adyar Times — Chennai', date: 'May 2023', year: 2023,
    headline: 'World Thalassaemia Day observed at VHS Hospital',
    excerpt: 'World Thalassemia Day activities at Voluntary Health Services (VHS) Hospital, Taramani — the home of the TWA Chennai centre. The report covers patient programmes, blood donation awareness, and the role of VHS as a hub for thalassemia care in South Chennai.',
    relevance: 'Spotlights World Thalassemia Day activities at the VHS Taramani centre where TWA is based.',
    url: 'https://adyartimes.in/world-thalassaemia-day-observed-at-vhs-hospital/',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'Times of India — Chennai', date: '12 May 2021', year: 2021,
    headline: 'Thalassemia patients face shortage of blood donors amid pandemic',
    excerpt: "COVID-19 lockdowns brought blood drives to a halt, leaving thalassemia patients desperate for donors. Dr. Revathi Raj, President of TWA Chennai, confirmed an acute shortage at VHS Taramani — with patients' haemoglobin levels falling as life-critical transfusions were delayed across the city.",
    relevance: 'Directly quotes Dr. Revathi Raj on the COVID-era blood crisis at the Chennai TWA centre.',
    url: 'https://timesofindia.indiatimes.com/city/chennai/thalassemia-patients-face-shortage-of-blood-donors-amid-pandemic/articleshow/82561683.cms',
    featured: true, byDrRevathi: false,
  },
  {
    publication: 'The Hindu', date: 'May 2020', year: 2020,
    headline: 'How chronically ill patients are managing in the time of COVID-19',
    excerpt: "A feature on how patients with chronic conditions — including thalassemia — navigated disrupted hospital access, blood shortages, and medicine supply chain failures during India's COVID-19 lockdowns. Includes perspectives from patients and clinicians at centres in Chennai.",
    relevance: 'Documents the impact of the pandemic on thalassemia patients, the same community TWA supports at VHS Taramani.',
    url: 'https://www.thehindu.com/society/less-than-healthy-news-with-resources-in-several-hospitals-now-directed-towards-covid-19-control-regular-patients-find-themselves-dangerously-adrift/article31478943.ece',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'The Hindu — Chennai', date: 'January 2019', year: 2019,
    headline: "'Thrust to make State thalassaemia-free by 2020'",
    excerpt: "Clinicians and health officials discuss the Tamil Nadu government's commitment to making the state free of new thalassemia births through universal prenatal screening and genetic counselling. Dr. Revathi Raj is among those calling for routine antenatal testing as the cornerstone of prevention.",
    relevance: 'Records government-level prevention advocacy that TWA and Dr. Revathi Raj have actively supported.',
    url: 'https://www.thehindu.com/news/cities/chennai/thrust-to-make-state-thalassaemia-free-by-2020/article27073759.ece',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'The Hindu', date: '2014', year: 2014,
    headline: 'Government to upscale project for thalassaemia',
    excerpt: "The Tamil Nadu government announces plans to expand its thalassemia screening and treatment programme, following early successes of the state's comprehensive care pilot. The expansion covers more districts, bringing free transfusion and chelation support closer to rural patients.",
    relevance: "Documents the government's commitment to scaling a model that TWA has pioneered at VHS Taramani.",
    url: 'https://www.thehindu.com/news/national/tamil-nadu/government-to-upscale-project-for-thalassemia/article5992104.ece',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'New Indian Express', date: '1 July 2013', year: 2013,
    headline: 'Undetected thalassemia preying on Dharmapuri kids',
    excerpt: "Tribal children in rural Dharmapuri district — one of Tamil Nadu's highest-prevalence areas — travel long distances to the TWA Chennai centre in Taramani for monthly blood transfusions. The article discusses government scheme support and the acute lack of local awareness in these communities.",
    relevance: "Documents patients from rural Dharmapuri relying on the Chennai TWA centre, illustrating the programme's statewide reach.",
    url: null, featured: false, byDrRevathi: false,
  },
  {
    publication: 'The Hindu', date: '2012', year: 2012,
    headline: 'Four children cured of thalassemia',
    excerpt: "The Hindu reports on successful thalassemia cures through bone marrow transplantation in Tamil Nadu, with clinical context from VHS Taramani — where TWA runs its Chennai centre under Dr. Revathi Raj's guidance.",
    relevance: 'Early national press milestone: BMT cures for thalassemia covered by The Hindu.',
    url: 'https://www.thehindu.com/sci-tech/health/rx/Four-children-cured-of-thalassemia/article15906434.ece',
    featured: false, byDrRevathi: false,
  },
  {
    publication: 'LiveChennai', date: '6 September 2010', year: 2010,
    headline: 'Four children cured of Thalassemia at the VHS, Taramani, Chennai',
    excerpt: 'Four children successfully cured under the state Kalaignar health insurance scheme at VHS Taramani. Reports that 159 young patients from across Tamil Nadu are registered with the Thalassemia Welfare Association, receiving free blood transfusions. Dr. Revathi Raj recommends prenatal screening to prevent new cases.',
    relevance: 'Earliest archived press mention of TWA Chennai — documents the founding era of the centre.',
    url: null, featured: false, byDrRevathi: false,
  },
]

const PARTNERS = [
  {
    name: 'Apollo Hospitals, Chennai',
    type: 'Hospital Partner',
    description: 'MoU partner for haploidentical Bone Marrow Transplantation — over 300 BMTs performed free.',
    initials: 'AH',
    logoPath: '/images/partners/apollo-hospitals.png',
  },
  {
    name: 'Mediscan Systems',
    type: 'Diagnostics Partner',
    description: 'MoU partner for prenatal diagnosis and chorion villous sampling — over 100 procedures completed.',
    initials: 'MS',
    logoPath: '/images/partners/mediscan-systems.png',
  },
  {
    name: 'Annamayil',
    type: 'Nutrition Partner',
    description: 'Provides high-quality nutritious meals to patients attending transfusion sessions.',
    initials: 'AN',
    logoPath: null,
  },
  {
    name: 'Camp Rainbow',
    type: 'Wellness Partner',
    description: 'Conducts art therapy and creative wellness sessions for our young patients.',
    initials: 'CR',
    logoPath: '/images/partners/camp-rainbow.webp',
  },
  {
    name: 'Five Star Business Finance Limited',
    type: 'Corporate Donor',
    description: 'Corporate donor supporting patient care and programme costs at TWA Chennai.',
    initials: 'FS',
    logoPath: '/images/partners/five-star-business-finance.png',
  },
  {
    name: 'Rotork',
    type: 'Corporate Donor',
    description: 'Corporate donor supporting patient care and programme costs at TWA Chennai.',
    initials: 'RO',
    logoPath: '/images/partners/rotork.png',
  },
]

const FAQS = [
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Yes. Donations to TWA Chennai are eligible for a 50% deduction under Section 80G of the Income Tax Act, 1961. An 80G receipt is emailed to you after every successful donation. You can use the PAN field on the donation form to ensure the receipt is generated correctly.',
  },
  {
    question: 'Where does my money go?',
    answer: 'Every rupee of restricted donations is spent on patient care — safe blood, iron-chelating medicines, diagnostics and transit support for families. Administrative and salary costs are funded separately. Our audited annual report breaks down expenditure line-by-line and is available on the Transparency page.',
  },
  {
    question: 'Can I donate blood instead of money?',
    answer: 'Absolutely. Patients on our register need transfusions every 2–4 weeks. You can register as a donor through the Get Involved page, walk in to any of our partner blood banks, or host a drive at your workplace, college or community.',
  },
  {
    question: 'How can my company partner with TWA?',
    answer: 'We work with companies on CSR funding, employee giving, volunteering days and blood drives. Write to us at info@twachennai.org and we will share our CSR profile and partnership options.',
  },
  {
    question: 'Can I visit your centre?',
    answer: 'Yes, visits by appointment are welcome. Please use the contact form so we can schedule a time that does not coincide with patient transfusions.',
  },
]

async function main() {
  for (const stat of SITE_STATS) {
    await prisma.siteStat.upsert({
      where: { key: stat.key },
      update: {}, // don't clobber admin-edited values on reseed
      create: stat,
    })
  }
  console.log(`Seeded ${SITE_STATS.length} site stats`)

  let mediaCreated = 0
  for (let i = 0; i < MEDIA_ARTICLES.length; i++) {
    const a = MEDIA_ARTICLES[i]
    const existing = await prisma.mediaArticle.findFirst({ where: { headline: a.headline } })
    if (!existing) {
      await prisma.mediaArticle.create({ data: { ...a, sortOrder: i + 1 } })
      mediaCreated++
    }
  }
  console.log(`Seeded ${mediaCreated} media articles (${MEDIA_ARTICLES.length - mediaCreated} already existed)`)

  let partnersCreated = 0
  for (let i = 0; i < PARTNERS.length; i++) {
    const p = PARTNERS[i]
    const existing = await prisma.partner.findFirst({ where: { name: p.name } })
    if (!existing) {
      await prisma.partner.create({ data: { ...p, sortOrder: i + 1, visible: true } })
      partnersCreated++
    }
  }
  console.log(`Seeded ${partnersCreated} partners (${PARTNERS.length - partnersCreated} already existed)`)

  let faqsCreated = 0
  for (let i = 0; i < FAQS.length; i++) {
    const f = FAQS[i]
    const existing = await prisma.fAQ.findFirst({ where: { question: f.question } })
    if (!existing) {
      await prisma.fAQ.create({ data: { ...f, sortOrder: i + 1, visible: true } })
      faqsCreated++
    }
  }
  console.log(`Seeded ${faqsCreated} FAQs (${FAQS.length - faqsCreated} already existed)`)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
