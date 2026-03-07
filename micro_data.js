const MICRO = {

bacteria: [
  {
    group: "Gram-Positive Cocci",
    color: "bact",
    organisms: [
      {
        name: "Staphylococcus aureus",
        summary: "Catalase+ coagulase+ — MRSA, toxic shock, scalded skin, food poisoning, endocarditis",
gram: "GP Cocci (clusters)",
virulence: "**Protein A** (binds IgG Fc, evades opsonization)
**Coagulase** (fibrin clot formation)
**Leukocidin** (PVL — destroys WBCs)
**Exotoxins:** TSST-1 (superantigen→TSS), exfoliatin (cleaves desmoglein-1 → SSSS), enterotoxin (heat-stable → food poisoning)",
        disease: "Skin/soft tissue: folliculitis, furuncles, carbuncles, impetigo (crusted). Systemic: bacteremia, endocarditis (IV drug users → **tricuspid**), osteomyelitis (most common cause overall), septic arthritis. Toxin-mediated: TSS (tampon, wound), SSSS (neonates/immunocompromised), food poisoning (preformed toxin, 1–6h onset, N/V/D, no fever)",
        tx: "MSSA: nafcillin/oxacillin. MRSA: **vancomycin** (hospital) or TMP-SMX/doxycycline (community). Endocarditis: add gentamicin. SSSS: supportive + antistaphylococcal abx.",
        pearl: "**MRSA trap:** β-lactams and cephalosporins are useless against MRSA — altered PBP2a (mecA gene). The 'best initial test' for S. aureus food poisoning is clinical — don't culture stool, the toxin is preformed.
**Novobiocin-sensitive** (distinguishes S. epidermidis from S. saprophyticus which is novobiocin-resistant)."
      },
      {
        name: "Staphylococcus epidermidis",
        summary: "Coagulase-negative — infects prosthetic valves/joints/catheters via biofilm. Novobiocin-sensitive",
gram: "GP Cocci (clusters)",
virulence: "**Biofilm formation** on prosthetic material (polysaccharide slime layer) — resistant to antibiotics and phagocytosis",
        disease: "Prosthetic valve endocarditis (#1 cause within 1st year), infected joint prostheses, IV catheter infections, VP shunt infections. A common blood culture contaminant — requires **2 positive cultures** to be significant.",
        tx: "Vancomycin ± rifampin (rifampin penetrates biofilm). Remove device if possible.",
        pearl: "**Device bug:** any infection of a prosthetic device or indwelling catheter → think S. epidermidis. Distinguished from S. saprophyticus by **novobiocin sensitivity** (epidermidis is sensitive). Multiple blood cultures growing S. epidermidis = NOT a contaminant."
      },
      {
        name: "Staphylococcus saprophyticus",
        summary: "Novobiocin-resistant — #2 cause of UTI in young sexually active women (after E. coli)",
gram: "GP Cocci (clusters)",
virulence: "Urease production, surface adhesins for uroepithelium",
        disease: "Uncomplicated cystitis in young sexually active women. Presents with dysuria, frequency, pyuria. Urinalysis: WBCs, GP cocci in clusters.",
        tx: "TMP-SMX or nitrofurantoin (same as E. coli UTI). Fluoroquinolones are alternative.",
        pearl: "**Classic vignette:** young woman, sexually active, UTI with GP cocci on urinalysis. The key distinguisher: **novobiocin-resistant** (S. epidermidis is sensitive). Think 'Sapphire → Sexy young woman with UTI.'"
      },
      {
        name: "Streptococcus pyogenes (Group A Strep)",
        summary: "β-hemolytic, bacitracin-sensitive — pharyngitis, impetigo, rheumatic fever, PSGN, necrotizing fasciitis",
gram: "GP Cocci (chains)",
virulence: "**M protein** (antiphagocytic, anti-complement)
Streptolysin O/S (β-hemolysis, ASO titer)
Streptokinase
Hyaluronidase ('spreading factor')
Pyrogenic exotoxins A/B/C (superantigens → scarlet fever, TSS)",
        disease: "Pharyngitis (exudative, no cough, tonsillar exudates, fever, cervical LAD). Impetigo (honey-crusted lesions — non-bullous). Scarlet fever (sandpaper rash, strawberry tongue, Pastia lines). Cellulitis/erysipelas. Necrotizing fasciitis ('flesh-eating bacteria' — surgical emergency). Post-streptococcal: **rheumatic fever** (Jones criteria — molecular mimicry of M protein → cardiac valves, esp. mitral) and
**PSGN** (immune complex type III).",
        tx: "**Penicillin** (drug of choice — never develops resistance). Amoxicillin for pharyngitis. Clindamycin for invasive disease (inhibits toxin synthesis). Treat pharyngitis to prevent rheumatic fever (NOT PSGN).",
        pearl: "**ASO titer** rises after pharyngitis (strep O) but NOT after impetigo (strep S) — anti-DNase B better for impetigo.
**Rheumatic fever vs PSGN:** RF → follows pharyngitis only, prevented by antibiotics. PSGN → follows pharyngitis OR impetigo, NOT prevented by antibiotics. Latency: PSGN 1–3 weeks post-pharyngitis, 3–6 weeks post-impetigo."
      },
      {
        name: "Streptococcus agalactiae (Group B Strep)",
        summary: "β-hemolytic, CAMP test positive — #1 neonatal meningitis/sepsis, maternal UTI/chorioamnionitis",
gram: "GP Cocci (chains)",
virulence: "Polysaccharide capsule (antiphagocytic), CAMP factor (↑ beta-hemolysis of S. aureus)",
        disease: "**Neonates:** Early-onset (0–7d): pneumonia, sepsis — from maternal colonization. Late-onset (7d–3mo): meningitis, bacteremia.
**Adults:** UTI in pregnant women, chorioamnionitis, postpartum endometritis, bacteremia in elderly/diabetics.",
        tx: "Ampicillin (drug of choice).
**GBS screen at 35–37 weeks** — if positive, give intrapartum ampicillin IV.",
        pearl: "**CAMP test:** GBS produces CAMP factor which enhances S. aureus hemolysis → arrowhead hemolysis on agar. #1 cause of neonatal meningitis overall (vs. L. monocytogenes which is #1 in immunocompromised neonates). Hippurate hydrolysis positive."
      },
      {
        name: "Streptococcus pneumoniae",
        summary: "α-hemolytic, lancet-shaped diplococci, optochin-sensitive — #1 meningitis/pneumonia/otitis/sinusitis in adults",
gram: "GP Diplococci (lancet-shaped)",
virulence: "**Polysaccharide capsule** (major virulence — prevents phagocytosis; opsonization requires IgG or C3b). IgA protease. Pneumolysin.",
        disease: "**Most common cause of:** community-acquired pneumonia (lobar), bacterial meningitis (adults >50), otitis media, sinusitis. Bacteremia in asplenic patients (most feared — also H. influenzae and N. meningitidis). Endocarditis is rare but can cause valvular destruction.",
        tx: "Penicillin (if susceptible). Resistant strains: ceftriaxone or vancomycin. Meningitis: ceftriaxone + vancomycin + dexamethasone (↓ hearing loss).
**Vaccines:** PCV13 (children), PPSV23 (adults >65, asplenic, immunocompromised).",
        pearl: "**Optochin sensitivity** differentiates S. pneumoniae from S. viridans (viridans is resistant).
**Quellung reaction:** capsule swells with type-specific antibody — used for identification. Asplenic patients are **most susceptible to encapsulated organisms:** S. pneumoniae > H. influenzae > N. meningitidis → 'SHiN'."
      },
      {
        name: "Streptococcus viridans",
        summary: "α-hemolytic, optochin-RESISTANT — #1 subacute bacterial endocarditis (native valve, prior damage)",
gram: "GP Cocci (chains)",
virulence: "**Dextran** (glucan) production — adheres to fibrin-platelet thrombi on damaged valves. S. mutans: dextran promotes dental caries.",
        disease: "**Subacute endocarditis** on previously damaged valves (MVP, RHD) — after dental procedures. Symptoms insidious (weeks–months): fever, weight loss, Osler nodes, Roth spots, Janeway lesions, splinter hemorrhages. S. mutans: dental caries (ferments sucrose → lactic acid).",
        tx: "Penicillin + gentamicin.
**Endocarditis prophylaxis** for high-risk cardiac lesions: amoxicillin 1h before dental procedure.",
        pearl: "**Viridans vs pneumoniae:** Both α-hemolytic, but viridans is optochin-resistant and bile-insoluble. S. bovis endocarditis (group D strep) → strongly associated with **colorectal carcinoma** — colonoscopy is mandatory."
      },
      {
        name: "Enterococcus",
        summary: "Group D, bile-tolerant, grows in 6.5% NaCl — UTI, biliary, nosocomial endocarditis; VRE is multi-drug resistant",
gram: "GP Cocci (pairs/chains)",
virulence: "Intrinsic resistance to many antibiotics; acquires vancomycin resistance (VRE — vanA/vanB genes)",
        disease: "UTI (especially catheter-associated), biliary infections, nosocomial bacteremia and endocarditis. E. faecalis (90%) > E. faecium. VRE is major nosocomial threat in ICU/immunocompromised.",
        tx: "**E. faecalis:** ampicillin (± gentamicin for endocarditis — synergy).
**VRE:** linezolid or daptomycin. Enterococcus is intrinsically resistant to cephalosporins and TMP-SMX.",
        pearl: "**Classic exam trap:** Enterococcus is
**NOT killed by penicillin alone** — bacteriostatic only; need ampicillin + aminoglycoside for bactericidal effect (endocarditis). Distinguishable from S. bovis: Enterococcus grows in **6.5% NaCl** (S. bovis does not). PYR test positive."
      }
    ]
  },
  {
    group: "Gram-Positive Bacilli",
    color: "bact",
    organisms: [
      {
        name: "Bacillus anthracis",
        summary: "Anthrax — spore-forming, large GP rod with antiphagocytic capsule; cutaneous, inhalation, GI forms",
gram: "GP Bacillus (aerobic, spore-forming)",
virulence: "**Poly-D-glutamate capsule** (antiphagocytic)
**Anthrax toxin:** protective antigen (PA) + edema factor (EF = adenylate cyclase → ↑cAMP) + lethal factor (LF = metalloprotease → MAPK disruption → cell death)",
        disease: "**Cutaneous anthrax** (95%): painless papule → necrotic black eschar (malignant pustule) — contact with infected animals/hides.
**Inhalation anthrax** (woolsorter's disease): mediastinal widening on CXR, hemorrhagic mediastinitis, high mortality.
**GI:** from contaminated meat.",
        tx: "Ciprofloxacin or doxycycline. Post-exposure prophylaxis: ciprofloxacin + anthrax vaccine.
**Bioterrorism agent** (Category A).",
        pearl: "**Mediastinal widening** on CXR in an otherwise healthy person + flu-like prodrome = inhalation anthrax until proven otherwise. B. cereus causes **food poisoning** — two forms: emetic (rice, 1–6h, preformed toxin) and diarrheal (8–16h). Germinate in intestine."
      },
      {
        name: "Bacillus cereus",
        summary: "Spore-forming GP rod — two distinct food poisoning syndromes: emetic (reheated rice, 1–6h) and diarrheal (meats/vegetables, 8–16h)",
gram: "GP Bacillus (aerobic, spore-forming)",
virulence: "**Emetic toxin (cereulide):** heat-stable, preformed in food — survives reheating.
**Enterotoxin:** heat-labile, produced in gut → diarrheal syndrome. Both mediated by spores that survive cooking.",
        disease: "**Emetic form (short incubation 1–6h):** N/V, cramping — classic: leftover **reheated fried rice** at restaurants. Resembles S. aureus food poisoning.
**Diarrheal form (8–16h):** watery diarrhea, cramping, no vomiting — resembles C. perfringens. Rarely: ocular infections (post-traumatic), bacteremia in immunocompromised.",
        tx: "Supportive — both syndromes self-limited (<24h). Antibiotics not indicated for GI illness.",
        pearl: "**The rice bug:** fried rice syndrome = B. cereus emetic toxin. Spores survive boiling, germinate when rice cools, proliferate → reheating kills bacteria but NOT the preformed toxin.
**Distinguish from S. aureus:** also has short incubation + preformed toxin but S. aureus is from meats/custards, not rice.
**Diarrheal form mimics C. perfringens** (both ~8–16h, watery, no fever)."
      },
      {
        name: "Clostridium tetani",
        summary: "Tetanospasmin — rusted nail/wound, opisthotonos, trismus, risus sardonicus; prevent with Td vaccine",
gram: "GP Bacillus (anaerobic, spore-forming)",
virulence: "**Tetanospasmin** (tetanus toxin) — cleaves SNARE proteins at inhibitory interneurons in spinal cord → blocks glycine/GABA release → **disinhibited excitatory** neurons → spastic paralysis",
        disease: "**Generalized tetanus:** trismus (lockjaw) → risus sardonicus (sardonic smile) → opisthotonus (board-like back arching) → autonomic instability.
**Neonatal tetanus:** umbilical stump infection in unvaccinated mothers.
**Local tetanus:** localized rigidity near wound.
**Cephalic tetanus:** cranial nerve involvement.",
        tx: "**TIG (tetanus immunoglobulin)** — neutralizes unbound toxin. Metronidazole (kills organism). Muscle relaxants (benzodiazepines, baclofen).
**Prophylaxis:** Td booster if wound + not vaccinated in 5 years (dirty) or 10 years (clean).",
        pearl: "**MOA key:** tetanospasmin travels retrograde to spinal cord and blocks **inhibitory** interneurons (Renshaw cells) → spastic paralysis. Contrast with **botulinum toxin** which blocks **excitatory** (ACh release at NMJ) → flaccid paralysis. 'Tetanus = Tense; Botulism = Botulinum = Baggy (flaccid).'"
      },
      {
        name: "Clostridium botulinum",
        summary: "Botulinum toxin blocks ACh release at NMJ — descending flaccid paralysis; honey for infants, canned food for adults",
gram: "GP Bacillus (anaerobic, spore-forming)",
virulence: "**Botulinum toxin** (most lethal known toxin) — cleaves SNARE proteins at NMJ → blocks **ACh release** → flaccid paralysis. Also blocks parasympathetic autonomic neurons.",
        disease: "**Food-borne:** canned/preserved food (pre-formed toxin) — descending symmetric flaccid paralysis, cranial nerve palsies (diplopia, dysarthria, dysphagia) → respiratory failure. No fever, no sensory deficit.
**Infant botulism:** honey before age 1 (germination in gut) — floppy baby, constipation, poor suck.
**Wound botulism:** IV drug users.",
        tx: "**Antitoxin** (heptavalent). Supportive care (mechanical ventilation if needed). For infant botulism:
**BabyBIG** (botulism immunoglobulin IV).
**NOT** antibiotics (releasing toxin can worsen).",
        pearl: "**Classic infant botulism:** 'floppy baby' who can't nurse and is constipated — **honey exposure**. Normal EMG → repetitive nerve stimulation → **incremental response** (unlike MG which shows decremental). The 'DDD' presentation: Descending, Diplopia/Dysarthria/Dysphagia, Dilated pupils."
      },
      {
        name: "Clostridium difficile",
        summary: "Pseudomembranous colitis — antibiotic-disrupted flora; toxin A (enterotoxin) + toxin B (cytotoxin); treat with fidaxomicin/vancomycin (PO)",
gram: "GP Bacillus (anaerobic, spore-forming)",
virulence: "**Toxin A** (enterotoxin): fluid secretion, mucosal damage.
**Toxin B** (cytotoxin): actin depolymerization → cell death (more important clinically). Binary toxin in hypervirulent NAP1 strain.",
        disease: "**AAD/PMC:** watery diarrhea (rarely bloody) after antibiotics (classically clindamycin, fluoroquinolones, cephalosporins). Colonoscopy: yellowish plaques (pseudomembranes).
**Toxic megacolon:** fever, ↑WBC, abdominal distension — ileus → colonic dilation > 6cm → perforation risk.
**Recurrent C. difficile** (15–35%): treat with fidaxomicin or fecal microbiota transplant.",
        tx: "**First episode:** fidaxomicin (preferred) or oral vancomycin (NOT IV vancomycin). Metronidazole (if severe) is now second-line. Discontinue offending antibiotic.
**Recurrence:** oral vancomycin taper or FMT.
**Fulminant/toxic megacolon:** IV metronidazole + PO vancomycin, surgical consult.",
        pearl: "**IV vancomycin does NOT work** for C. difficile — drug doesn't reach colon lumen. Oral vancomycin works because it's not absorbed. Spores survive alcohol-based hand sanitizer → use **soap and water** for C. difficile. Metronidazole now **second-line** due to inferior outcomes. Diagnosis: **toxin EIA** (fast, less sensitive) or
**PCR** (more sensitive, may detect colonization)."
      },
      {
        name: "Clostridium perfringens",
        summary: "Gas gangrene (myonecrosis) + food poisoning — double-zone β-hemolysis, lecithinase (alpha toxin)",
gram: "GP Bacillus (anaerobic, spore-forming)",
virulence: "**Alpha toxin (lecithinase/phospholipase C):** lyses cell membranes → gas gangrene.
**Enterotoxin:** food poisoning (disrupts intestinal epithelium).",
        disease: "**Gas gangrene (clostridial myonecrosis):** traumatic wounds, surgery, IVDUs. Severe pain, crepitus (gas), bronze/maroon discoloration, shock. Life-threatening — surgical emergency.
**Food poisoning:** reheated meat (spores survive initial cooking, germinate) → 8–24h watery diarrhea, no fever, self-limited.",
        tx: "Gas gangrene: **emergent surgical debridement** + penicillin G (± clindamycin to ↓ toxin synthesis) + hyperbaric oxygen.",
        pearl: "**Crepitus (crackling under skin)** in a wound → gas gangrene → emergency surgical debridement. X-ray shows gas in soft tissues.
**Nagler's reaction:** alpha toxin (lecithinase) causes opacity on egg yolk agar — inhibited by antitoxin on one side = double zone. Food poisoning: no fever, short incubation (8–12h) — distinguish from B. cereus (shorter) and Salmonella (fever)."
      },
      {
        name: "Corynebacterium diphtheriae",
        summary: "Diphtheria — pseudomembrane (grayish), bull neck, ADP-ribosylation of EF-2 → exotoxin; treat with antitoxin + erythromycin",
gram: "GP Bacillus (non-spore, club-shaped)",
virulence: "**Diphtheria toxin** (phage-encoded): **ADP-ribosylates EF-2 (elongation factor 2)** → halts protein synthesis → cell death. A-B toxin: B binds, A is active.",
        disease: "**Pharyngeal diphtheria:** gray, adherent pseudomembrane over tonsils/pharynx that bleeds when removed. Bull neck (massive LAD). Systemic effects: myocarditis (heart block, arrhythmias — weeks later), demyelinating neuropathy (cranial nerves — palatal palsy, eye muscle weakness; peripheral neuropathy).",
        tx: "**Antitoxin first** (neutralizes free toxin — most important). Erythromycin or penicillin (kills organism). Prevention:
**DTaP vaccine**.",
        pearl: "**ADP-ribosylation of EF-2** = the classic mechanism — same as Pseudomonas exotoxin A. Diphtheria toxin: B binds→A is active (A-B toxin paradigm).
**Lab:** Elek test (immunodiffusion for toxin) and Löffler medium (metachromatic granules on methylene blue). Tellurite agar: gray-black colonies."
      },
      {
        name: "Listeria monocytogenes",
        summary: "Facultative intracellular, tumbling motility, grows at 4°C — meningitis in neonates/elderly/immunocompromised; raw dairy, deli meat",
gram: "GP Bacillus (non-spore, facultative anaerobe)",
virulence: "**Listeriolysin O (LLO):** pore-forming toxin → escapes phagosome.
**ActA:** actin polymerization → intracellular motility (actin rockets). Cold enrichment (grows at 4°C — refrigerator).",
        disease: "**Neonates** (via transplacental or birth canal): granulomatosis infantiseptica, meningitis, sepsis.
**Pregnant women:** mild flu-like illness → premature labor, stillbirth, neonatal infection.
**Elderly/immunocompromised (esp. T-cell deficient):** meningitis, bacteremia.
**Gastroenteritis** (healthy hosts): deli meats, soft cheeses, raw sprouts.",
        tx: "**Ampicillin** (drug of choice). Add gentamicin for synergy in severe cases.
**Cephalosporins do NOT cover Listeria** — important for empiric meningitis coverage in neonates/elderly: add ampicillin to ceftriaxone.",
        pearl: "**Empiric meningitis coverage:** neonates and elderly/immunocompromised must get **ampicillin added** because cephalosporins miss Listeria. Grows at **4°C** (cold enrichment) and shows **tumbling motility** at room temperature.
**CAMP test positive.** β-hemolytic on blood agar."
      }
    ]
  },
  {
    group: "Gram-Positive Branching Filamentous Rods",
    color: "bact",
    organisms: [
      {
        name: "Actinomyces israelii",
        summary: "Anaerobic branching GP rod — cervicofacial abscess with sulfur granules, sinus tracts; normal oral flora; responds to penicillin",
gram: "GP Branching Rod (anaerobic, non-acid-fast)",
virulence: "Branching filamentous growth, forms dense colonies (sulfur granules = macroscopic bacterial aggregates, NOT actual sulfur). Anaerobic — thrives in devitalized tissue post-trauma/surgery.",
        disease: "**Cervicofacial (lumpy jaw):** most common form — indurated swelling of jaw/neck, sinus tracts draining to skin. Often follows dental extraction or trauma.
**Thoracic:** aspiration → lung abscess, empyema, chest wall sinus tracts.
**Abdominal/pelvic:** after bowel perforation/appendectomy;
**IUD-associated pelvic actinomycosis** (classic).",
        tx: "**Penicillin G** (IV, prolonged — weeks to months). Surgical drainage of abscess. Remove IUD if pelvic disease.",
        pearl: "**Sulfur granules** = yellow granules in pus = pathognomonic. NOT acid-fast (distinguishes from Nocardia). Actinomyces = normal oral/GI flora → disease requires disruption (dental work, trauma, surgery).
**IUD + pelvic mass + sinus tract = Actinomyces.** Thoracic actinomycosis can mimic malignancy on imaging."
      },
      {
        name: "Nocardia asteroides",
        summary: "Aerobic, weakly acid-fast branching GP rod — lung/CNS abscess in immunocompromised; TMP-SMX is drug of choice",
gram: "GP Branching Rod (aerobic, weakly acid-fast)",
virulence: "Aerobic (unlike Actinomyces).
**Weakly acid-fast** (modified Ziehl-Neelsen stain). Resists intracellular killing by inhibiting phagosome-lysosome fusion.",
        disease: "**Pulmonary nocardiosis:** cavitary pneumonia, lung abscess in immunocompromised (steroids, transplant, HIV, CGD).
**CNS:** brain abscess (hematogenous spread from lung).
**Cutaneous:** sporotrichoid spread (nodules along lymphatics) from soil inoculation — in immunocompetent.",
        tx: "**TMP-SMX** (drug of choice — long course 6–12 months). Severe/CNS disease: add imipenem or amikacin.",
        pearl: "**Nocardia vs Actinomyces:** both branch, but Nocardia is **aerobic + weakly acid-fast**, Actinomyces is **anaerobic + NOT acid-fast**. 'No car drives (aerobic) through acid (acid-fast).' CNS abscess + immunocompromised + cavitary lung lesion = Nocardia.
**TMP-SMX** treats both Nocardia and PCP — Step 1 high-yield."
      }
    ]
  },
  {
    group: "Gram-Negative Cocci",
    color: "bact",
    organisms: [
      {
        name: "Neisseria — Overview",
        summary: "GN diplococci, oxidase+, aerobic — two pathogens: N. meningitidis (meningitis/sepsis) and N. gonorrhoeae (STI). Both require chocolate agar; both have polysaccharide capsules (meningitidis only)",
gram: "GN Diplococci",
virulence: "**Pili:** attachment and immune evasion (phase variation).
**Outer membrane proteins (Opa):** cell invasion.
**IgA protease:** cleaves secretory IgA.
**LOS (lipo-oligosaccharide):** endotoxin-like activity. N. meningitidis: **polysaccharide capsule** (major virulence; gonorrhoeae has NO capsule).",
        disease: "See individual organism cards. Class concept: **complement deficiency (C5–C9, terminal complement)** → recurrent Neisseria infections. MAC (membrane attack complex) is critical for killing Neisseria.",
        tx: "Both: **ceftriaxone** (first-line). Both: **penicillin** still works for meningitidis. Gonorrhoeae: increasingly resistant — ceftriaxone 500mg IM single dose now standard.",
        pearl: "**Terminal complement (C5–C9) deficiency** = recurrent Neisseria infections (meningitidis AND gonorrhoeae).
**Oxidase positive** = key lab characteristic. Both grow on
**Thayer-Martin agar** (VCN: vancomycin, colistin, nystatin — selective). Gonorrhoeae ONLY grows on Thayer-Martin (not nutrient agar); meningitidis grows on blood or chocolate agar."
      },
      {
        name: "Neisseria meningitidis",
        summary: "Encapsulated GN diplococcus — #1 bacterial meningitis in teens/young adults; petechial rash + Waterhouse-Friderichsen; vaccine-preventable; rifampin prophylaxis for contacts",
gram: "GN Diplococci (encapsulated)",
virulence: "**Polysaccharide capsule** (serotypes A, B, C, W, Y, X).
**Endotoxin (LPS)** → massive inflammatory cascade → DIC, shock. Pili for nasopharyngeal attachment and spread.",
        disease: "**Bacterial meningitis:** teens/college students (dorms), asplenic patients. Classic triad: fever, nuchal rigidity, altered mental status.
**Petechial/purpuric rash** (non-blanching) = meningococcemia — sign of DIC.
**Waterhouse-Friderichsen syndrome:** bilateral adrenal hemorrhage → acute adrenal insufficiency → refractory shock. Rapid death possible within hours.",
        tx: "**Ceftriaxone** (IV, immediately). Dexamethasone before/with first dose.
**Rifampin prophylaxis** for close contacts (or ciprofloxacin, ceftriaxone IM single dose).",
        pearl: "**Non-blanching petechial rash + meningitis = medical emergency** — treat before LP if suspicion is high. Waterhouse-Friderichsen = adrenal hemorrhage → do NOT delay steroids.
**Rifampin prophylaxis** for household contacts within 24h. Vaccine (MenACWY + MenB) required for college dorms. Carrier state = nasopharynx (asymptomatic)."
      },
      {
        name: "Neisseria gonorrhoeae",
        summary: "GN diplococcus, no capsule — STI: urethritis/cervicitis, PID, DGI (disseminated gonococcal infection); Fitz-Hugh-Curtis; neonatal ophthalmia; treat with ceftriaxone",
gram: "GN Diplococci (NO capsule)",
virulence: "**Pili** (phase variation — evades immune response).
**Opa proteins** (cell invasion).
**IgA protease.** No capsule (unlike meningitidis). **β-lactamase** plasmid — increasing penicillin resistance.",
        disease: "**Males:** urethritis (purulent discharge, dysuria).
**Females:** cervicitis (often asymptomatic or mild discharge), PID (salpingitis → infertility, ectopic pregnancy).
**DGI:** 1–3% — hematogenous spread → migratory polyarthritis → septic arthritis (wrist, knee) + skin lesions (pustular/hemorrhagic).
**Fitz-Hugh-Curtis syndrome:** perihepatitis (RUQ pain, 'violin string' adhesions).
**Neonates:** ophthalmia neonatorum (prevented by erythromycin eye drops at birth).",
        tx: "**Ceftriaxone 500mg IM** (single dose) + **azithromycin or doxycycline** (treat presumptive chlamydia co-infection). DGI: IV ceftriaxone.",
        pearl: "**Always treat for both gonorrhea AND chlamydia** (co-infection common).
**Ceftriaxone** is now gold standard — fluoroquinolone resistance is widespread.
**DGI triad:** pustular skin lesions + tenosynovitis + migratory polyarthritis (non-purulent). Culture requires Thayer-Martin; NAAT is preferred diagnostic. Neonatal prophylaxis = erythromycin ointment."
      }
    ]
  },
  {
    group: "Gram-Negative Bacilli – Enteric",
    color: "bact",
    organisms: [
      {
        name: "Escherichia coli",
        summary: "Lac+, indole+, IMViC: ++-− — 6 pathotypes; UTI (#1), neonatal meningitis (K1 capsule), EHEC → HUS",
gram: "GN Bacillus (lactose fermenter)",
virulence: "**ETEC:** heat-labile (LT, ↑cAMP like cholera) + heat-stable (ST, ↑cGMP like STa) toxins.
**EPEC:** effacement, no toxin.
**EHEC (O157:H7):** Shiga-like toxin (verotoxin) → HUS.
**EIEC:** invades colonic mucosa (like Shigella).
**EAEC:** aggregative, chronic diarrhea.",
        disease: "**UTI** (#1 cause overall).
**Neonatal meningitis** (K1 polysaccharide capsule — same as group B meningococcus).
**Travelers diarrhea** (ETEC — watery).
**HUS** (EHEC O157:H7 — **bloody diarrhea** → **no antibiotics** — ↑Shiga toxin release → microangiopathic hemolytic anemia, thrombocytopenia, acute renal failure).",
        tx: "UTI: TMP-SMX or fluoroquinolone. Travelers diarrhea (ETEC): azithromycin or fluoroquinolone.
**EHEC O157:H7: NO antibiotics** (↑HUS risk). Neonatal meningitis: cefotaxime + ampicillin.",
        pearl: "**EHEC = NO antibiotics** — one of the classic Step 1 traps. Sorbitol-non-fermenting on MacConkey agar.
**HUS triad:** microangiopathic hemolytic anemia + thrombocytopenia + acute kidney injury.
**Shiga toxin** → inhibits 60S ribosome (cleaves 28S rRNA) → endothelial damage especially in kidney. ETEC = most common cause of travelers diarrhea."
      },
      {
        name: "Salmonella",
        summary: "H2S+, non-lactose fermenter — intracellular; typhi causes enteric fever (rose spots, Peyer's patches); non-typhi causes diarrhea from eggs/poultry",
gram: "GN Bacillus (non-lactose fermenter)",
virulence: "**Survives intracellularly** in macrophages (does not produce urease). Vi capsule in typhi. SPI-1/SPI-2 pathogenicity islands.",
        disease: "**S. typhi (typhoid/enteric fever):** 'stepladder' fever, rose spots (trunk), hepatosplenomegaly, relative bradycardia, constipation early→ diarrhea. Transmitted fecal-oral (contaminated water). Chronic carrier: gallbladder (bacteremia → bile → feces).
**Non-typhi Salmonella:** food poisoning — eggs, poultry, pet reptiles.
**Osteomyelitis in sickle cell disease** (most common cause).",
        tx: "Typhoid fever: **ceftriaxone or fluoroquinolone** (azithromycin if resistant). Non-typhi gastroenteritis: usually self-limited; antibiotics if bacteremia/immunocompromised.",
        pearl: "**Sickle cell + osteomyelitis = Salmonella** (most common cause — due to bone infarcts and functional asplenia). Chronic typhoid carrier state: gallbladder colonization → 'Typhoid Mary.'
**No lactose fermentation** (MacConkey clear);
**H2S positive** (TSI agar black precipitate). Rose spots: blanching macules on trunk in week 2."
      },
      {
        name: "Shigella",
        summary: "Non-motile, non-H2S, no lactose — invasive bloody dysentery, very low inoculum (10 organisms); Shiga toxin in S. dysenteriae",
gram: "GN Bacillus (non-lactose fermenter)",
virulence: "**Invasin** — invades colonic epithelium directly.
**Shiga toxin** (S. dysenteriae only): inhibits 60S ribosome (same mechanism as EHEC's Shiga-like toxin). No H2S, non-motile, very low ID50 (~10 organisms).",
        disease: "**Bacillary dysentery:** fever, cramping, tenesmus, bloody mucoid diarrhea. Invades M cells in Peyer's patches → spreads cell-to-cell (actin). Complications: HUS (S. dysenteriae), reactive arthritis (HLA-B27), seizures in children (Shigella encephalopathy).",
        tx: "**Azithromycin or fluoroquinolone** (shortens duration, reduces spread). Antibiotics ARE indicated (unlike EHEC). Ciprofloxacin for adults.",
        pearl: "**Key differentiator from EHEC:** Shigella = **give antibiotics**; EHEC = **no antibiotics**. Both cause bloody diarrhea. Shigella: RBCs and WBCs on stool smear. Very low inoculum → easily spread person-to-person (daycare centers, prisons). No animal reservoir (unlike Salmonella)."
      },
      {
        name: "Klebsiella pneumoniae",
        summary: "Mucoid capsule, currant jelly sputum — pneumonia in alcoholics/diabetics; UTI; #1 nosocomial GN pneumonia",
gram: "GN Bacillus (lactose fermenter)",
virulence: "**Large polysaccharide capsule** (mucoid, hyperviscous strains) → antiphagocytic. ESBL/KPC-producing strains (carbapenem-resistant).",
        disease: "**Pneumonia:** alcoholics, diabetics, COPD — lobar or multilobar, upper lobe cavitation, 'currant jelly sputum' (necrotic mucosa + blood).
**UTI:** #2 gram-negative UTI after E. coli.
**Liver abscess** (Klebsiella hypermucoviscous strain — endogenous/hematogenous, esp. in East Asian populations). Nosocomial bloodstream infections.",
        tx: "Cephalosporins (if susceptible). ESBL: carbapenems. Carbapenem-resistant Klebsiella (KPC): polymyxin B/colistin ± other agents.",
        pearl: "**Currant jelly sputum** = Klebsiella or Moraxella (rarely). The 'mucoviscosity test' (string sign) for hypervirulent strains. Klebsiella has a **string sign > 5mm** (mucoviscous). UTI in hospitalized patients with urinary catheter: common Klebsiella habitat."
      },
      {
        name: "Enterobacter & Serratia",
        summary: "Nosocomial lactose-fermenting GN rods — UTI, pneumonia, bacteremia in hospitalized/immunocompromised; intrinsically resistant to ampicillin; AmpC β-lactamase → resistance emerges on 3rd-gen cephalosporins",
gram: "GN Bacillus (lactose fermenter)",
virulence: "**AmpC β-lactamase** (chromosomally encoded, inducible — de-repressed during treatment with 3rd-gen cephalosporins → treatment failure). Serratia: red pigment (prodigiosin) in some strains. Both form biofilms on catheters and ventilators.",
        disease: "**Enterobacter cloacae/aerogenes:** nosocomial UTI (catheter-associated), hospital-acquired/ventilator-associated pneumonia, bacteremia in ICU patients, wound infections.
**Serratia marcescens:** nosocomial pneumonia, UTI, endocarditis in IV drug users (right-sided), bacteremia. Red-pigmented colonies or secretions = classic Serratia exam clue. Both particularly dangerous in neonates and immunocompromised patients.",
        tx: "**Carbapenems** (imipenem, meropenem) for serious infections. Piperacillin-tazobactam or **cefepime** (4th-gen — AmpC-stable) for less severe.
**Avoid 3rd-gen cephalosporins** (ceftriaxone, cefotaxime) — AmpC derepression causes resistance emergence even if initially susceptible ('inoculum effect').",
        pearl: "**SPACE** organisms = classic chromosomal AmpC producers: **S**erratia, **P**seudomonas, **A**cinetobacter, **C**itrobacter, **E**nterobacter.
**Serratia red pigment** (prodigiosin) is produced at room temperature, not 37°C — so infections are rarely visibly red in vivo, but a classic board clue in lab/environmental contamination scenarios. Intrinsic ampicillin resistance = no role for penicillin G or ampicillin."
      },
      {
        name: "Helicobacter pylori",
        summary: "Urease-positive, microaerophilic, curved rod — #1 cause of peptic ulcer disease and gastric cancer/MALT lymphoma",
gram: "GN Bacillus (curved, microaerophilic)",
virulence: "**Urease** (produces NH3 → alkalinizes microenvironment → survives gastric pH)
**CagA** (cytotoxin-associated antigen — injected into cells, disrupts tight junctions, associated with malignancy)
VacA (vacuolating cytotoxin)
Flagella.",
        disease: "**Peptic ulcer disease:** antral gastritis → duodenal ulcer; body gastritis → gastric ulcer.
**Gastric adenocarcinoma** (intestinal type — most common).
**MALT lymphoma** (marginal zone B-cell — may regress with H. pylori eradication). Achlorhydria in chronic/severe cases.",
        tx: "**Triple therapy:** PPI + clarithromycin + amoxicillin × 14 days.
**Quadruple therapy** if clarithromycin resistance suspected: PPI + bismuth + metronidazole + tetracycline. Confirm eradication: **urea breath test** or stool antigen test (not serology — IgG stays elevated).",
        pearl: "**Diagnosis:** urea breath test (active infection, non-invasive), stool antigen (active), serology (not useful for eradication confirmation), endoscopic biopsy with rapid urease test (CLOtest).
**Test of cure:** urea breath test or stool antigen — wait 4 weeks post-treatment, hold PPI.
**MALT lymphoma** may regress completely with antibiotics — H. pylori eradication is first-line treatment."
      },
      {
        name: "Pseudomonas aeruginosa",
        summary: "Oxidase+, non-fermenter, aerobic, grape-like odor, blue-green pigment — CF lungs, burns, nosocomial, hot tub folliculitis; intrinsically resistant",
gram: "GN Bacillus (non-fermenter)",
virulence: "**Exotoxin A** (ADP-ribosylates EF-2 — same mechanism as diphtheria toxin). Alginate biofilm (CF). Pyocyanin (blue-green pigment, generates ROS). Pyoverdine (siderophore). Elastase, proteases.",
        disease: "**CF patients:** mucoid strains in lung (alginate biofilm) → progressive obstructive disease.
**Burns:** #1 cause of death in burn patients.
**Nosocomial:** ventilator-associated pneumonia, catheter-associated UTI.
**Osteomyelitis:** puncture wounds through rubber-soled shoes (sneakers).
**Hot tub folliculitis** (skin rash after hot tub exposure).
**Ecthyma gangrenosum:** necrotic skin ulcer in neutropenic patients (pathognomonic).",
        tx: "**Anti-pseudomonal penicillins** (pip-tazo), cefepime, ceftazidime, carbapenems (NOT ertapenem), fluoroquinolones, aztreonam, aminoglycosides. Often requires **combination therapy.** Intrinsic resistance to most β-lactams, narrow spectrum agents.",
        pearl: "**Ecthyma gangrenosum** in neutropenic patient = pathognomonic for Pseudomonas bacteremia.
**Exotoxin A = same as diphtheria toxin mechanism** (ADP-ribosylates EF-2). 'You need a specific anti-pseudomonal agent — cefazolin won't cut it.' Osteomyelitis after nail through sneaker = Pseudomonas (not Staph)."
      },
      {
        name: "Yersinia enterocolitica",
        summary: "GN rod from undercooked pork/contaminated milk — bloody diarrhea mimicking Crohn's, pseudoappendicitis (mesenteric adenitis); cold-enrichment growth",
gram: "GN Rod (facultative anaerobe)",
virulence: "**Invasin** (enters Peyer's patches M cells).
**Yersiniabactin** siderophore (iron acquisition). Resists complement. Grows at **4°C** (cold enrichment — like Listeria). Urease positive.",
        disease: "**Enterocolitis:** fever, bloody diarrhea, RLQ pain — mimics Crohn's disease or appendicitis. Classic: **pseudoappendicitis** (mesenteric adenitis — RLQ pain with normal appendix). Infants: bacteremia.
**Post-infectious:** reactive arthritis (HLA-B27 associated), erythema nodosum, thyroiditis.",
        tx: "Mild: supportive. Severe/bacteremia: fluoroquinolones or TMP-SMX. Resistant to penicillins.",
        pearl: "**Pseudoappendicitis:** child with RLQ pain, fever — operated on for presumed appendicitis, appendix is normal, mesenteric nodes are enlarged (mesenteric adenitis = Yersinia). Source: undercooked pork, contaminated milk/water, household pets.
**Post-infectious sequelae:** reactive arthritis = classic triad (urethritis + conjunctivitis + arthritis, 'can't pee, can't see, can't climb a tree')."
      },
      {
        name: "Campylobacter jejuni",
        summary: "Most common bacterial cause of diarrhea in the US — undercooked poultry, comma/S-shaped GN rod, oxidase+; associated with Guillain-Barré and reactive arthritis",
gram: "GN Curved Rod (S-shaped or comma-shaped)",
virulence: "**Flagella** (motility, colonization).
**Cytolethal distending toxin** (CDT). Survives gastric acid. Grows at **42°C** (thermophilic — selective culture condition). Oxidase positive.",
        disease: "**Acute gastroenteritis:** fever, bloody diarrhea, crampy abdominal pain (can mimic IBD or appendicitis).
**Post-infectious:**
**Guillain-Barré syndrome** (GBS) — molecular mimicry: C. jejuni lipooligosaccharide mimics gangliosides (GM1) → autoimmune demyelination 1–4 weeks post-infection.
**Reactive arthritis** (HLA-B27).
**Miller Fisher syndrome** (variant of GBS: ophthalmoplegia, ataxia, areflexia).",
        tx: "Most self-limited (5–7 days). Severe/bacteremia: **azithromycin** (first-line) or fluoroquinolones (increasing resistance). Do NOT use fluoroquinolones empirically.",
        pearl: "**#1 bacterial cause of diarrhea** in the US.
**Guillain-Barré** is the critical Step 1 association — ascending flaccid paralysis 1–4 weeks after bloody diarrhea → think Campylobacter as trigger. Grows at 42°C on Skirrow's (selective) media.
**Comma-shaped GN rod = Campylobacter** (and Vibrio cholerae). Poultry is the primary reservoir."
      },
      {
        name: "Vibrio cholerae",
        summary: "Comma-shaped GN rod — rice-water diarrhea, massive secretory diarrhea without invasion; cholera toxin activates Gs → permanent ↑cAMP; treat with ORS + doxycycline",
gram: "GN Curved Rod (comma-shaped)",
virulence: "**Cholera toxin (CT):** A subunit ADP-ribosylates Gs → permanently activates adenylyl cyclase → ↑↑cAMP → CFTR chloride channel open → massive Cl⁻/water secretion into lumen. No mucosal invasion (non-invasive).",
        disease: "**Cholera:** profuse **rice-water diarrhea** (10–20 L/day) + vomiting → rapid dehydration, hypovolemic shock, metabolic acidosis, hypokalemia. No blood, no WBCs (non-invasive). Endemic in developing countries; epidemic outbreaks (Haiti 2010). Fecal-oral (contaminated water/shellfish).",
        tx: "**ORS (oral rehydration solution)** = cornerstone (WHO formula: glucose + NaCl + KCl + NaHCO₃). IV fluids for severe cases.
**Doxycycline** (reduces duration and shedding). Vaccine available.",
        pearl: "**Cholera toxin = permanently active Gs** (same mechanism as pertussis toxin is permanently active Gi — they are opposites). Rice-water diarrhea = massive, watery, NO blood, NO WBCs.
**ORS works because** glucose co-transports Na⁺ via SGLT1 even when adenylyl cyclase is maximally active. V. vulnificus: different species — raw oysters → severe wound infection/sepsis in liver disease patients."
      },
      {
        name: "Proteus mirabilis",
        summary: "Urease+, swarming motility — UTI with struvite kidney stones (staghorn calculi), alkaline urine; associated with long-term catheter use",
gram: "GN Rod (lactose non-fermenter, urease+)",
virulence: "**Urease** (splits urea → ammonia → alkaline urine → struvite precipitation).
**Swarming motility** (concentric rings on agar plate). Fimbriae for uroepithelial attachment. Flagella.",
        disease: "**UTI:** complicated UTIs in catheterized patients, hospital-acquired.
**Struvite (magnesium ammonium phosphate) kidney stones = staghorn calculi** — fill renal pelvis; form because alkaline urine from urease activity causes precipitation. Rarely: wound infections, bacteremia.",
        tx: "TMP-SMX or fluoroquinolones. Intrinsically resistant to tetracycline and nitrofurantoin. Surgical removal/lithotripsy for staghorn calculi.",
        pearl: "**Urease + alkaline urine + struvite stones = Proteus** (also Klebsiella, Pseudomonas, Staph saprophyticus — but Proteus is the classic).
**Staghorn calculi** fill the renal pelvis — visible on plain X-ray (radiopaque). Nitrofurantoin does NOT work against Proteus. 'Proteus = the shapeshifter (swarming motility) with stone-forming urine.'"
      }
    ]
  },
  {
    group: "Gram-Negative Bacilli – Respiratory",
    color: "bact",
    organisms: [
      {
        name: "Haemophilus influenzae",
        summary: "Requires factors X + V (chocolate agar) — epiglottitis (type b, unvaccinated), otitis, meningitis; β-lactamase resistance common",
gram: "GN Coccobacillus",
virulence: "**Polyribitol phosphate (PRP) capsule** (type b — most virulent, prevented by Hib vaccine). IgA protease.",
        disease: "**Hib (type b, unvaccinated):** epiglottitis ('cherry red epiglottis,' tripod position, thumb sign on lateral neck X-ray), meningitis, pneumonia, bacteremia, septic arthritis.
**Unencapsulated (non-typeable):** otitis media (#1 bacterial cause in kids along with S. pneumoniae), sinusitis, COPD exacerbations.",
        tx: "Epiglottitis: secure airway first (intubation in OR), then **ceftriaxone**. Meningitis: ceftriaxone. Otitis/sinusitis: amoxicillin-clavulanate.
**Hib vaccine** (conjugate) dramatically reduced invasive disease.",
        pearl: "**Chocolate agar** required (X factor = hemin, V factor = NAD — released by RBC lysis).
**Satellite phenomenon:** H. influenzae grows around S. aureus colonies (which provide NAD). Epiglottitis: **do not examine throat** (may cause complete obstruction) → take to OR. Thumb sign on lateral neck XR."
      },
      {
        name: "Bordetella pertussis",
        summary: "Whooping cough — catarrhal/paroxysmal/convalescent; toxin ↑cAMP, ↑lymphocytes; treat with azithromycin in catarrhal phase",
gram: "GN Coccobacillus (small, intracellular)",
virulence: "**Pertussis toxin** (A-B, ADP-ribosylates Gi protein → ↑cAMP → impairs phagocyte killing, causes lymphocytosis).
**Filamentous hemagglutinin (FHA):** adherence to cilia. Tracheal cytotoxin (kills ciliated cells).",
        disease: "**3 stages:** (1)
**Catarrhal** (1–2 weeks): most infectious, mild URI, low fever. (2)
**Paroxysmal** (2–6 weeks): severe paroxysmal cough → inspiratory 'whoop' → post-tussive vomiting — **lymphocytosis** (pertussis toxin). (3)
**Convalescent**: weeks of resolving cough. Complications: subconjunctival hemorrhage, pneumonia, apnea in infants (can be fatal — no whoop in infants).",
        tx: "**Azithromycin** (or erythromycin, TMP-SMX) — effective in catarrhal phase; reduces infectivity in paroxysmal. Prevention:
**DTaP** series +
**Tdap** booster (pregnant women, healthcare workers).",
        pearl: "**Lymphocytosis** (atypical lymphocytes, high WBC 20,000–50,000 with >80% lymphocytes) is a classic clue. Culture on
**Bordet-Gengou (BG) agar** (charcoal-blood agar) — forms 'mercury drop' colonies. Pertussis toxin inhibits Gi → ↑cAMP."
      },
      {
        name: "Legionella pneumophila",
        summary: "Atypical pneumonia — air conditioning/water towers, hyponatremia, no person-to-person spread; silver stain, BCYE agar",
gram: "GN Bacillus (weakly, Dieterle silver stain)",
virulence: "**Intracellular parasite** of alveolar macrophages. Dot/Icm type IV secretion system — prevents phagosome-lysosome fusion. Lives in biofilms in water systems.",
        disease: "**Legionnaires' disease:** severe pneumonia with extrapulmonary features — **hyponatremia** (SIADH), diarrhea, confusion, elevated LFTs, hematuria. Incubation 2–10 days. Source: cooling towers, hot water systems, hospital water.
**No person-to-person transmission.** Pontiac fever: mild flu-like illness without pneumonia.",
        tx: "**Azithromycin** (drug of choice) or fluoroquinolone. β-lactams ineffective (intracellular organism).",
        pearl: "**Classic triad:** pneumonia + hyponatremia + diarrhea in an elderly male hotel guest (or after hospital water exposure).
**Diagnosis:** urine antigen test (serogroup 1 — most sensitive/specific for L. pneumophila sg 1). Culture:
**BCYE agar** (buffered charcoal yeast extract — supplemented with L-cysteine and iron). Gram stain often negative — use **silver stain or DFA.** No person-to-person spread (clusters = common source outbreak)."
      }
    ]
  },
  {
    group: "Gram-Negative Bacilli – Zoonotic",
    color: "bact",
    organisms: [
      {
        name: "Bartonella henselae",
        summary: "Cat scratch disease — regional lymphadenopathy after cat scratch/bite; bacillary angiomatosis in HIV; treat mild cases conservatively",
gram: "GN Rod (intracellular, Warthin-Starry silver stain)",
virulence: "Intracellular — infects erythrocytes and endothelial cells. Angiogenic factors (bacillary angiomatosis). Transmitted by **cat scratch/bite** or cat flea feces inoculated into wound.",
        disease: "**Cat scratch disease (immunocompetent):** papule at scratch site → **tender regional lymphadenopathy** (axillary, cervical) that may suppurate; self-limited 2–4 months; low-grade fever.
**Bacillary angiomatosis (HIV/immunocompromised):** vascular proliferative skin lesions (resembling Kaposi's sarcoma — but bacteria-caused); can involve liver (peliosis hepatis), spleen, bone marrow.
**Trench fever:** B. quintana (louse-borne).",
        tx: "Cat scratch disease: usually **self-limited** (no antibiotics). Severe/lymphadenitis: azithromycin.
**Bacillary angiomatosis:** **doxycycline or erythromycin** (long course in HIV).",
        pearl: "**Cat scratch disease** = child + tender lymphadenopathy + history of cat contact. Warthin-Starry silver stain shows pleomorphic GN rods in tissue.
**Bacillary angiomatosis** looks like Kaposi's sarcoma but is **bacterial** (treatable with antibiotics). Peliosis hepatis (blood-filled hepatic cysts) = B. henselae in HIV."
      },
      {
        name: "Brucella species",
        summary: "Undulant fever — zoonosis from farm animals/unpasteurized dairy; intracellular, aerobic; classic undulating fever, arthralgia, hepatosplenomegaly; treat doxycycline + rifampin",
gram: "GN Coccobacillus (intracellular)",
virulence: "Intracellular pathogen — survives in macrophages. Smooth LPS (resists complement). Infects via mucous membranes, skin breaks, ingestion (unpasteurized), inhalation (lab hazard).",
        disease: "**Brucellosis (undulant fever):** insidious onset — **undulating (relapsing) fever**, malaise, arthralgia, night sweats, hepatosplenomegaly, lymphadenopathy. Chronic complications: sacroiliitis, osteomyelitis, epididymo-orchitis, endocarditis, neurobrucellosis. Reservoirs: cattle (B. abortus), pigs (B. suis), goats/sheep (B. melitensis), dogs (B. canis).",
        tx: "**Doxycycline + rifampin × 6 weeks** (adults). Doxycycline + streptomycin (severe). Long treatment required to prevent relapse.",
        pearl: "**Undulant fever** = Brucella (the textbook buzzword). Exposure: farm workers, veterinarians, abattoir workers, consumption of unpasteurized cheese/milk.
**Bioterrorism potential** agent (Category B). Lab workers at risk — culture generates aerosols → BSL-3 precautions. Rose spots and splenomegaly also seen in typhoid (Salmonella) — distinguish by exposure history."
      },
      {
        name: "Francisella tularensis",
        summary: "Tularemia — tick/rabbit/deer fly exposure; ulceroglandular form most common; highly infectious, aerosol risk, bioterrorism agent; treat gentamicin or streptomycin",
gram: "GN Coccobacillus (small, intracellular)",
virulence: "Extremely **low infectious dose** (10 organisms can cause disease). Intracellular — survives in macrophages. Capsule. BSL-3 agent. Tick vector (Dermacentor), deer flies, direct contact with rabbits.",
        disease: "**Ulceroglandular (most common 75–80%):** skin ulcer at inoculation site + regional lymphadenopathy.
**Oculoglandular:** conjunctivitis + periauricular LAD.
**Typhoidal:** septicemic — no skin lesion, high fever, possible pneumonia.
**Pneumonic:** most severe — from inhalation (lab exposure, bioterrorism); high mortality if untreated.",
        tx: "**Gentamicin or streptomycin** (aminoglycosides — first-line).
**Doxycycline** (alternative, higher relapse rate).
**Ciprofloxacin** (alternative). Prolonged treatment (14 days).",
        pearl: "**Rabbit handler + skin ulcer + swollen lymph nodes = Tularemia.** Also: tick bite in endemic area (Midwest/South US).
**Bioterrorism Category A agent** (along with anthrax, smallpox, plague, botulinum, viral hemorrhagic fevers). Lab culture = extreme hazard (aerosol-forming — notify lab). Doxycycline adequate for prophylaxis post-exposure."
      },
      {
        name: "Pasteurella multocida",
        summary: "Cat/dog bite or scratch → rapidly progressive cellulitis within 24h; GN coccobacillus; treat with amoxicillin-clavulanate",
gram: "GN Coccobacillus",
virulence: "Polysaccharide capsule. Endotoxin. Normal flora of animal oral cavity (cats and dogs). Inoculated directly into tissue via bite or scratch.",
        disease: "**Bite wound infection:** rapid onset cellulitis within **24–48 hours** of cat or dog bite/scratch. Erythema, swelling, pain, purulent discharge at wound site. Can progress to tenosynovitis, septic arthritis, osteomyelitis (especially in immunocompromised). Bacteremia/meningitis in elderly/asplenic.",
        tx: "**Amoxicillin-clavulanate** (first-line for animal bites — covers Pasteurella + anaerobes). Doxycycline if penicillin-allergic.
**Do NOT use first-generation cephalosporins** (poor activity vs Pasteurella). Clean wound thoroughly.",
        pearl: "**Cat bite > dog bite for Pasteurella** (cats have deeper puncture wounds). Rapid cellulitis within 24h after animal bite = Pasteurella.
**Amoxicillin-clavulanate** is the go-to for any animal bite. Distinguish from Bartonella henselae (cat scratch → lymphadenopathy, not rapid cellulitis). Also consider Capnocytophaga (dog bite in asplenic patients → rapid fatal sepsis)."
      }
    ]
  },
  {
    group: "Mycobacteria",
    color: "bact",
    organisms: [
      {
        name: "Mycobacterium leprae",
        summary: "Leprosy — cannot be cultured in vitro; armadillo reservoir; invades Schwann cells and skin macrophages; tuberculoid vs lepromatous forms; treat with dapsone + rifampin ± clofazimine",
gram: "Acid-fast bacillus (weakly acid-fast — not Gram stained)",
virulence: "**Cannot be cultured in vitro** (grown in armadillo footpads or mouse footpads). Infects **Schwann cells** (peripheral nerve demyelination) and skin macrophages. Grows at **cool temperatures** (prefers extremities, skin, peripheral nerves, testes — not core body temp). Long incubation (2–10 years).",
        disease: "**Tuberculoid (paucibacillary):** strong Th1 response — few organisms, well-defined hypopigmented anesthetic skin plaques, enlarged peripheral nerve (auricular, ulnar), minimal deformity.
**Lepromatous (multibacillary):** weak Th1 response (Th2/anergy) — many organisms, diffuse skin infiltration, **leonine facies** (lion face), saddle-nose deformity, bilateral symmetric peripheral neuropathy, testicular involvement (gynecomastia), iritis, nerve damage.
**Borderline:** intermediate forms.",
        tx: "**Multi-drug therapy (MDT):** Tuberculoid: **dapsone + rifampin × 6 months**. Lepromatous: **dapsone + rifampin + clofazimine × 12 months**. Dapsone resistance → always use combination. Clofazimine: reddish-brown skin discoloration.",
        pearl: "**Cannot culture** (no artificial media) — diagnosis by clinical exam + biopsy + AFB smear of skin slit.
**Armadillo** = US reservoir (nine-banded armadillo, Southern US). Lepromatous = low immunity = high bacillary load = more severe; Tuberculoid = high immunity = low bacillary load = milder.
**Dapsone** causes hemolytic anemia in
**G6PD deficiency** — screen before use. Loss of sensation → repeated trauma → secondary infection → deformity."
      }
    ]
  },
  {
    group: "Spirochetes",
    color: "bact",
    organisms: [
      {
        name: "Leptospira interrogans",
        summary: "Leptospirosis — water/soil contaminated with animal urine; biphasic illness; Weil disease (icteric leptospirosis) = jaundice + renal failure + hemorrhage; treat doxycycline",
gram: "Spirochete (not Gram stained — darkfield microscopy)",
virulence: "Hooked-end spirochete — penetrates intact mucous membranes or abraded skin. Survives in water/soil for weeks. Zoonotic reservoir: rats, dogs, livestock, wildlife (urine-contaminated water/soil).",
        disease: "**Biphasic illness. Phase 1 (leptospiremic, 5–7d):** fever, headache, myalgias (severe calf pain), conjunctival suffusion (red eyes without discharge), rash.
**Phase 2 (immune, 1–3d later):** either resolves OR progresses to
**Weil disease (icteric leptospirosis, 5–10%):** jaundice + acute kidney injury + hemorrhage (thrombocytopenia) + myocarditis. Uveitis can persist.",
        tx: "Mild: **doxycycline** (also prophylaxis). Severe/Weil disease:
**IV penicillin G** or ceftriaxone. Prophylaxis: doxycycline 200mg/week (military, flood workers).",
        pearl: "**Weil disease** = severe leptospirosis = jaundice + renal failure + hemorrhage.
**Conjunctival suffusion** (injected sclera without exudate) is a classic early sign. Exposure: flood water, sewage, rat-infested areas, swimming in contaminated water.
**Darkfield microscopy** of blood/urine (early); serology (MAT) later. Calf muscle tenderness = characteristic myalgia. Common in tropics, rainy seasons."
      }
    ]
  },
  {
    group: "Gram-Indeterminate & Atypical Bacteria",
    color: "bact",
    organisms: [
      {
        name: "Mycobacterium tuberculosis",
        summary: "Acid-fast, aerobic, cord factor — primary/secondary TB; Ghon complex; classic upper lobe cavitation; treat RIPE",
gram: "Acid-fast bacillus (not Gram stained)",
virulence: "**Cord factor** (trehalose dimycolate — impairs phagosome-lysosome fusion, produces granulomas).
**Sulfatides** (inhibit phagosome maturation).
**Wax D** (mycoside — adjuvant, slows killing). Slow-growing (doubling time ~24h).",
        disease: "**Primary TB:** asymptomatic, Ghon focus (lower/mid lung) + hilar LAD = Ghon complex → Ranke complex with calcification.
**Secondary (reactivation) TB:** upper lobe cavitation, hemoptysis, night sweats, weight loss, low-grade fever.
**Miliary TB:** hematogenous spread → millet seed lesions on CXR.
**Extrapulmonary:** lymphadenitis (scrofula), Pott's disease (vertebral), renal TB (sterile pyuria), Addison's disease (adrenal), CNS (meningitis, tuberculoma).",
        tx: "**RIPE** × 2 months (Rifampin + Isoniazid + Pyrazinamide + Ethambutol), then RI × 4 months.
**Latent TB:** INH × 9 months (or rifampin × 4 months, or INH/rifapentine × 12 doses). Check TST or IGRA before TNF-α inhibitors.",
        pearl: "**RIPE side effects:** Rifampin → red/orange body fluids, rifamycin interactions (CYP inducer). Isoniazid → **peripheral neuropathy** (give B6/pyridoxine), hepatotoxicity, SLE-like reaction. Pyrazinamide → **hyperuricemia**, hepatotoxicity. Ethambutol → **optic neuritis** (red-green color blindness). Streptomycin (old regimen) → ototoxicity."
      },
      {
        name: "Chlamydia Species",
        summary: "Obligate intracellular (EB/RB lifecycle, no cell wall) — C. trachomatis: STI/PID/trachoma/LGV; C. pneumoniae: atypical pneumonia in young adults; C. psittaci: psittacosis from bird exposure",
gram: "Obligate intracellular (no cell wall — no Gram stain)",
virulence: "**Elementary body (EB):** infectious, metabolically inactive — survives extracellularly, enters via endocytosis.
**Reticulate body (RB):** replicates intracellularly in inclusion vacuole. Cannot synthesize ATP (obligate energy parasite). All species: no cell wall → β-lactams ineffective.",
        disease: "**C. trachomatis — Serovars D–K:** most common bacterial STI in US. Urethritis/cervicitis (often asymptomatic), PID (→ ectopic pregnancy, infertility), epididymo-orchitis.
**Neonatal:** conjunctivitis (5–14 days) + pneumonia ('staccato' cough, eosinophilia, 3–12 weeks).
**Reactive arthritis** (Reiter: urethritis + arthritis + conjunctivitis).
**Serovars A–C:** trachoma (repeated infection → scarring → entropion → blindness — #1 infectious cause of blindness worldwide).
**Serovars L1–L3 (LGV):** painless genital ulcer → tender inguinal buboes → proctitis.
**C. pneumoniae:** atypical ('walking') pneumonia in young adults — gradual onset, dry cough, low-grade fever, bilateral interstitial infiltrates. Seroprevalence ~50% by adulthood.
**C. psittaci (psittacosis/ornithosis):** exposure to infected birds (parrots, parakeets, pigeons, poultry) → severe atypical pneumonia with systemic features (headache, myalgia, hepatosplenomegaly, relative bradycardia). Reportable disease.",
        tx: "All species: **doxycycline** (first-line for most) or **azithromycin**. C. trachomatis STI: azithromycin 1g × 1 or doxycycline × 7 days. LGV: doxycycline × 21 days. Neonatal conjunctivitis: oral erythromycin. C. pneumoniae/psittaci: doxycycline or azithromycin. β-lactams: **no role** (no cell wall target).",
        pearl: "**Neonatal conjunctivitis timeline:** chemical (within 24h) → gonorrhea (<5 days) →
**Chlamydia (5–14 days)**. **β-lactams don't work** on any Chlamydia (no PBPs/cell wall).
**Trachoma** (A–C) = leading infectious blindness cause — endemic in Africa/Middle East/Asia.
**Psittacosis clue:** bird owner (parrot/parakeet), severe pneumonia with relative bradycardia (pulse-temperature dissociation), treat with doxycycline.
**C. pneumoniae** = young, healthy adult, gradual-onset pneumonia, bilateral infiltrates on CXR — clinically similar to Mycoplasma."
      },
      {
        name: "Coxiella burnetii",
        summary: "Q fever — atypical pneumonia + hepatitis from livestock/parturient animals; extremely infectious (1 organism); does NOT require arthropod bite for transmission; treat doxycycline",
gram: "Obligate intracellular (gram-indeterminate — not reliably stained)",
virulence: "**Spore-like forms** — extremely resistant to heat, desiccation, chemicals.
**Obligate intracellular** (infects macrophages). Phase I antigen (virulent) vs Phase II (avirulent — used in Coxiella serology).
**Infectious dose = 1 organism.**",
        disease: "**Acute Q fever:** self-limited flu-like illness, **atypical pneumonia** (diffuse infiltrates), **granulomatous hepatitis** (elevated LFTs, granulomas on biopsy — 'doughnut granulomas'). NO rash (unlike Rickettsia).
**Chronic Q fever (endocarditis):** most serious form — 1–20 years post-infection; culture-negative endocarditis in patient with valvular disease. Exposure: parturient (birthing) cattle/sheep/goats — placenta, amniotic fluid highly infectious.",
        tx: "Acute: **doxycycline × 2 weeks**. Chronic endocarditis: **doxycycline + hydroxychloroquine × 18–36 months** (long course).",
        pearl: "**No arthropod bite required** (unlike Rickettsia — spread by aerosol from infected animal products).
**Doughnut (ring) granulomas** on liver biopsy = classic histology.
**Culture-negative endocarditis** in farmer/veterinarian = Q fever endocarditis until proven otherwise (serology: Phase I IgG ≥1:800). Single most infectious organism known (1 organism = disease). Weil-Felix test **negative** (another distinction from Rickettsia)."
      },
      {
        name: "Gardnerella vaginalis",
        summary: "Bacterial vaginosis — overgrowth of Gardnerella + anaerobes replacing normal Lactobacillus; thin gray-white discharge, fishy odor, clue cells, pH >4.5; treat metronidazole",
gram: "Gram-variable rod (Gardnerella — stains poorly)",
virulence: "Biofilm formation on vaginal epithelium. Disrupts normal Lactobacillus dominance → polymicrobial overgrowth (Mobiluncus, Prevotella, Peptostreptococcus). NOT an STI per se — but associated with sexual activity.",
        disease: "**Bacterial vaginosis (BV):** thin, homogeneous **gray-white discharge** with **fishy odor** (worse after sex — semen raises pH, volatilizes amines). Minimal inflammation (no WBCs).
**Amsel criteria (3/4):** ① thin homogeneous discharge ② vaginal pH >4.5 ③ **clue cells** (epithelial cells studded with bacteria) ④ **positive whiff test** (KOH → fishy amine odor). Risk: PID, preterm birth.",
        tx: "**Metronidazole** (oral or intravaginal gel).
**Clindamycin** (alternative — cream or oral). Treat symptomatic women and pregnant women with BV (↓preterm labor risk).",
        pearl: "**Clue cells** = vaginal epithelial cells covered with G. vaginalis bacteria (stippled appearance on wet mount) = pathognomonic for BV.
**Whiff test** (KOH) = fishy odor from amines (trimethylamine, putrescine). BV vs Trichomonas vs Candida: BV = fishy, gray, no inflammation; Trichomonas = frothy yellow-green, mobile trichomonads; Candida = thick white 'cottage cheese,' no odor, pseudohyphae on KOH. pH: BV/Trich >4.5; Candida normal (4–4.5)."
      },
      {
        name: "Mycoplasma pneumoniae",
        summary: "No cell wall — walking pneumonia in young adults; cold agglutinins (IgM vs RBCs); not visible on Gram stain; treat macrolides or doxycycline (β-lactams useless)",
gram: "No cell wall (not Gram stained)",
virulence: "**No cell wall** (no peptidoglycan) → resistant to ALL β-lactams. P1 adhesin (attaches to respiratory epithelium ciliary proteins → ciliostasis). Smallest self-replicating organism.
**Pleomorphic** (no fixed shape).",
        disease: "**Atypical ('walking') pneumonia:** young adults (schools, military barracks), gradual onset — **mild symptoms despite radiographic infiltrates** (patient 'walks around'). Dry hacking cough, low-grade fever, headache, malaise. CXR: diffuse interstitial/patchy infiltrates (worse than clinical picture).
**Cold agglutinins (IgM anti-I on RBCs):** agglutinate RBCs at 4°C → hemolytic anemia (Raynaud's in cold).
**Extra-pulmonary:** Stevens-Johnson syndrome, myocarditis, hemolytic anemia, encephalitis.",
        tx: "**Azithromycin or clarithromycin (macrolides)** — first-line.
**Doxycycline** (alternative).
**Fluoroquinolones** (respiratory quinolones). All β-lactams, vancomycin: **completely ineffective** (no cell wall target).",
        pearl: "**β-lactams don't work** — no cell wall.
**Cold agglutinins** (IgM anti-I): bedside test — tube of blood left at 4°C agglutinates, rewarms to 37°C → dissociates. Positive in 50–75% of M. pneumoniae (also EBV, CMV). **'Worse X-ray than exam'** = classic clue. Diagnosis: serology (IgM/IgG), PCR of nasopharyngeal swab. Cannot culture easily (specialized media). Treat whole household/barracks during outbreaks."
      },
      {
        name: "Rickettsia — Overview",
        summary: "Obligate intracellular GN rods — all transmitted by arthropod vectors (except Coxiella); triad: fever + headache + rash; all treat with doxycycline; spread via infected arthropod saliva",
gram: "GN Rod (obligate intracellular — does not Gram stain in practice)",
virulence: "**Obligate intracellular** — infects endothelial cells → vasculitis → rash, petechiae, multiorgan dysfunction. Actin-based motility (like Listeria). Cannot survive outside host cells. Membrane phospholipase A2.",
        disease: "Fever + headache + rash (petechial/maculopapular) = Rickettsial disease until proven otherwise. Rash timing, distribution, and vector differ by species (see individual cards). Vasculitis → endothelial damage → thrombosis, edema, hemorrhage.",
        tx: "**Doxycycline** (first-line for ALL rickettsial diseases, including in children — benefits outweigh dental staining risk).
**Never delay treatment** for diagnostic confirmation — high mortality if untreated.",
        pearl: "**Weil-Felix test:** Rickettsia cross-react with Proteus antigens (OX-2, OX-19, OX-K) — historical test, largely replaced by serology.
**Doxycycline = treatment regardless of age** (AAP endorses for suspected Rickettsia — risk of death > risk of dental staining). All are intracellular: infect endothelial cells → rash is purpuric/petechial. Classic Step 1 trick: 'patient from wooded area + rash on palms/soles + tick exposure' = Rocky Mountain Spotted Fever."
      },
      {
        name: "Rickettsia prowazekii",
        summary: "Epidemic (louse-borne) typhus — body louse vector; Brill-Zinsser disease (reactivation after years); severe illness; high mortality untreated; treat doxycycline",
gram: "GN Rod (obligate intracellular)",
virulence: "Transmitted by **body louse** (Pediculus humanus corporis) feces — scratched into skin (NOT the bite itself). Infects endothelial cells → systemic vasculitis. Can remain latent in lymph nodes for decades.",
        disease: "**Epidemic typhus:** sudden high fever, severe headache, myalgia, maculopapular rash (trunk → extremities, **spares palms/soles**) → becomes petechial. Delirium, coma, multiorgan failure. High mortality (20–60%) untreated. Associated with **war, poverty, overcrowding** (louse infestation).
**Brill-Zinsser disease:** reactivation of latent R. prowazekii years/decades later → milder illness.",
        tx: "**Doxycycline** (single dose for uncomplicated; 3–7 days for severe). Chloramphenicol (alternative, historical).",
        pearl: "**Body louse = R. prowazekii** (vs. body louse also carries Bartonella quintana [trench fever] and Borrelia recurrentis [relapsing fever]). Rash: **spares palms/soles** (opposite of RMSF).
**Brill-Zinsser** = reactivation typhus in survivor — milder; Weil-Felix positive. Flying squirrels are reservoir in US. Weil-Felix: OX-19 positive."
      },
      {
        name: "Rickettsia rickettsii",
        summary: "Rocky Mountain Spotted Fever (RMSF) — Dermacentor tick; rash starts on wrists/ankles → spreads centripetally, involves palms/soles; most lethal rickettsial in US; treat doxycycline immediately",
gram: "GN Rod (obligate intracellular)",
virulence: "Transmitted by **Dermacentor tick** (dog tick, wood tick). Tick must be attached ≥4–6 hours. Infects endothelial cells → vasculitis, DIC, multiorgan failure.",
        disease: "**RMSF:** sudden high fever, severe headache, myalgia.
**Rash:** begins **day 2–5** — maculopapular on **wrists and ankles** → spreads **centripetally** to trunk → becomes **petechial**. Classically involves **palms and soles** (key distinguisher). Thrombocytopenia, elevated LFTs, hyponatremia. If untreated: DIC, neurological sequelae, death.
**Paradox:** most cases NOT in Rocky Mountains — Southeast/South-Central US (North Carolina, Oklahoma, Arkansas have highest incidence).",
        tx: "**Doxycycline** — start immediately on clinical suspicion (do NOT wait for labs). Children included. Mortality rises sharply with treatment delay.",
        pearl: "**Rash on palms and soles + tick exposure = RMSF** until proven otherwise.
**Triad:** fever + headache + rash (rash may be absent early — 'spotless RMSF'). Labs: **thrombocytopenia + hyponatremia** (vasculitis → SIADH). Serology (IFA) is confirmatory but retrospective.
**Never wait for serology** — treat clinically. Most lethal tick-borne illness in US. 'Starts peripheral (wrists/ankles) → spreads central (trunk)' = centripetal spread."
      }
    ]
  }
],

viruses: [
  {
    group: "DNA Viruses — Herpesviruses",
    color: "vir",
    organisms: [
      {
        name: "HSV-1 and HSV-2",
        summary: "Latent in sensory ganglia — HSV-1: oral/encephalitis (temporal); HSV-2: genital/neonatal; treat with acyclovir",
gram: "dsDNA, enveloped",
virulence: "Tegument proteins and glycoproteins (gB, gC, gD) for cell entry. Viral TK (thymidine kinase) — required for acyclovir activation. LAT (latency-associated transcripts) maintain latency in neurons.",
        disease: "**HSV-1:** primary gingivostomatitis (painful vesicles/ulcers), recurrent herpes labialis ('cold sores'), keratoconjunctivitis (dendritic corneal ulcers — **fluorescein staining**), **herpes encephalitis** (temporal lobe → personality change, seizures, hemorrhagic necrosis —
**MRI: temporal lobe signal, LP: RBCs + lymphocytes**).
**HSV-2:** genital herpes (painful ulcers on genitals), **neonatal herpes** (from birth canal — disseminated → skin/eye/mouth or CNS → high mortality).
**HSV** in immunocompromised: esophagitis, proctitis, encephalitis.
**Whitlow:** finger infection from HSV.",
        tx: "**Acyclovir** (or valacyclovir, famciclovir) — phosphorylated by viral TK → inhibits viral DNA polymerase. HSV encephalitis: IV acyclovir (empirically in suspected cases — don't wait).
**Prophylaxis** for frequent recurrences: daily valacyclovir. Acyclovir-resistant (TK-deficient): foscarnet.",
        pearl: "**Temporal lobe encephalitis** = HSV-1 until proven otherwise → start IV acyclovir immediately.
**Tzanck smear:** multinucleated giant cells (not specific for HSV — also VZV).
**Neonatal herpes triad:** skin vesicles + eye involvement + CNS/disseminated disease — C-section if active lesions at delivery. Acyclovir resistance → **foscarnet** (doesn't need TK for activation)."
      },
      {
        name: "VZV (HHV-3) — Varicella-Zoster",
        summary: "Chickenpox (primary) → latent in dorsal root ganglia → zoster (shingles, dermatomal) — vaccine-preventable; treat with acyclovir",
gram: "dsDNA, enveloped",
virulence: "Highly contagious (airborne + droplet contact). Latency in dorsal root ganglia.",
        disease: "**Varicella (chickenpox):** pruritic rash — papules → vesicles → pustules → crusts (all stages simultaneously). Fever, malaise. Complications: bacterial superinfection (GAS), pneumonia (adults, immunocompromised), encephalitis, Reye syndrome (if given aspirin → avoid ASA in children with varicella).
**Herpes zoster (shingles):** reactivation in dermatomal distribution — painful, unilateral vesicles.
**Zoster ophthalmicus** (V1 — risk of keratitis, blindness).
**Ramsay Hunt syndrome:** VZV reactivation in geniculate ganglion → facial palsy (CN VII) + ear vesicles + sensorineural hearing loss.",
        tx: "Acyclovir (IV for severe/immunocompromised, PO for uncomplicated shingles in <72h).
**Zoster vaccine (Shingrix):** recombinant, recommended ≥50 yrs.
**Varicella vaccine (Varivax):** live attenuated, 2-dose series.
**VZIG** for post-exposure prophylaxis in immunocompromised/pregnant.",
        pearl: "**Reye syndrome:** aspirin + varicella (or influenza) → hepatic encephalopathy in children → **never give aspirin to children with viral illness**.
**Ramsay Hunt:** VZV in geniculate ganglion → Bell's palsy + ear vesicles + hearing loss. Zoster can affect
**V1 (ophthalmic)**: Hutchinson's sign (vesicles on tip of nose → indicates nasociliary nerve involvement → corneal disease risk). Tzanck smear: multinucleated giant cells."
      },
      {
        name: "EBV (HHV-4) — Epstein-Barr Virus",
        summary: "Infectious mononucleosis — heterophile antibodies (Monospot), atypical lymphocytes, splenomegaly, rash with ampicillin; transforms B cells → lymphomas",
gram: "dsDNA, enveloped",
virulence: "Infects **B cells via CD21 (CR2 complement receptor)**. Immortalizes B cells (EBNA, LMP oncoproteins). Monospot: heterophile antibodies agglutinate horse/sheep RBCs.",
        disease: "**Infectious mononucleosis ('mono'):** fever + pharyngitis (exudative) + lymphadenopathy (posterior cervical) + splenomegaly.
**Fatigue for weeks–months**. Rash if given **ampicillin/amoxicillin** (immune-mediated, maculopapular). Complications: splenic rupture (avoid contact sports for 3–4 weeks), airway obstruction (from tonsillar hypertrophy).
**Malignancies:** Burkitt lymphoma (endemic African form c-myc:8;14 translocation, jaw mass in children, EBV-associated), primary CNS lymphoma (immunocompromised — HIV/transplant), nasopharyngeal carcinoma (Southeast Asian populations), Hodgkin lymphoma (mixed cellularity subtype), post-transplant lymphoproliferative disorder (PTLD).",
        tx: "Supportive (rest, avoid contact sports). Steroids if airway compromise or severe. No specific antiviral. Avoid ampicillin/amoxicillin. PTLD: reduce immunosuppression ± rituximab.",
        pearl: "**Ampicillin rash** in 'tonsillar pharyngitis' patient = classic EBV vignette (don't give ampicillin for sore throat without testing for mono).
**CD21** is the receptor. Heterophile antibodies (Monospot) appear in 85% — may be falsely negative early.
**Atypical lymphocytes** = CD8+ T cells (reactive) responding to EBV-infected B cells. Monospot false negative in first week."
      },
      {
        name: "CMV (HHV-5) — Cytomegalovirus",
        summary: "Owl-eye inclusions — congenital (calcifications, hearing loss) and immunocompromised (retinitis, esophagitis, colitis); treat with ganciclovir",
gram: "dsDNA, enveloped (largest herpesvirus)",
virulence: "Intranuclear inclusions ('owl eyes'). Infects many cell types. Latent in mononuclear cells. Can reactivate with immunosuppression.",
        disease: "**Congenital CMV** (most common congenital infection): **periventricular calcifications**, hearing loss (most common cause of non-hereditary sensorineural), chorioretinitis, hepatosplenomegaly, petechiae ('blueberry muffin' baby), microcephaly.
**Immunocompromised (HIV, transplant):** CMV retinitis (most common cause of blindness in AIDS — 'pizza pie' fundus), esophagitis (linear ulcers), colitis (bloody diarrhea), pneumonitis (bone marrow/lung transplant).
**Mononucleosis-like:** heterophile-negative mono (common in healthy adults).",
        tx: "**Ganciclovir** (or valganciclovir — prodrug). Ganciclovir resistance: **foscarnet** or cidofovir. Prophylaxis in transplant: valganciclovir.",
        pearl: "**CMV vs Toxoplasma calcifications:** CMV = **periventricular** (central). Toxoplasma = **diffuse/scattered** (peripheral). Both cause congenital CNS disease.
**Ganciclovir** = guanosine analog, requires phosphorylation by viral UL97 kinase (CMV kinase). Bone marrow toxicity (neutropenia, thrombocytopenia) = main side effect.
**Retinitis in AIDS:** bushy hemorrhagic infiltrate following blood vessels — 'pizza pie fundus.' CD4 <50/µL."
      },
      {
        name: "HHV-6 (Roseola — Exanthem Subitum)",
        summary: "Roseola infantum — high fever 3–5 days → sudden defervescence → rose-colored macular rash; febrile seizures; infants 6–24 months; HHV-6 also causes encephalitis in transplant patients",
gram: "dsDNA, enveloped",
virulence: "Infects CD4+ T cells and monocytes. Latency in monocytes/macrophages. Can reactivate with immunosuppression (especially stem cell transplant).",
        disease: "**Roseola infantum (exanthem subitum):** most common exanthem in infants <2 years.
**High fever (39–40°C) for 3–5 days** — child appears well despite fever.
**Sudden defervescence → rose-colored blanching macular rash** (trunk → neck/extremities, spares face).
**Febrile seizures** occur during fever phase (not during rash).
**Immunocompromised (transplant):** HHV-6 reactivation → **encephalitis**, hepatitis, pneumonitis.",
        tx: "Roseola: supportive (acetaminophen for fever). Transplant encephalitis: **ganciclovir or foscarnet** (off-label, limited data).",
        pearl: "**Classic vignette:** 9-month-old infant with 4 days of high fever → fever breaks → rose-colored truncal rash.
**Febrile seizures** are the main complication (occur during fever, not rash phase). HHV-6 uses CD46 as receptor. Reactivation in bone marrow transplant recipients → limbic encephalitis (amnesia, confusion)."
      },
      {
        name: "HHV-8 (Kaposi Sarcoma Herpesvirus)",
        summary: "Kaposi's sarcoma in AIDS (CD4 <200) — violaceous skin lesions, visceral involvement; also causes primary effusion lymphoma and Castleman disease; treat with ART restoration",
gram: "dsDNA, enveloped",
virulence: "Viral homologs of cellular oncogenes (v-cyclin, v-FLIP, vIL-6). Promotes angiogenesis (VEGF induction). Infects B cells and endothelial cells. Reactivates with immunosuppression.",
        disease: "**Kaposi's sarcoma:** violaceous (purple-red) vascular skin lesions — flat → raised nodular plaques.
**AIDS-associated KS (most common):** widespread cutaneous, mucosal (palate), visceral (GI, lung) involvement.
**Classic KS (elderly Mediterranean men):** indolent, lower extremities, not immunocompromised.
**Transplant-associated KS.**
**Primary effusion lymphoma (PEL):** B-cell lymphoma in body cavities (pleural, pericardial) — no solid tumor mass.
**Multicentric Castleman disease:** lymphadenopathy, hepatosplenomegaly, fever.",
        tx: "AIDS-KS:
**HAART** (immune reconstitution often leads to regression). Local: radiation, cryotherapy, intralesional vinblastine. Systemic: liposomal doxorubicin or paclitaxel for advanced disease. PEL: chemotherapy.",
        pearl: "**Violaceous lesions on skin/palate in HIV patient = Kaposi's sarcoma = HHV-8.** Must distinguish from bacillary angiomatosis (Bartonella — similar appearance but bacterial, treats with antibiotics). KS on palate = AIDS-defining illness. HHV-8 + EBV co-infection → PEL (lymphoma without a solid mass — 'lymphoma floating in body cavities')."
      }
    ]
  },
  {
    group: "DNA Viruses — Other",
    color: "vir",
    organisms: [
      {
        name: "Polyomavirus (JC Virus & BK Virus)",
        summary: "JC virus → PML (progressive multifocal leukoencephalopathy) in AIDS/immunocompromised; BK virus → hemorrhagic cystitis in transplant; both latent in kidneys; no effective treatment",
gram: "dsDNA, non-enveloped (naked)",
virulence: "Latent in kidney tubular cells and B cells (JC also in oligodendrocytes). Reactivate with immunosuppression. JC infects and destroys oligodendrocytes → demyelination.",
        disease: "**JC virus → PML:** AIDS (CD4 <100), hematologic malignancies, natalizumab use (MS treatment). Demyelination of white matter → rapidly progressive neurological deficits (weakness, cognitive decline, visual loss), NO fever (immunocompromised can't mount inflammation). MRI: multifocal white matter lesions.
**No mass effect, no enhancement** (unlike CNS lymphoma).
**BK virus:** renal transplant → **hemorrhagic cystitis** and tubulointerstitial nephritis (BK nephropathy → graft loss).",
        tx: "JC/PML: **immune reconstitution** (HAART for AIDS, reduce immunosuppression) — no specific antiviral. BK: reduce immunosuppression; cidofovir (limited benefit).
**Natalizumab-associated PML:** plasma exchange to remove drug, may cause IRIS (inflammatory reconstitution syndrome).",
        pearl: "**PML** = demyelinating disease in immunocompromised → white matter lesions on MRI without mass effect or ring enhancement (contrast with CNS lymphoma: ring-enhancing). JC virus: primary infection in childhood (asymptomatic), latency in kidneys/B cells, reactivation = PML.
**BK virus = transplant bladder bug** (hemorrhagic cystitis 1–6 months post-transplant). Natalizumab (anti-VLA-4 for MS/Crohn's) → prevents T-cell surveillance → JC reactivation."
      },
      {
        name: "HPV (Human Papillomavirus)",
        summary: "dsDNA, non-enveloped — low-risk (6, 11 → condylomata acuminata/warts), high-risk (16, 18 → cervical/oropharyngeal/anal cancers); E6 inhibits p53, E7 inhibits Rb; Gardasil vaccine",
gram: "dsDNA, non-enveloped (naked)",
virulence: "**E6 oncoprotein:** binds and degrades **p53** (→ loss of apoptosis/cell cycle arrest).
**E7 oncoprotein:** binds and inactivates **Rb** (→ unregulated E2F → cell proliferation). Integration of HPV DNA into host genome = key step in carcinogenesis.",
        disease: "**Low-risk (HPV 6, 11):** condylomata acuminata (anogenital warts — cauliflower-like, soft, non-malignant), laryngeal papillomatosis (recurrent in children — maternal transmission).
**High-risk (HPV 16, 18):** cervical carcinoma (squamous cell, junction of ecto/endocervix), oropharyngeal carcinoma (tonsils/base of tongue — HPV 16, p16 positive), anal carcinoma, vulvar/vaginal/penile carcinoma. CIN (cervical intraepithelial neoplasia) = precursor.",
        tx: "Warts: cryotherapy, podophyllin, imiquimod, trichloroacetic acid. High-grade CIN: LEEP, cone biopsy. Cervical cancer: surgery ± chemoradiation.
**No antiviral for HPV.**",
        pearl: "**E6 = kills p53; E7 = kills Rb** — two oncoproteins, two tumor suppressors.
**Koilocytes** = HPV-infected squamous cells with perinuclear clearing on Pap smear (pathognomonic).
**Gardasil 9:** prevents HPV 6, 11, 16, 18, 31, 33, 45, 52, 58 — recommended ages 9–26.
**HPV 16 > 18** for oropharyngeal cancer (HPV-positive oropharyngeal cancer has BETTER prognosis than HPV-negative). Pap smear: screening tool; HPV co-test from age 30."
      },
      {
        name: "Parvovirus B19",
        summary: "Smallest DNA virus — ssDNA, non-enveloped; erythema infectiosum (Fifth disease, 'slapped cheek') in children; aplastic crisis in sickle cell/hemolytic anemia; hydrops fetalis in pregnancy",
gram: "ssDNA, non-enveloped (smallest DNA virus)",
virulence: "Infects **erythroid progenitor cells** (via P antigen receptor = globoside) → transient arrest of erythropoiesis. In immunocompetent: brief → recovers. In hemolytic anemia (sickle cell, hereditary spherocytosis): reticulocyte count drops → acute aplastic crisis.",
        disease: "**Erythema infectiosum (Fifth disease, children):** 'slapped cheek' facial rash → lacy reticular rash on arms/trunk. Mild fever/URI prodrome.
**Adults:** polyarthropathy (symmetric small joints — mimics rheumatoid) — especially women.
**Sickle cell/hemolytic anemia:** **aplastic crisis** (↓↓ reticulocytes → severe anemia requiring transfusion).
**Pregnancy:** crosses placenta → fetal anemia → hydrops fetalis (high-output HF) → stillbirth.
**Immunocompromised:** chronic pure red cell aplasia.",
        tx: "Immunocompetent: supportive. Aplastic crisis: transfusion. Immunocompromised chronic infection:
**IVIG**. Hydrops fetalis: intrauterine fetal transfusion.",
        pearl: "**'Slapped cheek' + lacy rash = Parvovirus B19 = Fifth disease.** By the time rash appears, child is NO longer infectious (rash is immune-mediated).
**Aplastic crisis in sickle cell patient** = Parvovirus B19 until proven otherwise.
**Hydrops fetalis** risk in seronegative pregnant women exposed to B19 (highest risk 10–20 weeks gestation). P antigen is the receptor — rare P antigen-negative individuals are naturally resistant."
      },
      {
        name: "Adenovirus",
        summary: "Naked dsDNA — pharyngoconjunctival fever, epidemic keratoconjunctivitis, pneumonia (military recruits), hemorrhagic cystitis; no envelope (resists desiccation); no specific treatment",
gram: "dsDNA, non-enveloped (naked icosahedral)",
virulence: "**Fiber protein** (projects from capsid vertices) → binds CAR (coxsackievirus-adenovirus receptor) for host cell attachment.
**Penton base** (RGD motif) → endosome escape. E1A/E1B proteins: inhibit p53 and Rb (similar to HPV E6/E7 — oncogenic in rodents, NOT in humans).",
        disease: "**Upper respiratory:** pharyngitis, common cold (types 1, 2, 5).
**Pharyngoconjunctival fever (PCF):** fever + pharyngitis + conjunctivitis — transmitted in swimming pools ('swimming pool conjunctivitis,' types 3, 7).
**Epidemic keratoconjunctivitis (EKC):** severe follicular conjunctivitis + corneal infiltrates, highly contagious (types 8, 19, 37).
**Pneumonia:** severe in military recruits (types 4, 7).
**Hemorrhagic cystitis:** immunocompromised (types 11, 21).
**Intussusception:** intestinal (types 40, 41) — second most common cause in children.",
        tx: "Mostly supportive. Military: live oral vaccine (types 4 and 7). Immunocompromised severe: cidofovir. No approved antiviral.",
        pearl: "**Adenovirus = naked (non-enveloped)** → stable on surfaces, resistant to alcohol — major cause of nosocomial outbreaks.
**PCF** in swimmers or summer camps.
**EKC** is highly contagious — contact precautions. Adenovirus is NOT treated with antivirals targeting envelope (contrast with influenza, HIV). Vectors in gene therapy. Unlike HPV, adenovirus does NOT integrate and does NOT cause cancer in humans."
      },
      {
        name: "Poxvirus (Smallpox & Molluscum)",
        summary: "Largest DNA virus — encodes its own DNA polymerase; smallpox (variola, eradicated) vs molluscum contagiosum (umbilicated papules, immunocompromised); vaccinia = vaccine strain",
gram: "dsDNA, enveloped (largest, most complex virus)",
virulence: "Replicates entirely in cytoplasm (does NOT use nucleus — encodes own machinery). Guarnieri bodies = cytoplasmic inclusion bodies. Variola: highly contagious via respiratory droplets.",
        disease: "**Smallpox (variola — eradicated 1980):** deep, synchronous pustular rash (ALL lesions at same stage — vs. varicella where stages differ), starts on face/extremities → trunk, fever before rash, involves palms/soles.
**Molluscum contagiosum:** umbilicated ('bellybutton') pearly papules — self-limited in immunocompetent children (skin-to-skin), extensive/giant in HIV/immunocompromised.
**Vaccinia:** smallpox vaccine strain — used in lab workers/military; progressive vaccinia if immunocompromised.
**Monkeypox:** zoonotic, rash similar to smallpox.",
        tx: "Smallpox: **tecovirimat** (FDA-approved, inhibits VP37 protein).
**Vaccinia immune globulin (VIG)** for complications. Molluscum: cryotherapy, curettage, topical agents (self-limited).",
        pearl: "**Smallpox rash:** ALL lesions same stage ('synchronous') + deep + involves palms/soles — vs **varicella** (chickenpox): lesions at DIFFERENT stages ('crops') + superficial + spares palms/soles. Poxvirus = largest + most complex DNA virus + **only DNA virus that replicates in cytoplasm**.
**Bioterrorism Category A** agent (variola). Molluscum: Henderson-Paterson bodies (cytoplasmic inclusions in keratinocytes) on biopsy."
      },
      {
        name: "Hepatitis B (HBV) & Hepatitis D (HDV)",
        summary: "HBV: partially dsDNA Hepadnavirus — chronic hepatitis, cirrhosis, HCC; serology-based diagnosis. HDV: defective RNA virus requiring HBsAg; co-infection vs superinfection; HBV vaccine prevents both",
gram: "HBV: partially dsDNA, enveloped (Hepadnavirus); HDV: ssRNA (−), enveloped (virusoid — requires HBV)",
virulence: "HBV: **reverse transcriptase** (RNA intermediate → DNA; target of antivirals). **cccDNA** (covalently closed circular DNA — nuclear reservoir, persists despite treatment).
**HBxAg:** transactivator → promotes HCC. HDV: requires HBsAg envelope to infect cells.",
        disease: "**Acute HBV:** flu-like illness, jaundice, arthralgias/rash (immune complex); 90–95% of adults clear.
**Chronic HBV** (>6 months HBsAg): 10% adults, 90% perinatally infected. Complications: **cirrhosis, HCC** (HBV integrates into host genome even without cirrhosis),
**PAN** (polyarteritis nodosa — immune complex vasculitis), **membranous nephropathy**.
**HDV co-infection** (HBV + HDV simultaneously): severe acute hepatitis, usually clears.
**HDV superinfection** (chronic HBV → HDV added): rapidly accelerated cirrhosis, fulminant hepatitis.",
        tx: "**Tenofovir or entecavir** (nucleos(t)ide analogs — suppress viral replication, do not cure). Interferon-α (limited use). HBV vaccine → anti-HBs only.
**Neonatal:** HBV immune globulin + vaccine within 12h of birth. HDV: prevented by HBV vaccination (no HBsAg = no HDV).",
        pearl: "**HBV serology:** HBsAg = infected (acute or chronic). Anti-HBs = immune (vaccination or recovery). HBeAg = high replication/infectivity. Anti-HBc IgM = acute. Anti-HBc IgG = ever infected.
**Window period:** HBsAg cleared, anti-HBs not yet — **only anti-HBc IgM positive**.
**Vaccination → anti-HBs ONLY** (no anti-HBc).
**HCC** can occur WITHOUT cirrhosis in HBV (vs. HCV which typically requires cirrhosis). cccDNA = why HBV is not curable with current antivirals."
      }
    ]
  },
  {
    group: "RNA Viruses — Positive Sense",
    color: "vir",
    organisms: [
      {
        name: "Picornaviruses — Overview (Enteroviruses)",
        summary: "Small naked ssRNA(+) — includes poliovirus, coxsackievirus, rhinovirus, HAV, echovirus; fecal-oral (except rhinovirus — respiratory); acid-stable (survive GI tract)",
gram: "ssRNA (+), non-enveloped (naked) — smallest RNA viruses",
virulence: "Non-enveloped → **acid-stable** (survive stomach, fecal-oral transmission).
**IRES** (internal ribosome entry site) — cap-independent translation. VP1–4 proteins form icosahedral capsid.",
        disease: "Class includes: Enteroviruses (poliovirus, coxsackievirus, echovirus, enterovirus 71), Rhinovirus, Hepatovirus (HAV). Fecal-oral route (enteroviruses) or respiratory (rhinovirus). Can cause: meningitis, encephalitis, myocarditis, herpangina, hand-foot-mouth disease, polio, hepatitis A.",
        tx: "Mostly supportive. Pleconaril (experimental — capsid inhibitor). Inactivated polio vaccine (IPV) or live oral (OPV — not used in US).",
        pearl: "**Picorna = small (pico) RNA.** Non-enveloped = **not killed by alcohol** (important for hand hygiene — need soap and water or bleach). Acid-stable = withstands GI tract.
**IRES** allows ribosome to bind directly without 5' cap — exploited in gene therapy vectors. All can cause aseptic (viral) meningitis — enterovirus is most common overall cause."
      },
      {
        name: "Poliovirus",
        summary: "Fecal-oral, infects anterior horn motor neurons — flaccid asymmetric paralysis; Salk (IPV) vs Sabin (OPV); polio nearly eradicated globally",
gram: "ssRNA (+), non-enveloped (Enterovirus)",
virulence: "Fecal-oral → replicates in oropharynx and GI tract → viremia → CNS via hematogenous or retrograde axonal transport. Destroys **anterior horn motor neurons** (lower motor neuron).",
        disease: "**Abortive polio (90–95%):** mild fever/GI illness, no neurological involvement.
**Non-paralytic aseptic meningitis (4–8%).**
**Paralytic polio (<1%):** **asymmetric flaccid paralysis** — fever, meningismus → motor paralysis (LMN: areflexia, hypotonia, muscle atrophy, NO sensory loss). Bulbar polio: brainstem → respiratory failure.
**Post-polio syndrome:** decades later → progressive muscle weakness in previously affected muscles.",
        tx: "Supportive (iron lung historically for respiratory failure).
**Prevention:** IPV (Salk — inactivated, cannot cause disease, current US standard) or OPV (Sabin — live attenuated, oral, used globally, rare vaccine-associated paralytic polio [VAPP]).",
        pearl: "**Asymmetric flaccid paralysis + fever + CSF pleocytosis + NO sensory deficit = poliovirus** (vs Guillain-Barré: ascending, symmetric, sensory changes, follows infection/vaccination).
**Anterior horn cells = LMN** → flaccid, NOT spastic. OPV = oral, gives gut immunity, cheap, but risk of VAPP (~1/million). IPV = injected, no risk, US standard since 2000. Post-polio syndrome: new weakness 30–40 years later from neuronal dropout."
      },
      {
        name: "Coxsackievirus",
        summary: "Enterovirus — Group A: hand-foot-mouth disease, herpangina; Group B: myocarditis, pericarditis, pleurodnia ('devil's grip'), Bornholm disease; dilated cardiomyopathy",
gram: "ssRNA (+), non-enveloped (Enterovirus)",
virulence: "Group B coxsackievirus: **CAR receptor** (shared with adenovirus). Infects myocardial cells → inflammation → necrosis → dilated cardiomyopathy. Group A: tropism for skin and oral mucosa.",
        disease: "**Group A:** Hand-foot-mouth disease (HFMD): vesicles/ulcers in mouth + maculovesicular rash on palms, soles, buttocks (type A16; enterovirus 71 more severe). Herpangina: small vesicles/ulcers on soft palate/uvula only, high fever.
**Group B:**
**Myocarditis/pericarditis** (young adults, type B3, B5 — most common viral cause of myocarditis).
**Pleurodynia (Bornholm disease):** paroxysmal severe pleuritic chest pain/epigastric pain.
**Neonatal enteroviral sepsis:** severe, multi-organ failure.",
        tx: "Supportive. IVIG for neonatal sepsis or severe disease. No specific antiviral.",
        pearl: "**Coxsackie B = myocarditis** (most common viral cause of myocarditis and dilated cardiomyopathy). Young athlete with chest pain + ST changes + elevated troponin + recent URI = viral myocarditis =
**Coxsackie B.** HFMD: painful oral ulcers + rash on palms/soles — most common in children under 5, summertime.
**Herpangina:** posterior oral cavity ONLY (soft palate) — vs HFMD which also has hand/foot lesions."
      },
      {
        name: "Rhinovirus",
        summary: "Most common cause of the common cold — ssRNA(+), non-enveloped, acid-labile (destroyed by stomach acid); 100+ serotypes; ICAM-1 receptor; no vaccine possible",
gram: "ssRNA (+), non-enveloped (Enterovirus genus)",
virulence: "**ICAM-1 receptor** (intracellular adhesion molecule — binds in nasopharynx).
**Acid-labile** (destroyed by stomach acid — unlike other enteroviruses). Grows optimally at **33°C** (nasal temperature — cannot replicate in warmer lung temperatures = no pneumonia).",
        disease: "**Common cold:** rhinorrhea, nasal congestion, sore throat, mild cough, sneezing. Low-grade fever or no fever. Duration 7–10 days. Complications: secondary bacterial sinusitis or otitis media (Strep pneumoniae, H. influenzae). Most common precipitant of asthma exacerbations.",
        tx: "Supportive (decongestants, antihistamines, analgesics). Antibiotics NOT indicated. No vaccine (>100 serotypes → impractical).",
        pearl: "**Most common URI pathogen** (>50% of colds). Unlike other picornaviruses: **acid-labile** (can't survive stomach) → no fecal-oral transmission. Optimal replication at 33°C = nasopharynx.
**Hand-to-eye/nose** is the most important transmission route (not droplets — wash hands!). No vaccine possible due to extreme antigenic diversity (>100 serotypes)."
      },
      {
        name: "Hepatitis A Virus (HAV)",
        summary: "Fecal-oral ssRNA(+) picornavirus — acute hepatitis, NO chronic disease, shellfish/travel; self-limited; HAV IgM = acute; HAV IgG = immunity; vaccine available",
gram: "ssRNA (+), non-enveloped (Hepatovirus genus)",
virulence: "Non-enveloped → survives in environment, acid-stable. Replicates in hepatocytes. Cytopathic effect + immune-mediated liver injury. Shed in feces before symptoms appear.",
        disease: "**Acute hepatitis:** nausea, vomiting, malaise, jaundice, RUQ pain, dark urine, clay-colored stools. Self-limited (most recover in 4–8 weeks).
**NO chronic infection** (never causes chronic hepatitis or cirrhosis). Risk of **fulminant hepatitis** in adults (rare), especially with underlying liver disease. Fecal-oral: contaminated water, shellfish (filter-feeders concentrate virus), travel to endemic areas, food handlers.",
        tx: "**Supportive** (no antiviral).
**HAV vaccine** (highly effective — 2-dose series).
**Post-exposure prophylaxis:** HAV vaccine (preferred if <40yo) or
**IGIM** within 2 weeks of exposure.",
        pearl: "**HAV = self-limited, NEVER chronic.** IgM anti-HAV = acute infection. IgG anti-HAV = past infection OR vaccination (lifelong immunity).
**Highest risk:** travel to endemic countries, MSM, daycare workers, food handlers, injection drug users. Shellfish (especially raw oysters, clams, mussels) concentrate HAV 100-fold. HAV does NOT integrate and does NOT cause HCC."
      },
      {
        name: "Calicivirus (Norovirus)",
        summary: "Most common cause of epidemic gastroenteritis — cruise ships, schools, military; 24–48h N/V/D; fecal-oral/vomitus; very low infectious dose; self-limited",
gram: "ssRNA (+), non-enveloped (Caliciviridae)",
virulence: "Extremely **low infectious dose** (18 viral particles). Stable on surfaces.
**Not killed by alcohol-based hand sanitizers** (non-enveloped). Rapidly mutates (no lasting immunity). Uses HBGA (histo-blood group antigens) as receptor.",
        disease: "**Acute gastroenteritis:** sudden onset nausea, vomiting (prominent), watery non-bloody diarrhea, cramping, low-grade fever. Duration **24–48 hours** (self-limited). Dehydration is main risk (elderly, infants).
**Epidemic clusters:** nursing homes, hospitals, cruise ships, schools, military barracks.
**No chronic disease.**",
        tx: "**Supportive** — ORS, anti-emetics. No specific antiviral. No vaccine approved. Outbreak control: bleach disinfection (alcohol-resistant), contact + enteric precautions.",
        pearl: "**Most common cause of foodborne illness outbreaks in the US** (surpasses Salmonella). Low infectious dose + highly contagious + alcohol-resistant = perfect storm for outbreaks. **'Cruise ship' gastroenteritis** = Norovirus. Surfaces remain contaminated for weeks. Outbreaks in healthcare settings require aggressive **bleach cleaning** (10:1 dilution) and cohorting. Herd immunity is short-lived (<6 months)."
      },
      {
        name: "Flavivirus (Dengue, West Nile, Yellow Fever, Zika)",
        summary: "Enveloped ssRNA(+) — mosquito-borne; dengue (breakbone fever, hemorrhagic fever, shock), West Nile (encephalitis in elderly), Yellow Fever (hepatitis + jaundice), Zika (microcephaly)",
gram: "ssRNA (+), enveloped (Flaviviridae)",
virulence: "Transmitted by **Aedes** mosquito (Dengue, Yellow Fever, Zika — day-biting) or **Culex** (West Nile — night-biting). NS1 protein (diagnostic marker). Immune enhancement: prior dengue infection → antibodies enhance uptake by macrophages (antibody-dependent enhancement → DHF).",
        disease: "**Dengue ('breakbone fever'):** high fever, severe myalgia/arthralgia, retro-orbital pain, maculopapular rash, leukopenia/thrombocytopenia.
**DHF:** plasma leakage, hemorrhage, shock.
**West Nile:** most asymptomatic; elderly → encephalitis/meningitis, flaccid paralysis; bird → mosquito → human (dead-end host).
**Yellow fever:** hepatitis + jaundice + GI hemorrhage ('black vomit'), Faget's sign (bradycardia with fever).
**Zika:** mild febrile illness → **microcephaly/congenital Zika syndrome** (1st trimester most dangerous); also Guillain-Barré; sexual transmission possible.",
        tx: "Supportive for all. No specific antivirals. Dengue: avoid NSAIDs/aspirin (↑ bleeding). Yellow fever: **live attenuated vaccine** (required for travel to endemic areas). West Nile: no vaccine. Zika: pregnancy precautions, avoid travel to endemic areas if pregnant.",
        pearl: "**Dengue + thrombocytopenia + leukopenia + 'breakbone' pain = classic.** DHF/DSS: secondary infection with different dengue serotype → antibody-dependent enhancement.
**Zika in pregnancy → microcephaly** — screen pregnant women with exposure. Yellow fever vaccine: live attenuated, **contraindicated in pregnancy and immunocompromised.** West Nile encephalitis in elderly in late summer (Culex peak)."
      },
      {
        name: "Hepatitis C Virus (HCV)",
        summary: "Blood-borne Flavivirus ssRNA(+) — 80% chronic, leading cause of cirrhosis and liver transplant in US; no vaccine; treat with direct-acting antivirals (>95% cure)",
gram: "ssRNA (+), enveloped (Flaviviridae)",
virulence: "Hypervariable region on E2 glycoprotein → **rapid mutation → immune evasion → chronic infection**. NS3/4A protease, NS5A, NS5B RNA polymerase = drug targets. 6 genotypes (1a/1b most common in US).",
        disease: "**Acute HCV:** usually asymptomatic (80%) or mild jaundice.
**Chronic (80%):** most asymptomatic for decades → cirrhosis → HCC.
**Extra-hepatic:** **mixed cryoglobulinemia** (type II — IgM with RF activity → vasculitis, purpura, glomerulonephritis), membranoproliferative GN, porphyria cutanea tarda, non-Hodgkin B-cell lymphoma, lichen planus. Most common indication for liver transplantation in the US (historically).",
        tx: "**Direct-acting antivirals (DAAs):** NS5B polymerase inhibitor (sofosbuvir) + NS5A inhibitor (ledipasvir/velpatasvir) ± NS3/4A protease inhibitor — **>95% sustained virologic response (SVR = cure)**. 8–12 week courses. No vaccine (high mutation rate prevents). Ribavirin/interferon: largely replaced by DAAs.",
        pearl: "**HCV = most common blood-borne infection in US** (historically; HIV now potentially higher).
**Cryoglobulinemia** (purpura + arthritis + GN) = classic HCV extra-hepatic manifestation.
**Unlike HBV, HCV cannot cause HCC without cirrhosis (usually).** DAAs have revolutionized treatment — SVR after 12 weeks = functionally cured. Genotype 1 = most common (responds well to DAAs). Screen all adults 18–79 at least once (USPSTF)."
      },
      {
        name: "Togavirus (Rubella)",
        summary: "Rubella — mild rash illness in children; teratogenic in 1st trimester (congenital rubella syndrome: cataracts, deafness, cardiac defects); MMR vaccine prevents",
gram: "ssRNA (+), enveloped (Togaviridae — Alphavirus/Rubivirus)",
virulence: "**Respiratory droplets** → viremia → rash (immune-mediated). Crosses placenta → teratogenic (especially weeks 1–16). Maternal viremia → fetal infection → organ development disruption.",
        disease: "**Postnatal rubella (acquired):** mild — low-grade fever, posterior auricular/occipital lymphadenopathy (characteristic), maculopapular rash (face → trunk, 3 days), polyarthralgia.
**Congenital rubella syndrome (1st trimester):** classic triad: **cataracts** (or glaucoma), sensorineural **deafness**, **congenital heart disease** (PDA, pulmonary artery stenosis). Also: 'blueberry muffin' rash, microcephaly, hepatosplenomegaly, intellectual disability. Risk of CRS: 85% if infected in first 12 weeks → decreases as pregnancy progresses.",
        tx: "Supportive.
**MMR vaccine** (live attenuated, 2 doses) — highly effective.
**Contraindicated in pregnancy** — vaccinate post-partum if non-immune. Check rubella IgG in all pregnant women (rubella titer).",
        pearl: "**Posterior auricular lymphadenopathy** = classic rubella sign (vs EBV: posterior cervical).
**CRS triad = PDA + cataracts + deafness.** 'Blueberry muffin baby' = extramedullary hematopoiesis in skin (also congenital CMV).
**MMR is live — do NOT give in pregnancy.** Give post-partum instead. Non-immune pregnant woman exposed to rubella: IGIM (passive immunization — does NOT reliably prevent CRS, use only if vaccine declined). Confirm immunity with IgG titer at first prenatal visit."
      },
      {
        name: "Coronavirus (COVID-19 & SARS)",
        summary: "Large enveloped ssRNA(+) — spike protein binds ACE2; COVID-19 (SARS-CoV-2), SARS, MERS; respiratory spread; cytokine storm in severe disease; RNA vaccines (mRNA) for COVID-19",
gram: "ssRNA (+), enveloped (Coronaviridae — largest RNA genome)",
virulence: "**Spike protein (S)** binds **ACE2** receptor (type II pneumocytes, GI, endothelium).
**TMPRSS2** serine protease required for S protein priming. Large genome (30 kb — largest RNA virus). Cytokine storm (IL-6, TNF-α) → ARDS, multiorgan failure in severe disease.",
        disease: "**COVID-19 (SARS-CoV-2):** wide spectrum — asymptomatic → ARDS. Fever, cough, **anosmia/ageusia** (characteristic), dyspnea. Severe: ARDS, cytokine storm, coagulopathy (hypercoagulable — PE/DVT), myocarditis.
**SARS (2003):** severe atypical pneumonia, 10% mortality.
**MERS (Middle East):** camels → humans, 35% mortality.
**Common cold coronaviruses** (OC43, HKU1, 229E, NL63): 10–30% of common colds.",
        tx: "COVID-19: **remdesivir** (RNA polymerase inhibitor), **nirmatrelvir/ritonavir (Paxlovid)** (protease inhibitor, high-risk early treatment), **dexamethasone** (reduces mortality in patients requiring O₂/ventilation), **baricitinib** (JAK inhibitor). mRNA vaccines (Pfizer BNT162b2, Moderna mRNA-1273).",
        pearl: "**ACE2 = entry receptor** for SARS-CoV-2. Anosmia/ageusia early in infection = characteristic clue.
**Dexamethasone reduces mortality** in severe COVID-19 (RECOVERY trial) — but harm if given when no respiratory support needed. mRNA vaccines deliver spike protein mRNA → host cells make spike → immune response — **mRNA does NOT integrate into genome.** Coronaviruses have largest RNA genome (~30kb) and proofreading exonuclease (less mutation rate than influenza but still evolves)."
      }
    ]
  },
  {
    group: "RNA Viruses — Negative Sense",
    color: "vir",
    organisms: [
      {
        name: "Rhabdovirus (Rabies)",
        summary: "Bullet-shaped ssRNA(−) — animal bite, travels retrograde along nerves; encephalitis, hydrophobia, aerophobia; Negri bodies; almost universally fatal once symptomatic; PEP is critical",
gram: "ssRNA (−), enveloped (bullet-shaped)",
virulence: "**P protein (nucleoprotein)** — pathognomonic Negri body.
**G protein (glycoprotein)** — binds nicotinic ACh receptors and NCAM at neuromuscular junction.
**Retrograde axonal transport** up peripheral nerves → CNS. Incubation: weeks to months (depends on distance from CNS).",
        disease: "**Prodrome:** fever, paresthesia at bite site (tingling, pruritus).
**Furious rabies (80%):** agitation, hyperexcitability, **hydrophobia** (laryngeal spasm when drinking), **aerophobia** (spasm triggered by air), autonomic instability.
**Paralytic ('dumb') rabies (20%):** ascending flaccid paralysis, mimics GBS.
**Coma and death** — virtually 100% fatal once symptoms begin.
**Negri bodies:** eosinophilic cytoplasmic inclusions in hippocampal Purkinje cells (Ammon's horn) — pathognomonic.",
        tx: "Once symptomatic: almost universally fatal.
**Post-exposure prophylaxis (PEP):** wash wound immediately (soap + water, 15 min) + **rabies immune globulin** (RIG) at wound site + **rabies vaccine** (days 0, 3, 7, 14). Pre-exposure: vaccination for high-risk (vets, wildlife workers, travelers). Bats: most common US source of human rabies (painless bite may go unnoticed).",
        pearl: "**Hydrophobia + aerophobia = rabies.** Negri bodies in hippocampus (Ammon's horn) = pathognomonic on autopsy.
**PEP is near 100% effective if given promptly.** Bat exposure (even if bite not noticed — sleeping person, child) → treat as exposure. Incubation proportional to distance from CNS (bite on face = shorter). 'Milwaukee protocol' (induced coma) has not been reliably reproduced."
      },
      {
        name: "Filovirus (Ebola & Marburg)",
        summary: "Filamentous enveloped ssRNA(−) — hemorrhagic fever, >50% mortality, bat/primate reservoir; person-to-person via direct contact with body fluids; BSL-4; treat with mAb (Ebola)",
gram: "ssRNA (−), enveloped (long filamentous)",
virulence: "**NPC1 (Niemann-Pick C1) receptor** — intracellular entry.
**GP glycoprotein** — cell attachment/fusion.
**VP35** — IFN antagonist (innate immune evasion). Massive cytokine storm → multiorgan failure, hemorrhage.",
        disease: "**Viral hemorrhagic fever (VHF):** incubation 2–21 days. Sudden fever, severe headache, myalgia → N/V/D, rash → hemorrhagic phase (bleeding from multiple sites, DIC, petechiae) → multiorgan failure.
**Case fatality 25–90%** (varies by outbreak/species).
**Transmission:** direct contact with infected blood/body fluids, NOT airborne.
**Reservoir:** fruit bats (asymptomatic). West Africa outbreaks (2014–2016 = largest ever).
**Marburg:** similar syndrome, related virus.",
        tx: "**Ebola:**
**REGEN-EB3** or **mAb114** (monoclonal antibodies — FDA approved, significantly reduce mortality).
**Supportive:** aggressive fluid/electrolyte management. Strict **contact and droplet precautions** (PPE). Vaccine: rVSV-ZEBOV (Ervebo — FDA approved for Ebola Zaire). No treatment for Marburg.",
        pearl: "**Not airborne** — transmission requires direct contact with body fluids (blood, stool, vomit, semen). PPE = gowns, gloves, face shield, N95.
**BSL-4 organism** (highest biosafety level). Bioterrorism Category A. Clinical rule: high fever + hemorrhage + epidemiological link (travel to endemic area, contact with infected) = VHF protocol. Ebola can persist in semen for months (sexual transmission post-recovery)."
      },
      {
        name: "Bunyavirus (California Encephalitis & Hantavirus)",
        summary: "Segmented ssRNA(−) — California encephalitis (La Crosse, Aedes mosquito, children), Hantavirus (rodent droppings, HCPS — hemorrhagic pulmonary syndrome)",
gram: "ssRNA (−), enveloped, segmented (3 segments)",
virulence: "Segmented genome (3 segments: S, M, L).
**Hantavirus:** inhaled rodent urine/feces aerosols.
**California encephalitis (La Crosse):** Aedes triseriatus mosquito → treehole mosquito in Midwest/Southeast.",
        disease: "**La Crosse encephalitis (California serogroup):** most common arboviral encephalitis in children (under 16); Midwest US, summertime. Fever, headache, seizures — usually benign/self-limited.
**Hantavirus Pulmonary Syndrome (HCPS — Sin Nombre virus):** deer mouse reservoir in American Southwest. Inhalation of rodent droppings. Prodrome (fever, myalgia) → rapid
**ARDS** and cardiogenic shock (high mortality ~35%).
**Hantavirus hemorrhagic fever with renal syndrome (HFRS):** Old World hantaviruses → AKI, hemorrhage (not pulmonary).",
        tx: "Supportive (no specific antiviral). HCPS: ICU, mechanical ventilation, ECMO for severe cases. Ribavirin: ineffective for HCPS. No vaccine available in US.",
        pearl: "**Hantavirus** = respiratory illness (not encephalitis) + **deer mouse exposure** (Southwest US, cleaning abandoned buildings/sheds). HCPS = severe ARDS + thrombocytopenia.
**No person-to-person transmission** (vs Ebola).
**La Crosse encephalitis** = children + treehole mosquito + Midwest. Bunyavirus has 3-segment genome (can reassort but less dramatic than influenza's 8 segments)."
      },
      {
        name: "Arenavirus (LCMV & Lassa Fever)",
        summary: "Enveloped ssRNA(−) bisegmented — LCMV from mice (aseptic meningitis, teratogenic), Lassa fever (rodent droppings, hemorrhagic fever, West Africa); treat severe Lassa with ribavirin",
gram: "ssRNA (−), enveloped, bisegmented (2 segments)",
virulence: "Sandy (arenose) granules in virion = ribosomes from host cells (non-functional).
**Bisegmented** genome. **α-dystroglycan** receptor. Transmitted via rodent urine/feces. Person-to-person for Lassa (healthcare workers at risk).",
        disease: "**LCMV (Lymphocytic choriomeningitis virus):** house mouse reservoir.
**Aseptic meningitis** (fever, headache, neck stiffness, CSF: lymphocytes + low glucose) in adults.
**Teratogenic** (congenital LCMV: hydrocephalus, chorioretinitis — similar to Toxoplasma but acquired from mouse exposure). Pet hamsters/mice are reservoir.
**Lassa fever:** rodent (Mastomys rat) reservoir in West Africa. Hemorrhagic fever + deafness (sensorineural — 30% of survivors). High mortality (1–15% overall; 15–20% hospitalized).",
        tx: "LCMV: supportive.
**Lassa fever: ribavirin** (early treatment — reduces mortality). Strict isolation (contact + droplet). No approved vaccine.",
        pearl: "**LCMV:** asymptomatic exposure in adults but teratogenic in pregnancy → congenital infection resembling Toxoplasma (hydrocephalus, chorioretinitis). Ask about pet rodent exposure in pregnant women with TORCH-like syndrome.
**Lassa fever:** sensorineural hearing loss is the classic post-infectious complication. Arena = sand (sandy granules). Bisegmented genome with ambisense coding."
      },
      {
        name: "Reovirus (Rotavirus)",
        summary: "dsRNA, naked — #1 cause of severe gastroenteritis in infants/children worldwide; oral-fecal; watery diarrhea + vomiting; treat with ORS; rotavirus vaccine dramatically reduces childhood mortality",
gram: "dsRNA, non-enveloped (Reoviridae — Rotavirus genus)",
virulence: "**Double-layered icosahedral capsid** (looks like wheel — Latin: 'rota').
**VP4 (P antigen)** + **VP7 (G antigen)** → outer capsid proteins → cell attachment + neutralization targets → vaccine antigens. NSP4: viral enterotoxin → secretory diarrhea.",
        disease: "**Acute gastroenteritis:** fever + vomiting (1–2 days) → profuse watery diarrhea (3–8 days) — **non-bloody, non-mucoid**. Severe dehydration → main cause of death. Peak: 6 months – 2 years; wintertime (Northern latitudes — 'winter vomiting disease' applied more to Norovirus but rotavirus has winter peak too).
**Worldwide:** leading cause of diarrhea deaths in children <5 in developing countries (>200,000 deaths/year).",
        tx: "**Oral rehydration solution (ORS)** — cornerstone. IV fluids for severe dehydration.
**Zinc** supplementation in developing world.
**Rotavirus vaccine:** oral (RotaTeq or Rotarix — live attenuated), given at 2 and 4 months (RotaTeq: 2, 4, 6 months) — dramatically reduces hospitalizations.",
        pearl: "**#1 cause of viral gastroenteritis requiring hospitalization in children under 5** (globally). Watery, non-bloody (vs Shigella/EHEC = bloody).
**Rotavirus vaccine** is one of the most impactful pediatric vaccines in global health. Wheel-shaped on electron microscopy = pathognomonic. NSP4 = the viral enterotoxin (acts like cholera toxin via cAMP). Reovirus = respiratory enteric orphan virus (infects respiratory/GI tract)."
      }
    ]
  },
  {
    group: "RNA Viruses — Retrovirus & Other",
    color: "vir",
    organisms: [
      {
        name: "HIV",
        summary: "SS (+) RNA retrovirus — CD4+ T-cell depletion; AIDS < 200 CD4; HAART; opportunistic infections by CD4 count",
gram: "ssRNA (+), retrovirus, enveloped",
virulence: "**Reverse transcriptase** (RNA→DNA, error-prone → mutations).
**Integrase** (integrates provirus).
**Protease** (cleaves polyproteins). **gp120/gp41** (cell entry via CD4 + CCR5/CXCR4). **tat, rev, nef** (transcription/immune evasion).",
        disease: "**Acute HIV:** mononucleosis-like syndrome (2–4 wks post-exposure).
**Latent period:** asymptomatic, CD4 slowly declines.
**AIDS (CD4 < 200):** opportunistic infections by CD4 level — **>500:** recurrent oral candidiasis, constitutional; **<200:** PCP, Toxoplasma, Cryptococcus, histoplasmosis; **<100:** CNS lymphoma, CMV, MAC; **<50:** CMV retinitis, disseminated MAC.
**AIDS-defining conditions:** PCP, MAC, CMV retinitis, CNS lymphoma, Kaposi's sarcoma, cryptococcal meningitis, cerebral toxoplasmosis, wasting syndrome.",
        tx: "**HAART** (highly active antiretroviral therapy): 2 NRTIs + PI or INSTI or NNRTI (integrase inhibitor preferred).
**PrEP**: TDF/FTC.
**Opportunistic infection prophylaxis:** CD4 <200 → TMP-SMX (PCP); <100 → add fluconazole (Cryptococcus) or azithromycin (MAC).",
        pearl: "**Opportunistic infection CD4 thresholds to memorize:** >500=candidiasis; <500=TB; <200=PCP (TMP-SMX prophylaxis), Toxo (if seropositive); <100=MAC (azithromycin prophylaxis); <50=CMV retinitis, disseminated MAC.
**Western blot** confirms ELISA screening.
**NNRTI**: inhibits reverse transcriptase non-competitively.
**Protease inhibitors:** -navir suffix, MetS, fat redistribution, hyperglycemia."
      },
      {
        name: "Influenza",
        summary: "Orthomyxovirus — segmented ssRNA (reassortment → pandemics), hemagglutinin/neuraminidase; treat with oseltamivir/zanamivir within 48h",
gram: "ssRNA (−), segmented, enveloped",
virulence: "**Hemagglutinin (HA):** binds sialic acid receptors on host cells (attachment).
**Neuraminidase (NA):** cleaves sialic acid (release of virions). **8 segments** → reassortment between human + animal influenza → **antigenic shift** → pandemic.
**Antigenic drift** (point mutations in HA/NA) → seasonal epidemics.",
        disease: "Abrupt fever, headache, myalgias, malaise, non-productive cough (distinguishes from common cold). Complications: primary influenza pneumonia, secondary bacterial pneumonia (S. aureus, S. pneumoniae, H. influenzae), myocarditis, Reye syndrome (children + aspirin). Influenza B: more neuraminidase variation, mainly in children.",
        tx: "**Oseltamivir** (Tamiflu) or zanamivir (inhaled) — neuraminidase inhibitors, effective if started within 48h.
**Annual flu vaccine** (trivalent or quadrivalent inactivated).
**Live attenuated vaccine (FluMist):** nasal spray, ages 2–49, not in pregnancy or immunocompromised. Amantadine/rimantadine: M2 inhibitors (influenza A only — most strains now resistant).",
        pearl: "**Antigenic drift** (minor mutations, annual seasonal flu) vs **antigenic shift** (major reassortment of 8 segments, pandemic potential).
**Reye syndrome:** children + aspirin + influenza or VZV → hepatic failure + encephalopathy. Primary influenza pneumonia: diffuse bilateral infiltrates, severe. Oseltamivir not recommended for uncomplicated flu in healthy young patients."
      },
      {
        name: "Measles (Rubeola)",
        summary: "Koplik spots → maculopapular rash cephalocaudal; SSPE complication; MMR vaccine; paramyxovirus",
gram: "ssRNA (−), non-segmented, enveloped (Paramyxovirus)",
virulence: "Fusion protein (syncytia formation → multinucleated giant cells). Infects via respiratory tract. Immunosuppression during acute infection.",
        disease: "**4 Cs:** Cough, Coryza, Conjunctivitis + fever (prodrome) →
**Koplik spots** (blue-white on buccal mucosa — pathognomonic, 1–2 days before rash) → maculopapular rash spreads head-to-toe. Complications: pneumonia (Warthin-Finkeldey giant cells), encephalitis (acute — 1/1000),
**SSPE** (subacute sclerosing panencephalitis — slow virus, 7–10 years post-infection → progressive neurodegeneration, high antibody titers in CSF).",
        tx: "Supportive.
**Vitamin A** reduces mortality in children.
**MMR vaccine** (live attenuated) — 2 doses, 12–15 months and 4–6 years.
**IGIV** for post-exposure prophylaxis in immunocompromised.",
        pearl: "**Koplik spots** are pathognomonic and appear 1–2 days BEFORE the rash — classic Step 1 question.
**SSPE** occurs years after measles → inclusion bodies in neurons + astrocytes → dementia, seizures, death. Measles is the most common vaccine-preventable cause of death in children worldwide. Rash spares palms/soles (unlike syphilis/RMSF)."
      },
      {
        name: "Mumps",
        summary: "Paramyxovirus — parotitis, orchitis (post-pubertal males → sterility), meningitis; MMR vaccine",
gram: "ssRNA (−), non-segmented, enveloped (Paramyxovirus)",
virulence: "Hemagglutinin-neuraminidase (HN) and fusion protein.",
        disease: "**Parotitis** (bilateral or unilateral parotid swelling) — painful.
**Orchitis** (post-pubertal males, unilateral > bilateral) — can cause infertility if bilateral.
**Aseptic meningitis** (most common complication overall). Pancreatitis (↑ amylase + lipase). Sensorineural deafness (unilateral, major complication).",
        tx: "Supportive.
**MMR vaccine** (highly effective). Scrotal support for orchitis.",
        pearl: "**Orchitis** in post-pubertal male with parotitis = mumps. Bilateral orchitis → risk of sterility. Mumps is most common cause of **acquired sensorineural hearing loss** in unvaccinated children. CSF in mumps meningitis: lymphocytic pleocytosis, ↑ protein, normal glucose (aseptic)."
      },
      {
        name: "Hepatitis E Virus (HEV)",
        summary: "Fecal-oral ssRNA(+) — self-limited acute hepatitis; unique: 20% maternal mortality in 3rd trimester; Southeast Asia/Africa endemic; no chronic disease in immunocompetent; treat with ribavirin in immunocompromised",
gram: "ssRNA (+), non-enveloped (Hepeviridae)",
virulence: "Non-enveloped (similar to HAV — fecal-oral, waterborne). Swine/deer/rabbit reservoir (zoonotic). Genotype 1/2: humans only; Genotype 3/4: zoonotic (undercooked pork in developed countries).",
        disease: "**Acute hepatitis:** self-limited (similar to HAV — jaundice, malaise, nausea).
**No chronic disease in immunocompetent** (like HAV).
**Pregnant women (3rd trimester): 15–25% mortality** — fulminant hepatic failure (unique high fatality). Endemic in Southeast Asia, Africa, Mexico.
**Immunocompromised (transplant):** chronic HEV → cirrhosis.",
        tx: "Supportive for immunocompetent (self-limited).
**Ribavirin** for immunocompromised chronic HEV. Reduce immunosuppression. Vaccine available in China (not in US).",
        pearl: "**HEV = the hepatitis that kills pregnant women** (20% mortality in 3rd trimester — dramatic Step 1 pearl). Like HAV: fecal-oral, no chronic disease in immunocompetent. Unlike HAV: high pregnancy mortality, zoonotic reservoir (pig), immunocompromised can develop chronic disease. HEV + pregnancy + jaundice = very high-yield vignette."
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
        summary: "Ohio/Mississippi River valleys, caves/bird droppings, dimorphic — intracellular in macrophages (yeast form); treat with itraconazole/amphotericin B",
gram: "Dimorphic fungus (mold at 20°C → yeast at 37°C)",
virulence: "Yeast form survives intracellularly in macrophages (like TB). Soil contamination from bird/bat droppings.",
        disease: "**Pulmonary histoplasmosis:** usually asymptomatic (self-limited flu-like illness, hilar lymphadenopathy on CXR). Resembles TB (upper lobe, cavitation, calcifications) in immunocompetent.
**Disseminated (immunocompromised, HIV with CD4 <150):** fever, weight loss, hepatosplenomegaly, oral ulcers, adrenal insufficiency.
**Mediastinal/pericardial complications** in chronic forms.",
        tx: "Mild/moderate: **itraconazole**. Severe/disseminated: **amphotericin B** then step-down to itraconazole.
**Urine Histoplasma antigen** (most sensitive for disseminated disease).",
        pearl: "**Intracellular** yeast found in macrophages on silver stain (GMS stain) — differentiate from other fungi (note small oval yeasts within macrophage cytoplasm).
**Ohio/Mississippi River Valley** exposure.
**Urine antigen** is the test of choice for disseminated histoplasmosis.
**Adrenal involvement** is characteristic (bilateral adrenal enlargement → Addison's disease)."
      },
      {
        name: "Coccidioides immitis",
        summary: "Southwestern US/California (San Joaquin Valley fever), dimorphic — spherules with endospores in tissue; eosinophilia, erythema nodosum",
gram: "Dimorphic fungus (arthroconidia in soil → spherules in tissue)",
virulence: "Arthroconidia highly infectious (inhalation). Spherules in tissue contain multiple endospores (200–300) → rupture → spread.",
        disease: "**Primary (Valley fever):** flu-like illness, 60% asymptomatic. Eosinophilia (classic). Erythema nodosum (immune complex reaction — tender red nodules on shins — 'desert rheumatism').
**Disseminated (immunocompromised, Black/Filipino patients at highest risk):** meningitis (most serious — CSF eosinophilia), bone/skin/lymph node involvement.",
        tx: "Mild/pulmonary: **fluconazole** or itraconazole. Severe/disseminated: **amphotericin B**. Meningitis: fluconazole (lifelong suppression). Amphotericin for severe.",
        pearl: "**Spherules with endospores** in tissue biopsy = pathognomonic for Coccidioides (no other organism forms spherules).
**CSF eosinophilia** is a clue for coccidioidal meningitis (also consider in parasitic meningitis).
**Risk factors for dissemination:** HIV, pregnancy (3rd trimester), immunosuppression, Black/Filipino ancestry. Do NOT give live fungal cultures to others — highly infectious arthroconidia."
      },
      {
        name: "Blastomyces dermatitidis",
        summary: "North America (Ohio/Mississippi + Great Lakes), broad-based budding yeast — verrucous skin lesions, pulmonary, osteomyelitis; no reliable serology",
gram: "Dimorphic fungus (mold in environment, yeast in tissue)",
virulence: "Soil (decaying wood, near water). Inhalation of conidia.",
        disease: "**Pulmonary blastomycosis:** flu-like, often mistaken for bacterial pneumonia or cancer. Upper lobe infiltrates.
**Skin (most distinctive):** verrucous (warty), ulcerating, crusted skin lesions — face, extremities.
**Bone:** osteolytic lesions.
**Genitourinary:** prostatitis, epididymo-orchitis.
**CNS:** meningitis, abscess (rare).",
        tx: "Mild-moderate: **itraconazole**. Severe/CNS: **amphotericin B** then itraconazole.",
        pearl: "**Broad-based budding** (wide base between mother and daughter yeast cell) = Blastomyces. Contrast with
**Cryptococcus** (narrow-based budding, thick capsule) and
**Histoplasma** (intracellular, tiny). Urine antigen cross-reacts with Histoplasma antigen — not specific.
**Skin lesions** are distinctive: verrucous, non-tender, crusted — can mimic squamous cell carcinoma."
      },
      {
        name: "Paracoccidioides brasiliensis",
        summary: "Dimorphic fungus — South/Central America (Brazil), rural/agricultural workers; 'captain's wheel' appearance (multiple budding), chronic granulomatous lung + mucocutaneous lesions; treat itraconazole",
gram: "Dimorphic fungus (mold in environment, yeast in tissue)",
virulence: "Dimorphic: mold in environment (conidia inhaled) → yeast in body.
**Multiple budding ('captain's wheel' or 'pilot's wheel')** — the hallmark: large yeast with multiple daughter cells attached around periphery.",
        disease: "**Endemic to South/Central America** (Brazil, Colombia, Venezuela). Agricultural/rural workers (male-dominated due to hormonal influence — estrogens inhibit mycelium→yeast conversion, protecting women pre-menopause).
**Pulmonary:** chronic granulomatous disease, fibrosis.
**Mucocutaneous:** painful ulcerating lesions of lips, gums, oral mucosa, larynx.
**Lymphatic:** generalized LAD. Adrenal involvement (Addison's disease-like).",
        tx: "Mild-moderate: **itraconazole** (12–18 months). Severe: **amphotericin B** → step-down to itraconazole. Sulfonamides (TMP-SMX) — historical, still used in low-resource settings.",
        pearl: "**Captain's wheel yeast** = Paracoccidioides (multiple buds in a circle around large central cell). Geographic clue:
**South/Latin America**. Estrogen protective effect: women rarely get progressive disease pre-menopause (estrogen prevents the mycelium→yeast conversion). Compare with
**Coccidioides** (also mold in environment → spherules in tissue, Southwest USA). Often confused with Blasto or Histo — key: location (South America) + captain's wheel morphology."
      }
    ]
  },
  {
    group: "Cutaneous Mycoses",
    color: "fung",
    organisms: [
      {
        name: "Malassezia furfur",
        summary: "Lipophilic yeast — tinea versicolor (hypo/hyperpigmented macules, 'spaghetti and meatballs' on KOH), seborrheic dermatitis; requires lipid supplementation for culture; treat topical antifungals",
gram: "Yeast (lipophilic, part of normal skin flora)",
virulence: "**Obligate lipophile** (requires exogenous lipids for growth — cannot be cultured on standard media without olive oil overlay). Produces azelaic acid → inhibits melanin synthesis → hypopigmented macules. Part of normal skin flora — disease with overgrowth.",
        disease: "**Tinea versicolor (pityriasis versicolor):** hypo- or hyperpigmented (on dark skin), or pink/salmon-colored (on light skin) macules on trunk/shoulders.
**Non-itchy or mildly pruritic.** Fluoresces yellow-green under Wood's lamp.
**KOH scraping:** 'spaghetti and meatballs' pattern (hyphae + yeast clusters). Worsens in humid/hot weather, sunlight.
**Seborrheic dermatitis/dandruff:** contributes to scalp/face flaking.
**Neonatal sepsis:** IV lipid-infused neonates in NICU (Malassezia contaminates lipid lines).",
        tx: "**Topical selenium sulfide** or **ketoconazole shampoo** (applied to skin).
**Topical azoles** (clotrimazole, miconazole). Oral fluconazole or itraconazole for severe/recurrent. Warn patients: **pigmentation changes persist for months** even after successful treatment (while melanocytes recover).",
        pearl: "**'Spaghetti and meatballs'** on KOH = pathognomonic for Malassezia furfur. Tinea versicolor is the MOST COMMON superficial fungal infection worldwide.
**Wood's lamp:** yellow-green fluorescence. Lipid supplementation needed for culture (olive oil overlay). NICU context: premature infant on IV lipids + fungal sepsis = Malassezia. Pigmentation takes months to normalize after treatment — explain to patients."
      },
      {
        name: "Dermatophytes (Tinea)",
        summary: "Keratinophilic molds — tinea capitis (scalp), corporis (ringworm), pedis (athlete's foot), cruris (jock itch), unguium (onychomycosis); KOH shows hyphae; treat topical azoles or oral terbinafine/griseofulvin",
gram: "Mold (hyphae only — no yeast form; not truly dimorphic)",
virulence: "Three genera: **Trichophyton, Microsporum, Epidermophyton.** Keratinophilic — digest keratin in skin/hair/nails.
**Dermatophytes NEVER invade dermis** (unlike systemic fungi). Spread by direct contact (person, animal, fomites, soil).",
        disease: "**Tinea capitis:** scalp ringworm — scaly patches, alopecia; mainly children.
**Tinea corporis:** 'ringworm' — annular scaly plaque with raised border, central clearing.
**Tinea pedis (athlete's foot):** macerated interdigital spaces, scaling, fissures.
**Tinea cruris (jock itch):** groin — annular scaly plaque, spares scrotum.
**Tinea unguium (onychomycosis):** nail — yellow/brown, thickened, crumbly.
**Tinea manuum:** hand.
**Majocchi granuloma:** dermatophyte with deep follicular involvement (immunocompromised).",
        tx: "**Topical azoles** (clotrimazole, miconazole, terbinafine) for most tinea.
**Oral terbinafine** for onychomycosis (best nail penetration).
**Oral griseofulvin** for tinea capitis (children — need oral; topical doesn't penetrate hair shaft). Oral fluconazole/itraconazole: alternatives.",
        pearl: "**KOH prep** of skin scraping: branching septate hyphae (no buds).
**Tinea capitis** must be treated orally (griseofulvin is classic) — topical agents can't penetrate the hair follicle.
**Griseofulvin mechanism:** disrupts microtubule polymerization, deposits in keratin → kills dermatophytes as new keratin forms.
**Terbinafine:** inhibits ergosterol synthesis (squalene epoxidase — different from azoles which inhibit lanosterol demethylase). Onychomycosis: oral treatment for 3 months for nails. Wood's lamp: Microsporum fluoresces, Trichophyton does NOT."
      },
      {
        name: "Sporothrix schenckii",
        summary: "Rose gardener's fungus — thorn prick → nodules along lymphatics (sporotrichoid spread); dimorphic; treat with itraconazole (or SSKI for lymphocutaneous)",
gram: "Dimorphic fungus (mold in environment, cigar-shaped yeast in tissue)",
virulence: "Dimorphic: **mold in soil/plants** (particularly rose thorns, sphagnum moss, decaying wood) → **cigar-shaped yeast in tissue**. Thermally dimorphic (mold at room temp, yeast at 37°C). Traumatic inoculation via thorn/splinter.",
        disease: "**Lymphocutaneous sporotrichosis (most common):** papule/nodule at inoculation site (finger/hand) → **ascending nodules along lymphatic channels** ('sporotrichoid pattern' of spread — also seen in Nocardia, Leishmania, NTM). Secondary nodules ulcerate.
**Fixed cutaneous:** single lesion only.
**Pulmonary:** inhalation → chronic cavitary disease (rare, immunocompromised, alcoholics).
**Disseminated:** immunocompromised → joints, CNS, viscera.",
        tx: "Lymphocutaneous: **itraconazole × 3–6 months** (drug of choice).
**SSKI (saturated solution of potassium iodide):** older alternative, cheap. Pulmonary/disseminated: **itraconazole or amphotericin B** (severe).",
        pearl: "**Rose thorn + ascending lymphangitic nodules = Sporothrix** ('rose gardener's disease'). Cigar-shaped yeast in tissue (asteroid body: yeast + eosinophilic spikes — pathognomonic in tissue).
**Sporotrichoid spread pattern** (nodules tracking up arm along lymphatics) = Step 1 favorite. Also consider Nocardia (weakly acid-fast), fish tank granuloma (M. marinum), and cutaneous leishmaniasis in differential.
**SSKI** is unique treatment modality (mechanism unknown — iodide may have direct fungicidal effect)."
      }
    ]
  },
  {
    group: "Opportunistic Fungal Infections",
    color: "fung",
    organisms: [
      {
        name: "Candida albicans",
        summary: "Dimorphic yeast with germ tubes — pseudohyphae, germ tube test positive; thrush/esophagitis/UTI/bloodstream in immunocompromised",
gram: "Dimorphic yeast (budding yeast + pseudohyphae + hyphae)",
virulence: "**Germ tube formation** (true hyphae in serum — germ tube test positive, distinguishes C. albicans from other Candida).
**Biofilm** on prosthetics. Transition between yeast/hyphae (phenotypic switching). Phospholipase B.",
        disease: "**Oral thrush:** white plaques on erythematous base, scrape off (distinguish from leukoplakia which doesn't scrape off).
**Esophageal candidiasis:** dysphagia + odynophagia (AIDS-defining if severe), white plaques on endoscopy.
**Vulvovaginitis:** cottage-cheese discharge, pruritus.
**Diaper rash:** satellite lesions.
**Invasive/bloodstream (candidemia):** IV catheters, broad-spectrum antibiotics, TPN, neutropenia → disseminated to retina, liver, spleen (retinal fluffy white lesions).",
        tx: "Mucocutaneous: **fluconazole** or nystatin (topical). Esophageal: fluconazole (systemic). Candidemia: **echinocandins** (caspofungin, micafungin) — first-line for severe/ICU. Azoles for stable non-critically ill. Remove catheters.",
        pearl: "**Germ tube test positive** = C. albicans (forms true hyphae in serum at 37°C within 2–3h — no other common Candida does this).
**Nystatin is topical only** (too toxic for systemic use).
**Echinocandins** (caspofungin, micafungin, anidulafungin): inhibit β-1,3-glucan synthase → cell wall → less fungal toxicity than amphotericin. C. krusei and C. glabrata: intrinsically resistant to fluconazole."
      },
      {
        name: "Aspergillus fumigatus",
        summary: "Septate hyphae at 45° (acute angle) — allergic bronchopulmonary (ABPA), aspergilloma, invasive aspergillosis in neutropenia",
gram: "Mold (septate hyphae with dichotomous branching at 45°)",
virulence: "Small conidia easily inhaled. Thermotolerance (grows at 37°C–50°C). Produces gliotoxins, elastases, protease.",
        disease: "**ABPA (allergic bronchopulmonary aspergillosis):** asthma/CF patient, eosinophilia, elevated IgE, mucus plugs, central bronchiectasis — type I/III hypersensitivity.
**Aspergilloma ('fungus ball'):** colonization of pre-existing lung cavity (prior TB) — hemoptysis, 'crescent sign' (Monod sign) on CXR.
**Invasive pulmonary aspergillosis:** neutropenic/immunocompromised patients (transplant, prolonged steroids) — angioinvasion → hemorrhagic infarcts, halo sign (CT — ground-glass halo around nodule), air crescent sign late.
**Sinusitis** (invasive in immunocompromised).",
        tx: "ABPA: steroids + itraconazole. Aspergilloma: observation (surgical if hemoptysis).
**Invasive:** **voriconazole** (drug of choice). Alternative: amphotericin B or isavuconazole. Echinocandins: second-line.",
        pearl: "**Voriconazole** is now the DOC for invasive aspergillosis (superior to amphotericin B in trials).
**CT halo sign** (ground-glass density surrounding pulmonary nodule) = early invasive aspergillosis in neutropenic patient. **45° branching** (acute angle, septate) = Aspergillus; **90° (right angle, non-septate)** = Mucor/Rhizopus. Galactomannan assay: Aspergillus antigen in serum/BAL — useful for diagnosis in high-risk patients."
      },
      {
        name: "Cryptococcus neoformans",
        summary: "Narrow-based budding, thick polysaccharide capsule (India ink halo), urease+ — meningitis in HIV (CD4 <100); pigeon droppings; treat with amphotericin B + 5-FC",
gram: "Encapsulated yeast (thick polysaccharide capsule)",
virulence: "**Polysaccharide capsule** (massive, inhibits phagocytosis and T-cell activation; capsular material detected by cryptococcal antigen test — extremely sensitive). Melanin production (protects against oxidative killing). Urease positive.",
        disease: "**Cryptococcal meningitis** (AIDS-defining, CD4 <100): insidious onset — headache, fever, meningismus (may be absent), altered mental status. CSF: lymphocytic pleocytosis, ↑ protein, ↓ glucose, India ink positive (50–80%), cryptococcal antigen (>90%).
**Serum CrAg:** highly sensitive. High intracranial pressure is a major complication.",
        tx: "**Induction:** amphotericin B + **flucytosine (5-FC)** × 2 weeks.
**Consolidation:** fluconazole × 8 weeks.
**Maintenance (suppression):** fluconazole (lifelong or until immune reconstitution).
**Elevated ICP:** serial therapeutic LPs to lower pressure (no steroids for ICP in cryptococcal meningitis).",
        pearl: "**India ink** shows negative staining — capsule excludes ink creating a clear halo around yeast cell.
**Cryptococcal antigen** > India ink for sensitivity. **5-FC (flucytosine)** inhibits fungal thymidylate synthase → pyrimidine synthesis. Side effects: bone marrow toxicity, GI.
**Immune reconstitution inflammatory syndrome (IRIS)** can paradoxically worsen cryptococcal meningitis after starting ART — manage with steroids."
      },
      {
        name: "Mucormycosis (Rhizopus/Mucor)",
        summary: "Non-septate hyphae at 90° — rhinocerebral in diabetic ketoacidosis (DKA), black eschar, rapidly fatal; treat with amphotericin B + surgery",
gram: "Mold (non-septate/aseptate ribbon-like hyphae, wide, irregular, 90° branching)",
virulence: "Iron as essential nutrient. High glucose + acidosis + ↑ free iron (DKA) creates ideal environment. Angioinvasion.",
        disease: "**Rhinocerebral mucormycosis:** DKA, uncontrolled diabetes, deferoxamine therapy (releases iron). Starts in nasal cavity → spreads to sinuses → orbits → brain.
**Black eschar** on nasal mucosa/palate (necrotic — angioinvasive). Facial pain, proptosis, CN deficits, headache.
**Pulmonary:** immunocompromised (similar to Aspergillus but more angioinvasive). Rapidly fatal if untreated.",
        tx: "**Liposomal amphotericin B** (drug of choice).
**Surgical debridement** (aggressive). Correct DKA/hyperglycemia. Isavuconazole (alternative). Posaconazole for step-down.",
        pearl: "**90° branching + non-septate** = Mucormycosis (Mucor, Rhizopus, Absidia). **45° branching + septate** = Aspergillus.
**DKA patient with black eschar on nasal mucosa** = rhinocerebral mucormycosis — surgical emergency.
**Deferoxamine therapy** (iron chelator for iron overload) paradoxically predisposes to mucormycosis by providing usable iron via siderophore mechanism."
      },
      {
        name: "Pneumocystis jirovecii (PCP)",
        summary: "Atypical fungus — PCP pneumonia in HIV (CD4 <200), diffuse bilateral infiltrates (ground-glass), elevated LDH; treat with TMP-SMX",
gram: "Atypical fungus (no ergosterol — not culturable; fungal rRNA)",
virulence: "Cysts (ascospores containing 8 intracystic bodies) + trophic forms attach to type I pneumocytes. Formerly called P. carinii (classified as fungus by rRNA, but acts like protozoan).",
        disease: "**PCP pneumonia** (Pneumocystis pneumonia): AIDS-defining (CD4 <200). Insidious onset — progressive dyspnea, non-productive cough, fever. CXR: bilateral **perihilar/diffuse ground-glass** infiltrates (may be normal early). Elevated
**LDH** (non-specific but sensitive). Exercise-induced hypoxia.
**BAL (bronchoalveolar lavage)** with GMS (Gomori methenamine silver stain) or toluidine blue stain shows cysts. Spontaneous pneumothorax: complication in PCP.",
        tx: "**TMP-SMX** (drug of choice, IV/PO). Alternative: dapsone + trimethoprim, atovaquone (mild), clindamycin + primaquine (IV), IV pentamidine (severe).
**Steroids** (prednisone) if PaO2 <70 or A-a gradient >35 (↓ inflammatory damage).
**Prophylaxis:** TMP-SMX when CD4 <200 (also active against Toxoplasma).",
        pearl: "**CD4 <200 → start TMP-SMX prophylaxis** (covers both PCP and Toxoplasma).
**LDH elevation** is non-specific but a clue.
**BAL + GMS stain** (cysts appear as black round structures). NOT treated with azoles or echinocandins (no ergosterol target).
**Steroids** improve outcomes in moderate-severe PCP (reduce mortality 50%). Pneumothorax in HIV patient → think PCP."
      }
    ]
  }
],

parasites: [
  {
    group: "Protozoa — Intestinal & Blood",
    color: "para",
    organisms: [
      {
        name: "Plasmodium species (Malaria)",
        summary: "RBC parasite — cyclic fever, splenomegaly; P. falciparum (severe) vs P. vivax/ovale (relapse/hypnozoites); treat by species",
gram: "Protozoa (intracellular RBC parasite, Giemsa stain)",
virulence: "**Anopheles mosquito** (female) vector. Sporozoites → liver (hepatocytes, exoerythrocytic phase) → merozoites → RBCs (erythrocytic phase) → ring forms → schizonts (burst → fever) → gametocytes (mosquito ingestion).
**P. falciparum:** no hypnozoites, knob proteins on RBCs → cytoadherence, rosetting → **severe disease**. P. vivax/P. ovale: dormant liver forms (hypnozoites) → relapse.",
        disease: "**Cyclic fever:** P. vivax/ovale (48h — tertian), P. malariae (72h — quartan), P. falciparum (irregular).
**P. falciparum complications:** cerebral malaria (altered consciousness, seizures), severe anemia, hypoglycemia, ARDS, acute tubular necrosis, **blackwater fever** (massive hemolysis + hemoglobinuria). P. vivax/ovale: relapse from hypnozoites months-years later. All: splenomegaly, thrombocytopenia.",
        tx: "**P. falciparum:** artemether-lumefantrine or atovaquone-proguanil (uncomplicated); IV **artesunate** (severe).
**P. vivax/ovale:** chloroquine + **primaquine** (kills hypnozoites). Check G6PD before primaquine. Chloroquine-resistant falciparum: artesunate combination.
**Prophylaxis:** atovaquone-proguanil or doxycycline (malaria-endemic areas).",
        pearl: "**Primaquine** kills hypnozoites in P. vivax/ovale — prevents relapse.
**G6PD deficiency** → primaquine causes hemolysis → test G6PD first.
**Sickle cell trait** is protective against falciparum malaria (infected RBCs sickle → cleared faster).
**Schüffner's dots** (P. vivax/ovale) vs
**Maurer's clefts** (P. falciparum). P. malariae: infected RBCs normal size; P. vivax/ovale: enlarged; P. falciparum: normal size (multiple rings per RBC, banana-shaped gametocytes)."
      },
      {
        name: "Toxoplasma gondii",
        summary: "Definitive host: cats; congenital (calcifications + chorioretinitis + hydrocephalus) and CNS toxoplasmosis in HIV (CD4 <100); treat with pyrimethamine + sulfadiazine",
gram: "Obligate intracellular protozoan",
virulence: "Oocysts in cat feces, bradyzoites in undercooked meat.
**Obligate intracellular** (infects almost any nucleated cell). Tachyzoites (acute) → bradyzoites in tissue cysts (latency). Disrupts T-cell immunity triggers reactivation.",
        disease: "**Congenital toxoplasmosis** (TORCH): classic triad — **chorioretinitis + hydrocephalus + intracranial calcifications (diffuse periventricular)**. Plus seizures, jaundice, hepatosplenomegaly.
**CNS toxoplasmosis (HIV, CD4 <100):** multiple **ring-enhancing lesions** on MRI (basal ganglia/cortex), headache, fever, focal neurological deficits. Distinguish from primary CNS lymphoma (single ring-enhancing, periventricular).
**Ocular toxoplasmosis:** reactivation in adults → chorioretinitis, scotoma.",
        tx: "**Pyrimethamine + sulfadiazine + leucovorin** (folinic acid prevents bone marrow suppression from pyrimethamine).
**Alternative:** pyrimethamine + clindamycin.
**TMP-SMX prophylaxis** if CD4 <100 and Toxoplasma IgG positive.
**Empiric treatment:** if HIV patient has multiple ring-enhancing lesions → treat for Toxo empirically (if no improvement in 2 weeks → biopsy for CNS lymphoma).",
        pearl: "**Toxo vs CNS lymphoma:** Toxoplasma = multiple lesions, basal ganglia (bilateral), responds to empiric treatment. CNS lymphoma = single periventricular lesion, EBV associated, positive CSF EBV PCR, thallium SPECT (increased uptake in lymphoma).
**Congenital calcifications:** Toxoplasma = diffuse/scattered. CMV = **periventricular**. Both can cause chorioretinitis. Pyrimethamine: dihydrofolate reductase inhibitor → give leucovorin."
      },
      {
        name: "Giardia lamblia",
        summary: "Pear-shaped trophozoite + cyst — #1 parasitic diarrhea (hikers/contaminated water), malabsorption, floating stools; treat with metronidazole",
gram: "Protozoa — Flagellate",
virulence: "Trophozoites (pear-shaped, 2 nuclei 'owl-eye' appearance) attach to duodenal/jejunal epithelium with sucking disc → disrupts brush border → malabsorption. Cysts are infectious form (resistant to chlorine).",
        disease: "**Acute:** watery diarrhea (no blood, no fever), abdominal cramps, bloating, flatulence.
**Chronic:** steatorrhea, malabsorption (fat + fat-soluble vitamins A, D, E, K), weight loss.
**IgA deficiency:** increased susceptibility. Source: mountain streams, contaminated water, daycare centers.",
        tx: "**Metronidazole** (drug of choice). Alternative: tinidazole (single dose), nitazoxanide.",
        pearl: "**'Foul-smelling, greasy, floating stools' + hiker/camper + no blood** = Giardia. Flotation/stool O&P: cysts (oval, 4 nuclei). Trophozoites: sucking disc, 2 nuclei, 4 pairs flagella ('looks like a face'). IgA deficiency → recurrent Giardia. Distinguish from Cryptosporidium: Cryptosporidium is acid-fast, more severe in immunocompromised."
      },
      {
        name: "Entamoeba histolytica",
        summary: "Amebic dysentery + liver abscess — ingested cysts, trophozoites invade mucosa, RBCs in cytoplasm; treat with metronidazole + luminal agent",
gram: "Protozoa — Ameba",
virulence: "**Trophozoites** ingest RBCs (pathognomonic: RBCs within trophozoite cytoplasm on smear). Cysteine protease dissolves epithelial layer. Flask-shaped ulcers in colon.",
        disease: "**Amebic colitis (dysentery):** gradual onset bloody diarrhea, lower abdominal cramps, tenesmus. Flask-shaped ulcers on colonoscopy.
**Amebic liver abscess:** right lobe (most common), 'anchovy paste' pus (necrotic, sterile — few organisms). Fever, RUQ pain, elevated LFTs. Rupture risk into pleural/peritoneal space.
**Asymptomatic cyst passage:** common.",
        tx: "**Metronidazole** (tissue amebicide) + **luminal agent** (paromomycin or diloxanide furoate — kills cysts in intestine). Both required to eliminate cysts and tissue infection.",
        pearl: "**Liver abscess pus = 'anchovy paste'** (chocolate sauce) — yellow-brown necrotic material. CT: hypodense, right lobe, single lesion.
**Serology (anti-amoeba IgG)** — useful. Key histology: trophozoites with **ingested RBCs** in cytoplasm. Distinguish from pyogenic liver abscess (bacteria — polymicrobial, multiple lesions often). Metronidazole alone = inadequate (leaves cysts in gut → relapse)."
      },
      {
        name: "Cryptosporidium parvum",
        summary: "Acid-fast oocysts — watery diarrhea in immunocompetent (self-limited) vs life-threatening profuse diarrhea in HIV (CD4 <100); no effective treatment in AIDS",
gram: "Protozoa — Coccidian (acid-fast oocysts)",
virulence: "**Acid-fast oocysts** (survive chlorination). Infects intestinal epithelial cells (intracellular but extracytoplasmic — in brush border). Sexual and asexual reproduction in intestine.",
        disease: "**Immunocompetent:** self-limited watery diarrhea (1–3 weeks), nausea, cramps. Common in daycare workers, recreational water.
**HIV/AIDS (CD4 <100):** profuse watery diarrhea (3–15 L/day), wasting, biliary cryptosporidiosis (cholangiopathy — sclerosing cholangitis-like).",
        tx: "Immunocompetent: supportive.
**AIDS:** nitazoxanide (modest benefit) + **immune reconstitution with HAART** (only cure). No reliable anti-cryptosporidial drug.",
        pearl: "**Acid-fast** staining = key diagnostic feature (along with Cyclospora and Isospora). Oocysts are **4–6 µm** (smaller than RBCs). 'Cryptosporidium parvum = small (parvo) + hidden (crypto).' In AIDS, massive secretory diarrhea leads to wasting. Biliary involvement = AIDS cholangiopathy. Resistant to chlorination of water supplies — common in recreational water outbreaks."
      }
    ]
  },
  {
    group: "Protozoa — Blood & Tissue",
    color: "para",
    organisms: [
      {
        name: "Trypanosoma cruzi (Chagas Disease)",
        summary: "Reduviid (kissing) bug vector — Chagas disease; South/Central America; trypomastigotes in blood, amastigotes in tissue; dilated cardiomyopathy, megaesophagus, megacolon; treat benznidazole",
gram: "Protozoa (Kinetoplastida — kinetoplast visible on Giemsa)",
virulence: "**Reduviid bug (Triatoma — kissing bug)** bites near mouth/eyes, defecates on skin → trypomastigotes enter through bite wound or mucous membranes. Amastigotes infect cardiac/smooth muscle cells.",
        disease: "**Acute Chagas:** fever, malaise,
**Romaña's sign** (painless periorbital swelling — unilateral, from conjunctival inoculation) or chagoma (skin lesion at bite site). Mild, self-limited or asymptomatic.
**Chronic Chagas (years later, 20–30%):** **dilated cardiomyopathy** (ventricular aneurysm at apex, arrhythmias, heart block, sudden death), **megaesophagus** (dysphagia, mimics achalasia), **megacolon** (constipation, obstruction). Chronic disease mediated by autoimmune mechanisms.",
        tx: "**Acute:** benznidazole or nifurtimox (only effective in acute phase).
**Chronic:** supportive (cardiac: ICD, transplant; GI: dilation). Early treatment with benznidazole slows progression.",
        pearl: "**Romaña's sign** (periorbital edema) = pathognomonic of acute Chagas.
**Chagas cardiomyopathy** = dilated + apical aneurysm + arrhythmias (right bundle branch block is classic ECG finding). Megaesophagus mimics achalasia (both show bird-beak esophagus on barium) — differentiate by serology.
**Blood transfusion and vertical transmission** are also routes. Endemic in Latin America — important for immigrants presenting with cardiomyopathy."
      },
      {
        name: "Trypanosoma brucei (Sleeping Sickness)",
        summary: "Tsetse fly vector — African sleeping sickness; T. b. rhodesiense (East Africa, acute) vs T. b. gambiense (West Africa, chronic); CNS invasion → altered sleep-wake cycle; treat suramin/melarsoprol",
gram: "Protozoa (Kinetoplastida — trypomastigotes in blood)",
virulence: "**Tsetse fly** (Glossina) vector — transmits metacyclic trypomastigotes.
**Antigenic variation of VSG (variable surface glycoprotein)** — switches surface coat → evades immune response → waves of parasitemia. Crosses blood-brain barrier → CNS invasion.",
        disease: "**Stage 1 (hemolymphatic):** chancre at bite site → fever, headache, lymphadenopathy.
**Winterbottom's sign:** posterior cervical LAD (T. b. gambiense).
**Stage 2 (CNS):** encephalitis → personality change, **disrupted circadian rhythm** (sleeping during day, awake at night), progressive neurological deterioration, coma, death.
**T. b. rhodesiense** (East Africa): faster, more acute, severe.
**T. b. gambiense** (West Africa): slower, chronic, years.",
        tx: "Stage 1: **suramin** (T.b. rhodesiense) or pentamidine (T.b. gambiense). Stage 2 (CNS): **melarsoprol** (arsenic derivative — very toxic, causes fatal encephalopathy 5–10%) or eflornithine (T.b. gambiense).",
        pearl: "**Sleep disorder** (day sleeping, night waking) = classic clue for Stage 2 CNS African sleeping sickness.
**Winterbottom's sign** (posterior cervical LAD) = T.b. gambiense.
**VSG switching** = why antibodies don't clear the parasite (waves of antigenically different parasitemia).
**Melarsoprol** is arsenical — toxic but historically the only option for CNS disease. Distinguish from Chagas (T. cruzi): Latin America, kissing bug, heart/GI disease vs Africa, tsetse fly, CNS disease."
      },
      {
        name: "Babesia",
        summary: "Ixodes tick vector — RBC parasite, resembles malaria; tetrad 'Maltese cross' form; Northeast US; hemolytic anemia; asplenic patients at risk for severe disease; treat atovaquone + azithromycin",
gram: "Protozoa (intraerythrocytic — Giemsa stain)",
virulence: "**Ixodes scapularis tick** (same tick as Lyme disease).
**Babesia microti** (most common in US). Infects RBCs like malaria — but **NO exoerythrocytic liver stage** (no hypnozoites).
**Tetrad form ('Maltese cross' or Merozoite tetrad)** — pathognomonic on blood smear.",
        disease: "**Asymptomatic** in healthy adults.
**Symptomatic:** flu-like illness — fever, chills, sweating, malaise, myalgia, hemolytic anemia, thrombocytopenia, elevated LFTs.
**Severe disease** in: **asplenic patients** (overwhelming, life-threatening), elderly, HIV, B-cell immunodeficiency. Hemoglobinuria, jaundice. Can be co-transmitted with Lyme disease (same Ixodes tick).",
        tx: "Mild-moderate: **atovaquone + azithromycin** × 7–10 days. Severe: **clindamycin + quinine** ± exchange transfusion (for high parasitemia or severe hemolysis).",
        pearl: "**Maltese cross (tetrad)** on blood smear = pathognomonic for Babesia (no other intraerythrocytic parasite forms tetrads).
**Ixodes tick = transmits Lyme + Babesia + Anaplasmosis** — co-infection possible. NO exoerythrocytic phase → no hypnozoites → no relapse (unlike P. vivax/ovale). Asplenia = highest risk for severe/fatal babesiosis. Northeast US (especially New England, upper Midwest). Blood bank screening now required (transfusion-transmitted babesiosis)."
      },
      {
        name: "Naegleria fowleri",
        summary: "Free-living ameba — warm freshwater (lakes/rivers/hot springs); enters via cribriform plate → primary amebic meningoencephalitis (PAM); rapidly fatal; treat amphotericin B (rarely successful)",
gram: "Protozoa — Free-living ameba (trophozoite in tissue)",
virulence: "**Thermophilic** (grows at body temperature). Trophozoite form in host tissue.
**Flagellate form** in cool water. Enters via olfactory epithelium → **cribriform plate** → olfactory bulbs → brain.",
        disease: "**Primary Amebic Meningoencephalitis (PAM):** healthy young swimmers in warm freshwater lakes, rivers, hot springs (summer). Incubation 1–7 days.
**Rapid onset:** severe headache, fever, nausea → altered mental status, seizures, coma.
**Death within 3–7 days in >97% of cases.** CSF: hemorrhagic, elevated WBC (neutrophilic), elevated protein, low glucose, **motile trophozoites on wet mount** (pathognomonic).",
        tx: "**Amphotericin B** (IV + intrathecal) + miltefosine — rarely successful. Occasional survival with combination including fluconazole, rifampin, dexamethasone. Most die despite treatment.",
        pearl: "**Healthy child who swam in warm lake → died in 7 days from meningoencephalitis = Naegleria.** 'Brain-eating ameba.' CSF: neutrophilic pleocytosis + motile ameba = PAM.
**NOT associated with drinking contaminated water** (stomach acid kills it) — must enter via olfactory route. Contrast with
**Acanthamoeba** (granulomatous amebic encephalitis in immunocompromised, slower course) and
**Entamoeba histolytica** (fecal-oral, liver abscess, NOT CNS in immunocompetent)."
      },
      {
        name: "Leishmania",
        summary: "Sandfly vector — three clinical forms: cutaneous (skin ulcer, 'chiclero ulcer'), mucocutaneous (tissue destruction), visceral (kala-azar, splenomegaly, pancytopenia, fever); treat liposomal amphotericin B",
gram: "Protozoa (intracellular macrophage parasite — amastigotes; Giemsa stain)",
virulence: "**Phlebotomus sandfly** (Old World) or Lutzomyia (New World) vector.
**Promastigotes** (extracellular, flagellated) in sandfly → inoculated into host → **amastigotes** (intracellular, no flagella) infect macrophages. Survive in macrophage phagolysosomes by inhibiting acidification.",
        disease: "**Cutaneous leishmaniasis (most common):** painless papule → slowly enlarging ulcer ('chiclero ulcer' in Central America — eats ear cartilage; 'oriental sore' in Old World). Self-healing over months-years.
**Mucocutaneous (espundia):** L. braziliensis — skin ulcer heals then reactivates in nasopharyngeal mucosa years later → tissue destruction of nose/palate/pharynx.
**Visceral (kala-azar, 'black fever'):** L. donovani — disseminated macrophage infection → massive **hepatosplenomegaly**, fever, **pancytopenia**, hypergammaglobulinemia, wasting.
**Hyperpigmentation** of skin (kala-azar = 'black fever' in Hindi). Untreated visceral = fatal.",
        tx: "**Visceral/severe:** **liposomal amphotericin B** (drug of choice in US). Miltefosine (oral). Meglumine antimoniate or sodium stibogluconate (pentavalent antimony — used in developing world). Cutaneous: often self-healing; treat if persistent (miltefosine, amphotericin).",
        pearl: "**Kala-azar** = visceral leishmaniasis = massive splenomegaly + pancytopenia + fever + hypergammaglobulinemia (IgG) + hyperpigmentation. Diagnose: bone marrow/spleen biopsy shows amastigotes (Leishman-Donovan bodies) in macrophages.
**Immunocompromised** (HIV + L. donovani = visceral leishmaniasis is AIDS-defining in endemic regions).
**Sandfly vector** — no person-to-person transmission. Dogs are important reservoir (Old World)."
      },
      {
        name: "Trichomonas vaginalis",
        summary: "Pear-shaped flagellated protozoan STI — malodorous yellow-green frothy vaginal discharge, strawberry cervix; no cyst form; sexual transmission only; treat both partners with metronidazole",
gram: "Protozoa — Flagellate (no cyst form)",
virulence: "**No cyst form** — trophozoite only (fragile outside host → sexual transmission only, not fecal-oral). Pear-shaped, 4 anterior flagella + 1 recurrent flagellum, undulating membrane. Adheres to vaginal/urethral epithelium.",
        disease: "**Females (symptomatic 50%):** malodorous yellow-green **frothy vaginal discharge**, pruritus, dysuria.
**Strawberry cervix** (punctate hemorrhages — colposcopy). Vaginal pH >4.5.
**Males:** usually asymptomatic; urethritis (mild), prostatitis.
**Neonates:** acquired during delivery → respiratory infection.
**Complications:** increased risk of HIV acquisition, preterm labor in pregnancy.",
        tx: "**Metronidazole 2g PO single dose** (or tinidazole).
**Treat both partners simultaneously** (reinfection is the most common cause of treatment failure). Avoid alcohol with metronidazole (disulfiram-like reaction).",
        pearl: "**Wet mount:** motile trophozoites with jerky movement = diagnostic (sensitivity 60–70%). NAAT is more sensitive (preferred).
**No cyst form** = cannot survive environmental exposure (transmitted only sexually).
**Strawberry cervix** on colposcopy. **pH >4.5** (like BV but unlike Candida). Compare: BV = Gardnerella + anaerobes, fishy odor, clue cells, NO inflammation; Trich = motile organisms, frothy discharge, WITH inflammation (WBCs on wet mount)."
      }
    ]
  },
  {
    group: "Helminths & Other Parasites",
    color: "para",
    organisms: [
      {
        name: "Intestinal Nematodes",
        summary: "Pinworms (Enterobius), ascaris (giant roundworm), hookworms (Ancylostoma/Necator), strongyloides, whipworm — most via fecal-oral or skin penetration",
gram: "Helminths — Nematodes (roundworms)",
virulence: "Varies: larva migrans patterns, tissue invasion, intestinal attachment, autoinfection (Strongyloides).",
        disease: "**Enterobius (pinworm):** perianal pruritus at night — scotch tape test.
**Ascaris lumbricoides:** Löffler pneumonia (larval migration), intestinal obstruction, malnutrition.
**Hookworm (Ancylostoma/Necator):** skin penetration (cutaneous larva migrans — creeping eruption), iron-deficiency anemia (blood-sucking adults in duodenum).
**Trichuris (whipworm):** bloody diarrhea, rectal prolapse.
**Strongyloides:** autoinfection — can survive for decades; hyperinfection syndrome in immunocompromised (larvae disseminate everywhere, gram-negative sepsis from gut flora carried).",
        tx: "**Albendazole or mebendazole** (most intestinal nematodes). Pinworm: pyrantel pamoate or albendazole + treat whole family. Strongyloides: **ivermectin** (drug of choice).",
        pearl: "**Strongyloides hyperinfection** in immunocompromised (steroids, HIV, HTLV-1) → larvae disseminate carrying enteric bacteria → gram-negative sepsis/meningitis → **screen before starting steroids in endemic area**.
**Eosinophilia** = clue to parasitic infection (especially helminths with tissue migration).
**Löffler syndrome** (transient pulmonary eosinophilia) in Ascaris, hookworm, Strongyloides."
      },
      {
        name: "Tissue Nematodes & Trematodes",
        summary: "Trichinella (undercooked pork, periorbital edema), filariasis (lymphedema), schistosoma (bladder cancer/portal HTN), Clonorchis (cholangiocarcinoma)",
gram: "Helminths — Trematodes/Nematodes (tissue)",
virulence: "Tissue invasion, larval encystment, immunopathology.",
        disease: "**Trichinella spiralis:** undercooked pork/bear — periorbital edema, myalgias, eosinophilia, facial edema.
**Wuchereria bancrofti (filariasis):** mosquito vector → lymphatic obstruction → elephantiasis.
**Onchocerca volvulus (river blindness):** blackfly vector, subcutaneous nodules, ocular involvement (keratitis → blindness — 'river blindness').
**Schistosoma:** freshwater snail → cercariae penetrate skin: S. mansoni/japonicum (portal HTN → esophageal varices, Symmers' pipe-stem fibrosis); S. haematobium (bladder — hematuria, squamous cell carcinoma of bladder).
**Clonorchis/Opisthorchis (liver flukes):** undercooked fish → biliary obstruction + **cholangiocarcinoma**.",
        tx: "Trichinella: albendazole + steroids. Filariasis: diethylcarbamazine (DEC). Onchocerca: **ivermectin** (single annual dose). Schistosoma: **praziquantel** (drug of choice for all flukes and cestodes). Clonorchis: praziquantel.",
        pearl: "**Schistosoma haematobium = squamous cell carcinoma of the bladder** (painless hematuria).
**Clonorchis = cholangiocarcinoma** (biliary obstruction, RUQ pain, jaundice).
**Praziquantel** = treat all flatworms (flukes + tapeworms).
**Ivermectin** = treat Onchocerca, Strongyloides.
**Periorbital edema** + eosinophilia + exposure to raw meat = Trichinella."
      },
      {
        name: "Cestodes (Tapeworms)",
        summary: "Taenia (pork/beef), Echinococcus (cysts in liver/lung), Diphyllobothrium (B12 deficiency, raw fish); cysticercosis = neurocysticercosis",
gram: "Helminths — Cestodes (tapeworms)",
virulence: "Larval forms most pathogenic. Echinococcus: cysts slowly expand (hydatid cysts — do NOT aspirate — anaphylaxis risk). T. solium: humans can be intermediate host (ingests eggs) → larvae in tissues.",
        disease: "**Taenia solium (pork tapeworm):** intestinal tapeworm (eating undercooked pork with cysticerci).
**Cysticercosis/neurocysticercosis:** eating T. solium eggs (fecal-oral) → larvae encyst in brain → seizures (most common cause of adult-onset seizures in Central/South America), calcified cysts on CT.
**Taenia saginata (beef tapeworm):** intestinal only, no cysticercosis.
**Echinococcus granulosus:** dog/livestock exposure → hydatid cysts in liver/lung (fluid-filled, slow-growing), daughter cysts.
**Diphyllobothrium latum (fish tapeworm):** raw freshwater fish →
**B12 deficiency** (tapeworm competes for B12 in terminal ileum) → megaloblastic anemia.",
        tx: "Intestinal tapeworms: **praziquantel** or niclosamide. Neurocysticercosis: **albendazole** + dexamethasone + anti-seizure meds. Echinococcus:
**PAIR** (Puncture-Aspiration-Injection-Reaspiration) or surgery + albendazole. Do NOT aspirate blindly (anaphylaxis risk from cyst rupture).",
        pearl: "**Neurocysticercosis** = most common cause of epilepsy in developing countries + most common CNS parasitic infection.
**Diphyllobothrium + B12 deficiency** = classic association.
**Echinococcus** liver cyst: do NOT needle biopsy (anaphylaxis from daughter cysts). CT shows 'daughter cysts within mother cyst' = pathognomonic. Eosinophilia may be absent with intraluminal cestode infections (no tissue migration)."
      }
    ]
  }
]

};
