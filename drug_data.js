// drug_data.js — Step 1 Study Hub
// 149 drugs across 10 categories

/* ── Category metadata ────────────────────────────────────────
   Add or rename categories here — the HTML reads this
   automatically. Order here controls tab order in the UI.
   ──────────────────────────────────────────────────────────── */
const CAT_META = {
  autonomic:      { label: 'Autonomics',      color: '#c4505e', desc: 'Parasympathetic (cholinergic) and sympathetic (adrenergic) drug classes. Master receptor subtypes first — M1/M2/M3, α1/α2, β1/β2 — and the drugs fall into place. High-yield for organ-specific side effects and clinical applications.' },
  cv:             { label: 'Cardio & Renal',  color: '#9e3a5a', desc: 'The most tested drug system on Step 1. Know ACEi/ARBs cold — they appear in HF, HTN, CKD, and post-MI vignettes. Antiarrhythmic classes: think ion channels first, then drugs. Diuretic electrolyte effects are guaranteed questions.' },
  blood:          { label: 'Hematology',      color: '#7a3a8a', desc: 'Anticoagulants appear on nearly every Step 1 exam — know reversal agents cold. Heparin-induced thrombocytopenia (HIT) is a classic trap. NSAIDs are the most-prescribed drugs in medicine; their mechanism and GI/renal toxicity are ubiquitous.' },
  neuro:          { label: 'Neuro & Psych',   color: '#5a4490', desc: 'Psych block is massive on Step 1. Memorize antidepressant side effect profiles — TCA overdose, SSRI serotonin syndrome, and bupropion seizures appear constantly. Antipsychotic EPS and NMS are classic vignettes. Lithium toxicity has a narrow therapeutic window.' },
  micro:          { label: 'Microbiology',    color: '#3a6e7a', desc: 'Organized by mechanism: cell wall inhibitors → protein synthesis → DNA/folate → cell membrane. For each drug know its unique toxicity, not just its coverage. Antibiotic-associated C. diff (clindamycin, fluoroquinolones, cephalosporins) is a perennial vignette.' },
  gi:             { label: 'GI & Motility',   color: '#9e6a3d', desc: 'Focus on acid suppression, motility agents, and mucosal protection. High-yield for C. difficile associations and metabolic interactions with PPIs.' },
  endo:           { label: 'Endo & Repro',    color: '#c08c3e', desc: 'Master the hypothalamic-pituitary axes, diabetes management, and reproductive hormones. High-yield for Step 1 feedback loops and drug-induced endocrine disorders.' },
  pulm:           { label: 'Pulmonary',       color: '#3d6e8a', desc: 'Asthma step therapy is heavily tested — know which drugs are for acute relief vs. maintenance. Antihistamine receptor subtypes (H1 vs H2) determine organ effects and drug indication.' },
  onco:           { label: 'Oncology',        color: '#3a5a6e', desc: 'Step 1 tests toxicities more than mechanisms. Every chemotherapy drug has one unique, memorable toxicity — bleomycin → pulmonary fibrosis, cisplatin → nephrotoxicity/ototoxicity, vincristine → peripheral neuropathy (not bone marrow suppression).' },
  toxicology:     { label: 'Toxicology',      color: '#a63e3e', desc: 'Crucial reversal agents and toxidromes. Focus on the mechanism of toxicity and the logic of the chosen antidote. Know the classic overdose presentations cold.' },
};

