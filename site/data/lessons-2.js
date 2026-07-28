// Lessons 13–24. Curriculum content © Brian Otieno.
export const LESSONS_B = [
{
  n: 13, month: 4, week: 13, outdoor: false, skill: "Story",
  title: "The Single Image Story",
  format: "Indoor workshop", duration: "3 hours",
  question: "What makes one photograph feel like a complete story?",
  goals: [
    "Identify subject, action, setting, and moment",
    "Recognise gesture and relationship",
    "Wait for a meaningful moment",
    "Combine information and emotion",
    "Write a simple story question before photographing",
    "Distinguish description from interpretation"
  ],
  vocab: "Moment, gesture, relationship, context, detail, visual evidence, interpretation, ambiguity.",
  teaching: [
    { paras: ["A strong single image often contains several forms of information:"], bullets: [
      "Who or what is present",
      "What is happening",
      "Where it is happening",
      "What the relationships are",
      "What detail gives the image specificity",
      "What moment changes the scene",
      "What remains unanswered"
    ] },
    { paras: [
      "Teach participants to avoid forcing a story onto an image. Describe what the photograph shows before explaining what it means.",
      "Use the question: what is happening in the frame, and why did this moment matter to the photographer?"
    ] },
    { h: "Gestures to watch for", bullets: [
      "A hand reaching","A person turning","Two people looking in different directions","An object being carried","A pause in activity","A repeated action","An exchange"
    ] }
  ],
  demo: "Display one photograph and describe only what is visible for one minute. Then describe what it might mean. Show the difference between the two.",
  individual: { paras: ["Participants review recent images and select:"], bullets: [
    "One image with a clear action",
    "One image with a clear relationship",
    "One image with a strong detail",
    "One image with an unanswered question"
  ] },
  groupWork: "Use a silent reading exercise. Display one photograph for 30 seconds. Everyone writes what they see, then what they think. Separate observation from interpretation.",
  challenge: "Create one image with the elements Person, Place, Action, and Detail.",
  reflect: [
    "What happened one second before?",
    "What might happen one second after?",
    "What evidence is visible?",
    "What am I assuming?",
    "What detail makes the image specific?"
  ],
  assignment: { paras: ["Make one photograph each day for five days. Each photograph must contain a meaningful action or gesture."] },
  materials: "Cameras or phones, display screen, printed sample images, notebooks, pens.",
  ethics: "Do not wait for harm, embarrassment, or conflict to become worse just to make a stronger photograph."
},
{
  n: 14, month: 4, week: 14, outdoor: false, skill: "Sequence",
  title: "Photo Essays, Sequences, and Visual Structure",
  format: "Indoor workshop", duration: "3 hours",
  question: "How can several photographs work together to tell more than one photograph can?",
  goals: [
    "Explain what a photo essay is",
    "Identify opening, context, portrait, action, detail, transition, and closing images",
    "Create visual variety",
    "Avoid repetition",
    "Arrange a simple sequence",
    "Identify missing photographs"
  ],
  vocab: "Photo essay, sequence, opening image, establishing image, portrait, action, detail, transition, closing image, rhythm, repetition, edit.",
  teaching: [
    { paras: ["A photo essay is a group of connected images. Each image should add something new."] },
    { h: "Common image roles", bullets: [
      "Opening image invites the viewer into the story.",
      "Establishing image shows place and context.",
      "Portrait introduces a person.",
      "Action image shows what happens.",
      "Relationship image shows connection.",
      "Detail image gives specificity.",
      "Transition image changes pace, time, or place.",
      "Closing image leaves a final feeling or question."
    ] },
    { h: "A useful sequence can move", bullets: [
      "Wide to medium to close",
      "Place to person to action to detail",
      "Morning to afternoon to evening",
      "Preparation to activity to result",
      "Question to discovery to reflection"
    ], after: "Avoid selecting several images that repeat the same distance, moment, subject, or composition." }
  ],
  demo: "Use the sequence board. Assign a role to each frame, then rearrange the order and discuss how the meaning changes.",
  individual: "Give participants twelve sample images. Ask them to build a seven-image sequence and explain the order.",
  groupWork: "Each group creates a different sequence from the same images. Compare how order changes meaning.",
  challenge: "Create a paper storyboard for a five-image story about one routine.",
  reflect: [
    "What new information does each image add?",
    "Where does the sequence slow down?",
    "Which image repeats information?",
    "What image is missing?",
    "Does the ending feel earned?"
  ],
  assignment: { paras: ["Plan and begin a seven-image story about a person, place, routine, relationship, or community activity."] },
  materials: "Printed sample images, paper storyboard sheets, scissors, tape, notebooks, pens.",
  ethics: "A sequence can change meaning. Do not arrange images in a way that falsely suggests an event, cause, relationship, or timeline."
},
{
  n: 15, month: 4, week: 15, outdoor: false, skill: "Writing",
  title: "Listening, Quotes, Captions, and Personal Reflections",
  format: "Indoor workshop", duration: "3 hours",
  question: "How can words add information without repeating or controlling the photograph?",
  goals: [
    "Ask open questions",
    "Listen without interrupting",
    "Record a short quote accurately",
    "Write a factual caption",
    "Write a personal reflection",
    "Distinguish a quote, caption, opinion, and memory",
    "Pair words and images with care"
  ],
  vocab: "Caption, quote, reflection, interview, open question, context, fact, opinion, memory, attribution.",
  teaching: [
    { paras: ["Teach four kinds of text."] },
    { h: "Caption", paras: ["A caption gives accurate information. It can include who, what, where, when, and relevant context."] },
    { h: "Quote", paras: ["A quote uses the person’s own words. Keep the meaning accurate. Do not change the speaker’s voice to sound more dramatic."] },
    { h: "Personal reflection", paras: ["A reflection explains what the photographer noticed, felt, remembered, questioned, or learned."] },
    { h: "Interview snippet", paras: ["A short interview excerpt can add a voice that the image cannot show."] },
    { h: "Useful open questions", bullets: [
      "What is happening here?",
      "Why does this place matter to you?",
      "What do people often misunderstand?",
      "What has changed?",
      "What do you want people to remember?",
      "What are you proud of?",
      "What would you like to be different?",
      "What does home mean to you?"
    ] },
    { h: "Caption formula", paras: ["Name or description of person + action + place + date or time context + why it matters.", "Do not invent emotion. Write what is known."] }
  ],
  individual: { paras: ["For one image, write:"], bullets: [
    "A factual caption","A one-sentence quote","A personal reflection","A short title"
  ], after: "Compare how each text changes the reading." },
  groupWork: "Practise interviews in pairs for five minutes. The listener may ask one question at a time and cannot interrupt.",
  challenge: "Create an image and text pair where the words add information that is not visible.",
  reflect: [
    "Which facts must be checked?",
    "Whose voice is speaking?",
    "Does the text respect the person?",
    "Does the text tell the viewer what to feel?",
    "What information should remain private?"
  ],
  assignment: { paras: ["Complete the first draft of a seven-image story with captions, one quote, and a 150-word personal reflection."] },
  materials: "Notebooks, pens, printed images, recording device where permitted and agreed.",
  ethics: "Do not publish phone numbers, exact home locations, school details, medical information, or other private details without a clear reason and permission."
},
{
  n: 16, month: 4, week: 16, outdoor: true, skill: "Story",
  title: "Outdoor Practical: A Community Micro-Story",
  format: "Outdoor photography practical", duration: "4 hours",
  question: "How can we create a short, accurate, respectful story about something close to us?",
  goals: [
    "Follow a simple story plan",
    "Make visual variety",
    "Listen and record information",
    "Adapt when the scene changes",
    "Work respectfully in a real environment",
    "Produce a seven-image micro-story"
  ],
  vocab: "Micro-story, field workflow, consent, caption, reshoot, edit.",
  teaching: [
    { h: "Story choices", paras: ["Participants choose one:"], bullets: [
      "A morning routine","A small business","A creative practice","A friendship","A family activity","A sports practice","A school journey","A community service","A place changing over time","A local maker or artist","A quiet space","A shared meal","A transport story","A repair process","A game"
    ] },
    { h: "Required image list", bullets: [
      "Opening image","Wide context","Portrait","Action","Relationship","Detail","Closing image"
    ], after: "Add one accurate quote, one factual caption for each image, and one personal reflection." },
    { h: "Field workflow", bullets: [
      "Introduce the project.",
      "Ask for consent.",
      "Learn before photographing.",
      "Watch the routine once.",
      "Plan visual positions.",
      "Photograph without interrupting unnecessarily.",
      "Record names and details.",
      "Show selected images when possible.",
      "Thank the people involved.",
      "Review for safety and privacy before sharing."
    ] }
  ],
  groupWork: "Create a first edit of ten images, then reduce to seven. Identify one missing photograph and plan a reshoot where possible.",
  challenge: "Make the closing image last, after everything else is photographed, so it answers the story you actually found.",
  reflect: [
    "What did watching first change about my photographs?",
    "Which image is doing the least work?",
    "What do I still need to verify?"
  ],
  assignment: { paras: ["Complete the seven-image micro-story and prepare a two-minute spoken presentation."] },
  materials: "Cameras or phones, notebook for names, quotes and captions, water, facilitator contact list.",
  ethics: "The story must not expose anyone to ridicule, punishment, stigma, financial risk, legal risk, or unwanted attention."
},
{
  n: 17, month: 5, week: 17, outdoor: false, skill: "Editing",
  title: "Contact Sheets, Selection, and Constructive Critique",
  format: "Indoor editing workshop", duration: "3 hours",
  question: "How do we choose photographs based on quality, meaning, and story rather than attachment alone?",
  goals: [
    "Make a contact sheet",
    "Separate technical quality from story value",
    "Mark Keep, Maybe, and Remove",
    "Identify near-duplicates",
    "Explain a selection",
    "Give useful critique",
    "Accept feedback without losing authorship"
  ],
  vocab: "Contact sheet, edit, select, sequence, duplicate, critique, intention, evidence, consistency.",
  teaching: [
    { paras: ["Explain that editing means choosing, not only changing brightness or colour. Teach a three-pass edit."] },
    { h: "Pass one: technical check", paras: ["Look for:"], bullets: [
      "Missed focus","Unwanted blur","Accidental obstruction","Extreme exposure problems","Closed eyes where they weaken the image","Repeated frames"
    ], after: "Do not remove every imperfect image. A technically imperfect image can still contain an important moment." },
    { h: "Pass two: story check", paras: ["Ask:"], bullets: [
      "Does this image add new information?","Is the moment meaningful?","Is the relationship clear?","Does the image feel specific?","Is it honest?","Is it needed?"
    ] },
    { h: "Pass three: sequence check", paras: ["Ask:"], bullets: [
      "Is there enough visual variety?","Are there too many similar portraits?","Is place visible?","Is there a beginning and ending?","Is a key action missing?"
    ] },
    { h: "Critique language", bullets: [
      "I notice...","My eye goes to...","The image becomes stronger when...","I need more information about...","I think this image adds...","I think this image repeats...","The photographer’s intention seems to be..."
    ] },
    { h: "Avoid", bullets: [
      "This is bad.","I do not like it.","My photo is better.","You should have photographed something more dramatic."
    ] }
  ],
  demo: "Use the Photo Review tool. Build a contact sheet, mark Keep, Maybe, and Remove, and rate focus, light, composition, moment, story, and ethics.",
  individual: "Edit 30 images to 12, then to 7.",
  groupWork: "Each participant receives feedback from two peers. The photographer makes the final decision.",
  challenge: "Defend one difficult selection in 60 seconds.",
  reflect: [
    "Which image was hardest to remove?",
    "Did I keep it because of memory or because it helps the story?",
    "Which image carries the strongest moment?",
    "What is missing?"
  ],
  assignment: { paras: ["Prepare a final seven-image edit and a backup group of three alternatives."] },
  materials: "Laptops or phones, printed contact sheets where possible, review sheets, pens.",
  ethics: "Remove images that create unnecessary harm, reveal private information, or were made without valid consent."
},
{
  n: 18, month: 5, week: 18, outdoor: false, skill: "Editing",
  title: "Ethical Photo Editing and Colour",
  format: "Indoor computer or phone workshop", duration: "3 hours",
  question: "How can editing improve clarity without changing the truth of the scene?",
  goals: [
    "Crop with purpose",
    "Adjust exposure, contrast, highlights, shadows, and white balance",
    "Use colour and black and white with intention",
    "Avoid excessive filters",
    "Preserve important visual information",
    "Explain ethical editing limits",
    "Export a high-quality image"
  ],
  vocab: "Crop, exposure, contrast, highlights, shadows, white balance, saturation, black and white, resolution, export, metadata.",
  teaching: [
    { paras: ["Editing should help the photograph communicate clearly. It should not manufacture an event that did not happen."] },
    { h: "Acceptable adjustments can include", bullets: [
      "Cropping","Straightening","Exposure correction","Highlight and shadow recovery","White balance correction","Moderate contrast","Moderate colour adjustment","Dust spot removal","Black and white conversion","Noise reduction","Sharpening","Export resizing"
    ] },
    { h: "Do not", bullets: [
      "Add or remove people",
      "Combine separate moments and present them as one documentary image",
      "Change signs, clothing, objects, or evidence",
      "Create false smoke, fire, crowds, weather, or damage",
      "Use heavy skin smoothing",
      "Change body shape",
      "Change a person’s skin colour",
      "Use filters that remove important context",
      "Crop in a way that falsely changes relationships or events"
    ] },
    { h: "A simple workflow", bullets: [
      "Save the original.","Select the image.","Crop and straighten.","Correct brightness.","Recover highlights and shadows.","Correct colour.","Use contrast carefully.","Check faces, signs, and edges.","Compare before and after.","Export a copy."
    ] },
    { h: "Suggested export", bullets: [
      "JPEG","sRGB colour space","High quality","Long edge suitable for screen or print task","Preserve an original high-resolution copy","Use clear filenames"
    ] }
  ],
  demo: "Use the before and after comparison slider. Show a corrected edit beside an excessive edit and discuss the difference.",
  individual: { paras: ["Edit one image three ways:"], bullets: [
    "Natural colour","Black and white","Deliberately excessive edit"
  ], after: "Discuss which choices support or weaken the story." },
  groupWork: "Ethics cards. Decide whether each edit is acceptable, questionable, or misleading.",
  challenge: "Create a print-ready version and a web-ready version of the same image.",
  reflect: [
    "What did I change?",
    "Why did I change it?",
    "What information remained true?",
    "Did the edit make the image look more dramatic than the real situation?",
    "Could I explain every adjustment publicly?"
  ],
  assignment: { paras: ["Edit the final seven-image story with consistent colour and file naming."] },
  materials: "Laptops or phones with a free editing app, storage for originals, ethics cards, notebooks.",
  ethics: "Keep original files. Never overwrite the only copy."
},
{
  n: 19, month: 5, week: 19, outdoor: false, skill: "Writing",
  title: "Titles, Captions, Reflections, and Artist Statements",
  format: "Indoor writing and design workshop", duration: "3 hours",
  question: "How can we write clearly about photographs while keeping our own voice?",
  goals: [
    "Create a working title",
    "Write accurate captions",
    "Edit a quote",
    "Write a personal reflection",
    "Write a short artist statement",
    "Choose text length for a zine or exhibition",
    "Proofread names and facts"
  ],
  vocab: "Title, caption, reflection, artist statement, context, voice, edit, proofread, attribution.",
  teaching: [
    { h: "A simple title process", bullets: [
      "Start with a specific object, place, phrase, sound, routine, or question.",
      "Avoid titles that are too broad, such as Life or Community.",
      "Test whether the title opens the story without explaining everything."
    ] },
    { h: "Caption checklist", bullets: [
      "Who is shown?","What are they doing?","Where?","When?","Why is the action relevant?","Is every name correct?","Is the information verified?","Does the person want to be named?"
    ] },
    { h: "Reflection prompts", bullets: [
      "I made these photographs because...",
      "I kept returning to...",
      "Before this project, I thought...",
      "The camera helped me notice...",
      "One thing people misunderstand is...",
      "The hardest image to make was...",
      "I want viewers to remember...",
      "I changed my mind about...",
      "This place matters because..."
    ] },
    { h: "Artist statement structure", bullets: [
      "Introduce the subject.","Explain the personal connection.","Describe the approach.","Name the question or idea.","Explain what the photographer hopes viewers will consider."
    ], after: "Target length: 120 to 200 words." }
  ],
  individual: { paras: ["Write:"], bullets: [
    "Three title options","Seven captions","One verified quote","One 150-word reflection","One 150-word artist statement"
  ] },
  groupWork: "Peer editing in pairs. The editor checks clarity, facts, repetition, and respect. The photographer keeps final control.",
  challenge: "Reduce a 100-word caption to 40 words without losing essential information.",
  reflect: [
    "Does the writing sound like me?",
    "Did I include facts that are not visible?",
    "Did I repeat what the image already shows?",
    "Did I describe a person with respect?",
    "Did I check every name?"
  ],
  assignment: { paras: ["Complete a polished text package for the seven-image story."] },
  materials: "Notebooks, pens, laptops or phones, printed drafts for peer editing.",
  ethics: "Remove sensitive identifying details that do not serve the story."
},
{
  n: 20, month: 5, week: 20, outdoor: true, skill: "Story",
  title: "Outdoor Practical: Reshoot, Fill the Gaps, and Finalise the Story",
  format: "Outdoor photography and editing practical", duration: "4 hours",
  question: "What does the story still need?",
  goals: [
    "Identify missing images",
    "Plan a focused reshoot",
    "Improve weak technical choices",
    "Return respectfully to a subject",
    "Confirm facts and consent",
    "Complete a final story package"
  ],
  vocab: "Reshoot, gap, verification, backup, final edit, export.",
  teaching: [
    { h: "Preparation", paras: ["Each participant brings:"], bullets: [
      "Current seven-image sequence","Three alternative images","Missing image list","Technical problems list","Questions to verify","Consent follow-up needs","Equipment checklist"
    ] },
    { h: "Reshoot priorities", paras: ["Possible missing images:"], bullets: [
      "Stronger opening","Clearer place","Better portrait","Important action","Relationship","Detail","Transition","Closing image","Different time of day","Better light","Correct name or quote","Safer and more respectful alternative"
    ] },
    { h: "Field practice", paras: ["Participants return only where permission and safety allow. They should not repeat the entire assignment. They should make specific images based on the edit."] },
    { h: "Final review", paras: ["After the field session:"], bullets: [
      "Import images.","Back up files.","Mark new images.","Compare old and new versions.","Update the sequence.","Recheck captions.","Recheck consent.","Export final images.","Save project files in organised folders."
    ] }
  ],
  groupWork: "Show the old and new version of one image side by side. The group says which is stronger and why.",
  challenge: "Replace one weak image with a stronger image and explain exactly what improved.",
  reflect: [
    "What did the first edit reveal?",
    "Did the reshoot improve the story?",
    "What did I understand only after returning?",
    "What should I stop photographing?",
    "What should I continue following?"
  ],
  assignment: { paras: ["Submit the complete final story package for zine and exhibition consideration."] },
  materials: "Cameras or phones, printed current edit, missing image list, storage or backup drive, laptops for import.",
  ethics: "Returning with a camera does not create automatic permission. Ask again and explain what you need."
},
{
  n: 21, month: 6, week: 21, outdoor: false, skill: "Zine",
  title: "Zine Making, Sequencing, and Page Design",
  format: "Indoor design workshop", duration: "3 hours",
  question: "How can photographs and words become a publication with rhythm and meaning?",
  goals: [
    "Explain what a zine is",
    "Understand page order",
    "Sequence images across spreads",
    "Balance full-bleed images, white space, captions, and reflections",
    "Create a cover and back cover",
    "Make collaborative editorial decisions",
    "Prepare files for print and digital viewing"
  ],
  vocab: "Zine, cover, spread, gutter, sequence, full bleed, margin, caption, folio, crop, proof, print.",
  teaching: [
    { paras: ["A zine is a small self-published work. It can combine photography, writing, drawing, quotes, maps, notes, and design."] },
    { h: "Page roles", bullets: [
      "Cover creates the first invitation.",
      "Opening spread sets the tone.",
      "Full-bleed page creates impact.",
      "Quiet page creates rest.",
      "Pairing two images creates comparison or conversation.",
      "Text page adds voice and context.",
      "Closing image shapes the final feeling.",
      "Back cover can include project information and credits."
    ] },
    { h: "Sequencing principles", bullets: [
      "Visual connection","Contrast","Repetition","Change of scale","Change of pace","Colour relationship","Gesture relationship","Time","Place","Theme"
    ] },
    { h: "Design principles", bullets: [
      "Keep body text readable.",
      "Do not place important faces or words in the gutter.",
      "Use consistent margins.",
      "Give strong photographs enough space.",
      "Avoid placing every element at the same size.",
      "Keep captions connected to the correct image.",
      "Test the sequence by printing small thumbnails."
    ] }
  ],
  demo: "Use the zine board. Drag page thumbnails into order, set the cover and back cover, and add a caption, quote, and reflection.",
  individual: "Each participant creates an eight-page mini-zine from their story.",
  groupWork: "Build a collective sequence using one or two images from each participant. Every participant explains their choice.",
  challenge: "Create three different opening spreads and compare their effect.",
  reflect: [
    "What should the viewer see first?",
    "Where does the publication need silence?",
    "Which images speak to each other?",
    "Is every participant represented fairly?",
    "What does the final page leave behind?"
  ],
  assignment: { paras: ["Complete a first zine proof and list corrections."] },
  materials: "Printed thumbnails, A4 paper, scissors, glue, tape, pens, laptops for layout.",
  ethics: "Publication increases reach. Recheck consent for every image and quote before final export."
},
{
  n: 22, month: 6, week: 22, outdoor: false, skill: "Exhibition",
  title: "Exhibition Design, Printing, and Public Presentation",
  format: "Indoor planning workshop", duration: "3 hours",
  question: "How can we create an exhibition that welcomes the community and protects the meaning of the work?",
  goals: [
    "Select exhibition images",
    "Plan print sizes",
    "Arrange an exhibition wall",
    "Write wall labels",
    "Create a visitor journey",
    "Prepare a short spoken introduction",
    "Identify practical installation needs"
  ],
  vocab: "Exhibition, curation, print size, wall label, sequence, spacing, sightline, installation, proof, credit.",
  teaching: [
    { paras: ["An exhibition is not only a group of large prints. It is a physical sequence that people experience with their bodies."] },
    { h: "Discuss", bullets: [
      "Entrance image","Thematic groups","Participant names","Captions and reflections","Print size","Viewing distance","Lighting","Wall colour","Accessibility","Seating","Audio or reading station","Visitor feedback","Credits","Safety","Print protection"
    ] },
    { h: "Suggested print planning", bullets: [
      "Small prints for details and intimate moments",
      "Medium prints for most documentary images",
      "Large prints for key opening or anchor images",
      "Test prints before final production",
      "Use consistent colour management",
      "Check resolution at intended size",
      "Keep image files and captions clearly named"
    ] }
  ],
  demo: "Use the exhibition wall planner. Place frames on the wall, set print sizes, and add the title panel and participant labels.",
  individual: { paras: ["Each participant selects:"], bullets: [
    "One anchor image","Two supporting images","One caption","One quote or reflection"
  ] },
  groupWork: { paras: ["Create three wall plans:"], bullets: [
    "By participant","By theme","As one shared visual journey"
  ], after: "Discuss strengths and risks." },
  challenge: { paras: ["Each participant prepares a 60-second introduction:"], bullets: [
    "My name is...","I photographed...","This story matters to me because...","One thing I want viewers to notice is...","One thing I learned is..."
  ] },
  reflect: [
    "Which image should meet the visitor first?",
    "Does the wall respect every participant equally?",
    "What could a visitor misunderstand?"
  ],
  assignment: { paras: ["Complete final image files, caption files, print sizes, and a spoken introduction."] },
  materials: "Printed thumbnails, measuring tape, wall plan sheets, label templates, pens.",
  ethics: "Do not display exact private locations or information that could create risk after the exhibition opens."
},
{
  n: 23, month: 6, week: 23, outdoor: true, skill: "Story",
  title: "Outdoor Practical: Final Field Production",
  format: "Outdoor final photography practical", duration: "4 hours",
  question: "What final image represents how my way of seeing has changed?",
  goals: [
    "Plan and complete a final photograph",
    "Use technical and storytelling skills together",
    "Work independently within safety limits",
    "Make intentional visual decisions",
    "Write a final reflection",
    "Prepare work for presentation"
  ],
  vocab: "Planning card, intention, viewpoint, consent, final edit, presentation.",
  teaching: [
    { h: "Final assignment theme: This Is Where We’re From", paras: ["Each participant creates a final set of three photographs:"], bullets: [
      "A photograph about place",
      "A photograph about relationship",
      "A photograph about future, change, or hope"
    ], after: "The three images should work together but must not repeat the same subject or composition." },
    { h: "Planning card", paras: ["Before leaving, complete:"], bullets: [
      "What do I want to photograph?",
      "Why does it matter to me?",
      "Who needs to give consent?",
      "What time gives useful light?",
      "What lens or camera setting might help?",
      "What safety concern should I plan for?",
      "What detail must I not forget?",
      "What words may accompany the image?"
    ] },
    { h: "Field requirements", paras: ["Participants should use:"], bullets: [
      "Intentional exposure","Deliberate viewpoint","Clear focus choice","Strong composition","Respectful consent","Accurate notes","Visual variety","Personal connection"
    ] },
    { h: "Closing circle", paras: ["At the end of the walk, each participant chooses one frame on the camera and says:"], bullets: [
      "I made this because...","I noticed...","I changed...","I still want to learn..."
    ] }
  ],
  groupWork: "Closing circle on location. Each participant shows one frame and speaks for one minute.",
  challenge: "Make the three final images work as a set without repeating a subject or a composition.",
  reflect: [
    "How has my way of seeing changed since Lesson 1?",
    "Which of the three images was hardest, and why?",
    "What do I still want to learn?"
  ],
  assignment: { paras: ["Edit the final three images, write captions, and complete a 200-word final reflection."] },
  materials: "Cameras or phones, planning cards, notebooks, water, facilitator contact list.",
  ethics: "Follow the agreed route, check-in times, group system, and facilitator instructions."
},
{
  n: 24, month: 6, week: 24, outdoor: false, skill: "Exhibition",
  title: "Final Edit, Exhibition Rehearsal, Reflection, and Celebration",
  format: "Indoor final workshop and showcase", duration: "3 to 4 hours",
  question: "What have we learned, made, and changed through six months of photography?",
  goals: [
    "Complete a final portfolio",
    "Present a story clearly",
    "Explain technical and ethical decisions",
    "Participate in final curation",
    "Reflect on personal growth",
    "Give credit to collaborators",
    "Identify next steps"
  ],
  vocab: "Portfolio, curation, rehearsal, credit, badge, next steps.",
  teaching: [
    { h: "Final portfolio requirements", paras: ["Each participant prepares:"], bullets: [
      "Seven-image personal story",
      "Three-image final assignment",
      "One portrait",
      "One movement image",
      "One composition study",
      "One image about home or belonging",
      "One image selected by the participant as their strongest work",
      "Accurate captions",
      "One quote where relevant",
      "Artist statement",
      "Final reflection",
      "Consent record confirmation"
    ] },
    { h: "Final edit process", bullets: [
      "Check focus and resolution.","Check colour consistency.","Check filenames.","Check captions and names.","Check consent.","Check print sizes.","Check zine sequence.","Check exhibition sequence.","Back up all final files.","Export final versions."
    ] },
    { h: "Exhibition rehearsal", paras: ["Participants practise:"], bullets: [
      "Welcoming visitors","Introducing the project","Presenting one image","Answering a question","Protecting private information","Explaining consent","Thanking collaborators"
    ] },
    { h: "Celebration activity", paras: ["Create a non-competitive badge wall. Every participant receives several badges based on effort, growth, care, collaboration, and completed work."], bullets: [
      "Light Finder","Focus Keeper","Moment Catcher","Respectful Portrait Maker","Story Builder","Careful Editor","Caption Writer","Sequence Maker","Community Listener","Zine Maker","Exhibition Guide","Thoughtful Photographer"
    ] },
    { h: "Final group statement", paras: ["Provide an editable group statement beginning with: We are young photographers from Kibera. These photographs come from the places, people, routines, questions, and memories that shape our lives. We made them from our own point of view."] }
  ],
  individual: "Complete the final portfolio checklist and export final files.",
  groupWork: "Final curation using the non-competitive voting tool. Every participant is represented.",
  challenge: "Present one image to the group as if a visitor had just asked about it.",
  reflect: [
    "What did I photograph at the beginning?",
    "What do I photograph now?",
    "What technical skill improved most?",
    "What did I learn about consent?",
    "What did I learn about my community?",
    "Which photograph changed how I see something?",
    "What story should I continue?",
    "What would I teach a new participant?",
    "What am I proud of?",
    "What comes next?"
  ],
  assignment: { paras: ["Present the work at the community exhibition and contribute to the photo-zine."] },
  materials: "Laptops, backup storage, printed portfolio checklists, badge cards, final prints or proofs.",
  ethics: "Publication is not the end of responsibility. Continue listening to participants and people photographed after the work is shared."
}
];
