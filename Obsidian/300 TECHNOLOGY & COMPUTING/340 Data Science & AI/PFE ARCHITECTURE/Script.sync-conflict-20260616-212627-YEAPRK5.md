# PFE Presentation Script

## American Sign Language — Word Recognition and Sentence Generation System

### Rayan Akioud · Debbab Boutaina | FSTM 2025–2026

---

> **General tone:** Confident, measured, not rushed. You're presenting a solution you built, tested, and deployed — own it. Speak to the jury as equals who understand the math, not as students reading off a slide. Pause after key numbers. Make eye contact. Never read the slide — the slide is your backdrop, your words are the presentation.

---

## SLIDE 1 — Title Slide

_[Stand straight. Let the slide appear. Take one breath before speaking.]_

> "Good morning, honorable jury and thank you for being here. My name is Rayan Akioud, alongside my partner Boutaina Debbab. Today we're presenting our final-year project: a real-time American Sign Language recognition and translation system — built from raw video all the way to a deployed desktop application that runs entirely on local hardware.
> 
> This project sits at the intersection of computer vision, sequence modeling, and accessibility. We'll walk you through the problem that motivated it, the full technical pipeline we designed, the experiments we ran, and what we learned along the way.
> 
> Let's start with why this matters."

_[Transition: click to Slide 2 as you say "Let's start with why this matters."]_

---

## SLIDE 2 — Introduction / Context

_[Point briefly toward the "70M+" stat, then step back.]_

> "Over seventy million people worldwide are deaf or hard-of-hearing. Sign language is their primary means of communication — it is a complete, grammatically rich, fully independent language. It is not a signed version of spoken English.
> 
> The problem is that the vast majority of hearing people don't understand it. This creates a persistent barrier — in hospitals, in schools, in administrative offices, in everyday social interaction. The traditional solution is a human interpreter, which is expensive, logistically difficult, and simply not always available.
> 
> The question we asked ourselves was: can we build a system that fills this gap? A system that recognizes ASL signs in real time from a standard webcam — no specialized hardware, no cloud dependency — and translates them into readable English?
> 
> That is exactly what this project delivers."

_[Pause one beat. Transition to Slide 3.]_

---

## SLIDE 3 — System Overview & Objectives

_[Use the pipeline text at the bottom of the slide as a visual anchor.]_

> "Before diving into the technical details, let me give you the high-level picture of what the system does and what constraints we imposed on ourselves.
> 
> The pipeline is straightforward: webcam input feeds into landmark extraction, normalization, model inference, and finally a translation step that produces English output. Seven stages, under 500 milliseconds end-to-end.
> 
> But the design constraints are what shaped every decision we made. First: consumer hardware only. No depth cameras, no specialized sensors — just a standard webcam. Second: signer independence. The model must generalize to people it has never seen during training. This is the hardest requirement to satisfy, and it became the central finding of the entire project.
> 
> Third: fully local inference. No API call, no internet connection. The system runs entirely on the device. And finally, it ships as a standalone Windows executable — one file, no Python installation needed on the target machine.
> 
> These constraints made the problem harder, but they also made the solution genuinely useful."

_[Transition to Slide 4.]_

---

## SLIDE 4 — Phase 1: Exploration & Baseline

_[This slide has a lot of information — pace yourself. Let the jury read the architecture flow for a second before you explain it.]_

> "The project unfolded in two phases. Phase one was exploration: we needed to validate the core approach before committing to the full scale.
> 
> We worked with the MS-ASL dataset — 60 sign classes, 165 signers, 1,532 clips — and we designed a compact architecture we called the EnhancedConvTransformer.
> 
> The architecture combines two complementary mechanisms. A 1D convolutional layer captures local temporal patterns — the micro-movements between consecutive frames, the speed and direction of the hand at each instant. A Transformer encoder then operates on top of those features to model global dependencies across the full sequence, capturing relationships like a hand returning to its starting position to complete a sign. Mean pooling collapses the sequence into a single classification vector.
> 
> This entire model has 363,900 parameters and was trained on CPU only.
> 
> The result: 69.1% test accuracy across 60 sign classes. For a CPU-trained model with under 400,000 parameters, on a signer-independent test set, that's a strong baseline — and it validated that the Conv1D plus Transformer paradigm was the right architectural choice for this task.
> 
> But we knew 60 signs was not a deployable product. We needed to scale."

