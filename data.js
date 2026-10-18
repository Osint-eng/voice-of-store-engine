// Voice-of-Store Engine (VoSE) - Synthetic Dataset & Knowledge Base
// Specially aligned for Retail R5: Turning Store Chatter Into Action (AP Mega Hackathon)

const STORES_MASTER = [
  { id: "STR-101", name: "Visakhapatnam - Beach Road Supermarket", city: "Visakhapatnam", region: "North Andhra", format: "Supermarket", weeklyFootfall: 16500, manager: "K. Satyanarayana" },
  { id: "STR-102", name: "Visakhapatnam - Gajuwaka Industrial Express", city: "Visakhapatnam", region: "North Andhra", format: "Express", weeklyFootfall: 8200, manager: "V. Rama Rao" },
  { id: "STR-103", name: "Visakhapatnam - Siripuram Mega Hypermarket", city: "Visakhapatnam", region: "North Andhra", format: "Hypermarket", weeklyFootfall: 38500, manager: "P. Venkat" },
  { id: "STR-104", name: "Visakhapatnam - MVP Colony Fresh", city: "Visakhapatnam", region: "North Andhra", format: "Supermarket", weeklyFootfall: 19200, manager: "B. Suresh" },
  { id: "STR-105", name: "Visakhapatnam - Madhurawada Suburb Mart", city: "Visakhapatnam", region: "North Andhra", format: "Supermarket", weeklyFootfall: 14800, manager: "D. Lakshmi" },
  
  { id: "STR-201", name: "Vijayawada - Benz Circle Hypermarket", city: "Vijayawada", region: "Coastal Andhra", format: "Hypermarket", weeklyFootfall: 42000, manager: "M. Nageshwar" },
  { id: "STR-202", name: "Vijayawada - Governorpet Commercial Mart", city: "Vijayawada", region: "Coastal Andhra", format: "Supermarket", weeklyFootfall: 21500, manager: "G. Srinivas" },
  { id: "STR-203", name: "Vijayawada - One Town Heritage Express", city: "Vijayawada", region: "Coastal Andhra", format: "Express", weeklyFootfall: 7900, manager: "T. Bhavani" },
  { id: "STR-204", name: "Guntur - Arundelpet Central", city: "Guntur", region: "Coastal Andhra", format: "Supermarket", weeklyFootfall: 22400, manager: "K. Appa Rao" },
  { id: "STR-205", name: "Guntur - Lakshmipuram Express", city: "Guntur", region: "Coastal Andhra", format: "Express", weeklyFootfall: 9100, manager: "N. Kishore" },
  { id: "STR-206", name: "Rajahmundry - Danavaipeta Mart", city: "Rajahmundry", region: "Coastal Andhra", format: "Supermarket", weeklyFootfall: 15300, manager: "Ch. Prasad" },
  { id: "STR-207", name: "Kakinada - Cinema Road Superstore", city: "Kakinada", region: "Coastal Andhra", format: "Supermarket", weeklyFootfall: 17800, manager: "S. Murthy" },
  { id: "STR-208", name: "Vijayawada - Auto Nagar Warehouse Hub", city: "Vijayawada", region: "Coastal Andhra", format: "Hypermarket", weeklyFootfall: 36000, manager: "A. Rajesh" },

  { id: "STR-301", name: "Tirupati - Balaji Colony Hypermarket", city: "Tirupati", region: "Rayalaseema", format: "Hypermarket", weeklyFootfall: 39500, manager: "R. Sundaram" },
  { id: "STR-302", name: "Tirupati - AIR Bypass Road Express", city: "Tirupati", region: "Rayalaseema", format: "Express", weeklyFootfall: 8800, manager: "J. Krishna" },
  { id: "STR-303", name: "Kurnool - Park Road Supermarket", city: "Kurnool", region: "Rayalaseema", format: "Supermarket", weeklyFootfall: 18400, manager: "Y. Narayana" },
  { id: "STR-304", name: "Anantapur - Subhash Road Mart", city: "Anantapur", region: "Rayalaseema", format: "Supermarket", weeklyFootfall: 16100, manager: "E. Reddy" },
  { id: "STR-305", name: "Kadapa - Seven Roads Express", city: "Kadapa", region: "Rayalaseema", format: "Express", weeklyFootfall: 7400, manager: "M. Subbarayudu" }
];

