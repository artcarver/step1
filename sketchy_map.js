// sketchy_map.js — Sketchy Micro + Sketchy Pharm image mappings
// Keys must exactly match the organism/drug `name` field in micro_data.js / Drug_data_v3.js
// Paths are relative to the HTML file

const SKETCHY_MAP = {

  // ════════════════════════════════════════════════════════
  // BACTERIA
  // ════════════════════════════════════════════════════════

  "Staphylococcus aureus": { scenes: [{ img: "sketchy_images/bacteria/1.1 - Staph Aureus.png", title: "Staph Aureus" }] },
  "Staphylococcus epidermidis": { scenes: [{ img: "sketchy_images/bacteria/1.2 - Staph Epidermis.png", title: "Staph Epidermidis" }] },
  "Staphylococcus saprophyticus": { scenes: [{ img: "sketchy_images/bacteria/1.2 - Staph Epidermis.png", title: "Staph Epidermidis / Saprophyticus" }] },
  "Streptococcus pyogenes (Group A Strep)": { scenes: [{ img: "sketchy_images/bacteria/1.3 - Strep Pyogenes.png", title: "Strep Pyogenes" }] },
  "Streptococcus agalactiae (Group B Strep)": { scenes: [{ img: "sketchy_images/bacteria/1.4 - Strep Agalactiae.png", title: "Strep Agalactiae" }] },
  "Streptococcus pneumoniae": { scenes: [{ img: "sketchy_images/bacteria/1.5 - Strep pneumoniae - Strep Viridans.png", title: "Strep Pneumoniae & Viridans" }] },
  "Streptococcus viridans": { scenes: [{ img: "sketchy_images/bacteria/1.5 - Strep pneumoniae - Strep Viridans.png", title: "Strep Pneumoniae & Viridans" }] },
  "Enterococcus faecalis / faecium": { scenes: [{ img: "sketchy_images/bacteria/1.6 - Enterococcus.png", title: "Enterococcus" }] },
  "Bacillus anthracis": { scenes: [{ img: "sketchy_images/bacteria/2.1 - Bacillus anthracis and Bacillus cereus.png", title: "Bacillus anthracis & cereus" }] },
  "Bacillus cereus": { scenes: [{ img: "sketchy_images/bacteria/2.1 - Bacillus anthracis and Bacillus cereus.png", title: "Bacillus anthracis & cereus" }] },
  "Clostridium tetani": { scenes: [{ img: "sketchy_images/bacteria/2.2 - Clostridium tetani.png", title: "C. tetani" }] },
  "Clostridium botulinum": { scenes: [{ img: "sketchy_images/bacteria/2.3 - Clostridium botulinum.png", title: "C. botulinum" }] },
  "Clostridium difficile": { scenes: [{ img: "sketchy_images/bacteria/2.4 - Clostridium difficile.png", title: "C. difficile" }] },
  "Clostridium perfringens": { scenes: [{ img: "sketchy_images/bacteria/2.5 - Clostridium perfringens.png", title: "C. perfringens" }] },
  "Corynebacterium diphtheriae": { scenes: [{ img: "sketchy_images/bacteria/2.6 - Corynebacterium diphtheriae.png", title: "C. diphtheriae" }] },
  "Listeria monocytogenes": { scenes: [{ img: "sketchy_images/bacteria/2.7 - Listeria monocytonegenes.png", title: "Listeria" }] },
  "Actinomyces israelii": { scenes: [{ img: "sketchy_images/bacteria/3.1 - Actinomyces.png", title: "Actinomyces" }] },
  "Nocardia asteroides": { scenes: [{ img: "sketchy_images/bacteria/3.2 - Nocardia.png", title: "Nocardia" }] },
  "Neisseria meningitidis": { scenes: [{ img: "sketchy_images/bacteria/4.1 - Neisseria species overview.png", title: "Neisseria Overview" }, { img: "sketchy_images/bacteria/4.2 - Neisseria meningitidis.png", title: "N. meningitidis" }] },
  "Neisseria gonorrhoeae": { scenes: [{ img: "sketchy_images/bacteria/4.1 - Neisseria species overview.png", title: "Neisseria Overview" }, { img: "sketchy_images/bacteria/4.3 - Neisseria gonorrheae.png", title: "N. gonorrhoeae" }] },
  "Klebsiella pneumoniae": { scenes: [{ img: "sketchy_images/bacteria/5.1 - Klebsiella, Enterobacter, Serratia.png", title: "Klebsiella / Enterobacter / Serratia" }] },
  "Enterobacter & Serratia": { scenes: [{ img: "sketchy_images/bacteria/5.1 - Klebsiella, Enterobacter, Serratia.png", title: "Klebsiella / Enterobacter / Serratia" }] },
  "Salmonella": { scenes: [{ img: "sketchy_images/bacteria/5.2 - Salmonella.png", title: "Salmonella" }] },
  "Shigella": { scenes: [{ img: "sketchy_images/bacteria/5.3 - Shigella.png", title: "Shigella" }] },
  "Escherichia coli": { scenes: [{ img: "sketchy_images/bacteria/5.4 - Escherichia coli (ETEC, EHEC).png", title: "E. coli (ETEC/EHEC)" }] },
  "Yersinia enterocolitica": { scenes: [{ img: "sketchy_images/bacteria/5.5 - Yersinia enterocolitica.png", title: "Yersinia" }] },
  "Campylobacter jejuni": { scenes: [{ img: "sketchy_images/bacteria/5.6 - Campylobacter.png", title: "Campylobacter" }] },
  "Vibrio cholerae": { scenes: [{ img: "sketchy_images/bacteria/5.7 - Vibrio Cholera.png", title: "Vibrio cholerae" }] },
  "Helicobacter pylori": { scenes: [{ img: "sketchy_images/bacteria/5.8 - Helicobacter.jpg", title: "H. pylori" }] },
  "Pseudomonas aeruginosa": { scenes: [{ img: "sketchy_images/bacteria/5.9 - Pseudomonas.jpg", title: "Pseudomonas" }] },
  "Proteus mirabilis": { scenes: [{ img: "sketchy_images/bacteria/5.10 - Proteus.png", title: "Proteus" }] },
  "Bordetella pertussis": { scenes: [{ img: "sketchy_images/bacteria/6.1 - Bordatella pertussis.png", title: "Bordetella pertussis" }] },
  "Haemophilus influenzae": { scenes: [{ img: "sketchy_images/bacteria/6.2 - Haemophilus influenzae.png", title: "H. influenzae" }] },
  "Legionella pneumophila": { scenes: [{ img: "sketchy_images/bacteria/6.3 - Legionella.png", title: "Legionella" }] },
  "Bartonella henselae": { scenes: [{ img: "sketchy_images/bacteria/7.1 - Bartonella henselae.png", title: "Bartonella" }] },
  "Brucella species": { scenes: [{ img: "sketchy_images/bacteria/7.2 - Brucella.png", title: "Brucella" }] },
  "Francisella tularensis": { scenes: [{ img: "sketchy_images/bacteria/7.3 - Francisella tularensis.png", title: "Francisella" }] },
  "Pasteurella multocida": { scenes: [{ img: "sketchy_images/bacteria/7.4 - Pasteurella multocida.png", title: "Pasteurella" }] },
  "Mycobacterium tuberculosis": { scenes: [{ img: "sketchy_images/bacteria/8.1 - Mycobacterium tuberculosis.png", title: "M. tuberculosis" }] },
  "Mycobacterium leprae": { scenes: [{ img: "sketchy_images/bacteria/8.2 - Mycobacterium leprae.png", title: "M. leprae" }] },
  "Borrelia burgdorferi": { scenes: [{ img: "sketchy_images/bacteria/9.1 - Borrelia.png", title: "Borrelia" }] },
  "Leptospira interrogans": { scenes: [{ img: "sketchy_images/bacteria/9.2 - Leptospirosis.png", title: "Leptospira" }] },
  "Treponema pallidum": { scenes: [{ img: "sketchy_images/bacteria/9.3 - Treponema Pallidum.png", title: "T. pallidum" }] },
  "Chlamydia trachomatis": { scenes: [{ img: "sketchy_images/bacteria/10.1 - Chlamydia.png", title: "Chlamydia" }] },
  "Chlamydophila pneumoniae": { scenes: [{ img: "sketchy_images/bacteria/10.1 - Chlamydia.png", title: "Chlamydia" }] },
  "Chlamydophila psittaci": { scenes: [{ img: "sketchy_images/bacteria/10.1 - Chlamydia.png", title: "Chlamydia" }] },
  "Coxiella burnetii": { scenes: [{ img: "sketchy_images/bacteria/10.2 - Coxiella burnetii.png", title: "Coxiella" }] },
  "Gardnerella vaginalis": { scenes: [{ img: "sketchy_images/bacteria/10.3 - Gardnerella vaginalis.png", title: "Gardnerella" }] },
  "Mycoplasma pneumoniae": { scenes: [{ img: "sketchy_images/bacteria/10.4 - Mycoplasma pneumoniae.png", title: "Mycoplasma" }] },
  "Rickettsia rickettsii": { scenes: [{ img: "sketchy_images/bacteria/10.5 - Rickettsia species overview.png", title: "Rickettsia Overview" }, { img: "sketchy_images/bacteria/10.7 - Rickettsia rickettsii.png", title: "R. rickettsii" }] },
  "Rickettsia prowazekii": { scenes: [{ img: "sketchy_images/bacteria/10.5 - Rickettsia species overview.png", title: "Rickettsia Overview" }, { img: "sketchy_images/bacteria/10.6 - Rickettsia prowazekii.png", title: "R. prowazekii" }] },

  // ════════════════════════════════════════════════════════
  // VIRUSES
  // ════════════════════════════════════════════════════════

  "Influenza (Orthomyxovirus)": { scenes: [{ img: "sketchy_images/viruses/2.1 - Orthomyxovirus.png", title: "Orthomyxovirus / Influenza" }] },
  "HSV-1 and HSV-2": { scenes: [{ img: "sketchy_images/viruses/3.1 - HSV1 HSV2.png", title: "HSV-1 & HSV-2" }] },
  "VZV (HHV-3) - Varicella-Zoster Virus": { scenes: [{ img: "sketchy_images/viruses/3.4 - VZV.png", title: "VZV" }] },
  "EBV (HHV-4) - Epstein-Barr Virus": { scenes: [{ img: "sketchy_images/viruses/3.2 - EBV.png", title: "EBV" }] },
  "CMV (HHV-5) - Cytomegalovirus": { scenes: [{ img: "sketchy_images/viruses/3.3 - CMV.png", title: "CMV" }] },
  "HHV-6 - Roseola": { scenes: [{ img: "sketchy_images/viruses/3.5 - HHV6 - Roseola.png", title: "HHV-6 Roseola" }] },
  "HHV-8 - Kaposi Sarcoma Herpesvirus": { scenes: [{ img: "sketchy_images/viruses/3.6 - HHV8 - Kaposi Sarcoma.png", title: "HHV-8 Kaposi" }] },
  "Polyomavirus (JC Virus & BK Virus)": { scenes: [{ img: "sketchy_images/viruses/3.7 - Polyomavirus JC & BK.png", title: "JC & BK Virus" }] },
  "HPV (Human Papillomavirus)": { scenes: [{ img: "sketchy_images/viruses/3.8 - Papillomavirus.png", title: "HPV" }] },
  "Parvovirus B19": { scenes: [{ img: "sketchy_images/viruses/3.9 - Parvovirus.png", title: "Parvovirus B19" }] },
  "Adenovirus": { scenes: [{ img: "sketchy_images/viruses/3.10 - Adenovirus.png", title: "Adenovirus" }] },
  "Poxvirus (Smallpox & Molluscum Contagiosum)": { scenes: [{ img: "sketchy_images/viruses/3.11 - Poxvirus.png", title: "Poxvirus" }] },
  "Hepatitis B (HBV) & Hepatitis D (HDV)": { scenes: [{ img: "sketchy_images/viruses/3.12 - Hepatitis B Virus.png", title: "Hepatitis B & D" }] },
  "Picornaviruses - Overview (Enteroviruses)": { scenes: [{ img: "sketchy_images/viruses/1.1 - Picornavirus Overview.png", title: "Picornavirus Overview" }] },
  "Poliovirus": { scenes: [{ img: "sketchy_images/viruses/1.1 - Picornavirus Overview.png", title: "Picornavirus Overview" }, { img: "sketchy_images/viruses/1.2 - (Pico) Poliovirus.png", title: "Poliovirus" }] },
  "Coxsackievirus": { scenes: [{ img: "sketchy_images/viruses/1.1 - Picornavirus Overview.png", title: "Picornavirus Overview" }, { img: "sketchy_images/viruses/1.3 - (Pico) Coxsackie Virus.png", title: "Coxsackievirus" }] },
  "Rhinovirus": { scenes: [{ img: "sketchy_images/viruses/1.4 - (Pico) Rhinovirus.png", title: "Rhinovirus" }] },
  "Hepatitis A Virus (HAV)": { scenes: [{ img: "sketchy_images/viruses/1.5 - (Pico) Hepatitis A.png", title: "Hepatitis A" }] },
  "Calicivirus (Norovirus)": { scenes: [{ img: "sketchy_images/viruses/1.6 - (Norwalk) Calicivirus.png", title: "Norovirus" }] },
  "Flavivirus (Dengue, West Nile, Yellow Fever, Zika)": { scenes: [{ img: "sketchy_images/viruses/1.7 - Flavivirus (HepC, Dengue, Yellow Fever, West Nile).png", title: "Flavivirus Overview" }, { img: "sketchy_images/viruses/1.8 - (Flavivirus) Hepatitis C Virus.png", title: "Hepatitis C" }] },
  "Hepatitis C Virus (HCV)": { scenes: [{ img: "sketchy_images/viruses/1.8 - (Flavivirus) Hepatitis C Virus.png", title: "Hepatitis C" }] },
  "Togavirus (Rubella)": { scenes: [{ img: "sketchy_images/viruses/1.9 - Togavirus (Rubella, Arbovirus).png", title: "Togavirus / Rubella" }] },
  "Coronavirus (COVID-19 / SARS-CoV-2)": { scenes: [{ img: "sketchy_images/viruses/1.10 - Coronavirus.png", title: "Coronavirus" }] },
  "HIV (Human Immunodeficiency Virus)": { scenes: [{ img: "sketchy_images/viruses/1.11 - HIV.png", title: "HIV" }] },
  "Measles (Rubeola)": { scenes: [{ img: "sketchy_images/viruses/2.2 - Paramyxovirus.png", title: "Paramyxovirus" }] },
  "Mumps": { scenes: [{ img: "sketchy_images/viruses/2.2 - Paramyxovirus.png", title: "Paramyxovirus" }] },
  "Rhabdovirus (Rabies)": { scenes: [{ img: "sketchy_images/viruses/2.3 - Rhabdovirus.png", title: "Rabies" }] },
  "Filovirus (Ebola & Marburg)": { scenes: [{ img: "sketchy_images/viruses/2.4 - Filovirus.png", title: "Filovirus" }] },
  "Bunyavirus (La Crosse Encephalitis & Hantavirus)": { scenes: [{ img: "sketchy_images/viruses/2.5 - Bunyavirus.png", title: "Bunyavirus" }] },
  "Arenavirus (LCMV & Lassa Fever)": { scenes: [{ img: "sketchy_images/viruses/2.6 - Arenavirus.png", title: "Arenavirus" }] },
  "Reovirus (Rotavirus)": { scenes: [{ img: "sketchy_images/viruses/2.7 - Reovirus (Rotavirus, Coltivirus - Colorado tick fever).png", title: "Rotavirus" }] },

  // ════════════════════════════════════════════════════════
  // FUNGI
  // ════════════════════════════════════════════════════════

  "Histoplasma capsulatum": { scenes: [{ img: "sketchy_images/fungi/1.1 - Histoplasmosis.png", title: "Histoplasmosis" }] },
  "Blastomyces dermatitidis": { scenes: [{ img: "sketchy_images/fungi/1.2 - Blastomycosis.png", title: "Blastomycosis" }] },
  "Coccidioides immitis": { scenes: [{ img: "sketchy_images/fungi/1.3 - Coccidioidomycosis.png", title: "Coccidioidomycosis" }] },
  "Paracoccidioides brasiliensis": { scenes: [{ img: "sketchy_images/fungi/1.4 - Paracoccidioidomycosis.png", title: "Paracoccidioidomycosis" }] },
  "Malassezia furfur": { scenes: [{ img: "sketchy_images/fungi/2.1 - Malassezia furfur : Pityriasis Versicolor.png", title: "Malassezia / Pityriasis" }] },
  "Dermatophytes (Tinea)": { scenes: [{ img: "sketchy_images/fungi/2.2 - Dermatophytes.png", title: "Dermatophytes" }] },
  "Sporothrix schenckii": { scenes: [{ img: "sketchy_images/fungi/2.3 - Sporothrix schenckii.png", title: "Sporothrix" }] },
  "Candida albicans": { scenes: [{ img: "sketchy_images/fungi/3.1 - Candida albicans.png", title: "Candida" }] },
  "Aspergillus fumigatus": { scenes: [{ img: "sketchy_images/fungi/3.2 - Aspergillus fumigatus.png", title: "Aspergillus" }] },
  "Cryptococcus neoformans": { scenes: [{ img: "sketchy_images/fungi/3.3 - Cryptococcus neoformans.png", title: "Cryptococcus" }] },
  "Mucormycosis (Rhizopus/Mucor)": { scenes: [{ img: "sketchy_images/fungi/3.4 - Mucormycosis.png", title: "Mucormycosis" }] },
  "Pneumocystis jirovecii (PCP)": { scenes: [{ img: "sketchy_images/fungi/3.5 - Pneumocystis pneumonia.png", title: "PCP" }] },

  // ════════════════════════════════════════════════════════
  // PARASITES
  // ════════════════════════════════════════════════════════

  "Giardia lamblia": { scenes: [{ img: "sketchy_images/parasites/1.1 - Giardia.png", title: "Giardia" }] },
  "Entamoeba histolytica": { scenes: [{ img: "sketchy_images/parasites/1.2 - Entamoeba histolytica.png", title: "Entamoeba histolytica" }] },
  "Cryptosporidium parvum": { scenes: [{ img: "sketchy_images/parasites/1.3 - Cryptosporidium.png", title: "Cryptosporidium" }] },
  "Toxoplasma gondii": { scenes: [{ img: "sketchy_images/parasites/2.1 - Toxoplasmosis.png", title: "Toxoplasmosis" }] },
  "Trypanosoma brucei (Sleeping Sickness)": { scenes: [{ img: "sketchy_images/parasites/2.2 - Trypanosoma brucei.png", title: "T. brucei" }] },
  "Naegleria fowleri": { scenes: [{ img: "sketchy_images/parasites/2.3 - Naegleria fowleri.png", title: "Naegleria" }] },
  "Trypanosoma cruzi (Chagas Disease)": { scenes: [{ img: "sketchy_images/parasites/3.1 - Trypanosoma cruzi.png", title: "T. cruzi" }] },
  "Babesia": { scenes: [{ img: "sketchy_images/parasites/3.2 - Babesia.png", title: "Babesia" }] },
  "Plasmodium species (Malaria)": { scenes: [{ img: "sketchy_images/parasites/3.3 - Plasmodium species.png", title: "Plasmodium" }] },
  "Leishmania": { scenes: [{ img: "sketchy_images/parasites/3.4 - Leishmaniasis.png", title: "Leishmaniasis" }] },
  "Trichomonas vaginalis": { scenes: [{ img: "sketchy_images/parasites/4.1 - Trichomoniasis.png", title: "Trichomonas" }] },
  "Intestinal Nematodes": { scenes: [{ img: "sketchy_images/parasites/5.1 - Intestinal nematodes.png", title: "Intestinal Nematodes" }] },
  "Tissue Nematodes & Trematodes": { scenes: [{ img: "sketchy_images/parasites/5.2 - Tissue Nematodes.png", title: "Tissue Nematodes" }, { img: "sketchy_images/parasites/6.2 - Trematodes.png", title: "Trematodes" }] },
  "Cestodes (Tapeworms)": { scenes: [{ img: "sketchy_images/parasites/6.1 - Cestodes.png", title: "Cestodes" }] },

  // ════════════════════════════════════════════════════════
  // AUTONOMIC DRUGS
  // ════════════════════════════════════════════════════════

  "Cholinomimetics (Direct)": { scenes: [{ img: "sketchy_images/autonomic drugs/1.1 - Cholinomimetics.png", title: "Cholinomimetics" }] },
  "Acetylcholinesterase Inhibitors": { scenes: [{ img: "sketchy_images/autonomic drugs/1.2 - Acetylcholinesterase Inhibitors.png", title: "AChE Inhibitors" }] },
  "Muscarinic Antagonists (Anticholinergics)": { scenes: [{ img: "sketchy_images/autonomic drugs/1.3 - Muscarinic antagonists.png", title: "Muscarinic Antagonists" }] },
  "Epinephrine & Norepinephrine": { scenes: [{ img: "sketchy_images/autonomic drugs/2.1 - Sympathomimetics.png", title: "Sympathomimetics" }] },
  "Dopamine & Dobutamine": { scenes: [{ img: "sketchy_images/autonomic drugs/2.1 - Sympathomimetics.png", title: "Sympathomimetics" }] },
  "Phenylephrine & Isoproterenol": { scenes: [{ img: "sketchy_images/autonomic drugs/2.3 - Alpha drugs.png", title: "Alpha Drugs" }] },
  "Alpha Blockers (α-blockers)": { scenes: [{ img: "sketchy_images/autonomic drugs/2.3 - Alpha drugs.png", title: "Alpha Drugs" }] },
  "Beta Blockers (β-blockers)": { scenes: [{ img: "sketchy_images/autonomic drugs/2.4 - Beta blockers.png", title: "Beta Blockers" }] },
  "Neuromuscular Blocking Agents": { scenes: [{ img: "sketchy_images/autonomic drugs/2.2 - Indirect sympathomimetics.png", title: "Indirect Sympathomimetics" }] },

  // ════════════════════════════════════════════════════════
  // CV & RENAL
  // ════════════════════════════════════════════════════════

  "Digoxin": { scenes: [{ img: "sketchy_images/CV & renal/1.1 - Digoxin, milrinone, nesiritide.png", title: "Digoxin / Milrinone / Nesiritide" }] },
  "Milrinone & Nesiritide": { scenes: [{ img: "sketchy_images/CV & renal/1.1 - Digoxin, milrinone, nesiritide.png", title: "Digoxin / Milrinone / Nesiritide" }] },
  "ACE Inhibitors": { scenes: [{ img: "sketchy_images/CV & renal/1.2 - ACE inhibitors, ARBs, Aliskiren.png", title: "ACE Inhibitors / ARBs / Aliskiren" }] },
  "ARBs (Angiotensin Receptor Blockers)": { scenes: [{ img: "sketchy_images/CV & renal/1.2 - ACE inhibitors, ARBs, Aliskiren.png", title: "ACE Inhibitors / ARBs / Aliskiren" }] },
  "Aliskiren": { scenes: [{ img: "sketchy_images/CV & renal/1.2 - ACE inhibitors, ARBs, Aliskiren.png", title: "ACE Inhibitors / ARBs / Aliskiren" }] },
  "Carbonic Anhydrase Inhibitors": { scenes: [{ img: "sketchy_images/CV & renal/2.1 - Acetazolamide, mannitol.png", title: "Acetazolamide / Mannitol" }] },
  "Mannitol": { scenes: [{ img: "sketchy_images/CV & renal/2.1 - Acetazolamide, mannitol.png", title: "Acetazolamide / Mannitol" }] },
  "Loop Diuretics": { scenes: [{ img: "sketchy_images/CV & renal/2.2 - Loop diuretics.png", title: "Loop Diuretics" }] },
  "Thiazide Diuretics": { scenes: [{ img: "sketchy_images/CV & renal/2.3 - Thiazides.png", title: "Thiazides" }] },
  "K⁺-Sparing Diuretics": { scenes: [{ img: "sketchy_images/CV & renal/2.4 - K+ sparing diuretics.png", title: "K+ Sparing Diuretics" }] },
  "Calcium Channel Blockers (CCBs)": { scenes: [{ img: "sketchy_images/CV & renal/3.1 - Calcium channel blockers.png", title: "Calcium Channel Blockers" }] },
  "Hydralazine & Direct Vasodilators": { scenes: [{ img: "sketchy_images/CV & renal/3.2 - Primary hypertension & hypertensive emergency.png", title: "HTN & Hypertensive Emergency" }] },
  "Class IA Antiarrhythmics": { scenes: [{ img: "sketchy_images/CV & renal/4.1 - Class I A-C.png", title: "Class I Antiarrhythmics" }] },
  "Class IB Antiarrhythmics": { scenes: [{ img: "sketchy_images/CV & renal/4.1 - Class I A-C.png", title: "Class I Antiarrhythmics" }] },
  "Class IC Antiarrhythmics": { scenes: [{ img: "sketchy_images/CV & renal/4.1 - Class I A-C.png", title: "Class I Antiarrhythmics" }] },
  "Adenosine": { scenes: [{ img: "sketchy_images/CV & renal/4.2 - Class II.png", title: "Class II / Beta Blockers (Cardiac)" }] },
  "Class III Antiarrhythmics": { scenes: [{ img: "sketchy_images/CV & renal/4.3 - Class III.png", title: "Class III Antiarrhythmics" }] },
  "Magnesium Sulfate": { scenes: [{ img: "sketchy_images/CV & renal/4.5 - Class V.png", title: "Class V (Adenosine/Mg/Digoxin)" }] },
  "Ranolazine & Ivabradine": { scenes: [{ img: "sketchy_images/CV & renal/4.5 - Class V.png", title: "Class V (Adenosine/Mg/Digoxin)" }] },

  // ════════════════════════════════════════════════════════
  // BLOOD & INFLAMMATION
  // ════════════════════════════════════════════════════════

  "Heparin (UFH & LMWH)": { scenes: [{ img: "sketchy_images/blood & inflammation/1.1 - Heparin, LMWH, fondaparinux, direct thrombin inhibitors, Xa inhibitors.png", title: "Heparin / DOACs" }] },
  "Direct Oral Anticoagulants (DOACs)": { scenes: [{ img: "sketchy_images/blood & inflammation/1.1 - Heparin, LMWH, fondaparinux, direct thrombin inhibitors, Xa inhibitors.png", title: "Heparin / DOACs" }] },
  "Warfarin": { scenes: [{ img: "sketchy_images/blood & inflammation/1.2 - Warfarin.png", title: "Warfarin" }] },
  "Aspirin (Antiplatelet)": { scenes: [{ img: "sketchy_images/blood & inflammation/1.3 - Antiplatelet agents.png", title: "Antiplatelet Agents" }] },
  "P2Y12 & GP IIb/IIIa Blockers": { scenes: [{ img: "sketchy_images/blood & inflammation/1.3 - Antiplatelet agents.png", title: "Antiplatelet Agents" }] },
  "PDE3/PDE5 Inhibitors (Antiplatelet)": { scenes: [{ img: "sketchy_images/blood & inflammation/1.3 - Antiplatelet agents.png", title: "Antiplatelet Agents" }] },
  "tPA & Thrombolytics": { scenes: [{ img: "sketchy_images/blood & inflammation/1.4 - Thrombolytics.png", title: "Thrombolytics" }] },
  "Statins (HMG-CoA Reductase Inhibitors)": { scenes: [{ img: "sketchy_images/blood & inflammation/2.1 - Statins.png", title: "Statins" }] },
  "Cholestyramine, ezetimibe": { scenes: [{ img: "sketchy_images/blood & inflammation/2.2 - Cholestyramine, ezetimibe.png", title: "Cholestyramine / Ezetimibe" }] },
  "Fibrates & Niacin": { scenes: [{ img: "sketchy_images/blood & inflammation/2.3 - Fibrates, niacin.png", title: "Fibrates / Niacin" }] },
  "NSAIDs (Non-Opioid Analgesics)": { scenes: [{ img: "sketchy_images/blood & inflammation/3.1 - NSAIDs.png", title: "NSAIDs" }] },
  "Allopurinol & Febuxostat": { scenes: [{ img: "sketchy_images/blood & inflammation/3.2 - Gout drugs.png", title: "Gout Drugs" }] },
  "Colchicine": { scenes: [{ img: "sketchy_images/blood & inflammation/3.2 - Gout drugs.png", title: "Gout Drugs" }] },
  "Probenecid": { scenes: [{ img: "sketchy_images/blood & inflammation/3.2 - Gout drugs.png", title: "Gout Drugs" }] },

  // ════════════════════════════════════════════════════════
  // ANTIMICROBIALS (PHARM)
  // ════════════════════════════════════════════════════════

  "Natural Penicillins": { scenes: [{ img: "sketchy_images/antimicrobials/1.1 - Penicillin.png", title: "Penicillin" }] },
  "Anti-Staphylococcal Penicillins": { scenes: [{ img: "sketchy_images/antimicrobials/1.2 - Nafcillin, oxacillin, methicillin & dicloxacillin.png", title: "Anti-Staph Penicillins" }] },
  "Aminopenicillins": { scenes: [{ img: "sketchy_images/antimicrobials/1.3 - Ampicillin, amoxicillin, piperacillin, ticarcillin.png", title: "Aminopenicillins" }] },
  "Extended-Spectrum Penicillins": { scenes: [{ img: "sketchy_images/antimicrobials/1.3 - Ampicillin, amoxicillin, piperacillin, ticarcillin.png", title: "Extended-Spectrum Penicillins" }] },
  "Cephalosporins": { scenes: [{ img: "sketchy_images/antimicrobials/1.4 - Cephalosporins.png", title: "Cephalosporins" }] },
  "Carbapenems & Monobactams": { scenes: [{ img: "sketchy_images/antimicrobials/1.5 - Monobactams & carbapenems.png", title: "Carbapenems & Monobactams" }] },
  "Vancomycin": { scenes: [{ img: "sketchy_images/antimicrobials/1.6 - Vancomycin.png", title: "Vancomycin" }] },
  "Misc. Antibacterials": { scenes: [{ img: "sketchy_images/antimicrobials/1.7 - Daptomycin.png", title: "Daptomycin" }, { img: "sketchy_images/antimicrobials/2.4 - Chloramphenicol.png", title: "Chloramphenicol" }, { img: "sketchy_images/antimicrobials/2.5 - Linezolid.png", title: "Linezolid" }] },
  "Tetracyclines": { scenes: [{ img: "sketchy_images/antimicrobials/2.1 - Tetracyclines.png", title: "Tetracyclines" }] },
  "Macrolides": { scenes: [{ img: "sketchy_images/antimicrobials/2.2 - Macrolides.png", title: "Macrolides" }] },
  "Clindamycin": { scenes: [{ img: "sketchy_images/antimicrobials/2.3 - Clindamycin.png", title: "Clindamycin" }] },
  "Aminoglycosides": { scenes: [{ img: "sketchy_images/antimicrobials/2.6 - Aminoglycosides.png", title: "Aminoglycosides" }] },
  "Tuberculosis Drugs (RIPE)": { scenes: [{ img: "sketchy_images/antimicrobials/3.1 - Tuberculosis Drugs.png", title: "TB Drugs" }] },
  "Leprosy Drugs": { scenes: [{ img: "sketchy_images/antimicrobials/3.2 - Leprosy drugs.png", title: "Leprosy Drugs" }] },
  "TMP-SMX (Trimethoprim-Sulfamethoxazole)": { scenes: [{ img: "sketchy_images/antimicrobials/4.1 - Trimethoprim:sulfamethoxazole.png", title: "TMP-SMX" }] },
  "Fluoroquinolones": { scenes: [{ img: "sketchy_images/antimicrobials/4.2 - Fluoroquinolones.png", title: "Fluoroquinolones" }] },
  "Metronidazole": { scenes: [{ img: "sketchy_images/antimicrobials/4.3 - Metronidazole.png", title: "Metronidazole" }] },
  "Amphotericin B": { scenes: [{ img: "sketchy_images/antimicrobials/5.1 - Amphotericin, flucytosine.png", title: "Amphotericin / Flucytosine" }] },
  "Azole Antifungals": { scenes: [{ img: "sketchy_images/antimicrobials/5.2 - Azoles.png", title: "Azoles" }] },
  "Echinocandins & Flucytosine": { scenes: [{ img: "sketchy_images/antimicrobials/5.1 - Amphotericin, flucytosine.png", title: "Amphotericin / Flucytosine" }, { img: "sketchy_images/antimicrobials/5.3 - Griseofulvin, Terbinafine, Echinocandins.png", title: "Echinocandins" }] },
  "Dermatophyte Drugs": { scenes: [{ img: "sketchy_images/antimicrobials/5.3 - Griseofulvin, Terbinafine, Echinocandins.png", title: "Griseofulvin / Terbinafine" }] },
  "NRTIs & NNRTIs": { scenes: [{ img: "sketchy_images/antimicrobials/6.1 - NRTIs.png", title: "NRTIs" }, { img: "sketchy_images/antimicrobials/6.2 - NNRTIs.png", title: "NNRTIs" }] },
  "Protease & Integrase Inhibitors": { scenes: [{ img: "sketchy_images/antimicrobials/6.3 - Protease inhibitors.png", title: "Protease Inhibitors" }] },
  "HIV Entry Inhibitors": { scenes: [{ img: "sketchy_images/antimicrobials/6.4 - Maraviroc, fusion inhibitors, integrase inhibitors.png", title: "Entry / Fusion / Integrase Inhibitors" }] },
  "Ribavirin & Interferons": { scenes: [{ img: "sketchy_images/antimicrobials/7.1 - Interferon α, β, γ.png", title: "Interferons" }, { img: "sketchy_images/antimicrobials/7.2 - Ribavirin, sofosbuvir, simeprevir.png", title: "Ribavirin / Sofosbuvir" }] },
  "Herpes & CMV Antivirals": { scenes: [{ img: "sketchy_images/antimicrobials/8.1 - Acyclovir, valacyclovir, famciclovir.png", title: "Acyclovir / Valacyclovir" }, { img: "sketchy_images/antimicrobials/8.2 - Ganciclovir, valganciclovir, foscarnet, cidofovir.png", title: "Ganciclovir / Foscarnet" }] },

  // ════════════════════════════════════════════════════════
  // GI & ENDOCRINE
  // ════════════════════════════════════════════════════════

  "Ondansetron (5-HT3 Antagonist Antiemetics)": { scenes: [{ img: "sketchy_images/GI & endocrine/1.1 - Antiemetic agents.png", title: "Antiemetics" }] },
  "Misoprostol & GI Mucosal Agents": { scenes: [{ img: "sketchy_images/GI & endocrine/1.1 - Antiemetic agents.png", title: "Antiemetics" }] },
  "H2 Receptor Blockers": { scenes: [{ img: "sketchy_images/GI & endocrine/1.2 - H2 receptor blockers, PPIs.png", title: "H2 Blockers / PPIs" }] },
  "PPIs (Proton Pump Inhibitors)": { scenes: [{ img: "sketchy_images/GI & endocrine/1.2 - H2 receptor blockers, PPIs.png", title: "H2 Blockers / PPIs" }] },
  "Antidiarrheals & Loperamide": { scenes: [{ img: "sketchy_images/GI & endocrine/1.3 - Laxatives & antidiarrheal agents.png", title: "Laxatives & Antidiarrheals" }] },
  "Osmotic Laxatives": { scenes: [{ img: "sketchy_images/GI & endocrine/1.3 - Laxatives & antidiarrheal agents.png", title: "Laxatives & Antidiarrheals" }] },
  "Insulin & Insulin Secretagogues": { scenes: [{ img: "sketchy_images/GI & endocrine/2.1 - Insulin, sulfonylureas, meglitinides, GLP-1 agonists, DPP-4 inhibitors.png", title: "Insulin / Sulfonylureas / GLP-1" }] },
  "GLP-1 Agonists & DPP-4 Inhibitors": { scenes: [{ img: "sketchy_images/GI & endocrine/2.1 - Insulin, sulfonylureas, meglitinides, GLP-1 agonists, DPP-4 inhibitors.png", title: "Insulin / Sulfonylureas / GLP-1" }] },
  "Metformin": { scenes: [{ img: "sketchy_images/GI & endocrine/2.2 - Metformin, thiazolidinediones, pramlintide, SGLT2 inhibitors.png", title: "Metformin / TZDs / SGLT2" }] },
  "SGLT2 Inhibitors": { scenes: [{ img: "sketchy_images/GI & endocrine/2.2 - Metformin, thiazolidinediones, pramlintide, SGLT2 inhibitors.png", title: "Metformin / TZDs / SGLT2" }] },
  "Thiazolidinediones (TZDs)": { scenes: [{ img: "sketchy_images/GI & endocrine/2.2 - Metformin, thiazolidinediones, pramlintide, SGLT2 inhibitors.png", title: "Metformin / TZDs / SGLT2" }] },
  "Pramlintide": { scenes: [{ img: "sketchy_images/GI & endocrine/2.2 - Metformin, thiazolidinediones, pramlintide, SGLT2 inhibitors.png", title: "Metformin / TZDs / SGLT2" }] },
  "Methimazole / PTU (Antithyroid Drugs)": { scenes: [{ img: "sketchy_images/GI & endocrine/3.1 - Propylthiouracil, methimazole, levothyroxine.png", title: "Thyroid Drugs" }] },
  "Levothyroxine (T4)": { scenes: [{ img: "sketchy_images/GI & endocrine/3.1 - Propylthiouracil, methimazole, levothyroxine.png", title: "Thyroid Drugs" }] },
  "Bisphosphonates & Osteoporosis Drugs": { scenes: [{ img: "sketchy_images/GI & endocrine/3.2 - Bisphosphonates, raloxifene, denosumab, calcitonin.png", title: "Bisphosphonates / Raloxifene" }] },
  "Calcitonin": { scenes: [{ img: "sketchy_images/GI & endocrine/3.2 - Bisphosphonates, raloxifene, denosumab, calcitonin.png", title: "Bisphosphonates / Raloxifene" }] },
  "Cinacalcet & Sevelamer": { scenes: [{ img: "sketchy_images/GI & endocrine/3.3 - Teriparatide, vitamin D, cinacalcet, sevelamer.png", title: "Cinacalcet / Vit D / Teriparatide" }] },
  "Corticosteroids (Glucocorticoids)": { scenes: [{ img: "sketchy_images/GI & endocrine/3.4 - Glucocorticoids.png", title: "Glucocorticoids" }] },
  "ADH / Desmopressin (DDAVP) & Vaptans": { scenes: [{ img: "sketchy_images/GI & endocrine/4.1 - ADH, DDAVP, ADH receptor antagonists.png", title: "ADH / DDAVP / Vaptans" }] },
  "Growth Hormone Axis Drugs": { scenes: [{ img: "sketchy_images/GI & endocrine/4.2 - Growth hormone, mecasermin, octreotide, pegvisomant.png", title: "GH Axis Drugs" }] },

  // ════════════════════════════════════════════════════════
  // SMOOTH MUSCLE
  // ════════════════════════════════════════════════════════

  "Nitrates": { scenes: [{ img: "sketchy_images/smooth muscle/1.1 - Nitrates.png", title: "Nitrates" }] },
  "Sumatriptan (Triptans)": { scenes: [{ img: "sketchy_images/smooth muscle/1.2 - Triptans & migraine.png", title: "Triptans" }] },
  "Prostaglandins, Prostacyclin, Bosentan & PDE5 Inhibitors": { scenes: [{ img: "sketchy_images/smooth muscle/1.3 - Prostaglandins, prostacyclin, bosentan, PDE5 inhibitors.png", title: "Prostaglandins / Bosentan / PDE5" }] },
  "Antihistamines": { scenes: [{ img: "sketchy_images/smooth muscle/2.1 - Antihistamines.png", title: "Antihistamines" }] },
  "SABAs & LABAs": { scenes: [{ img: "sketchy_images/smooth muscle/2.2 - Asthma therapy.png", title: "Asthma Therapy" }] },
  "Inhaled Corticosteroids (ICS)": { scenes: [{ img: "sketchy_images/smooth muscle/2.2 - Asthma therapy.png", title: "Asthma Therapy" }] },
  "Leukotriene Antagonists (LTRAs)": { scenes: [{ img: "sketchy_images/smooth muscle/2.2 - Asthma therapy.png", title: "Asthma Therapy" }] },
  "Omalizumab & Biologic Asthma Therapies": { scenes: [{ img: "sketchy_images/smooth muscle/2.2 - Asthma therapy.png", title: "Asthma Therapy" }] },
  "Cromolyn Sodium": { scenes: [{ img: "sketchy_images/smooth muscle/2.2 - Asthma therapy.png", title: "Asthma Therapy" }] },

  // ════════════════════════════════════════════════════════
  // NEURO & PSYCH
  // ════════════════════════════════════════════════════════

  "Benzodiazepines": { scenes: [{ img: "sketchy_images/neuro & psych/1.1 - Benzodiazepines, flumazenil.png", title: "Benzodiazepines / Flumazenil" }] },
  "Non-Benzodiazepine Hypnotics (Z-drugs) & Ramelteon": { scenes: [{ img: "sketchy_images/neuro & psych/1.2 - Nonbenzodiazepine hypnotics, melatonin, ramelteon.png", title: "Z-drugs / Ramelteon" }] },
  "Barbiturates": { scenes: [{ img: "sketchy_images/neuro & psych/1.3 - Barbiturates.png", title: "Barbiturates" }] },
  "Propofol, Etomidate & Ketamine": { scenes: [{ img: "sketchy_images/neuro & psych/2.1 - Propofol, etomidate, ketamine.png", title: "Propofol / Etomidate / Ketamine" }] },
  "Inhaled Anesthetics": { scenes: [{ img: "sketchy_images/neuro & psych/2.2 - Inhaled anesthetics, dantrolene.png", title: "Inhaled Anesthetics / Dantrolene" }] },
  "Local Anesthetics": { scenes: [{ img: "sketchy_images/neuro & psych/2.2 - Inhaled anesthetics, dantrolene.png", title: "Inhaled Anesthetics / Dantrolene" }] },
  "Opioid Analgesics": { scenes: [{ img: "sketchy_images/neuro & psych/2.3 - Opiates, naloxone, naltrexone.png", title: "Opioids / Naloxone" }] },
  "Naloxone, Naltrexone & Buprenorphine": { scenes: [{ img: "sketchy_images/neuro & psych/2.3 - Opiates, naloxone, naltrexone.png", title: "Opioids / Naloxone" }] },
  "SSRIs & SNRIs": { scenes: [{ img: "sketchy_images/neuro & psych/3.1 - SSRIs, SNRIs, cyproheptadine.png", title: "SSRIs / SNRIs" }] },
  "Tricyclic Antidepressants (TCAs)": { scenes: [{ img: "sketchy_images/neuro & psych/3.2 - Tricyclic antidepressants.png", title: "TCAs" }] },
  "MAO Inhibitors (MAOIs)": { scenes: [{ img: "sketchy_images/neuro & psych/3.3 - MAO inhibitors.png", title: "MAOIs" }] },
  "Atypical Antidepressants": { scenes: [{ img: "sketchy_images/neuro & psych/3.4 - Bupropion, mirtazapine, trazodone.png", title: "Bupropion / Mirtazapine / Trazodone" }] },
  "Lithium": { scenes: [{ img: "sketchy_images/neuro & psych/4.1 - Lithium.png", title: "Lithium" }] },
  "Valproate": { scenes: [{ img: "sketchy_images/neuro & psych/4.2 - Valproate, topiramate, lamotrigine, levetiracetam.png", title: "Valproate / Topiramate / Lamotrigine" }] },
  "Lamotrigine": { scenes: [{ img: "sketchy_images/neuro & psych/4.2 - Valproate, topiramate, lamotrigine, levetiracetam.png", title: "Valproate / Topiramate / Lamotrigine" }] },
  "Topiramate": { scenes: [{ img: "sketchy_images/neuro & psych/4.2 - Valproate, topiramate, lamotrigine, levetiracetam.png", title: "Valproate / Topiramate / Lamotrigine" }] },
  "Levetiracetam": { scenes: [{ img: "sketchy_images/neuro & psych/4.2 - Valproate, topiramate, lamotrigine, levetiracetam.png", title: "Valproate / Topiramate / Lamotrigine" }] },
  "Phenytoin": { scenes: [{ img: "sketchy_images/neuro & psych/4.3 - Carbamazepine, phenytoin, gabapentin, tiagabine, vigabatrin.png", title: "Phenytoin / Carbamazepine / Gabapentin" }] },
  "Carbamazepine": { scenes: [{ img: "sketchy_images/neuro & psych/4.3 - Carbamazepine, phenytoin, gabapentin, tiagabine, vigabatrin.png", title: "Phenytoin / Carbamazepine / Gabapentin" }] },
  "Gabapentin, Tiagabine & Vigabatrin": { scenes: [{ img: "sketchy_images/neuro & psych/4.3 - Carbamazepine, phenytoin, gabapentin, tiagabine, vigabatrin.png", title: "Phenytoin / Carbamazepine / Gabapentin" }] },
  "Ethosuximide": { scenes: [{ img: "sketchy_images/neuro & psych/4.4 - Ethosuximide.png", title: "Ethosuximide" }] },
  "Antipsychotics — First Generation (FGAs)": { scenes: [{ img: "sketchy_images/neuro & psych/5.1 - First generation antipsychotics.png", title: "First Gen Antipsychotics" }] },
  "Antipsychotics — Second Generation (SGAs / Atypicals)": { scenes: [{ img: "sketchy_images/neuro & psych/5.2 - Second generation antipsychotics.png", title: "Second Gen Antipsychotics" }] },
  "Levodopa / Carbidopa": { scenes: [{ img: "sketchy_images/neuro & psych/5.3 - Levodopa:carbidopa, entacapone, tolcapone, selegiline, ropinirole, pramipexole, amantadine.png", title: "Parkinson Drugs" }] },
  "Dopamine Agonists (Parkinson's)": { scenes: [{ img: "sketchy_images/neuro & psych/5.3 - Levodopa:carbidopa, entacapone, tolcapone, selegiline, ropinirole, pramipexole, amantadine.png", title: "Parkinson Drugs" }] },
  "Entacapone & Tolcapone (COMT Inhibitors)": { scenes: [{ img: "sketchy_images/neuro & psych/5.3 - Levodopa:carbidopa, entacapone, tolcapone, selegiline, ropinirole, pramipexole, amantadine.png", title: "Parkinson Drugs" }] },
  "Amphetamines & Methylphenidate": { scenes: [{ img: "sketchy_images/autonomic drugs/2.2 - Indirect sympathomimetics.png", title: "Indirect Sympathomimetics" }] },

  // ════════════════════════════════════════════════════════
  // ANTINEOPLASTICS / ONCO
  // ════════════════════════════════════════════════════════

  "Antimetabolites": { scenes: [{ img: "sketchy_images/antineoplastics/1.1 - Methotrexate, leucovorin, 5-fluorouracil, hydroxyurea.png", title: "Methotrexate / 5-FU / Hydroxyurea" }] },
  "Hydroxyurea": { scenes: [{ img: "sketchy_images/antineoplastics/1.1 - Methotrexate, leucovorin, 5-fluorouracil, hydroxyurea.png", title: "Methotrexate / 5-FU / Hydroxyurea" }] },
  "Azathioprine": { scenes: [{ img: "sketchy_images/antineoplastics/1.2 - Azathioprine, 6-mercaptopurine, mycophenolate mofetil.png", title: "Azathioprine / 6-MP / MMF" }] },
  "Mycophenolate Mofetil": { scenes: [{ img: "sketchy_images/antineoplastics/1.2 - Azathioprine, 6-mercaptopurine, mycophenolate mofetil.png", title: "Azathioprine / 6-MP / MMF" }] },
  "Cytarabine, Cladribine & Gemcitabine": { scenes: [{ img: "sketchy_images/antineoplastics/1.3 - Cladribine, cytarabine, gemcitabine.png", title: "Cytarabine / Cladribine / Gemcitabine" }] },
  "Alkylating Agents": { scenes: [{ img: "sketchy_images/antineoplastics/2.1 - Cyclophosphamide, ifosfamide, busulifan, nitrosoureas (carmustine, lomustine, streptozocin).png", title: "Alkylating Agents" }] },
  "Bleomycin": { scenes: [{ img: "sketchy_images/antineoplastics/2.3 - Bleomycin, doxorubicin, daunorubicin, actinomycin D.png", title: "Bleomycin / Anthracyclines" }] },
  "Anthracyclines": { scenes: [{ img: "sketchy_images/antineoplastics/2.3 - Bleomycin, doxorubicin, daunorubicin, actinomycin D.png", title: "Bleomycin / Anthracyclines" }] },
  "Topoisomerase Inhibitors": { scenes: [{ img: "sketchy_images/antineoplastics/2.4 - Etoposide, teniposide, topotecan, irinotecan.png", title: "Topoisomerase Inhibitors" }] },
  "Microtubule-Targeting Agents": { scenes: [{ img: "sketchy_images/antineoplastics/2.5 - Vincristine, vinblastine, paclitaxel.png", title: "Vinca Alkaloids / Taxanes" }] },
  "Tyrosine Kinase Inhibitors (TKIs) — Targeted Oncology": { scenes: [{ img: "sketchy_images/antineoplastics/3.1 - Imatinib, erlotinib, sorafenib, sunitinib, vemurafenib.png", title: "TKIs" }] },
  "Targeted Therapy & Monoclonal Antibodies": { scenes: [{ img: "sketchy_images/antineoplastics/3.1 - Imatinib, erlotinib, sorafenib, sunitinib, vemurafenib.png", title: "TKIs" }, { img: "sketchy_images/antineoplastics/3.2 - Rituximab, cetuximab, bevacizumab, alemtuzumab, trastuzumab.png", title: "Monoclonal Antibodies" }] },
  "Cyclosporine & Tacrolimus (Calcineurin Inhibitors)": { scenes: [{ img: "sketchy_images/antineoplastics/1.2 - Azathioprine, 6-mercaptopurine, mycophenolate mofetil.png", title: "Immunosuppressants" }] },
  "Hydroxychloroquine": { scenes: [{ img: "sketchy_images/antineoplastics/1.2 - Azathioprine, 6-mercaptopurine, mycophenolate mofetil.png", title: "Immunosuppressants" }] },

};