_[Transition to Slide 5.]_

---

## SLIDE 5 — Phase 2: Scaling & The Data Ceiling

_[Quote on the slide — read it aloud, deliberately. It's the central finding.]_

> "Phase two is where the most important scientific finding of this project emerged. Let me read that quote directly, because it summarizes everything:
> 
> _'Signer diversity is the dominant accuracy ceiling — not model capacity.'_
> 
> Here is what that means concretely. Early in phase two, we scaled our model from 3.8 million to 14.7 million parameters, increased the sequence length, added complexity everywhere — and accuracy dropped. The bottleneck was not the model. It was the data.
> 
> The breakthrough came when we stopped trying to build a bigger model and started assembling a more diverse dataset. We combined four sources: Google ISLR, ASL Citizen, PopSign v1.0, and our own personal recordings. 212,703 training samples. Approximately 120 unique signers. Four different recording domains: studio, community, home smartphone, laptop webcam.
> 
> That diversity is what pushed the production model to 86.89% accuracy on a fully signer-independent test set. The same 21-million-parameter architecture that failed at 16 signers succeeded at 120.
> 
> This is a finding that generalizes beyond our specific dataset: for sign language recognition systems, more people matters more than a bigger model."

_[Transition to Slide 6.]_

---

## SLIDE 6 — ETL Pipeline & Feature Engineering

_[Three numbered steps on the slide — walk through them cleanly, one by one.]_

> "Let's talk about how we represent a sign before it ever reaches the model.
> 
> Rather than feeding raw video frames into the network — which would mean processing millions of pixel values, most of which describe the background, the lighting, and the color of the signer's shirt — we extract body landmarks using MediaPipe Holistic.
> 
> Step one: we extract 115 landmarks per frame — the hands, key pose points, and a minimal set of face landmarks that carry grammatical information like facial expressions. This reduces a 64-frame clip from roughly 10 million pixel values to 44,000 coordinate values. A 200-times reduction, with zero loss of linguistically relevant information.
> 
> Step two: geometric normalization. We center and scale all coordinates relative to the shoulder midpoint, with one unit equal to one shoulder-width. After this transformation, two signers of completely different heights performing the same sign produce numerically identical feature vectors. Signer-independent generalization is built directly into the representation — the model never has to learn it.
> 
> Step three: velocity features. We append frame-to-frame displacements to the position features, doubling the feature dimension to 690. This was validated in Experiment 5: plus 1.33% top-1 accuracy, consistently positive across all sign-length buckets. For very short signs — under 10 frames — it nearly doubled the information density.
> 
> The final input to the model is a tensor of shape 64 by 690: 64 timesteps, 690 features per timestep."

_[Transition to Slide 7.]_

---

## SLIDE 7 — Production Architecture: ASLTransformerV11

_[The pipeline diagram on the slide is your visual — point to each stage as you name it.]_

> "The production architecture, which we call ASLTransformerV11, scales the same Conv1D plus Transformer paradigm to 21 million parameters.
> 
> The input sequence — 64 frames, 690 features each — is first projected into a 512-dimensional embedding space through a linear layer with LayerNorm.
> 
> Two 1D convolutional blocks with residual connections then encode local temporal patterns before the sequence even reaches the Transformer.
> 
> Positional encoding is added, and the sequence passes through six Transformer encoder layers with 8 attention heads each. This is where global dependencies are captured: relationships between any two frames in the sequence, regardless of temporal distance.
> 
> One architectural detail worth noting: we use masked global average pooling rather than standard pooling. Signs have variable lengths — a 21-frame sign padded to 64 frames should not have 67% of its classification vector composed of silence. Masking averages only over real frames. This alone improved performance on short signs.
> 
> We also apply Pre-LayerNorm — normalizing before each sub-layer rather than after — which produces more stable gradient flow across 6 layers and was critical for training this model from scratch on our combined corpus.
> 
> The output is a 250-dimensional logit vector — one score per sign class."

_[Transition to Slide 8.]_

---

## SLIDE 8 — Tools & Technologies

_[This slide is a breather — brief, confident.]_

> "The stack we used reflects the constraints of the project. PyTorch with ROCm for training on our AMD GPU under WSL2 Ubuntu. MediaPipe for landmark extraction. PySide6 for the desktop application. PyInstaller for packaging the final executable.
> 
> Everything runs locally. No cloud APIs, no external dependencies at inference time.
> 
> Let me move directly to what this pipeline actually achieved."

_[Transition to Slide 9.]_

---

## SLIDE 9 — Results & Targeted Adaptation

_[Three big numbers on screen. Pause after each one.]_

> "Three numbers summarize the outcome.
> 
> 86.89% top-1 accuracy on the PopSign signer-independent test set — six completely unseen signers, 250 sign classes, over 20,000 test samples. This is the primary generalization benchmark, and it is evaluated strictly: zero participant overlap between training and test.
> 
> 87.2% mean accuracy across the 237-sign deployment vocabulary. This is after systematic error analysis: we identified three signs with accuracy below 25% and removed them. Three persistent confusion pairs — awake/wake, lips/mouth, scissors/cut — were resolved at inference by merging to a single output. The deployment vocabulary is not the 250 training classes — it is a curated 237-sign set with a guaranteed accuracy floor.
> 
> And 100% accuracy after personalized fine-tuning on the target user. 671 samples. The model adapts to an individual's specific signing style — their hand shapes, their movement speed, their gesture amplitude — and reaches perfect accuracy.
> 
> We report this separately because it is no longer signer-independent. But it demonstrates something important: for any real deployment targeting a specific user, a personalization step is not optional — it is the most impactful single action you can take."

_[Transition to Slide 10.]_

---

## SLIDE 10 — Real-World Application & Translation

_[Point to the screenshot if visible. If the demo slot comes after, reference it here.]_

> "All of this runs inside a native desktop application.
> 
> The interface has three views. The primary translation view shows the live camera feed with the MediaPipe landmark overlay — so the user can see exactly what the model sees. As signs are recognized, they appear immediately as large subtitles and accumulate as a gloss sequence. After a 2.5-second pause in signing, the gloss sequence is passed through a dictionary translator and rendered as a grammatical English sentence in a conversation panel. The hearing person can type their response in a text field on the same screen.
> 
> Sign recognition itself is governed by a two-tier confidence state machine. Signs below 0.55 confidence are suppressed entirely. Between 0.55 and 0.70, the system requires three stable consecutive windows before emitting — this prevents flickering on ambiguous frames. Above 0.70, we use peak detection: the sign is emitted when confidence begins to fall after a high-confidence peak. This prevents a held sign from being emitted multiple times.
> 
> End-to-end latency on a consumer laptop is under 500 milliseconds. MediaPipe runs in roughly 15ms, the Transformer forward pass in approximately 20ms. The system is comfortably real-time."

_[Transition to Slide 11.]_

---

## SLIDE 11 — Limitations & Future Directions

_[Be direct and honest here. The jury respects it.]_

> "We want to be precise about what this system does and does not do.
> 
> It handles isolated signing — signs with deliberate pauses between them. It does not handle continuous co-articulated signing, where signs flow directly into one another without pauses. That requires an upstream temporal segmentation model, which is a separate and significantly harder problem.
> 
> The vocabulary is bounded at 237 signs. Proper nouns, names, and technical terms that fall outside the dictionary require fingerspelling — which the current system does not support.
> 
> Three future directions follow directly from these limitations.
> 
> First: a fingerspelling module using CTC decoding, trained on the ChicagoFSWild dataset — this would handle virtually any out-of-vocabulary word.
> 
> Second: a continuous signing pipeline with a temporal segmentation frontend, using the How2Sign dataset which provides 35 hours of annotated continuous ASL.
> 
> Third: the reverse direction — text to sign. Using the 115-landmark skeleton we already have, we could generate skeletal animations from English text input, making the system a complete bidirectional communication bridge.
> 
> These are not speculative. They are the direct next steps that the architecture we've built already supports."

_[Transition to Slide 12 — Demo slide.]_

---

## SLIDE 12 — Live System Demonstration

_[This is your strongest moment. Let the application speak for itself.]_

> "Rather than describe the system further, let us show it to you.
> 
> What you're seeing is the application running live — no pre-recorded footage, no prepared input. The landmark overlay on the left shows exactly what MediaPipe extracts from each frame. The subtitle at the bottom shows the recognized sign in real time. And as signs accumulate, they get translated into English on the right.
> 
> [Perform several signs. Let the system translate them. Pause.]
> 
> Everything you just saw ran locally, on a standard laptop, in real time."

_[Let that land. Brief pause. Then transition to Slide 13.]_

---

## SLIDE 13 — Thank You / Q&A

_[Calm. You've delivered the whole arc. Own the room.]_

> "To summarize: we started from a real-world communication gap affecting seventy million people. We built and validated a full pipeline — from landmark extraction to a deployed Windows application — through twelve controlled experiments and four combined datasets. The central finding is that signer diversity, not model size, determines recognition accuracy. And the final system achieves 86.89% signer-independent accuracy across 250 sign classes, with a curated deployment vocabulary of 237 signs at 87.2% mean accuracy.
> 
> This is a functional, deployable system. It runs on any standard laptop. It requires no internet connection. And it achieves perfect accuracy for the target user after personalization.
> 
> Thank you. We are open to your questions."

_[Step back slightly. Hands relaxed. Don't fill the silence.]_

---

## ANTICIPATED JURY QUESTIONS — Prepared Answers

### "Why 1D convolution and not purely a Transformer?"

> "The 1D CNN captures local temporal patterns — the micro-movements between adjacent frames — at low computational cost. The Transformer then models global relationships across the full 64-frame sequence. Each component does what it does best: local feature extraction for the CNN, long-range dependency modeling for the Transformer. Ablating the CNN and using only a linear projection into the Transformer reduces performance because short-range dynamics are underrepresented in the raw landmark coordinates."

---

### "Why not use raw video instead of landmarks?"

> "A 64-frame clip at 224×224 pixels contains approximately 10 million values. Most encode the background, lighting, and the signer's clothing — irrelevant noise the model would have to learn to ignore. Landmarks reduce this to 44,000 values while preserving everything linguistically relevant. Beyond efficiency, landmark normalization makes the same sign look numerically identical across different signers and environments — signer-independent generalization is built into the representation rather than learned by the model."

---

### "You claim signer diversity is the ceiling. How do you know it isn't model capacity?"

> "Experiment 3 directly answers this. We scaled the model from 3.8 million to 14.7 million parameters and increased sequence length — no new signers added — and accuracy dropped from 55% to 47%. The same 21-million-parameter architecture in Experiment 10, trained on 120 signers instead of 16, reached 73%. A 30-point gain from data diversity alone, with no change in model capacity. That is a controlled ablation confirming the bottleneck."

---

### "The 100% personal accuracy — isn't that just overfitting?"

> "The personal fine-tuning is evaluated on a held-out personal test set of 201 samples that were not used during fine-tuning. It is not evaluated on training data. We also report this number separately from the general model precisely because it is user-specific and no longer signer-independent. The finding is not that we overfit — it's that 671 samples from a single user are sufficient to achieve full personalization. That's the useful insight."

---

### "What is the two-tier confidence state machine exactly?"

> "Three confidence tiers — LOW, MEDIUM, HIGH — collapse into two behavioral states. LOW, below 0.55, is a hard rejection gate: no emission logic runs at all. MEDIUM and HIGH are the two active tiers where emission logic differs: MEDIUM requires three stable consecutive windows, HIGH uses peak detection — emitting when confidence begins to fall after a peak. Per-sign cooldowns prevent re-emission of the same sign. The name 'two-tier' refers to the two emission strategies, not the three threshold levels."

---

### "Why did MS-ASL fail in Phase 2 as a data source?"

> "YouTube-based datasets suffer from link rot and annotation noise — the timestamps in the JSON metadata don't always align precisely with the sign in the video. In Experiment 12, integrating MS-ASL into the production pipeline dropped accuracy from 73% to 57%. The noise introduced by misaligned clips outweighed any diversity benefit. Pre-extracted datasets like Google ISLR and direct download archives like PopSign proved significantly more reliable."

---

### "What is the domain gap between your two test sets?"

> "The 28-point gap between PopSign test accuracy (86.89%) and ISLR full test accuracy (58.02%) reflects the difference between home-environment recordings and controlled studio recordings. The production model was trained predominantly on PopSign data — 63.8% of training samples — which matches real-world deployment conditions. The ISLR studio recordings have consistent lighting and camera angles that differ systematically from what the model was trained on. It is a domain mismatch, not a model failure."

---

_End of script._