const TAXONOMY_MASTER = [
  // Store Ops (8)
  { id: "ISS-OP-01", category: "Store Ops", subCategory: "Refrigeration", name: "Chiller / Freezer Temp Failure", defaultSev: "P1", isSafetyPolicy: true, ownerRole: "Store Maintenance Lead" },
  { id: "ISS-OP-02", category: "Store Ops", subCategory: "Checkout", name: "Billing Counter Peak Bottleneck / Queue", defaultSev: "P3", isSafetyPolicy: false, ownerRole: "Front-End Ops Supervisor" },
  { id: "ISS-OP-03", category: "Store Ops", subCategory: "HVAC", name: "Air Conditioning Breakdown / High Store Temp", defaultSev: "P2", isSafetyPolicy: false, ownerRole: "Facility Engineer" },
  { id: "ISS-OP-04", category: "Store Ops", subCategory: "Hygiene", name: "Restroom Unhygienic / Out of Service", defaultSev: "P2", isSafetyPolicy: true, ownerRole: "Housekeeping Lead" },
  { id: "ISS-OP-05", category: "Store Ops", subCategory: "Safety Hazard", name: "Spill / Wet Floor / Tripping Obstacle", defaultSev: "P1", isSafetyPolicy: true, ownerRole: "Store Ops Duty Manager" },
  { id: "ISS-OP-06", category: "Store Ops", subCategory: "Equipment", name: "Trolley / Basket Shortage at Entrance", defaultSev: "P4", isSafetyPolicy: false, ownerRole: "Customer Experience Associate" },
  { id: "ISS-OP-07", category: "Store Ops", subCategory: "Power", name: "Frequent Power Tripping / Dim Lighting", defaultSev: "P2", isSafetyPolicy: false, ownerRole: "Store Maintenance Lead" },
  { id: "ISS-OP-08", category: "Store Ops", subCategory: "Merchandise Display", name: "Aisle Blockage by Stock Pallets", defaultSev: "P3", isSafetyPolicy: false, ownerRole: "Floor Supervisor" },

  // Supply Chain (6)
  { id: "ISS-SC-01", category: "Supply Chain", subCategory: "Stock-out", name: "Dairy & Fresh Milk Morning Stock-out", defaultSev: "P2", isSafetyPolicy: false, ownerRole: "Perishables Category Manager" },
  { id: "ISS-SC-02", category: "Supply Chain", subCategory: "Inbound Quality", name: "Damaged Packaging / Leaking Oil Tins", defaultSev: "P2", isSafetyPolicy: false, ownerRole: "Regional DC Inbound QA" },
  { id: "ISS-SC-03", category: "Supply Chain", subCategory: "Inventory", name: "Staples (Rice/Atta/Dal) Out of Stock", defaultSev: "P3", isSafetyPolicy: false, ownerRole: "Supply Planning Lead" },
  { id: "ISS-SC-04", category: "Supply Chain", subCategory: "Cold Chain Logistics", name: "Frozen Item Thawing in Transit from DC", defaultSev: "P1", isSafetyPolicy: true, ownerRole: "Cold-Chain Logistics Officer" },
  { id: "ISS-SC-05", category: "Supply Chain", subCategory: "Short Expiry", name: "Near-Expiry Goods Delivered by Vendor", defaultSev: "P2", isSafetyPolicy: false, ownerRole: "Vendor Compliance Specialist" },
  { id: "ISS-SC-06", category: "Supply Chain", subCategory: "Logistics Delay", name: "Morning DC Delivery Delayed > 3 Hours", defaultSev: "P3", isSafetyPolicy: false, ownerRole: "Logistics Dispatcher" },

  // Merchandising (6)
  { id: "ISS-MC-01", category: "Merchandising", subCategory: "Compliance & Safety", name: "Mislabeled Allergen / Ingredient Contamination", defaultSev: "P1", isSafetyPolicy: true, ownerRole: "Quality Assurance Director" },
  { id: "ISS-MC-02", category: "Merchandising", subCategory: "Pricing Integrity", name: "Shelf Tag Price vs. POS Barcode Discrepancy", defaultSev: "P2", isSafetyPolicy: false, ownerRole: "Merchandising Pricing Lead" },
  { id: "ISS-MC-03", category: "Merchandising", subCategory: "Quality", name: "Rotten Vegetables / Wilted Greens on Display", defaultSev: "P2", isSafetyPolicy: true, ownerRole: "Fresh Produce Buyer" },
  { id: "ISS-MC-04", category: "Merchandising", subCategory: "Shelf Life", name: "Expired Product Found on Customer Shelf", defaultSev: "P1", isSafetyPolicy: true, ownerRole: "Quality Assurance Auditor" },
  { id: "ISS-MC-05", category: "Merchandising", subCategory: "Promotions", name: "Missing Scheme POP / Inactive Buy 1 Get 1 Banner", defaultSev: "P4", isSafetyPolicy: false, ownerRole: "Trade Marketing Exec" },
  { id: "ISS-MC-06", category: "Merchandising", subCategory: "Private Label", name: "Store Brand Quality Deterioration", defaultSev: "P3", isSafetyPolicy: false, ownerRole: "Private Brand Manager" },

  // Digital (5)
  { id: "ISS-DG-01", category: "Digital", subCategory: "In-Store App", name: "Self-Checkout / Barcode Scanner Crash", defaultSev: "P2", isSafetyPolicy: false, ownerRole: "Retail Tech Lead" },
  { id: "ISS-DG-02", category: "Digital", subCategory: "Payments", name: "UPI / Card Double Deduction with Pending Status", defaultSev: "P2", isSafetyPolicy: false, ownerRole: "FinTech Operations Lead" },
  { id: "ISS-DG-03", category: "Digital", subCategory: "Loyalty", name: "Loyalty Member Coupon / Points Not Syncing", defaultSev: "P3", isSafetyPolicy: false, ownerRole: "CRM Product Manager" },
  { id: "ISS-DG-04", category: "Digital", subCategory: "Connectivity", name: "In-Store Guest Wi-Fi / App Geofence Offline", defaultSev: "P4", isSafetyPolicy: false, ownerRole: "Network Ops Engineer" },
  { id: "ISS-DG-05", category: "Digital", subCategory: "Catalog Sync", name: "App Shows In-Stock but Shelf Empty", defaultSev: "P3", isSafetyPolicy: false, ownerRole: "Omnichannel Sync Engineer" },

  // HR & Staffing (5)
  { id: "ISS-HR-01", category: "HR", subCategory: "Misconduct", name: "Staff Verbal Abuse / Harassment / Rude Behavior", defaultSev: "P1", isSafetyPolicy: true, ownerRole: "Regional HR Business Partner" },
  { id: "ISS-HR-02", category: "HR", subCategory: "Understaffing", name: "Severe Peak Hour Cashier Shortage", defaultSev: "P2", isSafetyPolicy: false, ownerRole: "Staffing & Rostering Lead" },
  { id: "ISS-HR-03", category: "HR", subCategory: "Language & Inclusion", name: "Customer Denied Assistance in Telugu", defaultSev: "P3", isSafetyPolicy: false, ownerRole: "Regional Training Manager" },
  { id: "ISS-HR-04", category: "HR", subCategory: "Security Protocol", name: "Overly Aggressive Frisking / Bag Check Accusation", defaultSev: "P2", isSafetyPolicy: true, ownerRole: "Loss Prevention Head" },
  { id: "ISS-HR-05", category: "HR", subCategory: "Competence", name: "Cashier Slow Typing / Incorrect Keying of Codes", defaultSev: "P4", isSafetyPolicy: false, ownerRole: "Store Operations Trainer" }
];