const DRUGS = {

autonomic: [
  {
    group: "Parasympathetics",
    drugs: [
      {
        name: "Cholinomimetics (Direct)",
        aka: "Bethanechol · Carbachol · Pilocarpine · Methacholine",
        summary: "Direct Muscarinic Agonists activating parasympathetic end-organs.\nResistant to AChE hydrolysis.",
        moa: "Directly bind/activate **Muscarinic** (M1, M2, M3) receptors.\n**M1/M3 = Gq** pathway (↑ IP3/DAG); **M2 = Gi** (↓ cAMP).\nResistant to AChE → prolonged action compared to ACh.",
        use: "**Bethanechol**: Postop/neurogenic **ileus** and **urinary retention** ('Bethany, call me to empty your bladder').\n**Pilocarpine**: Open-angle and acute **closed-angle glaucoma** (↑ aqueous outflow); **Sjögren syndrome** (sweat, tears, saliva).\n**Methacholine**: **Bronchial challenge** for asthma diagnosis.\n**Carbachol**: Miosis for intraocular surgery.",
        se: "**DUMBBELLS**: Diarrhea, Urination, Miosis, Bradycardia, Bronchospasm, Emesis, Lacrimation, Salivation.\n**Sweating** (M3 effect on eccrine glands).",
        ci: "**Asthma/COPD** (bronchospasm).\n**Peptic Ulcer** (↑ gastric acid).\n**Bowel/Bladder obstruction**.",
        pk: "**Bethanechol**: Quaternary amine (polar, does **NOT** cross BBB).\n**Pilocarpine**: Tertiary amine (non-polar, crosses BBB).",
        pearl: "Pilocarpine contracts the **ciliary muscle** → pulls on **scleral spur** → opens **trabecular meshwork** to drain aqueous humor."
      },
      {
        name: "Acetylcholinesterase Inhibitors",
        aka: "Neostigmine · Pyridostigmine · Physostigmine · Edrophonium · Donepezil · Rivastigmine · Galantamine",
        summary: "Reversibly inhibit AChE to ↑ synaptic ACh at muscarinic and nicotinic receptors. Used for myasthenia gravis, Alzheimer dementia, and NMB reversal.",
        moa: "Inhibit **acetylcholinesterase (AChE)** → ↓ ACh hydrolysis → ↑ ACh at muscarinic and nicotinic synapses.",
        use: "**Neostigmine/Pyridostigmine:** myasthenia gravis; reversal of non-depolarizing NMB.\n**Edrophonium:** diagnosis of MG (Tensilon test — ultra-short action, t½ ~2 min).\n**Donepezil/Rivastigmine/Galantamine:** Alzheimer dementia (symptomatic only).\n**Physostigmine:** anticholinergic/atropine toxicity (only AChEI that crosses BBB).",
        se: "Cholinergic crisis (DUMBBELLS at high doses): bradycardia, bronchospasm, lacrimation, urination, diarrhea, emesis, miosis; muscle fasciculations (nicotinic).",
        ci: "Bowel or bladder obstruction; succinylcholine co-administration with neostigmine (↑ Phase I block).\n**Physostigmine:** avoid in TCA overdose (lowers seizure threshold).",
        pk: "**Physostigmine:** tertiary amine — crosses BBB; t½ ~1–2 hr.\n**Neostigmine/Pyridostigmine:** quaternary amines — do NOT cross BBB; renal elimination.\n**Edrophonium:** ultra-short, t½ ~2 min.\n**Donepezil:** oral, t½ ~70 hr, hepatic (CYP2D6/3A4).",
        pearl: "**Organophosphate poisoning = irreversible AChE inhibition** (nerve agents: sarin, VX; pesticides: parathion).\nTreat with **atropine** (high-dose — blocks DUMBBELLS) + **pralidoxime** (regenerates AChE — must give before irreversible 'aging')."
      },
      {
        name: "Muscarinic Antagonists (Anticholinergics)",
        aka: "Atropine · Scopolamine · Ipratropium · Tiotropium · Oxybutynin · Tolterodine · Benztropine · Glycopyrrolate",
        summary: "Competitively block muscarinic receptors to reduce parasympathetic tone. 'Hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter.'",
        moa: "Competitive antagonism at **muscarinic (M1–M5) receptors** → ↓ parasympathetic activity at smooth muscle, glands, and sinoatrial node.",
        use: "**Atropine:** symptomatic bradycardia; organophosphate poisoning; pre-op to dry secretions.\n**Scopolamine:** motion sickness (transdermal patch).\n**Ipratropium/Tiotropium:** COPD bronchodilation (first-line).\n**Oxybutynin/Tolterodine:** overactive bladder.\n**Benztropine:** drug-induced Parkinsonism (EPS).\n**Glycopyrrolate:** antisialagogue; does NOT cross BBB.",
        se: "**Can't see** (mydriasis, cycloplegia) · **can't spit** (dry mouth) · **can't pee** (urinary retention) · **can't poop** (constipation) · tachycardia · hyperthermia · flushing · delirium (especially elderly).",
        ci: "Narrow-angle glaucoma (mydriasis closes drainage angle → acute crisis); BPH (urinary retention); tachyarrhythmias; myasthenia gravis.",
        pk: "**Ipratropium/Tiotropium:** inhaled quaternary amines — minimal systemic absorption.\n**Glycopyrrolate:** quaternary — does NOT cross BBB.\n**Scopolamine:** transdermal, 72 hr duration.\n**Atropine:** IV/IM/SC, t½ ~2–3 hr.",
        pearl: "**Classic tox vignette:** elderly patient with confusion, dilated pupils, urinary retention, dry flushed skin, tachycardia = anticholinergic toxicity.\nAntidote: **physostigmine** (tertiary amine, crosses BBB) — not neostigmine."
      }
    ]
  },
  {
    group: "Sympathetics",
    drugs: [
      {
        name: "Epinephrine & Norepinephrine",
        aka: "Epinephrine (Adrenaline, EpiPen) · Norepinephrine (Levophed)",
        summary: "Endogenous catecholamines — epinephrine for anaphylaxis and cardiac arrest; norepinephrine is first-line vasopressor in septic shock.",
        moa: "**Epinephrine:** full agonist at α1/α2/β1/β2. Low doses: β2 dominates (bronchodilation, ↓ SVR); high doses: α1 dominates (vasoconstriction).\n**Norepinephrine:** α1/α2/β1 agonist, minimal β2 → predominant vasoconstriction with modest inotropy.",
        use: "**Epinephrine:** anaphylaxis (IM lateral thigh — first-line); cardiac arrest (IV/IO); croup (nebulized racemic); co-administered with local anesthetics (↑ duration).\n**Norepinephrine:** first-line vasopressor in septic shock (maintain MAP ≥65 mmHg).",
        se: "Hypertension, tachycardia, arrhythmias.\n**Epinephrine:** hyperglycemia (β2 → glycogenolysis/gluconeogenesis).\n**Norepinephrine:** reflex bradycardia; tissue necrosis with extravasation (prefer central line).",
        ci: "Relative CI with cocaine/amphetamine toxicity (synergistic catecholamine surge → arrhythmia, HTN crisis).\nNo absolute CI in true anaphylaxis — always give epinephrine.",
        pk: "Both: IV infusion, t½ ~2 min, rapidly degraded by MAO and COMT — not effective orally.\n**Epinephrine IM lateral thigh:** peak plasma ~8 min — faster than deltoid or SC.",
        pearl: "**Epinephrine in anaphylaxis:** α1 → vasoconstriction (↑BP, ↓laryngeal edema); β1 → ↑CO; β2 → bronchodilation + ↓mast cell mediator release.\nIM lateral thigh is faster than deltoid and far safer than IV/SC — never delay for IV access."
      },
      {
        name: "Dopamine & Dobutamine",
        aka: "Dopamine (Intropin) · Dobutamine (Dobutrex)",
        summary: "Dopamine has dose-dependent receptor selectivity from renal vasodilation to vasoconstriction; dobutamine is a pure inodilator. Both used for cardiac pump failure.",
        moa: "**Dopamine (dose-dependent):**\nLow (1–3 µg/kg/min): D1 → renal/mesenteric vasodilation.\nMid (3–10 µg/kg/min): β1 → ↑ inotropy/HR.\nHigh (>10 µg/kg/min): α1 → vasoconstriction.\n**Dobutamine:** β1 > β2 → ↑ contractility + mild ↓ afterload; does NOT reliably ↑ MAP.",
        use: "**Dopamine:** cardiogenic shock with hypotension; symptomatic bradycardia with hypotension (second-line).\n**Dobutamine:** cardiogenic shock/acute decompensated HF (↑ CO without excess ↑ afterload); pharmacological stress echocardiography.",
        se: "Both: tachyarrhythmias, ↑ myocardial O2 demand.\n**Dobutamine:** hypotension (β2 vasodilation); may precipitate ischemia in severe CAD.\n**Dopamine:** ischemia at high doses.",
        ci: "**Dobutamine:** HOCM (worsens outflow obstruction); uncorrected hypovolemia.\n**Dopamine:** tachyarrhythmias; NE now preferred over dopamine in septic shock guidelines.",
        pk: "Both: IV continuous infusion only; t½ ~2 min; titrated to effect.\nDobutamine metabolized by COMT + sulfation.",
        pearl: "**Dobutamine stress echo:** ↑ HR and contractility unmask regional wall motion abnormalities in CAD — used when patient can't exercise.\nUnlike NE, dobutamine does NOT reliably maintain BP — if BP support is also needed, add a vasopressor."
      },
      {
        name: "Phenylephrine & Isoproterenol",
        aka: "Phenylephrine (Neo-Synephrine) · Isoproterenol (Isuprel)",
        summary: "Selective adrenergic agonists with opposite hemodynamic profiles: phenylephrine raises BP with reflex bradycardia; isoproterenol raises HR with hypotension.",
        moa: "**Phenylephrine:** selective **α1** agonist → ↑ SVR, ↑ BP, reflex bradycardia (↓ HR via baroreceptors).\n**Isoproterenol:** non-selective **β1 + β2** agonist → ↑ HR/contractility + peripheral/pulmonary vasodilation.",
        use: "**Phenylephrine:** vasopressor for hypotension without tachycardia (e.g., spinal anesthesia); nasal decongestant (topical); mydriatic eye drops.\n**Isoproterenol:** complete heart block (bridge to pacemaker); severe bradycardia refractory to atropine.",
        se: "**Phenylephrine:** reflex bradycardia, severe hypertension, tissue ischemia.\n**Isoproterenol:** tachycardia, arrhythmias, hypotension, ↑ myocardial O2 demand.",
        ci: "**Phenylephrine:** severe hypertension, HOCM.\n**Isoproterenol:** tachyarrhythmias, angina (↑ O2 demand).",
        pk: "**Phenylephrine:** IV infusion or IM/SC; rapid onset, t½ ~5 min; predominantly sulfate conjugation.\n**Isoproterenol:** IV infusion; t½ ~2 min; metabolized by COMT.",
        pearl: "**Phenylephrine causes predictable reflex bradycardia** (pure α1 → ↑BP → baroreceptor activation → vagal slowing). Useful when tachycardia is itself the problem. Contrast with epinephrine, which raises both BP and HR."
      },
      {
        name: "Beta Blockers (β-blockers)",
        aka: "Propranolol · Metoprolol (Lopressor, Toprol XL) · Atenolol · Carvedilol · Labetalol · Bisoprolol · Esmolol · Nadolol · Timolol",
        summary: "Competitive β-adrenergic antagonists reducing HR, contractility, and renin release. Cornerstone therapy for hypertension, heart failure, arrhythmias, and post-MI cardioprotection.",
        moa: "Competitive antagonism at **β1 (cardiac) and/or β2 (pulmonary, vascular) receptors** → ↓ cAMP → ↓ HR, ↓ contractility, ↓ AV conduction, ↓ renin release.",
        use: "**HFrEF** (carvedilol, metoprolol succinate, bisoprolol — proven mortality benefit).\n**Post-MI** (↓ remodeling, ↓ sudden death).\n**Hypertension, stable angina** (↓ O2 demand).\n**AF/flutter rate control; PSVT** (esmolol IV).\n**Propranolol:** migraine prophylaxis, essential tremor, portal HTN, hyperthyroidism symptoms.\n**Timolol:** glaucoma (eye drops).",
        se: "**Bradycardia, AV block, bronchospasm** (β2 blockade — avoid in asthma/COPD).\nFatigue, erectile dysfunction, cold extremities, ↑ TG/↓ HDL.\n**Masks hypoglycemia** (blocks tachycardia/tremor warning — sweating preserved).\nRebound angina/HTN if stopped abruptly (receptor upregulation).",
        ci: "Decompensated HF (acutely); cardiogenic shock; high-degree AV block or sick sinus syndrome; severe asthma/COPD (non-selective agents).\n**Cocaine toxicity:** β-blockade leaves α1 vasoconstriction unopposed → hypertensive crisis.",
        pk: "**Propranolol:** non-selective β1+β2; lipophilic → crosses BBB; heavy hepatic first-pass; t½ ~4 hr.\n**Metoprolol:** β1-selective; hepatic (CYP2D6).\n**Atenolol:** β1-selective; hydrophilic → renal excretion, less CNS penetration.\n**Esmolol:** IV only; t½ ~9 min (ester hydrolysis) — perioperative rate control.\n**Carvedilol/Labetalol:** β1+β2+α1 blockade.",
        pearl: "**Only carvedilol, metoprolol succinate, and bisoprolol** have proven mortality benefit in HFrEF — not all β-blockers are interchangeable.\n**Never stop abruptly** — taper over ≥1–2 weeks to avoid rebound tachycardia/ischemia from receptor upregulation."
      },
      {
        name: "Alpha Blockers (α-blockers)",
        aka: "Prazosin · Terazosin · Doxazosin · Tamsulosin (Flomax) · Phentolamine · Phenoxybenzamine",
        summary: "α-adrenergic antagonists causing arterial dilation and urogenital smooth muscle relaxation. Used for BPH, hypertension, and pheochromocytoma.",
        moa: "**Prazosin/Terazosin/Doxazosin/Tamsulosin:** selective **α1 blockade** → ↓ vascular and prostate smooth muscle tone.\n**Phentolamine/Phenoxybenzamine:** non-selective **α1 + α2 blockade** → vasodilation; α2 block also ↑ NE release (reflex tachycardia).",
        use: "**Tamsulosin:** BPH (α1A-selective → prostate smooth muscle relaxation).\n**Prazosin:** PTSD nightmares, hypertension.\n**Terazosin/Doxazosin:** BPH and hypertension (longer t½ — once daily).\n**Phentolamine:** acute hypertensive crisis from pheochromocytoma or tyramine reaction (IV).\n**Phenoxybenzamine:** pre-op pheochromocytoma management (irreversible, long-acting).",
        se: "**First-dose orthostatic hypotension** (take first dose at bedtime).\nReflex tachycardia, dizziness, nasal congestion.\n**Tamsulosin:** intraoperative floppy iris syndrome (warn ophthalmologist before cataract surgery).",
        ci: "Concurrent PDE5 inhibitors (additive hypotension — severe ↓BP); aortic stenosis (preload reduction may worsen hemodynamics).",
        pk: "**Prazosin:** t½ ~3 hr, hepatic.\n**Terazosin/Doxazosin:** t½ 8–22 hr — once daily.\n**Tamsulosin:** t½ ~15 hr; α1A-selective; hepatic (CYP3A4/2D6).\n**Phenoxybenzamine:** irreversible alkylation of α receptors; duration ~24 hr.\n**Phentolamine:** reversible competitive; IV only; t½ ~19 min.",
        pearl: "For **pheochromocytoma surgery:** establish α blockade (phenoxybenzamine) FIRST, then add β-blocker — never β-block first (unopposed α1 → catastrophic hypertensive crisis).\n**Phenoxybenzamine is irreversible** (non-competitive); phentolamine is reversible (competitive)."
      },
      {
        name: "Local Anesthetics",
        aka: "Lidocaine · Bupivacaine · Ropivacaine · Mepivacaine · Prilocaine · Benzocaine · Cocaine · Tetracaine",
        summary: "Reversibly block voltage-gated Na⁺ channels to prevent action potential propagation. Used for local/regional/neuraxial anesthesia and ventricular arrhythmias (lidocaine).",
        moa: "Block **voltage-gated Na⁺ channels** (inactivated state, use-dependent) → prevent membrane depolarization.\nFibers blocked in order: small unmyelinated C-fibers first (pain/autonomic) → temperature → touch → pressure → motor last.",
        use: "Local infiltration; nerve blocks; epidural/spinal anesthesia.\n**Lidocaine IV:** ventricular arrhythmias — class IB antiarrhythmic.\n**Cocaine:** ENT procedures (only local anesthetic with vasoconstriction via NE reuptake inhibition).",
        se: "**CNS toxicity first** (circumoral numbness → tinnitus → seizures → coma).\n**Cardiovascular toxicity at higher levels** — bupivacaine most cardiotoxic (wide QRS, fatal arrhythmias).\n**Prilocaine/Benzocaine:** methemoglobinemia.\nAllergic reactions: esters > amides.",
        ci: "Bupivacaine IV for arrhythmias (cardiotoxic); epinephrine-containing formulations on end-arteries (digits, nose, penis, ear — ischemic necrosis).",
        pk: "**Esters** (cocaine, benzocaine, tetracaine, procaine) — hydrolyzed by plasma pseudocholinesterase; higher allergy risk.\n**Amides** (lidocaine, bupivacaine, ropivacaine — two 'i's before '-caine') — hepatic CYP450; lower allergy risk.\nEpinephrine co-injection ↑ duration ~50% via local vasoconstriction.",
        pearl: "**Acidic/infected tissue** has more ionized drug (charged form can't cross membrane) → local anesthetics work poorly in abscesses — increase dose or use general anesthesia.\n**Bupivacaine cardiotoxicity:** treat with **20% lipid emulsion (Intralipid)** to sequester the drug."
      },
      {
        name: "Neuromuscular Blocking Agents",
        aka: "Succinylcholine (Anectine) · Rocuronium (Zemuron) · Vecuronium · Pancuronium · Atracurium · Cisatracurium",
        summary: "Block NMJ transmission for intubation and surgical relaxation — depolarizing (succinylcholine) vs. non-depolarizing (all others) with different reversal strategies.",
        moa: "**Succinylcholine (depolarizing):** persistent agonist at **nicotinic ACh receptors (NMJ)** → sustained depolarization → fasciculations then flaccid paralysis. Resistant to AChE.\n**Non-depolarizing (rocuronium, vecuronium, etc.):** competitive antagonists at nicotinic ACh receptors — no fasciculations; reversed by sugammadex or neostigmine.",
        use: "**Succinylcholine:** RSI (fastest onset ~60 sec; rapid offset).\n**Rocuronium:** RSI when succinylcholine contraindicated (reversed by sugammadex).\n**Vecuronium/Pancuronium:** intermediate/long surgical paralysis.\n**Atracurium/Cisatracurium:** organ-independent elimination (preferred in renal/hepatic failure).",
        se: "**Succinylcholine:** hyperkalemia (dangerous in burns/crush/denervation — avoid >24 hr post-injury); malignant hyperthermia (with volatile anesthetics); ↑ intraocular/intragastric pressure; prolonged block in pseudocholinesterase deficiency.\n**Non-depolarizing:** histamine release (atracurium); tachycardia (pancuronium).",
        ci: "**Succinylcholine:** burns/crush injury/prolonged immobilization/denervation >24 hr; personal/family history of malignant hyperthermia; hyperkalemia; pseudocholinesterase deficiency.",
        pk: "**Succinylcholine:** hydrolyzed by plasma pseudocholinesterase; t½ ~10 min; onset ~60 sec.\n**Rocuronium:** hepatic elimination; reversed by sugammadex (encapsulates drug).\n**Atracurium/Cisatracurium:** Hofmann elimination (spontaneous — organ-independent).\n**Vecuronium:** hepatic/renal.",
        pearl: "**Succinylcholine hyperkalemia:** K⁺ efflux from depolarized muscle — safe on Day 0 of a burn, dangerous after Day 1 (extrajunctional receptor upregulation).\n**Malignant hyperthermia** (ryanodine receptor mutation → uncontrolled SR Ca²⁺ release): treat with **dantrolene** + aggressive cooling."
      }
    ]
  }
],

cv: [
  {
    group: "RAAS / Antihypertensives",
    drugs: [
      {
        name: "ACE Inhibitors",
        aka: "Lisinopril · Enalapril · Captopril · Ramipril · Benazepril · Fosinopril · Quinapril · Perindopril",
        summary: "Block angiotensin-converting enzyme to reduce Ang II and aldosterone.\nCornerstone for hypertension, heart failure, and renal protection.",
        moa: "Inhibit **angiotensin-converting enzyme (ACE)** → ↓ Ang I to II conversion.\n↓ vasoconstriction + ↓ aldosterone → ↓ preload/afterload.\n↑ **bradykinin** (ACE normally degrades bradykinin).",
        use: "**Hypertension**: First-line, especially in diabetics.\n**HFrEF**: ↓ mortality and ↓ remodeling.\n**Diabetic Nephropathy**: ↓ proteinuria and slow CKD progression.\n**Post-MI**: Reduces mortality and ventricular remodeling.",
        se: "**Dry cough**: Due to ↑ bradykinin (most common reason for switch to ARB).\n**Angioedema**: Rare but life-threatening (bradykinin-mediated).\n**Hyperkalemia**: Due to ↓ aldosterone.\n**Creatinine bump**: Significant if bilateral renal artery stenosis is present.",
        ci: "**Pregnancy**: Teratogenic (fetal renal toxicity).\n**Bilateral Renal Artery Stenosis**: GFR depends on Ang II-mediated efferent constriction.\n**History of Angioedema**.",
        pk: "Most are **prodrugs** (e.g., Enalapril → Enalaprilat) activated hepatically.\n**Captopril/Lisinopril**: Active drugs (not prodrugs).\nPrimarily renally eliminated: requires dose reduction in CKD.",
        pearl: "**Cough vs. Angioedema**: Cough is annoying but benign; Angioedema is a medical emergency.\nIf angioedema occurs, do NOT switch to an ARB; switch to a CCB or Thiazide."
      },
      {
        name: "ARBs (Angiotensin Receptor Blockers)",
        aka: "Losartan · Valsartan · Irbesartan · Candesartan · Olmesartan · Telmisartan · Azilsartan",
        summary: "Block the AT1 receptor to inhibit Ang II effects without affecting bradykinin.\nPreferred alternative to ACEi when cough occurs.",
        moa: "Selective antagonism at **AT1 (Angiotensin II type 1)** receptors.\nBlocks vasoconstriction and aldosterone secretion.\nNo effect on bradykinin (avoids dry cough).",
        use: "**Hypertension/Heart Failure**: Equivalent to ACEi in mortality benefit.\n**Diabetic Nephropathy**: Standard of care for Type 2 DM.\n**Gout**: **Losartan** uniquely inhibits **URAT1** → uricosuric effect.",
        se: "**Hyperkalemia** and ↑ Creatinine.\n**Fetal toxicity** (same as ACEi).\nNo cough (bradykinin levels remain normal).",
        ci: "**Pregnancy** (Teratogenic).\n**Bilateral Renal Artery Stenosis**.",
        pk: "**Losartan**: Hepatic metabolism to active metabolite E-3174.\nMost have once-daily oral dosing.\nPredominantly biliary/hepatic elimination: safer in CKD than ACEi.",
        pearl: "Do NOT combine ACEi + ARB; dual RAAS blockade increases AKI and hyperkalemia risk without improving CV outcomes."
      },
      {
        name: "Aliskiren",
        aka: "Aliskiren (Tekturna)",
        summary: "Direct Renin Inhibitor blocking the rate-limiting step of the RAAS cascade.",
        moa: "Directly inhibits **Renin**.\nPrevents conversion of Angiotensinogen → Angiotensin I.\nUniquely lowers **Plasma Renin Activity (PRA)**.",
        use: "**Hypertension**: Monotherapy or add-on (limited role).",
        se: "Hyperkalemia, ↑ creatinine, and diarrhea.\nRare angioedema.",
        ci: "**Pregnancy**.\n**Combination with ACEi/ARB** in patients with DM or CKD (↑ risk of renal failure).",
        pk: "Oral, poor bioavailability (~3%); t½ ~40 hr.\nP-glycoprotein substrate.",
        pearl: "Unlike ACEi/ARBs, which cause a compensatory rise in Renin, Aliskiren decreases the activity of the entire system from the top down."
      },
      {
        name: "Hydralazine & Direct Vasodilators",
        aka: "Hydralazine · Minoxidil · Diazoxide",
        summary: "Arteriolar vasodilators that reduce afterload.\nUsed in resistant hypertension and heart failure.",
        moa: "**Hydralazine**: ↑ **cGMP** → smooth muscle relaxation (arterioles > veins).\n**Minoxidil**: Opens **K+ ATP channels** → hyperpolarization → arteriolar vasodilation.",
        use: "**Hydralazine**: Severe HTN in pregnancy (safe); Hypertensive emergency.\n**HF with Nitrates**: Reduced mortality in African Americans (BiDil).",
        se: "**Reflex Tachycardia**: ↓ BP triggers SNS surge (often co-prescribed with β-blocker).\n**Fluid Retention**: RAAS activation (often co-prescribed with diuretics).\n**Drug-Induced Lupus**: Associated with Hydralazine (anti-histone antibodies).",
        ci: "**CAD/Angina**: Reflex tachycardia worsens myocardial O2 demand.\n**Aortic Dissection**: Shear stress from reflex tachycardia is dangerous.",
        pk: "**Hydralazine**: Acetylated in liver; **Slow acetylators** have higher risk of Lupus.\n**Minoxidil**: Prodrug; sulfated to active form.",
        pearl: "**Drug-induced Lupus Triad**: Hydralazine/Procainamide/Isoniazid.\nLook for **Anti-histone antibodies** and spare the kidneys/CNS."
      }
    ]
  },
  {
    group: "Diuretics",
    drugs: [
      {
        name: "Loop Diuretics",
        aka: "Furosemide · Bumetanide · Torsemide · Ethacrynic Acid",
        summary: "Potent diuretics acting on the thick ascending limb.\nFirst-line for acute pulmonary edema and heart failure volume overload.",
        moa: "Inhibit **Na+/K+/2Cl- cotransporter (NKCC2)** in the Thick Ascending Limb.\nAbolishes the medullary osmotic gradient → prevents urine concentration.",
        use: "**Volume Overload**: Heart Failure, Cirrhosis, Nephrotic Syndrome.\n**Acute Pulmonary Edema**: Fast-acting venodilation (IV).\n**Hypercalcemia**: Loop diuretics promote Ca2+ excretion.",
        se: "**Hypokalemia** and metabolic **alkalosis**.\n**Ototoxicity**: Especially with rapid IV bolus or aminoglycoside use.\n**Hyperuricemia**: Can precipitate gout.",
        ci: "**Anuria**.\n**Sulfa Allergy**: All except Ethacrynic Acid are sulfonamides.",
        pk: "**Furosemide**: Variable bioavailability (10–100%); t½ ~1–2 hr.\nRequires secretion into the tubule via organic acid transporters.",
        pearl: "**Loops Lose Calcium; Thiazides Retain it.** This is a classic Step 1 distinction for managing stones vs. hypercalcemia."
      },
      {
        name: "Thiazide Diuretics",
        aka: "Hydrochlorothiazide (HCTZ) · Chlorthalidone · Metolazone · Indapamide",
        summary: "Moderate-potency diuretics acting on the distal tubule.\nFirst-line for essential hypertension.",
        moa: "Inhibit **Na+/Cl- cotransporter (NCC)** in the Distal Convoluted Tubule.\nEnhances **Ca2+ reabsorption** in the DCT.",
        use: "**Hypertension**: First-line monotherapy.\n**Calcium Nephrolithiasis**: ↓ urinary Ca2+ prevents stone formation.\n**Osteoporosis**: Reduces urinary calcium loss.\n**Nephrogenic DI**: Paradoxically reduces urine volume.",
        se: "**Hyponatremia** and **Hypokalemia**.\n**HyperGLUC**: Hyper: **G**lycemia, **L**ipidemia, **U**ricemia, **C**alcemia.\nSulfa-related rash.",
        ci: "**Sulfa Allergy**.\n**Gout**: Due to hyperuricemia.\n**Renal Failure**: Generally ineffective if GFR <30 (except Metolazone).",
        pk: "**Chlorthalidone**: Longer half-life and better BP control than HCTZ.\n**Metolazone**: Remains effective in low GFR states.",
        pearl: "**Chlorthalidone** is increasingly preferred over HCTZ in guidelines due to its 24-hour coverage and superior evidence."
      },
      {
        name: "K+ Sparing Diuretics",
        aka: "Spironolactone · Eplerenone · Amiloride · Triamterene",
        summary: "Act on the collecting duct to retain potassium while excreting sodium.",
        moa: "**Spironolactone/Eplerenone**: Competitive **Aldosterone Receptor Antagonists**.\n**Amiloride/Triamterene**: Block **ENaC** (Epithelial Sodium Channels).",
        use: "**Heart Failure**: ↓ Mortality (Spironolactone/Eplerenone).\n**Hyperaldosteronism**: Conn Syndrome.\n**Ascites**: Drug of choice in cirrhosis.\n**PCOS**: Spironolactone used for anti-androgen effects.\n**Liddle Syndrome**: Amiloride is the drug of choice.",
        se: "**Hyperkalemia**: Can be fatal; monitor K+ closely.\n**Gynecomastia**: Seen with Spironolactone (non-selective).\n**Eplerenone**: Selective; lacks endocrine side effects.",
        ci: "**Hyperkalemia** (K+ >5.5).\n**Severe Renal Failure** (Anuria).",
        pk: "**Spironolactone**: Prodrug; active metabolite is Canrenone.\nSlow onset (takes days to see full effect).",
        pearl: "In Heart Failure, the benefit of Spironolactone is **anti-fibrotic**, not just diuretic."
      },
      {
        name: "Carbonic Anhydrase Inhibitors",
        aka: "Acetazolamide · Dorzolamide · Brinzolamide · Methazolamide",
        summary: "Inhibit carbonic anhydrase to waste bicarbonate and lower IOP.\nUsed for glaucoma and altitude sickness.",
        moa: "Inhibit **carbonic anhydrase (CA)** → ↓ H+/HCO3- production.\n↓ Na+-H+ exchange in PCT → ↑ HCO3-, Na+, and K+ excretion.\nIn ciliary body: ↓ aqueous humor production → ↓ IOP.",
        use: "**Open-angle glaucoma**: Topical dorzolamide.\n**Acute angle-closure**: IV acetazolamide to drop IOP rapidly.\n**Altitude sickness**: Metabolic acidosis → ↑ respiratory drive.\n**Idiopathic intracranial hypertension**.",
        se: "**Metabolic acidosis**: Normal anion gap (bicarbonate wasting).\n**Hypokalemia** and paresthesias.\n**Kidney stones**: Alkaline urine → Calcium-phosphate stones.",
        ci: "**Cirrhosis**: ↑ NH3 levels (less NH4+ trapping in urine).\n**Sulfa allergy**.",
        pk: "Oral or IV; t½ ~2–4 hr; renally excreted.",
        pearl: "Acetazolamide helps altitude sickness by forcing a metabolic acidosis, which stimulates central chemoreceptors to increase ventilation."
      },
      {
        name: "Mannitol",
        aka: "Mannitol (Osmitrol)",
        summary: "Osmotic diuretic that draws water into the vasculature.\nEmergency treatment for cerebral edema.",
        moa: "**Osmotic agent** in PCT and Loop of Henle → ↓ water reabsorption → ↑ urine output.\nIn brain: ↑ plasma osmolality → draws fluid from tissue into vasculature.",
        use: "**Elevated ICP**: Traumatic brain injury or herniation syndromes.\n**Acute Glaucoma**: Pre-operative IOP reduction.",
        se: "**Initial volume expansion**: Can precipitate pulmonary edema or HF.\n**Dehydration** and hypernatremia.\n**Rebound ICP**: If the blood-brain barrier is disrupted.",
        ci: "**Anuria** or severe heart failure.\n**Active intracranial bleed**.",
        pk: "IV only; not metabolized; renally excreted.",
        pearl: "Mannitol stays in the extracellular space. In patients with HF, the initial volume expansion can cause flash pulmonary edema."
      }
    ]
  },
  {
    group: "Antihypertensive Adjuncts",
    drugs: [
      {
        name: "Calcium Channel Blockers (CCBs)",
        aka: "Amlodipine · Nifedipine (DHP) | Verapamil · Diltiazem (Non-DHP)",
        summary: "Block L-type calcium channels in vascular or cardiac tissue.\nUsed for HTN, angina, and SVT rate control.",
        moa: "Block **voltage-gated L-type Ca2+ channels** → ↓ intracellular Ca2+.\n**Dihydropyridines (DHP)**: Vascular selective → arteriolar vasodilation.\n**Non-DHP**: Cardiac selective → ↓ HR (SA node), ↓ conduction (AV node), and ↓ contractility.",
        use: "**Hypertension** and **Stable Angina**.\n**Rate Control**: Verapamil/Diltiazem for AF/Flutter.\n**Raynaud Phenomenon**: DHP CCBs.\n**Prinzmetal Angina**: Effective for coronary vasospasm.",
        se: "**DHPs**: Peripheral edema, flushing, and reflex tachycardia.\n**Non-DHPs**: Bradycardia, AV block, and **constipation** (Verapamil).\n**Gingival hyperplasia**.",
        ci: "**HFrEF**: Non-DHPs can worsen systolic heart failure.\n**AV Block**: High-degree blocks.\n**WPW + AF**: Verapamil can increase accessory pathway conduction.",
        pk: "Oral or IV; Verapamil is a P-gp inhibitor (↑ Digoxin).",
        pearl: "Verapamil is the most constipating CCB because it blocks L-type channels in the gut's smooth muscle."
      }
    ]
  },
  {
    group: "Antiarrhythmics",
    drugs: [
      {
        name: "Adenosine",
        aka: "Adenosine (Adenocard)",
        summary: "Ultra-short acting agent to transiently block the AV node.\nDrug of choice for terminating acute PSVT.",
        moa: "Activates **A1 receptors** on the AV node.\n↑ K+ conductance + ↓ Ca2+ current → hyperpolarization.\nResult: Transient **AV nodal block**.",
        use: "**PSVT**: Termination of AVNRT and AVRT.\n**Diagnosis**: Unmasking Atrial Flutter by slowing the ventricular rate.",
        se: "**Flushing**, chest tightness, and dyspnea.\n**Sense of impending doom**.\nShort-lived complete heart block.",
        ci: "**Asthma/COPD**: Can cause bronchospasm.\n**High-degree AV block**.",
        pk: "Extremely short half-life (<10 sec).\nMust be given as a rapid IV push.",
        pearl: "Effect is antagonized by **Theophylline** and **Caffeine**. Warn patients they will feel like they are dying for 10 seconds."
      },
      {
        name: "Class IA Antiarrhythmics",
        aka: "Quinidine · Procainamide · Disopyramide",
        summary: "Intermediate Na+ channel blockers that also block K+ channels.\nUsed for atrial and ventricular arrhythmias.",
        moa: "Block **voltage-gated Na+ channels** (intermediate) + block **K+ channels (IKr)**.\nResult: ↑ APD, ↑ ERP, and ↑ QTc.",
        use: "AF/AFL conversion to sinus rhythm.\n**WPW**: Useful for accessory pathway conduction.",
        se: "**Torsades de pointes** (due to ↑ QTc).\n**Quinidine**: Cinchonism (tinnitus, headache), ↑ Digoxin levels.\n**Procainamide**: Drug-induced lupus (anti-histone Ab).",
        ci: "**Heart Failure** (Disopyramide negative inotropy).\n**Long QT syndrome**.",
        pk: "Quinidine inhibits P-gp and displacement of digoxin → ↑ Digoxin levels.",
        pearl: "Always halve the digoxin dose when starting quinidine."
      },
      {
        name: "Class IB Antiarrhythmics",
        aka: "Lidocaine · Mexiletine · Phenytoin",
        summary: "Fast Na+ channel blockers selective for ischemic/depolarized tissue.\nUsed primarily for ventricular arrhythmias.",
        moa: "Block **voltage-gated Na+ channels** (fast kinetics).\nPreferential for **inactivated state** (depolarized/ischemic tissue).\n↓ APD (shortens QT interval).",
        use: "**Ventricular Arrhythmias**: Especially post-MI.\n**Lidocaine**: Acute VT/VF in ACLS.\n**Phenytoin**: Digitalis-induced arrhythmias.",
        se: "**CNS Toxicity**: Paresthesias, tremor, and seizures.\n**Mexiletine**: GI upset.",
        ci: "**High-degree AV block**.",
        pk: "Lidocaine is IV only (extensive first-pass).",
        pearl: "Class IB are 'Ischemic Best' because they bind to Na+ channels held in the inactivated state longer."
      },
      {
        name: "Class IC Antiarrhythmics",
        aka: "Flecainide · Propafenone",
        summary: "Potent Na+ channel blockers with slow kinetics.\nContraindicated in structural heart disease.",
        moa: "Block **voltage-gated Na+ channels** (slow kinetics) → profound ↓ Phase 0.\nSignificant **QRS widening**.",
        use: "SVT and Atrial Fibrillation in patients with **normal hearts**.",
        se: "**Proarrhythmic**: Especially post-MI (CAST trial).\n**Propafenone**: Metallic taste and β-blocker effects.",
        ci: "**Structural Heart Disease**: Prior MI, HF, or LVH (absolute contraindication).",
        pk: "Oral; requires QRS monitoring.",
        pearl: "The CAST trial proved that suppressing PVCs post-MI with Class IC drugs tripled mortality."
      },
      {
        name: "Class III (K+ Channel Blockers)",
        aka: "Amiodarone · Sotalol · Dofetilide · Ibutilide · Dronedarone",
        summary: "Prolong the action potential and refractory period.\nAmiodarone is a 'pan-channel' blocker with extensive side effects.",
        moa: "Primary: Block **K+ channels (IKr)** → prolongs Phase 3 repolarization.\n↑ ERP, ↑ APD, ↑ QT interval.\n**Amiodarone**: Also blocks Na+, Ca2+, and β-receptors.",
        use: "**Amiodarone**: Atrial and Ventricular tachycardias; ACLS (VF/VT).\n**Sotalol**: Maintenance of sinus rhythm in AF.",
        se: "**Amiodarone**: Pulmonary fibrosis, Thyroid (hypo/hyper), Hepatotoxicity, Blue-gray skin, Corneal deposits.\n**Sotalol/Dofetilide**: **Torsades de pointes** (due to QT prolongation).",
        ci: "**Amiodarone**: Iodine allergy, Pregnancy, Lung disease.\n**Sotalol**: Asthma (has β-blocking properties).",
        pk: "**Amiodarone**: T½ is **40–55 days**; extremely lipophilic.\nRequires monitoring: PFTs, TFTs, LFTs, CXR.",
        pearl: "Amiodarone has a very low risk of Torsades despite significant QT prolongation."
      },
      {
        name: "Digoxin",
        aka: "Digoxin · Digitalis",
        summary: "Positive inotrope and negative chronotrope.\nUsed for heart failure and AF rate control.",
        moa: "Inhibit **Na+/K+-ATPase** → ↑ intracellular Na+.\nSecondary: Inhibits **Na+/Ca2+ exchanger** → ↑ intracellular Ca2+ → **↑ Contractility**.\nVagal stimulation → ↓ AV node conduction.",
        use: "**Heart Failure**: Reduces hospitalizations (no mortality benefit).\n**Atrial Fibrillation**: Rate control (second-line).",
        se: "**Cholinergic**: Nausea, vomiting, anorexia.\n**Visual**: Xanthopsia (yellow-green vision/halos).\n**ECG**: 'Scooped' ST segments, bradycardia, PVCs.",
        ci: "**Hypokalemia**: Sensitizes the heart to Digoxin toxicity.\n**Renal Failure**: Requires major dose reduction.",
        pk: "Renally cleared; narrow therapeutic index (0.5–2.0 ng/mL).\nInteractions: Amiodarone/Verapamil/Quinidine ↑ Digoxin levels.",
        pearl: "**Treatment of toxicity**: Digibind (Fab fragments), Normalize K+, and Atropine for bradycardia."
      },
      {
        name: "Magnesium Sulfate",
        aka: "Magnesium Sulfate (IV)",
        summary: "Membrane stabilizer and Ca2+ antagonist.\nDrug of choice for Torsades de Pointes.",
        moa: "Blocks **voltage-gated Ca2+ channels**.\nStabilizes cardiac membrane → ↓ Early Afterdepolarizations (EADs).\nBlocks **NMDA receptors** (anticonvulsant effect).",
        use: "**Torsades de Pointes** (even if Mg levels are normal).\n**Eclampsia**: Seizure prophylaxis and treatment.",
        se: "**Loss of DTRs**: First sign of toxicity.\n**Respiratory depression** and hypotension.",
        ci: "**Renal failure** (Mg accumulates).\n**Myasthenia Gravis**.",
        pk: "IV or IM; renally eliminated.",
        pearl: "If magnesium toxicity occurs, the immediate antidote is **Calcium Gluconate**."
      },
      {
        name: "Ranolazine & Ivabradine",
        aka: "Ranolazine · Ivabradine",
        summary: "Novel agents for angina and heart failure.\nTarget specific currents without dropping blood pressure.",
        moa: "**Ranolazine**: Blocks **late Na+ current (INaL)** → ↓ Na+ overload → ↓ Ca2+ influx via NCX.\n**Ivabradine**: Blocks **If 'funny' current** in the SA node.",
        use: "**Ranolazine**: Chronic stable angina.\n**Ivabradine**: HFrEF with HR >70 bpm despite max β-blocker.",
        se: "**Ranolazine**: QT prolongation (modest).\n**Ivabradine**: **Luminous phenomena** (phosphenes), bradycardia.",
        ci: "**Ranolazine**: Hepatic cirrhosis.\n**Ivabradine**: Atrial Fibrillation (only works on SA node).",
        pk: "Oral; CYP3A4 metabolism.",
        pearl: "Ivabradine is unique because it reduces heart rate without affecting contractility or blood pressure."
      },
      {
        name: "Milrinone & Nesiritide",
        aka: "Milrinone · Nesiritide",
        summary: "Inodilators used for acute decompensated heart failure.",
        moa: "**Milrinone**: Inhibits **PDE3** → ↑ cAMP.\nHeart: ↑ PKA → ↑ Ca2+ → **↑ Inotropy**.\nVessels: ↑ cAMP → **Vasodilation**.\n**Nesiritide**: Recombinant **BNP** → ↑ cGMP → Vasodilation + natriuresis.",
        use: "**Acute Decompensated HF**: Short-term support.\n**Milrinone**: Cardiogenic shock bridge.",
        se: "**Hypotension** and arrhythmias.\n↑ Mortality with chronic use.",
        ci: "**HOCM**: Worsens outflow tract obstruction.",
        pk: "IV infusion only; Milrinone is renally cleared.",
        pearl: "Milrinone bypasses the β-receptor, making it effective even if the patient is on a high-dose β-blocker."
      }
    ]
  },
  {
    group: "Lipid-Lowering",
    drugs: [
      {
        name: "Statins (HMG-CoA Reductase Inhibitors)",
        aka: "Atorvastatin · Rosuvastatin · Simvastatin · Pravastatin",
        summary: "Inhibit cholesterol synthesis and upregulate LDL receptors.\nFirst-line for ASCVD risk reduction.",
        moa: "Inhibit **HMG-CoA Reductase**.\n↓ Mevalonate synthesis → ↓ hepatic cholesterol.\nResult: ↑ **LDL receptor** expression → ↑ LDL clearance from blood.",
        use: "**Secondary Prevention**: Post-MI/Stroke regardless of LDL.\n**Primary Prevention**: High ASCVD risk or LDL >190.",
        se: "**Myopathy**: Myalgias to Rhabdomyolysis (risk ↑ with fibrates).\n**Hepatotoxicity**: Check baseline LFTs.",
        ci: "**Pregnancy** (Teratogenic).\n**Active liver disease**.",
        pk: "Most are CYP3A4 substrates.\n**Pravastatin/Rosuvastatin**: Not CYP3A4 substrates.",
        pearl: "Statins have 'pleiotropic' effects: they stabilize plaques and reduce inflammation."
      },
      {
        name: "Fibrates & Niacin",
        aka: "Gemfibrozil · Fenofibrate | Niacin (Vitamin B3)",
        summary: "Primary agents for high triglycerides or low HDL.",
        moa: "**Fibrates**: Activate **PPARα** → ↑ LPL expression → ↑ TG clearance.\n**Niacin**: Inhibits **DGAT2** (liver) + inhibits lipolysis in adipose → ↓ VLDL synthesis → ↑ HDL.",
        use: "**Fibrates**: Severe hypertriglyceridemia (TG >500).\n**Niacin**: Low HDL (best drug to raise HDL).",
        se: "**Fibrates**: Myopathy (worsened with statins), Cholesterol gallstones.\n**Niacin**: **Flushing** (prostaglandin-mediated), hyperglycemia, hyperuricemia.",
        ci: "**Gallbladder disease** (Fibrates).\n**Active Gout** (Niacin).",
        pk: "Oral; Niacin can cause hepatotoxicity at high doses.",
        pearl: "Prevent niacin flushing by pretreating with **Aspirin**."
      }
    ]
  },
  {
    group: "Antianginals",
    drugs: [
      {
        name: "Nitrates",
        aka: "Nitroglycerin · Isosorbide Dinitrate · Isosorbide Mononitrate · Sodium Nitroprusside",
        summary: "NO donors that relax smooth muscle to reduce preload.\nUsed for acute angina and ACS.",
        moa: "Release **NO** → ↑ **cGMP**.\n**Veins > Arteries**: Predominantly ↓ preload via venodilation.\nHigh doses: Coronary and systemic arterial dilation.",
        use: "**Angina**: Acute relief (SL) and prophylaxis.\n**ACS**: Reduces pain and pulmonary congestion.\n**Hypertensive Emergency**: IV Nitroprusside.",
        se: "**Headache**, flushing, and hypotension.\n**Reflex Tachycardia**.\n**Nitrate Tolerance**: Requires a daily nitrate-free interval.",
        ci: "**PDE5 Inhibitors**: Sildenafil + Nitrates = Catastrophic hypotension.\n**RV Infarction**: Preload dependent.",
        pk: "Nitroprusside is IV only; Mononitrate has no first-pass effect.",
        pearl: "Monday disease: Workers in TNT factories develop tolerance during the week and get headaches every Monday."
      }
    ]
  }
],

blood: [
  {
    group: "Anticoagulants",
    drugs: [
      {
        name: "Heparin (UFH & LMWH)",
        aka: "Unfractionated Heparin (UFH) · Enoxaparin · Dalteparin · Fondaparinux",
        summary: "Parenteral anticoagulants that potentiate antithrombin III to inhibit clotting factors.",
        moa: "Bind and activate **antithrombin III (AT-III)**.\n↑ inhibition of **thrombin (IIa)** and **Factor Xa**.\n**UFH**: Inhibits IIa and Xa equally.\n**LMWH**: Predominantly inhibits Xa.",
        use: "**UFH**: Acute PE/DVT, ACS, and bridging therapy.\n**LMWH**: DVT/PE treatment and prophylaxis.\n**Pregnancy**: LMWH is the preferred anticoagulant.",
        se: "**Bleeding**.\n**HIT Type II**: Immune-mediated (IgG vs. PF4-heparin) → paradoxical thrombosis.\n**Osteoporosis**: Seen with long-term UFH use.\n**Hyperkalemia**: Due to heparin-induced hypoaldosteronism.",
        ci: "**Active bleeding**.\n**HIT History**: Absolute contraindication to any heparin.\n**Severe Renal Failure**: Avoid LMWH.",
        pk: "**UFH**: Monitor with **aPTT**.\n**LMWH**: Monitor with **anti-Xa levels** in obesity/renal failure.\n**Reversal**: Protamine sulfate.",
        pearl: "**HIT Management**: Stop all heparin; start **Argatroban** or **Bivalirudin**. Do NOT give platelets."
      },
      {
        name: "Warfarin",
        aka: "Warfarin (Coumadin)",
        summary: "Vitamin K epoxide reductase inhibitor that depletes factors II, VII, IX, and X.",
        moa: "Inhibit **Vitamin K epoxide reductase (VKOR)**.\n↓ regeneration of active Vitamin K → ↓ γ-carboxylation of factors **II, VII, IX, X** and **proteins C/S**.",
        use: "**Chronic AF**: Stroke prevention.\n**Mechanical Heart Valves**: Only oral anticoagulant indicated.",
        se: "**Bleeding**.\n**Skin Necrosis**: Early protein C depletion causes transient hypercoagulability.\n**Teratogenicity**: Category X.",
        ci: "**Pregnancy**.\n**Active bleeding**.",
        pk: "Oral; highly protein-bound.\nMetabolized by **CYP2C9**; monitor with **INR**.",
        pearl: "**The Bridging Paradox**: Always bridge with Heparin for ≥5 days to prevent warfarin-induced skin necrosis."
      },
      {
        name: "Direct Oral Anticoagulants (DOACs)",
        aka: "Apixaban · Rivaroxaban · Edoxaban · Dabigatran",
        summary: "Target-specific inhibitors of Factor Xa or Thrombin.",
        moa: "**Factor Xa Inhibitors** (Apixaban, Rivaroxaban): Directly inhibit Factor Xa.\n**Dabigatran**: Direct competitive inhibitor of **Thrombin (IIa)**.",
        use: "**Nonvalvular AF**: Stroke prevention.\n**VTE**: Treatment and prophylaxis.",
        se: "**Bleeding**: Lower risk of intracranial hemorrhage than warfarin.\n**Dabigatran**: Dyspepsia.",
        ci: "**Mechanical Heart Valves**: Contraindicated.",
        pk: "**Apixaban**: Safest DOAC in CKD.\n**Reversal**: Idarucizumab (Dabigatran) or Andexanet alfa (Xa inhibitors).",
        pearl: "DOACs do not require routine INR monitoring but are NOT for mechanical valves."
      }
    ]
  },
  {
    group: "Antiplatelets",
    drugs: [
      {
        name: "Aspirin (Antiplatelet)",
        aka: "Aspirin · Acetylsalicylic Acid",
        summary: "Irreversible COX-1 inhibitor used for primary and secondary CV prevention.",
        moa: "Irreversibly **acetylates COX-1** → permanently inhibits TXA2 synthesis in platelets.",
        use: "**ACS**: Chew immediately.\n**Secondary Prevention**: Post-MI, post-stroke, and PAD.\n**Kawasaki Disease**: High-dose anti-inflammatory use.",
        se: "**GI bleeding** (↓ COX-1 protection).\n**Reye Syndrome**: In children with viral infections.\n**Tinnitus**: Sign of salicylate toxicity.",
        ci: "**Children <16 yr**: Risk of Reye Syndrome.\n**Active GI Bleeding**.",
        pk: "Antiplatelet effect lasts **7–10 days** (platelet lifespan).",
        pearl: "**Aspirin Overdose**: Mixed Respiratory Alkalosis and HAGMA."
      },
      {
        name: "P2Y12 & GP IIb/IIIa Blockers",
        aka: "Clopidogrel · Ticagrelor · Prasugrel | Abciximab · Eptifibatide",
        summary: "P2Y12 inhibitors block ADP receptors; GP IIb/IIIa inhibitors block final aggregation.",
        moa: "**P2Y12 inhibitors**: Block **P2Y12 (ADP receptor)** → ↓ platelet activation.\n**GP IIb/IIIa inhibitors**: Block **GP IIb/IIIa** → prevent fibrinogen cross-linking.",
        use: "**ACS/PCI**: DAPT with aspirin.\n**Clopidogrel**: Stroke prevention alternative.",
        se: "**Bleeding**.\n**Ticagrelor**: **Dyspnea**.\n**Prasugrel**: Highest bleeding risk.",
        ci: "**Prasugrel**: Prior stroke/TIA.",
        pk: "**Clopidogrel**: Prodrug requiring **CYP2C19** activation.",
        pearl: "**CYP2C19 Interaction**: Omeprazole inhibits clopidogrel activation; use **Pantoprazole** instead."
      },
      {
        name: "PDE3/PDE5 Inhibitors (Antiplatelet)",
        aka: "Cilostazol · Dipyridamole",
        summary: "Increase intraplatelet cAMP to inhibit aggregation and cause vasodilation.",
        moa: "**Cilostazol**: Inhibits **PDE3** → ↑ cAMP.\n**Dipyridamole**: Inhibits **PDE** + blocks adenosine reuptake → ↑ cAMP/cGMP.",
        use: "**Cilostazol**: Intermittent claudication (PAD).\n**Dipyridamole**: Stroke prevention (+ aspirin); Cardiac stress testing.",
        se: "**Cilostazol**: Palpitations/tachycardia.\n**Dipyridamole**: Headache, flushing.",
        ci: "**Cilostazol**: Heart failure of any severity (↑ mortality risk).",
        pk: "Cilostazol: Oral; CYP3A4 + CYP2C19.",
        pearl: "**Dipyridamole stress test**: Works by coronary steal; reversed by **aminophylline**."
      },
      {
        name: "tPA & Thrombolytics",
        aka: "Alteplase · Tenecteplase · Reteplase · Streptokinase",
        summary: "Activate plasminogen to plasmin to dissolve existing thrombi.",
        moa: "Convert **plasminogen → plasmin** → cleaves fibrin cross-links → thrombus dissolution.",
        use: "**Acute ischemic stroke** (within 3–4.5 hr).\n**Massive PE** with hemodynamic compromise.\n**STEMI** when PCI is unavailable.",
        se: "**Intracranial hemorrhage**.\n**Streptokinase**: Allergic reactions.",
        ci: "**Prior ICH**.\n**Active internal bleeding**.\n**BP >185/110**.",
        pk: "**Alteplase**: t½ ~5 min.\n**Reversal**: Cryoprecipitate or aminocaproic acid.",
        pearl: "**BRAIN mnemonic**: Bleeding, Recent surgery, Anticoagulants, Intracranial pathology, Numbers (BP)."
      }
    ]
  },
  {
    group: "Gout Agents",
    drugs: [
      {
        name: "Allopurinol & Febuxostat",
        aka: "Allopurinol · Febuxostat",
        summary: "Xanthine oxidase inhibitors used for chronic gout prevention.",
        moa: "Inhibit **Xanthine Oxidase (XO)** → ↓ conversion of hypoxanthine to uric acid.",
        use: "**Chronic Gout**: Prophylaxis.\n**Tumor Lysis Syndrome**: Prevents urate nephropathy.",
        se: "**Hypersensitivity**: Allopurinol can cause **DRESS/SJS** (risk with HLA-B*5801).\n**Gout Flare**: Urate mobilization can trigger flare when starting.",
        ci: "**Acute Gout Flare**: Do NOT start during a flare.\n**HLA-B*5801**: Higher SJS risk in Asian populations.",
        pk: "Allopurinol is metabolized to active **Oxypurinol**.",
        pearl: "**Critical Interaction**: Allopurinol inhibits metabolism of **Azathioprine** and **6-MP**."
      },
      {
        name: "Colchicine",
        aka: "Colchicine",
        summary: "Anti-inflammatory agent that inhibits neutrophil migration.",
        moa: "Binds **β-tubulin** → inhibits microtubule polymerization.\nResult: ↓ neutrophil chemotaxis and degranulation.",
        use: "**Acute Gout Flare**: Most effective within 12–24 hr.\n**Pericarditis**: Reduces recurrence rates.",
        se: "**GI Toxicity**: Diarrhea and cramping (most common).\n**Neuromyopathy**.",
        ci: "**Severe Renal/Hepatic failure**.\n**P-gp/CYP3A4 Inhibitors**: Interaction can be fatal.",
        pk: "Narrow therapeutic index.",
        pearl: "**Diarrhea** is the first warning sign of toxicity. It does NOT lower serum uric acid."
      },
      {
        name: "Probenecid",
        aka: "Probenecid · Sulfinpyrazone",
        summary: "Uricosuric agent that inhibits renal urate reabsorption.",
        moa: "Inhibit **URAT1** in the proximal tubule → ↑ urinary uric acid excretion.",
        use: "**Chronic Gout**: Alternative to allopurinol.\n**Antibiotic adjunct**: Prolongs penicillin/cephalosporin levels.",
        se: "**Uric acid nephrolithiasis**.\n**Acute gout flare** when starting.",
        ci: "**Uric acid kidney stones**.\n**CrCl <30 mL/min** (ineffective).\n**Aspirin use**: Blocks uricosuric effect.",
        pk: "Oral; competes with drugs secreted by OAT (MTX, penicillins).",
        pearl: "Always alkalinize urine and ensure high fluid intake to prevent stones."
      }
    ]
  }
],
neuro: [
  {
    group: "Anxiolytics & Sedatives",
    drugs: [
      {
        name: "Benzodiazepines",
        aka: "Diazepam (Valium) · Lorazepam (Ativan) · Alprazolam (Xanax) · Clonazepam (Klonopin) · Midazolam (Versed) · Triazolam · Oxazepam · Temazepam · Chlordiazepoxide",
        summary: "Positive allosteric modulators of GABA-A receptors that enhance inhibitory chloride influx. Used for anxiety, seizures, alcohol withdrawal, procedural sedation, and insomnia.",
        moa: "Bind the **benzodiazepine site** on **GABA-A receptor** (between α and γ subunits) → ↑ **frequency** of Cl⁻ channel opening (without GABA, no effect — must be present) → membrane hyperpolarization → CNS depression",
        use: "Anxiety disorders (short-term)\n**Status epilepticus:** lorazepam IV — first-line\n**Alcohol withdrawal:** chlordiazepoxide oral, diazepam IV for severe/ICU\n**Procedural sedation/anxiolysis:** midazolam — fastest onset, amnesia\nInsomnia (short-term); acute agitation; muscle spasm; MAOI overdose/serotonin syndrome adjunct (muscle relaxation)",
        se: "**Respiratory depression** (dose-dependent, especially with opioids or alcohol — CNS depression synergy); **sedation**, ataxia, anterograde amnesia; **paradoxical excitement** (elderly, children); tolerance and **physical dependence** (benzodiazepine withdrawal: anxiety, tremor, seizures — potentially fatal, unlike opioid withdrawal); falls/fractures (elderly)",
        ci: "Narrow-angle glaucoma (↑ IOP); severe hepatic failure (accumulation — prefer oxazepam, lorazepam, temazepam: 'LOT' — no active metabolites, hepatic glucuronidation only); respiratory depression without airway support; myasthenia gravis (muscle relaxation worsens)",
        pk: "Highly lipophilic → rapid CNS penetration. Most: hepatic CYP3A4 → active metabolites (diazepam → desmethyldiazepam, t½ ~40–200 hr)\n**'LOT' drugs** (Lorazepam, Oxazepam, Temazepam): direct glucuronidation → NO active metabolites → safe in hepatic failure/elderly\n**Midazolam:** shortest acting IV (t½ ~2 hr), water-soluble (preferred IV)\n**Reversal:** flumazenil (competitive antagonist at BZD site — short t½ ~1 hr, risk of re-sedation and precipitating withdrawal seizures)",
        pearl: "**Benzo vs. Barbiturate GABA mechanism:** Benzos increase Cl⁻ channel **frequency**; barbiturates increase **duration** — and can open channels WITHOUT GABA (direct effect). This is why barbiturates are more lethal in overdose. **Flumazenil** reverses benzodiazepine but can precipitate seizures in benzo-dependent patients — use cautiously."
      },
      {
        name: "Non-Benzodiazepine Hypnotics (Z-drugs) & Ramelteon",
        aka: "Zolpidem (Ambien) · Zaleplon · Eszopiclone (Lunesta) — Z-drugs | Ramelteon (Rozerem) — Melatonin receptor agonist | Suvorexant (Belsomra) — Orexin antagonist",
        summary: "Non-benzodiazepine sleep aids with selective GABA-A or melatonin receptor activity, offering fewer respiratory effects than benzodiazepines. Preferred for insomnia in elderly patients.",
        moa: "**Z-drugs:** positive allosteric modulators of **GABA-A receptors** (preferentially α1 subunit — sedation > anxiolysis/muscle relaxation/anticonvulsant). **Ramelteon:** agonist at **MT1/MT2 melatonin receptors** in SCN → ↓ wake drive, regulates circadian rhythm. **Suvorexant:** competitive antagonist at **OX1R/OX2R orexin receptors** → blocks wake-promoting orexin",
        use: "Insomnia (sleep initiation: zolpidem, zaleplon; sleep maintenance: eszopiclone, zolpidem ER, suvorexant); Ramelteon: elderly patients (no abuse potential — not a controlled substance), circadian disorders",
        se: "Z-drugs: **complex sleep behaviors** (sleep-walking, sleep-driving, sleep-eating — FDA black box); amnesia; daytime sedation; short-term dependence; Ramelteon: minimal — dizziness, somnolence, no dependence (no abuse); Suvorexant: somnolence, abnormal dreams",
        ci: "Z-drugs: severe hepatic impairment; avoid in elderly with fall risk (use ramelteon instead); concurrent CNS depressants; sleep apnea (relative); Suvorexant: narcolepsy",
        pk: "Zolpidem: t½ ~2.5 hr (IR), 6 hr (ER); hepatic (CYP3A4). Zaleplon: ultrashort t½ ~1 hr — can be taken during night if 4+ hr of sleep remaining. Ramelteon: t½ ~1–2.6 hr, hepatic (CYP1A2); not a controlled substance; no dependency.",
        pearl: "**Z-drugs work like benzodiazepines but are selective for α1 GABA-A subunits** — this gives sedation with less anxiolysis, muscle relaxation, and anticonvulsant effect. Despite this selectivity, they still carry abuse potential and sleep behavior risks (FDA black box warning). **Ramelteon is the only hypnotic with no abuse potential** — ideal for the elderly patient who needs sleep help."
      },
      {
        name: "Propofol, Etomidate & Ketamine",
        aka: "Propofol (Diprivan) · Etomidate (Amidate) · Ketamine (Ketalar)",
        summary: "IV anesthetic induction agents with distinct mechanisms and hemodynamic profiles. Propofol is most widely used; etomidate maintains hemodynamic stability; ketamine provides dissociative anesthesia with bronchodilation.",
        moa: "**Propofol:** potentiates **GABA-A** + inhibits NMDA receptor → CNS depression; mechanism of action similar to barbiturates but at different site. **Etomidate:** potentiates **GABA-A** (steroid analog binding site). **Ketamine:** blocks **NMDA (N-methyl-D-aspartate) receptor** → dissociative anesthesia; also ↑ SNS activity → maintains BP/HR",
        use: "**Propofol:** anesthesia induction/maintenance, ICU sedation, procedural sedation, refractory status epilepticus\n**Etomidate:** anesthesia induction in hemodynamically unstable patients (cardiogenic shock, trauma — minimal cardiac effects), RSI\n**Ketamine:** emergency RSI especially in bronchospasm or hypotension, pediatric procedures (dissociative sedation), refractory depression (IV sub-anesthetic dose, intranasal esketamine)",
        se: "**Propofol:** **propofol infusion syndrome** (prolonged high-dose ICU infusion → metabolic acidosis, rhabdomyolysis, cardiac failure — rare but fatal); hypotension (vasodilation); pain on injection; hypertriglyceridemia (lipid emulsion); urine/secretion turns green (benign). **Etomidate:** **adrenal suppression** (inhibits 11β-hydroxylase → ↓ cortisol synthesis — avoid in septic shock); myoclonus; nausea. **Ketamine:** **emergence reactions** (hallucinations, dissociation — mitigated by concurrent benzodiazepine); ↑ IOP/ICP (use cautiously in glaucoma/TBI), ↑ secretions (glycopyrrolate pre-treatment)",
        ci: "Propofol: egg/soy allergy (lipid formulation — reassess, true allergy is rare); Etomidate: adrenal insufficiency, septic shock requiring steroids; Ketamine: active psychosis, uncontrolled hypertension, ↑ ICP (relative — clinical controversy)",
        pk: "All: IV bolus induction; rapid redistribution to fat/muscle → short duration (minutes)\n**Propofol:** t½ context-sensitive (short for bolus, long for infusion), hepatic + extrahepatic metabolism, green-colored lipid emulsion vehicle\n**Etomidate:** t½ ~75 min, hepatic esterase\n**Ketamine:** t½ ~2–3 hr, hepatic (CYP3A4/2B6), active metabolite norketamine",
        pearl: "**Etomidate is the only induction agent that preserves hemodynamic stability** — it does not drop blood pressure, making it ideal for unstable trauma or septic patients. However, even a single induction dose suppresses cortisol for 4–8+ hours by blocking 11β-hydroxylase. **Ketamine is unique** in maintaining (or raising) BP via catecholamine release — it's the induction agent of choice when bronchospasm and hypotension coexist (e.g., severe asthma exacerbation with shock)."
      },
      {
        name: "Inhaled Anesthetics",
        aka: "Sevoflurane · Desflurane · Isoflurane · Halothane · Nitrous Oxide (N₂O)",
        summary: "Volatile halogenated agents that produce unconsciousness, amnesia, and muscle relaxation via CNS depression. Characterized by MAC (minimum alveolar concentration) values and hepatotoxicity/malignant hyperthermia risks.",
        moa: "Potentiate **GABA-A and glycine receptors** + inhibit **NMDA, AMPA, and nicotinic ACh receptors** → generalized CNS depression; exact mechanism incompletely understood. Nitrous oxide: primarily NMDA antagonist (similar to ketamine) + weak opioid receptor activity",
        use: "General anesthesia maintenance (all); inhalation induction (sevoflurane preferred in children — low pungency); Nitrous oxide: analgesia + sedation (dental, obstetrics), reduces MAC of volatile agents (adjunct)",
        se: "**Malignant hyperthermia** (halothane + succinylcholine highest risk; sevoflurane/isoflurane/desflurane also trigger — treat with **dantrolene**); **hepatotoxicity** (halothane → massive immune hepatitis on re-exposure — now rarely used); **respiratory depression**; cardiovascular depression (↓ cardiac output, ↓ BP); N₂O: **bone marrow suppression** (inactivates B12/methionine synthase), expansion of air-filled cavities (bowel obstruction, pneumothorax — contraindicated); desflurane: airway irritant (avoid in asthma)",
        ci: "History of malignant hyperthermia or susceptible family history (use total IV anesthesia — propofol + opioid + non-depolarizing NMB instead); halothane re-exposure (hepatotoxicity); N₂O: bowel obstruction, pneumothorax, middle ear surgery, B12 deficiency",
        pk: "Elimination via exhalation (reverse induction: low blood-gas solubility = fast onset/offset). Blood-gas partition coefficient: desflurane < nitrous oxide < sevoflurane < isoflurane < halothane. MAC = potency measure (1 MAC = 1 atm prevents movement in 50% of patients). Halothane: high solubility → slow onset, significant hepatic metabolism (20%) → hepatotoxic metabolites. Sevoflurane: low solubility → fast onset/offset, safe in children.",
        pearl: "**MAC inversely correlates with potency and lipid solubility.** Low MAC = high potency (e.g., halothane MAC 0.75%). **Malignant hyperthermia** is triggered by volatile agents + succinylcholine → uncontrolled skeletal muscle calcium release (ryanodine receptor mutation) → hyperthermia, rigidity, acidosis, rhabdomyolysis. Treatment: **dantrolene** (blocks RyR1) + cooling + NaHCO₃."
      },
      {
        name: "Barbiturates",
        aka: "Phenobarbital · Thiopental · Methohexital · Pentobarbital · Secobarbital · Primidone",
        summary: "Potentiate GABA-A by increasing chloride channel open duration. Used for seizures, anesthesia induction, and elevated ICP. Narrow therapeutic window with high addiction potential.",
        moa: "Bind **GABA-A receptor** at the barbiturate site → ↑ **duration** of Cl⁻ channel opening (vs. benzodiazepines which ↑ frequency) → membrane hyperpolarization → CNS depression",
        use: "**Phenobarbital:** status epilepticus (IV), chronic seizure prophylaxis (especially neonatal), alcohol/benzo withdrawal\n**Thiopental/Methohexital:** IV anesthesia induction (largely replaced)\n**Pentobarbital:** refractory elevated ICP (barbiturate coma)\n**Primidone:** essential tremor, seizures",
        se: "**Respiratory depression** (dose-dependent, dangerous — no reversal agent), excessive sedation, ataxia, tolerance, physical dependence, **P450 induction** (↑ metabolism of many drugs including OCPs, warfarin, antivirals); paradoxical excitation in children/elderly; cardiovascular depression at high doses",
        ci: "Porphyria (↑ heme synthesis enzymes → precipitate attacks — key CI); severe respiratory depression without airway protection; active alcohol intoxication",
        pk: "**Phenobarbital:** oral/IV, t½ ~4 days (longest of common drugs), hepatic (CYP2C9/3A4), significant inducer\n**Thiopental:** IV only, ultra-short action due to redistribution to fat (not metabolism), then slow hepatic elimination\n**Primidone:** metabolized to phenobarbital",
        pearl: "**Barbiturates increase Cl⁻ channel DURATION; benzodiazepines increase FREQUENCY.** Benzodiazepines require GABA to be present — barbiturates can open channels directly at high doses, explaining their lethality in overdose. Always remember the **porphyria contraindication** (classic Step 1 trap)."
      },
    ]
  },
  {
    group: "Analgesics",
    drugs: [
      {
        name: "Opioid Analgesics",
        aka: "Morphine · Oxycodone (OxyContin) · Hydrocodone · Fentanyl · Hydromorphone · Codeine · Tramadol · Methadone · Meperidine (Demerol)",
        summary: "Activate μ, κ, and δ opioid receptors to produce analgesia, sedation, and euphoria. Primary use is moderate-to-severe pain; significant risks include respiratory depression, constipation, and addiction.",
        moa: "Agonist at **μ (mu), κ (kappa), and δ (delta) opioid receptors** (Gi-coupled) → ↓ cAMP → ↑ K⁺ conductance (hyperpolarization) + ↓ Ca²⁺ influx at presynaptic terminals → ↓ neurotransmitter release → **analgesia** (μ/κ), sedation (μ), euphoria (μ), ↓ GI motility (μ peripheral), respiratory depression (μ)",
        use: "Moderate-to-severe acute and chronic pain; palliative/cancer pain\n**Codeine:** cough suppression (low dose)\n**Loperamide/Diphenoxylate:** diarrhea (peripheral μ-agonist)\n**Morphine IV:** pulmonary edema — venodilation + ↓ dyspnea\n**Methadone:** opioid use disorder maintenance, chronic pain",
        se: "**Respiratory depression** (most life-threatening — pure μ agonist at pre-Bötzinger complex); **constipation** (↓ GI motility — tolerance does NOT develop); **nausea/vomiting** (CTZ stimulation); euphoria/dysphoria; miosis; urinary retention; pruritus (histamine — morphine > others); Meperidine: **normeperidine accumulation** → seizures (renal failure); Tramadol: lowers seizure threshold, serotonin syndrome (SNRI properties)",
        ci: "Concurrent MAOIs (serotonin syndrome with meperidine/tramadol — potentially fatal); head trauma with ↑ ICP (CO₂ retention → cerebral vasodilation); severe asthma/COPD without monitoring; Meperidine: renal failure (normeperidine accumulation → seizures — avoid chronic use)",
        pk: "**Morphine:** IV/IM/SC/PO, t½ ~2–3 hr, hepatic glucuronidation to **morphine-6-glucuronide** (active, accumulates in CKD → prolonged sedation)\n**Codeine:** prodrug metabolized by CYP2D6 to morphine (ultra-rapid metabolizers → toxicity; poor metabolizers → no effect)\n**Fentanyl:** 80–100× morphine potency, transdermal or IV, highly lipophilic, rapid onset, t½ ~3–4 hr\n**Methadone:** oral, t½ 25–50 hr (LONG — risk of accumulation), QTc prolongation\n**Reversal:** naloxone (IV, IM, intranasal — short t½ ~1 hr → may need redosing)",
        pearl: "**Opioid-induced constipation does NOT develop tolerance** — always prescribe a bowel regimen (stimulant laxative: senna or bisacodyl — not just stool softeners). **Naloxone is short-acting** (~1 hr) while most opioids last much longer — in overdose, repeat doses or infusion are often needed. **Codeine is a prodrug** that CYP2D6 converts to morphine — ultra-rapid metabolizers (some Africans, Saudis, Ethiopians) can get fatal respiratory depression from normal doses."
      },
      {
        name: "NSAIDs (Non-Opioid Analgesics)",
        aka: "Ibuprofen (Advil, Motrin) · Naproxen · Indomethacin · Ketorolac · Diclofenac · Meloxicam · Celecoxib (Celebrex) — COX-2 selective | Acetaminophen (Tylenol) — Non-NSAID",
        summary: "Inhibit cyclooxygenase enzymes to reduce prostaglandin synthesis, producing analgesia, antipyresis, and anti-inflammation. Key distinctions: COX-1 (GI/platelet protection) vs. COX-2 (inflammation) selectivity; acetaminophen lacks anti-inflammatory effect.",
        moa: "**NSAIDs:** reversibly inhibit **COX-1 and COX-2** (cyclooxygenase) → ↓ prostaglandin/thromboxane/prostacyclin synthesis → analgesia + antipyresis + anti-inflammation; Celecoxib: selective **COX-2** inhibitor (spares COX-1 → less GI toxicity, no antiplatelet effect). **Acetaminophen:** mechanism unclear — likely central COX-3 inhibition + endocannabinoid system; no peripheral anti-inflammatory effect",
        use: "Mild-to-moderate pain; fever\n**Indomethacin:** acute gout, patent ductus arteriosus closure (IV in neonates — ↓ PGE₂ → vasoconstriction of DA), pericarditis\nOsteoarthritis (first-line); rheumatoid arthritis (adjunct); dysmenorrhea; headache/migraine\n**Acetaminophen:** mild-to-moderate pain, fever (preferred in pregnancy, peptic ulcer, aspirin-intolerant)",
        se: "**NSAIDs:** GI ulceration/bleeding (↓ COX-1 → ↓ prostaglandin-mediated mucus/bicarbonate); **renal toxicity** (↓ PGE₂/PGI₂ → renal vasoconstriction → AKI, especially in hypovolemia/HF/CKD); ↑ cardiovascular risk (COX-2 > COX-1 inhibition → ↓ PGI₂ without ↓ TXA₂ → prothrombotic — celecoxib ↑ MI risk); hyperkalemia (↓ renin → ↓ aldosterone); **Acetaminophen:** **hepatotoxicity** (toxic metabolite NAPQI overwhelms glutathione stores — major at doses >7.5–10 g/day or with alcohol/fasting)",
        ci: "NSAIDs: peptic ulcer disease/GI bleeding (use COX-2 selective + PPI); severe CKD (↓ renal prostaglandins); 3rd trimester pregnancy (premature DA closure, oligohydramnios); prior NSAID-induced asthma (aspirin-exacerbated respiratory disease); HF (Na⁺ retention); Acetaminophen: severe hepatic disease, chronic heavy alcohol use (CYP2E1 induction → ↑ NAPQI)",
        pk: "**Ibuprofen:** t½ ~2 hr, hepatic (CYP2C9), renal excretion\n**Indomethacin:** most potent COX inhibitor, t½ ~4–5 hr\n**Ketorolac:** IV/IM/PO, most potent injectable NSAID — limit to 5 days (renal toxicity)\n**Celecoxib:** t½ ~11 hr, CYP2C9 substrate\n**Acetaminophen:** t½ ~2 hr, 90% glucuronidation/sulfation, ~5% CYP2E1 → NAPQI (toxic); antidote: **N-acetylcysteine** (replenishes glutathione)",
        pearl: "**Acetaminophen hepatotoxicity:** NAPQI (toxic CYP2E1 metabolite) accumulates when glutathione is depleted (overdose, malnutrition, fasting, alcohol induction of CYP2E1). **N-acetylcysteine** replenishes cysteine → restores glutathione. Most effective within 8 hr of ingestion. The antidote is so effective that even late presentation (>24 hr) may benefit — always give NAC in suspected acetaminophen toxicity."
      },
      {
        name: "Naloxone, Naltrexone & Buprenorphine",
        aka: "Naloxone (Narcan, Evzio) · Naltrexone (Vivitrol, ReVia) · Buprenorphine (Buprenex, Subutex) · Buprenorphine/Naloxone (Suboxone)",
        summary: "Opioid receptor modulators used for reversal of opioid toxicity, addiction treatment, and partial agonist analgesia. Naloxone reverses acute overdose; naltrexone and buprenorphine support long-term opioid use disorder treatment.",
        moa: "**Naloxone/Naltrexone:** competitive **opioid receptor antagonists** (μ > κ > δ) — block all opioid effects. **Buprenorphine:** high-affinity **partial μ-agonist** + κ-antagonist → ceiling effect on respiratory depression, prevents full agonist binding (opioid blockade)",
        use: "**Naloxone:** acute opioid overdose reversal (IV, IM, intranasal)\n**Naltrexone:** opioid use disorder maintenance (oral or monthly IM depot — Vivitrol), alcohol use disorder (↓ craving/relapse via β-endorphin blockade)\n**Buprenorphine (or Buprenorphine/Naloxone):** opioid use disorder maintenance (gold standard for MAT), moderate-to-severe chronic pain",
        se: "Naloxone: precipitates acute opioid **withdrawal** (agitation, tachycardia, hypertension, vomiting — in dependent patients); Naltrexone: hepatotoxicity (high doses), opioid withdrawal if opioids on board (must be opioid-free ≥7–10 days before starting); Buprenorphine: precipitated withdrawal if given to opioid-dependent patient too early (partial agonist displaces full agonist from receptors)",
        ci: "Naltrexone: acute opioid use (will precipitate severe withdrawal); hepatic failure (hepatotoxic at high doses); concurrent opioid analgesic requirement; Buprenorphine initiation: must wait until patient is in moderate withdrawal (COWS score ≥8) to avoid precipitated withdrawal",
        pk: "**Naloxone:** t½ ~1 hr (shorter than all opioids — risk of re-narcotization); IV onset ~2 min; IM/intranasal ~5 min\n**Naltrexone:** oral t½ ~4 hr (active 6β-naltrexol metabolite ~13 hr); hepatic\n**Buprenorphine:** SL/IV/transdermal; high lipophilicity; t½ ~35–37 hr (long — once-daily or SL film); slow dissociation from μ receptor (ceiling effect limits respiratory depression even at very high doses)",
        pearl: "**Buprenorphine's high receptor affinity and partial agonism** = if given to someone actively using opioids, it will displace the full agonist and cause **precipitated withdrawal**. Always wait for COWS ≥8 before starting buprenorphine. Its **ceiling effect on respiratory depression** makes overdose safer than full agonists — but there is NO ceiling on analgesia at high doses."
      },
    ]
  },
  {
    group: "Antidepressants",
    drugs: [
      {
        name: "SSRIs & SNRIs",
        aka: "Fluoxetine (Prozac) · Sertraline (Zoloft) · Escitalopram · Paroxetine · Citalopram — SSRIs | Venlafaxine (Effexor) · Duloxetine (Cymbalta) · Desvenlafaxine — SNRIs",
        summary: "Block serotonin (SSRIs) or serotonin and norepinephrine (SNRIs) reuptake transporters to increase synaptic monoamine concentration. First-line antidepressants for depression, anxiety disorders, PTSD, OCD, and multiple pain conditions.",
        moa: "**SSRIs:** selectively inhibit **serotonin transporter (SERT)** → ↑ synaptic 5-HT. **SNRIs:** inhibit **SERT + norepinephrine transporter (NET)** → ↑ 5-HT and NE; therapeutic effects require weeks of sustained receptor adaptation (↓ autoreceptor sensitivity)",
        use: "Major depressive disorder (first-line); generalized anxiety, social anxiety, panic disorder, PTSD, OCD (SSRIs/SNRIs first-line); premenstrual dysphoric disorder (fluoxetine, sertraline); bulimia nervosa (fluoxetine); fibromyalgia/neuropathic pain/diabetic neuropathy (duloxetine); stress urinary incontinence (duloxetine); hot flashes (venlafaxine in menopause)",
        se: "**Sexual dysfunction** (most common reason for discontinuation — ↓ libido, anorgasmia); **GI effects** (nausea, diarrhea — early, usually improves); **insomnia or sedation**; **SIADH/hyponatremia** (especially elderly); **serotonin syndrome** with MAOIs, tramadol, triptans (hyperthermia, clonus, agitation); Paroxetine: most anticholinergic of SSRIs; **SSRI discontinuation syndrome** (abrupt stop — 'FINISH': Flu-like, Insomnia, Nausea, Imbalance, Sensory disturbances, Hyperarousal) — worse with short t½ drugs (paroxetine); fluoxetine: safest (long t½ ~5 days → self-tapering)",
        ci: "MAOIs within 14 days (washout 14 days before/after MAOI — serotonin syndrome); MAO inhibitors for all SSRIs/SNRIs; Citalopram/escitalopram: prolonged QTc (dose limit); Paroxetine: pregnancy (neonatal adaptation syndrome, cardiac defects — relative CI, use sertraline instead)",
        pk: "**Fluoxetine:** longest t½ ~1–4 days + active metabolite norfluoxetine (~1–2 weeks) — self-tapering, MAOI washout 5 weeks after stopping\n**Paroxetine:** shortest t½ ~21 hr — worst discontinuation syndrome; strong CYP2D6 inhibitor\n**Sertraline:** preferred in pregnancy and post-MI\n**Duloxetine:** CYP1A2/2D6 substrate\n**Venlafaxine:** minimal CYP interactions",
        pearl: "**Serotonin syndrome vs. NMS:** Serotonin syndrome = hyperthermia + clonus/hyperreflexia + agitation + diarrhea (SERT/5-HT excess — treat with cyproheptadine). NMS = hyperthermia + rigidity + hyporeflexia + ↑ CK (dopamine depletion — treat with dantrolene/bromocriptine). **Key test question:** serotonin syndrome has clonus/hyperreflexia; NMS has lead-pipe rigidity and hyporeflexia."
      },
      {
        name: "Tricyclic Antidepressants (TCAs)",
        aka: "Amitriptyline (Elavil) · Nortriptyline · Imipramine · Desipramine · Clomipramine · Doxepin · Amoxapine",
        summary: "Block serotonin and norepinephrine reuptake plus multiple receptor types (muscarinic, histamine, α1, sodium channels). Used for depression, neuropathic pain, migraine prophylaxis, OCD, and enuresis. Dangerous in overdose.",
        moa: "Block **SERT + NET** (↑ 5-HT/NE) + **muscarinic (M1) receptors** (anticholinergic) + **H1 receptors** (sedation) + **α1 adrenergic receptors** (orthostatic hypotension) + **cardiac Na⁺ channels** (quinidine-like membrane stabilization → arrhythmias in overdose)",
        use: "Major depression (second-line — displaced by SSRIs)\n**Neuropathic pain:** amitriptyline, nortriptyline — first-line for diabetic neuropathy and post-herpetic neuralgia\n**Migraine prophylaxis:** amitriptyline\n**OCD:** clomipramine — most serotonergic TCA\n**Enuresis:** imipramine — ↑ bladder capacity\nFibromyalgia; chronic insomnia (low-dose doxepin/amitriptyline)",
        se: "**3 Cs:** Convulsions · Coma · Cardiotoxicity (wide QRS, prolonged QTc, arrhythmias — most dangerous in overdose); **anticholinergic effects** (dry mouth, urinary retention, constipation, blurred vision, delirium — especially elderly); **orthostatic hypotension** (α1 block); sedation (H1 block); weight gain",
        ci: "Recent MI or arrhythmia (Na⁺ channel blockade → QRS widening → VT/VF); MAOIs within 14 days; severe hepatic disease; closed-angle glaucoma (anticholinergic → ↑ IOP); BPH (urinary retention); pregnancy (congenital defects)",
        pk: "Oral, first-pass metabolism (low bioavailability), highly protein-bound and lipophilic (large Vd → NOT dialyzable). Long t½ (10–25 hr for nortriptyline) — once daily dosing. Tertiary amines (amitriptyline, imipramine) → secondary amine metabolites (nortriptyline, desipramine) with fewer SE. CYP2D6 metabolizes most TCAs.",
        pearl: "**TCA overdose:** The deadly triad is wide QRS (Na⁺ channel block), hypotension (α1 block), and seizures. Treatment: **sodium bicarbonate** (IV bolus — alkalinizes plasma + ↑ Na⁺ gradient → competes Na⁺ channels back open) for QRS >100 ms or arrhythmia. Do NOT give physostigmine (↑ seizure risk). Activated charcoal if within 1–2 hr. Large Vd means dialysis is ineffective."
      },
      {
        name: "MAO Inhibitors (MAOIs)",
        aka: "Phenelzine · Tranylcypromine · Isocarboxazid — Non-selective (irreversible) | Selegiline (Eldepryl, EMSAM) — MAO-B selective | Moclobemide — Reversible MAO-A (RIMA)",
        summary: "Inhibit monoamine oxidase to increase synaptic monoamines. Used for refractory depression and Parkinson disease (selegiline). Require strict dietary tyramine restriction and carry severe drug interaction risk.",
        moa: "Inhibit **monoamine oxidase A (MAO-A: degrades 5-HT, NE, DA) and/or MAO-B (degrades DA, phenylethylamine)** → ↑ synaptic 5-HT, NE, dopamine; irreversible inhibition (most): recovery requires new enzyme synthesis (2 weeks washout required)",
        use: "Major depression refractory to other agents (phenelzine, tranylcypromine — clinical use limited by interactions); atypical depression (MAOIs most effective); social anxiety disorder\n**Selegiline:** Parkinson disease (MAO-B inhibitor, used early or as adjunct to levodopa → prolongs dopamine availability)",
        se: "**Hypertensive crisis** ('cheese reaction' — tyramine-containing foods: aged cheese, cured meats, wine, fermented foods → normally metabolized by MAO-A in gut; with MAOIs, tyramine absorbed intact → massive NE release → ↑↑ BP → hemorrhagic stroke); **serotonin syndrome** (with serotonergic drugs — SSRIs, meperidine, tramadol); **orthostatic hypotension**; insomnia, weight gain; selegiline: at high doses loses MAO-B selectivity",
        ci: "All serotonergic drugs (SSRIs/SNRIs/TCAs — minimum 14-day washout; 5 weeks for fluoxetine); meperidine (fatal serotonin syndrome); all sympathomimetics; tyramine-rich foods (dietary restriction required); concurrent antihypertensives; liver disease",
        pk: "**Phenelzine/Tranylcypromine:** oral, irreversible — effects persist 2+ weeks after stopping (new enzyme synthesis required)\n**Selegiline:** oral or transdermal patch (EMSAM — transdermal avoids GI MAO-A → fewer food interactions at low doses)\n**Moclobemide:** reversible MAO-A inhibitor (RIMA) — competitive, shorter restriction needed",
        pearl: "**14-day washout rule:** 14 days after stopping an MAOI before starting serotonergic drugs. **5-week washout** required after fluoxetine (long t½ + active norfluoxetine metabolite) before starting MAOI. Hypertensive crisis from tyramine: treat with **phentolamine** (IV α-blocker) or **nitroprusside** — NOT β-blockers (unopposed α)."
      },
      {
        name: "Atypical Antidepressants",
        aka: "Bupropion (Wellbutrin, Zyban) · Mirtazapine (Remeron) · Trazodone · Vilazodone · Vortioxetine",
        summary: "Mechanistically diverse antidepressants offering alternatives when SSRIs/SNRIs are inadequate or poorly tolerated. Bupropion lacks sexual dysfunction; mirtazapine promotes sleep and appetite; trazodone is used for insomnia.",
        moa: "**Bupropion:** inhibits **DAT + NET** (↑ dopamine/NE, minimal serotonin) — also **nicotinic ACh receptor antagonist**. **Mirtazapine:** blocks **α2-autoreceptors** (presynaptic → ↑ NE/5-HT release) + **H1** (sedation/weight gain) + **5-HT2/5-HT3** (less nausea/sexual dysfunction). **Trazodone:** weak SERT inhibitor + **5-HT2 antagonist** + **α1 blocker**",
        use: "**Bupropion:** MDD (especially with fatigue/hypersomnia, sexual dysfunction on SSRI — no sexual SE), smoking cessation (Zyban), seasonal affective disorder, ADHD (off-label)\n**Mirtazapine:** MDD with insomnia, poor appetite, weight loss (elderly, cancer patients)\n**Trazodone:** insomnia (low dose), depression, PTSD nightmares",
        se: "Bupropion: **seizures** (dose-dependent, contraindicated in bulimia/anorexia — lowers seizure threshold, risk higher with purging-induced electrolyte abnormalities), **no sexual dysfunction** (advantage over SSRIs), dry mouth, insomnia, ↑ BP; Mirtazapine: **sedation, weight gain** (H1 block), agranulocytosis (rare); Trazodone: **priapism** (α1 block → venous pooling in penis), sedation, orthostatic hypotension",
        ci: "Bupropion: current/history of **seizure disorder** (lowers threshold), **eating disorders** (anorexia/bulimia — electrolyte abnormalities compound seizure risk), MAOI within 14 days, abrupt alcohol/benzo withdrawal; Trazodone: MAOIs; concurrent use with other serotonergic agents",
        pk: "**Bupropion:** oral, t½ ~21 hr, CYP2B6 substrate and **CYP2D6 inhibitor** (↑ levels of TCAs, antipsychotics, SSRIs co-administered), active metabolite hydroxybupropion\n**Mirtazapine:** oral, t½ ~20–40 hr, hepatic (CYP1A2/2D6/3A4)\n**Trazodone:** oral, t½ ~6–9 hr, CYP3A4",
        pearl: "**Bupropion is the only antidepressant that does NOT cause sexual dysfunction** and that aids smoking cessation (nicotinic ACh receptor antagonism reduces reward and withdrawal). The seizure risk is real at high doses or with bulimia (hypokalemia + alkalosis lowers threshold) — always screen for eating disorders before prescribing. **Trazodone-induced priapism** requires urgent urologic intervention — if unrelieved after 4 hours, aspiration of corpora cavernosa + phenylephrine injection."
      },
    ]
  },
  {
    group: "Mood Stabilizers",
    drugs: [
      {
        name: "Lithium",
        aka: "Lithium Carbonate (Lithobid, Eskalith) · Lithium Citrate",
        summary: "Monovalent cation with unique mood-stabilizing properties. First-line for bipolar disorder acute mania and long-term maintenance. Narrow therapeutic index requiring regular serum level monitoring.",
        moa: "Inhibit **inositol monophosphatase** → ↓ IP3/DAG signaling (inositol depletion hypothesis); inhibit **GSK-3β** (glycogen synthase kinase) → neuroprotective effects; also modulates Na⁺/K⁺-ATPase and neurotransmitter systems (multiple targets, uncertain which is primary)",
        use: "Bipolar disorder: acute mania treatment + long-term maintenance (↓ recurrence, ↓ suicide risk — unique among mood stabilizers); bipolar depression (with quetiapine or lamotrigine); schizoaffective disorder (adjunct); cluster headache prophylaxis; SIADH (nephrogenic DI induction — lithium antagonizes ADH at collecting duct)",
        se: "**Toxicity (narrow TI):** Early: fine tremor, polyuria, polydipsia, nausea, diarrhea. Moderate: coarse tremor, confusion, ataxia. Severe: **seizures, coma, cardiac arrhythmias, irreversible neurologic damage**; Chronic: **nephrogenic diabetes insipidus** (blocks ADH → polyuria), hypothyroidism (↓ thyroid hormone synthesis/secretion), weight gain, acne, psoriasis exacerbation; **Teratogenic:** Ebstein anomaly (cardiac malformation — relative CI in 1st trimester)",
        ci: "Pregnancy 1st trimester (Ebstein anomaly — relative, balance risk/benefit); severe renal impairment (lithium cleared renally — accumulates); concurrent diuretics esp. thiazides (↓ Na⁺ → ↑ lithium reabsorption in PCT → toxicity); dehydration/sodium depletion (same mechanism); NSAIDs (↓ renal Li clearance → toxicity)",
        pk: "Oral; NOT protein-bound, NOT hepatically metabolized — renally excreted unchanged (like Na⁺, reabsorbed in PCT). Therapeutic range: **0.6–1.2 mEq/L** (maintenance); toxic >1.5 mEq/L; hemodialysis for severe toxicity (cleared by dialysis — unusual for CNS-active drug). t½ ~18–24 hr. Thiazides and NSAIDs ↑ Li⁺ levels (major interactions).",
        pearl: "**Lithium behaves like sodium** in the kidney — PCT reabsorbs Li⁺ when Na⁺-depleted (dehydration, low-salt diet, diuretics → ↑ Li⁺ reabsorption → toxicity). The **3 T's** of lithium monitoring: **Tremor** (fine = therapeutic; coarse = toxic), **Thyroid** (check TSH every 6 months), **kidneys** (Tubular function — DI, GFR annually). Early sign of chronic toxicity: nephrogenic DI (polyuria/polydipsia)."
      },
    ]
  },
  {
    group: "Antiepileptics",
    drugs: [
      {
        name: "Valproate",
        aka: "Valproic Acid (Depakene) · Valproate Sodium (Depacon IV) · Divalproex (Depakote)",
        summary: "Broad-spectrum antiepileptic and mood stabilizer that enhances GABAergic inhibition and blocks sodium and T-type calcium channels. First-line for generalized seizures, bipolar mania, and migraine prophylaxis.",
        moa: "Multiple mechanisms: ↑ **GABA synthesis and ↓ GABA degradation** (↑ GABA-T inhibition → ↑ GABA levels) + **block voltage-gated Na⁺ channels** (inactivated state) + **block T-type Ca²⁺ channels** (especially for absence seizures)",
        use: "Generalized tonic-clonic seizures; absence seizures (drug of choice — also blocks T-type Ca²⁺ channels); myoclonic seizures; juvenile myoclonic epilepsy (drug of choice); bipolar disorder mania (faster than lithium); migraine prophylaxis; status epilepticus (IV valproate — second-line); complex partial seizures",
        se: "**Hepatotoxicity** (idiosyncratic, potentially fatal — especially in children <2 yr with mitochondrial disease — check LFTs); **teratogenicity** (**neural tube defects** — 1–4% risk, highest of all AEDs — folate supplementation reduces but does not eliminate; also cognitive impairment in offspring); **pancreatitis** (rare, serious); GI upset (take with food), weight gain, **hair loss** (alopecia), tremor; **thrombocytopenia** and platelet dysfunction; hyperammonemia (even without LFT elevation)",
        ci: "**Pregnancy** (highest teratogenic risk of all AEDs — neural tube defects, cognitive effects; use only if no safer alternative); urea cycle disorders (valproate → ↑ ammonia — can be fatal); hepatic disease; mitochondrial disorders (Alpers disease in children)",
        pk: "Oral or IV; t½ ~9–16 hr; hepatic metabolism (glucuronidation + β-oxidation + CYP2C9); **NOT a CYP inducer** (unlike phenytoin/carbamazepine); inhibits CYP2C9 and epoxide hydrolase (↑ phenobarbital, lamotrigine, carbamazepine epoxide levels). Protein-bound (90%) — displacement interactions possible.",
        pearl: "**Valproate is the broadest-spectrum AED** — effective for nearly all seizure types. However, it's the **most teratogenic** and should be avoided in women of childbearing potential (folic acid does NOT reliably prevent NTDs). The **drug interaction pearls:** valproate inhibits lamotrigine glucuronidation → ↑ lamotrigine levels 2× → halve lamotrigine dose when adding valproate."
      },
      {
        name: "Phenytoin",
        aka: "Phenytoin (Dilantin) · Fosphenytoin (Cerebyx — IV prodrug)",
        summary: "Voltage-gated sodium channel blocker with use-dependent inhibition of rapidly firing neurons. Used for tonic-clonic and partial seizures, status epilepticus, and trigeminal neuralgia. Notable for non-linear pharmacokinetics and extensive drug interactions.",
        moa: "Preferentially binds **voltage-gated Na⁺ channels** in the **inactivated state** → stabilizes inactive state → ↓ recovery from inactivation → prevents sustained high-frequency firing (use-dependent block)",
        use: "Generalized tonic-clonic and focal (partial) seizures\n**Status epilepticus:** IV fosphenytoin — second-line after benzodiazepines\nTrigeminal neuralgia (second-line); digoxin-induced arrhythmias (IV phenytoin — Class IB-like effect); post-trauma seizure prophylaxis",
        se: "**Dose-related CNS toxicity** (nystagmus → ataxia → diplopia → cognitive impairment → stupor/coma — correlates with plasma level); **gingival hyperplasia** (chronic — use dental hygiene); **hirsutism**; **coarsening of facial features**; **peripheral neuropathy** (chronic); **megaloblastic anemia** (↓ folate absorption); **osteomalacia** (↑ CYP450 → ↑ vitamin D metabolism → ↓ Ca²⁺); **SJS/toxic epidermal necrolysis** (rare but serious); Fetal hydantoin syndrome (teratogenic — cleft palate, nail/digit hypoplasia)",
        ci: "Sinus bradycardia or heart block (IV use — cardiac depressant); Adams-Stokes syndrome; pregnancy (teratogenic — fetal hydantoin syndrome); porphyria (CYP induction)",
        pk: "**Zero-order (saturable) kinetics at therapeutic levels** — small dose changes cause disproportionate level increases (Michaelis-Menten saturation → non-linear PK). Target range: 10–20 µg/mL. Strong **CYP inducer** (CYP1A2, 2C9, 3A4) → ↓ warfarin, OCP, statins, many other drugs. Fosphenytoin: water-soluble prodrug, safer IV infusion (less phlebitis), converted to phenytoin by phosphatases. IV phenytoin: must use saline (not dextrose — precipitates).",
        pearl: "**Phenytoin's non-linear kinetics** mean doubling the dose can triple the blood level — small adjustments matter. The **3 H's of chronic phenytoin toxicity**: Hirsutism, Hyperplasia of gingiva, Hypertelorism (facial coarsening). Phenytoin is a strong CYP inducer — always check interactions. It is **ineffective for absence seizures** (may worsen them) — use valproate or ethosuximide instead."
      },
      {
        name: "Carbamazepine",
        aka: "Carbamazepine (Tegretol, Carbatrol) · Oxcarbazepine (Trileptal) · Eslicarbazepine",
        summary: "Sodium channel blocker structurally related to TCAs. Used for focal seizures, generalized tonic-clonic seizures, trigeminal neuralgia, and bipolar disorder. Notable for autoinduction and dangerous blood dyscrasias.",
        moa: "Blocks **voltage-gated Na⁺ channels** in the inactivated state → stabilizes neuronal membranes → ↓ repetitive firing; also reduces synaptic transmission of high-frequency stimulation",
        use: "Focal (partial) seizures (drug of choice); generalized tonic-clonic seizures\n**Trigeminal neuralgia:** first-line — remarkably effective\nBipolar disorder (second-line mood stabilizer, especially for rapid cycling)\n**Diabetes insipidus:** ADH-sensitizing effect — central DI adjunct",
        se: "**SIADH/hyponatremia** (↑ ADH sensitivity — common, especially in elderly); **aplastic anemia** and **agranulocytosis** (rare, potentially fatal — CBCs required); **SJS/TEN** (↑ risk with HLA-B*1502 — common in Han Chinese/Southeast Asians — screen before prescribing); diplopia/ataxia/dizziness (dose-related); **hepatotoxicity**; teratogenicity (neural tube defects — relative CI in pregnancy; folic acid supplementation); **autoinduction** (induces its own CYP3A4 metabolism → ↓ levels over first 3–4 weeks — dose may need increasing)",
        ci: "Concurrent MAOIs (CNS toxicity); known history of bone marrow suppression; HLA-B*1502 carriers (SJS risk — screen Asian patients); concurrent tricyclic antidepressants (structural similarity → additive toxicity); porphyria",
        pk: "Oral, t½ initially ~25–65 hr → decreases to ~12–17 hr after autoinduction (induces CYP3A4, CYP2C9, CYP1A2 — its own and many other drugs' metabolism). Strong inducer: ↓ OCP efficacy (breakthrough pregnancy), ↓ warfarin, ↓ other AEDs, ↓ cyclosporine. Active 10,11-epoxide metabolite (via CYP3A4) → also pharmacologically active. Oxcarbazepine: ketone analog, converted to active monohydroxy metabolite, less enzyme induction than carbamazepine.",
        pearl: "**Carbamazepine = SIADH + aplastic anemia + SJS in Han Chinese + autoinduction.** Screen HLA-B*1502 before prescribing to Southeast Asian or Chinese patients. The autoinduction complicates dosing: therapeutic level may fall after first few weeks as the drug induces its own metabolism. **Trigeminal neuralgia** — lancinating unilateral facial pain — responds dramatically to carbamazepine."
      },
      {
        name: "Lamotrigine",
        aka: "Lamotrigine (Lamictal)",
        summary: "Broad-spectrum AED that blocks voltage-gated sodium channels and inhibits glutamate release. Used for focal and generalized epilepsy, bipolar disorder maintenance, and Lennox-Gastaut syndrome.",
        moa: "Block **voltage-gated Na⁺ channels** (inactivated state) → ↓ neuronal excitability; also inhibits presynaptic **glutamate** and **aspartate** release → ↓ excitatory neurotransmission",
        use: "Focal (partial) seizures; generalized tonic-clonic seizures; Lennox-Gastaut syndrome (↓ drop attacks); juvenile myoclonic epilepsy (adjunct); bipolar I disorder maintenance (first-line for **bipolar depression** — more effective than lithium for depressive episodes); absence seizures (second-line); trigeminal neuralgia",
        se: "**Stevens-Johnson syndrome / TEN** (most serious — higher risk with rapid titration and concurrent valproate — MUST titrate very slowly); **rash** (incidence ~10%, usually benign morbilliform — must distinguish from SJS); **blurred/double vision**, dizziness, ataxia; headache; insomnia",
        ci: "History of lamotrigine-induced SJS/TEN; children <2 yr on valproate + lamotrigine combination (↑ SJS risk); rapid dose escalation (major risk factor for SJS)",
        pk: "Oral; t½ ~25 hr (monotherapy), but dramatically affected by enzyme inducers/inhibitors: **Valproate inhibits UGT → ↑ t½ to ~60 hr** (must halve lamotrigine dose + titrate very slowly). **Enzyme inducers (carbamazepine, phenytoin)** ↓ t½ to ~12 hr (must use higher doses). Hepatic glucuronidation (UGT1A4).",
        pearl: "**The lamotrigine-valproate interaction is critical:** valproate inhibits UGT1A4, approximately doubling lamotrigine levels. If not accounted for, the slow titration schedule must be even slower and the final dose is half. The risk of **SJS with rapid titration** is the most feared complication — lamotrigine has a strict dose escalation schedule (start low, go slow: typically 25 mg every 2 weeks). It is the preferred AED for bipolar depression."
      },
      {
        name: "Ethosuximide",
        aka: "Ethosuximide (Zarontin)",
        summary: "Selectively blocks T-type calcium channels in thalamic neurons to suppress absence seizures. Drug of choice for childhood absence epilepsy when seizures are the only concern.",
        moa: "Block **T-type (low-threshold) voltage-gated Ca²⁺ channels** in thalamic relay neurons → ↓ spike-wave discharges (3 Hz) characteristic of absence seizures; no sodium channel activity",
        use: "**Childhood absence epilepsy** (drug of choice when no convulsive seizures; valproate preferred if co-existing tonic-clonic seizures — broader spectrum); juvenile absence epilepsy",
        se: "**GI upset** (nausea, vomiting, abdominal pain — most common; take with food); drowsiness, hiccups; blood dyscrasias (leukopenia, aplastic anemia — rare, monitor CBC); behavioral changes; lupus-like syndrome (rare)",
        ci: "Hypersensitivity; avoid in patients with tonic-clonic seizures without co-prescription of valproate/another AED (ethosuximide does NOT prevent tonic-clonic seizures — may cause loss of protection); severe hepatic/renal disease",
        pk: "Oral; t½ ~30–60 hr in adults, ~30 hr in children; hepatic CYP3A4 metabolism; 25% renal excretion unchanged. Minimal protein binding. No significant enzyme induction. Valproate ↑ ethosuximide levels by inhibiting metabolism.",
        pearl: "**Ethosuximide is the most selective AED in pharmacology** — it only blocks T-type Ca²⁺ channels and is only effective for absence seizures. It has NO effect on tonic-clonic or focal seizures. When a child has both absence and tonic-clonic seizures, use **valproate** (covers both) instead. Classic exam: absence seizure → staring, lip smacking, immediate recovery — treat with ethosuximide or valproate."
      },
      {
        name: "Topiramate",
        aka: "Topiramate (Topamax) · Phentermine/Topiramate (Qsymia)",
        summary: "Broad-spectrum AED with multiple mechanisms including sodium channel blockade, GABA potentiation, and AMPA/kainate receptor antagonism. Used for epilepsy, migraine prophylaxis, and weight loss.",
        moa: "Blocks **voltage-gated Na⁺ channels** + enhances **GABA-A activity** + antagonizes **AMPA/kainate glutamate receptors** + inhibits **carbonic anhydrase** → broad antiepileptic activity",
        use: "Focal and generalized seizures; Lennox-Gastaut syndrome; **migraine prophylaxis** (first-line — ↓ frequency ≥50%); essential tremor; **obesity/weight loss** (combined with phentermine — Qsymia); alcohol use disorder (off-label); binge eating disorder",
        se: "**Cognitive impairment** ('Dopamax' — word-finding difficulty, slowed thinking — dose-dependent, often dose-limiting); **weight loss** (useful for obese patients, problematic in children); **kidney stones** (carbonic anhydrase inhibition → metabolic acidosis → ↓ urinary citrate → calcium phosphate stones); paresthesias (carbonic anhydrase in periphery); acute angle-closure glaucoma (rare but serious)",
        ci: "Nephrolithiasis history (carbonic anhydrase → ↑ stone risk); pregnancy (oral clefts at high doses — teratogenic); metabolic acidosis; concurrent carbonic anhydrase inhibitors (additive stone/acidosis risk)",
        pk: "Oral; t½ ~19–23 hr; minimal hepatic metabolism (mainly excreted unchanged in urine — dose-reduce in CKD); moderate CYP3A4 inducer (↓ OCP efficacy — contraceptive counseling required); CYP2C19 inhibitor. Carbonic anhydrase inhibition → hyperchloremic metabolic acidosis.",
        pearl: "**Topiramate's cognitive 'dumbing down' effect** ('Dopamax') is the most clinically significant adverse effect — it affects memory and language more than other AEDs. However, its ability to cause **weight loss** makes it preferred in obese patients with epilepsy or migraine. Unique among AEDs for both migraine prophylaxis AND weight reduction (hence Qsymia formulation)."
      },
      {
        name: "Levetiracetam",
        aka: "Levetiracetam (Keppra) · Brivaracetam (Briviact)",
        summary: "Broad-spectrum AED with a unique mechanism targeting synaptic vesicle protein SV2A. Notable for minimal drug interactions, renal clearance, and effectiveness across many seizure types.",
        moa: "Binds **synaptic vesicle protein 2A (SV2A)** → modulates synaptic vesicle exocytosis → ↓ neurotransmitter release from rapidly firing neurons; also modulates GABA and AMPA receptor function (minor contributions)",
        use: "Focal (partial) seizures; juvenile myoclonic epilepsy; myoclonic seizures; tonic-clonic seizures; status epilepticus (IV levetiracetam — increasingly used instead of phenytoin, second-line after benzodiazepines); migraine prophylaxis; post-traumatic seizure prophylaxis",
        se: "**Behavioral/psychiatric effects** — irritability, agitation, aggression, psychosis (most clinically significant, especially in patients with pre-existing psychiatric disorders — unique among AEDs); somnolence; dizziness; anemia (rare)",
        ci: "Severe renal failure without dose adjustment (renally cleared — dose-reduce based on CrCl); prior behavioral/psychiatric adverse reaction to levetiracetam",
        pk: "Oral or IV; t½ ~6–8 hr; **minimal hepatic metabolism** (largely excreted unchanged by kidneys — CrCl-based dosing); **no CYP interactions** — major advantage over phenytoin/carbamazepine/valproate; no protein binding; not enzyme-inducing. IV and oral bioequivalent — IV loading is fast and effective.",
        pearl: "**Levetiracetam is the simplest AED pharmacokinetically** — no significant drug interactions, renally cleared, available IV and PO. However, its 'Keppra rage' (irritability, aggression) is a real clinical problem and must be counseled. Vitamin B6 (pyridoxine) may reduce behavioral side effects. It has become the preferred IV agent in many hospitals for acute seizure management due to safety vs. phenytoin (no cardiac effects, no need for cardiac monitoring)."
      },
      {
        name: "Gabapentin, Tiagabine & Vigabatrin",
        aka: "Gabapentin (Neurontin) · Pregabalin (Lyrica) — Calcium channel modulators | Tiagabine (Gabitril) — GABA reuptake inhibitor | Vigabatrin (Sabril) — GABA transaminase inhibitor",
        summary: "GABAergic or voltage-gated calcium channel modulating AEDs with distinct indications including neuropathic pain, anxiety, and refractory seizures. Vigabatrin causes permanent visual field loss.",
        moa: "**Gabapentin/Pregabalin:** bind **α2δ subunit of voltage-gated Ca²⁺ channels** → ↓ calcium influx at presynaptic terminals → ↓ neurotransmitter release (GABA analogs structurally, but do NOT bind GABA receptors). **Tiagabine:** inhibit **GABA transporter (GAT-1)** → ↓ GABA reuptake → ↑ synaptic GABA. **Vigabatrin:** irreversibly inhibit **GABA-transaminase (GABA-T)** → ↓ GABA degradation → ↑ GABA",
        use: "Gabapentin: focal seizures (adjunct), neuropathic pain (diabetic neuropathy, post-herpetic neuralgia — first-line), restless legs syndrome, fibromyalgia, alcohol withdrawal (off-label); Pregabalin: focal seizures, neuropathic pain, fibromyalgia, generalized anxiety disorder; Tiagabine: focal seizures (adjunct); Vigabatrin: infantile spasms (West syndrome — drug of choice), complex partial seizures refractory to other AEDs",
        se: "Gabapentin/pregabalin: **somnolence, dizziness, peripheral edema**, weight gain, ataxia, abuse potential (euphoria at high doses); Tiagabine: seizures (off-label use — can trigger new-onset seizures), dizziness; **Vigabatrin: permanent bilateral peripheral visual field defects** (retinal toxicity from GABA accumulation — requires regular visual field testing, FDA REMS program — weigh benefit vs. irreversible vision loss)",
        ci: "Vigabatrin: other visual disorders (additive risk), unless seizure benefit outweighs vision loss risk (REMS required); Tiagabine: off-label use without epilepsy (paradoxical seizures); Gabapentin: severe renal failure without dose adjustment",
        pk: "Gabapentin: oral, **non-linear (saturable) absorption** (transporter-mediated — larger doses have lower %bioavailability), renally excreted unchanged, NO hepatic metabolism, NO drug interactions (major advantage). Pregabalin: linear absorption, renally cleared. Tiagabine: oral, t½ ~7 hr, hepatic (CYP3A4). Vigabatrin: oral, t½ ~5–8 hr, renally excreted, irreversible mechanism (enzyme resynthesis needed for recovery — days/weeks).",
        pearl: "**Gabapentin does NOT bind GABA receptors** despite its name and structural similarity to GABA — it binds the α2δ subunit of Ca²⁺ channels. It also has essentially **no drug interactions** (not metabolized by CYP450) — a unique advantage when adding to complex regimens. **Vigabatrin's visual field loss** is cumulative and potentially permanent — reserve for infantile spasms (West syndrome) where benefit clearly outweighs risk."
      },
    ]
  },
  {
    group: "Antipsychotics",
    drugs: [
      {
        name: "Antipsychotics — First Generation (FGAs)",
        aka: "Haloperidol (Haldol) · Chlorpromazine (Thorazine) · Fluphenazine · Perphenazine · Thiothixene · Thioridazine · Trifluoperazine",
        summary: "D2 receptor antagonists that primarily reduce positive symptoms of schizophrenia. High-potency agents (haloperidol) cause more EPS; low-potency agents (chlorpromazine) cause more anticholinergic/sedative effects.",
        moa: "Competitive antagonism at **D2 (dopamine 2) receptors** in mesolimbic pathway → ↓ positive symptoms of psychosis; also block D1, H1, muscarinic, α1, and 5-HT2A receptors (especially low-potency agents) → multiple side effects",
        use: "Schizophrenia (positive symptoms — hallucinations, delusions); acute psychosis and agitation (haloperidol IV/IM); Tourette syndrome (haloperidol); intractable hiccups (chlorpromazine — D2 in vomiting center); nausea/vomiting (antiemetic use); delirium (haloperidol IV — most evidence in ICU)",
        se: "**EPS (extrapyramidal symptoms):** Acute dystonia (hours) → Akathisia (days) → Parkinsonism (weeks) → Tardive dyskinesia (months-years, often irreversible) — **higher potency = more EPS** (haloperidol worst); **Neuroleptic malignant syndrome (NMS):** hyperthermia + lead-pipe rigidity + altered consciousness + autonomic instability + ↑ CK (discontinue drug + supportive care + dantrolene/bromocriptine); Anticholinergic effects (dry mouth, urinary retention — low-potency agents); **α1 blockade:** orthostatic hypotension; **H1 blockade:** sedation; Thioridazine: retinal pigmentation + QTc prolongation (avoid); **Hyperprolactinemia** (D2 block in tuberoinfundibular pathway → ↑ prolactin → galactorrhea, amenorrhea, impotence)",
        ci: "CNS depression/coma; high-dose CNS depressants (additive); Parkinson disease (worsens motor symptoms via D2 blockade — use quetiapine or clozapine instead); prolonged QTc (thioridazine — class CI); pheochromocytoma (phenothiazines may precipitate hypertensive crisis)",
        pk: "High-potency FGAs (haloperidol, fluphenazine): high D2 affinity, more EPS, less anticholinergic. Low-potency FGAs (chlorpromazine, thioridazine): lower D2 affinity, less EPS, more anticholinergic/sedative/orthostatic effects. Most: oral or IM; long-acting depot IM formulations (fluphenazine decanoate, haloperidol decanoate — monthly injection for adherence). Haloperidol IV: effective for acute agitation in ICU/ED.",
        pearl: "**EPS timing mnemonic:** 4 hours (acute Dystonia) → 4 days (Akathisia) → 4 weeks (Parkinsonism) → 4 months (Tardive dyskinesia). Treatment: acute dystonia → **benztropine or diphenhydramine** (anticholinergics); akathisia → **β-blocker** (propranolol) or benzodiazepine; Parkinsonism → dose reduction or switch to SGA; tardive dyskinesia → **valbenazine or deutetrabenazine** (VMAT2 inhibitors)."
      },
      {
        name: "Antipsychotics — Second Generation (SGAs / Atypicals)",
        aka: "Clozapine (Clozaril) · Olanzapine (Zyprexa) · Risperidone (Risperdal) · Quetiapine (Seroquel) · Aripiprazole (Abilify) · Ziprasidone · Paliperidone · Lurasidone",
        summary: "Serotonin-dopamine antagonists (or partial agonists) with broader receptor profiles than FGAs. Lower risk of EPS and tardive dyskinesia but significant metabolic side effects; clozapine uniquely effective for treatment-resistant schizophrenia.",
        moa: "**5-HT2A antagonism** + **D2 antagonism** (lower affinity, faster dissociation than FGAs) → ↓ positive symptoms with less EPS; Clozapine: D1/D4 > D2 block + multiple other receptors (muscarinic, H1, α); **Aripiprazole:** partial **D2 agonist** + 5-HT1A partial agonist + 5-HT2A antagonist (stabilizer — activates or inhibits depending on baseline dopamine)",
        use: "Schizophrenia (positive and negative symptoms); bipolar disorder (olanzapine, quetiapine, aripiprazole); **Clozapine: treatment-resistant schizophrenia** (most effective antipsychotic — reduces suicide in schizophrenia, unique indication) + psychosis in Parkinson's (only SGA safe for this); adjunct in refractory MDD (aripiprazole, quetiapine, olanzapine); Tourette syndrome (aripiprazole); nausea (prochlorperazine, promethazine — older SGAs)",
        se: "**Metabolic syndrome** (weight gain + hyperglycemia + dyslipidemia — olanzapine and clozapine worst); **Clozapine:** **agranulocytosis** (1–2% — requires mandatory weekly then biweekly then monthly CBC monitoring via REMS), **myocarditis** (clozapine — rare but fatal, check troponin in first month), hypersalivation, seizures (↑ risk >600 mg/day); QTc prolongation (ziprasidone most); hyperprolactinemia (risperidone > others — most D2-like of SGAs); Aripiprazole: akathisia (partial D2 agonism → may cause/worsen akathisia)",
        ci: "Clozapine: severe neutropenia/agranulocytosis history (absolute), severe cardiac/CNS toxicity risk; Ziprasidone: prolonged QTc; concurrent use with other QTc-prolonging drugs (caution for all QTc-prolonging SGAs); Parkinson disease (most SGAs worsen motor symptoms — use clozapine or quetiapine only)",
        pk: "All oral (most available as IM for acute use). Clozapine: t½ ~12 hr, CYP1A2 (smoking induces — need higher doses in smokers; abrupt smoking cessation → ↑ levels → toxicity), CYP3A4; weekly CBC for 6 months → biweekly 6 months → monthly if stable ANC. Olanzapine: t½ ~30 hr, CYP1A2 + CYP2D6. Aripiprazole: t½ ~75 hr (longest), CYP2D6 + CYP3A4. Quetiapine: t½ ~7 hr, CYP3A4; low EPS even at high doses.",
        pearl: "**Clozapine is the only drug shown to reduce suicidality in schizophrenia** (FDA-approved indication) and is the only antipsychotic safe for Parkinson psychosis. Its **agranulocytosis** risk (1–2%) requires mandatory REMS monitoring — when ANC drops below 1500/µL, stop clozapine immediately and do not restart. **Aripiprazole is the only D2 partial agonist** among antipsychotics — it can cause akathisia (a unique mechanism vs. FGAs which cause akathisia via full D2 blockade)."
      },
    ]
  },
  {
    group: "Parkinson's Agents",
    drugs: [
      {
        name: "Levodopa / Carbidopa",
        aka: "Carbidopa/Levodopa (Sinemet, Rytary) · Levodopa (alone — rarely used)",
        summary: "The most effective treatment for Parkinson disease. Levodopa is a dopamine precursor that crosses the BBB; carbidopa inhibits peripheral DOPA decarboxylase to reduce side effects and increase CNS levodopa delivery.",
        moa: "**Levodopa:** crosses the BBB, converted to **dopamine** by DOPA decarboxylase in nigrostriatal neurons → restores striatal dopamine. **Carbidopa:** peripheral **DOPA decarboxylase inhibitor** (does NOT cross BBB) → prevents peripheral conversion of levodopa to dopamine → ↓ peripheral SE, ↑ CNS levodopa availability (allows ~75% dose reduction)",
        use: "**Parkinson disease:** most effective agent — gold standard for motor control\n**Restless legs syndrome:** low-dose levodopa or dopamine agonists\nDrug-induced Parkinsonism is treated by stopping the offending drug or using anticholinergics (not levodopa itself)",
        se: "**Early:** nausea, hypotension; **Long-term complications (major):** **Wearing-off** (end-of-dose deterioration — each dose lasts shorter as disease progresses); **On-off fluctuations** (unpredictable shifts between good mobility and freezing); **Dyskinesias** (involuntary choreiform/ballistic movements — occurs at peak dose, directly tied to dopamine levels — dose reduction helps but may worsen parkinsonism); hallucinations, psychosis (dopamine excess in limbic pathway); **sleep attacks**; impulse control disorders",
        ci: "Concurrent non-selective MAOIs (hypertensive crisis — must discontinue MAOI ≥2 weeks before); closed-angle glaucoma (dopamine ↑ IOP in some); skin melanoma (theoretical — dopamine metabolism → melanin; absolute CI for malignant melanoma is debated)",
        pk: "Oral, absorbed in small intestine (amino acid transporter — high-protein meals compete → reduce absorption); short t½ ~1–3 hr (IR formulation → pulsatile DA → fluctuations; ER formulation smooths levels)\n**Controlled-release options:** Sinemet CR or Rytary (extended-release bead capsule) reduce fluctuations\n**COMT inhibitors** (entacapone/tolcapone) or **MAO-B inhibitors** (selegiline, rasagiline) extend levodopa effect",
        pearl: "**Wearing-off vs. dyskinesias are opposite problems:** wearing-off = too little dopamine → add more levodopa or extend duration (COMT inhibitor, MAO-B inhibitor). Dyskinesias = too much dopamine at peak → reduce dose or use amantadine (anti-dyskinetic). The therapeutic window for levodopa narrows as PD progresses — this 'response window' problem drives the complexity of PD management."
      },
      {
        name: "Dopamine Agonists (Parkinson's)",
        aka: "Pramipexole (Mirapex) · Ropinirole (Requip) · Rotigotine (Neupro — transdermal patch) · Bromocriptine · Cabergoline",
        summary: "Directly activate dopamine receptors to improve Parkinson symptoms without requiring metabolic conversion. Used as initial monotherapy in younger patients to delay levodopa complications, or as adjunct to levodopa.",
        moa: "Direct agonists at **D2, D3, D4 dopamine receptors** in striatum and limbic system → ↑ dopaminergic tone without requiring functional nigrostriatal neurons; Bromocriptine/cabergoline: ergot derivatives, also agonize D2",
        use: "**Parkinson disease:** monotherapy in younger patients to delay levodopa and reduce dyskinesia risk; adjunct in advanced PD to smooth out motor fluctuations\n**Restless legs syndrome:** pramipexole, ropinirole — FDA-approved first-line\n**Hyperprolactinemia/prolactinoma:** bromocriptine, cabergoline — dopamine agonism suppresses prolactin secretion\n**Type 2 diabetes:** bromocriptine (Cycloset) — FDA-approved, improves insulin sensitivity",
        se: "**Impulse control disorders** (pathological gambling, hypersexuality, binge eating, compulsive shopping — all dopamine agonists, especially pramipexole — warn all patients explicitly); **sleep attacks** (sudden onset sleep without warning — dangerous while driving — FDA warning); nausea, orthostatic hypotension; hallucinations/psychosis (esp. elderly); **Ergot derivatives** (bromocriptine, cabergoline): cardiac fibrosis (pleuropulmonary/cardiac valvular fibrosis — especially cabergoline at high doses → echocardiogram monitoring), Raynaud phenomenon",
        ci: "Ergot derivatives: cardiovascular disease, pre-existing cardiac valvular disease (cabergoline fibrosis); uncontrolled psychiatric disorders (hallucinations); history of impulse control disorder",
        pk: "**Pramipexole:** oral, t½ ~8–12 hr, renally excreted (dose-reduce in CKD)\n**Ropinirole:** oral, hepatic (CYP1A2 — smoking ↑ clearance)\n**Rotigotine:** transdermal patch, 24-hr delivery (avoids first-pass, more consistent levels)\n**Bromocriptine:** oral, t½ ~6 hr, hepatic\n**Cabergoline:** oral, t½ ~65 hr (very long — weekly or twice-weekly dosing)",
        pearl: "**Impulse control disorders from dopamine agonists** are underrecognized and underreported — always screen proactively ('Have you noticed any unusual behaviors like gambling or changes in sexual activity?'). Mechanism: D3 receptor activation in the reward/limbic pathway. These behaviors improve with dose reduction or switching to levodopa. **Pramipexole and ropinirole are now first-line for restless legs syndrome** (FDA-approved) — the irresistible urge to move legs at rest, worse at night."
      },
      {
        name: "Entacapone & Tolcapone (COMT Inhibitors)",
        aka: "Entacapone (Comtan) · Tolcapone (Tasmar) · Carbidopa/Levodopa/Entacapone (Stalevo)",
        summary: "Inhibit catechol-O-methyltransferase to prolong levodopa action by blocking its peripheral degradation. Used as adjunct to levodopa/carbidopa to reduce wearing-off fluctuations.",
        moa: "Inhibit **COMT (catechol-O-methyltransferase)** → ↓ O-methylation of levodopa → ↑ plasma levodopa t½ and bioavailability → smoother, more sustained dopamine levels in CNS; always used with levodopa/carbidopa (no effect as monotherapy)",
        use: "Adjunct to carbidopa/levodopa in Parkinson disease to reduce wearing-off; always combined with levodopa (alone has no antiparkinsonian effect); Stalevo combination tablet simplifies regimen",
        se: "**Entacapone:** diarrhea (most common — dose-dependent, can be severe), nausea, urine discoloration (orange-brown — harmless, from catechol metabolites), dyskinesias (↑ effective levodopa → more peak-dose dyskinesia — may need to reduce levodopa dose); **Tolcapone: fulminant hepatotoxicity** (rare but fatal — liver function monitoring required, more restricted use than entacapone)",
        ci: "Tolcapone: hepatic disease (hepatotoxicity), concurrent use with non-selective MAOIs (both inhibit catecholamine degradation → hypertensive crisis); Entacapone: concurrent use with non-selective MAOIs",
        pk: "Both: oral, hepatic glucuronidation, poor CNS penetration (peripheral COMT inhibition). Entacapone: t½ ~2 hr, must be taken with each levodopa dose (3–4×/day). Tolcapone: t½ ~2–3 hr, also 3× daily; inhibits both peripheral and central COMT (crosses BBB — ↑ efficacy but ↑ hepatic risk). Available as Stalevo (levodopa + carbidopa + entacapone in one tablet).",
        pearl: "**Entacapone is preferred over tolcapone** because tolcapone has caused fatal hepatic necrosis (monitoring required, restricted use in Europe). Both need to be given with each levodopa dose — they have no anti-Parkinson effect without levodopa. The orange urine is a harmless side effect of entacapone that patients must be warned about upfront to avoid alarm."
      },
    ]
  },
  {
    group: "CNS Stimulants",
    drugs: [
      {
        name: "Amphetamines & Methylphenidate",
        aka: "Amphetamine (Adderall) · Dextroamphetamine · Methamphetamine · Methylphenidate (Ritalin, Concerta) · Lisdexamfetamine (Vyvanse)",
        summary: "Indirect sympathomimetics that increase synaptic monoamine concentrations. Used for ADHD and narcolepsy; high abuse potential with Schedule II classification.",
        moa: "**Reverse monoamine transporters (DAT, NET, SERT)** → force release of **dopamine, norepinephrine, serotonin** from presynaptic terminals into the synapse; also inhibit MAO; methylphenidate primarily blocks DAT/NET reuptake (does not reverse transporter)",
        use: "ADHD (first-line pharmacotherapy); narcolepsy; obesity (short-term, amphetamines); binge eating disorder (lisdexamfetamine)",
        se: "↑ BP, ↑ HR, **insomnia**, **anorexia/weight loss**, headache, anxiety, psychosis at high doses; growth suppression in children (monitor height); **high abuse/dependence potential**; withdrawal: fatigue, hypersomnia, hyperphagia, dysphoria",
        ci: "MAO inhibitor use within 14 days (serotonin syndrome / hypertensive crisis); cardiovascular disease / structural heart abnormality; uncontrolled hypertension; history of psychosis; glaucoma (↑ sympathetic tone → ↑ IOP)",
        pk: "**Amphetamines:** oral, t½ ~10–12 hr (pH-dependent renal elimination — alkaline urine ↑ reabsorption → ↑ t½); hepatic (CYP2D6)\n**Methylphenidate:** oral, t½ ~3–4 hr (IR) or 6–8 hr (ER); ester hydrolysis to ritalinic acid\n**Lisdexamfetamine:** prodrug — cleaved by red blood cells to d-amphetamine",
        pearl: "**Amphetamines reverse the dopamine transporter** — they actively push DA into the synapse rather than just blocking reuptake. This massive dopamine surge is why addiction potential is high. In overdose: hyperthermia + HTN + psychosis + seizures — treat with **cooling, benzodiazepines, and phentolamine** for BP."
      },
    ]
  },
  {
    group: "Headache / Migraine",
    drugs: [
      {
        name: "Sumatriptan (Triptans)",
        aka: "Sumatriptan (Imitrex) · Rizatriptan · Almotriptan · Eletriptan · Frovatriptan · Naratriptan · Zolmitriptan",
        summary: "Selective 5-HT1B/1D receptor agonists that abort migraine attacks by causing cranial vasoconstriction and inhibiting trigeminal nociceptive signaling. First-line acute treatment for moderate-to-severe migraine.",
        moa: "Selective agonists at **5-HT1B receptors** (intracranial blood vessels → vasoconstriction → ↓ neurogenic inflammation and meningeal vasodilation) and **5-HT1D receptors** (presynaptic on trigeminal sensory neurons → ↓ CGRP and substance P release → ↓ trigeminal nociceptive transmission) → abort migraine",
        use: "Acute moderate-to-severe migraine (first-line abortive — especially when analgesics fail)\nCluster headache (sumatriptan SC — only agent approved for cluster)\nMenstrual migraine (frovatriptan — long t½ → mini-prophylaxis over menstrual period)",
        se: "**Chest tightness/pressure** ('triptan sensations' — 5-HT1B coronary vasoconstriction — usually benign; rarely true coronary vasospasm)\nFlushing, tingling, warmth, paresthesias; nausea; dizziness\n**Serotonin syndrome** (with MAOIs, SSRIs — use with caution)\n**Medication overuse headache** (>10–15 uses/month → paradoxical ↑ frequency)",
        ci: "**CAD, angina, prior MI** (coronary vasoconstriction)\n**Uncontrolled hypertension** (further ↑ BP)\n**Cerebrovascular disease / TIA / stroke**; Prinzmetal angina\n**Hemiplegic or basilar migraine** (ischemic complications)\nConcurrent MAOIs (serotonin syndrome); concurrent ergotamine (separate by 24 hr)",
        pk: "**Sumatriptan:** oral (t½ ~2 hr), SC (fastest — onset 10–20 min), nasal spray, patch\n**Eletriptan/rizatriptan:** oral, rapid onset, t½ ~2–3 hr (best for quick relief)\n**Frovatriptan:** t½ ~26 hr (slowest onset — best for prolonged/menstrual migraine)\nAll: hepatic CYP3A4 (most); SC provides fastest plasma peak",
        pearl: "**Triptans are contraindicated in coronary artery disease** because 5-HT1B receptors cause coronary vasoconstriction — potentially dangerous in patients with coronary stenosis. The 'chest tightness' experienced by many migraine patients after triptans is usually benign and non-cardiac (5-HT1B in esophagus/chest muscles), but do cardiac workup if features are concerning. **Medication overuse headache** (MOH) occurs with >10–15 triptan uses/month — regular use paradoxically worsens headache frequency."
      },
    ]
  },
],
micro: [
  {
    group: "Beta-Lactams",
    drugs: [
      {
        name: "Natural Penicillins",
        aka: "Penicillin G (IV/IM) · Penicillin V (oral) · Benzathine Penicillin G · Procaine Penicillin G",
        summary: "Narrow-spectrum beta-lactams that disrupt gram-positive cell wall synthesis.\nFirst-line for Group A Strep, Syphilis, and Susceptible Gram-Positives.",
        moa: "Bind and inhibit **penicillin-binding proteins (PBPs)** → prevent transpeptidation/cross-linking of peptidoglycan.\nResult: Cell wall defect → osmotic lysis (bactericidal).",
        use: "**Streptococcal pharyngitis**: Penicillin V oral (first-line).\n**Syphilis (Primary/Secondary/Latent)**: Benzathine G IM (single dose).\n**Neurosyphilis**: Penicillin G IV (10–14 days).\n**Rheumatic fever prophylaxis**: Benzathine G IM monthly.",
        se: "**Hypersensitivity**: IgE-mediated anaphylaxis; cross-reactivity with cephalosporins (~1–2%).\n**Jarisch-Herxheimer reaction**: Fever/chills/hypotension 2–8 hr after starting treatment for spirochetes (pyrogen release).",
        ci: "History of penicillin anaphylaxis (cross-reactivity concern).\nNote: Jarisch-Herxheimer is NOT an allergy and not a CI to treatment.",
        pk: "Penicillin G: IV/IM (acid-labile).\nPenicillin V: Acid-stable oral.\nBenzathine G: IM depot (slow release over 2–4 weeks).\nRenally excreted (requires dose reduction in CKD).",
        pearl: "**Neurosyphilis** ALWAYS requires IV penicillin G; benzathine IM fails to reach therapeutic CSF concentrations."
      },
      {
        name: "Anti-Staphylococcal Penicillins",
        aka: "Nafcillin · Oxacillin · Dicloxacillin · Cloxacillin",
        summary: "Beta-lactamase-resistant penicillins designed for MSSA.\nPreferred over vancomycin for susceptible staph infections.",
        moa: "Bind **PBPs** → inhibit peptidoglycan cross-linking.\nBulky side chain sterically hinders **staphylococcal beta-lactamase** active site → prevents enzymatic hydrolysis.",
        use: "**MSSA Bacteremia/Endocarditis**: Drug of choice (superior to vancomycin).\n**MSSA Osteomyelitis/Septic Arthritis**.\n**Surgical prophylaxis**: Orthopedic/cardiac procedures.",
        se: "**Nafcillin: Hepatotoxicity** (transaminase elevation).\n**Interstitial nephritis** (less common than historical methicillin).\nPhlebitis at IV site.",
        ci: "Penicillin anaphylaxis.\n**MRSA**: Altered PBP2a confers resistance (ineffective).",
        pk: "Nafcillin/Oxacillin: IV only.\n**Nafcillin: Hepatic elimination** (biliary) → NO renal dose adjustment required.\nDicloxacillin: Oral (take on empty stomach).",
        pearl: "Always de-escalate from vancomycin to nafcillin/oxacillin when MSSA is confirmed; outcomes are significantly better."
      },
      {
        name: "Aminopenicillins",
        aka: "Ampicillin · Amoxicillin · Ampicillin-Sulbactam (Unasyn) · Amoxicillin-Clavulanate (Augmentin)",
        summary: "Extended-spectrum penicillins covering gram-positives plus select gram-negatives.\nInhibitor combinations add coverage against beta-lactamase producers.",
        moa: "Bind **PBPs** → inhibit peptidoglycan cross-linking.\nAmino group extends gram-negative outer membrane penetration.\n**Beta-lactamase inhibitors** (Clavulanate/Sulbactam): Irreversible 'suicide' inhibition of beta-lactamases.",
        use: "**Ampicillin**: Listeria monocytogenes (first-line); Enterococcal UTI; GBS intrapartum prophylaxis.\n**Amoxicillin**: H. pylori triple therapy; Dental endocarditis prophylaxis; Otitis media.\n**Augmentin**: Animal/human bites; Sinusitis.\n**Unasyn**: Intra-abdominal/pelvic infections.",
        se: "**Ampicillin rash**: Maculopapular non-IgE rash in patients with EBV (Mono) or CLL.\n**Diarrhea**: Especially with clavulanate.\n**C. diff colitis**.",
        ci: "Penicillin anaphylaxis.\nActive EBV (predictably causes rash).",
        pk: "Ampicillin: IV/IM only (poor oral absorption).\nAmoxicillin: Excellent oral bioavailability (~80%).\nRenally eliminated (requires dose reduction in CKD).",
        pearl: "**Listeria is the critical indication**: All generations of cephalosporins lack Listeria coverage. Add ampicillin for empiric meningitis in elderly/immunocompromised."
      },
      {
        name: "Extended-Spectrum Penicillins",
        aka: "Piperacillin-Tazobactam (Pip-Tazo, Zosyn) · Ticarcillin-Clavulanate",
        summary: "Anti-pseudomonal penicillins with the broadest coverage of the class.\nWorkhorse for nosocomial and polymicrobial infections.",
        moa: "Piperacillin: Extended-spectrum PBP binding including **anti-pseudomonal activity**.\n**Tazobactam**: Irreversible beta-lactamase inhibitor expands anaerobic and gram-negative coverage.",
        use: "**Nosocomial Infections**: Hospital-acquired pneumonia, UTI, bacteremia.\n**Febrile Neutropenia**: Empiric first-line (covers Pseudomonas).\n**Polymicrobial Abdominal Infections**: Perforated bowel or diverticulitis.",
        se: "**Hypokalemia**: Piperacillin is a non-reabsorbable anion → tubular K+ loss.\n**Neurotoxicity**: Non-convulsive status epilepticus at very high doses in renal failure.\nThrombocytopenia and high sodium load.",
        ci: "Penicillin anaphylaxis.\n**ESBL Bacteremia**: Inoculum effect may render Pip-Tazo unreliable (prefer Carbapenem).",
        pk: "IV infusion only.\n**Extended infusion (4-hr)** optimizes target attainment against Pseudomonas.\nRenally excreted (requires dose adjustment).",
        pearl: "**Hypokalemia** in critically ill patients on Pip-Tazo is clinically significant; monitor and replete K+ aggressively."
      },
      {
        name: "Cephalosporins",
        aka: "1G: Cefazolin · Cephalexin | 2G: Cefuroxime · Cefoxitin | 3G: Ceftriaxone · Ceftazidime | 4G: Cefepime | 5G: Ceftaroline",
        summary: "Beta-lactam antibiotics with progressively broader gram-negative coverage by generation.\nOnly 5th-generation ceftaroline covers MRSA.",
        moa: "Bind **PBPs** → inhibit peptidoglycan transpeptidation (bactericidal).\nGenerally more resistant to staphylococcal beta-lactamases than penicillins.",
        use: "**1G (Cefazolin)**: Surgical prophylaxis; MSSA skin infections.\n**2G (Cefoxitin)**: Anaerobic coverage for abdominal/GYN infections.\n**3G (Ceftriaxone)**: Meningitis, Gonorrhea, CAP, Lyme disease.\n**Ceftazidime**: Pseudomonas (narrower gram-positive than other 3G).\n**4G (Cefepime)**: Febrile neutropenia (broad gram-negative including Pseudomonas).\n**5G (Ceftaroline)**: MRSA skin infections/pneumonia.",
        se: "**Ceftriaxone**: Biliary sludge/pseudolithiasis; contraindicated in neonates receiving IV calcium (precipitation).\n**Cefotetan**: Disulfiram reaction with alcohol.\n**Hypersensitivity**: 1–2% cross-reactivity with penicillins.",
        ci: "**Listeria and Enterococcus**: Intrinsic resistance in ALL cephalosporins.\n**Neonates**: Ceftriaxone + Calcium = fatal precipitation.",
        pk: "Most are renally eliminated.\n**Ceftriaxone**: t½ ~8 hr (once-daily); ~50% biliary excretion (safe in CKD).",
        pearl: "**Generational trend**: Gram-negative coverage increases 1G → 4G, but gram-positive decreases (except 5G which gains MRSA)."
      },
      {
        name: "Carbapenems & Monobactams",
        aka: "Carbapenems: Imipenem-Cilastatin · Meropenem · Ertapenem | Monobactam: Aztreonam",
        summary: "Carbapenems are the 'big guns' for ESBL/MDR organisms.\nAztreonam is a narrow gram-negative agent safe in penicillin allergy.",
        moa: "**Carbapenems**: Bind all PBPs with broad-spectrum activity; stable to most beta-lactamases (except carbapenemases).\n**Aztreonam**: Binds specifically **PBP3** of gram-negatives only (no gram-positive/anaerobic activity).",
        use: "**Carbapenems**: ESBL-producing organisms; MDR gram-negatives; Febrile neutropenia.\n**Ertapenem**: Community ESBL (NO Pseudomonas/Acinetobacter coverage).\n**Aztreonam**: Gram-negative infections in penicillin-allergic patients.",
        se: "**Imipenem**: Seizures (lowers threshold, especially in renal failure).\n**Aztreonam**: Cross-reactivity with **Ceftazidime** (identical R1 side chain).",
        ci: "Ertapenem: Do NOT use if Pseudomonas/Acinetobacter suspected.\nImipenem: Avoid in patients with high seizure risk or unadjusted renal failure.",
        pk: "All IV.\n**Imipenem**: Combined with **Cilastatin** (inhibits renal dehydropeptidase I) to prevent tubular hydrolysis.\nErtapenem: Once-daily dosing.",
        pearl: "**Aztreonam** is safe in penicillin allergy because it is a monocyclic beta-lactam; it lacks the cross-reacting bicyclic structure."
      }
    ]
  },
  {
    group: "Other Antibacterials",
    drugs: [
      {
        name: "Vancomycin",
        aka: "Vancomycin (Vancocin)",
        summary: "Glycopeptide targeting cell wall synthesis in gram-positives.\nDrug of choice for MRSA and C. difficile (oral).",
        moa: "Bind **D-Ala-D-Ala terminus** of peptidoglycan precursors.\nResult: Prevent transglycosylation and transpeptidation (bactericidal).\nToo large to penetrate gram-negative outer membrane.",
        use: "**MRSA Infections**: Bacteremia, endocarditis, pneumonia (IV).\n**C. difficile colitis**: Oral formulation (acts locally in gut; not absorbed).\n**Enterococcal endocarditis**: Combined with gentamicin for synergy.",
        se: "**Red man syndrome**: Non-IgE mast cell degranulation from rapid infusion (prevent with slow infusion).\n**Nephrotoxicity**: Risk increases with aminoglycoside synergy.\n**Ototoxicity**: Rare, seen at high levels.",
        ci: "**VRE**: Vancomycin-resistant enterococcus (use linezolid/daptomycin).\nOral vanco will NOT treat systemic infections.",
        pk: "IV for systemic; Oral for local C. diff treatment.\nMonitor with **AUC/MIC** (target 400–600).\nRenally eliminated.",
        pearl: "**Red man vs. Allergy**: Slow the infusion for Red Man; stop the drug for true IgE anaphylaxis."
      },
      {
        name: "Aminoglycosides",
        aka: "Gentamicin · Tobramycin · Amikacin · Streptomycin · Neomycin",
        summary: "Potent bactericidal inhibitors of the 30S ribosome.\nConcentration-dependent killing with narrow therapeutic index.",
        moa: "Irreversibly bind **30S ribosomal subunit** → cause mRNA misreading.\nResult: Aberrant proteins insert into cell membrane → membrane disruption.\nRequires **oxygen** for uptake (inactive against anaerobes).",
        use: "**Serious Gram-Negative Infections**: Pseudomonas, Enterobacter.\n**Synergy**: Combined with penicillins/vanco for Enterococcal endocarditis.\n**Neomycin**: Bowel prep or hepatic encephalopathy (↓ ammonia-producers).",
        se: "**Nephrotoxicity**: Acute Tubular Necrosis (usually reversible).\n**Ototoxicity**: Irreversible sensorineural hearing loss or vestibular ataxia.\n**Neuromuscular blockade**: Inhibits ACh release (dangerous in Myasthenia Gravis).",
        ci: "**Pregnancy**: Fetal ototoxicity (CN VIII damage).\n**Anaerobic infections**: Drug cannot enter bacteria without oxygen.",
        pk: "IV/IM (poor oral absorption).\n**Once-daily dosing** preferred to reduce nephrotoxicity (allows washout from tubules).\nStrictly renally eliminated.",
        pearl: "**Hartford Nomogram**: Used to guide extended-interval dosing based on random plasma levels."
      },
      {
        name: "Tetracyclines",
        aka: "Doxycycline · Tetracycline · Minocycline · Tigecycline",
        summary: "Bacteriostatic 30S inhibitors covering atypical and tick-borne pathogens.\nDoxycycline is the most versatile agent in the class.",
        moa: "Bind **30S ribosomal subunit** → block **aminoacyl-tRNA binding** to the A site.\nResult: Prevent peptide chain elongation.\nEffective against intracellular organisms.",
        use: "**Tick-borne Illnesses**: Rickettsia (RMSF), Lyme disease (first-line).\n**Atypical Pneumonia**: Mycoplasma, Chlamydophila.\n**STIs**: Chlamydia.\n**Acne**: Minocycline.",
        se: "**Photosensitivity**: Exaggerated sunburn.\n**Teeth Discoloration**: Enamel hypoplasia in children.\n**GI Upset**: Esophageal ulceration (remain upright after taking).",
        ci: "**Pregnancy/Children <8 yr**: Bone/tooth effects.\n**Cation Chelation**: Separate from dairy, antacids, or iron (Ca2+, Mg2+, Fe2+ bind drug).",
        pk: "**Doxycycline: Fecal/Biliary elimination** → safe in renal failure.\nTetracycline: Renal elimination (avoid in CKD).",
        pearl: "**RMSF Exception**: Use doxycycline even in children <8 yr for RMSF; mortality risk outweighs tooth staining risk."
      },
      {
        name: "Macrolides",
        aka: "Azithromycin · Clarithromycin · Erythromycin",
        summary: "Bacteriostatic 50S inhibitors for CAP and atypical infections.\nErythromycin is also used as a GI prokinetic.",
        moa: "Bind **50S ribosomal subunit** (23S rRNA) → block **translocation** of peptidyl-tRNA from A to P site.\nResult: Inhibit peptide chain elongation.",
        use: "**Atypical Pneumonia**: Mycoplasma, Legionella (first-line).\n**STIs**: Chlamydia (single dose azithro).\n**H. pylori**: Clarithromycin (triple therapy).\n**GI Prokinetic**: Erythromycin (motilin agonist).",
        se: "**QTc Prolongation**: High-risk for torsades.\n**GI Motility**: Nausea/cramps (via motilin receptors).\n**Hepatotoxicity**: Cholestatic jaundice.",
        ci: "Prior QTc prolongation or Torsades.\n**Clarithromycin**: Potent **CYP3A4 inhibitor** (dangerous with statins).",
        pk: "**Azithromycin**: Massive tissue accumulation (t½ ~68 hr) → 5-day course gives 10 days of coverage.\nRenal/Hepatic clearance varies by agent.",
        pearl: "**Azithromycin** lacks the significant CYP3A4 inhibition seen with Erythromycin and Clarithromycin."
      },
      {
        name: "Clindamycin",
        aka: "Clindamycin (Cleocin)",
        summary: "50S inhibitor for gram-positives and anaerobes above the diaphragm.\nSuppresses toxin production in Staph/Strep.",
        moa: "Bind **50S ribosomal subunit** → inhibit peptidyl transferase.\nResult: Block translocation (bacteriostatic).\nSuppresses bacterial toxin synthesis.",
        use: "**Anaerobic Infections**: Aspiration pneumonia; lung abscess.\n**Strep Toxic Shock**: + Penicillin to stop toxin production.\n**Skin/Soft Tissue**: Community-acquired MRSA.",
        se: "**C. difficile colitis**: Highest risk of CDI among common antibiotics.\nGI upset and rash.",
        ci: "History of antibiotic-associated colitis.",
        pk: "Excellent tissue penetration (bone/abscesses).\nRequires **D-zone test** for MRSA if erythromycin-resistant (inducible resistance).",
        pearl: "**Mnemonic**: 'Clinda for anaerobes ABOVE the diaphragm; Metro for BELOW the diaphragm.'"
      },
      {
        name: "Misc. Antibacterials",
        aka: "Linezolid · Daptomycin · Chloramphenicol · Polymyxins · Nitrofurantoin · Fosfomycin",
        summary: "Diverse agents for resistant pathogens and UTIs.\nLinezolid/Daptomycin are the primary drugs for VRE.",
        moa: "**Linezolid**: Binds **23S rRNA of 50S** → blocks initiation complex.\n**Daptomycin**: Inserts into membrane → **Ca2+-dependent depolarization**.\n**Polymyxins**: Bind **LPS** → disrupt gram-negative outer membrane (detergent effect).\n**Nitrofurantoin**: Reduced to reactive intermediates that damage DNA.",
        use: "**Linezolid/Daptomycin**: VRE and MRSA bacteremia.\n**Chloramphenicol**: RMSF in pregnancy; bacterial meningitis (penicillin allergy).\n**Polymyxins**: Last-resort for carbapenem-resistant Pseudomonas/Acinetobacter.\n**Nitrofurantoin/Fosfomycin**: Uncomplicated lower UTI.",
        se: "**Linezolid**: **Thrombocytopenia** (monitor CBC weekly); **Serotonin Syndrome** (weak MAOI).\n**Daptomycin**: **Myopathy/Rhabdomyolysis** (monitor CK weekly; hold statins).\n**Chloramphenicol**: **Aplastic Anemia** (idiosyncratic); Gray Baby Syndrome.\n**Nitrofurantoin**: Hemolysis in G6PD deficiency.",
        ci: "**Daptomycin: Pneumonia** (inactivated by pulmonary surfactant).\n**Nitrofurantoin: CrCl <30** (will not concentrate in urine).",
        pk: "Linezolid: 100% oral bioavailability.\nDaptomycin: IV only.\nFosfomycin: Single oral dose.",
        pearl: "**Daptomycin trap**: Never use it for pneumonia. It is useless in the lungs because surfactant binds and inactivates it."
      },
      {
        name: "Fluoroquinolones",
        aka: "Ciprofloxacin · Levofloxacin · Moxifloxacin",
        summary: "Bactericidal DNA replication inhibitors with broad-spectrum activity.\nCiprofloxacin is the only reliable oral anti-pseudomonal.",
        moa: "Inhibit **DNA gyrase (Topoisomerase II)** and **Topoisomerase IV**.\nResult: Prevent DNA supercoiling/unwinding → block replication.",
        use: "**Ciprofloxacin**: Gram-negative UTI; Pseudomonas; Anthrax.\n**Levofloxacin**: CAP (respiratory fluoroquinolone); UTI.\n**Moxifloxacin**: CAP; anaerobic activity (no urinary penetration).",
        se: "**Tendinopathy**: Achilles tendon rupture (black box; risk ↑ with steroids/age).\n**QTc Prolongation**.\n**CNS**: Dizziness, insomnia, seizures.\n**Peripheral Neuropathy** (potentially irreversible).",
        ci: "**Myasthenia Gravis** (neuromuscular block).\n**Pregnancy/Children**: Cartilage toxicity (animal data).\n**Moxifloxacin**: Do NOT use for UTI (low urinary levels).",
        pk: "Excellent oral bioavailability (Oral ≈ IV).\nChelated by divalent cations (antacids/iron).",
        pearl: "**Achilles Warning**: Warn patients to stop the drug and avoid exercise if they develop new tendon pain."
      },
      {
        name: "Metronidazole",
        aka: "Metronidazole (Flagyl) · Tinidazole",
        summary: "Selective anaerobic agent that creates toxic free radicals.\nFirst-line for C. diff, Protozoa, and below-diaphragm anaerobes.",
        moa: "Reduced by **ferredoxin** in anaerobes → generates **cytotoxic nitro radical anions**.\nResult: DNA strand breaks (bactericidal).",
        use: "**C. difficile**: First-line for mild-moderate cases.\n**Protozoa**: Giardia, Trichomonas, Entamoeba.\n**Anaerobes**: Below-the-diaphragm (intra-abdominal infections).\n**H. pylori**: Part of quadruple therapy.",
        se: "**Disulfiram-like reaction** with alcohol (acetaldehyde accumulation).\n**Metallic taste**.\n**Peripheral neuropathy** (prolonged use).\nDark urine (harmless).",
        ci: "**First trimester pregnancy** (theoretical teratogenicity).\n**Alcohol use** (during and 48 hr after).",
        pk: "Oral/IV (100% bioavailability).\nInhibits CYP2C9 → ↑ Warfarin levels.",
        pearl: "**GET GAP on the Metro**: **G**iardia, **E**ntamoeba, **T**richomonas, **G**ardnerella, **A**naerobes (B. frag), **P**ylori."
      },
      {
        name: "TMP-SMX (Trimethoprim-Sulfamethoxazole)",
        aka: "Bactrim · Septra · Co-trimoxazole",
        summary: "Sequential folate synthesis inhibitors used for UTI and PCP.\nAct synergistically against many pathogens.",
        moa: "**Sulfamethoxazole**: Inhibits **dihydropteroate synthase** (PABA analog).\n**Trimethoprim**: Inhibits **dihydrofolate reductase (DHFR)**.\nResult: ↓ DNA synthesis (bacteriostatic; bactericidal synergy).",
        use: "**Pneumocystis jirovecii (PCP)**: Treatment and Prophylaxis (CD4 <200).\n**UTI/Pyelonephritis**.\n**Toxoplasmosis prophylaxis** (CD4 <100).\n**Nocardia** (drug of choice).",
        se: "**Hypersensitivity**: Rash; SJS/TEN (sulfa allergy).\n**Hyperkalemia**: Trimethoprim blocks **ENaC** (resembles amiloride).\n**Megaloblastic Anemia**: Folate deficiency.\n**Creatinine bump**: Lab artifact (competes with Cr secretion).",
        ci: "**Sulfa allergy**.\n**Late pregnancy/Neonates**: Kernicterus (displaces bilirubin from albumin).\n**G6PD deficiency**: Hemolysis.",
        pk: "Excellent oral bioavailability.\nRenally eliminated (requires dose reduction).",
        pearl: "**Potassium Trap**: In HIV patients on ACEi/ARB, high-dose TMP-SMX for PCP can cause life-threatening hyperkalemia."
      }
    ]
  },
  {
    group: "Mycobacterial",
    drugs: [
      {
        name: "Tuberculosis Drugs (RIPE)",
        aka: "Rifampin · Isoniazid · Pyrazinamide · Ethambutol",
        summary: "Standard 4-drug regimen for initial TB treatment.\nEach drug has distinct, highly-tested toxicities.",
        moa: "**Rifampin**: Inhibits **RNA polymerase** (β-subunit).\n**Isoniazid (INH)**: Inhibits **InhA** → blocks mycolic acid synthesis.\n**Pyrazinamide**: Disrupts membrane potential in acidic phagolysosomes.\n**Ethambutol**: Inhibits **arabinosyl transferase** (blocks cell wall synthesis).",
        use: "**Active TB**: RIPE x 2 months → RI x 4 months.\n**Latent TB**: INH x 9 months or Rifampin x 4 months.\n**Rifampin**: Meningococcal/H. flu prophylaxis.",
        se: "**Rifampin**: **Orange secretions**; Potent **CYP inducer**.\n**INH**: **Peripheral neuropathy** (prevent with **B6/Pyridoxine**); Hepatotoxicity.\n**Pyrazinamide**: **Hyperuricemia** (Gout).\n**Ethambutol**: **Optic neuritis** (red-green color blindness).",
        ci: "Active hepatic disease (for R, I, and P).\nEthambutol: Children too young for visual monitoring.",
        pk: "**Isoniazid**: Metabolized by **Acetylation**; **Slow acetylators** have ↑ risk of Lupus and neuropathy.\n**Rifampin**: Massive drug interactions via CYP induction.",
        pearl: "**RIPE Side Effects**: **R**ed/orange fluids, **I**njures neurons (B6), **P**uffy joints (Gout), **E**yes (Optic neuritis)."
      },
      {
        name: "Leprosy Drugs",
        aka: "Dapsone · Rifampin · Clofazimine",
        summary: "Multi-drug therapy used to treat Hansen disease.\nDapsone is the primary agent.",
        moa: "**Dapsone**: Inhibits **dihydropteroate synthase** (folate inhibitor; sulfa-like).\n**Clofazimine**: Binds DNA + generates ROS.",
        use: "**Leprosy**: WHO multi-drug therapy.\n**Dapsone**: PCP prophylaxis; Dermatitis herpetiformis.",
        se: "**Dapsone**: Hemolysis in **G6PD deficiency**; Methemoglobinemia.\n**Clofazimine**: **Reddish-brown skin discoloration** (last months/years).",
        ci: "G6PD deficiency (screen before Dapsone).",
        pk: "Clofazimine: Extremely long t½ (~70 days) due to tissue accumulation.",
        pearl: "**Cosmetic SE**: Warn patients about the skin discoloration from clofazimine to ensure adherence."
      }
    ]
  },
  {
    group: "Antifungals",
    drugs: [
      {
        name: "Amphotericin B",
        aka: "Conventional Ampho B · Liposomal Ampho B (AmBisome)",
        summary: "Broadest-spectrum polyene for severe systemic infections.\nHighly toxic; 'Ampho-terrible'.",
        moa: "Binds **ergosterol** in fungal cell membrane → forms pores.\nResult: Leakage of electrolytes (K+, Mg2+) → cell death.",
        use: "**Cryptococcal Meningitis** (induction).\n**Mucormycosis** (first-line).\nSevere systemic candidiasis or histoplasmosis.",
        se: "**Nephrotoxicity**: Dose-dependent tubular injury (less with liposomal).\n**'Shake and Bake'**: Infusion-related fever, chills, rigors.\n**Hypokalemia/Hypomagnesemia**: Tubular electrolyte wasting.",
        ci: "Pre-existing renal failure (unless liposomal used with caution).",
        pk: "IV only.\nLiposomal formulation concentrates in tissue and spares the kidney.",
        pearl: "Pre-hydrate with **Normal Saline** boluses to reduce the risk of nephrotoxicity."
      },
      {
        name: "Azole Antifungals",
        aka: "Fluconazole · Voriconazole · Itraconazole · Posaconazole · Ketoconazole",
        summary: "Ergosterol synthesis inhibitors with extensive drug interactions.\nFirst-line for many endemic and opportunistic fungi.",
        moa: "Inhibit **CYP51 (Lanosterol 14-α-demethylase)**.\nResult: Block conversion of lanosterol → ergosterol (fungistatic).",
        use: "**Fluconazole**: Vaginal/Esophageal candidiasis; Cryptococcal maintenance.\n**Voriconazole**: **Invasive Aspergillosis** (first-line).\n**Itraconazole**: Blastomycosis; Histoplasmosis.\n**Ketoconazole**: Topical only (too toxic for systemic use).",
        se: "**Hepatotoxicity** (monitor LFTs).\n**QTc Prolongation**.\n**Strong CYP3A4 inhibition** (↑ levels of statins, warfarin, etc.).\n**Voriconazole unique**: Visual disturbances (flashing lights/blurry vision).",
        ci: "Concurrent QTc-prolonging drugs.\nKetoconazole: Systemic use (causes adrenal insufficiency/gynecomastia).",
        pk: "Fluconazole: Best CSF penetration.\nVoriconazole: Non-linear kinetics.",
        pearl: "**CSF Entry**: Fluconazole is the only azole that reaches high concentrations in the CSF."
      },
      {
        name: "Echinocandins & Flucytosine",
        aka: "Caspofungin · Micafungin | Flucytosine (5-FC)",
        summary: "Cell wall (Echinocandins) and DNA (Flucytosine) inhibitors.\nEchinocandins are the first-line for Candidemia.",
        moa: "**Echinocandins**: Inhibit **β-(1,3)-D-glucan synthase** (cell wall).\n**Flucytosine**: Deaminated to **5-FU** → inhibits thymidylate synthase → blocks DNA synthesis.",
        use: "**Echinocandins**: Candidemia (first-line).\n**Flucytosine**: **Cryptococcal meningitis** induction (combined with Ampho B).",
        se: "**Echinocandins**: Histamine-mediated infusion reactions (flushing).\n**Flucytosine**: **Bone marrow suppression** (neutropenia/thrombocytopenia).",
        ci: "Flucytosine monotherapy (rapid resistance).",
        pk: "Echinocandins: IV only; Not CYP-metabolized (fewer interactions).\nFlucytosine: Oral; Renally cleared.",
        pearl: "**Safest Azole-Alternative**: Echinocandins have the fewest drug interactions among systemic antifungals."
      },
      {
        name: "Dermatophyte Drugs",
        aka: "Terbinafine · Griseofulvin · Nystatin · Ciclopirox",
        summary: "Target superficial fungal infections of hair, skin, and nails.",
        moa: "**Terbinafine**: Inhibits **squalene epoxidase** → toxic squalene accumulation.\n**Griseofulvin**: Binds **microtubules** → inhibits fungal mitosis.\n**Nystatin**: Binds ergosterol (same as Ampho B).",
        use: "**Terbinafine**: Onychomycosis (oral first-line).\n**Griseofulvin**: **Tinea capitis** in children (oral required).\n**Nystatin**: Oral candidiasis (swish-and-swallow).",
        se: "**Terbinafine**: Hepatotoxicity; Taste disturbance.\n**Griseofulvin**: **CYP Inducer** (↓ OCP efficacy); Teratogenic.",
        ci: "Pregnancy (Griseofulvin).\nNystatin: Systemic use (too toxic; topical/oral-swish only).",
        pk: "Terbinafine: Highly lipophilic; remains in nails for months.",
        pearl: "**Tinea Capitis**: Topical agents fail because they don't reach the hair follicle base; oral Griseofulvin or Terbinafine is mandatory."
      }
    ]
  },
  {
    group: "Antivirals",
    drugs: [
      {
        name: "NRTIs & NNRTIs",
        aka: "NRTIs: Zidovudine · Tenofovir · Emtricitabine | NNRTIs: Efavirenz · Nevirapine",
        summary: "Backbone of HIV therapy.\nNRTIs are chain terminators; NNRTIs are allosteric inhibitors.",
        moa: "**NRTIs**: Phosphorylated to triphosphate → competitively incorporated into HIV DNA by **Reverse Transcriptase** → **chain termination** (lack 3'-OH).\n**NNRTIs**: Bind allosteric site on Reverse Transcriptase → inhibit polymerase activity.",
        use: "**HIV ART**: Combination regimens.\n**Tenofovir/Emtricitabine**: PrEP.\n**Zidovudine**: Perinatal prophylaxis.",
        se: "**NRTIs**: Lactic acidosis; Hepatic steatosis.\n**Zidovudine**: **Bone marrow suppression** (anemia).\n**Abacavir**: Hypersensitivity (HLA-B*5701).\n**Efavirenz**: **CNS effects** (vivid dreams/nightmares).",
        ci: "Abacavir: **HLA-B*5701 positive** (absolute CI).\nNevirapine: Women with CD4 >250 (hepatotoxicity risk).",
        pk: "**TAF (Tenofovir Alafenamide)**: Safer for bones/kidneys than older TDF.",
        pearl: "**Pharmacogenomics**: Always screen for HLA-B*5701 before starting abacavir to avoid fatal hypersensitivity."
      },
      {
        name: "Protease & Integrase Inhibitors",
        aka: "PIs: Ritonavir · Darunavir | INSTIs: Dolutegravir · Bictegravir · Raltegravir",
        summary: "PIs prevent viral maturation; INSTIs (now first-line) prevent integration into host genome.",
        moa: "**Protease Inhibitors**: Inhibit **HIV aspartyl protease** → prevent cleavage of gag-pol polyprotein → immature viral particles.\n**Integrase Inhibitors**: Block **HIV integrase** (strand transfer step) → prevent viral DNA integration.",
        use: "**PIs**: HIV regimens; **Ritonavir** as a 'PK booster' (CYP inhibition).\n**INSTIs**: First-line HIV therapy (high genetic barrier to resistance).",
        se: "**PIs**: **Metabolic syndrome** (Lipodystrophy, Insulin resistance, Dyslipidemia); Atazanavir (Kidney stones).\n**INSTIs**: Weight gain; **Dolutegravir** (Small neural tube defect risk).",
        ci: "PIs: Concurrent use with potent CYP substrates (Simvastatin).",
        pk: "**Ritonavir boosting**: Low-dose ritonavir inhibits **CYP3A4** to increase levels of other protease inhibitors.",
        pearl: "**The 'Big' Side Effects**: Protease inhibitors = Lipodystrophy; Integrase inhibitors = Weight gain."
      },
      {
        name: "HIV Entry Inhibitors",
        aka: "Maraviroc · Enfuvirtide · Ibalizumab",
        summary: "Salvage therapy for MDR-HIV that blocks viral entry into CD4 cells.",
        moa: "**Maraviroc**: **CCR5 co-receptor antagonist** → blocks gp120 binding.\n**Enfuvirtide**: Binds **gp41** → prevents fusion of viral and cell membranes.",
        use: "Treatment-experienced patients with multidrug-resistant HIV.",
        se: "**Enfuvirtide**: Painful injection site reactions (near universal).\n**Maraviroc**: Hepatotoxicity; URI symptoms.",
        ci: "**Maraviroc**: CXCR4-tropic HIV (ineffective; requires Trofile assay).",
        pk: "Enfuvirtide: SC injection only (peptide).",
        pearl: "**Maraviroc Logic**: You MUST perform a tropism test first. If the virus uses CXCR4, Maraviroc is useless."
      },
      {
        name: "Herpes & CMV Antivirals",
        aka: "Acyclovir · Valacyclovir (HSV/VZV) | Ganciclovir · Foscarnet · Cidofovir (CMV)",
        summary: "Nucleoside/pyrophosphate analogs targeting viral DNA polymerase.",
        moa: "**Acyclovir**: Prodrug activated by **viral thymidine kinase (TK)** → phosphorylated → competitive inhibition of **viral DNA polymerase**.\n**Foscarnet**: Directly inhibits the pyrophosphate binding site (bypasses TK).",
        use: "**Acyclovir/Valacyclovir**: HSV-1/2 and VZV; HSV Encephalitis (IV).\n**Ganciclovir**: CMV retinitis/colitis.\n**Foscarnet**: Resistant CMV; TK-deficient HSV.",
        se: "**Acyclovir**: Nephrotoxicity (obstructive crystalline nephropathy — hydrate!).\n**Ganciclovir**: **Bone marrow suppression** (neutropenia).\n**Foscarnet**: **Nephrotoxicity** and **Electrolyte shifts** (↓ Ca2+, ↓ Mg2+ → seizures).",
        ci: "Cidofovir: Severe renal failure.",
        pk: "Valacyclovir: Oral prodrug with 3–5x the bioavailability of acyclovir.",
        pearl: "**Acyclovir Nephroprotection**: Aggressive IV hydration is required to prevent crystals from clogging the renal tubules."
      },
      {
        name: "Influenza Antivirals",
        aka: "Oseltamivir · Zanamivir · Baloxavir",
        summary: "Reduce symptom duration if started early (<48 hr).",
        moa: "**Oseltamivir/Zanamivir**: Inhibit **Influenza Neuraminidase** → prevent viral progeny release.\n**Baloxavir**: Inhibits **cap-dependent endonuclease** → blocks mRNA synthesis.",
        use: "Influenza A and B treatment (within 48 hr) and prophylaxis.",
        se: "Oseltamivir: Nausea/Vomiting.\nZanamivir: **Bronchospasm** (inhaled).",
        ci: "Zanamivir: Asthma or COPD (airway irritant).",
        pk: "Baloxavir: Single oral dose (long t½).",
        pearl: "**Timing**: Neuraminidase inhibitors lose most of their benefit if started more than 48 hours after symptom onset."
      },
      {
        name: "Ribavirin & Interferons",
        aka: "Ribavirin · Peginterferon alfa · Interferon beta · Interferon gamma",
        summary: "Broad antivirals and immunomodulators with significant toxicity profiles.",
        moa: "**Ribavirin**: Inhibits **IMP dehydrogenase** → depletes GTP → blocks viral RNA synthesis.\n**Interferons**: Induce an **antiviral state** via JAK-STAT signaling (RNA degradation).",
        use: "**Ribavirin**: Chronic HCV (+ DAAs); severe RSV (inhaled).\n**IFN-α**: HBV, HCV, Hairy cell leukemia, Kaposi sarcoma.\n**IFN-β**: Multiple Sclerosis.\n**IFN-γ**: Chronic Granulomatous Disease (prophylaxis).",
        se: "**Ribavirin**: **Hemolytic Anemia**; Teratogenicity (Category X).\n**Interferons**: **Flu-like syndrome**; Depression/Suicidality; Neutropenia.",
        ci: "Pregnancy (Ribavirin); Decompensated Cirrhosis (IFN-α).",
        pk: "Ribavirin: Accumulates in RBCs (t½ ~40 days).",
        pearl: "**Ribavirin Contraception**: Both partners must use two forms of contraception for 6 months after stopping the drug."
      }
    ]
  },
  {
    group: "Antiparasitics",
    drugs: [
      {
        name: "Antimalarials",
        aka: "Chloroquine · Hydroxychloroquine · Mefloquine · Primaquine · Artemisinins",
        summary: "Target different stages of the Plasmodium life cycle.\nPrimaquine is required for 'radical cure'.",
        moa: "**Chloroquine**: Blocks heme polymerization → toxic heme accumulation.\n**Primaquine**: Generates ROS to kill **hepatic hypnozoites** (P. vivax/ovale).\n**Mefloquine**: Unknown (active against erythrocytic stage).",
        use: "**Uncomplicated Malaria**: Artemether-Lumefantrine (ACTs).\n**Radical Cure (Vivax/Ovale)**: Primaquine.\n**Prophylaxis**: Mefloquine (weekly); Atovaquone-Proguanil (daily).",
        se: "**Chloroquine**: Retinopathy (permanent with long-term use).\n**Primaquine**: **Hemolysis in G6PD deficiency**.\n**Mefloquine**: **Neuropsychiatric effects** (vivid dreams, anxiety, psychosis).\n**Quinine**: **Cinchonism** (tinnitus, headache).",
        ci: "G6PD deficiency (Primaquine).\nPsychiatric/Seizure history (Mefloquine).",
        pk: "Chloroquine: Long t½ (~50 days).",
        pearl: "**The Hypnozoite Rule**: If you don't give primaquine for P. vivax or P. ovale, the patient WILL relapse from dormant liver stages."
      },
      {
        name: "Anti-helminthics",
        aka: "Albendazole · Mebendazole · Ivermectin · Praziquantel · Pyrantel Pamoate",
        summary: "Target worm microtubules, membrane permeability, or neurotransmission.",
        moa: "**Benzimidazoles (Al/Mebendazole)**: Inhibit **β-tubulin** polymerization → block glucose uptake.\n**Ivermectin**: Binds **glutamate-gated Cl- channels** → paralysis.\n**Praziquantel**: Increases **Ca2+ permeability** → tegumental spasm.",
        use: "**Albendazole**: Roundworms (Enterobius, Ascaris); Neurocysticercosis.\n**Praziquantel**: **Flatworms** (Flukes/Trematodes and Tapeworms/Cestodes).\n**Ivermectin**: Strongyloides; Scabies; Onchocerciasis.",
        se: "**Ivermectin**: Mazzotti reaction (fever/rash/hypotension from dying microfilariae).\n**Praziquantel**: Seizures in neurocysticercosis (provoked inflammation).",
        ci: "Pregnancy (Albendazole).",
        pk: "Albendazole absorption increased by fatty meals.",
        pearl: "**Mnemonic**: 'Praz for Flat; Al for Round.' (Praziquantel for flatworms; Albendazole for roundworms)."
      }
    ]
  }
],
gi: [
  {
    group: "GI / Hepatic",
    drugs: [
      {
        name: "PPIs (Proton Pump Inhibitors)",
        aka: "Omeprazole · Lansoprazole · Pantoprazole · Esomeprazole · Rabeprazole · Dexlansoprazole",
        summary: "Irreversibly inhibit the H+/K+-ATPase pump for profound acid suppression.\nFirst-line for GERD, PUD, and H. pylori eradication.",
        moa: "Prodrugs activated in acidic parietal cell canaliculi → active sulfenamides.\nCovalently bind **H+/K+-ATPase (proton pump)** → irreversible inhibition.\nResult: ↓ gastric acid secretion by up to 90%.",
        use: "**GERD**: First-line therapy.\n**Peptic Ulcer Disease (PUD)**: Healing and prevention.\n**H. pylori**: Part of triple therapy (+ Clarithromycin + Amoxicillin).\n**Zollinger-Ellison Syndrome**: Used at high doses.",
        se: "**Hypomagnesemia**: Chronic use risk (tetany/arrhythmias).\n**↑ C. diff risk**: Due to ↓ gastric acid barrier.\n**Osteoporosis**: ↓ Ca2+ absorption (acid-dependent).\n**CYP2C19 Inhibition**: Omeprazole inhibits clopidogrel activation.",
        ci: "**Rilpivirine**: Requires acid for absorption.\n**High-dose Methotrexate**: PPIs ↑ MTX levels.\nChronic use without clear indication.",
        pk: "Take 30–60 min before meals (pumps must be active).\nPlasma t½ ~1–2 hr; suppression lasts 24–48 hr (irreversible binding).\n**Pantoprazole**: Preferred PPI for patients on Clopidogrel.",
        pearl: "PPIs are prodrugs requiring an active, acid-secreting pump to work. The acid suppression outlasts the plasma half-life because new pumps must be synthesized."
      },
      {
        name: "H2 Receptor Blockers",
        aka: "Famotidine · Ranitidine (recalled) · Cimetidine · Nizatidine",
        summary: "Competitive H2 antagonists that reduce histamine-stimulated acid secretion.\nUseful for on-demand or nocturnal acid breakthrough.",
        moa: "Competitive antagonism at **H2 receptors** on parietal cells.\n↓ cAMP → ↓ proton pump activity.\nResult: ~70% reduction in basal and meal-stimulated acid.",
        use: "**GERD**: Mild-moderate symptoms or on-demand relief.\n**Nocturnal Breakthrough**: Adjunct to PPI therapy.\n**Urticaria**: Combined with H1 antihistamines for allergic reactions.",
        se: "**Cimetidine**: Potent **CYP450 inhibitor** (↑ Warfarin, Theophylline); **Anti-androgenic** (gynecomastia, impotence); **CNS effects** (confusion in elderly).\n**All**: Tolerance develops within days of continuous use.",
        ci: "**Cimetidine**: Any narrow-TI CYP substrate (avoid use).\n**Renal Failure**: Requires dose reduction as all are renally cleared.",
        pk: "Renally eliminated.\n**Famotidine**: Preferred agent due to minimal drug interactions.\n**Cimetidine**: Multiple CYP interactions (1A2, 2C9, 2D6, 3A4).",
        pearl: "Famotidine has largely replaced cimetidine due to its superior safety profile. H2 blockers are less effective than PPIs because they only block one pathway of acid stimulation."
      },
      {
        name: "Ondansetron (5-HT3 Antagonist Antiemetics)",
        aka: "Ondansetron · Granisetron · Dolasetron · Palonosetron · Metoclopramide · Prochlorperazine",
        summary: "Block serotonin signals to the vomiting center.\nFirst-line for chemotherapy-induced and postoperative nausea.",
        moa: "**Ondansetron class**: Block **5-HT3 receptors** on vagal afferents and in the area postrema.\n**Metoclopramide**: **D2 antagonist** + **5-HT4 agonist** → ↑ gastric emptying (prokinetic).\n**Prochlorperazine**: D2 antagonist at CTZ.",
        use: "**CINV**: First-line for highly emetogenic chemotherapy.\n**PONV**: Postoperative nausea and vomiting.\n**Gastroparesis**: Metoclopramide (prokinetic effect).\n**Hyperemesis Gravidarum**: Ondansetron is second-line in pregnancy.",
        se: "**Ondansetron**: **QTc prolongation** (IV dose cap 32mg); Constipation.\n**Metoclopramide**: **Tardive dyskinesia** (chronic >3 mo; black box); Acute dystonia.\n**Prochlorperazine**: EPS and sedation.",
        ci: "**Ondansetron**: Congenital long QT or QTc >450ms.\n**Metoclopramide**: Bowel obstruction, Parkinson disease, or pheochromocytoma.",
        pk: "Ondansetron: Oral/IV/ODT; t½ ~4–6 hr.\n**Palonosetron**: t½ ~40 hr (preferred for multi-day chemo).\nMetoclopramide: Primarily renally cleared.",
        pearl: "For severe CINV, combine a 5-HT3 antagonist with **dexamethasone** and an **NK1 antagonist** (Aprepitant). Metoclopramide's TD risk is highest in elderly women."
      },
      {
        name: "Misoprostol & GI Mucosal Agents",
        aka: "Misoprostol · Sucralfate · Bismuth Subsalicylate · Aluminum/Magnesium Hydroxide",
        summary: "Cytoprotective agents that coat or protect the gastric mucosa.\nMisoprostol has unique obstetric applications.",
        moa: "**Misoprostol**: **PGE1 analog** → ↑ mucus/HCO3- secretion + ↓ acid; stimulates uterine contraction.\n**Sucralfate**: Polymerizes in acid → binds ulcer proteins → physical barrier.\n**Antacids**: Direct acid neutralization (Al(OH)3/Mg(OH)2).",
        use: "**Misoprostol**: Prevention of NSAID gastropathy; Cervical ripening/Labor induction.\n**Sucralfate**: Stress ulcer prophylaxis (low VAP risk).\n**Bismuth**: H. pylori quadruple therapy.\n**Antacids**: Fast-acting symptomatic heartburn relief.",
        se: "**Misoprostol**: Diarrhea and cramps; **Uterine rupture** (if used improperly).\n**Sucralfate**: Constipation (Al3+); Binds other drugs (Fluoroquinolones, Digoxin).\n**Bismuth**: Black stools/tongue.\n**Antacids**: Al(OH)3 → Constipation; Mg(OH)2 → Diarrhea.",
        ci: "**Misoprostol**: **Pregnancy** (unless induction/abortion intended).\n**Sucralfate**: Renal failure (Al accumulation).\n**Bismuth**: Aspirin allergy; Children with viral illness (Reye Syndrome).",
        pk: "Misoprostol: Oral or vaginal; t½ ~20–40 min.\nSucralfate: Requires acid to polymerize; take on empty stomach.",
        pearl: "Sucralfate should NOT be given with PPIs or antacids because it requires an acidic environment to form its protective coating."
      },
      {
        name: "Antidiarrheals & Loperamide",
        aka: "Loperamide · Diphenoxylate/Atropine · Bismuth Subsalicylate · Cholestyramine",
        summary: "Slow GI motility via peripheral opioid receptors.\nLoperamide is preferred for non-infectious diarrhea.",
        moa: "**Loperamide**: Binds **peripheral μ-opioid receptors** → ↓ peristalsis + ↑ sphincter tone.\n**Diphenoxylate**: Peripheral μ-agonist; combined with atropine to deter abuse.\n**Cholestyramine**: Bile acid sequestrant.",
        use: "**Nonspecific Diarrhea**: Travelers' diarrhea, IBS-D.\n**Bile Acid Diarrhea**: Post-cholecystectomy (Cholestyramine).\n**High-output ileostomies**: Loperamide reduces volume.",
        se: "**Loperamide**: **Toxic megacolon** (if used in infectious diarrhea); QRS widening in massive overdose.\n**Diphenoxylate**: CNS depression and anticholinergic effects (dry mouth).\n**Cholestyramine**: Constipation; Binds drugs (Warfarin, Digoxin).",
        ci: "**Infectious Diarrhea**: Bloody stool/fever (Shigella, Salmonella, STEC) → risk of **Toxic Megacolon** and **HUS**.\n**STEC (O157:H7)**: Motility inhibition traps Shiga toxin.",
        pk: "**Loperamide**: **P-gp substrate** (keeps drug out of CNS at therapeutic doses); t½ ~10–14 hr.\nCholestyramine: Not absorbed; acts only in the GI lumen.",
        pearl: "Never use loperamide for bloody diarrhea. The entrapment of pathogens or toxins can lead to catastrophic colon dilation or hemolytic uremic syndrome."
      }
    ]
  },
  {
    group: "GI / Hepatic",
    drugs: [
      {
        name: "Osmotic Laxatives",
        aka: "Polyethylene Glycol (PEG) · Lactulose · Magnesium Hydroxide · Magnesium Citrate · Sodium Phosphate",
        summary: "Draw water into the lumen to stimulate defecation.\nLactulose is essential for managing hepatic encephalopathy.",
        moa: "**PEG**: Non-absorbable polymer → retains water in lumen via osmosis.\n**Lactulose**: Gut bacteria convert it to lactic acid → acidifies colon → **traps NH4+** (ion trapping) → ↓ systemic ammonia.\n**Saline Laxatives**: Osmotic effect + ↑ CCK release.",
        use: "**PEG (MiraLAX)**: Chronic constipation (safe/first-line).\n**PEG (GoLYTELY)**: Colonoscopy bowel prep (isotonic).\n**Lactulose**: **Hepatic Encephalopathy** (titrate to 2–3 stools/day).\n**Sodium Phosphate**: Bowel prep (not for CKD).",
        se: "**Lactulose**: Flatulence and bloating.\n**Magnesium**: **Hypermagnesemia** in renal failure.\n**Sodium Phosphate**: **Phosphate nephropathy** (AKI risk).",
        ci: "**Renal Failure**: Avoid Magnesium and Sodium Phosphate.\n**Sodium Phosphate**: Elderly/CKD/HF patients (electrolyte shift risk).\n**Bowel Obstruction**.",
        pk: "PEG: Not absorbed or metabolized; excreted intact.\nLactulose: Onset 24–48 hr for ammonia reduction.",
        pearl: "Lactulose works for hepatic encephalopathy by turning ammonia (NH3) into ammonium (NH4+). NH4+ is charged and cannot be reabsorbed, so it is 'trapped' and excreted in the stool."
      }
    ]
  }
],
gi: [
  {
    group: "GI / Hepatic",
    drugs: [
      {
        name: "PPIs (Proton Pump Inhibitors)",
        aka: "Omeprazole · Lansoprazole · Pantoprazole · Esomeprazole · Rabeprazole · Dexlansoprazole",
        summary: "Irreversibly inhibit the H+/K+-ATPase pump for profound acid suppression.\nFirst-line for GERD, PUD, and H. pylori eradication.",
        moa: "Prodrugs activated in acidic parietal cell canaliculi → active sulfenamides.\nCovalently bind **H+/K+-ATPase (proton pump)** → irreversible inhibition.\nResult: ↓ gastric acid secretion by up to 90%.",
        use: "**GERD**: First-line therapy.\n**Peptic Ulcer Disease (PUD)**: Healing and prevention.\n**H. pylori**: Part of triple therapy (+ Clarithromycin + Amoxicillin).\n**Zollinger-Ellison Syndrome**: Used at high doses.",
        se: "**Hypomagnesemia**: Chronic use risk (tetany/arrhythmias).\n**↑ C. diff risk**: Due to ↓ gastric acid barrier.\n**Osteoporosis**: ↓ Ca2+ absorption (acid-dependent).\n**CYP2C19 Inhibition**: Omeprazole inhibits clopidogrel activation.",
        ci: "**Rilpivirine**: Requires acid for absorption.\n**High-dose Methotrexate**: PPIs ↑ MTX levels.\nChronic use without clear indication.",
        pk: "Take 30–60 min before meals (pumps must be active).\nPlasma t½ ~1–2 hr; suppression lasts 24–48 hr (irreversible binding).\n**Pantoprazole**: Preferred PPI for patients on Clopidogrel.",
        pearl: "PPIs are prodrugs requiring an active, acid-secreting pump to work. The acid suppression outlasts the plasma half-life because new pumps must be synthesized."
      },
      {
        name: "H2 Receptor Blockers",
        aka: "Famotidine · Ranitidine (recalled) · Cimetidine · Nizatidine",
        summary: "Competitive H2 antagonists that reduce histamine-stimulated acid secretion.\nUseful for on-demand or nocturnal acid breakthrough.",
        moa: "Competitive antagonism at **H2 receptors** on parietal cells.\n↓ cAMP → ↓ proton pump activity.\nResult: ~70% reduction in basal and meal-stimulated acid.",
        use: "**GERD**: Mild-moderate symptoms or on-demand relief.\n**Nocturnal Breakthrough**: Adjunct to PPI therapy.\n**Urticaria**: Combined with H1 antihistamines for allergic reactions.",
        se: "**Cimetidine**: Potent **CYP450 inhibitor** (↑ Warfarin, Theophylline); **Anti-androgenic** (gynecomastia, impotence); **CNS effects** (confusion in elderly).\n**All**: Tolerance develops within days of continuous use.",
        ci: "**Cimetidine**: Any narrow-TI CYP substrate (avoid use).\n**Renal Failure**: Requires dose reduction as all are renally cleared.",
        pk: "Renally eliminated.\n**Famotidine**: Preferred agent due to minimal drug interactions.\n**Cimetidine**: Multiple CYP interactions (1A2, 2C9, 2D6, 3A4).",
        pearl: "Famotidine has largely replaced cimetidine due to its superior safety profile. H2 blockers are less effective than PPIs because they only block one pathway of acid stimulation."
      },
      {
        name: "Ondansetron (5-HT3 Antagonist Antiemetics)",
        aka: "Ondansetron · Granisetron · Dolasetron · Palonosetron · Metoclopramide · Prochlorperazine",
        summary: "Block serotonin signals to the vomiting center.\nFirst-line for chemotherapy-induced and postoperative nausea.",
        moa: "**Ondansetron class**: Block **5-HT3 receptors** on vagal afferents and in the area postrema.\n**Metoclopramide**: **D2 antagonist** + **5-HT4 agonist** → ↑ gastric emptying (prokinetic).\n**Prochlorperazine**: D2 antagonist at CTZ.",
        use: "**CINV**: First-line for highly emetogenic chemotherapy.\n**PONV**: Postoperative nausea and vomiting.\n**Gastroparesis**: Metoclopramide (prokinetic effect).\n**Hyperemesis Gravidarum**: Ondansetron is second-line in pregnancy.",
        se: "**Ondansetron**: **QTc prolongation** (IV dose cap 32mg); Constipation.\n**Metoclopramide**: **Tardive dyskinesia** (chronic >3 mo; black box); Acute dystonia.\n**Prochlorperazine**: EPS and sedation.",
        ci: "**Ondansetron**: Congenital long QT or QTc >450ms.\n**Metoclopramide**: Bowel obstruction, Parkinson disease, or pheochromocytoma.",
        pk: "Ondansetron: Oral/IV/ODT; t½ ~4–6 hr.\n**Palonosetron**: t½ ~40 hr (preferred for multi-day chemo).\nMetoclopramide: Primarily renally cleared.",
        pearl: "For severe CINV, combine a 5-HT3 antagonist with **dexamethasone** and an **NK1 antagonist** (Aprepitant). Metoclopramide's TD risk is highest in elderly women."
      },
      {
        name: "Misoprostol & GI Mucosal Agents",
        aka: "Misoprostol · Sucralfate · Bismuth Subsalicylate · Aluminum/Magnesium Hydroxide",
        summary: "Cytoprotective agents that coat or protect the gastric mucosa.\nMisoprostol has unique obstetric applications.",
        moa: "**Misoprostol**: **PGE1 analog** → ↑ mucus/HCO3- secretion + ↓ acid; stimulates uterine contraction.\n**Sucralfate**: Polymerizes in acid → binds ulcer proteins → physical barrier.\n**Antacids**: Direct acid neutralization (Al(OH)3/Mg(OH)2).",
        use: "**Misoprostol**: Prevention of NSAID gastropathy; Cervical ripening/Labor induction.\n**Sucralfate**: Stress ulcer prophylaxis (low VAP risk).\n**Bismuth**: H. pylori quadruple therapy.\n**Antacids**: Fast-acting symptomatic heartburn relief.",
        se: "**Misoprostol**: Diarrhea and cramps; **Uterine rupture** (if used improperly).\n**Sucralfate**: Constipation (Al3+); Binds other drugs (Fluoroquinolones, Digoxin).\n**Bismuth**: Black stools/tongue.\n**Antacids**: Al(OH)3 → Constipation; Mg(OH)2 → Diarrhea.",
        ci: "**Misoprostol**: **Pregnancy** (unless induction/abortion intended).\n**Sucralfate**: Renal failure (Al accumulation).\n**Bismuth**: Aspirin allergy; Children with viral illness (Reye Syndrome).",
        pk: "Misoprostol: Oral or vaginal; t½ ~20–40 min.\nSucralfate: Requires acid to polymerize; take on empty stomach.",
        pearl: "Sucralfate should NOT be given with PPIs or antacids because it requires an acidic environment to form its protective coating."
      },
      {
        name: "Antidiarrheals & Loperamide",
        aka: "Loperamide · Diphenoxylate/Atropine · Bismuth Subsalicylate · Cholestyramine",
        summary: "Slow GI motility via peripheral opioid receptors.\nLoperamide is preferred for non-infectious diarrhea.",
        moa: "**Loperamide**: Binds **peripheral μ-opioid receptors** → ↓ peristalsis + ↑ sphincter tone.\n**Diphenoxylate**: Peripheral μ-agonist; combined with atropine to deter abuse.\n**Cholestyramine**: Bile acid sequestrant.",
        use: "**Nonspecific Diarrhea**: Travelers' diarrhea, IBS-D.\n**Bile Acid Diarrhea**: Post-cholecystectomy (Cholestyramine).\n**High-output ileostomies**: Loperamide reduces volume.",
        se: "**Loperamide**: **Toxic megacolon** (if used in infectious diarrhea); QRS widening in massive overdose.\n**Diphenoxylate**: CNS depression and anticholinergic effects (dry mouth).\n**Cholestyramine**: Constipation; Binds drugs (Warfarin, Digoxin).",
        ci: "**Infectious Diarrhea**: Bloody stool/fever (Shigella, Salmonella, STEC) → risk of **Toxic Megacolon** and **HUS**.\n**STEC (O157:H7)**: Motility inhibition traps Shiga toxin.",
        pk: "**Loperamide**: **P-gp substrate** (keeps drug out of CNS at therapeutic doses); t½ ~10–14 hr.\nCholestyramine: Not absorbed; acts only in the GI lumen.",
        pearl: "Never use loperamide for bloody diarrhea. The entrapment of pathogens or toxins can lead to catastrophic colon dilation or hemolytic uremic syndrome."
      }
    ]
  },
  {
    group: "GI / Hepatic",
    drugs: [
      {
        name: "Osmotic Laxatives",
        aka: "Polyethylene Glycol (PEG) · Lactulose · Magnesium Hydroxide · Magnesium Citrate · Sodium Phosphate",
        summary: "Draw water into the lumen to stimulate defecation.\nLactulose is essential for managing hepatic encephalopathy.",
        moa: "**PEG**: Non-absorbable polymer → retains water in lumen via osmosis.\n**Lactulose**: Gut bacteria convert it to lactic acid → acidifies colon → **traps NH4+** (ion trapping) → ↓ systemic ammonia.\n**Saline Laxatives**: Osmotic effect + ↑ CCK release.",
        use: "**PEG (MiraLAX)**: Chronic constipation (safe/first-line).\n**PEG (GoLYTELY)**: Colonoscopy bowel prep (isotonic).\n**Lactulose**: **Hepatic Encephalopathy** (titrate to 2–3 stools/day).\n**Sodium Phosphate**: Bowel prep (not for CKD).",
        se: "**Lactulose**: Flatulence and bloating.\n**Magnesium**: **Hypermagnesemia** in renal failure.\n**Sodium Phosphate**: **Phosphate nephropathy** (AKI risk).",
        ci: "**Renal Failure**: Avoid Magnesium and Sodium Phosphate.\n**Sodium Phosphate**: Elderly/CKD/HF patients (electrolyte shift risk).\n**Bowel Obstruction**.",
        pk: "PEG: Not absorbed or metabolized; excreted intact.\nLactulose: Onset 24–48 hr for ammonia reduction.",
        pearl: "Lactulose works for hepatic encephalopathy by turning ammonia (NH3) into ammonium (NH4+). NH4+ is charged and cannot be reabsorbed, so it is 'trapped' and excreted in the stool."
      }
    ]
  },
],

toxicology: [
  {
    group: "Toxicology",
    drugs: [
      {
        name: "Drug Antidotes (High-Yield Pairs)",
        aka: "Reversal agents",
        summary: "Specific antidotes for life-threatening poisonings.\nCrucial for Step 1 identification of paired toxin/antidote.",
        moa: "**Acetaminophen** → **N-Acetylcysteine** (restores glutathione).\n**Benzodiazepines** → **Flumazenil** (competitive antagonist).\n**Opioids** → **Naloxone** (competitive antagonist).\n**Organophosphates** → **Atropine + Pralidoxime** (block DUMBBELLS + regenerate AChE).\n**Beta-blockers** → **Glucagon** (bypasses β-receptor → ↑ cAMP).\n**Methemoglobinemia** → **Methylene Blue** (reduces Fe3+ to Fe2+).\n**Digoxin** → **Digoxin-specific Fab**.\n**Cyanide** → **Hydroxocobalamin** (forms cyanocobalamin).",
        use: "Emergency management of clinical toxicity.",
        se: "Flumazenil: Precipitates withdrawal seizures.\nMethylene Blue: Worsens hemolysis in G6PD deficiency.\nProtamine: Anaphylaxis in NPH insulin users.",
        ci: "Physostigmine in TCA overdose (seizure/arrhythmia risk).\nFlumazenil in chronic benzo users.",
        pk: "Naloxone/Flumazenil: Short t½; require repeated dosing/infusion.",
        pearl: "Glucagon for β-blocker OD works because glucagon receptors also stimulate adenylyl cyclase, providing a back-door to cAMP production."
      },
      {
        name: "Acetaminophen Toxicity & N-Acetylcysteine",
        aka: "NAC",
        summary: "Manages the toxic NAPQI metabolite produced in overdose.\nRumack-Matthew nomogram guides treatment based on time post-ingestion.",
        moa: "**Acetaminophen toxicity**: **NAPQI** (via CYP2E1) depletes glutathione → zone 3 hepatic necrosis.\n**NAC**: Provides **cysteine** → replenishes glutathione → detoxifies NAPQI.",
        use: "**Acetaminophen Overdose**: Most effective within 8 hours.\n**ALF**: Empiric use in non-acetaminophen liver failure.",
        se: "**Anaphylactoid reaction**: Non-IgE histamine release with IV loading dose.\nSulfur smell (oral).",
        ci: "None in cases of suspected toxic ingestion.",
        pk: "Rumack-Matthew nomogram starts at the 4-hour mark (threshold: 150 µg/mL).",
        pearl: "NAC is so effective that it should be given even if the patient presents late (>24 hr) or with an unknown time of ingestion."
      },
      {
        name: "Ethanol Metabolism & Alcohol Antidotes",
        aka: "Disulfiram · Naltrexone · Fomepizole · Thiamine",
        summary: "Management of alcohol use disorder and toxic alcohol poisoning.",
        moa: "**Disulfiram**: Inhibits **aldehyde dehydrogenase** → acetaldehyde accumulation → flushing/vomiting.\n**Naltrexone**: Blocks **μ-opioid receptors** → ↓ alcohol reward.\n**Fomepizole**: Inhibits **Alcohol Dehydrogenase** → prevents conversion of methanol/ethylene glycol to toxic acids.\n**Thiamine**: Essential cofactor for **transketolase**.",
        use: "**Methanol/Ethylene Glycol**: Fomepizole (prevents blindness/renal failure).\n**Wernicke Encephalopathy**: **Thiamine FIRST** (before glucose).",
        se: "Disulfiram: Cardiovascular collapse with alcohol ingestion.\nNaltrexone: Precipitates withdrawal if opioids are used.",
        ci: "Naltrexone: Active opioid use.",
        pk: "Fomepizole: Dosed every 12 hr; removed by dialysis.",
        pearl: "**The Golden Rule**: Give thiamine before glucose in every alcoholic to prevent precipitating Wernicke's via rapid ATP exhaustion."
      }
    ]
  }
],

};
