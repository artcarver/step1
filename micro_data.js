const MICRO = {

bacteria: [
{
    group: "Gram-Positive Cocci",
    color: "bact",
    organisms: [
      {
        name: "Staphylococcus aureus",
        summary: "Catalase+, coagulase+; MRSA; TSS, SSSS, food poisoning, endocarditis, osteomyelitis",
        gram: "GP Cocci in clusters",
        virulence: "**Protein A:** binds IgG Fc → blocks opsonization.\n**Coagulase:** fibrinogen → fibrin clot → walled-off abscess.\n**PVL:** destroys neutrophils → necrotizing skin infections and pneumonia (CA-MRSA).\n**TSST-1:** superantigen → cytokine storm → TSS.\n**Exfoliatin A/B:** cleaves desmoglein-1 (stratum granulosum) → SSSS.\n**Enterotoxin:** heat-stable preformed toxin → food poisoning.\n**MRSA:** mecA encodes PBP2a → low β-lactam affinity → resistance to all penicillins and cephalosporins.",
        disease: "**Skin/soft tissue:** folliculitis, furuncles, carbuncles, bullous impetigo, cellulitis.\n**Systemic:** bacteremia; endocarditis (IVDU → tricuspid; normal valves → any); septic emboli.\n**Bone/joint:** osteomyelitis (**#1 cause**; hematogenous in children); septic arthritis.\n**Toxin-mediated:** TSS (erythroderma, hypotension, desquamation); SSSS (Nikolsky+, spares mucosa); food poisoning (1–6h, preformed toxin, no fever).",
        lab_diagnosis: "**Gram stain:** GP cocci in clusters ('grapes').\n**Culture:** Blood agar — gold/yellow colonies (staphyloxanthin pigment), **β-hemolysis**. Mannitol salt agar — yellow halo (ferments mannitol).\n**Tests:** Catalase+ (H₂O₂ bubbles — all Staph vs. Strep). Coagulase+ (distinguishes S. aureus from CoNS).\n**MRSA:** PCR for mecA gene; nasal swab for surveillance.",
        tx: "**MSSA:** nafcillin or oxacillin (anti-staphylococcal penicillins).\n**HA-MRSA:** vancomycin IV (trough-guided, target AUC/MIC). Alternative: daptomycin (not for pneumonia — inactivated by surfactant).\n**CA-MRSA (skin/SSTIs):** TMP-SMX or doxycycline PO.\n**Endocarditis:** add gentamicin for synergy; rifampin for prosthetic valve.\n**SSSS:** supportive wound care + antistaphylococcal antibiotics (cloxacillin or nafcillin).",
        pearl: "**MRSA trap: β-lactams (including cephalosporins) are completely useless** against MRSA due to PBP2a. Food poisoning is a clinical diagnosis — do NOT culture stool (the toxin, not the organism, causes illness). SSSS spares mucous membranes; TEN (toxic epidermal necrolysis, drug reaction) involves mucous membranes — histology differentiates (SSSS splits at stratum granulosum; TEN at dermal-epidermal junction)."
      },
      {
        name: "Staphylococcus epidermidis",
        summary: "Catalase+, coagulase−, novobiocin-sensitive; biofilm on prosthetics; #1 prosthetic valve endocarditis; vancomycin",
        gram: "GP Cocci in clusters",
        virulence: "**Biofilm formation** (polysaccharide intercellular adhesin — PIA) on prosthetic surfaces:\n— Renders organism highly resistant to antibiotics (poor penetration) and phagocytosis.\n— Allows sustained indolent infection on foreign bodies.\n**Coagulase-negative** — key distinguishing test from S. aureus.",
        disease: "**Prosthetic valve endocarditis:** #1 cause within the **first year** post-surgery (early PVE = acquired perioperatively).\n**Prosthetic joint infections, VP shunt infections, PICC/central line infections.**\n**Blood culture contaminant:** S. epidermidis is skin flora — a single positive blood culture usually represents contamination; requires **2 positive cultures from separate venipuncture sites** at separate times to be considered clinically significant.",
        lab_diagnosis: "**Gram stain:** GP cocci in clusters (smaller clusters than S. aureus).\n**Culture:** Blood agar — small, white-gray, slow-growing, **non-hemolytic (γ-hemolysis)**.\n**Tests:** Catalase positive, **Coagulase negative**, Novobiocin-**sensitive** (distinguishes from S. saprophyticus), PYR negative.",
        tx: "**Vancomycin** (drug of choice; most CoNS are methicillin-resistant — MRSE).\n**Add rifampin** for prosthetic valve/device infections (rifampin penetrates biofilm and prevents emergence of resistance).\n**Remove or replace prosthetic device** whenever clinically feasible — antibiotics alone rarely cure device infections.",
        pearl: "**Device bug:** any positive blood culture from a patient with a prosthetic valve, joint, shunt, or catheter should raise strong suspicion for S. epidermidis (not just contamination). Two positive cultures from separate sites = true infection. Rifampin must always be combined with a partner drug (never monotherapy — rapid resistance emerges)."
      },
      {
        name: "Staphylococcus saprophyticus",
        summary: "Catalase+, coagulase−, novobiocin-resistant; #2 UTI in young women (after E. coli); TMP-SMX",
        gram: "GP Cocci in clusters",
        virulence: "**Urease production** (alkalinizes urine — can contribute to struvite crystals).\n**Surface adhesins** for adherence to uroepithelium.\n**Hemagglutinin** for urinary tract colonization.\n**Novobiocin-resistant** — key lab distinguishing feature from other CoNS.",
        disease: "**Uncomplicated cystitis** in young, sexually active women (outpatient setting). Presents with dysuria, urinary frequency, urgency, and suprapubic discomfort. Urinalysis shows pyuria (WBCs) with GP cocci in clusters on microscopy.\n**Not associated with invasive infections** or bacteremia in healthy patients.",
        lab_diagnosis: "**Gram stain (urine):** GP cocci in clusters.\n**Culture:** Blood agar — small, white-opaque, non-hemolytic colonies. Urine culture >10⁵ CFU/mL.\n**Tests:** Catalase positive, Coagulase negative, **Novobiocin-resistant** (disk diffusion — zone <9mm = resistant; distinguishes from S. epidermidis which is sensitive), Urease positive.",
        tx: "**TMP-SMX** or **nitrofurantoin** (same first-line agents used for E. coli UTI). Fluoroquinolones are acceptable alternatives.\n**3–5 day course** for uncomplicated cystitis.",
        pearl: "Classic vignette: young sexually active woman with UTI symptoms + GP cocci in clusters on urine microscopy = S. saprophyticus. **Novobiocin-resistant** distinguishes it from S. epidermidis (sensitive). Unlike E. coli UTI, S. saprophyticus is intrinsically resistant to fosfomycin — not a reliable option."
      },
      {
        name: "Streptococcus pyogenes (Group A Strep, GAS)",
        summary: "β-hemolytic, PYR+, bacitracin-sensitive; pharyngitis, scarlet fever, NF; RF (throat only) and PSGN; penicillin never fails",
        gram: "GP Cocci in chains",
        virulence: "**M protein:** antiphagocytic; molecular mimicry with cardiac myosin → rheumatic fever.\n**Streptolysin O (SLO):** immunogenic → **ASO titer** rises after pharyngitis (not skin).\n**Streptolysin S (SLS):** oxygen-stable; non-immunogenic.\n**Hyaluronidase & streptokinase:** spread through tissue and fibrin.\n**Pyrogenic exotoxins A/B/C (SPE):** superantigens → scarlet fever, streptococcal TSS.\n**DNase B:** immunogenic after pharyngitis and skin → **anti-DNase B titer** rises after either.",
        disease: "**Pharyngitis:** exudative tonsillitis, no cough, fever, anterior cervical LAD.\n**Impetigo:** honey-crusted lesions. **Scarlet fever:** sandpaper rash, strawberry tongue, Pastia lines.\n**Erysipelas:** well-demarcated raised border. **Necrotizing fasciitis:** surgical emergency.\n**Sequelae: Rheumatic fever** (pharyngitis only; Jones criteria; prevented by abx). **PSGN** (pharyngitis or impetigo; low C3; NOT prevented by abx).",
        lab_diagnosis: "**Gram stain:** GP cocci in chains.\n**Culture:** Blood agar — small, translucent colonies with large zone of **β-hemolysis**.\n**Tests:** RADT (high specificity; negative in children → confirm with culture). **Bacitracin-sensitive** (distinguishes GAS from GBS). **PYR positive**.\n**Serology:** ASO titer (pharyngitis); Anti-DNase B (pharyngitis or impetigo — preferred for PSGN workup).",
        tx: "**Penicillin** (drug of choice — GAS has **never developed penicillin resistance**). Amoxicillin for 10 days for pharyngitis.\n**Clindamycin:** for invasive/necrotizing disease (inhibits toxin/protein synthesis via ribosomal blockade even in stationary phase — 'Eagle effect' seen with penicillin alone).\n**Penicillin-allergic:** azithromycin or clindamycin.\nTreat pharyngitis to prevent rheumatic fever. Antibiotics do **NOT prevent PSGN**.",
        pearl: "**ASO titer rises after pharyngitis but NOT after skin infections** — use Anti-DNase B for PSGN workup following impetigo. **Rheumatic fever follows pharyngitis only; PSGN follows either.** Penicillin prevents rheumatic fever but not PSGN. Add clindamycin to penicillin for necrotizing fasciitis or TSS to shut down toxin production (Eagle effect)."
      },
      {
        name: "Streptococcus agalactiae (Group B Strep, GBS)",
        summary: "β-hemolytic, CAMP+, bacitracin-resistant; #1 neonatal meningitis/sepsis; screen at 35–37 wks; intrapartum ampicillin",
        gram: "GP Cocci in chains",
        virulence: "**Polysaccharide capsule** (sialic acid coating — antiphagocytic; >10 serotypes; III most common in neonatal disease).\n**CAMP factor:** secreted protein synergistically lyses RBCs when combined with S. aureus β-hemolysin → arrowhead-shaped hemolysis on blood agar (CAMP test).\n**Surface proteins:** alpha-C protein and Rib — targets for maternal vaccination (under development).",
        disease: "**Neonatal disease:**\n— **Early-onset (0–7 days):** sepsis, pneumonia, meningitis — vertical transmission from colonized mother.\n— **Late-onset (7 days–3 months):** meningitis, bacteremia; higher neurological sequelae.\n**Maternal/adult:** UTI, chorioamnionitis, postpartum endometritis; bacteremia in elderly and diabetic patients.",
        lab_diagnosis: "**Gram stain:** GP cocci in chains.\n**Culture:** Blood agar — small, white-gray colonies with narrow zone of **β-hemolysis** (narrower than GAS).\n**Screening:** vaginal and rectal swab at **35–37 weeks gestation** → placed in selective enrichment broth (LIM or Todd-Hewitt) before culture on blood agar.\n**Tests:** **CAMP test positive** (arrowhead hemolysis). **Hippurate hydrolysis positive** (blue color change). **Bacitracin-resistant** (no zone of inhibition — opposite of GAS). PYR negative.",
        tx: "**Intrapartum prophylaxis:** **IV ampicillin** to colonized mothers during labor (given ≥4 hours before delivery for maximum efficacy).\n**Penicillin G** (drug of choice for documented GBS). Ampicillin is acceptable alternative.\n**Penicillin-allergic (low-risk):** cefazolin. **Penicillin-allergic (high-risk/anaphylaxis):** clindamycin (if susceptible) or vancomycin.",
        pearl: "GBS is the **#1 cause of neonatal meningitis and sepsis overall**; Listeria is #1 in immunocompromised neonates and is NOT covered by cephalosporins — always add ampicillin empirically in neonates. Early-onset GBS has higher mortality; late-onset has higher neurological morbidity. The CAMP test arrowhead is formed adjacent to a streak of S. aureus."
      },
      {
        name: "Streptococcus pneumoniae",
        summary: "α-hemolytic, optochin-sensitive, bile-soluble; #1 CAP, adult meningitis, otitis media; most feared in asplenia",
        gram: "GP Diplococci (lancet-shaped, encapsulated)",
        virulence: "**Polysaccharide capsule:** major virulence factor (>90 serotypes); prevents phagocytosis; requires **IgG or C3b opsonization** for clearance — explains why asplenic patients are so vulnerable.\n**IgA protease:** cleaves secretory IgA → colonizes mucosal surfaces.\n**Pneumolysin:** cholesterol-binding pore-forming toxin → RBC lysis, inhibits respiratory burst.\n**Teichoic acid (C polysaccharide):** triggers complement activation via lectin pathway.",
        disease: "**#1 cause of:** CAP (lobar consolidation, rust sputum, herpes labialis reactivation), bacterial meningitis in adults, otitis media and sinusitis in children.\n**Asplenic patients (surgical or functional — sickle cell):** rapidly fatal bacteremia (**OPSI**). **SHiN** = S. pneumoniae, H. influenzae, N. meningitidis — most feared encapsulated organisms in asplenia.",
        lab_diagnosis: "**Gram stain:** lancet-shaped GP diplococci.\n**Culture:** Blood agar — α-hemolytic colonies with central depression ('checker piece') due to autolysis.\n**Tests:** **Optochin-sensitive** (≥14mm zone — distinguishes from viridans Strep). **Bile-soluble** (colonies dissolve in sodium deoxycholate). **Quellung reaction:** capsule swells with type-specific antisera. **Urine antigen:** sensitive for serogroup 1.",
        tx: "**Susceptible:** penicillin G.\n**DRSP:** ceftriaxone; **vancomycin** for high-level resistance.\n**Meningitis:** ceftriaxone + vancomycin + **dexamethasone** (before/with first dose — reduces hearing loss).\n**Vaccines:** PCV15/PCV20 (conjugate — children, adults ≥65, high-risk). PPSV23 (polysaccharide — adults ≥65, asplenic, immunocompromised).",
        pearl: "**SHiN organisms in asplenia** (S. pneumoniae, H. influenzae, N. meningitidis) — vaccinate before elective splenectomy and give daily penicillin prophylaxis in children with sickle cell disease. Dexamethasone in meningitis reduces hearing loss (cranial nerve VIII involvement from basilar inflammation). Optochin sensitivity + bile solubility are the two key bench tests distinguishing S. pneumoniae from viridans Strep."
      },
      {
        name: "Streptococcus viridans group",
        summary: "α-hemolytic, optochin-resistant, bile-insoluble; SBE on damaged valves after dental work; S. bovis → colon cancer",
        gram: "GP Cocci in chains",
        virulence: "**Dextran (glucan) production** (by S. mutans, S. sanguis, S. mitis): adheres to fibrin-platelet thrombi on damaged heart valves and to tooth enamel.\n**S. mutans:** ferments sucrose → lactic acid → pH drops → enamel demineralization → **dental caries**.\n**Viridans group is optochin-resistant and bile-insoluble** — these two tests exclude S. pneumoniae and confirm viridans group identity.",
        disease: "**SBE:** damaged native valves (rheumatic, MVP, bicuspid) after dental procedures. Insidious: low-grade fever, malaise. Stigmata: **Osler nodes** (painful, fingertips), **Janeway lesions** (painless, palms/soles), **Roth spots**, splinter hemorrhages.\n**S. mutans:** dental caries.\n**S. bovis bacteremia → mandatory colonoscopy** (colorectal carcinoma association).",
        lab_diagnosis: "**Gram stain:** GP cocci in chains.\n**Culture:** Blood agar — small, **α-hemolytic** (green/grey-green) colonies.\n**Tests:** **Optochin-resistant** (zone <14mm or no zone — opposite of S. pneumoniae). **Bile-insoluble** (colonies do not dissolve in sodium deoxycholate — opposite of S. pneumoniae). PYR negative. Blood cultures **×3 from separate sites** (different venipuncture sites, ≥1h apart) required before starting antibiotics.",
        tx: "**Penicillin G + gentamicin** (synergistic bactericidal combination for endocarditis — aminoglycoside uptake enhanced by cell wall disruption).\n**Penicillin-allergic:** ceftriaxone (if not anaphylaxis) or vancomycin.\n**Prophylaxis:** for high-risk cardiac lesions (prosthetic valves, prior endocarditis, certain congenital defects): **amoxicillin 2g PO** 30–60 minutes before dental procedures.",
        pearl: "**S. bovis (S. gallolyticus) endocarditis = mandatory colonoscopy** — association with colorectal carcinoma is strong enough to warrant workup in every case. Viridans Strep endocarditis is subacute and follows dental work on damaged valves; S. aureus endocarditis is acute, destroys normal valves, and follows bacteremia from IV lines or drug use. Optochin-resistant + bile-insoluble = viridans Strep (not S. pneumoniae)."
      },
      {
        name: "Enterococcus faecalis / faecium",
        summary: "PYR+, grows in 6.5% NaCl; UTI, endocarditis; penicillin bacteriostatic only — add aminoglycoside; VRE → linezolid",
        gram: "GP Cocci in pairs or short chains",
        virulence: "**Intrinsic resistance:** to cephalosporins, TMP-SMX, clindamycin, and low-level aminoglycosides.\n**Acquired vancomycin resistance (VRE):** vanA or vanB genes on **transferable plasmids** → modify D-Ala-D-Ala peptidoglycan terminus → vancomycin cannot bind.\n— **vanA (E. faecium):** high-level resistance to both vancomycin and teicoplanin.\n— **vanB:** resistance to vancomycin only.\n**Biofilm formation** on catheters and prosthetics. Tolerates bile salts, extreme pH, and salt.",
        disease: "**UTI:** especially catheter-associated (CAUTI) — major nosocomial pathogen.\n**Biliary/GI tract infections:** cholecystitis, peritonitis, intra-abdominal abscess.\n**Endocarditis:** nosocomial; native valves; particularly in elderly and post-GU instrumentation patients.\n**VRE:** ICU and immunocompromised patients; limited treatment options; horizontal transmission via fecal-oral route.",
        lab_diagnosis: "**Gram stain:** GP cocci in pairs or short chains (similar to Strep — easily confused).\n**Culture:** Blood agar — small, gray-white, usually **γ-hemolytic** (non-hemolytic).\n**Tests:** **PYR positive** (distinguishes from Strep viridans and Strep bovis). **Grows in 6.5% NaCl** (Staph also grows; Strep does not — key distinguishing test). **Bile-esculin positive** (black precipitate). Vancomycin susceptibility testing for VRE classification.",
        tx: "**E. faecalis (endocarditis):** **ampicillin + gentamicin** (bactericidal synergy — cell wall disruption allows aminoglycoside uptake); or ampicillin + ceftriaxone (double β-lactam synergy — avoids aminoglycoside nephrotoxicity).\n**E. faecium (UTI, non-endocarditis):** ampicillin if susceptible.\n**VRE:** **linezolid** (bacteriostatic) or **daptomycin** (bactericidal).\n**Intrinsically resistant to:** all cephalosporins, TMP-SMX, aminoglycosides alone.",
        pearl: "**Classic trap: penicillin/ampicillin alone is only BACTERIOSTATIC against Enterococcus** — must add an aminoglycoside or use the double β-lactam combination for bactericidal effect in endocarditis. Cephalosporins have zero activity against Enterococcus — a common prescribing error. VRE surveillance cultures are routine in ICUs; contact precautions are required because VRE survives on surfaces for weeks."
      }
    ]
  },
  {
    group: "Gram-Positive Bacilli",
    color: "bact",
    organisms: [
      {
        name: "Bacillus anthracis",
        summary: "Aerobic, spore-forming, non-hemolytic; cutaneous eschar, inhalation (widened mediastinum), GI; Category A agent; cipro/doxy",
        gram: "GP Bacillus — large, aerobic, spore-forming (central/subterminal spores)",
        virulence: "**Poly-D-glutamate capsule:** protein capsule (unique — not polysaccharide); antiphagocytic; pXO2 plasmid.\n**Anthrax toxin** (pXO1 plasmid):\n— **Protective antigen (PA):** binds receptor → forms pore → delivers EF and LF.\n— **Edema factor (EF):** calmodulin-dependent adenylate cyclase → ↑cAMP → edema.\n— **Lethal factor (LF):** zinc metalloprotease → cleaves MAPKK → macrophage death → cytokine storm.",
        disease: "**Cutaneous (95%):** painless papule → vesicle → **painless black eschar** with non-pitting gelatinous edema. 20% fatal if untreated.\n**Inhalation ('woolsorter's disease'):** spores → mediastinal lymph nodes → hemorrhagic mediastinitis. Flu-like prodrome → rapid deterioration, **widened mediastinum on CXR**. >80% fatal.\n**GI:** ingested undercooked meat → abdominal pain, bloody diarrhea, septicemia.",
        lab_diagnosis: "**Gram stain:** large GP rods in chains, central/subterminal spores (spores not visible in tissue on standard stain — requires spore stain).\n**Culture:** Blood agar — large, flat, gray-white, **non-hemolytic** colonies with irregular 'Medusa head' or 'ground glass' edges (sticky, sticks to inoculating loop).\n**Tests:** PCR for PA/LF toxin genes. Non-motile (distinguishes from B. cereus). **Notify lab immediately — BSL-3 precautions.**",
        tx: "**Cutaneous/prophylaxis:** ciprofloxacin or doxycycline × 60 days.\n**Inhalation/systemic:** ciprofloxacin or doxycycline + protein synthesis inhibitor (clindamycin or linezolid) × 60 days.\n**Antitoxin (raxibacumab or obiltoxaximab):** for severe systemic disease (blocks PA binding).\n**Post-exposure prophylaxis:** ciprofloxacin + anthrax vaccine (3-dose series).",
        pearl: "**Mediastinal widening + flu-like prodrome in a healthy individual = inhalation anthrax until proven otherwise** (high-yield bioterrorism scenario). Cutaneous anthrax: painless black eschar with gelatinous edema — unlike painful cellulitis from other causes. EF raises cAMP (like cholera toxin, pertussis); LF cleaves MAPKK (like lethal factor of Yersinia pestis). Non-hemolytic colonies distinguish B. anthracis from hemolytic B. cereus."
      },
      {
        name: "Bacillus cereus",
        summary: "Aerobic, spore-forming, β-hemolytic, motile; emetic (rice, 1–6h) vs. diarrheal (meat, 8–16h); self-limited; no antibiotics",
        gram: "GP Bacillus — large, aerobic, spore-forming, motile",
        virulence: "**Emetic toxin (cereulide):** heat-stable, preformed in food (survives reheating) → stimulates 5-HT₃ receptors → vomiting.\n**Diarrheal enterotoxins (Hbl/Nhe):** heat-labile, produced in gut → pore formation → secretory diarrhea.\n**Spores:** survive initial cooking; germinate during cooling at room temperature.",
        disease: "**Emetic syndrome (S. aureus mimic):** onset **1–6h**; N/V dominant; classic food — **reheated fried rice**; self-limited 6–24h.\n**Diarrheal syndrome (C. perfringens mimic):** onset **8–16h**; watery diarrhea + cramps; minimal vomiting; meat/sauces; self-limited 12–24h.",
        lab_diagnosis: "**Gram stain:** large GP rods with oval central/subterminal spores.\n**Culture:** Blood agar — large, flat, gray-white colonies with **β-hemolysis** (distinguishes from non-hemolytic B. anthracis). Motile (B. anthracis is non-motile).\n**Diagnosis is clinical** in most cases; lab confirmation is reserved for outbreak investigations (stool culture, toxin detection).",
        tx: "**Supportive care only** — both syndromes are self-limited within 24 hours.\nAntibiotics are **not indicated** for GI illness.\nSupportive hydration and anti-emetics as needed.",
        pearl: "**Fried rice syndrome:** B. cereus emetic toxin is heat-stable — reheating the rice does NOT destroy the toxin once it has formed during room-temperature storage. Emetic form closely mimics S. aureus food poisoning (short onset, vomiting); diarrheal form closely mimics C. perfringens (longer onset, diarrhea). B. cereus is also a cause of post-traumatic endophthalmitis (IV drug use, soil injury) — can destroy the eye rapidly."
      },
      {
        name: "Clostridium tetani",
        summary: "Anaerobic, terminal drumstick spores; tetanospasmin → disinhibition → spastic paralysis; HTIG + metronidazole + benzos",
        gram: "GP Bacillus — anaerobic, spore-forming (terminal spores — 'drumstick' or 'tennis racket' appearance)",
        virulence: "**Tetanospasmin (tetanus neurotoxin):**\n— A-B toxin; B chain binds peripheral motor neuron terminals → **retrograde axonal transport** to spinal cord interneurons.\n— A chain (zinc endopeptidase) **cleaves VAMP/synaptobrevin** (SNARE protein) at **inhibitory Renshaw interneurons** → blocks **glycine and GABA release** → loss of inhibition of motor neurons → **spastic paralysis** and autonomic instability.\n— Highly potent — fatal dose ~2.5 nanograms/kg.",
        disease: "**Generalized tetanus:** trismus ('lockjaw'), **risus sardonicus** (sardonic grin from facial spasm), **opisthotonus** (arched back from paraspinal extensor spasm). Autonomic instability: tachycardia, hypertension, arrhythmias (major cause of death). Mental status **clear** (toxin doesn't cross BBB).\n**Neonatal tetanus:** umbilical stump infection in infants of unvaccinated mothers; high mortality.\n**Localized tetanus:** confined to muscles near wound; can progress to generalized.",
        lab_diagnosis: "**Gram stain:** GP rods with large round **terminal spores** giving pathognomonic 'drumstick' or 'tennis racket' shape.\n**Culture:** Anaerobic blood agar — gray, irregular, β-hemolytic colonies with characteristic odor.\n**Diagnosis is clinical** — based on wound history, vaccination status, and the distinctive presentation; culture and toxin testing are rarely used acutely.",
        tx: "1. **HTIG** (human tetanus immunoglobulin): neutralizes unbound toxin (bound toxin is irreversible).\n2. **Wound debridement:** remove necrotic tissue/foreign bodies.\n3. **Metronidazole** (or penicillin G): kills vegetative organisms.\n4. **Benzodiazepines:** muscle relaxation, GABAergic support.\n5. **Mechanical ventilation** for respiratory failure.\n**Prophylaxis:** Td booster every 10 years; Tdap once in adults.",
        pearl: "**Mechanism contrast:** Tetanospasmin blocks inhibitory interneurons (glycine/GABA) → **spastic paralysis, clear mental status**. Botulinum toxin blocks excitatory ACh release at the NMJ → **flaccid paralysis**. Both cleave SNARE proteins but at different synapses. Risus sardonicus + opisthotonus = tetanus pathognomonic combination. The patient is fully conscious and aware throughout the spasms — extremely distressing."
      },
      {
        name: "Clostridium botulinum",
        summary: "Anaerobic, subterminal spores; botulinum toxin → descending flaccid paralysis; food-borne/infant/wound; antitoxin + ventilation",
        gram: "GP Bacillus — anaerobic, spore-forming (subterminal oval spores)",
        virulence: "**Botulinum toxin (7 serotypes: A–G):** most potent biological toxin known.\n— B chain binds **presynaptic NMJ** and parasympathetic nerve terminals → endocytosis.\n— A chain (zinc endopeptidase) cleaves **SNAP-25 or synaptobrevin (VAMP)** (SNARE proteins) → blocks **ACh vesicle fusion and release** → flaccid paralysis.\n— Also blocks parasympathetic terminals → anticholinergic signs (dry mouth, constipation, urinary retention, dilated pupils, blurred vision).",
        disease: "**Food-borne:** preformed toxin in improperly canned/preserved foods → N/V → **descending symmetric flaccid paralysis** (cranial nerves first: diplopia, dysarthria, dysphagia → respiratory muscles). No fever, normal mental status.\n**Infant botulism (most common in US):** honey before age 1 or soil → spore ingestion → in vivo toxin production. Floppy baby, weak cry, poor feeding, constipation.\n**Wound botulism:** contaminated puncture wounds, IV drug use (black tar heroin).",
        lab_diagnosis: "**Gram stain:** GP rods with oval subterminal spores.\n**Culture:** Anaerobic blood agar — gray, β-hemolytic colonies; egg yolk agar shows lipase activity.\n**Tests:** **Mouse bioassay** (gold standard — inject patient serum/stool into mice; paralysis confirms toxin). EMG shows **incremental response** to repetitive high-frequency nerve stimulation (distinguishes from myasthenia gravis which shows decremental response). Serum or stool toxin detection by CDC.",
        tx: "**Heptavalent botulinum antitoxin (HBAT):** neutralizes unbound circulating toxin (serotypes A–G); administered as soon as possible.\n**Supportive care:** mechanical ventilation (respiratory failure is the major cause of death).\n**Infant botulism:** **BabyBIG (botulism immune globulin IV)** — human-derived; highly effective.\n**DO NOT give aminoglycosides** in botulism (worsen NMJ blockade). **DO NOT give antibiotics** in infant botulism (lysis of intestinal bacteria → massive toxin release).",
        pearl: "**EMG is key:** incremental response to repetitive stimulation = botulism (more ACh vesicles mobilized); decremental = myasthenia gravis. Descending '4 Ds': **Diplopia, Dysarthria, Dysphagia, Descending paralysis**. Anticholinergic signs (dry mouth, dilated pupils) help distinguish from Guillain-Barré (which has sensory loss). Infant botulism vignette: constipated floppy baby after honey exposure — do not give antibiotics."
      },
      {
        name: "Clostridioides (Clostridium) difficile",
        summary: "Anaerobic, spores resist alcohol; toxin A + B → pseudomembranous colitis; fidaxomicin/PO vanco; FMT for recurrence",
        gram: "GP Bacillus — anaerobic, spore-forming (subterminal spores)",
        virulence: "**Toxin A (enterotoxin):** NF-κB → mucosal inflammation, fluid secretion.\n**Toxin B (cytotoxin):** glucosylates Rho GTPases → actin depolymerization → cell death; **more clinically important**.\n**Binary toxin (CDT):** hypervirulent **NAP1/BI/027** strain.\n**Spores:** months on surfaces; **resistant to alcohol sanitizers** — soap and water required.\n**Risk factors:** clindamycin, fluoroquinolones, cephalosporins; PPIs; hospitalization; age >65.",
        disease: "**Spectrum:**\n— **Antibiotic-associated diarrhea:** watery, non-bloody; during or weeks after antibiotics.\n— **Pseudomembranous colitis:** diarrhea + fever + **leukemoid reaction** (WBC >30k) + cramps.\n— **Fulminant colitis:** toxic megacolon (>6 cm) → perforation → sepsis.\n**Recurrent C. diff:** 20–30% after first episode; 40–60% after second → FMT indicated.",
        lab_diagnosis: "**Tests (stool — do not test formed stools):**\n— **PCR (NAAT) for toxin B gene:** highest sensitivity (~100%).\n— **Stool toxin EIA (TcdA/TcdB):** lower sensitivity (~75%) but confirms active toxin.\n— **GDH antigen:** rapid sensitive screen; positive → reflex to toxin EIA or PCR.\n— **Two-step algorithm:** GDH (screen) → toxin EIA/PCR (confirm).\n**Endoscopy:** cream/yellow pseudomembranes on colonic mucosa.\n**Culture:** CCFA agar, anaerobic; yellow, ground-glass, 'horse-manure' odor.",
        tx: "**Non-severe:** **fidaxomicin** × 10 days (preferred; lower recurrence) or oral vancomycin × 10 days.\n**Severe:** oral vancomycin × 10 days.\n**Fulminant:** oral vancomycin ± rectal enema + IV metronidazole; subtotal colectomy if deteriorating.\n**Recurrent (≥2):** **FMT** (>90% cure). Bezlotoxumab as adjunct.\n**IV vancomycin = zero activity** (not excreted into the gut).",
        pearl: "**IV vancomycin = zero activity against C. diff** (not excreted into the gut — must use oral route). Spores resist alcohol sanitizers → **soap and water** and bleach for environmental decontamination. Contact precautions required. The leukemoid reaction (WBC >30k) in a hospitalized patient with diarrhea is highly suggestive of C. diff — test immediately. Fidaxomicin is preferred over oral vancomycin due to a lower recurrence rate."
      },
      {
        name: "Clostridium perfringens",
        summary: "Anaerobic, boxcar rods, spores absent in tissue; alpha toxin → gas gangrene; double-zone β-hemolysis; debridement + PCN G",
        gram: "GP Bacillus — anaerobic, spore-forming (large, boxcar-shaped rods; spores rarely seen in tissue)",
        virulence: "**Alpha toxin (lecithinase/phospholipase C):** cleaves **phosphatidylcholine** in RBC and cell membranes → hemolysis, platelet destruction, endothelial damage, myonecrosis, gas production.\n**Enterotoxin:** disrupts intestinal tight junctions → food poisoning (net secretory diarrhea).\n**Collagenase, hyaluronidase, DNase:** facilitate rapid tissue spread.\n**Theta toxin (perfringolysin O):** cholesterol-dependent cytolysin.",
        disease: "**Gas gangrene (clostridial myonecrosis):** contaminated traumatic/postoperative wounds, injection sites. Severe pain out of proportion → **crepitus** (gas in tissue) → bronze skin → bullae → septic shock. **Gas in tissue planes on CT/X-ray.** Mortality >25%.\n**Food poisoning:** large spore inoculum in reheated meat → enterotoxin in gut. Onset **8–24h**, watery diarrhea + cramps, no vomiting, no fever. Self-limited 12–24h.",
        lab_diagnosis: "**Gram stain (wound):** large boxcar-shaped GP rods; spores **not visible** in tissue (sporulation suppressed in vivo).\n**Culture:** Anaerobic blood agar — **double-zone β-hemolysis** (inner complete + outer partial — pathognomonic).\n**Nagler reaction:** lecithinase activity on egg yolk agar (opaque precipitate).\n**Imaging:** gas in tissue planes on X-ray/CT.",
        tx: "**Gas gangrene:** emergent **wide surgical debridement** (remove all necrotic tissue, often requires amputation) + **penicillin G IV** ± clindamycin (inhibits toxin synthesis).\n**Hyperbaric oxygen:** adjunctive — inhibits anaerobic growth.\n**Food poisoning:** supportive only (self-limited).",
        pearl: "**Spores are NOT visible in tissue** on Gram stain — C. perfringens suppresses sporulation in the anaerobic tissue environment (this distinguishes it from environmental spore stains). Gas gangrene is a surgical emergency — **do NOT delay debridement for imaging**. Double-zone β-hemolysis on blood agar is highly distinctive. Food poisoning from C. perfringens mimics C. difficile-like onset but is much shorter and occurs from a contaminated shared food source."
      },
      {
        name: "Corynebacterium diphtheriae",
        summary: "Club-shaped, metachromatic granules; β-phage toxin (ADP-ribosylates EF-2); pseudomembrane + bull neck; antitoxin first",
        gram: "GP Bacillus — club-shaped (swollen end), pleomorphic, 'Chinese letter' or palisade arrangement",
        virulence: "**Diphtheria toxin** (A-B toxin, encoded by **β-phage tox gene** — only lysogenized strains are toxigenic):\n— B fragment binds cell receptor → internalization.\n— A fragment: **ADP-ribosylates EF-2** → halts protein synthesis → cell death in heart, nerves, kidneys.\n— Same mechanism as Pseudomonas exotoxin A.\n**Metachromatic granules (volutin):** polyphosphate granules at poles → 'Chinese character' on Albert/Loeffler stain.",
        disease: "**Pharyngeal diphtheria:** low-grade fever → **tough gray adherent pseudomembrane** on tonsils/pharynx. **Bleeds when removed** (unlike strep exudate). **'Bull neck'**: massive cervical LAD + soft tissue edema.\n**Toxin complications (days–weeks later):**\n— **Myocarditis:** heart block, arrhythmias — most common cause of death.\n— **Demyelinating neuropathy:** palatal palsy → oculomotor palsy → peripheral neuropathy.",
        lab_diagnosis: "**Gram stain:** pleomorphic GP rods in 'Chinese letter' (palisade) arrangement.\n**Culture:** **Loeffler's medium** — cream colonies in 6–8h. **Tellurite agar** — gray-black colonies (selective/differential).\n**Stains:** Albert stain → **metachromatic granules** (volutin) at poles.\n**Toxigenicity:** **Elek test** (immunodiffusion) or PCR for tox gene.",
        tx: "1. **Diphtheria antitoxin (DAT):** neutralizes unbound circulating toxin — administer **immediately** on clinical suspicion, **before culture confirmation** (toxin bound to tissue cannot be neutralized).\n2. **Erythromycin or penicillin** (kills organism, eliminates carrier state, prevents toxin production).\n3. Strict respiratory **isolation** (droplet).\n**Prevention:** DTaP primary series (2, 4, 6 months; 15–18 months; 4–6 years) + Td booster every 10 years.",
        pearl: "**Give antitoxin immediately — do not wait for culture results** (toxin already bound to heart/nerve is irreversible). The pseudomembrane bleeds when forcibly removed; strep exudate does not bleed. Diphtheria toxin and Pseudomonas exotoxin A share the **exact same mechanism** (ADP-ribosylation of EF-2) — high-yield comparison. The β-phage must infect C. diphtheriae for it to produce toxin — non-lysogenized strains are non-toxigenic."
      },
      {
        name: "Listeria monocytogenes",
        summary: "Facultative intracellular; tumbling motility 25°C, grows at 4°C; neonatal/immunocompromised meningitis; ampicillin (not cephalosporins)",
        gram: "GP Bacillus — short rod/coccobacillus; facultative intracellular; facultative anaerobe",
        virulence: "**Listeriolysin O (LLO):** lyses phagosomal membrane → escapes into cytoplasm.\n**ActA:** nucleates actin → **rocket tail propulsion** → cell-to-cell spread without extracellular exposure.\n**Internalins (InlA, InlB):** bind E-cadherin/Met → invasion of gut epithelium, placenta, BBB.\n**Grows at 4°C** (refrigerator) — cold deli meats, soft cheeses.\n**Tumbling motility at 25°C** (umbrella pattern in soft agar).",
        disease: "**Neonatal listeriosis:**\n— **Early-onset (granulomatosis infantiseptica):** in utero/peripartum; septicemia, meningitis, granulomatous lesions in multiple organs.\n— **Late-onset (1–4 weeks):** meningitis, bacteremia; better prognosis.\n**Meningitis in immunocompromised:** transplant, HIV, steroids, hematologic malignancy, elderly (>50).\n**Maternal:** bacteremia → spontaneous abortion, premature labor, fetal death. Mother may have only mild flu-like illness.\n**Food sources:** unpasteurized dairy, soft cheeses, deli meats, smoked fish.",
        lab_diagnosis: "**Gram stain:** short GP rods/coccobacilli — easily mistaken for diphtheroids.\n**Culture:** Blood agar — narrow-zone **β-hemolytic** colonies; grows at 4°C.\n**Tests:** **Tumbling motility at 25°C** (umbrella pattern). **CAMP test+** (like GBS).\n**CSF:** PMN pleocytosis, elevated protein, low glucose (bacterial meningitis pattern).",
        tx: "**Ampicillin** (drug of choice) ± gentamicin (for serious infections — bactericidal synergy).\n**TMP-SMX** (alternative for penicillin-allergic patients).\n**Cephalosporins are completely ineffective** — intrinsic resistance due to altered PBPs.\n**Empiric meningitis coverage:** always add ampicillin to ceftriaxone/vancomycin in neonates, elderly (>50), pregnant, or immunocompromised patients.",
        pearl: "**Empiric ceftriaxone + vancomycin misses Listeria entirely** — must add ampicillin in at-risk groups (neonates, elderly >50, pregnant, immunocompromised). Listeria is one of the few bacteria that grows in the refrigerator — explains outbreaks from cold deli meats and soft cheeses. Actin rocket propulsion is shared with Shigella (ActA ≈ IcsA) — allows cell-to-cell spread without extracellular exposure to immune defenses."
      }
    ]
  },
  {
    group: "Gram-Positive Branching Filamentous Rods",
    color: "bact",
    organisms: [
      {
        name: "Actinomyces israelii",
        summary: "Anaerobic, non-acid-fast; normal flora; sulfur granules; lumpy jaw after dental work; IUD → pelvic disease; prolonged penicillin",
        gram: "GP branching filamentous rod — anaerobic, non-acid-fast",
        virulence: "**Strict anaerobe** — thrives in devitalized and necrotic tissue after mucosal barrier disruption (trauma, surgery, dental extraction, aspiration).\n**Normal flora** of the oral cavity, GI tract, and female genital tract — disease results from endogenous spread, not exogenous infection.\n**Sulfur granules:** macroscopic aggregates of filamentous bacteria (1–2 mm, yellow) surrounded by a Splendore-Hoeppli eosinophilic matrix — visible in pus from sinus tracts.",
        disease: "**Cervicofacial ('lumpy jaw') — most common:** woody jaw/neck swelling after dental work; **draining sinus tracts** with sulfur granules; crosses tissue planes, mimics malignancy.\n**Thoracic:** aspiration → lung abscess; crosses chest wall — mimics **lung cancer on CT**.\n**Pelvic:** **IUD-associated** — Actinomyces on Pap smear in IUD user is the classic association.",
        lab_diagnosis: "**Gram stain:** GP branching filamentous rods; **non-acid-fast** (distinguishes from Nocardia, which is weakly acid-fast).\n**Pathology/Histology:** **Sulfur granules** (macroscopic yellow aggregates visible in pus or on histologic sections); 'ray fungus' (Actinomyces = 'ray fungus') — eosinophilic clubs at periphery.\n**Culture:** Anaerobic blood agar — slow-growing (7–14 days); colonies are rough, lobulated 'molar tooth' or 'spider' morphology.",
        tx: "**Penicillin G IV** × 2–6 weeks (for initial control) → **oral amoxicillin × 6–12 months** (prolonged course required to penetrate fibrotic tissue and achieve cure).\n**Surgical drainage** of abscesses (often requires repeated procedures).\n**Remove IUD** if pelvic actinomycosis is confirmed.",
        pearl: "**Actinomyces vs. Nocardia:** both form branching GP filaments, but Actinomyces is **anaerobic + non-acid-fast** while Nocardia is **aerobic + weakly acid-fast**. Thoracic actinomycosis frequently mimics lung cancer — always consider actinomycosis in the differential of a chronic non-resolving lung mass that crosses tissue planes. Sulfur granules are macroscopic and visible to the naked eye — a key finding in draining sinuses."
      },
      {
        name: "Nocardia asteroides complex",
        summary: "Aerobic, weakly acid-fast; pulmonary/CNS abscess in immunocompromised; sporotrichoid spread; TMP-SMX × 6–12 months",
        gram: "GP branching filamentous rod — aerobic, weakly acid-fast (modified Ziehl-Neelsen positive)",
        virulence: "**Strictly aerobic** (in contrast to Actinomyces).\n**Weakly acid-fast** (partial resistance of mycolic acids to decolorization — modified ZN stain required; Kinyoun modification without heating).\nResists intracellular killing by **inhibiting phagosome-lysosome fusion** and scavenging reactive oxygen species (catalase, superoxide dismutase) → survives in macrophages.\nFound in **soil, decaying organic matter, water** worldwide — inhalation or traumatic inoculation.",
        disease: "**Pulmonary (most common):** cavitary pneumonia/lung abscess in **immunocompromised** (steroids, transplant, HIV). Mimics TB on imaging.\n**CNS:** brain abscess from hematogenous spread; headache + focal deficits in immunocompromised.\n**Cutaneous (immunocompetent):** soil inoculation → **sporotrichoid spread** (ascending lymphatic nodules). **Mycetoma (Madura foot):** chronic foot infection with draining sinuses.",
        lab_diagnosis: "**Gram stain:** GP branching filamentous rods with a characteristic **beaded** ('string of pearls') appearance.\n**Modified acid-fast stain (Kinyoun):** **weakly acid-fast positive** (pink-red filaments against blue background) — key distinguishing stain from Actinomyces.\n**Culture:** Aerobic culture on blood agar or Sabouraud agar (also grows on fungal media — a trap). Grows slowly — **dry, chalky white to orange, waxy, heaped colonies**; may take 2–4 weeks. Requires **prolonged incubation**.",
        tx: "**TMP-SMX** (drug of choice) — prolonged course **6–12 months** (12+ months for CNS disease).\n**Severe/disseminated/CNS:** add **imipenem** or **amikacin** initially.\n**Surgical drainage** of brain abscess if accessible and causing mass effect.\n**Susceptibility testing required** — N. farcinica is often resistant to TMP-SMX.",
        pearl: "**Nocardia vs. Actinomyces — the critical comparison:**\n— Nocardia: **aerobic, weakly acid-fast, soil exposure, immunocompromised host**, TMP-SMX.\n— Actinomyces: **anaerobic, non-acid-fast, normal flora, mucosal disruption (dental/IUD)**, penicillin.\nCNS abscess + cavitary pneumonia in a transplant patient = **Nocardia until proven otherwise**. Cutaneous Nocardia sporotrichoid spread is clinically identical to Sporothrix schenckii — culture and modified acid-fast stain differentiate them."
      }
    ]
  },


  {
    group: "Gram-Negative Cocci",
    color: "bact",
    organisms: [
      {
        name: "Neisseria meningitidis",
        summary: "Encapsulated GN diplococcus, oxidase+; #1 meningitis in teens; petechial rash, Waterhouse-Friderichsen; ceftriaxone + rifampin prophylaxis",
        gram: "GN Diplococci (kidney bean-shaped, encapsulated)",
        virulence: "**Polysaccharide capsule** (serotypes A, B, C, W, Y, X antiphagocytic; serotype B capsule mimics human neural adhesion molecule → poor immunogenicity). **Endotoxin (LPS)** → massive inflammatory cascade → DIC and shock. **Pili** for nasopharyngeal attachment. **IgA protease.** **Oxidase positive.**",
        disease: "**Bacterial meningitis:** teens and college students (dormitory outbreaks), asplenic patients. Classic triad: fever + nuchal rigidity + altered mental status. **Petechial/purpuric non-blanching rash** = meningococcemia, indicates DIC. **Waterhouse-Friderichsen syndrome:** bilateral adrenal hemorrhage → acute adrenal insufficiency → refractory shock → death within hours. Terminal complement deficiency (C5-C9) → recurrent meningococcal disease.",
        lab_diagnosis: "**Gram stain (CSF):** GN kidney bean-shaped diplococci, often intracellular within PMNs. **Culture:** Blood/chocolate agar (small, gray, moist, smooth, **β-hemolytic** colonies; requires CO2). **Thayer-Martin VCN agar** for nasopharyngeal swabs (selective). **Tests:** Oxidase positive (purple/blue color with Kovac's reagent within 10 seconds). Latex agglutination or PCR for rapid antigen detection in CSF. Blood cultures (positive in meningococcemia).",
        tx: "**Ceftriaxone IV** (start immediately do not wait for LP if clinical suspicion is high). **Dexamethasone** before or with first antibiotic dose. **Rifampin prophylaxis** for close contacts (or ciprofloxacin PO single dose, or ceftriaxone IM single dose). **Vaccines:** MenACWY (required for college entry) + MenB (recommended ages 16-23).",
        pearl: "Non-blanching petechial rash plus meningitis is a medical emergency; treat before lumbar puncture if there is any delay risk. Waterhouse-Friderichsen syndrome presents with bilateral adrenal hemorrhage; do NOT delay steroids. Check terminal complement (C5-C9) levels in patients with recurrent Neisseria infections."
      },
      {
        name: "Neisseria gonorrhoeae",
        summary: "GN diplococcus, oxidase+, no capsule; urethritis/cervicitis, PID, DGI; intracellular in PMNs; ceftriaxone + doxycycline",
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
        summary: "Lac+, indole+, oxidase−; 6 diarrheagenic pathotypes; #1 UTI; K1 → neonatal meningitis; ETEC = traveler's diarrhea",
        gram: "GN Bacillus (lactose fermenter, facultative anaerobe)",
        virulence: "**ETEC:** heat-labile toxin (LT ADP-ribosylates Gs → ↑cAMP) + heat-stable toxin (ST activates guanylyl cyclase → ↑cGMP). **EPEC:** attaching and effacing lesions (no toxin). **EHEC (O157:H7):** Shiga-like toxin (verotoxin) inhibits 60S ribosome (cleaves 28S rRNA) → endothelial cell death → HUS. **EIEC:** invades colonic mucosa. **K1 capsule** (neonatal meningitis).",
        disease: "**UTI** (#1 cause overall). **Neonatal meningitis** (#1 cause, K1 capsule). **ETEC:** travelers diarrhea (watery, no blood, no fever). **EHEC O157:H7:** bloody diarrhea → HUS (microangiopathic hemolytic anemia + thrombocytopenia + acute kidney injury). **EPEC:** infant diarrhea.",
        lab_diagnosis: "**Culture:** MacConkey agar (pink to red, flat, non-mucoid lactose-fermenting colonies). Blood agar (gray, some β-hemolytic). **SMAC (sorbitol MacConkey):** O157:H7 forms **colorless** colonies (sorbitol non-fermenter). **Tests:** Stool Shiga toxin EIA or PCR for EHEC. IMViC pattern: ++-- (Indole+, Methyl red+, Voges-Proskauer negative, Citrate negative). Urine culture >10⁵ CFU/mL.",
        tx: "**UTI:** TMP-SMX or fluoroquinolone. **ETEC:** azithromycin or fluoroquinolone. **EHEC O157:H7: NO antibiotics** (increase Shiga toxin release and HUS risk). **Neonatal meningitis:** cefotaxime + ampicillin.",
        pearl: "Treatment trap: Giving antibiotics for EHEC increases the risk of HUS. HUS triad: microangiopathic hemolytic anemia + thrombocytopenia + acute kidney injury. Shiga toxin inhibits the 60S ribosome, sharing the exact mechanism with Shigella toxin."
      },
      {
        name: "Salmonella",
        summary: "Non-lac fermenter, H2S+, motile; S. typhi → enteric fever (rose spots, bradycardia); non-typhi → self-limited gastroenteritis",
        gram: "GN Bacillus (non-lactose fermenter, motile, H2S-producing)",
        virulence: "Survives intracellularly in macrophages via **SPI-1 and SPI-2 pathogenicity islands** (type III secretion systems). **Vi antigen capsule** (S. typhi only antiphagocytic). Flagella (motile). Somatic LPS. Does NOT produce urease.",
        disease: "**S. typhi (typhoid/enteric fever):** 'stepladder' fever, relative bradycardia, rose spots (faint blanching macules on trunk), hepatosplenomegaly, constipation early → diarrhea later. Chronic carrier state: gallbladder colonization. **Non-typhi Salmonella:** self-limited food-borne gastroenteritis. **Osteomyelitis in sickle cell disease**.",
        lab_diagnosis: "**Culture:** MacConkey agar (**colorless/translucent** non-lactose fermenting). Blood agar (smooth, gray, non-hemolytic). **TSI agar:** H2S production (black precipitate), alkaline slant/acid butt (typhi: no gas; non-typhi: gas). **Tests:** Bone marrow culture is most sensitive for typhoid. Blood culture positive in week 1; stool/urine positive in weeks 2-3.",
        tx: "**Typhoid fever:** ceftriaxone or fluoroquinolone. **Non-typhi gastroenteritis:** supportive; antibiotics only if bacteremic, immunocompromised, or sickle cell. **Osteomyelitis:** fluoroquinolone or ceftriaxone.",
        pearl: "Sickle cell plus osteomyelitis equals Salmonella. Chronic typhoid carriers harbor the bacteria in the gallbladder ('Typhoid Mary'). Differentiate from Shigella on TSI agar: Salmonella produces H2S (black precipitate) and is motile; Shigella does neither."
      },
      {
        name: "Shigella",
        summary: "Non-lac, non-motile, no H2S; bloody dysentery, very low infectious dose (10–100); Shiga toxin (S. dysenteriae); azithromycin",
        gram: "GN Bacillus (non-lactose fermenter, non-motile, no H2S)",
        virulence: "**Invasin proteins** (type III secretion system) invades colonic epithelial cells via M cells in Peyer's patches → spreads cell-to-cell using **actin polymerization**. **Shiga toxin** (S. dysenteriae type 1): inhibits 60S ribosome. Non-motile. Very low infectious dose (10-100 organisms).",
        disease: "**Bacillary dysentery:** abrupt fever, cramping, tenesmus, **bloody mucoid diarrhea**. Invades colonic epithelium → shallow ulcers. **Complications:** HUS (S. dysenteriae), reactive arthritis (HLA-B27), Shigella encephalopathy (children seizures). No animal reservoir.",
        lab_diagnosis: "**Culture:** MacConkey agar (**colorless** non-lactose fermenter). **TSI agar:** no H2S, no gas, acid slant/acid butt. **Tests:** Stool smear shows abundant PMNs and RBCs. Non-motile on wet prep (distinguishes from Salmonella). PCR for Shiga toxin gene.",
        tx: "**Azithromycin or fluoroquinolone** (shortens illness duration and reduces transmission). Antibiotics ARE indicated in Shigella.",
        pearl: "Shigella = GIVE antibiotics; EHEC = NO antibiotics. Very low infectious inoculum makes it highly contagious in daycares. Shigella is non-motile and does not produce H2S, distinguishing it from Salmonella."
      },
      {
        name: "Klebsiella pneumoniae",
        summary: "Lac+, mucoid capsule, oxidase−; pneumonia in alcoholics (currant jelly sputum, upper lobe cavitation); UTI; CRE emerging",
        gram: "GN Bacillus (lactose fermenter, heavily encapsulated)",
        virulence: "**Large polysaccharide capsule** (hypermucoviscous antiphagocytic). **ESBL** (extended-spectrum β-lactamase) and **KPC** (Klebsiella pneumoniae carbapenemase) in resistant strains.",
        disease: "**Pneumonia:** alcoholics, diabetics, and COPD patients lobar or multilobar, tendency for **upper lobe cavitation**. Classic sputum: **'currant jelly' consistency**. **UTI:** #2 gram-negative UTI (catheter-associated). **Liver abscess:** hypervirulent strains (East Asian populations).",
        lab_diagnosis: "**Culture:** MacConkey agar (large, **mucoid, pink** dome-shaped lactose-fermenting colonies). Blood agar (large, mucoid, gray-white). **Tests:** String test positive in hypervirulent strains (mucoviscous string >5mm when colony touched with loop). Oxidase negative. Gram stain: plump GN rods.",
        tx: "**Susceptible:** cephalosporins or fluoroquinolones. **ESBL:** carbapenems. **KPC/CRKP:** ceftazidime-avibactam, polymyxin B/colistin.",
        pearl: "Classic host: alcoholic male with upper lobe cavitary pneumonia and red-brown mucoid 'currant jelly' sputum. The 'string sign' identifies hypervirulent strains capable of causing liver abscesses in otherwise healthy individuals."
      },
      {
        name: "Enterobacter & Serratia",
        summary: "Lac+, nosocomial GN rods; UTI, VAP, bacteremia; AmpC β-lactamase → 3rd-gen cephalosporin resistance; carbapenems",
        gram: "GN Bacillus (lactose fermenter, oxidase negative)",
        virulence: "**AmpC β-lactamase** (chromosomally encoded, inducible de-repressed during 3rd-gen cephalosporin treatment → resistance emerges on therapy). **Serratia marcescens:** produces **prodigiosin** (red pigment at room temperature). Biofilm formation.",
        disease: "**Enterobacter:** catheter-associated UTI, HAP/VAP, bacteremia in ICU, wound infections. **Serratia:** nosocomial pneumonia, UTI, right-sided endocarditis in IV drug users. Both dangerous in neonates/immunocompromised.",
        lab_diagnosis: "**Culture:** MacConkey agar (pink lactose-fermenting colonies). Serratia produces **red/pink pigmentation** on blood agar at room temperature (25°C), but not at 37°C. **Tests:** Oxidase negative. Enterobacter: Voges-Proskauer positive. Serratia: DNase and lipase positive. AmpC disk diffusion testing.",
        tx: "**Serious infections:** carbapenems or cefepime (4th-gen cephalosporin). **Avoid 3rd-generation cephalosporins** (ceftriaxone, cefotaxime) due to AmpC de-repression ('inoculum effect').",
        pearl: "Never use 3rd-generation cephalosporins alone for SPACE organisms (Serratia, Pseudomonas, Acinetobacter, Citrobacter, Enterobacter) due to inducible AmpC resistance. Serratia red pigment is seen in lab contamination or room temperature conditions, not typically in patient specimens."
      },
      {
        name: "Helicobacter pylori",
        summary: "Urease+, oxidase+, microaerophilic; #1 cause PUD and MALT lymphoma; CLO test, urea breath test; triple therapy",
        gram: "GN Bacillus (curved, spiral, microaerophilic)",
        virulence: "**Urease** (produces NH3 → neutralizes gastric acid). **CagA** (cytotoxin-associated antigen disrupts tight junctions, linked to cancer). **VacA** (vacuolating cytotoxin forms pores). Flagella (corkscrew motility in mucous layer).",
        disease: "**Peptic ulcer disease:** antral gastritis → **duodenal ulcer** (most common); pangastritis → **gastric ulcer**. **Gastric adenocarcinoma** (intestinal type). **MALT lymphoma** (marginal zone B-cell lymphoma may completely regress with H. pylori eradication).",
        lab_diagnosis: "**Tests:** Urea breath test (detects active infection; preferred for post-treatment confirmation). Stool antigen test. **Biopsy:** CLO test (rapid urease test on biopsy yellow-to-pink color change = positive). Histology: Giemsa or Warthin-Starry stain shows curved/seagull-shaped GN rods. **Culture:** microaerophilic at 37°C (slow-growing, rarely done).",
        tx: "**Triple therapy (14 days):** PPI + clarithromycin + amoxicillin (or metronidazole). **Quadruple therapy:** PPI + bismuth + metronidazole + tetracycline. Confirm eradication ≥4 weeks after therapy.",
        pearl: "Always confirm eradication with a urea breath test or stool antigen; IgG serology remains elevated for months and cannot confirm cure. Eradication alone cures the majority of localized gastric MALT lymphomas. Stop PPIs 2 weeks before testing to avoid false negatives."
      },
      {
        name: "Pseudomonas aeruginosa",
        summary: "Oxidase+, non-lac, blue-green pigment; CF lungs, burns, nosocomial; AmpC + multiple resistance; pip-tazo or cefepime",
        gram: "GN Bacillus (non-lactose fermenter, oxidase positive, aerobic)",
        virulence: "**Exotoxin A** (ADP-ribosylates EF-2 → halts protein synthesis). **Pyocyanin** (blue-green pigment generates ROS). **Alginate** (biofilm in CF lungs). **Phospholipase C.** **Elastase.** Type III secretion system.",
        disease: "**CF patients:** chronic mucoid lung colonization → respiratory failure. **Burns:** wound infection → sepsis. **Malignant (necrotizing) otitis externa:** elderly diabetics (ear pain, granulation tissue at canal floor). **Hot tub folliculitis.** **Nosocomial:** VAP, UTI. **Ecthyma gangrenosum:** hemorrhagic skin lesions in bacteremic neutropenic patients.",
        lab_diagnosis: "**Culture:** Blood/MacConkey agar (flat, spreading, **blue-green** colonies, **colorless** on MacConkey). Mucoid colonies in CF isolates. Cetrimide agar (selective). **Characteristics:** **Oxidase positive**, **fruity grape-like odor**, grows at **42°C**. Pigments: pyocyanin (blue-green) + pyoverdin (fluorescent yellow-green).",
        tx: "**Antipseudomonal β-lactam** (piperacillin-tazobactam, cefepime, meropenem) ± aminoglycoside. **Ciprofloxacin** (oral antipseudomonal). Intrinsically resistant to ampicillin, first-gen cephalosporins, and TMP-SMX.",
        pearl: "Malignant otitis externa (granulation tissue at the bony-cartilaginous junction in a diabetic) equals Pseudomonas until proven otherwise. Ecthyma gangrenosum presents as black necrotic skin lesions in neutropenic patients due to Pseudomonas vascular invasion. Exotoxin A shares the exact mechanism of Diphtheria toxin."
      },
      {
        name: "Yersinia enterocolitica",
        summary: "Non-lac, cold-tolerant; contaminated pork/milk; mesenteric adenitis mimics appendicitis; post-infectious reactive arthritis",
        gram: "GN Bacillus (non-lactose fermenter, motile at 25°C, non-motile at 37°C)",
        virulence: "**Ail and YadA** (invade M cells in Peyer's patches → mesenteric lymph nodes). **Yops:** type III secretion system, inhibit phagocytosis. Grows at **4°C** (cold enrichment). Urease positive.",
        disease: "**Enterocolitis:** fever, abdominal pain, watery/bloody diarrhea (contaminated pork, chitterlings, unpasteurized milk). **Mesenteric adenitis:** RLQ pain + fever mimicking appendicitis. **Reactive arthritis:** HLA-B27-associated. **Bacteremia** in patients with iron overload (hemochromatosis).",
        lab_diagnosis: "**Culture:** CIN agar (selective, 'bullseye' colonies with red center and translucent border). MacConkey (colorless). Cold enrichment (incubate at 4°C for 2-3 weeks to increase yield). **Tests:** Motile at 25°C, non-motile at 37°C. Urease positive.",
        tx: "**Gastroenteritis:** usually supportive. **Severe/bacteremia:** TMP-SMX, ciprofloxacin, or ceftriaxone. Reactive arthritis: NSAIDs.",
        pearl: "RLQ pain and fever mimicking appendicitis in a child with recent pork consumption or animal exposure suggests Yersinia mesenteric adenitis. Iron overload states (hemochromatosis, deferoxamine) drastically increase susceptibility to Yersinia bacteremia because the organism is siderophilic."
      },
      {
        name: "Campylobacter jejuni",
        summary: "Oxidase+, curved GN rod, grows at 42°C; #1 bacterial gastroenteritis in US; poultry; Guillain-Barré (GBS) post-infection",
        gram: "GN Bacillus (curved, comma-shaped or 'seagull' morphology, oxidase positive)",
        virulence: "**Flagella** (corkscrew motility for epithelial invasion). **Cytolethal distending toxin (CDT)**. **LOS (lipooligosaccharide):** molecular mimicry with host ganglioside GM1 → Guillain-Barré syndrome. Invades colonic lamina propria.",
        disease: "**Gastroenteritis** (#1 bacterial cause in US): watery diarrhea → bloody, mucoid, foul-smelling diarrhea + fever + cramping (undercooked poultry, puppies/kittens). **Guillain-Barré syndrome:** 2-4 weeks post-infection (ascending paralysis). **Reactive arthritis:** HLA-B27-associated.",
        lab_diagnosis: "**Culture:** Campy-BAP or Skirrow medium at **42°C** (thermophilic, small, gray, spreading colonies). **Gram stain:** characteristic **comma-shaped or seagull** GN rods. **Tests:** Oxidase positive. Darting corkscrew motility on wet prep. Rapid antigen or PCR for stool.",
        tx: "**Self-limited** mostly. **Antibiotics:** azithromycin (preferred due to rising fluoroquinolone resistance) for severe/prolonged cases.",
        pearl: "Campylobacter is the most common infectious trigger for Guillain-Barré syndrome. Isolation requires incubation at 42°C (Campylobacter likes it hot). Undercooked poultry is the classic exposure."
      },
      {
        name: "Vibrio cholerae",
        summary: "Oxidase+, curved GN rod, comma-shaped; cholera toxin → rice-water diarrhea (↑cAMP); ORS cornerstone; O139/O1 serotypes",
        gram: "GN Bacillus (curved, comma-shaped, oxidase positive)",
        virulence: "**Cholera toxin (CT):** A-B toxin ADP-ribosylates Gsα → permanently activates adenylyl cyclase → ↑↑cAMP → opens CFTR chloride channel → massive Cl- and water secretion. **TCP (toxin-coregulated pili):** colonization factor. Non-invasive.",
        disease: "**Cholera:** profuse **rice-water diarrhea** (10-20 L/day) + vomiting → rapid severe dehydration, hypovolemic shock, metabolic acidosis, hypokalemia. No blood or WBCs in stool. Fecal-oral (contaminated water/shellfish).",
        lab_diagnosis: "**Culture:** TCBS agar (large, **yellow, flat** colonies due to sucrose fermentation). Blood agar (flat, gray, β-hemolytic). **Gram stain:** curved GN rods with single polar flagellum. **Tests:** Oxidase positive. Darkfield microscopy shows 'shooting star' darting motility.",
        tx: "**ORS (oral rehydration solution)** cornerstone (glucose cotransports Na+ via SGLT1 despite CFTR activation). IV fluids (Ringer's lactate) for severe hypovolemia. **Doxycycline** reduces shedding and duration.",
        pearl: "Cholera toxin permanently activates Gsα (increases cAMP), while pertussis toxin permanently inactivates Giα (also increases cAMP). ORS is effective because the SGLT1 glucose-sodium cotransporter remains intact and bypasses the defective chloride channel. V. vulnificus causes severe wound infections and sepsis in patients with liver disease after raw oyster exposure."
      },
      {
        name: "Proteus mirabilis",
        summary: "Urease+, swarming motility, non-lac; alkaline urine → struvite (staghorn) stones; #2 UTI; TMP-SMX or fluoroquinolone",
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
        summary: "GN coccobacillus; needs factors X and V (chocolate agar); Hib → epiglottitis, meningitis; NTHi → otitis media/CAP; ceftriaxone",
        gram: "GN Coccobacillus (pleomorphic, small)",
        virulence: "**Polyribitol phosphate (PRP) capsule** (type b most virulent serotype; prevented by Hib conjugate vaccine). **IgA protease.** Requires **factor X (hemin)** and **factor V (NAD)** from lysed RBCs for growth.",
        disease: "**Hib (type b, unvaccinated):** epiglottitis (drooling, stridor, tripod position, 'cherry-red epiglottis,' thumb sign on lateral neck X-ray), meningitis, bacteremia. **Non-typeable H. influenzae (NTHi):** otitis media (#1 cause in children along with S. pneumoniae), sinusitis, COPD exacerbations.",
        lab_diagnosis: "**Culture:** **Chocolate agar** (grows small, gray, translucent colonies because X and V factors are provided). Does NOT grow on standard blood agar unless adjacent to S. aureus (**Satellite phenomenon** S. aureus releases NAD/V factor via β-hemolysis). **Gram stain:** tiny pleomorphic GN coccobacilli. Quelling reaction for capsule typing.",
        tx: "**Epiglottitis:** secure airway first in OR, then **ceftriaxone** IV. **Otitis/sinusitis:** amoxicillin-clavulanate. **Rifampin prophylaxis** for household contacts of Hib invasive disease. **Vaccine:** Hib conjugate given at 2, 4, 6, 12-15 months.",
        pearl: "Epiglottitis management trap: Do NOT examine the throat of a child with suspected epiglottitis, as it may trigger complete airway obstruction. Send directly to the OR. The satellite phenomenon around S. aureus streaks on blood agar is a classic lab identifier for H. influenzae."
      },
      {
        name: "Bordetella pertussis",
        summary: "GN coccobacillus; pertussis toxin (↑cAMP); whooping cough — catarrhal/paroxysmal/convalescent; Bordet-Gengou agar; azithromycin",
        gram: "GN Coccobacillus (small, obligate aerobe, encapsulated)",
        virulence: "**Pertussis toxin (PT):** ADP-ribosylates Giα → blocks Gi → ↑cAMP → impairs phagocyte killing + causes **lymphocytosis** (blocks lymphocyte migration from lymph nodes). **Filamentous hemagglutinin (FHA):** adherence. **Tracheal cytotoxin:** kills ciliated cells.",
        disease: "**Catarrhal phase (1-2 weeks):** mild URI symptoms, highly infectious. **Paroxysmal phase (2-6 weeks):** severe paroxysmal cough → inspiratory 'whoop' → post-tussive emesis. **Convalescent phase:** gradually resolving. **Infants <6 months:** high risk of apnea (no classic whoop).",
        lab_diagnosis: "**Tests:** CBC shows marked **lymphocytosis** (WBC 20k-50k with >80% lymphocytes). PCR of nasopharyngeal swab is most sensitive. **Culture:** Bordet-Gengou agar or Regan-Lowe charcoal agar (small, shiny, silver-gray 'mercury drop' or 'bisected pearl' colonies).",
        tx: "**Azithromycin** (most effective in catarrhal phase to reduce transmission; does not shorten paroxysmal phase). **Prevention:** DTaP primary series + **Tdap booster** (including pregnant women at 27-36 weeks).",
        pearl: "Absolute lymphocytosis in a patient with a paroxysmal cough is the hallmark of pertussis toxin activity blocking lymphocyte tissue entry. Infants under 6 months often present with life-threatening apnea rather than a 'whoop'. Azithromycin is given to prevent transmission, not to cure the cough once the paroxysmal phase begins."
      },
      {
        name: "Legionella pneumophila",
        summary: "Weakly GN, oxidase+; atypical pneumonia with hyponatremia, diarrhea, confusion; Pontiac fever; silver stain; urine antigen; azithromycin",
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
        summary: "GN intracellular rod; cat scratch disease (regional LAD); bacillary angiomatosis in HIV; Warthin-Starry stain; azithromycin",
        gram: "GN Rod (small, intracellular, Warthin-Starry silver stain for tissue)",
        virulence: "Intracellular pathogen of erythrocytes and endothelial cells. **Angiogenic factors** (VEGF upregulation → bacillary angiomatosis). Transmitted by **cat scratch/bite** or inoculation of cat flea feces.",
        disease: "**Cat scratch disease (immunocompetent):** papule at scratch site → **tender regional lymphadenopathy** (axillary, cervical). **Bacillary angiomatosis (immunocompromised/HIV):** vascular proliferative skin lesions (red-purple papules/nodules). **Peliosis hepatis:** blood-filled hepatic cysts.",
        lab_diagnosis: "**Histology/Biopsy:** **Warthin-Starry silver stain** reveals small, pleomorphic GN rods in clumps within endothelial cells and macrophages (invisible on routine Gram stain). Lymph node shows stellate granulomas. **Tests:** Serology (IFA IgG), PCR on tissue. Culture is rarely done (requires ≥4 weeks on blood agar).",
        tx: "**Cat scratch disease:** azithromycin for moderate/severe LAD (mild is self-limited). **Bacillary angiomatosis/Peliosis hepatis:** doxycycline or erythromycin (prolonged course).",
        pearl: "Bacillary angiomatosis mimics Kaposi's sarcoma in HIV patients but is bacterial and highly treatable with antibiotics. Warthin-Starry silver stain is required to visualize the organism in tissue."
      },
      {
        name: "Brucella species",
        summary: "GN coccobacillus, obligate intracellular; undulant (relapsing) fever; unpasteurized dairy/livestock; doxy + rifampin",
        gram: "GN Coccobacillus (small, intracellular, aerobic)",
        virulence: "Obligate intracellular pathogen survives in macrophages. **Smooth LPS** inhibits complement activation. B. melitensis (goats), B. abortus (cattle), B. suis (pigs). Routes: unpasteurized dairy, aerosolized bacteria (lab hazard), skin contact.",
        disease: "**Brucellosis (undulant fever):** insidious onset **undulating (relapsing) fever**, profound malaise, arthralgia, night sweats, hepatosplenomegaly. **Complications:** sacroiliitis, osteomyelitis, epididymo-orchitis.",
        lab_diagnosis: "**Tests:** Blood cultures (positive in 50-70%; **BSL-3 precautions required**). Bone marrow culture is most sensitive. Serology: standard tube agglutination test (SAT) titer ≥1:160 diagnostic. **Culture:** Blood agar (small, smooth, translucent colonies after 48-72h or longer). Gram stain: small, faint GN coccobacilli. Oxidase/urease positive.",
        tx: "**Doxycycline + rifampin × 6 weeks** or **doxycycline + streptomycin** for severe/complicated cases.",
        pearl: "Undulant (relapsing) fever with exposure to unpasteurized goat cheese or farm animals is the classic Brucella vignette. Always notify the lab when ordering culture, as aerosolization during processing poses a major BSL-3 risk."
      },
      {
        name: "Francisella tularensis",
        summary: "GN coccobacillus; ultra-low infectious dose; tick/rabbit; ulceroglandular most common; Category A agent; doxycycline",
        gram: "GN Coccobacillus (very small, faint, obligate intracellular)",
        virulence: "**Extremely low infectious dose** (10-50 organisms). Obligate intracellular survives in macrophages. Vector: Dermacentor/Amblyomma ticks, deer flies; direct contact with rabbits. BSL-3 pathogen.",
        disease: "**Ulceroglandular (most common):** skin ulcer with raised edges at inoculation site + painful regional lymphadenopathy. **Pneumonic (most severe):** from inhalation, high mortality. **Typhoidal:** septicemic.",
        lab_diagnosis: "**Tests:** Serology (microagglutination titer ≥1:160). PCR on tissue/ulcer swab. **Culture:** Requires **cysteine-glucose-blood agar** or chocolate agar (small, gray, opaque colonies under **BSL-3 conditions**). Generate infectious aerosols during lab processing. Gram stain shows faint GN coccobacilli.",
        tx: "**Streptomycin or gentamicin** (first-line). Doxycycline or ciprofloxacin as alternatives.",
        pearl: "A rabbit handler or individual with a tick bite presenting with a skin ulcer and profound regional lymphadenopathy has Tularemia. Tularemia has the lowest known infectious dose of any bacterium. Never send a culture without notifying the lab of a BSL-3 hazard."
      },
      {
        name: "Pasteurella multocida",
        summary: "GN coccobacillus; rapid cellulitis <24h after cat/dog bite; penicillin/amoxicillin-clavulanate; do NOT use first-gen cephalosporins",
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
        summary: "Acid-fast, strict aerobe; Ghon complex → latent → reactivation (upper lobes); cord factor; RIPE × 2 months then RI × 4",
        gram: "Acid-fast bacillus (waxy mycolic acids resist Gram stain; Ziehl-Neelsen stain required)",
        virulence: "**Cord factor (trehalose dimycolate):** serpentine growth in culture, inhibits phagosome-lysosome fusion, activates macrophages. **Sulfatides:** inhibit phagolysosome fusion. **Mycolic acids:** acid-fastness, resistance to killing. **Lipoarabinomannan (LAM):** inhibits IFN-γ signaling. Obligate aerobe → upper lobe tropism.",
        disease: "**Primary TB:** Ghon focus + hilar LAD = Ghon complex. **Latent TB:** positive TST/IGRA, asymptomatic, not contagious. **Reactivation TB:** upper lobe cavitary lesion, productive cough, night sweats, weight loss, hemoptysis. **Miliary TB:** millet-seed lesions in lungs/liver/spleen/meninges. **Extrapulmonary:** Pott's disease (vertebral), scrofula (cervical LAD), adrenal destruction (Addison's).",
        lab_diagnosis: "**Stains:** Ziehl-Neelsen (bright red AFB against blue counterstain), Auramine-rhodamine (yellow-green fluorescent rods). **Culture:** Löwenstein-Jensen agar (buff-colored, dry, granular, rough 'bread crumb' or 'cauliflower' colonies after 3-6 weeks), BACTEC 460 (liquid radiometric). Serpentine cording in liquid media. **Tests:** TST (Mantoux), IGRA (QuantiFERON-TB Gold).",
        tx: "**RIPE × 2 months** (Rifampin, Isoniazid, Pyrazinamide, Ethambutol) then **RI × 4 months**. **Latent TB:** Isoniazid × 9 months. Always add pyridoxine (B6) with INH.",
        pearl: "INH toxicities: hepatotoxicity, peripheral neuropathy (prevent with B6), drug-induced SLE. Rifampin: red/orange body fluids, potent CYP450 inducer. Pyrazinamide: hyperuricemia. Ethambutol: optic neuritis (check color vision). IGRA is preferred over TST in BCG-vaccinated patients due to lack of cross-reaction."
      },
      {
        name: "Mycobacterium leprae",
        summary: "Acid-fast; cannot culture in vitro; Schwann cells → neuropathy; tuberculoid (Th1) vs. lepromatous (Th2); dapsone + rifampin",
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
        summary: "Spirochete, not Gram-stainable; syphilis: chancre → diffuse rash/condyloma → gummas/aorta/tabes dorsalis; penicillin G",
        gram: "Spirochete (darkfield microscopy or silver stain required)",
        virulence: "**Outer membrane proteins:** antigenic variation. Survives intracellularly. Transmitted via sexual contact, transplacentally, or blood transfusion.",
        disease: "**Primary:** painless indurated chancre + painless regional LAD. **Secondary:** flu-like illness + diffuse maculopapular rash (including palms and soles) + condylomata lata. **Tertiary:** gummas, cardiovascular syphilis (aortitis, aortic regurgitation), neurosyphilis (tabes dorsalis). **Congenital:** saddle-nose, Hutchinson teeth, saber shins, deafness.",
        lab_diagnosis: "**Microscopy:** Darkfield microscopy of chancre shows thin, tightly coiled, corkscrew-shaped spirochetes with slow, rotating motility. Silver stain used for tissue. **Screening (Non-treponemal):** VDRL and RPR detect anti-cardiolipin antibodies; quantitative to monitor treatment. **Confirmatory (Treponemal):** FTA-ABS, TPPA detect anti-treponemal antibodies; remain positive for life. Cannot be cultured.",
        tx: "**All stages:** Benzathine penicillin G. **Neurosyphilis:** aqueous crystalline penicillin G IV.",
        pearl: "A painless chancre followed weeks later by a rash on the palms and soles is classic. Argyll Robertson pupil accommodates but does not react to light. The Jarisch-Herxheimer reaction is a systemic cytokine release from organism death, not a penicillin allergy; continue therapy and give antipyretics. False-positive VDRL causes: SLE, Leprosy, Antiphospholipid syndrome, Pregnancy (SLAP)."
      },
      {
        name: "Borrelia burgdorferi",
        summary: "Spirochete, Ixodes tick; Lyme: erythema migrans → Bell's palsy/heart block → monoarthritis; doxycycline",
        gram: "Spirochete (visualized on Giemsa or Wright stain; Gram stain negative)",
        virulence: "Transmitted by **Ixodes scapularis (deer tick)**. Tick must be attached **≥36-48 hours**. **OspC and VlsE:** surface proteins for immune evasion. Reservoir: white-footed mouse.",
        disease: "**Stage 1 (Early localized):** erythema migrans (expanding bull's-eye rash). **Stage 2 (Early disseminated):** bilateral Bell's palsy, Lyme carditis (AV block). **Stage 3 (Late disseminated):** monoarthritis (large effusion, often knee), encephalopathy.",
        lab_diagnosis: "**Diagnosis:** Clinical for erythema migrans. **Two-tier serology** for disseminated disease: ELISA (screening) followed by Western blot (confirmatory). PCR on synovial fluid for Lyme arthritis. **Microscopy:** Darkfield or Giemsa stain shows loose, irregular coiling. Silver stain for tissue. **Culture:** BSK medium (extremely slow, not used clinically).",
        tx: "**Early localized:** doxycycline × 10-21 days (amoxicillin in children <8 or pregnant). **Lyme carditis/meningitis:** IV ceftriaxone for severe forms.",
        pearl: "Bilateral Bell's palsy equals Lyme disease until proven otherwise. Two-tier testing is mandatory because ELISA has high false-positive rates; do not treat a positive ELISA without a confirmatory Western blot."
      },
      {
        name: "Leptospira interrogans",
        summary: "Spirochete; rat urine exposure; Weil's disease (jaundice, AKI, hemorrhage); uveitis; penicillin or doxycycline",
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
        summary: "Obligate intracellular, no cell wall; urethritis/cervicitis, PID, neonatal conjunctivitis/pneumonia; LGV (L1–L3); doxycycline",
        gram: "Obligate intracellular (no cell wall, not Gram stained)",
        virulence: "**Biphasic life cycle:** Elementary body (EB) is the infectious extracellular form; Reticulate body (RB) is the replicating intracellular form. No peptidoglycan cell wall.",
        disease: "**Serovars A-C:** trachoma (blindness). **Serovars D-K:** urethritis, cervicitis, PID, neonatal conjunctivitis (2-5 days), infant pneumonia (staccato cough). **Serovars L1-L3:** lymphogranuloma venereum (LGV painless ulcer → tender inguinal buboes).",
        lab_diagnosis: "**Tests:** NAAT (nucleic acid amplification test) is the gold standard for urogenital infections. **Microscopy:** Giemsa stain shows intracytoplasmic inclusions ('morulae') in epithelial cells. Cannot be Gram stained. No growth on standard bacteriologic media.",
        tx: "**Uncomplicated:** azithromycin 1g PO × 1 dose or doxycycline 100mg BID × 7 days. **Neonatal:** oral erythromycin. Co-treat for gonorrhea.",
        pearl: "Always co-treat for gonorrhea when treating chlamydia. Neonatal chlamydial conjunctivitis presents at 5-14 days (later than gonococcal). Neonatal pneumonia presents with an afebrile staccato cough and eosinophilia. LGV groove sign occurs when the inguinal ligament separates enlarged inguinal and femoral lymph nodes."
      },
      {
        name: "Chlamydophila pneumoniae",
        summary: "Obligate intracellular; walking pneumonia, gradual onset, persistent sore throat; CXR worse than exam; azithromycin",
        gram: "Obligate intracellular (no cell wall)",
        virulence: "Obligate intracellular with EB/RB lifecycle. Pear-shaped EBs. Human-to-human spread; no animal reservoir.",
        disease: "**Atypical pneumonia:** gradual onset over 1-3 weeks persistent sore throat, dry hacking cough. Clinically milder than radiographic appearance. Associated with asthma exacerbations.",
        lab_diagnosis: "**Tests:** PCR of nasopharyngeal swab is most sensitive. Serology (microimmunofluorescence/MIF) shows 4-fold rise. **Microscopy:** Giemsa stain shows intracellular inclusions. Cannot be Gram stained.",
        tx: "**Azithromycin** or **doxycycline**. β-lactams are ineffective.",
        pearl: "Human-to-human transmission only; no bird reservoir. Pharyngitis often precedes the atypical pneumonia. β-lactams are useless because there is no peptidoglycan cell wall target."
      },
      {
        name: "Chlamydophila psittaci",
        summary: "Obligate intracellular; psittacosis from bird exposure; atypical pneumonia + splenomegaly; doxycycline",
        gram: "Obligate intracellular (no cell wall)",
        virulence: "Transmitted by inhalation of aerosolized bird feces or secretions (parrots, pigeons). Systemic spread to liver, spleen, and CNS.",
        disease: "**Psittacosis:** abrupt onset high fever, severe headache, dry cough, pneumonia with **splenomegaly**. Systemic features: hepatitis, encephalitis.",
        lab_diagnosis: "**Tests:** PCR of respiratory sample is most specific. Serology shows 4-fold rise. Cannot be Gram stained. BSL-3 pathogen requiring lab notification before culture.",
        tx: "**Doxycycline** (first-line).",
        pearl: "Bird exposure (parrots, pigeons, poultry) plus atypical pneumonia and splenomegaly equals psittacosis. Splenomegaly is a key distinguishing feature from other atypical pneumonias."
      },
      {
        name: "Coxiella burnetii",
        summary: "Obligate intracellular; Q fever; resistant spores; farm animal births; pneumonia + hepatitis ± endocarditis; doxycycline",
        gram: "Obligate intracellular",
        virulence: "**Highly resistant spore-like forms** (survive pasteurization). Transmitted via inhalation of aerosolized birth products (placenta, amniotic fluid) from infected farm animals. Not tick-borne.",
        disease: "**Acute Q fever:** atypical pneumonia + granulomatous hepatitis. **Chronic Q fever:** culture-negative endocarditis (months to years later).",
        lab_diagnosis: "**Tests:** Serology (IFA) is primary; Phase II antibodies indicate acute infection, while Phase I IgG (≥1:800) indicates chronic infection/endocarditis. PCR on blood/tissue. **Histology:** Liver biopsy shows 'doughnut' or 'fibrin ring' granulomas. Gimenez/Giemsa stains show intracellular red rods.",
        tx: "**Acute:** doxycycline. **Chronic:** doxycycline + hydroxychloroquine (alkalinizes phagolysosome).",
        pearl: "The only Rickettsia-like organism not transmitted by an arthropod bite; inhaled from farm animal birth products. Doughnut granulomas on liver biopsy are highly characteristic."
      },
      {
        name: "Gardnerella vaginalis",
        summary: "Gram-variable rod; BV — clue cells, positive whiff test (KOH), pH >4.5, thin gray discharge; metronidazole",
        gram: "Gram-variable to weakly GN rod",
        virulence: "Disruption of normal Lactobacillus-dominant vaginal flora. Produces **biogenic amines** → fishy odor. Biofilm on vaginal epithelium.",
        disease: "**Bacterial vaginosis (BV):** thin, homogeneous gray-white discharge with fishy odor. Minimal inflammation (few WBCs). Complications: PID risk, preterm labor.",
        lab_diagnosis: "**Microscopy (Wet Mount):** Clue cells (vaginal epithelial cells with borders obscured by stippled bacteria); absence of Lactobacilli. **Tests:** Whiff test (10% KOH added to discharge produces fishy amine odor). Vaginal pH >4.5. **Gram stain (Nugent score):** Decreased large GP rods (Lactobacilli) and increased Gram-variable pleomorphic coccobacilli.",
        tx: "**Metronidazole** or **clindamycin**. Treat symptomatic women and pregnant women.",
        pearl: "Bacterial vaginosis is a dysbiosis presenting with fishy odor, gray discharge, clue cells, pH >4.5, and no inflammation (no WBCs). Clue cells are pathognomonic."
      },
      {
        name: "Mycoplasma pneumoniae",
        summary: "No cell wall; walking pneumonia; cold agglutinins (IgM); CXR worse than exam; azithromycin or doxycycline",
        gram: "No cell wall (pleomorphic, cannot be Gram stained)",
        virulence: "**No cell wall** → resistant to all β-lactams. **P1 adhesin:** attaches to ciliated respiratory epithelial cells → ciliostasis.",
        disease: "**Atypical (walking) pneumonia:** young adults/military. Gradual onset dry hacking cough, low-grade fever. **Extrapulmonary:** Stevens-Johnson syndrome, autoimmune hemolytic anemia.",
        lab_diagnosis: "**Tests:** PCR of nasopharyngeal swab is most sensitive. Serology (IgM/IgG 4-fold rise). **Bedside Test:** Cold agglutinins (blood agglutinates at 4°C, clears at 37°C). **Culture:** Eaton agar or SP4 medium shows tiny 'fried egg' colonies (requires magnification). Cannot be Gram stained.",
        tx: "**Azithromycin** or **doxycycline**. β-lactams are completely ineffective.",
        pearl: "β-lactams are completely ineffective due to the lack of a cell wall. Cold agglutinins (IgM anti-I) can cause mild hemolytic anemia and Raynaud-like symptoms in the cold. Patients typically 'walk around' appearing much less ill than the diffuse bilateral infiltrates on CXR suggest."
      },
      {
        name: "Rickettsia rickettsii",
        summary: "Obligate intracellular; RMSF; Dermacentor tick; rash starts wrists/ankles → centripetal spread; palm/sole involvement; doxycycline",
        gram: "GN Rod (obligate intracellular)",
        virulence: "Transmitted by **Dermacentor tick**. Infects endothelial cells → vasculitis → rash, DIC. Actin-based motility for cell-to-cell spread.",
        disease: "**RMSF:** sudden high fever, severe headache, myalgia. **Rash:** begins day 2-5 on **wrists and ankles** → spreads **centripetally** to trunk. Involves **palms and soles**. Labs: thrombocytopenia, hyponatremia.",
        lab_diagnosis: "**Tests:** Clinical diagnosis is primary; treat immediately. Serology (IFA) shows 4-fold rise but is only positive after 7-10 days. PCR on blood/biopsy. **Histology:** Immunohistochemistry (IHC) of skin biopsy rash is the most specific rapid test. Gimenez or Giemsa stains show GN intracellular rods in endothelial cells.",
        tx: "**Doxycycline** start immediately on clinical suspicion. Do NOT wait for serology.",
        pearl: "A rash starting on the wrists and ankles that spreads inward (centripetal) and involves the palms and soles is RMSF until proven otherwise. Never delay doxycycline to wait for serology; mortality increases dramatically with each day of delay."
      },
      {
        name: "Rickettsia prowazekii",
        summary: "Obligate intracellular; epidemic typhus; body louse; rash spares palms/soles; Brill-Zinsser (reactivation); doxycycline",
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
          summary: "Latent in sensory ganglia; HSV-1: oral herpes, temporal lobe encephalitis; HSV-2: genital herpes; acyclovir",
          gram: "dsDNA, enveloped (Herpesviridae)",
          virulence: "**Glycoproteins (gB, gC, gD)** mediate cell entry via heparan sulfate. **Viral thymidine kinase (TK):** phosphorylates acyclovir. **LAT (latency-associated transcripts):** maintain latency in neurons.",
          disease: "**HSV-1:** primary gingivostomatitis, herpes labialis, keratoconjunctivitis (dendritic corneal ulcers), **herpes encephalitis** (temporal lobe). **HSV-2:** genital herpes, **neonatal herpes** (disseminated or CNS). **Both:** esophagitis, herpetic whitlow.",
          lab_diagnosis: "**Tests:** PCR is the gold standard for encephalitis. DFA (direct fluorescent antibody) from vesicle swab. **Microscopy/Histology:** Tzanck smear shows multinucleated giant cells . Brain biopsy shows **Cowdry type A inclusions** (eosinophilic intranuclear inclusions with clear halo) .",
          tx: "**Acyclovir**, valacyclovir, or famciclovir. **HSV encephalitis:** IV acyclovir empirically. **Acyclovir-resistant HSV:** foscarnet.",
          pearl: "Temporal lobe encephalitis equals HSV-1 until proven otherwise. The Tzanck smear cannot distinguish HSV from VZV. Acyclovir resistance indicates a TK-deficient mutant, requiring foscarnet which bypasses the thymidine kinase activation step."
        },
        {
          name: "VZV (HHV-3) - Varicella-Zoster Virus",
          summary: "Chickenpox (primary airborne); latent in DRG → shingles; Ramsay Hunt (CN VII); Tzanck smear; acyclovir",
          gram: "dsDNA, enveloped (Herpesviridae)",
          virulence: "Highly contagious via **airborne and droplet contact**. Establishes **latency in dorsal root ganglia** (sensory).",
          disease: "**Varicella (chickenpox):** pruritic rash (papules → vesicles → crusts) with **all stages simultaneously present**. **Herpes zoster (shingles):** reactivation in single dermatome, post-herpetic neuralgia. **Zoster ophthalmicus (V1):** Hutchinson's sign. **Ramsay Hunt syndrome:** reactivation in geniculate ganglion causing CN VII palsy.",
          lab_diagnosis: "**Tests:** DFA or PCR from vesicle scraping (distinguishes from HSV). **Microscopy:** Tzanck smear shows multinucleated giant cells (identical to HSV). Histology shows Cowdry type A inclusions.",
          tx: "**Varicella:** oral acyclovir for adults/immunocompromised; supportive for healthy children. **Shingles:** oral acyclovir/valacyclovir. **Vaccines:** Varivax (live, children), Shingrix (recombinant, adults ≥50).",
          pearl: "Never give aspirin to children with varicella due to the risk of Reye syndrome (hepatic encephalopathy). Ramsay Hunt syndrome presents as a classic triad of facial palsy, ear vesicles, and hearing loss. Chickenpox lesions appear in multiple simultaneous stages, unlike smallpox lesions which develop synchronously."
        },
        {
          name: "EBV (HHV-4) - Epstein-Barr Virus",
          summary: "Mono (fever, pharyngitis, LAD); heterophile ab (Monospot); atypical lymphocytes; ampicillin rash; Burkitt/nasopharyngeal CA",
          gram: "dsDNA, enveloped (Herpesviridae)",
          virulence: "Infects **B cells via CD21**. **EBNA** and **LMP** immortalize B cells and drive lymphomagenesis. Infects oropharyngeal epithelium first, then B cells.",
          disease: "**Infectious mononucleosis:** fever, **exudative pharyngitis**, **posterior cervical lymphadenopathy**, **splenomegaly**, profound fatigue. **EBV-associated malignancies:** Burkitt lymphoma (endemic African, jaw mass), CNS lymphoma (HIV CD4 <50), nasopharyngeal carcinoma, Hodgkin lymphoma (mixed cellularity).",
          lab_diagnosis: "**Tests:** Monospot test detects heterophile IgM antibodies that agglutinate horse/sheep RBCs. EBV-specific serology (VCA IgM, EBNA). **Microscopy:** Peripheral blood smear shows **atypical lymphocytes** (Downey cells large, irregular with abundant pale cytoplasm indenting around RBCs) .",
          tx: "**Supportive**. Avoid contact sports for 3-4 weeks to prevent splenic rupture. **Avoid ampicillin/amoxicillin**.",
          pearl: "A patient prescribed ampicillin for suspected strep throat who develops a diffuse maculopapular rash has EBV mononucleosis. The atypical lymphocytes seen on the peripheral smear are reactive CD8+ T cells, not the infected B cells themselves."
        },
        {
          name: "CMV (HHV-5) - Cytomegalovirus",
          summary: "Owl-eye intranuclear inclusions; congenital CMV; immunocompromised → retinitis, esophagitis, colitis; ganciclovir",
          gram: "dsDNA, enveloped (Herpesviridae largest herpesvirus)",
          virulence: "Latent in **mononuclear cells (monocytes, CD34+ progenitors)**. Downregulates MHC class I.",
          disease: "**Congenital CMV:** periventricular calcifications, sensorineural hearing loss, chorioretinitis, thrombocytopenic petechiae. **Immunocompromised (HIV/transplant):** **CMV retinitis** (CD4 <50, 'pizza pie fundus'), **esophagitis** (linear ulcers), colitis. **Healthy adults:** heterophile-negative mononucleosis.",
          lab_diagnosis: "**Tests:** CMV quantitative PCR (blood/CSF). CMV antigenemia (pp65). **Microscopy/Histology:** Enlarged cells with **'owl-eye' inclusions** (large central eosinophilic intranuclear inclusion surrounded by a clear halo) .",
          tx: "**Ganciclovir** or valganciclovir (requires phosphorylation by CMV UL97 kinase). **Resistance:** foscarnet or cidofovir.",
          pearl: "Congenital CMV causes periventricular calcifications, differentiating it from congenital Toxoplasma which causes diffuse scattered calcifications. CMV esophagitis features linear ulcers, contrasting with the punched-out volcano ulcers of HSV. Ganciclovir resistance occurs via mutation of the UL97 viral kinase."
        },
        {
          name: "HHV-6 - Roseola",
          summary: "Roseola infantum — high fever 3–5 days → sudden defervescence → truncal rash; febrile seizures; #1 cause in infants",
          gram: "dsDNA, enveloped (Herpesviridae)",
          virulence: "Infects **CD4+ T cells and monocytes** via CD46 receptor. Can integrate into host chromosomal telomeres. Reactivates with immunosuppression.",
          disease: "**Roseola infantum:** high fever (39-40°C) for 3-5 days in an infant who appears remarkably well. Sudden fever break is followed by a rose-colored blanching macular rash on the trunk. **Febrile seizures** common during fever phase. **Transplant recipients:** limbic encephalitis, hepatitis.",
          lab_diagnosis: "**Tests:** Clinical diagnosis in infants. HHV-6 PCR for transplant encephalitis. Chromosomally integrated HHV-6 can cause falsely elevated PCR results without active infection.",
          tx: "**Supportive** (antipyretics). **Transplant encephalitis:** ganciclovir or foscarnet.",
          pearl: "The clinical sequence is diagnostic: the child has a high fever for days, the fever breaks abruptly, and only then does the macular rash appear. Febrile seizures happen exclusively during the fever phase, not the rash phase."
        },
        {
          name: "HHV-8 - Kaposi Sarcoma Herpesvirus",
          summary: "Kaposi's sarcoma (violaceous lesions) in AIDS/transplant; primary effusion lymphoma; multicentric Castleman disease",
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
          summary: "Latent in kidneys; JC → PML in AIDS; BK → hemorrhagic cystitis/nephropathy in transplant",
          gram: "dsDNA, non-enveloped (Polyomaviridae)",
          virulence: "Latent in kidney tubular epithelium. JC virus is also latent in oligodendrocytes. Reactivation destroys host cells.",
          disease: "**JC virus → PML (Progressive Multifocal Leukoencephalopathy):** AIDS (CD4 <100) or natalizumab therapy. Rapidly progressive multifocal neurological deficits, no fever. **BK virus:** renal transplant → hemorrhagic cystitis and BK nephropathy.",
          lab_diagnosis: "**JC/PML:** CSF PCR for JC virus. **MRI brain:** multifocal asymmetric white matter lesions **without enhancement** and without mass effect. **Histology (PML):** demyelination, enlarged oligodendrocytes with ground-glass inclusions. **BK virus:** urine PCR, urine cytology shows **decoy cells**.",
          tx: "**JC/PML:** HAART for immune reconstitution. Plasma exchange for natalizumab-associated PML. **BK virus:** reduce immunosuppression.",
          pearl: "PML lesions do not ring-enhance and have no mass effect on MRI, distinguishing them from CNS lymphoma and cerebral toxoplasmosis. BK decoy cells on urine cytology closely mimic urothelial carcinoma cells. Natalizumab blocks lymphocyte entry into the CNS, explicitly enabling JC virus reactivation."
        },
        {
          name: "HPV (Human Papillomavirus)",
          summary: "Low-risk (6, 11: warts); high-risk (16, 18: cervical/oropharyngeal CA); E6 degrades p53, E7 inactivates Rb; koilocytes",
          gram: "dsDNA, non-enveloped (Papillomaviridae)",
          virulence: "**E6 oncoprotein:** targets **p53** for degradation. **E7 oncoprotein:** inactivates **Rb**. **Integration of HPV DNA** into the host genome disrupts the E2 repressor, driving unregulated E6/E7 expression.",
          disease: "**Low-risk (6, 11):** condylomata acuminata (anogenital warts), recurrent respiratory papillomatosis. **High-risk (16, 18):** cervical carcinoma, oropharyngeal carcinoma (tonsils, base of tongue), anal carcinoma. **CIN:** precursor to invasive cervical cancer.",
          lab_diagnosis: "**Cytology (Pap smear):** shows **koilocytes** (enlarged squamous cells with perinuclear clearing/halo and wrinkled 'raisinoid' nuclei) . **Tests:** HPV DNA PCR/hybrid capture. p16 IHC staining acts as a surrogate marker for high-risk HPV integration.",
          tx: "**Warts:** cryotherapy, podophyllin, imiquimod. **High-grade CIN:** LEEP or cone biopsy. **Prevention:** Gardasil 9 vaccine.",
          pearl: "E6 kills p53 and E7 kills Rb. Koilocytes on a Pap smear are pathognomonic for HPV infection. HPV-positive oropharyngeal cancer carries a significantly better prognosis and is more radiosensitive than HPV-negative squamous cell carcinoma."
        },
        {
          name: "Parvovirus B19",
          summary: "Smallest DNA virus; slapped cheek/erythema infectiosum in children; aplastic crisis in sickle cell; hydrops fetalis",
          gram: "ssDNA, non-enveloped (Parvoviridae)",
          virulence: "Infects **erythroid progenitor cells** via the **P antigen (globoside)** receptor. Cytopathic effect causes transient arrest of erythropoiesis.",
          disease: "**Erythema infectiosum (Fifth disease):** 'slapped cheek' facial rash followed by a lacy reticular rash on the trunk. **Adults:** symmetric polyarthropathy mimicking rheumatoid arthritis. **Sickle cell/hemolytic anemia:** **aplastic crisis** (sudden severe drop in reticulocytes). **Pregnancy:** fetal anemia leading to **hydrops fetalis**.",
          lab_diagnosis: "**Tests:** Serology (IgM for acute). PCR for immunocompromised or fetal diagnosis. **Histology:** Bone marrow biopsy in aplastic crisis shows **giant pronormoblasts** (enlarged erythroid precursors with large pale intranuclear inclusions and cytoplasmic pseudopods).",
          tx: "**Immunocompetent:** supportive. **Aplastic crisis:** RBC transfusion. **Immunocompromised:** IVIG. **Hydrops fetalis:** intrauterine fetal blood transfusion.",
          pearl: "An aplastic crisis in a sickle cell patient is Parvovirus B19 until proven otherwise. A child with Fifth disease is no longer infectious once the 'slapped cheek' rash appears, as the rash is immune-mediated."
        },
        {
          name: "Adenovirus",
          summary: "Pharyngoconjunctival fever, epidemic keratoconjunctivitis, pneumonia in military recruits, hemorrhagic cystitis",
          gram: "dsDNA, non-enveloped (Adenoviridae)",
          virulence: "**Fiber protein** binds CAR receptor. **Penton base** mediates endosome escape. Non-enveloped structure makes it highly **resistant to lipid solvents, alcohol, and desiccation**.",
          disease: "**Pharyngoconjunctival fever (PCF):** fever, pharyngitis, and follicular conjunctivitis linked to swimming pools. **Epidemic keratoconjunctivitis (EKC):** severe contagious conjunctivitis with corneal infiltrates. **Pneumonia:** severe atypical pneumonia in military recruits. **Hemorrhagic cystitis:** in immunocompromised transplant patients. **Intussusception:** in children (acts as a lead point).",
          lab_diagnosis: "**Tests:** PCR, DFA, or rapid antigen testing. **Culture:** Cell rounding and grape-like clusters. **Histology:** Lung biopsy shows **smudge cells** (large, round basophilic intranuclear inclusions smearing the entire nucleus).",
          tx: "**Supportive**. **Military recruits:** live oral vaccine (types 4 and 7) in an enteric-coated capsule. Strict contact precautions for EKC.",
          pearl: "Because it lacks a lipid envelope, adenovirus is resistant to alcohol-based hand sanitizers, leading to massive nosocomial outbreaks in eye clinics. Smudge cells in a lung biopsy indicate adenovirus pneumonia."
        },
        {
          name: "Poxvirus (Smallpox & Molluscum Contagiosum)",
          summary: "Largest/most complex virus; replicates in cytoplasm; smallpox (eradicated); molluscum contagiosum (umbilicated papules)",
          gram: "dsDNA, enveloped (Poxviridae)",
          virulence: "**Replicates entirely in host cell cytoplasm** because it carries its own DNA-dependent RNA polymerase and DNA polymerase. **Guarnieri bodies:** cytoplasmic inclusion factories.",
          disease: "**Smallpox (variola):** synchronous pustular rash starting on the face and extremities and spreading to the trunk (centrifugal), involves palms and soles. **Molluscum contagiosum:** pearly, dome-shaped, **umbilicated papules** (central dimple). **Mpox (monkeypox):** zoonotic, rash similar to smallpox, prominent lymphadenopathy.",
          lab_diagnosis: "**Microscopy/EM:** Electron microscopy shows unique **brick-shaped virions** with a dumbbell-shaped core . **Histology (Molluscum):** **Henderson-Paterson bodies** (large eosinophilic cytoplasmic inclusions in keratinocytes). PCR for definitive diagnosis.",
          tx: "**Smallpox/Mpox:** tecovirimat (TPOXX). **Molluscum:** cryotherapy, curettage, or observation in immunocompetent children.",
          pearl: "Poxvirus is the only DNA virus that replicates entirely in the cytoplasm. Smallpox lesions are completely synchronous, meaning all lesions are at the exact same stage of development, unlike the asynchronous crops of varicella."
        },
        {
          name: "Hepatitis B (HBV) & Hepatitis D (HDV)",
          summary: "HBV: reverse transcriptase, chronic hepatitis → cirrhosis → HCC; HDV: defective — requires HBsAg; tenofovir/entecavir",
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
        summary: "Smallest RNA virus; fecal-oral (except rhinovirus); acid-stable; includes polio, coxsackie, HAV, rhinovirus, echovirus",
        gram: "ssRNA (+), non-enveloped (Picornaviridae)",
        virulence: "**Non-enveloped:** acid-stable (survive stomach pH, enabling fecal-oral transmission and GI replication). **IRES (internal ribosome entry site):** cap-independent translation. Not killed by alcohol-based hand sanitizers.",
        disease: "Family includes: **Enteroviruses** (poliovirus, coxsackievirus, echovirus), **Rhinovirus** (acid-labile, respiratory), **Hepatovirus** (HAV). Diseases range from aseptic meningitis, encephalitis, myocarditis, HFMD, polio, to hepatitis A.",
        lab_diagnosis: "**Tests:** Stool culture and/or PCR for enteroviruses (multiplex PCR panels). CSF PCR for enteroviral meningitis. **Microscopy/Culture:** Cell culture shows rapid cell rounding and death. EM reveals small naked icosahedral particles.",
        tx: "Mostly supportive. Pleconaril (experimental). IPV (Salk inactivated polio vaccine).",
        pearl: "Picorna translates to small (pico) RNA. Because they are non-enveloped, they are not killed by alcohol hand sanitizers. Enterovirus is the most common cause of aseptic (viral) meningitis overall."
      },
      {
        name: "Poliovirus",
        summary: "Fecal-oral; infects anterior horn neurons → asymmetric flaccid paralysis; IPV (Salk, injected) vs OPV (Sabin, oral)",
        gram: "ssRNA (+), non-enveloped (Enterovirus)",
        virulence: "Fecal-oral transmission → replicates in oropharynx and GI mucosa → viremia → CNS spread → destroys **anterior horn motor neurons**.",
        disease: "**Abortive polio:** fever, GI symptoms. **Non-paralytic aseptic meningitis:** headache, meningismus. **Paralytic polio:** asymmetric flaccid paralysis (areflexia, hypotonia, muscle atrophy, **NO sensory deficit**). **Post-polio syndrome:** progressive new muscle weakness decades later.",
        lab_diagnosis: "**Tests:** Stool viral culture or PCR. CSF shows lymphocytic pleocytosis, normal glucose, mildly elevated protein (aseptic meningitis pattern). **Histology:** Autopsy shows neuronophagia and neuronal loss in the anterior gray matter.",
        tx: "**Supportive**. Ventilatory support for respiratory failure. **Prevention:** IPV (Salk, inactivated, injected) or OPV (Sabin, live attenuated oral).",
        pearl: "Asymmetric flaccid paralysis with fever and absolutely no sensory deficit indicates poliovirus. The anterior horn involvement means strictly lower motor neuron signs (flaccid, atrophic, areflexic)."
      },
      {
        name: "Coxsackievirus",
        summary: "Group A: hand-foot-mouth disease, herpangina; Group B: myocarditis, pericarditis, pleurodynia (devil's grip)",
        gram: "ssRNA (+), non-enveloped (Enterovirus)",
        virulence: "**Group B:** uses **CAR (coxsackievirus-adenovirus receptor)**. Infects myocardial cells. **Group A:** tropism for skin and oral mucosa.",
        disease: "**Group A:** Hand-foot-mouth disease (vesicles/ulcers in mouth + rash on palms, soles, buttocks). Herpangina (vesicles/ulcers on soft palate and uvula only). **Group B:** Myocarditis/pericarditis (pleuritic chest pain, elevated troponin, dilated cardiomyopathy). Pleurodynia (Bornholm disease, 'devil's grip').",
        lab_diagnosis: "**Tests:** Stool/CSF/Vesicle PCR. Cardiac biomarkers (troponin, BNP) and ECG changes in myocarditis. **Histology:** Endomyocardial biopsy shows lymphocytic infiltration with myocyte necrosis (Dallas criteria) .",
        tx: "Supportive. IVIG for severe neonatal sepsis. Avoid NSAIDs in the acute phase of myocarditis.",
        pearl: "Coxsackie B is the most common cause of viral myocarditis. Differentiate herpangina from HFMD by location: herpangina involves the posterior oral cavity strictly, whereas HFMD involves the hands and feet as well."
      },
      {
        name: "Rhinovirus",
        summary: "#1 common cold; ICAM-1 receptor; >100 serotypes; acid-labile; replicates at 33°C (nasal temp); no vaccine",
        gram: "ssRNA (+), non-enveloped (Enterovirus genus)",
        virulence: "Binds **ICAM-1**. **Acid-labile** (pH <6 destroys it, preventing fecal-oral transmission). Optimal replication at **33°C** (nasal cavity temperature).",
        disease: "**Common cold:** rhinorrhea, nasal congestion, sore throat. Low-grade or no fever. **Complications:** secondary bacterial sinusitis or otitis media. Most common precipitant of asthma exacerbations.",
        lab_diagnosis: "**Tests:** Multiplex PCR respiratory panel. **Culture:** Cytopathic effect on cell lines at 33°C. Clinical diagnosis is usually sufficient.",
        tx: "Supportive. Antibiotics are NOT indicated. Zinc lozenges may slightly reduce duration if started early.",
        pearl: "Unlike other picornaviruses, rhinovirus is acid-labile, meaning it causes no GI disease and cannot be transmitted via the fecal-oral route. Optimal replication at 33 degrees Celsius restricts it to the upper respiratory tract rather than the lungs."
      },
      {
        name: "Hepatitis A Virus (HAV)",
        summary: "Fecal-oral; acute self-limited hepatitis; never chronic; shellfish/travel endemic; vaccine available; no treatment",
        gram: "ssRNA (+), non-enveloped (Hepatovirus)",
        virulence: "Non-enveloped, making it highly **acid-stable and environmentally stable**. Liver injury is primarily immune-mediated (CTL response). Shed in feces before symptoms appear.",
        disease: "**Acute hepatitis:** nausea, vomiting, RUQ pain, jaundice, dark urine, clay-colored stools. Markedly elevated transaminases (ALT > AST). Self-limited in 4-8 weeks. **Never causes chronic hepatitis or HCC.**",
        lab_diagnosis: "**Tests:** Anti-HAV IgM indicates acute infection. Anti-HAV IgG indicates past infection or vaccination. **Histology:** Lobular hepatitis with hepatocyte swelling, Councilman bodies, and portal infiltrate (non-specific for HAV).",
        tx: "**Supportive**. **Prevention:** HAV vaccine (2-dose inactivated). Post-exposure prophylaxis with vaccine or IGIM.",
        pearl: "HAV is strictly an acute, self-limited infection and never causes chronic disease or hepatocellular carcinoma. Patients are most infectious in the pre-icteric phase before jaundice even appears. Shellfish concentrate the virus 100-fold."
      },
      {
        name: "Calicivirus (Norovirus)",
        summary: "#1 epidemic gastroenteritis (cruise ships, nursing homes); ultra-low infectious dose; vomiting + diarrhea; self-limited",
        gram: "ssRNA (+), non-enveloped (Caliciviridae)",
        virulence: "Extremely **low infectious dose** (~18 viral particles). **Alcohol-resistant**. Environmentally stable. Uses HBGA (histo-blood group antigens) as a receptor.",
        disease: "**Acute epidemic gastroenteritis:** abrupt onset projectile vomiting, watery non-bloody diarrhea, cramping. Duration is characteristically brief (24-48 hours). Epidemic clusters on cruise ships, nursing homes, schools.",
        lab_diagnosis: "**Tests:** Stool PCR is the most sensitive test for outbreak investigations. Stool antigen EIA. **Microscopy:** EM reveals round virions with characteristic cup-shaped surface depressions .",
        tx: "**Supportive** (oral rehydration, anti-emetics). **Outbreak control:** 1:10 bleach solution disinfection is strictly required because alcohol-based products are ineffective.",
        pearl: "Norovirus is the most common cause of foodborne illness outbreaks in the United States. Its resistance to alcohol means bleach is strictly required for environmental decontamination. The brief 24 to 48 hour duration distinguishes it from longer-lasting viral gastroenteritides."
      },
      {
        name: "Flavivirus (Dengue, West Nile, Yellow Fever, Zika)",
        summary: "Mosquito-borne; Dengue (breakbone fever, hemorrhagic); West Nile (encephalitis); Yellow fever (hepatitis); Zika (microcephaly)",
        gram: "ssRNA (+), enveloped (Flaviviridae)",
        virulence: "**Aedes mosquito** (Dengue, Yellow Fever, Zika). **Culex mosquito** (West Nile). **Antibody-dependent enhancement (ADE):** prior dengue infection enhances macrophage uptake during secondary infection, causing hemorrhagic fever.",
        disease: "**Dengue ('breakbone fever'):** high fever, severe myalgia/arthralgia, retro-orbital pain, leukopenia, thrombocytopenia. **West Nile:** encephalitis/meningitis with flaccid paralysis in the elderly. **Yellow fever:** fever, jaundice, GI hemorrhage ('black vomit'). **Zika:** mild febrile illness, triggers Guillain-Barré, causes congenital microcephaly.",
        lab_diagnosis: "**Tests:** Dengue NS1 antigen, IgM/IgG serology. West Nile CSF IgM. Zika RT-PCR (serum/urine). **Histology:** Yellow fever liver biopsy shows **Councilman bodies** (apoptotic hepatocytes) in the mid-zone.",
        tx: "Supportive. **Yellow fever:** live attenuated vaccine (17D strain) required for travel. **Zika:** avoid travel to endemic areas during pregnancy.",
        pearl: "Dengue uniquely presents with thrombocytopenia, leukopenia, and intense 'breakbone' pain. Antibody-dependent enhancement explains why a secondary dengue infection with a different serotype is far more dangerous than the primary infection. Zika exposure during pregnancy mandates screening for fetal microcephaly."
      },
      {
        name: "Hepatitis C Virus (HCV)",
        summary: "Blood-borne; 80% chronic; #1 cause cirrhosis/liver transplant in US; no vaccine; DAAs (ledipasvir/sofosbuvir)",
        gram: "ssRNA (+), enveloped (Flaviviridae)",
        virulence: "**Hypervariable region on E2 glycoprotein** drives rapid antigenic mutation, evading the immune response. **NS3/4A protease, NS5A replication complex, NS5B RNA polymerase** serve as targets for DAAs.",
        disease: "**Acute HCV:** usually asymptomatic. **Chronic HCV (80%):** asymptomatic for decades → progressive fibrosis → cirrhosis → HCC. **Extra-hepatic manifestations:** mixed cryoglobulinemia type II (palpable purpura, arthritis, glomerulonephritis), porphyria cutanea tarda, lichen planus.",
        lab_diagnosis: "**Tests:** Anti-HCV antibody (screening). HCV RNA PCR (confirms active infection, monitors viral load). HCV genotype testing. **Histology:** Liver biopsy shows lymphocytic portal infiltrate, interface hepatitis, and steatosis.",
        tx: "**Direct-acting antivirals (DAAs):** sofosbuvir (NS5B inhibitor) + ledipasvir (NS5A inhibitor). Achieves >95% sustained virologic response (SVR).",
        pearl: "Sustained virologic response (SVR) equals a functional cure. Cryoglobulinemia presenting as purpura, arthritis, and glomerulonephritis is a classic extra-hepatic manifestation. Unlike HBV, Hepatitis C almost always requires the development of cirrhosis before progressing to hepatocellular carcinoma."
      },
      {
        name: "Togavirus (Rubella)",
        summary: "Rubella: mild 3-day rash, posterior cervical LAD; teratogenic in 1st trimester (CRS: cataracts, deafness, cardiac); MMR",
        gram: "ssRNA (+), enveloped (Togaviridae)",
        virulence: "Respiratory droplet transmission → viremia → rash (immune-mediated). Crosses the placenta during maternal viremia, becoming highly teratogenic during early fetal organogenesis.",
        disease: "**Postnatal rubella:** mild low-grade fever, **posterior auricular and occipital lymphadenopathy**, maculopapular rash (face to trunk, resolves in 3 days). **Congenital rubella syndrome (CRS):** classic triad of cataracts, sensorineural deafness, and congenital heart disease (PDA, pulmonary artery stenosis). Also causes 'blueberry muffin' rash.",
        lab_diagnosis: "**Tests:** Rubella IgM (acute) and IgG (immunity). RT-PCR (blood, throat, urine). Prenatal diagnosis via fetal blood sampling or amniocentesis PCR. **Histology:** Non-specific reactive lymphadenopathy.",
        tx: "Supportive. **Prevention:** MMR vaccine (live attenuated). **Contraindicated in pregnancy.**",
        pearl: "Prominent posterior auricular and occipital lymphadenopathy strongly differentiates rubella from measles. The CRS triad is cataracts, deafness, and a patent ductus arteriosus. The MMR vaccine is strictly contraindicated during pregnancy."
      },
      {
        name: "Coronavirus (COVID-19 / SARS-CoV-2)",
        summary: "Spike binds ACE2; COVID-19: anosmia, respiratory failure, cytokine storm; largest RNA genome; nirmatrelvir/ritonavir",
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
        name: "Influenza (Orthomyxovirus)",
        summary: "8 segments; antigenic drift → annual epidemics; antigenic shift → pandemics; oseltamivir; annual killed vaccine",
        gram: "ssRNA (-), segmented (8 segments), enveloped (Orthomyxoviridae)",
        virulence: "**Hemagglutinin (HA):** binds sialic acid receptors on respiratory epithelium → cell entry. **Neuraminidase (NA):** cleaves sialic acid → releases new virions. **Antigenic drift:** point mutations in HA/NA → annual epidemics (vaccine must be updated yearly). **Antigenic shift:** reassortment of gene segments between human and animal strains (e.g., avian, swine) → novel HA/NA subtypes → pandemic potential (no pre-existing immunity). **M2 ion channel:** required for viral uncoating.",
        disease: "**Influenza A & B:** abrupt onset fever, **myalgias** (hallmark — severe, diffuse), headache, dry cough, malaise. Rhinorrhea is mild. **Complications:** primary viral pneumonia, secondary bacterial pneumonia (S. aureus, S. pneumoniae, H. influenzae), otitis media. **Reye syndrome:** aspirin use in children with influenza or VZV → acute encephalopathy + hepatic failure. **High-risk groups:** elderly, immunocompromised, pregnant, cardiac/pulmonary disease. **Influenza C:** mild, no epidemics.",
        lab_diagnosis: "**Tests:** Rapid influenza diagnostic tests (RIDTs) — antigen detection (moderate sensitivity, high specificity). PCR (most sensitive and specific — gold standard). **Culture:** MDCK cells (reference standard, slow). **Serology:** retrospective only. **Microscopy:** no specific finding; clinical diagnosis in epidemic season.",
        tx: "**Neuraminidase inhibitors:** **oseltamivir (Tamiflu)** oral or **zanamivir** inhaled — start within 48 hours of symptom onset; reduce duration by ~1 day; indicated for severe/hospitalized and high-risk patients. **Baloxavir:** cap-dependent endonuclease inhibitor (single dose, newer). **M2 inhibitors (amantadine/rimantadine):** resistance is now universal among influenza A; not recommended. **Prevention:** annual inactivated influenza vaccine (IIV) or live attenuated (LAIV — intranasal, healthy non-pregnant 2–49 yr).",
        pearl: "**Antigenic shift vs. drift:** drift = gradual point mutations (annual epidemics, update vaccine); shift = abrupt gene segment reassortment between species (pandemic, no immunity). Oseltamivir must be started within 48 hours to be effective — do not wait for lab confirmation in high-risk patients during flu season. **Reye syndrome** is the reason aspirin is contraindicated in children with any viral illness."
      },
      {
        name: "Rhabdovirus (Rabies)",
        summary: "Bullet-shaped; bite → retrograde axonal transport → encephalitis, hydrophobia, aerophobia; Negri bodies; post-exposure PEP",
        gram: "ssRNA (-), enveloped (bullet-shaped virion - Rhabdoviridae)",
        virulence: "**G protein** binds the acetylcholine receptor at the neuromuscular junction → entry into peripheral nerves → **retrograde axonal transport** to the CNS. Incubation is inversely proportional to the distance from the brain.",
        disease: "**Prodrome:** fever, headache, paresthesia at the wound site (pathognomonic). **Furious rabies (80%):** agitation, **hydrophobia** (painful pharyngeal spasms triggered by swallowing), **aerophobia**, autonomic instability. **Paralytic rabies (20%):** ascending flaccid paralysis. Coma and death follow rapidly.",
        lab_diagnosis: "**Tests:** DFA on skin biopsy (nape of neck is most sensitive ante-mortem). Saliva or CSF PCR. **Histology:** Autopsy shows **Negri bodies** (eosinophilic cytoplasmic inclusions in hippocampal neurons and cerebellar Purkinje cells) . **EM:** bullet-shaped virion.",
        tx: "**Post-exposure prophylaxis (PEP):** immediate wound washing, rabies immune globulin (RIG) infiltrated into the wound, and inactivated rabies vaccine series. Near-universally fatal once symptomatic.",
        pearl: "Hydrophobia and aerophobia are pathognomonic clinical signs. Negri bodies in the hippocampus confirm the diagnosis post-mortem. A facial bite carries a much shorter incubation period than a bite on the extremity. Bat exposure in a sleeping room requires immediate PEP, even if a bite mark is not visible."
      },
      {
        name: "Filovirus (Ebola & Marburg)",
        summary: "Long filamentous; viral hemorrhagic fever; high CFR; fruit bat reservoir; person-to-person via body fluids; supportive care",
        gram: "ssRNA (-), enveloped (Filoviridae longest human pathogenic virion)",
        virulence: "**NPC1 receptor** mediates endosomal entry. **GP (glycoprotein)** mediates cell attachment. Causes a massive cytokine storm and direct endothelial damage, leading to extreme vascular permeability and DIC.",
        disease: "**Viral hemorrhagic fever:** sudden fever, severe headache, myalgia → nausea/vomiting, maculopapular rash → hemorrhagic phase (bleeding from mucous membranes, GI tract, injection sites). High case fatality rate. Transmitted strictly via direct contact with infected blood or body fluids.",
        lab_diagnosis: "**Tests:** RT-PCR on blood is the gold standard. Antigen detection RDTs for field use. **Microscopy:** EM reveals dramatically long, filamentous particles forming a 'shepherd's crook' or U-shape. Handled exclusively under strict BSL-4 precautions.",
        tx: "**Ebola Zaire:** Monoclonal antibodies (REGEN-EB3 or mAb114) significantly reduce mortality. Aggressive supportive care. **Prevention:** rVSV-ZEBOV (Ervebo) vaccine.",
        pearl: "Ebola is not airborne; it requires direct contact with infectious body fluids, necessitating strict contact and droplet precautions. The virus can persist in immunologically privileged sites, such as semen, for months after apparent clinical recovery."
      },
      {
        name: "Bunyavirus (La Crosse Encephalitis & Hantavirus)",
        summary: "La Crosse: Aedes → encephalitis in children; Hantavirus: deer mouse droppings → HPS (ARDS, no person-to-person)",
        gram: "ssRNA (-), enveloped, segmented (tripartite genome - Bunyaviridae/Hantaviridae)",
        virulence: "Segmented genome allows reassortment. **La Crosse virus:** Aedes triseriatus (treehole mosquito) vector. **Hantavirus:** inhaled aerosolized deer mouse urine, feces, and saliva. Neither disease spreads person-to-person.",
        disease: "**La Crosse encephalitis:** most common arboviral encephalitis in children in the US Midwest. **Hantavirus Pulmonary Syndrome (HCPS):** abrupt ARDS and cardiogenic shock after a flu-like prodrome. Exposure often involves cleaning sheds or cabins in the American Southwest.",
        lab_diagnosis: "**Tests:** Serology and PCR. **Microscopy/Histology:** HCPS peripheral blood smear shows a classic triad of thrombocytopenia, hemoconcentration, and **immunoblasts** (expanded CD8+ T cells) . Lung biopsy shows interstitial pneumonitis without specific viral inclusions.",
        tx: "**Supportive**. HCPS requires ICU care, mechanical ventilation, and potentially ECMO for cardiogenic shock. Ribavirin is ineffective for HCPS.",
        pearl: "A patient developing severe respiratory failure and thrombocytopenia after cleaning an abandoned cabin in the Southwest has Hantavirus. Thrombocytopenia is an early warning sign that precedes respiratory failure. La Crosse classically presents as encephalitis in a child living in the Midwest."
      },
      {
        name: "Arenavirus (LCMV & Lassa Fever)",
        summary: "LCMV: house mouse → aseptic meningitis, teratogenic; Lassa fever: Mastomys rat → hemorrhagic fever; ribavirin",
        gram: "ssRNA (-), enveloped, bisegmented (Arenaviridae)",
        virulence: "Bisegmented genome with ambisense coding. Binds the alpha-dystroglycan receptor. Transmitted via rodent urine, feces, and saliva.",
        disease: "**LCMV:** aseptic meningitis in young adults. Highly teratogenic in pregnancy (hydrocephalus, chorioretinitis). **Lassa fever:** West African hemorrhagic fever featuring facial edema, hemorrhage, and **sensorineural hearing loss** in a high percentage of survivors.",
        lab_diagnosis: "**Tests:** RT-PCR, Serology. **Microscopy:** EM reveals spherical particles with electron-dense ribosome-like granules, giving a characteristic 'sandy' appearance inside the virion.",
        tx: "**LCMV:** supportive. **Lassa fever:** IV ribavirin significantly reduces mortality if given early.",
        pearl: "Congenital LCMV perfectly mimics congenital Toxoplasma (hydrocephalus, chorioretinitis); always ask about pet rodent or hamster exposure. Lassa fever is unique among hemorrhagic fevers for causing permanent sensorineural hearing loss as a post-infectious complication. The 'sandy' appearance on EM is due to incorporated host ribosomes."
      },
      {
        name: "Reovirus (Rotavirus)",
        summary: "#1 severe viral gastroenteritis in infants worldwide; NSP4 enterotoxin; watery diarrhea; oral rotavirus vaccine",
        gram: "dsRNA, non-enveloped (Reoviridae - Rotavirus genus)",
        virulence: "**Double-layered icosahedral capsid** provides environmental stability. **NSP4** acts as a viral enterotoxin, causing cAMP-independent chloride secretion.",
        disease: "**Acute gastroenteritis:** fever and vomiting followed by profuse watery, non-bloody diarrhea. Leading cause of diarrhea-related death in children under 5 globally. Peaks in winter months.",
        lab_diagnosis: "**Tests:** Stool EIA detects rotavirus antigen. Stool PCR. **Microscopy:** EM shows a pathognomonic **wheel-shaped** double-layered icosahedral particle .",
        tx: "**Oral rehydration solution (ORS)** is the cornerstone. **Prevention:** Rotavirus vaccine (oral, live attenuated) given in early infancy.",
        pearl: "Rotavirus is the number one cause of viral gastroenteritis requiring hospitalization in young children globally. The NSP4 protein functions as a direct viral enterotoxin. The wheel-like appearance on electron microscopy defines the virus's name."
      },
      {
        name: "Measles (Rubeola)",
        summary: "4 Cs prodrome (cough, coryza, conjunctivitis, Koplik spots) → cephalocaudal rash; SSPE late complication; MMR vaccine",
        gram: "ssRNA (-), non-segmented, enveloped (Paramyxoviridae)",
        virulence: "**Fusion protein** forms syncytia. **H protein** binds CD150 (SLAM receptor) on lymphocytes, causing profound immune suppression ('immune amnesia'). Highly contagious via respiratory droplets.",
        disease: "**Prodrome:** Cough, Coryza, Conjunctivitis, and fever. **Koplik spots** appear on the buccal mucosa. **Rash:** Maculopapular rash starts at the hairline and spreads head-to-toe, sparing the palms and soles. **Complications:** pneumonia, encephalitis, **SSPE** (subacute sclerosing panencephalitis).",
        lab_diagnosis: "**Tests:** Serology (IgM) and RT-PCR. **Histology:** Lung biopsy or lymphoid tissue shows **Warthin-Finkeldey giant cells** (multinucleated giant cells with intranuclear and intracytoplasmic inclusions) .",
        tx: "**Supportive**. **Vitamin A** significantly reduces morbidity and mortality in deficient children. **Prevention:** MMR vaccine.",
        pearl: "Koplik spots are pathognomonic and always appear 1 to 2 days before the skin rash begins. SSPE is a fatal neurodegenerative complication that strikes 7 to 10 years after the initial infection. Measles induces 'immune amnesia', stripping away previously acquired immunity to other pathogens."
      },
      {
        name: "Mumps",
        summary: "Parotitis, orchitis (post-pubertal → infertility risk), aseptic meningitis, pancreatitis; MMR vaccine",
        gram: "ssRNA (-), non-segmented, enveloped (Paramyxoviridae)",
        virulence: "**HN protein (hemagglutinin-neuraminidase)** and **Fusion protein**. Strong tropism for salivary glands, testes, meninges, and the cochlea.",
        disease: "**Parotitis:** painful bilateral or unilateral swelling. **Orchitis:** occurs in post-pubertal males, carrying a significant risk of infertility if bilateral. **Aseptic meningitis:** the most common complication overall. **Sensorineural deafness:** usually unilateral and abrupt.",
        lab_diagnosis: "**Tests:** Serology (IgM) and RT-PCR. Elevated serum amylase. CSF shows an aseptic meningitis pattern. **Histology:** Interstitial edema and lymphocytic infiltrate in affected glands.",
        tx: "**Supportive**. Scrotal support for orchitis. **Prevention:** MMR vaccine.",
        pearl: "Orchitis in a post-pubertal male presenting with parotid swelling is diagnostic for mumps. Mumps is the leading cause of acquired sensorineural hearing loss in unvaccinated children. Elevated amylase can stem from either the parotid gland or the pancreas; checking lipase helps differentiate."
      },
      {
        name: "Hepatitis E Virus (HEV)",
        summary: "Fecal-oral; self-limited in immunocompetent; 15–25% mortality in pregnancy; no chronic disease (except transplant)",
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
          summary: "gp120/gp41 binds CD4+CCR5/CXCR4; reverse transcriptase integrates provirus; AIDS: CD4 <200; HAART; opportunistic infections",
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
          summary: "Dimorphic; Ohio/Mississippi valleys, caves/bird droppings; intracellular in macrophages; flu-like → disseminated in immunocompromised; itraconazole",
          gram: "Dimorphic fungus (mold at 20°C → yeast at 37°C)",
          virulence: "Yeast form survives intracellularly in macrophages. Soil contamination from bird and bat droppings.",
          disease: "**Pulmonary histoplasmosis:** usually asymptomatic. Resembles TB in immunocompetent. **Disseminated (HIV with CD4 <150):** fever, weight loss, hepatosplenomegaly, oral ulcers, adrenal insufficiency. **Mediastinal/pericardial complications** in chronic forms.",
          lab_diagnosis: "**Tests:** Urine and serum Histoplasma antigen (highly sensitive for disseminated disease). **Microscopy/Histology:** GMS or PAS stain shows small, oval, narrow-based budding yeasts packed intracellularly within macrophages . **Culture:** Grows as mold at 20°C with pathognomonic tuberculate (thick-walled, spiny) macroconidia.",
          tx: "Mild/moderate: **itraconazole**. Severe/disseminated: **amphotericin B** then step-down to itraconazole.",
          pearl: "Adrenal involvement (bilateral adrenal enlargement causing Addison's disease) in a patient from the Ohio or Mississippi River Valley strongly suggests disseminated Histoplasma. The intracellular location within macrophages on silver stain distinguishes it from other dimorphic fungi."
        },
        {
          name: "Coccidioides immitis",
          summary: "Dimorphic; SW US/San Joaquin Valley; spherules with endospores in tissue; eosinophilia; valley fever; fluconazole/itraconazole",
          gram: "Dimorphic fungus (arthroconidia in soil → spherules in tissue)",
          virulence: "Arthroconidia are highly infectious upon inhalation. Spherules in tissue contain multiple endospores (200-300) which rupture and spread.",
          disease: "**Primary (Valley fever):** flu-like illness. Eosinophilia. Erythema nodosum (tender red nodules on shins). **Disseminated (immunocompromised, Black/Filipino patients at highest risk):** meningitis (most serious), bone/skin/lymph node involvement.",
          lab_diagnosis: "**Tests:** Serology (IgM and IgG CF titers). **Microscopy/Histology:** KOH or silver stain of tissue shows large spherules (much larger than RBCs) packed with hundreds of endospores . **Culture:** Highly infectious lab hazard; grows as mold at 20°C with barrel-shaped arthroconidia.",
          tx: "Mild/pulmonary: **fluconazole** or itraconazole. Severe/disseminated: **amphotericin B**. Meningitis: fluconazole (lifelong suppression).",
          pearl: "Spherules with endospores in tissue are pathognomonic for Coccidioides; no other organism forms these structures. CSF eosinophilia is a highly specific clue for coccidioidal meningitis. Erythema nodosum signals a robust immune response and generally predicts a good prognosis."
        },
        {
          name: "Blastomyces dermatitidis",
          summary: "Dimorphic; Ohio/Mississippi + Great Lakes; broad-based budding yeast; verrucous skin lesions, pulmonary, osteomyelitis; itraconazole",
          gram: "Dimorphic fungus (mold in environment, yeast in tissue)",
          virulence: "Soil exposure near decaying wood and water. Inhalation of conidia.",
          disease: "**Pulmonary blastomycosis:** flu-like, often mistaken for bacterial pneumonia or cancer. **Skin (most distinctive):** verrucous (warty), ulcerating, crusted skin lesions on face and extremities. **Bone:** osteolytic lesions. **Genitourinary:** prostatitis, epididymo-orchitis.",
          lab_diagnosis: "**Tests:** Urine antigen available but heavily cross-reacts with Histoplasma. **Microscopy/Histology:** KOH or silver stain shows large, broad-based budding yeast with a double refractive cell wall (same size as RBCs) . **Culture:** Branching hyphae at 20°C.",
          tx: "Mild-moderate: **itraconazole**. Severe/CNS: **amphotericin B** then itraconazole.",
          pearl: "Broad-based budding (the neck between the mother and daughter cell is as wide as the bud) is the definitive visual identifier. Verrucous, non-tender, crusted skin lesions can easily mimic squamous cell carcinoma."
        },
        {
          name: "Paracoccidioides brasiliensis",
          summary: "Dimorphic; South America; 'captain's wheel' multi-budding yeast; chronic pulmonary + mucocutaneous; itraconazole",
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
          summary: "Lipophilic yeast; tinea versicolor (hypo/hyperpigmented macules); seborrheic dermatitis; spaghetti-and-meatballs on KOH; topical selenium sulfide",
          gram: "Yeast (lipophilic, part of normal skin flora)",
          virulence: "**Obligate lipophile** (requires exogenous lipids for growth). Produces azelaic acid which inhibits melanin synthesis, leading to hypopigmented macules.",
          disease: "**Tinea versicolor:** hypo- or hyperpigmented macules on trunk/shoulders. Non-itchy or mildly pruritic. **Seborrheic dermatitis/dandruff:** scalp/face flaking. **Neonatal sepsis:** affects infants receiving IV lipid emulsions.",
          lab_diagnosis: "**Tests:** Wood's lamp reveals yellow-green fluorescence. **Microscopy:** KOH prep of skin scrapings shows short, cigar-shaped hyphae intermixed with clusters of spherical budding yeast ('spaghetti and meatballs' appearance) . **Culture:** Requires lipid supplementation (olive oil overlay) to grow.",
          tx: "**Topical selenium sulfide** or **ketoconazole shampoo**. **Topical azoles**.",
          pearl: "Premature infants in the NICU receiving IV lipid infusions are uniquely at risk for Malassezia fungemia because the organism feeds directly on the lipid lines. Pigmentation changes persist for months after successful eradication, so reassure patients that this is normal."
        },
        {
          name: "Dermatophytes (Tinea)",
          summary: "Keratinophilic molds; tinea capitis/corporis/pedis/cruris/unguium; KOH prep shows hyphae; topical azoles; griseofulvin for nails/scalp",
          gram: "Mold (hyphae only no yeast form)",
          virulence: "Three genera: Trichophyton, Microsporum, Epidermophyton. Keratinophilic: digest keratin in skin/hair/nails. Spread by direct contact.",
          disease: "**Tinea capitis:** scalp ringworm. **Tinea corporis:** 'ringworm' annular scaly plaque. **Tinea pedis:** athlete's foot. **Tinea cruris:** jock itch. **Tinea unguium:** onychomycosis. **Majocchi granuloma:** deep follicular involvement.",
          lab_diagnosis: "**Tests:** Wood's lamp (Microsporum fluoresces green; Trichophyton does not). **Microscopy:** KOH prep of scrapings shows branching, septate hyphae visible among squamous epithelial cells without any yeast forms. **Culture:** Sabouraud agar grows mold.",
          tx: "**Topical azoles** for most tinea. **Oral terbinafine** for onychomycosis. **Oral griseofulvin** for tinea capitis.",
          pearl: "Tinea capitis requires oral antifungal therapy like griseofulvin because topical agents cannot penetrate the hair shaft. Dermatophytes never invade the dermis in immunocompetent hosts, distinguishing them from deep fungal infections."
        },
        {
          name: "Sporothrix schenckii",
          summary: "Dimorphic; rose gardener's fungus — thorn prick → sporotrichoid (ascending lymphatic) nodules; itraconazole",
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
          summary: "Dimorphic yeast; germ tubes at 37°C; thrush, esophagitis, vulvovaginitis, candidemia; fluconazole; echinocandins for invasive",
          gram: "Dimorphic yeast (budding yeast + pseudohyphae + hyphae)",
          virulence: "**Germ tube formation**. **Biofilm** on prosthetics and catheters. Transition between yeast and hyphae facilitates tissue invasion.",
          disease: "**Oral thrush:** white plaques that scrape off. **Esophageal candidiasis:** dysphagia + odynophagia (AIDS-defining). **Vulvovaginitis:** cottage-cheese discharge. **Diaper rash:** beefy red with satellite lesions. **Candidemia:** IV catheters, TPN, neutropenia leading to dissemination.",
          lab_diagnosis: "**Tests:** Germ tube test is positive (forms true hyphae in serum at 37°C within 2 to 3 hours). Blood cultures for candidemia. **Microscopy:** KOH or Gram stain shows budding yeast with pseudohyphae\n.",
          tx: "Mucocutaneous: **fluconazole** or nystatin (topical). Esophageal: fluconazole. Candidemia: **echinocandins** (caspofungin, micafungin) for severe cases. Remove catheters.",
          pearl: "A positive germ tube test differentiates C. albicans from other Candida species. Candida glabrata and Candida krusei are intrinsically resistant to fluconazole, requiring echinocandins for invasive disease."
        },
        {
          name: "Aspergillus fumigatus",
          summary: "Septate hyphae at 45° (acute angle); ABPA, aspergilloma (fungus ball), invasive aspergillosis in neutropenic; voriconazole",
          gram: "Mold (septate hyphae with dichotomous branching at 45°)",
          virulence: "Small conidia easily inhaled. Thermotolerance (grows at 37°C-50°C). Produces gliotoxins and elastases.",
          disease: "**ABPA:** asthma/CF patient, eosinophilia, elevated IgE, mucus plugs. **Aspergilloma ('fungus ball'):** colonization of pre-existing lung cavity, presents with hemoptysis. **Invasive pulmonary aspergillosis:** neutropenic patients (transplant), features angioinvasion.",
          lab_diagnosis: "**Tests:** Galactomannan antigen assay (serum or BAL). Beta-D-glucan assay. **Imaging:** CT chest shows 'halo sign' or 'crescent sign'. **Microscopy/Histology:** Tissue or smear reveals branching septate hyphae at acute 45-degree angles . **Culture:** Mold with conidiophores featuring a radiating 'sunburst' appearance.",
          tx: "ABPA: steroids + itraconazole. Aspergilloma: observation or surgery. **Invasive:** **voriconazole** (drug of choice).",
          pearl: "Acute 45-degree angle branching with septations defines Aspergillus, whereas 90-degree wide non-septate branching defines Mucor and Rhizopus. Voriconazole is the primary drug of choice for invasive disease, superseding amphotericin B."
        },
        {
          name: "Cryptococcus neoformans",
          summary: "Narrow-based budding, thick capsule; India ink halo; urease+; meningitis in HIV (CD4 <100); pigeon droppings; amphotericin + flucytosine",
          gram: "Encapsulated yeast (thick polysaccharide capsule)",
          virulence: "**Polysaccharide capsule** (massive, inhibits phagocytosis). Melanin production. Urease positive.",
          disease: "**Cryptococcal meningitis** (AIDS-defining, CD4 <100): insidious onset headache, fever, meningismus, altered mental status. High intracranial pressure is a major complication.",
          lab_diagnosis: "**Tests:** Cryptococcal antigen (CrAg) in CSF or serum is highly sensitive and specific. **Microscopy:** India ink stain of CSF reveals round yeast with a wide, clear halo (thick polysaccharide capsule) and narrow-based budding . Mucicarmine stain of tissue highlights the capsule in red. **Culture:** Sabouraud agar yields mucoid colonies.",
          tx: "**Induction:** amphotericin B + **flucytosine (5-FC)**. **Consolidation/Maintenance:** fluconazole.",
          pearl: "A negative stain like India ink is required because the massive polysaccharide capsule repels standard stains. Elevated intracranial pressure is a major cause of mortality in cryptococcal meningitis and requires serial therapeutic lumbar punctures, not steroids."
        },
        {
          name: "Mucormycosis (Rhizopus/Mucor)",
          summary: "Non-septate hyphae at 90° (right angle); rhinocerebral in DKA; black eschar, vascular invasion; amphotericin B + surgical debridement",
          gram: "Mold (non-septate ribbon-like hyphae, 90° branching)",
          virulence: "Iron as essential nutrient. High glucose + acidosis + elevated free iron (DKA) creates ideal environment. Angioinvasion.",
          disease: "**Rhinocerebral mucormycosis:** DKA, uncontrolled diabetes, deferoxamine therapy. Starts in nasal cavity and spreads to sinuses, orbits, and brain. **Black eschar** on nasal mucosa/palate. Rapidly fatal if untreated.",
          lab_diagnosis: "**Tests:** Fungal culture (often difficult to grow). **Microscopy/Histology:** Biopsy is essential and shows broad, non-septate (aseptate) ribbon-like hyphae with right-angle (90-degree) branching and extensive angioinvasion .",
          tx: "**Liposomal amphotericin B** + **Surgical debridement** (aggressive). Correct DKA.",
          pearl: "A diabetic ketoacidosis patient presenting with a black necrotic eschar on the nasal mucosa or palate is a surgical emergency. Deferoxamine therapy paradoxically increases the risk of mucormycosis by acting as a siderophore, supplying free iron to the fungus."
        },
        {
          name: "Pneumocystis jirovecii (PCP)",
          summary: "Atypical fungus; PCP pneumonia in HIV (CD4 <200); bilateral ground-glass infiltrates, elevated LDH; TMP-SMX (tx + prophylaxis)",
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
          summary: "Anopheles mosquito; cyclic fevers; P. falciparum (most severe, no relapse); P. vivax/ovale (hypnozoites → relapse); chloroquine/artemisinin",
          gram: "Protozoa (intraerythrocytic parasite)",
          virulence: "**Anopheles mosquito** (female only) vector. Sporozoites → hepatocytes (exoerythrocytic stage) → merozoites → RBCs.\n**P. falciparum:** knob proteins cause RBC cytoadherence and rosetting → microvascular obstruction → severe/cerebral malaria.\n**P. vivax / P. ovale:** form dormant **hypnozoites** in the liver → late relapse weeks–months after initial infection.",
          disease: "**Fever cycles:** P. vivax/ovale = 48h (tertian); P. malariae = 72h (quartan); P. falciparum = irregular/continuous.\n**P. falciparum complications** (sub-Saharan Africa, Papua New Guinea): cerebral malaria, severe anemia, hypoglycemia, ARDS, acute kidney injury, **blackwater fever** (massive intravascular hemolysis → hemoglobinuria → dark urine).\n**P. vivax** (South/Southeast Asia, Latin America, East Africa): mildest, but largest global burden outside sub-Saharan Africa; causes **relapse** from hypnozoites.\n**P. ovale** (West Africa): similar to vivax; also relapses.\n**P. malariae** (worldwide, low density): nephrotic syndrome from immune complex deposition.",
          lab_diagnosis: "**Tests:** Rapid diagnostic test (RDT) for HRP-2 antigen (P. falciparum) or pLDH (all species). PCR for species confirmation and drug resistance.\n**Microscopy:** Thick smear (sensitive) + thin smear (speciation) with Giemsa stain.\n— P. falciparum: multiple small rings per RBC ('appliqué/accolé forms'), banana-shaped gametocytes, no Schüffner's dots.\n— P. vivax/ovale: enlarged RBCs with **Schüffner's dots**, ameboid trophozoites.\n— P. malariae: band-form trophozoites, 'rosette' schizonts.",
          tx: "**P. falciparum (uncomplicated):** artemether-lumefantrine or atovaquone-proguanil.\n**P. falciparum (severe):** IV **artesunate** (superior to quinine).\n**P. vivax/ovale:** chloroquine (blood stage) + **primaquine** (liver hypnozoites; check G6PD first).\n**Chloroquine-resistant P. vivax:** atovaquone-proguanil or mefloquine.\n**Prophylaxis:** atovaquone-proguanil or doxycycline (high-resistance areas); chloroquine (limited areas).",
          pearl: "Always test for **G6PD deficiency** before giving primaquine — it triggers massive hemolysis in G6PD-deficient patients. Primaquine is the only agent that kills liver hypnozoites and prevents relapse. Sickle cell trait and HbC confer partial protection against P. falciparum by reducing parasitemia."
        },
        {
          name: "Toxoplasma gondii",
          summary: "Definitive host: cats; congenital (calcifications, chorioretinitis, hydrocephalus); CNS toxoplasmosis in HIV (CD4 <100); TMP-SMX prophylaxis",
          gram: "Protozoa — Obligate intracellular coccidian",
          virulence: "**Definitive host:** cats (sexual reproduction → oocysts in feces).\n**Human infection:** ingestion of oocysts (cat litter, soil) or **bradyzoites** in undercooked meat (pork, lamb). Reactivation occurs with T-cell immunosuppression.",
          disease: "**Congenital toxoplasmosis** (TORCH): classic triad = **chorioretinitis + hydrocephalus + diffuse intracranial calcifications**. Sensorineural hearing loss, seizures.\n**CNS toxoplasmosis (HIV, CD4 <100):** headache, fever, focal neurological deficits, altered mental status. MRI: multiple ring-enhancing lesions, classically in the **basal ganglia**.\n**Ocular toxoplasmosis** (immunocompetent adults): recurrent chorioretinitis from reactivation of congenital cysts.",
          lab_diagnosis: "**Tests:** Serology (IgM acute / IgG past/chronic). PCR of amniotic fluid (congenital), CSF (CNS toxo).\n**Imaging:** MRI brain shows multiple ring-enhancing lesions at gray-white junction or basal ganglia.\n**Microscopy/Histology:** Biopsy shows crescent-shaped **tachyzoites** (active) or **tissue cysts** containing bradyzoites.",
          tx: "**Pyrimethamine + sulfadiazine + leucovorin** (leucovorin prevents bone marrow suppression from pyrimethamine).\n**Prophylaxis (HIV):** TMP-SMX if CD4 <100 and Toxoplasma IgG positive.",
          pearl: "Multiple ring-enhancing lesions in the **basal ganglia** of an HIV patient = Toxoplasma until proven otherwise (treat empirically). A single **periventricular** lesion favors CNS lymphoma. Congenital Toxoplasma → diffuse scattered calcifications; CMV → periventricular calcifications."
        },
        {
          name: "Giardia lamblia",
          summary: "Pear-shaped flagellate; fecal-oral/contaminated water; malabsorption, bloating, floating stools; no blood, no invasion; metronidazole",
          gram: "Protozoa — Flagellate",
          virulence: "Trophozoites attach to duodenal/jejunal epithelium via a **ventral sucking disc**, disrupting the brush border and causing malabsorption. Cysts are the hardy infectious form — resist chlorination.",
          disease: "**Acute:** watery, non-bloody diarrhea, abdominal cramps, bloating, flatulence, sulfurous ('rotten egg') belching.\n**Chronic:** steatorrhea, malabsorption of fat and fat-soluble vitamins (A, D, E, K), weight loss, failure to thrive in children.\n**Risk groups:** hikers ('beaver fever'), travelers, daycare workers, IgA-deficient patients.",
          lab_diagnosis: "**Tests:** Stool antigen EIA (test of choice — highly sensitive and specific). PCR available.\n**Microscopy:** Stool O&P shows pear-shaped trophozoites with 2 nuclei ('owl-eye' appearance) and 4 pairs of flagella, or oval cysts with 4 nuclei.",
          tx: "**Metronidazole**, tinidazole (single dose), or nitazoxanide.",
          pearl: "IgA deficiency markedly increases susceptibility to severe recurrent Giardia — this is a classic association. No blood or fever distinguishes it from invasive pathogens. Giardia does NOT invade the mucosa."
        },
        {
          name: "Entamoeba histolytica",
          summary: "Ingested cysts → trophozoites with RBCs; amebic dysentery + liver abscess (anchovy paste); flask-shaped ulcers; metronidazole",
          gram: "Protozoa — Ameba",
          virulence: "**Trophozoites** ingest RBCs (pathognomonic). Cysteine protease dissolves epithelial layer. Flask-shaped ulcers form in the colon. Can disseminate hematogenously to the liver.",
          disease: "**Amebic colitis:** bloody mucoid diarrhea, lower abdominal cramps. Ulcers may perforate → peritonitis.\n**Amebic liver abscess:** right lobe, 'anchovy paste' appearance (sterile, necrotic debris), fever, RUQ pain, hepatomegaly. Rupture into pleural or pericardial space is a complication.",
          lab_diagnosis: "**Tests:** Stool antigen EIA (distinguishes from non-pathogenic E. dispar). Serology (IgG) for extraintestinal/liver abscess.\n**Imaging:** Ultrasound or CT — right-lobe hypoechoic lesion; no fluid-fluid level.\n**Microscopy/Histology:** Trophozoites with single nucleus and **ingested RBCs in cytoplasm**. Cysts have up to 4 nuclei. Tissue biopsy shows flask-shaped ulcers with undermined edges.",
          tx: "**Metronidazole** (tissue amebicide) followed by **luminal agent** (paromomycin or diloxanide furoate) to eradicate intestinal cysts.",
          pearl: "RBCs inside the trophozoite cytoplasm = E. histolytica confirmed. Metronidazole alone is inadequate — always follow with a luminal agent, or intestinal cysts persist and cause relapse. Unlike pyogenic liver abscess, amebic abscess rarely yields organisms on aspiration."
        },
        {
          name: "Cryptosporidium parvum",
          summary: "Acid-fast oocysts; chlorine-resistant; self-limited in immunocompetent; profuse watery diarrhea in AIDS; nitazoxanide",
          gram: "Protozoa — Coccidian",
          virulence: "Acid-fast oocysts survive chlorination and standard water treatment. Infects intestinal epithelial cells — **intracellular but extracytoplasmic** (within the brush border, not inside the cytoplasm).",
          disease: "**Immunocompetent:** self-limited watery diarrhea, common in daycare, recreational water (swimming pools), and travelers.\n**HIV/AIDS (CD4 <100):** profuse watery diarrhea (up to 10L/day), wasting, dehydration. **Biliary cryptosporidiosis** (sclerosing cholangitis-like picture, RUQ pain, elevated ALP).",
          lab_diagnosis: "**Tests:** Stool antigen EIA (test of choice). PCR is most sensitive.\n**Microscopy:** Modified acid-fast stain — bright **red spherical oocysts** (4–6 µm, smaller than RBCs) against a blue background.",
          tx: "**Immunocompetent:** supportive (self-limited).\n**HIV/AIDS:** nitazoxanide (modest benefit) + **immune reconstitution with HAART** (only truly effective intervention).",
          pearl: "Cryptosporidium oocysts resist chlorination — the source of large municipal and swimming pool outbreaks. In AIDS, there is no reliable antiparasitic cure; restoring CD4 count with HAART is the treatment. Biliary involvement mimicking primary sclerosing cholangitis is a high-yield HIV complication."
        }
      ]
    },
    {
      group: "Protozoa - Blood & Tissue",
      color: "para",
      organisms: [
        {
          name: "Trypanosoma cruzi (Chagas Disease)",
          summary: "Reduviid (kissing) bug; South/Central America; amastigotes in heart/smooth muscle; dilated cardiomyopathy + megacolon; benznidazole",
          gram: "Protozoa — Kinetoplastida",
          virulence: "**Reduviid (triatomine/kissing) bug** bites near mouth or eyes, defecates on skin, and trypomastigotes enter through the wound or conjunctiva. **Amastigotes** infect cardiac myocytes and smooth muscle cells, causing inflammation and fibrosis.",
          disease: "**Acute Chagas:** fever, malaise, lymphadenopathy. **Romaña's sign** (painless unilateral periorbital swelling at inoculation site near eye) is the classic marker.\n**Chronic Chagas (years to decades later):**\n— **Dilated cardiomyopathy** with apical ventricular aneurysm, heart block, arrhythmias, sudden death.\n— **Megaesophagus** (dysphagia, regurgitation — mimics achalasia).\n— **Megacolon** (constipation, obstruction).",
          lab_diagnosis: "**Tests:** PCR (acute phase). Serology IgG (chronic phase — two different tests required to confirm).\n**ECG:** right bundle branch block + left anterior fascicular block is classic.\n**Echocardiogram:** dilated cardiomyopathy with pathognomonic apical aneurysm.\n**Microscopy:** Blood smear shows C-shaped or U-shaped flagellated trypomastigotes with a prominent kinetoplast. Biopsy shows intracellular amastigotes in cardiac or smooth muscle.",
          tx: "**Acute:** benznidazole or nifurtimox (both must be given early for maximum benefit).\n**Chronic:** supportive (antitrypanosomal drugs provide limited benefit in established organ damage).",
          pearl: "Unilateral painless periorbital swelling (Romaña's sign) = acute Chagas until proven otherwise. Megaesophagus perfectly mimics achalasia (bird-beak on barium swallow) — serology differentiates. Chagas cardiomyopathy with an **apical aneurysm** on echo is the highest-yield distinguishing feature from other cardiomyopathies."
        },
        {
          name: "Trypanosoma brucei (Sleeping Sickness)",
          summary: "Tsetse fly; sub-Saharan Africa; stage 1 = hemolymphatic; stage 2 = CNS (disrupted sleep-wake); suramin (stage 1), melarsoprol (stage 2)",
          gram: "Protozoa — Kinetoplastida",
          virulence: "**Tsetse fly** (*Glossina* sp.) vector, exclusively in **sub-Saharan Africa**. **Antigenic variation of VSG** (variable surface glycoprotein) — the parasite continuously switches its surface coat, causing waves of parasitemia and preventing immune clearance.",
          disease: "**Stage 1 — Hemolymphatic:** painful chancre at bite site, undulating fever, lymphadenopathy. **Winterbottom's sign** (posterior cervical LAD) is characteristic.\n**Stage 2 — CNS invasion:** encephalitis, personality change, confusion, daytime somnolence with nighttime insomnia (**disrupted circadian rhythm**), coma, death if untreated.\n**T. b. rhodesiense** (East Africa): acute, more severe. **T. b. gambiense** (West/Central Africa): chronic, more common.",
          lab_diagnosis: "**Tests:** CSF analysis required to stage — Stage 2 if CSF shows trypomastigotes, >5 WBCs, or elevated protein.\n**Microscopy:** Blood or lymph node aspirate (Stage 1) or CSF (Stage 2) smear shows extracellular, elongated flagellated trypomastigotes with an undulating membrane.",
          tx: "**Stage 1:** suramin (T. b. rhodesiense) or pentamidine (T. b. gambiense).\n**Stage 2:** melarsoprol (T. b. rhodesiense; highly toxic) or eflornithine ± nifurtimox (T. b. gambiense).",
          pearl: "Continuous antigenic variation of VSG is why the host cannot clear the infection — producing characteristic **undulating waves of parasitemia**. Sleep-wake cycle reversal is the hallmark of CNS invasion. Melarsoprol is an arsenic compound; it can cause fatal reactive encephalopathy in ~5% of patients."
        },
        {
          name: "Babesia",
          summary: "Ixodes tick; NE/Midwest US; intraerythrocytic; Maltese cross tetrad; severe in asplenic; resembles malaria; atovaquone + azithromycin",
          gram: "Protozoa — Intraerythrocytic",
          virulence: "**Ixodes scapularis tick** (same as Lyme disease and Anaplasmosis). Infects RBCs directly — **no exoerythrocytic liver stage**, distinguishing it from malaria. Sporadic in **Northeast and upper Midwest US** (especially Nantucket, Martha's Vineyard, Long Island).",
          disease: "**Symptomatic:** flu-like illness, fever, chills, myalgias, hemolytic anemia, thrombocytopenia, elevated LDH.\n**Severe/life-threatening disease:** **asplenic patients**, the elderly, immunocompromised, and HIV patients are at highest risk for overwhelming, potentially fatal parasitemia.",
          lab_diagnosis: "**Tests:** PCR (most sensitive). Serology (IgG/IgM).\n**Microscopy:** Giemsa-stained blood smear shows intraerythrocytic ring forms (mimicking P. falciparum) without hemozoin pigment. Pathognomonic: **tetrad rings ('Maltese cross')** inside a single RBC.",
          tx: "**Mild–moderate:** atovaquone + azithromycin.\n**Severe:** clindamycin + quinine. Exchange transfusion for high-grade parasitemia (>10%) or severe hemolysis.",
          pearl: "The Maltese cross (tetrad form) inside an RBC is **pathognomonic for Babesia**. Because it shares the Ixodes tick with Borrelia burgdorferi and Anaplasma, always consider **co-infection** with Lyme disease. Asplenic patients face overwhelming, rapidly fatal parasitemia and require prompt treatment."
        },
        {
          name: "Naegleria fowleri",
          summary: "Free-living ameba; warm freshwater → cribriform plate → primary amebic meningoencephalitis (PAM); rapidly fatal; amphotericin B",
          gram: "Protozoa — Free-living ameba",
          virulence: "**Thermophilic** — thrives in warm freshwater bodies (lakes, ponds, hot springs, poorly maintained pools). Enters via olfactory epithelium, migrates through the **cribriform plate**, and destroys the olfactory bulbs before spreading to brain parenchyma.",
          disease: "**Primary Amebic Meningoencephalitis (PAM):** occurs in young healthy swimmers in warm freshwater. Rapid-onset severe headache, fever, nausea, altered mental status, coma. **Death within 3–7 days** in >97% of cases.",
          lab_diagnosis: "**Tests:** PCR (CDC). CSF shows high opening pressure, high neutrophils, high protein, low glucose.\n**Microscopy:** Fresh warm wet mount of CSF shows **actively motile trophozoites** (must examine immediately). Brain autopsy shows amebic trophozoites — no cyst form found in tissue.",
          tx: "**Amphotericin B** (IV + intrathecal) + miltefosine + azithromycin. Survival is exceedingly rare even with treatment.",
          pearl: "Swimming in warm freshwater → rapid fulminant meningoencephalitis in a young healthy person = Naegleria until proven otherwise. The organism travels through the **cribriform plate via the olfactory nerve**; it cannot be acquired by swallowing contaminated water. CSF resembles bacterial meningitis but bacterial cultures are negative."
        },
        {
          name: "Leishmania",
          summary: "Sandfly vector; cutaneous (skin ulcer), mucocutaneous (tissue destruction), visceral/kala-azar (hepatosplenomegaly, fever, pancytopenia)",
          gram: "Protozoa — Kinetoplastida",
          virulence: "**Phlebotomus sandfly** vector. Promastigotes (flagellated, extracellular) inoculated into skin → taken up by macrophages → transform into **amastigotes** (non-flagellated, intracellular) that resist killing inside phagolysosomes.",
          disease: "**Cutaneous (Old World — Middle East, Central Asia, Africa; New World — Latin America):** painless, slowly enlarging, non-healing ulcer with raised borders at bite site ('volcano crater' appearance).\n**Mucocutaneous (L. braziliensis — Latin America):** destructive ulceration of nasal septum, palate, lips ('tapir nose'). Years after cutaneous infection.\n**Visceral/Kala-azar (L. donovani — Indian subcontinent, East Africa, Brazil):** massive **hepatosplenomegaly**, prolonged fever, pancytopenia, **hypergammaglobulinemia**, hyperpigmentation of skin ('kala-azar' = black fever in Hindi).",
          lab_diagnosis: "**Tests:** PCR. Rapid rk39 strip test (visceral — highly sensitive).\n**Microscopy/Histology:** Biopsy of bone marrow, spleen, or ulcer margin shows non-flagellated **amastigotes (Leishman-Donovan bodies)** packed inside macrophages, with a characteristic rod-shaped kinetoplast adjacent to the nucleus.",
          tx: "**Visceral/severe:** liposomal amphotericin B (drug of choice).\n**Cutaneous (uncomplicated):** miltefosine or topical amphotericin. Treat all L. braziliensis infections aggressively to prevent mucocutaneous spread.",
          pearl: "Massive hepatosplenomegaly + pancytopenia + fever + hyperpigmentation = **kala-azar** (visceral Leishmania). Cutaneous L. braziliensis must be treated even if it appears to heal — delayed mucocutaneous destruction of the nose and palate can occur years later and is disfiguring."
        },
        {
          name: "Trichomonas vaginalis",
          summary: "Flagellated STI; frothy yellow-green discharge, strawberry cervix, pH >4.5; no cyst form; treat both partners; metronidazole",
          gram: "Protozoa — Flagellate (no cyst form)",
          virulence: "**No cyst form** — the trophozoite cannot survive outside the host, making **sexual contact the only route of transmission**. Trophozoites adhere to vaginal and urethral epithelium via surface adhesins.",
          disease: "**Females:** malodorous yellow-green frothy vaginal discharge, pruritus, dysuria. **Strawberry cervix** (colpitis macularis — punctate hemorrhagic spots). Vaginal pH >4.5.\n**Males:** usually asymptomatic; may cause mild urethritis or balanoposthitis.",
          lab_diagnosis: "**Tests:** NAAT/PCR (gold standard — highest sensitivity). Vaginal pH >4.5.\n**Microscopy:** Wet mount shows actively motile pear-shaped flagellated trophozoites, slightly larger than WBCs, with characteristic jerky/tumbling motility.",
          tx: "**Metronidazole** 2g PO single dose or tinidazole. **Treat both partners simultaneously** — failure to treat the partner is the most common cause of reinfection.",
          pearl: "No cyst form = exclusively sexual transmission. Always treat both partners simultaneously. Metronidazole resistance is increasing; tinidazole is an alternative. Unlike bacterial vaginosis, Trichomonas causes an inflammatory discharge with WBCs on wet mount."
        }
      ]
    },
    {
      group: "Helminths & Other Parasites",
      color: "para",
      organisms: [
        {
          name: "Intestinal Nematodes",
          summary: "Pinworm (scotch tape test), Ascaris, hookworms (iron deficiency), Strongyloides (hyperinfection in immunocompromised), Trichuris; albendazole",
          gram: "Helminths — Nematodes (roundworms)",
          virulence: "Each species uses distinct strategies: fecal-oral ingestion, larval skin penetration, or autoinfection. Löffler syndrome (eosinophilia + transient pulmonary infiltrates) occurs during larval lung migration.",
          disease: "**Enterobius vermicularis (pinworm):** perianal pruritus at night; most common helminth in the US; children.\n**Ascaris lumbricoides:** Löffler pneumonia during larval lung migration; intestinal obstruction from large worm burden.\n**Ancylostoma/Necator (hookworms):** skin penetration (cutaneous larva migrans, ground itch); iron-deficiency anemia from intestinal blood loss.\n**Trichuris trichiura (whipworm):** bloody diarrhea, rectal prolapse.\n**Strongyloides stercoralis:** unique autoinfection cycle; **hyperinfection syndrome** in immunocompromised/steroid-treated patients → dissemination of gut flora → gram-negative sepsis.",
          lab_diagnosis: "**Enterobius:** Scotch tape test (asymmetrically flattened eggs around perianal skin, best collected at night or early morning).\n**Ascaris/Hookworm/Trichuris:** stool O&P — characteristic eggs.\n**Strongyloides:** stool O&P shows **rhabditiform larvae** (not eggs); serology (IgG EIA); agar plate culture is most sensitive.",
          tx: "**Albendazole or mebendazole** (Enterobius, Ascaris, hookworm, Trichuris). Treat all household members for pinworm.\n**Strongyloides: ivermectin** (drug of choice).",
          pearl: "**Administering corticosteroids to a patient with latent Strongyloides triggers catastrophic hyperinfection syndrome** — always screen at-risk patients (immigrants, travelers, HTLV-1) before starting immunosuppression. Löffler syndrome (transient eosinophilia + pulmonary infiltrates) marks the larval lung migration phase shared by Ascaris, hookworms, and Strongyloides."
        },
        {
          name: "Tissue Nematodes & Trematodes",
          summary: "Trichinella (undercooked pork → periorbital edema, myositis); filariasis (lymphedema); Onchocerca (river blindness); Schistosoma (hematuria/portal HTN)",
          gram: "Helminths — Nematodes/Trematodes (tissue)",
          virulence: "Tissue invasion, larval encystment in muscle (Trichinella), lymphatic obstruction (Wuchereria), microfilariae in skin/eye (Onchocerca), and granulomatous immunopathology around schistosome eggs.",
          disease: "**Trichinella spiralis** (undercooked pork, bear, wild game): periorbital edema, myalgias, myositis, eosinophilia.\n**Wuchereria bancrofti** (mosquito vector, tropics): lymphatic obstruction → chronic **elephantiasis** (massive limb/scrotal edema), hydrocele.\n**Onchocerca volvulus** (blackfly vector, sub-Saharan Africa/Latin America): microfilariae in skin → pruritus, subcutaneous nodules; microfilariae in cornea → **river blindness** (leading infectious cause of blindness worldwide).\n**Schistosoma** (cercariae penetrate skin in freshwater, sub-Saharan Africa/Latin America/Asia):\n— S. mansoni / S. japonicum → portal HTN, **Symmers' pipe-stem fibrosis**, esophageal varices.\n— S. haematobium (Africa) → hematuria, **squamous cell carcinoma of the bladder**.\n**Clonorchis sinensis** (undercooked freshwater fish, East Asia): biliary obstruction, **cholangiocarcinoma**.",
          lab_diagnosis: "**Trichinella:** muscle biopsy (encysted larvae); serology; elevated CK and eosinophilia.\n**Wuchereria:** thick blood smear at **midnight** (microfilariae peak nocturnally); antigen detection.\n**Onchocerca:** skin snip (microfilariae); slit-lamp exam (corneal microfilariae).\n**Schistosoma:** stool O&P — S. mansoni (lateral spine), S. japonicum (small lateral spine); urine O&P — S. haematobium (terminal spine).\n**Clonorchis:** stool O&P (small, operculated eggs).",
          tx: "Trichinella: **albendazole** + corticosteroids (for severe myositis).\nFilariasis (Wuchereria): **DEC** (diethylcarbamazine).\nOnchocerca: **ivermectin** (do NOT use DEC — causes Mazzotti reaction with severe inflammation).\nSchistosoma and Clonorchis: **praziquantel**.",
          pearl: "**Schistosoma haematobium** uniquely infects the perivesical venous plexus → painless hematuria → greatly increased risk of **squamous cell carcinoma** of the bladder. **Clonorchis** infection is a major risk factor for **cholangiocarcinoma**. Do NOT use DEC for Onchocerca — the mass death of microfilariae causes a severe inflammatory reaction (Mazzotti reaction) that can worsen eye disease."
        },
        {
          name: "Cestodes (Tapeworms)",
          summary: "T. solium (pork/neurocysticercosis → seizures), T. saginata (beef/intestinal only), Echinococcus (hydatid cyst/liver); praziquantel/albendazole",
          gram: "Helminths — Cestodes (tapeworms)",
          virulence: "Larval forms are the most pathogenic in humans (intermediate hosts). Echinococcus forms slowly expanding hydatid cysts with an outer germinal layer surrounded by a fibrous pericyst.",
          disease: "**Taenia solium (pork tapeworm):** eating undercooked pork containing cysticerci → intestinal tapeworm.\n**Neurocysticercosis:** ingesting T. solium **eggs** (from contaminated human feces) → larvae encyst in the brain → **seizures** (leading cause of adult-onset seizures in endemic areas), hydrocephalus, focal deficits.\n**Taenia saginata (beef tapeworm):** intestinal tapeworm only — no neurocysticercosis.\n**Echinococcus granulosus** (dogs → sheep/humans, worldwide): slowly expanding **hydatid cysts** in liver (most common) and lung; rupture → anaphylaxis.\n**Diphyllobothrium latum** (undercooked freshwater fish, Scandinavia, Canada, Latin America): competes for vitamin B12 in terminal ileum → **megaloblastic anemia**.",
          lab_diagnosis: "**Neurocysticercosis:** CT or MRI head shows calcified ring cysts ('hole-in-one' sign) at different stages of evolution.\n**Echinococcus:** Ultrasound/CT shows large **hydatid cyst with daughter cysts** inside; serology (IgG).\n**Stool O&P:** proglottids or thick radially striated eggs (Taenia); oval operculated eggs (Diphyllobothrium).",
          tx: "Intestinal tapeworms: **praziquantel**.\nNeurocysticercosis: **albendazole + dexamethasone** (steroids reduce inflammatory response to dying larvae).\nEchinococcus: **PAIR** (puncture, aspiration, injection of hypertonic saline, re-aspiration) or surgical resection. Pre-treat with albendazole. **Never aspirate without pre-treatment** — spilling cyst fluid causes anaphylaxis.\nDiphyllobothrium: praziquantel + B12 supplementation.",
          pearl: "Neurocysticercosis is acquired by eating **eggs** (not pork) — from contaminated human feces. A person who never eats pork can still get neurocysticercosis from a food handler with intestinal T. solium. Never blindly aspirate an Echinococcus cyst — spilled fluid triggers **fatal anaphylaxis**. Diphyllobothrium causes B12 deficiency from preferential uptake of B12 by the worm in the distal ileum."
        }
      ]
    }
]


};