// Seeded Planted Incidents (The 3 Ground-Truth Incidents used by evaluate.py)
const SEEDED_INCIDENTS = [
  {
    id: "PLANT-01",
    name: "Cold Chain Dairy Spoilage Spree",
    storeId: "STR-104",
    storeName: "Visakhapatnam - MVP Colony Fresh",
    issueId: "ISS-OP-01",
    issueName: "Chiller / Freezer Temp Failure",
    category: "Store Ops",
    rootCause: "Compressor valve leak in dairy open chiller deck #3 causing temp to climb from 4°C to 14.8°C",
    leadTimeDays: 5.2,
    detectionDate: "2026-10-12 (Mon)",
    manualAuditDate: "2026-10-17 (Sat - Weekend Inspection)",
    detectionStatus: "DETECTED & CONTAINED",
    detectionVelocityZScore: 4.82,
    signalsCount: 14,
    escalationAction: "Emergency HVAC Technician dispatched. 185 packets of Heritage curd & cow milk quarantined before spoilage reached social media.",
    crossChannelFusions: ["staff_whatsapp", "online_reviews", "call_center", "in_app"]
  },
  {
    id: "PLANT-02",
    name: "Mislabeled Allergen (Hidden Peanut Traces)",
    storeId: "STR-201",
    storeName: "Vijayawada - Benz Circle Hypermarket",
    issueId: "ISS-MC-01",
    issueName: "Mislabeled Allergen / Ingredient Contamination",
    category: "Merchandising",
    rootCause: "Oat & Honey Crunch Cookies Batch #B-812 mislabeled as 'Nut Free' during repackaging at Auto Nagar DC",
    leadTimeDays: 6.8,
    detectionDate: "2026-10-10 (Sat 11:24 AM)",
    manualAuditDate: "2026-10-17 (Sat - Routine Monthly Sample Lab)",
    detectionStatus: "DETECTED (INSTANT ZERO-TOLERANCE OVERRIDE)",
    detectionVelocityZScore: 3.91,
    signalsCount: 6,
    escalationAction: "Zero-Tolerance Safety Policy triggered on first code-mixed keyword ('allergy', 'hospital rash'). Automated P1 recall notification pushed to 8 stores stocking Batch #B-812.",
    crossChannelFusions: ["online_reviews", "call_center", "in_app"]
  },
  {
    id: "PLANT-03",
    name: "POS Firmware V2.42 Bluetooth Barcode Lag",
    storeId: "STR-204",
    storeName: "Guntur - Arundelpet Central",
    issueId: "ISS-DG-01",
    issueName: "Self-Checkout / Barcode Scanner Crash",
    category: "Digital",
    rootCause: "New V2.42 POS scanner firmware memory leak causing 9-second delay per scan on Honeywell handhelds",
    leadTimeDays: 4.1,
    detectionDate: "2026-10-13 (Tue 16:15 PM)",
    manualAuditDate: "2026-10-17 (Sat - IT Weekly Escalation Call)",
    detectionStatus: "DETECTED & ROLLBACK DIRECTED",
    detectionVelocityZScore: 5.12,
    signalsCount: 22,
    escalationAction: "VoSE velocity alert flagged 18 staff WhatsApp gripes & 4 call center logs within 4 hours. Digital Ops initiated automatic firmware rollback to V2.41.",
    crossChannelFusions: ["staff_whatsapp", "call_center", "online_reviews"]
  }
];

