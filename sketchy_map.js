// sketchy_map.js — Sketchy Micro image mappings
// Keys must exactly match the organism `name` field in micro_data.js
// Paths are relative to the HTML file

const SKETCHY_MAP = {

  // ════════════════════════════════════════════════════════
  // BACTERIA
  // ════════════════════════════════════════════════════════

  "Staphylococcus aureus": {
    scenes: [{ img: "sketchy_images/bacteria/1.1 - Staph Aureus.png", title: "Staph Aureus" }]
  },
  "Staphylococcus epidermidis": {
    scenes: [{ img: "sketchy_images/bacteria/1.2 - Staph Epidermis.png", title: "Staph Epidermidis" }]
  },
  "Streptococcus pyogenes (Group A Strep)": {
    scenes: [{ img: "sketchy_images/bacteria/1.3 - Strep Pyogenes.png", title: "Strep Pyogenes" }]
  },
  "Streptococcus agalactiae (Group B Strep)": {
    scenes: [{ img: "sketchy_images/bacteria/1.4 - Strep Agalactiae.png", title: "Strep Agalactiae" }]
  },
  "Streptococcus pneumoniae": {
    scenes: [{ img: "sketchy_images/bacteria/1.5 - Strep pneumoniae - Strep Viridans.png", title: "Strep Pneumoniae & Viridans" }]
  },
  "Streptococcus viridans": {
    scenes: [{ img: "sketchy_images/bacteria/1.5 - Strep pneumoniae - Strep Viridans.png", title: "Strep Pneumoniae & Viridans" }]
  },
  "Enterococcus faecalis / faecium": {
    scenes: [{ img: "sketchy_images/bacteria/1.6 - Enterococcus.png", title: "Enterococcus" }]
  },
  "Bacillus anthracis": {
    scenes: [{ img: "sketchy_images/bacteria/2.1 - Bacillus anthracis and Bacillus cereus.png", title: "Bacillus anthracis & cereus" }]
  },
  "Bacillus cereus": {
    scenes: [{ img: "sketchy_images/bacteria/2.1 - Bacillus anthracis and Bacillus cereus.png", title: "Bacillus anthracis & cereus" }]
  },
  "Clostridium tetani": {
    scenes: [{ img: "sketchy_images/bacteria/2.2 - Clostridium tetani.png", title: "C. tetani" }]
  },
  "Clostridium botulinum": {
    scenes: [{ img: "sketchy_images/bacteria/2.3 - Clostridium botulinum.png", title: "C. botulinum" }]
  },
  "Clostridium difficile": {
    scenes: [{ img: "sketchy_images/bacteria/2.4 - Clostridium difficile.png", title: "C. difficile" }]
  },
  "Clostridium perfringens": {
    scenes: [{ img: "sketchy_images/bacteria/2.5 - Clostridium perfringens.png", title: "C. perfringens" }]
  },
  "Corynebacterium diphtheriae": {
    scenes: [{ img: "sketchy_images/bacteria/2.6 - Corynebacterium diphtheriae.png", title: "C. diphtheriae" }]
  },
  "Listeria monocytogenes": {
    scenes: [{ img: "sketchy_images/bacteria/2.7 - Listeria monocytonegenes.png", title: "Listeria" }]
  },
  "Actinomyces israelii": {
    scenes: [{ img: "sketchy_images/bacteria/3.1 - Actinomyces.png", title: "Actinomyces" }]
  },
  "Nocardia asteroides": {
    scenes: [{ img: "sketchy_images/bacteria/3.2 - Nocardia.png", title: "Nocardia" }]
  },
  "Neisseria meningitidis": {
    scenes: [
      { img: "sketchy_images/bacteria/4.1 - Neisseria species overview.png", title: "Neisseria Overview" },
      { img: "sketchy_images/bacteria/4.2 - Neisseria meningitidis.png", title: "N. meningitidis" }
    ]
  },
  "Neisseria gonorrhoeae": {
    scenes: [
      { img: "sketchy_images/bacteria/4.1 - Neisseria species overview.png", title: "Neisseria Overview" },
      { img: "sketchy_images/bacteria/4.3 - Neisseria gonorrheae.png", title: "N. gonorrhoeae" }
    ]
  },
  "Klebsiella pneumoniae": {
    scenes: [{ img: "sketchy_images/bacteria/5.1 - Klebsiella, Enterobacter, Serratia.png", title: "Klebsiella / Enterobacter / Serratia" }]
  },
  "Enterobacter & Serratia": {
    scenes: [{ img: "sketchy_images/bacteria/5.1 - Klebsiella, Enterobacter, Serratia.png", title: "Klebsiella / Enterobacter / Serratia" }]
  },
  "Salmonella": {
    scenes: [{ img: "sketchy_images/bacteria/5.2 - Salmonella.png", title: "Salmonella" }]
  },
  "Shigella": {
    scenes: [{ img: "sketchy_images/bacteria/5.3 - Shigella.png", title: "Shigella" }]
  },
  "Escherichia coli": {
    scenes: [{ img: "sketchy_images/bacteria/5.4 - Escherichia coli (ETEC, EHEC).png", title: "E. coli (ETEC/EHEC)" }]
  },
  "Yersinia enterocolitica": {
    scenes: [{ img: "sketchy_images/bacteria/5.5 - Yersinia enterocolitica.png", title: "Yersinia" }]
  },
  "Campylobacter jejuni": {
    scenes: [{ img: "sketchy_images/bacteria/5.6 - Campylobacter.png", title: "Campylobacter" }]
  },
  "Vibrio cholerae": {
    scenes: [{ img: "sketchy_images/bacteria/5.7 - Vibrio Cholera.png", title: "Vibrio cholerae" }]
  },
  "Helicobacter pylori": {
    scenes: [{ img: "sketchy_images/bacteria/5.8 - Helicobacter.jpg", title: "H. pylori" }]
  },
  "Pseudomonas aeruginosa": {
    scenes: [{ img: "sketchy_images/bacteria/5.9 - Pseudomonas.jpg", title: "Pseudomonas" }]
  },
  "Proteus mirabilis": {
    scenes: [{ img: "sketchy_images/bacteria/5.10 - Proteus.png", title: "Proteus" }]
  },
  "Bordetella pertussis": {
    scenes: [{ img: "sketchy_images/bacteria/6.1 - Bordatella pertussis.png", title: "Bordetella pertussis" }]
  },
  "Haemophilus influenzae": {
    scenes: [{ img: "sketchy_images/bacteria/6.2 - Haemophilus influenzae.png", title: "H. influenzae" }]
  },
  "Legionella pneumophila": {
    scenes: [{ img: "sketchy_images/bacteria/6.3 - Legionella.png", title: "Legionella" }]
  },
  "Bartonella henselae": {
    scenes: [{ img: "sketchy_images/bacteria/7.1 - Bartonella henselae.png", title: "Bartonella" }]
  },
  "Brucella species": {
    scenes: [{ img: "sketchy_images/bacteria/7.2 - Brucella.png", title: "Brucella" }]
  },
  "Francisella tularensis": {
    scenes: [{ img: "sketchy_images/bacteria/7.3 - Francisella tularensis.png", title: "Francisella" }]
  },
  "Pasteurella multocida": {
    scenes: [{ img: "sketchy_images/bacteria/7.4 - Pasteurella multocida.png", title: "Pasteurella" }]
  },
  "Mycobacterium tuberculosis": {
    scenes: [{ img: "sketchy_images/bacteria/8.1 - Mycobacterium tuberculosis.png", title: "M. tuberculosis" }]
  },
  "Mycobacterium leprae": {
    scenes: [{ img: "sketchy_images/bacteria/8.2 - Mycobacterium leprae.png", title: "M. leprae" }]
  },
  "Borrelia burgdorferi": {
    scenes: [{ img: "sketchy_images/bacteria/9.1 - Borrelia.png", title: "Borrelia" }]
  },
  "Leptospira interrogans": {
    scenes: [{ img: "sketchy_images/bacteria/9.2 - Leptospirosis.png", title: "Leptospira" }]
  },
  "Treponema pallidum": {
    scenes: [{ img: "sketchy_images/bacteria/9.3 - Treponema Pallidum.png", title: "T. pallidum" }]
  },
  "Chlamydia trachomatis": {
    scenes: [{ img: "sketchy_images/bacteria/10.1 - Chlamydia.png", title: "Chlamydia" }]
  },
  "Chlamydophila pneumoniae": {
    scenes: [{ img: "sketchy_images/bacteria/10.1 - Chlamydia.png", title: "Chlamydia" }]
  },
  "Chlamydophila psittaci": {
    scenes: [{ img: "sketchy_images/bacteria/10.1 - Chlamydia.png", title: "Chlamydia" }]
  },
  "Coxiella burnetii": {
    scenes: [{ img: "sketchy_images/bacteria/10.2 - Coxiella burnetii.png", title: "Coxiella" }]
  },
  "Gardnerella vaginalis": {
    scenes: [{ img: "sketchy_images/bacteria/10.3 - Gardnerella vaginalis.png", title: "Gardnerella" }]
  },
  "Mycoplasma pneumoniae": {
    scenes: [{ img: "sketchy_images/bacteria/10.4 - Mycoplasma pneumoniae.png", title: "Mycoplasma" }]
  },
  "Rickettsia rickettsii": {
    scenes: [
      { img: "sketchy_images/bacteria/10.5 - Rickettsia species overview.png", title: "Rickettsia Overview" },
      { img: "sketchy_images/bacteria/10.7 - Rickettsia rickettsii.png", title: "R. rickettsii" }
    ]
  },
  "Rickettsia prowazekii": {
    scenes: [
      { img: "sketchy_images/bacteria/10.5 - Rickettsia species overview.png", title: "Rickettsia Overview" },
      { img: "sketchy_images/bacteria/10.6 - Rickettsia prowazekii.png", title: "R. prowazekii" }
    ]
  },

  // ════════════════════════════════════════════════════════
  // VIRUSES
  // ════════════════════════════════════════════════════════

  "HSV-1 and HSV-2": {
    scenes: [{ img: "sketchy_images/viruses/3.1 - HSV1 HSV2.png", title: "HSV-1 & HSV-2" }]
  },
  "VZV (HHV-3) - Varicella-Zoster Virus": {
    scenes: [{ img: "sketchy_images/viruses/3.4 - VZV.png", title: "VZV" }]
  },
  "EBV (HHV-4) - Epstein-Barr Virus": {
    scenes: [{ img: "sketchy_images/viruses/3.2 - EBV.png", title: "EBV" }]
  },
  "CMV (HHV-5) - Cytomegalovirus": {
    scenes: [{ img: "sketchy_images/viruses/3.3 - CMV.png", title: "CMV" }]
  },
  "HHV-6 - Roseola": {
    scenes: [{ img: "sketchy_images/viruses/3.5 - HHV6 - Roseola.png", title: "HHV-6 Roseola" }]
  },
  "HHV-8 - Kaposi Sarcoma Herpesvirus": {
    scenes: [{ img: "sketchy_images/viruses/3.6 - HHV8 - Kaposi Sarcoma.png", title: "HHV-8 Kaposi" }]
  },
  "Polyomavirus (JC Virus & BK Virus)": {
    scenes: [{ img: "sketchy_images/viruses/3.7 - Polyomavirus JC & BK.png", title: "JC & BK Virus" }]
  },
  "HPV (Human Papillomavirus)": {
    scenes: [{ img: "sketchy_images/viruses/3.8 - Papillomavirus.png", title: "HPV" }]
  },
  "Parvovirus B19": {
    scenes: [{ img: "sketchy_images/viruses/3.9 - Parvovirus.png", title: "Parvovirus B19" }]
  },
  "Adenovirus": {
    scenes: [{ img: "sketchy_images/viruses/3.10 - Adenovirus.png", title: "Adenovirus" }]
  },
  "Poxvirus (Smallpox & Molluscum Contagiosum)": {
    scenes: [{ img: "sketchy_images/viruses/3.11 - Poxvirus.png", title: "Poxvirus" }]
  },
  "Hepatitis B (HBV) & Hepatitis D (HDV)": {
    scenes: [{ img: "sketchy_images/viruses/3.12 - Hepatitis B Virus.png", title: "Hepatitis B & D" }]
  },
  "Picornaviruses - Overview (Enteroviruses)": {
    scenes: [{ img: "sketchy_images/viruses/1.1 - Picornavirus Overview.png", title: "Picornavirus Overview" }]
  },
  "Poliovirus": {
    scenes: [
      { img: "sketchy_images/viruses/1.1 - Picornavirus Overview.png", title: "Picornavirus Overview" },
      { img: "sketchy_images/viruses/1.2 - (Pico) Poliovirus.png", title: "Poliovirus" }
    ]
  },
  "Coxsackievirus": {
    scenes: [
      { img: "sketchy_images/viruses/1.1 - Picornavirus Overview.png", title: "Picornavirus Overview" },
      { img: "sketchy_images/viruses/1.3 - (Pico) Coxsackie Virus.png", title: "Coxsackievirus" }
    ]
  },
  "Rhinovirus": {
    scenes: [{ img: "sketchy_images/viruses/1.4 - (Pico) Rhinovirus.png", title: "Rhinovirus" }]
  },
  "Hepatitis A Virus (HAV)": {
    scenes: [{ img: "sketchy_images/viruses/1.5 - (Pico) Hepatitis A.png", title: "Hepatitis A" }]
  },
  "Calicivirus (Norovirus)": {
    scenes: [{ img: "sketchy_images/viruses/1.6 - (Norwalk) Calicivirus.png", title: "Norovirus" }]
  },
  "Flavivirus (Dengue, West Nile, Yellow Fever, Zika)": {
    scenes: [
      { img: "sketchy_images/viruses/1.7 - Flavivirus (HepC, Dengue, Yellow Fever, West ….png", title: "Flavivirus Overview" },
      { img: "sketchy_images/viruses/1.8 - (Flavivirus) Hepatitis C Virus.png", title: "Hepatitis C" }
    ]
  },
  "Hepatitis C Virus (HCV)": {
    scenes: [{ img: "sketchy_images/viruses/1.8 - (Flavivirus) Hepatitis C Virus.png", title: "Hepatitis C" }]
  },
  "Togavirus (Rubella)": {
    scenes: [{ img: "sketchy_images/viruses/1.9 - Togavirus (Rubella, Arbovirus).png", title: "Togavirus / Rubella" }]
  },
  "Coronavirus (COVID-19 / SARS-CoV-2)": {
    scenes: [{ img: "sketchy_images/viruses/1.10 - Coronavirus.png", title: "Coronavirus" }]
  },
  "HIV (Human Immunodeficiency Virus)": {
    scenes: [{ img: "sketchy_images/viruses/1.11 - HIV.png", title: "HIV" }]
  },
  "Measles (Rubeola)": {
    scenes: [{ img: "sketchy_images/viruses/2.2 - Paramyxovirus.png", title: "Paramyxovirus (Measles/Mumps)" }]
  },
  "Mumps": {
    scenes: [{ img: "sketchy_images/viruses/2.2 - Paramyxovirus.png", title: "Paramyxovirus (Measles/Mumps)" }]
  },
  "Influenza (Orthomyxovirus)": {
    scenes: [{ img: "sketchy_images/viruses/2.1 - Orthomyxovirus.png", title: "Orthomyxovirus / Influenza" }]
  },
  "Rhabdovirus (Rabies)": {
    scenes: [{ img: "sketchy_images/viruses/2.3 - Rhabdovirus.png", title: "Rabies" }]
  },
  "Filovirus (Ebola & Marburg)": {
    scenes: [{ img: "sketchy_images/viruses/2.4 - Filovirus.png", title: "Filovirus" }]
  },
  "Bunyavirus (La Crosse Encephalitis & Hantavirus)": {
    scenes: [{ img: "sketchy_images/viruses/2.5 - Bunyavirus.png", title: "Bunyavirus" }]
  },
  "Arenavirus (LCMV & Lassa Fever)": {
    scenes: [{ img: "sketchy_images/viruses/2.6 - Arenavirus.png", title: "Arenavirus" }]
  },
  "Reovirus (Rotavirus)": {
    scenes: [{ img: "sketchy_images/viruses/2.7 - Reovirus (Rotavirus, Coltivirus - Colorado tick….png", title: "Rotavirus" }]
  },

  // ════════════════════════════════════════════════════════
  // FUNGI
  // ════════════════════════════════════════════════════════

  "Histoplasma capsulatum": {
    scenes: [{ img: "sketchy_images/fungi/1.1 - Histoplasmosis.png", title: "Histoplasmosis" }]
  },
  "Blastomyces dermatitidis": {
    scenes: [{ img: "sketchy_images/fungi/1.2 - Blastomycosis.png", title: "Blastomycosis" }]
  },
  "Coccidioides immitis": {
    scenes: [{ img: "sketchy_images/fungi/1.3 - Coccidioidomycosis.png", title: "Coccidioidomycosis" }]
  },
  "Paracoccidioides brasiliensis": {
    scenes: [{ img: "sketchy_images/fungi/1.4 - Paracoccidioidomycosis.png", title: "Paracoccidioidomycosis" }]
  },
  "Malassezia furfur": {
    scenes: [{ img: "sketchy_images/fungi/2.1 - Malassezia furfur : Pityriasis Versicolor.png", title: "Malassezia / Pityriasis" }]
  },
  "Dermatophytes (Tinea)": {
    scenes: [{ img: "sketchy_images/fungi/2.2 - Dermatophytes.png", title: "Dermatophytes" }]
  },
  "Sporothrix schenckii": {
    scenes: [{ img: "sketchy_images/fungi/2.3 - Sporothrix schenckii.png", title: "Sporothrix" }]
  },
  "Candida albicans": {
    scenes: [{ img: "sketchy_images/fungi/3.1 - Candida albicans.png", title: "Candida" }]
  },
  "Aspergillus fumigatus": {
    scenes: [{ img: "sketchy_images/fungi/3.2 - Aspergillus fumigatus.png", title: "Aspergillus" }]
  },
  "Cryptococcus neoformans": {
    scenes: [{ img: "sketchy_images/fungi/3.3 - Cryptococcus neoformans.png", title: "Cryptococcus" }]
  },
  "Mucormycosis (Rhizopus/Mucor)": {
    scenes: [{ img: "sketchy_images/fungi/3.4 - Mucormycosis.png", title: "Mucormycosis" }]
  },
  "Pneumocystis jirovecii (PCP)": {
    scenes: [{ img: "sketchy_images/fungi/3.5 - Pneumocystis pneumonia.png", title: "PCP" }]
  },

  // ════════════════════════════════════════════════════════
  // PARASITES
  // ════════════════════════════════════════════════════════

  "Giardia lamblia": {
    scenes: [{ img: "sketchy_images/parasites/1.1 - Giardia.png", title: "Giardia" }]
  },
  "Entamoeba histolytica": {
    scenes: [{ img: "sketchy_images/parasites/1.2 - Entamoeba histolytica.png", title: "Entamoeba histolytica" }]
  },
  "Cryptosporidium parvum": {
    scenes: [{ img: "sketchy_images/parasites/1.3 - Cryptosporidium.png", title: "Cryptosporidium" }]
  },
  "Toxoplasma gondii": {
    scenes: [{ img: "sketchy_images/parasites/2.1 - Toxoplasmosis.png", title: "Toxoplasmosis" }]
  },
  "Trypanosoma brucei (Sleeping Sickness)": {
    scenes: [{ img: "sketchy_images/parasites/2.2 - Trypanosoma brucei.png", title: "T. brucei" }]
  },
  "Naegleria fowleri": {
    scenes: [{ img: "sketchy_images/parasites/2.3 - Naegleria fowleri.png", title: "Naegleria" }]
  },
  "Trypanosoma cruzi (Chagas Disease)": {
    scenes: [{ img: "sketchy_images/parasites/3.1 - Trypanosoma cruzi.png", title: "T. cruzi" }]
  },
  "Babesia": {
    scenes: [{ img: "sketchy_images/parasites/3.2 - Babesia.png", title: "Babesia" }]
  },
  "Plasmodium species (Malaria)": {
    scenes: [{ img: "sketchy_images/parasites/3.3 - Plasmodium species.png", title: "Plasmodium" }]
  },
  "Leishmania": {
    scenes: [{ img: "sketchy_images/parasites/3.4 - Leishmaniasis.png", title: "Leishmaniasis" }]
  },
  "Trichomonas vaginalis": {
    scenes: [{ img: "sketchy_images/parasites/4.1 - Trichomoniasis.png", title: "Trichomonas" }]
  },
  "Intestinal Nematodes": {
    scenes: [{ img: "sketchy_images/parasites/5.1 - Intestinal nematodes.png", title: "Intestinal Nematodes" }]
  },
  "Tissue Nematodes & Trematodes": {
    scenes: [
      { img: "sketchy_images/parasites/5.2 - Tissue Nematodes.png", title: "Tissue Nematodes" },
      { img: "sketchy_images/parasites/6.2 - Trematodes.png", title: "Trematodes" }
    ]
  },
  "Cestodes (Tapeworms)": {
    scenes: [{ img: "sketchy_images/parasites/6.1 - Cestodes.png", title: "Cestodes" }]
  },

};
