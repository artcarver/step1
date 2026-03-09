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
        moa: "Directly bind/activate **Muscarinic (M1–M5)** receptors.\n↑ Parasympathetic tone at smooth muscle, glands, and heart.\nResistant to **AChE** (prolonged action vs. $ACh$).",
        use: "**Bethanechol**: Postop ileus, urinary retention.\n**Pilocarpine**: Open-angle glaucoma (↑ aqueous outflow); Sjögren dry mouth/eyes.\n**Methacholine**: Bronchial challenge for asthma diagnosis.\n**Carbachol**: Intraocular miosis during surgery.",
        se: "**DUMBBELLS**: Diarrhea, Urination, Miosis, Bradycardia, Bronchospasm, Emesis, Lacrimation, Salivation.\nAbdominal cramps via smooth muscle contraction.",
        ci: "**Asthma/COPD** (bronchospasm).\n**Bowel/Bladder obstruction**.\n**Peptic Ulcer** (↑ acid).\n**Parkinson** (worsens tremor).",
        pk: "**Bethanechol**: Quaternary amine (does NOT cross BBB).\n**Pilocarpine**: Topical (glaucoma) or oral (Sjögren).\n**Methacholine**: Inhaled only.",
        pearl: "**Bethanechol** is safe for urinary retention because it lacks CNS activity (quaternary).\n**Pilocarpine** contracts ciliary muscle → opens trabecular meshwork → ↑ aqueous outflow."
      },
      {
        name: "Acetylcholinesterase Inhibitors",
        aka: "Neostigmine · Pyridostigmine · Physostigmine · Edrophonium · Donepezil · Rivastigmine · Galantamine",
        summary: "Reversibly inhibit **AChE** to ↑ synaptic $ACh$ concentration.\nUsed for Myasthenia Gravis, Alzheimer, and NMB reversal.",
        moa: "Inhibit **Acetylcholinesterase** → ↓ $ACh$ hydrolysis.\n↑ $ACh$ at both Muscarinic and Nicotinic synapses.",
        use: "**Neostigmine/Pyridostigmine**: Myasthenia Gravis; NMB reversal.\n**Edrophonium**: MG diagnosis (Tensilon test — $t_{1/2}$ ~2 min).\n**Donepezil/Rivastigmine**: Alzheimer dementia symptoms.\n**Physostigmine**: Anticholinergic/Atropine toxicity (crosses BBB).",
        se: "**Cholinergic Crisis** (DUMBBELLS).\n**Nicotinic effects**: Muscle fasciculations and weakness.",
        ci: "**Bowel/Bladder obstruction**.\n**Succinylcholine**: Neostigmine ↑ Phase I block.\n**Physostigmine**: Avoid in TCA overdose (seizure risk).",
        pk: "**Physostigmine**: Tertiary amine (crosses BBB).\n**Neo/Pyridostigmine**: Quaternary (no BBB).\n**Edrophonium**: Ultra-short duration ($t_{1/2}$ ~2 min).",
        pearl: "**Organophosphate Poisoning** = Irreversible AChE inhibition.\n**Treatment**: Atropine (blocks Muscarinic) + Pralidoxime (regenerates AChE before aging)."
      },
      {
        name: "Muscarinic Antagonists (Anticholinergics)",
        aka: "Atropine · Scopolamine · Ipratropium · Tiotropium · Oxybutynin · Tolterodine · Benztropine · Glycopyrrolate",
        summary: "Competitively block **Muscarinic receptors**.\n'Hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter'.",
        moa: "Competitive antagonism at **M1–M5** receptors.\n↓ Parasympathetic activity at smooth muscle, glands, and SA node.",
        use: "**Atropine**: Symptomatic bradycardia; organophosphate antidote.\n**Scopolamine**: Motion sickness (patch).\n**Ipratropium/Tiotropium**: COPD/Asthma bronchodilation.\n**Oxybutynin**: Overactive bladder.\n**Benztropine**: Drug-induced Parkinsonism (EPS).\n**Glycopyrrolate**: Pre-op to dry secretions (no BBB).",
        se: "**Can't see** (mydriasis), **Can't spit** (dry mouth), **Can't pee** (retention), **Can't poop** (constipation).\n**Tachycardia**, **Hyperthermia**, and **Delirium** (especially elderly).",
        ci: "**Narrow-angle glaucoma** (mydriasis closes angle).\n**BPH** (worsens retention).\n**Myasthenia Gravis**.",
        pk: "**Ipratropium**: Quaternary; minimal systemic absorption inhaled.\n**Glycopyrrolate**: Quaternary; no CNS entry.\n**Scopolamine**: Transdermal (72 hr duration).",
        pearl: "**Antidote for Anticholinergic Toxicity**: Physostigmine (tertiary amine, crosses BBB).\nElderly patients are highly sensitive to CNS side effects."
      }
    ]
  },
  {
    group: "Sympathetics",
    drugs: [
      {
        name: "Epinephrine & Norepinephrine",
        aka: "Epinephrine (Adrenaline, EpiPen) · Norepinephrine (Levophed)",
        summary: "**Epinephrine** for anaphylaxis and cardiac arrest.\n**Norepinephrine** is first-line for septic shock.",
        moa: "**Epinephrine**: Agonist at $\alpha_1, \alpha_2, \beta_1, \beta_2$.\nLow dose: $\beta_2$ (bronchodilation, ↓ SVR); High dose: $\alpha_1$ (vasoconstriction).\n**Norepinephrine**: $\alpha_1, \alpha_2 > \beta_1$.\nPredominant vasoconstriction with modest inotropy; minimal $\beta_2$.",
        use: "**Epinephrine**: Anaphylaxis (IM lateral thigh); Croup (nebulized).\n**Norepinephrine**: Septic shock (maintain MAP ≥65 mmHg).",
        se: "**Hypertension**, **Tachycardia**, and **Arrhythmias**.\n**Norepinephrine**: Reflex bradycardia; tissue necrosis if extravasated.\n**Epinephrine**: Hyperglycemia ($\beta_2$ glycogenolysis).",
        ci: "**Cocaine/Amphetamine toxicity** (synergistic catecholamine surge).\nNo absolute CI in true anaphylaxis.",
        pk: "Both: IV infusion; $t_{1/2}$ ~2 min; degraded by **MAO** and **COMT**.\nIM lateral thigh peaks in ~8 min.",
        pearl: "**Epi in Anaphylaxis**: $\alpha_1$ ↓ edema; $\beta_1$ ↑ CO; $\beta_2$ bronchodilation + ↓ mast cell release.\nNever delay Epi for IV access in anaphylaxis."
      },
            {
        name: "Dopamine & Dobutamine",
        aka: "Dopamine (Intropin) · Dobutamine (Dobutrex)",
        summary: "**Dopamine** has dose-dependent receptor selectivity.\n**Dobutamine** is a pure inodilator for pump failure.",
        moa: "**Dopamine**:\n• Low (1–3 µg): $D_1$ → renal/mesenteric vasodilation.\n• Mid (3–10 µg): $\beta_1$ → ↑ inotropy/HR.\n• High (>10 µg): $\alpha_1$ → vasoconstriction.\n**Dobutamine**: $\beta_1 > \beta_2$ → ↑ contractility + mild ↓ afterload.",
        use: "**Dopamine**: Cardiogenic shock with hypotension.\n**Dobutamine**: Acute decompensated HF; Stress echocardiography.",
        se: "**Tachyarrhythmias** and ↑ myocardial $O_2$ demand.\n**Dobutamine**: Hypotension ($\beta_2$ vasodilation).\n**Dopamine**: Ischemia at high doses.",
        ci: "**Dobutamine**: HOCM (worsens outflow obstruction).\n**Dopamine**: Septic shock (Norepinephrine is preferred).",
        pk: "Both: IV continuous infusion; $t_{1/2}$ ~2 min.\nTitrated to hemodynamic effect.",
        pearl: "**Stress Echo**: Dobutamine unmasks wall motion abnormalities by ↑ cardiac work.\nDobutamine does NOT reliably maintain BP; may need a vasopressor."
      },
      {
        name: "Phenylephrine & Isoproterenol",
        aka: "Phenylephrine (Neo-Synephrine) · Isoproterenol (Isuprel)",
        summary: "Selective agonists with **Opposite Hemodynamics**.\n**Phenylephrine** ↑ BP/↓ HR; **Isoproterenol** ↓ BP/↑ HR.",
        moa: "**Phenylephrine**: Selective **$\alpha_1$** agonist → ↑ SVR/BP + reflex bradycardia.\n**Isoproterenol**: Non-selective **$\beta_1 + \beta_2$** agonist → ↑ HR + vasodilation.",
        use: "**Phenylephrine**: Hypotension without tachycardia; Nasal decongestant; Mydriatic.\n**Isoproterenol**: Heart block (bridge to pacemaker); Refractory bradycardia.",
        se: "**Phenylephrine**: Severe hypertension; tissue ischemia.\n**Isoproterenol**: Tachycardia, arrhythmias, hypotension.",
        ci: "**Phenylephrine**: Severe HTN, HOCM.\n**Isoproterenol**: Angina (↑ $O_2$ demand).",
        pk: "**Phenylephrine**: IV infusion or IM; $t_{1/2}$ ~5 min.\n**Isoproterenol**: IV infusion; $t_{1/2}$ ~2 min.",
        pearl: "**Reflex Bradycardia**: Phenylephrine is pure $\alpha_1$ → ↑ BP → baroreceptor trigger → vagal slowing."
      },
      {
        name: "Beta Blockers (β-blockers)",
        aka: "Propranolol · Metoprolol · Atenolol · Carvedilol · Labetalol · Bisoprolol · Esmolol · Nadolol · Timolol",
        summary: "Competitive **β-antagonists** reducing HR, contractility, and renin.\nCornerstone for HF, MI, and Hypertension.",
        moa: "Block **$\beta_1$ (cardiac)** and/or **$\beta_2$ (vascular/lung)** receptors.\n↓ $cAMP$ → ↓ HR, ↓ AV conduction, ↓ contractility, and ↓ renin.",
        use: "**HFrEF**: Carvedilol, Metoprolol succinate, Bisoprolol (mortality benefit).\n**Post-MI**: ↓ Remodeling and sudden death.\n**Propranolol**: Migraine prophylaxis, Essential tremor, Portal HTN.\n**Esmolol**: Acute SVT rate control ($t_{1/2}$ ~9 min).",
        se: "**Bradycardia**, **AV block**, and **Bronchospasm** ($\beta_2$ block).\n**Masks Hypoglycemia** (blocks tachycardia/tremor; sweating preserved).\n**Rebound Tachycardia/Ischemia** if stopped abruptly.",
        ci: "**Severe Asthma/COPD** (non-selective agents).\n**Decompensated HF**; High-degree AV block.\n**Cocaine Toxicity**: Unopposed $\alpha_1$ vasoconstriction → HTN crisis.",
        pk: "**Lipophilic (Propranolol)**: Crosses BBB.\n**Hydrophilic (Atenolol)**: Renal excretion.\n**Esmolol**: $t_{1/2}$ ~9 min.",
        pearl: "**Only Carvedilol, Metoprolol Succinate, and Bisoprolol** have mortality benefit in chronic HFrEF.\nAlways **Taper** doses to avoid upregulation-mediated ischemia."
      },
      {
        name: "Alpha Blockers (α-blockers)",
        aka: "Prazosin · Terazosin · Doxazosin · Tamsulosin · Phentolamine · Phenoxybenzamine",
        summary: "**α-antagonists** causing arterial dilation and prostate relaxation.\nUsed for BPH, PTSD nightmares, and Pheochromocytoma.",
        moa: "**Selective ($\alpha_1$)**: Prazosin, Tamsulosin → ↓ vascular/prostate tone.\n**Non-selective ($\alpha_1 + \alpha_2$)**: Phentolamine, Phenoxybenzamine.\n$\alpha_2$ block → ↑ $NE$ release → Reflex tachycardia.",
        use: "**Tamsulosin**: BPH ($\alpha_{1A}$ selective; ↓ BP impact).\n**Prazosin**: PTSD nightmares.\n**Phentolamine**: Hypertensive crisis (Pheo, Tyramine).\n**Phenoxybenzamine**: Pre-op Pheochromocytoma (irreversible).",
        se: "**First-dose Orthostatic Hypotension** (take at bedtime).\n**Reflex Tachycardia** (non-selective agents); Nasal congestion.\n**Floppy Iris Syndrome**: Tamsulosin complicates cataract surgery.",
        ci: "**PDE5 Inhibitors**: Additive severe hypotension.\n**Aortic Stenosis**: Preload reduction worsens hemodynamics.",
        pk: "**Phenoxybenzamine**: Irreversible; duration ~24 hr.\n**Phentolamine**: Reversible competitive; $t_{1/2}$ ~19 min.",
        pearl: "**Pheochromocytoma Rule**: Always $\alpha$-block FIRST, then $\beta$-block.\n$\beta$-blocker first → unopposed $\alpha_1$ → catastrophic Hypertensive Crisis."
      },
      {
        name: "Local Anesthetics",
        aka: "Lidocaine · Bupivacaine · Ropivacaine · Mepivacaine · Prilocaine · Benzocaine · Cocaine · Tetracaine",
        summary: "Block **Voltage-gated $Na^+$ channels** to stop action potentials.\nOrder of block: Small/unmyelinated (Pain) → Temperature → Touch → Motor.",
        moa: "Block **$Na^+$ channels** (bind inactivated state, use-dependent).\nFibers blocked: C > $A\delta$ > $A\gamma$ > $A\beta$ > $A\alpha$.",
        use: "Local infiltration; Nerve blocks; Epidural/Spinal anesthesia.\n**IV Lidocaine**: Ventricular arrhythmias (Class IB).\n**Cocaine**: ENT procedures (intrinsic vasoconstrictor).",
        se: "**CNS Toxicity**: Circumoral numbness → Tinnitus → Seizures.\n**Cardiotoxicity**: Bupivacaine (fatal arrhythmias).\n**Methemoglobinemia**: Prilocaine/Benzocaine.",
        ci: "**Bupivacaine IV** (severe cardiotoxicity).\n**Epi-containing formulas** on end-arteries (fingers, nose, penis) → ischemia.",
        pk: "**Amides** (Lidocaine, Bupivacaine): Two 'i's in name; Hepatic metabolism.\n**Esters** (Cocaine, Benzocaine): One 'i' in name; Plasma pseudocholinesterase.",
        pearl: "**Lipid Rescue**: Treat Bupivacaine cardiotoxicity with **20% Lipid Emulsion**.\nEpinephrine co-injection ↑ duration and ↓ systemic toxicity."
      },
      {
        name: "Neuromuscular Blocking Agents",
        aka: "Succinylcholine · Rocuronium · Vecuronium · Pancuronium · Atracurium · Cisatracurium",
        summary: "Block NMJ for intubation and surgery.\n**Depolarizing** (Succinylcholine) vs. **Non-depolarizing** (all others).",
        moa: "**Succinylcholine**: $ACh$ agonist → sustained depolarization → flaccid paralysis.\n**Non-depolarizing**: Competitive Nicotinic antagonists.",
        use: "**Succinylcholine**: Rapid Sequence Intubation (RSI).\n**Rocuronium**: RSI alternative; reversed by **Sugammadex**.\n**Atracurium**: Preferred in renal/hepatic failure.",
        se: "**Succinylcholine**: **Hyperkalemia** (avoid in burns/crush >24 hr); **Malignant Hyperthermia**.\n**Non-depolarizing**: Histamine release (Atracurium); Tachycardia (Pancuronium).",
        ci: "**Succinylcholine**: Burns, crush, or denervation >24 hr.\nHistory of **Malignant Hyperthermia**.",
        pk: "**Succinylcholine**: $t_{1/2}$ ~10 min; plasma pseudocholinesterase.\n**Atracurium/Cisatracurium**: **Hofmann elimination** (spontaneous).\n**Rocuronium**: Reversed by Sugammadex.",
        pearl: "**Malignant Hyperthermia**: Ryanodine receptor mutation → $Ca^{2+}$ dump.\n**Treatment**: Dantrolene (blocks RyR1) + cooling."
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
        summary: "Block **ACE** to ↓ Ang II and Aldosterone.\nFirst-line for HTN, HFrEF, Diabetes, and post-MI.",
        moa: "Inhibit **ACE** → ↓ Ang I to II conversion → ↓ Vasoconstriction + ↓ Aldosterone.\n↑ **Bradykinin** (ACE also degrades bradykinin) → Vasodilation.",
        use: "**HFrEF**: ↓ Mortality and cardiac remodeling.\n**Diabetic Nephropathy**: ↓ Proteinuria; slows CKD progression.\n**Hypertension**: Especially with DM or CKD.\n**Post-MI**: Reduces LV dysfunction.",
        se: "**Cough**: Dry/non-productive via ↑ **Bradykinin**.\n**Angioedema**: Airway emergency (bradykinin-mediated).\n**Hyperkalemia**: Via ↓ Aldosterone.\n**Creatinine bump**: Significant in **Bilateral Renal Artery Stenosis**.\n**Teratogenic**: Fetal renal dysgenesis.",
        ci: "**Pregnancy** (Category D/X).\n**Bilateral Renal Artery Stenosis**.\n**History of Angioedema**.",
        pk: "Most are **Prodrugs** (e.g., Enalapril → Enalaprilat).\n**Captopril/Lisinopril**: Active drugs (not prodrugs).\nRenal elimination; dose-reduce in CKD.",
        pearl: "**Angioedema** is an absolute CI to all RAAS inhibitors (switch to CCB/Thiazide).\nCreatinine ↑ <30% is often acceptable after starting therapy."
      },
      {
        name: "ARBs (Angiotensin Receptor Blockers)",
        aka: "Losartan · Valsartan · Irbesartan · Candesartan · Olmesartan · Telmisartan · Azilsartan",
        summary: "Block **AT1 receptors** to inhibit Ang II action.\nPreferred alternative to ACEi when cough occurs.",
        moa: "Competitive antagonism at **AT1 Receptor**.\nBlocks vasoconstriction and Aldosterone secretion.\nNo effect on Bradykinin (No cough).",
        use: "**Hypertension/HFrEF**: Equivalent mortality benefit to ACEi.\n**Diabetic Nephropathy**: Losartan/Irbesartan reduce ESRD risk.\n**Gout**: **Losartan** uniquely lowers uric acid.",
        se: "**Hyperkalemia** and **↑ Creatinine**.\n**Teratogenic** (Category D/X).\n**No Cough**.",
        ci: "**Pregnancy**.\n**Bilateral Renal Artery Stenosis**.\n**Dual RAAS blockade**: Do NOT combine with ACEi (↑ AKI risk).",
        pk: "**Losartan**: Metabolized to active metabolite E-3174.\n**Uricosuric**: Losartan blocks **URAT1** transporter.\nOnce-daily oral dosing.",
        pearl: "**Losartan** is the drug of choice for a hypertensive patient with **Gout**.\nARBs do NOT cause the bradykinin-mediated cough found in ACEi."
      },
      {
        name: "Aliskiren",
        aka: "Aliskiren (Tekturna)",
        summary: "**Direct Renin Inhibitor** blocking the rate-limiting step of RAAS.",
        moa: "Directly inhibits **Renin** → ↓ Angiotensinogen conversion to Ang I.\nUniquely ↓ **Plasma Renin Activity (PRA)**.",
        use: "**Hypertension**: Monotherapy or add-on.\nLimited clinical role vs. ACEi/ARBs.",
        se: "**Hyperkalemia**, **↑ Creatinine**, and **Diarrhea**.\nRare Angioedema.",
        ci: "**Pregnancy**.\n**Combination with ACEi/ARB in DM/CKD** (↑ Renal failure).",
        pk: "Poor oral bioavailability (~3%).\n$t_{1/2}$ ~40 hr (very long).",
        pearl: "Unlike ACEi/ARBs which cause a compensatory ↑ in Renin, Aliskiren ↓ **PRA**."
      },
      {
        name: "Hydralazine & Direct Vasodilators",
        aka: "Hydralazine · Minoxidil · Diazoxide",
        summary: "**Arteriolar Vasodilators** that reduce afterload.\nHydralazine + Nitrates is a mortality-benefit combo for HFrEF.",
        moa: "**Hydralazine**: ↑ $cGMP$ in vascular smooth muscle → Arteriolar vasodilation.\n**Minoxidil**: Opens **$K^+_{ATP}$ channels** → Hyperpolarization → Vasodilation.",
        use: "**Hydralazine**: HTN in Pregnancy (IV); Hypertensive Emergency.\n**HFrEF**: Hydralazine + Isosorbide Dinitrate (↓ mortality in Black patients).\n**Minoxidil**: Severe refractory HTN; Topical for Alopecia.",
        se: "**Reflex Tachycardia**: (Always co-prescribe $\beta$-blocker).\n**Fluid Retention**: Edema.\n**Drug-Induced Lupus**: Hydralazine (**Anti-histone Ab+**; slow acetylators).\n**Hypertrichosis**: Minoxidil (unwanted hair growth).",
        ci: "**CAD/Angina**: Reflex tachycardia can trigger MI.\n**Aortic Aneurysm**: Rapid vasodilation risk.",
        pk: "**Acetylation**: Hydralazine is metabolized by liver N-acetyltransferase.\n**Slow Acetylators**: Higher risk for drug-induced lupus.",
        pearl: "**Drug-Induced Lupus Triad**: Slow acetylator + High dose + Female.\nLabs: **Anti-histone Abs** (vs. Anti-dsDNA in idiopathic lupus)."
      }
    ]
  },
  {
    group: "Diuretics",
    drugs: [
      {
        name: "Loop Diuretics",
        aka: "Furosemide · Bumetanide · Torsemide · Ethacrynic Acid",
        summary: "Most potent diuretics. Block **NKCC2** in the **TAL**.\nFirst-line for **Acute Pulmonary Edema**.",
        moa: "Inhibit **NKCC2** ($Na^+/K^+/2Cl^-$) in **Thick Ascending Limb**.\n↑ Excretion of $Na^+, K^+, Cl^-, Ca^{2+}, Mg^{2+}$.\nStimulates $PGE$ (vasodilation of afferent arteriole).",
        use: "**Edema**: HF, Cirrhosis, Nephrotic Syndrome.\n**Acute Pulmonary Edema**: Rapid IV onset.\n**Hypercalcemia**: 'Loops Lose Calcium'.\n**Ethacrynic acid**: Use if patient has severe **Sulfa Allergy**.",
        se: "**OHH DAANG!**:\n**O**totoxicity · **H**ypokalemia / **H**ypomagnesemia.\n**D**ehydration / **A**zotemia.\n**A**llergy (**Sulfa** — except Ethacrynic acid).\n**A**lkalosis (Metabolic).\n**N**ephritis (Interstitial).\n**G**out (**Hyperuricemia**).",
        ci: "**Anuria**; Severe electrolyte depletion.\n**Sulfa Allergy** (except Ethacrynic acid).",
        pk: "Secreted into lumen by **Organic Acid Transporters**.\nNSAIDs ↓ loop effect by blocking vasodilatory $PGE$.",
        pearl: "**Loops Lose Calcium** vs. Thiazides save it.\n**Ethacrynic Acid** is more ototoxic than furosemide."
      },
      {
        name: "Thiazide Diuretics",
        aka: "Hydrochlorothiazide (HCTZ) · Chlorthalidone · Metolazone · Indapamide",
        summary: "Block **NCC** in **Distal Convoluted Tubule**.\nFirst-line for HTN and **Calcium Stones**.",
        moa: "Inhibit **NCC** ($Na^+/Cl^-$) in **Distal Convoluted Tubule**.\n↑ Excretion of $Na^+, K^+, Cl^-$.\n↑ **Calcium Reabsorption** (unlike loops).",
        use: "**Hypertension**: First-line.\n**Nephrolithiasis**: Prevents calcium stones by ↓ urinary calcium.\n**Osteoporosis**: Reduces bone loss.\n**Diabetes Insipidus**: Paradoxically ↓ urine volume in Nephrogenic DI.",
        se: "**HyperGLUC**:\n**Hyper**-**G**lycemia / **L**ipidemia / **U**ricemia / **C**alcemia.\n**Hyponatremia** and **Hypokalemia**.\n**Sulfa Allergy**.",
        ci: "**Anuria**; Sulfa allergy.\n**Gout**: Worsens hyperuricemia.\nIneffective if **eGFR <30** (except Metolazone).",
        pk: "Secreted via organic acid pathway.\n**Chlorthalidone**: Longer $t_{1/2}$ and superior CV outcomes vs. HCTZ.",
        pearl: "**Thiazides save Calcium**.\nHyponatremia is a major risk in elderly patients."
      },
      {
        name: "K⁺-Sparing Diuretics",
        aka: "Spironolactone · Eplerenone · Amiloride · Triamterene",
        summary: "Retain $K^+$ by blocking Aldosterone or **ENaC** in the collecting duct.\nMortality benefit in HFrEF.",
        moa: "**Spironolactone/Eplerenone**: **Aldosterone Antagonists** in Cortical Collecting Duct.\n**Amiloride/Triamterene**: Direct **ENaC** blockers.",
        use: "**HFrEF**: ↓ Mortality and fibrosis (RALES trial).\n**Primary Hyperaldosteronism** (Conn Syndrome).\n**Ascites**: Cirrhosis drug of choice.\n**PCOS**: Spironolactone (anti-androgen).\n**Liddle Syndrome**: Amiloride.",
        se: "**Hyperkalemia** (potentially fatal).\n**Gynecomastia** and **Decreased Libido**: Spironolactone (Non-selective).\n**Eplerenone** is selective; does NOT cause gynecomastia.",
        ci: "**Hyperkalemia** ($K^+ >5.5$).\n**Severe Renal Failure**.\nAvoid combining with ACEi/ARBs without close monitoring.",
        pk: "**Spironolactone**: Prodrug converted to Canrenone.\nSlow onset (days) as it requires gene expression changes.",
        pearl: "**Spironolactone in HF**: Mortality benefit is due to anti-fibrotic effects, NOT diuresis.\nMonitor $K^+$ and $Cr$ within 1 week of starting."
      },
      {
        name: "Carbonic Anhydrase Inhibitors",
        aka: "Acetazolamide · Dorzolamide · Brinzolamide",
        summary: "Inhibit **CA** in Proximal Tubule.\nUsed for **Glaucoma**, **Altitude Sickness**, and **Metabolic Alkalosis**.",
        moa: "Inhibit **Carbonic Anhydrase** → ↓ $H^+$ secretion / ↓ $HCO_3^-$ reabsorption in **PCT**.\nCauses **Bicarbonaturia** (alkaline urine).\n↓ Aqueous humor production in ciliary body.",
        use: "**Glaucoma**: ↓ Intraocular pressure.\n**Altitude Sickness**: Acidosis ↑ respiratory drive.\n**Pseudotumor Cerebri**: ↓ CSF production.\n**Metabolic Alkalosis**: Corrects via $HCO_3^-$ excretion.",
        se: "**Hyperchloremic Metabolic Acidosis**.\n**Hypokalemia**.\n**Paresthesias** (tingling in fingers/toes).\n**Sulfa Allergy**.\n**Kidney Stones**: Alkaline urine promotes calcium-phosphate stones.",
        ci: "**Cirrhosis**: ↑ $NH_3$ accumulation.\n**Sulfa Allergy**.",
        pk: "Renal elimination.\n**Dorzolamide**: Topical; avoids systemic acidosis.",
        pearl: "**Altitude Mechanism**: Metabolic acidosis → Peripheral chemoreceptor trigger → ↑ Ventilation → ↑ $O_2$."
      },
      {
        name: "Mannitol",
        aka: "Mannitol (Osmitrol)",
        summary: "**Osmotic Diuretic** used for cerebral edema and acute glaucoma.",
        moa: "Increases **Plasma Osmolality** → Draws fluid from cells into vasculature.\nActs primarily in Proximal Tubule and Descending Loop.",
        use: "**Increased ICP**: Traumatic brain injury / Herniation.\n**Acute Glaucoma**: Rapidly ↓ IOP.",
        se: "**Pulmonary Edema**: Due to initial intravascular volume expansion.\n**Dehydration** and **Hypernatremia**.",
        ci: "**Anuria**.\n**Severe Heart Failure** (volume load).\n**Active Intracranial Bleeding**.",
        pk: "IV only; Not metabolized; Renally excreted.",
        pearl: "**Caution in HF**: The initial volume surge can trigger fatal pulmonary edema."
      }
    ]
  },
  {
    group: "Antihypertensive Adjuncts",
    drugs: [
      {
        name: "Calcium Channel Blockers (CCBs)",
        aka: "Dihydropyridines (Amlodipine, Nifedipine) | Non-DHPs (Verapamil, Diltiazem)",
        summary: "Block **L-type Calcium Channels** in vessels (DHP) or heart (Non-DHP).",
        moa: "Block **Voltage-gated L-type $Ca^{2+}$ channels**.\n**DHPs**: Vascular smooth muscle relaxation → ↓ SVR.\n**Non-DHPs**: Cardiac focus → ↓ HR, ↓ AV conduction, ↓ Contractility.",
        use: "**Hypertension**: DHPs first-line.\n**Angina**: Stable and **Prinzmetal (Vasospastic)**.\n**Raynaud Phenomenon**: Amlodipine/Nifedipine.\n**Rate Control (AF/SVT)**: Verapamil/Diltiazem.\n**Subarachnoid Hemorrhage**: **Nimodipine** (prevents vasospasm).",
        se: "**DHPs**: Peripheral edema (ankles); Reflex tachycardia; Flushing.\n**Non-DHPs**: **Bradycardia**, **AV block**, and **Constipation** (Verapamil).\n**Hyperprolactinemia**: Verapamil.",
        ci: "**HFrEF**: Non-DHPs (Negative inotropy worsens failure).\n**$\beta$-blockers**: Avoid combo with Verapamil (↑ heart block risk).",
        pk: "**Verapamil**: Strong **P-gp inhibitor** (↑ Digoxin levels).\n**Amlodipine**: Longest $t_{1/2}$ (~40 hr).",
        pearl: "**Verapamil is most constipating**.\n**DHP Edema** is not fluid overload; it is pre-capillary vasodilation."
      }
    ]
  },
  {
    group: "Antiarrhythmics",
    drugs: [
      {
        name: "Adenosine",
        aka: "Adenosine (Adenocard)",
        summary: "**PSVT Terminator**. Briefly stops the AV node.",
        moa: "Activates **A1 receptors** on AV node → ↑ $K^+$ conductance / ↓ $Ca^{2+}$ current → **Hyperpolarization**.\nCauses transient **Complete Heart Block**.",
        use: "**Acute PSVT**: Drug of choice for conversion to sinus rhythm.\nDiagnostic tool to unmask atrial flutter.",
        se: "**Sense of Impending Doom**.\n**Chest pain**, **Flushing**, and **Dyspnea**.\nBronchospasm.",
        ci: "**Asthma** (bronchospasm risk).\n**2nd/3rd degree heart block**.",
        pk: "Ultra-short $t_{1/2}$ (~10 seconds).\nMust give as **Rapid IV Push**.\n**Caffeine/Theophylline**: Block adenosine receptors.",
        pearl: "Inform the patient: 'You will feel terrible for 10 seconds, then it will pass'."
      },
      {
        name: "Class IA Antiarrhythmics",
        aka: "Quinidine · Procainamide · Disopyramide",
        summary: "Intermediate $Na^+$ blockers that **↑ QTc**.",
        moa: "Block **$Na^+$ channels** (intermediate) + **$K^+$ channels**.\n↑ Action Potential Duration (APD) and ↑ refractory period.",
        use: "Atrial and ventricular arrhythmias; **WPW Syndrome**.",
        se: "**Torsades de Pointes** (via ↑ QTc).\n**Cinchonism**: Quinidine (tinnitus, headache).\n**Drug-Induced Lupus**: Procainamide.\n**Anticholinergic SE**: Disopyramide.",
        ci: "**Prolonged QTc**; Heart failure (Disopyramide negative inotropy).",
        pk: "**Quinidine**: Inhibits P-gp and displaces Digoxin.",
        pearl: "**Procainamide** is the drug of choice for **stable WPW** with tachycardia."
      },
      {
        name: "Class IB Antiarrhythmics",
        aka: "Lidocaine · Mexiletine · Phenytoin",
        summary: "Fast $Na^+$ blockers. Selective for **Ischemic Tissue**.",
        moa: "Block **$Na^+$ channels** (fast kinetics).\n**Selective for Depolarized/Ischemic cells**.\n↓ APD (Shortens refractory period).",
        use: "**Acute Ventricular Arrhythmias Post-MI** (Ischemic VT/VF).\n**Phenytoin**: Drug of choice for Digitalis-induced arrhythmias.",
        se: "**CNS Toxicity**: Seizures, tremor, paresthesias.\nLeast cardiotoxic of Class I.",
        ci: "**High-degree Heart Block**.",
        pk: "**Lidocaine**: Extensive first-pass; IV only for arrhythmias.",
        pearl: "**Class IB** are unique because they only affect ischemic tissue; ineffective for SVT."
      },
      {
        name: "Class IC Antiarrhythmics",
        aka: "Flecainide · Propafenone",
        summary: "Potent $Na^+$ blockers. **Strongest QRS widening**.",
        moa: "Block **$Na^+$ channels** (slow kinetics).\nProfoundly slows conduction throughout the heart.\nNo effect on APD.",
        use: "**SVT/AF** in patients with **Normal Heart Structure**.",
        se: "**Proarrhythmic**: Can trigger VT in damaged hearts.",
        ci: "**Structural Heart Disease** (Post-MI, HF, LVH) — **CAST Trial**.",
        pk: "Renal/Hepatic elimination.",
        pearl: "**CAST Trial Landmark**: IC drugs successfully stopped PVCs but **Tripled Mortality** post-MI."
      },
      {
        name: "Class III Antiarrhythmics",
        aka: "Amiodarone · Sotalol · Dofetilide · Ibutilide · Dronedarone",
        summary: "**$K^+$ channel blockers**. Significantly **↑ QTc**.",
        moa: "Block **$K^+$ channels** (IKr) → ↑ APD and refractory period.\n**Amiodarone**: Also blocks $Na^+, Ca^{2+}$, and $\beta$-receptors.",
        use: "**Amiodarone**: ACLS (VF/VT); AF/AFL.\n**Sotalol**: AF maintenance.",
        se: "**Amiodarone**: **Pulmonary Fibrosis**, Hepatotoxicity, Thyroid dysfunction, Blue skin.\n**Sotalol**: Torsades de Pointes (High risk).",
        ci: "**Amiodarone**: Pregnancy; Lung disease.",
        pk: "**Amiodarone**: $t_{1/2}$ ~40–60 days; Lipophilic; Biliary excretion.",
        pearl: "**Amiodarone Baseline Testing**: TFTs, LFTs, PFTs (CXR), and Eye exam."
      },
      {
        name: "Digoxin",
        aka: "Digoxin · Digitalis",
        summary: "**Na-K-ATPase inhibitor**. ↑ Contractility / ↓ AV conduction.",
        moa: "Inhibits **$Na^+/K^+$-ATPase** → ↑ Intracellular $Na^+$ → ↓ Na-Ca exchanger → **↑ Intracellular $Ca^{2+}$**.\n**Vagotonic**: Stimulates vagus nerve → ↓ HR.",
        use: "**HFrEF**: Symptom control (No mortality benefit).\n**Rate Control in AF**: Especially if HF present.",
        se: "**GI**: N/V/Anorexia (Early sign).\n**CNS**: **Xanthopsia** (Yellow/green halos).\n**Arrhythmias**: Any type (PVCs, AV block).\n**Hypokalemia** sensitizes the heart to Digoxin toxicity.",
        ci: "**Hypokalemia**; WPW; AV block.",
        pk: "Renal elimination; $t_{1/2}$ ~40 hr; narrow TI.",
        pearl: "**Toxicity Treatment**: (1) Correct K+ (2) **Digibind** (Fab) (3) Atropine."
      },
      {
        name: "Magnesium Sulfate",
        aka: "Magnesium Sulfate · Magnesium (IV)",
        summary: "Divalent cation and physiologic calcium antagonist.\nDrug of choice for **Torsades de Pointes**.",
        moa: "Blocks voltage-gated **$Ca^{2+}$ channels** and stabilizes membrane.\nBlocks **NMDA receptors** (anticonvulsant in eclampsia).",
        use: "**Torsades de Pointes**: IV bolus (even if Mg is normal).\n**Eclampsia**: Seizure prevention/treatment.\n**Severe Asthma**: Adjunct bronchodilation.",
        se: "**Hypermagnesemia**: Loss of DTRs (first sign), respiratory depression.\nFlushing, hypotension.",
        ci: "**Heart block**; Renal failure (accumulation).",
        pk: "Renally eliminated.\nAntidote: **Calcium Gluconate**.",
        pearl: "**Mg outperforms Benzos** for eclampsia seizures."
      },
      {
        name: "Ranolazine & Ivabradine",
        aka: "Ranolazine · Ivabradine",
        summary: "Novel antianginal and HF agents with unique mechanisms.",
        moa: "**Ranolazine**: Blocks **Late $Na^+$ current** → ↓ $Na^+$ overload → ↓ $Ca^{2+}$ → ↓ Diastolic wall tension.\n**Ivabradine**: Blocks **$I_f$ 'funny' current** in SA node → ↓ HR.",
        use: "**Ranolazine**: Chronic stable angina (refractory).\n**Ivabradine**: HFrEF with HR ≥70 bpm (despite max $\beta$-blockers).",
        se: "**Ranolazine**: Mild ↑ QTc.\n**Ivabradine**: **Phosphenes** (visual light flashes); Bradycardia.",
        ci: "**Ranolazine**: Liver cirrhosis.\n**Ivabradine**: AF; Sick Sinus Syndrome.",
        pk: "Both: Oral; CYP3A4 substrates.",
        pearl: "**Ivabradine** reduces HR without affecting BP or contractility."
      },
      {
        name: "Milrinone & Nesiritide",
        aka: "Milrinone · Nesiritide",
        summary: "Positive inotropes for acute decompensated heart failure.",
        moa: "**Milrinone**: **PDE3 Inhibitor** → ↑ $cAMP$ → ↑ Inotropy + Vasodilation.\n**Nesiritide**: Recombinant **BNP** → ↑ $cGMP$ → Vasodilation + Natriuresis.",
        use: "**Milrinone**: Acute HF refractory to standard therapy; Bridge to transplant.\n**Nesiritide**: Decompensated HF with dyspnea.",
        se: "**Milrinone**: Hypotension, Arrhythmias.\n**Nesiritide**: Hypotension.",
        ci: "**Milrinone**: HOCM.",
        pk: "Both: IV infusion only.\nMilrinone: Dose-reduce in CKD.",
        pearl: "**Milrinone** is an 'inodilator' that bypasses $\beta$-receptors."
      }
    ]
  },
  {
    group: "Lipid-Lowering",
    drugs: [
      {
        name: "Statins (HMG-CoA Reductase Inhibitors)",
        aka: "Atorvastatin · Rosuvastatin · Simvastatin · Pravastatin · Lovastatin · Fluvastatin · Pitavastatin",
        summary: "Inhibit rate-limiting step in cholesterol synthesis.\nFirst-line for ASCVD risk reduction.",
        moa: "Competitive inhibition of **HMG-CoA Reductase**.\n↑ **LDL Receptor** expression → ↑ LDL clearance.",
        use: "**ASCVD Risk Reduction**: Primary and secondary prevention.\n**Post-MI**: Pleiotropic anti-inflammatory benefits.",
        se: "**Myopathy**: (Myalgia → Rhabdomyolysis); **Hepatotoxicity** (↑ LFTs).\nNew-onset Diabetes risk.",
        ci: "**Pregnancy** (Teratogenic).\nActive liver disease; Gemfibrozil (↑ Rhabdo risk).",
        pk: "**Rosuvastatin/Pravastatin**: Not CYP3A4 substrates (fewer interactions).\nAtorvastatin: Long $t_{1/2}$.",
        pearl: "**Rhabdomyolysis** is rare but life-threatening; check CK if muscle pain occurs."
      },
      {
        name: "Fibrates & Niacin",
        aka: "Gemfibrozil · Fenofibrate · Bezafibrate | Niacin (Vitamin B3)",
        summary: "Fibrates target Triglycerides via PPAR$\alpha$.\nNiacin raises HDL and inhibits VLDL secretion.",
        moa: "**Fibrates**: Activate **PPAR$\alpha$** → ↑ LPL expression → ↑ TG hydrolysis.\n**Niacin**: Inhibits **DGAT2** in liver + inhibits lipolysis in adipose.",
        use: "**Fibrates**: Severe Hypertriglyceridemia (prevents pancreatitis).\n**Niacin**: Low HDL; Mixed dyslipidemia.",
        se: "**Fibrates**: **Myopathy** (especially with Statins); Gallstones.\n**Niacin**: **Flushing** (prostaglandin-mediated); Hyperglycemia; Hyperuricemia (Gout).",
        ci: "**Fibrates**: Gallbladder disease.\n**Niacin**: Active Gout; Peptic Ulcer.",
        pk: "**Gemfibrozil**: Potent CYP2C8 inhibitor (Avoid with Statins).\n**Fenofibrate**: Safer with Statins.",
        pearl: "**Aspirin blocks Niacin flushing** by inhibiting prostaglandin synthesis."
      }
    ]
  },
  {
    group: "Antianginals",
    drugs: [
      {
        name: "Nitrates",
        aka: "Nitroglycerin · Isosorbide Dinitrate · Isosorbide Mononitrate · Sodium Nitroprusside",
        summary: "Nitric oxide donors that relax vascular smooth muscle.",
        moa: "Release **Nitric Oxide (NO)** → ↑ $cGMP$ → Vasodilation.\nVenous > Arterial (↓ Preload dominant).",
        use: "**Acute Angina** (SL NTG); **ACS**; **Hypertensive Emergency** (Nitroprusside).",
        se: "**Headache**; **Reflex Tachycardia**; **Tachyphylaxis** (Nitrate-free interval needed).\n**Cyanide Toxicity**: Nitroprusside.",
        ci: "**PDE5 Inhibitors** (Absolute CI — severe hypotension).\n**RV Infarction** (Preload-dependent).",
        pk: "SL NTG: Fast onset; Nitroprusside: IV only (Cyanide metabolite).",
        pearl: "**Nitrate Tolerance** occurs within 24 hr; requires 8–12 hr drug-free window."
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
        aka: "Unfractionated Heparin (UFH) · Enoxaparin · Dalteparin · Tinzaparin · Fondaparinux",
        summary: "Parenteral anticoagulants that activate **Antithrombin III**.\nUFH is for acute use; LMWH for VTE and pregnancy.",
        moa: "Binds and activates **Antithrombin III (AT-III)**.\n**UFH**: Inhibits **Thrombin (IIa)** and **Xa** equally.\n**LMWH**: Predominantly inhibits **Xa**.",
        use: "**Acute PE/DVT**; ACS; **Pregnancy** (preferred anticoagulant).\n**Cardiopulmonary Bypass**: UFH.",
        se: "**Bleeding**.\n**HIT Type II**: IgG vs. PF4-heparin complex → Paradoxical **Thrombosis**.\n**Osteoporosis**: Long-term UFH.\n**Hypoaldosteronism**: Hyperkalemia risk.",
        ci: "**HIT**: Absolute CI to all heparins (use Argatroban/Bivalirudin).\nActive major bleeding.",
        pk: "**UFH**: Monitor with **aPTT**; short $t_{1/2}$ (~1–2 hr).\n**LMWH**: Predictable PK; no routine monitoring (check anti-Xa in obesity/CKD).\n**Reversal**: **Protamine Sulfate** (Full for UFH, partial for LMWH).",
        pearl: "**HIT Management**: Stop all heparin immediately.\nSwitch to **Direct Thrombin Inhibitors** (Argatroban, Bivalirudin)."
      },
      {
        name: "Warfarin",
        aka: "Warfarin (Coumadin)",
        summary: "**Vitamin K Antagonist** for chronic anticoagulation.\nRequired for **Mechanical Heart Valves**.",
        moa: "Inhibits **Vitamin K Epoxide Reductase (VKOR)**.\n↓ Synthesis of Factors **II, VII, IX, X** and **Proteins C/S**.",
        use: "**Chronic AF**; **VTE**; **Mechanical Valves** (only indicated agent).",
        se: "**Bleeding**.\n**Skin Necrosis**: Early Protein C depletion.\n**Teratogenic**: Bone/CNS malformations (Category X).",
        ci: "**Pregnancy**; Active bleeding; Protein C/S deficiency.",
        pk: "Monitor with **PT/INR** (Factor VII falls first).\n$t_{1/2}$ ~40 hr; Metabolized by **CYP2C9**.",
        pearl: "**Warfarin Bridge**: Always bridge with Heparin for ≥5 days.\n**Reversal**: **4-factor PCC** (Fastest) or **Vitamin K** (Slow)."
      },
      {
        name: "Direct Oral Anticoagulants (DOACs)",
        aka: "Apixaban · Rivaroxaban · Edoxaban · Dabigatran",
        summary: "Target-specific anticoagulants with no routine monitoring required.\nPreferred for nonvalvular AF and VTE.",
        moa: "**Factor Xa Inhibitors** (Apixaban, Rivaroxaban).\n**Direct Thrombin Inhibitor** (Dabigatran).",
        use: "**Nonvalvular AF**; **VTE** Treatment and prophylaxis.",
        se: "**Bleeding** (ICH risk lower than Warfarin).\n**Dabigatran**: Dyspepsia.",
        ci: "**Mechanical Heart Valves** (Dabigatran is inferior).\n**Severe Renal Failure** (especially Dabigatran).",
        pk: "**Dabigatran**: 80% renal clearance.\n**Reversal**: **Idarucizumab** (Dabigatran); **Andexanet alfa** (Xa inhibitors).",
        pearl: "**DOAC vs. Warfarin**: No diet restrictions, no INR monitoring."
      }
    ]
  },
  {
    group: "Antiplatelets",
    drugs: [
      {
        name: "Aspirin (Antiplatelet)",
        aka: "Aspirin (ASA)",
        summary: "**Irreversible COX-1 inhibitor**.\nFoundational for ASCVD secondary prevention.",
        moa: "Irreversibly **Acetylates COX-1** → inhibits **TXA₂**.\nPermanently inhibits platelet aggregation.",
        use: "**ACS**; **Post-MI/Stroke**; **Preeclampsia** prevention.",
        se: "**GI Bleeding**; **Reye Syndrome** (children with viral infection).\n**AERD**: Aspirin-sensitive asthma (leukotriene shunting).\n**Tinnitus**: Early sign of toxicity.",
        ci: "**Children** with viral illness; **Active Peptic Ulcer**.",
        pk: "Effect lasts **7–10 days** (platelet lifespan).\n**Overdose**: Respiratory Alkalosis + Mixed AG-Metabolic Acidosis.",
        pearl: "**Salicylate Overdose**: Classic mixed acid-base picture.\nAlkalinize urine with $NaHCO_3$."
      },
      {
        name: "P2Y12 & GP IIb/IIIa Blockers",
        aka: "Clopidogrel · Ticagrelor · Prasugrel | Abciximab · Eptifibatide · Tirofiban",
        summary: "P2Y12 block ADP-mediated activation.\nGP IIb/IIIa block the final common pathway (aggregation).",
        moa: "**P2Y12 Inhibitors**: Block **ADP receptor**.\n**GP IIb/IIIa Inhibitors**: Block **$\alpha_{IIb}\beta_3$ receptor** (prevents fibrinogen cross-linking).",
        use: "**DAPT**: Post-stent/ACS (Clopidogrel/Ticagrelor).\n**Prasugrel**: STEMI with PCI.\n**Abciximab**: High-risk PCI.",
        se: "**Bleeding**; **Ticagrelor**: Dyspnea.\n**Abciximab**: Thrombocytopenia.",
        ci: "**Prasugrel**: History of TIA/Stroke.",
        pk: "**Clopidogrel**: Prodrug activated by **CYP2C19**.\n**Omeprazole** inhibits CYP2C19 → ↓ efficacy.",
        pearl: "**TTP** is a rare boards association with Clopidogrel."
      },
      {
        name: "PDE3/PDE5 Inhibitors (Antiplatelet)",
        aka: "Cilostazol · Dipyridamole",
        summary: "Increase intraplatelet $cAMP$ to inhibit aggregation.",
        moa: "**Cilostazol**: **PDE3 Inhibitor** → ↑ $cAMP$ → ↓ Aggregation + Vasodilation.\n**Dipyridamole**: Inhibits **PDE** + blocks adenosine reuptake.",
        use: "**Cilostazol**: Intermittent Claudication (PAD).\n**Dipyridamole**: Secondary stroke prevention (with Aspirin).\n**Cardiac Stress Test**: IV Dipyridamole.",
        se: "**Cilostazol**: Headache, palpitations.\n**Dipyridamole**: Headache, flushing.",
        ci: "**Cilostazol**: **Heart Failure** (↑ mortality risk).",
        pk: "Cilostazol: Oral; CYP3A4.",
        pearl: "**Coronary Steal**: Dipyridamole unmasks CAD in stress testing."
      },
      {
        name: "tPA & Thrombolytics",
        aka: "Alteplase · Tenecteplase · Reteplase · Streptokinase",
        summary: "Clot busters that convert plasminogen to plasmin.",
        moa: "Convert **Plasminogen → Plasmin**.\nCleaves fibrin cross-links → dissolves existing thrombus.",
        use: "**Ischemic Stroke** (within 3–4.5 hr window).\n**Massive PE** with hemodynamic compromise.\n**STEMI** (if PCI is unavailable).",
        se: "**Intracranial Hemorrhage**; Systemic bleeding.",
        ci: "**BRAIN**:\n**B**leeding; **R**ecent surgery; **A**nticoagulants; **I**ntracranial pathology; **N**umbers (BP >185/110).",
        pk: "Alteplase: Short $t_{1/2}$ (~5 min).\n**Reversal**: **Cryoprecipitate** or **Aminocaproic acid**.",
        pearl: "**CT Head** must exclude hemorrhage before administration."
      }
    ]
  },
  {
    group: "Gout Agents",
    drugs: [
      {
        name: "Allopurinol & Febuxostat",
        aka: "Allopurinol · Febuxostat",
        summary: "**Xanthine Oxidase Inhibitors** for chronic prophylaxis.",
        moa: "Inhibit **Xanthine Oxidase** → ↓ Uric Acid.",
        use: "**Chronic Gout Prophylaxis**; **Tumor Lysis Syndrome**.",
        se: "**HSR/SJS**: Allopurinol (screen **HLA-B*5801**).\n**Acute Gout Flare**: When first started.",
        ci: "**Acute Gout Flare**: Do NOT start during an active attack.\n**Azathioprine/6-MP**: Severe toxicity interaction.",
        pk: "Allopurinol: Renal; Febuxostat: Hepatic.",
        pearl: "**The Interaction**: Allopurinol + Azathioprine = Myelosuppression."
      },
      {
        name: "Colchicine",
        aka: "Colchicine",
        summary: "**Microtubule Inhibitor** for acute gout flares.",
        moa: "Binds **$\beta$-tubulin** → inhibits polymerization.\n↓ Neutrophil chemotaxis.",
        use: "**Acute Gout Flare**; **Pericarditis**.",
        se: "**Diarrhea** (dose-limiting); **Myopathy**.",
        ci: "**Severe Renal Failure**; **CYP3A4 inhibitors**.",
        pk: "Hepatic and renal elimination.",
        pearl: "Diarrhea is the classic warning sign of toxicity."
      },
      {
        name: "Probenecid",
        aka: "Probenecid",
        summary: "**Uricosuric Agent** that ↑ uric acid excretion.",
        moa: "Inhibits **URAT1** in proximal tubule.\nInhibits **OAT** → ↓ secretion of Penicillins.",
        use: "**Chronic Gout**; **Antibiotic Adjunct**.",
        se: "**Uric Acid Stones**; Acute Gout Flare.",
        ci: "**History of Kidney Stones**; **Aspirin**.",
        pk: "Hepatic glucuronidation.",
        pearl: "Probenecid makes you pee out the uric acid."
      }
    ]
  }
],
toxicology: [
  {
    group: "Toxicology",
    drugs: [
      {
        name: "Drug Antidotes (High-Yield Pairs)",
        aka: "Flumazenil · Naloxone · N-Acetylcysteine · Atropine · Pralidoxime · Physostigmine · Protamine · Digoxin Fab · Methylene Blue · Hydroxocobalamin · Fomepizole · Glucagon · Deferoxamine",
        summary: "Specific agents to reverse life-threatening poisoning.\nFocus on the mechanism of the toxin and the corresponding antidote.",
        moa: "**Flumazenil**: Competitive **BZD receptor** antagonist.\n**Naloxone**: Competitive **$\mu$-opioid receptor** antagonist.\n**N-Acetylcysteine**: Restores **Glutathione** to neutralize NAPQI.\n**Atropine**: Competitive **Muscarinic** antagonist.\n**Pralidoxime (2-PAM)**: Regenerates **AChE** (must give before aging).\n**Physostigmine**: Reversible **AChE inhibitor** (crosses BBB).\n**Protamine Sulfate**: Ionic binding neutralizes Heparin.\n**Digoxin Fab**: Binds free Digoxin.\n**Methylene Blue**: Reduces $Fe^{3+}$ back to $Fe^{2+}$ (Methemoglobinemia).\n**Hydroxocobalamin**: Binds $CN^-$ to form Cyanocobalamin.\n**Fomepizole**: Inhibits **Alcohol Dehydrogenase**.\n**Glucagon**: ↑ $cAMP$ via non-$\beta$ receptors.\n**Deferoxamine**: Iron chelation.",
        use: "**Flumazenil** $\rightarrow$ Benzo OD (Warning: May precipitate seizures).\n**Naloxone** $\rightarrow$ Opioid OD.\n**Atropine + 2-PAM** $\rightarrow$ Organophosphates.\n**Physostigmine** $\rightarrow$ Anticholinergic syndrome (NOT for TCA toxicity).\n**Fomepizole** $\rightarrow$ Methanol or Ethylene Glycol.\n**Glucagon** $\rightarrow$ $\beta$-blocker or CCB overdose.\n**Chelation** $\rightarrow$ Lead, Arsenic, or Mercury poisoning.",
        se: "**Flumazenil**: Seizures in dependent patients.\n**Physostigmine**: Cholinergic crisis (DUMBBELLS).\n**Methylene Blue**: Hemolysis in **G6PD Deficiency**.\n**Protamine**: Hypotension; anaphylaxis.\n**Hydroxocobalamin**: Red skin/urine discoloration.",
        ci: "**Flumazenil**: TCA overdose (seizure risk).\n**Physostigmine**: Suspected TCA toxicity.\n**Methylene Blue**: G6PD Deficiency.",
        pk: "Flumazenil and Naloxone have short $t_{1/2}$ (~1 hr) and may require redosing or infusion.",
        pearl: "**Glucagon for $\beta$-blockers**: Bypasses the blocked $\beta$-receptor to increase inotropy via its own receptor."
      },
      {
        name: "Acetaminophen Toxicity & N-Acetylcysteine",
        aka: "N-Acetylcysteine (NAC) · Acetaminophen (APAP)",
        summary: "Hepatotoxicity occurs when **NAPQI** overwhelms glutathione.\n**Rumack-Matthew Nomogram** guides treatment timing.",
        moa: "**Acetaminophen**: 5–10% converted by **CYP2E1** to **NAPQI** (toxic electrophile).\n**NAPQI**: Normally detoxified by **Glutathione**; when depleted, it causes **Centrilobular (Zone 3) Necrosis**.\n**NAC**: Provides **Cysteine** to replenish Glutathione synthesis.",
        use: "**Acetaminophen Overdose**: Ideally within 8 hr of ingestion; give even if late.",
        se: "**Anaphylactoid Reaction**: IV NAC can cause flushing/hives (non-IgE; slow infusion).\nNausea/Vomiting (Oral NAC smells like rotten eggs).",
        ci: "No absolute contraindications to NAC treatment.",
        pk: "Rumack-Matthew Nomogram: Start NAC if 4-hr level is $>150 \mu g/mL$.",
        pearl: "**NAC is most effective within 8 hours**, but can be used up to 72 hr post-ingestion to improve hepatic microcirculation."
      },
      {
        name: "Ethanol Metabolism, Disulfiram & Alcohol Antidotes",
        aka: "Disulfiram · Naltrexone · Acamprosate · Fomepizole · Thiamine (B1)",
        summary: "Management of **Alcohol Use Disorder** and metabolic consequences.\n**Thiamine** must be given **BEFORE** Glucose.",
        moa: "**Disulfiram**: Inhibits **Aldehyde Dehydrogenase** $\rightarrow$ **Acetaldehyde** buildup $\rightarrow$ sickness.\n**Naltrexone**: Blocks $\mu$-opioid receptors to ↓ cravings.\n**Fomepizole**: Inhibits **Alcohol Dehydrogenase** to stop toxic metabolite formation.\n**Thiamine**: Essential cofactor for **Transketolase**.",
        use: "**Disulfiram**: Aversion therapy.\n**Naltrexone**: Reduces 'reward' of drinking.\n**Fomepizole**: Methanol (stops blindness) and Ethylene Glycol (stops renal failure).\n**Thiamine**: Prevents **Wernicke Encephalopathy**.",
        se: "**Disulfiram**: Cardiovascular collapse if ethanol is ingested.\n**Thiamine**: Essentially non-toxic.\n**Fomepizole**: Headache; nausea.",
        ci: "**Disulfiram**: Recent alcohol use; Opioid use.\n**Naltrexone**: Active opioid use (precipitates withdrawal).",
        pk: "Disulfiram inhibition is irreversible; effect lasts 1–2 weeks after stopping.",
        pearl: "**Thiamine Rule**: Always give Thiamine before Glucose. Glucose in a B1-deficient patient exhausts remaining stores and triggers Wernicke."
      }
    ]
  }
],