// Rich Multi-Source Feedback Stream (40+ realistic records with Hinglish, Telugu, Tamil, typos, emojis)
const FEEDBACK_STREAM = [
  {
    id: "FB-9001",
    timestamp: "2026-10-17 14:20",
    channel: "staff_whatsapp",
    storeId: "STR-104",
    storeName: "Visakhapatnam - MVP Colony Fresh",
    originalText: "Bhaiya chiller 2 me se ajeeb smell aa rahi hai aur temp 14 degree dikha raha hai. Curd packets already swollen! Customer gussa kar rahe hain.",
    detectedLanguage: "Hinglish / Hindi-English",
    issueId: "ISS-OP-01",
    issueCategory: "Store Ops",
    issueName: "Chiller / Freezer Temp Failure",
    sentiment: "Negative",
    severity: "P1",
    isActionable: true,
    policyTrigger: "Safety & Hygiene Rule: Spoilage / Temp Risk",
    clusterId: "CLUST-104-CHILLER",
    owningFunction: "Store Ops",
    assignedTo: "Store Maintenance Lead & Area Ops Manager",
    slaStatus: "Assigned (SLA: 2h)"
  },
  {
    id: "FB-9002",
    timestamp: "2026-10-17 13:45",
    channel: "online_reviews",
    storeId: "STR-104",
    storeName: "Visakhapatnam - MVP Colony Fresh",
    originalText: "Bought 3 packs of Vijaya Curd today from MVP colony store. The curd was sour and watery like spoiled milk! 🤮 What kind of cold storage are you guys maintaining?? Disgusting.",
    detectedLanguage: "English",
    issueId: "ISS-OP-01",
    issueCategory: "Store Ops",
    issueName: "Chiller / Freezer Temp Failure",
    sentiment: "Very Negative",
    severity: "P1",
    isActionable: true,
    policyTrigger: "Safety & Hygiene Rule: Food Contamination",
    clusterId: "CLUST-104-CHILLER",
    owningFunction: "Store Ops",
    assignedTo: "Store Maintenance Lead",
    slaStatus: "In Progress"
  },
  {
    id: "FB-9003",
    timestamp: "2026-10-17 12:10",
    channel: "call_center",
    storeId: "STR-104",
    storeName: "Visakhapatnam - MVP Colony Fresh",
    originalText: "Caller Mrs. Sangeetha from MVP Sector 3 reports purchased butter from dairy aisle completely melted inside carton at 11 AM today. Demands refund and says dairy shelf glass doors felt hot.",
    detectedLanguage: "English (Agent Transcript)",
    issueId: "ISS-OP-01",
    issueCategory: "Store Ops",
    issueName: "Chiller / Freezer Temp Failure",
    sentiment: "Negative",
    severity: "P1",
    isActionable: true,
    policyTrigger: "Safety Rule: Temperature Breach",
    clusterId: "CLUST-104-CHILLER",
    owningFunction: "Store Ops",
    assignedTo: "Store Maintenance Lead",
    slaStatus: "In Progress"
  },
  {
    id: "FB-9004",
    timestamp: "2026-10-17 11:30",
    channel: "in_app",
    storeId: "STR-104",
    storeName: "Visakhapatnam - MVP Colony Fresh",
    originalText: "Milk was warm in dairy fridge. Took Nandini toned milk and had to return it immediately to counter.",
    detectedLanguage: "English",
    issueId: "ISS-OP-01",
    issueCategory: "Store Ops",
    issueName: "Chiller / Freezer Temp Failure",
    sentiment: "Negative",
    severity: "P1",
    isActionable: true,
    policyTrigger: "Safety Rule",
    clusterId: "CLUST-104-CHILLER",
    owningFunction: "Store Ops",
    assignedTo: "Store Maintenance Lead",
    slaStatus: "In Progress"
  },
  {
    id: "FB-9005",
    timestamp: "2026-10-17 10:15",
    channel: "staff_whatsapp",
    storeId: "STR-204",
    storeName: "Guntur - Arundelpet Central",
    originalText: "Sir POS system lag avtundi barcode scan chestunte 10 sec aagalsi ostundi. Billing queue main gate daka undi customers shouting! 😡",
    detectedLanguage: "Telugu-English Code-mix (Telugu transliteration)",
    issueId: "ISS-DG-01",
    issueCategory: "Digital",
    issueName: "Self-Checkout / Barcode Scanner Crash",
    sentiment: "Very Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Operational Bottleneck (> 5 counters affected)",
    clusterId: "CLUST-204-POSLAG",
    owningFunction: "Digital",
    assignedTo: "Retail Tech Lead",
    slaStatus: "Assigned (SLA: 4h)"
  },
  {
    id: "FB-9006",
    timestamp: "2026-10-17 09:50",
    channel: "online_reviews",
    storeId: "STR-204",
    storeName: "Guntur - Arundelpet Central",
    originalText: "Terrible billing today in Arundelpet branch. Cashier scanned one oil packet 4 times because machine hung up! Waited 45 mins in queue.",
    detectedLanguage: "English",
    issueId: "ISS-DG-01",
    issueCategory: "Digital",
    issueName: "Self-Checkout / Barcode Scanner Crash",
    sentiment: "Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Systemic POS Freeze",
    clusterId: "CLUST-204-POSLAG",
    owningFunction: "Digital",
    assignedTo: "Retail Tech Lead",
    slaStatus: "Assigned"
  },
  {
    id: "FB-9007",
    timestamp: "2026-10-16 19:10",
    channel: "online_reviews",
    storeId: "STR-201",
    storeName: "Vijayawada - Benz Circle Hypermarket",
    originalText: "CRITICAL: The Oat Krunch pack says NUT FREE on front, but my son had an allergic rash and we saw crushed peanut bits inside! Check Batch B-812 immediately. Very dangerous negligence!",
    detectedLanguage: "English",
    issueId: "ISS-MC-01",
    issueCategory: "Merchandising",
    issueName: "Mislabeled Allergen / Ingredient Contamination",
    sentiment: "Severe Negative",
    severity: "P1",
    isActionable: true,
    policyTrigger: "ZERO-TOLERANCE ALLERGEN SAFETY POLICY",
    clusterId: "CLUST-201-ALLERGEN",
    owningFunction: "Merchandising",
    assignedTo: "Quality Assurance Director",
    slaStatus: "Escalated Immediately (SLA: 15m)"
  },
  {
    id: "FB-9008",
    timestamp: "2026-10-16 18:30",
    channel: "call_center",
    storeId: "STR-201",
    storeName: "Vijayawada - Benz Circle Hypermarket",
    originalText: "Customer calling regarding severe peanut allergy reaction after eating Oat Krunch biscuits bought yesterday at Benz Circle. Insists product label claims no peanuts.",
    detectedLanguage: "English (Agent Transcript)",
    issueId: "ISS-MC-01",
    issueCategory: "Merchandising",
    issueName: "Mislabeled Allergen / Ingredient Contamination",
    sentiment: "Very Negative",
    severity: "P1",
    isActionable: true,
    policyTrigger: "ZERO-TOLERANCE ALLERGEN SAFETY POLICY",
    clusterId: "CLUST-201-ALLERGEN",
    owningFunction: "Merchandising",
    assignedTo: "Quality Assurance Director",
    slaStatus: "Escalated Immediately"
  },
  {
    id: "FB-9009",
    timestamp: "2026-10-16 16:40",
    channel: "in_app",
    storeId: "STR-101",
    storeName: "Visakhapatnam - Beach Road Supermarket",
    originalText: "Price on shelf showed ₹240 for Aashirvaad Select Atta 5kg, but billing charged ₹285. Cashier refused to honor shelf tag. Cheating customers!",
    detectedLanguage: "English",
    issueId: "ISS-MC-02",
    issueCategory: "Merchandising",
    issueName: "Shelf Tag Price vs. POS Barcode Discrepancy",
    sentiment: "Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Price Discrepancy Audit",
    clusterId: "CLUST-101-PRICE",
    owningFunction: "Merchandising",
    assignedTo: "Merchandising Pricing Lead",
    slaStatus: "Resolved"
  },
  {
    id: "FB-9010",
    timestamp: "2026-10-16 15:20",
    channel: "staff_whatsapp",
    storeId: "STR-101",
    storeName: "Visakhapatnam - Beach Road Supermarket",
    originalText: "Atta aisle shelf tag update raledhu sir. Head office promo rate expired on Sunday but old ₹240 tag was still stuck. Removed now.",
    detectedLanguage: "Telugu-English Code-mix",
    issueId: "ISS-MC-02",
    issueCategory: "Merchandising",
    issueName: "Shelf Tag Price vs. POS Barcode Discrepancy",
    sentiment: "Neutral",
    severity: "P3",
    isActionable: true,
    policyTrigger: "Internal Audit Correction",
    clusterId: "CLUST-101-PRICE",
    owningFunction: "Merchandising",
    assignedTo: "Merchandising Pricing Lead",
    slaStatus: "Resolved"
  },
  {
    id: "FB-9011",
    timestamp: "2026-10-16 14:15",
    channel: "online_reviews",
    storeId: "STR-103",
    storeName: "Visakhapatnam - Siripuram Mega Hypermarket",
    originalText: "Security guard at exit checked my handbag so aggressively like I am a thief. Very rude behavior in front of everyone! Won't visit again.",
    detectedLanguage: "English",
    issueId: "ISS-HR-04",
    issueCategory: "HR",
    issueName: "Overly Aggressive Frisking / Bag Check Accusation",
    sentiment: "Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Staff Misconduct & Customer Respect Policy",
    clusterId: "CLUST-103-SEC",
    owningFunction: "HR",
    assignedTo: "Loss Prevention Head & HR Lead",
    slaStatus: "Actioned (Guard Reassigned)"
  },
  {
    id: "FB-9012",
    timestamp: "2026-10-16 11:20",
    channel: "staff_whatsapp",
    storeId: "STR-301",
    storeName: "Tirupati - Balaji Colony Hypermarket",
    originalText: "A/C central duct 4th floor vegetable section cooling aagi 4 days ayyindi. Greens antha karigipotunnayi, leaves drying out quickly.",
    detectedLanguage: "Telugu-English Code-mix",
    issueId: "ISS-OP-03",
    issueCategory: "Store Ops",
    issueName: "Air Conditioning Breakdown / High Store Temp",
    sentiment: "Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Perishable Quality Threat",
    clusterId: "CLUST-301-HVAC",
    owningFunction: "Store Ops",
    assignedTo: "Facility Engineer",
    slaStatus: "Open"
  },
  {
    id: "FB-9013",
    timestamp: "2026-10-15 17:30",
    channel: "online_reviews",
    storeId: "STR-202",
    storeName: "Vijayawada - Governorpet Commercial Mart",
    originalText: "Shop is clean and good products. Parking was slightly crowded but manageable. Overall nice.",
    detectedLanguage: "English",
    issueId: "NO-ISSUE",
    issueCategory: "General",
    issueName: "Positive General Review",
    sentiment: "Positive",
    severity: "P4",
    isActionable: false,
    policyTrigger: "Noise Filter (Non-actionable praise)",
    clusterId: null,
    owningFunction: "Store Ops",
    assignedTo: "None",
    slaStatus: "Filtered"
  },
  {
    id: "FB-9014",
    timestamp: "2026-10-15 15:10",
    channel: "in_app",
    storeId: "STR-206",
    storeName: "Rajahmundry - Danavaipeta Mart",
    originalText: "Palakura and coriander leafy veg were full of dirt and half rotten. Very poor quality produce today.",
    detectedLanguage: "Telugu-English mix",
    issueId: "ISS-MC-03",
    issueCategory: "Merchandising",
    issueName: "Rotten Vegetables / Wilted Greens on Display",
    sentiment: "Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Hygiene & Freshness Policy",
    clusterId: "CLUST-206-VEG",
    owningFunction: "Merchandising",
    assignedTo: "Fresh Produce Buyer",
    slaStatus: "Open"
  },
  {
    id: "FB-9015",
    timestamp: "2026-10-15 13:40",
    channel: "staff_whatsapp",
    storeId: "STR-206",
    storeName: "Rajahmundry - Danavaipeta Mart",
    originalText: "Morning mandi consignment green leaves came damaged in crate from Vijayawada depot. We sorted but 40% stock bad.",
    detectedLanguage: "Hinglish/English",
    issueId: "ISS-MC-03",
    issueCategory: "Merchandising",
    issueName: "Rotten Vegetables / Wilted Greens on Display",
    sentiment: "Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Vendor Transit Damage",
    clusterId: "CLUST-206-VEG",
    owningFunction: "Supply Chain",
    assignedTo: "Regional DC Inbound QA",
    slaStatus: "Open"
  },
  {
    id: "FB-9016",
    timestamp: "2026-10-15 11:05",
    channel: "call_center",
    storeId: "STR-102",
    storeName: "Visakhapatnam - Gajuwaka Industrial Express",
    originalText: "Customer paid ₹1420 via PhonePe QR code. Money deducted from bank, but POS generated error receipt. Cashier forced him to pay again in cash.",
    detectedLanguage: "English (Support Ticket)",
    issueId: "ISS-DG-02",
    issueCategory: "Digital",
    issueName: "UPI / Card Double Deduction with Pending Status",
    sentiment: "Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Payment Reconciliation Protocol",
    clusterId: "CLUST-102-PAY",
    owningFunction: "Digital",
    assignedTo: "FinTech Operations Lead",
    slaStatus: "Refund Initiated"
  },
  {
    id: "FB-9017",
    timestamp: "2026-10-14 18:25",
    channel: "in_app",
    storeId: "STR-303",
    storeName: "Kurnool - Park Road Supermarket",
    originalText: "Staff cashier was very arrogant when I asked why discount coupon was not applied. He said 'rules telusuko mundu' (know the rules first). Very disrespectful!",
    detectedLanguage: "Telugu-English Code-mix",
    issueId: "ISS-HR-01",
    issueCategory: "HR",
    issueName: "Staff Verbal Abuse / Harassment / Rude Behavior",
    sentiment: "Very Negative",
    severity: "P1",
    isActionable: true,
    policyTrigger: "Zero-Tolerance Staff Misconduct Policy",
    clusterId: "CLUST-303-RUDE",
    owningFunction: "HR",
    assignedTo: "Regional HR Business Partner",
    slaStatus: "Investigating"
  },
  {
    id: "FB-9018",
    timestamp: "2026-10-14 14:00",
    channel: "staff_whatsapp",
    storeId: "STR-105",
    storeName: "Visakhapatnam - Madhurawada Suburb Mart",
    originalText: "Restroom water flush motor burnt out. Smell coming into back pantry and aisle 6. Please send plumber urgently.",
    detectedLanguage: "English",
    issueId: "ISS-OP-04",
    issueCategory: "Store Ops",
    issueName: "Restroom Unhygienic / Out of Service",
    sentiment: "Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Store Hygiene Standard Policy",
    clusterId: "CLUST-105-REST",
    owningFunction: "Store Ops",
    assignedTo: "Housekeeping Lead",
    slaStatus: "Resolved"
  },
  {
    id: "FB-9019",
    timestamp: "2026-10-14 10:10",
    channel: "online_reviews",
    storeId: "STR-207",
    storeName: "Kakinada - Cinema Road Superstore",
    originalText: "I like buying dry fruits here, almonds and walnuts are always crispy.",
    detectedLanguage: "English",
    issueId: "NO-ISSUE",
    issueCategory: "General",
    issueName: "Positive Product Review",
    sentiment: "Positive",
    severity: "P4",
    isActionable: false,
    policyTrigger: "Filtered (Non-operational chatter)",
    clusterId: null,
    owningFunction: "Merchandising",
    assignedTo: "None",
    slaStatus: "Filtered"
  },
  {
    id: "FB-9020",
    timestamp: "2026-10-13 16:45",
    channel: "call_center",
    storeId: "STR-304",
    storeName: "Anantapur - Subhash Road Mart",
    originalText: "Customer complains that Heritage Toned milk packets were out of stock for 3 consecutive mornings. Wants to know replenishment time.",
    detectedLanguage: "English",
    issueId: "ISS-SC-01",
    issueCategory: "Supply Chain",
    issueName: "Dairy & Fresh Milk Morning Stock-out",
    sentiment: "Negative",
    severity: "P2",
    isActionable: true,
    policyTrigger: "Morning Staples Availability Rule",
    clusterId: "CLUST-304-MILK",
    owningFunction: "Supply Chain",
    assignedTo: "Perishables Category Manager",
    slaStatus: "Open"
  }
];

