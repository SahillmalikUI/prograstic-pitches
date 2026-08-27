export interface IndustryVertical {
  id: string;
  slug: string;
  name: string;
  industryTag: string;
  badge: string;
  tagline: string;
  headline: string;
  heroHighlight: string;
  heroDescription: string;
  accentColor: string;
  accentHex: string;
  heroGlowClass: string;
  mockupImage?: string;
  statMetrics: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  missingLoops: {
    title: string;
    problemDesc: string;
    solutionTitle: string;
    solutionDesc: string;
    impact: string;
  }[];
  customCapabilities: {
    title: string;
    description: string;
    tag: string;
  }[];
  techStack: string[];
  suggestedModules: string[];
}

export const VERTICALS: Record<string, IndustryVertical> = {
  hospitals: {
    id: "hospitals",
    slug: "hospitals",
    name: "Hospitals & Multi-Specialty Centers",
    industryTag: "Healthcare / Hospital Systems",
    badge: "hospital.prograstic",
    tagline: "Custom Hospital Operating Systems & Seamless Data Entry",
    headline: "Custom Clinical Platforms & Queue Systems Built For",
    heroHighlight: "High-Throughput Hospitals",
    heroDescription: "Eliminate repetitive paper data entry, OPD congestion, and disjointed departmental handoffs. We build ultra-fast, bespoke hospital software mapped 1-to-1 to your doctors, wards, and administrative workflows.",
    accentColor: "blue",
    accentHex: "#2563EB",
    heroGlowClass: "hero-glow-blue",
    mockupImage: "/mockups/hospital_ui.jpg",
    statMetrics: [
      { value: "0 mins", label: "OPD Waiting Room Chaos", sublabel: "Automated dynamic token dispatch" },
      { value: "3.5x", label: "Faster Doctor EMR Intake", sublabel: "Single-screen clinical notes & e-rx" },
      { value: "100%", label: "Data Ownership", sublabel: "Zero per-user monthly SaaS lock-in" },
      { value: "14 Days", label: "Sprint Deployment", sublabel: "Working software in production" },
    ],
    missingLoops: [
      {
        title: "The Manual Data Entry Bottleneck",
        problemDesc: "Front desk staff, nurses, and lab technicians re-enter patient demographics across 3 disconnected software systems, creating typos, billing leaks, and long waiting lines.",
        solutionTitle: "Unified Single-Entry Data Pipeline",
        solutionDesc: "Patient data entered once at reception flows instantly into Doctor Consultations, Diagnostic Orders, Pharmacy Invoicing, and IPD Bed Allocation.",
        impact: "Zero duplicate entry & instant inter-department sync"
      },
      {
        title: "OPD Waiting Room Congestion & Interrupted Doctors",
        problemDesc: "Patients crowd consulting room doors while receptionists are constantly interrupted by patients asking 'how many tokens left?'.",
        solutionTitle: "Live Digital Queue & SMS/WhatsApp Notification System",
        solutionDesc: "Patients receive live countdown tokens on their phone and lobby LED boards, entering precisely when the doctor is ready.",
        impact: "70% reduction in lobby congestion"
      },
      {
        title: "Slow, Bloated EMR Interfaces Doctors Refuse To Use",
        problemDesc: "Legacy hospital software requires 12 clicks per prescription, forcing senior doctors back to writing illegible paper notes.",
        solutionTitle: "60-Second Macro & Voice-Enabled Clinical EMR",
        solutionDesc: "Keyboard-first, specialty-tailored prescription engine that generates compliant digital summaries and lab requisitions in seconds.",
        impact: "100% doctor adoption & digital records"
      }
    ],
    customCapabilities: [
      {
        title: "Bespoke Doctor Consultation Console",
        description: "Specialty-specific EMR screens (Cardiology, Orthopaedics, Paediatrics, Internal Medicine) with customized clinical templates.",
        tag: "Clinical Core"
      },
      {
        title: "Centralized IPD & Ward Management",
        description: "Live bed occupancy matrix, nurse shift handovers, automated nursing vitals logging, and discharge summary generator.",
        tag: "In-Patient Operations"
      },
      {
        title: "Pathology & Radiology Bridge",
        description: "Diagnostic orders automatically push to lab analysers; finalized PDF reports reflect instantly in doctor's active patient record.",
        tag: "Diagnostics Bridge"
      },
      {
        title: "Cashless TPA & Billing Audit Engine",
        description: "Pre-authorization document compiler, itemized package billing, and revenue leak detection before patient discharge.",
        tag: "Billing & Audit"
      }
    ],
    techStack: ["Next.js", "React", "FastAPI", "PostgreSQL", "Docker", "AWS", "Redis", "Tailwind CSS"],
    suggestedModules: ["OPD Live Queue", "Doctor EMR", "IPD Ward Matrix", "Lab Bridge", "TPA Pre-Auth", "WhatsApp Alerts"]
  },

  dental: {
    id: "dental",
    slug: "dental",
    name: "Dental Clinics & Multi-Chair Practices",
    industryTag: "Healthcare / Dental Practice",
    badge: "dental.prograstic",
    tagline: "Multi-Chair Scheduling & WhatsApp Patient Pipeline",
    headline: "Custom Chair Scheduling & Patient Automation For",
    heroHighlight: "Growing Dental Groups",
    heroDescription: "Stop losing revenue to idle operatory chairs and forgotten appointments. We engineer high-throughput chair scheduling engines, automated two-way WhatsApp patient pipelines, and digital dental charting.",
    accentColor: "teal",
    accentHex: "#0D9488",
    heroGlowClass: "hero-glow-teal",
    mockupImage: "/mockups/dental_ui.jpg",
    statMetrics: [
      { value: "95%+", label: "Chair Capacity Utilization", sublabel: "Zero 45-minute idle gaps" },
      { value: "-45%", label: "No-Show & Late Cancellations", sublabel: "Automated 24h/2h interactive WhatsApp" },
      { value: "1-Click", label: "Tooth Charting & Treatment Plan", sublabel: "Instant visual estimate on patient phone" },
      { value: "14 Days", label: "Kickoff to Live", sublabel: "Direct-to-builder engineering" },
    ],
    missingLoops: [
      {
        title: "Empty Operatory Chairs & Mismatched Durations",
        problemDesc: "Front desk staff book a 20-minute scaling and a 60-minute root canal into the same generic calendar slot, causing chair bottlenecks or empty idle rooms.",
        solutionTitle: "Intelligent Multi-Chair & Doctor Resource Matrix",
        solutionDesc: "Dynamic scheduling that matches procedure duration, specific operatory equipment (e.g., surgical chair vs hygiene chair), and assisting nurse availability.",
        impact: "Maximizes daily revenue per chair"
      },
      {
        title: "High No-Show Rates on High-Value Appointments",
        problemDesc: "Patients forget surgical, implant, or aligner slots. Front desk staff spends hours making manual phone calls that get disconnected.",
        solutionTitle: "Automated Two-Way WhatsApp Interactive Confirmation",
        solutionDesc: "Instant WhatsApp confirmation with interactive 'Confirm Attendance', 'Reschedule', or 'Clinic Directions' buttons directly updating the clinic board.",
        impact: "Cuts no-shows by half automatically"
      },
      {
        title: "Lost High-Value Treatment Estimates (Aligners & Implants)",
        problemDesc: "Patients leave with handwritten paper quotes for crowns or implants and never follow up.",
        solutionTitle: "Interactive Digital Treatment Plan Portal",
        solutionDesc: "Clean mobile-friendly treatment breakdown sent to patient WhatsApp with procedure visuals, timeline stages, and follow-up reminders.",
        impact: "3x higher conversion on high-ticket cases"
      }
    ],
    customCapabilities: [
      {
        title: "Multi-Operatory Visual Chair Grid",
        description: "Real-time color-coded board tracking chair state: Patient In-Chair, Procedure in Progress, Sanitization, Ready for Next.",
        tag: "Clinic Floor"
      },
      {
        title: "Official Meta WhatsApp Cloud Engine",
        description: "Verified green-tick templates for appointment reminders, post-procedure care instructions, and 6-month hygiene recalls.",
        tag: "Patient Engagement"
      },
      {
        title: "Interactive 32-Tooth Digital Charting",
        description: "Touchscreen dental charting for crowns, fillings, missing teeth, and periodontal depth recording on iPad or desktop.",
        tag: "Clinical"
      },
      {
        title: "Multi-Branch Centralized Dashboard",
        description: "Manage multiple clinic locations with role-based access for associate dentists, front desk, and owners.",
        tag: "Scale"
      }
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Meta Cloud API", "Tailwind CSS", "AWS"],
    suggestedModules: ["Chair Schedule Matrix", "WhatsApp Confirmations", "Digital Tooth Charting", "Recall Engine", "Multi-Branch Hub"]
  },

  aesthetics: {
    id: "aesthetics",
    slug: "aesthetics",
    name: "Skin, Dermatology & Aesthetic Centers",
    industryTag: "Healthcare / Dermatology & Aesthetics",
    badge: "dermatology.prograstic",
    tagline: "Consultation Pipelines & VIP Patient Clinical Systems",
    headline: "Engineered Patient Pipelines & Clinical Portals For",
    heroHighlight: "Dermatology & Aesthetic Centers",
    heroDescription: "Replace chaotic Instagram DMs and paper consultation records with high-converting patient assessment pipelines, secure standardized before/after photo vaults, and multi-session package trackers.",
    accentColor: "rose",
    accentHex: "#E11D48",
    heroGlowClass: "hero-glow-rose",
    mockupImage: "/mockups/aesthetics_ui.jpg",
    statMetrics: [
      { value: "4x", label: "Consultation Conversion", sublabel: "Interactive visual skin assessment" },
      { value: "100%", label: "Photo Privacy & Compliance", sublabel: "Encrypted patient photo vault" },
      { value: "0", label: "Session Balance Disputes", sublabel: "Transparent patient procedure wallet" },
      { value: "14 Days", label: "Turnaround Sprints", sublabel: "Built by senior engineers" },
    ],
    missingLoops: [
      {
        title: "Warm Inquiries Dropping Off Without Booking",
        problemDesc: "Leads inquire about laser, peels, or injectables but disappear when given a dry text quote without seeing clinical expertise.",
        solutionTitle: "Interactive Treatment Visualizer & Intake Flow",
        solutionDesc: "A branded digital assessment where clients select skin concerns (acne, pigmentation, wrinkles) and receive tailored clinical protocol recommendations.",
        impact: "Substantially higher consultation attendance"
      },
      {
        title: "Patient Photos Scattered on Doctors' Personal Phones",
        problemDesc: "Before/after clinical photos are kept in personal photo galleries, risking privacy breaches, lost files, and legal compliance issues.",
        solutionTitle: "Encrypted Clinical Photo Vault & Alignment Tool",
        solutionDesc: "Standardized ghost-overlay camera tool tagged by patient file number, procedure date, and angle, with 1-click consent management.",
        impact: "100% HIPAA compliant clinical record keeping"
      },
      {
        title: "Package Session Tracking & Renewal Leakage",
        problemDesc: "Tracking 6-session laser or peel packages on paper cards causes confusion on remaining sessions and lost renewal revenue.",
        solutionTitle: "Digital Patient Procedure Wallet & Nudge Engine",
        solutionDesc: "Clients view remaining treatment sessions on their private phone portal with automated WhatsApp reminders when it is time for their next visit.",
        impact: "Zero session disputes & automated renewals"
      }
    ],
    customCapabilities: [
      {
        title: "3D Face & Body Injection Mapping",
        description: "Interactive anatomical face canvas to record exact Botox units, filler ml volumes, and cannula entry sites per session.",
        tag: "Doctor Tool"
      },
      {
        title: "Standardized Before/After Comparison Tool",
        description: "Side-by-side progression slider with automated watermarking and client consent toggles for social case studies.",
        tag: "Clinical Vault"
      },
      {
        title: "Pre-Consultation Digital Skin Questionnaire",
        description: "Clients complete medical history, skincare routine, and allergy disclosures securely on their phone before stepping into the clinic.",
        tag: "Intake"
      },
      {
        title: "Post-Procedure Skincare Prescription",
        description: "Doctor creates customized morning/night serum and sun protection routines dispatched directly to patient WhatsApp.",
        tag: "Patient Care"
      }
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "AWS S3 Encrypted", "Tailwind CSS", "FastAPI"],
    suggestedModules: ["Treatment Visualizer", "Injection Mapper", "Before/After Vault", "Session Tracker", "Post-Care WhatsApp"]
  },

  manufacturing: {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Industrial Operations",
    industryTag: "Industrial / Manufacturing & Supply Chain",
    badge: "manufacturing.prograstic",
    tagline: "Shop Floor Data Entry & Live Production Tracking",
    headline: "Custom Shop Floor Data Entry & Inventory Systems For",
    heroHighlight: "Modern Manufacturing Plants",
    heroDescription: "Replace clipboards, paper job cards, and delayed Excel sheets with custom, rugged shop floor data entry portals, machine downtime trackers, and live raw material inventory pipelines.",
    accentColor: "amber",
    accentHex: "#D97706",
    heroGlowClass: "hero-glow-amber",
    mockupImage: "/mockups/manufacturing_ui.jpg",
    statMetrics: [
      { value: "Real-Time", label: "Shop Floor Visibility", sublabel: "Zero delayed end-of-day Excel logs" },
      { value: "-35%", label: "Machine Downtime Loss", sublabel: "Instant operator breakdown alerts" },
      { value: "100%", label: "Batch Traceability", sublabel: "QR-code tracked raw material flow" },
      { value: "14 Days", label: "Rapid Deployment", sublabel: "Tailored to your factory floor" },
    ],
    missingLoops: [
      {
        title: "Delayed Paper Job Cards & Lost Production Data",
        problemDesc: "Operators write production counts on paper sheets. Management only finds out about scrap rates or machine bottlenecks 24 hours later when data is manually typed into Excel.",
        solutionTitle: "Rugged Tablet & Mobile Shop Floor Entry",
        solutionDesc: "Simple, large-button touch interfaces for factory floor operators to log batch output, scrap reasons, and shift handovers in 5 seconds.",
        impact: "Real-time production visibility for plant managers"
      },
      {
        title: "Raw Material Stockouts & Inventory Blindspots",
        problemDesc: "Production halts unexpectedly because critical components or raw materials ran out without procurement being notified in time.",
        solutionTitle: "Automated Reorder Level & Batch Tracking Pipeline",
        solutionDesc: "Scans raw material in/out via barcode/QR codes. Automatically triggers supplier alerts when stock dips below safe thresholds.",
        impact: "Zero production line halts due to material shortage"
      },
      {
        title: "Unrecorded Machine Maintenance & Unplanned Downtime",
        problemDesc: "Breakdowns are reported via phone calls or shouting across the floor; maintenance response is slow and repair history is lost.",
        solutionTitle: "1-Tap Breakdown Ticket & Preventive Maintenance Log",
        solutionDesc: "Operators tap machine breakdown on their terminal. Maintenance engineers receive instant WhatsApp/SMS alerts with timer tracking.",
        impact: "Faster MTTR (Mean Time to Repair)"
      }
    ],
    customCapabilities: [
      {
        title: "Live Plant OEE & Output Dashboard",
        description: "Real-time visual board for plant heads showing machine availability, performance rate, and quality scrap metrics.",
        tag: "Plant Ops"
      },
      {
        title: "Barcode & QR Batch Tracking Engine",
        description: "Track raw material lot number from incoming supplier gate to final dispatched pallet with full audit history.",
        tag: "Traceability"
      },
      {
        title: "Operator Skill Matrix & Shift Scheduler",
        description: "Assign certified operators to specific machinery based on machine compliance, safety training, and shift rotations.",
        tag: "Workforce"
      },
      {
        title: "Vendor & Subcontractor Jobwork Portal",
        description: "External suppliers log dispatched jobwork parts, delivery challans, and inspection rejection notes in a shared portal.",
        tag: "Supply Chain"
      }
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "FastAPI"],
    suggestedModules: ["Shop Floor Terminal", "QR Batch Tracker", "Breakdown Alert Engine", "OEE Dashboard", "Vendor Portal"]
  },

  clinics: {
    id: "clinics",
    slug: "clinics",
    name: "Orthopaedics, ENT & Specialized Practices",
    industryTag: "Healthcare / Specialized Clinics & Daycare",
    badge: "clinics.prograstic",
    tagline: "High-Throughput Appointments & Surgical Case Tracking",
    headline: "Custom Clinical Workflows & Surgical Case Logs For",
    heroHighlight: "Specialized Medical Practices",
    heroDescription: "Designed for high-volume Orthopaedics, ENT, Paediatrics, and Surgical practices. We engineer specialty consultation intake, operative case trackers, and automated post-op patient follow-up pipelines.",
    accentColor: "indigo",
    accentHex: "#4F46E5",
    heroGlowClass: "hero-glow-indigo",
    mockupImage: "/mockups/hospital_ui.jpg",
    statMetrics: [
      { value: "60 Sec", label: "Consultation Note Generation", sublabel: "Specialty-focused clinical templates" },
      { value: "100%", label: "Post-Op Follow-Up Reach", sublabel: "Automated WhatsApp recovery checklists" },
      { value: "0", label: "Lost Radiographs & Reports", sublabel: "Instant cloud report repository" },
      { value: "14 Days", label: "Production Delivery", sublabel: "Direct engineering collaboration" },
    ],
    missingLoops: [
      {
        title: "Chaotic Surgical Planning & Case Scheduling",
        problemDesc: "Surgical cases are coordinated across WhatsApp groups, loose paper notes, and OT whiteboard schedules, leading to delayed implants or miscommunicated timings.",
        solutionTitle: "Digital Surgical Case Management Board",
        solutionDesc: "Unified operative schedule tracking patient fitness (PAC), required implants/instruments, OT slot, and assisting team confirmation.",
        impact: "Zero surgical schedule delays"
      },
      {
        title: "Post-Operative Recovery Blindspots & Panic Calls",
        problemDesc: "Discharged surgical and procedure patients call doctors at odd hours with repetitive questions regarding wound dressing, medication, or normal swelling.",
        solutionTitle: "Automated WhatsApp Post-Op Protocol Sequence",
        solutionDesc: "Day 1, Day 3, Day 7 automated check-in messages with wound care instructions, warning signs to watch for, and 1-tap emergency doctor connect.",
        impact: "80% reduction in panicked patient calls"
      },
      {
        title: "Fragmented Referral Doctor Tracking",
        problemDesc: "Clinics receive patient referrals from other physicians but have no structured system to send back consultation summaries or track referral relationships.",
        solutionTitle: "Referring Doctor Summary & Acknowledgement Portal",
        solutionDesc: "Automatically sends a professional digital consult summary and thank-you note to the referring doctor upon patient visit completion.",
        impact: "Stronger referring doctor relationships"
      }
    ],
    customCapabilities: [
      {
        title: "Specialty Examination Macro Templates",
        description: "Pre-configured templates for Ortho (ROM, joint evaluation), ENT (audiogram bridge, endoscopy photos), and Paediatrics (growth charts).",
        tag: "Specialty EMR"
      },
      {
        title: "Digital Informed Consent on Tablet",
        description: "Patients and guardians review and sign procedure consent forms on an iPad with timestamped legal audit logs.",
        tag: "Compliance"
      },
      {
        title: "Automated Diagnostic Follow-Up Radar",
        description: "Flags patients whose lab or scan results are pending and prompts reception staff to schedule review appointments upon upload.",
        tag: "Care Loop"
      },
      {
        title: "Multi-Consultant Schedule Coordinator",
        description: "Synchronize visiting consultants across multiple clinic locations with real-time slot blocking and WhatsApp calendar sync.",
        tag: "Scheduling"
      }
    ],
    techStack: ["Next.js", "React", "PostgreSQL", "FastAPI", "AWS", "Tailwind CSS"],
    suggestedModules: ["Surgical Case Board", "Post-Op WhatsApp Bot", "Specialty Templates", "Digital Consent", "Referral Portal"]
  },

  education: {
    id: "education",
    slug: "education",
    name: "Overseas Education & Admissions Consultancy",
    industryTag: "Education / Overseas Consultancy & Admissions",
    badge: "education.prograstic",
    tagline: "Student Application Pipelines & Visa Document Vaults",
    headline: "Custom Student CRM & Application Vaults For",
    heroHighlight: "Overseas Education Consultancies",
    heroDescription: "Stop losing student applications in WhatsApp chats and messy Google Drives. We engineer student application pipelines, automated university deadline trackers, and secure visa document vaults.",
    accentColor: "blue",
    accentHex: "#2563EB",
    heroGlowClass: "hero-glow-blue",
    mockupImage: "/mockups/hospital_ui.jpg",
    statMetrics: [
      { value: "0", label: "Missed Intake Deadlines", sublabel: "Automated university countdown radar" },
      { value: "3x", label: "Counselor Case Capacity", sublabel: "Structured document intake portal" },
      { value: "100%", label: "Document Traceability", sublabel: "IELTS, transcripts & SOP versioning" },
      { value: "14 Days", label: "Live Deployment", sublabel: "Custom software tailored to your firm" },
    ],
    missingLoops: [
      {
        title: "Student Documents Scattered Across Personal WhatsApp Chats",
        problemDesc: "Counselors collect passports, bank statements, IELTS scores, and transcripts on personal phones. When a counselor leaves, student files are lost.",
        solutionTitle: "Dedicated Student Document Vault & Checklist",
        solutionDesc: "Students upload files directly into a secure branded web portal with real-time checklist status (Approved, Needs Resubmission, Missing).",
        impact: "100% centralized student data security"
      },
      {
        title: "Missed University Intakes & Application Deadlines",
        problemDesc: "Counselors managing 40+ students miss critical fall/spring intake deadlines for UK, Canada, USA, or Australia universities.",
        solutionTitle: "Visual Multi-Stage Application Kanban Board",
        solutionDesc: "Stage-by-stage pipeline (Lead → Counseling → Shortlisting → SOP Review → Application Submitted → Offer Letter → Visa Lodged).",
        impact: "Zero missed university intake deadlines"
      },
      {
        title: "Repetitive Student Status Inquiries",
        problemDesc: "Students and anxious parents call counselors daily asking 'did the university issue my offer letter yet?'.",
        solutionTitle: "Live Student Milestone Tracker & WhatsApp Updates",
        solutionDesc: "Students check their live application progress on their phone and receive instant WhatsApp notifications as their file moves forward.",
        impact: "75% reduction in repetitive status queries"
      }
    ],
    customCapabilities: [
      {
        title: "University & Course Matching Database",
        description: "Filter 500+ global universities by IELTS cutoff, tuition budget, country, and scholarship availability.",
        tag: "Counselor Tool"
      },
      {
        title: "Automated SOP & LOR Review Pipeline",
        description: "Internal editor review workflow with version history, comment threads, and student revision requests.",
        tag: "Applications"
      },
      {
        title: "Visa Interview Preparation Portal",
        description: "Mock interview question banks, financial document checklists, and counselor feedback logs.",
        tag: "Visa Stage"
      },
      {
        title: "Branch & Agent Commission Ledger",
        description: "Track counselor incentive commissions and university payout reconciliations across branches.",
        tag: "Business Ops"
      }
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS S3 Encrypted", "Tailwind CSS"],
    suggestedModules: ["Application Kanban", "Student Doc Vault", "WhatsApp Status Alerts", "Course Finder", "Commission Ledger"]
  },

  neurology: {
    id: "neurology",
    slug: "neurology",
    name: "Neurology, Neurosurgery & Diagnostic Centers",
    industryTag: "Healthcare / Neurology & Diagnostics",
    badge: "neuro.prograstic",
    tagline: "Web-Based DICOM Viewing & Rapid Diagnostic Turnaround",
    headline: "Engineered Diagnostic Portals & Longitudinal Records For",
    heroHighlight: "Neurology & Imaging Practices",
    heroDescription: "Replace physical CD/DVD scan handovers with browser-based cloud DICOM viewers, instant radiologist report distribution, and longitudinal patient symptom tracking.",
    accentColor: "indigo",
    accentHex: "#4F46E5",
    heroGlowClass: "hero-glow-indigo",
    mockupImage: "/mockups/hospital_ui.jpg",
    statMetrics: [
      { value: "Sub-Second", label: "Cloud DICOM Slice Streaming", sublabel: "Zero software installation required" },
      { value: "1-Tap", label: "Secure Report Dispatch", sublabel: "Encrypted link sent to patient & doctor" },
      { value: "100%", label: "Longitudinal History", sublabel: "Unified EEG, MRI, and nerve studies" },
      { value: "14 Days", label: "Sprint Delivery", sublabel: "Engineered directly by senior builders" },
    ],
    missingLoops: [
      {
        title: "Lost MRI CDs & Doctors Unable to Open Scan Files",
        problemDesc: "Patients carry physical CDs that modern laptops cannot read, delaying critical neuro consultations.",
        solutionTitle: "Browser-Based Zero-Footprint Cloud DICOM Viewer",
        solutionDesc: "High-resolution multi-slice MRI/CT viewer accessible on any web browser with measurement and contrast leveling tools.",
        impact: "Instant scan review without heavy software"
      },
      {
        title: "Delayed Diagnostic Report Turnaround",
        problemDesc: "Referring doctors and patients wait days for printed reports, leading to delayed clinical decisions.",
        solutionTitle: "Automated Instant Encrypted Link Dispatch",
        solutionDesc: "As soon as the neurologist signs off the report, an encrypted link is dispatched to patient and referring physician WhatsApp.",
        impact: "Reports delivered in minutes, not days"
      },
      {
        title: "Unrecorded Chronic Symptom History (Epilepsy & Migraine)",
        problemDesc: "Patients struggle to recall seizure frequency or trigger patterns across the past 6 months during routine reviews.",
        solutionTitle: "Longitudinal Patient Symptom Telemetry",
        solutionDesc: "Simple mobile symptom log that compiles attack trends, medication adherence, and side effects directly into the doctor's review tab.",
        impact: "Data-driven clinical adjustments"
      }
    ],
    customCapabilities: [
      {
        title: "PACS / Modality Integration Bridge",
        description: "Direct DICOM C-STORE and WADO connectors linking GE, Siemens, and Philips modalities directly to the cloud vault.",
        tag: "Imaging"
      },
      {
        title: "Verified Digital Sign-Off Console",
        description: "Neurologist digital signature integration with standardized impression macros and automatic PDF compiler.",
        tag: "Reporting"
      },
      {
        title: "Referring Doctor Collaboration Portal",
        description: "Referring general physicians log in to view diagnostic reports and neuro specialist notes for their patients.",
        tag: "Network"
      },
      {
        title: "Critical Stroke / Bleed Emergency Alerts",
        description: "Instant push notification to on-call neurosurgeons for critical acute intracranial findings.",
        tag: "Emergency"
      }
    ],
    techStack: ["Next.js", "React", "FastAPI", "PostgreSQL", "WebGL", "AWS S3", "Tailwind CSS"],
    suggestedModules: ["Cloud DICOM Viewer", "Encrypted Magic Link", "Symptom Diary", "PACS Bridge", "Emergency Alerts"]
  },

  fertility: {
    id: "fertility",
    slug: "fertility",
    name: "Gynae, IVF & Fertility Centers",
    industryTag: "Healthcare / IVF & Women's Health",
    badge: "fertility.prograstic",
    tagline: "IVF Cycle Timelines & Embryology Lab Transparency",
    headline: "Engineered IVF Cycle Roadmaps & Empathetic Portals For",
    heroHighlight: "Modern Fertility Clinics",
    heroDescription: "Reduce patient anxiety and eliminate missed hormone doses with transparent IVF cycle roadmaps, embryology milestone publishing, and confidential dual-partner intake vaults.",
    accentColor: "rose",
    accentHex: "#E11D48",
    heroGlowClass: "hero-glow-rose",
    mockupImage: "/mockups/aesthetics_ui.jpg",
    statMetrics: [
      { value: "100%", label: "Trigger Timing Compliance", sublabel: "Minute-accurate dosage alerts" },
      { value: "-75%", label: "Anxiety Calls to Clinic Nurses", sublabel: "Live daily embryology progress" },
      { value: "100%", label: "Partner Privacy Isolation", sublabel: "Confidential intake workflows" },
      { value: "14 Days", label: "Kickoff to Live", sublabel: "Direct engineering collaboration" },
    ],
    missingLoops: [
      {
        title: "Overwhelmed Nurses Answering Anxious Daily Cycle Queries",
        problemDesc: "Patients call nurses constantly asking 'how are our embryos developing?' or 'what injection do I take tonight?'.",
        solutionTitle: "Transparent Daily Cycle & Medication Portal",
        solutionDesc: "A comforting mobile timeline showing current cycle day, tonight's exact injection time with video guide, and verified lab updates.",
        impact: "Cuts routine support calls by 75%"
      },
      {
        title: "Missed or Mis-Timed Hormone Trigger Injections",
        problemDesc: "A mis-timed hCG or Decapeptyl trigger shot can ruin an entire IVF cycle, costing thousands of dollars and emotional distress.",
        solutionTitle: "Locked Minute-Accurate Trigger Alarm Engine",
        solutionDesc: "Multi-channel WhatsApp and push countdown alerts at 2h, 30m, and 5m before the trigger, requiring patient confirmation.",
        impact: "100% protocol accuracy"
      },
      {
        title: "Awkward Paper Intake in Crowded Waiting Rooms",
        problemDesc: "Couples are made to fill out sensitive 10-page reproductive history forms on paper in busy waiting areas.",
        solutionTitle: "Dual-Partner Digital Confidential Intake Vault",
        solutionDesc: "Separate, private online questionnaires for male and female partners completed securely at home before the first consult.",
        impact: "Accurate clinical history & dignified privacy"
      }
    ],
    customCapabilities: [
      {
        title: "Embryology Lab Milestone Publisher",
        description: "Embryologists upload Day-1 fertilization and Day-5 blastocyst grading photos directly to the couple's secure timeline.",
        tag: "Lab Tool"
      },
      {
        title: "Antenatal Trimester Milestones",
        description: "Obstetric tracker for gestational age, anomaly scan windows, and maternal vitals tracking.",
        tag: "Obstetrics"
      },
      {
        title: "Cryopreservation & Vitrification Ledger",
        description: "Digital tank/canister storage ledger for frozen embryos and gametes with consent renewal tracking.",
        tag: "Cryo Storage"
      },
      {
        title: "Semen Analysis & Andrology Portal",
        description: "Digital motility/morphology reporting and lifestyle optimization recommendation summaries.",
        tag: "Andrology"
      }
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "FastAPI", "Tailwind CSS", "AWS"],
    suggestedModules: ["IVF Cycle Roadmap", "Embryology Publisher", "Trigger Alert Engine", "Confidential Intake", "Cryo Ledger"]
  }
};
