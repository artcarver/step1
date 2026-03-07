const MICRO = {

bacteria: [
{
    group: "Gram-Positive Cocci",
    color: "bact",
    organisms: [
      {
        name: "Staphylococcus aureus",
        summary: "Catalase+, coagulase+ MRSA, toxic shock syndrome, scalded skin syndrome, food poisoning, endocarditis",
        gram: "GP Cocci in clusters",
        virulence: "**Protein A** (binds IgG Fc → evades opsonization) · **Coagulase** (converts fibrinogen → fibrin clot) · **PVL leukocidin** (destroys neutrophils) · **Exotoxins:** TSST-1 (superantigen → TSS), exfoliatin (cleaves desmoglein-1 → SSSS), enterotoxin (heat-stable, preformed → food poisoning)",
        disease: "**Skin/soft tissue:** folliculitis, furuncles, carbuncles, impetigo (bullous and crusted). **Systemic:** bacteremia, endocarditis (IV drug users → tricuspid valve), osteomyelitis (most common cause overall), septic arthritis. **Toxin-mediated:** TSS (tampon, surgical wound), SSSS (neonates, immunocompromised), food poisoning (1-6h onset, N/V/D, no fever, preformed toxin).",
        lab_diagnosis: "**Gram stain:** GP cocci in clusters ('grapes'). **Culture:** Blood agar (large, golden-yellow colonies, **β-hemolysis**, staphyloxanthin pigment), Mannitol salt agar (MSA yellow halo/ferments mannitol). **Tests:** Catalase positive, Coagulase positive (tube or latex agglutination). **MRSA:** PCR for mecA gene or chromogenic agar; nasal swab screening.",
        tx: "**MSSA:** nafcillin or oxacillin. **MRSA:** vancomycin (hospital-acquired) or TMP-SMX/doxycycline (community-acquired). **Endocarditis:** add gentamicin for synergy. **SSSS:** supportive care + antistaphylococcal antibiotics.",
        pearl: "MRSA trap: β-lactams and cephalosporins are useless against MRSA due to altered PBP2a. Food poisoning requires clinical diagnosis; do NOT culture stool for preformed toxins."
      },
      {
        name: "Staphylococcus epidermidis",
        summary: "Catalase+, coagulase negative, novobiocin-sensitive infects prosthetic devices via biofilm; common blood culture contaminant",
        gram: "GP Cocci in clusters",
        virulence: "**Biofilm formation** on prosthetic material (polysaccharide slime layer) renders organism resistant to antibiotics and phagocytosis. Coagulase-negative.",
        disease: "**Prosthetic valve endocarditis** (#1 cause within first year post-surgery). Infected joint prostheses, IV catheter infections, VP shunt infections. Common blood culture contaminant requires **2 positive cultures from separate sites** to be clinically significant.",
        lab_diagnosis: "**Gram stain:** GP cocci in clusters. **Culture:** Blood agar (small, white-gray, non-hemolytic/γ-hemolysis, slow growing). **Tests:** Catalase positive, Coagulase negative, Novobiocin-sensitive, PYR negative. Blood cultures × 2 required for significance.",
        tx: "**Vancomycin ± rifampin** (rifampin penetrates biofilm). Remove or replace prosthetic device when possible.",
        pearl: "Device bug: Assume S. epidermidis for any prosthetic device or indwelling catheter infection. Multiple positive blood cultures in a prosthetic valve patient confirm true infection rather than contamination."
      },
      {
        name: "Staphylococcus saprophyticus",
        summary: "Catalase+, coagulase negative, novobiocin-resistant #2 cause of UTI in young sexually active women (after E. coli)",
        gram: "GP Cocci in clusters",
        virulence: "Urease production, surface adhesins for uroepithelium attachment, hemagglutinin.",
        disease: "**Uncomplicated cystitis** in young sexually active women. Presents with dysuria, frequency, urgency, and pyuria. Urinalysis shows WBCs and GP cocci in clusters.",
        lab_diagnosis: "**Gram stain (urine):** GP cocci in clusters. **Culture:** Blood agar (small, white-opaque, non-hemolytic). Urine culture >10⁵ CFU/mL. **Tests:** Catalase positive, Coagulase negative, Novobiocin-resistant, Urease positive.",
        tx: "TMP-SMX or nitrofurantoin (same first-line agents as E. coli UTI). Fluoroquinolones are an acceptable alternative.",
        pearl: "Classic vignette: young sexually active woman with UTI and GP cocci on urinalysis. Think 'Staph Saprophyticus -> Sexy young woman with UTI.'"
      },
      {
        name: "Streptococcus pyogenes (Group A Strep)",
        summary: "β-hemolytic, bacitracin-sensitive, PYR+ pharyngitis, impetigo, rheumatic fever, PSGN, necrotizing fasciitis",
        gram: "GP Cocci in chains",
        virulence: "**M protein** (antiphagocytic, anti-complement, molecular mimicry → rheumatic fever) · **Streptolysin O/S** (β-hemolysis; ASO titer measures antibody to SLO) · Streptokinase · Hyaluronidase ('spreading factor') · **Pyrogenic exotoxins A/B/C** (superantigens → scarlet fever, TSS)",
        disease: "**Pharyngitis:** exudative, no cough, tonsillar exudates, fever, anterior cervical LAD. **Impetigo:** honey-crusted non-bullous lesions. **Scarlet fever:** sandpaper rash, strawberry tongue, Pastia lines. **Cellulitis/erysipelas.** **Necrotizing fasciitis** (surgical emergency). **Post-streptococcal sequelae:** rheumatic fever (Jones criteria) and PSGN (immune complex type III mesangial deposits).",
        lab_diagnosis: "**Gram stain:** GP cocci in chains. **Culture:** Blood agar (small, translucent colonies, large zone of **β-hemolysis**). **Tests:** Rapid strep test (RADT) for antigen, Bacitracin-sensitive, PYR positive. **Serology:** ASO titer (elevated post-pharyngitis), Anti-DNase B (elevated post-pharyngitis and impetigo).",
        tx: "**Penicillin** (drug of choice GAS has never developed resistance). Amoxicillin for pharyngitis. Clindamycin for invasive disease (inhibits toxin synthesis via ribosome inhibition). Treat pharyngitis to prevent rheumatic fever; antibiotics do NOT prevent PSGN.",
        pearl: "ASO titer rises after pharyngitis but NOT after impetigo; use anti-DNase B for skin infections. Rheumatic fever follows pharyngitis only and is prevented by antibiotics. PSGN follows pharyngitis OR impetigo and is NOT prevented by antibiotics."
      },
      {
        name: "Streptococcus agalactiae (Group B Strep)",
        summary: "β-hemolytic, bacitracin-resistant, CAMP test+, hippurate hydrolysis+ #1 cause of neonatal meningitis and sepsis; screen at 35-37 weeks",
        gram: "GP Cocci in chains",
        virulence: "**Polysaccharide capsule** (antiphagocytic). **CAMP factor** (synergistically enhances S. aureus β-hemolysis).",
        disease: "**Neonates:** Early-onset (0-7 days) pneumonia, bacteremia, meningitis from maternal vaginal colonization during delivery. Late-onset (7 days-3 months) meningitis, bacteremia from environmental source. **Adults:** UTI in pregnant women, chorioamnionitis, postpartum endometritis, bacteremia in elderly/diabetics.",
        lab_diagnosis: "**Gram stain:** GP cocci in chains. **Culture:** Blood agar (small, white-gray colonies, narrow zone of **β-hemolysis**). Vaginal/rectal swab at 35-37 weeks gestation. **Tests:** CAMP test positive (arrowhead hemolysis with S. aureus), Hippurate hydrolysis positive, Bacitracin-resistant.",
        tx: "**Intrapartum ampicillin IV** (given to colonized mothers during labor). Penicillin G (drug of choice; ampicillin is alternative). Clindamycin if penicillin-allergic (based on susceptibility testing).",
        pearl: "GBS is the #1 cause of neonatal meningitis overall, whereas Listeria monocytogenes is #1 in immunocompromised neonates."
      },
      {
        name: "Streptococcus pneumoniae",
        summary: "α-hemolytic, optochin-sensitive, bile-soluble, lancet-shaped diplococci #1 cause of CAP, bacterial meningitis (adults), otitis media, and sinusitis",
        gram: "GP Diplococci (lancet-shaped)",
        virulence: "**Polysaccharide capsule** (major virulence factor prevents phagocytosis; >90 serotypes; opsonization requires IgG or C3b). **IgA protease** (cleaves sIgA). **Pneumolysin** (binds cholesterol in cell membranes → pore formation).",
        disease: "**Most common cause of:** community-acquired pneumonia (lobar consolidation), bacterial meningitis in adults >50 years, otitis media, and sinusitis. **Asplenic patients:** most feared encapsulated organism. Bacteremia in asplenic patients is rapidly fatal.",
        lab_diagnosis: "**Gram stain:** Lancet-shaped GP diplococci. **Culture:** Blood agar (small, **α-hemolytic** green colonies, central depression/'checker piece' morphology). Mucoid if heavily encapsulated. **Tests:** Optochin-sensitive, Bile-soluble, Quellung reaction positive (capsule swells). Urine antigen test available.",
        tx: "**Penicillin** (if susceptible). **Resistant strains:** ceftriaxone or vancomycin. **Meningitis:** ceftriaxone + vancomycin + dexamethasone (reduces hearing loss). **Vaccines:** PCV15/PCV20 (children and adults), PPSV23 (adults ≥65, asplenic, immunocompromised).",
        pearl: "Asplenic patients are highly susceptible to encapsulated organisms ('SHiN': S. pneumoniae, H. influenzae, N. meningitidis). Dexamethasone in meningitis reduces hearing loss by dampening inflammation."
      },
      {
        name: "Streptococcus viridans",
        summary: "α-hemolytic, optochin-resistant, bile-insoluble #1 cause of subacute bacterial endocarditis on previously damaged native valves",
        gram: "GP Cocci in chains",
        virulence: "**Dextran (glucan) production** adheres to fibrin-platelet thrombi on damaged heart valves. S. mutans: dextran promotes dental caries via fermentation of sucrose → lactic acid.",
        disease: "**Subacute bacterial endocarditis** on previously damaged native valves (MVP, rheumatic heart disease) typically after dental procedures. Insidious onset over weeks to months: low-grade fever, weight loss, Osler nodes, Roth spots, Janeway lesions, splinter hemorrhages. **S. mutans:** dental caries.",
        lab_diagnosis: "**Gram stain:** GP cocci in chains. **Culture:** Blood agar (small, **α-hemolytic** green colonies). **Tests:** Optochin-resistant, Bile-insoluble, PYR negative. Blood cultures × 3 from separate sites required.",
        tx: "**Penicillin G + gentamicin** (synergistic bactericidal effect for endocarditis). Endocarditis prophylaxis for high-risk cardiac lesions: **amoxicillin 2g PO** 30-60 minutes before dental procedure.",
        pearl: "S. bovis (Group D Strep) endocarditis is strongly associated with colorectal carcinoma; colonoscopy is mandatory upon diagnosis."
      },
      {
        name: "Enterococcus faecalis / faecium",
        summary: "Group D, bile-tolerant, grows in 6.5% NaCl, PYR+ UTI, biliary infections, nosocomial endocarditis; VRE is multidrug-resistant",
        gram: "GP Cocci in pairs or short chains",
        virulence: "Intrinsic resistance to many antibiotics. Acquires **vancomycin resistance** via vanA/vanB genes on transferable plasmids (VRE). Biofilm formation. Tolerates harsh environments (bile, salt, extremes of pH).",
        disease: "**UTI** (especially catheter-associated). Biliary tract infections. **Nosocomial bacteremia and endocarditis** (E. faecalis 90%, E. faecium increasingly). VRE: major nosocomial threat in ICUs and immunocompromised patients.",
        lab_diagnosis: "**Gram stain:** GP cocci in pairs or short chains. **Culture:** Blood agar (small, gray-white, usually **γ-hemolytic**). **Tests:** PYR positive, Grows in 6.5% NaCl, Bile-esculin positive (black precipitate). Vancomycin susceptibility testing for VRE.",
        tx: "**E. faecalis:** ampicillin ± gentamicin (synergistic bactericidal for endocarditis essential). **VRE (vancomycin-resistant Enterococcus):** linezolid or daptomycin. Intrinsically resistant to all cephalosporins and TMP-SMX.",
        pearl: "Classic exam trap: Enterococcus is NOT killed by penicillin alone. Penicillin is only bacteriostatic; must add an aminoglycoside like gentamicin for bactericidal synergy in endocarditis."
      }
    ]
  },
  {
    group: "Gram-Positive Bacilli",
    color: "bact",
    organisms: [
      {
        name: "Bacillus anthracis",
        summary: "Anthrax large aerobic spore-forming GP rod with poly-D-glutamate capsule; cutaneous, inhalation, and GI forms; Category A bioterrorism agent",
        gram: "GP Bacillus, large, aerobic, spore-forming",
        virulence: "**Poly-D-glutamate capsule** (antiphagocytic unique protein capsule, not polysaccharide). **Anthrax toxin** (3 components): Protective Antigen (PA forms pore), Edema Factor (EF adenylate cyclase → ↑cAMP → edema), Lethal Factor (LF metalloprotease cleaves MAPKK → cell death).",
        disease: "**Cutaneous anthrax (95%):** painless papule → vesicle → **painless necrotic black eschar** with surrounding edema. **Inhalation anthrax:** flu-like prodrome → mediastinal widening on CXR (hemorrhagic mediastinitis) → septicemia. **GI anthrax:** from eating contaminated meat.",
        lab_diagnosis: "**Gram stain:** Large GP rods in chains with central/subterminal spores. No capsule visible on standard stain (requires India ink or M'Fadyean stain). **Culture:** Blood agar (large, flat, gray-white, **non-hemolytic** colonies with irregular 'Medusa head' or 'ground glass' edges). **Tests:** PCR for toxin genes.",
        tx: "**Ciprofloxacin or doxycycline** (first-line; 60 days for inhalation). Post-exposure prophylaxis: ciprofloxacin + anthrax vaccine. Antitoxin (raxibacumab) for severe systemic disease.",
        pearl: "Mediastinal widening on CXR plus a flu-like prodrome in a healthy individual equals inhalation anthrax until proven otherwise. Cutaneous anthrax features a painless black eschar, unlike painful cellulitis from other causes."
      },
      {
        name: "Bacillus cereus",
        summary: "Spore-forming aerobic GP rod two food poisoning syndromes: emetic (reheated rice, preformed toxin) and diarrheal (meats/vegetables, enterotoxin)",
        gram: "GP Bacillus, large, aerobic, spore-forming",
        virulence: "**Emetic toxin (cereulide):** heat-stable, preformed in food survives reheating at 100°C, acts on vagal afferents → N/V. **Enterotoxin (Hbl/Nhe):** heat-labile, produced in gut → disrupts intestinal epithelium → diarrhea. Spores survive initial cooking.",
        disease: "**Emetic form (short incubation, 1-6h):** nausea and vomiting, cramping classic setting is leftover reheated fried rice. **Diarrheal form (8-16h):** watery diarrhea, abdominal cramping, no vomiting.",
        lab_diagnosis: "**Gram stain:** GP rods with spores. **Culture:** Blood agar (large, flat, gray-white/cream colonies with **β-hemolysis**). Motile. Diagnosis is clinical; lab rarely confirms food poisoning unless an outbreak investigation is warranted.",
        tx: "**Supportive care only** both syndromes are self-limited within 24 hours. Antibiotics not indicated for GI illness.",
        pearl: "The fried rice bug: B. cereus emetic toxin causes fried rice syndrome. Spores survive boiling, germinate as rice cools, and the preformed heat-stable toxin survives reheating. The diarrheal form closely mimics C. perfringens."
      },
      {
        name: "Clostridium tetani",
        summary: "Tetanospasmin (SNARE-cleaving neurotoxin) blocks inhibitory interneurons → spastic paralysis; trismus, risus sardonicus, opisthotonus; prevent with Td vaccine",
        gram: "GP Bacillus, anaerobic, spore-forming (terminal spores)",
        virulence: "**Tetanospasmin (tetanus toxin):** cleaves SNARE proteins (synaptobrevin/VAMP) at inhibitory interneurons in the spinal cord → blocks glycine and GABA release → **disinhibition of excitatory neurons** → spastic paralysis and autonomic instability.",
        disease: "**Generalized tetanus:** trismus (lockjaw) → risus sardonicus (sardonic grin) → opisthotonus (arched back from extensor spasm) → autonomic instability. **Neonatal tetanus:** umbilical stump infection in infants of unvaccinated mothers.",
        lab_diagnosis: "**Gram stain:** GP rods with large round **terminal spores** giving 'drumstick' or 'tennis racket' appearance. **Culture:** Anaerobic blood agar (gray, irregular, β-hemolytic). Diagnosis is clinical based on wound history and presentation.",
        tx: "**Tetanus immunoglobulin (TIG)** (neutralizes unbound circulating toxin). **Metronidazole** (kills organism). **Benzodiazepines** (muscle relaxants). Wound debridement. Mechanical ventilation if needed. **Prophylaxis:** Td booster every 10 years.",
        pearl: "Mechanism key: Tetanospasmin travels retrograde up motor neurons to the spinal cord, blocking inhibitory interneurons, causing spastic paralysis. Contrast with botulinum toxin, which blocks excitatory ACh release at the NMJ, causing flaccid paralysis."
      },
      {
        name: "Clostridium botulinum",
        summary: "Botulinum toxin blocks presynaptic ACh release at NMJ descending flaccid paralysis; infant botulism from honey; food-borne from canned foods; wound botulism in IV drug users",
        gram: "GP Bacillus, anaerobic, spore-forming (subterminal spores)",
        virulence: "**Botulinum toxin** cleaves SNARE proteins (SNAP-25 or synaptobrevin) at the NMJ → blocks **ACh release** → flaccid paralysis. Also blocks parasympathetic autonomic terminals → anticholinergic signs.",
        disease: "**Food-borne botulism:** canned or home-preserved food (pre-formed toxin ingested) → descending symmetric flaccid paralysis, cranial nerve palsies → respiratory failure. Normal mental status. **Infant botulism:** honey ingested before age 1 → spore germination in immature gut → floppy baby, constipation. **Wound botulism:** puncture wounds or IV drug use (black tar heroin).",
        lab_diagnosis: "**Gram stain:** GP rods with oval subterminal spores. **Culture:** Anaerobic blood agar (gray, irregular, β-hemolysis), Egg yolk agar (lipase-positive). **Tests:** Mouse bioassay (gold standard for toxin in serum/stool). EMG shows incremental response to repetitive nerve stimulation.",
        tx: "**Heptavalent antitoxin (HBAT)** (neutralizes unbound toxin). **Supportive care** (mechanical ventilation is critical). **Infant botulism: BabyBIG** (botulism immune globulin IV). Do NOT give antibiotics in infant botulism.",
        pearl: "Classic infant botulism vignette: Constipated floppy baby who cannot nurse after honey exposure before age 1. EMG key: Incremental response to repetitive stimulation equals botulism; decremental response equals myasthenia gravis. The descending 4 Ds: Diplopia, Dysarthria, Dysphagia, Descending paralysis."
      },
      {
        name: "Clostridium difficile",
        summary: "Pseudomembranous colitis antibiotic-disrupted flora; toxin A (enterotoxin) + toxin B (cytotoxin); treat with fidaxomicin or oral vancomycin",
        gram: "GP Bacillus, anaerobic, spore-forming",
        virulence: "**Toxin A (enterotoxin):** activates NF-κB → mucosal inflammation and fluid secretion. **Toxin B (cytotoxin):** depolymerizes actin → cell death (more clinically important). **Binary toxin (CDT):** in hypervirulent NAP1/BI/027 strain.",
        disease: "**Antibiotic-associated diarrhea / pseudomembranous colitis:** watery diarrhea after antibiotics (clindamycin, fluoroquinolones, cephalosporins). **Severe:** fever, elevated WBC, abdominal pain. **Fulminant:** toxic megacolon → perforation risk. **Recurrent C. difficile** common.",
        lab_diagnosis: "**Gram stain:** Large GP rods with subterminal spores. **Tests:** Stool PCR for toxin B gene (highest sensitivity), Stool toxin EIA (detects active toxin A/B), Glutamate dehydrogenase (GDH) antigen (screening). **Endoscopy:** Pseudomembranes. **Culture:** CCFA agar (yellow, ground-glass, horse-manure odor under anaerobic conditions).",
        tx: "**First episode (non-severe):** fidaxomicin or oral vancomycin. **Severe:** oral vancomycin ± IV metronidazole. **Recurrence:** oral vancomycin taper/pulse or fidaxomicin; fecal microbiota transplant (FMT) for multiple recurrences. **Fulminant/toxic megacolon:** emergency colectomy.",
        pearl: "IV vancomycin does NOT work for C. difficile because it is not secreted into the colon lumen; oral vancomycin is required. Spores survive alcohol-based hand sanitizers, requiring soap and water for contact precautions."
      },
      {
        name: "Clostridium perfringens",
        summary: "Alpha toxin (lecithinase) gas gangrene (myonecrosis) after traumatic wounds; food poisoning (reheated meat); double-zone β-hemolysis on blood agar",
        gram: "GP Bacillus, anaerobic, spore-forming (large, boxcar-shaped rods)",
        virulence: "**Alpha toxin (lecithinase/phospholipase C):** cleaves phosphatidylcholine in cell membranes → RBC lysis, platelet destruction, myonecrosis, and gas production. **Enterotoxin:** disrupts intestinal tight junctions → food poisoning.",
        disease: "**Gas gangrene (clostridial myonecrosis):** traumatic wounds contaminated with soil, surgery, or IVDUs. Severe pain, **crepitus** (gas in tissue), bronze/gray skin discoloration, shock. **Food poisoning:** reheated meat dishes watery diarrhea 8-24h onset, no fever, self-limited.",
        lab_diagnosis: "**Gram stain (wound):** Large GP rods without visible spores in tissue. **Culture:** Anaerobic blood agar (**double-zone β-hemolysis** inner complete hemolysis, outer incomplete hemolysis). **Tests:** Egg yolk agar positive lecithinase reaction (Nagler reaction confirmatory). **Imaging:** Gas in tissue planes.",
        tx: "**Gas gangrene:** emergent wide surgical debridement + **penicillin G** IV ± clindamycin. Hyperbaric oxygen adjunct. **Food poisoning:** supportive only.",
        pearl: "Gas in tissue on imaging indicates gas gangrene until proven otherwise, requiring emergent surgical debridement. Food poisoning from C. perfringens occurs because spores survive initial cooking but not prolonged reheating."
      },
      {
        name: "Corynebacterium diphtheriae",
        summary: "Club-shaped GP rod, metachromatic granules diphtheria exotoxin halts protein synthesis; pseudomembrane on pharynx; myocarditis and neuropathy; prevent with DTaP",
        gram: "GP Bacillus (club-shaped, pleomorphic 'Chinese letter' or palisade arrangement)",
        virulence: "**Diphtheria toxin** (A-B toxin, encoded by β-phage): Fragment A **ADP-ribosylates EF-2 (elongation factor 2)** → halts protein synthesis → cell death in heart, nerves, and kidneys.",
        disease: "**Pharyngeal diphtheria:** low-grade fever, sore throat → **tough gray pseudomembrane** on tonsils/pharynx (bleeds when removed). 'Bull neck' (cervical LAD + edema). **Complications:** myocarditis (heart block), **demyelinating neuropathy** (palatal palsy → peripheral neuropathy).",
        lab_diagnosis: "**Gram stain:** Pleomorphic GP rods in 'Chinese letter' or palisade arrangements. **Culture:** Loeffler's medium (cream-colored colonies; Albert stain shows metachromatic blue/volutin granules at poles), Tellurite agar (grey-black colonies). **Tests:** Elek test (immunodiffusion) or PCR for toxin gene.",
        tx: "**Diphtheria antitoxin** (DAT neutralizes unbound toxin) + **erythromycin or penicillin**. Strict respiratory isolation. **Prevention:** DTaP primary series + Td booster every 10 years.",
        pearl: "The pseudomembrane bleeds when removed, distinguishing it from strep pharyngitis. Toxin mechanism: ADP-ribosylates EF-2, blocking protein translocation. Diphtheria rule of twos: Two complications (myocarditis, neuropathy); two treatments (antitoxin, antibiotics)."
      },
      {
        name: "Listeria monocytogenes",
        summary: "Facultative intracellular GP rod tumbling motility at room temp; actin rockets; meningitis in neonates/elderly/immunocompromised and pregnant women; unpasteurized dairy, deli meats",
        gram: "GP Bacillus (short rod, facultative intracellular)",
        virulence: "**Listeriolysin O (LLO):** pore-forming toxin escapes phagosome into cytoplasm. **ActA:** nucleates host cell actin → **actin rocket propulsion** (cell-to-cell spread). Grows at **refrigerator temperatures (4°C)**. Tumbling motility at 25°C.",
        disease: "**Neonatal meningitis:** early-onset (granulomatosis infantiseptica) and late-onset. #1 cause of bacterial meningitis in **immunocompromised patients** and elderly. **Pregnant women:** bacteremia → spontaneous abortion, premature birth. **Febrile gastroenteritis** in immunocompetent.",
        lab_diagnosis: "**Gram stain:** Short GP rods or coccobacilli (easily confused with diphtheroids or Streptococcus). **Culture:** Blood agar at 4°C (cold enrichment) and 37°C (small colonies, narrow zone of **β-hemolysis**). **Tests:** Tumbling motility at 25°C (umbrella pattern in soft agar), CAMP test positive.",
        tx: "**Ampicillin** (drug of choice) ± gentamicin. **TMP-SMX** (alternative for penicillin-allergic). **Cephalosporins are ineffective** Listeria has intrinsic resistance.",
        pearl: "Empiric ceftriaxone and vancomycin cover most bacterial meningitis but completely miss Listeria, which is intrinsically cephalosporin-resistant. You must add ampicillin for neonates, the elderly, pregnant women, or immunocompromised patients."
      }
    ]
  },
  {
    group: "Gram-Positive Branching Filamentous Rods",
    color: "bact",
    organisms: [
      {
        name: "Actinomyces israelii",
        summary: "Anaerobic non-acid-fast branching GP rod cervicofacial abscess with sulfur granules and sinus tracts after dental trauma; normal oral flora; IUD-associated pelvic actinomycosis",
        gram: "GP branching filamentous rod (anaerobic, non-acid-fast)",
        virulence: "Strict anaerobe thrives in devitalized tissue following trauma or disruption of mucosal barriers. Normal flora of the oral cavity, GI tract, and female genital tract.",
        disease: "**Cervicofacial actinomycosis (lumpy jaw):** indurated woody swelling of jaw/neck with **draining sinus tracts to skin**, typically after dental extraction. **Thoracic actinomycosis:** aspiration of oral secretions → lung abscess, empyema (can mimic malignancy). **Abdominal/pelvic:** after bowel perforation; **IUD-associated pelvic actinomycosis**.",
        lab_diagnosis: "**Gram stain:** GP branching filamentous rods, non-acid-fast. **Pathology:** Sulfur granules (macroscopic yellow bacterial aggregates) visible in pus; histology shows 'ray fungus' appearance. **Culture:** Anaerobic blood agar (rough 'molar tooth' or 'spider colony' morphology after 7-14 days).",
        tx: "**Penicillin G IV** (prolonged course typically 2-6 weeks IV then oral amoxicillin for 6-12 months). Surgical drainage of abscesses. Remove IUD if pelvic actinomycosis is confirmed.",
        pearl: "Actinomyces is part of normal oral flora; disease requires mucosal disruption. Thoracic actinomycosis can easily mimic lung cancer on CT, making biopsy essential for diagnosis."
      },
      {
        name: "Nocardia asteroides",
        summary: "Aerobic weakly acid-fast branching GP rod pulmonary and CNS abscess in immunocompromised; cutaneous sporotrichoid spread in immunocompetent; treat with TMP-SMX",
        gram: "GP branching filamentous rod (aerobic, weakly acid-fast)",
        virulence: "**Aerobic**. Resists intracellular killing by **inhibiting phagosome-lysosome fusion** survives in macrophages. Catalase and superoxide dismutase protect against oxidative burst.",
        disease: "**Pulmonary nocardiosis:** cavitary pneumonia and lung abscess in immunocompromised patients (prolonged corticosteroids, organ transplant, HIV/AIDS). **CNS nocardiosis:** brain abscess from hematogenous spread. **Cutaneous nocardiosis:** sporotrichoid spread (ascending nodules along lymphatics) from traumatic soil inoculation in immunocompetent individuals.",
        lab_diagnosis: "**Gram stain:** GP branching filaments, beaded appearance. **Tests:** Weakly acid-fast positive on modified Ziehl-Neelsen stain. **Culture:** Aerobic culture on blood agar or Sabouraud agar (dry, chalky white to orange, waxy colonies). Requires prolonged incubation (days to weeks).",
        tx: "**TMP-SMX** (drug of choice long course of 6-12 months). **Severe or CNS disease:** add imipenem or amikacin. Surgical drainage of CNS abscess if accessible.",
        pearl: "Nocardia vs. Actinomyces: both form branching GP filaments, but Nocardia is aerobic and weakly acid-fast, whereas Actinomyces is anaerobic and NOT acid-fast. CNS abscess plus cavitary pneumonia in an immunocompromised patient points directly to Nocardia."
      }
    ]
  },
  {
    group: "Gram-Negative Cocci",
    color: "bact",
    organisms: [
      {
        name: "Neisseria meningitidis",
        summary: "Encapsulated GN diplococcus, oxidase+ #1 bacterial meningitis in teens/young adults; petechial rash, Waterhouse-Friderichsen syndrome; rifampin prophylaxis for close contacts; vaccine-preventable",
        gram: "GN Diplococci (kidney bean-shaped, encapsulated)",
        virulence: "**Polysaccharide capsule** (serotypes A, B, C, W, Y, X antiphagocytic; serotype B capsule mimics human neural adhesion molecule → poor immunogenicity). **Endotoxin (LPS)** → massive inflammatory cascade → DIC and shock. **Pili** for nasopharyngeal attachment. **IgA protease.** **Oxidase positive.**",
        disease: "**Bacterial meningitis:** teens and college students (dormitory outbreaks), asplenic patients. Classic triad: fever + nuchal rigidity + altered mental status. **Petechial/purpuric non-blanching rash** = meningococcemia, indicates DIC. **Waterhouse-Friderichsen syndrome:** bilateral adrenal hemorrhage → acute adrenal insufficiency → refractory shock → death within hours. Terminal complement deficiency (C5-C9) → recurrent meningococcal disease.",
        lab_diagnosis: "**Gram stain (CSF):** GN kidney bean-shaped diplococci, often intracellular within PMNs. **Culture:** Blood/chocolate agar (small, gray, moist, smooth, **β-hemolytic** colonies; requires CO2). **Thayer-Martin VCN agar** for nasopharyngeal swabs (selective). **Tests:** Oxidase positive (purple/blue color with Kovac's reagent within 10 seconds). Latex agglutination or PCR for rapid antigen detection in CSF. Blood cultures (positive in meningococcemia).",
        tx: "**Ceftriaxone IV** (start immediately do not wait for LP if clinical suspicion is high). **Dexamethasone** before or with first antibiotic dose. **Rifampin prophylaxis** for close contacts (or ciprofloxacin PO single dose, or ceftriaxone IM single dose). **Vaccines:** MenACWY (required for college entry) + MenB (recommended ages 16-23).",
        pearl: "Non-blanching petechial rash plus meningitis is a medical emergency; treat before lumbar puncture if there is any delay risk. Waterhouse-Friderichsen syndrome presents with bilateral adrenal hemorrhage; do NOT delay steroids. Check terminal complement (C5-C9) levels in patients with recurrent Neisseria infections."
      },
      {
        name: "Neisseria gonorrhoeae",
        summary: "GN diplococcus, oxidase+, NO capsule STI: urethritis/cervicitis, PID, DGI (migratory arthritis + skin lesions); Fitz-Hugh-Curtis syndrome; neonatal ophthalmia; treat with ceftriaxone + doxycycline",
        gram: "GN Diplococci (NO capsule, intracellular within PMNs)",
        virulence: "**Pili** (phase and antigenic variation evades adaptive immune response). **Opa proteins** (mediate cell invasion bind CEACAM receptors). **IgA protease.** **No capsule** (unlike N. meningitidis). **β-lactamase** plasmid (penicillin resistance). Increasing fluoroquinolone resistance.",
        disease: "**Males:** urethritis (purulent discharge, dysuria). **Females:** cervicitis (often asymptomatic or minimal discharge) → PID (salpingitis → infertility, ectopic pregnancy risk). **DGI (1-3%):** hematogenous spread → **migratory polyarthritis** → septic arthritis (wrist, knee, ankle) + pustular/hemorrhagic skin lesions. **Fitz-Hugh-Curtis syndrome:** perihepatitis causing RUQ pain ('violin string' adhesions). **Neonates:** ophthalmia neonatorum (purulent eye discharge at birth).",
        lab_diagnosis: "**Gram stain (urethral discharge, male):** GN intracellular diplococci within PMNs (highly sensitive and specific in symptomatic males; less reliable in females). **Culture:** Thayer-Martin VCN agar (small, gray, translucent, convex, **non-hemolytic** colonies; requires CO2). **Tests:** NAAT (nucleic acid amplification test) is preferred for diagnosis (highly sensitive for urine, vaginal, or endocervical swab). Oxidase positive.",
        tx: "**Ceftriaxone 500mg IM single dose** (or 1g if weight >150 kg) + **doxycycline 100mg BID × 7 days** (for presumptive co-infection with Chlamydia). DGI: IV ceftriaxone until improved, then oral step-down. **Erythromycin ophthalmic ointment at birth** prevents ophthalmia neonatorum.",
        pearl: "Always treat for both gonorrhea AND chlamydia due to high co-infection rates. DGI triad: pustular skin lesions + tenosynovitis + migratory polyarthritis. Joint fluid is often culture-negative in DGI because it is a bacteremia phase. Terminal complement deficiency predisposes to DGI."
      }
    ]
  },
  {
    group: "Gram-Negative Bacilli - Enteric",
    color: "bact",
    organisms: [
      {
        name: "Escherichia coli",
        summary: "Lac+, indole+, oxidase negative 6 diarrheagenic pathotypes; #1 cause of UTI; K1 capsule → neonatal meningitis; EHEC O157:H7 → HUS (no antibiotics)",
        gram: "GN Bacillus (lactose fermenter, facultative anaerobe)",
        virulence: "**ETEC:** heat-labile toxin (LT ADP-ribosylates Gs → ↑cAMP) + heat-stable toxin (ST activates guanylyl cyclase → ↑cGMP). **EPEC:** attaching and effacing lesions (no toxin). **EHEC (O157:H7):** Shiga-like toxin (verotoxin) inhibits 60S ribosome (cleaves 28S rRNA) → endothelial cell death → HUS. **EIEC:** invades colonic mucosa. **K1 capsule** (neonatal meningitis).",
        disease: "**UTI** (#1 cause overall). **Neonatal meningitis** (#1 cause, K1 capsule). **ETEC:** travelers diarrhea (watery, no blood, no fever). **EHEC O157:H7:** bloody diarrhea → HUS (microangiopathic hemolytic anemia + thrombocytopenia + acute kidney injury). **EPEC:** infant diarrhea.",
        lab_diagnosis: "**Culture:** MacConkey agar (pink to red, flat, non-mucoid lactose-fermenting colonies). Blood agar (gray, some β-hemolytic). **SMAC (sorbitol MacConkey):** O157:H7 forms **colorless** colonies (sorbitol non-fermenter). **Tests:** Stool Shiga toxin EIA or PCR for EHEC. IMViC pattern: ++-- (Indole+, Methyl red+, Voges-Proskauer negative, Citrate negative). Urine culture >10⁵ CFU/mL.",
        tx: "**UTI:** TMP-SMX or fluoroquinolone. **ETEC:** azithromycin or fluoroquinolone. **EHEC O157:H7: NO antibiotics** (increase Shiga toxin release and HUS risk). **Neonatal meningitis:** cefotaxime + ampicillin.",
        pearl: "Treatment trap: Giving antibiotics for EHEC increases the risk of HUS. HUS triad: microangiopathic hemolytic anemia + thrombocytopenia + acute kidney injury. Shiga toxin inhibits the 60S ribosome, sharing the exact mechanism with Shigella toxin."
      },
      {
        name: "Salmonella",
        summary: "Non-lactose fermenter, H2S+, oxidase negative intracellular pathogen; S. typhi causes enteric fever; non-typhi causes food-borne diarrhea; osteomyelitis in sickle cell disease",
        gram: "GN Bacillus (non-lactose fermenter, motile, H2S-producing)",
        virulence: "Survives intracellularly in macrophages via **SPI-1 and SPI-2 pathogenicity islands** (type III secretion systems). **Vi antigen capsule** (S. typhi only antiphagocytic). Flagella (motile). Somatic LPS. Does NOT produce urease.",
        disease: "**S. typhi (typhoid/enteric fever):** 'stepladder' fever, relative bradycardia, rose spots (faint blanching macules on trunk), hepatosplenomegaly, constipation early → diarrhea later. Chronic carrier state: gallbladder colonization. **Non-typhi Salmonella:** self-limited food-borne gastroenteritis. **Osteomyelitis in sickle cell disease**.",
        lab_diagnosis: "**Culture:** MacConkey agar (**colorless/translucent** non-lactose fermenting). Blood agar (smooth, gray, non-hemolytic). **TSI agar:** H2S production (black precipitate), alkaline slant/acid butt (typhi: no gas; non-typhi: gas). **Tests:** Bone marrow culture is most sensitive for typhoid. Blood culture positive in week 1; stool/urine positive in weeks 2-3.",
        tx: "**Typhoid fever:** ceftriaxone or fluoroquinolone. **Non-typhi gastroenteritis:** supportive; antibiotics only if bacteremic, immunocompromised, or sickle cell. **Osteomyelitis:** fluoroquinolone or ceftriaxone.",
        pearl: "Sickle cell plus osteomyelitis equals Salmonella. Chronic typhoid carriers harbor the bacteria in the gallbladder ('Typhoid Mary'). Differentiate from Shigella on TSI agar: Salmonella produces H2S (black precipitate) and is motile; Shigella does neither."
      },
      {
        name: "Shigella",
        summary: "Non-lactose fermenter, non-motile, no H2S, oxidase negative invasive bloody dysentery; very low infectious dose; Shiga toxin in S. dysenteriae; antibiotics ARE indicated",
        gram: "GN Bacillus (non-lactose fermenter, non-motile, no H2S)",
        virulence: "**Invasin proteins** (type III secretion system) invades colonic epithelial cells via M cells in Peyer's patches → spreads cell-to-cell using **actin polymerization**. **Shiga toxin** (S. dysenteriae type 1): inhibits 60S ribosome. Non-motile. Very low infectious dose (10-100 organisms).",
        disease: "**Bacillary dysentery:** abrupt fever, cramping, tenesmus, **bloody mucoid diarrhea**. Invades colonic epithelium → shallow ulcers. **Complications:** HUS (S. dysenteriae), reactive arthritis (HLA-B27), Shigella encephalopathy (children seizures). No animal reservoir.",
        lab_diagnosis: "**Culture:** MacConkey agar (**colorless** non-lactose fermenter). **TSI agar:** no H2S, no gas, acid slant/acid butt. **Tests:** Stool smear shows abundant PMNs and RBCs. Non-motile on wet prep (distinguishes from Salmonella). PCR for Shiga toxin gene.",
        tx: "**Azithromycin or fluoroquinolone** (shortens illness duration and reduces transmission). Antibiotics ARE indicated in Shigella.",
        pearl: "Shigella = GIVE antibiotics; EHEC = NO antibiotics. Very low infectious inoculum makes it highly contagious in daycares. Shigella is non-motile and does not produce H2S, distinguishing it from Salmonella."
      },
      {
        name: "Klebsiella pneumoniae",
        summary: "Lactose fermenter, mucoid capsule, oxidase negative pneumonia in alcoholics/diabetics (currant jelly sputum, upper lobe); #2 GN UTI; ESBL and KPC resistance strains",
        gram: "GN Bacillus (lactose fermenter, heavily encapsulated)",
        virulence: "**Large polysaccharide capsule** (hypermucoviscous antiphagocytic). **ESBL** (extended-spectrum β-lactamase) and **KPC** (Klebsiella pneumoniae carbapenemase) in resistant strains.",
        disease: "**Pneumonia:** alcoholics, diabetics, and COPD patients lobar or multilobar, tendency for **upper lobe cavitation**. Classic sputum: **'currant jelly' consistency**. **UTI:** #2 gram-negative UTI (catheter-associated). **Liver abscess:** hypervirulent strains (East Asian populations).",
        lab_diagnosis: "**Culture:** MacConkey agar (large, **mucoid, pink** dome-shaped lactose-fermenting colonies). Blood agar (large, mucoid, gray-white). **Tests:** String test positive in hypervirulent strains (mucoviscous string >5mm when colony touched with loop). Oxidase negative. Gram stain: plump GN rods.",
        tx: "**Susceptible:** cephalosporins or fluoroquinolones. **ESBL:** carbapenems. **KPC/CRKP:** ceftazidime-avibactam, polymyxin B/colistin.",
        pearl: "Classic host: alcoholic male with upper lobe cavitary pneumonia and red-brown mucoid 'currant jelly' sputum. The 'string sign' identifies hypervirulent strains capable of causing liver abscesses in otherwise healthy individuals."
      },
      {
        name: "Enterobacter & Serratia",
        summary: "Lactose-fermenting nosocomial GN rods UTI, HAP/VAP, bacteremia; AmpC β-lactamase causes resistance to 3rd-generation cephalosporins during treatment; SPACE organisms",
        gram: "GN Bacillus (lactose fermenter, oxidase negative)",
        virulence: "**AmpC β-lactamase** (chromosomally encoded, inducible de-repressed during 3rd-gen cephalosporin treatment → resistance emerges on therapy). **Serratia marcescens:** produces **prodigiosin** (red pigment at room temperature). Biofilm formation.",
        disease: "**Enterobacter:** catheter-associated UTI, HAP/VAP, bacteremia in ICU, wound infections. **Serratia:** nosocomial pneumonia, UTI, right-sided endocarditis in IV drug users. Both dangerous in neonates/immunocompromised.",
        lab_diagnosis: "**Culture:** MacConkey agar (pink lactose-fermenting colonies). Serratia produces **red/pink pigmentation** on blood agar at room temperature (25°C), but not at 37°C. **Tests:** Oxidase negative. Enterobacter: Voges-Proskauer positive. Serratia: DNase and lipase positive. AmpC disk diffusion testing.",
        tx: "**Serious infections:** carbapenems or cefepime (4th-gen cephalosporin). **Avoid 3rd-generation cephalosporins** (ceftriaxone, cefotaxime) due to AmpC de-repression ('inoculum effect').",
        pearl: "Never use 3rd-generation cephalosporins alone for SPACE organisms (Serratia, Pseudomonas, Acinetobacter, Citrobacter, Enterobacter) due to inducible AmpC resistance. Serratia red pigment is seen in lab contamination or room temperature conditions, not typically in patient specimens."
      },
      {
        name: "Helicobacter pylori",
        summary: "Urease+, oxidase+, microaerophilic curved GN rod #1 cause of peptic ulcer disease and MALT lymphoma; associated with gastric adenocarcinoma; treat with triple or quadruple therapy",
        gram: "GN Bacillus (curved, spiral, microaerophilic)",
        virulence: "**Urease** (produces NH3 → neutralizes gastric acid). **CagA** (cytotoxin-associated antigen disrupts tight junctions, linked to cancer). **VacA** (vacuolating cytotoxin forms pores). Flagella (corkscrew motility in mucous layer).",
        disease: "**Peptic ulcer disease:** antral gastritis → **duodenal ulcer** (most common); pangastritis → **gastric ulcer**. **Gastric adenocarcinoma** (intestinal type). **MALT lymphoma** (marginal zone B-cell lymphoma may completely regress with H. pylori eradication).",
        lab_diagnosis: "**Tests:** Urea breath test (detects active infection; preferred for post-treatment confirmation). Stool antigen test. **Biopsy:** CLO test (rapid urease test on biopsy yellow-to-pink color change = positive). Histology: Giemsa or Warthin-Starry stain shows curved/seagull-shaped GN rods. **Culture:** microaerophilic at 37°C (slow-growing, rarely done).",
        tx: "**Triple therapy (14 days):** PPI + clarithromycin + amoxicillin (or metronidazole). **Quadruple therapy:** PPI + bismuth + metronidazole + tetracycline. Confirm eradication ≥4 weeks after therapy.",
        pearl: "Always confirm eradication with a urea breath test or stool antigen; IgG serology remains elevated for months and cannot confirm cure. Eradication alone cures the majority of localized gastric MALT lymphomas. Stop PPIs 2 weeks before testing to avoid false negatives."
      },
      {
        name: "Pseudomonas aeruginosa",
        summary: "Oxidase+, non-lactose fermenter, blue-green pigment, fruity odor CF lung disease, burns, nosocomial pneumonia, hot tub folliculitis, malignant otitis externa",
        gram: "GN Bacillus (non-lactose fermenter, oxidase positive, aerobic)",
        virulence: "**Exotoxin A** (ADP-ribosylates EF-2 → halts protein synthesis). **Pyocyanin** (blue-green pigment generates ROS). **Alginate** (biofilm in CF lungs). **Phospholipase C.** **Elastase.** Type III secretion system.",
        disease: "**CF patients:** chronic mucoid lung colonization → respiratory failure. **Burns:** wound infection → sepsis. **Malignant (necrotizing) otitis externa:** elderly diabetics (ear pain, granulation tissue at canal floor). **Hot tub folliculitis.** **Nosocomial:** VAP, UTI. **Ecthyma gangrenosum:** hemorrhagic skin lesions in bacteremic neutropenic patients.",
        lab_diagnosis: "**Culture:** Blood/MacConkey agar (flat, spreading, **blue-green** colonies, **colorless** on MacConkey). Mucoid colonies in CF isolates. Cetrimide agar (selective). **Characteristics:** **Oxidase positive**, **fruity grape-like odor**, grows at **42°C**. Pigments: pyocyanin (blue-green) + pyoverdin (fluorescent yellow-green).",
        tx: "**Antipseudomonal β-lactam** (piperacillin-tazobactam, cefepime, meropenem) ± aminoglycoside. **Ciprofloxacin** (oral antipseudomonal). Intrinsically resistant to ampicillin, first-gen cephalosporins, and TMP-SMX.",
        pearl: "Malignant otitis externa (granulation tissue at the bony-cartilaginous junction in a diabetic) equals Pseudomonas until proven otherwise. Ecthyma gangrenosum presents as black necrotic skin lesions in neutropenic patients due to Pseudomonas vascular invasion. Exotoxin A shares the exact mechanism of Diphtheria toxin."
      },
      {
        name: "Yersinia enterocolitica",
        summary: "Non-lactose fermenter, cold-tolerant contaminated pork/milk; mesenteric adenitis mimics appendicitis; bloody diarrhea; reactive arthritis; grows at 4°C",
        gram: "GN Bacillus (non-lactose fermenter, motile at 25°C, non-motile at 37°C)",
        virulence: "**Ail and YadA** (invade M cells in Peyer's patches → mesenteric lymph nodes). **Yops:** type III secretion system, inhibit phagocytosis. Grows at **4°C** (cold enrichment). Urease positive.",
        disease: "**Enterocolitis:** fever, abdominal pain, watery/bloody diarrhea (contaminated pork, chitterlings, unpasteurized milk). **Mesenteric adenitis:** RLQ pain + fever mimicking appendicitis. **Reactive arthritis:** HLA-B27-associated. **Bacteremia** in patients with iron overload (hemochromatosis).",
        lab_diagnosis: "**Culture:** CIN agar (selective, 'bullseye' colonies with red center and translucent border). MacConkey (colorless). Cold enrichment (incubate at 4°C for 2-3 weeks to increase yield). **Tests:** Motile at 25°C, non-motile at 37°C. Urease positive.",
        tx: "**Gastroenteritis:** usually supportive. **Severe/bacteremia:** TMP-SMX, ciprofloxacin, or ceftriaxone. Reactive arthritis: NSAIDs.",
        pearl: "RLQ pain and fever mimicking appendicitis in a child with recent pork consumption or animal exposure suggests Yersinia mesenteric adenitis. Iron overload states (hemochromatosis, deferoxamine) drastically increase susceptibility to Yersinia bacteremia because the organism is siderophilic."
      },
      {
        name: "Campylobacter jejuni",
        summary: "Oxidase+, GN curved rod #1 bacterial gastroenteritis in US; undercooked poultry; associated with Guillain-Barré syndrome and reactive arthritis",
        gram: "GN Bacillus (curved, comma-shaped or 'seagull' morphology, oxidase positive)",
        virulence: "**Flagella** (corkscrew motility for epithelial invasion). **Cytolethal distending toxin (CDT)**. **LOS (lipooligosaccharide):** molecular mimicry with host ganglioside GM1 → Guillain-Barré syndrome. Invades colonic lamina propria.",
        disease: "**Gastroenteritis** (#1 bacterial cause in US): watery diarrhea → bloody, mucoid, foul-smelling diarrhea + fever + cramping (undercooked poultry, puppies/kittens). **Guillain-Barré syndrome:** 2-4 weeks post-infection (ascending paralysis). **Reactive arthritis:** HLA-B27-associated.",
        lab_diagnosis: "**Culture:** Campy-BAP or Skirrow medium at **42°C** (thermophilic, small, gray, spreading colonies). **Gram stain:** characteristic **comma-shaped or seagull** GN rods. **Tests:** Oxidase positive. Darting corkscrew motility on wet prep. Rapid antigen or PCR for stool.",
        tx: "**Self-limited** mostly. **Antibiotics:** azithromycin (preferred due to rising fluoroquinolone resistance) for severe/prolonged cases.",
        pearl: "Campylobacter is the most common infectious trigger for Guillain-Barré syndrome. Isolation requires incubation at 42°C (Campylobacter likes it hot). Undercooked poultry is the classic exposure."
      },
      {
        name: "Vibrio cholerae",
        summary: "Oxidase+, GN curved rod rice-water diarrhea via cholera toxin (↑cAMP); ORS is cornerstone of treatment; fecal-oral from contaminated water",
        gram: "GN Bacillus (curved, comma-shaped, oxidase positive)",
        virulence: "**Cholera toxin (CT):** A-B toxin ADP-ribosylates Gsα → permanently activates adenylyl cyclase → ↑↑cAMP → opens CFTR chloride channel → massive Cl- and water secretion. **TCP (toxin-coregulated pili):** colonization factor. Non-invasive.",
        disease: "**Cholera:** profuse **rice-water diarrhea** (10-20 L/day) + vomiting → rapid severe dehydration, hypovolemic shock, metabolic acidosis, hypokalemia. No blood or WBCs in stool. Fecal-oral (contaminated water/shellfish).",
        lab_diagnosis: "**Culture:** TCBS agar (large, **yellow, flat** colonies due to sucrose fermentation). Blood agar (flat, gray, β-hemolytic). **Gram stain:** curved GN rods with single polar flagellum. **Tests:** Oxidase positive. Darkfield microscopy shows 'shooting star' darting motility.",
        tx: "**ORS (oral rehydration solution)** cornerstone (glucose cotransports Na+ via SGLT1 despite CFTR activation). IV fluids (Ringer's lactate) for severe hypovolemia. **Doxycycline** reduces shedding and duration.",
        pearl: "Cholera toxin permanently activates Gsα (increases cAMP), while pertussis toxin permanently inactivates Giα (also increases cAMP). ORS is effective because the SGLT1 glucose-sodium cotransporter remains intact and bypasses the defective chloride channel. V. vulnificus causes severe wound infections and sepsis in patients with liver disease after raw oyster exposure."
      },
      {
        name: "Proteus mirabilis",
        summary: "Urease+, swarming motility, non-lactose fermenter UTI with struvite (staghorn) kidney stones from alkaline urine; intrinsically resistant to nitrofurantoin",
        gram: "GN Bacillus (non-lactose fermenter, urease positive, highly motile)",
        virulence: "**Urease** (hydrolyzes urea → NH3 → alkaline urine → struvite/magnesium ammonium phosphate crystal precipitation → kidney stones). **Swarming motility** (flagella).",
        disease: "**UTI:** complicated UTIs in catheterized patients. Urine pH is consistently alkaline (>7.0). **Struvite kidney stones (staghorn calculi):** fill entire renal pelvis, radiopaque. Stones harbor bacteria leading to recurrent UTI.",
        lab_diagnosis: "**Culture:** Blood agar shows **swarming growth** (concentric rings/waves spreading across plate). CLED agar inhibits swarming for colony counting. MacConkey agar (colorless non-fermenter). **Tests:** Urease positive (rapid). Indole negative. Urinalysis: Alkaline pH >7.",
        tx: "**TMP-SMX or fluoroquinolones**. **Intrinsically resistant** to nitrofurantoin and tetracycline. Surgical removal or lithotripsy required for staghorn calculi.",
        pearl: "Urease positive + alkaline urine + staghorn calculi = Proteus. Nitrofurantoin does NOT work against Proteus. The swarming motility on blood agar is highly distinctive."
      }
    ]
  },
  {
    group: "Gram-Negative Bacilli - Respiratory",
    color: "bact",
    organisms: [
      {
        name: "Haemophilus influenzae",
        summary: "GN coccobacillus requiring factors X (hemin) and V (NAD) grows on chocolate agar only; Hib causes epiglottitis, meningitis; non-typeable causes otitis media/COPD exacerbations",
        gram: "GN Coccobacillus (pleomorphic, small)",
        virulence: "**Polyribitol phosphate (PRP) capsule** (type b most virulent serotype; prevented by Hib conjugate vaccine). **IgA protease.** Requires **factor X (hemin)** and **factor V (NAD)** from lysed RBCs for growth.",
        disease: "**Hib (type b, unvaccinated):** epiglottitis (drooling, stridor, tripod position, 'cherry-red epiglottis,' thumb sign on lateral neck X-ray), meningitis, bacteremia. **Non-typeable H. influenzae (NTHi):** otitis media (#1 cause in children along with S. pneumoniae), sinusitis, COPD exacerbations.",
        lab_diagnosis: "**Culture:** **Chocolate agar** (grows small, gray, translucent colonies because X and V factors are provided). Does NOT grow on standard blood agar unless adjacent to S. aureus (**Satellite phenomenon** S. aureus releases NAD/V factor via β-hemolysis). **Gram stain:** tiny pleomorphic GN coccobacilli. Quelling reaction for capsule typing.",
        tx: "**Epiglottitis:** secure airway first in OR, then **ceftriaxone** IV. **Otitis/sinusitis:** amoxicillin-clavulanate. **Rifampin prophylaxis** for household contacts of Hib invasive disease. **Vaccine:** Hib conjugate given at 2, 4, 6, 12-15 months.",
        pearl: "Epiglottitis management trap: Do NOT examine the throat of a child with suspected epiglottitis, as it may trigger complete airway obstruction. Send directly to the OR. The satellite phenomenon around S. aureus streaks on blood agar is a classic lab identifier for H. influenzae."
      },
      {
        name: "Bordetella pertussis",
        summary: "GN coccobacillus, obligate aerobe whooping cough; pertussis toxin (↑cAMP, lymphocytosis); grows on Bordet-Gengou agar; treat with azithromycin in catarrhal phase",
        gram: "GN Coccobacillus (small, obligate aerobe, encapsulated)",
        virulence: "**Pertussis toxin (PT):** ADP-ribosylates Giα → blocks Gi → ↑cAMP → impairs phagocyte killing + causes **lymphocytosis** (blocks lymphocyte migration from lymph nodes). **Filamentous hemagglutinin (FHA):** adherence. **Tracheal cytotoxin:** kills ciliated cells.",
        disease: "**Catarrhal phase (1-2 weeks):** mild URI symptoms, highly infectious. **Paroxysmal phase (2-6 weeks):** severe paroxysmal cough → inspiratory 'whoop' → post-tussive emesis. **Convalescent phase:** gradually resolving. **Infants <6 months:** high risk of apnea (no classic whoop).",
        lab_diagnosis: "**Tests:** CBC shows marked **lymphocytosis** (WBC 20k-50k with >80% lymphocytes). PCR of nasopharyngeal swab is most sensitive. **Culture:** Bordet-Gengou agar or Regan-Lowe charcoal agar (small, shiny, silver-gray 'mercury drop' or 'bisected pearl' colonies).",
        tx: "**Azithromycin** (most effective in catarrhal phase to reduce transmission; does not shorten paroxysmal phase). **Prevention:** DTaP primary series + **Tdap booster** (including pregnant women at 27-36 weeks).",
        pearl: "Absolute lymphocytosis in a patient with a paroxysmal cough is the hallmark of pertussis toxin activity blocking lymphocyte tissue entry. Infants under 6 months often present with life-threatening apnea rather than a 'whoop'. Azithromycin is given to prevent transmission, not to cure the cough once the paroxysmal phase begins."
      },
      {
        name: "Legionella pneumophila",
        summary: "Weakly GN, oxidase+, aerobic atypical pneumonia with extrapulmonary features (hyponatremia, diarrhea, confusion); air conditioning/water source; grows on BCYE agar",
        gram: "GN Bacillus (weakly staining; requires silver/Gimenez stain in tissue)",
        virulence: "**Obligate intracellular** pathogen of alveolar macrophages. **Type IV secretion system** prevents phagosome-lysosome fusion. Lives in biofilms in water systems (cooling towers, hospital water, hot tubs). Requires **L-cysteine** for growth.",
        disease: "**Legionnaires disease:** severe atypical pneumonia + **hyponatremia** (SIADH), watery diarrhea, confusion, elevated LFTs. Incubation 2-10 days. Source: cooling towers, decorative fountains. **No person-to-person transmission**. **Pontiac fever:** self-limited flu-like illness without pneumonia.",
        lab_diagnosis: "**Tests:** **Urine antigen test** (rapid, highly sensitive for serogroup 1). **Culture:** **BCYE agar** (requires L-cysteine and iron; gray-white 'cut-glass' colonies). **Histology:** Silver stain (Dieterle) demonstrates brown-black GN rods in tissue invisible on routine Gram stain. Oxidase positive.",
        tx: "**Azithromycin** or **fluoroquinolone** (levofloxacin/moxifloxacin). β-lactams are ineffective (intracellular organism).",
        pearl: "Severe pneumonia plus hyponatremia and diarrhea in an older male after hotel stay or hospital exposure is Legionnaires disease. BCYE agar requires L-cysteine. No person-to-person transmission means clusters point to a common environmental source."
      }
    ]
  },
  {
    group: "Gram-Negative Bacilli - Zoonotic",
    color: "bact",
    organisms: [
      {
        name: "Bartonella henselae",
        summary: "GN intracellular rod cat scratch disease; bacillary angiomatosis in HIV (vascular skin lesions mimicking KS); Warthin-Starry stain",
        gram: "GN Rod (small, intracellular, Warthin-Starry silver stain for tissue)",
        virulence: "Intracellular pathogen of erythrocytes and endothelial cells. **Angiogenic factors** (VEGF upregulation → bacillary angiomatosis). Transmitted by **cat scratch/bite** or inoculation of cat flea feces.",
        disease: "**Cat scratch disease (immunocompetent):** papule at scratch site → **tender regional lymphadenopathy** (axillary, cervical). **Bacillary angiomatosis (immunocompromised/HIV):** vascular proliferative skin lesions (red-purple papules/nodules). **Peliosis hepatis:** blood-filled hepatic cysts.",
        lab_diagnosis: "**Histology/Biopsy:** **Warthin-Starry silver stain** reveals small, pleomorphic GN rods in clumps within endothelial cells and macrophages (invisible on routine Gram stain). Lymph node shows stellate granulomas. **Tests:** Serology (IFA IgG), PCR on tissue. Culture is rarely done (requires ≥4 weeks on blood agar).",
        tx: "**Cat scratch disease:** azithromycin for moderate/severe LAD (mild is self-limited). **Bacillary angiomatosis/Peliosis hepatis:** doxycycline or erythromycin (prolonged course).",
        pearl: "Bacillary angiomatosis mimics Kaposi's sarcoma in HIV patients but is bacterial and highly treatable with antibiotics. Warthin-Starry silver stain is required to visualize the organism in tissue."
      },
      {
        name: "Brucella species",
        summary: "GN coccobacillus, obligate intracellular undulant (relapsing) fever, arthralgia, hepatosplenomegaly; unpasteurized dairy, farm animals; BSL-3 lab hazard",
        gram: "GN Coccobacillus (small, intracellular, aerobic)",
        virulence: "Obligate intracellular pathogen survives in macrophages. **Smooth LPS** inhibits complement activation. B. melitensis (goats), B. abortus (cattle), B. suis (pigs). Routes: unpasteurized dairy, aerosolized bacteria (lab hazard), skin contact.",
        disease: "**Brucellosis (undulant fever):** insidious onset **undulating (relapsing) fever**, profound malaise, arthralgia, night sweats, hepatosplenomegaly. **Complications:** sacroiliitis, osteomyelitis, epididymo-orchitis.",
        lab_diagnosis: "**Tests:** Blood cultures (positive in 50-70%; **BSL-3 precautions required**). Bone marrow culture is most sensitive. Serology: standard tube agglutination test (SAT) titer ≥1:160 diagnostic. **Culture:** Blood agar (small, smooth, translucent colonies after 48-72h or longer). Gram stain: small, faint GN coccobacilli. Oxidase/urease positive.",
        tx: "**Doxycycline + rifampin × 6 weeks** or **doxycycline + streptomycin** for severe/complicated cases.",
        pearl: "Undulant (relapsing) fever with exposure to unpasteurized goat cheese or farm animals is the classic Brucella vignette. Always notify the lab when ordering culture, as aerosolization during processing poses a major BSL-3 risk."
      },
      {
        name: "Francisella tularensis",
        summary: "GN coccobacillus tularemia; ultra-low infectious dose; tick/rabbit exposure; ulceroglandular form most common; pneumonic form severe; Category A bioterrorism agent",
        gram: "GN Coccobacillus (very small, faint, obligate intracellular)",
        virulence: "**Extremely low infectious dose** (10-50 organisms). Obligate intracellular survives in macrophages. Vector: Dermacentor/Amblyomma ticks, deer flies; direct contact with rabbits. BSL-3 pathogen.",
        disease: "**Ulceroglandular (most common):** skin ulcer with raised edges at inoculation site + painful regional lymphadenopathy. **Pneumonic (most severe):** from inhalation, high mortality. **Typhoidal:** septicemic.",
        lab_diagnosis: "**Tests:** Serology (microagglutination titer ≥1:160). PCR on tissue/ulcer swab. **Culture:** Requires **cysteine-glucose-blood agar** or chocolate agar (small, gray, opaque colonies under **BSL-3 conditions**). Generate infectious aerosols during lab processing. Gram stain shows faint GN coccobacilli.",
        tx: "**Streptomycin or gentamicin** (first-line). Doxycycline or ciprofloxacin as alternatives.",
        pearl: "A rabbit handler or individual with a tick bite presenting with a skin ulcer and profound regional lymphadenopathy has Tularemia. Tularemia has the lowest known infectious dose of any bacterium. Never send a culture without notifying the lab of a BSL-3 hazard."
      },
      {
        name: "Pasteurella multocida",
        summary: "GN coccobacillus rapidly progressive cellulitis within 24h after cat/dog bite; normal animal oral flora; treat with amoxicillin-clavulanate",
        gram: "GN Coccobacillus (small, bipolar staining 'safety pin' appearance)",
        virulence: "**Polysaccharide capsule** (antiphagocytic). Normal oral flora of cats (up to 75%) and dogs. Direct inoculation via bite puncture or scratch.",
        disease: "**Bite wound infection:** rapid onset cellulitis within **24-48 hours** erythema, swelling, intense localized pain. Cat bites cause deeper puncture wounds. Can progress to tenosynovitis, septic arthritis, osteomyelitis.",
        lab_diagnosis: "**Gram stain:** small GN coccobacilli with characteristic **bipolar staining** ('safety pin' appearance with Wright or Giemsa stain). **Culture:** Blood and MacConkey agar (small, gray, smooth, **β-hemolytic** on blood; colorless on MacConkey). Grows in 24-48 hours. **Tests:** Oxidase, catalase, and indole positive.",
        tx: "**Amoxicillin-clavulanate** (covers Pasteurella + oral anaerobes). Doxycycline if penicillin-allergic. **Do NOT use first-generation cephalosporins** (cefazolin, cephalexin) due to poor activity.",
        pearl: "Rapidly progressive cellulitis within 24 hours of a cat bite is highly specific for Pasteurella. Cat bites pose a higher risk of deep tissue infection than dog bites. First-generation cephalosporins are a common prescribing error for these injuries."
      }
    ]
  },
  {
    group: "Mycobacteria",
    color: "bact",
    organisms: [
      {
        name: "Mycobacterium tuberculosis",
        summary: "Acid-fast bacillus, strict aerobe TB; primary (Ghon complex), latent, and reactivation forms; cord factor (serpentine growth); treat with RIPE × 6 months",
        gram: "Acid-fast bacillus (waxy mycolic acids resist Gram stain; Ziehl-Neelsen stain required)",
        virulence: "**Cord factor (trehalose dimycolate):** serpentine growth in culture, inhibits phagosome-lysosome fusion, activates macrophages. **Sulfatides:** inhibit phagolysosome fusion. **Mycolic acids:** acid-fastness, resistance to killing. **Lipoarabinomannan (LAM):** inhibits IFN-γ signaling. Obligate aerobe → upper lobe tropism.",
        disease: "**Primary TB:** Ghon focus + hilar LAD = Ghon complex. **Latent TB:** positive TST/IGRA, asymptomatic, not contagious. **Reactivation TB:** upper lobe cavitary lesion, productive cough, night sweats, weight loss, hemoptysis. **Miliary TB:** millet-seed lesions in lungs/liver/spleen/meninges. **Extrapulmonary:** Pott's disease (vertebral), scrofula (cervical LAD), adrenal destruction (Addison's).",
        lab_diagnosis: "**Stains:** Ziehl-Neelsen (bright red AFB against blue counterstain), Auramine-rhodamine (yellow-green fluorescent rods). **Culture:** Löwenstein-Jensen agar (buff-colored, dry, granular, rough 'bread crumb' or 'cauliflower' colonies after 3-6 weeks), BACTEC 460 (liquid radiometric). Serpentine cording in liquid media. **Tests:** TST (Mantoux), IGRA (QuantiFERON-TB Gold).",
        tx: "**RIPE × 2 months** (Rifampin, Isoniazid, Pyrazinamide, Ethambutol) then **RI × 4 months**. **Latent TB:** Isoniazid × 9 months. Always add pyridoxine (B6) with INH.",
        pearl: "INH toxicities: hepatotoxicity, peripheral neuropathy (prevent with B6), drug-induced SLE. Rifampin: red/orange body fluids, potent CYP450 inducer. Pyrazinamide: hyperuricemia. Ethambutol: optic neuritis (check color vision). IGRA is preferred over TST in BCG-vaccinated patients due to lack of cross-reaction."
      },
      {
        name: "Mycobacterium leprae",
        summary: "Acid-fast bacillus leprosy; cannot be cultured in vitro; invades Schwann cells; cool temperature tropism; tuberculoid vs lepromatous forms; treat with MDT",
        gram: "Acid-fast bacillus (weakly acid-fast; grows only at cool temperatures)",
        virulence: "Infects **Schwann cells** (peripheral nerve demyelination → sensory/motor deficits) and skin macrophages. Grows preferentially at **cool temperatures (27-30°C)** → skin, peripheral nerves, testes, anterior eye. Very long incubation period.",
        disease: "**Tuberculoid leprosy (paucibacillary):** strong Th1 response → well-defined hypopigmented anesthetic skin plaques, visibly enlarged peripheral nerves. **Lepromatous leprosy (multibacillary):** weak Th1 response (anergy) → diffuse skin infiltration, leonine facies, saddle-nose deformity, bilateral glove-and-stocking neuropathy.",
        lab_diagnosis: "**Slit-skin smear (Ziehl-Neelsen):** solid-staining AFB (numerous in lepromatous, absent/rare in tuberculoid). **Histology:** Tuberculoid shows well-formed granulomas with few AFB; lepromatous shows foamy macrophages ('Virchow cells') stuffed with AFB clumps ('globi'). **Tests:** Lepromin test (Mitsuda test) is positive in tuberculoid and negative in lepromatous. Cannot be cultured in vitro.",
        tx: "**Tuberculoid:** dapsone + rifampin × 6 months. **Lepromatous:** dapsone + rifampin + clofazimine × 12 months. **Clofazimine:** causes reddish-brown skin discoloration.",
        pearl: "Tuberculoid leprosy features high immunity and few bacilli; lepromatous features low immunity and many bacilli. The organism cannot be cultured on artificial media; armadillos are the natural reservoir and experimental host. Dapsone resistance is common, requiring multi-drug therapy."
      }
    ]
  },
  {
    group: "Spirochetes",
    color: "bact",
    organisms: [
      {
        name: "Treponema pallidum",
        summary: "Spirochete, too thin to Gram stain syphilis; primary (chancre), secondary (diffuse rash), tertiary (gummas, aortitis, tabes dorsalis); treat with penicillin G",
        gram: "Spirochete (darkfield microscopy or silver stain required)",
        virulence: "**Outer membrane proteins:** antigenic variation. Survives intracellularly. Transmitted via sexual contact, transplacentally, or blood transfusion.",
        disease: "**Primary:** painless indurated chancre + painless regional LAD. **Secondary:** flu-like illness + diffuse maculopapular rash (including palms and soles) + condylomata lata. **Tertiary:** gummas, cardiovascular syphilis (aortitis, aortic regurgitation), neurosyphilis (tabes dorsalis). **Congenital:** saddle-nose, Hutchinson teeth, saber shins, deafness.",
        lab_diagnosis: "**Microscopy:** Darkfield microscopy of chancre shows thin, tightly coiled, corkscrew-shaped spirochetes with slow, rotating motility. Silver stain used for tissue. **Screening (Non-treponemal):** VDRL and RPR detect anti-cardiolipin antibodies; quantitative to monitor treatment. **Confirmatory (Treponemal):** FTA-ABS, TPPA detect anti-treponemal antibodies; remain positive for life. Cannot be cultured.",
        tx: "**All stages:** Benzathine penicillin G. **Neurosyphilis:** aqueous crystalline penicillin G IV.",
        pearl: "A painless chancre followed weeks later by a rash on the palms and soles is classic. Argyll Robertson pupil accommodates but does not react to light. The Jarisch-Herxheimer reaction is a systemic cytokine release from organism death, not a penicillin allergy; continue therapy and give antipyretics. False-positive VDRL causes: SLE, Leprosy, Antiphospholipid syndrome, Pregnancy (SLAP)."
      },
      {
        name: "Borrelia burgdorferi",
        summary: "Spirochete, Ixodes tick vector Lyme disease; erythema migrans, Bell's palsy, heart block, monoarthritis; treat with doxycycline",
        gram: "Spirochete (visualized on Giemsa or Wright stain; Gram stain negative)",
        virulence: "Transmitted by **Ixodes scapularis (deer tick)**. Tick must be attached **≥36-48 hours**. **OspC and VlsE:** surface proteins for immune evasion. Reservoir: white-footed mouse.",
        disease: "**Stage 1 (Early localized):** erythema migrans (expanding bull's-eye rash). **Stage 2 (Early disseminated):** bilateral Bell's palsy, Lyme carditis (AV block). **Stage 3 (Late disseminated):** monoarthritis (large effusion, often knee), encephalopathy.",
        lab_diagnosis: "**Diagnosis:** Clinical for erythema migrans. **Two-tier serology** for disseminated disease: ELISA (screening) followed by Western blot (confirmatory). PCR on synovial fluid for Lyme arthritis. **Microscopy:** Darkfield or Giemsa stain shows loose, irregular coiling. Silver stain for tissue. **Culture:** BSK medium (extremely slow, not used clinically).",
        tx: "**Early localized:** doxycycline × 10-21 days (amoxicillin in children <8 or pregnant). **Lyme carditis/meningitis:** IV ceftriaxone for severe forms.",
        pearl: "Bilateral Bell's palsy equals Lyme disease until proven otherwise. Two-tier testing is mandatory because ELISA has high false-positive rates; do not treat a positive ELISA without a confirmatory Western blot."
      },
      {
        name: "Leptospira interrogans",
        summary: "Spirochete leptospirosis; contaminated animal urine (rats); Weil's disease (jaundice, renal failure, hemorrhage); treat with doxycycline or penicillin",
        gram: "Spirochete (silver stain or darkfield for visualization)",
        virulence: "Transmitted via skin/mucous membrane contact with water or soil contaminated by **infected animal urine** (rats, dogs). Penetrates intact mucous membranes.",
        disease: "**Phase 1 (Leptospiremic):** high fever, severe headache, calf myalgia, conjunctival suffusion. **Phase 2 (Immune):** aseptic meningitis. **Weil's disease (severe):** jaundice + acute kidney injury + hemorrhage (pulmonary, GI).",
        lab_diagnosis: "**Tests:** Microscopic agglutination test (MAT) is the gold standard serology. IgM ELISA and PCR. **Microscopy:** Darkfield shows highly motile, tightly coiled spirochetes with hooked ends ('question mark' or 'shepherd's crook'). Silver stain for tissue. **Culture:** EMJH medium (very slow).",
        tx: "**Mild:** doxycycline or amoxicillin. **Severe (Weil's disease):** IV penicillin G or IV ceftriaxone.",
        pearl: "Conjunctival suffusion (red eyes without exudate) plus severe calf myalgia and recent flood/water exposure suggests Leptospirosis. Weil's disease triad includes jaundice, acute renal failure, and hemorrhage. The jaundice stems from direct hepatocellular damage combined with hemolysis."
      }
    ]
  },
  {
    group: "Gram-Indeterminate & Atypical Bacteria",
    color: "bact",
    organisms: [
      {
        name: "Chlamydia trachomatis",
        summary: "Obligate intracellular, no cell wall STI: urethritis/cervicitis, PID; neonatal conjunctivitis and pneumonia; LGV; trachoma; treat with azithromycin or doxycycline",
        gram: "Obligate intracellular (no cell wall, not Gram stained)",
        virulence: "**Biphasic life cycle:** Elementary body (EB) is the infectious extracellular form; Reticulate body (RB) is the replicating intracellular form. No peptidoglycan cell wall.",
        disease: "**Serovars A-C:** trachoma (blindness). **Serovars D-K:** urethritis, cervicitis, PID, neonatal conjunctivitis (2-5 days), infant pneumonia (staccato cough). **Serovars L1-L3:** lymphogranuloma venereum (LGV painless ulcer → tender inguinal buboes).",
        lab_diagnosis: "**Tests:** NAAT (nucleic acid amplification test) is the gold standard for urogenital infections. **Microscopy:** Giemsa stain shows intracytoplasmic inclusions ('morulae') in epithelial cells. Cannot be Gram stained. No growth on standard bacteriologic media.",
        tx: "**Uncomplicated:** azithromycin 1g PO × 1 dose or doxycycline 100mg BID × 7 days. **Neonatal:** oral erythromycin. Co-treat for gonorrhea.",
        pearl: "Always co-treat for gonorrhea when treating chlamydia. Neonatal chlamydial conjunctivitis presents at 5-14 days (later than gonococcal). Neonatal pneumonia presents with an afebrile staccato cough and eosinophilia. LGV groove sign occurs when the inguinal ligament separates enlarged inguinal and femoral lymph nodes."
      },
      {
        name: "Chlamydophila pneumoniae",
        summary: "Obligate intracellular atypical (walking) pneumonia; gradual onset, persistent sore throat; treat with azithromycin or doxycycline",
        gram: "Obligate intracellular (no cell wall)",
        virulence: "Obligate intracellular with EB/RB lifecycle. Pear-shaped EBs. Human-to-human spread; no animal reservoir.",
        disease: "**Atypical pneumonia:** gradual onset over 1-3 weeks persistent sore throat, dry hacking cough. Clinically milder than radiographic appearance. Associated with asthma exacerbations.",
        lab_diagnosis: "**Tests:** PCR of nasopharyngeal swab is most sensitive. Serology (microimmunofluorescence/MIF) shows 4-fold rise. **Microscopy:** Giemsa stain shows intracellular inclusions. Cannot be Gram stained.",
        tx: "**Azithromycin** or **doxycycline**. β-lactams are ineffective.",
        pearl: "Human-to-human transmission only; no bird reservoir. Pharyngitis often precedes the atypical pneumonia. β-lactams are useless because there is no peptidoglycan cell wall target."
      },
      {
        name: "Chlamydophila psittaci",
        summary: "Obligate intracellular psittacosis (parrot fever); exposure to birds; atypical pneumonia with splenomegaly; treat with doxycycline",
        gram: "Obligate intracellular (no cell wall)",
        virulence: "Transmitted by inhalation of aerosolized bird feces or secretions (parrots, pigeons). Systemic spread to liver, spleen, and CNS.",
        disease: "**Psittacosis:** abrupt onset high fever, severe headache, dry cough, pneumonia with **splenomegaly**. Systemic features: hepatitis, encephalitis.",
        lab_diagnosis: "**Tests:** PCR of respiratory sample is most specific. Serology shows 4-fold rise. Cannot be Gram stained. BSL-3 pathogen requiring lab notification before culture.",
        tx: "**Doxycycline** (first-line).",
        pearl: "Bird exposure (parrots, pigeons, poultry) plus atypical pneumonia and splenomegaly equals psittacosis. Splenomegaly is a key distinguishing feature from other atypical pneumonias."
      },
      {
        name: "Coxiella burnetii",
        summary: "Q fever obligate intracellular; resistant spores; farm animal birth products; atypical pneumonia + hepatitis; endocarditis in chronic form; treat with doxycycline",
        gram: "Obligate intracellular",
        virulence: "**Highly resistant spore-like forms** (survive pasteurization). Transmitted via inhalation of aerosolized birth products (placenta, amniotic fluid) from infected farm animals. Not tick-borne.",
        disease: "**Acute Q fever:** atypical pneumonia + granulomatous hepatitis. **Chronic Q fever:** culture-negative endocarditis (months to years later).",
        lab_diagnosis: "**Tests:** Serology (IFA) is primary; Phase II antibodies indicate acute infection, while Phase I IgG (≥1:800) indicates chronic infection/endocarditis. PCR on blood/tissue. **Histology:** Liver biopsy shows 'doughnut' or 'fibrin ring' granulomas. Gimenez/Giemsa stains show intracellular red rods.",
        tx: "**Acute:** doxycycline. **Chronic:** doxycycline + hydroxychloroquine (alkalinizes phagolysosome).",
        pearl: "The only Rickettsia-like organism not transmitted by an arthropod bite; inhaled from farm animal birth products. Doughnut granulomas on liver biopsy are highly characteristic."
      },
      {
        name: "Gardnerella vaginalis",
        summary: "Gram-variable rod bacterial vaginosis (BV); clue cells, positive whiff test, pH >4.5; treat with metronidazole",
        gram: "Gram-variable to weakly GN rod",
        virulence: "Disruption of normal Lactobacillus-dominant vaginal flora. Produces **biogenic amines** → fishy odor. Biofilm on vaginal epithelium.",
        disease: "**Bacterial vaginosis (BV):** thin, homogeneous gray-white discharge with fishy odor. Minimal inflammation (few WBCs). Complications: PID risk, preterm labor.",
        lab_diagnosis: "**Microscopy (Wet Mount):** Clue cells (vaginal epithelial cells with borders obscured by stippled bacteria); absence of Lactobacilli. **Tests:** Whiff test (10% KOH added to discharge produces fishy amine odor). Vaginal pH >4.5. **Gram stain (Nugent score):** Decreased large GP rods (Lactobacilli) and increased Gram-variable pleomorphic coccobacilli.",
        tx: "**Metronidazole** or **clindamycin**. Treat symptomatic women and pregnant women.",
        pearl: "Bacterial vaginosis is a dysbiosis presenting with fishy odor, gray discharge, clue cells, pH >4.5, and no inflammation (no WBCs). Clue cells are pathognomonic."
      },
      {
        name: "Mycoplasma pneumoniae",
        summary: "No cell wall walking pneumonia; cold agglutinins; CXR worse than clinical picture; treat with azithromycin or doxycycline",
        gram: "No cell wall (pleomorphic, cannot be Gram stained)",
        virulence: "**No cell wall** → resistant to all β-lactams. **P1 adhesin:** attaches to ciliated respiratory epithelial cells → ciliostasis.",
        disease: "**Atypical (walking) pneumonia:** young adults/military. Gradual onset dry hacking cough, low-grade fever. **Extrapulmonary:** Stevens-Johnson syndrome, autoimmune hemolytic anemia.",
        lab_diagnosis: "**Tests:** PCR of nasopharyngeal swab is most sensitive. Serology (IgM/IgG 4-fold rise). **Bedside Test:** Cold agglutinins (blood agglutinates at 4°C, clears at 37°C). **Culture:** Eaton agar or SP4 medium shows tiny 'fried egg' colonies (requires magnification). Cannot be Gram stained.",
        tx: "**Azithromycin** or **doxycycline**. β-lactams are completely ineffective.",
        pearl: "β-lactams are completely ineffective due to the lack of a cell wall. Cold agglutinins (IgM anti-I) can cause mild hemolytic anemia and Raynaud-like symptoms in the cold. Patients typically 'walk around' appearing much less ill than the diffuse bilateral infiltrates on CXR suggest."
      },
      {
        name: "Rickettsia rickettsii",
        summary: "GN obligate intracellular rod Rocky Mountain Spotted Fever (RMSF); Dermacentor tick; rash begins on wrists/ankles → spreads centripetally, involves palms/soles; treat with doxycycline immediately",
        gram: "GN Rod (obligate intracellular)",
        virulence: "Transmitted by **Dermacentor tick**. Infects endothelial cells → vasculitis → rash, DIC. Actin-based motility for cell-to-cell spread.",
        disease: "**RMSF:** sudden high fever, severe headache, myalgia. **Rash:** begins day 2-5 on **wrists and ankles** → spreads **centripetally** to trunk. Involves **palms and soles**. Labs: thrombocytopenia, hyponatremia.",
        lab_diagnosis: "**Tests:** Clinical diagnosis is primary; treat immediately. Serology (IFA) shows 4-fold rise but is only positive after 7-10 days. PCR on blood/biopsy. **Histology:** Immunohistochemistry (IHC) of skin biopsy rash is the most specific rapid test. Gimenez or Giemsa stains show GN intracellular rods in endothelial cells.",
        tx: "**Doxycycline** start immediately on clinical suspicion. Do NOT wait for serology.",
        pearl: "A rash starting on the wrists and ankles that spreads inward (centripetal) and involves the palms and soles is RMSF until proven otherwise. Never delay doxycycline to wait for serology; mortality increases dramatically with each day of delay."
      },
      {
        name: "Rickettsia prowazekii",
        summary: "GN obligate intracellular rod epidemic typhus; body louse vector; rash spares palms/soles; Brill-Zinsser disease; treat with doxycycline",
        gram: "GN Rod (obligate intracellular)",
        virulence: "Transmitted by **human body louse**. Infects endothelial cells → systemic vasculitis. Can remain latent in lymph nodes for decades.",
        disease: "**Epidemic typhus:** sudden high fever, headache, maculopapular rash starting on trunk → extremities, **spares palms and soles**. **Brill-Zinsser disease:** milder reactivation years later.",
        lab_diagnosis: "**Tests:** Serology (IFA preferred) or PCR on blood/tissue. **Histology:** Gimenez or Giemsa stain shows intracellular GN rods in endothelial cells. Obligate intracellular, requires BSL-3 culture.",
        tx: "**Doxycycline**.",
        pearl: "Epidemic typhus rash spreads outward and classically spares the palms and soles (the opposite of RMSF). Transmitted by the human body louse, it is historically associated with war and overcrowding."
      }
    ]
  }
],

viruses: [
{
      group: "DNA Viruses - Herpesviruses",
      color: "vir",
      organisms: [
        {
          name: "HSV-1 and HSV-2",
          summary: "dsDNA, enveloped latent in sensory ganglia; HSV-1: oral herpes, keratoconjunctivitis, temporal lobe encephalitis; HSV-2: genital herpes, neonatal herpes; treat with acyclovir",
          gram: "dsDNA, enveloped (Herpesviridae)",
          virulence: "**Glycoproteins (gB, gC, gD)** mediate cell entry via heparan sulfate. **Viral thymidine kinase (TK):** phosphorylates acyclovir. **LAT (latency-associated transcripts):** maintain latency in neurons.",
          disease: "**HSV-1:** primary gingivostomatitis, herpes labialis, keratoconjunctivitis (dendritic corneal ulcers), **herpes encephalitis** (temporal lobe). **HSV-2:** genital herpes, **neonatal herpes** (disseminated or CNS). **Both:** esophagitis, herpetic whitlow.",
          lab_diagnosis: "**Tests:** PCR is the gold standard for encephalitis. DFA (direct fluorescent antibody) from vesicle swab. **Microscopy/Histology:** Tzanck smear shows multinucleated giant cells . Brain biopsy shows **Cowdry type A inclusions** (eosinophilic intranuclear inclusions with clear halo) .",
          tx: "**Acyclovir**, valacyclovir, or famciclovir. **HSV encephalitis:** IV acyclovir empirically. **Acyclovir-resistant HSV:** foscarnet.",
          pearl: "Temporal lobe encephalitis equals HSV-1 until proven otherwise. The Tzanck smear cannot distinguish HSV from VZV. Acyclovir resistance indicates a TK-deficient mutant, requiring foscarnet which bypasses the thymidine kinase activation step."
        },
        {
          name: "VZV (HHV-3) - Varicella-Zoster Virus",
          summary: "dsDNA, enveloped chickenpox (primary, airborne); latent in dorsal root ganglia; reactivates as shingles; Ramsay Hunt syndrome; treat with acyclovir; vaccine-preventable",
          gram: "dsDNA, enveloped (Herpesviridae)",
          virulence: "Highly contagious via **airborne and droplet contact**. Establishes **latency in dorsal root ganglia** (sensory).",
          disease: "**Varicella (chickenpox):** pruritic rash (papules → vesicles → crusts) with **all stages simultaneously present**. **Herpes zoster (shingles):** reactivation in single dermatome, post-herpetic neuralgia. **Zoster ophthalmicus (V1):** Hutchinson's sign. **Ramsay Hunt syndrome:** reactivation in geniculate ganglion causing CN VII palsy.",
          lab_diagnosis: "**Tests:** DFA or PCR from vesicle scraping (distinguishes from HSV). **Microscopy:** Tzanck smear shows multinucleated giant cells (identical to HSV). Histology shows Cowdry type A inclusions.",
          tx: "**Varicella:** oral acyclovir for adults/immunocompromised; supportive for healthy children. **Shingles:** oral acyclovir/valacyclovir. **Vaccines:** Varivax (live, children), Shingrix (recombinant, adults ≥50).",
          pearl: "Never give aspirin to children with varicella due to the risk of Reye syndrome (hepatic encephalopathy). Ramsay Hunt syndrome presents as a classic triad of facial palsy, ear vesicles, and hearing loss. Chickenpox lesions appear in multiple simultaneous stages, unlike smallpox lesions which develop synchronously."
        },
        {
          name: "EBV (HHV-4) - Epstein-Barr Virus",
          summary: "dsDNA, enveloped infectious mononucleosis; heterophile antibodies (Monospot); atypical lymphocytes; ampicillin rash; transforms B cells → lymphomas",
          gram: "dsDNA, enveloped (Herpesviridae)",
          virulence: "Infects **B cells via CD21**. **EBNA** and **LMP** immortalize B cells and drive lymphomagenesis. Infects oropharyngeal epithelium first, then B cells.",
          disease: "**Infectious mononucleosis:** fever, **exudative pharyngitis**, **posterior cervical lymphadenopathy**, **splenomegaly**, profound fatigue. **EBV-associated malignancies:** Burkitt lymphoma (endemic African, jaw mass), CNS lymphoma (HIV CD4 <50), nasopharyngeal carcinoma, Hodgkin lymphoma (mixed cellularity).",
          lab_diagnosis: "**Tests:** Monospot test detects heterophile IgM antibodies that agglutinate horse/sheep RBCs. EBV-specific serology (VCA IgM, EBNA). **Microscopy:** Peripheral blood smear shows **atypical lymphocytes** (Downey cells large, irregular with abundant pale cytoplasm indenting around RBCs) .",
          tx: "**Supportive**. Avoid contact sports for 3-4 weeks to prevent splenic rupture. **Avoid ampicillin/amoxicillin**.",
          pearl: "A patient prescribed ampicillin for suspected strep throat who develops a diffuse maculopapular rash has EBV mononucleosis. The atypical lymphocytes seen on the peripheral smear are reactive CD8+ T cells, not the infected B cells themselves."
        },
        {
          name: "CMV (HHV-5) - Cytomegalovirus",
          summary: "dsDNA, enveloped owl-eye intranuclear inclusions; congenital CMV; immunocompromised: retinitis, esophagitis, colitis; treat with ganciclovir",
          gram: "dsDNA, enveloped (Herpesviridae largest herpesvirus)",
          virulence: "Latent in **mononuclear cells (monocytes, CD34+ progenitors)**. Downregulates MHC class I.",
          disease: "**Congenital CMV:** periventricular calcifications, sensorineural hearing loss, chorioretinitis, thrombocytopenic petechiae. **Immunocompromised (HIV/transplant):** **CMV retinitis** (CD4 <50, 'pizza pie fundus'), **esophagitis** (linear ulcers), colitis. **Healthy adults:** heterophile-negative mononucleosis.",
          lab_diagnosis: "**Tests:** CMV quantitative PCR (blood/CSF). CMV antigenemia (pp65). **Microscopy/Histology:** Enlarged cells with **'owl-eye' inclusions** (large central eosinophilic intranuclear inclusion surrounded by a clear halo) .",
          tx: "**Ganciclovir** or valganciclovir (requires phosphorylation by CMV UL97 kinase). **Resistance:** foscarnet or cidofovir.",
          pearl: "Congenital CMV causes periventricular calcifications, differentiating it from congenital Toxoplasma which causes diffuse scattered calcifications. CMV esophagitis features linear ulcers, contrasting with the punched-out volcano ulcers of HSV. Ganciclovir resistance occurs via mutation of the UL97 viral kinase."
        },
        {
          name: "HHV-6 - Roseola",
          summary: "dsDNA, enveloped roseola infantum; high fever 3-5 days → sudden defervescence → rose-colored truncal rash; febrile seizures during fever phase; reactivates in transplant",
          gram: "dsDNA, enveloped (Herpesviridae)",
          virulence: "Infects **CD4+ T cells and monocytes** via CD46 receptor. Can integrate into host chromosomal telomeres. Reactivates with immunosuppression.",
          disease: "**Roseola infantum:** high fever (39-40°C) for 3-5 days in an infant who appears remarkably well. Sudden fever break is followed by a rose-colored blanching macular rash on the trunk. **Febrile seizures** common during fever phase. **Transplant recipients:** limbic encephalitis, hepatitis.",
          lab_diagnosis: "**Tests:** Clinical diagnosis in infants. HHV-6 PCR for transplant encephalitis. Chromosomally integrated HHV-6 can cause falsely elevated PCR results without active infection.",
          tx: "**Supportive** (antipyretics). **Transplant encephalitis:** ganciclovir or foscarnet.",
          pearl: "The clinical sequence is diagnostic: the child has a high fever for days, the fever breaks abruptly, and only then does the macular rash appear. Febrile seizures happen exclusively during the fever phase, not the rash phase."
        },
        {
          name: "HHV-8 - Kaposi Sarcoma Herpesvirus",
          summary: "dsDNA, enveloped Kaposi's sarcoma (violaceous vascular skin/mucosal lesions) in AIDS and transplant; primary effusion lymphoma; multicentric Castleman disease",
          gram: "dsDNA, enveloped (Herpesviridae)",
          virulence: "**Viral oncogenes:** v-cyclin, v-FLIP, vIL-6. **VEGF upregulation** causes abnormal vascular proliferation. Infects B cells and endothelial cells.",
          disease: "**Kaposi's sarcoma (KS):** violaceous vascular skin lesions. **AIDS-KS:** widespread skin, **hard palate** (pathognomonic location), visceral involvement. **Primary effusion lymphoma (PEL):** B-cell lymphoma growing in body cavities without solid tumor mass. **Multicentric Castleman disease.**",
          lab_diagnosis: "**Histology (Skin biopsy):** proliferating spindle cells, slit-like vascular spaces, extravasated RBCs, hemosiderin. **Tests:** IHC for **LANA-1** (nuclear dot staining in spindle cells confirms KS).",
          tx: "**AIDS-KS:** **HAART** (immune reconstitution often causes complete regression). Localized: radiation, cryotherapy. Systemic: liposomal doxorubicin.",
          pearl: "Must be distinguished from bacillary angiomatosis (Bartonella infection), which also causes purple vascular lesions in HIV patients but requires antibiotics instead of antiretrovirals or chemotherapy. KS on the hard palate is an AIDS-defining illness."
        }
      ]
    },
    {
      group: "DNA Viruses - Other",
      color: "vir",
      organisms: [
        {
          name: "Polyomavirus (JC Virus & BK Virus)",
          summary: "dsDNA, non-enveloped latent in kidneys; JC virus → PML in AIDS; BK virus → hemorrhagic cystitis and nephropathy in transplant",
          gram: "dsDNA, non-enveloped (Polyomaviridae)",
          virulence: "Latent in kidney tubular epithelium. JC virus is also latent in oligodendrocytes. Reactivation destroys host cells.",
          disease: "**JC virus → PML (Progressive Multifocal Leukoencephalopathy):** AIDS (CD4 <100) or natalizumab therapy. Rapidly progressive multifocal neurological deficits, no fever. **BK virus:** renal transplant → hemorrhagic cystitis and BK nephropathy.",
          lab_diagnosis: "**JC/PML:** CSF PCR for JC virus. **MRI brain:** multifocal asymmetric white matter lesions **without enhancement** and without mass effect. **Histology (PML):** demyelination, enlarged oligodendrocytes with ground-glass inclusions. **BK virus:** urine PCR, urine cytology shows **decoy cells**.",
          tx: "**JC/PML:** HAART for immune reconstitution. Plasma exchange for natalizumab-associated PML. **BK virus:** reduce immunosuppression.",
          pearl: "PML lesions do not ring-enhance and have no mass effect on MRI, distinguishing them from CNS lymphoma and cerebral toxoplasmosis. BK decoy cells on urine cytology closely mimic urothelial carcinoma cells. Natalizumab blocks lymphocyte entry into the CNS, explicitly enabling JC virus reactivation."
        },
        {
          name: "HPV (Human Papillomavirus)",
          summary: "dsDNA, non-enveloped low-risk (6, 11: warts); high-risk (16, 18: cervical/oropharyngeal cancer); E6 degrades p53, E7 inactivates Rb; koilocytes on Pap smear",
          gram: "dsDNA, non-enveloped (Papillomaviridae)",
          virulence: "**E6 oncoprotein:** targets **p53** for degradation. **E7 oncoprotein:** inactivates **Rb**. **Integration of HPV DNA** into the host genome disrupts the E2 repressor, driving unregulated E6/E7 expression.",
          disease: "**Low-risk (6, 11):** condylomata acuminata (anogenital warts), recurrent respiratory papillomatosis. **High-risk (16, 18):** cervical carcinoma, oropharyngeal carcinoma (tonsils, base of tongue), anal carcinoma. **CIN:** precursor to invasive cervical cancer.",
          lab_diagnosis: "**Cytology (Pap smear):** shows **koilocytes** (enlarged squamous cells with perinuclear clearing/halo and wrinkled 'raisinoid' nuclei) . **Tests:** HPV DNA PCR/hybrid capture. p16 IHC staining acts as a surrogate marker for high-risk HPV integration.",
          tx: "**Warts:** cryotherapy, podophyllin, imiquimod. **High-grade CIN:** LEEP or cone biopsy. **Prevention:** Gardasil 9 vaccine.",
          pearl: "E6 kills p53 and E7 kills Rb. Koilocytes on a Pap smear are pathognomonic for HPV infection. HPV-positive oropharyngeal cancer carries a significantly better prognosis and is more radiosensitive than HPV-negative squamous cell carcinoma."
        },
        {
          name: "Parvovirus B19",
          summary: "ssDNA, non-enveloped smallest DNA virus; erythema infectiosum in children; aplastic crisis in sickle cell; hydrops fetalis in pregnancy",
          gram: "ssDNA, non-enveloped (Parvoviridae)",
          virulence: "Infects **erythroid progenitor cells** via the **P antigen (globoside)** receptor. Cytopathic effect causes transient arrest of erythropoiesis.",
          disease: "**Erythema infectiosum (Fifth disease):** 'slapped cheek' facial rash followed by a lacy reticular rash on the trunk. **Adults:** symmetric polyarthropathy mimicking rheumatoid arthritis. **Sickle cell/hemolytic anemia:** **aplastic crisis** (sudden severe drop in reticulocytes). **Pregnancy:** fetal anemia leading to **hydrops fetalis**.",
          lab_diagnosis: "**Tests:** Serology (IgM for acute). PCR for immunocompromised or fetal diagnosis. **Histology:** Bone marrow biopsy in aplastic crisis shows **giant pronormoblasts** (enlarged erythroid precursors with large pale intranuclear inclusions and cytoplasmic pseudopods).",
          tx: "**Immunocompetent:** supportive. **Aplastic crisis:** RBC transfusion. **Immunocompromised:** IVIG. **Hydrops fetalis:** intrauterine fetal blood transfusion.",
          pearl: "An aplastic crisis in a sickle cell patient is Parvovirus B19 until proven otherwise. A child with Fifth disease is no longer infectious once the 'slapped cheek' rash appears, as the rash is immune-mediated."
        },
        {
          name: "Adenovirus",
          summary: "dsDNA, non-enveloped pharyngoconjunctival fever, epidemic keratoconjunctivitis, pneumonia in military recruits, hemorrhagic cystitis",
          gram: "dsDNA, non-enveloped (Adenoviridae)",
          virulence: "**Fiber protein** binds CAR receptor. **Penton base** mediates endosome escape. Non-enveloped structure makes it highly **resistant to lipid solvents, alcohol, and desiccation**.",
          disease: "**Pharyngoconjunctival fever (PCF):** fever, pharyngitis, and follicular conjunctivitis linked to swimming pools. **Epidemic keratoconjunctivitis (EKC):** severe contagious conjunctivitis with corneal infiltrates. **Pneumonia:** severe atypical pneumonia in military recruits. **Hemorrhagic cystitis:** in immunocompromised transplant patients. **Intussusception:** in children (acts as a lead point).",
          lab_diagnosis: "**Tests:** PCR, DFA, or rapid antigen testing. **Culture:** Cell rounding and grape-like clusters. **Histology:** Lung biopsy shows **smudge cells** (large, round basophilic intranuclear inclusions smearing the entire nucleus).",
          tx: "**Supportive**. **Military recruits:** live oral vaccine (types 4 and 7) in an enteric-coated capsule. Strict contact precautions for EKC.",
          pearl: "Because it lacks a lipid envelope, adenovirus is resistant to alcohol-based hand sanitizers, leading to massive nosocomial outbreaks in eye clinics. Smudge cells in a lung biopsy indicate adenovirus pneumonia."
        },
        {
          name: "Poxvirus (Smallpox & Molluscum Contagiosum)",
          summary: "dsDNA, enveloped largest and most complex virus; replicates in cytoplasm; smallpox (eradicated); molluscum contagiosum (umbilicated papules)",
          gram: "dsDNA, enveloped (Poxviridae)",
          virulence: "**Replicates entirely in host cell cytoplasm** because it carries its own DNA-dependent RNA polymerase and DNA polymerase. **Guarnieri bodies:** cytoplasmic inclusion factories.",
          disease: "**Smallpox (variola):** synchronous pustular rash starting on the face and extremities and spreading to the trunk (centrifugal), involves palms and soles. **Molluscum contagiosum:** pearly, dome-shaped, **umbilicated papules** (central dimple). **Mpox (monkeypox):** zoonotic, rash similar to smallpox, prominent lymphadenopathy.",
          lab_diagnosis: "**Microscopy/EM:** Electron microscopy shows unique **brick-shaped virions** with a dumbbell-shaped core . **Histology (Molluscum):** **Henderson-Paterson bodies** (large eosinophilic cytoplasmic inclusions in keratinocytes). PCR for definitive diagnosis.",
          tx: "**Smallpox/Mpox:** tecovirimat (TPOXX). **Molluscum:** cryotherapy, curettage, or observation in immunocompetent children.",
          pearl: "Poxvirus is the only DNA virus that replicates entirely in the cytoplasm. Smallpox lesions are completely synchronous, meaning all lesions are at the exact same stage of development, unlike the asynchronous crops of varicella."
        },
        {
          name: "Hepatitis B (HBV) & Hepatitis D (HDV)",
          summary: "HBV: partially dsDNA, reverse transcriptase chronic hepatitis, cirrhosis, HCC; HDV: defective ssRNA requires HBsAg",
          gram: "HBV: partially dsDNA, enveloped (Hepadnaviridae). HDV: ssRNA (-), enveloped (requires HBV HBsAg)",
          virulence: "**HBV reverse transcriptase:** replicates via RNA intermediate. **cccDNA (covalently closed circular DNA):** stable nuclear reservoir that prevents total cure. **HBxAg:** promotes host gene expression and hepatocellular carcinoma (HCC). **HDV:** cannot infect cells without utilizing HBV's surface antigen for its own envelope.",
          disease: "**Acute HBV:** flu-like illness, jaundice, immune-complex arthralgias/rash. **Chronic HBV:** high risk in perinatally infected infants. **Complications:** cirrhosis, **HCC** (can develop without cirrhosis), polyarteritis nodosa (PAN), membranous nephropathy. **HDV superinfection:** chronic HBV carrier acquires HDV, leading to rapidly accelerated cirrhosis and fulminant hepatitis.",
          lab_diagnosis: "**Serology:** HBsAg (active infection), Anti-HBs (immunity), Anti-HBc IgM (acute), Anti-HBc IgG (past/chronic). **Tests:** HBV DNA quantitative PCR. **Histology:** Liver biopsy shows **ground-glass hepatocytes** (smooth eosinophilic cytoplasm full of HBsAg).",
          tx: "**Chronic HBV:** **tenofovir** or **entecavir** (nucleoside analogs that block reverse transcriptase but do not eliminate cccDNA). **Neonates:** HBIG + HBV vaccine within 12 hours. HDV is prevented entirely by HBV vaccination.",
          pearl: "The window period features only anti-HBc IgM, as HBsAg has been cleared but anti-HBs has not yet appeared. Vaccination produces anti-HBs ONLY, with no anti-HBc. HBV can directly cause HCC through genomic integration without requiring prior cirrhosis, unlike HCV. HDV superinfection is much more destructive than simultaneous co-infection."
        }
      ]
    },
  {
    group: "RNA Viruses - Positive Sense",
    color: "vir",
    organisms: [
      {
        name: "Picornaviruses - Overview (Enteroviruses)",
        summary: "ssRNA(+), non-enveloped smallest RNA viruses; includes poliovirus, coxsackievirus, rhinovirus, HAV, echovirus; fecal-oral transmission (except rhinovirus); acid-stable",
        gram: "ssRNA (+), non-enveloped (Picornaviridae)",
        virulence: "**Non-enveloped:** acid-stable (survive stomach pH, enabling fecal-oral transmission and GI replication). **IRES (internal ribosome entry site):** cap-independent translation. Not killed by alcohol-based hand sanitizers.",
        disease: "Family includes: **Enteroviruses** (poliovirus, coxsackievirus, echovirus), **Rhinovirus** (acid-labile, respiratory), **Hepatovirus** (HAV). Diseases range from aseptic meningitis, encephalitis, myocarditis, HFMD, polio, to hepatitis A.",
        lab_diagnosis: "**Tests:** Stool culture and/or PCR for enteroviruses (multiplex PCR panels). CSF PCR for enteroviral meningitis. **Microscopy/Culture:** Cell culture shows rapid cell rounding and death. EM reveals small naked icosahedral particles.",
        tx: "Mostly supportive. Pleconaril (experimental). IPV (Salk inactivated polio vaccine).",
        pearl: "Picorna translates to small (pico) RNA. Because they are non-enveloped, they are not killed by alcohol hand sanitizers. Enterovirus is the most common cause of aseptic (viral) meningitis overall."
      },
      {
        name: "Poliovirus",
        summary: "ssRNA(+), non-enveloped, fecal-oral infects anterior horn motor neurons → asymmetric flaccid paralysis; IPV (Salk) vs OPV (Sabin)",
        gram: "ssRNA (+), non-enveloped (Enterovirus)",
        virulence: "Fecal-oral transmission → replicates in oropharynx and GI mucosa → viremia → CNS spread → destroys **anterior horn motor neurons**.",
        disease: "**Abortive polio:** fever, GI symptoms. **Non-paralytic aseptic meningitis:** headache, meningismus. **Paralytic polio:** asymmetric flaccid paralysis (areflexia, hypotonia, muscle atrophy, **NO sensory deficit**). **Post-polio syndrome:** progressive new muscle weakness decades later.",
        lab_diagnosis: "**Tests:** Stool viral culture or PCR. CSF shows lymphocytic pleocytosis, normal glucose, mildly elevated protein (aseptic meningitis pattern). **Histology:** Autopsy shows neuronophagia and neuronal loss in the anterior gray matter.",
        tx: "**Supportive**. Ventilatory support for respiratory failure. **Prevention:** IPV (Salk, inactivated, injected) or OPV (Sabin, live attenuated oral).",
        pearl: "Asymmetric flaccid paralysis with fever and absolutely no sensory deficit indicates poliovirus. The anterior horn involvement means strictly lower motor neuron signs (flaccid, atrophic, areflexic)."
      },
      {
        name: "Coxsackievirus",
        summary: "ssRNA(+), non-enveloped Group A: hand-foot-mouth disease, herpangina; Group B: myocarditis, pericarditis, pleurodynia",
        gram: "ssRNA (+), non-enveloped (Enterovirus)",
        virulence: "**Group B:** uses **CAR (coxsackievirus-adenovirus receptor)**. Infects myocardial cells. **Group A:** tropism for skin and oral mucosa.",
        disease: "**Group A:** Hand-foot-mouth disease (vesicles/ulcers in mouth + rash on palms, soles, buttocks). Herpangina (vesicles/ulcers on soft palate and uvula only). **Group B:** Myocarditis/pericarditis (pleuritic chest pain, elevated troponin, dilated cardiomyopathy). Pleurodynia (Bornholm disease, 'devil's grip').",
        lab_diagnosis: "**Tests:** Stool/CSF/Vesicle PCR. Cardiac biomarkers (troponin, BNP) and ECG changes in myocarditis. **Histology:** Endomyocardial biopsy shows lymphocytic infiltration with myocyte necrosis (Dallas criteria) .",
        tx: "Supportive. IVIG for severe neonatal sepsis. Avoid NSAIDs in the acute phase of myocarditis.",
        pearl: "Coxsackie B is the most common cause of viral myocarditis. Differentiate herpangina from HFMD by location: herpangina involves the posterior oral cavity strictly, whereas HFMD involves the hands and feet as well."
      },
      {
        name: "Rhinovirus",
        summary: "ssRNA(+), non-enveloped, acid-labile most common cause of the common cold; ICAM-1 receptor; >100 serotypes; replicates at 33°C",
        gram: "ssRNA (+), non-enveloped (Enterovirus genus)",
        virulence: "Binds **ICAM-1**. **Acid-labile** (pH <6 destroys it, preventing fecal-oral transmission). Optimal replication at **33°C** (nasal cavity temperature).",
        disease: "**Common cold:** rhinorrhea, nasal congestion, sore throat. Low-grade or no fever. **Complications:** secondary bacterial sinusitis or otitis media. Most common precipitant of asthma exacerbations.",
        lab_diagnosis: "**Tests:** Multiplex PCR respiratory panel. **Culture:** Cytopathic effect on cell lines at 33°C. Clinical diagnosis is usually sufficient.",
        tx: "Supportive. Antibiotics are NOT indicated. Zinc lozenges may slightly reduce duration if started early.",
        pearl: "Unlike other picornaviruses, rhinovirus is acid-labile, meaning it causes no GI disease and cannot be transmitted via the fecal-oral route. Optimal replication at 33 degrees Celsius restricts it to the upper respiratory tract rather than the lungs."
      },
      {
        name: "Hepatitis A Virus (HAV)",
        summary: "ssRNA(+), non-enveloped, fecal-oral acute self-limited hepatitis; never causes chronic infection; shellfish/travel endemic; IgM = acute",
        gram: "ssRNA (+), non-enveloped (Hepatovirus)",
        virulence: "Non-enveloped, making it highly **acid-stable and environmentally stable**. Liver injury is primarily immune-mediated (CTL response). Shed in feces before symptoms appear.",
        disease: "**Acute hepatitis:** nausea, vomiting, RUQ pain, jaundice, dark urine, clay-colored stools. Markedly elevated transaminases (ALT > AST). Self-limited in 4-8 weeks. **Never causes chronic hepatitis or HCC.**",
        lab_diagnosis: "**Tests:** Anti-HAV IgM indicates acute infection. Anti-HAV IgG indicates past infection or vaccination. **Histology:** Lobular hepatitis with hepatocyte swelling, Councilman bodies, and portal infiltrate (non-specific for HAV).",
        tx: "**Supportive**. **Prevention:** HAV vaccine (2-dose inactivated). Post-exposure prophylaxis with vaccine or IGIM.",
        pearl: "HAV is strictly an acute, self-limited infection and never causes chronic disease or hepatocellular carcinoma. Patients are most infectious in the pre-icteric phase before jaundice even appears. Shellfish concentrate the virus 100-fold."
      },
      {
        name: "Calicivirus (Norovirus)",
        summary: "ssRNA(+), non-enveloped most common cause of epidemic gastroenteritis; cruise ships, nursing homes; ultra-low infectious dose; 24-48h duration; resistant to alcohol",
        gram: "ssRNA (+), non-enveloped (Caliciviridae)",
        virulence: "Extremely **low infectious dose** (~18 viral particles). **Alcohol-resistant**. Environmentally stable. Uses HBGA (histo-blood group antigens) as a receptor.",
        disease: "**Acute epidemic gastroenteritis:** abrupt onset projectile vomiting, watery non-bloody diarrhea, cramping. Duration is characteristically brief (24-48 hours). Epidemic clusters on cruise ships, nursing homes, schools.",
        lab_diagnosis: "**Tests:** Stool PCR is the most sensitive test for outbreak investigations. Stool antigen EIA. **Microscopy:** EM reveals round virions with characteristic cup-shaped surface depressions .",
        tx: "**Supportive** (oral rehydration, anti-emetics). **Outbreak control:** 1:10 bleach solution disinfection is strictly required because alcohol-based products are ineffective.",
        pearl: "Norovirus is the most common cause of foodborne illness outbreaks in the United States. Its resistance to alcohol means bleach is strictly required for environmental decontamination. The brief 24 to 48 hour duration distinguishes it from longer-lasting viral gastroenteritides."
      },
      {
        name: "Flavivirus (Dengue, West Nile, Yellow Fever, Zika)",
        summary: "ssRNA(+), enveloped mosquito-borne arboviruses; Dengue (breakbone fever); West Nile (encephalitis); Yellow Fever (hepatitis/jaundice); Zika (microcephaly)",
        gram: "ssRNA (+), enveloped (Flaviviridae)",
        virulence: "**Aedes mosquito** (Dengue, Yellow Fever, Zika). **Culex mosquito** (West Nile). **Antibody-dependent enhancement (ADE):** prior dengue infection enhances macrophage uptake during secondary infection, causing hemorrhagic fever.",
        disease: "**Dengue ('breakbone fever'):** high fever, severe myalgia/arthralgia, retro-orbital pain, leukopenia, thrombocytopenia. **West Nile:** encephalitis/meningitis with flaccid paralysis in the elderly. **Yellow fever:** fever, jaundice, GI hemorrhage ('black vomit'). **Zika:** mild febrile illness, triggers Guillain-Barré, causes congenital microcephaly.",
        lab_diagnosis: "**Tests:** Dengue NS1 antigen, IgM/IgG serology. West Nile CSF IgM. Zika RT-PCR (serum/urine). **Histology:** Yellow fever liver biopsy shows **Councilman bodies** (apoptotic hepatocytes) in the mid-zone.",
        tx: "Supportive. **Yellow fever:** live attenuated vaccine (17D strain) required for travel. **Zika:** avoid travel to endemic areas during pregnancy.",
        pearl: "Dengue uniquely presents with thrombocytopenia, leukopenia, and intense 'breakbone' pain. Antibody-dependent enhancement explains why a secondary dengue infection with a different serotype is far more dangerous than the primary infection. Zika exposure during pregnancy mandates screening for fetal microcephaly."
      },
      {
        name: "Hepatitis C Virus (HCV)",
        summary: "ssRNA(+), enveloped blood-borne; 80% chronic; leading cause of cirrhosis/liver transplant; no vaccine; treat with direct-acting antivirals (DAAs)",
        gram: "ssRNA (+), enveloped (Flaviviridae)",
        virulence: "**Hypervariable region on E2 glycoprotein** drives rapid antigenic mutation, evading the immune response. **NS3/4A protease, NS5A replication complex, NS5B RNA polymerase** serve as targets for DAAs.",
        disease: "**Acute HCV:** usually asymptomatic. **Chronic HCV (80%):** asymptomatic for decades → progressive fibrosis → cirrhosis → HCC. **Extra-hepatic manifestations:** mixed cryoglobulinemia type II (palpable purpura, arthritis, glomerulonephritis), porphyria cutanea tarda, lichen planus.",
        lab_diagnosis: "**Tests:** Anti-HCV antibody (screening). HCV RNA PCR (confirms active infection, monitors viral load). HCV genotype testing. **Histology:** Liver biopsy shows lymphocytic portal infiltrate, interface hepatitis, and steatosis.",
        tx: "**Direct-acting antivirals (DAAs):** sofosbuvir (NS5B inhibitor) + ledipasvir (NS5A inhibitor). Achieves >95% sustained virologic response (SVR).",
        pearl: "Sustained virologic response (SVR) equals a functional cure. Cryoglobulinemia presenting as purpura, arthritis, and glomerulonephritis is a classic extra-hepatic manifestation. Unlike HBV, Hepatitis C almost always requires the development of cirrhosis before progressing to hepatocellular carcinoma."
      },
      {
        name: "Togavirus (Rubella)",
        summary: "ssRNA(+), enveloped rubella (German measles): mild 3-day rash illness; teratogenic in 1st trimester (CRS: cataracts, deafness, PDA); MMR vaccine",
        gram: "ssRNA (+), enveloped (Togaviridae)",
        virulence: "Respiratory droplet transmission → viremia → rash (immune-mediated). Crosses the placenta during maternal viremia, becoming highly teratogenic during early fetal organogenesis.",
        disease: "**Postnatal rubella:** mild low-grade fever, **posterior auricular and occipital lymphadenopathy**, maculopapular rash (face to trunk, resolves in 3 days). **Congenital rubella syndrome (CRS):** classic triad of cataracts, sensorineural deafness, and congenital heart disease (PDA, pulmonary artery stenosis). Also causes 'blueberry muffin' rash.",
        lab_diagnosis: "**Tests:** Rubella IgM (acute) and IgG (immunity). RT-PCR (blood, throat, urine). Prenatal diagnosis via fetal blood sampling or amniocentesis PCR. **Histology:** Non-specific reactive lymphadenopathy.",
        tx: "Supportive. **Prevention:** MMR vaccine (live attenuated). **Contraindicated in pregnancy.**",
        pearl: "Prominent posterior auricular and occipital lymphadenopathy strongly differentiates rubella from measles. The CRS triad is cataracts, deafness, and a patent ductus arteriosus. The MMR vaccine is strictly contraindicated during pregnancy."
      },
      {
        name: "Coronavirus (COVID-19 / SARS-CoV-2)",
        summary: "ssRNA(+), enveloped spike protein binds ACE2; COVID-19: anosmia, respiratory failure, cytokine storm; largest RNA genome",
        gram: "ssRNA (+), enveloped (Coronaviridae)",
        virulence: "**Spike protein (S)** binds **ACE2 receptor**. Large 30 kb genome includes a **proofreading exonuclease (nsp14)**, granting a lower mutation rate than influenza. Triggers profound cytokine storm (IL-6, TNF-alpha).",
        disease: "**COVID-19:** fever, cough, **anosmia/ageusia**, dyspnea. **Severe disease:** ARDS, cytokine storm, hypercoagulability (PE, stroke), myocarditis. **SARS-CoV-1 and MERS:** highly lethal respiratory syndromes. **Common cold coronaviruses:** cause 10-30% of standard common colds.",
        lab_diagnosis: "**Tests:** RT-PCR (gold standard), Rapid antigen test. **Imaging:** CT chest shows bilateral peripheral ground-glass opacities. **Microscopy:** EM shows spherical enveloped virions with club-shaped spike projections resembling a solar corona .",
        tx: "**Outpatient:** nirmatrelvir/ritonavir (Paxlovid). **Hospitalized:** remdesivir, dexamethasone, tocilizumab. **Prevention:** mRNA vaccines.",
        pearl: "Anosmia and ageusia are unique, early diagnostic clues. Dexamethasone reduces mortality only in severe cases requiring supplemental oxygen; it is harmful if given too early. mRNA vaccines are translated in the cytoplasm and do not integrate into the host genome."
      }
    ]
  },
  {
    group: "RNA Viruses - Negative Sense",
    color: "vir",
    organisms: [
      {
        name: "Rhabdovirus (Rabies)",
        summary: "ssRNA(-), enveloped, bullet-shaped animal bite → retrograde axonal transport to CNS; encephalitis with hydrophobia; Negri bodies; near-universally fatal once symptomatic",
        gram: "ssRNA (-), enveloped (bullet-shaped virion - Rhabdoviridae)",
        virulence: "**G protein** binds the acetylcholine receptor at the neuromuscular junction → entry into peripheral nerves → **retrograde axonal transport** to the CNS. Incubation is inversely proportional to the distance from the brain.",
        disease: "**Prodrome:** fever, headache, paresthesia at the wound site (pathognomonic). **Furious rabies (80%):** agitation, **hydrophobia** (painful pharyngeal spasms triggered by swallowing), **aerophobia**, autonomic instability. **Paralytic rabies (20%):** ascending flaccid paralysis. Coma and death follow rapidly.",
        lab_diagnosis: "**Tests:** DFA on skin biopsy (nape of neck is most sensitive ante-mortem). Saliva or CSF PCR. **Histology:** Autopsy shows **Negri bodies** (eosinophilic cytoplasmic inclusions in hippocampal neurons and cerebellar Purkinje cells) . **EM:** bullet-shaped virion.",
        tx: "**Post-exposure prophylaxis (PEP):** immediate wound washing, rabies immune globulin (RIG) infiltrated into the wound, and inactivated rabies vaccine series. Near-universally fatal once symptomatic.",
        pearl: "Hydrophobia and aerophobia are pathognomonic clinical signs. Negri bodies in the hippocampus confirm the diagnosis post-mortem. A facial bite carries a much shorter incubation period than a bite on the extremity. Bat exposure in a sleeping room requires immediate PEP, even if a bite mark is not visible."
      },
      {
        name: "Filovirus (Ebola & Marburg)",
        summary: "ssRNA(-), enveloped, long filamentous viral hemorrhagic fever; high case fatality; fruit bat reservoir; person-to-person via direct contact; BSL-4",
        gram: "ssRNA (-), enveloped (Filoviridae longest human pathogenic virion)",
        virulence: "**NPC1 receptor** mediates endosomal entry. **GP (glycoprotein)** mediates cell attachment. Causes a massive cytokine storm and direct endothelial damage, leading to extreme vascular permeability and DIC.",
        disease: "**Viral hemorrhagic fever:** sudden fever, severe headache, myalgia → nausea/vomiting, maculopapular rash → hemorrhagic phase (bleeding from mucous membranes, GI tract, injection sites). High case fatality rate. Transmitted strictly via direct contact with infected blood or body fluids.",
        lab_diagnosis: "**Tests:** RT-PCR on blood is the gold standard. Antigen detection RDTs for field use. **Microscopy:** EM reveals dramatically long, filamentous particles forming a 'shepherd's crook' or U-shape. Handled exclusively under strict BSL-4 precautions.",
        tx: "**Ebola Zaire:** Monoclonal antibodies (REGEN-EB3 or mAb114) significantly reduce mortality. Aggressive supportive care. **Prevention:** rVSV-ZEBOV (Ervebo) vaccine.",
        pearl: "Ebola is not airborne; it requires direct contact with infectious body fluids, necessitating strict contact and droplet precautions. The virus can persist in immunologically privileged sites, such as semen, for months after apparent clinical recovery."
      },
      {
        name: "Bunyavirus (La Crosse Encephalitis & Hantavirus)",
        summary: "ssRNA(-), enveloped, segmented La Crosse: Aedes mosquito → encephalitis in children; Hantavirus: deer mouse droppings → pulmonary syndrome (HCPS); no person-to-person transmission",
        gram: "ssRNA (-), enveloped, segmented (tripartite genome - Bunyaviridae/Hantaviridae)",
        virulence: "Segmented genome allows reassortment. **La Crosse virus:** Aedes triseriatus (treehole mosquito) vector. **Hantavirus:** inhaled aerosolized deer mouse urine, feces, and saliva. Neither disease spreads person-to-person.",
        disease: "**La Crosse encephalitis:** most common arboviral encephalitis in children in the US Midwest. **Hantavirus Pulmonary Syndrome (HCPS):** abrupt ARDS and cardiogenic shock after a flu-like prodrome. Exposure often involves cleaning sheds or cabins in the American Southwest.",
        lab_diagnosis: "**Tests:** Serology and PCR. **Microscopy/Histology:** HCPS peripheral blood smear shows a classic triad of thrombocytopenia, hemoconcentration, and **immunoblasts** (expanded CD8+ T cells) . Lung biopsy shows interstitial pneumonitis without specific viral inclusions.",
        tx: "**Supportive**. HCPS requires ICU care, mechanical ventilation, and potentially ECMO for cardiogenic shock. Ribavirin is ineffective for HCPS.",
        pearl: "A patient developing severe respiratory failure and thrombocytopenia after cleaning an abandoned cabin in the Southwest has Hantavirus. Thrombocytopenia is an early warning sign that precedes respiratory failure. La Crosse classically presents as encephalitis in a child living in the Midwest."
      },
      {
        name: "Arenavirus (LCMV & Lassa Fever)",
        summary: "ssRNA(-), enveloped, bisegmented LCMV: house mouse → aseptic meningitis, teratogenic; Lassa fever: Mastomys rat → hemorrhagic fever + hearing loss; treat with ribavirin",
        gram: "ssRNA (-), enveloped, bisegmented (Arenaviridae)",
        virulence: "Bisegmented genome with ambisense coding. Binds the alpha-dystroglycan receptor. Transmitted via rodent urine, feces, and saliva.",
        disease: "**LCMV:** aseptic meningitis in young adults. Highly teratogenic in pregnancy (hydrocephalus, chorioretinitis). **Lassa fever:** West African hemorrhagic fever featuring facial edema, hemorrhage, and **sensorineural hearing loss** in a high percentage of survivors.",
        lab_diagnosis: "**Tests:** RT-PCR, Serology. **Microscopy:** EM reveals spherical particles with electron-dense ribosome-like granules, giving a characteristic 'sandy' appearance inside the virion.",
        tx: "**LCMV:** supportive. **Lassa fever:** IV ribavirin significantly reduces mortality if given early.",
        pearl: "Congenital LCMV perfectly mimics congenital Toxoplasma (hydrocephalus, chorioretinitis); always ask about pet rodent or hamster exposure. Lassa fever is unique among hemorrhagic fevers for causing permanent sensorineural hearing loss as a post-infectious complication. The 'sandy' appearance on EM is due to incorporated host ribosomes."
      },
      {
        name: "Reovirus (Rotavirus)",
        summary: "dsRNA, non-enveloped #1 cause of severe viral gastroenteritis in infants worldwide; watery diarrhea; NSP4 enterotoxin; ORS cornerstone; rotavirus vaccine highly effective",
        gram: "dsRNA, non-enveloped (Reoviridae - Rotavirus genus)",
        virulence: "**Double-layered icosahedral capsid** provides environmental stability. **NSP4** acts as a viral enterotoxin, causing cAMP-independent chloride secretion.",
        disease: "**Acute gastroenteritis:** fever and vomiting followed by profuse watery, non-bloody diarrhea. Leading cause of diarrhea-related death in children under 5 globally. Peaks in winter months.",
        lab_diagnosis: "**Tests:** Stool EIA detects rotavirus antigen. Stool PCR. **Microscopy:** EM shows a pathognomonic **wheel-shaped** double-layered icosahedral particle .",
        tx: "**Oral rehydration solution (ORS)** is the cornerstone. **Prevention:** Rotavirus vaccine (oral, live attenuated) given in early infancy.",
        pearl: "Rotavirus is the number one cause of viral gastroenteritis requiring hospitalization in young children globally. The NSP4 protein functions as a direct viral enterotoxin. The wheel-like appearance on electron microscopy defines the virus's name."
      },
      {
        name: "Measles (Rubeola)",
        summary: "ssRNA(-), enveloped Paramyxovirus 4 Cs prodrome → Koplik spots → cephalocaudal maculopapular rash; SSPE complication; MMR vaccine",
        gram: "ssRNA (-), non-segmented, enveloped (Paramyxoviridae)",
        virulence: "**Fusion protein** forms syncytia. **H protein** binds CD150 (SLAM receptor) on lymphocytes, causing profound immune suppression ('immune amnesia'). Highly contagious via respiratory droplets.",
        disease: "**Prodrome:** Cough, Coryza, Conjunctivitis, and fever. **Koplik spots** appear on the buccal mucosa. **Rash:** Maculopapular rash starts at the hairline and spreads head-to-toe, sparing the palms and soles. **Complications:** pneumonia, encephalitis, **SSPE** (subacute sclerosing panencephalitis).",
        lab_diagnosis: "**Tests:** Serology (IgM) and RT-PCR. **Histology:** Lung biopsy or lymphoid tissue shows **Warthin-Finkeldey giant cells** (multinucleated giant cells with intranuclear and intracytoplasmic inclusions) .",
        tx: "**Supportive**. **Vitamin A** significantly reduces morbidity and mortality in deficient children. **Prevention:** MMR vaccine.",
        pearl: "Koplik spots are pathognomonic and always appear 1 to 2 days before the skin rash begins. SSPE is a fatal neurodegenerative complication that strikes 7 to 10 years after the initial infection. Measles induces 'immune amnesia', stripping away previously acquired immunity to other pathogens."
      },
      {
        name: "Mumps",
        summary: "ssRNA(-), enveloped Paramyxovirus parotitis, orchitis (post-pubertal males → infertility risk), aseptic meningitis; MMR vaccine",
        gram: "ssRNA (-), non-segmented, enveloped (Paramyxoviridae)",
        virulence: "**HN protein (hemagglutinin-neuraminidase)** and **Fusion protein**. Strong tropism for salivary glands, testes, meninges, and the cochlea.",
        disease: "**Parotitis:** painful bilateral or unilateral swelling. **Orchitis:** occurs in post-pubertal males, carrying a significant risk of infertility if bilateral. **Aseptic meningitis:** the most common complication overall. **Sensorineural deafness:** usually unilateral and abrupt.",
        lab_diagnosis: "**Tests:** Serology (IgM) and RT-PCR. Elevated serum amylase. CSF shows an aseptic meningitis pattern. **Histology:** Interstitial edema and lymphocytic infiltrate in affected glands.",
        tx: "**Supportive**. Scrotal support for orchitis. **Prevention:** MMR vaccine.",
        pearl: "Orchitis in a post-pubertal male presenting with parotid swelling is diagnostic for mumps. Mumps is the leading cause of acquired sensorineural hearing loss in unvaccinated children. Elevated amylase can stem from either the parotid gland or the pancreas; checking lipase helps differentiate."
      },
      {
        name: "Hepatitis E Virus (HEV)",
        summary: "ssRNA(+), non-enveloped, fecal-oral self-limited acute hepatitis in immunocompetent; 15-25% mortality in pregnant women; zoonotic reservoir; treat with ribavirin in immunocompromised",
        gram: "ssRNA (+), non-enveloped (Hepeviridae)",
        virulence: "Environmentally stable. Genotypes 3 and 4 are zoonotic (pigs, deer) and acquired from undercooked meat. Genotypes 1 and 2 are restricted to humans and spread via contaminated water.",
        disease: "**Acute hepatitis:** indistinguishable from HAV in the immunocompetent; entirely self-limited. **Pregnant women:** 15-25 percent mortality in the third trimester due to fulminant hepatic failure. **Immunocompromised:** can develop chronic HEV leading to cirrhosis.",
        lab_diagnosis: "**Tests:** Anti-HEV IgM for acute infection. HEV RNA PCR is most sensitive early. Liver enzymes are markedly elevated. **Histology:** Non-specific lobular hepatitis.",
        tx: "**Supportive** for the immunocompetent. **Ribavirin** is used to treat chronic HEV in transplant recipients.",
        pearl: "HEV is infamous for causing fulminant hepatic failure and high mortality in pregnant women, a unique feature among the hepatitis viruses. While it behaves exactly like HAV in healthy individuals (acute, fecal-oral, no chronicity), it can cause chronic cirrhosis in immunocompromised patients."
      }
    ]
  },
  {
      group: "RNA Viruses - Retrovirus & Other",
      color: "vir",
      organisms: [
        {
          name: "HIV (Human Immunodeficiency Virus)",
          summary: "ssRNA(+) retrovirus, enveloped gp120/gp41 binds CD4+CCR5/CXCR4; reverse transcriptase integrates provirus; AIDS defined as CD4 <200; HAART = 2 NRTIs + integrase inhibitor",
          gram: "ssRNA (+), retrovirus, enveloped (Retroviridae)",
          virulence: "**gp120:** binds **CD4** (primary receptor) and **CCR5** (macrophage-tropic, early strains) or **CXCR4** (T-tropic, late strains). **gp41:** mediates membrane fusion. **Reverse transcriptase:** error-prone RNA to DNA synthesis leading to rapid mutation. **Integrase:** integrates provirus into host genome.",
          disease: "**Acute HIV:** mononucleosis-like syndrome (fever, LAD, pharyngitis, rash). **AIDS (CD4 <200):** opportunistic infections. **<500:** TB reactivation. **<200:** PCP, Toxoplasma encephalitis, Cryptococcal meningitis. **<100:** CNS lymphoma, MAC. **<50:** CMV retinitis.",
          lab_diagnosis: "**Tests:** 4th-generation combined Ag/Ab test (ELISA) detects antibodies and p24 antigen. Confirmatory: HIV-1/2 differentiation immunoassay. HIV RNA PCR confirms acute infection. CD4 count stages disease. Genotype testing for resistance. **Microscopy:** EM shows a spherical enveloped virion with a distinctive cone-shaped (conical) capsid. ",
          tx: "**HAART:** 2 NRTIs plus an integrase strand transfer inhibitor (preferred) or PI or NNRTI. **PrEP:** daily TDF/FTC or TAF/FTC. **Opportunistic prophylaxis:** CD4 <200 requires TMP-SMX; CD4 <50 requires azithromycin.",
          pearl: "CCR5 antagonists (maraviroc) only work for R5-tropic virus, requiring tropism testing before use. NNRTIs are non-competitive RT inhibitors (efavirenz causes vivid dreams and is teratogenic). Protease inhibitors classically cause metabolic syndrome, fat redistribution, and hyperglycemia. Western blot is obsolete for confirmation, completely replaced by the differentiation immunoassay."
        }
      ]
    }
],

fungi: [
{
      group: "Systemic Mycoses",
      color: "fung",
      organisms: [
        {
          name: "Histoplasma capsulatum",
          summary: "Ohio/Mississippi River valleys, caves/bird droppings, dimorphic intracellular in macrophages (yeast form); treat with itraconazole/amphotericin B",
          gram: "Dimorphic fungus (mold at 20°C → yeast at 37°C)",
          virulence: "Yeast form survives intracellularly in macrophages. Soil contamination from bird and bat droppings.",
          disease: "**Pulmonary histoplasmosis:** usually asymptomatic. Resembles TB in immunocompetent. **Disseminated (HIV with CD4 <150):** fever, weight loss, hepatosplenomegaly, oral ulcers, adrenal insufficiency. **Mediastinal/pericardial complications** in chronic forms.",
          lab_diagnosis: "**Tests:** Urine and serum Histoplasma antigen (highly sensitive for disseminated disease). **Microscopy/Histology:** GMS or PAS stain shows small, oval, narrow-based budding yeasts packed intracellularly within macrophages . **Culture:** Grows as mold at 20°C with pathognomonic tuberculate (thick-walled, spiny) macroconidia.",
          tx: "Mild/moderate: **itraconazole**. Severe/disseminated: **amphotericin B** then step-down to itraconazole.",
          pearl: "Adrenal involvement (bilateral adrenal enlargement causing Addison's disease) in a patient from the Ohio or Mississippi River Valley strongly suggests disseminated Histoplasma. The intracellular location within macrophages on silver stain distinguishes it from other dimorphic fungi."
        },
        {
          name: "Coccidioides immitis",
          summary: "Southwestern US/California (San Joaquin Valley fever), dimorphic spherules with endospores in tissue; eosinophilia, erythema nodosum",
          gram: "Dimorphic fungus (arthroconidia in soil → spherules in tissue)",
          virulence: "Arthroconidia are highly infectious upon inhalation. Spherules in tissue contain multiple endospores (200-300) which rupture and spread.",
          disease: "**Primary (Valley fever):** flu-like illness. Eosinophilia. Erythema nodosum (tender red nodules on shins). **Disseminated (immunocompromised, Black/Filipino patients at highest risk):** meningitis (most serious), bone/skin/lymph node involvement.",
          lab_diagnosis: "**Tests:** Serology (IgM and IgG CF titers). **Microscopy/Histology:** KOH or silver stain of tissue shows large spherules (much larger than RBCs) packed with hundreds of endospores . **Culture:** Highly infectious lab hazard; grows as mold at 20°C with barrel-shaped arthroconidia.",
          tx: "Mild/pulmonary: **fluconazole** or itraconazole. Severe/disseminated: **amphotericin B**. Meningitis: fluconazole (lifelong suppression).",
          pearl: "Spherules with endospores in tissue are pathognomonic for Coccidioides; no other organism forms these structures. CSF eosinophilia is a highly specific clue for coccidioidal meningitis. Erythema nodosum signals a robust immune response and generally predicts a good prognosis."
        },
        {
          name: "Blastomyces dermatitidis",
          summary: "North America (Ohio/Mississippi + Great Lakes), broad-based budding yeast verrucous skin lesions, pulmonary, osteomyelitis; no reliable serology",
          gram: "Dimorphic fungus (mold in environment, yeast in tissue)",
          virulence: "Soil exposure near decaying wood and water. Inhalation of conidia.",
          disease: "**Pulmonary blastomycosis:** flu-like, often mistaken for bacterial pneumonia or cancer. **Skin (most distinctive):** verrucous (warty), ulcerating, crusted skin lesions on face and extremities. **Bone:** osteolytic lesions. **Genitourinary:** prostatitis, epididymo-orchitis.",
          lab_diagnosis: "**Tests:** Urine antigen available but heavily cross-reacts with Histoplasma. **Microscopy/Histology:** KOH or silver stain shows large, broad-based budding yeast with a double refractive cell wall (same size as RBCs) . **Culture:** Branching hyphae at 20°C.",
          tx: "Mild-moderate: **itraconazole**. Severe/CNS: **amphotericin B** then itraconazole.",
          pearl: "Broad-based budding (the neck between the mother and daughter cell is as wide as the bud) is the definitive visual identifier. Verrucous, non-tender, crusted skin lesions can easily mimic squamous cell carcinoma."
        },
        {
          name: "Paracoccidioides brasiliensis",
          summary: "Dimorphic fungus South/Central America (Brazil), rural/agricultural workers; 'captain's wheel' appearance; chronic granulomatous lung + mucocutaneous lesions; treat itraconazole",
          gram: "Dimorphic fungus (mold in environment, yeast in tissue)",
          virulence: "Dimorphic mold in environment converts to yeast in body. **Multiple budding** from a single central cell.",
          disease: "**Endemic to South/Central America.** Affects agricultural workers. **Pulmonary:** chronic granulomatous disease, fibrosis. **Mucocutaneous:** painful ulcerating lesions of lips, gums, oral mucosa, larynx. **Lymphatic:** generalized LAD.",
          lab_diagnosis: "**Tests:** Immunodiffusion serology. **Microscopy/Histology:** KOH or silver stain of mucosal ulcers or sputum shows a large yeast with multiple buds attached in a 'captain's wheel' or 'pilot's wheel' formation . **Culture:** Mold at 20°C.",
          tx: "Mild-moderate: **itraconazole** (12-18 months). Severe: **amphotericin B** step-down to itraconazole.",
          pearl: "The 'captain's wheel' morphology is pathognomonic. Estrogen inhibits the mycelium to yeast conversion, providing pre-menopausal women with significant protection from progressive disease compared to men in the same endemic agricultural regions."
        }
      ]
    },
    {
      group: "Cutaneous Mycoses",
      color: "fung",
      organisms: [
        {
          name: "Malassezia furfur",
          summary: "Lipophilic yeast tinea versicolor (hypo/hyperpigmented macules), seborrheic dermatitis; requires lipid supplementation for culture; treat topical antifungals",
          gram: "Yeast (lipophilic, part of normal skin flora)",
          virulence: "**Obligate lipophile** (requires exogenous lipids for growth). Produces azelaic acid which inhibits melanin synthesis, leading to hypopigmented macules.",
          disease: "**Tinea versicolor:** hypo- or hyperpigmented macules on trunk/shoulders. Non-itchy or mildly pruritic. **Seborrheic dermatitis/dandruff:** scalp/face flaking. **Neonatal sepsis:** affects infants receiving IV lipid emulsions.",
          lab_diagnosis: "**Tests:** Wood's lamp reveals yellow-green fluorescence. **Microscopy:** KOH prep of skin scrapings shows short, cigar-shaped hyphae intermixed with clusters of spherical budding yeast ('spaghetti and meatballs' appearance) . **Culture:** Requires lipid supplementation (olive oil overlay) to grow.",
          tx: "**Topical selenium sulfide** or **ketoconazole shampoo**. **Topical azoles**.",
          pearl: "Premature infants in the NICU receiving IV lipid infusions are uniquely at risk for Malassezia fungemia because the organism feeds directly on the lipid lines. Pigmentation changes persist for months after successful eradication, so reassure patients that this is normal."
        },
        {
          name: "Dermatophytes (Tinea)",
          summary: "Keratinophilic molds tinea capitis, corporis, pedis, cruris, unguium; KOH shows hyphae; treat topical azoles or oral terbinafine/griseofulvin",
          gram: "Mold (hyphae only no yeast form)",
          virulence: "Three genera: Trichophyton, Microsporum, Epidermophyton. Keratinophilic: digest keratin in skin/hair/nails. Spread by direct contact.",
          disease: "**Tinea capitis:** scalp ringworm. **Tinea corporis:** 'ringworm' annular scaly plaque. **Tinea pedis:** athlete's foot. **Tinea cruris:** jock itch. **Tinea unguium:** onychomycosis. **Majocchi granuloma:** deep follicular involvement.",
          lab_diagnosis: "**Tests:** Wood's lamp (Microsporum fluoresces green; Trichophyton does not). **Microscopy:** KOH prep of scrapings shows branching, septate hyphae visible among squamous epithelial cells without any yeast forms. **Culture:** Sabouraud agar grows mold.",
          tx: "**Topical azoles** for most tinea. **Oral terbinafine** for onychomycosis. **Oral griseofulvin** for tinea capitis.",
          pearl: "Tinea capitis requires oral antifungal therapy like griseofulvin because topical agents cannot penetrate the hair shaft. Dermatophytes never invade the dermis in immunocompetent hosts, distinguishing them from deep fungal infections."
        },
        {
          name: "Sporothrix schenckii",
          summary: "Rose gardener's fungus thorn prick → nodules along lymphatics (sporotrichoid spread); dimorphic; treat with itraconazole",
          gram: "Dimorphic fungus (mold in environment, cigar-shaped yeast in tissue)",
          virulence: "Dimorphic mold in soil/plants (rose thorns, sphagnum moss). Traumatic inoculation via thorn or splinter.",
          disease: "**Lymphocutaneous sporotrichosis:** papule/nodule at inoculation site leads to **ascending nodules along lymphatic channels** (sporotrichoid spread). **Pulmonary:** chronic cavitary disease. **Disseminated:** joints, CNS in immunocompromised.",
          lab_diagnosis: "**Microscopy/Histology:** Tissue biopsy shows sparse cigar-shaped budding yeast. Asteroid bodies (yeast surrounded by radiating eosinophilic material) may be present . **Culture:** Gold standard; grows mold at room temperature with rosette-like clusters of conidia, and converts to yeast at 37°C.",
          tx: "Lymphocutaneous: **itraconazole** (drug of choice). **SSKI (saturated solution of potassium iodide):** older alternative. Pulmonary/disseminated: **amphotericin B**.",
          pearl: "A sporotrichoid spread pattern (nodules tracking proximally along lymphatic channels from a distal inoculation site) is a classic exam finding. Think of Sporothrix when a patient presents with a thorn prick from gardening."
        }
      ]
    },
    {
      group: "Opportunistic Fungal Infections",
      color: "fung",
      organisms: [
        {
          name: "Candida albicans",
          summary: "Dimorphic yeast with germ tubes thrush/esophagitis/UTI/bloodstream in immunocompromised",
          gram: "Dimorphic yeast (budding yeast + pseudohyphae + hyphae)",
          virulence: "**Germ tube formation**. **Biofilm** on prosthetics and catheters. Transition between yeast and hyphae facilitates tissue invasion.",
          disease: "**Oral thrush:** white plaques that scrape off. **Esophageal candidiasis:** dysphagia + odynophagia (AIDS-defining). **Vulvovaginitis:** cottage-cheese discharge. **Diaper rash:** beefy red with satellite lesions. **Candidemia:** IV catheters, TPN, neutropenia leading to dissemination.",
          lab_diagnosis: "**Tests:** Germ tube test is positive (forms true hyphae in serum at 37°C within 2 to 3 hours). Blood cultures for candidemia. **Microscopy:** KOH or Gram stain shows budding yeast with pseudohyphae\n.",
          tx: "Mucocutaneous: **fluconazole** or nystatin (topical). Esophageal: fluconazole. Candidemia: **echinocandins** (caspofungin, micafungin) for severe cases. Remove catheters.",
          pearl: "A positive germ tube test differentiates C. albicans from other Candida species. Candida glabrata and Candida krusei are intrinsically resistant to fluconazole, requiring echinocandins for invasive disease."
        },
        {
          name: "Aspergillus fumigatus",
          summary: "Septate hyphae at 45° (acute angle) allergic bronchopulmonary (ABPA), aspergilloma, invasive aspergillosis in neutropenia",
          gram: "Mold (septate hyphae with dichotomous branching at 45°)",
          virulence: "Small conidia easily inhaled. Thermotolerance (grows at 37°C-50°C). Produces gliotoxins and elastases.",
          disease: "**ABPA:** asthma/CF patient, eosinophilia, elevated IgE, mucus plugs. **Aspergilloma ('fungus ball'):** colonization of pre-existing lung cavity, presents with hemoptysis. **Invasive pulmonary aspergillosis:** neutropenic patients (transplant), features angioinvasion.",
          lab_diagnosis: "**Tests:** Galactomannan antigen assay (serum or BAL). Beta-D-glucan assay. **Imaging:** CT chest shows 'halo sign' or 'crescent sign'. **Microscopy/Histology:** Tissue or smear reveals branching septate hyphae at acute 45-degree angles . **Culture:** Mold with conidiophores featuring a radiating 'sunburst' appearance.",
          tx: "ABPA: steroids + itraconazole. Aspergilloma: observation or surgery. **Invasive:** **voriconazole** (drug of choice).",
          pearl: "Acute 45-degree angle branching with septations defines Aspergillus, whereas 90-degree wide non-septate branching defines Mucor and Rhizopus. Voriconazole is the primary drug of choice for invasive disease, superseding amphotericin B."
        },
        {
          name: "Cryptococcus neoformans",
          summary: "Narrow-based budding, thick polysaccharide capsule (India ink halo), urease+ meningitis in HIV (CD4 <100); pigeon droppings",
          gram: "Encapsulated yeast (thick polysaccharide capsule)",
          virulence: "**Polysaccharide capsule** (massive, inhibits phagocytosis). Melanin production. Urease positive.",
          disease: "**Cryptococcal meningitis** (AIDS-defining, CD4 <100): insidious onset headache, fever, meningismus, altered mental status. High intracranial pressure is a major complication.",
          lab_diagnosis: "**Tests:** Cryptococcal antigen (CrAg) in CSF or serum is highly sensitive and specific. **Microscopy:** India ink stain of CSF reveals round yeast with a wide, clear halo (thick polysaccharide capsule) and narrow-based budding . Mucicarmine stain of tissue highlights the capsule in red. **Culture:** Sabouraud agar yields mucoid colonies.",
          tx: "**Induction:** amphotericin B + **flucytosine (5-FC)**. **Consolidation/Maintenance:** fluconazole.",
          pearl: "A negative stain like India ink is required because the massive polysaccharide capsule repels standard stains. Elevated intracranial pressure is a major cause of mortality in cryptococcal meningitis and requires serial therapeutic lumbar punctures, not steroids."
        },
        {
          name: "Mucormycosis (Rhizopus/Mucor)",
          summary: "Non-septate hyphae at 90° rhinocerebral in diabetic ketoacidosis (DKA), black eschar, rapidly fatal; treat with amphotericin B + surgery",
          gram: "Mold (non-septate ribbon-like hyphae, 90° branching)",
          virulence: "Iron as essential nutrient. High glucose + acidosis + elevated free iron (DKA) creates ideal environment. Angioinvasion.",
          disease: "**Rhinocerebral mucormycosis:** DKA, uncontrolled diabetes, deferoxamine therapy. Starts in nasal cavity and spreads to sinuses, orbits, and brain. **Black eschar** on nasal mucosa/palate. Rapidly fatal if untreated.",
          lab_diagnosis: "**Tests:** Fungal culture (often difficult to grow). **Microscopy/Histology:** Biopsy is essential and shows broad, non-septate (aseptate) ribbon-like hyphae with right-angle (90-degree) branching and extensive angioinvasion .",
          tx: "**Liposomal amphotericin B** + **Surgical debridement** (aggressive). Correct DKA.",
          pearl: "A diabetic ketoacidosis patient presenting with a black necrotic eschar on the nasal mucosa or palate is a surgical emergency. Deferoxamine therapy paradoxically increases the risk of mucormycosis by acting as a siderophore, supplying free iron to the fungus."
        },
        {
          name: "Pneumocystis jirovecii (PCP)",
          summary: "Atypical fungus PCP pneumonia in HIV (CD4 <200), diffuse bilateral infiltrates (ground-glass), elevated LDH; treat with TMP-SMX",
          gram: "Atypical fungus (no ergosterol, not culturable)",
          virulence: "Cysts (ascospores) and trophic forms attach to type I pneumocytes.",
          disease: "**PCP pneumonia:** AIDS-defining (CD4 <200). Insidious onset progressive dyspnea, non-productive cough. CXR shows bilateral perihilar/diffuse ground-glass infiltrates. **Spontaneous pneumothorax** is a known complication.",
          lab_diagnosis: "**Tests:** Beta-D-glucan assay. PCR is highly sensitive. Cannot be cultured. **Microscopy:** BAL or induced sputum stained with GMS (silver) or Toluidine blue shows cyst forms appearing as crushed ping-pong balls (black round or cup-shaped structures) .",
          tx: "**TMP-SMX** (drug of choice). **Steroids** if PaO2 <70 or A-a gradient >35. **Prophylaxis:** TMP-SMX when CD4 <200.",
          pearl: "PCP lacks ergosterol in its cell membrane, making all azoles and echinocandins completely useless. Adding steroids improves survival in patients with a PaO2 under 70 mmHg. A spontaneous pneumothorax in an HIV patient is a classic complication."
        }
      ]
    }
],

parasites: [
{
      group: "Protozoa - Intestinal & Blood",
      color: "para",
      organisms: [
        {
          name: "Plasmodium species (Malaria)",
          summary: "RBC parasite cyclic fever, splenomegaly; P. falciparum (severe) vs P. vivax/ovale (relapse/hypnozoites); treat by species",
          gram: "Protozoa (intracellular RBC parasite)",
          virulence: "**Anopheles mosquito** (female) vector. **P. falciparum:** knob proteins on RBCs cause cytoadherence and rosetting, leading to severe disease. P. vivax/P. ovale form dormant liver hypnozoites.",
          disease: "**Cyclic fever:** P. vivax/ovale (48h), P. malariae (72h), P. falciparum (irregular). **P. falciparum complications:** cerebral malaria, severe anemia, hypoglycemia, ARDS, **blackwater fever** (massive hemolysis). P. vivax/ovale cause relapse from liver hypnozoites.",
          lab_diagnosis: "**Tests:** Rapid diagnostic tests (RDTs) for specific antigens. PCR. **Microscopy:** Thick and thin blood smears (Giemsa stain) show intracellular rings, schizonts, or gametocytes. P. falciparum features multiple small rings per RBC and banana-shaped gametocytes . P. vivax and ovale feature enlarged RBCs and Schüffner's dots.",
          tx: "**P. falciparum:** artemether-lumefantrine or atovaquone-proguanil; IV **artesunate** (severe). **P. vivax/ovale:** chloroquine + **primaquine**. **Prophylaxis:** atovaquone-proguanil or doxycycline.",
          pearl: "Always test for G6PD deficiency before giving primaquine, or massive hemolysis will occur. Primaquine is uniquely required to kill the dormant liver hypnozoites of P. vivax and P. ovale to prevent relapse."
        },
        {
          name: "Toxoplasma gondii",
          summary: "Definitive host: cats; congenital (calcifications + chorioretinitis + hydrocephalus) and CNS toxoplasmosis in HIV (CD4 <100); treat with pyrimethamine + sulfadiazine",
          gram: "Obligate intracellular protozoan",
          virulence: "Oocysts in cat feces, bradyzoites in undercooked meat. Obligate intracellular parasite.",
          disease: "**Congenital toxoplasmosis** (TORCH): chorioretinitis + hydrocephalus + intracranial calcifications. **CNS toxoplasmosis (HIV, CD4 <100):** headache, fever, focal neurological deficits. **Ocular toxoplasmosis:** chorioretinitis in adults.",
          lab_diagnosis: "**Tests:** Serology (IgM/IgG). PCR of amniotic fluid for congenital cases. **Imaging:** MRI brain shows multiple ring-enhancing lesions. **Microscopy/Histology:** Biopsy shows crescent-shaped tachyzoites or tissue cysts containing bradyzoites.",
          tx: "**Pyrimethamine + sulfadiazine + leucovorin**. **TMP-SMX prophylaxis** if CD4 <100 and Toxoplasma IgG positive.",
          pearl: "Multiple ring-enhancing lesions in the basal ganglia of an HIV patient favor Toxoplasma, whereas a single periventricular lesion favors primary CNS lymphoma. Congenital toxoplasmosis causes diffuse, scattered intracranial calcifications, differentiating it from the periventricular calcifications of CMV."
        },
        {
          name: "Giardia lamblia",
          summary: "Pear-shaped trophozoite + cyst #1 parasitic diarrhea (hikers/contaminated water), malabsorption, floating stools; treat with metronidazole",
          gram: "Protozoa - Flagellate",
          virulence: "Trophozoites attach to duodenal/jejunal epithelium with a sucking disc, disrupting the brush border. Cysts are the infectious form and resist chlorine.",
          disease: "**Acute:** watery diarrhea, abdominal cramps, bloating, flatulence. **Chronic:** steatorrhea, malabsorption of fat and fat-soluble vitamins, weight loss. **IgA deficiency** increases susceptibility.",
          lab_diagnosis: "**Tests:** Stool antigen (EIA) is the test of choice. **Microscopy:** Stool O&P shows pear-shaped trophozoites with two nuclei ('owl-eye' or 'old man face' appearance) and four pairs of flagella, or oval cysts with four nuclei\n.",
          tx: "**Metronidazole**, tinidazole, or nitazoxanide.",
          pearl: "Patients with IgA deficiency are highly susceptible to severe, recurrent Giardia infections. The lack of blood and fever distinguishes this malabsorptive diarrhea from invasive pathogens."
        },
        {
          name: "Entamoeba histolytica",
          summary: "Amebic dysentery + liver abscess ingested cysts, trophozoites invade mucosa, RBCs in cytoplasm; treat with metronidazole + luminal agent",
          gram: "Protozoa - Ameba",
          virulence: "**Trophozoites** ingest RBCs. Cysteine protease dissolves epithelial layer. Flask-shaped ulcers in colon.",
          disease: "**Amebic colitis (dysentery):** bloody diarrhea, lower abdominal cramps. **Amebic liver abscess:** right lobe, 'anchovy paste' pus (necrotic, sterile). Fever, RUQ pain. Rupture risk.",
          lab_diagnosis: "**Tests:** Stool antigen. Serology (IgG) useful for extraintestinal liver abscess. **Imaging:** Ultrasound or CT for right lobe liver abscess. **Microscopy/Histology:** Trophozoites feature a single nucleus and pathognomonic ingested RBCs in the cytoplasm . Cysts have up to 4 nuclei. Tissue biopsy shows flask-shaped ulcers.",
          tx: "**Metronidazole** (tissue amebicide) + **luminal agent** (paromomycin or diloxanide furoate).",
          pearl: "RBCs inside the trophozoite cytoplasm confirm E. histolytica rather than non-pathogenic intestinal amebae. Metronidazole alone is inadequate; a luminal agent like paromomycin must follow to eradicate intestinal cysts and prevent relapse."
        },
        {
          name: "Cryptosporidium parvum",
          summary: "Acid-fast oocysts watery diarrhea in immunocompetent vs life-threatening profuse diarrhea in HIV (CD4 <100); no effective treatment in AIDS",
          gram: "Protozoa - Coccidian",
          virulence: "**Acid-fast oocysts** survive chlorination. Infects intestinal epithelial cells (intracellular but extracytoplasmic in brush border).",
          disease: "**Immunocompetent:** self-limited watery diarrhea. Common in daycare workers, recreational water. **HIV/AIDS (CD4 <100):** profuse watery diarrhea, wasting, biliary cryptosporidiosis (cholangiopathy).",
          lab_diagnosis: "**Tests:** Stool antigen (EIA). PCR is most sensitive. **Microscopy:** Modified acid-fast stain of stool shows bright red, spherical oocysts (4 to 6 micrometers, smaller than RBCs) against a blue background .",
          tx: "Immunocompetent: supportive. **AIDS:** nitazoxanide (modest benefit) + **immune reconstitution with HAART**.",
          pearl: "Cryptosporidium oocysts are highly resistant to chlorination, leading to massive municipal and recreational water outbreaks. There is no reliable antiparasitic cure for AIDS patients; immune reconstitution with HAART is the only effective intervention."
        }
      ]
    },
    {
      group: "Protozoa - Blood & Tissue",
      color: "para",
      organisms: [
        {
          name: "Trypanosoma cruzi (Chagas Disease)",
          summary: "Reduviid (kissing) bug vector South/Central America; trypomastigotes in blood, amastigotes in tissue; dilated cardiomyopathy, megaesophagus, megacolon; treat benznidazole",
          gram: "Protozoa (Kinetoplastida)",
          virulence: "**Reduviid bug** bites near mouth/eyes, defecates on skin, and trypomastigotes enter the wound. Amastigotes infect cardiac and smooth muscle cells.",
          disease: "**Acute Chagas:** fever, malaise, **Romaña's sign** (painless periorbital swelling). **Chronic Chagas (years later):** **dilated cardiomyopathy** (ventricular aneurysm at apex, arrhythmias), **megaesophagus**, **megacolon**.",
          lab_diagnosis: "**Tests:** PCR in acute phase. Serology (IgG) in chronic phase. ECG shows right bundle branch block. Echo shows dilated cardiomyopathy with apical aneurysm. **Microscopy:** Blood smear shows C-shaped or U-shaped flagellated trypomastigotes with a prominent kinetoplast. Tissue biopsy shows intracellular amastigotes in cardiac or muscle tissue.",
          tx: "**Acute:** benznidazole or nifurtimox. **Chronic:** supportive.",
          pearl: "Unilateral painless periorbital swelling (Romaña's sign) is the classic marker of acute inoculation. Megaesophagus can perfectly mimic achalasia (bird-beak sign on barium swallow); serology helps differentiate."
        },
        {
          name: "Trypanosoma brucei (Sleeping Sickness)",
          summary: "Tsetse fly vector African sleeping sickness; CNS invasion → altered sleep-wake cycle; treat suramin/melarsoprol",
          gram: "Protozoa (Kinetoplastida)",
          virulence: "**Tsetse fly** vector. **Antigenic variation of VSG** switches surface coat to evade the immune response, causing waves of parasitemia. Crosses the blood-brain barrier.",
          disease: "**Stage 1 (hemolymphatic):** chancre at bite site, fever, lymphadenopathy. **Winterbottom's sign:** posterior cervical LAD. **Stage 2 (CNS):** encephalitis, personality change, **disrupted circadian rhythm** (sleeping during day, awake at night), coma.",
          lab_diagnosis: "**Tests:** CSF analysis for Stage 2 CNS involvement. **Microscopy:** Blood or CSF smear shows extracellular, highly motile, elongated trypomastigotes with a single flagellum and undulating membrane.",
          tx: "Stage 1: **suramin** or pentamidine. Stage 2 (CNS): **melarsoprol** or eflornithine.",
          pearl: "Continuous antigenic variation of the variable surface glycoprotein (VSG) prevents the host from clearing the infection, causing undulating waves of parasitemia. Reversal of the sleep-wake cycle is the hallmark of CNS invasion."
        },
        {
          name: "Babesia",
          summary: "Ixodes tick vector RBC parasite, resembles malaria; tetrad 'Maltese cross' form; Northeast US; hemolytic anemia; asplenic patients at high risk; treat atovaquone + azithromycin",
          gram: "Protozoa (intraerythrocytic)",
          virulence: "**Ixodes scapularis tick** vector. Infects RBCs like malaria but has **NO exoerythrocytic liver stage**.",
          disease: "**Symptomatic:** flu-like illness, hemolytic anemia, thrombocytopenia. **Severe disease** occurs in **asplenic patients**, the elderly, and immunocompromised patients.",
          lab_diagnosis: "**Tests:** PCR is most sensitive. Serology. **Microscopy:** Giemsa-stained blood smear shows intraerythrocytic ring forms (mimicking malaria) and pathognomonic tetrads ('Maltese cross') without hemozoin pigment .",
          tx: "Mild-moderate: **atovaquone + azithromycin**. Severe: clindamycin + quinine.",
          pearl: "The Maltese cross formation inside an RBC is definitive for Babesia. Because it shares the Ixodes tick vector with Borrelia burgdorferi, always consider co-infection with Lyme disease. Asplenic patients face a massive risk for overwhelming, fatal parasitemia."
        },
        {
          name: "Naegleria fowleri",
          summary: "Free-living ameba warm freshwater; enters via cribriform plate → primary amebic meningoencephalitis (PAM); rapidly fatal; treat amphotericin B",
          gram: "Protozoa - Free-living ameba",
          virulence: "**Thermophilic**. Enters via olfactory epithelium through the **cribriform plate** directly into the brain.",
          disease: "**Primary Amebic Meningoencephalitis (PAM):** healthy young swimmers in warm freshwater lakes or hot springs. Rapid onset severe headache, fever, altered mental status, coma. **Death within 3-7 days**.",
          lab_diagnosis: "**Tests:** PCR. CSF analysis shows high neutrophils, high protein, and low glucose. **Microscopy:** Wet mount of fresh CSF shows actively motile trophozoites . Brain tissue autopsy shows amebic trophozoites without cysts.",
          tx: "**Amphotericin B** (IV + intrathecal) + miltefosine. Survival is exceedingly rare.",
          pearl: "Swimming in warm freshwater lakes followed rapidly by fulminant meningoencephalitis strongly points to Naegleria. The organism must travel through the cribriform plate via the olfactory nerve; it cannot be acquired by swallowing contaminated water."
        },
        {
          name: "Leishmania",
          summary: "Sandfly vector cutaneous (skin ulcer), mucocutaneous (tissue destruction), visceral (kala-azar, splenomegaly, pancytopenia); treat liposomal amphotericin B",
          gram: "Protozoa",
          virulence: "**Phlebotomus sandfly** vector. Promastigotes are inoculated, and **amastigotes** infect and survive inside macrophages.",
          disease: "**Cutaneous:** painless slowly enlarging ulcer. **Mucocutaneous:** tissue destruction of nose/palate. **Visceral (kala-azar):** massive hepatosplenomegaly, fever, pancytopenia, hypergammaglobulinemia, hyperpigmentation.",
          lab_diagnosis: "**Tests:** PCR. Serology (rk39 rapid test for visceral). **Microscopy/Histology:** Biopsy of bone marrow, spleen, or ulcer margin shows non-flagellated amastigotes (Leishman-Donovan bodies) packed intracellularly within macrophages, featuring a rod-shaped kinetoplast next to the nucleus .",
          tx: "**Visceral/severe:** **liposomal amphotericin B**. Cutaneous: miltefosine, amphotericin.",
          pearl: "Massive hepatosplenomegaly, pancytopenia, fever, and hyperpigmentation form the classic presentation of kala-azar (visceral leishmaniasis). Cutaneous lesions caused by L. braziliensis must be treated aggressively to prevent devastating mucocutaneous tissue destruction years later."
        },
        {
          name: "Trichomonas vaginalis",
          summary: "Flagellated protozoan STI malodorous yellow-green frothy vaginal discharge, strawberry cervix; no cyst form; sexual transmission only; treat both partners",
          gram: "Protozoa - Flagellate (no cyst form)",
          virulence: "**No cyst form** exists, meaning the trophozoite cannot survive outside the host, leading to strict sexual transmission.",
          disease: "**Females:** malodorous yellow-green frothy vaginal discharge, pruritus, dysuria. **Strawberry cervix** (punctate hemorrhages). **Males:** usually asymptomatic urethritis.",
          lab_diagnosis: "**Tests:** NAAT (PCR) is the gold standard. Vaginal pH is greater than 4.5. **Microscopy:** Wet mount shows actively motile (jerky or twitching), pear-shaped flagellated trophozoites slightly larger than WBCs.",
          tx: "**Metronidazole** or tinidazole. **Treat both partners simultaneously**.",
          pearl: "Because there is no environmentally resilient cyst form, transmission is exclusively sexual. Treating both partners simultaneously is mandatory, as reinfection from an untreated partner is the most common cause of treatment failure."
        }
      ]
    },
    {
      group: "Helminths & Other Parasites",
      color: "para",
      organisms: [
        {
          name: "Intestinal Nematodes",
          summary: "Pinworms (Enterobius), ascaris (giant roundworm), hookworms (Ancylostoma/Necator), strongyloides, whipworm",
          gram: "Helminths - Nematodes (roundworms)",
          virulence: "Varies by species. Features larval migrans patterns, tissue invasion, and autoinfection (Strongyloides).",
          disease: "**Enterobius (pinworm):** perianal pruritus at night. **Ascaris:** Löffler pneumonia (larval migration), intestinal obstruction. **Hookworm:** skin penetration (cutaneous larva migrans), iron-deficiency anemia. **Trichuris (whipworm):** bloody diarrhea, rectal prolapse. **Strongyloides:** autoinfection; hyperinfection syndrome in immunocompromised patients causes gram-negative sepsis.",
          lab_diagnosis: "**Tests:** Scotch tape test for Enterobius (oval, asymmetrically flattened eggs). Serology or agar plate culture for Strongyloides. **Microscopy:** Stool O&P shows characteristic eggs (Ascaris: large, thick-shelled, mammillated; Hookworm: thin-shelled, oval; Trichuris: barrel-shaped with bipolar plugs). Strongyloides shows rhabditiform larvae in stool rather than eggs.",
          tx: "**Albendazole or mebendazole**. Strongyloides requires **ivermectin**.",
          pearl: "Administering corticosteroids to a patient latently infected with Strongyloides can trigger a catastrophic autoinfection hyperinfection syndrome, disseminating gut flora and causing gram-negative sepsis. Löffler syndrome (transient pulmonary eosinophilia) marks the lung migration phase of Ascaris, hookworms, and Strongyloides."
        },
        {
          name: "Tissue Nematodes & Trematodes",
          summary: "Trichinella (undercooked pork), filariasis (lymphedema), schistosoma (bladder cancer/portal HTN), Clonorchis (cholangiocarcinoma)",
          gram: "Helminths - Trematodes/Nematodes (tissue)",
          virulence: "Tissue invasion, larval encystment, and severe immunopathology.",
          disease: "**Trichinella spiralis:** undercooked pork/bear causes periorbital edema, myalgias, and eosinophilia. **Wuchereria bancrofti:** mosquito vector causes lymphatic obstruction (elephantiasis). **Onchocerca volvulus:** blackfly vector causes river blindness. **Schistosoma:** cercariae penetrate skin. S. mansoni/japonicum causes portal HTN and Symmers' pipe-stem fibrosis. S. haematobium causes squamous cell carcinoma of bladder. **Clonorchis:** undercooked fish causes cholangiocarcinoma.",
          lab_diagnosis: "**Tests:** Muscle biopsy for Trichinella. Thick blood smear drawn at midnight for Wuchereria bancrofti (filariasis). Skin snip for Onchocerca. **Microscopy:** Stool or urine O&P for Schistosoma eggs (S. mansoni: lateral spine; S. haematobium: terminal spine). Stool O&P for Clonorchis eggs.",
          tx: "Trichinella: albendazole. Filariasis: DEC. Onchocerca: **ivermectin**. Schistosoma and Clonorchis: **praziquantel**.",
          pearl: "Schistosoma haematobium uniquely infects the venous plexus of the bladder, causing painless hematuria and greatly increasing the risk of squamous cell carcinoma of the bladder. Clonorchis sinensis infection is a major risk factor for cholangiocarcinoma."
        },
        {
          name: "Cestodes (Tapeworms)",
          summary: "Taenia (pork/beef), Echinococcus (cysts in liver/lung), Diphyllobothrium (B12 deficiency); neurocysticercosis causes seizures",
          gram: "Helminths - Cestodes (tapeworms)",
          virulence: "Larval forms are the most pathogenic in human intermediate hosts. Echinococcus forms slowly expanding hydatid cysts.",
          disease: "**Taenia solium (pork tapeworm):** intestinal tapeworm from eating cysticerci. **Neurocysticercosis:** eating T. solium eggs causes larvae to encyst in the brain, leading to seizures. **Taenia saginata (beef):** intestinal only. **Echinococcus granulosus:** hydatid cysts in liver/lung. **Diphyllobothrium latum (fish tapeworm):** B12 deficiency leading to megaloblastic anemia.",
          lab_diagnosis: "**Tests:** CT or MRI of the head for neurocysticercosis (calcified cysts, 'hole-in-one' sign). Ultrasound or CT for Echinococcus (large hydatid cyst with daughter cysts). **Microscopy:** Stool O&P shows proglottids or eggs (Taenia: thick, radially striated shell; Diphyllobothrium: oval, operculated).",
          tx: "Intestinal tapeworms: **praziquantel**. Neurocysticercosis: **albendazole** + dexamethasone. Echinococcus: **PAIR** or surgery. Do NOT aspirate Echinococcus blindly.",
          pearl: "Neurocysticercosis, the leading cause of adult-onset seizures in developing nations, is acquired by ingesting Taenia solium eggs via human feces, not by eating undercooked pork. Never aspirate an Echinococcus hydatid cyst blindly, as spilling the cyst fluid can trigger lethal anaphylaxis."
        }
      ]
    }
]

};
