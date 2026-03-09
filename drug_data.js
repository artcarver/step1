// drug_data.js — Step 1 Study Hub
// 149 drugs across 10 categories

/* ── Category metadata ────────────────────────────────────────
   Add or rename categories here — the HTML reads this
   automatically. Order here controls tab order in the UI.
   ──────────────────────────────────────────────────────────── */
const CAT_META = {
  autonomic:      { label: 'Autonomics',      color: '#c4505e', desc: 'Parasympathetic (cholinergic) and sympathetic (adrenergic) drug classes. Master receptor subtypes first — M1/M2/M3, α1/α2, β1/β2 — and the drugs fall into place. High-yield for organ-specific side effects and clinical applications.' },
  cv:             { label: 'Cardio & Renal',  color: '#9e3a5a', desc: 'The most tested drug system on Step 1. Know ACEi/ARBs cold — they appear in HF, HTN, CKD, and post-MI vignettes. Antiarrhythmic classes: think ion channels first, then drugs. Diuretic electrolyte effects are guaranteed questions.' },
  blood:          { label: 'Blood',      color: '#7a3a8a', desc: 'Anticoagulants appear on nearly every Step 1 exam — know reversal agents cold. Heparin-induced thrombocytopenia (HIT) is a classic trap. NSAIDs are the most-prescribed drugs in medicine; their mechanism and GI/renal toxicity are ubiquitous.' },
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
        summary: "IV induction anesthetics — each has a distinct **hemodynamic niche** that determines when to choose one over another.",
        moa: "**Propofol:** potentiates **GABA-A** + inhibits NMDA → CNS depression; also vasodilatory.\n**Etomidate:** potentiates **GABA-A** (steroid analog site) — minimal cardiac/vascular effects.\n**Ketamine:** blocks **NMDA receptors** → dissociative anesthesia; stimulates sympathetic outflow → ↑ HR, BP, bronchodilation.",
        use: "**Propofol:** routine induction/maintenance, ICU sedation, procedural sedation, refractory status epilepticus.\n**Etomidate:** induction in **hemodynamically unstable patients** (cardiogenic shock, trauma, GI bleed).\n**Ketamine:** **bronchospasm or hypotension** (asthma exacerbation, RSI); pediatric procedural sedation; refractory depression (esketamine intranasal).",
        se: "**Propofol:** hypotension (vasodilation), **propofol infusion syndrome** (prolonged high-dose ICU → metabolic acidosis + rhabdomyolysis + cardiac failure), green urine (harmless).\n**Etomidate:** **adrenal suppression** (inhibits 11β-hydroxylase → ↓ cortisol — even single induction dose suppresses 24 hr; avoid in septic shock), myoclonus, nausea.\n**Ketamine:** **emergence reactions** (hallucinations, dissociation — mitigated by benzodiazepine co-administration), ↑ ICP/IOP, ↑ secretions.",
        ci: "Propofol: egg/soy allergy (lipid vehicle). Etomidate: septic shock, adrenal insufficiency. Ketamine: elevated ICP, active psychosis.",
        pk: "Clinical duration of all three determined by **redistribution into fat** (not metabolism).\nPropofol: CYP2B6 + extrahepatic. Etomidate: hepatic esterase. Ketamine: hepatic (CYP3A4/2B6), active norketamine metabolite.",
        pearl: "**Etomidate preserves hemodynamics but suppresses cortisol** via 11β-hydroxylase inhibition — ideal for unstable patients, but even a single dose can suppress HPA axis for 24 hr.\n**Ketamine raises BP and bronchodilates** — the only induction agent of choice in the **hypotensive asthmatic** patient."
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
        aka: "Fluoxetine (Prozac) · Sertraline (Zoloft) · Escitalopram · Paroxetine · Citalopram — SSRIs | Venlafaxine (Effexor) · Duloxetine (Cymbalta) — SNRIs",
        summary: "**First-line antidepressants** — inhibit serotonin (SSRIs) or serotonin + NE (SNRIs) reuptake. Broad utility across depression, anxiety, and pain disorders.",
        moa: "**SSRIs:** inhibit **SERT** → ↑ synaptic 5-HT.\n**SNRIs:** inhibit **SERT + NET** → ↑ 5-HT and NE.\nTherapeutic effects require weeks (receptor downregulation/adaptation); side effects begin immediately.",
        use: "**First-line for MDD, GAD, panic disorder, PTSD, OCD, social anxiety.**\nDuloxetine: diabetic neuropathy, fibromyalgia, chronic MSK pain, stress urinary incontinence.\nFluoxetine: bulimia nervosa, PMDD.\nVenlafaxine: hot flashes in menopause.\nEscitalopram/citalopram: most selective SSRIs (fewest DDIs).",
        se: "**Sexual dysfunction** (most common reason for discontinuation — ↓ libido, anorgasmia).\nGI upset, insomnia, early anxiety.\n**SIADH/hyponatremia** (especially elderly).\n**Serotonin syndrome** (with MAOIs, tramadol, triptans — hyperthermia, clonus, agitation, diarrhea).\n**Discontinuation syndrome** (abrupt stop — 'FINISH': flu-like, insomnia, nausea, imbalance, sensory, hyperarousal); worst with paroxetine (shortest t½), least with fluoxetine.",
        ci: "MAOIs within 14 days (washout required — 14 days; **5 weeks after fluoxetine** before starting MAOI).\nCitalopram/escitalopram: dose-dependent QTc prolongation (dose limit).\nParoxetine: caution in pregnancy (neonatal adaptation syndrome — prefer sertraline).",
        pk: "**Fluoxetine:** t½ ~4–6 days + active norfluoxetine (~1–2 weeks) — self-tapering, minimal discontinuation syndrome; MAOI washout 5 weeks after stopping.\n**Paroxetine:** shortest t½ (~21 hr) — worst discontinuation; potent CYP2D6 inhibitor; most anticholinergic SSRI.\n**Sertraline:** preferred in pregnancy and post-MI.",
        pearl: "**Serotonin syndrome vs. NMS:**\nSerotonin syndrome = hyperreflexia/clonus + tremor + agitation + diarrhea; rapid onset (hours); caused by serotonergic drugs; treat with **cyproheptadine**.\nNMS = lead-pipe rigidity + high fever + hyporeflexia + ↑ CK; gradual onset (days); caused by antipsychotics; treat with **dantrolene + bromocriptine**."
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
        aka: "Valproic Acid (Depakene) · Divalproex (Depakote) · Valproate Sodium (Depacon IV)",
        summary: "**Broadest-spectrum AED** — first-line for absence, myoclonic, and generalized seizures and bipolar mania; most teratogenic AED.",
        moa: "Multiple mechanisms: ↑ **GABA synthesis + ↓ GABA degradation** (inhibits GABA-T) + blocks **voltage-gated Na⁺ channels** + blocks **T-type Ca²⁺ channels** (absence seizures).",
        use: "**Absence seizures** (± ethosuximide); myoclonic seizures; generalized tonic-clonic seizures; **juvenile myoclonic epilepsy** (drug of choice).\n**Bipolar disorder:** mania (faster than lithium).\n**Migraine prophylaxis.**\nStatus epilepticus (IV — second-line).",
        se: "**Hepatotoxicity** (idiosyncratic, potentially fatal — especially children <2 yr with mitochondrial disease — monitor LFTs).\n**Teratogenicity:** **neural tube defects** (1–4% — highest of all AEDs; also cognitive impairment in offspring).\n**Pancreatitis** (rare, serious).\nWeight gain, hair loss (alopecia), tremor, thrombocytopenia.\n**Hyperammonemia** (even without LFT elevation).",
        ci: "**Pregnancy** (highest teratogenic risk of all AEDs — strongly avoid in women of childbearing potential).\nUrea cycle disorders (↑ NH₃ → encephalopathy); hepatic disease; mitochondrial disorders.",
        pk: "Oral or IV; t½ ~9–16 hr; hepatic (glucuronidation + CYP2C9).\n**NOT a CYP inducer** (unlike phenytoin/carbamazepine).\n**Inhibits CYP2C9 and UGT** → ↑ lamotrigine (~2×), ↑ phenobarbital levels.\nHighly protein-bound (90%).",
        pearl: "**Valproate inhibits lamotrigine glucuronidation** — double the lamotrigine level when added to valproate; always halve lamotrigine dose.\n**Most teratogenic AED** — folic acid does NOT reliably prevent NTDs.\n**Carnitine** used to treat valproate-induced hepatotoxicity (valproate depletes carnitine)."
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
        aka: "Carbamazepine (Tegretol) · Oxcarbazepine (Trileptal) · Eslicarbazepine",
        summary: "**Na⁺ channel blocker** — first-line for focal seizures and **trigeminal neuralgia**; notorious for autoinduction and dangerous blood dyscrasias.",
        moa: "Blocks **voltage-gated Na⁺ channels** in the inactivated state → ↓ repetitive neuronal firing.\nAlso useful for mood stabilization (bipolar disorder).",
        use: "Focal (partial) seizures (drug of choice); generalized tonic-clonic seizures.\n**Trigeminal neuralgia:** first-line — dramatically effective.\nBipolar disorder (especially rapid cycling, mixed episodes).\nCentral DI (↑ ADH sensitivity).",
        se: "**Diplopia, ataxia, nausea** (dose-related).\n**Aplastic anemia and agranulocytosis** (rare, potentially fatal — monitor CBC).\n**SIADH/hyponatremia** (↑ ADH sensitivity — especially elderly).\n**SJS/TEN** (↑ risk with **HLA-B*1502** — Han Chinese/Southeast Asians — screen before prescribing).\nTeratogenic (neural tube defects); **autoinduction** (↓ own levels over 3–4 weeks — may need dose increase).",
        ci: "Prior bone marrow suppression; concurrent MAOIs; **HLA-B*1502 positivity** (screen Asian patients); porphyria.",
        pk: "**Induces its own metabolism (autoinduction)** via CYP3A4 → t½ decreases from ~25–65 hr to ~12–17 hr after 3–4 weeks.\nPotent CYP inducer → ↓ OCPs (breakthrough pregnancy), ↓ warfarin, ↓ other AEDs.\n**Oxcarbazepine:** keto-analog with less enzyme induction and fewer DDIs.",
        pearl: "**Carbamazepine = SIADH + aplastic anemia + SJS in Han Chinese + autoinduction.**\nScreen **HLA-B*1502** before prescribing to Southeast Asian/Chinese patients.\n**Autoinduction:** drug induces its own CYP3A4 metabolism — may need to increase dose in first 3–5 weeks to maintain therapeutic levels."
      },
      {
        name: "Lamotrigine",
        aka: "Lamotrigine (Lamictal)",
        summary: "Broad-spectrum Na⁺ channel blocker and glutamate inhibitor — first-line for **bipolar depression** and major AED; SJS risk with rapid titration or valproate co-use.",
        moa: "Blocks **voltage-gated Na⁺ channels** (inactivated state) + inhibits presynaptic **glutamate and aspartate release** → ↓ excitatory neurotransmission.",
        use: "Focal and generalized tonic-clonic seizures; Lennox-Gastaut syndrome.\n**Bipolar I disorder maintenance** — **preferred for bipolar depression** (more effective than lithium for depressive episodes).\nJuvenile myoclonic epilepsy (adjunct); trigeminal neuralgia.",
        se: "**SJS/TEN** (most serious — especially with rapid titration or concurrent valproate which doubles levels — MUST titrate slowly).\nBenign morbilliform rash (~10% — must distinguish from SJS).\nDizziness, diplopia, ataxia, headache.",
        ci: "Rapid dose escalation (major SJS risk factor).\nHistory of lamotrigine-induced SJS/TEN.",
        pk: "Oral; t½ ~25 hr (monotherapy).\n**Valproate inhibits UGT1A4** → ↑ t½ to ~60 hr (halve lamotrigine dose + titrate very slowly when adding valproate).\n**Enzyme inducers** (carbamazepine, phenytoin) → ↓ t½ to ~12 hr (need higher doses).",
        pearl: "**Lamotrigine + valproate interaction:** valproate doubles lamotrigine levels by inhibiting glucuronidation — always halve the dose and use an even slower titration schedule.\n**SJS risk** is the most feared complication of rapid dose escalation — always start low and go slow (25 mg every 2 weeks).\nPreferred AED for bipolar depression — uniquely effective where lithium often falls short."
      },
      {
        name: "Ethosuximide",
        aka: "Ethosuximide (Zarontin)",
        summary: "**T-type Ca²⁺ channel blocker** — drug of choice for **absence seizures only**; has no effect on any other seizure type.",
        moa: "Selectively blocks **T-type (low-threshold) Ca²⁺ channels** in thalamic relay neurons → ↓ 3-Hz spike-and-wave oscillations characteristic of absence seizures.\nNo Na⁺ channel or GABAergic activity.",
        use: "**Childhood absence epilepsy** (drug of choice when no co-existing convulsive seizures).\nValproate preferred when patient also has tonic-clonic seizures (broader spectrum).",
        se: "**GI upset** (nausea, vomiting — most common; take with food).\nDrowsiness, hiccups; blood dyscrasias (CBC monitoring); lupus-like syndrome (rare).",
        ci: "Do NOT use as monotherapy if patient has both absence and tonic-clonic seizures — no protection against convulsive seizures (use valproate instead).",
        pk: "Oral; t½ ~30–60 hr adults, ~30 hr children; hepatic CYP3A4; minimal protein binding.\nValproate ↑ ethosuximide levels (inhibits metabolism).",
        pearl: "**Ethosuximide is the most selective AED** — only T-type Ca²⁺ channels, only absence seizures.\n**Absence seizure** = brief staring, eye blinking, lip smacking, immediate recovery (no postictal phase) — do NOT confuse with complex focal seizures (which have postictal confusion).\n**When both absence and tonic-clonic:** use valproate (covers both)."
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
    group: "Endocrine — Bone / Mineral",
    drugs: [
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
    ]
  },
  {
    group: "Endocrine — Hormones",
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
        name: "Oral Contraceptives & Hormonal Contraception",
        aka: "Combined OCP (Estrogen + Progestin): Lo Loestrin · Ortho Tri-Cyclen · Seasonique | Progestin-only: Norethindrone (Micronor) · Depo-Provera (DMPA) · Nexplanon (implant) | IUD: Mirena (LNG-IUD) | Emergency: Plan B (levonorgestrel) · Ella (ulipristal) · Copper IUD",
        summary: "Hormonal contraceptives prevent ovulation (combined OCP, implant, DMPA), alter cervical mucus/endometrium, or act as spermicides (copper IUD). Non-contraceptive benefits include acne, dysmenorrhea, and PCOS management.",
        moa: "**Combined OCPs:** estrogen + progestin → **negative feedback on hypothalamus/pituitary** → ↓ LH surge + ↓ FSH → prevent ovulation; progestin thickens cervical mucus; thins endometrium (↓ implantation). **Progestin-only (POP/Minipill):** ↓ LH surge + thicken cervical mucus (less ovulation suppression than combined — must take within same 3-hr window daily). **DMPA/implant:** primarily ovulation suppression. **Copper IUD:** Cu²⁺ ions toxic to sperm + ↓ fertilization; can be used for emergency contraception (most effective — up to 5 days after unprotected intercourse)",
        use: "Contraception (primary)\nEndometriosis (suppress lesion stimulation — continuous OCP); dysmenorrhea (↓ prostaglandins)\nPCOS (regulate cycles, ↓ androgens); acne (combined OCP with anti-androgenic progestins — norgestimate, drospirenone)\nPMDD (Yaz — drospirenone); fibrocystic breast disease; ovarian/endometrial cancer prevention\nEmergency contraception (Plan B within 72 hr; copper IUD within 5 days — most effective)",
        se: "**Combined OCP:** VTE/DVT/PE (estrogen → ↑ clotting factors; highest risk with desogestrel/gestodene); hypertension; breakthrough bleeding; nausea; breast tenderness; ↓ libido; depression (progestin-related)\n**DMPA:** ↓ bone mineral density (reversible), menstrual irregularities, weight gain\n**LNG-IUD:** oligomenorrhea\n**Copper IUD:** ↑ menstrual bleeding/cramping",
        ci: "**Smokers ≥35 yr** (↑↑ DVT/MI/stroke)\nPersonal history of VTE, stroke, DVT\n**Migraine with aura** (↑ stroke risk ×3–6)\nEstrogen-dependent cancer; severe hypertension; postpartum <21 days\nHepatocellular adenoma\nProgestin-only: much less restrictive — safe in many OCP-contraindicated patients",
        pk: "Combined OCP: oral daily; ethinyl estradiol hepatic CYP3A4; first-pass effect\n**CYP3A4 inducers** (rifampin, carbamazepine, phenytoin, St. John's Wort) → ↓ OCP efficacy → use backup contraception\nProgestin-only pill: must take within same 3-hr window daily (strict)\nDMPA: IM every 3 months; Nexplanon implant: subdermal, 3 years; LNG-IUD: 5–8 years",
        pearl: "**Rifampin completely destroys OCP efficacy** (potent CYP3A4 inducer — ↓ estrogen/progestin levels >90%) — ALWAYS use a backup method. Among combined OCPs, **drospirenone** has anti-mineralocorticoid activity (slight antihypertensive + anti-edema effect) and anti-androgenic properties — useful in PCOS and acne. **Migraine with aura** is an absolute OCP contraindication because aura represents cortical spreading depression → ↑ stroke risk × 3–6× combined with estrogen."
      },
      {
        name: "Androgens, Anti-Androgens & 5α-Reductase Inhibitors",
        aka: "Androgens: Testosterone · DHEA | Anti-Androgens: Spironolactone · Bicalutamide · Flutamide · Enzalutamide · Cyproterone | 5α-Reductase Inhibitors: Finasteride (Propecia, Proscar) · Dutasteride (Avodart)",
        summary: "Androgens promote male secondary sexual development; anti-androgens and 5α-reductase inhibitors block androgen action for BPH, prostate cancer, PCOS, and transgender hormone therapy.",
        moa: "**Testosterone:** binds **androgen receptor (AR)** → ↑ anabolic protein synthesis, ↑ erythropoiesis, male secondary sexual characteristics. **Anti-androgens** (bicalutamide, enzalutamide): competitive **AR antagonists** → block testosterone/DHT signaling. **5α-Reductase inhibitors:** block **5α-reductase** → ↓ conversion of testosterone → DHT (more potent androgen) → ↓ prostate growth + ↓ scalp DHT → ↓ hair follicle miniaturization",
        use: "**Testosterone:** hypogonadism; gender-affirming therapy (transgender male); delayed puberty; anemia of renal failure\n**Finasteride 5 mg / dutasteride:** BPH (↓ prostate size → ↑ urinary flow)\n**Finasteride 1 mg / dutasteride:** androgenic alopecia\n**Bicalutamide/enzalutamide:** metastatic prostate cancer\n**Spironolactone:** PCOS (hirsutism/acne), transgender female (suppresses androgens)\n**Flutamide:** prostate cancer, PCOS",
        se: "**Testosterone:** erythrocytosis (monitor hematocrit — ↑ DVT/stroke risk), acne, testicular atrophy/oligospermia (↓ FSH/LH by negative feedback), virilization (women), ↑ LDL, prostate stimulation, sleep apnea\n**Finasteride/dutasteride:** sexual dysfunction (↓ libido, ED — may persist after stopping = 'post-finasteride syndrome'); gynecomastia; ↓ PSA ~50% (must double observed PSA for cancer screening); teratogenic (Category X — feminizes male fetus)\n**Anti-androgens:** hot flashes, osteoporosis, gynecomastia; flutamide: hepatotoxicity",
        ci: "Testosterone: prostate/breast cancer, erythrocytosis (Hct >54%), untreated sleep apnea\nFinasteride/dutasteride: women of childbearing age (teratogenic — do not handle crushed tablets), pregnancy\nAnti-androgens: severe hepatic disease (flutamide/bicalutamide)",
        pk: "**Testosterone:** IM (cypionate/enanthate q1–2 weeks), transdermal gel/patch (daily), SC pellets (q3–6 months)\n**Finasteride:** oral, t½ ~5–6 hr, CYP3A4; detectable in semen for months\n**Dutasteride:** oral, t½ ~5 weeks (extremely long; inhibits both type 1 + 2 5α-reductase vs. finasteride type 2 only)\n**Bicalutamide:** oral, t½ ~6 days",
        pearl: "**Finasteride reduces PSA by ~50%** — a patient on finasteride with a PSA of 2 ng/mL should be interpreted as having a PSA equivalent of 4 ng/mL for prostate cancer screening purposes. Failure to account for this correction may miss cancer. **Dutasteride inhibits both isoforms of 5α-reductase** (type 1 in scalp/liver + type 2 in prostate) while finasteride inhibits only type 2 — dutasteride has potentially broader efficacy for hair loss and BPH."
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
      {
        name: "Oxytocin & Tocolytics",
        aka: "Oxytocin (Pitocin) — Uterotonic | Terbutaline · Ritodrine — β2-agonist tocolytics | Indomethacin — COX inhibitor tocolytic | Nifedipine — CCB tocolytic | Magnesium Sulfate — tocolytic/neuroprotection",
        summary: "Uterotonics (oxytocin) stimulate uterine contractions for labor induction and postpartum hemorrhage; tocolytics suppress preterm contractions to delay delivery and allow corticosteroid administration for fetal lung maturity.",
        moa: "**Oxytocin:** binds **oxytocin receptors** (Gq-coupled) on myometrium → ↑ IP3/DAG → ↑ intracellular Ca²⁺ → uterine smooth muscle contraction; also stimulates uterine prostaglandin synthesis. **β2-agonist tocolytics:** activate **β2 receptors** on uterine smooth muscle → ↑ cAMP → relax myometrium → suppress contractions. **Indomethacin:** inhibit COX → ↓ prostaglandins → ↓ uterine contractility. **Nifedipine:** block L-type Ca²⁺ channels → ↓ myometrial Ca²⁺ → ↓ contractions. **Magnesium sulfate:** Ca²⁺ antagonism → ↓ myometrial excitability + **fetal neuroprotection** (↓ cerebral palsy risk in preterm < 32 weeks)",
        use: "**Oxytocin:** labor induction/augmentation; PPH prevention/treatment (after delivery); incomplete/missed abortion\n**Terbutaline (β2-agonist):** acute tocolysis (single-dose SC — not chronic oral)\n**Indomethacin:** tocolysis (most effective; short-term <32 weeks — ductal closure risk limits use)\n**Nifedipine:** preferred oral tocolytic\n**Magnesium sulfate:** tocolysis (≤48 hr to allow corticosteroid administration) + fetal neuroprotection at <32 weeks",
        se: "**Oxytocin:** antidiuretic effect at high doses (V2-like → hyponatremia with excess IV fluids); uterine hyperstimulation (fetal distress/rupture); hypotension (IV bolus)\n**β2-tocolytics:** maternal tachycardia, hyperglycemia, hypokalemia, pulmonary edema\n**Indomethacin:** premature closure of ductus arteriosus (↓ PGE₂ — avoid >32 weeks; limit to 48 hr), oligohydramnios\n**Nifedipine:** maternal hypotension, headache\n**Magnesium:** respiratory depression, ↓ DTRs",
        ci: "Oxytocin: unfavorable fetal position, prior classical uterine incision, active genital herpes\nβ2-tocolytics: diabetes, cardiac disease\nIndomethacin: >32 weeks, renal disease, oligohydramnios\nMagnesium tocolysis: myasthenia gravis (NMJ blockade)",
        pk: "**Oxytocin:** IV infusion (titrated); t½ ~1–6 min; hepatic/renal inactivation\n**Terbutaline:** SC for acute tocolysis; oral avoided (FDA warning)\n**Indomethacin:** oral/rectal, onset ~30 min\n**Nifedipine:** oral immediate release; t½ ~2 hr\n**Magnesium:** IV loading dose (4–6 g over 20 min) → maintenance infusion; renal excretion",
        pearl: "**Oxytocin is structurally related to vasopressin (ADH)** — at high doses/infusion rates, it binds V2 receptors → antidiuretic effect → free water retention → dilutional hyponatremia. Always monitor fluid balance and Na⁺ with prolonged oxytocin infusions. **Indomethacin is the most effective tocolytic** but the ductus arteriosus risk limits use to <32 weeks and short courses — consider serial fetal echocardiography for DA flow during treatment."
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
        name: "Prostaglandins, Prostacyclin, Bosentan & PDE5 Inhibitors",
        aka: "Epoprostenol (Flolan) · Treprostinil · Iloprost — Prostacyclin analogs | Bosentan (Tracleer) · Ambrisentan · Macitentan — Endothelin receptor antagonists | Sildenafil (Revatio) · Tadalafil — PDE5 inhibitors for PAH | Riociguat — sGC stimulator",
        summary: "Pulmonary arterial hypertension (PAH)-specific therapies that vasodilate and remodel the pulmonary vasculature. Prostacyclins, endothelin antagonists, and PDE5 inhibitors target distinct pathways and are often used in combination.",
        moa: "**Epoprostenol/prostacyclin analogs:** activate **IP receptor (Gs-coupled)** → ↑ cAMP → ↓ smooth muscle contraction + ↓ platelet aggregation + anti-proliferative (↓ vascular remodeling). **Bosentan/endothelin antagonists:** competitive antagonism at **ETA + ETB receptors** → ↓ endothelin-1-mediated vasoconstriction and proliferation. **Sildenafil/tadalafil:** inhibit **PDE5 (cGMP-specific phosphodiesterase)** in pulmonary vasculature → ↑ cGMP → ↓ smooth muscle contraction (same as nitrate mechanism; potentiates NO). **Riociguat:** directly stimulates **soluble guanylate cyclase (sGC)** → ↑ cGMP (complements NO)",
        use: "**Epoprostenol:** severe PAH (IV continuous infusion — most effective; bridges to lung transplant)\n**Treprostinil/iloprost:** less severe PAH (SC or inhaled)\n**Bosentan/ambrisentan:** oral PAH\n**Sildenafil/tadalafil (Revatio):** oral PAH\n**Riociguat:** PAH + chronic thromboembolic pulmonary hypertension (CTEPH — WHO Group 4; only PAH drug approved for CTEPH)\nProstacyclin analogs + sildenafil: Raynaud phenomenon, digital ischemia",
        se: "**Epoprostenol:** hypotension, headache, flushing, jaw pain, diarrhea; **life-threatening rebound PAH if infusion abruptly stopped** (must never interrupt — permanent catheter); sepsis risk (catheter)\n**Bosentan:** hepatotoxicity (monitor LFTs monthly); teratogenic (Category X — monthly pregnancy tests + REMS; interferes with OCP)\n**Sildenafil:** headache, flushing, visual disturbances, hypotension, priapism\n**Riociguat:** absolute CI with PDE5 inhibitors and nitrates (↑↑ cGMP → severe hypotension)",
        ci: "Bosentan: pregnancy (Category X); severe hepatic impairment\nSildenafil/tadalafil: concurrent nitrates (severe hypotension); severe hypotension\nRiociguat: concurrent PDE5 inhibitors (absolute CI — severe hypotension); pregnancy\nEpoprostenol: severe pulmonary veno-occlusive disease (↑ pulmonary edema)",
        pk: "**Epoprostenol:** IV only, t½ ~3–6 min (continuous infusion required — interruption → rapid PAH rebound)\n**Treprostinil:** IV/SC/inhaled, t½ ~4 hr\n**Bosentan:** oral, t½ ~5 hr, CYP2C9/3A4 substrate and inducer (↓ OCP, ↓ cyclosporine)\n**Sildenafil (Revatio):** oral 3× daily (PAH); t½ ~4 hr; CYP3A4\n**Riociguat:** oral 3× daily; CYP1A2/3A4",
        pearl: "**Epoprostenol IV must NEVER be abruptly discontinued** — the half-life of ~3 minutes means the pump cannot be stopped without causing immediate severe rebound PAH and potentially fatal right heart failure. These patients require special alert bracelets and emergency protocols. **Riociguat + PDE5 inhibitors is an absolute contraindication** (both ↑ cGMP → catastrophic hypotension) — switch completely, never combine."
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