micro: [
  {
    group: "Beta-Lactams",
    drugs: [
      {
        name: "Natural Penicillins",
        aka: "Penicillin G (IV/IM) · Penicillin V (oral) · Benzathine Penicillin G · Procaine Penicillin G",
        summary: "Narrow-spectrum **$\beta$-lactams** disrupting cell wall synthesis.\nFirst-line for **Syphilis** and **Group A Strep**.",
        moa: "Bind and inhibit **PBPs** (Penicillin-Binding Proteins).\nPrevent peptidoglycan **transpeptidation** (cross-linking).\nBactericidal against actively dividing organisms.",
        use: "**Syphilis** (Benzathine G IM single dose).\n**Strep Pharyngitis** (Penicillin V).\n**Rheumatic Fever** prophylaxis.\n**Neurosyphilis** (Penicillin G IV).",
        se: "**Hypersensitivity** (Anaphylaxis risk).\n**Jarisch-Herxheimer Reaction**: Fever/hypotension after starting treatment for spirochetes (Syphilis, Lyme).",
        ci: "True Penicillin Anaphylaxis (1–2% cross-reactivity with cephalosporins).",
        pk: "Penicillin G is acid-labile (not oral).\nBenzathine G is a **long-acting depot** injection (2–4 weeks).",
        pearl: "**Jarisch-Herxheimer** is not an allergy; it is caused by pyrogen release from dying spirochetes."
      },
      {
        name: "Anti-Staphylococcal Penicillins",
        aka: "Nafcillin · Oxacillin · Dicloxacillin",
        summary: "Beta-lactamase-resistant penicillins for **MSSA**.\nBulky side chains prevent enzymatic hydrolysis.",
        moa: "Bind **PBPs** to inhibit cross-linking.\nSide chain sterically hinders **Staphylococcal $\beta$-lactamase**.",
        use: "**MSSA** Bacteremia, Endocarditis, and Osteomyelitis.\n(Not for MRSA).",
        se: "Hypersensitivity.\n**Nafcillin**: Hepatotoxicity and neutropenia.",
        ci: "Penicillin Allergy; **MRSA** (altered PBP2a).",
        pk: "**Nafcillin**: Hepatic elimination (no renal adjustment needed).\nDicloxacillin: Oral (empty stomach).",
        pearl: "**Superior to Vancomycin** for confirmed MSSA infections."
      },
      {
        name: "Aminopenicillins",
        aka: "Ampicillin · Amoxicillin · Unasyn · Augmentin",
        summary: "Extended-spectrum penicillins for Gram(+) and select Gram(-).\nCombined with **$\beta$-lactamase inhibitors** (Clavulanate, Sulbactam).",
        moa: "Same as penicillin; amino group ↑ Gram(-) penetration.\n**Inhibitors**: Irreversibly bind $\beta$-lactamases to protect the drug.",
        use: "**Ampicillin**: **Listeria** monocytogenes (Meningitis in >50/infants); Enterococcus.\n**Amoxicillin**: H. pylori triple therapy; Otitis media; Dental prophylaxis.\n**Augmentin**: Bites (Human/Animal); Sinusitis.",
        se: "**Ampicillin Rash**: Non-allergic maculopapular rash with **EBV/Mono**.\nDiarrhea (Clavulanate-mediated).",
        ci: "Penicillin Allergy; Active EBV infection (Rash risk).",
        pk: "**Amoxicillin**: High oral bioavailability.\nAmpicillin: Poor oral absorption (mostly IV/IM).",
        pearl: "**Listeria is the catch**: Cephalosporins do NOT cover Listeria; always use Ampicillin."
      },
      {
        name: "Extended-Spectrum Penicillins",
        aka: "Piperacillin-Tazobactam (Zosyn)",
        summary: "Anti-pseudomonal penicillins with the broadest coverage.\nWorkhorse for hospital infections.",
        moa: "Extended PBP binding + **$\beta$-lactamase inhibitor**.\nCovers **Pseudomonas** and Anaerobes.",
        use: "**Nosocomial Infections** (HAP/VAP).\n**Febrile Neutropenia** (Empiric coverage).\nPolymicrobial abdominal infections.",
        se: "**Hypokalemia** (Tubular K⁺ loss).\nThrombocytopenia at high doses.",
        ci: "Penicillin Anaphylaxis.",
        pk: "IV infusion; **Extended 4-hr infusion** optimizes killing.",
        pearl: "**ESBL warning**: May fail in ESBL bacteremia due to 'inoculum effect' (use Carbapenems)."
      },
      {
        name: "Cephalosporins",
        aka: "Cefazolin (1G) · Cefoxitin (2G) · Ceftriaxone (3G) · Cefepime (4G) · Ceftaroline (5G)",
        summary: "Progressively broader Gram(-) coverage by generation.\nOnly 5th Gen (**Ceftaroline**) covers **MRSA**.",
        moa: "Bind **PBPs**; more resistant to some $\beta$-lactamases than penicillins.\nBactericidal.",
        use: "**1G (Cefazolin)**: Surgical prophylaxis.\n**2G (Cefoxitin)**: Anaerobes/Pelvic infections.\n**3G (Ceftriaxone)**: Meningitis, Gonorrhea, Lyme.\n**4G (Cefepime)**: **Pseudomonas**; Febrile Neutropenia.\n**5G (Ceftaroline)**: MRSA.",
        se: "**Ceftriaxone**: Biliary sludge/Pseudolithiasis; contraindicated in neonates.\nDisulfiram-like reaction (MTT side-chain agents).",
        ci: "Cephalosporin/Penicillin Anaphylaxis.\nNeonates receiving IV Calcium (Precipitation risk).",
        pk: "**Ceftriaxone**: Once daily ($t_{1/2}$ ~8 hr); biliary excretion.\nMost others: Renal excretion.",
        pearl: "**LAME Resistance**: Cephalosporins do NOT cover **L**isteria, **A**typicals, **M**RSA (except 5G), **E**nterococci."
      },
      {
        name: "Carbapenems & Monobactams",
        aka: "Imipenem · Meropenem · Ertapenem | Aztreonam",
        summary: "**Carbapenems**: Broadest $\beta$-lactams (Gram+, Gram-, Anaerobes).\n**Aztreonam**: Gram(-) only; safe in penicillin allergy.",
        moa: "**Carbapenems**: Bind multiple PBPs; resistant to many $\beta$-lactamases.\n**Aztreonam**: Binds **PBP3** only.",
        use: "**Carbapenems**: ESBL-producing organisms; MDR infections.\n**Aztreonam**: Gram(-) infections in **Penicillin-Allergic** patients.",
        se: "**Imipenem**: **Seizures** (especially in renal failure).\n**Ertapenem**: No Pseudomonas/Enterococcus coverage.",
        ci: "**Aztreonam**: Cross-reacts with **Ceftazidime** (shared side chain).",
        pk: "**Imipenem**: Co-formulated with **Cilastatin** (inhibits renal dehydropeptidase I).\nRenal elimination for all.",
        pearl: "**Ertapenem is the outlier**: The only carbapenem with no Pseudomonas activity."
      }
    ]
  },
  {
    group: "Other Antibacterials",
    drugs: [
      {
        name: "Vancomycin",
        aka: "Vancomycin",
        summary: "Glycopeptide for Gram(+) only.\nDrug of choice for **MRSA** and **C. diff** (oral).",
        moa: "Binds **D-Ala-D-Ala** terminus of peptidoglycan precursors.\nPrevents transglycosylation and transpeptidation.\n(Not for Gram-negative — too large to cross outer membrane).",
        use: "**MRSA** (IV).\n**C. difficile** colitis (Oral only — not absorbed).\nPenicillin-allergic patients with serious Gram(+) infections.",
        se: "**Red Man Syndrome** (Non-IgE mast cell degranulation — prevent with slow infusion).\n**Nephrotoxicity** (Synergy with Aminoglycosides).\nOtotoxicity (Supratherapeutic levels).",
        ci: "**VRE** (Vancomycin-Resistant Enterococcus).",
        pk: "**AUC/MIC monitoring** standard.\nRenal elimination; dose-adjust in CKD.",
        pearl: "**Oral vs. IV**: Oral is for gut only; IV is for systemic only. They are not interchangeable."
      },
      {
        name: "Aminoglycosides",
        aka: "Gentamicin · Tobramycin · Amikacin · Neomycin",
        summary: "Potent bactericidal drugs for serious Gram(-) infections.\nRequire oxygen for uptake.",
        moa: "Irreversibly inhibit **30S subunit**.\nCause mRNA misreading → aberrant protein insertion → membrane disruption.\n**Concentration-dependent** killing.",
        use: "**Serious Gram(-)** (Pseudomonas, Klebsiella).\n**Endocarditis Synergy**: Low-dose + Beta-lactam/Vancomycin.\n**Neomycin**: Bowel prep; Hepatic encephalopathy.",
        se: "**Nephrotoxicity** (ATN; usually reversible).\n**Ototoxicity** (Sensorineural; irreversible).\n**Neuromuscular Blockade** (ACh release inhibition).",
        ci: "**Myasthenia Gravis**; Pregnancy (Fetal ototoxicity).",
        pk: "**Once-daily dosing** (High $C_{max}$ / Low trough) reduces toxicity.\nRenal elimination.",
        pearl: "**Ineffective against Anaerobes**: Uptake requires $O_2$ (proton motive force)."
      },
      {
        name: "Tetracyclines",
        aka: "Doxycycline · Tetracycline · Minocycline",
        summary: "Bacteriostatic broad-spectrum antibiotics.\nDrug of choice for Tick-borne and Atypical pathogens.",
        moa: "Bind **30S subunit** → block **aminoacyl-tRNA** binding to A-site.\nIntracellular concentration is high.",
        use: "**Doxycycline**: **Rickettsia** (RMSF), Lyme, Chlamydia, Mycoplasma.\n**Acne**; MRSA skin infections.",
        se: "**Photosensitivity**.\n**Teeth discoloration** and bone growth inhibition in children.\n**Pill Esophagitis** (Stay upright).",
        ci: "**Pregnancy** and **Children <8 yr**.\n(Exception: RMSF in children).",
        pk: "**Chelation**: Absorption ↓ by Dairy/Antacids ($Ca^{2+}, Mg^{2+}, Fe^{2+}$).\n**Doxycycline**: Fecal/Biliary elimination (safe in CKD).",
        pearl: "**Doxy in CKD**: The only tetracycline not requiring renal adjustment."
      },
      {
        name: "Macrolides",
        aka: "Azithromycin · Clarithromycin · Erythromycin",
        summary: "Bacteriostatic 50S inhibitors for **Atypical Pneumonias** and STIs.",
        moa: "Bind **50S subunit** (23S rRNA) → block **translocation**.\nBacteriostatic.",
        use: "**Atypicals**: Mycoplasma, Legionella, Chlamydophila.\n**STIs**: Chlamydia (single dose Azithro).\n**H. pylori**: Clarithromycin.",
        se: "**QTc Prolongation**.\n**MACRO**: **M**otility (GI upset), **A**rrhythmia (QT), **C**holestatic hepatitis, **R**ash, **O**utput (CYP inhibitor).",
        ci: "QTc >450 ms; Prior Macrolide hepatitis.",
        pk: "**Azithromycin**: Massive tissue concentration ($t_{1/2}$ ~68 hr).\n**CYP3A4 Inhibition**: Clarithro/Erythro (Strong); Azithro (None).",
        pearl: "**Azithromycin** is preferred for lacking drug interactions."
      },
      {
        name: "Clindamycin",
        aka: "Clindamycin",
        summary: "50S inhibitor for Gram(+) and **Anaerobes**.\nSuppresses bacterial toxins.",
        moa: "Binds **50S subunit** → inhibits peptide bond formation (translocation).",
        use: "**Anaerobes Above Diaphragm** (Aspiration pneumonia, lung abscess).\n**Group A Strep Toxic Shock**: Blocks toxin production.\n**MRSA** skin infections.",
        se: "**C. difficile Colitis** (Highest risk association).",
        ci: "History of CDI.",
        pk: "Excellent bone penetration.\n**D-zone test**: Required if Erythromycin-resistant Staph (detects inducible resistance).",
        pearl: "**Aspiration pneumonia** choice: Clindamycin (Above diaphragm) vs Metronidazole (Below)."
      },
      {
        name: "Misc. Antibacterials",
        aka: "Linezolid · Daptomycin · Chloramphenicol · Polymyxins · Nitrofurantoin · Fosfomycin",
        summary: "Specialized agents for resistant pathogens and simple UTIs.",
        moa: "**Linezolid**: 50S (23S) inhibitor; blocks initiation complex.\n**Daptomycin**: Membrane depolarization (Lipopeptide).\n**Nitrofurantoin**: DNA/Protein damage.",
        use: "**VRE / MRSA**: Linezolid and Daptomycin.\n**UTI**: Nitrofurantoin (Cystitis only).\n**MDR Gram(-)**: Polymyxins (Last resort).",
        se: "**Linezolid**: **Thrombocytopenia**; **Serotonin Syndrome** (weak MAOI).\n**Daptomycin**: **Myopathy** (↑ CK; hold statins).\n**Chloramphenicol**: **Gray Baby Syndrome**; Aplastic Anemia.",
        ci: "**Daptomycin in Pneumonia**: Inactivated by pulmonary surfactant.",
        pk: "Linezolid: 100% oral bioavailability.\nNitrofurantoin: Contraindicated if **CrCl <30**.",
        pearl: "**Daptomycin for Pneumonia** is a classic Step 1 trap: Surfactant kills the drug."
      },
      {
        name: "Fluoroquinolones",
        aka: "Ciprofloxacin · Levofloxacin · Moxifloxacin",
        summary: "DNA synthesis inhibitors for UTIs, Pneumonia, and Gram(-) coverage.",
        moa: "Inhibit **DNA Gyrase** (Topoisomerase II) and **Topoisomerase IV**.\nBactericidal; concentration-dependent.",
        use: "**Ciprofloxacin**: Gram(-) UTI; Pseudomonas.\n**Respiratory (Levo/Moxi)**: S. pneumoniae; Atypicals.\n**Anthrax** prophylaxis.",
        se: "**Tendon Rupture** (Achilles); **QTc Prolongation**.\n**Peripheral Neuropathy** (Potentially irreversible).\nCartilage damage in children.",
        ci: "**Myasthenia Gravis** (Exacerbation); Pregnancy.",
        pk: "**Chelation**: Absorption ↓ by Dairy/Antacids.\n**Moxifloxacin**: Minimal urine penetration (not for UTI).",
        pearl: "**Achilles warning**: Risk ↑ with corticosteroids and age >60."
      },
      {
        name: "Metronidazole",
        aka: "Metronidazole",
        summary: "DNA-damaging radical generator for **Anaerobes** and **Protozoa**.",
        moa: "Reduced by **Ferredoxin** in anaerobes → generates toxic free radicals → DNA strand breaks.",
        use: "**Anaerobes Below Diaphragm** (Bacteroides, C. diff).\n**GET GAP**: **G**iardia, **E**ntamoeba, **T**richomonas, **G**ardnerella, **A**naerobes, **P**ylori.",
        se: "**Disulfiram-like reaction** with alcohol.\n**Metallic taste**; Dark urine.",
        ci: "**Alcohol use**; 1st Trimester Pregnancy.",
        pk: "100% oral bioavailability; Hepatic metabolism.",
        pearl: "**Disulfiram rule**: Avoid alcohol during and 48 hr after treatment."
      },
      {
        name: "TMP-SMX (Trimethoprim-Sulfamethoxazole)",
        aka: "TMP-SMX · Bactrim",
        summary: "Synergistic folate synthesis inhibitors.\nFirst-line for **PCP** and **Nocardia**.",
        moa: "**SMX**: Inhibits Dihydropteroate Synthase (PABA analog).\n**TMP**: Inhibits **DHFR** (Dihydrofolate Reductase).",
        use: "**PCP** Prophylaxis/Treatment.\n**UTI**; Nocardia; community-MRSA skin infections.",
        se: "**Sulfa Allergy** (SJS/TEN); **Bone Marrow Suppression**.\n**Hyperkalemia** (TMP mimics Amiloride/blocks ENaC).\n**Kernicterus** in neonates.",
        ci: "Sulfa Anaphylaxis; Term Pregnancy; G6PD Deficiency.",
        pk: "TMP competes with **Creatinine** for secretion (pseudoelevation of Cr).",
        pearl: "**Hyperkalemia risk** is significant in HIV patients on high-dose therapy."
      }
    ]
  },
  {
    group: "Mycobacterial",
    drugs: [
      {
        name: "Tuberculosis Drugs (RIPE)",
        aka: "Rifampin (R) · Isoniazid (I) · Pyrazinamide (P) · Ethambutol (E)",
        summary: "Four-drug regimen for active TB.\nUnique multi-organ toxicities.",
        moa: "**R**: Inhibits **RNA Polymerase**.\n**I**: Inhibits **Mycolic Acid** synthesis (Prodrug).\n**P**: Phagolysosome activation (Unknown exact mechanism).\n**E**: Inhibits **Arabinosyltransferase** (Cell wall).",
        use: "**Active TB**: RIPE for 2 months → RI for 4 months.\n**Latent TB**: INH for 9 months or Rifampin for 4 months.",
        se: "**R**: **Orange Secretions**; Potent CYP induction.\n**I**: **Peripheral Neuropathy** (prevent with $B_6$); Drug-induced Lupus.\n**P**: **Hyperuricemia** (Gout); Hepatotoxicity.\n**E**: **Optic Neuritis** (Color blindness).",
        ci: "Severe Gout (Pyrazinamide); Pre-existing Optic Neuritis (Ethambutol).",
        pk: "**Rifampin**: Strong **CYP450 Inducer** (↓ Warfarin, OCPs).\n**INH**: Metabolism by **Acetylation** (Slow acetylators = ↑ Toxicity).",
        pearl: "**Always give Vitamin $B_6$** (Pyridoxine) with Isoniazid."
      },
      {
        name: "Leprosy Drugs",
        aka: "Dapsone · Rifampin · Clofazimine",
        summary: "MDT (Multi-Drug Therapy) for Hansen disease.",
        moa: "**Dapsone**: Folate inhibitor (PABA analog).\n**Clofazimine**: Generates ROS; anti-inflammatory.",
        use: "**Leprosy**: Paucibacillary (D+R) vs Multibacillary (D+R+C).\n**Dapsone**: PCP prophylaxis.",
        se: "**Dapsone**: **Hemolysis in G6PD Deficiency**; Methemoglobinemia.\n**Clofazimine**: Brownish-pink skin discoloration.",
        ci: "G6PD Deficiency (Dapsone).",
        pk: "Clofazimine: $t_{1/2}$ ~70 days (lipophilic accumulation).",
        pearl: "**Clofazimine skin changes** can last years after stopping."
      }
    ]
  },
  {
    group: "Antifungals",
    drugs: [
      {
        name: "Amphotericin B",
        aka: "Amphotericin B · AmBisome",
        summary: "Broadest fungicidal agent for life-threatening systemic infections.",
        moa: "Binds **Ergosterol** → forms membrane **pores** → leakage of ions.",
        use: "**Cryptococcal Meningitis** (± Flucytosine).\n**Mucormycosis**; Invasive Aspergillosis.",
        se: "**Nephrotoxicity** (Renal vasoconstriction + direct injury).\n**'Shake and Bake'**: Infusion reactions (Fever/Chills).\n**Hypokalemia / Hypomagnesemia** (Tubular wasting).",
        ci: "Renal Failure (use Liposomal AmBisome to mitigate).",
        pk: "IV only; Not dialyzable; prolonged tissue redistribution.",
        pearl: "**Supplement $K^+$ and $Mg^{2+}$** aggressively during treatment."
      },
      {
        name: "Azole Antifungals",
        aka: "Fluconazole · Voriconazole · Itraconazole · Posaconazole",
        summary: "Ergosterol synthesis inhibitors with extensive drug interactions.",
        moa: "Inhibit **CYP51** (Lanosterol 14-$\alpha$-demethylase).\nBlock Lanosterol → Ergosterol conversion.",
        use: "**Fluconazole**: Candida; Cryptococcal maintenance.\n**Voriconazole**: First-line for **Aspergillus**.\n**Itraconazole**: Histoplasmosis; Blastomycosis.",
        se: "**All**: Hepatotoxicity; **QTc Prolongation**.\n**Voriconazole**: **Visual Disturbances** (Photopsia); Skin SCC.",
        ci: "CYP3A4 substrates (Statins, Warfarin).\nItraconazole: Avoid in Heart Failure.",
        pk: "**Fluconazole**: Best CSF penetration.\n**Strong CYP3A4 inhibitors**.",
        pearl: "**Visual flashes** with Voriconazole are common and reversible."
      },
      {
        name: "Echinocandins & Flucytosine",
        aka: "Caspofungin · Micafungin | Flucytosine",
        summary: "**Echinocandins**: First-line for Candidemia.\n**Flucytosine**: Synergistic add-on.",
        moa: "**Echinocandins**: Inhibit **$\beta$-glucan** synthesis (Cell wall).\n**Flucytosine**: Converted to **5-FU** → inhibits DNA/RNA synthesis.",
        use: "**Echinocandins**: Candidemia; Febrile neutropenia.\n**Flucytosine**: Cryptococcal meningitis induction (with Ampho B).",
        se: "**Flucytosine**: **Bone Marrow Suppression** (Dose-limiting).",
        ci: "**Flucytosine Monotherapy**: Never used alone (resistance).",
        pk: "Echinocandins: IV only; Minimal drug interactions.",
        pearl: "**Echinocandins** are the 'Penicillins of fungi' (target cell wall)."
      },
      {
        name: "Dermatophyte Drugs",
        aka: "Terbinafine · Griseofulvin · Nystatin",
        summary: "Agents for superficial hair, skin, and nail infections.",
        moa: "**Terbinafine**: Inhibits **Squalene Epoxidase**.\n**Griseofulvin**: Blocks **Microtubules** (Mitosis).\n**Nystatin**: Pore formation (same as Ampho B).",
        use: "**Terbinafine**: Onychomycosis (Nails).\n**Griseofulvin**: **Tinea Capitis** (Scalp) in children.\n**Nystatin**: Thrush (Swish-and-swallow).",
        se: "**Terbinafine**: Hepatotoxicity (idiosyncratic); Dysgeusia.\n**Griseofulvin**: **CYP Inducer**; Photosensitivity.",
        ci: "Pregnancy/Porphyria (Griseofulvin).",
        pk: "Terbinafine concentrates in keratin for months.",
        pearl: "**Griseofulvin** requires oral administration for scalp fungal penetration."
      }
    ]
  },
  {
    group: "Antivirals",
    drugs: [
      {
        name: "NRTIs & NNRTIs",
        aka: "Zidovudine · Tenofovir · Abacavir | Efavirenz · Nevirapine",
        summary: "Backbone of HIV ART; block Reverse Transcriptase.",
        moa: "**NRTIs**: Competitively inhibit RT; cause **Chain Termination** (lack 3'-OH).\n**NNRTIs**: Allosteric inhibition of RT (no phosphorylation needed).",
        use: "**HIV ART Combinations**.\n**Zidovudine**: Perinatal prophylaxis.\n**Tenofovir**: PrEP.",
        se: "**NRTIs**: Lactic Acidosis (Mitochondrial toxicity).\n**Abacavir**: **Hypersensitivity** (HLA-B*5701).\n**Zidovudine**: Anemia.\n**Efavirenz**: Vivid dreams; CNS side effects.",
        ci: "**HLA-B*5701 Positive** (Abacavir absolute CI).",
        pk: "NRTIs require intracellular phosphorylation to active form.",
        pearl: "**Screen HLA-B*5701** before starting Abacavir."
      },
      {
        name: "Protease & Integrase Inhibitors",
        aka: "Ritonavir · Darunavir | Dolutegravir · Bictegravir",
        summary: "PIs block maturation; INSTIs block integration.\nINSTIs are preferred first-line.",
        moa: "**PIs**: Block HIV Protease → immature, non-infectious virions.\n**INSTIs**: Block HIV Integrase → prevent insertion into host DNA.",
        use: "**HIV ART**.\n**Ritonavir**: 'Booster' (inhibits CYP3A4 to ↑ other PI levels).",
        se: "**PIs**: **Metabolic Syndrome** (Lipodystrophy, Hyperglycemia).\n**INSTIs**: Weight gain; benign ↑ Creatinine (Dolutegravir).",
        ci: "PIs: Concurrent Simvastatin (Rhabdo risk).",
        pk: "Ritonavir is used as a PK enhancer, not for antiviral effect.",
        pearl: "**High genetic barrier**: INSTIs (Dolutegravir) are harder to develop resistance against."
      },
      {
        name: "HIV Entry Inhibitors",
        aka: "Maraviroc · Enfuvirtide",
        summary: "Salvage agents for MDR-HIV that block entry into CD4 cells.",
        moa: "**Maraviroc**: **CCR5** Antagonist (blocks gp120 binding).\n**Enfuvirtide**: Fusion inhibitor (binds **gp41**).",
        use: "**MDR-HIV Salvage**.",
        se: "**Enfuvirtide**: Severe injection site reactions (nodules).",
        ci: "**CXCR4-tropic HIV** (Maraviroc only works for CCR5-tropic).",
        pk: "Maraviroc requires a tropism test (Trofile) before use.",
        pearl: "**Enfuvirtide** is SC injection only."
      },
      {
        name: "Herpes & CMV Antivirals",
        aka: "Acyclovir · Valacyclovir | Ganciclovir · Foscarnet",
        summary: "DNA polymerase inhibitors for HSV, VZV, and CMV.",
        moa: "**Acyclovir**: Guanosine analog; phosphorylated by **Viral Thymidine Kinase** (TK).\n**Ganciclovir**: Phosphorylated by CMV **UL97 kinase**.\n**Foscarnet**: Pyrophosphate analog; directly inhibits polymerase.",
        use: "**HSV/VZV**: Acyclovir/Valacyclovir.\n**CMV**: Ganciclovir/Valganciclovir.\n**Acyclovir-resistant HSV**: Foscarnet.",
        se: "**Acyclovir**: Obstructive Nephropathy (Crystal-induced; hydrate!).\n**Ganciclovir**: **Bone Marrow Suppression**.\n**Foscarnet**: **Nephrotoxicity** and Hypocalcemia (Seizures).",
        ci: "Severe Neutropenia (Ganciclovir).",
        pk: "**Valacyclovir**: Prodrug with superior oral bioavailability.",
        pearl: "**TK-Deficient Resistance**: Foscarnet does NOT require viral activation; it treats Acyclovir-resistant HSV."
      },
      {
        name: "Influenza Antivirals",
        aka: "Oseltamivir · Zanamivir · Baloxavir",
        summary: "Reduce flu duration by ~1 day if started within 48 hr.",
        moa: "**Oseltamivir/Zanamivir**: **Neuraminidase Inhibitors**; prevent virion release.\n**Baloxavir**: Endonuclease inhibitor; blocks mRNA synthesis.",
        use: "**Influenza A and B** (Treatment and Prophylaxis).",
        se: "**Oseltamivir**: GI upset.\n**Zanamivir**: Bronchospasm.",
        ci: "**Asthma / COPD** (Zanamivir inhaled absolute CI).",
        pk: "Oseltamivir: Oral; Zanamivir: Inhaled; Baloxavir: Single oral dose.",
        pearl: "**Neuraminidase** prevents sialic acid cleavage → virions stuck to cell."
      },
      {
        name: "Ribavirin & Interferons",
        aka: "Ribavirin | Interferon-alpha/beta/gamma",
        summary: "Broad antivirals and immunomodulators.",
        moa: "**Ribavirin**: Inhibits IMP Dehydrogenase; RNA mutagen.\n**Interferons**: Activate JAK-STAT → induce antiviral state.",
        use: "**HCV**: Ribavirin + DAAs.\n**MS**: IFN-beta.\n**CGD**: IFN-gamma.",
        se: "**Ribavirin**: **Hemolytic Anemia**; **Severe Teratogen**.\n**Interferons**: **Flu-like Syndrome**; Depression.",
        ci: "**Pregnancy** (Ribavirin Category X; use 2 forms of contraception).",
        pk: "Ribavirin accumulates in RBCs ($t_{1/2}$ ~40 days).",
        pearl: "**Ribavirin teratogenicity** persists for 6 months after treatment."
      }
    ]
  },
  {
    group: "Antiparasitics",
    drugs: [
      {
        name: "Antimalarials",
        aka: "Chloroquine · Primaquine · Mefloquine · Artemisinins",
        summary: "Target different stages of Plasmodium life cycle.",
        moa: "**Chloroquine**: Blocks **Heme Polymerization** → toxic heme buildup.\n**Primaquine**: Kills **Hypnozoites** (Liver stage).\n**Artemisinins**: Generate toxic free radicals.",
        use: "**Malaria**: Chloroquine (sensitive areas); ACTs (resistant areas).\n**P. vivax/ovale**: MUST add Primaquine.",
        se: "**Chloroquine**: Retinopathy (long-term).\n**Primaquine**: **Hemolysis in G6PD Deficiency**.\n**Mefloquine**: Neuropsychiatric effects (Dreams/Psychosis).",
        ci: "**G6PD Deficiency** (Primaquine).",
        pk: "ACT (Artemisinin-based Combination Therapy) is the global standard.",
        pearl: "**Primaquine = Radical Cure**: Prevents relapse of P. vivax/ovale."
      },
      {
        name: "Anti-helminthics",
        aka: "Albendazole · Praziquantel · Ivermectin",
        summary: "Target worms via microtubules, paralysis, or membrane damage.",
        moa: "**Albendazole**: Inhibits **$\beta$-tubulin** polymerization.\n**Praziquantel**: ↑ $Ca^{2+}$ permeability → spastic paralysis.\n**Ivermectin**: Blocks glutamate-gated $Cl^-$ channels.",
        use: "**Albendazole**: Nematodes (Roundworms); Hydatid cysts.\n**Praziquantel**: Trematodes (Flukes); Cestodes (Tapeworms).\n**Ivermectin**: Strongyloides; Scabies.",
        se: "**Mazzotti Reaction**: Fever/rash due to dying microfilariae.",
        ci: "Pregnancy (Albendazole).",
        pk: "Take Albendazole with a fatty meal to ↑ absorption for systemic use.",
        pearl: "**'Praz for flatworms, Al-bend-azole for roundworms.'**"
      }
    ]
  }
],
gi: [
  {
    group: "Acid Management",
    drugs: [
      {
        name: "H2 Blockers",
        aka: "Cimetidine · Ranitidine · Famotidine · Nizatidine",
        summary: "Reversible block of **H2 receptors** to ↓ acid secretion.",
        moa: "Competitive antagonism of **H2 receptors** on gastric parietal cells.\n↓ $cAMP$ → ↓ activity of $H^+/K^+$-ATPase pump.\nSpecifically blocks **basal** and nocturnal acid secretion.",
        use: "**GERD**; Peptic Ulcer Disease (PUD); Gastritis.",
        se: "**Cimetidine**: Potent **P450 inhibitor**; **Anti-androgenic** (Gynecomastia, Impotence).\n**Ranitidine**: Recalled in many regions due to NDMA impurities.",
        ci: "Severe renal failure (requires dose adjustment).",
        pk: "Renal excretion.",
        pearl: "**Cimetidine** is the classic 'boards' drug for multiple interactions and hormonal side effects."
      },
      {
        name: "PPIs (Proton Pump Inhibitors)",
        aka: "Omeprazole · Lansoprazole · Esomeprazole · Pantoprazole · Rabeprazole",
        summary: "**Irreversible** inhibitors of the final step of acid secretion.",
        moa: "Irreversibly inhibit the **$H^+/K^+$-ATPase** (Proton Pump) in parietal cells.\nMost effective suppressors of gastric acid.",
        use: "**PUD**; **GERD**; **Zollinger-Ellison Syndrome**.\nPart of **H. pylori** eradication triple therapy.",
        se: "**↑ Risk of C. difficile** infection and Pneumonia.\n**Hypomagnesemia** (long-term use).\n↓ Absorption of $B_{12}$, Iron, and Calcium (risk of fractures).",
        ci: "Concurrent use of **Clopidogrel** (Omeprazole inhibits CYP2C19).",
        pk: "Prodrugs requiring an acidic environment for activation.\nTake 30–60 min **before** a meal.",
        pearl: "**Irreversible binding** means effects last 24–48 hr despite short plasma $t_{1/2}$."
      },
      {
        name: "Antacids",
        aka: "Aluminum Hydroxide · Calcium Carbonate · Magnesium Hydroxide",
        summary: "Directly neutralize gastric acid to provide rapid symptom relief.",
        moa: "Weak bases that react with gastric $HCl$ to form water and a salt.\nNeutralize acid; do NOT inhibit secretion.",
        use: "Occasional heartburn / Dyspepsia.",
        se: "**Aluminum**: **Al**umin-**um** causes **Constipation**.\n**Magnesium**: **Mg** causes **Diarrhea** (Must-go).\n**Calcium Carbonate**: Hypercalcemia; Rebound acid secretion.",
        ci: "**Renal Failure**: Risk of aluminum/magnesium accumulation.",
        pk: "Rapid onset; short duration of action.",
        pearl: "Often combined (e.g., Maalox) to balance constipation and diarrhea effects."
      },
      {
        name: "Mucosal Protectors",
        aka: "Sucralfate · Bismuth Subsalicylate · Misoprostol",
        summary: "Enhance gastric mucosal defenses without affecting acid levels.",
        moa: "**Sucralfate**: Forms a physical 'bandage' over ulcers (requires acid).\n**Bismuth**: Coats ulcers; direct antimicrobial against **H. pylori**.\n**Misoprostol**: **PGE1 analog** → ↑ mucus/bicarbonate + ↓ acid.",
        use: "**Sucralfate**: Duodenal ulcers.\n**Misoprostol**: Prevention of **NSAID-induced ulcers**.\n**Bismuth**: Quadruple therapy for H. pylori; Traveler's diarrhea.",
        se: "**Misoprostol**: Diarrhea; **Abortion** (uterine contractions).\n**Bismuth**: Black tongue/stools.",
        ci: "**Misoprostol**: **Pregnancy** (Category X).",
        pk: "Sucralfate requires multiple daily doses.",
        pearl: "**Bismuth** black stools can be confused with melena (check the 'summary' for history)."
      }
    ]
  },
  {
    group: "Motility & Emesis",
    drugs: [
      {
        name: "Antiemetics",
        aka: "Ondansetron · Metoclopramide · Promethazine · Scopolamine · Aprepitant",
        summary: "Block neurotransmitters in the **Chemoreceptor Trigger Zone (CTZ)** or gut.",
        moa: "**Ondansetron**: **5-HT3 antagonist** (Vagal and CTZ).\n**Metoclopramide**: **D2 antagonist** (Prokinetic + CTZ).\n**Aprepitant**: **NK1 antagonist** (Substance P block).",
        use: "**Ondansetron**: Post-op and Chemotherapy-induced nausea.\n**Metoclopramide**: **Gastroparesis** (Diabetic/Post-op).\n**Scopolamine**: Motion sickness.",
        se: "**Ondansetron**: **QTc Prolongation**; Headache; Constipation.\n**Metoclopramide**: **EPS** (Parkinsonism, Tardive Dyskinesia); Fatigue.",
        ci: "**Metoclopramide**: Small bowel obstruction; Parkinson disease.",
        pk: "Metoclopramide ↑ gastric emptying rate.",
        pearl: "**Aprepitant** is uniquely effective for delayed chemotherapy-induced vomiting."
      },
      {
        name: "Laxatives",
        aka: "Psyllium · Polyethylene Glycol (PEG) · Magnesium Citrate · Bisacodyl · Senna",
        summary: "Increase bowel movements via bulk, osmosis, or direct stimulation.",
        moa: "**Bulk (Psyllium)**: Draws water into stool; distends colon.\n**Osmotic (PEG/Mg)**: Non-absorbable solutes pull water into lumen.\n**Stimulant (Senna/Bisacodyl)**: Directly irritate enteric nerves.",
        use: "**Constipation**; **Bowel Prep** (PEG/Mg Citrate) for colonoscopy.",
        se: "**Dehydration** and electrolyte disturbances (Osmotics).\n**Melanosis Coli**: Senna (brown pigmentation of colon wall).",
        ci: "**Bowel Obstruction**.",
        pk: "Bulk-forming agents require adequate hydration to work.",
        pearl: "**Lactulose** (Osmotic) is also used for **Hepatic Encephalopathy** to trap $NH_3$."
      },
      {
        name: "Anti-diarrheals",
        aka: "Loperamide · Diphenoxylate-Atropine",
        summary: "Opioid agonists that slow GI transit time.",
        moa: "Activate **$\mu$-opioid receptors** in the myenteric plexus.\n↓ Acetylcholine release → ↓ Peristalsis → ↑ water absorption.",
        use: "**Non-infectious Diarrhea**.",
        se: "**Constipation**; Dizziness.\n**Diphenoxylate**: CNS effects at high doses (Atropine added to prevent abuse).",
        ci: "**Infectious Diarrhea** (C. diff, EHEC, Salmonella) — risk of **Toxic Megacolon**.",
        pk: "**Loperamide**: Does not cross the BBB (no analgesic effect).",
        pearl: "**Rule of Thumb**: Never use anti-diarrheals if the patient has bloody stool or high fever."
      }
    ]
  }
],
endo: [
  {
    group: "Diabetes",
    drugs: [
      {
        name: "Insulin & Insulin Secretagogues",
        aka: "Lispro · Aspart · Glulisine | Regular | NPH | Glargine · Detemir · Degludec | Glipizide · Glyburide · Glimepiride | Repaglinide",
        summary: "Insulin replaces deficient hormone; secretagogues (SUs/Meglitinides) force endogenous release.\nPrimary risk: **Hypoglycemia**.",
        moa: "**Insulin**: Binds **Insulin Receptor** (Tyrosine Kinase) → ↑ **GLUT4** translocation to membrane (muscle/fat).\n**Sulfonylureas (SUs)/Meglitinides**: Bind/close **$K^+_{ATP}$ channels** on $\beta$-cells → Depolarization → $Ca^{2+}$ influx → Insulin release.",
        use: "**Insulin**: Type 1 DM (essential); DKA/HHS (Regular IV); Hyperkalemia ($Insulin + Dextrose$).\n**SUs**: Type 2 DM add-on.\n**Meglitinides**: Postprandial glucose control in T2DM.",
        se: "**Hypoglycemia** (Highest risk with **Glyburide** due to long $t_{1/2}$).\n**Weight Gain**.\n**Lipodystrophy**: At injection sites (rotate sites).\n**Chlorpropamide**: Disulfiram-like reaction; SIADH.",
        ci: "**Type 1 DM**: SUs/Meglitinides (require functional $\beta$-cells).\n**Severe Renal Failure**: Glyburide (accumulates).",
        pk: "**Rapid (Lispro/Aspart)**: Onset 15 min; inject immediately before meals.\n**Long (Glargine)**: Peakless; duration ~24 hr.\n**Regular**: Only form used IV for DKA.",
        pearl: "**Insulin for Hyperkalemia**: Drives $K^+$ into cells via $Na^+/K^+$-ATPase upregulation.\nAlways give **Dextrose** with insulin in hyperkalemia unless $Glucose >250$."
      },
      {
        name: "Metformin",
        aka: "Metformin (Glucophage) · Metformin ER",
        summary: "First-line oral agent for Type 2 DM. Reduces hepatic glucose and improves sensitivity.\nDoes NOT cause hypoglycemia as monotherapy.",
        moa: "Activates **AMPK** via inhibition of **Mitochondrial Complex I**.\n↓ Hepatic gluconeogenesis (Primary).\n↑ Peripheral insulin sensitivity; ↓ intestinal glucose absorption.",
        use: "**Type 2 DM**: First-line for all patients unless contraindicated.\n**PCOS**: Improves insulin resistance and menstrual regularity.",
        se: "**GI Upset**: Nausea, diarrhea (dose-limiting; ER form is better).\n**Vitamin $B_{12}$ Deficiency**: Chronic use impairs ileal absorption.\n**Lactic Acidosis**: Rare but fatal (risk ↑ with renal failure/hypoxia).",
        ci: "**eGFR <30** (Absolute CI — accumulation risk).\n**Severe Heart Failure** or **Sepsis** (Lactic acidosis risk).\n**IV Contrast**: Hold 48 hr after procedure to avoid AKI-induced lactic acidosis.",
        pk: "Excreted renally **unchanged**.\nWeight neutral or modest weight loss.",
        pearl: "**Lactic Acidosis Mechanism**: Metformin inhibits pyruvate carboxylase → prevents lactate conversion to glucose → lactate buildup."
      },
      {
        name: "GLP-1 Agonists & DPP-4 Inhibitors",
        aka: "Semaglutide (Ozempic) · Liraglutide · Dulaglutide · Tirzepatide | Sitagliptin · Linagliptin · Saxagliptin",
        summary: "**GLP-1 Agonists**: Potent injectables for glucose, weight loss, and CV benefit.\n**DPP-4 Inhibitors**: Weight-neutral oral agents with modest efficacy.",
        moa: "**GLP-1 Agonists**: Mimic **Incretins** → ↑ glucose-dependent insulin + ↓ glucagon + ↓ gastric emptying + ↑ satiety.\n**DPP-4 Inhibitors**: Inhibit enzyme that degrades endogenous $GLP-1$.",
        use: "**T2DM**: Add-on therapy.\n**CV Risk Reduction**: Liraglutide/Semaglutide (↓ MACE in established CVD).\n**Obesity**: High-dose Semaglutide/Tirzepatide.",
        se: "**GLP-1**: Nausea/Vomiting; **Pancreatitis**; C-cell tumor risk (rodent data).\n**DPP-4**: Nasopharyngitis; **Saxagliptin** ↑ HF hospitalizations.",
        ci: "**MEN2** or **Medullary Thyroid Ca** (GLP-1 black box).\n**Gastroparesis** (GLP-1 slows emptying).\n**Heart Failure** (Saxagliptin).",
        pk: "**GLP-1**: Mostly SC (Weekly or Daily); Semaglutide also oral.\n**Linagliptin**: Hepatic elimination (safe in CKD without dose change).",
        pearl: "**Incretin Effect**: Oral glucose causes higher insulin response than IV glucose due to $GLP-1/GIP$ release from the gut."
      },
      {
        name: "SGLT2 Inhibitors",
        aka: "Empagliflozin · Dapagliflozin · Canagliflozin",
        summary: "Block renal glucose reabsorption. Proven benefit for **Heart Failure** and **CKD** regardless of DM status.",
        moa: "Inhibit **SGLT2** in **Proximal Convoluted Tubule**.\nCauses **Glucosuria** → ↓ blood glucose.\n↓ Intraglomerular pressure → Nephroprotection.",
        use: "**T2DM**; **HFrEF** (↓ mortality); **CKD with proteinuria** (slows progression).",
        se: "**Genital Mycotic Infections** (Fungal) and **UTIs** (Glucosuria promotes growth).\n**Euglycemic DKA**: DKA with near-normal glucose (High-yield).\n**Volume Depletion**: Osmotic diuresis → hypotension.\n**Canagliflozin**: Risk of bone fractures/amputations.",
        ci: "**Type 1 DM** (High DKA risk).\n**eGFR <20** (Ineffective for glucose lowering).",
        pk: "Oral, once daily.\nHold ≥3 days before surgery to avoid perioperative DKA.",
        pearl: "**Euglycemic DKA**: Occurs because glucose is lost in urine, but low insulin still promotes ketogenesis. Always check ketones if a patient on SGLT2i feels unwell, even if glucose is normal."
      },
      {
        name: "Pramlintide",
        aka: "Pramlintide (Symlin)",
        summary: "**Amylin analog** used as adjunct to mealtime insulin in Type 1 and Type 2 DM.",
        moa: "Mimics **Amylin** (co-secreted with insulin).\n↓ Postprandial **Glucagon** release.\nSlows gastric emptying + ↑ Satiety.",
        use: "Adjunct to insulin to blunt post-meal glucose spikes.",
        se: "**Severe Hypoglycemia**: (Must reduce insulin dose 50% when starting).\n**Nausea** (Very common).",
        ci: "**Gastroparesis** (Worsens symptoms).",
        pk: "SC injection before meals.\nMust use separate syringe from insulin.",
        pearl: "**Amylin Deficiency**: Type 1 diabetics are deficient in both insulin and amylin."
      },
      {
        name: "Thiazolidinediones (TZDs)",
        aka: "Pioglitazone · Rosiglitazone",
        summary: "**PPAR$\gamma$ agonists** that increase insulin sensitivity. Notorious for causing fluid retention.",
        moa: "Bind **PPAR$\gamma$** (nuclear receptor) → ↑ transcription of insulin-responsive genes.\n↑ **GLUT4** expression and ↑ **Adiponectin**.\nReduces insulin resistance in muscle and fat.",
        use: "Type 2 DM (add-on).",
        se: "**Weight Gain** and **Peripheral Edema**.\n**Heart Failure Exacerbation**: Due to fluid retention (Black Box).\n**Fractures**: Especially in women.\n**Pioglitazone**: Possible link to bladder cancer.",
        ci: "**Heart Failure** (Any stage).\nActive liver disease.",
        pk: "Slow onset (4–12 weeks) because it requires **gene transcription**.",
        pearl: "**TZD Edema**: Due to increased $Na^+$ reabsorption in the collecting duct (ENaC activation)."
      }
    ]
  },
  {
    group: "Endocrine — Bone / Mineral",
    drugs: [
      {
        name: "Calcitonin",
        aka: "Calcitonin-Salmon",
        summary: "Polypeptide that inhibits osteoclasts. Used as a rapid 'bridge' in hypercalcemia.",
        moa: "Directly inhibits **Osteoclasts** → ↓ bone resorption.\n↑ Renal $Ca^{2+}$ excretion.",
        use: "**Acute Hypercalcemia**: Rapid onset (2–4 hr) makes it a good bridge before bisphosphonates work.\n**Paget Disease** of bone.\n**Vertebral Fracture Pain**: Central analgesic effect.",
        se: "Nausea; Flushing; **Tachyphylaxis** (Effect disappears after 48 hr).",
        ci: "Hypocalcemia.",
        pk: "SC/IM or Nasal spray.\nTachyphylaxis limits use to short-term bridge therapy.",
        pearl: "**Tachyphylaxis**: Calcitonin receptors downregulate quickly; do not use for more than 2 days."
      },
      {
        name: "Cinacalcet & Sevelamer",
        aka: "Cinacalcet · Sevelamer",
        summary: "Agents for mineral bone disease in **CKD**.\nCinacalcet lowers PTH; Sevelamer lowers Phosphate.",
        moa: "**Cinacalcet**: **Calcimimetic** activates $Ca^{2+}$-sensing receptor (CaSR) on Parathyroid → ↓ $PTH$.\n**Sevelamer**: Non-absorbable polymer binds **Dietary Phosphate** in gut.",
        use: "**Secondary Hyperparathyroidism** (Dialysis).\n**Hyperphosphatemia** in CKD (Sevelamer adds no $Ca^{2+}$ load).",
        se: "**Cinacalcet**: **Hypocalcemia** (monitor $Ca^{2+}$ levels).\n**Sevelamer**: Constipation; ↓ absorption of fat-soluble vitamins.",
        ci: "Hypocalcemia (Cinacalcet).",
        pk: "Sevelamer must be taken **with meals** to bind dietary phosphate.",
        pearl: "**Sevelamer advantage**: Unlike $Ca^{2+}$-acetate binders, it doesn't cause hypercalcemia or vascular calcification."
      },
      {
        name: "Bisphosphonates & Osteoporosis Drugs",
        aka: "Alendronate · Zoledronic Acid | Denosumab · Teriparatide · Romosozumab",
        summary: "Anti-resorptive and anabolic agents for Osteoporosis and Hypercalcemia of Malignancy.",
        moa: "**Bisphosphonates**: Inhibit **Farnesyl Pyrophosphate Synthase** → ↓ Osteoclast function/survival.\n**Denosumab**: Anti-**RANKL** antibody → blocks osteoclast maturation.\n**Teriparatide**: Recombinant **$PTH$** (pulsed doses) → Anabolic bone formation.\n**Romosozumab**: Anti-Sclerostin → ↑ bone formation + ↓ resorption.",
        use: "**Osteoporosis** (First-line); **Hypercalcemia of Malignancy** (IV Zoledronic acid).\n**Paget Disease**.",
        se: "**Oral Bisphosphonates**: **Esophagitis** (Stay upright 30 min, take with full water glass).\n**ONJ** (Osteonecrosis of the Jaw).\n**Atypical Femoral Fractures**: (Subtrochanteric; seen with long-term use).\n**Teriparatide**: Osteosarcoma (theoretical risk).",
        ci: "**CKD** (Bisphosphonates/Teriparatide).\n**Esophageal strictures** (Oral bisphosphonates).\n**Hypocalcemia** (Denosumab).",
        pk: "**Oral Bisphosphonates**: <1% absorption; take on empty stomach.\n**Bone $t_{1/2}$**: Years (remains in bone matrix).",
        pearl: "**Denosumab Discontinuation**: Never stop abruptly without switching to bisphosphonate; causes rapid rebound bone loss/fractures."
      }
    ]
  },
  {
    group: "Endocrine — Hormones",
    drugs: [
      {
        name: "ADH / Desmopressin (DDAVP) & Vaptans",
        aka: "Desmopressin · Vasopressin | Tolvaptan · Conivaptan",
        summary: "**DDAVP** concentrates urine and aids hemostasis.\n**Vaptans** remove free water for SIADH/Hyponatremia.",
        moa: "**DDAVP**: Selective **$V_2$ agonist** → ↑ $AQP2$ in collecting duct → water reabsorption.\n**Tolvaptan**: Selective **$V_2$ antagonist** → **Aquaresis** (free water loss).\n**Vasopressin**: $V_1$ (vasoconstriction) + $V_2$ (antidiuresis).",
        use: "**DDAVP**: Central Diabetes Insipidus; **von Willebrand Disease** (↑ vWF/Factor VIII release); Nocturnal Enuresis.\n**Vasopressin**: Septic shock; Variceal bleeding.\n**Tolvaptan**: **SIADH**; ADPKD (slows cyst growth).",
        se: "**DDAVP**: Hyponatremia (water intoxication).\n**Tolvaptan**: **ODS** (Osmotic Demyelination Syndrome) if corrected too fast; Hepatotoxicity.",
        ci: "**Tolvaptan**: Hypovolemic hyponatremia; Liver disease (ADPKD).",
        pk: "Tolvaptan must be started in the hospital to monitor Na⁺ correction rate.",
        pearl: "**$V_2$ for Hemostasis**: DDAVP triggers release of $vWF$ and Factor $VIII$ from endothelial **Weibel-Palade bodies**."
      },
      {
        name: "Growth Hormone Axis Drugs",
        aka: "Somatropin · Octreotide · Pegvisomant",
        summary: "**Octreotide** is a versatile $SST$ analog for Acromegaly and GI bleeding.\n**Somatropin** for growth failure.",
        moa: "**Somatropin**: Recombinant **$GH$** → ↑ $IGF-1$.\n**Octreotide**: **Somatostatin** analog → ↓ $GH$, ↓ $TSH$, ↓ Glucagon, ↓ Insulin.\n**Pegvisomant**: **$GH$ Receptor Antagonist** → blocks action of $GH$.",
        use: "**Somatropin**: GH deficiency; Turner Syndrome.\n**Octreotide**: **Acromegaly**; **Carcinoid Syndrome** (↓ flushing/diarrhea); **Variceal Bleeding** (↓ splanchnic flow).\n**Pegvisomant**: Refractory Acromegaly.",
        se: "**Octreotide**: **Cholelithiasis** (↓ $CCK$ → gallbladder stasis); Steatorrhea.\n**Somatropin**: Edema; Hyperglycemia; Malignancy risk.",
        ci: "**Active Cancer** (Somatropin).",
        pk: "Octreotide IM depot available for monthly dosing.",
        pearl: "**Octreotide in GI Bleed**: Causes splanchnic vasoconstriction to ↓ portal pressure."
      },
      {
        name: "Levothyroxine (T4)",
        aka: "Levothyroxine · Liothyronine (T3)",
        summary: "Synthetic thyroid hormone for Hypothyroidism.\nRequires consistent timing and monitoring.",
        moa: "Synthetic **$T_4$** is converted to active **$T_3$** in tissues.\nBinds nuclear receptors to ↑ metabolic rate, heart rate, and growth.",
        use: "**Hypothyroidism** (Primary and Secondary).\n**Myxedema Coma** (IV).\n**Congenital Hypothyroidism** (Essential for CNS).",
        se: "**Hyperthyroidism symptoms** (if over-dosed): Tachycardia, tremors, heat intolerance.\n**Atrial Fibrillation** and **Bone loss** (Osteoporosis).",
        ci: "**Uncorrected Adrenal Insufficiency**: (Must give steroids FIRST or risk adrenal crisis).",
        pk: "Oral $t_{1/2}$ ~7 days (Steady state takes 6 weeks).\nTake on empty stomach 30–60 min before breakfast.",
        pearl: "**Adrenal Crisis Rule**: Thyroid hormone accelerates cortisol metabolism. If a patient has both, replacing thyroid before cortisol can trigger fatal adrenal collapse."
      },
      {
        name: "Methimazole / PTU (Antithyroid Drugs)",
        aka: "Methimazole · Propylthiouracil (PTU)",
        summary: "Block thyroid synthesis for Graves/Hyperthyroidism.\nPTU is for the first trimester and Thyroid Storm.",
        moa: "Both: Inhibit **Thyroid Peroxidase (TPO)** → block iodine organification.\n**PTU**: Additionally inhibits **Peripheral 5'-Deiodinase** ($T_4 \rightarrow T_3$ block).",
        use: "**Graves Disease**; Hyperthyroidism.\n**Pregnancy**: **PTU** (1st Trimester); **Methimazole** (2nd/3rd Trimester).\n**Thyroid Storm**: PTU preferred.",
        se: "**Agranulocytosis**: (Fever/Sore throat → Check CBC immediately).\n**PTU**: **Hepatotoxicity** (Black Box); ANCA vasculitis.\n**Methimazole**: **Teratogen** (Aplasia cutis, choanal atresia).",
        ci: "Severe liver disease (PTU).",
        pk: "PTU has higher protein binding (less crosses placenta in 1st trimester).",
        pearl: "**Agranulocytosis is idiosyncratic**: Cannot predict with routine CBC; patients must report fever immediately."
      },
      {
        name: "Corticosteroids (Glucocorticoids)",
        aka: "Prednisone · Methylprednisolone · Dexamethasone · Hydrocortisone",
        summary: "Universal anti-inflammatories with severe long-term multi-system toxicity.",
        moa: "Activate **Glucocorticoid Receptor** → modulate gene transcription.\nInhibit **$NF-\kappa B$** and **Phospholipase $A_2$** → ↓ Prostaglandins/Leukotrienes.\n↓ Lymphocyte function.",
        use: "Asthma/COPD; Autoimmune (SLE, RA); Adrenal insufficiency; Meningitis (Dexamethasone).",
        se: "**I HATE PREDNISONE** (Mnemonic):\n**I**mmunosuppression; **H**yperglycemia; **A**vascular necrosis; **T**hin skin; **E**dema; **P**sychosis; **R**ear (posterior capsular) cataracts; **E**longated (stunted) growth; **D**iabetes; **N**egative $N_2$ balance (muscle wasting); **I**ncreased $BP$; **S**teatosis; **O**steoporosis; **N**egative feedback (Adrenal suppression); **E**asy bruising.",
        ci: "Active systemic fungal infections; Live vaccines (immunosuppressed doses).",
        pk: "**Dexamethasone**: Longest acting; does not interfere with cortisol assays.\n**Prednisone**: Prodrug converted to Prednisolone in liver.",
        pearl: "**Adrenal Suppression**: After >2–3 weeks of use, MUST taper to avoid adrenal crisis."
      },
      {
        name: "Oral Contraceptives & Hormonal Contraception",
        aka: "Estrogen+Progestin | Progestin-only | IUD",
        summary: "Prevent ovulation via negative feedback.\nHeavily tested contraindications.",
        moa: "Estrogen/Progestin → **Negative Feedback** on Hypothalamus/Pituitary.\n↓ $GnRH$, ↓ $FSH$, ↓ $LH$ → **Prevent LH surge** (No ovulation).\nProgestin thickens cervical mucus + thins endometrium.",
        use: "Contraception; PCOS (acne/cycles); Endometriosis.",
        se: "**Combined**: VTE/DVT/PE (Estrogen ↑ clotting factors); Hypertension.\n**Progestin-only**: Breakthrough bleeding.\n**Copper IUD**: Heavy menses.",
        ci: "**Smokers $\ge$35 yr** (↑↑ MI/Stroke risk).\n**Migraine with Aura** (↑ Stroke risk).\nHistory of VTE/Stroke or Estrogen-sensitive cancer.",
        pk: "Metabolized by CYP3A4; **Rifampin** induces metabolism and causes pill failure.",
        pearl: "**Migraine Rule**: Simple migraine is not a CI; Migraine with **Aura** is an absolute CI to estrogen."
      },
      {
        name: "Androgens, Anti-Androgens & 5$\alpha$-Reductase Inhibitors",
        aka: "Testosterone | Spironolactone · Flutamide · Bicalutamide | Finasteride",
        summary: "Modulate the androgen axis for BPH, Prostate Ca, and PCOS.",
        moa: "**Finasteride**: Blocks **5$\alpha$-reductase** → ↓ $T$ to **$DHT$** conversion.\n**Flutamide/Bicalutamide**: Competitive **Androgen Receptor** antagonists.\n**Spironolactone**: Blocks AR and inhibits $T$ synthesis.",
        use: "**Finasteride**: BPH (↓ size); Male pattern baldness.\n**Flutamide**: Metastatic Prostate Cancer.\n**Testosterone**: Hypogonadism.\n**Spironolactone**: Transgender female; PCOS hirsutism.",
        se: "**Finasteride**: Sexual dysfunction; Gynecomastia.\n**Testosterone**: Erythrocytosis (monitor Hct); Testicular atrophy; Acne.\n**Flutamide**: Hepatotoxicity.",
        ci: "Pregnancy (Finasteride — feminizes male fetus).",
        pk: "Finasteride reduces $PSA$ by 50% (must double measured value for screening).",
        pearl: "**Finasteride for BPH**: Works by reducing prostate size (vs. $\alpha$-blockers which only relax muscle)."
      },
      {
        name: "GnRH Agonists & Antagonists",
        aka: "Leuprolide · Goserelin | Degarelix · Cetrorelix",
        summary: "**Leuprolide** suppresses axis after an initial flare.\n**Degarelix** provides immediate suppression.",
        moa: "**GnRH Agonist (Continuous)**: Initial LH/FSH spike (**Flare**) → Receptor downregulation → ↓ Testosterone/Estrogen.\n**GnRH Antagonist**: Immediate ↓ LH/FSH (No flare).",
        use: "**Leuprolide**: Prostate Cancer; Precocious Puberty; Endometriosis.\n**Degarelix**: Advanced Prostate Cancer (No flare).",
        se: "Hot flashes; Osteoporosis; Sexual dysfunction.\n**Leuprolide**: **Tumor Flare** (Bone pain/Cord compression in metastases).",
        ci: "Spinal metastases (Leuprolide monotherapy — flare can cause paralysis).",
        pk: "Depot injections for 1, 3, or 4 months.",
        pearl: "**Flare Prevention**: Give **Flutamide** ($\alpha$-blocker) before Leuprolide to block the initial $T$ spike."
      },
      {
        name: "Oxytocin & Tocolytics",
        aka: "Oxytocin | Terbutaline · Nifedipine · Indomethacin · Magnesium",
        summary: "**Oxytocin** to start labor/stop bleeding.\n**Tocolytics** to stop preterm labor.",
        moa: "**Oxytocin**: $G_q$ agonist → ↑ uterine contractions; $V_2$ cross-reactivity.\n**Terbutaline**: $\beta_2$ agonist → relaxes myometrium.\n**Indomethacin**: COX inhibitor → ↓ prostaglandins (which normally stimulate labor).\n**Nifedipine**: CCB → ↓ $Ca^{2+}$ for contraction.",
        use: "**Oxytocin**: Induction of labor; Postpartum Hemorrhage ($PPH$).\n**Magnesium**: **Neuroprotection** ($<32$ weeks) and Seizure prevention (Eclampsia).\n**Terbutaline/Nifedipine**: Delay labor for 48 hr to give steroids.",
        se: "**Oxytocin**: Hyponatremia (V2 effect); Uterine rupture.\n**Indomethacin**: **Premature closure of Ductus Arteriosus** (Avoid $>32$ weeks).",
        ci: "Oxytocin: Malpresentation; Prior classical C-section.",
        pk: "Oxytocin IV infusion is titrated to contraction frequency.",
        pearl: "**Neuroprotection**: Magnesium sulfate is used at $<32$ weeks to reduce Cerebral Palsy risk in the fetus."
      },
      {
        name: "Fludrocortisone & Mineralocorticoid Axis",
        aka: "Fludrocortisone",
        summary: "Primary synthetic **Mineralocorticoid** for Addison disease.",
        moa: "Binds **Mineralocorticoid Receptor** (MR) in Collecting Duct.\n↑ **$ENaC$** and $Na^+/K^+$-ATPase.\n↑ $Na^+$ reabsorption + ↑ $K^+/H^+$ excretion.",
        use: "**Primary Adrenal Insufficiency** (Addison): Combined with hydrocortisone.\n**Orthostatic Hypotension** (POTS).",
        se: "Hypertension; **Hypokalemia**; Edema.",
        ci: "Severe Heart Failure (Volume load).",
        pk: "Dosed daily; monitor BP and $K^+$.",
        pearl: "**Addison Rule**: Hydrocortisone replaces glucocorticoids; Fludrocortisone replaces mineralocorticoids. You need BOTH."
      }
    ]
  }
],
pulm: [
  {
    group: "Pulmonary",
    drugs: [
      {
        name: "SABAs & LABAs",
        aka: "Albuterol · Levalbuterol · Terbutaline | Salmeterol · Formoterol · Indacaterol · Vilanterol",
        summary: "**$\beta_2$-agonists** used for airway relaxation.\nSABAs for acute rescue; LABAs for chronic control.",
        moa: "Agonists at **$\beta_2$-adrenergic receptors** → ↑ $cAMP$ → activate PKA.\nDephosphorylation of myosin light chain → **Bronchodilation**.\nStabilize mast cells to prevent mediator release.",
        use: "**Albuterol (SABA)**: First-line for **Acute Asthma Exacerbation**; exercise-induced prophylaxis.\n**Salmeterol (LABA)**: Long-term maintenance (always with ICS).\n**Terbutaline**: Acute asthma; Tocolysis.",
        se: "**Tremor** (skeletal muscle $\beta_2$); **Tachycardia** ($\beta_1$ cross-reactivity).\n**Hypokalemia** (via $Na^+/K^+$-ATPase upregulation).\n**Hyperglycemia**.",
        ci: "**LABA Monotherapy** in asthma: Absolutely contraindicated (↑ asthma-related death risk).",
        pk: "SABAs: Onset 1–3 min; duration 4–6 hr.\nLABAs: Duration 12–24 hr; Salmeterol has slow onset (not for rescue).",
        pearl: "In **Asthma**, LABAs must be used with an **ICS**.\nIn **COPD**, LABAs can be used as monotherapy."
      },
      {
        name: "Inhaled Corticosteroids (ICS)",
        aka: "Fluticasone · Budesonide · Beclomethasone · Ciclesonide · Mometasone",
        summary: "First-line **Controller** therapy for persistent asthma.\nDirectly reduces eosinophilic airway inflammation.",
        moa: "Inhibit **NF-$\kappa B$** → ↓ synthesis of pro-inflammatory cytokines.\nInduce **Annexin-1** (inhibits Phospholipase $A_2$).\nUpregulate $\beta_2$ receptors to improve responsiveness.",
        use: "**Persistent Asthma**: Primary maintenance agent.\n**COPD**: Used in patients with high eosinophil counts or frequent exacerbations.",
        se: "**Oropharyngeal Candidiasis** (Thrush).\n**Dysphonia** (Hoarseness).\nMinimal systemic effects at standard doses.",
        ci: "Acute bronchospasm (not for rescue).",
        pk: "Local delivery minimizes systemic absorption.\n**Budesonide**: Preferred in pregnancy.",
        pearl: "To prevent **Thrush**: (1) Use a **Spacer** (2) **Rinse and Spit** after every dose."
      },
      {
        name: "Leukotriene Antagonists (LTRAs)",
        aka: "Montelukast · Zafirlukast | Zileuton",
        summary: "Block leukotriene-mediated bronchoconstriction.\nParticularly effective for **AERD**.",
        moa: "**Montelukast/Zafirlukast**: Competitive antagonists at **CysLT1** receptors.\n**Zileuton**: Inhibits **5-lipoxygenase** → ↓ total leukotriene synthesis.",
        use: "**AERD** (Aspirin-Exacerbated Respiratory Disease).\nProphylaxis for mild persistent asthma and allergic rhinitis.",
        se: "**Montelukast**: **Neuropsychiatric effects** (Nightmares, aggression, suicidality — Black Box).\n**Zileuton**: **Hepatotoxicity** (monitor LFTs).",
        ci: "Severe hepatic disease (Zileuton).",
        pk: "Oral, once daily (Montelukast).\nZafirlukast/Zileuton: Inhibit CYP450 (↑ Warfarin, ↑ Theophylline).",
        pearl: "**AERD (Samter's Triad)**: Asthma, Nasal Polyps, and Aspirin/NSAID sensitivity.\nTriggered by excess Leukotrienes when COX-1 is inhibited."
      },
      {
        name: "Omalizumab & Biologic Asthma Therapies",
        aka: "Omalizumab · Mepolizumab · Reslizumab · Benralizumab · Dupilumab",
        summary: "Monoclonal antibodies targeting specific allergic pathways for severe refractory asthma.",
        moa: "**Omalizumab**: Binds free **$IgE$** → prevents mast cell binding.\n**Mepolizumab/Benralizumab**: Anti-**IL-5** (depletes eosinophils).\n**Dupilumab**: Blocks **IL-4R$\alpha$** (inhibits IL-4/IL-13 signaling).",
        use: "**Severe Asthma** uncontrolled by high-dose ICS/LABA.\n**Omalizumab**: Specifically for allergic phenotype with high $IgE$.",
        se: "**Omalizumab**: **Anaphylaxis** (rare; must monitor in clinic).\nInjection site reactions.",
        ci: "Active parasitic (helminthic) infection.",
        pk: "SC injection every 2–4 weeks.\nProteolytic catabolism.",
        pearl: "Omalizumab reduces the **late-phase** allergic reaction by reducing mast cell sensitization."
      },
      {
        name: "Cromolyn Sodium",
        aka: "Cromolyn Sodium · Nedocromil",
        summary: "**Mast Cell Stabilizer** for asthma prophylaxis.\nExtremely safe but inconvenient dosing.",
        moa: "Blocks **Chloride channels** on mast cells → inhibits **Degranulation**.\nPrevents release of histamine, leukotrienes, and interleukins.",
        use: "Prophylaxis for **Exercise-induced bronchospasm** and allergens.\nMastocytosis (oral form).",
        se: "Throat irritation and bad taste.\n**Minimal systemic toxicity** (not absorbed).",
        ci: "Acute asthma attack (not a bronchodilator).",
        pk: "Inhaled; very poor oral bioavailability.\nMust be taken 3–4× daily (QID).",
        pearl: "One of the **safest drugs** in pharmacology; largely replaced by ICS due to dosing frequency."
      }
    ]
  },
  {
    group: "Pulmonary Other",
    drugs: [
      {
        name: "Antihistamines",
        aka: "1st Gen: Diphenhydramine · Chlorpheniramine · Meclizine | 2nd Gen: Loratadine · Cetirizine · Fexofenadine",
        summary: "**$H_1$ Antagonists** used for allergy, motion sickness, and sleep.",
        moa: "Competitive antagonism at **$H_1$ receptors**.\n**1st Gen**: Lipophilic (crosses BBB) + blocks Muscarinic, $\alpha$-1, and Serotonin receptors.\n**2nd Gen**: P-gp substrate (minimal BBB entry) + selective for $H_1$.",
        use: "**2nd Gen**: Allergic rhinitis (preferred — non-sedating).\n**Diphenhydramine**: Acute allergic reactions, sleep aid, EPS reversal.\n**Meclizine**: Motion sickness; Vertigo.",
        se: "**1st Gen**: **Sedation**; **Anticholinergic** (dry mouth, retention, constipation).\n**2nd Gen**: Generally well-tolerated.",
        ci: "**Beers Criteria**: Avoid 1st Gen in elderly (falls/confusion).\nNarrow-angle glaucoma (anticholinergic effect).",
        pk: "1st Gen: Short duration; 2nd Gen: Long-acting ($t_{1/2}$ ~8–14 hr).",
        pearl: "**Diphenhydramine** is the drug of choice for reversing **Acute Dystonia** (EPS)."
      },
      {
        name: "Prostaglandins, Prostacyclin, Bosentan & PDE5 Inhibitors",
        aka: "Epoprostenol · Treprostinil | Bosentan · Ambrisentan | Sildenafil · Tadalafil | Riociguat",
        summary: "Targeted therapies for **Pulmonary Arterial Hypertension (PAH)**.",
        moa: "**Prostacyclins (Epoprostenol)**: $PGI_2$ analogs → ↑ $cAMP$ → Vasodilation.\n**Bosentan**: **Endothelin-1 receptor** antagonist.\n**Sildenafil**: **PDE5 inhibitor** → ↑ $cGMP$.\n**Riociguat**: Directly stimulates **Soluble Guanylate Cyclase**.",
        use: "**Pulmonary Arterial Hypertension**.\nRaynaud Phenomenon.",
        se: "**Epoprostenol**: Flush, jaw pain; **Life-threatening Rebound PAH** if pump stops.\n**Bosentan**: **Hepatotoxicity** (monitor LFTs) and anemia.\n**Sildenafil**: Cyanopsia (blue vision); headache.",
        ci: "**Bosentan**: **Pregnancy** (highly teratogenic).\n**PDE5i + Nitrates**: Severe hypotension.",
        pk: "Epoprostenol: IV continuous infusion ($t_{1/2}$ ~5 min).\nBosentan: Oral twice daily.",
        pearl: "**Bosentan** is an inducer of CYP3A4 and CYP2C9; it reduces the efficacy of oral contraceptives."
      }
    ]
  }
],

