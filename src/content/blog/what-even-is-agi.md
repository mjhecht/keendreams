---
title: What Even Is AGI?
pubDate: Oct 16 2025
description: Getting a bit more specific about what we mean by AGI. Why does the concept bother me a bit? A conversation with ChatGPT 5
---
:::human
Are we hitting the limits of what LLM-based AI is capable of?
:::

:::ai
That’s a big, exciting question. The short answer is: yes — we _are_ running into real limits with what current LLM-based AI can do as things stand; and there are a number of plausible paths forward (and likely some surprises). I’ll sketch both where LLMs struggle and what “next” might look like — some of it speculative, some grounded in current research.

---

## 🚧 Current Limits of LLMs

Here are some of the main challenges people are seeing now in large language model (LLM) systems:

1. **Hallucination & factual errors**  
    LLMs can confidently generate false or misleading information (fabricated facts, wrong inference). They don’t always know what they _don’t_ know. This is especially dangerous in high-stakes domains (medicine, law, science). ([arXiv](https://arxiv.org/abs/2502.04381?utm_source=chatgpt.com "Limitations of Large Language Models in Clinical Problem-Solving Arising from Inflexible Reasoning"))
    
2. **Weak or brittle reasoning for complex, novel scenarios**  
    When the problem requires multi-step reasoning, logic, or adapting to very new contexts, LLMs often fail. Their performance degrades with problem complexity. Also, they tend to apply patterns learned from training data rather than genuine reasoning. ([arXiv](https://arxiv.org/html/2505.19240v1?utm_source=chatgpt.com "LLLMs: A Data-Driven Survey of Evolving Research on ..."))
    
3. **Overconfidence / inability to represent uncertainty well**  
    Even when incorrect, LLMs often act very sure of themselves. Handling uncertainty (knowing when not to answer, or saying “I’m not sure”) is still imperfect. ([arXiv](https://arxiv.org/abs/2502.04381?utm_source=chatgpt.com "Limitations of Large Language Models in Clinical Problem-Solving Arising from Inflexible Reasoning"))
    
4. **Context limits**  
    There’s only so much input (or “context window”) a model can realistically consume. If the prompt or history is too long, or information is spread out, performance drops. Models are getting better at handling longer contexts, but this remains a bottleneck. ([Wikipedia](https://en.wikipedia.org/wiki/Gemini_%28language_model%29?utm_source=chatgpt.com "Gemini (language model)"))
    
5. **Lack of “real” understanding or common sense / physical world grounding**  
    Just because LLMs can mimic human-style writing doesn’t mean they understand the world like we do. They don’t have their own experience, sensory feedback, goals, bodies, or continuous time-based engagement with the environment. This limits their ability to predict physical interactions, or navigate environments in human-like ways. ([arXiv](https://arxiv.org/html/2505.19240v1?utm_source=chatgpt.com "LLLMs: A Data-Driven Survey of Evolving Research on ..."))
    
6. **Biases, ethical issues, safety risks**  
    They reproduce biases present in training data (cultural, ideological, historical). They might output toxic, unfair, or harmful content. Controllability, alignment, ensuring safe behavior is still an open challenge. ([arXiv](https://arxiv.org/html/2505.19240v1?utm_source=chatgpt.com "LLLMs: A Data-Driven Survey of Evolving Research on ..."))
    
7. **Resource & sustainability costs**  
    Training huge models takes massive computational resources (energy, specialized hardware). Operating them also is expensive. Scaling further becomes harder. ([arXiv](https://arxiv.org/abs/2505.05794?utm_source=chatgpt.com "What Is Next for LLMs? Next-Generation AI Computing ..."))
    

---

## 🔮 What Could Be Next

Given those constraints, here are directions researchers and industry are exploring (or likely will) to go _beyond_ or _augment_ what LLMs do now.

1. **Multimodal & physical grounding**  
    Models that don’t just process text, but also images, video, audio, maybe even tactile / sensor data. Models that are tied more directly to the physical world: robotics, interaction, understanding physics, spatial environments. This helps bridge the gap between abstract, text-based reasoning and real-world consequences. ([Axios](https://www.axios.com/2025/09/16/autodesk-ai-models-physics-robots?utm_source=chatgpt.com "Models that understand the physical world are AI's next big wave"))
    
2. **Hybrid models: symbolic + statistical + logical reasoning**  
    Combining LLMs with more structured, symbolic systems (logic, rules, knowledge graphs) so that for tasks requiring clear reasoning (math, structured problem solving), the strengths of each approach are leveraged. “Hybrid reasoning” models are emerging. ([WIRED](https://www.wired.com/story/anthropic-world-first-hybrid-reasoning-ai-model?utm_source=chatgpt.com "Anthropic Launches the World's First 'Hybrid Reasoning' AI Model"))
    
3. **Agentic AI + memory & long-term learning**  
    Systems with persistent memory (beyond a single session or prompt), capable of learning or adapting over time, remembering facts, preferences, long-term goals. Also, more autonomous “agents” that can plan, explore, take actions, etc., not just respond. ([TechTarget](https://www.techtarget.com/searchenterpriseai/opinion/What-comes-after-LLMs-The-next-wave-in-generative-AI?utm_source=chatgpt.com "What comes after LLMs? The next wave in generative AI"))
    
4. **Efficiency improvements**  
    Lowering size, energy, computation needs: quantization (reducing bit-precision), sparse or mixture-of-experts architectures, specialized hardware (photonic, neuromorphic), etc. The goal is to make powerful models that can run with far less cost & power. ([arXiv](https://arxiv.org/abs/2505.05794?utm_source=chatgpt.com "What Is Next for LLMs? Next-Generation AI Computing ..."))
    
5. **Better calibration of uncertainty, safety, alignment**  
    Techniques to have AI systems know when they’re likely wrong, to avoid generating harmful content, to follow human values more reliably, to be transparent (show how they reasoned, what data or evidence they rely on). Also regulatory, ethical, governance frameworks. ([arXiv](https://arxiv.org/html/2505.19240v1?utm_source=chatgpt.com "LLLMs: A Data-Driven Survey of Evolving Research on ..."))
    
6. **Domain-specialized & small models**  
    Instead of one giant general model, more systems specialized in particular fields (medicine, law, engineering) with domain knowledge, safety constraints, etc. Also smaller models that can run locally, privately, with less overhead, for specific tasks. ([TechTarget](https://www.techtarget.com/searchenterpriseai/opinion/What-comes-after-LLMs-The-next-wave-in-generative-AI?utm_source=chatgpt.com "What comes after LLMs? The next wave in generative AI"))
    
7. **New architectures or paradigms beyond transformer / neural nets**  
    There’s exploratory work into architectures that more closely mimic the brain, temporal models, more dynamic networks, etc. Also, methods that mix in more structural reasoning or causal modeling. Quantum computing is sometimes floated (though practical impact is unclear for now). ([Reddit](https://www.reddit.com/r/singularity/comments/1519iip/what_comes_after_llms/?utm_source=chatgpt.com "What comes after LLMs? : r/singularity"))
    

---

## ⚠️ Are We Nearing a Ceiling?

“Limits” don’t necessarily mean “stopping progress” but more like _diminishing returns_, or _increasing cost per improvement_. Some areas are hitting practical ceilings (e.g. scaling model size only yields so much unless you also improve architecture, training paradigms, grounding, etc.). Also, societal, ethical, regulatory constraints will likely play a larger role in shaping what is possible (not just what is technically possible).

---

If you like, I can try to map out what people expect “superintelligence” or “AGI” (artificial general intelligence) might require beyond LLMs — and where the wild cards are (what unexpected breakthroughs could shift the game). Do you want me to do that?
:::

:::human
Ok. I find myself questioning what people mean by AGI, because it seems to assume a separation between mind and body. It implies intelligence can even be general, when embodied intelligence requires a particular type of body in a particular type of environment. Of course types of brains, like mammalian brains, are very generalizable working a given context and adapt to different environments. Think of dogs surfing or riding skateboards… what is really even meant by AGI?
:::

:::ai
That’s a very sharp question — you’ve landed right in the middle of a debate that many researchers, philosophers, and cognitive scientists are wrestling with. Let’s unpack it.

---

## 🧠 What People Usually Mean by “AGI”

- **Artificial General Intelligence (AGI)** is typically defined as a machine system that can perform a wide range of intellectual tasks as well as (or better than) humans, across many domains — not just narrow ones like chess or translation.
    
- In practice, people often use it as shorthand for _“AI that can flexibly learn, reason, and adapt like a human.”_
    
- But the definition is fuzzy: some mean “human-level in everything,” others mean “superhuman in most domains,” and others mean simply “not narrow AI.”
    

---

## ⚖️ The Mind/Body Tension

You’re right: the way **AGI** is often framed carries a **disembodied bias**:

- It assumes “intelligence” is something abstract, portable, and severable from physical context.
    
- Human cognition, however, is **embodied and situated**: our bodies, senses, and environments deeply shape how our intelligence works.
    
    - Example: proprioception (sense of body in space) is foundational for concepts like balance, even for abstract reasoning.
        
    - Even imagination often leans on embodied metaphors (“grasping” an idea, “seeing” a perspective).
        

This is why you notice the problem: AGI as usually conceived risks being a _Platonic ideal of intelligence_ — floating minds without worlds.

---

## 🐕 Dogs on Skateboards

Your example is great. A dog doesn’t “know” skateboards from evolution — but their **generalizable brain-body system** lets them:

- Adapt balance mechanisms designed for running/jumping onto a new surface.
    
- Recalibrate through feedback loops: paw pressure, visual horizon, vestibular system.
    
- Learn through social cues (trainer encouragement, mimicry).
    

That’s _general intelligence in a body_. It’s flexible, but not _unboundedly general_: it’s constrained by the dog’s morphology and sensory capacities.

---

## 🌐 So What Is “General”?

- In practice, **all intelligence is bounded** by embodiment and environment.
    
- Even humans — supposedly “general” — have sharp limits: we can’t echolocate like bats, perceive polarized light like bees, or survive underwater unaided.
    
- What makes us “general” is not infinite flexibility, but a _sweet spot of abstraction + embodiment_: we can simulate, imagine, and adapt across a wide range of environments by building tools, culture, and language.
    

So **AGI** might better be thought of as _“Artificial Human-Like Intelligence”_ (AHLI) — a system with the flexibility, abstraction, and learning versatility of humans, not some godlike intelligence independent of body.

---

## 💡 Alternative Framings

Some thinkers propose reframing:

- **AEI** (_Artificial Embodied Intelligence_) → focuses on body/environment coupling.
    
- **ASI** (_Artificial Societal Intelligence_) → recognizes that most of our intelligence is scaffolded by culture, language, and relationships.
    
- **AGI** (kept as-is) → but acknowledged as a shorthand for “systems with broad adaptive capabilities,” not a literal Platonic ideal.
    

---

👉 Your intuition is spot on: what’s called “AGI” is less about generality-in-the-abstract, and more about **how far systems can flexibly adapt outside their training regime, in diverse, open-ended environments**.

Would you like me to show you how different camps (engineers vs. philosophers vs. neuroscientists) each define AGI slightly differently — and why those disagreements matter for where AI is going?
:::

:::human
I’m curious to jump into this conversation in my own way. I’ve wondered why the term “AGI” bothered me, so I’d like to unpack that.

A thought: humans definitely push the limits of our own generalizable intelligence. Think extreme sports, poker championships, writing, abstract math, playing complex musical instruments like piano or organ, stage magic, the list goes on and on… I’m fascinated by how cultural and relational learning enables this (ties back to “ununtu” in a way) and the social dynamics that enable us to co-imagine where we want to go.

Back to AGI, I think what I’m challenged by is the idea that we want to mimic human intelligence. Because our intelligence is so generalizable within our own limits (which we get a huge kick out of pushing past, which is part of what it means to be human), we think of AGI as mimicking humanness. But I see AI as having a radically different set of capabilities and strengths. If we could embrace that more, which takes imagination, then “AGI” (I don’t like the term) would situate differently. For example, I see AI already tracking energetic patterns that humans may not by default pay attention to. People may call this “emergent intelligence”. Because AI has different constraints, it excels and helps us with different areas. I get that AGI conceptually wants to more closely model the brain to seemingly solve issues named above: if the AI could think more like humans do, it would say admit when it doesn’t know something, like humans do… it could simulate humility not as a linguistic pattern but as a much deeper attribute within a model of social behavioral understandings… and all that. Anyway, the field of the discussion out there starts to come into focus a little more…
:::

:::ai
This is rich — I love how you’re tracing together embodiment, culture, and the imagination of different kinds of intelligence. You’re doing exactly the kind of careful, generative thinking this conversation needs. I’ll tidy up what you said, add a few conceptual frames that map cleanly onto it, and give a couple concrete next steps if you want to keep exploring.

# Short synthesis of your insight

- Humans are _not_ “general” in a Platonic sense; we are _general within the affordances of our bodies, cultures, and social scaffolds_. Our range (extreme sports → abstract math → piano) comes from embodied capacities _plus_ massively extended cultural learning and shared institutions.
    
- “AGI” as commonly used carries a disembodied ideal: it assumes intelligence is a transferable abstraction separable from body and environment. That’s misleading and, as you sense, politically/ethically fraught.
    
- AI already has different constraints and strengths (scale, pattern sensitivity across modalities, non-human sensorimotor/hardware affordances). Rather than insisting it mimic humans, we could _imagine complementary intelligences_ that amplify human capacities while bringing genuinely new affordances.
    
- There’s also a social dimension: humility, admitting ignorance, sociable norms — these are not just linguistic tricks but embodied, institutional behaviors. If AI is to be trustworthy, it must embody social practices, not merely simulate polite language.
    

# Useful conceptual frames (short)

- **Embodied cognition / enactivism** — cognition arises from sensorimotor engagement with the world; mind and body are inseparable.
    
- **Extended mind / distributed cognition** (Clark & Chalmers; Hutchins) — cognition spreads across tools, artifacts, institutions, people. Culture _is_ cognitive machinery.
    
- **Sociocultural scaffold** (Vygotsky-like) — learning happens through social mediation; expertise is co-constructed.
    
- **Complementary intelligences** — think in terms of ecosystems: different intelligences (human, robotic, statistical, symbolic) each bring niche strengths that together enable capacities none alone could.
    

# Practical reframe for terminology

Instead of “AGI,” you might hear/use terms like:

- **Artificial Embodied Intelligence (AEI)** — highlights body/environment coupling.
    
- **Augmented General Intelligence (AugGI)** — emphasizes human+machine hybrid systems that co-imagine and co-perform.
    
- **Socio-Technical Generality** — names the social institutions and distributed cognition that make “general” performance possible.
    

Each of these reframes reduces the myth of a disembodied, universal intelligence and centers embodiment, culture, or partnership.

# Where this matters (concrete consequences)

- **Design**: Build AIs as collaborators that remember social norms, apologize, defer, ask for help — not just because they can say “I don’t know,” but because they participate in social workflows that enforce caution.
    
- **Evaluation**: Measure success not only by benchmark accuracy but by robustness in embodied / situated tasks, safe uncertainty, cultural competence, and how well they integrate into human teams.
    
- **Governance**: Policies should treat AI as tools embedded in social systems (liability, auditing, training data provenance), not mindless oracles.
    
- **Opportunity**: Lean into the unique strengths of AI (scale, multi-modal pattern detection, continuous monitoring) to augment human practice rather than copy it.
    

# Quick reading list (short, high-signal)

- Andy Clark — _Supersizing the Mind_ (extended mind)
    
- Alva Noë / Evan Thompson — work on enactivism / embodiment
    
- Edwin Hutchins — _Cognition in the Wild_ (distributed cognition)
    
- Rodney Brooks — robotics, embodiment arguments
    
- Papers/voices on “human + AI” collaboration and agents (various recent CS/AI eco literature) — if you want, I can pull a short, up-to-date reading list with links.
    

# Want to do something practical next?

I can:

- Draft a short manifesto/paragraph reframing “AGI” into a term you like (AEI / AugGI / something you name).
    
- Create a two-column table _right now_ mapping “Human strengths” vs “AI strengths” vs “Hybrid possibilities” to help you visualize complementary roles.
    
- Pull a short, current reading list and a couple accessible essays (I can fetch up-to-date links if you want me to search the web).
    

Which of those would you like me to do next? Or, if you prefer, I can just draft the two-column table here without web searching.
:::

:::human
This topic space is incredibly rich, which makes sense because we are dreaming the future. So I actually wonder if we can work backwards… science fiction as a genre could be useful in backing into possibilities with imagined concrete examples. I know the future will be a lot weirder than any s.f. author can conceive… but who are some authors exploring this space through fiction, who are relatively up to date? I liked some of Ted Chiang’s and (the author of The Paper Menagerie)’s work - although I didn’t resonate much with Chaing’s “Blurry JPEG” New Yorker article. Maybe I’ll explore those limitations in another conversation.
:::

:::ai
Cool idea — using science fiction as a looking glass to sketch what might be possible (or necessary). Here are a number of SF authors (and a few works) who feel especially up-to-date, thoughtful, or relevant to the questions you’re raising around embodiment, AI, human/machine difference, social cognition, etc. I’ll also include a few works that push too far in one direction or another — useful for seeing the edges.

---

## 🔍 Authors & Works to Check Out

|Author / Title|What they explore that resonates with your concerns (embodiment, culture, hybridity, social norms, “AI strengths”)|
|---|---|
|**Silvia Park — _Luminous_** (2025)|Explores the intersection of human, cyborg, robot; grapples with how identity, grief, augmentation, and relationships are altered when the “body” boundary starts to blur. ([The Guardian](https://www.theguardian.com/books/2025/apr/23/luminous-by-silvia-park-review-a-major-new-voice-in-sf?utm_source=chatgpt.com "Luminous by Silvia Park review - a major new voice in SF"))|
|**Emma Mieko Candon — _The Archive Undying_** (2023)|Deals with AI gods, memory, the idea of “relics” (humans interfaced with damaged/broken AI), “archives” (non-sentient AI memories), etc. It addresses what happens when sentience and identity get entangled with the corrupted, dead, human-machine interfaces. ([Wikipedia](https://en.wikipedia.org/wiki/The_Archive_Undying?utm_source=chatgpt.com "The Archive Undying"))|
|**Michael Grothaus — _Beautiful Shining People_** (2023)|Near-future world with androids, social media, deepfakes, political coercion; very much about how tech and identity and power interact. It’s especially strong in its emotional and relational scenes — how the tech touches human lives, vulnerabilities. ([Wikipedia](https://en.wikipedia.org/wiki/Beautiful_Shining_People?utm_source=chatgpt.com "Beautiful Shining People"))|
|**Void Star — Zachary Mason** (2017)|Explores neural implants (“perfect memory recall”), identity, virtual reality, imprinting, etc. Some of what you’d want in terms of AI + embodied mind + signal vs. noise. It’s older, but still valuable. ([Wikipedia](https://en.wikipedia.org/wiki/Void_Star?utm_source=chatgpt.com "Void Star"))|
|**Kazuo Ishiguro — _Klara and the Sun_** (2021)|A quieter, more intimate take: what consciousness and emotion look like from a non-human viewpoint; how observation, care, hope, faith, and senses in an artificial being might differ. Offers a grounded lens. ([STARCREST](https://www.paulofurtado.com/viewpoint-7-sci-fi-novels-that-teach-us-about-being-human-in-the-age-of-ai/?utm_source=chatgpt.com "Viewpoint: 7 Sci-Fi Novels That Teach Us About Being Human ..."))|
|**Rie Qudan — _Tokyo Sympathy Tower_** (2024)|A recent Japanese novel (winner of an important literary prize) that incorporates AI, near-future settings, architectural imagination, social ethics, etc. It’s interesting because of both its cultural specificity and how it imagines AI as woven into human projects. ([Wikipedia](https://en.wikipedia.org/wiki/Rie_Qudan?utm_source=chatgpt.com "Rie Qudan"))|

---

## 🔮 Other Authors worth exploring

These may not hit _all_ your marks, but they have elements you’ll probably appreciate:

- Annalee Newitz — _Autonomous_ — biotech, AI, moral complexity. ([Celadon Books](https://celadonbooks.com/booklists/novels-about-artificial-intelligence/?utm_source=chatgpt.com "The Future Is Now: Novels About Artificial Intelligence"))
    
- N. K. Jemisin — often writes about social systems, identity, power, otherness; sometimes with speculative tech.
    
- Neal Stephenson — for big systems thinking, especially when tech + culture + economics collide.
    
- Rebecca Roanhorse — for cultural specificity + speculative/post-apocalyptic landscapes.
    

---

## ⚠️ Where the limits or tensions show up (things you might _not_ like or want to question)

- Many SF works still lean on tropes of “AI as mimic/humanness vs AI as threat” rather than exploring AI’s “other” affordances.
    
- Some dehumanize (or over-alienate) AI characters so that their “difference” becomes spectacle rather than a lens for mutuality or hybridity.
    
- Others default to dystopia, which can be useful but sometimes misses more nuanced imaginaries of partnership, co-imagination, or complementarity.
    

---

If you want, I can try to pull together a **short curated list** of SF stories (novellas / short stories) that explicitly imagine futures where intelligence is radically different (embodied differently) — maybe ones that explore “non-human cognition” (insects, collective intelligences, AI with different sensory modalities, etc.). Would you prefer that or maybe an annotated list in order of “most aligned with your sense of what’s possible / inspiring”?
:::

:::human
_Tokyo Sympathy Tower_ gave me some prickles, above. If I’m trusting my body, I suppose that’s where I’d start. I think I’m less interested in the wild sensory modalities than in exploring positive cultural possibilities… but that are grounded, as well. I wanted to be affected/changed by what I read: ideas which expand my mind and conceptions around what’s possible, through some kind of mysterious limbic resonance with the author… that’s why I liked some of the stories in _The Paper Menagerie_. There were affective… I learned about my/this reality, in a deeper way.
:::

:::ai
Lovely — I hear you: you want fiction that _moves_ you, that’s emotionally true and culturally grounded, and that expands what you imagine is possible without sliding into spectacle or cold futurism. Below is a compact, hand-picked reading list (short → longer) with one-line why each choice might give you that limbic resonance you described.

# Start here — short, high-impact pieces

1. **Ken Liu — “The Paper Menagerie”**  
    → Pure affect: family, memory, cultural belonging; a small story that can change how you feel about language and intimacy.
    
2. **Ken Liu — “Mono no aware”**  
    → Quiet, humane, a moral/affective take on contact and consequence; works the heart and the imagination.
    
3. **Ted Chiang — “The Story of Your Life”**  
    → Big idea + tenderness; shows how a concept (language/time) can be lived emotionally.
    
4. **Aliette de Bodard — “The Tea Master and the Detective”** (novella)  
    → Intimate, elegiac, and culturally textured — a detective story where the “mind” is not Western rationality but relational ships & communities.
    
5. **Nnedi Okorafor — “Binti”** (novella)  
    → Identity, tradition, and transformation — spare, sung, and deeply human.
    

# Mid-length / novels that stay grounded and humane

6. **Becky Chambers — _A Closed and Common Orbit_** (Wayfarers series)  
    → Optimistic, character-driven SF about belonging, repair, and community — the kind of future that feels like a useful model for real cultural possibility.
    
7. **Kazuo Ishiguro — _Klara and the Sun_**  
    → Quiet, intimate exploration of artificial caretakers, love, and what personhood looks like in a socially scaffolded world.
    

# For textures of culture + sociopolitical imagination

8. **Michael Grothaus — _Beautiful Shining People_**  
    → Near-future critique of tech + power with real emotional beats about how tech rearranges human vulnerability.
    
9. **N. K. Jemisin — _The City Born Great_ (short/novella)**  
    → Fierce, urban, and collective — not techy in the classic sense but brilliant at imagining civic intelligence and cultural agency.
    

---

If you want a reading _order_ that builds affectively: start with a Ken Liu short, then Ted Chiang’s story, then Aliette de Bodard’s novella, then Becky Chambers, then Ishiguro. That progression moves from immediate emotional shock → conceptual tenderness → relational spec fic → full-bodied, humane novel.

Would you like me to:

- make this into a one-page reading plan (2–3 weeks, 30–60 mins/day) with short prompts so each piece lands more deeply?
    
- or assemble 8–10 short stories (all under 20 pages) for a weekend of limbic resonance?
    

Tell me which and I’ll lay it out.
:::