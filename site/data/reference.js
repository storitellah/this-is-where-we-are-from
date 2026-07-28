export const MONTHS = [
  { n: 1, name: "Learning to See", blurb: "Point of view, light, focus, and the first rules of respect. We begin by noticing." },
  { n: 2, name: "Controlling Light", blurb: "Aperture, shutter, ISO. Technical control in service of the story." },
  { n: 3, name: "Building Visual Language", blurb: "Rhythm, lenses, distance, and portraits made with people rather than taken from them." },
  { n: 4, name: "Telling Community Stories", blurb: "The single image, the sequence, and the words that sit beside them." },
  { n: 5, name: "Editing and Writing", blurb: "Choosing, correcting, writing, returning. The story becomes finished work." },
  { n: 6, name: "Publishing and Sharing", blurb: "Zine, exhibition, final field production, and a public presentation led by the participants." }
];

export const THEMES = ["Identity","Home","Family","Friendship","Community","Dreams","Creativity","Pride","Belonging","Resilience","Change","Hope"];

export const CONTACT_LABELS = ["Home","Friendship","Light","Work","Play","Pride","Change","Hope"];

export const PRINCIPLES = [
  { n: "01", t: "From within", d: "We photograph from within the community, not from a distance." },
  { n: "02", t: "With consent", d: "We ask for consent and protect people’s dignity." },
  { n: "03", t: "Specific and honest", d: "We tell stories that are specific, honest, and connected to lived experience." }
];

export const SESSION_RHYTHM = [
  { t: "Welcome and check-in", m: "10 min" },
  { t: "Review of the previous assignment", m: "25 min" },
  { t: "New concept and demonstration", m: "35 min" },
  { t: "Short break", m: "10 min" },
  { t: "Guided practice", m: "40 min" },
  { t: "Group review", m: "30 min" },
  { t: "Reflection and assignment", m: "20 min" }
];

export const OUTCOMES = [
  "A strong personal photography portfolio for every participant",
  "A collaborative digital and printed photo-zine",
  "A community photography exhibition",
  "A set of personal reflections, captions, quotes, and short stories",
  "A final public presentation led by the participants",
  "Greater confidence in using photography to represent home and community"
];

export const APERTURES = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22];
export const SHUTTERS = [
  { label: "30s", s: 30 }, { label: "15s", s: 15 }, { label: "8s", s: 8 }, { label: "4s", s: 4 },
  { label: "2s", s: 2 }, { label: "1s", s: 1 }, { label: "1/2", s: 0.5 }, { label: "1/4", s: 0.25 },
  { label: "1/8", s: 0.125 }, { label: "1/15", s: 1/15 }, { label: "1/30", s: 1/30 }, { label: "1/60", s: 1/60 },
  { label: "1/125", s: 1/125 }, { label: "1/250", s: 1/250 }, { label: "1/500", s: 1/500 },
  { label: "1/1000", s: 1/1000 }, { label: "1/2000", s: 1/2000 }, { label: "1/4000", s: 1/4000 }
];
export const ISOS = [100, 200, 400, 800, 1600, 3200, 6400, 12800];

// ev = brightness of the scene in EV at ISO 100. Higher = brighter light.
export const PRESETS = [
  { name: "Bright outdoor portrait", ev: 15, note: "Open sun, strong shadows, plenty of light to spend." },
  { name: "Open shade portrait", ev: 12, note: "Soft light beside a wall or under a roof edge." },
  { name: "Indoor doorway", ev: 9, note: "Light falls from one side. The room behind is much darker." },
  { name: "Evening street", ev: 7, note: "Shop lights and doorways. Handheld sharpness becomes difficult." },
  { name: "Football action", ev: 14, note: "Fast movement in daylight." },
  { name: "Moving transport", ev: 13, note: "Movement crossing the frame at speed." },
  { name: "Group portrait", ev: 13, note: "Several faces at different distances." },
  { name: "Low-light family scene", ev: 6, note: "One lamp. Movement is slow but the light is thin." },
  { name: "Silhouette", ev: 15, note: "Bright background, dark subject. Expose for the sky." },
  { name: "Intentional motion trail", ev: 8, note: "Late light, camera supported, movement recorded as trails." }
];