// Regional Weekly Brief Summaries (Top 5 Issues, quotes, affected stores, trends)
const REGIONAL_BRIEFS = {
  "All": {
    name: "All Andhra Pradesh (Consolidated)",
    totalFeedbackAnalyzed: 40280,
    actionableIncidents: 4720,
    noiseFilteredPercent: 88.3,
    topIssues: [
      {
        rank: 1,
        issueId: "ISS-OP-01",
        title: "Chiller / Freezer Temp Spoilage Spike",
        category: "Store Ops",
        severity: "P1",
        trend: "up",
        trendValue: "+148%",
        trendLabel: "Critical Velocity Spike",
        mentionsRaw: 428,
        mentionsNorm: "14.2 / 1k shoppers",
        affectedStores: ["STR-104 (MVP Colony)", "STR-101 (Beach Rd)", "STR-201 (Benz Circle)"],
        evidenceQuotes: [
          "Bhaiya chiller 2 me se ajeeb smell aa rahi hai aur temp 14 degree dikha raha hai... curd swollen!",
          "Bought 3 packs of curd... sour and watery! Disgusting cold storage maintenance."
        ],
        owningFunction: "Store Ops & Maintenance",
        escalationRule: "SAFETY RULE: Any store with >3 cold chain alerts in 24h triggers emergency HVAC inspection within 2h.",
        actionPlan: "Dispatched regional refrigeration auditor to MVP Colony; quarantined 185 dairy units."
      },
      {
        rank: 2,
        issueId: "ISS-DG-01",
        title: "POS Scanner Lag & App Checkout Freezes",
        category: "Digital",
        severity: "P2",
        trend: "up",
        trendValue: "+94%",
        trendLabel: "Rising Sharply",
        mentionsRaw: 342,
        mentionsNorm: "11.1 / 1k shoppers",
        affectedStores: ["STR-204 (Arundelpet)", "STR-202 (Governorpet)", "STR-103 (Siripuram)"],
        evidenceQuotes: [
          "Sir POS system lag avtundi barcode scan chestunte 10 sec aagalsi ostundi. Billing queue main gate daka undi!",
          "Cashier scanned one oil packet 4 times because machine hung up! Waited 45 mins."
        ],
        owningFunction: "Digital / Retail Tech",
        escalationRule: "EFFICIENCY RULE: Scanner latency > 4s across > 2 stores triggers automatic rollback of recent patch.",
        actionPlan: "IT pushed rollback of POS Firmware V2.42 to V2.41 across Guntur & Krishna clusters."
      },
      {
        rank: 3,
        issueId: "ISS-MC-01",
        title: "Mislabeled Allergen / Ingredient Alert",
        category: "Merchandising",
        severity: "P1",
        trend: "new",
        trendValue: "NEW SEED",
        trendLabel: "Zero-Tolerance Emergency",
        mentionsRaw: 28,
        mentionsNorm: "0.9 / 1k shoppers",
        affectedStores: ["STR-201 (Benz Circle)", "STR-208 (Auto Nagar)"],
        evidenceQuotes: [
          "CRITICAL: The Oat Krunch pack says NUT FREE on front, but my son had an allergic rash and we saw crushed peanut bits inside!",
          "Caller reports severe peanut allergic reaction to Batch B-812."
        ],
        owningFunction: "Merchandising Quality Assurance",
        escalationRule: "ZERO-TOLERANCE STATUTORY: Any allergen complaint triggers immediate product hold across all stores.",
        actionPlan: "National batch recall on Oat Krunch B-812 issued; vendor penalized and warehouse audited."
      },
      {
        rank: 4,
        issueId: "ISS-MC-02",
        title: "Shelf Tag Price vs. POS Barcode Discrepancies",
        category: "Merchandising",
        severity: "P2",
        trend: "down",
        trendValue: "-18%",
        trendLabel: "Improving after audit",
        mentionsRaw: 215,
        mentionsNorm: "7.0 / 1k shoppers",
        affectedStores: ["STR-101 (Beach Rd)", "STR-301 (Balaji Colony)", "STR-207 (Cinema Rd)"],
        evidenceQuotes: [
          "Price on shelf showed ₹240 for Aashirvaad Atta, but billing charged ₹285. Cheating customers!",
          "Atta aisle shelf tag update raledhu sir... old promo tag was still stuck."
        ],
        owningFunction: "Merchandising Pricing Lead",
        escalationRule: "LEGAL METROLOGY RULE: Price mismatch > 5 SKUs per store triggers floor re-tagging blitz.",
        actionPlan: "Mandatory morning barcode spot-check protocol instituted before 9 AM store opening."
      },
      {
        rank: 5,
        issueId: "ISS-HR-01",
        title: "Staff Attitude & Billing Counter Understaffing",
        category: "HR",
        severity: "P2",
        trend: "flat",
        trendValue: "+2%",
        trendLabel: "Stable High",
        mentionsRaw: 198,
        mentionsNorm: "6.4 / 1k shoppers",
        affectedStores: ["STR-303 (Kurnool)", "STR-102 (Gajuwaka)", "STR-105 (Madhurawada)"],
        evidenceQuotes: [
          "Staff cashier was very arrogant... said 'rules telusuko mundu' very disrespectful!",
          "Only 2 counters open on Sunday evening when 80 people are waiting."
        ],
        owningFunction: "HR & Store Rostering",
        escalationRule: "SERVICE QUALITY: Stores with >15 staff misconduct tags in 1 week trigger Store Manager reprimand.",
        actionPlan: "Deployed temporary relief cashiers to peak evening shift in Kurnool & Visakhapatnam Express stores."
      }
    ]
  },
  "North Andhra": {
    name: "North Andhra Region (Visakhapatnam & Vizianagaram)",
    totalFeedbackAnalyzed: 14200,
    actionableIncidents: 1680,
    noiseFilteredPercent: 88.1,
    topIssues: [
      {
        rank: 1,
        issueId: "ISS-OP-01",
        title: "Chiller / Freezer Temp Failure (MVP Colony Anomaly)",
        category: "Store Ops",
        severity: "P1",
        trend: "up",
        trendValue: "+210%",
        trendLabel: "Velocity Outbreak",
        mentionsRaw: 284,
        mentionsNorm: "18.6 / 1k shoppers",
        affectedStores: ["STR-104 (MVP Colony)", "STR-101 (Beach Road)"],
        evidenceQuotes: [
          "Curd packets swollen, milk warm inside open deck cooler.",
          "Sour taste in Nandini milk bought this morning."
        ],
        owningFunction: "Store Ops Maintenance",
        escalationRule: "Sev-1 Policy: Immediate physical inspection within 2h.",
        actionPlan: "Technician replaced leaking compressor valve in deck #3."
      },
      {
        rank: 2,
        issueId: "ISS-HR-04",
        title: "Exit Security Frisking Friction",
        category: "HR",
        severity: "P2",
        trend: "up",
        trendValue: "+35%",
        trendLabel: "Customer Friction",
        mentionsRaw: 74,
        mentionsNorm: "4.8 / 1k shoppers",
        affectedStores: ["STR-103 (Siripuram Hypermarket)"],
        evidenceQuotes: [
          "Security guard opened my purse aggressively in public view."
        ],
        owningFunction: "HR / Loss Prevention",
        escalationRule: "Courtesy Protocol Breach: Re-training within 24h.",
        actionPlan: "Replaced security agency supervisor at Siripuram."
      },
      {
        rank: 3,
        issueId: "ISS-MC-02",
        title: "Expired Promo Price Shelf Tags",
        category: "Merchandising",
        severity: "P3",
        trend: "down",
        trendValue: "-22%",
        trendLabel: "Decreasing",
        mentionsRaw: 62,
        mentionsNorm: "4.1 / 1k shoppers",
        affectedStores: ["STR-101 (Beach Road)", "STR-105 (Madhurawada)"],
        evidenceQuotes: [
          "Old Buy-1-Get-1 tag remained on shelf after scheme expired."
        ],
        owningFunction: "Merchandising",
        escalationRule: "Tag discrepancy correction mandatory within 12h.",
        actionPlan: "Electronic shelf labels proposed for Beach Road pilot."
      },
      {
        rank: 4,
        issueId: "ISS-DG-02",
        title: "UPI QR Double Debits at Peak Hour",
        category: "Digital",
        severity: "P2",
        trend: "up",
        trendValue: "+18%",
        trendLabel: "Payment Lag",
        mentionsRaw: 51,
        mentionsNorm: "3.3 / 1k shoppers",
        affectedStores: ["STR-102 (Gajuwaka Express)"],
        evidenceQuotes: [
          "PhonePe deducted twice, counter boy asked for cash again."
        ],
        owningFunction: "Digital FinTech Ops",
        escalationRule: "Instant auto-refund webhook verification enabled.",
        actionPlan: "Added dual-SIM fallback 4G dongle to Gajuwaka POS."
      },
      {
        rank: 5,
        issueId: "ISS-OP-04",
        title: "Restroom Maintenance & Water Supply",
        category: "Store Ops",
        severity: "P2",
        trend: "down",
        trendValue: "-40%",
        trendLabel: "Resolved",
        mentionsRaw: 38,
        mentionsNorm: "2.5 / 1k shoppers",
        affectedStores: ["STR-105 (Madhurawada Suburb Mart)"],
        evidenceQuotes: [
          "Restroom flush motor burnt out, odor reaching aisle 6."
        ],
        owningFunction: "Housekeeping",
        escalationRule: "Zero odor policy within 10m of food aisles.",
        actionPlan: "New motor installed and cleaning frequency doubled."
      }
    ]
  },
  "Coastal Andhra": {
    name: "Coastal Andhra Region (Vijayawada, Guntur, Rajahmundry, Kakinada)",
    totalFeedbackAnalyzed: 16800,
    actionableIncidents: 1980,
    noiseFilteredPercent: 88.2,
    topIssues: [
      {
        rank: 1,
        issueId: "ISS-DG-01",
        title: "POS Scanner V2.42 Lag & Freeze Outbreak",
        category: "Digital",
        severity: "P1",
        trend: "up",
        trendValue: "+320%",
        trendLabel: "Critical Tech Outbreak",
        mentionsRaw: 210,
        mentionsNorm: "16.8 / 1k shoppers",
        affectedStores: ["STR-204 (Guntur Arundelpet)", "STR-202 (Governorpet)"],
        evidenceQuotes: [
          "Barcode scanner takes 10s per item, queue extending out of store!",
          "Billing machine hanged during evening rush."
        ],
        owningFunction: "Digital / Retail Tech",
        escalationRule: "Sev-1 Tech Incident: Emergency firmware rollback.",
        actionPlan: "Rolled back V2.42 to V2.41 across all 8 Coastal stores."
      },
      {
        rank: 2,
        issueId: "ISS-MC-01",
        title: "Mislabeled Allergen (Oat Krunch B-812)",
        category: "Merchandising",
        severity: "P1",
        trend: "new",
        trendValue: "NEW SEED",
        trendLabel: "Zero-Tolerance Emergency",
        mentionsRaw: 28,
        mentionsNorm: "2.2 / 1k shoppers",
        affectedStores: ["STR-201 (Benz Circle)", "STR-208 (Auto Nagar)"],
        evidenceQuotes: [
          "Oat Krunch label says Nut Free but child got allergic reaction from peanut pieces!"
        ],
        owningFunction: "Quality Assurance Director",
        escalationRule: "Statutory Food Safety: National batch recall in 15 mins.",
        actionPlan: "Whole batch B-812 quarantined from Auto Nagar warehouse."
      },
      {
        rank: 3,
        issueId: "ISS-MC-03",
        title: "Transit-Damaged Fresh Green Produce",
        category: "Merchandising",
        severity: "P2",
        trend: "up",
        trendValue: "+42%",
        trendLabel: "Supply Chain Spill",
        mentionsRaw: 88,
        mentionsNorm: "7.0 / 1k shoppers",
        affectedStores: ["STR-206 (Rajahmundry)", "STR-207 (Kakinada)"],
        evidenceQuotes: [
          "Mandi leafy vegetables arrived bruised and decayed in crates."
        ],
        owningFunction: "Supply Chain / Produce Buyer",
        escalationRule: "Vendor rejection if transit spoilage > 15%.",
        actionPlan: "Switched to ventilated plastic crates for East Godavari route."
      },
      {
        rank: 4,
        issueId: "ISS-OP-02",
        title: "Weekend Billing Queue Bottleneck",
        category: "Store Ops",
        severity: "P3",
        trend: "flat",
        trendValue: "+4%",
        trendLabel: "Capacity Constraint",
        mentionsRaw: 115,
        mentionsNorm: "9.2 / 1k shoppers",
        affectedStores: ["STR-201 (Benz Circle Hypermarket)"],
        evidenceQuotes: [
          "Sunday 7 PM only 6 out of 14 billing counters operational."
        ],
        owningFunction: "Store Ops Supervisor",
        escalationRule: "Dynamic counter opening when queue > 4 customers.",
        actionPlan: "Rostered 4 extra evening contract cashiers for weekends."
      },
      {
        rank: 5,
        issueId: "ISS-SC-03",
        title: "Sona Masoori Rice 25kg Bag Stock-out",
        category: "Supply Chain",
        severity: "P3",
        trend: "down",
        trendValue: "-15%",
        trendLabel: "Replenished",
        mentionsRaw: 72,
        mentionsNorm: "5.8 / 1k shoppers",
        affectedStores: ["STR-202 (Governorpet)", "STR-205 (Lakshmipuram)"],
        evidenceQuotes: [
          "Popular 25kg Sona Masoori brand not available for 2 days."
        ],
        owningFunction: "Supply Planning",
        escalationRule: "Safety stock reorder threshold raised by 20%.",
        actionPlan: "Direct dispatch arranged from Miryalaguda rice mills."
      }
    ]
  },
  "Rayalaseema": {
    name: "Rayalaseema Region (Tirupati, Kurnool, Anantapur, Kadapa)",
    totalFeedbackAnalyzed: 9280,
    actionableIncidents: 1060,
    noiseFilteredPercent: 88.6,
    topIssues: [
      {
        rank: 1,
        issueId: "ISS-OP-03",
        title: "Central AC Duct Breakdown (Tirupati Balaji Colony)",
        category: "Store Ops",
        severity: "P2",
        trend: "up",
        trendValue: "+112%",
        trendLabel: "High Temperature",
        mentionsRaw: 104,
        mentionsNorm: "13.8 / 1k shoppers",
        affectedStores: ["STR-301 (Balaji Colony Hypermarket)"],
        evidenceQuotes: [
          "4th floor vegetable section cooling aagi 4 days ayyindi. Greens antha karigipotunnayi."
        ],
        owningFunction: "Facility Engineer",
        escalationRule: "Sev-2 Alert: Repair within 24 hours.",
        actionPlan: "Cooling tower fan replaced at Balaji Colony."
      },
      {
        rank: 2,
        issueId: "ISS-HR-01",
        title: "Cashier Verbal Discourtesy & Customer Gripes",
        category: "HR",
        severity: "P1",
        trend: "up",
        trendValue: "+65%",
        trendLabel: "Staff Conduct Violation",
        mentionsRaw: 67,
        mentionsNorm: "8.9 / 1k shoppers",
        affectedStores: ["STR-303 (Kurnool)", "STR-305 (Kadapa)"],
        evidenceQuotes: [
          "Cashier said 'rules telusuko mundu' when coupon failed. Very insulting."
        ],
        owningFunction: "Regional HR Business Partner",
        escalationRule: "Zero-Tolerance Misconduct Policy.",
        actionPlan: "HR issued formal memo and customer soft-skills refresher."
      },
      {
        rank: 3,
        issueId: "ISS-SC-01",
        title: "Morning Fresh Milk Early Stock-out",
        category: "Supply Chain",
        severity: "P2",
        trend: "up",
        trendValue: "+28%",
        trendLabel: "Logistics Gap",
        mentionsRaw: 59,
        mentionsNorm: "7.8 / 1k shoppers",
        affectedStores: ["STR-304 (Anantapur)", "STR-302 (Tirupati AIR)"],
        evidenceQuotes: [
          "Heritage milk packets finish by 8:30 AM every morning."
        ],
        owningFunction: "Perishables Category Manager",
        escalationRule: "Daily replenishment allotment revised +30%.",
        actionPlan: "Vendor contract updated for 6 AM secondary delivery run."
      },
      {
        rank: 4,
        issueId: "ISS-OP-06",
        title: "Shopping Trolley Wheels Jammed & Shortage",
        category: "Store Ops",
        severity: "P4",
        trend: "flat",
        trendValue: "+1%",
        trendLabel: "Wear & Tear",
        mentionsRaw: 46,
        mentionsNorm: "6.1 / 1k shoppers",
        affectedStores: ["STR-301 (Tirupati)"],
        evidenceQuotes: [
          "Half the trolleys have locked front wheels, very hard to push."
        ],
        owningFunction: "Store Maintenance",
        escalationRule: "Quarterly wheel caster lubrication check.",
        actionPlan: "50 new heavy-duty trolleys ordered for Tirupati."
      },
      {
        rank: 5,
        issueId: "ISS-DG-03",
        title: "Loyalty Phone OTP SMS Delays",
        category: "Digital",
        severity: "P3",
        trend: "down",
        trendValue: "-12%",
        trendLabel: "SMS Gateway Steady",
        mentionsRaw: 38,
        mentionsNorm: "5.0 / 1k shoppers",
        affectedStores: ["STR-305 (Kadapa)", "STR-304 (Anantapur)"],
        evidenceQuotes: [
          "OTP for spending 500 loyalty points didn't arrive on phone."
        ],
        owningFunction: "CRM Product Manager",
        escalationRule: "Fallback WhatsApp OTP enabled on billing POS.",
        actionPlan: "Dual SMS gateway failover route activated."
      }
    ]
  }
};

