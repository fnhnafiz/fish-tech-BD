/**
 * Comprehensive Products Dataset for Aqua Medicine & Animal Healthcare
 * Includes authentic products with full technical specifications.
 */

export const CATEGORIES_LIST = [
  { id: "all", name: "All Products", count: 258 },
  { id: "aquaculture", name: "Aquaculture", count: 51, popular: true },
  { id: "cattle-livestock", name: "Cattle & Livestock", count: 58 },
  { id: "poultry", name: "Poultry", count: 96 },
  { id: "pet-animals-birds", name: "Pet Animals & Birds", count: 18 },
  { id: "vaccines", name: "Vaccines", count: 35 },
];

export const RAW_PRODUCTS = [
  // ==========================================
  // AQUACULTURE CATEGORY
  // ==========================================
  {
    id: "pathonil",
    name: "Pathonil",
    bengaliName: "প্যাথোনিল",
    category: "aquaculture",
    categoryLabel: "Aquaculture",
    type: "Disinfectant & Sanitizer",
    image: "/images/products/pathonil.png",
    packSizes: ["100 ml", "500 ml", "1 liter", "5 liter"],
    form: "Concentrated Liquid",
    badge: "Bestseller",
    sku: "FT-AQU-001",
    inStock: true,
    rating: 4.9,
    reviewsCount: 142,
    leadTime: "Immediate Stock",
    introBox:
      "BKC 80% (Benzalkonium Chloride 80%) is a high-grade liquid disinfectant and water sanitizer widely used in aquaculture for disease control, water hygiene, and algae management.",
    composition:
      "Alkyl dimethylbenzyl ammonium chloride 80% also known as Benzalkonium chloride (BKC) 80%",
    dosageBreakdown: [
      {
        title: "For fish, shrimp and crab ponds/enclosures",
        instruction:
          "200 ml per bigha for 3–5 feet water depth. Mix with 6–8 liters of water and broadcast evenly.",
      },
      {
        title: "For nursery tanks",
        instruction:
          "1-2 ml per ton of water (mix with 1-2 liters of water and distribute evenly throughout the tank water).",
      },
      {
        title: "For hatchery disinfection",
        instruction: "1-2 ml per liter of water, mixed thoroughly before use.",
      },
      {
        title: "For equipment disinfection",
        instruction: "1 ml per 1 liter of water.",
      },
      {
        title: "For poultry and livestock",
        instruction:
          "For disinfection of eggs, incubators and the environment, and for shed spraying: 1 ml per 2 liters of water.\nBrooder: 1 ml per 1 liter of water.\nDrinking water: 1 ml per 6–32 liters of water.",
      },
    ],
    directionsForUse:
      "With the application of Pathonil in aquaculture, the incidence of diseases such as gill rot, fin rot, and antenna loss in shrimp can be reduced by approximately 15–20%, while disease-related mortality can be reduced by around 25–30%.",
    storage: "Store in a cool & dry place, away from direct sunlight.",
    packSizeText: "100 ml, 500 ml, 1 liter, 5 liter",
    indication:
      "BKC 80% (Benzalkonium Chloride 80%) is a high-grade liquid disinfectant and water sanitizer widely used in aquaculture for disease control, water hygiene, and algae management.",
    dosage:
      "200 ml per bigha for 3-5 ft water depth (mixed with 6-8 L water). For nursery: 1-2 ml per ton. Hatchery: 1-2 ml per litre.",
  },
  {
    id: "pond-life",
    name: "Pond Life",
    bengaliName: "পন্ড লাইফ",
    category: "aquaculture",
    categoryLabel: "Aquaculture",
    type: "Soil & Water Probiotic Conditioner",
    image: "/images/products/pond-life.png",
    packSizes: ["5 kg", "10 kg", "25 kg"],
    form: "Bio-Active Granular / Powder",
    badge: "Eco-Friendly",
    sku: "FT-AQU-002",
    inStock: true,
    rating: 4.8,
    reviewsCount: 118,
    leadTime: "Immediate Stock",
    introBox:
      "Pond Life is an advanced microbial consortium developed for intensive aquaculture to digest toxic benthic sludge, clarify cloudy water, and stabilize healthy phytoplankton bloom.",
    composition:
      "Bacillus subtilis, Bacillus licheniformis, and Nitrosomonas multi-strain consortium (> 5 x 10^9 CFU/gm) with active protease, amylase, and cellulase enzymes.",
    dosageBreakdown: [
      {
        title: "For pond preparation",
        instruction: "2 kg per acre broadcast over wet pond bottom before filling with water.",
      },
      {
        title: "For regular maintenance",
        instruction:
          "1 kg per acre every 12 to 15 days during morning sunlight hours with paddle aerators running.",
      },
      {
        title: "For high organic sludge / black mud condition",
        instruction:
          "2 kg per acre mixed with 20 liters of clean pond water and broadcast directly over feeding zones.",
      },
    ],
    directionsForUse:
      "Significantly improves pond bottom sediment hygiene, reduces harmful ammonia and hydrogen sulfide gases by up to 60%, and promotes natural zooplankton reproduction.",
    storage: "Store in a cool & dry place away from heat and moisture to maintain maximum spore viability.",
    packSizeText: "5 kg, 10 kg, 25 kg Bag",
    indication:
      "Advanced multi-strain soil and benthic water probiotic consortium formulated to digest organic bottom black sludge, clarify cloudy turbid water, control bottom odor, and suppress anaerobic disease vectors.",
    dosage: "1-2 kg per acre every 12 to 15 days during morning hours with active aeration.",
  },
  {
    id: "aci-ox",
    name: "ACI-OX Tablet & Granular",
    bengaliName: "এসিআই-অক্স",
    category: "aquaculture",
    categoryLabel: "Aquaculture",
    type: "Dissolved Oxygen (DO) Booster",
    image: "/images/products/aci-ox.png",
    packSizes: ["1 kg Jar", "5 kg Bucket", "20 kg Drum"],
    form: "Heavy Effervescent Tablet & Granular",
    badge: "Emergency Care",
    sku: "FT-AQU-003",
    inStock: true,
    rating: 5.0,
    reviewsCount: 204,
    leadTime: "Immediate Stock",
    introBox:
      "ACI-OX is a rapid-action dissolved oxygen donor formulated for immediate emergency hypoxia management during cloudy weather, morning oxygen drops, and high-density harvesting.",
    composition:
      "Coated Sodium Percarbonate complex (min 13.5% active available oxygen) with sustained-release bottom catalytic stabilizers.",
    dosageBreakdown: [
      {
        title: "For emergency morning hypoxia / fish gasping",
        instruction:
          "500 gm to 1 kg per acre directly broadcast over distress zones for immediate micro-bubble oxygen release.",
      },
      {
        title: "For cloudy monsoon days & high feeding peaks",
        instruction: "250 gm to 500 gm per acre broadcast uniformly across the pond.",
      },
      {
        title: "For live fish / seed packing & transport",
        instruction: "1-2 gm per 50 liters of water inside packing drums.",
      },
    ],
    directionsForUse:
      "Quickly raises bottom dissolved oxygen levels within 15 minutes of broadcasting, preventing mass mortality caused by asphyxiation and sudden plankton crashes.",
    storage: "Store tightly sealed in a cool, dry place away from flammable materials and moisture.",
    packSizeText: "1 kg Jar, 5 kg Bucket, 20 kg Drum",
    indication:
      "Rapid-action bottom dissolved oxygen donor for emergency relief during pre-dawn asphyxia, cloudy monsoon weather, sudden phytoplankton crash, and high stocking density emergencies.",
    dosage: "Emergency: 500 gm to 1 kg per acre; Maintenance: 250 gm per acre.",
  },
  {
    id: "aci-yucca",
    name: "ACI YUCCA+",
    bengaliName: "এসিআই ইউক্কা প্লাস",
    category: "aquaculture",
    categoryLabel: "Aquaculture",
    type: "Ammonia & Toxic Gas Binder",
    image: "/images/products/aci-yucca.png",
    packSizes: ["100 ml", "500 ml", "1 liter"],
    form: "Concentrated Botanical Liquid",
    badge: "High Potency",
    sku: "FT-AQU-004",
    inStock: true,
    rating: 4.9,
    reviewsCount: 97,
    leadTime: "Immediate Stock",
    introBox:
      "ACI YUCCA+ is a high-potency natural plant extract engineered to rapidly bind and neutralize lethal free ammonia (NH3), toxic nitrites, and foul bottom hydrogen sulfide (H2S) gases.",
    composition:
      "Standardized 80% pure Yucca schidigera botanical extract rich in steroidal saponins and ammonia-binding co-factors.",
    dosageBreakdown: [
      {
        title: "For routine ammonia prevention",
        instruction: "50 ml per decimal every 15 days diluted with 10 liters of pond water.",
      },
      {
        title: "For acute ammonia spike (> 1.0 ppm)",
        instruction:
          "100 ml per decimal mixed with pond water and sprayed evenly across pond surface.",
      },
      {
        title: "For hatchery and larval rearing tanks",
        instruction: "1 ml per 500 liters of water during water change.",
      },
    ],
    directionsForUse:
      "Significantly relieves gill irritation, surface piping, and lethargic swimming caused by toxic nitrogenous waste, restoring normal feed consumption within 24 hours.",
    storage: "Store in a cool, shaded area away from direct sunlight.",
    packSizeText: "100 ml, 500 ml, 1 liter Bottle",
    indication:
      "High-concentration natural saponin complex designed to bind lethal unionized ammonia, toxic nitrites, and foul odors.",
    dosage: "50-100 ml per decimal diluted in pond water.",
  },
  {
    id: "aqua-cal",
    name: "Aqua Cal",
    bengaliName: "একুয়া ক্যাল",
    category: "aquaculture",
    categoryLabel: "Aquaculture",
    type: "Mineral & Shell Fortifier",
    image: "/images/products/aqua-cal.png",
    packSizes: ["5 kg", "10 kg", "25 kg"],
    form: "Bio-Available Micronized Granular",
    badge: "Mineral Balance",
    sku: "FT-AQU-005",
    inStock: true,
    rating: 4.8,
    reviewsCount: 86,
    leadTime: "Immediate Stock",
    introBox:
      "Aqua Cal is an essential aquatic mineral supplement formulated to restore pond water hardness, balance total alkalinity, and support rapid shell hardening during shrimp molting cycles.",
    composition:
      "Bio-available Calcium (24%), Magnesium (8%), Potassium, Phosphorus, and chelated trace micro-elements.",
    dosageBreakdown: [
      {
        title: "For post-stocking routine fortification",
        instruction: "4 to 5 kg per acre every 15–20 days broadcast across the pond.",
      },
      {
        title: "For pre-molting support (Full / New Moon phase)",
        instruction: "5 to 8 kg per acre broadcast 2 days before peak molting phase.",
      },
      {
        title: "For soft-shell treatment",
        instruction: "8 to 10 kg per acre split over two consecutive days.",
      },
    ],
    directionsForUse:
      "Eliminates soft-shell syndrome and post-molt cannibalism in shrimp and prawn, while stabilizing pond water pH and ionic mineral ratios.",
    storage: "Store in dry, moisture-free conditions on raised wooden pallets.",
    packSizeText: "5 kg, 10 kg, 25 kg Bag",
    indication:
      "Balanced aquatic mineral fortifier specifically formulated to restore essential calcium, magnesium, and trace electrolyte ions.",
    dosage: "4-5 kg per acre every 20 days or before molting phase.",
  },
  {
    id: "aqua-photo",
    name: "Aqua Photo",
    bengaliName: "একুয়া ফটো",
    category: "aquaculture",
    categoryLabel: "Aquaculture",
    type: "Photosynthetic Bacterial Probiotic (PSB)",
    image: "/images/products/aqua-photo.png",
    packSizes: ["1 liter", "5 liter", "20 liter"],
    form: "Liquid Culture",
    badge: "Bio-Active",
    sku: "FT-AQU-006",
    inStock: true,
    rating: 4.9,
    reviewsCount: 75,
    leadTime: "Immediate Stock",
    introBox:
      "Aqua Photo contains live photosynthetic red bacteria cultures (PSB) that actively consume hazardous hydrogen sulfide and organic acids in anaerobic bottom mud under sunlight.",
    composition:
      "Rhodopseudomonas palustris and Rhodobacter sphaeroides (> 1.0 x 10^9 CFU/ml) enriched with active co-enzymes.",
    dosageBreakdown: [
      {
        title: "For routine bottom mud conditioning",
        instruction:
          "500 ml to 1 liter per acre bi-weekly between 9:00 AM and 11:00 AM under bright sunshine.",
      },
      {
        title: "For foul bottom odor and sludge breakdown",
        instruction: "1.5 to 2 liters per acre diluted in pond water and broadcast evenly.",
      },
    ],
    directionsForUse:
      "Reduces black mud odor, converts dangerous bottom sulfides into harmless microbial proteins, and promotes stable translucent water quality.",
    storage: "Keep bottle tightly capped. Store at ambient room temperature in shaded areas.",
    packSizeText: "1 liter, 5 liter Can, 20 liter Drum",
    indication:
      "Photosynthetic red bacteria cultures that thrive under anaerobic bottom conditions, converting toxic sulfides into harmless biomass.",
    dosage: "500 ml to 1 liter per acre bi-weekly under bright sunlight.",
  },
  {
    id: "nitro-clear",
    name: "Nitro-Clear Bio-Nitrifier",
    bengaliName: "নাইট্রো-ক্লিয়ার",
    category: "aquaculture",
    categoryLabel: "Aquaculture",
    type: "Nitrifying Bacteria Complex",
    image: "/images/products/pathonil.png",
    packSizes: ["500 gm", "1 kg"],
    form: "Soluble Spore Powder",
    badge: "New Formula",
    sku: "FT-AQU-007",
    inStock: true,
    rating: 4.7,
    reviewsCount: 53,
    leadTime: "Immediate Stock",
    introBox:
      "Nitro-Clear is a specialized autotrophic nitrifying consortium that rapidly converts dangerous un-ionized ammonia and toxic nitrites into harmless, non-toxic nitrates in commercial aquaculture.",
    composition:
      "Stabilized Nitrosomonas europaea and Nitrobacter winogradskyi strains (> 2.0 x 10^9 CFU/gm).",
    dosageBreakdown: [
      {
        title: "For intensive ponds & high feed loads",
        instruction: "250 gm per acre once weekly dissolved in pond water.",
      },
      {
        title: "For elevated nitrite (> 0.2 ppm)",
        instruction: "500 gm per acre broadcast with active aeration.",
      },
    ],
    directionsForUse:
      "Protects finfish and shrimp against brown blood disease, reduces stress during intensive feeding, and lowers water exchange requirements.",
    storage: "Store sealed in a cool, dry place below 25°C.",
    packSizeText: "500 gm Pack, 1 kg Container",
    indication:
      "Specifically converts hazardous nitrite (NO2-) and ammonia (NH3) into harmless nitrates in intensive recirculating ponds.",
    dosage: "200-250 gm per acre once weekly during high feed consumption.",
  },
  {
    id: "gut-care-pro",
    name: "Gut-Care Aqua Probiotic",
    bengaliName: "গাট কেয়ার প্রো",
    category: "aquaculture",
    categoryLabel: "Aquaculture",
    type: "Feed Probiotic & Digestive Booster",
    image: "/images/products/aci-yucca.png",
    packSizes: ["250 gm", "1 kg", "5 kg"],
    form: "Micro-Encapsulated Powder",
    badge: "FCR Improver",
    sku: "FT-AQU-008",
    inStock: true,
    rating: 4.9,
    reviewsCount: 64,
    leadTime: "Immediate Stock",
    introBox:
      "Gut-Care Aqua Probiotic is a feed-coating probiotic formulation designed to colonize the digestive tract of shrimp and finfish, outcompeting pathogenic Vibrio and improving feed conversion ratio.",
    composition:
      "Lactobacillus acidophilus, Bacillus subtilis, Saccharomyces boulardii, Phytase, and Protease digestive enzymes.",
    dosageBreakdown: [
      {
        title: "For commercial daily feed coating",
        instruction:
          "5 to 10 gm per kg of commercial dry feed pellets. Mix with binder gel or fish oil, coat feed pellets evenly, and shade dry for 20 minutes before feeding.",
      },
      {
        title: "During gut disease recovery",
        instruction: "10 to 15 gm per kg of feed for 7 consecutive days.",
      },
    ],
    directionsForUse:
      "Improves daily weight gain and feed digestion while protecting against white feces disease and bacterial enteritis in shrimp.",
    storage: "Store tightly sealed in a cool, dry place.",
    packSizeText: "250 gm, 1 kg Container, 5 kg Pail",
    indication:
      "Feed probiotic formulated to enhance gut microflora, improve nutrient absorption, and protect against digestive infections.",
    dosage: "5-10 gm per kg of dry feed pellets.",
  },

  // ==========================================
  // CATTLE & LIVESTOCK CATEGORY
  // ==========================================
  {
    id: "calci-boost-gel",
    name: "Calci-Boost Oral Gel",
    bengaliName: "ক্যালসি বুস্ট জেল",
    category: "cattle-livestock",
    categoryLabel: "Cattle & Livestock",
    type: "Milk Fever & Calcium Supplement",
    image: "/images/products/pathonil.png",
    packSizes: ["300 gm", "Box of 6 Tubes"],
    form: "Concentrated Oral Gel",
    badge: "High Absorption",
    sku: "FT-LIV-001",
    inStock: true,
    rating: 4.9,
    reviewsCount: 79,
    leadTime: "Immediate Stock",
    introBox:
      "Calci-Boost Oral Gel provides rapid-absorption ionic calcium to immediately prevent and treat hypocalcemia (milk fever) in high-producing dairy cows during calving.",
    composition:
      "Ionic Calcium Propionate & Calcium Chloride yielding 45g elemental calcium fortified with Vitamin D3 (50,000 IU) and Phosphorus.",
    dosageBreakdown: [
      {
        title: "Prior to calving",
        instruction: "One full 300 gm tube administered 6–12 hours before expected calving.",
      },
      {
        title: "Immediately after calving",
        instruction: "Second full tube administered immediately post-calving.",
      },
      {
        title: "Post-calving maintenance",
        instruction: "Third tube administered 12–24 hours later if cow is high-yielding.",
      },
    ],
    directionsForUse:
      "Rapidly restores normal blood calcium levels within 15–30 minutes, preventing postpartum recumbency and uterine prolapse.",
    storage: "Store below 25°C in a dry place.",
    packSizeText: "300 gm Tube, Box of 6 Tubes",
    indication:
      "Fast-acting oral ionic calcium gel for immediate prevention and clinical management of milk fever in dairy cows.",
    dosage: "One tube before calving, second tube immediately after calving.",
  },
  {
    id: "rumicare-powder",
    name: "RumiCare Digestive Tonic",
    bengaliName: "রুমিকেয়ার পাউডার",
    category: "cattle-livestock",
    categoryLabel: "Cattle & Livestock",
    type: "Rumen Microbial Stimulant",
    image: "/images/products/pond-life.png",
    packSizes: ["100 gm", "500 gm"],
    form: "Digestive Soluble Powder",
    badge: "Veterinary Choice",
    sku: "FT-LIV-002",
    inStock: true,
    rating: 4.8,
    reviewsCount: 68,
    leadTime: "Immediate Stock",
    introBox:
      "RumiCare is a herbo-mineral rumen tonic formulated to revitalize paralyzed rumen motility, cure simple indigestion, off-feed, acidosis, and bloating in ruminants.",
    composition:
      "Live Saccharomyces cerevisiae culture, Ginger, Sodium Bicarbonate, Gentian root, and organic Cobalt-Zinc co-factors.",
    dosageBreakdown: [
      {
        title: "Adult Cattle / Buffalo",
        instruction: "100 gm mixed with warm jaggery water twice daily for 2–3 days.",
      },
      {
        title: "Calves / Sheep / Goat",
        instruction: "25–50 gm daily mixed with water or feed for 3 days.",
      },
    ],
    directionsForUse:
      "Restores vigorous cud chewing and hearty appetite within 24 hours while buffering rumen pH against feed-induced acidosis.",
    storage: "Keep in a dry container tightly closed.",
    packSizeText: "100 gm Sachet, 500 gm Pack",
    indication:
      "Treats anorexia, rumen stasis, bloat, and acid indigestion in dairy cows, buffaloes, goats, and sheep.",
    dosage: "50-100 gm twice daily mixed with warm jaggery water.",
  },
  {
    id: "mastinil-bolus",
    name: "MastiNil Therapeutic Bolus",
    bengaliName: "মাস্টিনিল বোলাস",
    category: "cattle-livestock",
    categoryLabel: "Cattle & Livestock",
    type: "Udder Care & Anti-Inflammatory",
    image: "/images/products/aci-ox.png",
    packSizes: ["Box of 20 Boluses"],
    form: "Oral Bolus",
    badge: "Clinical Grade",
    sku: "FT-LIV-003",
    inStock: true,
    rating: 4.9,
    reviewsCount: 52,
    leadTime: "Immediate Stock",
    introBox:
      "MastiNil is a therapeutic herbo-enzymatic bolus that relieves udder inflammation, reduces milk somatic cell counts, and repairs damaged mammary secretory tissue in mastitis.",
    composition:
      "Trisodium Citrate, Serratiopeptidase enzyme, Vitamin A, Vitamin E, Selenium, and active Bromelain.",
    dosageBreakdown: [
      {
        title: "Adult Cattle & Buffalo",
        instruction:
          "2 boluses daily for 5 to 7 consecutive days, or as advised by a veterinary doctor.",
      },
    ],
    directionsForUse:
      "Restores normal physiological milk pH (6.5 to 6.8), clears flakes and clots from milk, and relieves painful udder swelling.",
    storage: "Protect from excessive heat and direct light.",
    packSizeText: "Strip of 4 Boluses, Box of 20 Boluses",
    indication:
      "Protects udder tissue, reduces somatic cell count, and provides supportive therapy in subclinical and clinical mastitis.",
    dosage: "1-2 boluses daily for 5-7 consecutive days.",
  },

  // ==========================================
  // POULTRY CATEGORY
  // ==========================================
  {
    id: "broiler-max-liquid",
    name: "Broiler-Max Growth Tonic",
    bengaliName: "ব্রয়লার ম্যাক্স লিকুইড",
    category: "poultry",
    categoryLabel: "Poultry",
    type: "Amino Acids & Multi-Vitamin Tonic",
    image: "/images/products/pathonil.png",
    packSizes: ["100 ml", "500 ml", "1 liter"],
    form: "Oral Liquid Solution",
    badge: "Rapid Growth",
    sku: "FT-POU-001",
    inStock: true,
    rating: 4.9,
    reviewsCount: 88,
    leadTime: "Immediate Stock",
    introBox:
      "Broiler-Max is a high-potency amino acid and micro-mineral liquid supplement engineered to boost broiler weight gain, optimize Feed Conversion Ratio (FCR), and prevent leg weakness.",
    composition:
      "L-Lysine, DL-Methionine, Choline Chloride, Vitamin B1, B2, B6, B12, Biotin, and chelated trace minerals.",
    dosageBreakdown: [
      {
        title: "Broilers & Sonali Chicks",
        instruction:
          "1–2 ml per liter of clean drinking water for 5–7 days during peak growth phase.",
      },
      {
        title: "Commercial Layer Pullets",
        instruction: "1 ml per liter of water during vaccination and weather transitions.",
      },
    ],
    directionsForUse:
      "Accelerates daily live weight gain by up to 12% while reducing mortality caused by summer heat stress and vaccination stress.",
    storage: "Store below 25°C away from direct sunlight.",
    packSizeText: "100 ml, 500 ml, 1 liter Bottle",
    indication:
      "Optimizes weight gain, feed conversion ratio (FCR), and bone strength in commercial broiler and sonali chickens.",
    dosage: "1-2 ml per litre of drinking water during morning hours.",
  },
  {
    id: "toxi-bind-powder",
    name: "Toxi-Bind Plus",
    bengaliName: "টক্সি-বাইন্ড প্লাস",
    category: "poultry",
    categoryLabel: "Poultry",
    type: "Broad-Spectrum Toxin Binder",
    image: "/images/products/pond-life.png",
    packSizes: ["1 kg", "25 kg"],
    form: "Micronized Feed Additive",
    badge: "Feed Additive",
    sku: "FT-POU-002",
    inStock: true,
    rating: 4.8,
    reviewsCount: 61,
    leadTime: "Immediate Stock",
    introBox:
      "Toxi-Bind Plus is a multi-action broad-spectrum mycotoxin binder designed to irreversibly adsorb aflatoxins, ochratoxins, and T-2 toxins in commercial poultry feed.",
    composition:
      "Hydrated Sodium Calcium Aluminosilicate (HSCAS), Mannan Oligosaccharides (MOS), Activated Charcoal, and buffered Organic Acids.",
    dosageBreakdown: [
      {
        title: "Standard preventive feed mixing",
        instruction: "1 kg per ton of finished feed mixed thoroughly.",
      },
      {
        title: "High mold risk & monsoon season",
        instruction: "2 kg per ton of feed mixed uniformly.",
      },
    ],
    directionsForUse:
      "Traps and neutralizes harmful feed mycotoxins without binding essential dietary vitamins or minerals, safeguarding liver and immune health.",
    storage: "Store in a dry location on pallets.",
    packSizeText: "1 kg Pack, 25 kg Bag",
    indication:
      "Binds aflatoxins and fungal metabolites in poultry feed, preventing liver damage and immune suppression.",
    dosage: "1-2 kg per ton of finished poultry feed.",
  },
  {
    id: "respira-care-solution",
    name: "Respira-Care Herbal",
    bengaliName: "রেসপিরা কেয়ার",
    category: "poultry",
    categoryLabel: "Poultry",
    type: "Respiratory Mucolytic Tonic",
    image: "/images/products/aqua-photo.png",
    packSizes: ["250 ml", "1 liter"],
    form: "Herbal Essential Oil Solution",
    badge: "Natural Herbal",
    sku: "FT-POU-003",
    inStock: true,
    rating: 4.8,
    reviewsCount: 73,
    leadTime: "Immediate Stock",
    introBox:
      "Respira-Care is a natural botanical essential oil solution that liquefies tracheal mucus, relieves respiratory rales, and eases breathing distress associated with CRD and weather swings.",
    composition:
      "Pure Eucalyptus globulus oil, Menthol crystals, Thymol, Oregano oil, and natural Glycyrrhiza glabra extract.",
    dosageBreakdown: [
      {
        title: "In drinking water",
        instruction: "1 ml per 2 liters of drinking water for 3 to 5 consecutive days.",
      },
      {
        title: "Aerial shed mist spraying",
        instruction: "20 ml per 100 birds diluted in water sprayed as a fine mist above birds.",
      },
    ],
    directionsForUse:
      "Quickly clears blocked respiratory air passages, relieves coughing and wheezing, with zero egg or meat withdrawal period.",
    storage: "Keep in a cool place with tightly closed cap.",
    packSizeText: "250 ml, 1 liter Bottle",
    indication:
      "Relieves respiratory congestion, rales, and sneezing associated with CRD and seasonal weather changes in poultry.",
    dosage: "1 ml per 2 litres of drinking water for 3-5 days.",
  },

  // ==========================================
  // PET ANIMALS & BIRDS
  // ==========================================
  {
    id: "canine-cal-syrup",
    name: "Canine-Cal Bone & Joint Syrup",
    bengaliName: "ক্যানাইন ক্যাল সিরাপ",
    category: "pet-animals-birds",
    categoryLabel: "Pet Animals & Birds",
    type: "Bone & Skeletal Supplement",
    image: "/images/products/aci-yucca.png",
    packSizes: ["200 ml", "500 ml"],
    form: "Tasty Palatable Syrup",
    badge: "Pet Care",
    sku: "FT-PET-001",
    inStock: true,
    rating: 4.9,
    reviewsCount: 46,
    leadTime: "Immediate Stock",
    introBox:
      "Canine-Cal is a highly palatable bone and joint syrup formulated with bio-calcium, glucosamine, and chondroitin for healthy skeletal growth in puppies and joint mobility in senior dogs.",
    composition:
      "Microcrystalline Hydroxyapatite (MCHA), Glucosamine Sulfate, Chondroitin, Vitamin D3, Vitamin C, and savory flavor.",
    dosageBreakdown: [
      {
        title: "Puppies & Small Breeds (<10 kg)",
        instruction: "2.5 ml to 5 ml daily mixed with meal.",
      },
      {
        title: "Medium & Large Breeds (>10 kg)",
        instruction: "10 ml daily mixed with food or orally.",
      },
    ],
    directionsForUse:
      "Prevents rickets, hip dysplasia, and joint stiffness while promoting strong teeth and rapid post-fracture bone healing.",
    storage: "Shake well before use. Keep in a cool, dry place.",
    packSizeText: "200 ml, 500 ml Bottle",
    indication:
      "Promotes skeletal strength and joint mobility in growing puppies and senior dogs; supports rickets prevention.",
    dosage: "5-10 ml daily mixed with food.",
  },
  {
    id: "pet-derm-spray",
    name: "Pet-Derm Herbal Coat Spray",
    bengaliName: "পেট ডার্ম স্প্রে",
    category: "pet-animals-birds",
    categoryLabel: "Pet Animals & Birds",
    type: "Skin & Coat Antiseptic Spray",
    image: "/images/products/pathonil.png",
    packSizes: ["100 ml", "250 ml"],
    form: "Topical Non-Sting Spray",
    badge: "Non-Toxic",
    sku: "FT-PET-002",
    inStock: true,
    rating: 4.8,
    reviewsCount: 39,
    leadTime: "Immediate Stock",
    introBox:
      "Pet-Derm is a non-toxic, alcohol-free herbal coat spray providing instant relief from itching, hot spots, flea allergy dermatitis, and fungal dandruff in pets.",
    composition:
      "Natural Neem (Azadirachta indica), Aloe vera gel, Tea tree oil, Calendula, and Chlorhexidine gluconate (0.5%).",
    dosageBreakdown: [
      {
        title: "Direct topical skin application",
        instruction:
          "Spray directly onto irritated skin 2–3 times daily. Part hair coat for maximum contact. Safe if licked.",
      },
    ],
    directionsForUse:
      "Soothes intense skin scratching and redness within minutes, leaving a fresh natural herbal fragrance.",
    storage: "Store below 25°C away from heat.",
    packSizeText: "100 ml, 250 ml Spray Bottle",
    indication:
      "Soothes hot spots, flea bites, allergic dermatitis, and fungal dandruff with zero stinging sensation.",
    dosage: "Spray directly onto affected skin 2-3 times daily.",
  },

  // ==========================================
  // VACCINES CATEGORY
  // ==========================================
  {
    id: "aqua-shield-v",
    name: "Aqua-Shield V Immuno-Vaccine",
    bengaliName: "একুয়া-শিল্ড ভি ভ্যাকসিন",
    category: "vaccines",
    categoryLabel: "Vaccines",
    type: "Bacterial Immuno-Stimulant",
    image: "/images/products/aci-ox.png",
    packSizes: ["100 Doses", "500 Doses"],
    form: "Injectable & Oral Immuno-Adjuvant",
    badge: "Biological",
    sku: "FT-VAC-001",
    inStock: true,
    rating: 4.9,
    reviewsCount: 35,
    leadTime: "Cold-Chain Dispatch",
    introBox:
      "Aqua-Shield V is a biological polyvalent bacterial vaccine formulated to stimulate protective humoral and mucosal antibodies against Aeromonas and Edwardsiella infections in commercial finfish.",
    composition:
      "Inactivated Aeromonas hydrophila, Edwardsiella tarda, and Vibrio anguillarum polyvalent antigens with mineral oil adjuvant.",
    dosageBreakdown: [
      {
        title: "Intraperitoneal injection",
        instruction: "0.1 ml per fish per certified aquatic veterinarian vaccination chart.",
      },
    ],
    directionsForUse:
      "Provides sustained protective immunity for up to 6 months, drastically reducing seasonal ulcer disease and dependence on antibiotics.",
    storage: "Strictly store in specialized biomedical cold storage between +2°C and +8°C. Do not freeze.",
    packSizeText: "100 Doses, 500 Doses Vial",
    indication:
      "Stimulates mucosal immune defense against Aeromonas hydrophila and Edwardsiella infections in commercial finfish.",
    dosage: "Administer per certified aquatic veterinarian protocol.",
  },
  {
    id: "bio-immune-poultry",
    name: "Bio-Immune Live ND+IB",
    bengaliName: "বায়ো-ইমিউন লাইভ",
    category: "vaccines",
    categoryLabel: "Vaccines",
    type: "Avian Viral Vaccine",
    image: "/images/products/pathonil.png",
    packSizes: ["1000 Doses", "2500 Doses"],
    form: "Lyophilized Freeze-Dried",
    badge: "Cold-Chain",
    sku: "FT-VAC-002",
    inStock: true,
    rating: 5.0,
    reviewsCount: 82,
    leadTime: "Cold-Chain Dispatch",
    introBox:
      "Bio-Immune Live is a freeze-dried viral vaccine for active immunization of healthy commercial chicks against Newcastle Disease (Ranikhet) and Infectious Bronchitis (IB).",
    composition:
      "Live attenuated Newcastle Disease Virus (LaSota strain) + Infectious Bronchitis Virus (H-120 strain).",
    dosageBreakdown: [
      {
        title: "Chicks 4 to 7 days of age",
        instruction: "One drop per chick via eye-drop or intra-nasal route.",
      },
      {
        title: "Booster at Day 21",
        instruction: "Drinking water route with skimmed milk powder stabilizer.",
      },
    ],
    directionsForUse:
      "Produces rapid and strong mucosal immunity, protecting flocks against virulent Newcastle and bronchitis outbreaks.",
    storage: "Strict cold storage between +2°C and +8°C in insulated vaccine carriers.",
    packSizeText: "1000 Doses, 2500 Doses Vial",
    indication:
      "Protects commercial broilers and layers against Newcastle Disease and Infectious Bronchitis.",
    dosage: "Ocular/nasal drop or drinking water route as per vaccination chart.",
  },
];

// Helper to normalize product format
export const PRODUCTS_DATA = RAW_PRODUCTS.map((prod) => ({
  ...prod,
  packSize: prod.packSizeText || (Array.isArray(prod.packSizes) ? prod.packSizes.join(", ") : prod.packSizes),
}));

/**
 * Find single product by its slug / ID
 */
export function getProductById(id) {
  if (!id) return null;
  const cleanId = String(id).toLowerCase().trim();
  return PRODUCTS_DATA.find((p) => p.id.toLowerCase() === cleanId) || null;
}

/**
 * Get related products from the same category or overall catalog
 */
export function getRelatedProducts(currentId, category, limit = 4) {
  const others = PRODUCTS_DATA.filter((p) => p.id !== currentId);
  const sameCategory = others.filter((p) => p.category === category);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const remaining = others.filter((p) => p.category !== category);
  return [...sameCategory, ...remaining].slice(0, limit);
}
