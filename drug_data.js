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
        summary: "Direct **Muscarinic Agonists** activating parasympathetic end-organs.\nResistant to **AChE** hydrolysis.",
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
        summary: "Reversibly inhibit **AChE** to ↑ synaptic ACh at muscarinic and nicotinic receptors. Used for myasthenia gravis, Alzheimer dementia, and NMB reversal.",
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
        summary: "Competitively block **muscarinic receptors** to reduce parasympathetic tone. 'Hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter.'",
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
        summary: "Endogenous catecholamines — epinephrine for **anaphylaxis and cardiac arrest**; norepinephrine is first-line **vasopressor in septic shock**.",
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
        summary: "**Dopamine** has dose-dependent receptor selectivity from renal vasodilation to vasoconstriction; **dobutamine** is a pure inodilator. Both used for cardiac pump failure.",
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
        summary: "Selective adrenergic agonists with **opposite hemodynamic profiles**: phenylephrine raises BP with reflex bradycardia; isoproterenol raises HR with hypotension.",
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
        summary: "Competitive **β-adrenergic antagonists** reducing HR, contractility, and renin release. Cornerstone therapy for hypertension, heart failure, arrhythmias, and post-MI cardioprotection.",
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
        summary: "**α-adrenergic antagonists** causing arterial dilation and urogenital smooth muscle relaxation. Used for BPH, hypertension, and pheochromocytoma.",
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
        summary: "Reversibly block **voltage-gated Na⁺ channels** to prevent action potential propagation. Used for local/regional/neuraxial anesthesia and ventricular arrhythmias (lidocaine).",
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
        summary: "Block NMJ transmission for intubation and surgical relaxation — **depolarizing** (succinylcholine) vs. **non-depolarizing** (all others) with different reversal strategies.",
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
    group: "RAAS & Hypertension",
    drugs: [
      {
        name: "ACE Inhibitors",
        aka: "Lisinopril · Enalapril · Captopril · Ramipril · Benazepril · Fosinopril · Quinapril · Perindopril",
        summary: "Block angiotensin-converting enzyme to reduce angiotensin II and aldosterone, lowering blood pressure and reducing cardiac remodeling. First-line for hypertension, heart failure with reduced EF, diabetic nephropathy, and post-MI.",
        moa: "Inhibit **angiotensin-converting enzyme (ACE)** → ↓ Ang I→II conversion → ↓ vasoconstriction + ↓ aldosterone → ↓ BP + ↓ preload/afterload; ↑ bradykinin (ACE also degrades bradykinin)",
        use: "Hypertension (first-line); HFrEF (↓ mortality, ↓ remodeling); post-MI with reduced EF; diabetic nephropathy (↓ proteinuria, slow CKD progression, esp. Type 1 DM); CKD with proteinuria",
        se: "**Dry cough** (↑ bradykinin — most common reason to switch to ARB); **angioedema** (bradykinin-mediated, can be life-threatening — absolute contraindication to rechallenge); **hyperkalemia** (↓ aldosterone); **↑ creatinine** (especially with bilateral renal artery stenosis); teratogenic (fetal renal toxicity — Category D/X in 2nd/3rd trimester)",
        ci: "Pregnancy (renal tubular dysgenesis, oligohydramnios — Category D/X); history of ACE-inhibitor–induced angioedema; bilateral renal artery stenosis (GFR depends on Ang II constriction of efferent arteriole); hyperkalemia; concurrent use with aliskiren in DM/CKD",
        pk: "Most are prodrugs (enalapril→enalaprilat, ramipril→ramiprilat) activated by hepatic hydrolysis\n**Captopril:** active drug, t½ ~2 hr, renal excretion, 3× daily\n**Lisinopril:** not a prodrug, hydrophilic, renal excretion, once daily\nMost renally eliminated — dose-reduce in CKD",
        pearl: "**Cough vs. angioedema:** Cough (↑ bradykinin in airways) is common (~10–15%) and improves with switch to ARB. Angioedema (↑ bradykinin in submucosa) is rare but dangerous — do NOT switch to ARB (same bradykinin mechanism). Switch to CCB or thiazide for the ACE-intolerant patient who develops angioedema."
      },
      {
        name: "ARBs (Angiotensin Receptor Blockers)",
        aka: "Losartan (Cozaar) · Valsartan (Diovan) · Irbesartan · Candesartan · Olmesartan · Telmisartan · Azilsartan",
        summary: "Block the AT1 angiotensin II receptor to reduce vasoconstriction and aldosterone without affecting bradykinin. Preferred alternative to ACE inhibitors when cough or angioedema occur.",
        moa: "Competitive antagonism at **AT1 (angiotensin II type 1) receptor** → ↓ vasoconstriction, ↓ aldosterone secretion, ↓ cardiac remodeling; no effect on bradykinin degradation (no cough/angioedema via bradykinin)",
        use: "Hypertension; HFrEF (alternative to ACEi, equally effective); post-MI; diabetic nephropathy (Type 2 DM — losartan/irbesartan reduce ESRD); ACEi-induced cough (switch to ARB); stroke prevention (losartan in HTN with LVH)",
        se: "**Hyperkalemia** (↓ aldosterone); **↑ creatinine**; fetal toxicity (same as ACEi — avoid in pregnancy); no cough (does not affect bradykinin); angioedema (rare, bradykinin-independent mechanism — do NOT rechallenge if occurs with ACEi)",
        ci: "Pregnancy; bilateral renal artery stenosis; hyperkalemia; concurrent use with ACEi + aliskiren triple combination (↑ adverse events without benefit — ONTARGET trial)",
        pk: "**Losartan:** oral, hepatic metabolism (CYP2C9 to active metabolite E-3174), t½ of metabolite ~6–9 hr; also uricosuric (lowers urate — useful in gout + HTN)\n**Valsartan:** minimal hepatic metabolism, biliary excretion\nAll once-daily oral dosing; most hepatically eliminated — safer in CKD than ACEi for drug accumulation",
        pearl: "**ARBs are NOT better than ACEi — they are equivalent** in mortality for HF/post-MI. They are preferred only when ACEi causes **cough**. Losartan uniquely **lowers uric acid** (blocks URAT1 transporter) — it's the preferred ARB in a hypertensive patient with gout. Do NOT combine ACEi + ARB (dual RAAS blockade ↑ AKI/hyperkalemia without CV benefit)."
      },
      {
        name: "Aliskiren",
        aka: "Aliskiren (Tekturna)",
        summary: "Direct renin inhibitor that blocks the first and rate-limiting step of the RAAS cascade. Used for hypertension but contraindicated in combination with ACEi or ARBs in diabetics or CKD.",
        moa: "Directly inhibits **renin** → ↓ cleavage of angiotensinogen to Ang I → ↓ downstream Ang II and aldosterone",
        use: "Hypertension (monotherapy or add-on); limited role due to contraindication with ACEi/ARBs in high-risk patients",
        se: "Hyperkalemia, ↑ creatinine, diarrhea (most common GI effect), angioedema (rare); teratogenic",
        ci: "Pregnancy; combination with ACEi or ARB in patients with diabetes or CKD (FDA black box — ↑ renal failure, hyperkalemia, hypotension)",
        pk: "Oral, poor bioavailability (~3%); t½ ~40 hr (longest RAAS agent); renal excretion; high-fat meals reduce absorption. CYP3A4 substrate; P-gp substrate — avoid cyclosporine.",
        pearl: "**Aliskiren uniquely lowers plasma renin activity (PRA)** — ACEi/ARBs cause compensatory ↑ renin via feedback. However, in clinical trials (ALTITUDE), adding aliskiren to ACEi/ARB in diabetic CKD increased adverse outcomes without mortality benefit. It's mainly a back-pocket agent for ACEi/ARB-intolerant patients."
      },
      {
        name: "Hydralazine & Direct Vasodilators",
        aka: "Hydralazine (Apresoline) · Minoxidil · Diazoxide",
        summary: "Direct-acting arteriolar vasodilators that reduce afterload. Hydralazine plus nitrates is an alternative to ACEi/ARBs in HFrEF; minoxidil is used for refractory hypertension and hair loss.",
        moa: "**Hydralazine:** increases **cGMP** in vascular smooth muscle → arteriolar vasodilation (preferential) → ↓ afterload; exact mechanism unclear (possible ↑ NO). **Minoxidil:** opens **K⁺ ATP channels** → membrane hyperpolarization → arteriolar vasodilation",
        use: "**Hydralazine:** severe hypertension in pregnancy (IV — safe), hypertensive emergency\n**Hydralazine + isosorbide dinitrate:** HFrEF in African Americans (A-HeFT trial — ↓ mortality) or ACEi/ARB-intolerant\n**Minoxidil:** severe refractory HTN, topical for androgenic alopecia",
        se: "**Reflex tachycardia** (↓ BP → ↑ SNS → ↑ HR); fluid retention; Hydralazine: **drug-induced lupus** (slow acetylators at highest risk — ANA+, anti-histone antibodies — resolves on stopping); Minoxidil: hypertrichosis (topical and systemic), pericardial effusion, severe fluid retention",
        ci: "Hydralazine: severe tachycardia, dissecting aortic aneurysm, CAD (reflex tachycardia worsens ischemia); Minoxidil: pheochromocytoma (reflex tachycardia)",
        pk: "**Hydralazine:** oral or IV, t½ ~1 hr, acetylated in liver (slow acetylators — higher plasma levels, ↑ lupus risk); active drug (not prodrug)\n**Minoxidil:** oral or topical, t½ ~4 hr, hepatic sulfation to active minoxidil sulfate",
        pearl: "**Drug-induced lupus triad with hydralazine:** slow acetylator + high dose + female sex = highest risk. Features: arthralgia, serositis, rash, ANA+, **anti-histone antibodies** (vs. idiopathic lupus which has anti-dsDNA/anti-Sm). Crucially, CNS and renal involvement are rare in drug-induced lupus."
      },
    ]
  },
  {
    group: "Diuretics",
    drugs: [
      {
        name: "Loop Diuretics",
        aka: "Furosemide (Lasix) · Bumetanide · Torsemide · Ethacrynic Acid",
        summary: "Most potent diuretics; block the Na-K-2Cl cotransporter in the thick ascending limb. First-line for acute pulmonary edema, volume overload in heart failure, and hypercalcemia.",
        moa: "Inhibit **Na⁺-K⁺-2Cl⁻ cotransporter (NKCC2)** in the thick ascending loop of Henle → ↓ medullary osmotic gradient → ↑ water, Na⁺, K⁺, Cl⁻, Ca²⁺, Mg²⁺ excretion",
        use: "Acute pulmonary edema (IV furosemide — immediate venodilation before diuresis); chronic HF; nephrotic syndrome; cirrhosis with ascites\n**Hypercalcemia:** saline + furosemide\nHypertensive emergency; SIADH (adjunct)\n**Ethacrynic acid:** sulfa-allergic patients (only non-sulfonamide loop diuretic)",
        se: "**Hypokalemia** (most tested) → arrhythmias; **hyponatremia**; metabolic **alkalosis** (↑ H⁺ excretion); **ototoxicity** (especially IV high-dose, synergistic with aminoglycosides); **hypomagnesemia**; **hyperuricemia** (gout); hypocalcemia (unlike thiazides); dehydration/azotemia",
        ci: "Anuria; severe electrolyte depletion; sulfa allergy (furosemide, bumetanide, torsemide — use ethacrynic acid instead)",
        pk: "**Furosemide:** oral bioavailability variable (10–100%), t½ ~1–2 hr, renal secretion (acts from luminal side); IV onset ~5 min\n**Torsemide:** better oral bioavailability (~80%), hepatic metabolism (longer effective duration)\n**Bumetanide:** 40× more potent by weight than furosemide",
        pearl: "**'Loops Lose calcium' — thiazides retain it.** Loop diuretics block Ca²⁺ reabsorption in the TAL → hypocalcemia (useful in hypercalcemia). Thiazides enhance Ca²⁺ reabsorption in DCT → hypercalcemia (useful in calcium nephrolithiasis). This reciprocal effect is a classic Step 1 distinction."
      },
      {
        name: "Thiazide Diuretics",
        aka: "Hydrochlorothiazide (HCTZ) · Chlorthalidone · Metolazone · Indapamide",
        summary: "Block Na-Cl cotransporter in the distal convoluted tubule, causing moderate natriuresis. First-line for uncomplicated hypertension and prevention of calcium nephrolithiasis.",
        moa: "Inhibit **Na⁺-Cl⁻ cotransporter (NCC)** in the distal convoluted tubule → ↑ Na⁺/water excretion; ↑ Ca²⁺ reabsorption (Na⁺ depletion → ↑ basolateral Na-Ca exchange)",
        use: "Hypertension (first-line, especially in elderly/Black patients/with osteoporosis); calcium nephrolithiasis (↓ urinary Ca²⁺ excretion); nephrogenic diabetes insipidus (paradoxical — mild volume depletion → ↑ proximal reabsorption → ↓ distal delivery → ↓ urine volume); osteoporosis (reduces urinary Ca loss)",
        se: "**Hypokalemia** (→ alkalosis); **hyponatremia** (most common electrolyte cause of serious hyponatremia in elderly); **hyperglycemia** (↓ insulin secretion); **hypercalcemia** (↑ Ca²⁺ reabsorption); **hyperlipidemia** (↑ LDL, ↑ TG); **hyperuricemia** (gout); sulfa allergy cross-reactivity",
        ci: "Anuria; sulfa allergy (HCTZ is a sulfonamide derivative — use chlorthalidone, a non-sulfonamide, in sulfa-allergic); gout (exacerbates hyperuricemia — relative CI); hyponatremia",
        pk: "**HCTZ:** oral, t½ ~6–15 hr, renally secreted, ineffective in GFR <30 mL/min (use loop instead)\n**Chlorthalidone:** longer t½ (~40–60 hr) — preferred for sustained BP control\n**Metolazone:** acts in proximal tubule too, effective in low GFR (synergistic with loop diuretics for refractory edema)",
        pearl: "**Thiazides cause hypo- everything except Ca²⁺:** Hyponatremia, Hypokalemia, Hypochloremia, metabolic alkalosis, Hyperlipidemia + **Hyper-**: calcium, glucose, uric acid. The mnemonic **HyperGLUC** (Glucose, Lipids, Uric acid, Calcium) covers the 'hypers'. Chlorthalidone has stronger evidence than HCTZ for CV outcomes (ALLHAT trial)."
      },
      {
        name: "K⁺-Sparing Diuretics",
        aka: "Spironolactone (Aldactone) · Eplerenone (Inspra) · Amiloride · Triamterene",
        summary: "Weak diuretics that retain potassium by blocking aldosterone action or epithelial sodium channels. Spironolactone and eplerenone reduce mortality in heart failure and primary hyperaldosteronism.",
        moa: "**Spironolactone/eplerenone:** competitive antagonists at **mineralocorticoid (aldosterone) receptors** in collecting duct → ↓ Na⁺ reabsorption + ↓ K⁺ secretion. **Amiloride/triamterene:** directly block **epithelial Na⁺ channels (ENaC)** in collecting duct → same net effect",
        use: "**Spironolactone/Eplerenone:** HFrEF (↓ mortality post-MI with HF, RALES/EPHESUS trials); primary hyperaldosteronism/Conn syndrome (drug of choice or bridge to surgery)\nCombined with loop/thiazide to prevent hypokalemia; hepatic cirrhosis with ascites\n**Spironolactone:** polycystic ovary syndrome (anti-androgen)\n**Amiloride:** Liddle syndrome (targets ENaC directly)",
        se: "**Hyperkalemia** (dangerous — monitor K⁺, avoid in CKD/high K⁺ diet); Spironolactone: **gynecomastia** and menstrual irregularities (anti-androgen/progestogenic — eplerenone is selective, less endocrine SE); Triamterene: crystalluria/nephrolithiasis",
        ci: "Hyperkalemia (K⁺ >5.5 mEq/L); severe renal failure (anuria/oliguria — dangerous hyperkalemia); concurrent ACEi + ARB + aldosterone antagonist triple combination (↑↑ hyperkalemia risk)",
        pk: "**Spironolactone:** oral, hepatic metabolism to active metabolite canrenone, t½ of metabolite ~17 hr (slow onset of effect — days to weeks for full effect)\n**Eplerenone:** more selective, less first-pass, t½ ~4–6 hr, CYP3A4 substrate\n**Amiloride/Triamterene:** renal excretion, onset faster than spironolactone",
        pearl: "**Spironolactone's mortality benefit in HF (RALES)** was demonstrated at low doses (25 mg) — far below its antihypertensive dose. The benefit is anti-fibrotic/anti-remodeling via aldosterone receptor blockade in the myocardium, not just diuresis. Monitor **K⁺ and creatinine** within 1 week of starting in HF (high hyperkalemia risk with ACEi/ARBs)."
      },
      {
        name: "Carbonic Anhydrase Inhibitors",
        aka: "Acetazolamide (Diamox) · Dorzolamide (Trusopt, topical) · Brinzolamide (topical) · Methazolamide",
        summary: "Inhibit carbonic anhydrase in the proximal tubule and ciliary body, causing bicarbonate wasting and reduced intraocular pressure. Used for glaucoma, altitude sickness, and metabolic alkalosis.",
        moa: "Inhibit **carbonic anhydrase (CA)** → ↓ H⁺/HCO₃⁻ production → ↓ Na⁺-H⁺ exchange in PCT → ↑ HCO₃⁻, Na⁺, K⁺ excretion; in ciliary body: ↓ aqueous humor production → ↓ IOP",
        use: "**Open-angle glaucoma:** topical dorzolamide/brinzolamide\n**Acute angle-closure glaucoma:** acetazolamide IV — reduces IOP rapidly\n**Altitude sickness:** prevention and treatment (acetazolamide — metabolic acidosis → ↑ respiratory drive)\n**Idiopathic intracranial hypertension** (pseudotumor cerebri)\nCorrect metabolic alkalosis (rare)",
        se: "**Metabolic acidosis** (HCO₃⁻ wasting — hyperchloremic, normal anion gap); **hypokalemia**; **sulfa allergy** cross-reactivity; kidney stones (↓ urinary citrate; alkaline urine → Ca-phosphate stones); drowsiness, paresthesias (tingling in extremities — common, benign); teratogenic (not for use in pregnancy)",
        ci: "Sulfa allergy; hepatic cirrhosis (↑ NH₃ — ↓ acid → less NH₄⁺ trapped in urine → ↑ serum ammonia); severe acidosis; chronic obstructive pulmonary disease (worsens acidosis → reduced respiratory compensation); hypokalemia",
        pk: "**Acetazolamide:** oral/IV, t½ ~2–4 hr, renal excretion (unchanged), effective only when GFR adequate\n**Dorzolamide/Brinzolamide:** topical ophthalmic — minimal systemic absorption, avoids systemic SE\nOnset of IOP reduction: topical 1–2 hr, oral 1–2 hr for acetazolamide",
        pearl: "**Acetazolamide for altitude sickness** works by causing metabolic acidosis → stimulates peripheral chemoreceptors → ↑ respiratory drive → compensatory respiratory alkalosis → net ↑ in tissue oxygenation. Start 1–2 days before ascent. The sulfa cross-reactivity is theoretical in most patients but should be checked."
      },
      {
        name: "Mannitol",
        aka: "Mannitol (Osmitrol)",
        summary: "Osmotic diuretic that reduces intracranial and intraocular pressure by drawing water from the CNS into the vasculature. Used emergently for cerebral edema and acute glaucoma.",
        moa: "**Osmotic agent** in proximal tubule and loop of Henle → ↓ water reabsorption → ↑ urine output; in cerebral edema: ↑ plasma osmolality → draws fluid from brain tissue into vasculature",
        use: "Elevated intracranial pressure (traumatic brain injury, herniation syndromes — IV bolus); acute angle-closure glaucoma (pre-op IOP reduction); prevention of acute tubular necrosis (ATN) in high-risk surgery (maintains tubular flow — controversial evidence); forced diuresis in certain drug overdoses",
        se: "**Initial volume expansion** (can precipitate pulmonary edema — caution in HF); **↑ serum osmolality** → hypernatremia; rebound ICP increase (if barrier disrupted); electrolyte disturbances (hyponatremia, hypokalemia with prolonged use); renal failure with high doses (paradoxical)",
        ci: "Anuria (no effect); severe congestive heart failure (volume load); severe dehydration; active intracranial bleeding (volume expansion may worsen)",
        pk: "IV only; not metabolized, renally filtered/excreted without reabsorption; t½ ~1–2 hr. Onset of ICP reduction: 15–30 min, duration 3–8 hr. Does NOT cross the blood-brain barrier (under normal conditions) — this is essential to its mechanism.",
        pearl: "**Mannitol stays out of cells — it works by osmosis.** If the blood-brain barrier is severely disrupted (as in severe TBI), mannitol can leak into brain tissue and reverse the osmotic gradient (rebound ICP ↑). **Hypertonic saline (3%)** is increasingly preferred in TBI because it does not cause rebound and provides volume expansion without initial hypervolemia risk."
      },
    ]
  },
  {
    group: "Heart Failure & Ischemia",
    drugs: [
      {
        name: "Calcium Channel Blockers (CCBs)",
        aka: "Amlodipine (Norvasc) · Nifedipine · Felodipine · Nicardipine — Dihydropyridines (DHP) | Verapamil · Diltiazem — Non-DHPs",
        summary: "Block voltage-gated L-type calcium channels in vascular smooth muscle (dihydropyridines) or cardiac tissue (non-dihydropyridines). Used for hypertension, angina, and rate control in supraventricular arrhythmias.",
        moa: "Block **voltage-gated L-type Ca²⁺ channels** → ↓ intracellular Ca²⁺. \n**DHPs** (amlodipine, nifedipine): vascular selectivity → ↓ SVR/vasodilation. \n**Non-DHPs** (verapamil, diltiazem): cardiac > vascular → ↓ HR (SA node) + ↓ AV conduction + ↓ contractility",
        use: "All CCBs: hypertension, chronic stable angina (↓ O2 demand); \n**Verapamil/diltiazem:** rate control in AF/flutter, PSVT (AV nodal block), **hypertrophic cardiomyopathy**; \n**Amlodipine:** vasospastic (Prinzmetal) angina, Raynaud phenomenon; \n**Nicardipine/clevidipine:** IV for hypertensive emergency; \n**Nifedipine:** preterm labor tocolysis",
        se: "**DHPs:** peripheral edema (ankles — arteriolar dilation → ↑ capillary pressure), reflex tachycardia (nifedipine > amlodipine — longer t½ less reflex), flushing, headache. \n**Non-DHPs:** **bradycardia**, **AV block**, **constipation** (verapamil — classic), negative inotropy (avoid in HFrEF)",
        ci: "Non-DHPs (verapamil/diltiazem): HFrEF (negative inotropy), cardiogenic shock, high-degree AV block, sick sinus syndrome, WPW with AF (can increase antegrade conduction via accessory pathway); \nverapamil + β-blocker combination: complete heart block",
        pk: "**Amlodipine:** oral, t½ ~35–50 hr (longest — once daily, fewer missed-dose effects), hepatic (CYP3A4)\n**Nifedipine:** ER formulation for HTN; short-acting (IR) only for hypertensive emergencies/tocolysis\n**Verapamil:** oral or IV, t½ ~6–8 hr, significant first-pass hepatic metabolism, CYP3A4; also a P-gp inhibitor (↑ digoxin levels)\n**Diltiazem:** IV for AF rate control, oral for HTN/angina",
        pearl: "**Verapamil is the most constipating drug in pharmacology** — autonomic innervation of the GI tract uses L-type Ca²⁺ channels for smooth muscle contraction. \n**DHP edema is not from fluid overload** — it's from arteriolar dilation increasing capillary hydrostatic pressure; it does NOT respond to diuretics (add ACEi or switch drugs)."
      },
      {
        name: "Nitrates",
        aka: "Nitroglycerin (NTG, Nitrostat, Nitro-Bid) · Isosorbide Dinitrate (ISDN) · Isosorbide Mononitrate (ISMN) · Sodium Nitroprusside",
        summary: "Nitric oxide donors that relax vascular smooth muscle to reduce cardiac preload and afterload. Used for acute angina, ACS, decompensated HF, and hypertensive emergencies.",
        moa: "Release **nitric oxide (NO)** → activate **guanylyl cyclase** → ↑ cGMP → activate protein kinase G → dephosphorylate myosin light chain → **vascular smooth muscle relaxation**.\nVenous > arterial at low doses (↓ preload dominant); arterial dilation at high doses (↓ afterload + coronary vasospasm relief).\nCoronary vasodilation especially effective in Prinzmetal (vasospastic) angina.",
        use: "**Sublingual NTG:** acute angina attack (onset 1–3 min)\n**Long-acting nitrates (ISDN/ISMN):** stable angina prophylaxis\n**IV NTG:** ACS (ongoing chest pain, HTN, pulmonary edema), acute decompensated HF (↓ preload/afterload), hypertensive emergency with pulmonary edema\n**Sodium nitroprusside:** most potent — hypertensive emergency, aortic dissection\nEsophageal spasm (relaxes smooth muscle)",
        se: "**Headache** (cerebral vasodilation — most common; tolerance develops)\n**Orthostatic hypotension + reflex tachycardia** (↓ preload → ↓ CO)\n**Tachyphylaxis/tolerance** (continuous use — require 8–12 hr nitrate-free interval daily)\n**Nitroprusside:** cyanide toxicity (give hydroxocobalamin or thiosulfate); methemoglobinemia",
        ci: "**Concurrent PDE5 inhibitors** (afil/tadalafil/vardenafil — ↑↑ cGMP → severe hypotension — absolute CI within 24–48 hr)\nSevere hypotension (SBP <90 mmHg); hypovolemia\n**RV infarction** (preload-dependent — nitrates → cardiovascular collapse; exclude in inferior MI before SL NTG)\nSevere AS (preload reduction → ↓ CO across fixed stenosis)",
        pk: "**Sublingual NTG:** onset 1–3 min, duration 30 min; extensive hepatic first-pass (avoid oral NTG)\n**IV NTG:** titrated infusion, immediate onset\n**ISMN:** t½ ~5 hr, renal (no first-pass — mononitrate, no hepatic conversion needed)\n**Nitroprusside:** IV only, onset seconds; metabolized to cyanide → thiocyanate (renal); limit dose >2 µg/kg/min and duration",
        pearl: "**RV infarction is the most tested nitrate contraindication:** inferior STEMI + hypotension + clear lungs = RV MI. The RV is preload-dependent — sublingual NTG causes venodilation → ↓ RV filling → ↓ CO → cardiovascular collapse. Always get a right-sided ECG (V4R) before giving NTG in inferior MI. \n**Nitrate tolerance** develops within 24 hr of continuous use via superoxide-mediated mitochondrial inactivation of aldehyde dehydrogenase (the enzyme that converts nitrates to NO) — the **8–12 hr nitrate-free interval** restores enzyme function."
      },
      {
        name: "Ranolazine & Ivabradine",
        aka: "Ranolazine (Ranexa) · Ivabradine (Corlanor)",
        summary: "Novel antianginal and heart failure agents with unique mechanisms distinct from traditional rate-pressure products. Ranolazine blocks late sodium current; ivabradine selectively inhibits the If funny current in the SA node.",
        moa: "**Ranolazine:** blocks **late Na⁺ current (INaL)** → ↓ Na⁺ overload → ↓ intracellular Ca²⁺ → ↓ diastolic wall tension → improves myocardial efficiency without ↓ HR or BP. **Ivabradine:** blocks **HCN channel (If 'funny' current)** in SA node → slows spontaneous depolarization → ↓ HR with NO effect on contractility or BP",
        use: "Ranolazine: chronic stable angina (add-on when other agents insufficient — does not reduce HR or BP); Ivabradine: HFrEF with HR ≥70 bpm in sinus rhythm despite β-blocker maximum tolerated dose (↓ hospitalization); inappropriate sinus tachycardia",
        se: "Ranolazine: ↑ QTc (mild), constipation, dizziness, nausea; Ivabradine: **bradycardia**, **phosphenes/visual brightness** (brief light flashes — If channels also in retinal cells), AF (monitor)",
        ci: "Ranolazine: liver cirrhosis, concurrent use of potent CYP3A4 inhibitors; Ivabradine: AF (only works in sinus rhythm), HR <60 bpm, sick sinus syndrome, severe hepatic impairment",
        pk: "**Ranolazine:** oral, t½ ~7 hr, hepatic (CYP3A4 + CYP2D6), dose twice daily; inhibits CYP2D6 (mild)\n**Ivabradine:** oral, t½ ~11 hr, hepatic (CYP3A4) — avoid with strong CYP3A4 inhibitors (azoles, clarithromycin → ↑ bradycardia)",
        pearl: "**Ivabradine is the only drug that reduces HR without affecting BP, contractility, or the QT interval.** Its phosphenes (visual brightness when entering bright light) are due to HCN channel expression in the retina — benign but alarming to patients. It requires **sinus rhythm to work** — completely ineffective in AF."
      },
      {
        name: "Milrinone & Nesiritide",
        aka: "Milrinone (Primacor) · Nesiritide (Natrecor)",
        summary: "Positive inotropes used for acute decompensated heart failure. Milrinone inhibits PDE3 to increase cAMP; nesiritide is recombinant BNP that promotes natriuresis and vasodilation.",
        moa: "**Milrinone:** inhibit **phosphodiesterase 3 (PDE3)** → ↑ cAMP → ↑ PKA → ↑ Ca²⁺ in cardiomyocytes (↑ inotropy) + vascular smooth muscle relaxation (↑ cAMP → vasodilation/↓ afterload). **Nesiritide:** recombinant human **BNP** → activates guanylate cyclase → ↑ cGMP → vasodilation + natriuresis",
        use: "Milrinone: acute decompensated HF refractory to standard therapy (bridge to transplant/LVAD), cardiogenic shock; Nesiritide: acutely decompensated HF with dyspnea (symptom relief) — role limited by lack of mortality benefit",
        se: "**Milrinone:** hypotension (vasodilatory), arrhythmias (↑ cAMP → triggered arrhythmias), ↑ mortality with chronic use (not for outpatient); Nesiritide: **hypotension** (most common — dose-limiting), headache",
        ci: "Milrinone: severe outflow tract obstruction (HOCM); Nesiritide: use with caution in hypotension (SBP <100 mmHg); low-output states",
        pk: "Milrinone: IV infusion only; t½ ~2–3 hr, primarily renal elimination — reduce dose in CKD. Nesiritide: IV infusion, t½ ~18 min, proteolytic clearance.",
        pearl: "**Milrinone is an 'inodilator'** — it simultaneously increases inotropy and decreases afterload (by vasodilation). Unlike dobutamine, it bypasses β-receptors (useful in patients on high-dose β-blockers). But it increases arrhythmia risk and is linked to ↑ mortality in chronic outpatient use (OPTIME trial) — for inpatient, short-term bridge therapy only."
      },
      {
        name: "Digoxin",
        aka: "Digoxin (Lanoxin) · Digitalis",
        summary: "Cardiac glycoside that inhibits the Na-K-ATPase pump to increase intracellular calcium and enhance contractility. Used for heart failure and rate control in atrial fibrillation; narrow therapeutic index.",
        moa: "Inhibit **Na⁺/K⁺-ATPase** → ↑ intracellular Na⁺ → ↓ Na⁺-Ca²⁺ exchanger activity → ↑ intracellular Ca²⁺ → **↑ inotropy**; also enhances vagal tone → ↓ AV conduction (↓ rate in AF)",
        use: "HFrEF (symptom control, ↓ hospitalizations — no mortality benefit); rate control in AF/flutter (especially in HF where β-blockers/CCBs are poorly tolerated); atrial flutter (↓ ventricular rate)",
        se: "**Toxicity (narrow TI):** GI (nausea, vomiting, anorexia — often first sign), **CNS (xanthopsia — yellow/green visual halos, blurry vision, confusion)**, **arrhythmias** (any type — PVCs, bigeminy, complete AV block, VF); **Hypokalemia, hypomagnesemia, hypercalcemia** → sensitize myocardium to digoxin toxicity",
        ci: "Ventricular fibrillation or VT; hypertrophic obstructive cardiomyopathy (↑ outflow obstruction); accessory pathway conduction in WPW (↑ accessory pathway conduction → VF); AV block (relative, depending on degree)",
        pk: "Oral or IV; t½ ~36 hr; predominantly renal excretion (unchanged) — **dose-reduce significantly in CKD** and elderly; Vd large (6–7 L/kg) — not dialyzable. Narrow therapeutic index: 0.5–2.0 ng/mL (in HF, target 0.5–0.9 ng/mL). Many drug interactions: quinidine/verapamil/amiodarone ↑ levels (inhibit P-gp).",
        pearl: "**Treating digoxin toxicity:** (1) Stop digoxin; (2) correct hypokalemia/hypomagnesemia (K⁺ <4 mEq/L sensitizes Na-K-ATPase to digoxin); (3) **digoxin-specific Fab antibody fragments (Digibind)** for severe toxicity/arrhythmia — binds free digoxin in plasma; (4) atropine for bradycardia/heart block; (5) lidocaine for ventricular arrhythmias. **Avoid cardioversion** — can cause refractory VF in digoxin toxicity."
      },
    ]
  },
  {
    group: "Antiarrhythmics",
    drugs: [
      {
        name: "Adenosine",
        aka: "Adenosine (Adenocard)",
        summary: "Endogenous purine nucleoside that transiently blocks AV conduction. Drug of choice for acute termination of PSVT and for diagnosing supraventricular arrhythmias.",
        moa: "Activates **A1 adenosine receptors** on AV node → ↑ K⁺ conductance (IKAdo) + ↓ Ca²⁺ current → hyperpolarization → transient **AV nodal block** (slows/stops conduction)",
        use: "First-line for acute PSVT (AV nodal re-entrant and AV re-entrant tachycardias); diagnostic tool to unmask atrial flutter/fibrillation by slowing ventricular rate; not effective for AF, atrial flutter, or VT",
        se: "**Transient chest pain/tightness** (adenosine receptors in coronary arteries — brief ischemia-like sensation); **flushing**; **dyspnea**; **transient complete heart block** (seconds — expected therapeutic effect); sense of impending doom; bronchospasm (avoid in asthma)",
        ci: "Asthma/severe reactive airway disease (bronchospasm via A2B receptors); high-degree AV block or sick sinus syndrome (without pacemaker); WPW with AF (may precipitate VF via accessory pathway)",
        pk: "IV only (central or antecubital); t½ ~10 seconds (fastest elimination of any drug — degraded by adenosine deaminase in erythrocytes and endothelium). **Must give rapid IV push** followed by saline flush. Xanthines (caffeine, theophylline) are competitive antagonists — increase dose needed. Dipyridamole blocks adenosine uptake → ↑ effects.",
        pearl: "**Adenosine's t½ of ~10 seconds** is why side effects are brief and dramatic. Its effects are competitively blocked by **caffeine and theophylline** (both xanthine adenosine receptor antagonists) — a patient on theophylline may require higher doses. Always warn the patient: 'you will feel terrible for about 10 seconds, then it will pass.'"
      },
      {
        name: "Class IA Antiarrhythmics",
        aka: "Quinidine · Procainamide · Disopyramide",
        summary: "Intermediate Na⁺ channel blockers with additional K⁺ channel blockade that prolongs the QRS and QTc. Used for atrial and ventricular arrhythmias but carry significant proarrhythmic risk.",
        moa: "Block **voltage-gated Na⁺ channels** (intermediate kinetics — moderate QRS widening) + block **K⁺ channels (IKr)** → ↑ action potential duration → ↑ refractory period → ↑ QTc",
        use: "AF/AFL conversion to sinus rhythm; ventricular tachycardia/VT; Wolff-Parkinson-White (quinidine/procainamide — slows accessory pathway); Procainamide: acute wide-complex tachycardia of uncertain etiology (IV)",
        se: "**Torsades de pointes** (↑ QTc — most dangerous); **proarrhythmic** (↑ mortality in structural heart disease); Quinidine: **cinchonism** (tinnitus, headache, visual changes at toxic doses), thrombocytopenia, diarrhea, ↑ digoxin levels; Procainamide: **drug-induced lupus** (anti-histone Ab, N-acetyl procainamide metabolite — more common than hydralazine lupus), agranulocytosis",
        ci: "Prolonged QTc or history of torsades; complete AV block without pacemaker; myasthenia gravis (disopyramide has strong anticholinergic activity → worsens); HFrEF (disopyramide — strong negative inotropy)",
        pk: "**Quinidine:** oral, t½ ~6–8 hr, hepatic (CYP3A4), inhibits CYP2D6, P-gp inhibitor → ↑ digoxin levels (halve digoxin dose)\n**Procainamide:** IV or oral, t½ ~3–4 hr, hepatic N-acetylation to NAPA (active, ↑ QTc more than procainamide) — slow acetylators: ↑ lupus risk\n**Disopyramide:** oral, strong anticholinergic, negative inotrope",
        pearl: "**Quinidine + digoxin = dangerous combination:** quinidine inhibits P-glycoprotein (renal/biliary digoxin efflux) and displaces digoxin from tissue binding → ↑ digoxin levels by ~2×. **Always halve the digoxin dose** when starting quinidine. Procainamide causes lupus in 30% of patients on chronic therapy — check ANA annually."
      },
      {
        name: "Class IB Antiarrhythmics",
        aka: "Lidocaine · Mexiletine · Phenytoin",
        summary: "Fast Na⁺ channel blockers that selectively suppress depolarized (ischemic/fast-firing) tissue with minimal effect on normal myocardium. Used for ventricular arrhythmias, particularly post-MI.",
        moa: "Block **voltage-gated Na⁺ channels** (fast on/off kinetics — minimal QRS widening) preferentially in **depolarized/ischemic tissue** → ↓ automaticity in Purkinje fibers and ventricles; ↓ action potential duration (↓ QTc — opposite of Class IA)",
        use: "**Lidocaine IV:** acute ventricular tachycardia/VF after defibrillation (especially ischemic VT)\n**Mexiletine:** chronic ventricular arrhythmias, myotonic dystrophy\n**Phenytoin:** digitalis-induced arrhythmias (drug of choice)",
        se: "Lidocaine: **CNS toxicity** (perioral numbness, tinnitus, tremor, seizures, respiratory arrest — correlates with plasma level); cardiovascular depression at high levels; Mexiletine: nausea, tremor; Phenytoin (chronic): gingival hyperplasia, hirsutism, ataxia, teratogenicity",
        ci: "High-degree AV block (SA or AV node suppression); Stokes-Adams attack; hypersensitivity; hepatic failure (lidocaine — extensive first-pass)",
        pk: "**Lidocaine:** IV only (extensive first-pass — oral not used for arrhythmia), t½ ~2 hr, hepatic (CYP3A4), dose-reduce in hepatic failure/HF\n**Mexiletine:** oral analog of lidocaine, t½ ~10–12 hr, hepatic\n**Phenytoin:** non-linear (zero-order) kinetics — small dose changes cause large level changes; hepatic (CYP2C9/2C19), strong inducer",
        pearl: "**Class IB drugs shorten the APD and selectively suppress ischemic tissue** — they bind Na⁺ channels in the fast inactivated state (prevalent in depolarized/ischemic tissue). Normal myocardium (resting, hyperpolarized) is largely unaffected. This explains why **lidocaine is the drug of choice for ischemic VT** but is ineffective for supraventricular arrhythmias."
      },
      {
        name: "Class IC Antiarrhythmics",
        aka: "Flecainide (Tambocor) · Propafenone (Rythmol)",
        summary: "Potent Na⁺ channel blockers with the most pronounced QRS widening. Effective for AF in structurally normal hearts but absolutely contraindicated in structural heart disease due to proarrhythmic mortality.",
        moa: "Block **voltage-gated Na⁺ channels** (slow on/off kinetics — marked QRS widening) → profound slowing of conduction throughout the myocardium; Propafenone also has mild β-blocking and K⁺-channel blocking activity",
        use: "Maintenance of sinus rhythm in AF/atrial flutter in patients with **no structural heart disease** ('pill-in-pocket' strategy for paroxysmal AF); WPW-associated arrhythmias; ventricular arrhythmias in structurally normal hearts",
        se: "**Proarrhythmic** — can convert AF to AFL with 1:1 AV conduction (always co-prescribe an AV nodal blocker); can precipitate life-threatening VT/VF in structural heart disease; neurologic: dizziness, visual disturbances; Propafenone: bronchospasm (β-blocking effect)",
        ci: "**Structural heart disease** (post-MI, LV dysfunction, HF — CAST trial showed ↑ mortality); cardiogenic shock; high-degree AV block; significant QRS prolongation (>120 ms at baseline)",
        pk: "Flecainide: oral, t½ ~12–27 hr, renal + hepatic elimination, CYP2D6 substrate. Propafenone: oral, t½ ~6 hr (extensive metabolizers) or ~17 hr (poor metabolizers via CYP2D6). Both require QRS monitoring — increase dose cautiously.",
        pearl: "**CAST trial (1989)** — the landmark lesson: IC drugs successfully suppressed PVCs post-MI but **tripled mortality** from arrhythmia compared to placebo. Suppressing the surrogate marker (PVCs) worsened the outcome. This permanently changed cardiology: **Class IC drugs are absolutely contraindicated in structural heart disease**, including any history of MI or LV dysfunction."
      },
      {
        name: "Class III Antiarrhythmics",
        aka: "Amiodarone (Cordarone, Pacerone) · Sotalol · Dofetilide · Ibutilide · Dronedarone",
        summary: "Block potassium channels to markedly prolong repolarization and the refractory period. Amiodarone is the most broadly used antiarrhythmic despite extensive multi-organ toxicity; sotalol and dofetilide are used for AF/VT.",
        moa: "Block **K⁺ channels (IKr — hERG)** → ↑ action potential duration → ↑ refractory period (↑ QTc); Amiodarone also blocks Na⁺/Ca²⁺ channels + β-adrenergic receptors (non-competitive) — 'pan-channel' blocker; **Sotalol** also has β-blocking activity",
        use: "**Amiodarone:** VF/pulseless VT in ACLS (IV); AF/AFL rate and rhythm control (highly effective but reserved due to toxicity); refractory VT\n**Sotalol:** AF maintenance, ventricular arrhythmias (requires in-hospital initiation — ↑ QTc monitoring)\n**Dofetilide:** AF maintenance (hospital initiation — strict renal dosing)\n**Ibutilide:** IV conversion of recent-onset AF/AFL",
        se: "**Amiodarone:** **pulmonary toxicity** (most serious — interstitial pneumonitis/fibrosis); **thyroid dysfunction** (hypothyroid or hyperthyroid — 37% iodine by weight); **hepatotoxicity** (monitor LFTs); **corneal microdeposits** (benign, nearly universal — do not confuse with toxicity); **blue-gray skin discoloration** (photosensitivity); **neurologic** (tremor, peripheral neuropathy); **torsades** (rare despite ↑ QTc — less than expected). Sotalol/dofetilide: **Torsades de pointes** (↑↑ QTc — most dangerous SE)",
        ci: "Amiodarone: pregnancy (neonatal thyroid toxicity), severe sinus node dysfunction or high-degree AV block (without pacemaker), iodine allergy (relative); Sotalol/dofetilide: prolonged QTc, CrCl <20 mL/min, hypokalemia/hypomagnesemia",
        pk: "**Amiodarone:** oral or IV; extremely lipophilic, Vd ~60 L/kg; t½ **40–55 days** (longest of any antiarrhythmic — weeks to months for steady state and washout); hepatic metabolism to active N-desethylamiodarone; inhibits CYP2C9 (↑ warfarin), CYP3A4, P-gp (↑ digoxin); check TFTs, LFTs, CXR, PFTs annually\n**Sotalol:** renal elimination, t½ ~12 hr, dose-reduce in CKD\n**Dofetilide:** renal elimination — strict dose reduction by CrCl",
        pearl: "**Amiodarone's half-life of 40–55 days** means drug interactions (warfarin, digoxin, statins) persist weeks after stopping. Every patient starting amiodarone needs baseline and annual: **TFTs, LFTs, CXR, PFTs, and ophthalmology exam**. The 37% iodine content = 200-mg tablet delivers ~75 mg iodine (daily iodine need is ~0.15 mg) — explaining the thyroid effects."
      },
      {
        name: "Magnesium Sulfate",
        aka: "Magnesium Sulfate (MgSO₄) · Magnesium (IV)",
        summary: "Divalent cation that acts as a physiologic calcium antagonist and membrane stabilizer. Used for torsades de pointes, eclampsia/preeclampsia, severe asthma, and hypomagnesemia.",
        moa: "**Mg²⁺ blocks voltage-gated Ca²⁺ channels** and stabilizes the cardiac membrane → ↓ early afterdepolarizations (EADs) in torsades; also blocks NMDA receptors (anticonvulsant in eclampsia); ↓ ACh release at NMJ; ↓ bronchial smooth muscle tone",
        use: "Torsades de pointes (drug of choice — IV bolus regardless of Mg²⁺ level); eclampsia seizure prevention and treatment (first-line over benzodiazepines in obstetrics); severe acute asthma (IV Mg²⁺ as adjunct); hypomagnesemia (replacement); preterm labor tocolysis (short-term); digitalis-induced arrhythmias (adjunct)",
        se: "**Hypermagnesemia (dose-dependent):** loss of deep tendon reflexes (first sign — check patellar reflex), respiratory depression, cardiac arrest (at very high levels); flushing, nausea; vasodilation/hypotension with rapid infusion",
        ci: "Heart block or myocardial damage; renal failure (risk of accumulation — dose-reduce and monitor levels); prior to delivery if very high levels (neonatal respiratory depression)",
        pk: "IV or IM; t½ ~4 hr in normal renal function; exclusively renally eliminated (unchanged) — accumulates in CKD. Therapeutic level for eclampsia: 4–7 mEq/L. Antidote for hypermagnesemia: **calcium gluconate IV** (directly antagonizes Mg²⁺ at cell membrane).",
        pearl: "**Torsades de pointes management: Mg²⁺ first, then overdrive pacing.** Mg²⁺ suppresses EADs (the triggering mechanism) without needing to correct QTc first. In eclampsia, **Mg²⁺ outperforms benzodiazepines** for both prevention and treatment of seizures (Magpie trial). Monitor deep tendon reflexes — loss signals toxicity before respiratory arrest."
      },
    ]
  },
  {
    group: "Lipid-Lowering",
    drugs: [
      {
        name: "Statins (HMG-CoA Reductase Inhibitors)",
        aka: "Atorvastatin (Lipitor) · Rosuvastatin (Crestor) · Simvastatin · Pravastatin · Lovastatin · Fluvastatin · Pitavastatin",
        summary: "Inhibit the rate-limiting step in cholesterol synthesis, primarily reducing LDL-C by upregulating hepatic LDL receptors. First-line therapy for ASCVD risk reduction and familial hypercholesterolemia.",
        moa: "Competitive inhibition of **HMG-CoA reductase** (rate-limiting enzyme in the mevalonate pathway) → ↓ hepatic cholesterol synthesis → ↑ LDL receptor expression → ↑ LDL-C clearance from plasma; also anti-inflammatory/pleiotropic effects",
        use: "ASCVD risk reduction (primary and secondary prevention); familial hypercholesterolemia; acute coronary syndrome (high-intensity statin — atorvastatin 80 mg, rosuvastatin 40 mg regardless of LDL); post-MI (pleiotropic benefit beyond LDL reduction)",
        se: "**Myopathy** (myalgia → myositis → rhabdomyolysis with ↑ CK → AKI — risk with gemfibrozil/niacin combination); **hepatotoxicity** (mild transaminase elevation — monitor LFTs); new-onset diabetes (modest risk — outweighed by CV benefit); teratogenic (avoid in pregnancy)",
        ci: "Pregnancy and breastfeeding (teratogenic — inhibit fetal cholesterol synthesis needed for myelination); active hepatic disease; concurrent use of gemfibrozil (↑ rhabdomyolysis risk — avoid; fenofibrate safer); concurrent use of potent CYP3A4 inhibitors with simvastatin (lovastatin) — ↑ statin levels → myopathy",
        pk: "Most metabolized by CYP3A4 (atorvastatin, simvastatin, lovastatin) — vulnerable to azole antifungals, macrolides, protease inhibitors\n**Pravastatin and rosuvastatin:** NOT CYP3A4 substrates — fewer interactions (safer with immunosuppressants like cyclosporine)\n**Atorvastatin/Rosuvastatin:** longest t½ (~14–19 hr) — can be taken any time\nOthers: take at night (peak cholesterol synthesis is nocturnal)",
        pearl: "**Rosuvastatin and pravastatin are not CYP3A4 substrates** — preferred in transplant patients on cyclosporine/tacrolimus. When a patient reports muscle pain on a statin, check CK: if markedly elevated, hold statin. The dreaded complication, **rhabdomyolysis**, is rare but life-threatening — screen for gemfibrozil co-use, hypothyroidism, and renal impairment (all ↑ statin levels)."
      },
      {
        name: "Fibrates & Niacin",
        aka: "Gemfibrozil (Lopid) · Fenofibrate (Tricor) · Bezafibrate — Fibrates | Niacin (Niaspan) — Vitamin B3",
        summary: "Fibrates activate PPARα to reduce triglycerides and raise HDL; niacin primarily raises HDL and lowers TG via inhibition of hepatic VLDL secretion. Both are second-line lipid agents with significant drug interactions.",
        moa: "**Fibrates:** activate **PPARα (peroxisome proliferator-activated receptor α)** → ↑ lipoprotein lipase (LPL) expression → ↑ TG hydrolysis + ↑ HDL synthesis + ↓ VLDL production.\n**Niacin:** inhibits **DGAT2** in liver + inhibits lipolysis in adipose tissue (via GPR109A) → ↓ VLDL secretion → ↓ TG + ↓ LDL + ↑ HDL (most effective HDL-raising drug).",
        use: "**Fibrates:** hypertriglyceridemia (TG >500 mg/dL — primary use to prevent pancreatitis); mixed dyslipidemia.\n**Niacin:** isolated low HDL; mixed dyslipidemia (largely fallen out of favor — AIM-HIGH and HPS2-THRIVE showed no CV benefit when added to statin).",
        se: "**Fibrates:** myopathy/rhabdomyolysis (especially with statins — gemfibrozil most dangerous via CYP2C8 inhibition; fenofibrate safer); cholelithiasis (↑ biliary cholesterol secretion).\n**Niacin:** **flushing** (most common — prostaglandin-mediated, prevented by aspirin 325 mg 30 min before dose); hepatotoxicity; hyperglycemia; hyperuricemia (gout); acanthosis nigricans.",
        ci: "**Fibrates:** severe hepatic/renal disease; gallbladder disease.\n**Gemfibrozil:** concurrent statin (↑ myopathy risk — use fenofibrate instead).\n**Niacin:** peptic ulcer disease; active gout; uncontrolled diabetes; hepatic disease.",
        pk: "**Gemfibrozil:** oral, t½ ~1.5 hr, hepatic glucuronidation, inhibits CYP2C8 (↑ simvastatin/repaglinide levels)\n**Fenofibrate:** oral prodrug (fenofibric acid active), renal excretion, t½ ~20 hr, less drug interaction\n**Niacin:** oral immediate-release (more flushing, less hepatotoxic) or extended-release (less flushing, more hepatotoxic)",
        pearl: "**Gemfibrozil inhibits two pathways that eliminate statins** — CYP2C8-mediated oxidation AND glucuronidation — raising statin AUC up to 5×, dramatically increasing rhabdomyolysis risk. This is why fenofibrate is always preferred when a fibrate must be used with a statin. **Niacin flushing trick:** 325 mg aspirin taken 30 minutes before niacin blocks the COX-1-mediated prostaglandin D2 release from Langerhans cells that causes flushing — this is the only useful application of aspirin pretreatment in pharmacology."
      },
    ]
  },
],
blood: [
  {
    group: "Anticoagulants",
    drugs: [
      {
        name: "Heparin (UFH & LMWH)",
        aka: "Unfractionated Heparin (UFH) · Enoxaparin (Lovenox) · Dalteparin · Tinzaparin · Fondaparinux",
        summary: "Parenteral anticoagulants that potentiate antithrombin III to inhibit clotting factors. UFH is used in hospital settings requiring reversible anticoagulation; LMWHs are preferred for outpatient DVT/PE and ACS.",
        moa: "Bind and activate **antithrombin III (AT-III)** → ↑ inhibition of **thrombin (IIa)** and **Factor Xa**.\nUFH inhibits both thrombin and Xa (chain ≥18 saccharides needed to bridge AT-III and thrombin).\nLMWH predominantly inhibits Xa (shorter chain — can't bridge thrombin).\nFondaparinux exclusively inhibits Xa (pentasaccharide only).",
        use: "**UFH:** acute PE/DVT, ACS, cardiopulmonary bypass, hemodialysis, bridging therapy\n**LMWH:** DVT/PE treatment and prophylaxis, ACS (STEMI/NSTEMI), pregnancy (preferred anticoagulant — does not cross placenta)\n**Fondaparinux:** DVT/PE prophylaxis post-orthopedic surgery, HIT (no cross-reactivity)",
        se: "**Bleeding** (all); **Heparin-induced thrombocytopenia (HIT)** — UFH > LMWH > fondaparinux; UFH: **osteoporosis** (long-term), hypoaldosteronism/hyperkalemia; HIT Type II: immune-mediated (IgG vs. PF4-heparin complex) → paradoxical thrombosis (not just bleeding)",
        ci: "Active bleeding.\nSevere thrombocytopenia.\n**HIT** (any heparin product — including flushes — switch immediately to argatroban, bivalirudin, or fondaparinux).\nIntracranial hemorrhage.",
        pk: "**UFH:** IV or SC, t½ ~1–2 hr, hepatic/endothelial metabolism; monitor with **aPTT** (target 60–100 sec)\n**LMWH:** SC, more predictable PK, t½ ~4–6 hr, renal elimination — reduce dose in CKD; monitor with **anti-Xa levels** in obesity/renal failure\n**Reversal:** protamine sulfate reverses UFH completely, LMWH partially (~60%), ineffective for fondaparinux",
        pearl: "**HIT is a thrombotic disease, not a bleeding disease.** The platelet drop is caused by platelet activation (PF4-heparin IgG immune complex → Fc receptor → platelet activation → clot), not destruction. Giving platelets fuels the thrombosis. The 4Ts score predicts probability: Thrombocytopenia (>50% drop = 2pts), Timing (days 5–10 = 2pts), Thrombosis (2pts), oTher cause unlikely (2pts). Score ≥6 = high probability. Stop ALL heparin immediately — even saline flushes — and start argatroban (hepatic clearance, preferred in renal failure) or fondaparinux."
      },
      {
        name: "Warfarin",
        aka: "Warfarin (Coumadin, Jantoven)",
        summary: "Vitamin K epoxide reductase inhibitor that depletes active clotting factors II, VII, IX, X and proteins C/S. Used for chronic anticoagulation in AF, VTE, and mechanical heart valves.",
        moa: "Inhibit **Vitamin K epoxide reductase (VKOR)** → ↓ regeneration of active Vitamin K (hydroquinone form) → ↓ γ-carboxylation of clotting factors **II, VII, IX, X** and anticoagulant proteins **C and S**.",
        use: "**Chronic AF** (stroke prevention — CHA₂DS₂-VASc ≥2).\n**Mechanical heart valves** (only anticoagulant proven safe — DOACs contraindicated).\n**Recurrent VTE** (especially antiphospholipid syndrome — DOACs may be inferior).\n**Left ventricular thrombus** (post-MI wall motion abnormality).",
        se: "**Bleeding** (most common); **skin/tissue necrosis** (early — protein C/S depletion before factor depletion → transient hypercoagulability, especially in protein C/S deficiency); **teratogenicity** (embryopathy — nasal hypoplasia, stippled epiphyses in 1st trimester; CNS malformations in 2nd/3rd); warfarin-induced calciphylaxis (rare)",
        ci: "**Pregnancy** (crosses placenta — LMWH is safe alternative; warfarin embryopathy in 1st trimester).\nActive bleeding.\nInability to monitor INR reliably.\n**Severe hepatic disease** (synthesizes clotting factors → unpredictable INR).",
        pk: "Oral; t½ ~36–42 hr; highly protein-bound (albumin — displacement interactions); hepatic (CYP2C9 — S-warfarin, more active). Monitor with **INR** (target 2–3 for most; 2.5–3.5 for mechanical mitral valve). Reversal: **Vitamin K** (slow, 12–24 hr); **4-factor PCC** (Kcentra — fastest); **FFP** (volume burden). VKORC1 and CYP2C9 polymorphisms affect dosing.",
        pearl: "**Why bridge warfarin with heparin for 5 days?** Warfarin depletes the short-lived anticoagulant Protein C (t½ ~8 hr) before it depletes procoagulant factors II (t½ ~72 hr) and X (t½ ~40 hr) — leaving a transient hypercoagulable window for 2–3 days. Factor VII (t½ ~6 hr) falls first, raising the INR early, but this is a false signal — the patient is NOT yet anticoagulated. Heparin bridges this gap. Rule: bridge ≥5 days AND INR therapeutic ≥2 consecutive days before stopping heparin."
      },
      {
        name: "Direct Oral Anticoagulants (DOACs)",
        aka: "Apixaban (Eliquis) · Rivaroxaban (Xarelto) · Edoxaban · Betrixaban — Factor Xa inhibitors | Dabigatran (Pradaxa) — Direct thrombin inhibitor",
        summary: "Target-specific oral anticoagulants that directly inhibit factor Xa or thrombin without requiring antithrombin III. Preferred over warfarin for nonvalvular AF and VTE due to predictable dosing and fewer interactions.",
        moa: "**Factor Xa inhibitors** (apixaban, rivaroxaban, edoxaban): directly inhibit **free and clot-bound Factor Xa** → ↓ thrombin generation.\n**Dabigatran:** direct competitive inhibitor of **thrombin (Factor IIa)** — free and fibrin-bound.\nNeither requires antithrombin III cofactor (unlike heparin).",
        use: "**Nonvalvular AF** (stroke prevention — preferred over warfarin for most patients).\n**VTE** treatment and prophylaxis.\nPost-orthopedic surgery DVT prophylaxis.\n**ACS:** rivaroxaban low-dose add-on (ATLAS trial).\n**NOT** for mechanical heart valves or valvular AF (warfarin required — RE-ALIGN trial).",
        se: "**Bleeding** (GI bleeding higher with dabigatran/rivaroxaban than warfarin; intracranial hemorrhage lower than warfarin — major safety advantage); dabigatran: dyspepsia/GI upset (take with food); no routine monitoring required",
        ci: "**Mechanical heart valves** (RE-ALIGN trial: dabigatran inferior — warfarin required for all mechanical valves).\n**Severe renal failure** (dabigatran — avoid CrCl <30 mL/min; apixaban safest in CKD).\nActive major bleeding.\nSevere hepatic impairment (Child-Pugh C).",
        pk: "**Dabigatran:** oral prodrug, 80% renal clearance — most renally dependent DOAC; P-gp substrate; reversal agent: **idarucizumab** (Praxbind — monoclonal antibody)\n**Apixaban:** CYP3A4 + P-gp, ~27% renal — safest in CKD; reversal: **andexanet alfa** (recombinant Xa decoy)\n**Rivaroxaban:** CYP3A4 + P-gp, 33% renal\nAll: no routine INR monitoring; factor Xa inhibitors: anti-Xa levels for clinical decision-making",
        pearl: "**DOAC reversal cheat sheet:** Dabigatran → **idarucizumab** (Praxbind — monoclonal antibody, binds free dabigatran, 5-minute onset). Xa inhibitors (apixaban, rivaroxaban, edoxaban) → **andexanet alfa** (recombinant Xa decoy). For all DOACs without specific reversal: **4-factor PCC** (Kcentra) is the practical emergency option. **Dabigatran is the only DOAC that is dialyzable** (80% renal clearance, low Vd) — useful if reversal agent unavailable in renal failure."
      },
    ]
  },
   
  {
    group: "Antiplatelets",
    drugs: [
      {
        name: "Aspirin (Antiplatelet)",
        aka: "Aspirin (ASA) · Acetylsalicylic Acid",
        summary: "**Irreversible COX-1 inhibitor** — the cornerstone antiplatelet agent for ASCVD prevention.",
        moa: "Irreversibly **acetylates COX-1** → permanently inhibits TXA₂ synthesis in platelets (no nucleus → can't regenerate COX).\nAlso inhibits PGI₂ in endothelium (endothelium can regenerate COX) — net effect is antiplatelet.",
        use: "**ACS** (chew immediately in STEMI/NSTEMI — fastest absorption).\n**ASCVD secondary prevention** (post-MI, post-stroke, PAD).\n**DAPT** with P2Y12 inhibitor post-PCI.\n**Low-dose:** pre-eclampsia prevention; colorectal cancer chemoprevention.\n**High-dose:** Kawasaki disease (anti-inflammatory).",
        se: "**GI bleeding/ulceration** (COX-1 protects gastric mucosa — use PPI).\n**Reye syndrome** in children with viral infections (avoid <16 yr).\n**NSAID-exacerbated respiratory disease** (AERD — aspirin-sensitive asthma, leukotriene shunting).\n**Salicylism:** tinnitus, nausea (high doses).",
        ci: "Children with viral infections (Reye syndrome); NSAID-sensitive asthma; active GI bleeding; severe renal failure.\nThird trimester pregnancy (↓ PGE₂ → premature closure of ductus arteriosus).",
        pk: "Antiplatelet effect lasts **entire platelet lifespan (~7–10 days)** — platelets can't synthesize new COX.\nStop 7–10 days before elective surgery. 81 mg = antiplatelet; >1.5 g/day = anti-inflammatory.",
        pearl: "**Aspirin overdose acid-base sequence:** First, salicylate directly stimulates the medullary respiratory center → **respiratory alkalosis** (hyperventilation). Then, salicylate uncouples oxidative phosphorylation + blocks Krebs cycle → lactic and ketoacid accumulation → **high anion gap metabolic acidosis**. The result is a mixed respiratory alkalosis + AGMA — pathognomonic. Treatment: urine alkalinization with IV NaHCO₃ (ionizes salicylate in urine → traps it → ↑ excretion). Dialysis for severe cases (salicylate level >100 mg/dL or renal failure)."
      },
      {
        name: "P2Y12 & GP IIb/IIIa Blockers",
        aka: "Clopidogrel (Plavix) · Ticagrelor (Brilinta) · Prasugrel (Effient) — P2Y12 | Abciximab · Eptifibatide · Tirofiban — GP IIb/IIIa",
        summary: "P2Y12 inhibitors block ADP-mediated platelet activation; GP IIb/IIIa inhibitors block the final common pathway of platelet aggregation. Used for ACS, post-PCI, and high-risk coronary interventions.",
        moa: "**P2Y12 inhibitors:** block **P2Y12 (ADP receptor)** on platelets → ↓ cAMP degradation → ↓ platelet activation/aggregation.\nClopidogrel/prasugrel: irreversible binding. Ticagrelor: reversible (but still sustained effect at once-daily dosing).\n**GP IIb/IIIa inhibitors:** block **glycoprotein IIb/IIIa (αIIbβ3)** → prevent fibrinogen cross-linking → ↓ final platelet aggregation.",
        use: "**Clopidogrel:** DAPT with aspirin post-PCI/ACS, ischemic stroke prevention\n**Ticagrelor:** preferred over clopidogrel in ACS (PLATO trial — ↓ CV death/MI)\n**Prasugrel:** STEMI patients undergoing PCI (TRITON — ↓ CV events vs. clopidogrel, ↑ bleeding)\n**GP IIb/IIIa inhibitors:** high-risk PCI (abciximab), ACS with planned PCI (eptifibatide/tirofiban)",
        se: "**P2Y12 (all):** bleeding.\n**Clopidogrel:** rare TTP (thrombotic thrombocytopenic purpura).\n**Ticagrelor:** dyspnea (adenosine reuptake inhibition — adenosine-mediated, not bronchospasm; most unique SE); bradycardia.\n**Prasugrel:** ↑ bleeding risk (contraindicated in prior stroke/TIA — ↑ intracranial hemorrhage).\n**GP IIb/IIIa:** thrombocytopenia (abciximab — immune-mediated); bleeding.",
        ci: "**Prasugrel:** prior stroke or TIA (absolute — ↑ intracranial hemorrhage); age ≥75 or weight <60 kg (relative).\n**All P2Y12:** active bleeding.\n**GP IIb/IIIa:** active bleeding; recent stroke; severe HTN; thrombocytopenia.",
        pk: "**Clopidogrel:** oral prodrug requiring CYP2C19 activation (poor metabolizers have ↓ efficacy — PPI co-use may reduce activation); irreversible, effect lasts 7 days\n**Ticagrelor:** active drug (no prodrug), reversible, t½ ~12 hr, twice daily\n**Prasugrel:** prodrug, more potent and faster than clopidogrel, irreversible\n**Abciximab:** IV, irreversible (Fab fragment), platelet function recovers in 24–48 hr (transfuse platelets to reverse)",
        pearl: "**Clopidogrel requires CYP2C19 to convert it to its active thiol metabolite.** ~25% of patients (especially East Asians) are CYP2C19 poor metabolizers — they get minimal antiplatelet effect. Omeprazole also inhibits CYP2C19, further blunting activation; use pantoprazole instead. The FDA added a black box warning. **Ticagrelor avoids this entirely** — it is not a prodrug, is directly active, and demonstrated superior outcomes (↓ CV death 21%) over clopidogrel in PLATO. However, ticagrelor's dyspnea (adenosine-mediated) causes more discontinuation."
      },
      {
        name: "PDE3/PDE5 Inhibitors (Antiplatelet)",
        aka: "Cilostazol (Pletal) — PDE3 inhibitor | Dipyridamole (Persantine, Aggrenox with ASA) — PDE inhibitor + adenosine uptake inhibitor",
        summary: "Increase intraplatelet cAMP (cilostazol) or cAMP/cGMP (dipyridamole) to inhibit platelet aggregation and cause vasodilation. Used for peripheral arterial disease and secondary stroke prevention.",
        moa: "**Cilostazol:** inhibit **PDE3** in platelets and vascular smooth muscle → ↑ cAMP → ↓ platelet aggregation + vasodilation.\n**Dipyridamole:** inhibit **PDE** + block adenosine reuptake transporter → ↑ adenosine (↑ cAMP/cGMP) → ↓ platelet aggregation + coronary vasodilation.",
        use: "**Cilostazol:** intermittent claudication (peripheral arterial disease — ↑ walking distance).\n**Dipyridamole + aspirin (Aggrenox):** secondary stroke prevention.\n**Dipyridamole IV:** cardiac stress testing (coronary vasodilator — coronary steal unmasks CAD in patients who cannot exercise).",
        se: "**Cilostazol:** headache; palpitations/tachycardia (↑ cAMP in heart — CI in HF); diarrhea.\n**Dipyridamole:** headache, flushing, hypotension.\n**Dipyridamole stress test:** chest pain, bronchospasm (reversed immediately by aminophylline/theophylline).",
        ci: "**Cilostazol:** heart failure of any severity (↑ mortality — PDE3 inhibition in HF analogous to milrinone).\n**Dipyridamole:** hypotension.\n**Dipyridamole stress test:** asthma (↑ adenosine → bronchospasm).",
        pk: "Cilostazol: oral, t½ ~11 hr, CYP3A4 + CYP2C19, twice daily. Dipyridamole: oral (Aggrenox ER), IV for stress testing; inhibits adenosine deaminase and adenosine reuptake transporter → ↑ adenosine effects (theophylline reverses vasodilatory effects). Dipyridamole IV for stress test: onset ~2 min, reversed by aminophylline.",
        pearl: "**Coronary steal physiology:** when a vasodilator (dipyridamole, adenosine, regadenoson) maximally dilates normal coronary arteries, blood is preferentially shunted away from stenotic territories (which are already maximally dilated at rest). The stenotic region becomes relatively ischemic — visible on perfusion imaging. **Aminophylline reverses dipyridamole stress** by competing at adenosine receptors — always have it available. Contraindicated in asthma because adenosine causes bronchospasm via A2B receptors on mast cells."
      },
      {
        name: "tPA & Thrombolytics",
        aka: "Alteplase (tPA, Activase) · Tenecteplase (TNKase) · Reteplase · Streptokinase · Urokinase",
        summary: "Activate plasminogen to plasmin, which dissolves existing thrombi. Used for acute ischemic stroke, massive PE, STEMI without PCI availability, and occluded catheters.",
        moa: "Convert **plasminogen → plasmin** (serine protease) → cleaves fibrin cross-links → thrombus dissolution.\ntPA and derivatives are **fibrin-selective** (bind fibrin in clot → activate plasminogen locally, minimizing systemic plasminemia).\n**Streptokinase:** non-fibrin-selective systemic plasminogen activator (higher bleeding risk).",
        use: "**Acute ischemic stroke:** alteplase or tenecteplase within 3–4.5 hr of onset (must exclude hemorrhage first).\n**Massive/submassive PE** with hemodynamic compromise.\n**STEMI** when PCI unavailable within 120 min.\nOccluded central venous catheters (low-dose alteplase).\nCatheter-directed thrombolysis for massive proximal DVT.",
        se: "**Intracranial hemorrhage** (most feared — 3–6% in ischemic stroke).\nSystemic bleeding at all sites.\nReperfusion injury (arrhythmias after STEMI thrombolysis).\n**Streptokinase:** allergic reactions/anaphylaxis (bacterial antigen); fever; hypotension (bradykinin release).",
        ci: "**Prior intracranial hemorrhage** (absolute).\nIschemic stroke within 3 months.\nActive internal bleeding (except menses).\nIntracranial neoplasm, AVM, or aneurysm.\n**BP >185/110** (must control first for stroke thrombolysis).\nRecent surgery/trauma/head injury within 3 months.\nCurrent anticoagulant use (relative — depends on level).",
        pk: "**Alteplase:** IV bolus + infusion, t½ ~5 min (extremely short, biologic clearance), fibrin-selective\n**Tenecteplase:** single IV bolus (convenience), longer t½ (~20 min), fibrin-specific — preferred in STEMI\n**Streptokinase:** IV infusion, non-selective, t½ ~18 min, immunogenic (cannot re-use within 1 year due to antibodies)\n**Reversal:** cryoprecipitate (repletes fibrinogen); aminocaproic acid or tranexamic acid (plasmin inhibitors)",
        pearl: "**Stroke thrombolysis decision in 60 seconds:** Non-contrast CT to exclude hemorrhage (sensitivity ~95% for bleed) → if clear, give alteplase within 3 hr (up to 4.5 hr in selected patients ≤80 yr, no prior stroke+DM, no anticoagulation, NIHSS ≤25). The #1 question to ask: **Is there any prior intracranial hemorrhage?** — one prior bleed = absolute contraindication forever. **Tenecteplase** (single bolus) is increasingly preferred over alteplase infusion for STEMI and stroke (non-inferior, far more convenient). Reversal of thrombolytic bleeding: cryoprecipitate (replaces fibrinogen) + tranexamic acid."
      },
    ]
  },
  {
    group: "Gout Agents",
    drugs: [
      {
        name: "Allopurinol & Febuxostat",
        aka: "Allopurinol (Zyloprim) · Febuxostat (Uloric)",
        summary: "Xanthine oxidase inhibitors that reduce uric acid synthesis. Used for chronic gout prophylaxis, uric acid nephrolithiasis, and tumor lysis syndrome prevention. Do NOT use during acute gout flares.",
        moa: "Inhibit **xanthine oxidase (XO)** → ↓ conversion of hypoxanthine → xanthine → uric acid → ↓ serum urate levels.\nAllopurinol is itself a substrate/prodrug, converted to **oxypurinol** (active) by XO.",
        use: "Chronic gout prophylaxis (started ≥2 weeks after acute flare resolves); uric acid nephrolithiasis prevention; tumor lysis syndrome prophylaxis (high-risk chemotherapy); HGPRT deficiency (Lesch-Nyhan syndrome — allopurinol reduces urate but does not treat neurologic/behavioral symptoms)",
        se: "**Hypersensitivity reaction** (allopurinol — rash to **DRESS/Stevens-Johnson syndrome** — highest risk with HLA-B*5801, common in Han Chinese/Thai — screen before prescribing); acute gout flare when first started (mobilization of urate crystals — always co-prescribe colchicine or NSAID for prophylaxis); Febuxostat: **↑ cardiovascular events** (FDA black box — higher all-cause mortality than allopurinol in CARES trial)",
        ci: "**Acute gout flare** (mobilizes urate crystals — wait ≥2 weeks after flare resolves).\n**Azathioprine or 6-MP without dose reduction** (XO metabolizes these drugs → inhibiting XO → 4–5× drug accumulation → life-threatening myelosuppression — reduce to 25% dose or avoid).\n**Febuxostat:** established cardiovascular disease (relative — prefer allopurinol per CARES trial).",
        pk: "**Allopurinol:** oral, prodrug → oxypurinol (active, t½ ~18–30 hr) by xanthine oxidase; renal elimination — dose-reduce in CKD; start low (100 mg/day) and titrate to target uric acid <6 mg/dL\n**Febuxostat:** oral, non-purine analog, hepatic metabolism (CYP1A2/2C8), t½ ~5–8 hr; no renal dose adjustment needed (mild-moderate CKD)",
        pearl: "**The allopurinol-azathioprine interaction kills.** 6-MP (the active metabolite of azathioprine) is inactivated by xanthine oxidase to 6-thiouric acid. Block XO with allopurinol → 6-MP accumulates → bone marrow suppression. The fix: reduce azathioprine to 25% of dose. This interaction appears on virtually every Step 1 and Step 2 exam. Separately: screen Han Chinese and Thai patients for **HLA-B*5801** before allopurinol — this allele confers a 5% risk of life-threatening SJS/DRESS syndrome."
      },
      {
        name: "Colchicine",
        aka: "Colchicine (Colcrys, Mitigare)",
        summary: "Anti-inflammatory agent that inhibits microtubule polymerization and blocks neutrophil migration into joints. Used for acute gout flares, gout prophylaxis, pericarditis, and familial Mediterranean fever.",
        moa: "Bind **β-tubulin** → inhibit microtubule polymerization → ↓ neutrophil chemotaxis, degranulation, and phagocytosis of urate crystals.\nDoes NOT lower uric acid levels.",
        use: "**Acute gout flare** (most effective if started within 12–24 hr of onset).\n**Gout prophylaxis** during urate-lowering therapy initiation (prevents mobilization flares).\n**Acute and recurrent pericarditis** (colchicine + NSAID — first-line; reduces recurrence by 50%).\n**Familial Mediterranean fever (FMF)** — prevents attacks.\nBehçet disease.",
        se: "**GI toxicity** — dose-dependent: nausea, vomiting, **diarrhea** (crampy — most common dose-limiting SE); **myopathy** and **neuropathy** (especially with long-term use or CYP3A4/P-gp inhibitors); myelosuppression (rare, high doses)",
        ci: "Severe renal failure (CrCl <10 mL/min — marked accumulation → toxicity).\n**Concurrent strong CYP3A4 + P-gp inhibitors** (cyclosporine, clarithromycin, ritonavir → ↑ colchicine levels → potentially fatal toxicity — reduce dose or avoid).\nHepatic failure.",
        pk: "Oral; t½ ~27 hr; hepatic (CYP3A4) + renal elimination; P-gp substrate. Modern low-dose protocol (1.2 mg then 0.6 mg 1 hr later) is as effective as high-dose with far less GI toxicity (AGREE trial).",
        pearl: "**Colchicine toxicity has a delayed and devastating presentation.** Diarrhea begins 6–12 hr after ingestion (the first warning sign — dose-limiting). If overdose occurs, a 2-stage picture follows: Stage 1 (0–24 hr) — GI crisis; Stage 2 (1–7 days) — multiorgan failure mimicking sepsis with leukocytosis, ARDS, rhabdomyolysis, neuromuscular dysfunction. There is **no antidote**. The clinical pearl: colchicine toxicity + clarithromycin or cyclosporine co-prescription = a preventable drug interaction death. Always check the medication list before prescribing."
      },
      {
        name: "Probenecid",
        aka: "Probenecid · Sulfinpyrazone",
        summary: "Uricosuric agent that inhibits renal urate reabsorption to increase uric acid excretion. Used for chronic gout when xanthine oxidase inhibitors are contraindicated, and to prolong penicillin/cephalosporin levels.",
        moa: "Inhibit **URAT1 (urate transporter 1)** in the proximal tubule → ↓ uric acid reabsorption → ↑ urinary uric acid excretion (uricosuric).\nAlso inhibits **OAT1/OAT3** → ↓ tubular secretion of penicillins/cephalosporins → ↑ antibiotic plasma levels.",
        use: "Chronic gout prophylaxis (alternative to allopurinol — especially if allopurinol intolerant); urate-lowering therapy in under-excretors (low 24-hr urine uric acid); penicillin/ampicillin adjunct (prolong antibiotic levels — used in gonorrhea treatment historically); adjunct with cephalosporins",
        se: "Acute gout flare when first started (mobilizing urate); uric acid nephrolithiasis (↑ urinary uric acid → stone formation — ensure high urine output, urinary alkalization); GI upset; hypersensitivity (sulfa-related — sulfinpyrazone)",
        ci: "Uric acid nephropathy or kidney stones (↑ urinary uric acid → worsen stones).\nCrCl <30 mL/min (ineffective — requires adequate tubular secretion).\nAcute gout flare (start ≥2 weeks after flare resolves).\n**Low-dose aspirin** (competes at URAT1 → blocks uricosuric effect — avoid co-prescription).",
        pk: "Oral, hepatic glucuronidation, t½ ~5–8 hr; competes with drugs secreted by OAT transporters (MTX, penicillins, NSAIDs) — clinically useful (prolong penicillin) or harmful (↑ methotrexate toxicity). Drink ≥2 L water/day to prevent stone formation.",
        pearl: "**Probenecid was originally developed to prolong penicillin levels** during the post-WWII penicillin shortage — a useful fact for vignettes asking about drugs to co-administer with antibiotics. It lowers uric acid by flooding the urine with it (opposite of allopurinol). Critical distinction: probenecid works only in **under-excretors** (24-hr urine uric acid <600 mg). In over-producers, it worsens stone risk by further increasing urinary uric acid. **Aspirin at any dose competitively blocks URAT1** — even 81 mg completely abolishes the uricosuric effect."
      },
    ]
  },
 
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
        use: "**Anxiety disorders** (short-term — avoid long-term dependence).\n**Status epilepticus:** lorazepam IV (first-line) or midazolam IM.\n**Alcohol withdrawal:** chlordiazepoxide (oral mild-moderate); diazepam IV (severe/ICU).\n**Procedural sedation:** midazolam (fastest onset, anterograde amnesia).\nInsomnia (short-term); acute agitation; muscle spasm.",
        se: "**Respiratory depression** (dose-dependent, especially with opioids or alcohol — CNS depression synergy); **sedation**, ataxia, anterograde amnesia; **paradoxical excitement** (elderly, children); tolerance and **physical dependence** (benzodiazepine withdrawal: anxiety, tremor, seizures — potentially fatal, unlike opioid withdrawal); falls/fractures (elderly)",
        ci: "**Narrow-angle glaucoma** (↑ IOP).\n**Severe hepatic failure** (accumulation — prefer 'LOT' drugs: Lorazepam, Oxazepam, Temazepam — no active metabolites).\nRespiratory depression without airway support.\n**Myasthenia gravis** (muscle relaxation worsens weakness).",
        pk: "Highly lipophilic → rapid CNS penetration. Most: hepatic CYP3A4 → active metabolites (diazepam → desmethyldiazepam, t½ ~40–200 hr)\n**'LOT' drugs** (Lorazepam, Oxazepam, Temazepam): direct glucuronidation → NO active metabolites → safe in hepatic failure/elderly\n**Midazolam:** shortest acting IV (t½ ~2 hr), water-soluble (preferred IV)\n**Reversal:** flumazenil (competitive antagonist at BZD site — short t½ ~1 hr, risk of re-sedation and precipitating withdrawal seizures)",
        pearl: "**Why flumazenil is dangerous in benzo-dependent patients:** Benzodiazepines upregulate GABA-A receptor internalization over time — abrupt reversal with flumazenil precipitates acute withdrawal seizures. Flumazenil also has a t½ of only ~1 hr (shorter than most benzos) → re-sedation after the flumazenil wears off is common. Use it cautiously, in small incremental doses, with resuscitation available. **Alcohol withdrawal seizures are dangerous** (unlike opioid withdrawal) — treat aggressively with benzodiazepines; phenobarbital is second-line for refractory cases."
      },
      {
        name: "Non-Benzodiazepine Hypnotics (Z-drugs) & Ramelteon",
        aka: "Zolpidem (Ambien) · Zaleplon · Eszopiclone (Lunesta) — Z-drugs | Ramelteon (Rozerem) — Melatonin receptor agonist | Suvorexant (Belsomra) — Orexin antagonist",
        summary: "Non-benzodiazepine sleep aids with selective GABA-A or melatonin receptor activity, offering fewer respiratory effects than benzodiazepines. Preferred for insomnia in elderly patients.",
        moa: "**Z-drugs:** positive allosteric modulators of **GABA-A receptors** (preferentially α1 subunit — sedation > anxiolysis/muscle relaxation/anticonvulsant). **Ramelteon:** agonist at **MT1/MT2 melatonin receptors** in SCN → ↓ wake drive, regulates circadian rhythm. **Suvorexant:** competitive antagonist at **OX1R/OX2R orexin receptors** → blocks wake-promoting orexin",
        use: "**Insomnia — sleep initiation:** zolpidem IR, zaleplon.\n**Insomnia — sleep maintenance:** eszopiclone, zolpidem ER, suvorexant.\n**Ramelteon:** elderly patients (no abuse potential, not a controlled substance); circadian rhythm disorders.",
        se: "**Z-drugs:** complex sleep behaviors (sleepwalking, sleep-driving, sleep-eating — FDA black box warning); anterograde amnesia; daytime sedation; short-term dependence.\n**Ramelteon:** minimal — dizziness, somnolence; no abuse potential or dependence.\n**Suvorexant:** somnolence; abnormal dreams; potential for abuse (Schedule IV).",
        ci: "**Z-drugs:** severe hepatic impairment; elderly with fall risk (use ramelteon instead); concurrent CNS depressants; sleep apnea (relative).\n**Suvorexant:** narcolepsy (orexin deficiency — blocks the remaining wake drive).",
        pk: "Zolpidem: t½ ~2.5 hr (IR), 6 hr (ER); hepatic (CYP3A4). Zaleplon: ultrashort t½ ~1 hr — can be taken during night if 4+ hr of sleep remaining. Ramelteon: t½ ~1–2.6 hr, hepatic (CYP1A2); not a controlled substance; no dependency.",
        pearl: "**The FDA black box for zolpidem (2019)** was issued after reports of sleep-driving and sleep-eating with no memory — patients were found in their cars having driven miles with no recollection. The α1 selectivity of Z-drugs does NOT fully explain this — the complex behaviors likely involve dissociated sleep states. **Ramelteon is the safest hypnotic for elderly patients** (no fall risk, no cognitive impairment, no abuse — not a controlled substance). Zaleplon's ultrashort t½ (~1 hr) makes it the only hypnotic that can be taken in the middle of the night with 4 hours left to sleep."
      },
      {
        name: "Propofol, Etomidate & Ketamine",
        aka: "Propofol (Diprivan) · Etomidate (Amidate) · Ketamine (Ketalar)",
        summary: "IV anesthetic induction agents with distinct mechanisms and hemodynamic profiles. Propofol is most widely used; etomidate maintains hemodynamic stability; ketamine provides dissociative anesthesia with bronchodilation.",
        moa: "**Propofol:** potentiates **GABA-A** + inhibits NMDA receptor → CNS depression.\n**Etomidate:** potentiates **GABA-A** (unique steroid analog binding site).\n**Ketamine:** blocks **NMDA (N-methyl-D-aspartate) receptor** → dissociative anesthesia; also ↑ sympathetic activity → maintains or raises BP/HR.",
        use: "**Propofol:** anesthesia induction/maintenance, ICU sedation, procedural sedation, refractory status epilepticus\n**Etomidate:** anesthesia induction in hemodynamically unstable patients (cardiogenic shock, trauma — minimal cardiac effects), RSI\n**Ketamine:** emergency RSI especially in bronchospasm or hypotension, pediatric procedures (dissociative sedation), refractory depression (IV sub-anesthetic dose, intranasal esketamine)",
        se: "**Propofol:** **propofol infusion syndrome** (prolonged high-dose ICU infusion → metabolic acidosis, rhabdomyolysis, cardiac failure — rare but fatal); hypotension (vasodilation); pain on injection; hypertriglyceridemia (lipid emulsion); urine/secretion turns green (benign). **Etomidate:** **adrenal suppression** (inhibits 11β-hydroxylase → ↓ cortisol synthesis — avoid in septic shock); myoclonus; nausea. **Ketamine:** **emergence reactions** (hallucinations, dissociation — mitigated by concurrent benzodiazepine); ↑ IOP/ICP (use cautiously in glaucoma/TBI), ↑ secretions (glycopyrrolate pre-treatment)",
        ci: "**Propofol:** egg/soy allergy (lipid vehicle — true allergy is rare; most egg-allergic patients can receive it safely).\n**Etomidate:** adrenal insufficiency; septic shock (cortisol suppression for 4–8 hr worsens outcomes).\n**Ketamine:** active psychosis; uncontrolled hypertension; ↑ ICP (relative — evidence increasingly suggests ketamine is safe in TBI).",
        pk: "All: IV bolus induction; rapid redistribution to fat/muscle → short duration (minutes)\n**Propofol:** t½ context-sensitive (short for bolus, long for infusion), hepatic + extrahepatic metabolism, green-colored lipid emulsion vehicle\n**Etomidate:** t½ ~75 min, hepatic esterase\n**Ketamine:** t½ ~2–3 hr, hepatic (CYP3A4/2B6), active metabolite norketamine",
        pearl: "**Propofol infusion syndrome (PRIS)** is rare but fatal — seen with infusions >4 mg/kg/hr for >48 hr in ICU. Mechanism: impaired mitochondrial fatty acid oxidation → lactic acidosis, severe rhabdomyolysis, cardiac failure. Green-tinged urine from propofol metabolites is benign; green urine from myoglobinuria is PRIS. **Ketamine and ICP:** historically avoided, but modern evidence shows ketamine does not raise ICP in ventilated patients — it is now used in trauma RSI. Its bronchodilation (via catecholamine release relaxing bronchial smooth muscle) makes it the drug of choice for RSI in severe asthmatic bronchospasm."
      },
      {
        name: "Inhaled Anesthetics",
        aka: "Sevoflurane · Desflurane · Isoflurane · Halothane · Nitrous Oxide (N₂O)",
        summary: "Volatile halogenated agents that produce unconsciousness, amnesia, and muscle relaxation via CNS depression. Characterized by MAC (minimum alveolar concentration) values and hepatotoxicity/malignant hyperthermia risks.",
        moa: "Potentiate **GABA-A and glycine receptors** + inhibit **NMDA, AMPA, and nicotinic ACh receptors** → generalized CNS depression; exact mechanism incompletely understood. Nitrous oxide: primarily NMDA antagonist (similar to ketamine) + weak opioid receptor activity",
        use: "General anesthesia maintenance (all); inhalation induction (sevoflurane preferred in children — low pungency); Nitrous oxide: analgesia + sedation (dental, obstetrics), reduces MAC of volatile agents (adjunct)",
        se: "**Malignant hyperthermia** (halothane + succinylcholine highest risk; sevoflurane/isoflurane/desflurane also trigger — treat with **dantrolene**); **hepatotoxicity** (halothane → massive immune hepatitis on re-exposure — now rarely used); **respiratory depression**; cardiovascular depression (↓ cardiac output, ↓ BP); N₂O: **bone marrow suppression** (inactivates B12/methionine synthase), expansion of air-filled cavities (bowel obstruction, pneumothorax — contraindicated); desflurane: airway irritant (avoid in asthma)",
        ci: "**History of malignant hyperthermia** (personal or family) — use total IV anesthesia (TIVA) with propofol + opioid + non-depolarizing NMB.\n**Halothane re-exposure** (immune hepatotoxicity — now rarely used).\n**N₂O:** bowel obstruction; pneumothorax; middle ear surgery; B12 deficiency.",
        pk: "Elimination via exhalation (reverse induction: low blood-gas solubility = fast onset/offset). Blood-gas partition coefficient: desflurane < nitrous oxide < sevoflurane < isoflurane < halothane. MAC = potency measure (1 MAC = 1 atm prevents movement in 50% of patients). Halothane: high solubility → slow onset, significant hepatic metabolism (20%) → hepatotoxic metabolites. Sevoflurane: low solubility → fast onset/offset, safe in children.",
        pearl: "**MAC and the oil-gas partition coefficient:** High lipid solubility = high potency = low MAC. Halothane (MAC 0.75%) is far more potent than nitrous oxide (MAC 104% — cannot achieve surgical anesthesia at 1 atm alone). **Malignant hyperthermia workup:** RYR1 or CACNA1S gene mutation → caffeine-halothane contracture test (biopsy) for screening of family members. If MH occurs: **dantrolene 2.5 mg/kg IV bolus** (blocks the RyR1 ryanodine receptor, preventing SR calcium release) + cooling + bicarbonate + hyperventilate. Keep giving dantrolene until rigidity and temperature normalize — do not stop early."
      },
      {
        name: "Barbiturates",
        aka: "Phenobarbital · Thiopental · Methohexital · Pentobarbital · Secobarbital · Primidone",
        summary: "Potentiate GABA-A by increasing chloride channel open duration. Used for seizures, anesthesia induction, and elevated ICP. Narrow therapeutic window with high addiction potential.",
        moa: "Bind **GABA-A receptor** at the barbiturate site → ↑ **duration** of Cl⁻ channel opening (vs. benzodiazepines which ↑ frequency) → membrane hyperpolarization → CNS depression",
        use: "**Phenobarbital:** status epilepticus (IV), chronic seizure prophylaxis (especially neonatal), alcohol/benzo withdrawal\n**Thiopental/Methohexital:** IV anesthesia induction (largely replaced)\n**Pentobarbital:** refractory elevated ICP (barbiturate coma)\n**Primidone:** essential tremor, seizures",
        se: "**Respiratory depression** (dose-dependent, dangerous — no reversal agent unlike benzodiazepines).\nExcessive sedation, ataxia, tolerance, physical dependence.\n**CYP450 induction** (↑ metabolism of OCPs, warfarin, antivirals, other AEDs).\nParadoxical excitation in children and elderly.\nCardiovascular depression at high doses.",
        ci: "**Porphyria** (induces hepatic ALA synthase → accumulates porphyrin precursors → attacks — key Step 1 trap).\nSevere respiratory depression without airway protection.\nActive alcohol intoxication (synergistic CNS depression).",
        pk: "**Phenobarbital:** oral/IV, t½ ~4 days (longest of common drugs), hepatic (CYP2C9/3A4), significant inducer\n**Thiopental:** IV only, ultra-short action due to redistribution to fat (not metabolism), then slow hepatic elimination\n**Primidone:** metabolized to phenobarbital",
        pearl: "**Why barbiturate overdose is more lethal than benzodiazepine overdose:** Benzodiazepines are positive allosteric modulators — they require GABA to produce any effect (ceiling effect). Barbiturates can directly open the Cl⁻ channel WITHOUT GABA at high doses, causing unlimited CNS depression → respiratory arrest. There is no reversal agent. **Porphyria** is the classic CI because barbiturates are potent inducers of ALA synthase (the rate-limiting enzyme in heme synthesis) — in acute intermittent porphyria, this floods the pathway and precipitates a crisis with severe abdominal pain, autonomic instability, and neurovisceral attacks. The 5 P's of AIP: Painful abdomen, Port-wine urine, Polyneuropathy, Psychological symptoms, Precipitated by drugs (barbiturates, sulfonamides, OCPs)."
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
        ci: "**Concurrent MAOIs** (serotonin syndrome with meperidine/tramadol — potentially fatal).\nHead trauma with ↑ ICP (CO₂ retention from respiratory depression → cerebral vasodilation).\nSevere asthma/COPD without monitoring.\n**Meperidine:** renal failure (normeperidine accumulation → seizures — avoid chronic use entirely).",
        pk: "**Morphine:** IV/IM/SC/PO, t½ ~2–3 hr, hepatic glucuronidation to **morphine-6-glucuronide** (active, accumulates in CKD → prolonged sedation)\n**Codeine:** prodrug metabolized by CYP2D6 to morphine (ultra-rapid metabolizers → toxicity; poor metabolizers → no effect)\n**Fentanyl:** 80–100× morphine potency, transdermal or IV, highly lipophilic, rapid onset, t½ ~3–4 hr\n**Methadone:** oral, t½ 25–50 hr (LONG — risk of accumulation), QTc prolongation\n**Reversal:** naloxone (IV, IM, intranasal — short t½ ~1 hr → may need redosing)",
        pearl: "**Opioids cause tolerance to all effects EXCEPT constipation and miosis** — these never develop tolerance, making them permanent liabilities. A stimulant laxative (senna/bisacodyl) must be co-prescribed; stool softeners alone are insufficient. **Meperidine is the worst opioid choice in the elderly and in renal failure** — normeperidine (toxic metabolite) accumulates and causes seizures, and it has dangerous MAOI interactions causing serotonin syndrome. **Fentanyl patches** require skin temperature warnings: fever or heating pads increase fentanyl absorption dramatically — can cause overdose in a previously stable patient."
      },
      {
        name: "NSAIDs (Non-Opioid Analgesics)",
        aka: "Ibuprofen (Advil, Motrin) · Naproxen · Indomethacin · Ketorolac · Diclofenac · Meloxicam · Celecoxib (Celebrex) — COX-2 selective | Acetaminophen (Tylenol) — Non-NSAID",
        summary: "Inhibit cyclooxygenase enzymes to reduce prostaglandin synthesis, producing analgesia, antipyresis, and anti-inflammation. Key distinctions: COX-1 (GI/platelet protection) vs. COX-2 (inflammation) selectivity; acetaminophen lacks anti-inflammatory effect.",
        moa: "**NSAIDs:** reversibly inhibit **COX-1 and COX-2** → ↓ prostaglandin/thromboxane/prostacyclin synthesis → analgesia + antipyresis + anti-inflammation.\n**Celecoxib:** selective **COX-2** inhibitor (spares COX-1 → less GI toxicity, NO antiplatelet effect).\n**Acetaminophen:** mechanism unclear — likely central COX-3 inhibition + endocannabinoid system; no peripheral anti-inflammatory effect.",
        use: "Mild-to-moderate pain; fever\n**Indomethacin:** acute gout, patent ductus arteriosus closure (IV in neonates — ↓ PGE₂ → vasoconstriction of DA), pericarditis\nOsteoarthritis (first-line); rheumatoid arthritis (adjunct); dysmenorrhea; headache/migraine\n**Acetaminophen:** mild-to-moderate pain, fever (preferred in pregnancy, peptic ulcer, aspirin-intolerant)",
        se: "**NSAIDs:** GI ulceration/bleeding (↓ COX-1 → ↓ prostaglandin-mediated mucus/bicarbonate); **renal toxicity** (↓ PGE₂/PGI₂ → renal vasoconstriction → AKI, especially in hypovolemia/HF/CKD); ↑ cardiovascular risk (COX-2 > COX-1 inhibition → ↓ PGI₂ without ↓ TXA₂ → prothrombotic — celecoxib ↑ MI risk); hyperkalemia (↓ renin → ↓ aldosterone); **Acetaminophen:** **hepatotoxicity** (toxic metabolite NAPQI overwhelms glutathione stores — major at doses >7.5–10 g/day or with alcohol/fasting)",
        ci: "**NSAIDs:** peptic ulcer/GI bleeding; severe CKD; 3rd trimester pregnancy (premature DA closure, oligohydramnios); NSAID-exacerbated respiratory disease; heart failure (Na⁺ and water retention).\n**Acetaminophen:** severe hepatic disease; chronic heavy alcohol use (CYP2E1 induction → ↑ NAPQI production).",
        pk: "**Ibuprofen:** t½ ~2 hr, hepatic (CYP2C9), renal excretion\n**Indomethacin:** most potent COX inhibitor, t½ ~4–5 hr\n**Ketorolac:** IV/IM/PO, most potent injectable NSAID — limit to 5 days (renal toxicity)\n**Celecoxib:** t½ ~11 hr, CYP2C9 substrate\n**Acetaminophen:** t½ ~2 hr, 90% glucuronidation/sulfation, ~5% CYP2E1 → NAPQI (toxic); antidote: **N-acetylcysteine** (replenishes glutathione)",
        pearl: "**Indomethacin is the most versatile NSAID on Step 1:** (1) closes a patent ductus arteriosus in premature neonates (↓ PGE₂ → ductus vasoconstricts); (2) treats acute gout flares; (3) treats pericarditis; (4) distinguishes Sweet syndrome from other diseases (responds uniquely). The flip side — it has the highest GI toxicity of all NSAIDs and the most drug interactions. **COX-2 selectivity and the cardiovascular risk paradox:** COX-2 makes PGI₂ (prostacyclin — vasodilatory, antiplatelet) in the endothelium; COX-1 makes TXA₂ in platelets. Celecoxib inhibits endothelial PGI₂ without touching platelet TXA₂ → net prothrombotic state → ↑ MI risk (Vioxx lesson)."
      },
      {
        name: "Naloxone, Naltrexone & Buprenorphine",
        aka: "Naloxone (Narcan, Evzio) · Naltrexone (Vivitrol, ReVia) · Buprenorphine (Buprenex, Subutex) · Buprenorphine/Naloxone (Suboxone)",
        summary: "Opioid receptor modulators used for reversal of opioid toxicity, addiction treatment, and partial agonist analgesia. Naloxone reverses acute overdose; naltrexone and buprenorphine support long-term opioid use disorder treatment.",
        moa: "**Naloxone/Naltrexone:** competitive **opioid receptor antagonists** (μ > κ > δ) — block all opioid effects. **Buprenorphine:** high-affinity **partial μ-agonist** + κ-antagonist → ceiling effect on respiratory depression, prevents full agonist binding (opioid blockade)",
        use: "**Naloxone:** acute opioid overdose reversal (IV, IM, intranasal)\n**Naltrexone:** opioid use disorder maintenance (oral or monthly IM depot — Vivitrol), alcohol use disorder (↓ craving/relapse via β-endorphin blockade)\n**Buprenorphine (or Buprenorphine/Naloxone):** opioid use disorder maintenance (gold standard for MAT), moderate-to-severe chronic pain",
        se: "Naloxone: precipitates acute opioid **withdrawal** (agitation, tachycardia, hypertension, vomiting — in dependent patients); Naltrexone: hepatotoxicity (high doses), opioid withdrawal if opioids on board (must be opioid-free ≥7–10 days before starting); Buprenorphine: precipitated withdrawal if given to opioid-dependent patient too early (partial agonist displaces full agonist from receptors)",
        ci: "**Naltrexone:** acute opioid use (precipitates severe withdrawal — verify opioid-free ≥7–10 days); hepatic failure (hepatotoxic at high doses); concurrent opioid analgesic need.\n**Buprenorphine initiation:** must wait until COWS score ≥8 (moderate withdrawal) to avoid precipitated withdrawal.",
        pk: "**Naloxone:** t½ ~1 hr (shorter than all opioids — risk of re-narcotization); IV onset ~2 min; IM/intranasal ~5 min\n**Naltrexone:** oral t½ ~4 hr (active 6β-naltrexol metabolite ~13 hr); hepatic\n**Buprenorphine:** SL/IV/transdermal; high lipophilicity; t½ ~35–37 hr (long — once-daily or SL film); slow dissociation from μ receptor (ceiling effect limits respiratory depression even at very high doses)",
        pearl: "**Why wait for COWS ≥8 before buprenorphine?** Buprenorphine has very high μ-receptor affinity — it will displace any full agonist occupying receptors and replace it with only partial activation. If the full agonist was providing most of the signal, removing it precipitates acute withdrawal (diaphoresis, agitation, piloerection, severe cramping). The patient feels dramatically worse. **Home induction (telehealth buprenorphine)** is now standard practice — patients can start at home once in moderate withdrawal, bypassing barriers of in-person visits. The ceiling on respiratory depression is the key safety advantage: even at 32 mg/day, buprenorphine does not cause fatal respiratory depression alone (only in combination with other CNS depressants)."
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
        ci: "**MAOIs within 14 days** (serotonin syndrome — washout 14 days; 5 weeks after fluoxetine before starting MAOI).\n**Citalopram/escitalopram:** prolonged QTc (dose limit 40 mg/20 mg respectively).\n**Paroxetine:** pregnancy (neonatal adaptation syndrome, cardiac defects — use sertraline instead).",
        pk: "**Fluoxetine:** longest t½ ~1–4 days + active metabolite norfluoxetine (~1–2 weeks) — self-tapering, MAOI washout 5 weeks after stopping\n**Paroxetine:** shortest t½ ~21 hr — worst discontinuation syndrome; strong CYP2D6 inhibitor\n**Sertraline:** preferred in pregnancy and post-MI\n**Duloxetine:** CYP1A2/2D6 substrate\n**Venlafaxine:** minimal CYP interactions",
        pearl: "**Serotonin syndrome vs. NMS — the boards love this distinction.** Both cause hyperthermia, autonomic instability, and altered consciousness, but the neuromuscular findings are opposite: **Serotonin syndrome** → clonus, hyperreflexia, tremor (excess serotonin activating spinal motor neurons). **NMS** → lead-pipe rigidity, bradyreflexia (dopamine depletion in basal ganglia). Onset also differs: serotonin syndrome develops within hours of a drug change; NMS develops over days to weeks. Cyproheptadine (5-HT2 antagonist) is the specific treatment for serotonin syndrome. Dantrolene + bromocriptine for NMS. **SSRI discontinuation syndrome** (FINISH mnemonic) is worst with paroxetine (shortest t½ of all SSRIs) — taper over weeks to avoid it."
      },
      {
        name: "Tricyclic Antidepressants (TCAs)",
        aka: "Amitriptyline (Elavil) · Nortriptyline · Imipramine · Desipramine · Clomipramine · Doxepin · Amoxapine",
        summary: "Block serotonin and norepinephrine reuptake plus multiple receptor types (muscarinic, histamine, α1, sodium channels). Used for depression, neuropathic pain, migraine prophylaxis, OCD, and enuresis. Dangerous in overdose.",
        moa: "Block **SERT + NET** (↑ 5-HT/NE) + **muscarinic (M1) receptors** (anticholinergic) + **H1 receptors** (sedation) + **α1 adrenergic receptors** (orthostatic hypotension) + **cardiac Na⁺ channels** (quinidine-like membrane stabilization → arrhythmias in overdose)",
        use: "Major depression (second-line — displaced by SSRIs)\n**Neuropathic pain:** amitriptyline, nortriptyline — first-line for diabetic neuropathy and post-herpetic neuralgia\n**Migraine prophylaxis:** amitriptyline\n**OCD:** clomipramine — most serotonergic TCA\n**Enuresis:** imipramine — ↑ bladder capacity\nFibromyalgia; chronic insomnia (low-dose doxepin/amitriptyline)",
        se: "**3 Cs:** Convulsions · Coma · Cardiotoxicity (wide QRS, prolonged QTc, arrhythmias — most dangerous in overdose); **anticholinergic effects** (dry mouth, urinary retention, constipation, blurred vision, delirium — especially elderly); **orthostatic hypotension** (α1 block); sedation (H1 block); weight gain",
        ci: "Recent MI or arrhythmia (Na⁺ channel blockade → QRS widening → VT/VF).\nMAOIs within 14 days.\nSevere hepatic disease.\n**Closed-angle glaucoma** (anticholinergic → ↑ IOP → angle closure crisis).\n**BPH** (urinary retention).\nPregnancy (congenital defects — relative).",
        pk: "Oral, first-pass metabolism (low bioavailability), highly protein-bound and lipophilic (large Vd → NOT dialyzable). Long t½ (10–25 hr for nortriptyline) — once daily dosing. Tertiary amines (amitriptyline, imipramine) → secondary amine metabolites (nortriptyline, desipramine) with fewer SE. CYP2D6 metabolizes most TCAs.",
        pearl: "**TCA overdose QRS widening is treated with sodium bicarbonate, not antiarrhythmics.** Bicarb works by two mechanisms: (1) alkalinization increases the ratio of non-ionized drug, reducing Na⁺ channel binding; (2) extra Na⁺ provides a higher electrochemical gradient to 'push open' blocked channels. Give 1–2 mEq/kg IV bolus — target serum pH 7.50–7.55. **Never give physostigmine** (once used as antidote) — it crosses the BBB and inhibits AChE → seizures in a sodium channel-blocked heart. The wide QRS is the most dangerous feature: if QRS >100 ms → sodium bicarb now; if QRS >160 ms → imminent VT/VF. Large Vd (~10–20 L/kg) means the drug is buried in tissue — dialysis removes less than 3% of the total body burden."
      },
      {
        name: "MAO Inhibitors (MAOIs)",
        aka: "Phenelzine · Tranylcypromine · Isocarboxazid — Non-selective (irreversible) | Selegiline (Eldepryl, EMSAM) — MAO-B selective | Moclobemide — Reversible MAO-A (RIMA)",
        summary: "Inhibit monoamine oxidase to increase synaptic monoamines. Used for refractory depression and Parkinson disease (selegiline). Require strict dietary tyramine restriction and carry severe drug interaction risk.",
        moa: "Inhibit **monoamine oxidase A (MAO-A: degrades 5-HT, NE, DA) and/or MAO-B (degrades DA, phenylethylamine)** → ↑ synaptic 5-HT, NE, dopamine.\nIrreversible inhibition (most agents): recovery requires new MAO enzyme synthesis → 2-week washout required after stopping.",
        use: "**Major depression** refractory to other agents (phenelzine, tranylcypromine — clinical use limited by interactions).\n**Atypical depression** (MAOIs most effective — hyperphagia, hypersomnia, rejection sensitivity).\n**Social anxiety disorder.**\n**Selegiline:** Parkinson disease (MAO-B inhibitor — preserves dopamine, used early or as adjunct to levodopa).",
        se: "**Hypertensive crisis** ('cheese reaction' — tyramine-containing foods: aged cheese, cured meats, wine, fermented foods → normally metabolized by MAO-A in gut; with MAOIs, tyramine absorbed intact → massive NE release → ↑↑ BP → hemorrhagic stroke); **serotonin syndrome** (with serotonergic drugs — SSRIs, meperidine, tramadol); **orthostatic hypotension**; insomnia, weight gain; selegiline: at high doses loses MAO-B selectivity",
        ci: "**All serotonergic drugs** (SSRIs/SNRIs/TCAs — minimum 14-day washout; 5 weeks after fluoxetine).\n**Meperidine** (fatal serotonin syndrome — absolute CI).\nAll sympathomimetics (OTC cold medications, pseudoephedrine).\nTyramine-rich foods (dietary restriction required).\nLiver disease.",
        pk: "**Phenelzine/Tranylcypromine:** oral, irreversible — effects persist 2+ weeks after stopping (new enzyme synthesis required)\n**Selegiline:** oral or transdermal patch (EMSAM — transdermal avoids GI MAO-A → fewer food interactions at low doses)\n**Moclobemide:** reversible MAO-A inhibitor (RIMA) — competitive, shorter restriction needed",
        pearl: "**The tyramine reaction mechanism:** Normally, MAO-A in the gut wall and liver metabolizes ingested tyramine (an indirect sympathomimetic in aged foods). With MAO inhibition, tyramine is absorbed intact → enters sympathetic nerve terminals → displaces NE from vesicles → floods the synapse → ↑↑ BP → hypertensive crisis → hemorrhagic stroke. The cheese reaction is most severe with strong, aged cheeses (cheddar, Parmesan, Swiss — all high tyramine). Treat the hypertensive crisis with **phentolamine** or **nitroprusside** — never β-blockers (β-blockade leaves α1 vasoconstriction unopposed, worsening hypertension). This is the same principle as pheochromocytoma management."
      },
      {
        name: "Atypical Antidepressants",
        aka: "Bupropion (Wellbutrin, Zyban) · Mirtazapine (Remeron) · Trazodone · Vilazodone · Vortioxetine",
        summary: "Mechanistically diverse antidepressants offering alternatives when SSRIs/SNRIs are inadequate or poorly tolerated. Bupropion lacks sexual dysfunction; mirtazapine promotes sleep and appetite; trazodone is used for insomnia.",
        moa: "**Bupropion:** inhibits **DAT + NET** (↑ dopamine/NE, minimal serotonin) — also **nicotinic ACh receptor antagonist**. **Mirtazapine:** blocks **α2-autoreceptors** (presynaptic → ↑ NE/5-HT release) + **H1** (sedation/weight gain) + **5-HT2/5-HT3** (less nausea/sexual dysfunction). **Trazodone:** weak SERT inhibitor + **5-HT2 antagonist** + **α1 blocker**",
        use: "**Bupropion:** MDD (especially with fatigue/hypersomnia or SSRI-induced sexual dysfunction); smoking cessation (Zyban); seasonal affective disorder; ADHD (off-label).\n**Mirtazapine:** MDD with insomnia, poor appetite, or weight loss (elderly, cancer patients).\n**Trazodone:** insomnia (low-dose); depression; PTSD nightmares.",
        se: "Bupropion: **seizures** (dose-dependent, contraindicated in bulimia/anorexia — lowers seizure threshold, risk higher with purging-induced electrolyte abnormalities), **no sexual dysfunction** (advantage over SSRIs), dry mouth, insomnia, ↑ BP; Mirtazapine: **sedation, weight gain** (H1 block), agranulocytosis (rare); Trazodone: **priapism** (α1 block → venous pooling in penis), sedation, orthostatic hypotension",
        ci: "**Bupropion:** seizure disorder (lowers threshold); eating disorders — anorexia/bulimia (electrolyte abnormalities + lowered threshold = high seizure risk); MAOIs within 14 days; abrupt alcohol/benzo withdrawal.\n**Trazodone:** MAOIs; concurrent serotonergic agents.",
        pk: "**Bupropion:** oral, t½ ~21 hr, CYP2B6 substrate and **CYP2D6 inhibitor** (↑ levels of TCAs, antipsychotics, SSRIs co-administered), active metabolite hydroxybupropion\n**Mirtazapine:** oral, t½ ~20–40 hr, hepatic (CYP1A2/2D6/3A4)\n**Trazodone:** oral, t½ ~6–9 hr, CYP3A4",
        pearl: "**Mirtazapine has an unusual dose-response relationship:** at LOW doses (7.5–15 mg), H1 blockade dominates → heavy sedation + appetite stimulation (useful in cancer cachexia, elderly with insomnia). At HIGHER doses (30–45 mg), NE/5-HT effects dominate → less sedation, more antidepressant activity. This 'start low, paradoxically less sedating' relationship is a classic exam trap. **Bupropion's seizure risk with eating disorders:** purging-induced hypokalemia and metabolic alkalosis lower the seizure threshold; bupropion further lowers it. Always screen ALL patients for eating disorders before prescribing — a history of bulimia is an absolute contraindication."
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
        ci: "**Pregnancy 1st trimester** (Ebstein anomaly — relative; balance risk vs. benefit with psychiatry).\n**Severe renal impairment** (cleared renally — accumulates dangerously).\n**Thiazide diuretics** (↓ Na⁺ → ↑ lithium reabsorption in PCT → toxicity).\n**NSAIDs** (↓ renal lithium clearance → toxicity).\nDehydration/sodium depletion (same mechanism as thiazides).",
        pk: "Oral; NOT protein-bound, NOT hepatically metabolized — renally excreted unchanged (like Na⁺, reabsorbed in PCT). Therapeutic range: **0.6–1.2 mEq/L** (maintenance); toxic >1.5 mEq/L; hemodialysis for severe toxicity (cleared by dialysis — unusual for CNS-active drug). t½ ~18–24 hr. Thiazides and NSAIDs ↑ Li⁺ levels (major interactions).",
        pearl: "**Why thiazides cause lithium toxicity:** The kidney handles Li⁺ like Na⁺. Thiazides cause mild natriuresis → the PCT compensates by reabsorbing more Na⁺ (and Li⁺ with it) → Li⁺ accumulates. Anything that depletes sodium (diarrhea, vomiting, low-salt diet, diuretics) triggers the same mechanism. **Lithium toxicity levels:** >1.5 mEq/L = mild (tremor, GI); >2.0 mEq/L = moderate (ataxia, confusion); >2.5 mEq/L = severe (seizures, cardiac). Neurological toxicity can be **permanent** even after levels normalize — a major reason to avoid toxicity. Hemodialysis is used for severe toxicity (Li⁺ is dialyzable, unlike most CNS drugs)."
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
        ci: "**Pregnancy** (highest teratogenic risk of all AEDs — neural tube defects 1–4%, cognitive effects in offspring; use only if no safer alternative).\n**Urea cycle disorders** (valproate → ↑ ammonia — potentially fatal hyperammonemia).\nHepatic disease.\n**Mitochondrial disorders/Alpers disease** in children (fatal hepatotoxicity).",
        pk: "Oral or IV; t½ ~9–16 hr; hepatic metabolism (glucuronidation + β-oxidation + CYP2C9); **NOT a CYP inducer** (unlike phenytoin/carbamazepine); inhibits CYP2C9 and epoxide hydrolase (↑ phenobarbital, lamotrigine, carbamazepine epoxide levels). Protein-bound (90%) — displacement interactions possible.",
        pearl: "**Valproate-induced hyperammonemia without hepatotoxicity** is a distinct entity — LFTs are normal, but ammonia is elevated causing encephalopathy. Mechanism: valproate inhibits carbamoyl phosphate synthetase in the urea cycle → ammonia accumulates. Treat with L-carnitine (repletes carnitine depleted by valproate) + hold drug. **Valproate and reproductive counseling:** it is the most teratogenic AED (spina bifida ~1–4%, NTDs overall, and an IQ reduction of ~6–9 points in offspring exposed in utero — dose-dependent). Should not be the first-choice AED in women of childbearing age; use lamotrigine or levetiracetam when possible."
      },
      {
        name: "Phenytoin",
        aka: "Phenytoin (Dilantin) · Fosphenytoin (Cerebyx — IV prodrug)",
        summary: "Voltage-gated sodium channel blocker with use-dependent inhibition of rapidly firing neurons. Used for tonic-clonic and partial seizures, status epilepticus, and trigeminal neuralgia. Notable for non-linear pharmacokinetics and extensive drug interactions.",
        moa: "Preferentially binds **voltage-gated Na⁺ channels** in the **inactivated state** → stabilizes inactive state → ↓ recovery from inactivation → prevents sustained high-frequency firing (use-dependent block)",
        use: "Generalized tonic-clonic and focal (partial) seizures\n**Status epilepticus:** IV fosphenytoin — second-line after benzodiazepines\nTrigeminal neuralgia (second-line); digoxin-induced arrhythmias (IV phenytoin — Class IB-like effect); post-trauma seizure prophylaxis",
        se: "**Dose-related CNS toxicity** (nystagmus → ataxia → diplopia → cognitive impairment → stupor/coma — correlates with plasma level); **gingival hyperplasia** (chronic — use dental hygiene); **hirsutism**; **coarsening of facial features**; **peripheral neuropathy** (chronic); **megaloblastic anemia** (↓ folate absorption); **osteomalacia** (↑ CYP450 → ↑ vitamin D metabolism → ↓ Ca²⁺); **SJS/toxic epidermal necrolysis** (rare but serious); Fetal hydantoin syndrome (teratogenic — cleft palate, nail/digit hypoplasia)",
        ci: "**Sinus bradycardia or heart block** (IV phenytoin — cardiac depressant; use fosphenytoin IV instead, which is safer).\nAdams-Stokes syndrome.\n**Pregnancy** (fetal hydantoin syndrome — cleft palate, nail/digit hypoplasia).\n**Porphyria** (CYP induction → precipitates attacks).",
        pk: "**Zero-order (saturable) kinetics at therapeutic levels** — small dose changes cause disproportionate level increases (Michaelis-Menten saturation → non-linear PK). Target range: 10–20 µg/mL. Strong **CYP inducer** (CYP1A2, 2C9, 3A4) → ↓ warfarin, OCP, statins, many other drugs. Fosphenytoin: water-soluble prodrug, safer IV infusion (less phlebitis), converted to phenytoin by phosphatases. IV phenytoin: must use saline (not dextrose — precipitates).",
        pearl: "**Phenytoin's zero-order kinetics at therapeutic levels** is the most dangerous aspect of its pharmacology. At low levels, elimination is first-order (proportional to concentration). Above ~10 µg/mL, hepatic CYP2C9 becomes saturated → zero-order elimination → tiny dose increases cause exponential plasma level rises. A patient at 15 µg/mL who takes one extra pill may jump to 30 µg/mL (ataxia + nystagmus). **Phenytoin is ineffective for absence seizures and may worsen them** by an unknown mechanism — this is a classic exam trap (a child presenting with staring spells is treated with ethosuximide or valproate, never phenytoin). IV phenytoin must be given in saline (precipitates in dextrose) and slowly (cardiac depression, hypotension, 'purple glove syndrome' if extravasated)."
      },
      {
        name: "Carbamazepine",
        aka: "Carbamazepine (Tegretol, Carbatrol) · Oxcarbazepine (Trileptal) · Eslicarbazepine",
        summary: "Sodium channel blocker structurally related to TCAs. Used for focal seizures, generalized tonic-clonic seizures, trigeminal neuralgia, and bipolar disorder. Notable for autoinduction and dangerous blood dyscrasias.",
        moa: "Blocks **voltage-gated Na⁺ channels** in the inactivated state → stabilizes neuronal membranes → ↓ repetitive firing; also reduces synaptic transmission of high-frequency stimulation",
        use: "Focal (partial) seizures (drug of choice); generalized tonic-clonic seizures\n**Trigeminal neuralgia:** first-line — remarkably effective\nBipolar disorder (second-line mood stabilizer, especially for rapid cycling)\n**Diabetes insipidus:** ADH-sensitizing effect — central DI adjunct",
        se: "**SIADH/hyponatremia** (↑ ADH sensitivity — common, especially in elderly); **aplastic anemia** and **agranulocytosis** (rare, potentially fatal — CBCs required); **SJS/TEN** (↑ risk with HLA-B*1502 — common in Han Chinese/Southeast Asians — screen before prescribing); diplopia/ataxia/dizziness (dose-related); **hepatotoxicity**; teratogenicity (neural tube defects — relative CI in pregnancy; folic acid supplementation); **autoinduction** (induces its own CYP3A4 metabolism → ↓ levels over first 3–4 weeks — dose may need increasing)",
        ci: "**Concurrent MAOIs** (CNS toxicity).\n**Known history of bone marrow suppression.**\n**HLA-B*1502 carriers** (↑ SJS risk — screen Southeast Asian and Chinese patients before prescribing).\nConcurrent tricyclic antidepressants (structural similarity → additive toxicity).\n**Porphyria** (strong CYP inducer → precipitates attacks).",
        pk: "Oral, t½ initially ~25–65 hr → decreases to ~12–17 hr after autoinduction (induces CYP3A4, CYP2C9, CYP1A2 — its own and many other drugs' metabolism). Strong inducer: ↓ OCP efficacy (breakthrough pregnancy), ↓ warfarin, ↓ other AEDs, ↓ cyclosporine. Active 10,11-epoxide metabolite (via CYP3A4) → also pharmacologically active. Oxcarbazepine: ketone analog, converted to active monohydroxy metabolite, less enzyme induction than carbamazepine.",
        pearl: "**Carbamazepine autoinduction timeline:** when first started, t½ is ~25–65 hr and plasma levels are relatively high. Over 3–4 weeks, CBZ induces CYP3A4, which metabolizes it faster → t½ drops to ~12–17 hr → plasma levels fall. Patients may lose seizure control 3–4 weeks into therapy as levels drop. The dose often needs to be increased once autoinduction is complete. **Trigeminal neuralgia** — the most severe pain syndrome known — responds dramatically to carbamazepine (first-line). Mechanism: blocks the hyperexcitable Na⁺ channels responsible for the paroxysmal lancinating pain. If carbamazepine fails, oxcarbazepine (less enzyme induction, less bone marrow risk) or surgical microvascular decompression."
      },
      {
        name: "Lamotrigine",
        aka: "Lamotrigine (Lamictal)",
        summary: "Broad-spectrum AED that blocks voltage-gated sodium channels and inhibits glutamate release. Used for focal and generalized epilepsy, bipolar disorder maintenance, and Lennox-Gastaut syndrome.",
        moa: "Block **voltage-gated Na⁺ channels** (inactivated state) → ↓ neuronal excitability; also inhibits presynaptic **glutamate** and **aspartate** release → ↓ excitatory neurotransmission",
        use: "Focal (partial) seizures; generalized tonic-clonic seizures; Lennox-Gastaut syndrome (↓ drop attacks); juvenile myoclonic epilepsy (adjunct); bipolar I disorder maintenance (first-line for **bipolar depression** — more effective than lithium for depressive episodes); absence seizures (second-line); trigeminal neuralgia",
        se: "**Stevens-Johnson syndrome / TEN** (most serious — higher risk with rapid titration and concurrent valproate — MUST titrate very slowly); **rash** (incidence ~10%, usually benign morbilliform — must distinguish from SJS); **blurred/double vision**, dizziness, ataxia; headache; insomnia",
        ci: "**History of lamotrigine-induced SJS/TEN** (absolute — do not rechallenge).\nChildren <2 yr on valproate + lamotrigine combination (↑ SJS risk).\n**Rapid dose escalation** (major risk factor for SJS — always titrate slowly).",
        pk: "Oral; t½ ~25 hr (monotherapy), but dramatically affected by enzyme inducers/inhibitors: **Valproate inhibits UGT → ↑ t½ to ~60 hr** (must halve lamotrigine dose + titrate very slowly). **Enzyme inducers (carbamazepine, phenytoin)** ↓ t½ to ~12 hr (must use higher doses). Hepatic glucuronidation (UGT1A4).",
        pearl: "**Lamotrigine SJS risk is entirely preventable** — it is caused by rapid titration, not the drug itself. Standard titration (25 mg/day × 2 weeks → 50 mg × 2 weeks...) gives an SJS rate of <1 in 10,000. Rapid titration (especially with valproate present) raises risk to ~1 in 1,000. The valproate interaction doubles lamotrigine levels by inhibiting UGT1A4; when adding lamotrigine to valproate, start at 12.5 mg/day (half the usual starting dose) and titrate even more slowly. **Lamotrigine is uniquely effective for bipolar depression** (the depressive phase) — lithium and valproate are better for mania. It is the only mood stabilizer that doesn't require blood-level monitoring."
      },
      {
        name: "Ethosuximide",
        aka: "Ethosuximide (Zarontin)",
        summary: "Selectively blocks T-type calcium channels in thalamic neurons to suppress absence seizures. Drug of choice for childhood absence epilepsy when seizures are the only concern.",
        moa: "Block **T-type (low-threshold) voltage-gated Ca²⁺ channels** in thalamic relay neurons → ↓ spike-wave discharges (3 Hz) characteristic of absence seizures; no sodium channel activity",
        use: "**Childhood absence epilepsy** (drug of choice when no convulsive seizures; valproate preferred if co-existing tonic-clonic seizures — broader spectrum); juvenile absence epilepsy",
        se: "**GI upset** (nausea, vomiting, abdominal pain — most common; take with food); drowsiness, hiccups; blood dyscrasias (leukopenia, aplastic anemia — rare, monitor CBC); behavioral changes; lupus-like syndrome (rare)",
        ci: "Hypersensitivity.\n**Tonic-clonic seizures without co-prescription** of valproate or another broad-spectrum AED (ethosuximide does NOT prevent tonic-clonic seizures — use valproate if both types coexist).\nSevere hepatic or renal disease.",
        pk: "Oral; t½ ~30–60 hr in adults, ~30 hr in children; hepatic CYP3A4 metabolism; 25% renal excretion unchanged. Minimal protein binding. No significant enzyme induction. Valproate ↑ ethosuximide levels by inhibiting metabolism.",
        pearl: "**Childhood absence epilepsy vs. other staring spells — the clinical distinction matters for treatment.** Absence seizures: 3-Hz spike-wave on EEG, abrupt onset/offset, no post-ictal confusion, multiple per day, precipitated by hyperventilation. Focal seizures with impaired awareness: focal EEG changes, post-ictal confusion. **Never give ethosuximide for tonic-clonic seizures** — it works only on the T-type Ca²⁺ channels in thalamic neurons that generate 3-Hz oscillations. If a child has both absence AND tonic-clonic seizures, valproate covers both. The CHILDHOOD ABSENCE EPILEPSY trial (2010) confirmed ethosuximide = valproate > lamotrigine for absence seizures, with ethosuximide causing fewer attention problems."
      },
      {
        name: "Topiramate",
        aka: "Topiramate (Topamax) · Phentermine/Topiramate (Qsymia)",
        summary: "Broad-spectrum AED with multiple mechanisms including sodium channel blockade, GABA potentiation, and AMPA/kainate receptor antagonism. Used for epilepsy, migraine prophylaxis, and weight loss.",
        moa: "Blocks **voltage-gated Na⁺ channels** (inactivated state) → ↓ repetitive firing.\nEnhances **GABA-A activity** → ↑ inhibitory tone.\nAntagonizes **AMPA/kainate glutamate receptors** → ↓ excitatory transmission.\nInhibits **carbonic anhydrase** → metabolic acidosis, kidney stone risk.",
        use: "Focal and generalized seizures; Lennox-Gastaut syndrome.\n**Migraine prophylaxis** (first-line — ↓ frequency ≥50%).\n**Obesity/weight loss** (combined with phentermine — Qsymia).\nAlcohol use disorder (off-label); binge eating disorder.",
        se: "**Cognitive impairment** ('Dopamax' — word-finding difficulty, slowed thinking — dose-dependent, often dose-limiting); **weight loss** (useful for obese patients, problematic in children); **kidney stones** (carbonic anhydrase inhibition → metabolic acidosis → ↓ urinary citrate → calcium phosphate stones); paresthesias (carbonic anhydrase in periphery); acute angle-closure glaucoma (rare but serious)",
        ci: "**Nephrolithiasis history** (carbonic anhydrase inhibition → ↑ stone risk).\n**Pregnancy** (oral clefts at high doses — teratogenic).\nPre-existing metabolic acidosis.\nConcurrent carbonic anhydrase inhibitors (additive stone/acidosis risk).",
        pk: "Oral; t½ ~19–23 hr; minimal hepatic metabolism (mainly excreted unchanged in urine — dose-reduce in CKD); moderate CYP3A4 inducer (↓ OCP efficacy — contraceptive counseling required); CYP2C19 inhibitor. Carbonic anhydrase inhibition → hyperchloremic metabolic acidosis.",
        pearl: "**'Dopamax' cognitive effects are dose-dependent and partially reversible.** The word-finding difficulty and processing slowdown are most prominent during titration and at higher doses (>200 mg/day). Lowering the dose often improves cognition while maintaining seizure/migraine control — always use the lowest effective dose. Topiramate is the **only AED that causes weight loss** (all others are neutral or cause gain) — this makes it uniquely attractive in obese patients but potentially dangerous in children, where growth must be monitored. The kidney stone risk (~1.5% vs 0.02% baseline) is from calcium phosphate stones (not calcium oxalate) because carbonic anhydrase inhibition → alkaline urine → ↑ Ca-phosphate precipitation."
      },
      {
        name: "Levetiracetam",
        aka: "Levetiracetam (Keppra) · Brivaracetam (Briviact)",
        summary: "Broad-spectrum AED with a unique mechanism targeting synaptic vesicle protein SV2A. Notable for minimal drug interactions, renal clearance, and effectiveness across many seizure types.",
        moa: "Binds **synaptic vesicle protein 2A (SV2A)** → modulates synaptic vesicle exocytosis → ↓ neurotransmitter release from rapidly firing neurons.\nAlso modulates GABA and AMPA receptor function (minor contributions).",
        use: "Focal (partial) seizures; juvenile myoclonic epilepsy; myoclonic seizures; tonic-clonic seizures; status epilepticus (IV levetiracetam — increasingly used instead of phenytoin, second-line after benzodiazepines); migraine prophylaxis; post-traumatic seizure prophylaxis",
        se: "**Behavioral/psychiatric effects** — irritability, agitation, aggression, psychosis (most clinically significant, especially in patients with pre-existing psychiatric disorders — unique among AEDs); somnolence; dizziness; anemia (rare)",
        ci: "Severe renal failure without dose adjustment (renally cleared — dose-reduce based on CrCl).\nPrior behavioral/psychiatric adverse reaction to levetiracetam.",
        pk: "Oral or IV; t½ ~6–8 hr; **minimal hepatic metabolism** (largely excreted unchanged by kidneys — CrCl-based dosing); **no CYP interactions** — major advantage over phenytoin/carbamazepine/valproate; no protein binding; not enzyme-inducing. IV and oral bioequivalent — IV loading is fast and effective.",
        pearl: "**Levetiracetam has replaced phenytoin at many centers for acute seizure management** — the ESETT and ConSEPT trials showed levetiracetam was non-inferior to fosphenytoin/phenytoin for status epilepticus with fewer adverse effects (no cardiac monitoring needed, no purple glove syndrome, no hypotension with rapid infusion). The 'Keppra rage' (irritability, aggression, psychosis) occurs in ~10–15% of patients. **Pyridoxine (vitamin B6) at 100 mg/day** may reduce behavioral side effects — the mechanism is unclear but clinically it helps some patients. Levetiracetam is also the safest AED in pregnancy (no teratogenic signal), making it increasingly preferred for women of childbearing potential."
      },
      {
        name: "Gabapentin, Tiagabine & Vigabatrin",
        aka: "Gabapentin (Neurontin) · Pregabalin (Lyrica) — Calcium channel modulators | Tiagabine (Gabitril) — GABA reuptake inhibitor | Vigabatrin (Sabril) — GABA transaminase inhibitor",
        summary: "GABAergic or voltage-gated calcium channel modulating AEDs with distinct indications including neuropathic pain, anxiety, and refractory seizures. Vigabatrin causes permanent visual field loss.",
        moa: "**Gabapentin/Pregabalin:** bind **α2δ subunit of voltage-gated Ca²⁺ channels** → ↓ calcium influx at presynaptic terminals → ↓ neurotransmitter release (structural GABA analogs but do NOT bind GABA receptors).\n**Tiagabine:** inhibit **GABA transporter (GAT-1)** → ↓ GABA reuptake → ↑ synaptic GABA.\n**Vigabatrin:** irreversibly inhibit **GABA-transaminase (GABA-T)** → ↓ GABA degradation → ↑ GABA.",
        use: "**Gabapentin:** focal seizures (adjunct); neuropathic pain (diabetic neuropathy, post-herpetic neuralgia — first-line); restless legs syndrome; fibromyalgia; alcohol withdrawal (off-label).\n**Pregabalin:** focal seizures; neuropathic pain; fibromyalgia; generalized anxiety disorder (Schedule V).\n**Tiagabine:** focal seizures (adjunct only).\n**Vigabatrin:** infantile spasms/West syndrome (drug of choice); complex partial seizures refractory to other AEDs.",
        se: "Gabapentin/pregabalin: **somnolence, dizziness, peripheral edema**, weight gain, ataxia, abuse potential (euphoria at high doses); Tiagabine: seizures (off-label use — can trigger new-onset seizures), dizziness; **Vigabatrin: permanent bilateral peripheral visual field defects** (retinal toxicity from GABA accumulation — requires regular visual field testing, FDA REMS program — weigh benefit vs. irreversible vision loss)",
        ci: "**Vigabatrin:** other visual disorders (additive risk) unless seizure benefit clearly outweighs irreversible vision loss (FDA REMS program required).\n**Tiagabine:** off-label use without epilepsy (paradoxical new-onset seizures).\n**Gabapentin:** severe renal failure without dose adjustment.",
        pk: "Gabapentin: oral, **non-linear (saturable) absorption** (transporter-mediated — larger doses have lower %bioavailability), renally excreted unchanged, NO hepatic metabolism, NO drug interactions (major advantage). Pregabalin: linear absorption, renally cleared. Tiagabine: oral, t½ ~7 hr, hepatic (CYP3A4). Vigabatrin: oral, t½ ~5–8 hr, renally excreted, irreversible mechanism (enzyme resynthesis needed for recovery — days/weeks).",
        pearl: "**Gabapentin's saturable intestinal absorption** is clinically important: at doses >1800 mg/day, fractional absorption decreases (transporters become saturated). This is why splitting into 3 doses is more effective than one large dose, and why some patients need very high doses to achieve therapeutic tissue levels. **Vigabatrin and infantile spasms (West syndrome):** the hypsarrhythmia EEG pattern and infantile spasms respond dramatically to vigabatrin — it is the drug of choice especially in tuberous sclerosis complex where vigabatrin's visual field risk is accepted given the severity of the epilepsy. Vigabatrin-induced visual field loss starts peripherally and can progress to tunnel vision — required baseline and every-3-month visual field assessments."
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
        moa: "Competitive antagonism at **D2 (dopamine 2) receptors** in mesolimbic pathway → ↓ positive symptoms of psychosis.\nAlso block D1, H1, muscarinic (M1), α1, and 5-HT2A receptors (especially low-potency agents) → multiple additional side effects.",
        use: "Schizophrenia (positive symptoms — hallucinations, delusions); acute psychosis and agitation (haloperidol IV/IM); Tourette syndrome (haloperidol); intractable hiccups (chlorpromazine — D2 in vomiting center); nausea/vomiting (antiemetic use); delirium (haloperidol IV — most evidence in ICU)",
        se: "**EPS (extrapyramidal symptoms):** Acute dystonia (hours) → Akathisia (days) → Parkinsonism (weeks) → Tardive dyskinesia (months-years, often irreversible) — **higher potency = more EPS** (haloperidol worst); **Neuroleptic malignant syndrome (NMS):** hyperthermia + lead-pipe rigidity + altered consciousness + autonomic instability + ↑ CK (discontinue drug + supportive care + dantrolene/bromocriptine); Anticholinergic effects (dry mouth, urinary retention — low-potency agents); **α1 blockade:** orthostatic hypotension; **H1 blockade:** sedation; Thioridazine: retinal pigmentation + QTc prolongation (avoid); **Hyperprolactinemia** (D2 block in tuberoinfundibular pathway → ↑ prolactin → galactorrhea, amenorrhea, impotence)",
        ci: "CNS depression/coma; concurrent high-dose CNS depressants.\n**Parkinson disease** (D2 blockade worsens motor symptoms — use quetiapine or clozapine instead).\n**Prolonged QTc** (especially thioridazine).\nPheochromocytoma (phenothiazines may precipitate hypertensive crisis).",
        pk: "High-potency FGAs (haloperidol, fluphenazine): high D2 affinity, more EPS, less anticholinergic. Low-potency FGAs (chlorpromazine, thioridazine): lower D2 affinity, less EPS, more anticholinergic/sedative/orthostatic effects. Most: oral or IM; long-acting depot IM formulations (fluphenazine decanoate, haloperidol decanoate — monthly injection for adherence). Haloperidol IV: effective for acute agitation in ICU/ED.",
        pearl: "**EPS is mechanistically explained by the 4 dopamine pathways:** (1) Mesolimbic: D2 block → ↓ positive symptoms (desired). (2) Mesocortical: D2 block → worsens negative symptoms and cognition (unwanted). (3) Nigrostriatal: D2 block → EPS (unwanted). (4) Tuberoinfundibular: D2 block → ↑ prolactin → galactorrhea/amenorrhea (unwanted). The FGA's lack of selectivity for pathway 1 drives all the adverse effects. **Tardive dyskinesia** (involuntary orofacial/choreiform movements) reflects dopamine receptor upregulation from chronic blockade — it can be irreversible. VMAT2 inhibitors (valbenazine, deutetrabenazine) are FDA-approved treatments; they deplete presynaptic dopamine and reduce the hypersensitive receptor drive."
      },
      {
        name: "Antipsychotics — Second Generation (SGAs / Atypicals)",
        aka: "Clozapine (Clozaril) · Olanzapine (Zyprexa) · Risperidone (Risperdal) · Quetiapine (Seroquel) · Aripiprazole (Abilify) · Ziprasidone · Paliperidone · Lurasidone",
        summary: "Serotonin-dopamine antagonists (or partial agonists) with broader receptor profiles than FGAs. Lower risk of EPS and tardive dyskinesia but significant metabolic side effects; clozapine uniquely effective for treatment-resistant schizophrenia.",
        moa: "**5-HT2A antagonism** + **D2 antagonism** (lower affinity, faster dissociation than FGAs) → ↓ positive symptoms with less EPS.\n**Clozapine:** D1/D4 > D2 block + multiple other receptors (muscarinic, H1, α) — unique profile.\n**Aripiprazole:** partial **D2 agonist** + 5-HT1A partial agonist + 5-HT2A antagonist — acts as a dopamine stabilizer (activates or inhibits depending on baseline dopamine tone).",
        use: "Schizophrenia (positive and negative symptoms); bipolar disorder (olanzapine, quetiapine, aripiprazole); **Clozapine: treatment-resistant schizophrenia** (most effective antipsychotic — reduces suicide in schizophrenia, unique indication) + psychosis in Parkinson's (only SGA safe for this); adjunct in refractory MDD (aripiprazole, quetiapine, olanzapine); Tourette syndrome (aripiprazole); nausea (prochlorperazine, promethazine — older SGAs)",
        se: "**Metabolic syndrome** (weight gain + hyperglycemia + dyslipidemia — olanzapine and clozapine worst); **Clozapine:** **agranulocytosis** (1–2% — requires mandatory weekly then biweekly then monthly CBC monitoring via REMS), **myocarditis** (clozapine — rare but fatal, check troponin in first month), hypersalivation, seizures (↑ risk >600 mg/day); QTc prolongation (ziprasidone most); hyperprolactinemia (risperidone > others — most D2-like of SGAs); Aripiprazole: akathisia (partial D2 agonism → may cause/worsen akathisia)",
        ci: "**Clozapine:** severe neutropenia or agranulocytosis history (absolute); severe cardiac toxicity risk.\n**Ziprasidone:** prolonged QTc; concurrent QTc-prolonging medications.\n**Parkinson disease:** most SGAs worsen motor symptoms — use clozapine or quetiapine only.",
        pk: "All oral (most available as IM for acute use). Clozapine: t½ ~12 hr, CYP1A2 (smoking induces — need higher doses in smokers; abrupt smoking cessation → ↑ levels → toxicity), CYP3A4; weekly CBC for 6 months → biweekly 6 months → monthly if stable ANC. Olanzapine: t½ ~30 hr, CYP1A2 + CYP2D6. Aripiprazole: t½ ~75 hr (longest), CYP2D6 + CYP3A4. Quetiapine: t½ ~7 hr, CYP3A4; low EPS even at high doses.",
        pearl: "**Clozapine's unique benefit in treatment-resistant schizophrenia** is thought to reflect its atypical receptor profile (high D4, low D2 affinity) plus its uniquely high 5-HT2A/D2 ratio. Approximately 30–60% of treatment-resistant patients respond to clozapine after failing 2+ other antipsychotics. The **REMS monitoring schedule**: weekly CBCs for first 6 months, biweekly for next 6 months, then monthly if ANC remains stable. If ANC falls below 1000/µL, stop permanently. **Metabolic syndrome** with olanzapine/clozapine is the most common long-term harm — monitor fasting glucose, lipids, and weight every 3 months. Aripiprazole and ziprasidone are the most metabolically neutral SGAs."
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
        ci: "**Concurrent non-selective MAOIs** (hypertensive crisis — discontinue MAOI ≥2 weeks before).\n**Closed-angle glaucoma** (dopamine may ↑ IOP).\nActive malignant melanoma (theoretical — dopamine metabolism → melanin; debated).",
        pk: "Oral, absorbed in small intestine (amino acid transporter — high-protein meals compete → reduce absorption); short t½ ~1–3 hr (IR formulation → pulsatile DA → fluctuations; ER formulation smooths levels)\n**Controlled-release options:** Sinemet CR or Rytary (extended-release bead capsule) reduce fluctuations\n**COMT inhibitors** (entacapone/tolcapone) or **MAO-B inhibitors** (selegiline, rasagiline) extend levodopa effect",
        pearl: "**The levodopa therapeutic window narrows with disease progression** — early PD responds smoothly; late PD oscillates between dyskinesias (peak dose, too much DA) and off-states (trough, too little DA). **Amantadine** (originally an antiviral) is the only drug that reduces levodopa-induced dyskinesias — it acts as an NMDA receptor antagonist in the basal ganglia, reducing aberrant glutamatergic activity that drives dyskinesias. High-protein meals compete with levodopa at intestinal amino acid transporters — patients with severe motor fluctuations may benefit from redistributing dietary protein to evening meals."
      },
      {
        name: "Dopamine Agonists (Parkinson's)",
        aka: "Pramipexole (Mirapex) · Ropinirole (Requip) · Rotigotine (Neupro — transdermal patch) · Bromocriptine · Cabergoline",
        summary: "Directly activate dopamine receptors to improve Parkinson symptoms without requiring metabolic conversion. Used as initial monotherapy in younger patients to delay levodopa complications, or as adjunct to levodopa.",
        moa: "Direct agonists at **D2, D3, D4 dopamine receptors** in striatum and limbic system → ↑ dopaminergic tone without requiring functional nigrostriatal neurons.\nBromocriptine/cabergoline: ergot derivatives, also agonize D2 (and D1/5-HT receptors).",
        use: "**Parkinson disease:** monotherapy in younger patients to delay levodopa and reduce dyskinesia risk; adjunct in advanced PD to smooth out motor fluctuations\n**Restless legs syndrome:** pramipexole, ropinirole — FDA-approved first-line\n**Hyperprolactinemia/prolactinoma:** bromocriptine, cabergoline — dopamine agonism suppresses prolactin secretion\n**Type 2 diabetes:** bromocriptine (Cycloset) — FDA-approved, improves insulin sensitivity",
        se: "**Impulse control disorders** (pathological gambling, hypersexuality, binge eating, compulsive shopping — all dopamine agonists, especially pramipexole — warn all patients explicitly); **sleep attacks** (sudden onset sleep without warning — dangerous while driving — FDA warning); nausea, orthostatic hypotension; hallucinations/psychosis (esp. elderly); **Ergot derivatives** (bromocriptine, cabergoline): cardiac fibrosis (pleuropulmonary/cardiac valvular fibrosis — especially cabergoline at high doses → echocardiogram monitoring), Raynaud phenomenon",
        ci: "**Ergot derivatives (bromocriptine, cabergoline):** cardiovascular disease; pre-existing cardiac valvular disease (cabergoline-induced fibrosis).\nUncontrolled psychiatric disorders (hallucinations).\nHistory of impulse control disorder.",
        pk: "**Pramipexole:** oral, t½ ~8–12 hr, renally excreted (dose-reduce in CKD)\n**Ropinirole:** oral, hepatic (CYP1A2 — smoking ↑ clearance)\n**Rotigotine:** transdermal patch, 24-hr delivery (avoids first-pass, more consistent levels)\n**Bromocriptine:** oral, t½ ~6 hr, hepatic\n**Cabergoline:** oral, t½ ~65 hr (very long — weekly or twice-weekly dosing)",
        pearl: "**Dopamine agonist impulse control disorders (ICDs) are a treatment emergency.** Pathological gambling, compulsive sexual behavior, binge eating, and compulsive shopping occur in up to 17% of patients — higher with pramipexole than ropinirole. The D3 receptor in the nucleus accumbens is the primary driver. Patients often don't volunteer these symptoms due to shame — always ask directly. Management: reduce/stop agonist, switch to levodopa, or add naltrexone (reduces reward behavior). **Cabergoline cardiac valvulopathy** — 5-HT2B receptor activation on cardiac fibroblasts → fibrosis. Higher risk with higher doses (used for prolactinoma). Echocardiogram monitoring every 6–12 months for patients on chronic cabergoline."
      },
      {
        name: "Entacapone & Tolcapone (COMT Inhibitors)",
        aka: "Entacapone (Comtan) · Tolcapone (Tasmar) · Carbidopa/Levodopa/Entacapone (Stalevo)",
        summary: "Inhibit catechol-O-methyltransferase to prolong levodopa action by blocking its peripheral degradation. Used as adjunct to levodopa/carbidopa to reduce wearing-off fluctuations.",
        moa: "Inhibit **COMT (catechol-O-methyltransferase)** → ↓ O-methylation of levodopa to 3-OMD → ↑ plasma levodopa t½ and bioavailability → smoother, more sustained dopamine levels in CNS.\nNo anti-Parkinsonian effect as monotherapy — must be combined with levodopa/carbidopa.",
        use: "Adjunct to carbidopa/levodopa in Parkinson disease to reduce wearing-off; always combined with levodopa (alone has no antiparkinsonian effect); Stalevo combination tablet simplifies regimen",
        se: "**Entacapone:** diarrhea (most common — dose-dependent, can be severe), nausea, urine discoloration (orange-brown — harmless, from catechol metabolites), dyskinesias (↑ effective levodopa → more peak-dose dyskinesia — may need to reduce levodopa dose); **Tolcapone: fulminant hepatotoxicity** (rare but fatal — liver function monitoring required, more restricted use than entacapone)",
        ci: "**Tolcapone:** hepatic disease (hepatotoxicity risk); concurrent non-selective MAOIs (both inhibit catecholamine degradation → hypertensive crisis).\n**Entacapone:** concurrent non-selective MAOIs.",
        pk: "Both: oral, hepatic glucuronidation, poor CNS penetration (peripheral COMT inhibition). Entacapone: t½ ~2 hr, must be taken with each levodopa dose (3–4×/day). Tolcapone: t½ ~2–3 hr, also 3× daily; inhibits both peripheral and central COMT (crosses BBB — ↑ efficacy but ↑ hepatic risk). Available as Stalevo (levodopa + carbidopa + entacapone in one tablet).",
        pearl: "**The COMT inhibitor drug interaction with non-selective MAOIs is dangerous but logical:** both pathways — COMT and MAO — degrade catecholamines; blocking both simultaneously causes massive catecholamine accumulation → hypertensive crisis. MAO-B inhibitors (selegiline, rasagiline) used in PD are safe with COMT inhibitors because they only block DA degradation, not the full catecholamine cascade. **Tolcapone's hepatotoxicity** — three fatal cases of fulminant hepatic necrosis led to near-withdrawal from the market. Current restrictions: informed consent required, LFTs every 2 weeks for first year, then every 4 weeks. Use entacapone first; tolcapone only if entacapone fails."
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
        moa: "**Reverse monoamine transporters (DAT, NET, SERT)** → force release of dopamine, norepinephrine, and serotonin from presynaptic terminals into the synapse; also inhibit MAO.\n**Methylphenidate:** primarily blocks DAT/NET reuptake (does not reverse the transporter — lower abuse potential than amphetamines).",
        use: "ADHD (first-line pharmacotherapy); narcolepsy; obesity (short-term, amphetamines); binge eating disorder (lisdexamfetamine)",
        se: "↑ BP, ↑ HR, **insomnia**, **anorexia/weight loss**, headache, anxiety, psychosis at high doses; growth suppression in children (monitor height); **high abuse/dependence potential**; withdrawal: fatigue, hypersomnia, hyperphagia, dysphoria",
        ci: "**MAO inhibitors within 14 days** (serotonin syndrome/hypertensive crisis).\nCardiovascular disease or structural heart abnormality.\nUncontrolled hypertension.\nHistory of psychosis (dopamine excess → psychosis/mania).\nGlaucoma (↑ sympathetic tone → ↑ IOP).",
        pk: "**Amphetamines:** oral, t½ ~10–12 hr (pH-dependent renal elimination — alkaline urine ↑ reabsorption → ↑ t½); hepatic (CYP2D6)\n**Methylphenidate:** oral, t½ ~3–4 hr (IR) or 6–8 hr (ER); ester hydrolysis to ritalinic acid\n**Lisdexamfetamine:** prodrug — cleaved by red blood cells to d-amphetamine",
        pearl: "**Amphetamines vs. methylphenidate — a mechanistic distinction with clinical meaning.** Amphetamines reverse DAT (actively pump DA out) → massive DA surge → higher euphoria and higher abuse potential. Methylphenidate blocks DAT but doesn't reverse it → more modest DA increase → lower abuse potential (though still Schedule II). **Prodrug lisdexamfetamine (Vyvanse)** is cleaved by red blood cell enzymes to active d-amphetamine — the rate-limited conversion produces slower peak DA rise, further reducing abuse potential vs. immediate-release amphetamine. ADHD treatment paradox: stimulants calm hyperactivity by activating prefrontal dopamine/NE pathways that inhibit impulsive behavior — the 'calming effect' is not diagnostic; non-ADHD individuals also become more focused on stimulants."
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
        moa: "Selective agonists at **5-HT1B receptors** (intracranial blood vessels → vasoconstriction → ↓ meningeal vasodilation and neurogenic inflammation).\nAlso agonize **5-HT1D receptors** (presynaptic on trigeminal sensory neurons → ↓ CGRP and substance P release → ↓ nociceptive transmission).",
        use: "Acute moderate-to-severe migraine (first-line abortive — especially when analgesics fail)\nCluster headache (sumatriptan SC — only agent approved for cluster)\nMenstrual migraine (frovatriptan — long t½ → mini-prophylaxis over menstrual period)",
        se: "**Chest tightness/pressure** ('triptan sensations' — 5-HT1B coronary vasoconstriction — usually benign; rarely true coronary vasospasm)\nFlushing, tingling, warmth, paresthesias; nausea; dizziness\n**Serotonin syndrome** (with MAOIs, SSRIs — use with caution)\n**Medication overuse headache** (>10–15 uses/month → paradoxical ↑ frequency)",
        ci: "**CAD, angina, prior MI** (coronary 5-HT1B vasoconstriction → ischemia).\n**Uncontrolled hypertension** (further ↑ BP).\n**Cerebrovascular disease / TIA / stroke.**\nPrinzmetal angina; hemiplegic or basilar migraine (ischemic complications).\n**Concurrent MAOIs** (serotonin syndrome).\nConcurrent ergotamine (separate by ≥24 hr).",
        pk: "**Sumatriptan:** oral (t½ ~2 hr), SC (fastest — onset 10–20 min), nasal spray, patch\n**Eletriptan/rizatriptan:** oral, rapid onset, t½ ~2–3 hr (best for quick relief)\n**Frovatriptan:** t½ ~26 hr (slowest onset — best for prolonged/menstrual migraine)\nAll: hepatic CYP3A4 (most); SC provides fastest plasma peak",
        pearl: "**CGRP is now the primary target in migraine pharmacology.** The newer anti-CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab) and CGRP receptor antagonists (rimegepant, ubrogepant) are transforming migraine prevention and acute treatment. Unlike triptans, CGRP antagonists have **no cardiovascular contraindication** — safe in patients with CAD where triptans are forbidden. **Medication overuse headache (MOH)** is a critical clinical trap: using triptans >10 days/month for >3 months causes central sensitization → chronic daily headache. The treatment is to withdraw the overused medication (produces transient worsening) while bridging with naproxen or corticosteroids."
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
        aka: "Penicillin G (IV/IM) · Penicillin V (oral) · Benzathine PCN G · Procaine PCN G",
        summary: "Narrow-spectrum β-lactams. First-line for strep pharyngitis, syphilis, and rheumatic fever prophylaxis.",
        moa: "Bind **penicillin-binding proteins (PBPs)** → block peptidoglycan cross-linking → osmotic lysis.\nBactericidal against actively dividing organisms.",
        use: "**Strep pharyngitis:** PCN V oral\n**Rheumatic fever prophylaxis:** benzathine G IM monthly\n**Syphilis** (primary/secondary/latent): benzathine G IM × 1\n**Neurosyphilis:** PCN G IV × 10–14 days\nAlso: meningococcal meningitis, clostridial infections, actinomycosis",
        se: "**Hypersensitivity** (IgE-mediated anaphylaxis ~0.01%; ~1–2% cross-reactivity with cephalosporins)\n**Jarisch-Herxheimer reaction** — fever/chills/hypotension 2–8 hr after starting syphilis/Lyme therapy; cytokine release, NOT allergy",
        ci: "**PCN anaphylaxis** (desensitize for critical indications)\nNote: Jarisch-Herxheimer ≠ allergy — treat with antipyretics, continue therapy",
        pk: "**PCN G:** IV/IM, t½ ~30 min, acid-labile, renally excreted\n**PCN V:** acid-stable oral\n**Benzathine G:** IM depot, detectable 2–4 weeks — ideal for prophylaxis; **inadequate CSF penetration** (cannot treat neurosyphilis)\nAll: time-dependent killing",
        pearl: "**Jarisch-Herxheimer:** massive spirochete killing → TNF-α/IL-6 spike → fever + rigors within 1–2 hr. Occurs in ~50–75% of syphilis treatment. Self-limited, peaks at 4–8 hr — **do not stop therapy.**\n**Benzathine vs. neurosyphilis:** excellent serum levels but CSF penetration is inadequate — treponemes in CSF require IV PCN G (completely different regimen)."
      },
      {
        name: "Anti-Staphylococcal Penicillins",
        aka: "Nafcillin · Oxacillin · Dicloxacillin (oral) · Cloxacillin",
        summary: "Beta-lactamase-resistant PCNs for **MSSA**. Preferred over vancomycin for MSSA bacteremia/endocarditis — superior outcomes.",
        moa: "Bind PBPs → bactericidal. Bulky acyl side chain **sterically inhibits** staphylococcal β-lactamase.",
        use: "**MSSA bacteremia/endocarditis:** drug of choice (superior to vancomycin)\nMSSA osteomyelitis, septic arthritis, skin/soft tissue infections\nSurgical prophylaxis (orthopedic/cardiac)",
        se: "Hypersensitivity (class effect)\n**Nafcillin:** hepatotoxicity (hepatic elimination)\nPhlebitis; interstitial nephritis (rare)",
        ci: "**PCN anaphylaxis**\n**MRSA** — PBP2a confers resistance; use vancomycin or daptomycin\nSevere hepatic disease (nafcillin — biliary accumulation risk)",
        pk: "**Nafcillin/Oxacillin:** IV only; **nafcillin: hepatic/biliary** elimination — no renal dose adjustment (unique among β-lactams)\n**Dicloxacillin:** oral; take on empty stomach (food ↓ absorption)\nAll: time-dependent killing",
        pearl: "**Always de-escalate to nafcillin for MSSA bacteremia.** Multiple RCTs show ~15–20% lower 30-day mortality vs. vancomycin (vancomycin is merely bacteriostatic against staph; nafcillin is rapidly bactericidal).\nIn PCN-allergic patients, consider skin testing — the mortality benefit often justifies desensitization."
      },
      {
        name: "Aminopenicillins",
        aka: "Ampicillin · Amoxicillin · Ampicillin-Sulbactam (Unasyn) · Amoxicillin-Clavulanate (Augmentin)",
        summary: "Extended-spectrum PCNs adding H. influenzae, E. coli, and Listeria coverage. BLI combinations restore activity against β-lactamase producers.",
        moa: "Bind PBPs → bactericidal. Amino group enhances gram-negative outer membrane penetration.\n**BLIs** (clavulanate, sulbactam): irreversible suicide inhibitors of β-lactamase.",
        use: "**Ampicillin:** Listeria (only active β-lactam — cephalosporins fail); enterococcal UTI/endocarditis; GBS intrapartum prophylaxis; meningitis empiric coverage in elderly/immunocompromised\n**Amoxicillin:** H. pylori, dental endocarditis prophylaxis, otitis media, early Lyme\n**Augmentin:** animal/human bites, sinusitis, polymicrobial skin infections\n**Unasyn:** intra-abdominal/pelvic infections",
        se: "Hypersensitivity\n**Ampicillin rash** (~80–100% in active EBV mono or CLL) — T-cell mediated, NOT IgE, does NOT indicate PCN allergy\nGI diarrhea (clavulanate); C. difficile",
        ci: "**PCN anaphylaxis**\n**Active EBV mononucleosis** — ampicillin/amoxicillin predictably causes maculopapular rash; use alternative",
        pk: "**Ampicillin:** IV/IM only (poor oral absorption); renal excretion\n**Amoxicillin:** oral bioavailability ~80%\n**Augmentin:** oral; clavulanate causes diarrhea\nAll renally eliminated — dose-reduce in CKD",
        pearl: "**Ampicillin rash in EBV mono:** B cells produce IgM cross-reacting with ampicillin metabolites → maculopapular (not urticarial) rash via T-cell mechanism. Resolves without treatment; does **not** predict future PCN allergy.\n**Listeria meningitis:** no cephalosporin works (intrinsic PBP resistance). Classic vignette: elderly + meningitis + negative gram stain → add ampicillin empirically."
      },
      {
        name: "Extended-Spectrum Penicillins",
        aka: "Piperacillin-Tazobactam (Pip-Tazo, Zosyn) · Ticarcillin-Clavulanate (Timentin)",
        summary: "Broadest gram+/gram−/anaerobic coverage of all PCNs. Pip-tazo is the workhorse for nosocomial and polymicrobial infections.",
        moa: "**Piperacillin:** extended PBP binding with **anti-pseudomonal activity** (ureidopenicillin side chain penetrates Pseudomonas outer membrane).\n**Tazobactam:** irreversible β-lactamase inhibitor → protects against ESBL-producing Klebsiella, E. coli, anaerobes.",
        use: "Hospital-acquired pneumonia, UTI, bacteremia\nPolymicrobial abdominal infections\n**Febrile neutropenia** (empiric — Pseudomonas coverage)\nComplicated skin/soft tissue, diabetic foot, biliary sepsis",
        se: "Hypersensitivity\n**Hypokalemia** (non-reabsorbable anion → distal tubular K⁺ loss — replace aggressively in ICU)\nThrombocytopenia; ↑ LFTs\nNeurotoxicity (non-convulsive status) at high doses in renal failure",
        ci: "**PCN anaphylaxis**\n**ESBL bacteremia** — inoculum effect causes clinical failure despite in vitro susceptibility; use carbapenem",
        pk: "IV only; t½ ~1 hr, renally excreted — dose-reduce in CKD\nTime-dependent killing → **extended 4-hr infusion** optimizes PD attainment vs. Pseudomonas",
        pearl: "**MERINO trial (2018):** pip-tazo vs. meropenem for ESBL bacteremia — pip-tazo had 3× higher 30-day mortality (12.3% vs. 3.7%). **Inoculum effect:** high bacterial burden raises pip-tazo MICs above achievable concentrations. Always use carbapenem for ESBL bacteremia.\nPip-tazo remains appropriate for uncomplicated ESBL UTI (low inoculum, high urinary concentrations)."
      },
      {
        name: "Cephalosporins",
        aka: "1G: Cefazolin · Cephalexin | 2G: Cefuroxime · Cefoxitin | 3G: Ceftriaxone · Ceftazidime · Cefixime | 4G: Cefepime | 5G: Ceftaroline",
        summary: "β-lactams with progressively broader gram-negative coverage across generations. Only **5G ceftaroline** covers MRSA. Ceftriaxone is most versatile; cefazolin dominates surgical prophylaxis.",
        moa: "Bind PBPs → inhibit peptidoglycan transpeptidation → bactericidal.\nMore β-lactamase-resistant than PCNs, but susceptible to ESBLs and carbapenemases.",
        use: "**1G (Cefazolin):** surgical prophylaxis, MSSA skin infections\n**2G (Cefoxitin):** polymicrobial/GYN/abdominal (anaerobic coverage)\n**3G (Ceftriaxone):** meningitis, gonorrhea, CAP, Lyme, typhoid\n**Ceftazidime:** Pseudomonas\n**4G (Cefepime):** febrile neutropenia, nosocomial + Pseudomonas risk\n**5G (Ceftaroline):** MRSA skin infections, CAP",
        se: "Hypersensitivity (1–2% cross-reactivity with PCNs — based on shared R1 side chains, not the β-lactam ring)\n**Ceftriaxone:** biliary sludge/pseudolithiasis (especially neonates)\nDisulfiram reaction (MTT side-chain agents: cefotetan, cefoperazone); C. difficile",
        ci: "Severe cephalosporin allergy\n**Ceftriaxone + IV calcium in neonates** — fatal precipitation (absolute)\nESBL bacteremia (carbapenem required)\n**Listeria** — all generations innately resistant",
        pk: "Most renally eliminated — dose-reduce in CKD\n**Ceftriaxone:** t½ ~8 hr (once daily); ~50% biliary excretion\n**Cefazolin:** t½ ~1.8 hr; redose every 4 hr intraoperatively\nAll: time-dependent killing",
        pearl: "**The 10% cross-reactivity figure is a myth.** Modern data show PCN-cephalosporin cross-reactivity is only ~1–2%, driven by shared R1 side chains (not the β-lactam ring). Non-anaphylactic PCN reactions generally do not preclude cephalosporin use.\n**Ceftaroline** is the only cephalosporin covering MRSA — it binds PBP2a, the altered PBP conferring methicillin resistance."
      },
      {
        name: "Carbapenems & Monobactams",
        aka: "Imipenem-Cilastatin · Meropenem · Ertapenem — Carbapenems | Aztreonam — Monobactam",
        summary: "Carbapenems are the broadest β-lactams, covering ESBL gram-negatives and anaerobes. Aztreonam is gram-negative-only and safe in PCN-allergic patients.",
        moa: "**Carbapenems:** bind all PBPs; stable to most β-lactamases except carbapenemases (KPC, NDM, OXA-48).\n**Aztreonam:** binds **PBP3** of aerobic gram-negatives only (including Pseudomonas); no gram-positive or anaerobic activity.",
        use: "**Carbapenems:** ESBL organisms, MDR gram-negatives, polymicrobial abdominal/pelvic infections, febrile neutropenia\n**Ertapenem:** community-acquired ESBL, outpatient IV therapy (NO Pseudomonas/Acinetobacter/enterococcal coverage)\n**Meropenem:** preferred for CNS infections (lower seizure risk vs. imipenem)\n**Aztreonam:** gram-negative infections in PCN-allergic patients; Pseudomonas in cystic fibrosis",
        se: "**Carbapenems:** seizures (imipenem >> meropenem/ertapenem); GI; C. difficile; ~1% cross-reactivity with PCN allergy\n**Aztreonam:** minimal cross-reactivity with β-lactams — **safe in PCN allergy**; however, **cross-reacts with ceftazidime** (identical R1 side chain)",
        ci: "**Ertapenem:** do not use for Pseudomonas, Acinetobacter, or enterococcal infections\n**Imipenem:** dose-adjust in renal failure (↑ seizure risk)\n**Aztreonam + ceftazidime allergy** — shared R1, cross-reactivity possible",
        pk: "All IV; time-dependent killing\n**Imipenem:** co-formulated with cilastatin (prevents renal dehydropeptidase I hydrolysis)\n**Ertapenem:** t½ ~4 hr — once daily; others q6–8h\n**Aztreonam:** t½ ~1.7 hr; renally eliminated\nAll require dose adjustment in CKD",
        pearl: "**Carbapenem-resistant organisms (CROs)** are a top resistance threat. Carbapenemases (KPC, NDM-1, OXA-48) hydrolyze carbapenems — our last reliable broad-spectrum class.\nNovel rescue combinations: **ceftazidime-avibactam** (KPC/OXA-48), **aztreonam-avibactam** (NDM).\n**Aztreonam** is safe in PCN allergy (monocyclic structure) — except cross-reactivity with ceftazidime (identical R1 pyrimidine side chain)."
      },
    ]
  },
  {
    group: "Cell Wall & Membrane",
    drugs: [
      {
        name: "Vancomycin",
        aka: "Vancomycin (Vancocin)",
        summary: "Glycopeptide inhibiting peptidoglycan synthesis by binding D-Ala-D-Ala. DOC for **MRSA** (IV) and **C. difficile** (oral); gram-positives only.",
        moa: "Binds **D-Ala-D-Ala** terminus of peptidoglycan precursors → blocks transglycosylation + transpeptidation → bactericidal vs. most gram-positives; bacteriostatic vs. enterococci.\nToo large (1450 Da) to cross the gram-negative outer membrane.",
        use: "MRSA bacteremia, endocarditis, pneumonia, osteomyelitis (IV)\n**C. difficile colitis** (oral — not absorbed, acts locally)\nGram-positive infections in PCN-allergic patients\nMRSA meningitis; enterococcal endocarditis (± gentamicin synergy)",
        se: "**Red man syndrome** — rapid infusion → direct mast cell degranulation → facial/neck flushing; NOT IgE-mediated; prevent with infusion ≥60 min\n**Nephrotoxicity** (synergistic with aminoglycosides/NSAIDs)\nOtotoxicity (supratherapeutic levels); thrombocytopenia",
        ci: "**VRE** — use linezolid or daptomycin\nTrue vancomycin hypersensitivity (beyond red man syndrome)\n**Oral vancomycin** treats only GI CDI — not absorbed systemically",
        pk: "IV for systemic infections; oral for C. difficile only\nMonitor with **AUC/MIC** (ASHP/IDSA 2020 target: 400–600 mg·h/L)\nt½ ~6 hr; renally eliminated — dose-adjust in CKD",
        pearl: "**AUC-guided monitoring** (ASHP/IDSA 2020) replaced trough-only monitoring — AUC/MIC 400–600 minimizes nephrotoxicity better than trough targeting.\n**VRE resistance:** D-Ala-D-**Lac** substitution reduces vancomycin binding affinity ~1000-fold → use linezolid or daptomycin.\n**Red man syndrome prevention:** always infuse over ≥60 min; pre-treat with diphenhydramine if prior reaction."
      },
      {
        name: "Linezolid & Daptomycin",
        aka: "Linezolid (Zyvox) · Daptomycin (Cubicin)",
        summary: "Key agents for VRE and MRSA when vancomycin fails. Linezolid inhibits translation initiation; daptomycin depolarizes gram-positive membranes.",
        moa: "**Linezolid:** binds **23S rRNA (50S subunit)** → blocks initiation complex → bacteriostatic (bactericidal vs. streptococci); unique binding site — no cross-resistance with macrolides/clindamycin.\n**Daptomycin:** Ca²⁺-dependent insertion into **gram-positive cell membrane** → depolarization → rapid bactericidal killing.",
        use: "**Linezolid:** VRE; MRSA (100% oral bioavailability → ideal IV-to-oral step-down); MRSA pneumonia\n**Daptomycin:** VRE bacteremia/endocarditis; MRSA bacteremia — **NOT pulmonary infections** (inactivated by surfactant)",
        se: "**Linezolid:** thrombocytopenia (most common — weekly CBC); **serotonin syndrome** (weak MAOI — avoid SSRIs/SNRIs/TCAs/meperidine); peripheral/optic neuropathy (>4 weeks)\n**Daptomycin:** myopathy/rhabdomyolysis (weekly CK; hold statins); eosinophilic pneumonia (rare)",
        ci: "**Linezolid:** serotonergic drugs (serotonin syndrome)\n**Daptomycin:** pneumonia (inactivated by pulmonary surfactant — absolute)",
        pk: "**Linezolid:** oral (100% bioavailability = IV) or IV; t½ ~5 hr; weak MAO inhibitor\n**Daptomycin:** IV only; t½ ~8 hr; renally eliminated — dose-adjust in CKD",
        pearl: "**Daptomycin + surfactant:** pulmonary surfactant (DPPC) binds and inactivates daptomycin — explains why it treats MRSA bacteremia but **not** MRSA pneumonia. Classic exam trap.\n**Linezolid oral bioavailability = 100%** → pharmacokinetically identical to IV; use oral step-down in stable patients to avoid line complications and reduce cost."
      },
      {
        name: "Polymyxins, Nitrofurantoin & Fosfomycin",
        aka: "Polymyxin B · Colistin (Polymyxin E) · Nitrofurantoin (Macrobid) · Fosfomycin · Chloramphenicol",
        summary: "Mechanistically distinct agents with specialized roles: polymyxins are last-resort MDR gram-negatives; nitrofurantoin/fosfomycin target uncomplicated UTIs; chloramphenicol is reserved for PCN-allergy emergencies.",
        moa: "**Polymyxins:** bind LPS → disrupt gram-negative outer membrane → bactericidal (detergent-like)\n**Nitrofurantoin:** reduced by bacterial nitroreductases → reactive intermediates → DNA/protein/cell wall damage (bactericidal at urinary concentrations only)\n**Fosfomycin:** inhibits **MurA** → blocks first step of peptidoglycan synthesis\n**Chloramphenicol:** binds **50S** → inhibits peptidyl transferase → bacteriostatic",
        use: "**Polymyxin B/Colistin:** last-resort carbapenem-resistant Acinetobacter/Pseudomonas\n**Nitrofurantoin:** uncomplicated lower UTI (not pyelonephritis)\n**Fosfomycin:** uncomplicated UTI, single 3g oral dose\n**Chloramphenicol:** bacterial meningitis in severe PCN allergy; RMSF in pregnancy; typhoid",
        se: "**Polymyxins:** nephrotoxicity (dose-limiting) + neurotoxicity (paresthesias, NMJ blockade)\n**Nitrofurantoin:** pulmonary reactions, hepatotoxicity (chronic), peripheral neuropathy, hemolytic anemia (G6PD deficiency)\n**Chloramphenicol:** **aplastic anemia** (idiosyncratic, often fatal); **gray baby syndrome** (neonates — cardiovascular collapse)",
        ci: "**Polymyxins:** only when no alternatives exist\n**Nitrofurantoin:** CrCl <30 (inadequate urinary concentrations + metabolite accumulation); term pregnancy; G6PD deficiency\n**Chloramphenicol:** neonates (gray baby syndrome)",
        pk: "**Polymyxins:** IV or inhaled; renally eliminated — strict dose adjustment in CKD\n**Nitrofurantoin:** oral; concentrates in urine — effective only for lower UTI\n**Fosfomycin:** oral single sachet or IV\n**Chloramphenicol:** hepatic glucuronidation; CYP450 inhibitor (↑ phenytoin, warfarin)",
        pearl: "**Gray baby syndrome:** neonates lack UDP-glucuronosyltransferase → chloramphenicol accumulates → mitochondrial toxicity → gray skin + cardiovascular collapse. Dose-dependent and predictable (unlike aplastic anemia, which is idiosyncratic).\n**Nitrofurantoin** concentrates exclusively in urine — effective for cystitis, **not** pyelonephritis (inadequate tissue levels)."
      },
    ]
  },
  {
    group: "Protein Synthesis Inhibitors",
    drugs: [
      {
        name: "Aminoglycosides",
        aka: "Gentamicin · Tobramycin · Amikacin · Streptomycin · Neomycin",
        summary: "Bactericidal 30S inhibitors requiring oxygen-dependent uptake. Used for severe gram-negative infections and endocarditis synergy; once-daily dosing minimizes toxicity.",
        moa: "Irreversibly bind **30S ribosomal subunit** → inhibit initiation complex → mRNA misreading → aberrant proteins → membrane disruption → bactericidal.\n**Oxygen-dependent uptake** — ineffective against anaerobes and in abscesses.",
        use: "Severe gram-negative rods: Pseudomonas, Klebsiella, Serratia, Enterobacter (amikacin for resistant strains)\n**Endocarditis synergy:** low-dose gentamicin + cell-wall active agent (PCN/vancomycin) for Enterococcus\n**Neomycin:** oral for hepatic encephalopathy (not absorbed); bowel prep\n**Streptomycin:** second-line TB; plague; tularemia",
        se: "**Nephrotoxicity:** proximal tubule accumulation → nonoliguric AKI (usually reversible)\n**Ototoxicity:** irreversible cochlear (high-frequency hearing loss) or vestibular damage; synergistic with loop diuretics\n**NMJ blockade:** inhibits presynaptic ACh release — dangerous in myasthenia gravis",
        ci: "Pregnancy (fetal CN VIII damage/ototoxicity)\nMyasthenia gravis (NMJ blockade)\nAnaerobic infections (oxygen-dependent uptake — ineffective)",
        pk: "Concentration-dependent killing + prolonged post-antibiotic effect → once-daily dosing\n**Once-daily:** saturates renal uptake + allows trough washout → ↓ nephrotoxicity\nStrict renal elimination; monitor via Hartford Nomogram",
        pearl: "**Once-daily dosing** exploits the post-antibiotic effect — bacterial growth stays suppressed even after levels fall below MIC, while saturating renal uptake prevents accumulation toxicity.\n**Neomycin** oral = zero systemic absorption → acts only in GI lumen to reduce ammonia-producing bacteria in hepatic encephalopathy."
      },
      {
        name: "Tetracyclines",
        aka: "Doxycycline (Vibramycin) · Tetracycline · Minocycline · Tigecycline",
        summary: "Bacteriostatic 30S inhibitors with broad intracellular coverage. Doxycycline is first-line for tick-borne diseases, atypical pneumonias, STIs, and CA-MRSA.",
        moa: "Bind **30S ribosomal subunit** → block **aminoacyl-tRNA binding to A site** → prevent peptide elongation.\nConcentrate intracellularly → effective against obligate intracellular pathogens (Rickettsia, Chlamydia).",
        use: "**Doxycycline:** Rickettsia (RMSF, Q fever, typhus — DOC), Lyme, Chlamydia, atypical pneumonia (Mycoplasma), CA-MRSA, anthrax, brucellosis (+ rifampin), malaria prophylaxis\n**Tetracycline:** H. pylori (quadruple therapy)\n**Minocycline:** acne\n**Tigecycline:** MDR/MRSA (↑ mortality signal in VAP — use with caution)",
        se: "**Photosensitivity**\n**GI upset** (doxycycline: take with food)\n**Dental discoloration** — binds Ca²⁺ in developing teeth; **avoid in children <8 and pregnancy** (exception below)\nEsophageal ulceration (take with water, remain upright)\nAnti-anabolic effect → ↑ BUN (tetracycline only)",
        ci: "Children <8 (tooth discoloration) — **exception: doxycycline for RMSF at any age**\nPregnancy\n**Divalent cations** (Ca²⁺, Mg²⁺, Al³⁺, Fe²⁺) → chelation → ↓ absorption; separate from dairy/antacids ≥2 hr",
        pk: "**Doxycycline:** oral/IV, t½ ~18 hr, **fecal/biliary elimination** — safe in renal failure\n**Tetracycline:** renal elimination — avoid in CKD\n**Tigecycline:** IV only, t½ ~42 hr, biliary excretion\n**Minocycline:** lipophilic → good CNS penetration",
        pearl: "**RMSF and doxycycline at any age:** Rickettsia rickettsii carries >20% mortality if treatment is delayed. CDC mandates doxycycline as first-line regardless of age — cosmetic staining risk is trivially outweighed by life-saving benefit.\n**Doxycycline's fecal/biliary excretion** makes it the only tetracycline safe in renal failure — avoids the anti-anabolic azotemia caused by tetracycline."
      },
      {
        name: "Macrolides",
        aka: "Azithromycin (Zithromax) · Clarithromycin (Biaxin) · Erythromycin",
        summary: "Bacteriostatic 50S inhibitors covering gram-positives and atypicals. Used for CAP, atypical pneumonias, STIs, and H. pylori therapy.",
        moa: "Bind **50S ribosomal subunit** (23S rRNA) → block **translocation** of peptidyl-tRNA from A to P site → bacteriostatic.",
        use: "**Azithromycin:** CAP, atypical pneumonia (Mycoplasma, Chlamydophila, Legionella — first-line), Chlamydia (1g single dose), MAC prophylaxis/treatment, pertussis (DOC), Campylobacter\n**Clarithromycin:** H. pylori (triple therapy), MAC treatment, CAP\n**Erythromycin:** GI prokinetic (motilin receptor agonist), CAP",
        se: "**QTc prolongation** (all — azithromycin highest cardiac risk; avoid QTc >450 ms)\n**GI upset** (erythromycin worst — cramps/N/V via motilin receptors)\n**Hepatotoxicity** (erythromycin estolate — cholestatic)\n**Drug interactions** (clarithromycin = strong CYP3A4 inhibitor → ↑ statins, cyclosporine, warfarin)",
        ci: "QTc prolongation or torsades history; concurrent QTc-prolonging drugs\n**Clarithromycin:** concurrent colchicine or ergotamine in renal/hepatic failure — potentially fatal toxicity",
        pk: "**Azithromycin:** t½ ~68 hr; concentrates intracellularly **100–1000×** plasma; 5-day course = 10-day tissue levels; minimal CYP interactions\n**Clarithromycin:** t½ ~5–7 hr; active 14-OH metabolite; strong CYP3A4 inhibitor\n**Erythromycin:** t½ ~2 hr; strong CYP3A4 inhibitor; poor GI tolerability",
        pearl: "**Azithromycin Z-pack paradox:** serum levels are sub-therapeutic after day 5, yet clinical response continues — azithromycin concentrates in macrophages/neutrophils at 100–1000× serum levels and releases slowly at infection site.\n**Clarithromycin + colchicine is potentially fatal** — inhibits both CYP3A4 and P-gp simultaneously → 3–10× higher colchicine levels → multi-organ toxicity. Reduce colchicine to 0.3 mg × 2 doses if combination unavoidable."
      },
      {
        name: "Clindamycin",
        aka: "Clindamycin (Cleocin)",
        summary: "Bacteriostatic lincosamide with excellent gram-positive and anaerobic activity. Used for skin infections, anaerobic infections, and toxin-suppression in toxic shock.",
        moa: "Binds **50S ribosomal subunit** → inhibits **peptidyl transferase** (same site as macrolides and chloramphenicol → MLSB cross-resistance).\nExcellent penetration into bone, abscesses, and intracellular compartments.",
        use: "CA-MRSA skin/soft tissue (check D-zone test)\nAnaerobic infections (aspiration pneumonia, lung abscess, intra-abdominal)\n**Group A Strep toxic shock:** + penicillin — clindamycin suppresses toxin production\nBone/joint infections; PCP (+ primaquine, alternative); bacterial vaginosis",
        se: "**C. difficile colitis** (highest risk among common antibiotics — profound disruption of colonic flora)\nGI upset; rash; mild ↑ LFTs",
        ci: "Prior clindamycin-associated C. difficile or pseudomembranous colitis (absolute)\nConcurrent erythromycin or chloramphenicol (compete at 50S — antagonism)",
        pk: "Oral or IV; oral bioavailability ~90%; t½ ~2–3 hr; hepatic (CYP3A4)\nExcellent tissue penetration including bone and abscesses\n**D-zone test** required in erythromycin-resistant MRSA (screens for inducible erm resistance)",
        pearl: "**Anti-toxin mechanism in toxic shock:** toxin genes (TSST-1, SPEs) require active ribosomes. Clindamycin blocks ribosomes even in dying bacteria → halts new toxin synthesis. PCN alone lyses bacteria but released toxin worsens shock.\n**D-zone test:** erythromycin-resistant/clindamycin-susceptible MRSA may harbor inducible erm — D-shaped inhibition zone reveals this. Report as resistant and use an alternative."
      },
    ]
  },
  {
    group: "DNA, Folate & Anaerobic",
    drugs: [
      {
        name: "Fluoroquinolones",
        aka: "Ciprofloxacin (Cipro) · Levofloxacin (Levaquin) · Moxifloxacin (Avelox) · Delafloxacin",
        summary: "Broad-spectrum concentration-dependent bactericidal agents inhibiting DNA gyrase and topoisomerase IV. Used for UTIs, pneumonia, GI infections, and intracellular organisms.",
        moa: "Inhibit **DNA gyrase (topoisomerase II)** and **topoisomerase IV** → prevent DNA supercoiling → block replication + transcription → concentration-dependent bactericidal killing.",
        use: "**Ciprofloxacin:** gram-negative UTI/pyelonephritis/prostatitis, Pseudomonas, anthrax (first-line), Campylobacter, typhoid, meningococcal prophylaxis\n**Levofloxacin:** CAP (atypicals + S. pneumoniae), UTI, prostatitis, TB (second-line)\n**Moxifloxacin:** CAP, atypical infections, TB (second-line) — **no urinary penetration (never use for UTI)**",
        se: "**QTc prolongation** (all; moxifloxacin greatest risk)\n**Tendinopathy/tendon rupture** (Achilles — FDA black box; risk ↑ with corticosteroids, age >60, renal failure)\n**Peripheral neuropathy** (possibly irreversible — FDA black box)\nCNS effects (insomnia, dizziness, seizures); photosensitivity; C. difficile",
        ci: "**Myasthenia gravis** (NMJ blockade worsens weakness — FDA black box)\nChildren/adolescents and pregnancy (cartilage toxicity; exception for anthrax)\nConcurrent QTc-prolonging drugs; history of FQ-associated tendon rupture",
        pk: "Excellent oral bioavailability (70–99%) — oral ≈ IV for most indications\nConcentration-dependent + post-antibiotic effect → once-daily dosing\n**Moxifloxacin:** hepatic/fecal elimination → **low urinary levels**\nChelated by divalent cations (antacids, Ca²⁺, Fe²⁺) — separate by ≥2 hr",
        pearl: "**FQ tendinopathy mechanism:** chelate Mg²⁺ in tendon matrix + inhibit tenocyte metabolism + induce matrix metalloproteinases → collagen degradation → Achilles rupture. Stop immediately at tendon pain — rupture can occur up to 6 months after stopping.\n**Moxifloxacin for UTI is a prescribing error** — excellent lung/tissue levels but minimal urinary concentrations. Always use ciprofloxacin or levofloxacin for UTI."
      },
      {
        name: "Metronidazole",
        aka: "Metronidazole (Flagyl) · Tinidazole",
        summary: "Nitroimidazole prodrug selectively activated in anaerobic organisms → DNA damage. First-line for bacterial vaginosis, Trichomonas, Giardia, and anaerobic infections.",
        moa: "Reduced by **ferredoxin/PFOR** in anaerobic organisms → **cytotoxic nitro radical** → DNA strand breaks → bactericidal/antiprotozoal.\nReduction requires anaerobic/microaerophilic conditions → selective toxicity.",
        use: "**Bacterial vaginosis:** oral or vaginal gel — first-line\n**Trichomonas:** oral — must treat partner simultaneously\n**Giardia:** oral — first-line\nAnaerobic infections (intra-abdominal, aspiration pneumonia, brain abscess)\nH. pylori eradication; Entamoeba histolytica\n**C. difficile (mild):** now third-line after vancomycin/fidaxomicin",
        se: "**Metallic taste** (most common)\n**Disulfiram-like reaction** with alcohol — avoid during and 48 hr after treatment\nGI upset; dark urine (harmless metabolite)\n**Peripheral neuropathy** + CNS toxicity (high-dose or prolonged use)",
        ci: "**First trimester pregnancy** (theoretical teratogenicity — use topical clindamycin for BV)\n**Concurrent alcohol or disulfiram** (severe reaction)\nConcurrent lithium (↑ lithium levels)",
        pk: "Oral or IV; bioavailability ~100% (oral = IV); t½ ~8 hr; hepatic (CYP2C9/3A4)\nPenetrates brain, abscesses, and bone — effective for CNS anaerobic infections\nInhibits CYP2C9 → ↑ warfarin (monitor INR)",
        pearl: "**2017 IDSA CDI guidelines** demoted metronidazole from first-line due to increasing treatment failures in moderate-severe CDI. Current hierarchy: **vancomycin oral or fidaxomicin** (mild-moderate) → vancomycin oral (severe) → fidaxomicin (recurrent). Metronidazole reserved for mild CDI only when alternatives unavailable.\n**Tinidazole** (longer t½, fewer GI effects) is preferred over metronidazole for Giardia and Trichomonas in patients with GI intolerance."
      },
      {
        name: "TMP-SMX",
        aka: "Trimethoprim-Sulfamethoxazole (Bactrim, Septra) · Co-trimoxazole",
        summary: "Sequential folate synthesis inhibitors with synergistic bactericidal activity. First-line for PCP prophylaxis/treatment, UTIs, CA-MRSA skin infections, Nocardia, and Stenotrophomonas.",
        moa: "**Sulfamethoxazole:** inhibits **dihydropteroate synthase** → blocks PABA → dihydrofolate.\n**Trimethoprim:** inhibits **dihydrofolate reductase (DHFR)** → blocks DHF → THF.\nSequential blockade at 1:5 TMP:SMX ratio = synergistic bactericidal activity.",
        use: "**PCP treatment:** high-dose — first-line\n**PCP prophylaxis:** when CD4 <200\nCA-MRSA skin/soft tissue; UTI/pyelonephritis\n**Nocardia** (high-dose, prolonged); **Stenotrophomonas maltophilia** (DOC)\nToxoplasma prophylaxis; Isospora/Cyclospora; Listeria (PCN-allergy alternative)",
        se: "**Hypersensitivity** (rash common; SJS/TEN rare)\n**Bone marrow suppression** — megaloblastic anemia (↓ folate)\n**Hyperkalemia** — TMP blocks ENaC (mimics amiloride); especially dangerous with ACEi/ARBs in HIV\n**↑ Creatinine** — TMP blocks tubular Cr secretion (not true GFR drop)\nCrystalluria; ↑ warfarin (SMX inhibits CYP2C9); ↑ methotrexate toxicity",
        ci: "**Sulfa allergy** (SJS/TEN — absolute)\nSevere renal failure; **late pregnancy/neonates** (kernicterus — displaces bilirubin from albumin)\nMegaloblastic anemia; concurrent methotrexate (additive folate antagonism)",
        pk: "Oral or IV; bioavailability ~100%; t½ TMP ~11 hr, SMX ~10 hr — matched for 1:5 ratio\nRenal elimination — dose-reduce in CKD",
        pearl: "**TMP-SMX hyperkalemia trap:** ACEi/ARB + high-dose TMP-SMX → additive ENaC blockade → K⁺ can exceed 6 mEq/L. Check electrolytes 3–5 days after starting in HIV patients on these combos.\n**Stenotrophomonas maltophilia** is intrinsically carbapenem-resistant (metallo-β-lactamase) but reliably susceptible to TMP-SMX — it is the DOC for this increasingly common hospital pathogen."
      },
    ]
  },
  {
    group: "Mycobacterial",
    drugs: [
      {
        name: "Tuberculosis Drugs (RIPE)",
        aka: "Rifampin (R) · Isoniazid (I, INH) · Pyrazinamide (P) · Ethambutol (E) | Rifabutin · Rifapentine · Bedaquiline",
        summary: "Four-drug RIPE × 2 months, then rifampin + INH × 4 months. Each drug has a distinct mechanism and unique toxicity profile.",
        moa: "**Rifampin:** inhibits **RNA polymerase (β-subunit)** → bactericidal\n**INH:** KatG-activated prodrug → inhibits **InhA** (enoyl-ACP reductase) → blocks mycolic acid synthesis → bactericidal\n**Pyrazinamide:** activated in acidic phagolysosomes → disrupts membrane potential → kills dormant bacilli\n**Ethambutol:** inhibits **arabinosyl transferase** → blocks arabinogalactan → bacteriostatic",
        use: "**Active TB:** RIPE × 2 months → RI × 4 months\n**Latent TB (LTBI):** INH × 9 months; rifampin × 4 months; or rifapentine + INH × 12 weeks\n**Rifampin:** meningococcal/H. influenzae prophylaxis\n**Rifabutin:** MAC prophylaxis in HIV (fewer CYP interactions)\n**MDR-TB:** add bedaquiline, linezolid, moxifloxacin",
        se: "**Rifampin:** orange discoloration of all body fluids (harmless; stains contacts permanently); hepatotoxicity; **potent CYP450 inducer** (↓ OCP, warfarin, protease inhibitors, methadone)\n**INH:** **peripheral neuropathy** (give B6 concurrently); hepatotoxicity (age-dependent); drug-induced lupus (slow acetylators)\n**Pyrazinamide:** **hyperuricemia/gout**; hepatotoxicity (most hepatotoxic of RIPE)\n**Ethambutol:** **optic neuritis** (dose-dependent — baseline + serial visual testing required)",
        ci: "**Rifampin:** concurrent protease inhibitors (use rifabutin); acute hepatic disease\n**INH:** active hepatic disease; prior INH-induced hepatitis\n**Pyrazinamide:** severe gout; severe hepatic disease\n**Ethambutol:** pre-existing optic neuritis; children too young to report visual changes",
        pk: "**Rifampin:** oral/IV; hepatic/biliary; t½ ~2–3 hr; autoinduction; **strongest CYP inducer in clinical pharmacology** (CYP1A2, 2C9, 2C19, 3A4, P-gp)\n**INH:** t½ varies by acetylator status (fast ~1 hr; slow ~3 hr)\n**Ethambutol:** renal — dose-reduce in CKD",
        pearl: "**INH neuropathy mechanism:** INH inactivates pyridoxal phosphate → ↓ GABA synthesis. Always co-prescribe **pyridoxine 25–50 mg/day** in diabetics, malnourished, alcoholics, pregnancy, and renal failure.\n**Rifampin CYP induction** is the most clinically impactful in pharmacology: ↓ methadone (withdrawal), ↓ all HIV PIs (use rifabutin instead), ↓ warfarin, ↓ OCPs. Rifabutin has same anti-TB activity with far fewer CYP interactions."
      },
      {
        name: "Leprosy Drugs",
        aka: "Dapsone · Rifampin · Clofazimine",
        summary: "Multi-drug therapy (MDT) prevents resistance in Hansen disease. Dapsone is the backbone; rifampin is bactericidal; clofazimine covers multibacillary disease.",
        moa: "**Dapsone:** inhibits **dihydropteroate synthase** → blocks folate synthesis (same target as sulfonamides) → bacteriostatic vs. M. leprae\n**Rifampin:** inhibits **RNA polymerase** → bactericidal\n**Clofazimine:** binds mycobacterial DNA + generates ROS → bactericidal; also anti-inflammatory (↓ TNF, ↓ leukocyte motility)",
        use: "**Leprosy WHO MDT:**\nPaucibacillary: dapsone + rifampin × 6 months\nMultibacillary: dapsone + rifampin + clofazimine × 12 months\n**Dapsone (non-leprosy):** PCP prophylaxis (TMP-SMX alternative); toxoplasmosis prophylaxis (+ pyrimethamine); dermatitis herpetiformis; IgA vasculitis",
        se: "**Dapsone:** **hemolytic anemia** (severe in **G6PD deficiency** — always screen); **methemoglobinemia** (cyanosis despite normal SpO₂ — treat with methylene blue); agranulocytosis; dapsone hypersensitivity syndrome\n**Rifampin:** orange secretions; CYP induction (same as anti-TB)\n**Clofazimine:** **reddish-brown skin/eye discoloration** (reversible but major adherence barrier); GI upset",
        ci: "**Dapsone:** G6PD deficiency (screen before use); severe sulfa hypersensitivity\n**Clofazimine:** severe GI disease",
        pk: "**Dapsone:** oral, t½ ~28 hr; hepatic acetylation + CYP3A4; enterohepatic recycling\n**Clofazimine:** highly lipophilic (Vd >1000 L/kg — deposits in fat/skin/macrophages); t½ ~70 days (prolonged discoloration after stopping)",
        pearl: "**Dapsone methemoglobinemia:** presents as cyanosis with SpO₂ stuck at ~85% regardless of O₂ — pulse oximetry cannot distinguish methemoglobin from oxyhemoglobin. Treat with **methylene blue IV**.\n**Do NOT use methylene blue in G6PD deficiency** — requires NADPH; G6PD-deficient patients can't generate it → MB is ineffective; use exchange transfusion instead."
      },
    ]
  },
  {
    group: "Antifungals",
    drugs: [
      {
        name: "Amphotericin B",
        aka: "Amphotericin B Deoxycholate (conventional) · Liposomal (AmBisome) · Lipid Complex (ABLC)",
        summary: "Polyene antifungal with the broadest fungicidal spectrum. First-line for severe systemic mycoses and cryptococcal meningitis; liposomal formulations dramatically reduce nephrotoxicity.",
        moa: "Binds **ergosterol** in fungal cell membrane → transmembrane pores → K⁺/Mg²⁺ leakage → fungicidal.\nSome binding to mammalian cholesterol explains toxicity.",
        use: "**Cryptococcal meningitis:** induction (± flucytosine) — first-line\n**Mucormycosis:** liposomal — first-line\nInvasive aspergillosis (alternative to voriconazole); severe candidiasis; histoplasmosis/coccidioidomycosis (severe); febrile neutropenia when azoles fail",
        se: "**Nephrotoxicity** (dose-dependent — liposomal greatly reduces but does not eliminate)\n**Infusion reactions** ('shake and bake' — fever/chills/rigors; pretreat with diphenhydramine/acetaminophen; less with liposomal)\n**Hypokalemia + hypomagnesemia** (tubular wasting — replace aggressively throughout therapy)\nNormocytic anemia (↓ EPO from renal injury)",
        ci: "**Renal failure:** use liposomal (conventional is extremely nephrotoxic in CKD)\nConcurrent nephrotoxins without careful monitoring",
        pk: "IV only; t½ ~15 days (prolonged tissue redistribution); primarily fecal/biliary elimination\n**Liposomal:** taken up by phagocytes (liver/spleen macrophages) rather than renal tubular cells → markedly less nephrotoxicity",
        pearl: "**Prehydration (500–1000 mL NS before each dose)** significantly reduces nephrotoxicity by maintaining renal blood flow.\nLiposomal amphotericin is taken up by phagocytic cells → explains both reduced renal toxicity AND excellent activity against intracellular organisms.\n**Hypokalemia/hypomagnesemia from tubular wasting are predictable throughout therapy** — replace proactively to prevent arrhythmias."
      },
      {
        name: "Azole Antifungals",
        aka: "Fluconazole (Diflucan) · Itraconazole · Voriconazole (Vfend) · Posaconazole · Isavuconazole · Ketoconazole (largely obsolete)",
        summary: "Inhibit ergosterol synthesis by blocking CYP51 (lanosterol demethylase). Triazoles are first-line for many fungal infections; voriconazole is gold standard for invasive aspergillosis.",
        moa: "Inhibit **CYP51 (14α-lanosterol demethylase)** → block lanosterol → ergosterol conversion → ↓ ergosterol + ↑ toxic methylated sterols → impaired membrane function.\nFungistatic against most fungi; fungicidal against some Candida.",
        use: "**Fluconazole:** susceptible Candida (esophageal, vaginal, invasive), cryptococcal meningitis maintenance, coccidioidomycosis\n**Voriconazole:** invasive aspergillosis (first-line), fluconazole-resistant Candida\n**Itraconazole:** histoplasmosis/blastomycosis (mild-moderate), sporotrichosis, onychomycosis\n**Posaconazole:** aspergillosis prophylaxis/salvage, mucormycosis (salvage)\n**Isavuconazole:** aspergillosis and mucormycosis (first-line alternative)",
        se: "**All azoles:** hepatotoxicity; QTc prolongation; **strong CYP3A4 inhibition** (↑ statins, cyclosporine, tacrolimus, warfarin)\n**Voriconazole:** visual disturbances/photopsia (~30%), periostitis (long-term), skin SCC\n**Itraconazole:** negative inotropy (avoid in HF)\n**Ketoconazole:** adrenal suppression, gynecomastia — systemic use largely abandoned",
        ci: "Concurrent QTc-prolonging drugs; narrow-TI CYP3A4 substrates (ergotamine, cisapride)\n**Itraconazole:** HFrEF (negative inotropy)",
        pk: "**Fluconazole:** oral/IV; best CSF penetration of all azoles (70–80% serum levels); t½ ~30 hr; renal elimination\n**Voriconazole:** non-linear PK (CYP2C19 polymorphism) → **TDM essential**; target trough 1–5 µg/mL\n**Itraconazole:** requires food + acid for absorption (capsule); solution better\n**Posaconazole:** requires food; delayed-release or IV preferred",
        pearl: "**Voriconazole TDM is essential:** CYP2C19 poor metabolizers (5–10% Europeans, up to 20% East Asians) have 5-fold higher exposures → toxicity; rapid metabolizers have sub-therapeutic levels → treatment failure.\n**Fluconazole achieves 70–80% CSF levels** (hydrophilic, low protein binding) — ideal for cryptococcal meningitis maintenance after amphotericin B induction."
      },
      {
        name: "Echinocandins & Flucytosine",
        aka: "Caspofungin (Cancidas) · Micafungin · Anidulafungin — Echinocandins | Flucytosine (5-FC, Ancobon)",
        summary: "Echinocandins block fungal cell wall beta-glucan synthesis; flucytosine inhibits fungal nucleic acid synthesis. Echinocandins are first-line for candidemia; flucytosine is combination-only.",
        moa: "**Echinocandins:** inhibit **β-(1,3)-D-glucan synthase** → ↓ cell wall beta-glucan → osmotic instability → fungicidal vs. Candida; fungistatic vs. Aspergillus (hyphal tips)\n**Flucytosine:** converted to **5-FU** by fungal cytosine deaminase → RNA incorporation (↓ protein synthesis) + inhibits thymidylate synthase → fungistatic",
        use: "**Echinocandins:** candidemia/invasive candidiasis (first-line); esophageal candidiasis (second-line); empiric febrile neutropenia; salvage aspergillosis\n**Flucytosine:** **always combination only — never monotherapy**; cryptococcal meningitis induction (+ amphotericin B); chromoblastomycosis",
        se: "**Echinocandins:** very well tolerated; mild ↑ LFTs; histamine-like infusion reactions (caspofungin)\n**Flucytosine:** **bone marrow suppression** (5-FU metabolite — dose-dependent, especially in renal failure); GI toxicity; hepatotoxicity; narrow therapeutic index (monitor levels)",
        ci: "**Echinocandins:** poor CSF penetration — avoid for CNS fungal infections\n**Flucytosine:** never monotherapy (rapid resistance); severe renal failure without dose adjustment",
        pk: "**Echinocandins:** IV only; t½ ~9–26 hr; hepatic (non-CYP → minimal drug interactions); no renal dose adjustment\n**Flucytosine:** oral; t½ ~3–6 hr; renally eliminated — strict dose adjustment in CKD; target level 25–100 µg/mL",
        pearl: "**Candida auris** — emerging crisis: often resistant to all three antifungal classes, survives standard ICU disinfection, spreading globally. Echinocandins remain first-line but MICs are rising.\n**Flucytosine (COAT trial 2013):** adding 5-FC to amphotericin B induction in cryptococcal meningitis produced >2-fold faster CSF sterilization — major survival advantage. Monitor levels to prevent myelosuppression, especially in renal failure."
      },
      {
        name: "Dermatophyte Drugs",
        aka: "Terbinafine (Lamisil) · Griseofulvin · Nystatin (topical) · Ciclopirox",
        summary: "Topical and oral agents for superficial fungal infections of skin, hair, and nails. Terbinafine is first-line for onychomycosis; griseofulvin is the only effective oral agent for tinea capitis.",
        moa: "**Terbinafine:** inhibits **squalene epoxidase** → blocks ergosterol synthesis + accumulates toxic squalene → fungicidal vs. dermatophytes\n**Griseofulvin:** binds microtubule-associated proteins → inhibits fungal mitosis → fungistatic; deposits in keratin-forming cells\n**Nystatin:** binds **ergosterol** → pore formation → fungicidal (topical only — too toxic systemically)\n**Ciclopirox:** chelates metal cations → disrupts membrane/mitochondria",
        use: "**Terbinafine:** onychomycosis (oral — first-line), tinea pedis/corporis/cruris\n**Griseofulvin:** tinea capitis (DOC in children — oral required; topicals cannot penetrate hair follicles)\n**Nystatin:** oral candidiasis (swish-and-swallow), vaginal/cutaneous candidiasis (topical)\n**Ciclopirox:** topical alternative for nail/skin dermatophytes",
        se: "**Terbinafine:** hepatotoxicity (rare); taste disturbance (dysgeusia — common); **CYP2D6 inhibitor** (↑ TCAs, antipsychotics)\n**Griseofulvin:** photosensitivity; **CYP inducer** (↓ OCP efficacy); teratogenicity; porphyria exacerbation\n**Nystatin:** nausea (oral); minimal SE (not absorbed)",
        ci: "**Terbinafine:** severe hepatic disease\n**Griseofulvin:** pregnancy (teratogenic); porphyria (CYP induction → ↑ heme synthesis); SLE (may exacerbate)\n**Nystatin:** systemic use — too toxic; topical only",
        pk: "**Terbinafine:** highly lipophilic → deposits in nail matrix for months; nail t½ ~100 days; CYP2D6 inhibitor\n**Griseofulvin:** enhanced by fatty meal; deposits in keratin; CYP inducer\n**Nystatin:** topical/swallowed — negligible systemic absorption",
        pearl: "**Terbinafine works by accumulating in nail keratin** — detectable for months after stopping, explaining short-course efficacy.\n**Griseofulvin is the only effective oral drug for tinea capitis** — deposits in newly forming keratin at the invasion site; topical agents cannot penetrate the hair follicle.\n**Griseofulvin + porphyria = contraindicated** — CYP induction stimulates hepatic ALA synthase, precipitating acute attacks."
      },
    ]
  },
  {
    group: "Antivirals",
    drugs: [
      {
        name: "NRTIs & NNRTIs",
        aka: "NRTIs: Zidovudine (AZT) · Tenofovir (TDF/TAF) · Emtricitabine (FTC) · Lamivudine (3TC) · Abacavir (ABC) | NNRTIs: Efavirenz · Nevirapine · Rilpivirine · Doravirine",
        summary: "NRTIs are chain-terminating prodrugs incorporated into HIV DNA; NNRTIs are allosteric RT inhibitors. Both are essential ART backbone components with distinct resistance and toxicity profiles.",
        moa: "**NRTIs:** phosphorylated intracellularly → incorporated into HIV DNA by reverse transcriptase → **chain termination** (no 3'-OH)\n**NNRTIs:** bind **allosteric site** on reverse transcriptase → conformational change → inhibit polymerase activity",
        use: "All: combination ART for HIV\n**Tenofovir/emtricitabine (Truvada/Descovy):** PrEP\n**Zidovudine:** perinatal prophylaxis (prevents maternal-to-child transmission)\n**Lamivudine/tenofovir:** active against HBV (treat HIV/HBV coinfection)\nEfavirenz: resource-limited settings",
        se: "**NRTIs (class):** lactic acidosis + hepatic steatosis (mitochondrial toxicity — stavudine/zidovudine worst)\n**Zidovudine:** bone marrow suppression (anemia, neutropenia)\n**Tenofovir (TDF):** nephrotoxicity + Fanconi syndrome, ↓ bone mineral density\n**Abacavir:** hypersensitivity (HLA-B*5701 — fever, rash, GI, respiratory; **fatal on rechallenge** — screen before prescribing)\n**Efavirenz:** CNS effects (vivid dreams, dizziness, depression — worst weeks 1–4); teratogenicity\n**Nevirapine:** hepatotoxicity (especially women CD4 >250); SJS/rash",
        ci: "Abacavir: HLA-B*5701 positive (absolute — screen all patients)\nEfavirenz: first-trimester pregnancy\nNevirapine: women CD4 >250 or men CD4 >400\nTenofovir (TDF): severe CKD",
        pk: "NRTIs: prodrugs → intracellular triphosphate; intracellular t½ >> plasma t½ → once/twice daily\n**TAF** (tenofovir alafenamide): lower plasma exposure → less renal/bone toxicity than TDF — preferred in CKD/osteoporosis\nRilpivirine: requires gastric acid for absorption (PPIs reduce levels)",
        pearl: "**Screen HLA-B*5701 before every abacavir prescription** — pharmacogenomic reaction, not predictable from clinical history. If positive, abacavir is absolutely contraindicated; rechallenge is potentially fatal.\n**TAF preferred over TDF** in CKD or osteoporosis — delivers higher intracellular drug at lower systemic doses, dramatically reducing renal tubular and bone toxicity."
      },
      {
        name: "Protease & Integrase Inhibitors",
        aka: "PIs: Ritonavir · Atazanavir · Darunavir | INSTIs: Raltegravir · Dolutegravir · Bictegravir · Cabotegravir",
        summary: "PIs block HIV protease to prevent viral maturation; INSTIs block viral DNA integration into the host genome. INSTIs are now preferred first-line ART — superior efficacy, tolerability, and high genetic barrier to resistance.",
        moa: "**PIs:** bind **HIV aspartyl protease** → prevent gag-pol polyprotein cleavage → immature, non-infectious viral particles\n**INSTIs:** block **HIV integrase** (strand transfer step) → prevent insertion of HIV cDNA into host chromosome",
        use: "**PIs:** HIV combination regimens; **ritonavir** as PK booster (sub-therapeutic dose inhibits CYP3A4 → ↑ co-PI levels); darunavir: preferred PI\n**INSTIs:** first-line ART (dolutegravir + TAF/FTC = WHO preferred); **cabotegravir IM every 2 months:** first long-acting injectable ART",
        se: "**PIs:** metabolic syndrome (lipodystrophy, dyslipidemia, insulin resistance); **atazanavir:** benign indirect hyperbilirubinemia (↓ UGT1A1); kidney stones; extensive CYP3A4 inhibition\n**INSTIs:** generally well-tolerated; **dolutegravir:** ↑ Cr (OCT2 block — not true renal damage); neural tube defect signal (ongoing surveillance); weight gain",
        ci: "PIs: concurrent narrow-TI CYP3A4 substrates (simvastatin — rhabdomyolysis; rifampin — ↓ PI levels)\nAtazanavir: PPIs (↓ gastric acid → ↓ absorption)\nDolutegravir: first trimester (neural tube defect signal)",
        pk: "**Ritonavir boosting:** 100–200 mg/day inhibits CYP3A4 → extends co-PI t½ to 12–24 hr (PK enhancement, no antiviral effect at this dose)\n**INSTIs:** dolutegravir t½ ~14 hr; bictegravir t½ ~17 hr; hepatic (UGT1A1)\n**Cabotegravir:** IM depot, t½ ~5–6 weeks",
        pearl: "**Ritonavir boosting = pharmacokinetic cheating** — sub-therapeutic ritonavir dramatically inhibits CYP3A4, extending co-PI t½ from hours to 12–24 hr, enabling once-daily dosing. No antiviral effect at this dose.\n**INSTIs' high genetic barrier:** single point mutations rarely confer dolutegravir/bictegravir resistance (unlike older NNRTIs/PIs) — the fundamental reason they are now universally first-line."
      },
      {
        name: "HIV Entry Inhibitors",
        aka: "Maraviroc (Selzentry) — CCR5 antagonist | Enfuvirtide (Fuzeon) — Fusion inhibitor | Ibalizumab — CD4 post-attachment inhibitor | Fostemsavir — gp120 inhibitor",
        summary: "Block HIV entry into CD4+ T cells. Used for treatment-experienced patients with multidrug-resistant HIV.",
        moa: "**Maraviroc:** allosteric antagonism of **CCR5 co-receptor** → prevents gp120-CCR5 binding → blocks viral entry (CCR5-tropic only; CXCR4-tropic = resistant)\n**Enfuvirtide:** binds **gp41 HR1 heptad repeat** → prevents gp41 conformational change → blocks membrane fusion\n**Ibalizumab:** anti-CD4 monoclonal antibody → blocks post-attachment gp120/coreceptor interaction",
        use: "**Salvage regimens** for treatment-experienced patients with MDR HIV\n**Maraviroc:** confirm CCR5 tropism first (Trofile assay — if CXCR4-tropic, maraviroc is ineffective)\n**Enfuvirtide:** twice-daily SC injection — last resort due to administration burden",
        se: "**Maraviroc:** URI, cough, rash, hepatotoxicity\n**Enfuvirtide:** injection site reactions (nodules, erythema, pain — major limitation); eosinophilia\n**Ibalizumab:** infusion reactions, rash",
        ci: "**Maraviroc:** CXCR4-tropic or dual/mixed-tropic HIV; severe hepatic disease\n**Enfuvirtide:** extensive injection site skin disease",
        pk: "**Maraviroc:** oral, t½ ~14–18 hr; CYP3A4 + P-gp substrate — dose-adjust with inhibitors/inducers\n**Enfuvirtide:** SC only (peptide — not orally bioavailable); t½ ~3.8 hr (twice daily)\n**Ibalizumab:** IV q2 weeks; t½ ~64 hr (IgG antibody)",
        pearl: "**Maraviroc requires a tropism test before prescribing** — it only blocks CCR5-tropic virus. CXCR4-tropic or dual-tropic virus: maraviroc provides no benefit and may select for CXCR4-tropic variants. Tropism can switch during therapy.\n**Enfuvirtide SC twice daily** + cost >$20,000/month limits it to true salvage situations with no other options."
      },
      {
        name: "Herpes & CMV Antivirals",
        aka: "Acyclovir (Zovirax) · Valacyclovir (Valtrex) · Famciclovir — HSV/VZV | Ganciclovir · Valganciclovir (Valcyte) · Foscarnet · Cidofovir — CMV",
        summary: "Nucleoside/nucleotide analogs targeting herpesvirus DNA polymerases. Acyclovir/valacyclovir for HSV and VZV; ganciclovir/valganciclovir for CMV; foscarnet and cidofovir for resistant organisms.",
        moa: "**Acyclovir:** activated by **viral thymidine kinase (TK)** → inhibits viral DNA polymerase + chain termination (selective for infected cells)\n**Ganciclovir:** phosphorylated by **CMV UL97 kinase** → inhibits CMV DNA polymerase\n**Foscarnet:** directly inhibits **viral DNA polymerase pyrophosphate binding site** — does NOT require viral TK; active against TK-deficient acyclovir-resistant HSV and UL97-mutant ganciclovir-resistant CMV\n**Cidofovir:** nucleotide analog; no viral activation required",
        use: "**Acyclovir/valacyclovir:** HSV-1/2 (primary + suppression), VZV (zoster, chickenpox), **HSV encephalitis** (IV acyclovir — first-line)\n**Valacyclovir:** preferred oral (3–5× bioavailability vs. acyclovir)\n**Ganciclovir/valganciclovir:** CMV retinitis/colitis/pneumonitis (HIV); CMV prophylaxis (transplant)\n**Foscarnet:** acyclovir-resistant HSV/VZV; ganciclovir-resistant CMV\n**Cidofovir:** CMV retinitis (alternative); BK virus in transplant",
        se: "**Acyclovir IV:** nephrotoxicity (crystalluria — hydrate aggressively); CNS toxicity in renal failure\n**Ganciclovir/valganciclovir:** bone marrow suppression (neutropenia, thrombocytopenia — additive with AZT); teratogenicity\n**Foscarnet:** severe nephrotoxicity; electrolyte disturbances (↓ Ca²⁺, Mg²⁺, K⁺ → hypocalcemia → seizures); genital ulcers\n**Cidofovir:** severe nephrotoxicity; uveitis",
        ci: "Ganciclovir: severe neutropenia; concurrent AZT (additive marrow toxicity)\nFoscarnet/Cidofovir: severe renal failure without dose adjustment\nCidofovir: probenecid allergy (required to reduce nephrotoxicity)",
        pk: "**Acyclovir oral:** bioavailability ~15–30%; IV required for encephalitis/severe VZV\n**Valacyclovir:** L-valine ester prodrug → ~55% oral bioavailability\n**Foscarnet:** IV only; hydrate aggressively before each dose\n**Cidofovir:** IV q1–2 weeks; **probenecid required** (blocks tubular secretion → ↓ nephrotoxicity)",
        pearl: "**Acyclovir's selective toxicity:** viral TK (not cellular TK) phosphorylates acyclovir → accumulation only in infected cells. Resistance = TK-deficient mutants.\n**Foscarnet treats both TK-deficient acyclovir-resistant HSV AND UL97-deficient ganciclovir-resistant CMV** — directly inhibits the polymerase pyrophosphate site without requiring kinase activation.\nAlways monitor **Ca²⁺ and Mg²⁺** with foscarnet (chelates divalent cations → symptomatic hypocalcemia)."
      },
      {
        name: "Influenza Antivirals",
        aka: "Oseltamivir (Tamiflu) · Zanamivir (Relenza) · Baloxavir (Xofluza) · Amantadine · Rimantadine",
        summary: "Neuraminidase inhibitors (oseltamivir, zanamivir) and cap-dependent endonuclease inhibitors (baloxavir) target influenza A and B. M2 inhibitors (amantadine) are obsolete for influenza due to >99% resistance.",
        moa: "**Oseltamivir/zanamivir:** inhibit **influenza neuraminidase** → prevent sialic acid cleavage → virions remain attached to cell surface → cannot spread\n**Baloxavir:** inhibits **cap-dependent endonuclease (PB2)** → blocks viral mRNA synthesis\n**Amantadine/rimantadine:** block **M2 ion channel** → prevent viral uncoating (>99% resistance among H3N2/H1N1 — obsolete for influenza)",
        use: "**Oseltamivir/zanamivir/baloxavir:** influenza A and B treatment (within 48 hr — reduces duration ~1 day; greater benefit in high-risk/hospitalized); oseltamivir: prophylaxis\n**Amantadine:** Parkinson disease (dopaminergic mechanism) — NOT for influenza",
        se: "**Oseltamivir:** nausea/vomiting (take with food); rare neuropsychiatric events (especially children)\n**Zanamivir:** bronchospasm (inhaled — avoid in asthma/COPD)\n**Amantadine:** CNS effects (insomnia, confusion, livedo reticularis), ankle edema, teratogenicity",
        ci: "**Zanamivir:** severe asthma or COPD (bronchospasm — absolute)\n**Amantadine for influenza:** >99% resistance — abandoned\nAll: severe renal failure without dose adjustment",
        pk: "**Oseltamivir:** oral prodrug → active carboxylate (hepatic esterase); renal elimination — dose-reduce in CKD\n**Zanamivir:** inhaled dry powder; minimal systemic absorption\n**Baloxavir:** oral single dose; t½ ~100 hr\n**Amantadine:** oral; renal excretion — dose-reduce in CKD",
        pearl: "**Neuraminidase inhibitors must be started within 48 hours** — reduce duration by ~1 day in healthy patients, but provide more meaningful benefit in elderly, immunocompromised, and hospitalized patients.\n**Amantadine is no longer used for influenza** (>99% resistance) but remains useful in Parkinson disease as an NMDA antagonist and dopamine agonist.\n**Baloxavir** offers single-dose convenience with a distinct mechanism — useful for oseltamivir-resistant strains."
      },
      {
        name: "Ribavirin & Interferons",
        aka: "Ribavirin (Virazole) · Peginterferon alfa-2a (Pegasys) · Peginterferon alfa-2b · Interferon beta-1a/b · Interferon gamma",
        summary: "Broad-spectrum antivirals and immunomodulators. Ribavirin for HCV and severe RSV; interferons for HCV, HBV, multiple sclerosis, and malignancies.",
        moa: "**Ribavirin:** inhibits **IMP dehydrogenase** → depletes GTP → ↓ viral RNA synthesis; also incorporates into viral RNA → **error catastrophe** (lethal mutagenesis)\n**Interferons:** bind type I (IFN-α/β) or type II (IFN-γ) receptors → **JAK-STAT signaling** → antiviral state (MxA, 2'-5' OAS/RNase L), immunomodulation, anti-proliferative effect",
        use: "**Ribavirin:** HCV (+ peginterferon or DAAs); inhaled for severe RSV in immunocompromised; Lassa fever\n**Peginterferon alfa:** chronic HBV (finite course → seroconversion); HCV\n**IFN-β:** multiple sclerosis (↓ relapse frequency)\n**IFN-γ:** chronic granulomatous disease prophylaxis\n**IFN-α:** hairy cell leukemia, Kaposi sarcoma, melanoma",
        se: "**Ribavirin:** hemolytic anemia (RBC accumulation → oxidative damage — monitor Hgb weekly); **teratogenic** (Category X — two forms of contraception × 6 months after stopping; applies to both partners)\n**Interferons:** flu-like syndrome (nearly universal at initiation — inject at bedtime + acetaminophen); neuropsychiatric effects (depression, suicidality — screen and monitor); bone marrow suppression; autoimmune thyroiditis; alopecia",
        ci: "Ribavirin: pregnancy (Category X); hemolytic anemia; severe renal failure; concurrent didanosine (↑ mitochondrial toxicity)\nInterferons: severe depression/suicidality; decompensated cirrhosis (IFN-α precipitates hepatic failure); autoimmune hepatitis",
        pk: "**Ribavirin:** oral or inhaled; plasma t½ ~12 hr; **RBC t½ ~40 days** (accumulates in erythrocytes → prolonged hemolysis after stopping)\n**Peginterferon:** SC weekly; PEGylation extends t½ from ~8 hr to ~60–80 hr → once-weekly dosing",
        pearl: "**Ribavirin hemolytic anemia** is predictable and dose-dependent — RBCs lack mechanisms to clear ribavirin triphosphate. Monitor Hgb weekly for 8 weeks; dose-reduce for significant drops.\n**PEGylation** was a major advance: PEG polymer attachment reduces renal clearance and proteolysis, extending t½ from 8 hr to 60–80 hr — enabling once-weekly injections with improved antiviral efficacy."
      },
    ]
  },
  {
    group: "Antiparasitics",
    drugs: [
      {
        name: "Antimalarials",
        aka: "Chloroquine · Hydroxychloroquine (Plaquenil) · Mefloquine · Primaquine · Artemether-Lumefantrine (Coartem) · Artesunate · Quinine · Atovaquone-Proguanil (Malarone) · Doxycycline",
        summary: "Target different Plasmodium life cycle stages. ACTs are first-line for uncomplicated malaria; IV artesunate for severe malaria; primaquine essential for P. vivax/ovale radical cure.",
        moa: "**Chloroquine/HCQ:** accumulate in digestive vacuole → inhibit **heme polymerization** → toxic heme accumulation\n**Artemisinins:** activated by intraparasitic iron → free radicals → rapid multi-stage killing\n**Primaquine:** oxidative intermediates → kill **hepatic hypnozoites** (P. vivax/ovale dormant liver stage)\n**Atovaquone-proguanil:** atovaquone inhibits **mitochondrial cytochrome bc1**; proguanil inhibits **DHFR**",
        use: "**Uncomplicated malaria:** artemether-lumefantrine or atovaquone-proguanil (chloroquine-resistant P. falciparum); chloroquine (sensitive regions)\n**Severe malaria:** IV artesunate (first-line — superior to quinine)\n**Radical cure (P. vivax/ovale):** primaquine + chloroquine (eliminates liver hypnozoites)\n**Prophylaxis:** atovaquone-proguanil (daily), doxycycline (daily), mefloquine (weekly)\n**Hydroxychloroquine:** RA, SLE",
        se: "**Chloroquine/HCQ:** retinopathy (cumulative, irreversible — regular ophthalmology); QTc prolongation; chloroquine overdose is fatally cardiotoxic\n**Primaquine:** hemolytic anemia in **G6PD deficiency** (always screen); methemoglobinemia\n**Quinine:** cinchonism (tinnitus, headache), QTc prolongation, hypoglycemia (↑ insulin)\n**Mefloquine:** neuropsychiatric (anxiety, psychosis — black box); avoid in psychiatric history",
        ci: "Primaquine: **G6PD deficiency** (always screen), pregnancy\nChloroquine: retinopathy history\nMefloquine: psychiatric disorders, seizure disorder\nQuinine: myasthenia gravis, QTc prolongation",
        pk: "**Chloroquine/HCQ:** oral, t½ ~50 days (binds melanin in retina — explains retinopathy)\n**Primaquine:** oral; hepatic → carboxyprimaquine\n**Artemisinins:** short t½ (~1–3 hr) → **must combine with longer-acting partner drug** (ACT)\n**Atovaquone-proguanil:** take with fatty food (↑ atovaquone absorption)",
        pearl: "**Primaquine requires G6PD screening before use** — it is the only drug eliminating hypnozoites (P. vivax/ovale dormant liver stage). Without it, vivax/ovale malaria relapses months to years later. **Tafenoquine** (single-dose alternative) also requires G6PD screening.\n**Artemisinins need a partner drug** — their short t½ (~1–3 hr) means monotherapy leads to rapid recrudescence; ACT combination prevents resistance."
      },
      {
        name: "Anti-helminthics",
        aka: "Albendazole · Mebendazole — Benzimidazoles | Ivermectin | Praziquantel — Trematodes/Cestodes | Pyrantel Pamoate · Diethylcarbamazine (DEC)",
        summary: "Target helminth microtubule synthesis (benzimidazoles), neuromuscular function (ivermectin, pyrantel), or tegument integrity (praziquantel). Drug selection depends on nematode vs. trematode vs. cestode.",
        moa: "**Albendazole/mebendazole:** bind **β-tubulin** → inhibit microtubule polymerization → block glucose uptake + disrupt cell division → larvicidal/ovicidal\n**Ivermectin:** bind **glutamate-gated Cl⁻ channels** (invertebrate-specific GluCl) → hyperpolarization → paralysis\n**Praziquantel:** ↑ **Ca²⁺ permeability** of parasite tegument → spasm → tegument disruption → immune-mediated killing\n**Pyrantel:** nicotinic ACh receptor agonist → spastic paralysis",
        use: "**Albendazole:** intestinal nematodes (pinworm, roundworm, hookworm, strongyloides); neurocysticercosis (+ corticosteroids); hydatid cyst (Echinococcus + surgery)\n**Mebendazole:** pinworm (first-line), whipworm, hookworm\n**Ivermectin:** strongyloidiasis (DOC), onchocerciasis, lymphatic filariasis, scabies, head lice\n**Praziquantel:** all trematodes (schistosomiasis, liver flukes) and all cestodes (T. solium, T. saginata)\n**DEC:** lymphatic filariasis, loiasis",
        se: "**Albendazole/mebendazole:** mild GI upset; high-dose albendazole: hepatotoxicity, myelosuppression, teratogenicity\n**Ivermectin:** Mazzotti reaction (dying microfilariae → fever/rash/hypotension; pretreat with antihistamines/steroids); encephalopathy with high Loa loa burden\n**Praziquantel:** nausea, dizziness; **fever/seizures in neurocysticercosis** (always co-prescribe corticosteroids)\n**DEC:** Mazzotti reaction in onchocerciasis (use ivermectin instead)",
        ci: "Albendazole: pregnancy (teratogenic)\nIvermectin: high Loa loa microfilaremia (encephalopathy risk)\nPraziquantel: ocular cysticercosis (inflammatory optic damage — surgery first); concurrent rifampin (↓ praziquantel via CYP induction)\nDEC: onchocerciasis",
        pk: "**Albendazole:** poor oral absorption — enhanced by fatty meal; hepatic → albendazole sulfoxide (active metabolite)\n**Mebendazole:** minimal systemic absorption (local GI action)\n**Ivermectin:** oral; hepatic/fecal; concentrates in adipose tissue\n**Praziquantel:** oral; extensive first-pass; take with food",
        pearl: "**Praziquantel covers all flatworms (trematodes + cestodes); albendazole covers roundworms.**\n**Neurocysticercosis** requires careful management: killing T. solium larvae in the brain provokes inflammation → seizures/cerebral edema → always co-prescribe **dexamethasone** and seizure prophylaxis before and during antiparasitic therapy.\n**Ivermectin + Loa loa:** high microfilaremia (>8,000 mf/mL) causes fatal encephalopathy from rapid killing — screen in endemic areas and use DEC instead."
      },
    ]
  },
],
gi: [
  {
    group: "GI / Hepatic",
    drugs: [
      {
        name: "PPIs (Proton Pump Inhibitors)",
        aka: "Omeprazole (Prilosec) · Lansoprazole · Pantoprazole · Esomeprazole (Nexium) · Rabeprazole · Dexlansoprazole",
        summary: "Irreversibly inhibit the gastric H⁺/K⁺-ATPase proton pump to produce profound acid suppression. First-line for GERD, peptic ulcer disease, H. pylori eradication, and prevention of NSAID-induced gastropathy.",
        moa: "Prodrugs activated in the acidic canaliculus of parietal cells → active sulfenamide → covalently bind **H⁺/K⁺-ATPase (proton pump)** at cysteine residues → irreversible inhibition → ↓ gastric acid secretion (up to 90% reduction); new pump synthesis required for recovery (24–48 hr)",
        use: "GERD (first-line); peptic ulcer disease (healing and prevention); H. pylori eradication (PPI + clarithromycin + amoxicillin)\nNSAID-induced gastropathy prevention (high-risk patients); Zollinger-Ellison syndrome (high-dose)\nErosive esophagitis; stress ulcer prophylaxis (ICU — ventilator/coagulopathy)",
        se: "**Hypomagnesemia** (chronic — tetany, arrhythmias)\n**↑ C. difficile risk** (↓ acid → ↓ gastric barrier)\n**Osteoporosis/fractures** (↓ Ca²⁺ absorption — Ca²⁺ requires acid for absorption)\n**Drug interaction:** omeprazole/esomeprazole inhibit CYP2C19 → ↓ clopidogrel activation → use pantoprazole with clopidogrel\nChronic: ↑ pneumonia risk, vitamin B12 deficiency",
        ci: "Concurrent rilpivirine (requires acid for absorption — PPI → drug failure)\nHigh-dose methotrexate (↑ MTX levels)\nChronic use without indication (reassess periodically)",
        pk: "Oral (or IV for omeprazole/pantoprazole/esomeprazole); prodrugs activated in parietal cell canaliculus at pH <4\nTake 30–60 min before meals (pump must be actively secreting)\nt½ ~1–2 hr (plasma) but acid suppression lasts ~24–48 hr (irreversible covalent binding)\nNew pump resynthesis takes ~18 hr — explains incomplete first-dose suppression",
        pearl: "**PPIs are prodrugs that require an active, acid-secreting proton pump to be activated** — take 30–60 min before the first meal of the day. Omeprazole and esomeprazole inhibit CYP2C19 → reduce clopidogrel activation → ↓ antiplatelet effect: **use pantoprazole** as the safer PPI with clopidogrel. Chronic PPI use is vastly over-prescribed — periodically reassess necessity and consider step-down therapy."
      },
      {
        name: "H2 Receptor Blockers",
        aka: "Famotidine (Pepcid) · Ranitidine (recalled) · Cimetidine (Tagamet) · Nizatidine",
        summary: "Competitive H2 receptor antagonists that reduce histamine-stimulated gastric acid secretion. Used for GERD, peptic ulcer disease, and stress ulcer prophylaxis; largely replaced by PPIs but useful for on-demand/nocturnal acid suppression.",
        moa: "Competitive antagonism at **H2 (histamine type 2) receptors** on gastric parietal cells → ↓ histamine-stimulated gastric acid secretion (↓ cAMP → ↓ proton pump activity); reduce both basal and meal-stimulated acid but less complete than PPIs (~70% vs. ~90%)",
        use: "GERD (mild-moderate; on-demand; adjunct to PPI for nocturnal acid breakthrough); peptic ulcer disease; stress ulcer prophylaxis (ICU)\nUrticaria/allergic reactions (H2 + H1 antihistamine); famotidine IV: hospitalized patients unable to take oral PPIs",
        se: "**Cimetidine (most interactions):** broad CYP450 inhibition (CYP1A2/2C9/2D6/3A4 — ↑ warfarin, theophylline, phenytoin, TCAs); anti-androgenic (gynecomastia, impotence); CNS effects (confusion — elderly/renal failure)\nRanitidine: recalled 2020 (NDMA carcinogen)\nAll: tolerance within days of continuous use",
        ci: "Cimetidine: any narrow-TI CYP substrate (many interactions — avoid; use famotidine)\nRenal failure without dose adjustment (all renally cleared)\nRanitidine: unavailable (recalled)",
        pk: "All oral or IV; renally eliminated — dose-reduce in CKD\n**Famotidine:** t½ ~2.5–3.5 hr, minimal drug interactions — **preferred H2 blocker**\n**Cimetidine:** t½ ~2 hr, extensive CYP inhibition — avoid",
        pearl: "**Famotidine is the preferred H2 blocker** — it lacks cimetidine's CYP inhibition and anti-androgen effects. **Cimetidine was the first H2 blocker** and was a blockbuster drug, but its extensive CYP450 inhibition makes it the most dangerous of the class for drug interactions. H2 blockers are useful for **nocturnal acid breakthrough** in patients on PPIs who still have nighttime symptoms (PPIs don't fully suppress nocturnal acid)."
      },
      {
        name: "Ondansetron (5-HT3 Antagonist Antiemetics)",
        aka: "Ondansetron (Zofran) · Granisetron · Dolasetron · Palonosetron · Metoclopramide · Prochlorperazine · Dronabinol",
        summary: "5-HT3 antagonists block serotonin-mediated vomiting signals from the gut and chemoreceptor trigger zone. First-line for chemotherapy-induced, postoperative, and pregnancy-related nausea and vomiting.",
        moa: "**5-HT3 antagonists (ondansetron class):** block **5-HT3 (serotonin type 3) receptors** on vagal afferents in the gut and in the area postrema/nucleus tractus solitarius → ↓ signals triggering the vomiting reflex. **Metoclopramide:** D2 antagonist + 5-HT4 agonist → ↑ gastric emptying (prokinetic) + blocks CTZ. **Prochlorperazine:** D2 antagonist at CTZ → antiemetic",
        use: "**Ondansetron:** CINV (first-line highly emetogenic regimens), PONV, radiation-induced nausea, pregnancy nausea (second-line)\n**Metoclopramide:** gastroparesis, GERD (prokinetic), migraine nausea\n**Prochlorperazine:** CINV, acute nausea, migraine (IV/IM)\n**Dronabinol (THC):** refractory CINV, HIV-associated anorexia",
        se: "**Ondansetron:** QTc prolongation (avoid IV >32 mg single dose), constipation (most common), headache\n**Metoclopramide:** tardive dyskinesia (D2 blockade — chronic >3 months; FDA black box; risk highest elderly women), acute EPS/dystonia\n**Prochlorperazine:** EPS, sedation, QTc\n**Dronabinol:** euphoria, dizziness, anxiety",
        ci: "Ondansetron: QTc >450 ms, congenital long QT, concurrent QTc-prolonging drugs\nMetoclopramide: bowel obstruction/perforation, Parkinson disease, pheochromocytoma, prior tardive dyskinesia\nProchlorperazine: Parkinson disease, bone marrow suppression",
        pk: "**Ondansetron:** oral/IV/ODT, t½ ~4–6 hr, hepatic (CYP3A4/1A2); oral = IV for most patients\n**Metoclopramide:** oral/IV/IM, t½ ~5–6 hr, primarily renal\n**Palonosetron:** t½ ~40 hr — preferred for multi-day chemotherapy",
        pearl: "**Metoclopramide tardive dyskinesia** is permanent in some patients — restrict use to <3 months continuous therapy (FDA black box). For CINV, combine **5-HT3 antagonist + dexamethasone + NK1 receptor antagonist** (aprepitant) for highly emetogenic regimens (platinum-based chemotherapy). Ondansetron's QTc risk is dose-dependent — the single IV dose cap of 32 mg was added after cardiac deaths were reported."
      },
      {
        name: "Misoprostol & GI Mucosal Agents",
        aka: "Misoprostol (Cytotec) · Sucralfate (Carafate) · Bismuth Subsalicylate (Pepto-Bismol) · Aluminum/Magnesium Hydroxide (Maalox, Mylanta)",
        summary: "Cytoprotective and acid-neutralizing agents protecting the gastric mucosa via prostaglandin agonism, physical coating, or direct acid neutralization. Misoprostol is also used in obstetrics for cervical ripening, labor induction, and PPH.",
        moa: "**Misoprostol (PGE1 analog):** activates **prostaglandin E receptors** → ↑ mucus/bicarbonate secretion + ↓ acid secretion (EP3) + mucosal vasodilation (cytoprotective); also stimulates uterine smooth muscle contraction. **Sucralfate:** aluminum salt of sucrose octasulfate → polymerizes in acidic pH → binds to ulcer crater proteins → physical barrier coating → prevents acid/pepsin damage. **Bismuth:** antimicrobial (H. pylori), coating, ↓ prostaglandins. **Antacids:** direct acid neutralization (Al(OH)₃ + Mg(OH)₂ → salts + water)",
        use: "**Misoprostol:** NSAID-induced gastropathy prevention; cervical ripening/labor induction; PPH prevention/treatment (IM/sublingual); medication abortion (+ mifepristone)\n**Sucralfate:** stress ulcer prophylaxis (preferred in ventilated patients — lower VAP risk vs. PPIs); peptic ulcer maintenance\n**Bismuth:** H. pylori eradication (quadruple therapy), travelers' diarrhea\n**Antacids:** symptomatic heartburn relief (fast onset, short duration)",
        se: "**Misoprostol:** diarrhea (most common — dose-limiting), abdominal cramps; uterine hyperstimulation (obstetric doses); teratogenic (Möbius syndrome, limb defects)\n**Sucralfate:** constipation (Al³⁺); binds drugs (fluoroquinolones, phenytoin, digoxin — separate ≥2 hr); Al accumulation in renal failure\n**Bismuth:** black stools/tongue (harmless — warn patients); salicylate toxicity at high doses\n**Antacids:** Al(OH)₃ → constipation; Mg(OH)₂ → diarrhea",
        ci: "Misoprostol: **pregnancy when uterine stimulation not intended** (causes rupture); prior uterine surgery/cesarean\nSucralfate: renal failure (aluminum accumulation); avoid co-administering with drugs requiring rapid absorption\nBismuth: aspirin allergy (contains salicylate); children with viral illness (Reye syndrome)",
        pk: "**Misoprostol:** oral or vaginal, t½ ~20–40 min (active acid), hepatic de-esterification\n**Sucralfate:** minimal systemic absorption; requires acid to polymerize — take on empty stomach, separate from PPIs/antacids\n**Bismuth/antacids:** not absorbed; act locally",
        pearl: "**Misoprostol is the only PGE1 analog used both for GI protection and obstetric indications** — its uterotonic property is the basis for cervical ripening, labor induction, and PPH treatment. The same property makes it an absolute contraindication in pregnant patients not intended to deliver. **Sucralfate requires acid** to polymerize and coat the ulcer — do not give simultaneously with PPIs or antacids (reduces efficacy)."
      },
      {
        name: "Antidiarrheals & Loperamide",
        aka: "Loperamide (Imodium) · Diphenoxylate/Atropine (Lomotil) · Bismuth Subsalicylate · Cholestyramine",
        summary: "Peripheral opioid receptor agonists (loperamide, diphenoxylate) slow GI motility to reduce diarrhea; bismuth and cholestyramine serve adjunct roles. Used for acute nonspecific diarrhea and chronic diarrhea syndromes.",
        moa: "**Loperamide:** binds **peripheral μ-opioid receptors** in the gut myenteric plexus → ↓ peristalsis + ↑ anal sphincter tone + ↓ fluid/electrolyte secretion → antidiarrheal; does not cross BBB at therapeutic doses (P-gp efflux). **Diphenoxylate:** similar peripheral μ-opioid agonism; combined with atropine (subtherapeutic) to deter abuse. **Cholestyramine:** bile acid sequestrant → binds bile acids in gut → ↓ bile acid-induced diarrhea (bile acid malabsorption/Clostridium difficile toxin binding)",
        use: "**Loperamide:** acute nonspecific diarrhea (travelers', IBS-D), chemotherapy-induced diarrhea, ileostomy output reduction\n**Diphenoxylate/atropine:** acute diarrhea\n**Cholestyramine:** bile acid diarrhea (post-cholecystectomy, Crohn ileal resection), hypercholesterolemia (primary indication)",
        se: "**Loperamide:** toxic megacolon (infectious diarrhea — motility suppression traps pathogen); CNS/cardiac toxicity at abuse doses (crosses BBB when P-gp saturated → arrhythmias)\n**Diphenoxylate/atropine:** CNS depression, anticholinergic effects (dry mouth, urinary retention)\n**Cholestyramine:** constipation; binds many drugs (warfarin, digoxin, levothyroxine — separate by 4–6 hr)",
        ci: "Loperamide/diphenoxylate: **bloody diarrhea or infectious diarrhea** (C. difficile, Shigella, Salmonella, STEC — toxic megacolon + HUS risk); severe IBD flare; diphenoxylate: children <2 yr\nCholestyramine: complete biliary obstruction",
        pk: "**Loperamide:** oral, t½ ~10–14 hr; **P-gp substrate** (efflux keeps it out of CNS — CNS effects only at P-gp saturating/abuse doses); hepatic; fecal\n**Diphenoxylate:** oral, hepatic → active diphenoxylic acid (t½ ~14 hr)\n**Cholestyramine:** not absorbed (resin — GI lumen only)",
        pearl: "**Never use loperamide in suspected infectious diarrhea with bloody stool or fever** — the classic danger is STEC (E. coli O157:H7) where motility inhibition traps Shiga toxin → dramatically increases HUS risk. Also contraindicated in C. difficile where motility suppression → toxic megacolon. Loperamide at high abuse doses crosses the BBB (P-gp saturation) and has caused QRS widening/arrhythmias — the FDA now limits OTC package size."
      },
    ]
  },
  {
    group: "GI / Hepatic",
    drugs: [
      {
        name: "Osmotic Laxatives",
        aka: "Polyethylene Glycol (MiraLAX, GoLYTELY) · Lactulose · Magnesium Hydroxide (Milk of Magnesia) · Magnesium Citrate · Sodium Phosphate · Sorbitol · Glycerin (suppository)",
        summary: "Draw water into the intestinal lumen via osmotic pressure to soften stool and stimulate defecation. Used for constipation, bowel prep, hepatic encephalopathy (lactulose), and opioid-induced constipation.",
        moa: "**PEG:** non-absorbable, non-metabolized polymer → retains water in lumen via osmosis → softens stool + stimulates peristalsis. **Lactulose:** non-absorbable disaccharide → colonic bacteria metabolize to short-chain fatty acids and lactic acid → acidify colon → trap NH₄⁺ (ionized, non-absorbable) → ↓ systemic ammonia absorption (hepatic encephalopathy) + osmotic effect. **Magnesium salts:** osmotic + ↑ CCK release → ↑ motility. **Sodium phosphate:** osmotic — risk of phosphate nephropathy in CKD",
        use: "**PEG (MiraLAX):** constipation (first-line — safe, effective, tasteless)\n**PEG (GoLYTELY):** colonoscopy bowel preparation (large-volume isotonic solution — safe in renal failure)\n**Lactulose:** hepatic encephalopathy (↓ ammonia — first-line; titrate to 2–3 soft stools/day); chronic constipation\n**Magnesium hydroxide:** acute constipation, antacid\n**Magnesium citrate:** bowel prep; acute constipation\n**Sodium phosphate:** bowel prep (avoid in CKD — nephrotoxic)",
        se: "**PEG:** bloating, flatulence, nausea (large volumes); minimal systemic effects (not absorbed)\n**Lactulose:** flatulence, bloating, diarrhea (sweet taste → poor adherence); rarely hypernatremia\n**Magnesium salts:** hypermagnesemia (renal failure — avoid); diarrhea; dehydration\n**Sodium phosphate:** hyperphosphatemia, hypocalcemia, acute phosphate nephropathy (CKD — contraindicated)",
        ci: "Magnesium-containing agents: renal failure (↑ Mg accumulation → hypermagnesemia → cardiac arrest)\nSodium phosphate: CKD, elderly, heart failure, medications altering renal perfusion (ACEi, diuretics — ↑ phosphate nephropathy risk)\nLactulose: galactosemia",
        pk: "**PEG:** not absorbed, not metabolized, excreted intact in stool; isotonic solutions (GoLYTELY) do not alter fluid/electrolyte balance significantly\n**Lactulose:** not absorbed by small intestine; metabolized by colonic bacteria; onset 24–48 hr\n**Magnesium salts:** 15–20% absorbed (renally excreted — toxic in CKD); onset 0.5–6 hr\n**Sodium phosphate:** 2–9% absorbed; onset 0.5–6 hr; risk of electrolyte shifts and nephropathy",
        pearl: "**Lactulose for hepatic encephalopathy** works by trapping ammonia as NH₄⁺ in an acidic colon — reducing systemic ammonia levels. The target is 2–3 soft stools per day (not diarrhea). **PEG (MiraLAX) is the safest osmotic laxative** — not absorbed, no electrolyte effects, and tasteless (dissolves in any liquid). GoLYTELY (high-volume PEG) is isotonic and safe even in renal failure for bowel prep, unlike sodium phosphate which causes phosphate nephropathy in CKD."
      },
    ]
  },
],

endo: [
  {
    group: "Diabetes & Metabolic",
    drugs: [
      {
        name: "Insulin & Insulin Secretagogues",
        aka: "Rapid-acting: Lispro · Aspart · Glulisine | Short: Regular | Intermediate: NPH | Long: Glargine · Detemir · Degludec | Sulfonylureas: Glipizide · Glyburide · Glimepiride | Meglitinides: Repaglinide · Nateglinide",
        summary: "Insulin directly replaces the deficient hormone in Type 1 DM and provides supraphysiologic coverage in Type 2 DM; sulfonylureas and meglitinides stimulate endogenous insulin secretion. Hypoglycemia is the primary shared risk.",
        moa: "**Insulin:** binds **insulin receptor (tyrosine kinase)** → ↑ GLUT4 translocation (muscle/fat) → ↑ glucose uptake; ↑ glycogen synthesis; ↓ gluconeogenesis; ↑ protein/lipid synthesis. **Sulfonylureas:** bind and close **ATP-sensitive K⁺ channels (KATP)** on beta cells → membrane depolarization → Ca²⁺ influx → insulin release (independent of blood glucose). **Meglitinides:** same KATP mechanism, faster onset/shorter duration",
        use: "**Insulin:** Type 1 DM (essential); Type 2 DM (when oral agents fail, or during illness/surgery/pregnancy); DKA/HHS (regular IV); hyperkalemia (insulin + dextrose → shift K⁺ intracellularly)\n**Sulfonylureas:** Type 2 DM add-on after metformin\n**Meglitinides:** Type 2 DM with irregular meals (preprandial only)",
        se: "**All:** hypoglycemia (sulfonylureas = highest oral agent risk — glucose-independent secretion); weight gain\n**Insulin:** lipodystrophy at injection sites (rotate sites), hypokalemia\n**Glyburide:** longest t½ + active metabolites → highest hypoglycemia risk (avoid elderly/CKD — use glipizide/glimepiride)\n**Chlorpropamide (older):** disulfiram-like reaction with alcohol, SIADH",
        ci: "Sulfonylureas: Type 1 DM (no beta cells); glyburide in renal failure (accumulates); severe hepatic disease\nMeglitinides: severe hepatic disease",
        pk: "**Rapid-acting** (lispro/aspart/glulisine): onset 15 min, peak 1–2 hr, duration 3–5 hr — inject immediately before meals\n**Regular:** onset 30 min, peak 2–4 hr, duration 6–8 hr\n**NPH:** onset 2 hr, peak 4–12 hr, duration 14–18 hr\n**Glargine:** onset 2 hr, peakless, duration ~24 hr\n**Sulfonylureas:** oral, hepatic; glipizide t½ ~4 hr; glyburide t½ ~10 hr + active renally-cleared metabolites",
        pearl: "**Sulfonylurea hypoglycemia is glucose-independent** — they stimulate insulin secretion even when blood glucose is low. Hypoglycemia from long-acting sulfonylureas (glyburide) can last 24–48 hr and requires IV dextrose infusion (not just one-time glucose supplementation). **Insulin + dextrose for hyperkalemia** works because insulin drives K⁺ into cells via Na⁺/K⁺-ATPase upregulation — onset in 20–30 min, duration ~4–6 hr (give dextrose simultaneously to prevent hypoglycemia)."
      },
      {
        name: "Metformin",
        aka: "Metformin (Glucophage, Fortamet) · Metformin ER",
        summary: "Biguanide that reduces hepatic glucose production and improves insulin sensitivity. First-line oral agent for Type 2 DM; the only oral diabetic drug shown to reduce cardiovascular mortality (UKPDS). Does not cause hypoglycemia as monotherapy.",
        moa: "Activates **AMP-activated protein kinase (AMPK)** via inhibition of **mitochondrial complex I** → ↓ hepatic gluconeogenesis (primary effect) + ↑ peripheral insulin sensitivity + ↓ intestinal glucose absorption; weight-neutral to modest weight loss",
        use: "Type 2 DM (first-line — ADA guidelines regardless of HbA1c unless contraindicated)\nPCOS (off-label — improves insulin resistance, menstrual regularity)\nPre-diabetes prevention; gestational diabetes (off-label in some settings)",
        se: "**GI intolerance** (nausea, diarrhea — dose-dependent; improves with food and titration; ER better tolerated)\n**Vitamin B12 deficiency** (chronic use — impairs ileal absorption; check annually)\n**Lactic acidosis** (rare but serious — risk ↑ with renal failure, hepatic failure, hypoxia, contrast)\nNo hypoglycemia as monotherapy",
        ci: "**eGFR <30 mL/min** (hold; dose-reduce for eGFR 30–45)\nSevere hepatic disease, active alcohol abuse\nAcute illness with hypoperfusion (sepsis, MI — hold temporarily)\nIodinated contrast if eGFR <60 or IV contrast (hold 24–48 hr before/after)",
        pk: "Oral; renally eliminated unchanged (not metabolized)\nt½ ~5 hr; no plasma protein binding\nER: once daily with evening meal, better GI tolerability\nOnset of glucose lowering: days to weeks (chronic effect)",
        pearl: "**Metformin lactic acidosis:** the risk is real but very low in patients with normal renal function. The main danger is accumulation in renal failure (metformin + ↓ lactate clearance = lactic acidosis). **Hold metformin** when GFR acutely drops (contrast, illness, surgery) and restart when stable. Metformin is the only oral antidiabetic proven to reduce cardiovascular mortality — do not discontinue without cause."
      },
      {
        name: "GLP-1 Agonists & DPP-4 Inhibitors",
        aka: "GLP-1 Agonists: Semaglutide (Ozempic, Wegovy) · Liraglutide (Victoza) · Dulaglutide · Exenatide · Tirzepatide (GIP+GLP-1) | DPP-4 Inhibitors: Sitagliptin (Januvia) · Saxagliptin · Linagliptin · Alogliptin",
        summary: "GLP-1 agonists are potent glucose-lowering injectables with major cardiovascular and weight-loss benefits; DPP-4 inhibitors are oral incretin-based agents with modest efficacy and excellent safety. Both work via the incretin axis.",
        moa: "**GLP-1 agonists:** mimic **glucagon-like peptide-1 (GLP-1)** → activate GLP-1 receptors → ↑ glucose-dependent insulin secretion + ↓ glucagon + ↓ gastric emptying + ↑ satiety → glucose lowering + weight loss + CV benefit. **Tirzepatide:** dual **GIP + GLP-1 receptor agonist** → superior weight loss vs. GLP-1 alone. **DPP-4 inhibitors:** inhibit **dipeptidyl peptidase-4 (DPP-4)** → ↓ endogenous GLP-1/GIP degradation → ↑ endogenous incretin levels (modest effect — physiologic concentrations only)",
        use: "**GLP-1 agonists:** Type 2 DM add-on; CV risk reduction (liraglutide/semaglutide — ↓ MACE in established CVD); obesity (semaglutide 2.4 mg weekly — Wegovy; tirzepatide — Zepbound)\n**DPP-4 inhibitors:** Type 2 DM add-on (weight-neutral, safe in CKD — linagliptin: no renal adjustment); avoid saxagliptin/alogliptin in HF (↑ hospitalizations — SAVOR-TIMI)",
        se: "**GLP-1 agonists:** GI effects (nausea, vomiting, diarrhea — titrate slowly); pancreatitis (rare — black box); thyroid C-cell tumors (rodent data → CI in MEN2/medullary thyroid Ca)\n**DPP-4 inhibitors:** nasopharyngitis, joint pain; pancreatitis (rare); saxagliptin/alogliptin: ↑ HF hospitalizations",
        ci: "GLP-1 agonists: medullary thyroid carcinoma or MEN2 (black box); severe gastroparesis; pregnancy\nSaxagliptin/alogliptin: heart failure\nPrior drug-induced pancreatitis (class concern)",
        pk: "**GLP-1 agonists:** SC injection; exenatide twice daily; liraglutide/dulaglutide daily; semaglutide/tirzepatide once weekly; oral semaglutide (Rybelsus) — empty stomach\nGLP-1: proteolytic degradation; t½ varies (exenatide ~2 hr; liraglutide ~13 hr; semaglutide ~7 days)\n**DPP-4 inhibitors:** oral once daily; most renal (dose-reduce in CKD); linagliptin: hepatic — no renal adjustment",
        pearl: "**Semaglutide (Ozempic/Wegovy) produces the largest weight loss of any non-surgical intervention** — average ~15% body weight. The GI side effects are mechanism-based (↓ gastric emptying) and best managed by slow titration. **GLP-1 agonists reduce cardiovascular events** beyond glucose lowering (anti-inflammatory + direct cardiac effects) — they are preferred add-on therapy in Type 2 DM with established CVD."
      },
      {
        name: "SGLT2 Inhibitors",
        aka: "Empagliflozin (Jardiance) · Dapagliflozin (Farxiga) · Canagliflozin (Invokana) · Ertugliflozin",
        summary: "Block renal glucose reabsorption to cause glycosuria, reducing blood glucose without insulin. Proven cardioprotective and nephroprotective beyond glycemic control; first-line for T2DM with HFrEF or CKD.",
        moa: "Inhibit **SGLT2 (sodium-glucose cotransporter 2)** in the proximal tubule → ↓ renal glucose reabsorption → ↑ urinary glucose excretion → ↓ blood glucose (insulin-independent); also ↓ Na⁺ reabsorption → mild osmotic diuresis → ↓ preload/afterload; ↑ ketone utilization (metabolic switch); ↓ intraglomerular pressure (↓ hyperfiltration → nephroprotection)",
        use: "Type 2 DM (insulin-independent add-on)\n**HFrEF:** empagliflozin/dapagliflozin — ↓ CV mortality + HF hospitalizations regardless of DM status (EMPA-REG, DAPA-HF, EMPEROR-Reduced)\n**CKD with proteinuria:** dapagliflozin/canagliflozin — slow CKD progression (CREDENCE, DAPA-CKD)\nWeight loss; ↑ urate excretion",
        se: "**Genital mycotic infections** (glucosuria → fungal growth — most common; counsel hygiene)\n**UTIs** (↑ urinary glucose → bacterial growth)\n**Euglycemic DKA** (near-normal glucose masks DKA — hold ≥3 days before surgery/fasting)\n**Canagliflozin:** amputations (toe/foot — FDA black box)\n**Fournier gangrene** (rare — FDA warning)\nVolume depletion/hypotension",
        ci: "Type 1 DM (high euglycemic DKA risk)\neGFR <20–30 mL/min (↓ glucose-lowering efficacy; dapagliflozin approved for lower eGFR for HF/CKD benefit)\nDialysis; recurrent UTIs/genital infections; pregnancy",
        pk: "All oral, once daily; hepatic glucuronidation\nEmpagliflozin/dapagliflozin: t½ ~13 hr; canagliflozin t½ ~11–13 hr\nGlucose-lowering efficacy ↓ with eGFR; cardio/renal benefits persist at lower GFR",
        pearl: "**Euglycemic DKA** is the most dangerous and underappreciated SGLT2 inhibitor complication — glucose appears near-normal so DKA is not suspected. SGLT2 inhibitors cause glucosuria → ↓ insulin stimulus → ↑ ketogenesis in fasted/surgical/ill state. **Always hold SGLT2 inhibitors ≥3 days before elective surgery or major procedures.** The cardioprotective benefits (↓ HF hospitalizations + ↓ CV mortality) are independent of glucose lowering and represent a paradigm shift."
      },
      {
        name: "Pramlintide",
        aka: "Pramlintide (Symlin) — Amylin analog",
        summary: "Synthetic analog of amylin (co-secreted with insulin from pancreatic beta cells) that suppresses glucagon, slows gastric emptying, and promotes satiety. Used as adjunct to mealtime insulin in Type 1 and Type 2 DM.",
        moa: "Mimics **amylin** (polypeptide normally co-secreted with insulin from beta cells) → (1) suppresses postprandial **glucagon** secretion from α-cells → ↓ hepatic glucose output; (2) **slows gastric emptying** → blunts postprandial glucose spike; (3) promotes **satiety** (central hypothalamic pathways) → ↓ caloric intake → weight loss",
        use: "Adjunct to mealtime insulin in **Type 1 DM** or **Type 2 DM** patients on insulin who cannot achieve glycemic control\nPostprandial glucose reduction; weight loss (modest)",
        se: "**Nausea** (most common — dose-limiting; occurs at initiation, usually improves)\nVomiting, anorexia\n**Severe hypoglycemia** (when combined with insulin — must reduce insulin dose 50% at initiation); injection site reactions",
        ci: "Hypoglycemia unawareness (↑ risk of severe hypoglycemia)\nGastroparesis (slows gastric emptying → worse gastroparesis)\nConcomitant use of drugs that alter GI motility (anticholinergics, opioids)",
        pk: "SC injection only (separate from insulin — separate syringe and site; do NOT mix)\nt½ ~48 min; renal elimination\nTake immediately before each major meal",
        pearl: "**Pramlintide requires a 50% insulin dose reduction** at initiation because its glucose-lowering effect is additive with insulin — failure to reduce insulin causes severe hypoglycemia. It is the only amylin analog available and is rarely used in practice due to the inconvenience of a third injection and frequent GI side effects. The concept of amylin deficiency in Type 1 DM (beta cell destruction eliminates both insulin and amylin) is the pharmacological rationale."
      },
      {
        name: "Thiazolidinediones (TZDs)",
        aka: "Pioglitazone (Actos) · Rosiglitazone (Avandia) · Troglitazone (withdrawn)",
        summary: "PPARγ agonists that improve insulin sensitivity in peripheral tissues. Reduce insulin resistance but cause weight gain and fluid retention; rosiglitazone had cardiovascular concerns leading to restricted use.",
        moa: "Bind and activate **PPARγ (peroxisome proliferator-activated receptor gamma)** in adipose tissue → ↑ transcription of genes for glucose transport (GLUT4), lipid metabolism, and adiponectin → ↑ insulin sensitivity in muscle/fat/liver → ↓ insulin resistance",
        use: "Type 2 DM (add-on or monotherapy)\nPioglitazone: modest CV benefit in T2DM with macrovascular disease (PROactive); NASH (off-label); PCOS",
        se: "**Weight gain** (adipocyte differentiation + fluid retention — avg 2–5 kg)\n**Fluid retention/edema → worsening heart failure** (FDA black box)\n**Fractures** (↑ in women — adipogenic shift ↓ osteoblasts)\nPioglitazone: bladder cancer risk (long-term, controversial); macular edema\nTroglitazone: withdrawn (fatal liver failure)",
        ci: "**Heart failure (any class)** — fluid retention → acute decompensation (absolute CI)\nActive hepatic disease; bladder cancer history (pioglitazone); pregnancy\nRosiglitazone: restricted US prescribing (cardiovascular concerns)",
        pk: "Oral; hepatic (CYP2C8 for pioglitazone); t½ ~3–7 hr parent + active metabolites; once daily\nEffect requires 4–12 weeks (nuclear receptor → gene transcription → protein → metabolic effects — slowest onset of any antidiabetic)",
        pearl: "**TZDs are absolutely contraindicated in heart failure** (any class — fluid retention precipitates acute decompensation). They have the slowest onset of any antidiabetic agent (weeks for full effect) because they work via nuclear receptor gene transcription. Pioglitazone is the preferred TZD (rosiglitazone restricted) but is falling out of favor due to the bladder cancer signal and the superior profile of SGLT2 inhibitors/GLP-1 agonists."
      },
    ]
  },
  {
    group: "Thyroid & Adrenal",
    drugs: [
      {
        name: "Levothyroxine (T4)",
        aka: "Levothyroxine (Synthroid, Levoxyl, Tirosint) · Liothyronine (T3, Cytomel) · Desiccated Thyroid (Armour Thyroid)",
        summary: "Synthetic thyroxine (T4) is first-line replacement therapy for hypothyroidism. Peripheral conversion to the active T3 occurs in target tissues; requires consistent timing and is affected by many absorption interactions.",
        moa: "Synthetic **thyroxine (T4)** → peripherally deiodinated to active **triiodothyronine (T3)** → binds nuclear **thyroid hormone receptors** → regulate gene transcription → ↑ basal metabolic rate, thermogenesis, cardiac output, nervous system development, and protein synthesis",
        use: "Hypothyroidism (primary/secondary/tertiary — full replacement)\nMyxedema coma (IV T4 ± T3 — emergent)\nThyroid cancer (suppressive doses — ↓ TSH to suppress residual tissue)\nCongenital hypothyroidism (early treatment essential for CNS development)",
        se: "**Hyperthyroidism symptoms if over-replaced:** tachycardia, palpitations, heat intolerance, weight loss, tremor, insomnia\n**Bone loss** (osteoporosis with suppressive doses — monitor BMD)\n**AF** (especially with suppressive therapy in elderly)\nAngina exacerbation in CAD (↑ myocardial O₂ demand — start low, go slow)",
        ci: "Uncorrected adrenal insufficiency (must treat adrenal insufficiency first — thyroid replacement ↑ cortisol clearance → adrenal crisis)\nUntreated thyrotoxicosis; acute MI (relative)",
        pk: "Oral, t½ ~7 days (very long — slow dose adjustments; steady state takes weeks)\nTake consistently, same time daily, 30–60 min before breakfast (food ↓ absorption 20–40%)\nAbsorption interactions: Ca²⁺, iron, Mg²⁺, antacids, cholestyramine, sucralfate — separate ≥4 hr\nRecheck TSH 6–8 weeks after any dose change",
        pearl: "**Never start full-dose levothyroxine in elderly patients or those with CAD** — start at 25 µg/day and titrate slowly (thyroid hormone ↑ myocardial O₂ demand → angina/MI in coronary disease). In adrenal insufficiency + hypothyroidism, **always give cortisol first** — levothyroxine accelerates cortisol clearance and can precipitate an Addisonian crisis. Allow 6–8 weeks after each dose change before rechecking TSH."
      },
      {
        name: "Methimazole / PTU (Antithyroid Drugs)",
        aka: "Methimazole (MMI, Tapazole) · Propylthiouracil (PTU) · Carbimazole (prodrug of MMI, not available in US)",
        summary: "Thioamide drugs that block thyroid hormone synthesis by inhibiting thyroid peroxidase. First-line medical therapy for hyperthyroidism; PTU has additional peripheral T4→T3 conversion inhibition and is preferred in thyroid storm and first trimester pregnancy.",
        moa: "Both: inhibit **thyroid peroxidase (TPO)** → ↓ iodine oxidation and organification → ↓ thyroid hormone synthesis (T3, T4); **PTU additionally** inhibits **peripheral 5'-deiodinase** → ↓ conversion of T4 → active T3 (clinically important in thyroid storm); both also have immunomodulatory effects (↓ thyroid autoantibodies)",
        use: "Hyperthyroidism (Graves disease — medical therapy before radioiodine or surgery)\n**Thyroid storm:** PTU preferred (faster effect via T4→T3 blockade; give with β-blocker + iodide + dexamethasone)\n**First trimester pregnancy:** PTU preferred (methimazole embryopathy — aplasia cutis, choanal atresia)\nToxic multinodular goiter, toxic adenoma",
        se: "**Both:** agranulocytosis (0.2–0.5% — idiosyncratic; fever/sore throat → stop immediately, CBC, hospitalize); rash/urticaria; arthralgias\n**PTU:** severe hepatotoxicity (fulminant hepatic necrosis — FDA black box — prefer methimazole for long-term); ANCA-positive vasculitis (rare, chronic)\n**Methimazole:** lower hepatotoxicity",
        ci: "PTU: chronic long-term use (prefer methimazole for maintenance — hepatotoxicity risk)\nMethimazole: first trimester pregnancy (embryopathy — use PTU; switch back to MMI in 2nd/3rd trimester as PTU hepatotoxicity risk increases)",
        pk: "**Methimazole:** oral, t½ ~6 hr (once/twice daily); concentrates in thyroid; renal excretion\n**PTU:** oral, t½ ~1–2 hr (every 6–8 hr — less convenient); highly protein-bound (less transplacental transfer — advantage in pregnancy)\nClinical effect takes weeks (pre-formed hormone must be depleted)",
        pearl: "**Agranulocytosis is the most feared adverse effect** — warn all patients: 'If you develop fever or sore throat, stop the medication immediately and call or go to the ER.' The onset is abrupt and can be fatal. **The first trimester PTU / second trimester MMI switch** is important: MMI causes embryopathy in the first trimester; PTU causes hepatotoxicity with longer duration; optimal strategy is PTU in 1st trimester, switch to MMI in 2nd trimester."
      },
      {
        name: "Corticosteroids (Glucocorticoids)",
        aka: "Prednisone · Methylprednisolone (Solu-Medrol) · Dexamethasone · Hydrocortisone · Budesonide · Triamcinolone · Fludrocortisone (mineralocorticoid — see separate entry)",
        summary: "Potent anti-inflammatory and immunosuppressive agents that activate glucocorticoid receptors to modulate gene transcription. Used across virtually all specialties; chronic use carries significant multi-system toxicity.",
        moa: "Bind and activate **glucocorticoid receptor (GR)** → translocates to nucleus → modulates gene transcription: ↓ pro-inflammatory genes (NF-κB inhibition → ↓ COX-2, ↓ cytokines, ↓ phospholipase A2 → ↓ prostaglandins/leukotrienes); ↑ anti-inflammatory genes (annexin-1); ↓ lymphocyte/macrophage function; ↓ ACTH (negative feedback → ↓ endogenous cortisol/adrenal androgens)",
        use: "Asthma/COPD exacerbations; anaphylaxis (adjunct to epinephrine); autoimmune diseases (SLE, RA, myositis, vasculitis)\nIBD acute flares (budesonide for Crohn — minimal systemic); organ transplant rejection; adrenal insufficiency (hydrocortisone — physiologic replacement)\nMeningitis (dexamethasone before/with antibiotics — ↓ hearing loss in H. influenzae in children)\nCerebral edema from malignancy/post-op (NOT trauma); croup (single dose dexamethasone); HELLP syndrome",
        se: "**Metabolic:** hyperglycemia, dyslipidemia, central obesity\n**Musculoskeletal:** osteoporosis (supplement Ca²⁺/vitamin D + bisphosphonate prophylaxis), proximal myopathy, avascular necrosis (femoral head)\n**Endocrine:** HPA axis suppression (must taper after >2–3 weeks)\n**Ophthalmologic:** posterior subcapsular cataracts, glaucoma\n**Psychiatric:** mood changes, psychosis, insomnia\n**Other:** ↑ infection risk, peptic ulcers (especially + NSAIDs), growth suppression in children",
        ci: "Systemic fungal infections (without antifungal cover)\nLive vaccines at immunosuppressive doses (MMR, varicella)\nUntreated strongyloidiasis (hyperinfection syndrome)\nActive psychiatric disorder (relative)",
        pk: "Relative potency (glucocorticoid activity): hydrocortisone 1×; prednisone 4× (prodrug → prednisolone); methylprednisolone 5×; dexamethasone 25–30× (longest acting; no cross-reactivity with cortisol assay → used for suppression testing; crosses placenta)\nBudesonide: high first-pass → low systemic bioavailability (local gut/airway effect with minimal systemic SE)",
        pearl: "**Never abruptly stop corticosteroids** after >2–3 weeks of therapy — HPA axis is suppressed and cannot produce adequate cortisol for physiologic stress. **Taper slowly** (schedule depends on dose and duration) to allow adrenal recovery. **Dexamethasone is the only glucocorticoid** that does not interfere with 8 AM serum cortisol measurements — used for overnight dexamethasone suppression test in Cushing syndrome evaluation."
      },
      {
        name: "Fludrocortisone & Mineralocorticoid Axis",
        aka: "Fludrocortisone (Florinef) · Aldosterone (endogenous) · Eplerenone / Spironolactone (antagonists — see K⁺-Sparing Diuretics entry)",
        summary: "Fludrocortisone is the primary synthetic mineralocorticoid used for adrenal insufficiency and orthostatic hypotension. It acts on renal collecting duct to retain sodium and excrete potassium.",
        moa: "Binds **mineralocorticoid receptor (MR)** in principal cells of the distal nephron → ↑ transcription of ENaC (epithelial Na⁺ channel) and Na⁺/K⁺-ATPase → ↑ Na⁺ reabsorption + ↑ K⁺/H⁺ excretion → ↑ plasma volume → ↑ blood pressure; also sensitizes vascular smooth muscle to catecholamines",
        use: "**Primary adrenal insufficiency (Addison disease):** combined with hydrocortisone (fludrocortisone = mineralocorticoid; hydrocortisone = glucocorticoid)\nCongenital adrenal hyperplasia (+ hydrocortisone)\nOrthostatic hypotension (POTS, autonomic failure — expands intravascular volume)\nSalt-losing nephropathy",
        se: "**Hypertension** (excess Na⁺ retention + volume expansion)\n**Hypokalemia** (↑ K⁺ excretion)\nEdema, headache, cardiac enlargement (excess dosing)\nSuppression of renin/aldosterone",
        ci: "Uncontrolled hypertension; CHF (volume overload)\nRenal failure (↑ K⁺ secretion impaired — hyperkalemia risk at high dose)\nSystemic fungal infections",
        pk: "Oral, t½ ~18–36 hr; hepatic → inactive metabolites; renal excretion\nPotency: ~125× hydrocortisone for Na⁺ retention; modest glucocorticoid activity (~10× hydrocortisone)\nUsual dose 0.05–0.1 mg daily; titrate by BP, K⁺, renin, and symptoms",
        pearl: "**In Addison disease, BOTH glucocorticoid and mineralocorticoid replacement are required** — hydrocortisone alone is insufficient because it lacks adequate mineralocorticoid activity at physiologic doses. The clinical clue that mineralocorticoid is missing: postural hypotension + salt craving + hyperkalemia. Hydrocortisone at high doses (stress dosing) provides enough mineralocorticoid activity transiently, but chronic maintenance requires fludrocortisone."
      },
    ]
  },
  {
    group: "Bone & Mineral Metabolism",
    drugs: [
      {
        name: "Bisphosphonates & Osteoporosis Drugs",
        aka: "Alendronate (Fosamax) · Risedronate · Ibandronate · Zoledronic Acid (Reclast, Zometa IV) — Bisphosphonates | Denosumab (Prolia, Xgeva) — RANK-L inhibitor | Teriparatide (Forteo) — PTH analog | Romosozumab (Evenity) — Sclerostin inhibitor",
        summary: "Anti-resorptive and anabolic agents for osteoporosis and hypercalcemia of malignancy. Bisphosphonates are first-line for osteoporosis; denosumab is an alternative; teriparatide and romosozumab are anabolic agents for severe osteoporosis.",
        moa: "**Bisphosphonates:** incorporate into bone matrix → ingested by osteoclasts → inhibit **farnesyl pyrophosphate synthase** (mevalonate pathway) → ↓ osteoclast activity/survival → ↓ bone resorption. **Denosumab:** monoclonal antibody against **RANK-L** → ↓ RANK-L/RANK signaling → ↓ osteoclast differentiation/activation → ↓ bone resorption. **Teriparatide (PTH 1-34):** intermittent subcutaneous PTH → anabolic effect (↑ osteoblast activity > osteoclast when pulsed). **Romosozumab:** anti-sclerostin antibody → ↓ sclerostin → ↑ Wnt signaling → ↑ bone formation + ↓ bone resorption (dual mechanism)",
        use: "**Bisphosphonates:** osteoporosis (first-line); hypercalcemia of malignancy (IV zoledronic acid); Paget disease; bone metastases (↓ skeletal-related events)\n**Denosumab:** osteoporosis (especially in renal failure — not renally cleared); bone metastases (Xgeva — higher dose)\n**Teriparatide/abaloparatide:** severe osteoporosis with high fracture risk (≥2 fragility fractures; max 2-year lifetime course)\n**Romosozumab:** severe osteoporosis (1-year course — dual anabolic + anti-resorptive)",
        se: "**Bisphosphonates (oral):** esophageal irritation/ulceration (take with full glass of water, remain upright ≥30 min)\n**ONJ** (osteonecrosis of jaw — especially IV/denosumab in cancer; dental eval before starting)\n**Atypical femoral fractures** (subtrochanteric — risk ↑ >5 years; prodrome: thigh pain)\n**IV bisphosphonate:** acute phase reaction (fever, myalgia — first dose especially)\n**Denosumab:** hypocalcemia (ensure Ca²⁺/vitamin D adequate); rebound hypercalcemia on discontinuation (→ must transition to bisphosphonate)\n**Teriparatide:** osteosarcoma (rodent data — black box)",
        ci: "Oral bisphosphonates: esophageal disorders; hypocalcemia; CrCl <35 mL/min (IV zoledronic acid — nephrotoxic)\nTeriparatide: prior skeletal radiation, Paget disease, ↑ ALP, pediatric patients, prior osteosarcoma\nRomosozumab: MI or stroke within 1 year (↑ CV events — black box)",
        pk: "**Oral bisphosphonates:** take on empty stomach (food/Ca²⁺/Mg²⁺ → absorption >99% reduced); bioavailability ~0.7%; bone t½ = years (long-term effect persists after stopping)\n**Zoledronic acid:** IV once yearly (osteoporosis) or q3–4 weeks (bone mets)\n**Denosumab:** SC q6 months (osteoporosis) or monthly (bone mets)\n**Teriparatide:** SC daily × max 2 years\n**Romosozumab:** SC monthly × 12 months",
        pearl: "**Bisphosphonate drug holiday after 5 years** — benefit persists in bone matrix years after stopping (very long bone t½); holiday reduces atypical femoral fracture risk (cumulative suppression of osteoclast remodeling). However, high-risk patients benefit from continued therapy. **Denosumab should NOT be stopped abruptly** without transitioning to a bisphosphonate — discontinuation causes RANK-L rebound with rapid bone loss and vertebral fractures within months."
      },
      {
        name: "Calcitonin",
        aka: "Calcitonin-Salmon (Miacalcin, Fortical) · Calcitonin nasal spray",
        summary: "Polypeptide hormone that inhibits osteoclast activity to lower serum calcium. Used for hypercalcemia, Paget disease, and osteoporosis; weaker than bisphosphonates for chronic use.",
        moa: "Binds **calcitonin receptors** on **osteoclasts** → ↓ osteoclast activity + ↓ bone resorption → ↓ serum Ca²⁺; also ↑ renal Ca²⁺ excretion; central analgesic effect (endorphin-mediated)",
        use: "**Acute hypercalcemia:** IV/IM — rapid onset (2–4 hr); bridge until bisphosphonates take effect\nPaget disease of bone (↓ bone turnover, pain relief)\nOsteoporosis (nasal spray — third-line; analgesic for acute vertebral fractures)",
        se: "Nausea, flushing; hypocalcemia (excess); nasal irritation (spray)\n**Tachyphylaxis** (resistance within days — limits usefulness for chronic hypercalcemia)\nPossible ↑ malignancy risk with long-term nasal spray (FDA label change 2013)",
        ci: "Hypocalcemia (worsens); allergy to salmon calcitonin\nLong-term osteoporosis use in patients with cancer history (malignancy signal)",
        pk: "IM/SC (most potent) or intranasal (200 IU alternating nostrils daily)\nt½ ~1 hr; renal/peripheral metabolism\nOnset of Ca²⁺ lowering within 2–4 hr (faster than bisphosphonates — clinical advantage in acute hypercalcemia)",
        pearl: "**Calcitonin's major advantage over bisphosphonates in acute hypercalcemia is speed of onset** (hours vs. 2–4 days for IV bisphosphonates) — use calcitonin + IV saline acutely, then continue with bisphosphonate for sustained effect. Tachyphylaxis means calcitonin is a bridge therapy, not a long-term solution. The nasal spray's analgesic effect on vertebral fracture pain is a unique property."
      },
      {
        name: "Cinacalcet & Sevelamer",
        aka: "Cinacalcet (Sensipar) — Calcimimetic | Sevelamer (Renvela, Renagel) — Phosphate binder | Calcium Carbonate · Calcium Acetate · Lanthanum Carbonate — other phosphate binders",
        summary: "Agents managing mineral metabolism in CKD. Cinacalcet sensitizes the calcium-sensing receptor to reduce PTH; sevelamer binds dietary phosphate in the gut to prevent hyperphosphatemia without adding calcium load.",
        moa: "**Cinacalcet:** positive allosteric modulator of **calcium-sensing receptor (CaSR)** on parathyroid chief cells → CaSR senses Ca²⁺ at lower concentrations → ↓ PTH secretion → ↓ bone resorption. **Sevelamer:** non-absorbed polymer → binds **dietary phosphate** in the GI tract → prevents intestinal phosphate absorption → ↓ serum phosphorus (without adding calcium load; also binds bile acids → ↓ LDL)",
        use: "**Cinacalcet:** secondary hyperparathyroidism in dialysis; primary hyperparathyroidism (non-surgical); parathyroid carcinoma\n**Sevelamer:** hyperphosphatemia in CKD/dialysis (preferred over Ca-based binders in vascular calcification or hypercalcemia — no calcium load)\n**Calcium carbonate/acetate:** less expensive phosphate binders (add calcium — caution in hypercalcemia)",
        se: "**Cinacalcet:** hypocalcemia (most important — monitor Ca²⁺; QTc with severe hypocalcemia), nausea/vomiting, adynamic bone disease (PTH over-suppression)\n**Sevelamer:** constipation, nausea, flatulence; ↓ fat-soluble vitamin absorption (A/D/E/K); binds co-administered drugs (separate by 1–2 hr)",
        ci: "Cinacalcet: hypocalcemia (Ca²⁺ <8.4 mg/dL)\nSevelamer: bowel obstruction, dysphagia\nCalcium-based binders: hypercalcemia, significant vascular calcification",
        pk: "**Cinacalcet:** oral, t½ ~30–40 hr, hepatic (CYP3A4/1A2/2D6) — take with food\n**Sevelamer:** not absorbed (polymer — acts in GI lumen); take with meals (must be present with dietary phosphate)",
        pearl: "**Cinacalcet 'tricks' the parathyroid gland into thinking calcium is already high** — it allosterically enhances the calcium-sensing receptor sensitivity. This reduces PTH without actually raising calcium. **Sevelamer is calcium-free and bile-acid binding** — it is preferred in dialysis patients with hypercalcemia or cardiovascular calcification because calcium-based binders would worsen vascular calcium deposition."
      },
    ]
  },
  {
    group: "Pituitary & Hypothalamic",
    drugs: [
      {
        name: "ADH / Desmopressin (DDAVP) & Vaptans",
        aka: "Desmopressin (DDAVP, Stimate) — V2 agonist | Vasopressin (Pitressin) — V1+V2 agonist | Tolvaptan (Samsca) · Conivaptan — V2 antagonists (Vaptans)",
        summary: "ADH analogs increase water reabsorption in the collecting duct to concentrate urine; vaptans block V2 receptors to promote aquaresis. Used for diabetes insipidus, hyponatremia (SIADH), von Willebrand disease, and hemostasis.",
        moa: "**Desmopressin (DDAVP):** selective **V2 receptor agonist** on renal collecting duct → ↑ cAMP → ↑ AQP2 insertion → ↑ water reabsorption (antidiuresis); also stimulates endothelial vWF/Factor VIII release. **Vasopressin:** V1 (vascular smooth muscle → vasoconstriction) + V2 (kidney → antidiuresis). **Vaptans (tolvaptan, conivaptan):** competitive **V2 receptor antagonists** → block ADH → ↑ free water excretion without electrolyte loss (aquaresis)",
        use: "**Desmopressin:** central diabetes insipidus (first-line); von Willebrand disease type 1 (↑ vWF + Factor VIII release — pre-procedural); hemophilia A (mild-moderate); nocturnal enuresis\n**Vasopressin:** vasodilatory shock (V1), variceal bleeding (splanchnic vasoconstriction), cardiac arrest (ACLS)\n**Tolvaptan:** euvolemic/hypervolemic hyponatremia (SIADH, HF, cirrhosis — corrects Na⁺ by free water excretion); ADPKD (slows cyst growth)",
        se: "**Desmopressin:** hyponatremia/water intoxication (excess water retention — monitor Na⁺ in elderly/children/postoperative), headache, rhinitis\n**Vasopressin:** mesenteric/coronary ischemia (V1 vasoconstriction), hypertension\n**Tolvaptan:** overly rapid Na⁺ correction (osmotic demyelination syndrome — limit <10–12 mEq/L per 24 hr); hepatotoxicity (ADPKD indication — FDA black box)",
        ci: "Desmopressin: hyponatremia (will worsen); type IIb or platelet-type vWD (thrombocytopenia)\nTolvaptan: hypovolemic hyponatremia (aquaresis worsens depletion); inability to respond to thirst; hepatic impairment (ADPKD); potent CYP3A4 inhibitors",
        pk: "**Desmopressin:** intranasal/oral/SQ/IV; t½ ~75 min (IV), 3 hr (oral); V2-selective (no vasoconstriction)\n**Vasopressin:** IV infusion, t½ ~10–20 min; renal/hepatic\n**Tolvaptan:** oral, t½ ~8–12 hr, CYP3A4 — must initiate in hospital (monitor Na⁺ correction rate)",
        pearl: "**Vaptans correct SIADH hyponatremia by aquaresis** — they remove free water without sodium loss, unlike loop diuretics which remove both. The danger is **overly rapid sodium correction → osmotic demyelination syndrome (central pontine myelinolysis)** — Na⁺ must not rise >10–12 mEq/L in 24 hours. If correction is too rapid, give D5W to intentionally lower Na⁺ (relowering strategy)."
      },
      {
        name: "Growth Hormone Axis Drugs",
        aka: "Somatropin (Genotropin, Humatrope) — rhGH | Somatostatin Analogs: Octreotide (Sandostatin) · Lanreotide · Pasireotide | Pegvisomant — GH receptor antagonist | Mecasermin — IGF-1",
        summary: "Recombinant GH and somatostatin analogs modulate the GH-IGF-1 axis. Octreotide is widely used for acromegaly, carcinoid syndrome, and variceal bleeding; somatropin for GH deficiency.",
        moa: "**Somatropin:** recombinant **GH** → binds GH receptor → ↑ IGF-1 synthesis → anabolic effects (↑ protein synthesis, ↑ lipolysis, ↑ linear growth). **Octreotide:** somatostatin analog → activates **somatostatin receptors (SSTR2/5)** → ↓ GH, ↓ TSH, ↓ glucagon, ↓ insulin, ↓ VIP, ↓ GI secretions → ↓ splanchnic blood flow (variceal bleeding). **Pegvisomant:** pegylated GH receptor antagonist → blocks GH action → ↓ IGF-1 synthesis",
        use: "**Somatropin:** GH deficiency (children — linear growth; adults — muscle/fat); Turner, Prader-Willi syndromes\n**Octreotide:** acromegaly (↓ GH/IGF-1), carcinoid syndrome (↓ flushing/diarrhea), VIPoma, variceal bleeding (↓ splanchnic flow — adjunct to endoscopy), thyrotropinoma\n**Pegvisomant:** acromegaly (when somatostatin analogs fail)\n**Pasireotide:** Cushing disease (↓ ACTH — SSTR5 selectivity)",
        se: "**Somatropin:** glucose intolerance/insulin resistance, edema, arthralgias; ↑ malignancy risk (do not use in active cancer); intracranial hypertension (children)\n**Octreotide:** cholelithiasis (↓ CCK → bile stasis — stone surveillance for long-term use), GI upset, bradycardia, hyperglycemia\n**Pasireotide:** significant hyperglycemia (less insulin selectivity)",
        ci: "Somatropin: active malignancy; closed epiphyses; Prader-Willi + severe obesity/sleep apnea (respiratory failure)\nOctreotide: relative CI in poorly controlled diabetes\nPegvisomant: hepatic disease",
        pk: "**Somatropin:** SC daily, t½ ~2–3 hr, hepatic/renal\n**Octreotide:** SC 3× daily (immediate release) or IM monthly (Sandostatin LAR); t½ ~1.5 hr (SC)\n**Pasireotide:** SC twice daily or IM monthly\n**Pegvisomant:** SC daily, t½ ~6 days (pegylation prolongs)",
        pearl: "**Octreotide for variceal bleeding** — reduces portal pressure by decreasing splanchnic blood flow via somatostatin receptors on mesenteric vessels. Used as adjunct to endoscopic band ligation; start before endoscopy to improve visibility. **Octreotide causes cholelithiasis** via inhibition of gallbladder-stimulating CCK — gallstone surveillance recommended with long-term use."
      },
      {
        name: "GnRH Agonists & Antagonists",
        aka: "GnRH Agonists (long-acting): Leuprolide (Lupron) · Goserelin · Triptorelin · Histrelin | GnRH Antagonists: Degarelix · Relugolix · Cetrorelix · Ganirelix",
        summary: "GnRH agonists paradoxically suppress gonadotropins after initial flare when given continuously; GnRH antagonists produce immediate suppression without flare. Used for prostate cancer, endometriosis, uterine fibroids, and ART.",
        moa: "**GnRH agonists (continuous):** initially stimulate LH/FSH (first 1–2 weeks — 'flare') → receptor desensitization and downregulation → ↓ LH/FSH → ↓ testosterone (castrate levels) / ↓ estrogen ('chemical castration'). **GnRH antagonists:** competitive antagonism at GnRH receptors → immediate ↓ LH/FSH → immediate ↓ sex steroids (no initial flare)",
        use: "**GnRH agonists (continuous):** prostate cancer (medical castration — ADT); endometriosis (↓ estrogen → lesion regression); uterine fibroids (preoperative shrinkage); central precocious puberty; IVF ovulation suppression\n**GnRH antagonists (degarelix, relugolix):** prostate cancer (immediate castration — no flare); IVF (prevent premature LH surge — shorter protocol)",
        se: "**Both (↓ sex steroids):** hot flashes (most common), osteoporosis, sexual dysfunction, fatigue/depression, metabolic syndrome\n**GnRH agonists:** tumor flare (initial testosterone spike — bone pain, urinary obstruction, cord compression — prevent with anti-androgen for first 4 weeks)\n**GnRH antagonists:** injection site reactions; no tumor flare",
        ci: "GnRH agonist without anti-androgen co-prescription: spinal cord metastases (tumor flare → cord compression — use GnRH antagonist instead OR start anti-androgen first)\nGnRH agonists for precocious puberty: organic CNS lesion (treat underlying cause)",
        pk: "**Leuprolide:** SC/IM; depot formulations (monthly, 3-monthly, 4-monthly, 12-monthly implant)\n**Degarelix:** SC monthly; no depot available\n**Relugolix:** oral GnRH antagonist (Orgovyx) — first oral option for prostate cancer; t½ ~25 hr; CYP3A4/P-gp substrate",
        pearl: "**GnRH agonist tumor flare** is predictable and potentially devastating in patients with spinal metastases — cord compression can cause permanent paralysis. **Always start an androgen receptor antagonist** (bicalutamide) 7–14 days before and for 4 weeks after initiating a GnRH agonist in patients with metastatic prostate cancer. GnRH antagonists bypass this risk entirely (no flare) — preferred in patients with bone metastases."
      },
    ]
  },
  {
  group: "Reproductive & Obstetric",
  drugs: [
    {
      name: "Oral Contraceptives & Hormonal Contraception",
      aka: "Combined OCP (ethinyl estradiol + progestin) · Progestin-only pill (norethindrone) · DMPA (Depo-Provera) · Nexplanon (implant) · LNG-IUD (Mirena) | Emergency: Levonorgestrel (Plan B) · Copper IUD",
      summary: "Hormonal contraceptives prevent ovulation, thicken cervical mucus, or thin endometrium. Non-contraceptive benefits include acne, dysmenorrhea, endometriosis, and PCOS management.",
      moa: "**Combined OCPs:** estrogen + progestin → **negative feedback on hypothalamus/pituitary** → ↓ LH surge + ↓ FSH → prevent ovulation; progestin thickens cervical mucus + thins endometrium.\n**Progestin-only / DMPA / implant:** primarily ovulation suppression + cervical mucus thickening.\n**Copper IUD:** Cu²⁺ ions toxic to sperm → ↓ fertilization (most effective emergency contraception ≤5 days).",
      use: "**Contraception** (all formulations — primary indication)\n**Endometriosis / dysmenorrhea** (continuous OCP → ↓ prostaglandins, suppress lesion stimulation)\n**PCOS / acne** (combined OCP with anti-androgenic progestins — drospirenone, norgestimate)\n**Emergency contraception** (Plan B within 72 hr; copper IUD within 5 days — most effective)",
      se: "**Combined OCP:** VTE/DVT/PE (estrogen → ↑ clotting factors); hypertension; breakthrough bleeding; nausea\n**DMPA:** ↓ bone mineral density (reversible), irregular bleeding, weight gain\n**Copper IUD:** ↑ menstrual bleeding and cramping",
      ci: "**Smokers ≥35 yr** (↑↑ VTE/MI/stroke)\n**Migraine with aura** (↑ stroke risk ×3–6 — absolute CI for estrogen-containing methods)\n**Prior VTE / estrogen-dependent cancer / severe hypertension**\n**Progestin-only:** much less restrictive — safe in most OCP-contraindicated patients",
      pk: "**Combined OCP:** oral daily; ethinyl estradiol via CYP3A4; significant first-pass effect\n**CYP3A4 inducers** (rifampin, carbamazepine, phenytoin, St. John's Wort) → ↓ OCP efficacy → use backup\n**DMPA:** IM every 3 months · Nexplanon: subdermal, 3 years · LNG-IUD: 5–8 years",
      pearl: "**Rifampin destroys OCP efficacy** (potent CYP3A4 inducer — ↓ hormone levels >90%) — always use backup. **Migraine with aura** is an absolute estrogen contraindication: aura represents cortical spreading depression, and estrogen multiplies stroke risk ×3–6."
    },
    {
      name: "Androgens, Anti-Androgens & 5α-Reductase Inhibitors",
      aka: "Androgens: Testosterone | Anti-Androgens: Bicalutamide · Enzalutamide · Spironolactone | 5α-Reductase Inhibitors: Finasteride (Proscar/Propecia) · Dutasteride (Avodart)",
      summary: "Androgens drive male sexual development and anabolism; anti-androgens block AR signaling for prostate cancer and PCOS; 5α-reductase inhibitors reduce DHT for BPH and androgenic alopecia.",
      moa: "**Testosterone:** binds **androgen receptor (AR)** → ↑ protein synthesis, erythropoiesis, male secondary sexual characteristics.\n**Bicalutamide / enzalutamide:** competitive **AR antagonists** → block testosterone/DHT signaling.\n**Finasteride / dutasteride:** inhibit **5α-reductase** → ↓ testosterone → DHT conversion → ↓ prostate growth + ↓ scalp DHT.",
      use: "**Testosterone:** hypogonadism; delayed puberty; gender-affirming therapy (transgender male)\n**Finasteride 5 mg / dutasteride:** BPH (↓ prostate size → ↑ urinary flow)\n**Finasteride 1 mg:** androgenic alopecia\n**Bicalutamide / enzalutamide:** metastatic prostate cancer\n**Spironolactone:** PCOS (hirsutism/acne); transgender female hormone therapy",
      se: "**Testosterone:** erythrocytosis (monitor Hct), acne, testicular atrophy, virilization (women), ↑ LDL\n**Finasteride / dutasteride:** sexual dysfunction (↓ libido, ED — may persist after stopping); gynecomastia; ↓ PSA ~50% (double value for true cancer screening); **teratogenic** (Category X — feminizes male fetus)\n**Anti-androgens:** hot flashes, osteoporosis, gynecomastia",
      ci: "**Testosterone:** prostate/breast cancer; erythrocytosis (Hct >54%)\n**Finasteride / dutasteride:** pregnancy / women of childbearing age (do not handle crushed tablets)\n**Anti-androgens:** severe hepatic disease (bicalutamide/flutamide)",
      pk: "**Testosterone:** IM (cypionate q1–2 weeks), transdermal gel/patch (daily), SC pellets (q3–6 months)\n**Finasteride:** oral, t½ ~6 hr · **Dutasteride:** oral, t½ ~5 weeks (inhibits type 1 + 2 vs. finasteride type 2 only)\n**Bicalutamide:** oral, t½ ~6 days",
      pearl: "**Finasteride reduces PSA by ~50%** — always double the observed PSA value for cancer screening interpretation. **Dutasteride inhibits both 5α-reductase isoforms** (type 1 in scalp/liver + type 2 in prostate) vs. finasteride type 2 only — broader efficacy for BPH and alopecia."
    },
    {
      name: "Oxytocin & Tocolytics",
      aka: "Uterotonic: Oxytocin (Pitocin) | Tocolytics: Indomethacin · Nifedipine · Magnesium Sulfate · Terbutaline",
      summary: "Oxytocin stimulates uterine contractions for labor induction and PPH; tocolytics suppress preterm contractions to delay delivery and allow corticosteroid administration for fetal lung maturity.",
      moa: "**Oxytocin:** binds **Gq-coupled oxytocin receptors** → ↑ IP3/DAG → ↑ intracellular Ca²⁺ → myometrial contraction.\n**Indomethacin:** COX inhibition → ↓ prostaglandins → ↓ uterine contractility.\n**Nifedipine:** blocks L-type Ca²⁺ channels → ↓ myometrial Ca²⁺ → ↓ contractions.\n**Magnesium sulfate:** Ca²⁺ antagonism → ↓ myometrial excitability + **fetal neuroprotection** (↓ cerebral palsy at <32 weeks).\n**Terbutaline:** β2 agonist → ↑ cAMP → myometrial relaxation.",
      use: "**Oxytocin:** labor induction/augmentation; PPH prevention/treatment; incomplete abortion\n**Indomethacin:** tocolysis <32 weeks (most effective tocolytic — ductus risk limits duration)\n**Nifedipine:** preferred oral tocolytic\n**Magnesium sulfate:** tocolysis ≤48 hr + fetal neuroprotection at <32 weeks\n**Terbutaline:** acute tocolysis (single-dose SC only)",
      se: "**Oxytocin:** hyponatremia at high doses (V2-like antidiuresis); uterine hyperstimulation → fetal distress\n**Indomethacin:** premature ductal closure (avoid >32 weeks), oligohydramnios\n**Magnesium:** respiratory depression, ↓ DTRs (loss of patellar reflex = first toxicity sign)\n**Terbutaline:** tachycardia, hyperglycemia, hypokalemia",
      ci: "**Oxytocin:** prior classical uterine incision, unfavorable fetal position\n**Indomethacin:** >32 weeks; oligohydramnios; renal disease\n**Magnesium:** myasthenia gravis (NMJ blockade worsens weakness)\n**Terbutaline (oral chronic):** FDA black box — acute SC use only",
      pk: "**Oxytocin:** IV infusion titrated; t½ ~1–6 min\n**Indomethacin:** oral/rectal; onset ~30 min\n**Nifedipine:** oral immediate release; t½ ~2 hr\n**Magnesium:** IV load 4–6 g over 20 min → maintenance; renal excretion (reduce in CKD)",
      pearl: "**Oxytocin at high doses mimics ADH** (V2 receptor cross-reactivity) → free water retention → dilutional hyponatremia — monitor Na⁺ with prolonged infusions. **Indomethacin is the most effective tocolytic** but the premature ductal closure risk hard-limits use to <32 weeks and short courses."
    },
    {
      name: "Mifepristone & Medication Abortion",
      aka: "Mifepristone (Mifeprex, RU-486) | Always paired with: Misoprostol (Cytotec)",
      summary: "Competitive **progesterone receptor antagonist** (also blocks GRs) used for medication abortion ≤10 weeks, early pregnancy loss, and Cushing syndrome. Combined with misoprostol it is ~95–98% effective.",
      moa: "Blocks **progesterone receptors (PRs)** → decidual breakdown + cervical softening + sensitizes myometrium to prostaglandins.\nAlso blocks **glucocorticoid receptors (GRs)** — basis for Cushing use.\n**Misoprostol (PGE1 analog)** given 24–48 hr later → uterine contractions → expulsion.",
      use: "**Medication abortion** (≤10 weeks; mifepristone 200 mg PO → misoprostol 800 mcg buccal 24–48 hr later)\n**Early pregnancy loss** (missed/incomplete abortion — same regimen)\n**Cushing syndrome** (300–1200 mg/day — blocks GR effects; does NOT lower cortisol levels)\n**Cervical ripening** (pre-D&C dilation)",
      se: "**Bleeding and cramping** (expected — indicates efficacy)\n**Incomplete abortion** (~2–5% — may need surgical completion)\n**GI effects** (nausea, diarrhea — misoprostol prostaglandin effect)\n**GR blockade** → ↑ ACTH → adrenal insufficiency risk in HPA-compromised patients",
      ci: "**Ectopic pregnancy** (always exclude first — ineffective + rupture risk)\n**IUD in place** (remove before use)\n**Chronic adrenal failure / long-term corticosteroids** (GR blockade → adrenal crisis)\n**Coagulopathy / anticoagulation** (↑ bleeding)",
      pk: "**Mifepristone:** oral 200 mg; t½ ~18 hr; CYP3A4 metabolism; REMS program required (certified providers only)\n**Regimen:** mifepristone Day 1 → misoprostol 24–48 hr later; follow-up to confirm complete expulsion",
      pearl: "**Mifepristone does NOT lower cortisol in Cushing syndrome** — cortisol rises due to lost negative feedback; monitor clinically (glucose, BP), NOT serum cortisol. Classic Step 1 trap. **Always exclude ectopic pregnancy first** — mifepristone will not treat an ectopic and rupture is fatal."
    },
  ]
},
],

pulm: [
  {
    group: "Pulmonary",
    drugs: [
      {
        name: "SABAs & LABAs",
        aka: "SABAs: Albuterol (ProAir, Ventolin) · Levalbuterol · Terbutaline | LABAs: Salmeterol (Serevent) · Formoterol · Indacaterol · Vilanterol",
        summary: "Short-acting and long-acting beta-2 agonists that bronchodilate by relaxing airway smooth muscle. SABAs are rescue inhalers for acute symptoms; LABAs are controller medications always used with inhaled corticosteroids.",
        moa: "Agonists at **β2-adrenergic receptors** on airway smooth muscle → ↑ cAMP (via Gs/adenylyl cyclase) → activate PKA → phosphorylate myosin light chain kinase → ↓ Ca²⁺ sensitivity → smooth muscle relaxation → bronchodilation; also stabilize mast cells",
        use: "**Albuterol (SABA):** acute asthma exacerbations (rescue — first-line), COPD acute exacerbation, hyperkalemia (IV — shifts K⁺ intracellularly), exercise-induced bronchospasm (pre-exercise)\n**LABAs:** asthma maintenance (always with ICS — never monotherapy); COPD maintenance (LABAs + LAMA preferred); nocturnal asthma",
        se: "**Tremor** (skeletal muscle β2 — most common)\n**Tachycardia** (β1 cross-reactivity, especially high doses)\n**Hypokalemia** (β2 → ↑ Na⁺/K⁺-ATPase → cellular K⁺ uptake)\n**Hyperglycemia** (glycogenolysis/gluconeogenesis)\n**LABAs alone without ICS: ↑ asthma-related deaths** (FDA black box — SMART trial)",
        ci: "LABAs as asthma monotherapy without ICS (↑ mortality — absolute CI; only in fixed-dose ICS/LABA combination)\nβ-blockers (blunts β2 bronchodilation — use selective β1-blocker if needed)",
        pk: "**Albuterol:** inhaled MDI or nebulizer; onset 1–3 min, peak 30–60 min, duration 4–6 hr\n**Salmeterol:** onset ~20 min (not rescue — never for acute attacks), duration 12 hr\n**Formoterol:** onset ~3–5 min (faster — can be used for maintenance + rescue in some protocols), duration 12 hr\n**Indacaterol/vilanterol:** once-daily ultra-long LABAs (24+ hr)",
        pearl: "**LABAs are never monotherapy for asthma** — the SMART trial showed increased asthma deaths with salmeterol monotherapy. They are only approved in fixed-dose combination with an ICS (e.g., Advair = fluticasone/salmeterol). In contrast, **LABAs are appropriate monotherapy for COPD** (not asthma). Albuterol for hyperkalemia: β2 stimulation drives K⁺ into cells — onset in 20–30 min, but must give with dextrose to prevent hypoglycemia."
      },
      {
        name: "Inhaled Corticosteroids (ICS)",
        aka: "Fluticasone (Flovent, Flonase) · Budesonide (Pulmicort) · Beclomethasone · Ciclesonide · Mometasone",
        summary: "Topical corticosteroids delivered directly to the airway to reduce eosinophilic inflammation. First-line controller therapy for persistent asthma; also used for allergic rhinitis (intranasal). Minimal systemic effects at standard doses.",
        moa: "Activate **glucocorticoid receptors** in airway epithelium → ↓ pro-inflammatory gene transcription → ↓ eosinophil recruitment + ↓ mast cell activation + ↓ mucus secretion + ↓ airway edema → ↓ bronchial hyperresponsiveness; does not cause immediate bronchodilation (controller, not rescue)",
        use: "Persistent asthma (all levels — first-line controller; added to SABA rescue)\nCOPD (combined with LABA in patients with frequent exacerbations — high eosinophil count predicts response)\nAllergic rhinitis (intranasal — first-line)\nEosinophilic esophagitis (swallowed fluticasone)",
        se: "**Oropharyngeal candidiasis (thrush)** (local immunosuppression — prevent by rinsing mouth + gargling after use; use spacer)\n**Dysphonia/hoarseness** (local steroid effect on laryngeal muscles)\nCough (propellant)\nHigh doses: ↓ bone density, ↓ growth velocity in children, adrenal suppression (rare at standard doses)",
        ci: "Status asthmaticus or acute bronchospasm (not a rescue medication — use SABA)\nActive oropharyngeal fungal infection (relative — treat infection first)",
        pk: "Inhaled → high local airway concentrations; swallowed fraction undergoes extensive hepatic first-pass\nCiclesonide: prodrug activated in airway — minimizes systemic effects\nBudesonide: safest ICS in pregnancy\nFluticasone propionate: high lipophilicity → long airway retention\nController effect builds over days to weeks",
        pearl: "**ICS do not cause immediate bronchodilation** — they reduce airway inflammation over days to weeks. This is why patients must not stop their ICS when symptoms improve ('feeling better' means the ICS is working). **Always instruct on rinse-and-spit after ICS** — oropharyngeal candidiasis and dysphonia are preventable with proper inhaler technique and post-dose oral rinsing."
      },
      {
        name: "Leukotriene Antagonists (LTRAs)",
        aka: "Montelukast (Singulair) · Zafirlukast (Accolate) · Zileuton (Zyflo) — 5-lipoxygenase inhibitor",
        summary: "Block leukotriene synthesis (zileuton) or cysteinyl leukotriene receptors (montelukast/zafirlukast) to reduce bronchoconstriction, mucus secretion, and eosinophilic inflammation. Used for mild persistent asthma and allergic rhinitis.",
        moa: "**Montelukast/zafirlukast:** competitive antagonism at **CysLT1 receptors** (cysteinyl leukotriene receptors) → block LTC4/LTD4/LTE4 effects → ↓ bronchoconstriction + ↓ mucus + ↓ eosinophil recruitment. **Zileuton:** inhibit **5-lipoxygenase (5-LO)** → ↓ leukotriene synthesis (LTB4 + LTC4/D4/E4) + ↓ LTB4-mediated neutrophil chemotaxis",
        use: "Mild persistent asthma (alternative/add-on to ICS)\n**Aspirin-exacerbated respiratory disease (AERD/Samter's triad)** — asthma + aspirin sensitivity + nasal polyps (most beneficial LTRA indication)\nAllergic rhinitis (montelukast — FDA-approved)\nExercise-induced bronchospasm",
        se: "**Montelukast:** neuropsychiatric effects (FDA black box 2020 — depression, suicidality, aggression, nightmares — even in children; reassess risk/benefit in psychiatric history)\n**Zafirlukast:** hepatotoxicity (monitor LFTs); CYP2C9/3A4 inhibitor (↑ warfarin)\n**Zileuton:** hepatotoxicity (most hepatotoxic — monitor LFTs); CYP1A2 inhibitor (↑ theophylline)",
        ci: "Montelukast: active neuropsychiatric illness (black box — reassess carefully)\nZileuton: hepatic disease\nAll: acute asthma exacerbation (not a bronchodilator)",
        pk: "**Montelukast:** oral once daily (evening — leukotriene levels peak at night); t½ ~5 hr; CYP2C8/3A4\n**Zafirlukast:** oral twice daily (take 2 hr before or 1 hr after food); t½ ~10 hr\n**Zileuton:** oral 4× daily (modified release 2×); t½ ~2.5 hr",
        pearl: "**LTRA + aspirin in AERD** — aspirin redirects arachidonic acid from COX (blocked by aspirin) exclusively to 5-LOX pathway → massive LT production → severe bronchoconstriction. LTRAs blunt this by blocking the final receptor. **Montelukast's neuropsychiatric black box** was added after case reports of suicidality — inform all patients/caregivers; in children especially, behavioral changes should prompt reassessment. Reassess: for mild rhinitis alone, the risk-benefit may favor other options."
      },
      {
        name: "Omalizumab & Biologic Asthma Therapies",
        aka: "Omalizumab (Xolair) — Anti-IgE | Mepolizumab (Nucala) · Reslizumab · Benralizumab — Anti-IL-5/IL-5Rα | Dupilumab (Dupixent) — Anti-IL-4Rα | Tezepelumab — Anti-TSLP",
        summary: "Monoclonal antibodies targeting specific inflammatory mediators in severe asthma. Used as add-on therapy for severe uncontrolled asthma with defined biomarker profiles. All require SC injection every 2–8 weeks.",
        moa: "**Omalizumab:** binds **free IgE** → ↓ IgE binding to FcεRI on mast cells/basophils → ↓ allergen-triggered mast cell degranulation → ↓ early and late asthma responses. **Mepolizumab/reslizumab:** monoclonal antibodies against **IL-5** → ↓ eosinophil production, survival, and activation. **Benralizumab:** binds **IL-5 receptor α (IL-5Rα)** → ADCC-mediated eosinophil depletion (faster/more complete than IL-5 antibodies). **Dupilumab:** blocks **IL-4Rα** → ↓ IL-4 and IL-13 signaling → ↓ Th2 inflammation (also approved for atopic dermatitis, eosinophilic esophagitis, nasal polyps). **Tezepelumab:** binds **TSLP** (upstream epithelial alarmin) → ↓ Th2, eosinophilic, and non-eosinophilic inflammation",
        use: "**Omalizumab:** severe persistent allergic asthma (requires IgE >30–700 IU/mL + allergen sensitivity)\n**Anti-IL-5 agents (mepolizumab/reslizumab/benralizumab):** severe eosinophilic asthma (blood eosinophils ≥150–300/µL)\n**Dupilumab:** severe eosinophilic asthma + atopic dermatitis + nasal polyps (triple indication)\n**Tezepelumab:** severe asthma regardless of phenotype (broadest indication — no required biomarker threshold)",
        se: "Injection site reactions (all)\n**Omalizumab:** anaphylaxis (0.1–0.2% — observe 30–60 min post-injection, have epinephrine available)\n**Anti-IL-5:** headache, back pain, ↑ herpes zoster (rule out parasitic infection before starting)\n**Dupilumab:** conjunctivitis (common, especially for atopic dermatitis indication)\nEGPA (rare — possibly unmasked by steroid tapering)",
        ci: "Omalizumab: non-IgE-mediated conditions\nAnti-IL-5 agents: active helminthic infection\nAll: status asthmaticus (biologics are maintenance only — not rescue)\nAnaphylaxis on prior biologic dose",
        pk: "All SC injection; dosing every 2–8 weeks; all IgG monoclonal antibodies; t½ ~3–4 weeks; proteolytic catabolism\n**Omalizumab:** every 2–4 weeks (dose by weight + IgE level)\n**Mepolizumab:** 100 mg SC every 4 weeks\n**Benralizumab:** 30 mg SC q4 weeks × 3, then q8 weeks\n**Dupilumab:** 200–300 mg SC every 2 weeks\n**Tezepelumab:** 210 mg SC every 4 weeks",
        pearl: "**Biomarker selection guides biologic choice:** high IgE + allergen sensitivity → omalizumab; high eosinophils (≥300/µL) → anti-IL-5/anti-IL-5R; Type 2 inflammation with atopy → dupilumab; no clear phenotype or mixed → tezepelumab (no biomarker threshold required). **Biologics allow steroid sparing** — patients on chronic oral steroids often achieve steroid-free control after 3–6 months of biologic therapy."
      },
      {
        name: "Cromolyn Sodium",
        aka: "Cromolyn Sodium (Intal — inhaled) · Cromolyn (Gastrocrom — oral) · Nedocromil",
        summary: "Mast cell stabilizer that prevents degranulation of mast cells and inhibits sensory nerve activation. Used for mild persistent asthma (especially in children) and exercise-induced bronchospasm; poor systemic bioavailability limits toxicity.",
        moa: "Mechanism incompletely understood; proposed: blocks **Cl⁻ channels** on mast cells → prevents Ca²⁺ influx → inhibits mast cell degranulation → ↓ histamine, LTs, prostaglandins; also inhibits sensory C-fiber activation (neurogenic inflammation) and eosinophil activation",
        use: "Mild persistent asthma (especially children — inhalation prophylaxis)\nExercise-induced bronchospasm (inhale 15–30 min before exercise)\nAllergen-challenge prophylaxis (inhale before exposure)\nOral: mastocytosis, food allergy GI symptoms",
        se: "Throat irritation, cough (inhaled powder)\nParadoxical bronchospasm (rare)\nBad taste; headache\nNo significant systemic SE (minimal absorption)",
        ci: "Acute asthma attack (prophylactic only — not a bronchodilator)\nMust be used regularly (does not work PRN — requires consistent use)",
        pk: "Inhaled MDI or nebulizer; oral capsule for GI indications\nOral bioavailability <1% (essentially no systemic absorption)\nPulmonary deposition ~8% of inhaled dose; t½ ~80 min\nMust dose 3–4× daily (frequent dosing → adherence barrier → largely replaced by ICS in adults)",
        pearl: "**Cromolyn is one of the safest drugs in pharmacology** — essentially no systemic absorption and no serious adverse effects. However, its clinical efficacy is modest compared to ICS, and its 3–4 times/day dosing makes adherence difficult. It is rarely used in adults today but remains an option for mild asthma in **children** (minimal steroid exposure) and for **exercise-induced bronchospasm prophylaxis**."
      },
    ]
  },
  {
    group: "Pulmonary Other",
    drugs: [
      {
        name: "Antihistamines",
        aka: "1st Generation: Diphenhydramine (Benadryl) · Chlorpheniramine · Hydroxyzine · Promethazine · Meclizine | 2nd Generation: Loratadine (Claritin) · Cetirizine (Zyrtec) · Fexofenadine (Allegra) · Levocetirizine · Desloratadine",
        summary: "Competitive H1 receptor antagonists that reduce histamine-mediated symptoms. First-generation agents cross the BBB causing sedation; second-generation agents are largely non-sedating and preferred for chronic allergic conditions.",
        moa: "Competitive antagonism at **H1 (histamine type 1) receptors** → ↓ histamine-mediated vasodilation, increased vascular permeability, mucus secretion, itching, and smooth muscle spasm; 1st-generation also block **muscarinic, α1, and serotonin receptors** (broader side-effect profile)",
        use: "**2nd gen (loratadine/cetirizine/fexofenadine):** allergic rhinitis (first-line), urticaria/hives\n**Diphenhydramine:** anaphylaxis (adjunct to epinephrine — NOT first-line alone), drug-induced EPS/acute dystonia (anticholinergic reversal), premedication for contrast, insomnia (OTC), red man syndrome\n**Meclizine/dimenhydrinate:** motion sickness (vestibular H1 + muscarinic)\n**Hydroxyzine:** chronic urticaria\n**Promethazine:** nausea/vomiting (H1 + D2 block in CTZ), preoperative sedation",
        se: "**1st gen:** sedation (CNS H1 blockade — diphenhydramine most sedating), anticholinergic effects (dry mouth, urinary retention, constipation, blurred vision, tachycardia, confusion — especially elderly), QTc prolongation\n**Promethazine:** tissue necrosis with IV/SC use (intra-arterial → gangrene — IV/IM only); respiratory depression in children <2 yr (black box)\n**2nd gen:** minimal sedation (fexofenadine least); cetirizine: mild sedation in some",
        ci: "1st-gen: narrow-angle glaucoma, BPH, elderly (Beers criteria — falls/delirium/cognitive impairment), concurrent MAOIs\nPromethazine: children <2 yr (fatal respiratory depression); IA injection\nFexofenadine: antacids (Al³⁺/Mg²⁺ reduce absorption — separate by 2 hr)",
        pk: "**1st gen:** lipophilic + not P-gp substrate → CNS penetration; t½ ~4–8 hr; hepatic\n**Diphenhydramine:** IV/IM/oral, t½ ~4–6 hr\n**Loratadine:** t½ ~8–14 hr, once daily, minimal CYP interactions\n**Cetirizine:** t½ ~8 hr, renal (dose-reduce in CKD)\n**Fexofenadine:** t½ ~14 hr, minimal metabolism, virtually no CNS penetration (P-gp substrate)",
        pearl: "**First-generation antihistamines are on the Beers criteria** for elderly patients — they cause cognitive impairment, falls, delirium, and urinary retention. Always use second-generation for chronic allergic conditions. **Diphenhydramine is NOT adequate treatment for anaphylaxis** — epinephrine is the only life-saving drug; diphenhydramine is adjunctive therapy only. Terfenadine and astemizole were withdrawn for fatal QTc-related arrhythmias — the lesson that drove development of safer 2nd-gen agents."
      },
      {
        name: "PDE5 Inhibitors, Prostacyclins & Endothelin Antagonists",
        aka: "PDE5 inhibitors: Sildenafil (Viagra/Revatio) · Tadalafil (Cialis/Adcirca) | Prostacyclins: Epoprostenol (Flolan) · Treprostinil | Endothelin antagonists: Bosentan (Tracleer) · Ambrisentan | sGC stimulator: Riociguat",
        summary: "PAH-specific therapies targeting distinct vasodilatory pathways. PDE5 inhibitors also treat erectile dysfunction. High-yield for unique toxicities — especially sildenafil's ocular side effects and riociguat's absolute contraindication with nitrates.",
        moa: "**Sildenafil/tadalafil:** inhibit **PDE5** → ↑ cGMP → pulmonary + penile vascular smooth muscle relaxation (potentiates NO). Also inhibit **PDE6 in retinal photoreceptors** → bluish color vision discoloration.\n**Epoprostenol/prostacyclins:** activate **IP receptor (Gs)** → ↑ cAMP → vasodilation + ↓ platelet aggregation.\n**Bosentan/ambrisentan:** antagonize **ETA/ETB receptors** → ↓ endothelin-1-mediated vasoconstriction.\n**Riociguat:** directly stimulates **soluble guanylate cyclase (sGC)** → ↑ cGMP independent of NO.",
        use: "**Sildenafil/tadalafil:** PAH (Revatio/Adcirca) + erectile dysfunction (Viagra/Cialis)\n**Epoprostenol:** severe PAH (IV continuous — most effective; bridges to transplant)\n**Treprostinil:** moderate PAH (SC or inhaled)\n**Bosentan/ambrisentan:** oral PAH\n**Riociguat:** PAH + CTEPH (only PAH drug approved for chronic thromboembolic PH — WHO Group 4)",
        se: "**Sildenafil/tadalafil — ocular (high-yield):**\n→ **Blue-tinted vision** (PDE6 inhibition in retina — transient, dose-dependent)\n→ **NAION** (nonarteritic anterior ischemic optic neuropathy) — sudden monocular vision loss, afferent pupillary defect, ↓ visual acuity, optic disc edema; risk ↑ with cardiovascular risk factors\n**Sildenafil/tadalafil — other:** hypotension, flushing, headache, priapism\n**Epoprostenol:** rebound PAH if abruptly stopped (t½ ~3 min — never interrupt); catheter sepsis\n**Bosentan:** hepatotoxicity (monthly LFTs); teratogenic (Category X; ↓ OCP efficacy via CYP induction)",
        ci: "**Sildenafil/tadalafil + nitrates** (↑↑ cGMP → severe hypotension — absolute CI)\n**Riociguat + PDE5 inhibitors or nitrates** (absolute CI — catastrophic hypotension)\n**Bosentan:** pregnancy (Category X)\n**Epoprostenol:** pulmonary veno-occlusive disease (↑ pulmonary edema)",
        pk: "**Sildenafil:** t½ ~4 hr; CYP3A4; oral 3× daily for PAH vs. PRN for ED\n**Tadalafil:** t½ ~18 hr (once daily dosing)\n**Epoprostenol:** IV only, t½ ~3–6 min (pump must never be interrupted)\n**Bosentan:** oral; CYP2C9/3A4 inducer (↓ OCP, ↓ cyclosporine)",
        pearl: "**Sildenafil causes blue vision by inhibiting PDE6** (retinal isoform) — distinct from PDE5. More serious: **NAION** presents as sudden painless monocular vision loss with afferent pupillary defect and optic disc edema — a cardiovascular risk factor profile (HTN, DM, hyperlipidemia) dramatically increases risk. **Riociguat + PDE5 inhibitors is an absolute CI** — both converge on cGMP → catastrophic hypotension."
      },
    ]
  },
],

onco: [
  {
    group: "Chemotherapy",
    drugs: [
      {
        name: "Antimetabolites",
        aka: "Methotrexate (MTX) · 5-Fluorouracil (5-FU) · Pemetrexed · Capecitabine (oral 5-FU prodrug)",
        summary: "Structural analogs of nucleotides or folate cofactors that disrupt nucleic acid synthesis. Methotrexate is the most versatile — used in cancer, autoimmune disease, and ectopic pregnancy. 5-FU is foundational in GI oncology.",
        moa: "**Methotrexate:** inhibit **dihydrofolate reductase (DHFR)** → ↓ THF → ↓ purine and thymidylate synthesis → cell death; also inhibits AICAR transformylase; effects reversed by **leucovorin** (folinic acid rescue). **5-FU:** converted intracellularly to FdUMP → inhibit **thymidylate synthase** → ↓ dTMP → ↓ DNA synthesis; also incorporated into RNA (→ ↓ protein synthesis)",
        use: "**MTX:** ALL (high-dose), osteosarcoma, CNS lymphoma, meningeal leukemia (intrathecal); RA (low-dose — anti-inflammatory); psoriasis (severe); ectopic pregnancy (IM — unruptured); Crohn disease\n**5-FU:** colorectal cancer (FOLFOX, FOLFIRI), head/neck, breast, gastric/pancreatic cancer\n**Capecitabine:** oral 5-FU prodrug (converted by thymidine phosphorylase — higher in tumor)\n**Pemetrexed:** NSCLC, mesothelioma (+ premedicate with folic acid/B12 to ↓ toxicity)",
        se: "**MTX:** myelosuppression (nadir 7–14 days), mucositis/stomatitis, hepatotoxicity (chronic low-dose → fibrosis), pulmonary toxicity (interstitial pneumonitis), nephrotoxicity (high-dose — hydration + urinary alkalinization), teratogenicity (Category X)\n**5-FU:** myelosuppression, hand-foot syndrome (capecitabine especially), mucositis, cardiotoxicity (coronary vasospasm — rare), cerebellar ataxia\n**DPD deficiency → severe 5-FU toxicity** (screen before use)",
        ci: "MTX: pregnancy (Category X), severe hepatic/renal disease, active infection; concurrent NSAIDs/probenecid (↓ MTX renal clearance → toxicity)\n5-FU: DPD deficiency (severe/fatal toxicity), severe organ failure",
        pk: "**MTX:** oral/IV/IM/IT; t½ ~2–10 hr (low dose); renally eliminated — dose-reduce in CKD; **leucovorin rescue** required with high-dose MTX (24 hr after dose — rescues normal cells)\n**5-FU:** IV (continuous infusion preferred — ↓ myelosuppression vs. bolus); t½ ~10–20 min (rapid DPD metabolism)\n**Capecitabine:** oral, hepatic → 5-FU; t½ ~0.75 hr; renal adjustment",
        pearl: "**Leucovorin rescues MTX toxicity** by providing reduced folate that bypasses DHFR — given 24 hr after high-dose MTX and continued until serum MTX levels fall to safe range. **DPD deficiency testing before 5-FU** is now increasingly recommended (FDA guidance 2022) — ~3–5% of patients have partial deficiency and are at risk for severe/fatal toxicity from standard doses. Capecitabine hand-foot syndrome responds to dose reduction and vitamin B6 (pyridoxine)."
      },
      {
        name: "Cytarabine, Cladribine & Gemcitabine",
        aka: "Cytarabine (Ara-C, Cytosar) · Cladribine (Leustatin, 2-CDA) · Gemcitabine (Gemzar) · Fludarabine",
        summary: "Nucleoside analog antimetabolites used in hematologic malignancies and solid tumors. Cytarabine is foundational in AML treatment; cladribine/clofarabine are unique for hairy cell leukemia; gemcitabine is widely used in solid tumors.",
        moa: "All: phosphorylated intracellularly to triphosphate form → **competitive inhibitors of DNA polymerase** → chain termination → DNA strand breaks. **Cytarabine (Ara-C):** S-phase specific (only kills dividing cells). **Cladribine/fludarabine:** also inhibit ribonucleotide reductase; cladribine incorporates into DNA of both dividing and resting lymphocytes (active against quiescent cells — unique). **Gemcitabine:** self-potentiating (inhibits ribonucleotide reductase → ↓ competing dCTP → ↑ gemcitabine incorporation)",
        use: "**Cytarabine (Ara-C):** AML induction/consolidation (mainstay — '7+3' induction + anthracycline), ALL, CML blast crisis, CNS leukemia (intrathecal)\n**Cladribine:** hairy cell leukemia (drug of choice — single course → durable remissions), CLL, NHL, multiple sclerosis (oral)\n**Gemcitabine:** pancreatic cancer (first-line), NSCLC, bladder, breast, ovarian cancer\n**Fludarabine:** CLL, follicular lymphoma",
        se: "**Cytarabine:** profound myelosuppression; cerebellar toxicity (high-dose — ataxia, dysarthria, nystagmus — irreversible; daily cerebellar assessment required); conjunctivitis (high-dose — prophylactic corticosteroid eye drops); Ara-C syndrome (fever, myalgia, rash 6–12 hr post-dose — steroid-responsive)\n**Cladribine:** prolonged immunosuppression (lymphopenia for months → opportunistic infections — PCP prophylaxis required)\n**Gemcitabine:** myelosuppression, pulmonary toxicity (interstitial pneumonitis — dose-limiting), HUS (rare, cumulative), flu-like syndrome",
        ci: "All: severe bone marrow failure (without transplant backup); pregnancy\nCladribine: active infection\nGemcitabine: concurrent radiation to sensitive sites (radiation sensitization)",
        pk: "**Cytarabine:** IV (continuous infusion preferred — maximizes S-phase exposure) or IT; t½ ~10 min (rapid deamination — hence continuous infusion); liposomal Ara-C (DepoCyt) for IT — slow release over 14 days\n**Cladribine:** IV/SC (or oral for MS); t½ ~10 hr; phosphorylated in lymphocytes and monocytes\n**Gemcitabine:** IV weekly; t½ ~42–94 min",
        pearl: "**Cytarabine cerebellar toxicity** at high doses is irreversible — must perform daily cerebellar assessment (finger-nose testing, gait) during each high-dose Ara-C cycle and stop immediately if cerebellar signs appear. Risk factors include age >50, renal dysfunction, and elevated creatinine. **Cladribine for hairy cell leukemia** produces complete remission with a single course in >85% of patients — one of the most durable single-drug remissions in oncology."
      },
      {
        name: "Hydroxyurea",
        aka: "Hydroxyurea (Hydrea, Droxia)",
        summary: "Ribonucleotide reductase inhibitor that reduces DNA synthesis and increases fetal hemoglobin. Used for CML, sickle cell disease, polycythemia vera, and essential thrombocythemia.",
        moa: "Inhibit **ribonucleotide reductase** → ↓ deoxyribonucleotide (dNTP) production → ↓ DNA synthesis (S-phase specific); also induces **fetal hemoglobin (HbF)** synthesis via epigenetic mechanisms (↑ γ-globin gene expression) → ↑ HbF → ↓ sickling (HbF does not polymerize with HbS)",
        use: "**Sickle cell disease** (↓ vaso-occlusive crises, acute chest syndrome, hospitalizations — ↑ HbF)\n**CML** (cytoreduction while awaiting TKI response or if TKI-ineligible)\nPolycythemia vera + essential thrombocythemia (cytoreduction, ↓ thrombosis — high-risk patients)\nHead/neck cancer (+ radiation); cervical cancer",
        se: "**Myelosuppression** (neutropenia, thrombocytopenia — monitor CBC every 2–4 weeks)\n**Macrocytosis** (↑ MCV — useful therapeutic adherence marker in SCD)\nMucositis\n**Leg ulcers** (painful, slow-healing)\nSkin/nail hyperpigmentation, cutaneous atrophy\nTeratogenicity (Category D/X); secondary leukemia (long-term — lower risk than alkylating agents)",
        ci: "Pregnancy; severe myelosuppression; breastfeeding\nHold if ANC <2500/µL or platelets <100,000/µL",
        pk: "Oral, once daily; bioavailability ~100%; t½ ~2–4 hr; renal elimination (50%) — dose-reduce in CKD\n**Macrocytosis is a reliable adherence marker** — if MCV not elevated, patient likely not taking it\nHbF increase takes 2–4 months; full clinical benefit 3–6 months",
        pearl: "**Hydroxyurea for sickle cell disease reduces HbF** — HbF inhibits polymerization of HbS (HbF dilutes HbS and sterically interferes with deoxy-HbS polymer formation). Target: HbF >20%. A simple CBC showing **elevated MCV** confirms adherence — macrocytosis is nearly universal with therapeutic dosing. Hydroxyurea is severely underutilized in SCD — evidence shows it reduces mortality, not just pain crises."
      },
      {
        name: "Alkylating Agents",
        aka: "Cyclophosphamide (Cytoxan) · Ifosfamide · Chlorambucil · Melphalan · Busulfan · Carmustine (BCNU) · Dacarbazine · Temozolomide · Bendamustine · Cisplatin · Carboplatin · Oxaliplatin",
        summary: "Cross-link or alkylate DNA strands to prevent replication and transcription. Cell-cycle non-specific agents used in diverse cancers and autoimmune diseases; associated with secondary malignancy and gonadal toxicity.",
        moa: "Form **covalent alkyl/platinum adducts with DNA** (N7 of guanine most common) → **interstrand/intrastrand DNA cross-links** → impair DNA replication/transcription → cell death; cell-cycle non-specific (can kill non-dividing cells); Cisplatin/carboplatin/oxaliplatin: platinum compounds bind guanine N7 → platinum-DNA adducts → same cross-linking effect",
        use: "**Cyclophosphamide:** breast cancer, lymphomas, CLL, myeloma, ovarian; severe autoimmune diseases (lupus nephritis, GPA — high-dose pulse); transplant conditioning\n**Ifosfamide:** sarcomas, testicular cancer\n**Melphalan:** multiple myeloma (high-dose → ASCT conditioning)\n**Busulfan:** CML, AML conditioning\n**Temozolomide:** glioblastoma multiforme (+ radiation — STUPP protocol)\n**Carmustine:** CNS tumors (crosses BBB)\n**Cisplatin:** testicular (curative), ovarian, bladder, head/neck, NSCLC, cervical, esophageal\n**Carboplatin:** ovarian, NSCLC (less nephrotoxic/ototoxic than cisplatin)\n**Oxaliplatin:** colorectal cancer (FOLFOX — first-line)",
        se: "**Cyclophosphamide/ifosfamide:** hemorrhagic cystitis (acrolein → bladder — prevent with **mesna** + aggressive hydration); SIADH (cyclophosphamide); secondary malignancy (AML/bladder); gonadal toxicity; myelosuppression; alopecia\n**Cisplatin:** nephrotoxicity (proximal tubular injury — prevent with aggressive IV hydration + mannitol), ototoxicity (high-frequency sensorineural — irreversible, cumulative), peripheral neuropathy, severe N/V, hypomagnesemia\n**Carboplatin:** thrombocytopenia (dose-limiting — Calvert formula for AUC-based dosing)\n**Oxaliplatin:** peripheral neuropathy (acute cold-triggered paresthesias + chronic cumulative sensory neuropathy)\n**Busulfan:** pulmonary fibrosis (busulfan lung), skin hyperpigmentation, veno-occlusive disease",
        ci: "Cyclophosphamide/ifosfamide without mesna (hemorrhagic cystitis)\nCisplatin: pre-existing neuropathy/hearing loss; renal impairment (use carboplatin)\nAll: pregnancy (teratogenic/mutagenic)",
        pk: "**Cyclophosphamide:** oral or IV; prodrug → hepatic CYP2B6/3A4 → active phosphoramide mustard + acrolein\n**Cisplatin:** IV; protein-bound + cellular proteins; t½ ~60–90 hr (platinum); renally eliminated — pre/post hydration (2–3 L saline)\n**Carboplatin:** Calvert formula dosing: dose = AUC × [GFR + 25]\n**Temozolomide:** oral, 100% bioavailability; spontaneous conversion to active MTIC at physiologic pH (no hepatic activation); penetrates BBB",
        pearl: "**Mesna is mandatory with ifosfamide** and required with high-dose cyclophosphamide — it provides free thiol groups in the bladder that neutralize acrolein, preventing hemorrhagic cystitis. **Cisplatin ototoxicity and nephrotoxicity** are cumulative and irreversible — baseline audiometry and adequate hydration are essential. **Temozolomide for GBM** exploits methylation of MGMT gene promoter in tumor cells — MGMT-methylated tumors respond better (MGMT methylation is a predictive biomarker)."
      },
      {
        name: "Microtubule-Targeting Agents",
        aka: "Taxanes: Paclitaxel (Taxol) · Docetaxel (Taxotere) · Nab-paclitaxel (Abraxane) | Vinca Alkaloids: Vincristine (Oncovin) · Vinblastine · Vinorelbine | Eribulin",
        summary: "Stabilize (taxanes) or destabilize (vinca alkaloids) microtubule polymerization to arrest cells in mitosis. Foundational agents in breast, ovarian, NSCLC, lymphoma, and leukemia chemotherapy.",
        moa: "**Taxanes (paclitaxel, docetaxel):** bind **β-tubulin** → stabilize polymerized microtubules → prevent depolymerization → mitotic arrest at G2/M → apoptosis. **Vinca alkaloids (vincristine, vinblastine):** bind **β-tubulin** at a different site → prevent polymerization → destabilize mitotic spindle → mitotic arrest → apoptosis",
        use: "**Paclitaxel:** ovarian (+ carboplatin), breast, NSCLC, gastric\n**Docetaxel:** breast, NSCLC, prostate (castration-resistant), gastric\n**Vincristine:** ALL (foundational — CHOP, MOPP), Hodgkin + non-Hodgkin lymphoma, Wilms tumor, rhabdomyosarcoma\n**Vinblastine:** Hodgkin lymphoma (ABVD), testicular, Kaposi sarcoma\n**Vinorelbine:** NSCLC, breast",
        se: "**Taxanes:** peripheral neuropathy (dose-limiting — sensory > motor; cumulative; may be irreversible), myelosuppression, alopecia (universal), hypersensitivity reactions (paclitaxel — Cremophor vehicle; premedicate with dexamethasone + H1/H2; nab-paclitaxel avoids Cremophor), fluid retention (docetaxel — steroid prophylaxis)\n**Vinca alkaloids:** peripheral neuropathy (vincristine most neurotoxic — dose-limiting; sensorimotor + autonomic), constipation/ileus (autonomic neuropathy — **prophylactic laxatives mandatory with vincristine**), SIADH (vincristine), vesicant (severe tissue necrosis with extravasation)\n**Vinblastine:** more myelosuppression than vincristine",
        ci: "**Vincristine: intrathecal administration is FATAL** — IV only (administrative error has caused deaths; special labeling required)\nTaxanes: severe neuropathy; severe neutropenia; hypersensitivity without nab-paclitaxel alternative",
        pk: "**Paclitaxel:** IV over 3 hr or 24 hr; t½ ~6–12 hr; CYP2C8/3A4; biliary elimination\n**Nab-paclitaxel:** albumin-bound nanoparticle — no Cremophor, no premedication needed\n**Docetaxel:** IV; CYP3A4 (avoid potent inhibitors)\n**Vincristine:** IV only (NEVER IT); t½ ~85 hr; hepatic; biliary elimination",
        pearl: "**VINCRISTINE IS NEVER GIVEN INTRATHECALLY — ALWAYS IV.** Intrathecal vincristine causes ascending paralysis and death — this is one of the most catastrophic medication errors in oncology and specific safety protocols exist. **Constipation with vincristine is autonomic neuropathy** (not medication-related) — always prescribe prophylactic bowel regimen (stimulant laxative) with every vincristine-containing regimen."
      },
      {
        name: "Topoisomerase Inhibitors",
        aka: "Topoisomerase I: Irinotecan (Camptosar) · Topotecan | Topoisomerase II: Etoposide (VP-16) · Teniposide",
        summary: "Inhibit topoisomerase enzymes required for DNA unwinding during replication. Irinotecan is foundational in colorectal cancer; etoposide in lung cancer and germ cell tumors.",
        moa: "**Topoisomerase I inhibitors (camptothecins):** bind and stabilize **topoisomerase I-DNA cleavage complex** → prevent DNA strand religation → persistent single-strand breaks → collision with replication fork → cell death (S-phase specific). **Topoisomerase II inhibitors (epipodophyllotoxins):** stabilize **topoisomerase II-DNA cleavage complex** → persistent double-strand breaks → cell death (G2/M specific)",
        use: "**Irinotecan:** colorectal cancer (FOLFIRI — first/second-line metastatic), cervical cancer\n**Topotecan:** ovarian (platinum-refractory), small cell lung cancer\n**Etoposide:** small cell lung cancer (platinum + etoposide — first-line), testicular (BEP), lymphomas, germ cell tumors, AML conditioning",
        se: "**Irinotecan:** severe diarrhea (dose-limiting — two types: early [cholinergic — during/within 24 hr — treat with atropine IV] and late [secretory — after 24 hr — treat with high-dose loperamide]); myelosuppression; UGT1A1*28 allele → ↑ SN-38 toxicity\n**Topotecan:** profound myelosuppression (dose-limiting)\n**Etoposide:** myelosuppression (dose-limiting); secondary AML (topoisomerase II damage → 11q23 [MLL] translocations; latency 2–3 years); alopecia; hypotension (rapid infusion)",
        ci: "UGT1A1*28/*28 homozygous (irinotecan — lethal toxicity — reduce dose)\nSevere myelosuppression; severe hepatic impairment (irinotecan)\nEtoposide: severe hypersensitivity (Cremophor/polysorbate 80)",
        pk: "**Irinotecan:** IV; prodrug → carboxylesterase → active SN-38; SN-38 glucuronidated by UGT1A1 → SN-38G; enterohepatic recycling → late diarrhea\n**Etoposide:** oral or IV; t½ ~6–12 hr; CYP3A4; renal + hepatic\n**Topotecan:** IV or oral; t½ ~2–3 hr; renal (dose-reduce in CKD)",
        pearl: "**Irinotecan's biphasic diarrhea** is a unique pharmacologic phenomenon: early diarrhea (cholinergic — occurs during/after infusion, caused by irinotecan's anticholinesterase activity — treat with atropine IV) vs. late diarrhea (cholinergic/secretory — delayed, from SN-38 in gut lumen — treat with high-dose loperamide 4 mg then 2 mg q2h until 12 hr diarrhea-free). **UGT1A1 *28/*28 genotype** should prompt dose reduction."
      },
      {
        name: "Anthracyclines",
        aka: "Doxorubicin (Adriamycin) · Daunorubicin · Epirubicin · Idarubicin · Liposomal Doxorubicin (Doxil)",
        summary: "Anthracycline antibiotics that intercalate into DNA and inhibit topoisomerase II, generating free radicals that damage the heart and tumor cells. Used in breast cancer, AML, lymphomas; cardiotoxicity is the major long-term concern.",
        moa: "**Multiple mechanisms:** (1) **DNA intercalation** → disrupt DNA double helix → inhibit transcription/replication; (2) **topoisomerase II inhibition** → DNA double-strand breaks; (3) **free radical (ROS) generation** via redox cycling → oxidative damage to tumor cells AND cardiac myocytes (cardiomyocytes have low catalase/glutathione → vulnerable to ROS); iron chelation amplifies ROS",
        use: "**Doxorubicin:** breast cancer (AC, AC-T), Hodgkin lymphoma (ABVD), NHL (CHOP/R-CHOP), sarcomas, AML, ovarian\n**Daunorubicin:** AML induction ('7+3' + Ara-C), ALL\n**Idarubicin:** AML\n**Epirubicin:** breast cancer (less cardiotoxic)\n**Liposomal doxorubicin (Doxil):** Kaposi sarcoma, ovarian, myeloma (less cardiotoxicity)",
        se: "**Cardiotoxicity** — dose-dependent irreversible dilated cardiomyopathy (cumulative: doxorubicin >450–550 mg/m²; monitor with echocardiogram; free radical damage to cardiomyocytes; prevent with **dexrazoxane** — iron chelator)\nMyelosuppression (dose-limiting); alopecia (universal); mucositis\n**Extravasation necrosis** (vesicant — treat with dexrazoxane IV antidote)\n**Red/orange urine** (harmless pigmented metabolite — warn patients)\n**Radiation recall** (inflammatory skin reaction at prior radiation field)",
        ci: "Pre-existing cardiomyopathy (check EF before each cycle)\nCumulative dose threshold exceeded; recent MI; mediastinal radiation; prior high-dose anthracycline\nUncontrolled arrhythmias",
        pk: "IV infusion (NEVER intrathecal); t½ biphasic (terminal ~20–48 hr); hepatic → active adriamycinol; biliary/fecal (~50%)\n**Dose-reduce in hepatic dysfunction** (unlike most chemo requiring renal adjustment)\nLiposomal doxorubicin: PEG-liposomes → longer circulation + preferential tumor accumulation + less cardiac exposure",
        pearl: "**Cumulative lifetime anthracycline dose must be tracked** — standard-dose doxorubicin crosses the cardiomyopathy threshold at ~450–550 mg/m². Always document prior anthracycline exposure and check echo (EF >50–55% before each cycle). **Dexrazoxane** prevents cardiomyopathy by chelating iron and reducing oxidative damage — FDA-approved cardioprotection for patients who have already received 300 mg/m² doxorubicin and need more. It is also the antidote for anthracycline extravasation."
      },
      {
        name: "Bleomycin",
        aka: "Bleomycin (Blenoxane)",
        summary: "Glycopeptide antibiotic that causes free radical-mediated DNA strand breaks. Unique for lack of myelosuppression; major dose-limiting toxicity is pulmonary fibrosis. Used in testicular cancer and Hodgkin lymphoma (ABVD).",
        moa: "Chelates **Fe²⁺** → forms bleomycin-Fe²⁺-O₂ complex → generates reactive oxygen species (hydroxyl radicals) → **DNA single and double-strand breaks** → cell death; concentrated in lung and skin (both highly sensitive to ROS); minimal bone marrow effect",
        use: "**Testicular cancer** (BEP — bleomycin + etoposide + cisplatin — highly curative even in metastatic disease)\n**Hodgkin lymphoma** (ABVD)\nSquamous cell carcinomas (head/neck, cervix)\nMalignant pleural effusions (intrapleural sclerotherapy)",
        se: "**Pulmonary toxicity** (most important — cumulative dose-dependent interstitial pneumonitis → fibrosis; risk ↑ above >400 units lifetime; ↑ with renal failure, age >70, prior radiation, **high FiO₂**)\nFever/chills (within hours — most common acute SE; give antipyretics)\nRaynaud phenomenon; flagellate hyperpigmentation (pathognomonic streak-like skin lesions)\n**Minimal myelosuppression** (unique — no neutropenia/thrombocytopenia)\nHypersensitivity reactions",
        ci: "**High perioperative FiO₂** (accelerates ROS → acute respiratory failure; limit FiO₂ to lowest needed to maintain SpO₂ after bleomycin exposure)\nPrior severe bleomycin pulmonary toxicity\nCumulative dose >400 units; severe renal impairment (renal elimination — accumulates)",
        pk: "IV/IM/SC/intrapleural; t½ ~2 hr\nRenally eliminated — dose-reduce significantly in CKD\nLungs concentrate bleomycin (low bleomycin hydrolase in lung — the enzyme that inactivates it)\nMonitor DLCO before each cycle in high-risk patients",
        pearl: "**Bleomycin and high FiO₂ perioperatively** is a critical anesthesia consideration — anesthesiologists must be informed that a patient has received bleomycin. High inspired O₂ can precipitate acute respiratory failure in the OR and postoperatively. Many institutions limit FiO₂ to the lowest level needed to maintain SpO₂. **Flagellate hyperpigmentation** (streak-like skin lesions) is pathognomonic for bleomycin toxicity."
      },
      {
        name: "Targeted Therapy & Monoclonal Antibodies",
        aka: "Trastuzumab (Herceptin) · Pertuzumab — HER2 | Rituximab (Rituxan) — CD20 | Bevacizumab (Avastin) — VEGF | Cetuximab — EGFR | Ipilimumab (Yervoy) · Nivolumab · Pembrolizumab — Immune checkpoints | Bortezomib — Proteasome",
        summary: "Targeted antibodies and small molecules that block specific tumor-driving receptors, angiogenesis, or immune checkpoints. Transformed cancer treatment for HER2+ breast cancer, lymphoma, colorectal cancer, and multiple myeloma.",
        moa: "**Trastuzumab:** anti-**HER2 (ErbB2)** monoclonal antibody → ADCC + ↓ HER2 signaling → ↓ proliferation/survival in HER2-overexpressing tumors. **Rituximab:** anti-**CD20** → ADCC + complement + apoptosis → B-cell depletion. **Bevacizumab:** anti-**VEGF-A** → ↓ tumor angiogenesis → ↓ blood supply to tumor. **Cetuximab:** anti-**EGFR** chimeric antibody → ↓ EGFR signaling (only effective if tumor has wild-type KRAS — KRAS mutations render EGFR blockade ineffective). **Anti-PD-1/PD-L1 (nivolumab, pembrolizumab):** block **PD-1/PD-L1 checkpoint** → restore T-cell anti-tumor activity. **Ipilimumab:** anti-**CTLA-4** → remove T-cell brake → ↑ T-cell activation. **Bortezomib:** inhibit **26S proteasome** → ↑ misfolded protein accumulation → ↓ NF-κB → apoptosis (multiple myeloma plasma cells particularly dependent on proteasome)",
        use: "**Trastuzumab:** HER2+ breast cancer (adjuvant + metastatic), HER2+ gastric/GEJ cancer\n**Rituximab:** B-cell NHLs (R-CHOP), CLL, RA, ANCA vasculitis, pemphigus\n**Bevacizumab:** colorectal, NSCLC, ovarian, cervical, glioblastoma\n**Cetuximab:** KRAS wild-type colorectal, head/neck squamous cell\n**Pembrolizumab/nivolumab:** melanoma, NSCLC, MSI-high tumors (tumor-agnostic), RCC, urothelial, many others\n**Ipilimumab:** melanoma, RCC (+ nivolumab combo)\n**Bortezomib:** multiple myeloma (first-line + relapsed), mantle cell lymphoma",
        se: "**Trastuzumab:** cardiomyopathy (↓ EF — reversible; never combine concurrently with anthracyclines; monitor echo)\n**Rituximab:** infusion reactions (cytokine release — premedicate); hepatitis B reactivation (screen/treat HBV before); PML (JC virus)\n**Bevacizumab:** hypertension, thromboembolism, poor wound healing (hold ≥4 weeks before surgery), GI perforation\n**Cetuximab:** acneiform skin rash (EGFR in skin — severity correlates with response — good prognostic sign), hypomagnesemia\n**Immune checkpoint inhibitors:** irAEs (any tissue — pneumonitis, colitis, hepatitis, endocrinopathies [thyroiditis, adrenal insufficiency, T1DM], nephritis, myocarditis — treat with corticosteroids)\n**Bortezomib:** peripheral neuropathy (SC less than IV), thrombocytopenia, herpes zoster reactivation (acyclovir prophylaxis required)",
        ci: "Trastuzumab: severe cardiomyopathy (EF <40%); concurrent anthracyclines\nCetuximab: KRAS-mutant tumors (no response, possible harm)\nBevacizumab: recent/planned surgery, uncontrolled HTN, GI perforation history\nAnti-PD-1: active severe autoimmune disease; organ transplant (rejection)\nBortezomib: severe peripheral neuropathy",
        pk: "All mAbs: IV infusion; t½ ~2–4 weeks (IgG); proteolytic catabolism (not CYP-based)\nTrastuzumab: t½ ~28 days; every 3 weeks\nRituximab: t½ ~22 days; B-cell recovery 6–12 months\nBortezomib: IV or SC; t½ ~76–108 hr; hepatic CYP3A4; **SC = equivalent exposure with significantly less peripheral neuropathy**",
        pearl: "**Trastuzumab cardiomyopathy is reversible** (unlike anthracycline cardiomyopathy which is permanent) — HER2 signaling is important for cardiomyocyte survival/repair, and blocking it causes reversible cardiac dysfunction that recovers after discontinuation. **KRAS mutation testing is mandatory before cetuximab** — mutant KRAS tumors are resistant to EGFR blockade (downstream pathway already constitutively active) and may have paradoxically worse outcomes with cetuximab."
      },
      {
        name: "Tyrosine Kinase Inhibitors (TKIs) — Targeted Oncology",
        aka: "BCR-ABL: Imatinib (Gleevec) · Dasatinib · Nilotinib · Ponatinib | EGFR: Erlotinib · Gefitinib · Osimertinib | ALK: Crizotinib · Alectinib | VEGFR/multi-kinase: Sunitinib · Sorafenib | BRAF: Vemurafenib · Dabrafenib | BTK: Ibrutinib",
        summary: "Small molecule inhibitors of oncogenic tyrosine kinases that competitively block ATP binding to the kinase domain. Imatinib revolutionized CML treatment; subsequent generations overcome resistance mutations. Targeted therapy requires companion biomarker testing.",
        moa: "Competitive inhibition of **ATP binding at the tyrosine kinase domain** of specific oncogenic kinases → ↓ autophosphorylation → ↓ downstream signaling (RAS/MAPK, PI3K/AKT) → ↓ proliferation/survival/angiogenesis. **Imatinib:** inhibits **BCR-ABL** (CML), c-KIT (GIST), PDGFR. **Erlotinib/gefitinib/osimertinib:** inhibit **EGFR** (mutant — exon 19 deletions, L858R — NSCLC). **Osimertinib:** 3rd-gen — also active against **T790M resistance mutation**. **Vemurafenib/dabrafenib:** inhibit **BRAF V600E** (melanoma). **Crizotinib:** inhibit **ALK, MET, ROS1** (NSCLC). **Ibrutinib:** inhibit **BTK (Bruton tyrosine kinase)** → ↓ BCR signaling in B cells → B-cell malignancies",
        use: "**Imatinib:** CML (first-line — transformed 5-yr survival ~30% → 90%), GIST (c-KIT mutation), Ph+ ALL\n**Dasatinib/nilotinib:** CML (imatinib resistance or higher-potency induction)\n**Ponatinib:** T315I mutation CML (only TKI active against T315I 'gatekeeper' mutation)\n**Erlotinib/gefitinib/osimertinib:** EGFR-mutant NSCLC (exon 19 del or L858R); osimertinib also for T790M resistance\n**Vemurafenib/dabrafenib:** BRAF V600E melanoma (+ MEK inhibitor)\n**Crizotinib/alectinib:** ALK-rearranged NSCLC\n**Ibrutinib:** CLL, mantle cell lymphoma, Waldenström",
        se: "**Imatinib:** periorbital/peripheral edema, nausea, cramps, myelosuppression, hepatotoxicity, QTc\n**Dasatinib:** pleural effusions (unique), pulmonary hypertension\n**Nilotinib:** QTc (significant — monitoring required), hyperglycemia, pancreatitis\n**EGFR TKIs:** acneiform rash (correlates with response), diarrhea, mucositis, paronychia; osimertinib: interstitial lung disease\n**BRAF inhibitors:** squamous cell carcinoma of skin (paradoxical MAPK activation in BRAF wild-type cells), arthralgia, photosensitivity\n**Ibrutinib:** bleeding (↓ platelet collagen signaling), atrial fibrillation (unique), infections",
        ci: "EGFR TKIs: KRAS mutation (resistance — no response)\nBRAF inhibitors: BRAF wild-type tumors (paradoxical RAS activation → tumor promotion)\nIbrutinib: strong CYP3A4 inhibitors (↑ levels); anticoagulation (↑ bleeding)\nImatinib: concurrent warfarin (use LMWH — CYP3A4 interaction)",
        pk: "All oral (small molecule advantage over IV mAbs)\n**Imatinib:** t½ ~18 hr; CYP3A4 substrate and inhibitor\n**Erlotinib/gefitinib:** CYP3A4; erlotinib requires acid for absorption (PPIs ↓ absorption)\n**Osimertinib:** t½ ~48 hr (once daily); CYP3A4\n**Ibrutinib:** t½ ~4–6 hr; CYP3A4 (major interaction with azole antifungals in CLL)",
        pearl: "**Imatinib and CML** — one of medicine's greatest success stories: BCR-ABL TKI converted CML from a disease with 5-year survival of ~30% to one with near-normal life expectancy. The mechanism: Philadelphia chromosome t(9;22) → BCR-ABL fusion protein constitutively active kinase → blocks apoptosis → CML. Imatinib blocks the ATP-binding site. **T315I 'gatekeeper' mutation** causes resistance to all TKIs except ponatinib (3rd generation) — rebiopsy at progression to detect resistance mutations."
      },
      ]
     },
    {
    group: "Hormonal & Endocrine Oncology",
    drugs: [
      {
        name: "Abiraterone",
        aka: "Abiraterone Acetate (Zytiga, Yonsa) — CYP17A1 Inhibitor",
        summary: "Androgen biosynthesis inhibitor that blocks **CYP17A1 (17α-hydroxylase/17,20-lyase)**, preventing androgen synthesis in the testes, adrenal glands, and prostate tumor tissue. Used for **castration-resistant prostate cancer (CRPC)**. Must be combined with **prednisone** to prevent mineralocorticoid excess from upstream steroid accumulation.",
        moa: "Inhibits **CYP17A1** — a bifunctional cytochrome P450 required for androgen biosynthesis in testes, adrenal cortex, and tumor tissue → ↓ DHEA, androstenedione, testosterone, DHT. Blocks adrenal androgen production (unlike GnRH agonists which only suppress testicular androgens). Upstream accumulation of mineralocorticoid precursors (↑ DOCA, corticosterone) → **mineralocorticoid excess** → hypertension, hypokalemia, edema. Co-administered **prednisone 10 mg/day** suppresses ACTH and prevents this excess.",
        use: "**Metastatic castration-resistant prostate cancer (mCRPC):** combined with prednisone + ongoing GnRH agonist/antagonist (medical castration maintained throughout)\n**Metastatic castration-sensitive prostate cancer (mCSPC):** combined with ADT for high-volume/high-risk disease (LATITUDE trial)",
        se: "**Mineralocorticoid excess** (if prednisone omitted or non-adherent): hypertension, hypokalemia, fluid retention/edema — mandatory prednisone co-administration prevents this\n**Adrenocortical insufficiency:** Addisonian crisis risk if prednisone stopped abruptly or during physiologic stress\n**Hepatotoxicity:** ALT/AST elevation — monitor LFTs monthly for first 3 months\n**Cardiac:** arrhythmia, myocardial infarction risk — monitor in pre-existing CV disease\nFatigue, hot flashes, arthralgias (class androgen deprivation effects); fractures/osteoporosis (add bone protection)",
        ci: "Severe hepatic impairment (Child-Pugh C)\nPregnancy (teratogenic — Category X; avoid handling crushed tablets)\nConcurrent strong CYP3A4 inducers (rifampin, phenytoin → ↓ abiraterone levels)\nConcurrent narrow-TI CYP2D6 substrates (abiraterone is a strong CYP2D6 inhibitor)",
        pk: "Prodrug (abiraterone acetate → abiraterone via first-pass hydrolysis)\nOral; **must take on empty stomach** — high-fat meal increases absorption 10-fold unpredictably (exception: Yonsa fine-particle formulation can be taken with food)\nStrong **CYP2D6 inhibitor** (↑ levels of codeine, TCAs, metoprolol); CYP3A4 substrate\nt½ ~12 hr; hepatic metabolism → fecal excretion",
        pearl: "**Why prednisone is mandatory:** abiraterone blocks CYP17A1 upstream in the steroidogenesis cascade → mineralocorticoid precursors accumulate (↑ 11-deoxycorticosterone) → aldosterone-like syndrome → hypertension + hypokalemia + edema. Prednisone suppresses ACTH → ↓ upstream precursor flux. The classic UWorld vignette: patient on abiraterone presents with new hypertension and hypokalemia → think mineralocorticoid excess from non-adherence to prednisone co-administration.",
      },
     {
        name: "Aromatase Inhibitors (AIs)",
        aka: "Non-steroidal: Anastrozole (Arimidex) · Letrozole (Femara) | Steroidal/Irreversible: Exemestane (Aromasin)",
        summary: "Block **aromatase (CYP19A1)**, the enzyme that converts androgens to estrogens in peripheral tissues (adipose, liver, muscle, breast tumor). First-line adjuvant hormonal therapy for **postmenopausal HR+ breast cancer**. Only effective in postmenopausal women — premenopausal ovaries compensate via ↑ LH/FSH unless combined with ovarian suppression.",
        moa: "Inhibit **aromatase (CYP19A1)** → ↓ conversion of androstenedione/testosterone → estrone/estradiol → ↓ estrogen-driven tumor proliferation in ER+ tumors. Unlike tamoxifen, AIs eliminate the ligand rather than blocking the receptor. **Anastrozole/letrozole:** competitive reversible inhibition. **Exemestane:** irreversible ('suicide') inhibitor — permanently inactivates aromatase; new enzyme synthesis required for recovery.",
        use: "**HR+ early breast cancer (adjuvant):** postmenopausal women — superior to tamoxifen for recurrence reduction (ATAC, BIG 1-98 trials)\n**HR+ metastatic breast cancer:** first-line (± CDK4/6 inhibitor — palbociclib, ribociclib, abemaciclib)\n**HR+ breast cancer in premenopausal women:** only with concurrent ovarian suppression (GnRH agonist) — compensatory ↑ LH/FSH overrides AI effect without it\n**Exemestane + everolimus:** post-AI progression (mTOR inhibitor combination)\n**Letrozole:** ovulation induction in PCOS (off-label — superior to clomiphene for live birth rates)",
        se: "**AI arthralgia syndrome:** arthralgias, myalgias, joint stiffness — most common reason for non-adherence\n**Osteoporosis/fractures:** accelerated bone resorption from estrogen loss — baseline DEXA + bisphosphonate/denosumab if high risk\nHot flashes, night sweats (less than tamoxifen); hypercholesterolemia (↑ LDL — loss of estrogen's cardioprotective effect)\nVaginal atrophy, dryness, dyspareunia (local estrogen deprivation)",
        ci: "**Premenopausal women without ovarian suppression** — compensatory gonadotropin rise overrides AI; use tamoxifen instead\nPregnancy (Category X — estrogen required for fetal development)\nSevere hepatic impairment (anastrozole/letrozole — hepatic metabolism)",
        pk: "**Anastrozole:** oral once daily; t½ ~50 hr; CYP3A4/1A2/2C9\n**Letrozole:** oral once daily; t½ ~48 hr; CYP2A6/3A4; most potent of the three\n**Exemestane:** oral once daily **with food** (↑ absorption ~40%); t½ ~24 hr; CYP3A4; irreversible — new aromatase synthesis required for activity recovery",
        pearl: "**AIs vs. tamoxifen:** tamoxifen works pre- and postmenopausally (blocks ER directly); AIs only work postmenopausally (eliminate peripheral estrogen — ovaries produce too much to overcome in premenopausal women). AIs have no uterine cancer or DVT/PE risk (unlike tamoxifen) but cause more bone loss and arthralgia. **Exemestane is the only steroidal/irreversible AI** — a suicide inhibitor analogous to phenoxybenzamine among α-blockers. Postmenopausal HR+ breast cancer → prefer AI over tamoxifen.",
      },
     {
        name: "SERMs (Selective Estrogen Receptor Modulators)",
        aka: "Tamoxifen (Nolvadex) · Raloxifene (Evista) · Clomiphene (Clomid) · Toremifene · Ospemifene",
        summary: "Tissue-selective ER ligands that act as **agonists** in some tissues and **antagonists** in others depending on local co-activator/co-repressor expression. Tamoxifen is the prototype: breast antagonist (anti-tumor) but uterine agonist (cancer risk). Raloxifene adds uterine antagonism, eliminating endometrial cancer risk. Clomiphene blocks hypothalamic ER to drive ovulation.",
        moa: "Bind **estrogen receptor (ERα/ERβ)** competitively → receptor conformation dictates co-regulator recruitment → tissue-specific agonist or antagonist effect. **Tamoxifen:** ER antagonist in breast (↓ tumor proliferation); ER agonist in uterus (↑ endometrial proliferation → cancer risk), bone (↓ resorption), and liver (↑ clotting factors → DVT/PE). **Raloxifene:** ER antagonist in breast AND uterus (no endometrial stimulation); ER agonist in bone (↓ resorption); DVT/PE risk remains. **Clomiphene:** ER antagonist at hypothalamus → blocks estrogen negative feedback → ↑ GnRH pulsatility → ↑ FSH/LH → follicular stimulation.",
        use: "**Tamoxifen:** HR+ breast cancer adjuvant (pre- AND postmenopausal; 5–10 yr); breast cancer prevention (high-risk); gynecomastia (off-label)\n**Raloxifene:** osteoporosis prevention/treatment (postmenopausal); breast cancer prevention (postmenopausal high-risk — STAR trial: equal to tamoxifen, less uterine cancer)\n**Clomiphene:** ovulation induction (anovulatory infertility, PCOS — though letrozole now preferred for live birth rates); male hypogonadism (off-label — ↑ LH → ↑ testosterone)",
        se: "**Tamoxifen:** endometrial carcinoma (uterine agonist — postmenopausal bleeding requires mandatory workup); DVT/PE (↑ hepatic clotting factors); hot flashes (most common); cataracts (long-term)\n**Raloxifene:** DVT/PE (same thrombotic risk as tamoxifen); hot flashes (worsens vasomotor symptoms — avoid in symptomatic menopause); no endometrial cancer risk\n**Clomiphene:** ovarian hyperstimulation (OHSS); multiple gestation (~10% twins); visual disturbances (reversible — stop drug); hot flashes",
        ci: "Tamoxifen: personal history of DVT/PE or stroke; concurrent strong CYP2D6 inhibitors (fluoxetine, paroxetine — ↓ active metabolite endoxifen); pregnancy (teratogenic)\nRaloxifene: active/prior DVT/PE; pregnancy; premenopausal women\nClomiphene: ovarian cysts/enlargement; pregnancy; uncontrolled thyroid or adrenal dysfunction",
        pk: "**Tamoxifen:** oral; prodrug → active metabolite **endoxifen** via **CYP2D6** — poor metabolizers or concurrent CYP2D6 inhibitors (fluoxetine, paroxetine) → ↓ endoxifen → ↓ efficacy; t½ ~5–7 days; enterohepatic recirculation\n**Raloxifene:** oral; t½ ~28 hr; extensive first-pass; not CYP2D6-dependent\n**Clomiphene:** oral days 3–7 or 5–9 of cycle; mixture of zuclomiphene (estrogenic) + enclomiphene (antiestrogenic); t½ ~5 days",
        pearl: "**Tamoxifen + CYP2D6** is a high-yield drug interaction: SSRIs paroxetine and fluoxetine are strong CYP2D6 inhibitors → ↓ endoxifen (active metabolite) → ↓ efficacy. Prefer sertraline, venlafaxine, or citalopram for hot flash management in tamoxifen-treated patients. The tissue-selectivity comparison: tamoxifen = breast antagonist + uterus agonist (endometrial Ca risk + DVT risk); raloxifene = breast AND uterus antagonist (no endometrial Ca) + same DVT risk. Both protect bone. Postmenopausal, HR+, breast cancer adjuvant → prefer AI over either SERM.",
      },
    ]
  },
  {
    group: "Immunosuppressants",
    drugs: [
      {
        name: "Azathioprine",
        aka: "Azathioprine (Imuran, Azasan)",
        summary: "Purine analog prodrug that inhibits de novo purine synthesis and kills dividing lymphocytes. Used as a steroid-sparing immunosuppressant in transplantation and autoimmune diseases.",
        moa: "Prodrug → non-enzymatic conversion to 6-mercaptopurine (6-MP) → hepatic HGPRT-mediated conversion to active 6-thioguanine nucleotides (6-TGN) → incorporate into DNA → chain termination + **inhibit de novo purine synthesis** (IMP dehydrogenase) → ↓ lymphocyte proliferation",
        use: "Organ transplant rejection prevention (kidney, liver, heart — with calcineurin inhibitors + steroids)\nCrohn disease and ulcerative colitis (maintenance, steroid-sparing)\nRA, lupus nephritis, myasthenia gravis, autoimmune hepatitis, pemphigus",
        se: "**Myelosuppression** (dose-dependent — neutropenia, thrombocytopenia; TPMT slow metabolizers → ↑ 6-TGN accumulation → toxicity)\nGI toxicity (nausea, vomiting — take with food)\nHepatotoxicity (cholestatic, rare VOD)\n↑ infection risk (PCP prophylaxis, no live vaccines)\nLymphoma/skin cancer risk (chronic immunosuppression)",
        ci: "**Concurrent allopurinol without dose reduction** (allopurinol inhibits xanthine oxidase → accumulation of 6-MP/6-TGN → life-threatening myelosuppression — reduce azathioprine to 25% if co-administration unavoidable)\nTPMT deficiency (severe toxicity — screen before prescribing)\nActive infection; pregnancy (Category D); live vaccines",
        pk: "Oral; prodrug → 6-MP → via TPMT (inactive 6-MMP) or HGPRT (active 6-TGN)\n**TPMT genotype/enzyme testing before starting** — poor metabolizers accumulate toxic 6-TGN at standard doses\nt½ 6-TGN in cells ~3–13 days (slow offset of effects)",
        pearl: "**Allopurinol + azathioprine is a critical interaction** — both share the xanthine oxidase metabolic pathway. Allopurinol blocks xanthine oxidase → accumulation of 6-MP and 6-TGN → bone marrow failure. If co-administration is necessary, reduce azathioprine by 75%. **TPMT testing before azathioprine** identifies patients at high risk for myelotoxicity — poor metabolizers accumulate toxic 6-TGN levels at standard doses."
      },
      {
        name: "Hydroxychloroquine",
        aka: "Hydroxychloroquine (Plaquenil) · Chloroquine (Aralen)",
        summary: "Aminoquinoline antimalarial and immunomodulatory drug used for SLE, rheumatoid arthritis, and Sjögren syndrome. Reduces SLE flares, mortality, and end-organ damage; requires annual ophthalmology screening for retinopathy.",
        moa: "Accumulate in acidic lysosomes → ↑ lysosomal pH → ↓ antigen processing and presentation → ↓ TLR signaling (TLR7/9 in endosomes require acidic pH) → ↓ type I interferon production → ↓ autoimmune activation; also ↓ phospholipase A2 → ↓ prostaglandins",
        use: "**SLE** (first-line adjunct — reduces flares, ↓ organ damage, ↓ thrombosis [anti-phospholipid], improves survival — used in virtually all SLE patients)\nRA (DMARD — mild or add-on)\nSjögren syndrome\nMalaria prophylaxis/treatment (see Antimalarials entry)",
        se: "**Retinopathy** (most important — cumulative dose-dependent; binds melanin in RPE → bull's-eye maculopathy → irreversible central vision loss; risk ↑ significantly after >5 years or cumulative dose >1000 g — **annual ophthalmology screening mandatory after 5 years**)\nGI upset (take with food); skin rash, pigmentation changes\nHemolytic anemia in G6PD deficiency\nRare: cardiomyopathy (cardiac conduction defects at high doses)",
        ci: "Existing retinal/visual field changes (will worsen)\nG6PD deficiency (hemolytic anemia — check before prescribing chloroquine)\nSignificant hepatic disease (accumulates)",
        pk: "Oral; extremely long t½ (~50 days — extensive tissue distribution, binds melanin in retina/skin/liver)\nOnce daily; dose based on ideal body weight (≤5 mg/kg/day reduces retinopathy risk)\nOnset: 1–2 months; full anti-inflammatory effect: 3–6 months",
        pearl: "**Hydroxychloroquine is the only immunosuppressant proven to reduce SLE mortality** (Hopkins Lupus Cohort) — it should be continued indefinitely in all SLE patients without contraindication. Annual **retinal screening** after 5 years of use (sooner if high-dose or other risk factors: kidney disease, tamoxifen co-use, macular disease) — optical coherence tomography (OCT) is the most sensitive screening modality."
      },
      {
        name: "Mycophenolate Mofetil",
        aka: "Mycophenolate Mofetil (CellCept) · Mycophenolic Acid (Myfortic)",
        summary: "Inhibits inosine monophosphate dehydrogenase (IMPDH) to selectively deplete guanosine nucleotides in lymphocytes. Used for organ transplant rejection, lupus nephritis, and autoimmune conditions. Highly teratogenic.",
        moa: "Prodrug hydrolyzed to active **mycophenolic acid (MPA)** → inhibit **IMPDH (inosine monophosphate dehydrogenase)** → ↓ de novo guanosine synthesis → lymphocytes (T and B cells) lack salvage pathway → selectively depleted guanosine → ↓ lymphocyte proliferation (lymphocyte-selective immunosuppression)",
        use: "Organ transplant rejection prevention (kidney, liver, heart — with calcineurin inhibitor + corticosteroids)\n**Lupus nephritis** (first-line induction + maintenance — equivalent to IV cyclophosphamide with less toxicity)\nIgA nephropathy, vasculitis, myasthenia gravis, inflammatory myopathy",
        se: "**GI toxicity** (diarrhea, nausea, abdominal pain — dose-limiting; Myfortic [enteric-coated] may improve)\n**Myelosuppression** (leukopenia — monitor CBC)\n↑ infection risk (CMV, BK virus, PCP — screen/prophylax)\nLymphoma/skin cancer (chronic immunosuppression)\n**Highly teratogenic** (Category D/X — pregnancy loss + congenital malformations [ear/facial]; REMS program — mandatory pregnancy testing + two forms of contraception)",
        ci: "**Pregnancy** (Category D — REMS program with mandatory testing + contraception counseling)\nActive serious infection\nConcurrent azathioprine (additive IMPDH inhibition — not co-administered)",
        pk: "Oral (CellCept or Myfortic) or IV; prodrug → MPA by gut/liver esterases; t½ ~18 hr\nEnterohepatic recycling (contributes to GI toxicity)\n**CellCept and Myfortic NOT bioequivalent** — do not interchange without dose adjustment",
        pearl: "**Mycophenolate's lymphocyte selectivity** comes from the absence of HGPRT (purine salvage) in lymphocytes — they are uniquely dependent on de novo guanosine synthesis. Other cell types can salvage purines from pre-formed nucleotides. **Teratogenicity is severe and well-documented** — multiple fetuses have been exposed with characteristic malformations (ear abnormalities, cleft lip, heart defects). REMS enrollment and two contraceptive methods are mandatory before prescription."
      },
      {
        name: "Cyclosporine & Tacrolimus (Calcineurin Inhibitors)",
        aka: "Cyclosporine (Sandimmune, Neoral, Gengraf) · Tacrolimus (Prograf, Astagraf XL) · FK506",
        summary: "The cornerstone of solid organ transplant immunosuppression. Both inhibit calcineurin to block IL-2-driven T-cell activation, but via different binding proteins. Tacrolimus is 100× more potent and has largely replaced cyclosporine.",
        moa: "**Cyclosporine:** binds **cyclophilin** → cyclosporine-cyclophilin complex inhibits **calcineurin (phosphatase)** → ↓ NFAT dephosphorylation → ↓ NFAT nuclear translocation → ↓ IL-2 transcription → ↓ T-cell activation/proliferation. **Tacrolimus (FK506):** binds **FKBP-12** → FK506-FKBP12 complex inhibits **calcineurin** → same downstream effect (↓ IL-2 → ↓ T-cell response) — same mechanism, different binding protein",
        use: "Solid organ transplant rejection prevention (tacrolimus preferred)\nBone marrow/HSCT (cyclosporine + MTX for GvHD prophylaxis)\nPsoriasis (cyclosporine — severe refractory)\nAtopic dermatitis (topical tacrolimus/pimecrolimus)\nRA (cyclosporine — second-line); aplastic anemia (ATG + cyclosporine)",
        se: "**Both:** nephrotoxicity (afferent arteriolar vasoconstriction → ↓ GFR; chronic → tubulointerstitial fibrosis — monitor creatinine), hypertension, neurotoxicity (tremor, headache, seizures — tacrolimus more), ↑ infection risk; extensive CYP3A4/P-gp interactions\n**Cyclosporine:** gingival hyperplasia (also phenytoin, nifedipine), hirsutism, hyperuricemia/gout\n**Tacrolimus:** diabetes mellitus (5–10× more than cyclosporine — monitor glucose especially in African Americans); alopecia",
        ci: "Active severe infection\nConcurrent potent CYP3A4 inhibitors without close monitoring (azoles, macrolides → ↑ levels → nephrotoxicity)\nConcurrent nephrotoxins (aminoglycosides, NSAIDs, contrast)\nPregnancy (Category C — individualized in transplant)",
        pk: "Both: oral or IV; **narrow therapeutic index** — therapeutic drug monitoring essential\n**Cyclosporine:** t½ ~8–35 hr; CYP3A4 + P-gp; Neoral (microemulsion) has more predictable absorption than Sandimmune; monitor trough or 2-hr post-dose (C2)\n**Tacrolimus:** t½ ~12 hr; CYP3A4 + P-gp; **100× more potent** than cyclosporine; bioavailability ~20–25%; monitor trough (target 8–12 ng/mL early post-transplant)",
        pearl: "**Calcineurin inhibitor mnemonic:** Cyclosporine = **Gingival hyperplasia + Hirsutism + Hyperuricemia** (cosmetic side effects). Tacrolimus = **diabetes** (far more diabetogenic than cyclosporine — β-cell toxicity). Both cause nephrotoxicity and hypertension. **Tacrolimus trough levels** in transplant are critical — a value of 8–12 ng/mL target in early post-transplant, dropping over time. Even small CYP3A4 inhibitors (grapefruit, azoles) can double levels overnight."
      },
      {
        name: "mTOR Inhibitors (Sirolimus & Everolimus)",
        aka: "Sirolimus (Rapamycin, Rapamune) · Everolimus (Afinitor, Zortress) · Temsirolimus",
        summary: "Inhibit mTOR complex 1 to block T-cell proliferation and tumor growth. Used in transplantation, oncology (renal cell carcinoma, breast cancer, neuroendocrine tumors), and rare diseases (LAM, tuberous sclerosis).",
        moa: "Bind **FKBP-12** → FKBP12-sirolimus complex inhibits **mTORC1 (mechanistic target of rapamycin complex 1)** → ↓ S6K1/4EBP1 phosphorylation → ↓ protein synthesis → ↓ cell cycle progression (G1 arrest) → ↓ T-cell and tumor cell proliferation; also ↓ VEGF production (anti-angiogenic)",
        use: "Organ transplant (rejection prevention — calcineurin inhibitor-sparing strategy)\n**Renal cell carcinoma** (everolimus — second-line after VEGF therapy)\n**HR+ breast cancer** (everolimus + exemestane — post-aromatase inhibitor progression)\n**Pancreatic neuroendocrine tumors** (everolimus)\n**Tuberous sclerosis complex** (everolimus — ↓ SEGA/renal AML)\n**Lymphangioleiomyomatosis** (sirolimus)\nCardiac stent coating (sirolimus/everolimus — prevent in-stent restenosis)",
        se: "**Impaired wound healing** (↓ fibroblast proliferation — hold perioperatively; do NOT use in early post-transplant with fresh incisions)\nMyelosuppression (anemia, thrombocytopenia, leukopenia)\nHyperlipidemia (↑ LDL, ↑ TG)\n↑ infection risk (especially PCP and CMV)\n**Non-infectious pneumonitis** (interstitial lung disease — dose-dependent; ground-glass on CT; requires dose reduction/discontinuation)\nStomatitis/mouth ulcers; proteinuria; lymphocele (post-transplant incisional hernia)",
        ci: "Early post-transplant period with recent surgical wounds (introduce ≥4–6 weeks post-transplant)\nLive vaccines; severe hepatic impairment (sirolimus)\nConcurrent calcineurin inhibitor at full dose (↑ nephrotoxicity)",
        pk: "**Sirolimus:** oral, t½ ~62 hr (once daily; trough monitoring); CYP3A4 + P-gp (major interactions)\n**Everolimus:** oral, t½ ~30 hr; CYP3A4/P-gp\n**Temsirolimus:** IV weekly\nBoth: narrow TI — therapeutic drug monitoring (sirolimus trough 5–15 ng/mL; everolimus trough 3–8 ng/mL)",
        pearl: "**mTOR inhibitors inhibit wound healing** — they are typically not started in the immediate post-transplant period when surgical wounds are healing. They are introduced as maintenance or conversion agents after wound healing is complete. The **non-infectious pneumonitis** (interstitial lung disease) is an idiosyncratic but common side effect — presents with cough, dyspnea, and ground-glass opacities on CT — requires dose reduction or drug discontinuation and can mimic infection or PCP."
      },
    ]
  },
],

toxicology: [
  {
    group: "Toxicology",
    drugs: [
      {
        name: "Drug Antidotes (High-Yield Pairs)",
        aka: "Flumazenil · Naloxone · N-Acetylcysteine · Atropine/Pralidoxime · Physostigmine · Protamine · Vitamin K/FFP/PCC · Digoxin-specific Fab · Methylene Blue · Hydroxocobalamin · Fomepizole · Glucagon · Deferoxamine · Chelation agents",
        summary: "Specific antidotes that reverse toxicity by competitive antagonism, enzyme reactivation, metabolic bypass, or toxin sequestration. Rapid identification of antidote pairs is life-saving in poisoning management.",
        moa: "Each antidote targets the specific mechanism of its paired toxin: **Flumazenil** — competitive BZD receptor antagonist. **Naloxone** — competitive μ-opioid receptor antagonist. **N-Acetylcysteine** — restores glutathione (acetaminophen NAPQI neutralization). **Atropine** — competitive muscarinic antagonist (cholinergic excess). **Pralidoxime (2-PAM)** — regenerates AChE before 'aging' in organophosphate poisoning. **Physostigmine** — reversible AChE inhibitor (anticholinergic syndrome reversal). **Protamine sulfate** — ionic binding neutralizes heparin. **Digoxin Fab** — antibody fragments bind free digoxin. **Methylene blue** — oxidizes NADPH → reduces Fe³⁺ back to Fe²⁺ in hemoglobin (methemoglobinemia). **Hydroxocobalamin** — binds CN⁻ to form cyanocobalamin (cyanide poisoning). **Fomepizole (4-MP)** — inhibits alcohol dehydrogenase (methanol/ethylene glycol). **Glucagon** — bypasses β-blocked receptors (↑ cAMP via different receptor). **Deferoxamine** — iron chelation (iron toxicity, hemochromatosis)",
        use: "**Flumazenil** → benzodiazepine OD (short t½ — may re-sedate; seizure risk in dependent patients)\n**Naloxone** → opioid OD (repeat dosing usually required)\n**NAC** → acetaminophen OD (within 8–10 hr optimal; give even late)\n**Atropine + pralidoxime** → organophosphates (atropine blocks DUMBBELLS; 2-PAM before 'aging')\n**Physostigmine** → anticholinergic syndrome (tertiary amine — crosses BBB; NOT for TCA toxicity)\n**Protamine** → heparin reversal (reverses UFH fully, LMWH ~60%)\n**Digoxin Fab** → digoxin toxicity with arrhythmia/life-threatening toxicity\n**Methylene blue** → methemoglobinemia (G6PD deficiency → use ascorbic acid instead)\n**Hydroxocobalamin** → cyanide poisoning (fire victims with combined CO + CN — preferred over nitrites)\n**Fomepizole** → methanol/ethylene glycol (ADH inhibition → ↓ formate/oxalate)\n**Glucagon** → beta-blocker/CCB OD (bypasses receptor blockade — ↑ cAMP via glucagon receptors)\n**Deferoxamine** → iron toxicity (systemic iron chelation)\n**Chelation (BAL/DMSA/EDTA)** → heavy metal poisoning (lead, arsenic, mercury)",
        se: "Flumazenil: precipitates BZD withdrawal seizures in dependent patients; re-sedation (shorter t½ than most BZDs)\nPhysostigmine: bradycardia, seizures, cholinergic crisis\nMethylene blue: worsens methemoglobinemia in G6PD deficiency (use ascorbic acid)\nProtamine: hypotension, anaphylaxis (especially in NPH insulin users — cross-reactivity)\nHydroxocobalamin: reddish skin/urine discoloration (harmless)\nGlucagon: nausea, hyperglycemia\nDeferoxamine: hypotension with rapid infusion, ototoxicity, Yersinia enterocolitica infection risk",
        ci: "Flumazenil: BZD-dependent patients (seizures); TCA OD (BZD-treated seizures — reversal → seizure recurrence)\nPhysostigmine: concurrent TCAs (seizures/arrhythmias — contraindicated in TCA toxicity)\nMethylene blue: G6PD deficiency; significant MAOI co-use (serotonin syndrome)\nDeferoxamine: renal failure (chelate-iron complex renally excreted — accumulates)",
        pk: "Flumazenil t½ ~1 hr (shorter than most BZDs → re-sedation risk)\nNaloxone t½ ~1 hr (shorter than most opioids → re-narcotization risk)\nNAC: IV preferred for severe toxicity (3-bag regimen over 21 hr); loading dose bolus\n2-PAM: IV, must give before AChE 'ages' (irreversible phosphonylation within hours — window varies by agent)\nHydroxocobalamin: 5 g IV over 15 min (empirically in suspected cyanide)",
        pearl: "**'Aging' of organophosphate-inhibited AChE** — the phosphonate bond matures to a more stable configuration within hours (varies by agent), after which pralidoxime cannot regenerate the enzyme. **Always give pralidoxime early**, even if diagnosis is not confirmed, before aging occurs. **Glucagon for beta-blocker overdose** bypasses the β-receptor entirely by activating glucagon receptors → ↑ cAMP → ↑ inotropy/chronotropy. In severe overdose, high-dose insulin-euglycemic therapy (HIE) is increasingly first-line."
      },
      {
        name: "Acetaminophen Toxicity & N-Acetylcysteine",
        aka: "N-Acetylcysteine (NAC, Acetadote, Mucomyst) · Acetaminophen (APAP, Tylenol)",
        summary: "Acetaminophen hepatotoxicity occurs when toxic NAPQI metabolite overwhelms glutathione stores; N-acetylcysteine replenishes cysteine to restore glutathione. The Rumack-Matthew nomogram guides treatment decisions based on serum levels and time post-ingestion.",
        moa: "**Acetaminophen toxicity:** 90% conjugated to sulfate/glucuronide (non-toxic); ~5–10% converted by CYP2E1/3A4 to **NAPQI (N-acetyl-p-benzoquinone imine)** — highly electrophilic → normally detoxified by glutathione → when glutathione depleted (overdose, fasting, malnutrition, chronic alcohol) → NAPQI binds hepatocyte macromolecules → zone 3 (centrilobular) hepatic necrosis. **NAC:** provides **cysteine** → replenishes glutathione synthesis → NAPQI detoxification; also directly reduces NAPQI; improves hepatic microcirculation and oxygen delivery",
        use: "**Acetaminophen overdose** (all patients with toxic ingestion per Rumack-Matthew nomogram; give up to 72 hr even if late — benefits persist)\n**Acetaminophen-induced ALF** (even without measurable levels — empiric NAC in non-acetaminophen ALF may benefit)\nOral NAC: acetaminophen + mucolytic (lung)\nContrast-induced nephropathy prophylaxis (+ hydration — evidence controversial)",
        se: "**Anaphylactoid reaction (IV)** — non-IgE-mediated histamine release (flushing, urticaria, bronchospasm, hypotension — occurs with loading dose; slow infusion + antihistamines; usually can continue at slower rate)\nNausea, vomiting (oral NAC — sulfur smell)\nIV route safest in ALF or vomiting patients",
        ci: "No absolute contraindications to NAC treatment — give whenever toxicity is possible\nAnaphylaxis to NAC usually manageable (slow infusion, antihistamines)",
        pk: "**Rumack-Matthew nomogram:** plot 4-hr post-ingestion serum APAP level; if above treatment line (150 µg/mL at 4 hr), initiate NAC\nIV NAC 3-bag regimen: 150 mg/kg/15 min → 50 mg/kg/4 hr → 100 mg/kg/16 hr (21 hr total)\nOral NAC: 140 mg/kg loading, then 70 mg/kg q4h × 17 doses\nNAC t½ ~2–3 hr; 30% renal excretion",
        pearl: "**NAC is most effective within 8 hours of ingestion** but should be given up to 72+ hours post-ingestion in late presentations (liver injury continues even after drug is gone — NAC improves hepatic blood flow and oxygen delivery beyond just glutathione replenishment). **Staggered overdose or unknown time** of ingestion → treat empirically. The 'acetaminophen-ALF' presentation in a young woman with no obvious cause of liver failure: check APAP level (many deny or forget prior ingestion)."
      },
      {
        name: "Ethanol Metabolism, Disulfiram & Alcohol Antidotes",
        aka: "Disulfiram (Antabuse) · Naltrexone (Vivitrol) · Acamprosate (Campral) · Fomepizole (Antizol) · Thiamine (Vitamin B1)",
        summary: "Pharmacologic management of alcohol use disorder and alcohol-related toxicities. Disulfiram creates aversive reactions to alcohol; naltrexone and acamprosate reduce craving; fomepizole and thiamine address metabolic consequences of alcohol and methanol/ethylene glycol poisoning.",
        moa: "**Disulfiram:** inhibit **aldehyde dehydrogenase (ALDH)** → acetaldehyde accumulates after alcohol → flushing, nausea, vomiting, palpitations, hypotension (disulfiram-like reaction). **Naltrexone:** block **μ-opioid receptors** → ↓ reward/craving from alcohol (endogenous opioids mediate some alcohol reward). **Acamprosate:** modulate **NMDA glutamate receptors** (antagonism) + **GABA-A receptors** (agonism) → reduce neuronal hyperexcitability in alcohol abstinence → ↓ craving/relapse. **Fomepizole:** inhibit **alcohol dehydrogenase (ADH)** → ↓ conversion of methanol → formate (causes blindness) or ethylene glycol → oxalate (causes renal failure). **Thiamine:** essential cofactor for **transketolase** and pyruvate dehydrogenase → prevents/treats Wernicke encephalopathy",
        use: "**Disulfiram:** alcohol use disorder (deterrence — must want to avoid alcohol; inform about all alcohol-containing products including mouthwash/cologne)\n**Naltrexone:** alcohol use disorder (↓ relapse/craving — COMBINE trial); opioid use disorder maintenance\n**Acamprosate:** alcohol use disorder maintenance in abstinent patients (less effective than naltrexone — do not use with active drinking)\n**Fomepizole:** methanol toxicity (→ formic acid → blindness) and ethylene glycol toxicity (→ oxalic acid → renal failure); IV ethanol is alternative when fomepizole unavailable\n**Thiamine:** **Wernicke encephalopathy** (ALWAYS before glucose in alcoholic patients — classic triad: confusion, ataxia, ophthalmoplegia)",
        se: "**Disulfiram:** severe disulfiram-ethanol reaction (cardiovascular collapse); hepatotoxicity; peripheral neuropathy; psychosis; CYP2E1 inhibition (↑ warfarin, phenytoin)\n**Naltrexone:** nausea; hepatotoxicity at high doses (not at standard 50 mg oral/380 mg IM monthly)\n**Acamprosate:** diarrhea (most common); renal excretion (dose-reduce in CKD)\n**Fomepizole:** headache, nausea\n**Thiamine:** essentially non-toxic; rare anaphylaxis (IV)",
        ci: "Disulfiram: any recent alcohol ingestion (must be abstinent ≥12 hr); opioid use; severe hepatic disease; psychosis\nNaltrexone: active opioid use or physiologic opioid dependence (precipitates withdrawal — must be opioid-free ≥7–10 days); acute hepatitis or liver failure\nAcamprosate: severe renal failure (CrCl <30)\nThiamine: no absolute contraindications",
        pk: "**Disulfiram:** oral; irreversible ALDH inhibition (new enzyme synthesis takes 1–2 weeks — effects persist after stopping)\n**Naltrexone:** oral 50 mg daily or IM depot 380 mg monthly (Vivitrol); t½ ~4 hr parent, ~13 hr active metabolite (6-β-naltrexol)\n**Acamprosate:** oral 3× daily; not metabolized; 100% renally excreted\n**Fomepizole:** IV loading then every 12 hr (every 4 hr during dialysis — dialysis removes drug); auto-inhibits own CYP2E1 metabolism at high concentrations",
        pearl: "**Thiamine BEFORE glucose in every alcoholic patient** — glucose administration precipitates Wernicke encephalopathy by consuming the last traces of thiamine in an already-depleted patient (thiamine is required for pyruvate dehydrogenase and transketolase in carbohydrate metabolism). Giving glucose first exhausts the remaining thiamine stores → acute Wernicke. This is one of the most important 'before' rules in emergency medicine. **Fomepizole vs. ethanol** for methanol/ethylene glycol: fomepizole is preferred (less CNS depression, easier to titrate, no hypoglycemia) but ethanol IV is a reasonable alternative when fomepizole is unavailable."
      },
    ]
  },
],

};