export const CHALLENGES = [
  { id: "c1", goal: "Freeze a football in daylight.", preset: 4, test: "shutter<=1/1000 and exposure balanced", hint: "Start at 1/1000 and open the aperture to pay for the light.", badge: "Moment Catcher", check: s => s.shutter <= 1/1000 && Math.abs(s.ev) <= 0.7 },
  { id: "c2", goal: "Blur a moving wheel.", preset: 5, test: "shutter slower than 1/30", hint: "Support the camera, then use 1/15 or slower and close the aperture.", badge: "Motion Reader", check: s => s.shutter >= 1/30 && Math.abs(s.ev) <= 1 },
  { id: "c3", goal: "Make a portrait with a soft background.", preset: 0, test: "aperture wider than f/2.8", hint: "Use f/2 or wider, then use a fast shutter to control the brightness.", badge: "Light Finder", check: s => s.aperture <= 2.8 && Math.abs(s.ev) <= 0.7 },
  { id: "c4", goal: "Keep a group in focus.", preset: 6, test: "aperture f/8 or narrower", hint: "f/8 or f/11 keeps several faces sharp. Raise ISO if the shutter gets too slow.", badge: "Focus Keeper", check: s => s.aperture >= 8 && Math.abs(s.ev) <= 0.7 && s.shutter <= 1/60 },
  { id: "c5", goal: "Photograph indoors without extreme noise.", preset: 2, test: "ISO 1600 or lower, balanced", hint: "Open the aperture first. Only then raise ISO.", badge: "Careful Editor", check: s => s.iso <= 1600 && Math.abs(s.ev) <= 0.7 },
  { id: "c6", goal: "Create a silhouette.", preset: 8, test: "two stops or more underexposed", hint: "Expose for the bright background, not the subject.", badge: "Light Finder", check: s => s.ev <= -1.7 },
  { id: "c7", goal: "Keep the sky from becoming too bright.", preset: 0, test: "not overexposed", hint: "Bring the meter to zero or slightly under.", badge: "Light Finder", check: s => s.ev <= 0.3 && s.ev >= -1.3 },
  { id: "c8", goal: "Use panning.", preset: 5, test: "shutter between 1/30 and 1/125", hint: "Move the camera with the subject at 1/60.", badge: "Motion Reader", check: s => s.shutter <= 1/30 && s.shutter >= 1/125 && Math.abs(s.ev) <= 1 },
  { id: "c9", goal: "Create a sharp handheld evening image.", preset: 3, test: "shutter 1/60 or faster, balanced", hint: "Open the aperture wide, then raise ISO until 1/60 is possible.", badge: "Focus Keeper", check: s => s.shutter <= 1/60 && Math.abs(s.ev) <= 0.7 },
  { id: "c10", goal: "Create a long-exposure light trail.", preset: 9, test: "shutter 1 second or slower", hint: "Support the camera, use ISO 100 and a narrow aperture.", badge: "Moment Catcher", check: s => s.shutter >= 1 && Math.abs(s.ev) <= 1.2 },
  { id: "c11", goal: "Use low ISO for a clean image.", preset: 0, test: "ISO 100 and balanced", hint: "There is plenty of light. Spend it on a low ISO.", badge: "Careful Editor", check: s => s.iso === 100 && Math.abs(s.ev) <= 0.7 },
  { id: "c12", goal: "Balance the exposure after opening the aperture two stops.", preset: 1, test: "balanced at f/2.8 or wider", hint: "Every stop of aperture must be paid back with shutter speed or ISO.", badge: "Story Builder", check: s => s.aperture <= 2.8 && Math.abs(s.ev) <= 0.35 }
];

export const PROMPTS = [
  "Photograph a colour that reminds you of home.",
  "Photograph a friendship without showing faces.",
  "Photograph a small act of care.",
  "Photograph a place from knee height.",
  "Photograph a reflection.",
  "Photograph hands making or repairing something.",
  "Photograph a repeated shape.",
  "Photograph a quiet corner.",
  "Photograph a sound.",
  "Photograph something that is changing.",
  "Photograph a sign that says something about the community.",
  "Photograph a dream without staging a person.",
  "Photograph a moment of play.",
  "Photograph one object from five viewpoints.",
  "Photograph a place at two different times."
];

export const JOURNAL_PROMPTS = [
  "Today I noticed...",
  "I was thinking...",
  "I made this photograph because...",
  "I changed my mind about...",
  "I want to return to...",
  "I need help with...",
  "A photograph I am proud of...",
  "A question I still have..."
];

export const BADGES = ["Light Finder","Focus Keeper","Moment Catcher","Respectful Portrait Maker","Story Builder","Careful Editor","Caption Writer","Sequence Maker","Community Listener","Zine Maker","Exhibition Guide","Thoughtful Photographer"];