onco: [
  {
    group: "Chemotherapy",
    drugs: [
      {
        name: "Antimetabolites",
        aka: "Methotrexate · 5-Fluorouracil (5-FU) · Pemetrexed · Capecitabine",
        summary: "Structural analogs of nucleotides or folate cofactors that disrupt DNA synthesis.\n**Methotrexate** is also a first-line DMARD.",
        moa: "**Methotrexate (MTX)**: Inhibits **Dihydrofolate Reductase (DHFR)** → ↓ $THF$ → ↓ purine/thymidylate synthesis.\n**5-FU**: Inhibits **Thymidylate Synthase** → ↓ $dTMP$.\nReversed by **Leucovorin** (MTX: rescue; 5-FU: potentiation).",
        use: "**MTX**: ALL, Ectopic pregnancy, Rheumatoid Arthritis, Psoriasis.\n**5-FU**: Colorectal, Breast, and Gastric cancers.\n**Capecitabine**: Oral 5-FU prodrug.",
        se: "**MTX**: **Myelosuppression** (Leucovorin rescue); **Hepatotoxicity**; **Pulmonary Fibrosis**; **Stomatitis**.\n**5-FU**: **Hand-Foot Syndrome**; Myelosuppression; GI toxicity.\n**DPD Deficiency** → lethal 5-FU toxicity.",
        ci: "**Pregnancy** (Category X); Severe Renal/Hepatic disease.",
        pk: "MTX is renally eliminated; NSAIDs/Probenecid ↓ clearance → Toxicity.\nLeucovorin is given 24 hr after MTX to rescue normal cells.",
        pearl: "**Leucovorin Rescue**: Provides a source of reduced folate ($N^5$-formyl-$THF$) that bypasses the blocked DHFR enzyme."
      },
      
      {
        name: "Cytarabine, Cladribine & Gemcitabine",
        aka: "Cytarabine (Ara-C) · Cladribine (2-CDA) · Gemcitabine",
        summary: "Nucleoside analogs that inhibit **DNA Polymerase**.\n**Cytarabine** is a mainstay for AML; **Cladribine** for Hairy Cell Leukemia.",
        moa: "Phosphorylated to active triphosphates → competitive inhibition of **DNA Polymerase** → chain termination.\n**Cladribine**: Also inhibits ribonucleotide reductase and causes DNA strand breaks.",
        use: "**Cytarabine**: **AML** (Induction/Consolidation); Non-Hodgkin Lymphoma.\n**Cladribine**: **Hairy Cell Leukemia** (highly curative).\n**Gemcitabine**: Pancreatic, Lung, and Bladder cancers.",
        se: "**Cytarabine**: Profound Myelosuppression; **Cerebellar Toxicity** (ataxia, dysarthria); Conjunctivitis.\n**Cladribine**: Prolonged Lymphopenia (↑ risk of opportunistic infections).",
        ci: "Severe pre-existing bone marrow suppression.",
        pk: "Cytarabine is S-phase specific; often given as continuous infusion.",
        pearl: "**Hairy Cell**: Cladribine is a purine analog resistant to degradation by **adenosine deaminase** (ADA)."
      },
      {
        name: "Hydroxyurea",
        aka: "Hydroxyurea",
        summary: "Inhibits DNA synthesis and induces **Fetal Hemoglobin (HbF)**.\nUsed for Myeloproliferative disorders and **Sickle Cell Disease**.",
        moa: "Inhibits **Ribonucleotide Reductase** → ↓ $dNTP$ production (S-phase specific).\n↑ $HbF$ synthesis via epigenetic mechanisms.",
        use: "**Sickle Cell Disease** (prevents Vaso-occlusive crises).\n**Myeloproliferative Disorders**: Polycythemia Vera, Essential Thrombocythemia, CML.",
        se: "**Myelosuppression** (primary); **Macrocytosis** (↑ MCV); **Leg Ulcers**.\nTeratogenic.",
        ci: "Pregnancy; Severe Neutropenia/Thrombocytopenia.",
        pk: "Excellent oral bioavailability.\nMCV elevation is a reliable marker of patient adherence.",
        pearl: "In **Sickle Cell**, $HbF$ dilutes $HbS$ and interferes with polymerization/sickling."
      },
      {
        name: "Alkylating Agents",
        aka: "Cyclophosphamide · Ifosfamide · Cisplatin · Carboplatin · Busulfan · Dacarbazine",
        summary: "Cross-link DNA to prevent replication. Cell-cycle non-specific.\nHigh risk of secondary malignancies and unique organ toxicities.",
        moa: "**Cyclophosphamide/Ifosfamide**: Attach alkyl groups to Guanine ($N7$) → DNA cross-links.\n**Platinum (Cisplatin)**: Forms intra-strand DNA adducts.",
        use: "**Cyclophosphamide**: Breast cancer, Lymphomas, Lupus Nephritis.\n**Cisplatin**: Testicular, Lung, Bladder, and Ovarian cancers.\n**Busulfan**: CML; BMT conditioning.",
        se: "**Cyclophosphamide**: **Hemorrhagic Cystitis** (via Acrolein; prevent with **Mesna**); SIADH.\n**Cisplatin**: **Nephrotoxicity**; **Ototoxicity**; Severe N/V.\n**Busulfan**: **Pulmonary Fibrosis**; Skin Hyperpigmentation.\n**Nitrosoureas**: CNS toxicity (cross BBB).",
        ci: "Cisplatin: Pre-existing renal failure or hearing loss.\nBusulfan: Severe lung disease.",
        pk: "Cyclophosphamide is a prodrug requiring hepatic activation ($P450$).\nMesna binds acrolein in the bladder to prevent toxicity.",
        pearl: "**Mesna** (2-mercaptoethane sulfonate) provides free thiol groups that neutralize toxic metabolites."
      },
      {
        name: "Microtubule-Targeting Agents",
        aka: "Taxanes (Paclitaxel, Docetaxel) | Vinca Alkaloids (Vincristine, Vinblastine)",
        summary: "Arrest cells in **Mitosis (M-phase)** by targeting Tubulin.\nTaxanes stabilize; Vincas destabilize.",
        moa: "**Taxanes**: Hyper-stabilize polymerized microtubules → prevent depolymerization.\n**Vinca Alkaloids**: Bind $\beta$-tubulin → inhibit polymerization → prevent spindle formation.",
        use: "**Paclitaxel**: Breast and Ovarian cancers.\n**Vincristine**: **ALL**, Hodgkin Lymphoma (MOPP).\n**Vinblastine**: Hodgkin Lymphoma (ABVD), Testicular cancer.",
        se: "**Vincristine**: **Peripheral Neuropathy** (sensorimotor + autonomic); **Constipation/Ileus**.\n**Vinblastine**: **Myelosuppression** ('Blast' the marrow).\n**Taxanes**: Peripheral Neuropathy; Hypersensitivity.",
        ci: "**Vincristine**: **Intrathecal** administration is **FATAL** (IV only).",
        pk: "Vincristine has minimal myelosuppression compared to other vincas.",
        pearl: "**Vincristine constipation** is due to autonomic neuropathy of the enteric nervous system; always give a stimulant laxative."
      },
      {
        name: "Topoisomerase Inhibitors",
        aka: "Topoisomerase I: Irinotecan | Topoisomerase II: Etoposide · Teniposide",
        summary: "Prevent DNA unwinding and religation.\n**Irinotecan** for GI cancers; **Etoposide** for Lung/Testicular.",
        moa: "**Irinotecan**: Inhibits **Topoisomerase I** → single-strand breaks.\n**Etoposide**: Inhibits **Topoisomerase II** → double-strand breaks.",
        use: "**Irinotecan**: Colorectal cancer (FOLFIRI).\n**Etoposide**: Small Cell Lung Cancer (SCLC); Testicular cancer.",
        se: "**Irinotecan**: **Severe Diarrhea** ('I run to the can').\n**Etoposide**: Myelosuppression; Secondary Leukemia ($11q23$ translocations).",
        ci: "Severe bone marrow suppression; $UGT1A1$ polymorphisms (Irinotecan).",
        pk: "Early Irinotecan diarrhea is cholinergic (treat with **Atropine**).\nLate diarrhea is secretory (treat with high-dose **Loperamide**).",
        pearl: "**Secondary AML** following Etoposide has a short latency (2–3 years) and often involves the $MLL$ gene."
      },
      {
        name: "Anthracyclines",
        aka: "Doxorubicin (Adriamycin) · Daunorubicin · Idarubicin",
        summary: "Intercalate DNA and generate **Free Radicals**.\nCornerstone of many regimens; notorious for **Cardiotoxicity**.",
        moa: "(1) Intercalate DNA (2) Inhibit **Topoisomerase II** (3) Generate **Reactive Oxygen Species (ROS)**.",
        use: "Breast cancer, Lymphomas, Sarcomas, AML induction ('7+3').",
        se: "**Dilated Cardiomyopathy** (cumulative dose-dependent; irreversible).\n**Myelosuppression**.\n**Alopecia**.\n**Vesicant**: Severe tissue necrosis if extravasated.",
        ci: "Pre-existing CHF ($EF <50\%$); Prior high-dose anthracycline exposure.",
        pk: "Hepatic metabolism; dose-reduce in liver disease.\nPrevent heart damage with **Dexrazoxane** (iron chelator).",
        pearl: "**Red Urine**: Warn patients that doxorubicin metabolites cause harmless red discoloration of urine/tears."
      },
      {
        name: "Bleomycin",
        aka: "Bleomycin",
        summary: "Free radical generator with unique **Lung** and **Skin** toxicity.\nMinimal bone marrow suppression.",
        moa: "Chelates **$Fe^{2+}$** → generates ROS → causes DNA strand breaks.",
        use: "**Testicular Cancer** (BEP regimen); Hodgkin Lymphoma (ABVD).",
        se: "**Pulmonary Fibrosis** (Dose-limiting); **Flagellate Hyperpigmentation** (skin streaks); Fever.",
        ci: "Pre-existing lung disease; Age $>70$.\n**Caution**: High inspired $O_2$ (FiO$_2$) perioperatively triggers rapid fibrosis.",
        pk: "Renally eliminated; concentrates in the skin and lungs (low bleomycin hydrolase levels).",
        pearl: "Unlike most chemo, Bleomycin does **NOT** cause significant neutropenia."
      },
      {
        name: "Targeted Therapy & Monoclonal Antibodies",
        aka: "Trastuzumab · Rituximab · Bevacizumab · Cetuximab · Checkpoint Inhibitors (Nivolumab, Pembrolizumab)",
        summary: "Block specific tumor receptors or angiogenesis pathways.\nCheckpoint inhibitors 'unmask' tumors to the immune system.",
        moa: "**Trastuzumab**: Anti-**HER2** (ErbB2).\n**Rituximab**: Anti-**CD20** (B-cells).\n**Bevacizumab**: Anti-**VEGF** (blocks angiogenesis).\n**Cetuximab**: Anti-**EGFR** (requires wild-type **KRAS**).",
        use: "**Trastuzumab**: HER2+ Breast/Gastric cancer.\n**Rituximab**: Non-Hodgkin Lymphoma, CLL, RA.\n**Bevacizumab**: Colorectal, Renal Cell, and Lung cancers.\n**Checkpoints**: Melanoma, NSCLC, RCC.",
        se: "**Trastuzumab**: **Cardiotoxicity** (reversible ↓ EF; no ROS).\n**Rituximab**: Infusion reactions; **Hepatitis B Reactivation**.\n**Bevacizumab**: HTN, **Poor Wound Healing**, Bowel Perforation.\n**Checkpoints**: **Immune-Related Adverse Events (irAEs)** (Colitis, Thyroiditis).",
        ci: "Bevacizumab: Within 4 weeks of surgery.\nCetuximab: **KRAS mutations** (ineffective).",
        pk: "Monoclonal antibodies are proteins; IV only; long $t_{1/2}$ (~3 weeks).",
        pearl: "**HER2 Rule**: Trastuzumab cardiotoxicity is reversible and NOT related to free radicals (unlike Anthracyclines)."
      },
      {
        name: "Tyrosine Kinase Inhibitors (TKIs)",
        aka: "Imatinib · Dasatinib · Erlotinib · Sorafenib · Vemurafenib · Ibrutinib",
        summary: "Small molecule inhibitors that block ATP binding to specific oncogenic kinases.\nRevolutionized CML and Lung cancer treatment.",
        moa: "**Imatinib**: Inhibits **BCR-ABL**, **c-KIT**, and **PDGFR**.\n**Erlotinib**: Inhibits **EGFR**.\n**Vemurafenib**: Inhibits **BRAF V600E**.",
        use: "**Imatinib**: **CML** ($Ph^+$); **GIST** ($c-KIT+$).\n**Erlotinib**: EGFR-mutant NSCLC.\n**Vemurafenib**: Metastatic BRAF+ Melanoma.\n**Ibrutinib**: CLL; Mantle Cell Lymphoma.",
        se: "**Imatinib**: **Fluid Retention** (Periorbital edema).\n**Vemurafenib**: Secondary Skin Cancers (SCC/Keratoacanthoma).\n**Sorafenib/Sunitinib**: Hand-Foot Skin Reaction; HTN.",
        ci: "CYP3A4 interactions; Erlotinib: PPI use (↓ absorption).",
        pk: "Oral administration; hepatic metabolism ($P450$).",
        pearl: "**The $T315I$ Mutation**: Causes resistance to most BCR-ABL TKIs; requires Ponatinib."
      }
    ]
  },
  {
    group: "Immunosuppressants",
    drugs: [
      {
        name: "Azathioprine",
        aka: "Azathioprine · 6-Mercaptopurine (6-MP)",
        summary: "Purine analog that inhibits de novo synthesis and lymphocyte proliferation.\nMetabolized by **TPMT**.",
        moa: "Prodrug converted to **6-MP** → converted to active thioguanine nucleotides (**6-TGN**).\nInhibits de novo purine synthesis and incorporates into DNA.",
        use: "Transplant rejection; **Crohn/UC**; Rheumatoid Arthritis.",
        se: "**Myelosuppression** (Check TPMT activity); Hepatotoxicity.\n↑ Risk of SCC of skin and Lymphoma.",
        ci: "**Allopurinol**: (XO inhibition → fatal 6-MP toxicity).",
        pk: "Metabolized by **TPMT** and **Xanthine Oxidase (XO)**.",
        pearl: "**Drug Interaction**: If giving Allopurinol, MUST reduce Azathioprine dose by 75%."
      },
      {
        name: "Hydroxychloroquine",
        aka: "Hydroxychloroquine (Plaquenil)",
        summary: "DMARD and antimalarial that reduces flares and mortality in **SLE**.\nRequires regular eye exams.",
        moa: "Stabilizes lysosomes and ↑ pH → ↓ antigen presentation.\nInhibits **TLR** signaling in endosomes.",
        use: "**SLE** (Universal first-line); RA; Malaria prophylaxis.",
        se: "**Retinopathy** (Irreversible Bull's-eye maculopathy).\nGI upset; Myopathy.",
        ci: "Pre-existing retinal disease; G6PD Deficiency (hemolysis risk).",
        pk: "Extremely long $t_{1/2}$ (~50 days).",
        pearl: "**Monitoring**: Annual ophthalmology exam is mandatory after 5 years of use."
      },
      {
        name: "Mycophenolate Mofetil",
        aka: "Mycophenolate Mofetil (CellCept)",
        summary: "Selective lymphocyte inhibitor for transplant and **Lupus Nephritis**.\nHighly **Teratogenic**.",
        moa: "Inhibits **IMPDH** → ↓ de novo Guanosine synthesis.\nLymphocytes (T/B) lack the salvage pathway → selective inhibition.",
        use: "Transplant rejection; **Lupus Nephritis**; Myasthenia Gravis.",
        se: "**GI Toxicity** (Diarrhea/Pain — most common); Leukopenia; CMV reactivation.",
        ci: "**Pregnancy** (Congenital malformations of ear/face).",
        pk: "Oral and IV; enterohepatic recycling.",
        pearl: "**Selectivity**: Other cells use the salvage pathway (HGPRT) to survive guanosine depletion."
      },
      {
        name: "Cyclosporine & Tacrolimus",
        aka: "Cyclosporine · Tacrolimus (FK506)",
        summary: "**Calcineurin Inhibitors** that block **IL-2** production.\nTacrolimus is the modern standard for solid organ transplant.",
        moa: "Bind immunophilins (Cyclophilin or FKBP-12) → inhibit **Calcineurin**.\n↓ dephosphorylation of **NFAT** → ↓ transcription of **IL-2**.",
        use: "Transplant rejection (kidney, liver, heart); Psoriasis (Cyclosporine).",
        se: "**Both**: **Nephrotoxicity** (Afferent constriction); HTN; Neurotoxicity (Tremor).\n**Cyclosporine**: **Gingival Hyperplasia**; **Hirsutism**.\n**Tacrolimus**: **Diabetes** (Diabetogenic); Alopecia.",
        ci: "Concurrent nephrotoxins (NSAIDs, Aminoglycosides).",
        pk: "**Narrow Therapeutic Index**: Requires Trough Level monitoring; CYP3A4 substrates.",
        pearl: "Nephrotoxicity is the dose-limiting effect for both; monitor Creatinine closely."
      },
      {
        name: "mTOR Inhibitors",
        aka: "Sirolimus (Rapamycin) · Everolimus",
        summary: "Block T-cell activation/proliferation downstream of IL-2.\nUsed for transplant and **Kidney Cancer**.",
        moa: "Bind **FKBP-12** → inhibit **mTORC1**.\nBlocks response to cytokines → cell cycle arrest (G1 $\rightarrow$ S).",
        use: "Transplant (CNI-sparing); Renal Cell Carcinoma (Everolimus); Stent coating.",
        se: "**Impaired Wound Healing**; **Hyperlipidemia**; Myelosuppression.\n**Non-infectious Pneumonitis**.",
        ci: "Early post-op period (risk of wound dehiscence).",
        pk: "Synergistic with Calcineurin Inhibitors but ↑ Nephrotoxicity if combined.",
        pearl: "Unlike Cyclosporine/Tacrolimus, mTOR inhibitors are **NOT** nephrotoxic."
      }
    ]
  }
],
toxicology: [
  {
    group: "Toxicology",
    drugs: [
      {
        name: "Drug Antidotes (High-Yield Pairs)",
        aka: "Flumazenil · Naloxone · N-Acetylcysteine · Atropine · Pralidoxime · Physostigmine · Protamine · Digoxin Fab · Methylene Blue · Hydroxocobalamin · Fomepizole · Glucagon · Deferoxamine",
        summary: "Specific agents to reverse life-threatening poisoning.\nFocus on the mechanism of the toxin and the corresponding antidote.",
        moa: "**Flumazenil**: Competitive **BZD receptor** antagonist.\n**Naloxone**: Competitive **$\mu$-opioid receptor** antagonist.\n**N-Acetylcysteine**: Restores **Glutathione** to neutralize NAPQI.\n**Atropine**: Competitive **Muscarinic** antagonist.\n**Pralidoxime (2-PAM)**: Regenerates **AChE** (must give before aging).\n**Physostigmine**: Reversible **AChE inhibitor** (crosses BBB).\n**Protamine Sulfate**: Ionic binding neutralizes Heparin.\n**Digoxin Fab**: Binds free Digoxin.\n**Methylene Blue**: Reduces $Fe^{3+}$ back to $Fe^{2+}$ (Methemoglobinemia).\n**Hydroxocobalamin**: Binds $CN^-$ to form Cyanocobalamin.\n**Fomepizole**: Inhibits **Alcohol Dehydrogenase**.\n**Glucagon**: ↑ $cAMP$ via non-$\beta$ receptors.\n**Deferoxamine**: Iron chelation.",
        use: "**Flumazenil** $\rightarrow$ Benzo OD (Warning: May precipitate seizures).\n**Naloxone** $\rightarrow$ Opioid OD.\n**Atropine + 2-PAM** $\rightarrow$ Organophosphates.\n**Physostigmine** $\rightarrow$ Anticholinergic syndrome (NOT for TCA toxicity).\n**Fomepizole** $\rightarrow$ Methanol or Ethylene Glycol.\n**Glucagon** $\rightarrow$ $\beta$-blocker or CCB overdose.\n**Chelation** $\rightarrow$ Lead, Arsenic, or Mercury poisoning.",
        se: "**Flumazenil**: Seizures in dependent patients.\n**Physostigmine**: Cholinergic crisis (DUMBBELLS).\n**Methylene Blue**: Hemolysis in **G6PD Deficiency**.\n**Protamine**: Hypotension; anaphylaxis.\n**Hydroxocobalamin**: Red skin/urine discoloration.",
        ci: "**Flumazenil**: TCA overdose (seizure risk).\n**Physostigmine**: Suspected TCA toxicity.\n**Methylene Blue**: G6PD Deficiency.",
        pk: "Flumazenil and Naloxone have short $t_{1/2}$ (~1 hr) and may require redosing or infusion.",
        pearl: "**Glucagon for $\beta$-blockers**: Bypasses the blocked $\beta$-receptor to increase inotropy via its own receptor."
      },
      {
        name: "Acetaminophen Toxicity & N-Acetylcysteine",
        aka: "N-Acetylcysteine (NAC) · Acetaminophen (APAP)",
        summary: "Hepatotoxicity occurs when **NAPQI** overwhelms glutathione.\n**Rumack-Matthew Nomogram** guides treatment timing.",
        moa: "**Acetaminophen**: 5–10% converted by **CYP2E1** to **NAPQI** (toxic electrophile).\n**NAPQI**: Normally detoxified by **Glutathione**; when depleted, it causes **Centrilobular (Zone 3) Necrosis**.\n**NAC**: Provides **Cysteine** to replenish Glutathione synthesis.",
        use: "**Acetaminophen Overdose**: Ideally within 8 hr of ingestion; give even if late.",
        se: "**Anaphylactoid Reaction**: IV NAC can cause flushing/hives (non-IgE; slow infusion).\nNausea/Vomiting (Oral NAC smells like rotten eggs).",
        ci: "No absolute contraindications to NAC treatment.",
        pk: "Rumack-Matthew Nomogram: Start NAC if 4-hr level is $>150 \mu g/mL$.",
        pearl: "**NAC is most effective within 8 hours**, but can be used up to 72 hr post-ingestion to improve hepatic microcirculation."
      },
      {
        name: "Ethanol Metabolism, Disulfiram & Alcohol Antidotes",
        aka: "Disulfiram · Naltrexone · Acamprosate · Fomepizole · Thiamine (B1)",
        summary: "Management of **Alcohol Use Disorder** and metabolic consequences.\n**Thiamine** must be given **BEFORE** Glucose.",
        moa: "**Disulfiram**: Inhibits **Aldehyde Dehydrogenase** $\rightarrow$ **Acetaldehyde** buildup $\rightarrow$ sickness.\n**Naltrexone**: Blocks $\mu$-opioid receptors to ↓ cravings.\n**Fomepizole**: Inhibits **Alcohol Dehydrogenase** to stop toxic metabolite formation.\n**Thiamine**: Essential cofactor for **Transketolase**.",
        use: "**Disulfiram**: Aversion therapy.\n**Naltrexone**: Reduces 'reward' of drinking.\n**Fomepizole**: Methanol (stops blindness) and Ethylene Glycol (stops renal failure).\n**Thiamine**: Prevents **Wernicke Encephalopathy**.",
        se: "**Disulfiram**: Cardiovascular collapse if ethanol is ingested.\n**Thiamine**: Essentially non-toxic.\n**Fomepizole**: Headache; nausea.",
        ci: "**Disulfiram**: Recent alcohol use; Opioid use.\n**Naltrexone**: Active opioid use (precipitates withdrawal).",
        pk: "Disulfiram inhibition is irreversible; effect lasts 1–2 weeks after stopping.",
        pearl: "**Thiamine Rule**: Always give Thiamine before Glucose. Glucose in a B1-deficient patient exhausts remaining stores and triggers Wernicke."
      }
    ]
  }
]; // Closes the toxicology group array

}; // Closes the entire DRUGS object
