// CET-6 词汇阅读 — 文章数据
// 格式：{word} 表示六级核心词汇，渲染时自动标记
const ARTICLES = [
  {
    id: 1,
    title: "The Paradox of Technological Progress",
    source: "",
    date: "",
    theme: "科技与社会",
    wordCount: 350,
    paragraphs: [
      "In an era of {unprecedented} technological advancement, humanity finds itself confronting a profound {dilemma}. While artificial intelligence and automation have {undoubtedly} enhanced productivity, they have simultaneously {exacerbated} social inequalities in ways that were scarcely imaginable a decade ago. The {ubiquitous} presence of smartphones and social media has fundamentally altered how we {perceive} reality and interact with one another.",
      "Scholars have engaged in {rigorous} debates about whether these developments are {intrinsically} beneficial or detrimental to human flourishing. Some {advocate} for a cautious approach, arguing that we must {scrutinize} each innovation before its widespread adoption. The most {plausible} path forward, they contend, involves a {synthesis} of technological progress and ethical consideration.",
      "It is {imperative} that policymakers {formulate} regulations that can {accommodate} the rapid pace of change without stifling innovation. The {consensus} among experts is that {transient} solutions will not {suffice}; rather, a {comprehensive} and long-term strategy is essential. Failure to act decisively could {aggravate} existing tensions and lead to {irreversible} consequences.",
    ]
  },
  {
    id: 2,
    title: "The Fragile Balance of Our Ecosystem",
    source: "",
    date: "",
    theme: "环境与可持续发展",
    wordCount: 350,
    paragraphs: [
      "The {deterioration} of global ecosystems has reached an alarming threshold, prompting scientists to issue increasingly {grim} warnings about the future of our planet. Climate change, driven primarily by human activities, threatens to {disrupt} the delicate equilibrium that has sustained life for {millennia}. The {magnitude} of this crisis demands an equally substantial response.",
      "{Biodiversity} loss is perhaps the most {conspicuous} indicator of environmental decline. Species are going extinct at rates far exceeding natural background levels, a phenomenon that ecologists describe as the sixth mass {extinction}. The {intricate} web of life that evolved over millions of years is being {dismantled} in a matter of decades.",
      "Nevertheless, there are reasons for {cautious} optimism. Renewable energy technologies have become increasingly {viable}, and public awareness of environmental issues has grown {exponentially}. Governments worldwide are beginning to {implement} policies aimed at {mitigating} the worst effects of climate change. The {transition} to a sustainable future is not only {feasible} but {indispensable} for the survival of human civilization.",
    ]
  },
  {
    id: 3,
    title: "The Enduring Value of Liberal Education",
    source: "",
    date: "",
    theme: "教育与个人成长",
    wordCount: 350,
    paragraphs: [
      "In an age increasingly dominated by {utilitarian} considerations, the value of a liberal education is frequently called into question. Critics {contend} that universities should prioritize vocational training over the {contemplation} of literature, philosophy, and the arts. However, this narrow perspective fails to {acknowledge} the {profound} benefits that a well-rounded education {confers} upon individuals and society alike.",
      "The {cultivation} of critical thinking, {empathy}, and intellectual curiosity cannot be {relegated} to the margins of education. These qualities, though difficult to {quantify}, are {indispensable} for navigating the complexities of modern life. A society that {neglects} the humanities risks producing generations of technically {proficient} yet {morally} disoriented citizens.",
      "Education should {transcend} the mere transmission of skills. It should {foster} the capacity for {autonomous} thought, {aesthetic} appreciation, and ethical reasoning. By {integrating} the sciences with the humanities, we can {cultivate} individuals who are not only competent but also {compassionate} and wise — qualities that are essential for the {flourishing} of any democratic society.",
    ]
  },
  {
    id: 4,
    title: "The Dynamics of Global Economic Integration",
    source: "",
    date: "",
    theme: "经济与全球化",
    wordCount: 350,
    paragraphs: [
      "The accelerating pace of globalization has {fundamentally} reshaped the economic {landscape} of nations across the globe. Countries that once maintained {isolated} markets now find themselves {embedded} in a complex web of {reciprocal} trade agreements and financial {obligations}. This integration has generated remarkable {prosperity} in many regions, yet it has also rendered economies {vulnerable} to {successive} waves of {recession} and financial {turmoil}, creating a {chronic} sense of {uncertainty} for businesses and workers alike.",
      "The {imposition} of {tariff} barriers and trade restrictions by major economies has become a subject of {fierce} debate among economists. Some argue that such measures are necessary to protect domestic industries from foreign {monopoly} practices, while others {assert} that they merely serve to {aggravate} international tensions. Small and medium-sized {enterprises}, lacking the {capacity} to {withstand} {prolonged} economic {fluctuation}, often {confront} the greatest challenges during periods of market {instability}.",
      "To {thrive} in this {volatile} environment, governments must {devise} {comprehensive} {fiscal} policies that {allocate} resources {efficiently} and promote {sustainable} growth. The ability to {anticipate} market trends and {adjust} {accordingly} has become an {indispensable} skill for policymakers. International {collaboration} and {compliance} with mutually agreed {regulations} will be {crucial} in building a {resilient} global economy that benefits all {participants}.",
    ]
  },
  {
    id: 5,
    title: "The Resilience Paradox: Understanding Mental Well-being",
    source: "",
    date: "",
    theme: "健康与心理",
    wordCount: 350,
    paragraphs: [
      "In recent decades, the concept of psychological {resilience} has {attracted} {considerable} attention from researchers and clinicians worldwide. Defined as the capacity to {recover} swiftly from adversity, resilience was once {regarded} as an {innate} trait possessed by a fortunate minority. However, {contemporary} studies have shown that it can be {cultivated} through {deliberate} practice and supportive environments. This {revelation} has {profoundly} changed how mental health professionals approach treatment and {prevention}.",
      "The {prevalence} of anxiety disorders and depression in modern society has reached {alarming} levels, {prompting} researchers to {investigate} the {underlying} {mechanisms} of psychological {distress}. {Cognitive} behavioral therapy has {emerged} as an effective {remedy}, helping individuals {identify} and {rectify} {distorted} thinking patterns. Studies {indicate} that {persistent} stress can {impair} immune function, {aggravate} chronic illnesses, and {diminish} overall life satisfaction.",
      "Building mental resilience {necessitates} a {multifaceted} approach that combines physical exercise, social connection, and {mindfulness} practices. The {integration} of these {strategies} into daily routines can {alleviate} the {adverse} effects of stress and {enhance} overall well-being. {Optimism}, while often {dismissed} as mere {sentimentality}, has been {empirically} linked to better health outcomes and greater life {longevity}—a finding that {underscores} the powerful connection between mind and body.",
    ]
  },
  {
    id: 6,
    title: "Cultural Heritage in an Age of Homogenization",
    source: "",
    date: "",
    theme: "文化与传承",
    wordCount: 350,
    paragraphs: [
      "As the forces of globalization continue to reshape societies around the world, the {preservation} of cultural {heritage} has become an increasingly {urgent} {priority}. The {homogenization} of culture—driven largely by mass media and {dominant} global brands—threatens to {obliterate} the unique traditions, languages, and customs that have defined communities for {generations}. This {phenomenon} raises {fundamental} questions about {identity} and belonging in the twenty-first century.",
      "{Indigenous} cultures are particularly {susceptible} to the {erosive} effects of cultural {assimilation}. When younger generations {abandon} their ancestral languages and customs in favor of more globally {prevalent} alternatives, irreplaceable knowledge systems are lost. Efforts to {conserve} linguistic {diversity} have gained {momentum} in recent years, with scholars {advocating} for the {documentation} and {revitalization} of endangered languages before they {vanish}.",
      "The {concept} of cultural {authenticity} is itself {controversial}, as cultures have always {evolved} through contact and exchange. Yet there is a {legitimate} concern that the current pace and {magnitude} of change is {unprecedented}. The {challenge} lies in striking a {delicate} balance between {embracing} global {interconnectivity} and {safeguarding} the cultural {legacy} that {enriches} our shared human experience.",
    ]
  },
  {
    id: 7,
    title: "The AI Jobs Transformation: Promise and Peril",
    source: "The Economist",
    date: "2026/05",
    theme: "科技与经济",
    wordCount: 380,
    paragraphs: [
      "The {advent} of generative artificial intelligence has {ignited} an {unprecedented} debate about the future of employment. When ChatGPT launched in late 2022, {prophets} of doom {forecast} mass {displacement} of knowledge workers — lawyers, accountants, and software engineers alike. Nearly four years later, employment across wealthy nations remains near all-time highs, yet {apprehension} {persists}: seven in ten Americans now believe AI will make it harder to find meaningful work.",
      "Historically, technological revolutions have not reduced {aggregate} demand for human labor. The mechanization of agriculture, the rise of the assembly line, and the {proliferation} of personal computers each {eliminated} specific job categories while creating entirely new industries. The {crucial} question is whether this time is {genuinely} different. Unlike previous innovations that {augmented} physical labor or routine cognitive tasks, generative AI encroaches upon the very {faculties} that have long distinguished human workers — creativity, reasoning, and {linguistic} fluency.",
      "{Advocates} of a {cautious} approach argue that governments must {formulate} policies before {disruption} becomes {irreversible}. Proposals include tax {reforms} that {levy} charges on above-normal corporate profits, public wage insurance modeled on Denmark's {robust} labor-market policies, and citizens' {dividends} drawn from AI-{generated} wealth. The {consensus} among economists is that the time to build safety nets is now — not after the {upheaval} is already {underway}.",
    ]
  },
  {
    id: 8,
    title: "Extreme Heat and Climate Inequality",
    source: "The Guardian",
    date: "2026/05",
    theme: "环境与公共健康",
    wordCount: 380,
    paragraphs: [
      "In May 2026, a {relentless} heat wave {swept} across Europe, {shattering} temperature records that had stood for {centuries}. London {registered} 35.1°C — a figure more typical of midsummer than late spring. France {triggered} its national heatwave warning system in May for the first time since its {inception} in 2004. Spain {endured} temperatures approaching 40°C. UN Climate Chief Simon Stiell described the event as a \"{brutal} reminder of the {spiraling} impacts of the climate crisis.\"",
      "Yet the {burden} of extreme heat is not shared equally. A {landmark} study published in early May found that economic {inequality} contributes to over 100,000 {excess} deaths annually from heat and cold across Europe. Those living in {substandard} housing, lacking access to air conditioning or green spaces, and working in outdoor {occupations} face {disproportionate} risks. The {intersection} of poverty and climate {vulnerability} has become one of the defining public health challenges of our era, {surpassing} even traffic {fatalities} as a cause of preventable death in several European nations.",
      "Meanwhile, atmospheric carbon dioxide {concentrations} at the Mauna Loa {observatory} reached 414.8 parts per million — a year-on-year {surge} of 3.5 ppm, the second-highest annual increase in six decades. A Melbourne-based think tank {issued} a {stark} {verdict}: climate change now {constitutes} a near to mid-term {existential} threat to human civilization. The {imperative} to act has never been more {urgent}, yet the political will to {implement} {drastic} {emission} reductions remains {elusive}.",
    ]
  },
  {
    id: 9,
    title: "The Science of Attention in a Distracted Age",
    source: "Scientific American",
    date: "2026/05",
    theme: "心理学与神经科学",
    wordCount: 380,
    paragraphs: [
      "The {prevailing} narrative of our time is that digital technology has {irreparably} damaged our capacity to {concentrate}. Notifications, {algorithms}, and endless {scrolling} are frequently blamed for what is {perceived} as a {collective} {atrophy} of focus. Yet {emerging} research from {cognitive} neuroscience offers a more {nuanced} and {counterintuitive} picture: our {inherent} capacity for sustained attention may not have {diminished} at all.",
      "A {compelling} body of evidence {suggests} that what has changed is not our brains but our environments. When researchers place {participants} in settings {devoid} of digital {stimuli}, their {neural} markers of attention remain {remarkably} {intact}. The problem, they argue, is not a deficit of ability but a {surplus} of {temptation}. The distinction is {crucial}: if our brains are fundamentally unchanged, then attention is a skill to be reclaimed rather than a {faculty} that has been permanently {eroded}.",
      "{Empirical} studies have identified several {strategies} that can {effectively} restore {cognitive} control. {Deliberate} periods of what researchers call \"stimulus {deprivation}\" — {intervals} without phones, screens, or background noise — have been shown to {enhance} performance on tasks requiring {sustained} focus. {Mindfulness} training, once {dismissed} by {skeptics} as a {transient} {fad}, has {accumulated} {substantial} empirical support. The {implication} is both {humbling} and hopeful: we are not passive victims of our devices but active agents capable of {cultivating} the attention we need — provided we {deliberately} choose to do so.",
    ]
  },

  {
    id: 10,
    title: "The Hidden Proteins Within 'Junk DNA'",
    source: "Nature",
    date: "2026/06",
    theme: "生物医学",
    wordCount: 380,
    paragraphs: [
      "For decades, biologists {dismissed} vast stretches of the human genome as 'junk DNA' — {remnants} of evolutionary history with no {discernible} function. A {landmark} international study published in May 2026 has {overturned} this {assumption}, revealing more than 1,700 previously unknown micro-proteins {concealed} within these {neglected} regions of the genome. The {implication}s for medicine, particularly cancer treatment, are {profound}.",
      "The {consortium}, which included researchers from the Princess Máxima Center for Pediatric Oncology and the University of Michigan, found that over a quarter of these 'dark' DNA regions {nevertheless} produce {genuine} protein-like molecules. These micro-proteins, typically fewer than 50 amino acids in length, appear to play {crucial} roles in cellular function. When the team {deliberately} {suppressed} six key peptides, up to 85% of cancer cells lost {viability} — suggesting {therapeutic} targets that had been {entirely} overlooked.",
      "Perhaps most {intriguing}ly, these micro-proteins can be {presented} on cell surfaces, making them {ideal} candidates for cancer {immunotherapy}. The research team has made all data openly {accessible} to the global scientific community, {accelerating} what could become a {transformative} shift in how we understand the genome. As one researcher {remarked}, 'We have been looking at the genome through a keyhole. This study opens the door.'",
    ]
  },

  {
    id: 11,
    title: "Reviving the Ocean: The Race to Protect 30% of Marine Life",
    source: "National Geographic",
    date: "2026/06",
    theme: "海洋保护",
    wordCount: 380,
    paragraphs: [
      "In May 2026, a new global {initiative} called 'Revive Our Ocean' was {launched} by the NGO Dynamic Planet in {collaboration} with National Geographic Pristine Seas. The {ambitious} goal: help coastal communities {establish} Marine Protected Areas (MPAs) to meet the international '30 by 30' target — {safeguarding} 30% of the world's oceans by 2030. Currently, only 8% of oceans enjoy any form of protection, and experts {estimate} that over 190,000 new MPAs would be required to reach the target.",
      "The initiative focuses on seven {strategic} countries — the UK, Portugal, Greece, Turkey, Mexico, the Philippines, and Indonesia — each facing {distinct} challenges from {overfishing} and climate {degradation}. MPAs are increasingly {framed} not merely as conservation tools but as economic {assets}: well-managed protected areas have been shown to {boost} fish {yields} in adjacent waters and {attract} tourism {revenue}. As National Geographic Explorer-in-Residence Enric Sala {succinctly} put it, 'The worst enemy of fishing is overfishing.'",
      "The timing is {critical}. The UN High Seas Biodiversity Treaty, {negotiated} in 2023, requires 60 national {ratifications} to enter into force; only 21 countries have ratified it so far. Without {swift} action, the {momentum} generated by international {negotiations} risks {dissipating}. The {partnership} between conservation scientists and local communities represents what many regard as the most {viable} path forward — one that {reconciles} the needs of marine {ecosystems} with the {livelihoods} of the people who depend on them.",
    ]
  },

  {
    id: 12,
    title: "The DNA Damage Theory of Aging Gains New Evidence",
    source: "The Atlantic",
    date: "2026/06",
    theme: "健康科学",
    wordCount: 380,
    paragraphs: [
      "The idea that {accumulated} genetic damage drives the aging process was first {proposed} in the 1950s by Manhattan Project physicists who had studied radiation-induced {mutations}. Nearly seven decades later, this {hypothesis} is experiencing a {remarkable} {resurgence}, fueled by advances in CRISPR gene editing and a deeper understanding of {somatic} mutations — DNA errors that {spontaneously} arise in our cells throughout life, {distinct} from those we {inherit}.",
      "A {compelling} case study involves a Tennessee engineer diagnosed with Werner syndrome, a rare {disorder} that causes {accelerated} aging. His {trajectory} — heart attacks in his 30s, death from cancer at 52 — {illustrates} the {devastating} consequences of {impaired} DNA repair. But the {relevance} extends far beyond rare diseases: research now {indicates} that {somatic} mutations {contribute} to heart disease, {autoimmune} conditions, epilepsy, Alzheimer's, and {virtually} every major age-related illness.",
      "The {therapeutic} {implications} are {immense}. Companies like Spellcheck Bio are developing CRISPR-based therapies that can detect and {rectify} mutations as they occur. Meanwhile, biologist Vera Gorbunova studies bowhead whales — the longest-living {mammal}, capable of surviving over 200 years — whose cells {exhibit} {superior} DNA repair {capabilities}. Genflow Biosciences is developing drugs targeting the SIRT6 gene, with a treatment for Werner syndrome under development. Whether these {interventions} can {genuinely} extend human {longevity} remains an open question, but the science is advancing faster than most {skeptics} anticipated.",
    ]
  },

  {
    id: 13,
    title: "Artificial Cells Achieve Asymmetric Division",
    source: "Nature",
    date: "2026/06",
    theme: "合成生物学",
    wordCount: 380,
    paragraphs: [
      "A {breakthrough} in synthetic biology reported in May 2026 has brought scientists {significantly} closer to creating fully {functional} artificial cells. A team led by the Chinese Academy of Sciences' Institute of Chemistry, in {collaboration} with the University of Bristol, successfully {engineered} primitive cell models that can divide {asymmetrically} — producing two daughter structures with {distinct} properties, much like natural cells do during {development} and {differentiation}.",
      "The researchers created {multilamellar} liquid-crystal droplets that, when {exposed} to specific enzymes or metal ions, {spontaneously} split into {offspring} structures with different chemical {compositions}. This {mimics} the fundamental biological process by which a single {fertilized} egg {eventually} gives rise to the hundreds of {diverse} cell types in the human body. The {achievement} addresses a long-standing {obstacle} in synthetic biology: previous artificial cells could divide, but only {symmetrically}, producing identical copies.",
      "The {implications} extend beyond fundamental science. Artificial cells capable of {asymmetric} division could one day serve as {miniature} factories for drug production, {biosensors} for environmental {monitoring}, or vehicles for {targeted} drug {delivery}. The team's next {objective} is to equip these synthetic cells with multi-generational {proliferation} — the ability to divide, and have their daughters divide in turn — and to {integrate} gene expression networks that would allow them to respond to their environment. As one {commentator} {observed}, 'We are witnessing the {transition} from merely observing life to actively constructing it.'",
    ]
  },

  {
    id: 14,
    title: "When Quantum Particles Become Visible to the Naked Eye",
    source: "Nature Physics",
    date: "2026/06",
    theme: "量子物理",
    wordCount: 380,
    paragraphs: [
      "Quantum mechanics has long been {associated} with the {subatomic} realm — electrons, photons, and other particles that exist at scales far below human {perception}. But a team from the University of Vienna and the Max Planck Institute has {shattered} this {conventional} {boundary}, achieving quantum {superposition} with a nanoparticle containing over 7,000 atoms — an object large enough to be {visible} under an electron microscope, {straddling} the line between the quantum and classical worlds.",
      "The experiment involved placing a sodium {nanoparticle} with a mass exceeding 170,000 Daltons into a state where it {simultaneously} occupied two positions {separated} by roughly 20,000 times its own diameter. The {macroscopicity} index — a measure of how 'quantum' a large object behaves — reached 15.5, an order of {magnitude} beyond any previous record. 'We are pushing quantum physics into the {macroscopic} domain,' the lead researcher {remarked}. 'The boundary between the quantum and classical worlds is not as sharp as we once believed.'",
      "The {ramifications} are both {philosophical} and practical. On the {practical} side, such large-scale quantum systems could {dramatically} improve the {sensitivity} of {gravitational} wave detectors, aid in the search for dark matter, and {facilitate} the development of new types of quantum computers. On the {philosophical} side, the experiment {reignites} long-standing debates about the {measurement} problem — the puzzle of how and why quantum {superposition}s give way to the {definite} reality we experience. As objects in superposition grow larger, the question becomes increasingly {urgent}: where, exactly, does the quantum world end and ours begin?",
    ]
  },

  {
    id: 15,
    title: "Atomic Exile Creates Rare Window into Ocean Recovery",
    source: "National Geographic",
    date: "2026/06",
    theme: "生态恢复",
    wordCount: 380,
    paragraphs: [
      "Ujelang Atoll, located over 200 kilometers from the nearest {inhabited} island in the Marshall Islands, has remained {largely} {abandoned} since the 1980s — its {indigenous} population {displaced} by U.S. nuclear testing decades earlier. Today, this {enforced} human absence has {inadvertently} created something of {immense} scientific value: a rare, natural laboratory for studying how marine {ecosystems} recover when left entirely alone.",
      "In May 2026, a National Geographic Pristine Seas {expedition} arrived to conduct one of the most {comprehensive} {ecological} surveys ever {undertaken} in the region. Early findings have been {astonishing}. Seabird populations, once {decimated}, have returned in significant numbers. Rare seagrass beds — among the only ones ever recorded in the Marshall Islands — are {flourishing}. Coral reefs, {buffered} from the pressures of fishing and coastal development, display a {resilience} rarely seen in more {accessible} waters. The atoll, the expedition's lead scientist noted, 'offers a {glimpse} of what the ocean looks like when we step back.'",
      "The research is not merely {academic}. Data collected during the expedition feeds directly into Reimaanlok, the Marshall Islands' national conservation {framework}, which {integrates} modern marine science with traditional {ecological} knowledge. The findings also {contribute} to the global '30 by 30' {initiative}, demonstrating what well-protected marine areas can achieve. Yet the expedition also raises {uncomfortable} questions: if {genuine} recovery requires near-total human withdrawal, how {feasible} is large-scale marine conservation in a world of 8 billion people? The answer, researchers suggest, may lie not in {wholesale} exclusion but in {strategic} protection of the most {critical} habitats.",
    ]
  },

  {
    id: 16,
    title: "The Longevity Industry: Promise, Profit, and Placebo",
    source: "The Atlantic",
    date: "2026/06",
    theme: "社会健康",
    wordCount: 380,
    paragraphs: [
      "By 2030, the global longevity market is {projected} to reach $8 trillion annually — a {staggering} figure that reflects both {genuine} scientific progress and, {according} to critics, a great deal of {exploitation}. An estimated 800 longevity clinics have opened across the United States alone, many charging thousands of dollars per visit for treatments that lack {rigorous} clinical {validation}. The {distinction} between {evidence}-based medicine and {entrepreneurial} hype has become increasingly {blurred}.",
      "The core problem, as {documented} in a February 2026 Atlantic investigation, is a 'decided shortage of placebo-controlled trials' supporting anti-aging claims. Health influencers with {substantial} social media followings promote {supplement}s, diets, and therapies with 'far more confidence than evidence,' the report noted. This has created what one {physician} described as a 'lucrative gray zone' where the {trappings} of medical {authority} — white coats, blood tests, {sophisticated} terminology — {conceal} a fundamental absence of scientific {rigor}.",
      "Yet dismissing the entire field would be equally {misguided}. Legitimate {breakthroughs} in understanding the biology of aging — from {senescent} cell clearance to epigenetic {reprogramming} — are {accumulating} at an {unprecedented} pace. The challenge, experts argue, is to {distinguish} between therapies grounded in {credible} science and those driven primarily by profit. Regulatory {agencies} in both the United States and Europe have begun {drafting} guidelines for longevity-related claims, but enforcement remains {inconsistent}. For now, the most {prudent} advice for consumers echoes an old medical {adage}: 'If it sounds too good to be true, it probably is.'",
    ]
  },

  {
    id: 17,
    title: "Angular Momentum: The Hidden Dance of Crystal Atoms",
    source: "Nature Physics",
    date: "2026/06",
    theme: "材料科学",
    wordCount: 380,
    paragraphs: [
      "For the first time, physicists have directly {observed} and {manipulated} how angular momentum — the {rotational} counterpart of linear momentum — transfers through the atomic lattice of a crystal. The {achievement}, reported in Nature Physics in May 2026 by researchers from the Helmholtz-Zentrum Dresden-Rossendorf and {collaborator}s, opens new {frontiers} in the understanding of magnetism and {quantum} materials, with potential {applications} in future memory devices and information technologies.",
      "The experiment employed {intense} terahertz laser pulses to drive atoms into circular {vibrations} within the crystal structure. What {emerged} was entirely {unexpected}: under certain conditions, the angular momentum transfer {exhibited} a peculiar '1 + 1 = −1' reversal effect, known as an Umklapp process, where the crystal's {symmetry} causes rotational motion to {invert}. 'It's as if two clockwise-spinning dancers {collided} and both began spinning counter-clockwise,' one researcher {analogized}. 'The crystal's internal geometry {dictates} the rules of the dance.'",
      "The {significance} of this discovery extends well beyond {academic} curiosity. Understanding how angular momentum {propagates} through solids is {essential} for developing next-generation {spintronic} devices — electronics that use electron spin rather than charge to store and process information. Such devices {promise} to be faster, denser, and dramatically more energy-efficient than {conventional} silicon-based {components}. The research also sheds light on {fundamental} questions about how {collective} atomic behavior {emerges} from individual particle interactions — a puzzle that lies at the heart of {condensed} matter physics.",
    ]
  },

  {
    id: 18,
    title: "Why a Generation of Students Is Reading Less Deeply",
    source: "The New York Times",
    date: "2026/06",
    theme: "教育趋势",
    wordCount: 380,
    paragraphs: [
      "American students are reading less — and reading less well — than at any point in the past {generation}. Data from the Stanford Educational Opportunity Project, published in May 2026, {revealed} that reading scores have {declined} in 83% of school districts over the past decade. In one-third of districts, students are reading a full grade level below where their {counterpart}s were in 2015. The {phenomenon} is not {confined} to any single demographic or region; it is {pervasive}, cutting across {socioeconomic} and geographic lines.",
      "The causes are {multifaceted} and, to some degree, {contested}. Some researchers point to the {proliferation} of smartphones and the {displacement} of book reading by screen time. A study of 43,000 schools with strict phone bans found {ambiguous} short-term effects — test scores didn't immediately improve, and student {well-being} initially dropped — though researchers {cautioned} against {abandoning} the policy based on short-term data alone. Others {attribute} the decline to shifts in {curriculum}, including the reduced {emphasis} on {sustained} reading of complete texts in favor of short passages and {excerpts}.",
      "Amid the {gloom}, there are {glimmers} of hope. States that have {embraced} the 'science of reading' — a phonics-based approach to literacy — have seen {measurable} improvements, particularly among younger students. And the {backlash} against unproven educational technology is gaining {momentum}: in New York City, a proposed AI-focused high school was {scrapped} in May 2026 after {intense} parent protests, with one {advocate} describing the outrage as 'as great as I've seen on any education issue in 25 years.' The episode suggests that the public may be reaching a {threshold} of {tolerance} for {unproven} technological {interventions} in the classroom — and that meaningful reform, when grounded in evidence rather than hype, can still command broad support.",
    ]
  }
];