export const REVIEW_CRITERIA = ["Focus","Light","Composition","Moment","Story","Ethics"];

export const ZINE_SLOTS = ["Cover","Opening","Middle","Middle","Middle","Closing","Back cover"];

export const SAFETY = [
  { h: "Consent", items: [
    "Ask before making close portraits.",
    "Explain who you are and what the project is.",
    "Explain where the image may appear.",
    "Accept no.",
    "Allow people to change their mind where possible.",
    "Use age-appropriate consent and facilitator guidance for children.",
    "Do not assume that being in public removes all ethical responsibility."
  ] },
  { h: "Dignity", items: [
    "Do not use humiliation, suffering, injury, grief, poverty, or private difficulty as visual decoration.",
    "Do not ask people to repeat painful actions for the camera.",
    "Do not create false scenes.",
    "Do not reduce a person to one difficult moment.",
    "Show people as individuals with context and agency."
  ] },
  { h: "Privacy", items: [
    "Avoid unnecessary exact addresses, school details, phone numbers, documents, medical details, and private family information.",
    "Remove sensitive metadata before public sharing where needed.",
    "Do not publish a photograph that may expose someone to stigma, punishment, harassment, or danger."
  ] },
  { h: "Physical safety", items: [
    "Work in groups.",
    "Follow agreed routes.",
    "Keep emergency contacts.",
    "Do not stand in roads, railway areas, open drains, unstable buildings, roofs, restricted areas, or unsafe crowds.",
    "Stop walking before looking through the camera.",
    "Keep equipment discreet where required.",
    "Follow facilitator instructions."
  ] },
  { h: "Emotional care", items: [
    "Participants may photograph subjects connected to difficult memories.",
    "Allow anyone to pause, skip, or change an assignment.",
    "Do not force personal disclosure.",
    "Use private check-ins when needed.",
    "Avoid public critique that embarrasses a participant.",
    "Focus feedback on photographs and choices, not personal worth."
  ] },
  { h: "Digital safety", items: [
    "Do not upload participant images automatically.",
    "Keep local drafts private.",
    "Explain what export and sharing buttons do.",
    "Confirm consent before posting.",
    "Do not expose hidden file paths or metadata.",
    "Include a clear Reset Local Data control."
  ] }
];

export const GLOSSARY = [
  ["Aperture","The adjustable opening in a lens that controls light and affects depth of field."],
  ["Caption","Accurate written information that gives context to a photograph."],
  ["Composition","The arrangement of visual elements inside the frame."],
  ["Consent","A clear and informed agreement that can be refused."],
  ["Contact sheet","A grid of images used for reviewing and selecting photographs."],
  ["Crop","Removing outer parts of an image to improve framing or format."],
  ["Depth of field","The range of distance that appears acceptably sharp."],
  ["Documentary photography","Photography that records real people, places, events, and conditions with attention to accuracy and context."],
  ["Exposure","The amount of light recorded in an image."],
  ["Exposure triangle","The relationship between aperture, shutter speed, and ISO."],
  ["Focal length","A lens measurement that affects field of view and image appearance."],
  ["Focus","The area of the image that appears sharp."],
  ["Frame","The visible boundary of a photograph."],
  ["ISO","A camera control that affects image brightness and visible noise."],
  ["Leading lines","Visual lines that guide the viewer’s eye."],
  ["Metadata","Information stored with a digital file, such as date, camera settings, and location."],
  ["Motion blur","The visible recording of movement during an exposure."],
  ["Negative space","Open space around the main subject."],
  ["Noise","Random grain or colour variation that becomes more visible at high ISO."],
  ["Perspective","The way distance and spatial relationships appear from a camera position."],
  ["Photo essay","A connected group of images that develops a story or idea."],
  ["Portrait","A photograph that represents a person through face, body, activity, environment, object, or gesture."],
  ["Reflection","Personal writing about what the photographer noticed, felt, questioned, or learned."],
  ["Resolution","The amount of image detail available for display or printing."],
  ["Rule of thirds","A composition guide that divides the frame into nine parts."],
  ["Sequence","The order in which photographs are presented."],
  ["Shutter speed","The length of time the camera records light."],
  ["Visual storytelling","Communicating experience, information, feeling, or ideas through images and their order."],
  ["White balance","A setting that corrects or changes how colour temperature appears."],
  ["Zine","A small self-published work combining images, text, and design."]
];