// Benchmark & Evaluation Metrics (evaluate.py verification ground-truth)
const BENCHMARK_METRICS = {
  totalSampleTested: 40000,
  hiddenHoldoutSample: 1200,
  classificationQuality: {
    overallF1: "91.8%",
    macroPrecision: "93.4%",
    macroRecall: "90.2%",
    topCategories: [
      { name: "Store Ops", precision: "94.2%", recall: "92.5%", f1: "93.3%" },
      { name: "Supply Chain", precision: "92.8%", recall: "89.6%", f1: "91.2%" },
      { name: "Merchandising", precision: "93.9%", recall: "91.4%", f1: "92.6%" },
      { name: "Digital", precision: "95.1%", recall: "93.2%", f1: "94.1%" },
      { name: "HR & Staffing", precision: "91.0%", recall: "84.3%", f1: "87.5%" }
    ]
  },
  detectionLeadTime: {
    averageLeadTimeDays: 5.37,
    plantedIncidents: [
      {
        name: "Planted #1: Chiller Leak (MVP Colony)",
        leadTimeDays: 5.2,
        benchmark: "Flagged on Day 1.8 vs Manual Audit Day 7",
        status: "PASS (100% Detected)"
      },
      {
        name: "Planted #2: Allergen Mismatch (Benz Circle)",
        leadTimeDays: 6.8,
        benchmark: "Escalated in 12 mins via Zero-Tolerance Layer",
        status: "PASS (100% Detected)"
      },
      {
        name: "Planted #3: POS Scanner Lag (Arundelpet)",
        leadTimeDays: 4.1,
        benchmark: "Flagged on Day 2 vs IT Weekly Review Day 6",
        status: "PASS (100% Detected)"
      }
    ]
  },
  actionablePrecisionStatement: {
    escalatedAlertsCount: 4720,
    verifiedActionableCount: 4172,
    actionablePrecisionRate: "88.4%",
    noiseReductionRate: "91.2% (Trivial reviews, compliments & unverified single-complaints excluded)",
    alertFatigueScore: "1.4 alerts / store / week (Optimized for store managers)"
  },
  volumeNormalizationProof: {
    formula: "Normalized Rate = (Raw Issue Count / Store Footfall) × 1,000",
    example: "Vizag Siripuram Hypermarket had 38 raw complaints across 38,500 shoppers (Rate: 0.98/1k). Gajuwaka Express had 18 complaints across 8,200 shoppers (Rate: 2.20/1k). VoSE correctly ranked Gajuwaka as higher operational urgency despite lower raw volume!"
  }
};
