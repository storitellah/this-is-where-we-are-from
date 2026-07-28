// Lessons 1–12. Curriculum content © Brian Otieno.
export const LESSONS_A = [
{
  n: 1, month: 1, week: 1, outdoor: false, skill: "Seeing",
  title: "Welcome, Photography, and Our Point of View",
  format: "Indoor workshop", duration: "3 hours",
  question: "What can photography help us notice and say about where we are from?",
  goals: [
    "Explain the purpose of the project in their own words",
    "Describe photography as a way of noticing, remembering, and communicating",
    "Identify personal themes they care about",
    "Handle a camera or phone safely",
    "Understand the first rules of respect, consent, and dignity",
    "Make a first baseline photograph"
  ],
  vocab: "Photographer, subject, frame, story, point of view, consent, dignity, observation, memory.",
  prep: [
    "Arrange cameras or phones",
    "Charge batteries",
    "Prepare memory cards",
    "Print or display project themes",
    "Prepare a simple participant agreement",
    "Create a table of everyday objects for the first exercise",
    "Prepare name labels",
    "Display the project logo and six-month roadmap"
  ],
  teaching: [
    { paras: [
      "Begin by introducing photography as a choice. A photographer chooses where to stand, what to include, what to leave out, and when to press the shutter. Two people can stand in the same place and create very different photographs because they notice different things.",
      "Explain that the project does not ask participants to copy images that outsiders often make about Kibera. It asks them to pay attention to their own lives and decide what deserves to be seen, remembered, questioned, celebrated, or protected."
    ] },
    { h: "Introduce the project themes", bullets: ["Identity","Home","Family","Friendship","Community","Dreams","Creativity","Pride","Belonging","Resilience","Change","Hope"],
      paras: ["Ask participants to select three themes that feel close to them. Let them explain their choices in pairs."] },
    { h: "Basic camera care", bullets: [
      "Use the strap",
      "Keep fingers away from the lens",
      "Hold the camera with two hands",
      "Keep equipment away from water, dust, crowds, and unsafe edges",
      "Ask before deleting another person’s images",
      "Return equipment in the condition received",
      "Check battery and storage before leaving"
    ] },
    { h: "Introduce consent", bullets: [
      "Ask before making a close portrait",
      "Explain the project clearly",
      "Accept no as a complete answer",
      "Do not pressure people",
      "Do not photograph private, painful, or risky situations for the sake of a dramatic image",
      "Do not post another participant’s image without permission"
    ] }
  ],
  demo: "Place one object in the centre of the room. Photograph it from eye level, above, below, close, far, and through another object. Show how position changes meaning.",
  individual: "Each participant chooses one object that says something about them. They make six different photographs of it.",
  groupWork: { paras: ["Create a wall of first images. Ask:"], bullets: [
    "What did the photographer notice?",
    "What feels personal?",
    "What changed when the viewpoint changed?",
    "What information sits outside the frame?"
  ] },
  challenge: "Make one photograph titled This Is Me Without Showing My Face.",
  reflect: [
    "What do I want people to understand about where I am from?",
    "What kind of photographer do I want to become?",
    "What felt easy today?",
    "What felt difficult?"
  ],
  assignment: { paras: ["Make five photographs during the week:"], bullets: [
    "Something that represents home",
    "Something that represents friendship",
    "A place you pass often",
    "An object with a personal story",
    "A moment that made you stop"
  ], after: "Write one sentence under each image explaining why you made it." },
  materials: "Cameras or phones, straps, charged batteries, notebooks, pens, display screen, printed project themes.",
  ethics: "A photograph is never more important than a person’s safety, privacy, or dignity."
},
{
  n: 2, month: 1, week: 2, outdoor: false, skill: "Light",
  title: "Light, Focus, and Holding the Camera",
  format: "Indoor and nearby practice", duration: "3 hours",
  question: "How do light, focus, and camera movement affect what a photograph looks like?",
  goals: [
    "Identify hard light, soft light, front light, side light, and backlight",
    "Focus on the intended subject",
    "Hold a camera steadily",
    "Recognise common causes of blur",
    "Make simple exposure adjustments on a phone or camera",
    "Compare the same subject in different light"
  ],
  vocab: "Light, shadow, highlight, focus, autofocus, focus point, blur, camera shake, sharpness, contrast.",
  teaching: [
    { paras: ["Explain that cameras need light. Light can reveal shape, texture, emotion, movement, and time of day."] },
    { h: "Five types of light", bullets: [
      "Front light falls directly on the front of the subject. It gives clear detail but can look flat.",
      "Side light comes from one side. It reveals texture, shape, and depth.",
      "Backlight comes from behind the subject. It can create silhouettes, glowing edges, or low contrast.",
      "Hard light creates strong shadows with clear edges.",
      "Soft light creates gentle shadows and smooth transitions."
    ] },
    { h: "Focus", paras: ["The camera must know which part of the scene matters most. On a phone, tap the screen where you want focus. On a camera, choose a focus point or use centre focus and recompose."] },
    { h: "Why images blur", bullets: [
      "The focus point missed the subject",
      "The camera moved",
      "The subject moved",
      "The shutter speed was too slow",
      "The lens or camera had difficulty focusing in low light",
      "The lens was dirty"
    ] },
    { h: "Stable camera posture", bullets: [
      "Feet apart",
      "Elbows close to the body",
      "Left hand supporting the camera",
      "Right hand controlling the shutter",
      "Gentle shutter press",
      "Use a wall, table, post, or knee for support when needed"
    ] }
  ],
  demo: "Photograph the same face or object near a doorway, under direct sun, beside a window, and with backlight. Show the differences. Make one sharp photograph and one intentionally blurred photograph. Ask participants to identify why each result happened.",
  individual: "Participants photograph one object in four kinds of light. They tap or select a different focus point in each frame.",
  groupWork: { paras: ["Create pairs. One person moves slowly while the other tries three approaches:"], bullets: [
    "Hold the camera still", "Follow the subject", "Ask the subject to pause"
  ], after: "Compare the results." },
  challenge: { paras: ["Make:"], bullets: [
    "One photograph with clear sharp detail",
    "One silhouette",
    "One photograph where shadow becomes the main subject",
    "One intentional motion blur"
  ] },
  reflect: [
    "Which light made the subject feel most interesting?",
    "Where did the camera focus?",
    "Was blur a mistake or a useful choice?",
    "What helped make the camera steady?"
  ],
  assignment: { paras: ["Photograph one location at three different times of day. Write what changed in the light, colour, shadow, and mood."] },
  materials: "Cameras or phones, one shared object, window or doorway light, notebooks, pens.",
  ethics: "Do not ask anyone to stand in dangerous traffic, unstable structures, railway areas, rooftops, drainage channels, or other unsafe places for a photograph."
},
{
  n: 3, month: 1, week: 3, outdoor: false, skill: "Composition",
  title: "Composition Foundations",
  format: "Indoor workshop", duration: "3 hours",
  question: "How can arrangement inside the frame guide the viewer’s attention?",
  goals: [
    "Use the rule of thirds",
    "Fill the frame",
    "Use negative space",
    "Find leading lines",
    "Notice patterns and symmetry",
    "Simplify a distracting background",
    "Create depth using layers",
    "Explain why a composition works"
  ],
  vocab: "Composition, frame, rule of thirds, leading lines, symmetry, pattern, negative space, background, foreground, middle ground, depth, framing, cropping.",
  teaching: [
    { paras: ["Explain that composition is the arrangement of visual information inside the frame. Composition does not have one perfect formula. It gives the photographer tools for making choices."] },
    { h: "Rule of thirds", paras: ["Imagine two vertical and two horizontal lines dividing the frame into nine parts. Place an important subject near a line or intersection. This can create balance and leave useful space."] },
    { h: "Leading lines", paras: ["Roads, walls, shadows, railings, wires, paths, and rows of objects can guide the eye toward a subject."] },
    { h: "Symmetry and patterns", paras: ["Repeated shapes can create rhythm. A small break in the pattern can become the main point of attention."] },
    { h: "Viewpoint", paras: ["Move before taking the photograph. Try high, low, close, far, side, back, and through another object."] },
    { h: "Background", paras: ["A busy background can hide the subject. Take one step left, right, closer, lower, or higher to simplify it."] },
    { h: "Depth", paras: ["Use foreground, middle ground, and background. Overlapping objects help a flat image feel layered."] },
    { h: "Framing", paras: ["Use doorways, windows, shadows, hands, cloth, branches, or gaps to surround the subject."] },
    { h: "Fill the frame", paras: ["Move closer when the subject matters more than the surroundings."] },
    { h: "Negative space", paras: ["Leave an open area around the subject. Empty space can create calm, scale, direction, or tension."] },
    { h: "Cropping", paras: ["Remove information that weakens the image. Do not crop so tightly that the subject feels trapped unless that feeling supports the story."] }
  ],
  demo: "Use the composition toggles in the Frame Lab. Turn on the rule of thirds grid, a leading line, background clutter, a foreground layer, a natural frame, and negative space one at a time, and describe how the scene changes.",
  individual: "Give participants one object and ten minutes. They create one image for each composition technique.",
  groupWork: "Display photographs without names. The group identifies the technique and describes where the eye moves first.",
  challenge: { paras: ["Make a nine-image composition contact sheet:"], bullets: [
    "Rule of thirds","Leading lines","Symmetry","Pattern break","Low viewpoint","Frame within a frame","Layered depth","Fill the frame","Negative space"
  ] },
  reflect: [
    "Where does the eye go first?",
    "What can be removed?",
    "Does the background support the subject?",
    "How does the viewpoint affect the meaning?",
    "Which composition feels most natural to me?"
  ],
  assignment: { paras: ["Choose one familiar place. Make four photographs of it using four different composition techniques. Do not repeat the same camera position."] },
  materials: "Cameras or phones, one object per participant, printed contact sheet grid, notebooks, pens.",
  ethics: "Move carefully while looking through the camera. Stop walking before composing. Stay aware of people, traffic, steps, open drains, and obstacles."
},
{
  n: 4, month: 1, week: 4, outdoor: true, skill: "Seeing",
  title: "Outdoor Practical: A Familiar Place Seen Differently",
  format: "Outdoor photography practical", duration: "3 to 4 hours",
  question: "How can we make new photographs in a place we already know?",
  goals: [
    "Apply focus, light, and composition skills outdoors",
    "Slow down and observe before photographing",
    "Work from a visual checklist",
    "Respect public and private boundaries",
    "Produce a short set of connected images",
    "Review work with constructive language"
  ],
  vocab: "Observation, route, checklist, sequence, boundary, constructive review.",
  teaching: [
    { h: "Briefing", paras: [
      "Explain that familiarity can make people stop noticing. The purpose of this walk is not to search for a dramatic event. It is to pay attention to ordinary details, changes, routines, gestures, colours, and relationships.",
      "Divide participants into small groups with an adult facilitator where required. Set a clear route, time, meeting point, and emergency contact."
    ] },
    { h: "Photo walk prompts", paras: ["Each participant makes at least 20 photographs and selects 8 later. Required prompts:"], bullets: [
      "A doorway that suggests a story",
      "A hand at work",
      "A repeated pattern",
      "A strong shadow",
      "A sign or handwritten message",
      "A quiet moment",
      "A reflection",
      "A high or low viewpoint",
      "Something changing",
      "Something people usually ignore",
      "A photograph with foreground, middle ground, and background",
      "A photograph titled This Is Where We’re From"
    ] },
    { h: "Pause and notice exercise", paras: ["At three points on the route, stop for two minutes without photographing. Participants list:"], bullets: [
      "Five things they see","Four sounds","Three movements","Two colours","One unanswered question"
    ], after: "They then make one photograph based on the list." }
  ],
  groupWork: { paras: ["Back in the classroom, each participant selects eight photographs. Use these questions:"], bullets: [
    "Which image contains the strongest moment?",
    "Which image shows the place in a personal way?",
    "Which image has the clearest composition?",
    "Which image needs a different viewpoint?",
    "Which image gives useful context?",
    "What story begins to appear across the set?"
  ] },
  challenge: "Make one photograph on the route that you would not have noticed a month ago.",
  reflect: [
    "What did I stop noticing in this place before today?",
    "Which prompt was hardest?",
    "What would I photograph again with more time?"
  ],
  assignment: { paras: ["Create a final sequence of five images titled A Place I Thought I Knew. Add a two-sentence reflection."] },
  materials: "Cameras or phones, charged batteries, water, printed prompt cards, notebooks, pens, facilitator contact list.",
  ethics: "Stay within the agreed route. Do not separate from the group. Ask before entering homes or businesses. Do not photograph anyone in distress, receiving medical care, changing clothes, bathing, or dealing with a private situation."
},
{
  n: 5, month: 2, week: 5, outdoor: false, skill: "Exposure",
  title: "The Exposure Triangle",
  format: "Indoor technical workshop", duration: "3 hours",
  question: "How do aperture, shutter speed, and ISO work together to control brightness and visual effect?",
  goals: [
    "Name the three parts of the exposure triangle",
    "Explain what each control changes",
    "Read a simple exposure meter",
    "Adjust one setting and compensate with another",
    "Predict depth of field, motion blur, and noise",
    "Use the Exposure Triangle Lab"
  ],
  vocab: "Exposure, aperture, f-number, shutter speed, ISO, underexposed, overexposed, exposure meter, stop, depth of field, motion blur, noise.",
  teaching: [
    { paras: ["Explain exposure as the amount of light recorded by the camera."] },
    { h: "Aperture", paras: ["Aperture is the opening inside the lens."], bullets: [
      "A smaller f-number such as f/1.8 means a wider opening.",
      "A wider opening allows more light.",
      "A wider opening can create a shallow depth of field.",
      "A larger f-number such as f/16 means a smaller opening.",
      "A smaller opening allows less light.",
      "A smaller opening can keep more of the scene in focus."
    ] },
    { h: "Shutter speed", paras: ["Shutter speed controls how long the sensor receives light."], bullets: [
      "A fast shutter such as 1/1000 second allows less light and freezes movement.",
      "A slow shutter such as 1/15 second allows more light and records more movement.",
      "Slow shutter speeds can show motion blur or camera shake."
    ] },
    { h: "ISO", paras: ["ISO controls the camera’s sensitivity or signal amplification."], bullets: [
      "A low ISO such as 100 usually produces a cleaner image but needs more light.",
      "A high ISO such as 3200 brightens a low-light image but can add visible noise and reduce detail."
    ] },
    { h: "Balance", paras: ["Changing one setting changes the exposure. The photographer can adjust another setting to keep the brightness similar. For example:"], bullets: [
      "f/2.8, 1/500, ISO 200","f/4, 1/250, ISO 200","f/4, 1/500, ISO 400"
    ], after: "These combinations can create similar brightness with different visual effects." }
  ],
  demo: "Use the Exposure Triangle Lab. Move one control at a time. Ask participants to predict what will change before moving the slider.",
  individual: { paras: ["Complete six simulation challenges:"], bullets: [
    "Bright outdoor portrait with a soft background",
    "Football action frozen in daylight",
    "Indoor family scene with low noise",
    "Evening street scene with acceptable sharpness",
    "Intentional movement trail",
    "Group portrait with several faces in focus"
  ] },
  groupWork: "Give each group a scenario card. They agree on aperture, shutter, and ISO settings, then explain their choice.",
  challenge: "Change one setting by two stops and compensate with another so the brightness stays the same. Explain what changed visually.",
  reflect: [
    "Which setting do I choose first for a portrait?",
    "Which setting do I choose first for movement?",
    "When would I accept a high ISO?",
    "What does the exposure meter tell me?",
    "Which visual effect matters most in each situation?"
  ],
  assignment: { paras: ["Use manual mode, aperture priority, shutter priority, or a phone camera control app where available. Make three photographs with similar brightness but different combinations of aperture, shutter, and ISO. Record the settings."] },
  materials: "Cameras with manual controls or phone camera apps, display screen for the Exposure Lab, scenario cards, notebooks, pens.",
  ethics: "Technical control should support the story. Do not place people in unsafe situations just to test settings."
},
{
  n: 6, month: 2, week: 6, outdoor: false, skill: "Depth",
  title: "Aperture, Depth of Field, and Visual Attention",
  format: "Indoor and nearby practice", duration: "3 hours",
  question: "How can depth of field direct attention and add context?",
  goals: [
    "Explain shallow and deep depth of field",
    "Identify how aperture, distance, and focal length affect focus depth",
    "Create a portrait with a soft background",
    "Create a layered scene with broad focus",
    "Select depth of field based on story needs"
  ],
  vocab: "Aperture, depth of field, shallow focus, deep focus, focus plane, focal length, subject distance, background distance, bokeh.",
  teaching: [
    { paras: ["Explain that depth of field is the area that appears acceptably sharp in front of and behind the focus point."] },
    { h: "A shallow depth of field can", bullets: [
      "Separate a person from a busy background","Direct attention","Create intimacy","Hide distracting information"
    ] },
    { h: "A deep depth of field can", bullets: [
      "Show a person in their environment","Keep several layers readable","Connect the subject to place","Support group photographs"
    ] },
    { h: "Depth of field changes through", bullets: [
      "Aperture","Distance between camera and subject","Distance between subject and background","Focal length","Sensor and lens characteristics"
    ], after: "Avoid teaching that one setting is always better. Ask what the story needs." }
  ],
  demo: "Use the depth of field diagram in the Exposure Lab. Move the camera, subject, background, and aperture control, and watch the focus zone change.",
  individual: { paras: ["Make four portraits or object studies:"], bullets: [
    "Wide aperture, close subject, distant background",
    "Narrow aperture, subject inside a layered scene",
    "Same aperture but different camera distance",
    "Same distance but different aperture"
  ] },
  groupWork: "Compare a close portrait and an environmental portrait. Discuss what each image tells us.",
  challenge: { paras: ["Create a two-image pair:"], bullets: [
    "Image one says Look at this person or object.",
    "Image two says Look at this person or object in this place."
  ] },
  reflect: [
    "What information disappears when the background becomes soft?",
    "What information becomes useful when more of the scene is sharp?",
    "Is the focus point on the most important detail?",
    "Does the visual effect support the story?"
  ],
  assignment: { paras: ["Create a three-image depth study: shallow, medium, and deep focus. Use the same subject when possible."] },
  materials: "Cameras or phones with aperture control, a nearby location with layers, notebooks, pens.",
  ethics: "Do not use a blurred background to remove context that viewers need to understand the situation honestly."
},
{
  n: 7, month: 2, week: 7, outdoor: false, skill: "Motion",
  title: "Shutter Speed, Movement, ISO, and Low Light",
  format: "Indoor technical workshop", duration: "3 hours",
  question: "How can we freeze, follow, or reveal movement in different light?",
  goals: [
    "Freeze movement with a fast shutter",
    "Create intentional motion blur",
    "Pan with a moving subject",
    "Recognise camera shake",
    "Use ISO as a practical compromise",
    "Choose a minimum shutter speed for handheld work"
  ],
  vocab: "Fast shutter, slow shutter, motion blur, panning, camera shake, ISO, noise, stabilisation, burst mode.",
  teaching: [
    { paras: ["Explain three main ways to photograph movement."] },
    { h: "Freeze", paras: ["Use a fast shutter speed. This can preserve a brief gesture, jump, splash, running action, or flying object."] },
    { h: "Blur", paras: ["Use a slow shutter speed while the camera remains still. Moving parts record as trails or soft shapes."] },
    { h: "Pan", paras: ["Move the camera with the subject during the exposure. The subject can remain more recognisable while the background streaks."] },
    { h: "ISO as a practical choice", paras: ["Raising ISO can help maintain a faster shutter in low light. The trade-off is increased noise. A noisy sharp image may still communicate better than a clean image with accidental blur."] },
    { h: "Suggested starting points", bullets: [
      "Walking person: 1/250 second",
      "Running person: 1/500 second or faster",
      "Fast sport: 1/1000 second or faster",
      "Intentional handheld blur: 1/15 to 1/4 second",
      "Panning: 1/30 to 1/125 second, depending on speed"
    ], after: "These are starting points, not fixed rules." }
  ],
  demo: "Use the moving subject in the Exposure Lab. Change shutter speed and show frozen movement, subject blur, background blur, and camera shake as separate effects.",
  individual: { paras: ["Photograph the following using at least three shutter speeds:"], bullets: [
    "A hand moving","A person walking","A person running","A turning wheel","Water movement","A still object in low light"
  ] },
  groupWork: "Create a movement guessing game. Display images and ask the group to estimate whether the shutter was fast, slow, or panned.",
  challenge: "Make a triptych called Still, Moving, and Passing.",
  reflect: [
    "Did the blur communicate movement or confusion?",
    "Was the blur caused by the subject or the camera?",
    "What shutter speed would improve the next attempt?",
    "What did increasing ISO make possible?"
  ],
  assignment: { paras: ["Create a four-image motion series using freeze, blur, pan, and stillness."] },
  materials: "Cameras or phones with shutter control, a wheel or ball, a dark corner of the room, notebooks, pens.",
  ethics: "Do not photograph moving vehicles from the road. Work from a safe position with clear visibility and facilitator guidance."
},
{
  n: 8, month: 2, week: 8, outdoor: true, skill: "Exposure",
  title: "Outdoor Practical: Exposure Mission",
  format: "Outdoor photography practical", duration: "3 to 4 hours",
  question: "Can we control brightness, motion, depth, and noise while working in changing conditions?",
  goals: [
    "Change settings with purpose",
    "Read changing light",
    "Make exposure decisions quickly",
    "Record camera settings",
    "Compare technical choices",
    "Solve common exposure problems"
  ],
  vocab: "Light zone, mission card, exposure log, troubleshooting, stop, compensation.",
  teaching: [
    { h: "Briefing", paras: ["Divide the route into light zones:"], bullets: [
      "Open sunlight","Open shade","Indoor doorway","Moving street activity","Darker interior with permission","Backlit area"
    ], after: "Participants work through mission cards." },
    { h: "Mission cards", bullets: [
      "Freeze a jump or fast gesture.",
      "Show movement with blur.",
      "Make a portrait with shallow depth of field.",
      "Make a scene with foreground, middle ground, and background in focus.",
      "Photograph a backlit subject without losing all detail.",
      "Make a clean low-ISO image.",
      "Make a usable high-ISO image in low light.",
      "Create two images with similar brightness but different settings.",
      "Create one silhouette.",
      "Create one image where shadow carries the story."
    ] },
    { h: "Exposure log", paras: ["For every selected image, record:"], bullets: [
      "Aperture","Shutter speed","ISO","Light condition","What the photographer wanted","What worked","What to change"
    ] },
    { h: "Mid-walk troubleshooting stop", paras: ["Ask participants to show one image that is:"], bullets: [
      "Too bright","Too dark","Blurred","Noisy","Focused on the wrong area"
    ], after: "Let the group propose a solution." }
  ],
  groupWork: "Select six images. Display the settings beside each image. Review the link between the setting and the result.",
  challenge: "Complete all ten mission cards and log the settings for each one.",
  reflect: [
    "Which light zone was hardest?",
    "Which setting did I reach for first?",
    "What would I change on the next walk?"
  ],
  assignment: { paras: ["Create a four-image series titled Light Changes Everything."] },
  materials: "Cameras or phones with manual controls, printed mission cards, exposure log sheets, water, facilitator contact list.",
  ethics: "Work in pairs. Do not enter dark or enclosed private spaces without clear permission and facilitator approval."
},
{
  n: 9, month: 3, week: 9, outdoor: false, skill: "Composition",
  title: "Advanced Composition, Viewpoint, and Visual Rhythm",
  format: "Indoor workshop", duration: "3 hours",
  question: "How can composition create energy, calm, tension, rhythm, or surprise?",
  goals: [
    "Use repetition and pattern",
    "Break a pattern for emphasis",
    "Create visual rhythm",
    "Balance visual weight",
    "Use diagonal and curved lines",
    "Choose viewpoint for meaning",
    "Compose with edges and corners"
  ],
  vocab: "Visual rhythm, repetition, balance, visual weight, tension, diagonal, curve, edge, gesture, frame.",
  teaching: [
    { paras: ["Explain that visual language develops when technical decisions begin to carry feeling and meaning."] },
    { h: "Principles to teach", bullets: [
      "Repetition creates rhythm.",
      "A break in repetition creates attention.",
      "Large, dark, bright, sharp, or human elements can carry more visual weight.",
      "Diagonal lines can suggest movement.",
      "Horizontal lines can suggest calm or stability.",
      "Vertical lines can suggest height or strength.",
      "Curves can guide the eye gradually.",
      "Edge placement matters. Important hands, feet, signs, and faces should not be cut accidentally.",
      "Empty space can create direction. Leave space in front of a moving or looking subject when useful.",
      "Central composition can feel direct, formal, still, or confrontational.",
      "Off-centre composition can create movement, context, or uncertainty."
    ] }
  ],
  demo: "Use the draggable shapes in the Frame Lab. Move elements inside the frame to test balance, tension, repetition, and pattern breaks.",
  individual: { paras: ["Make one image for each feeling. Participants must use composition rather than facial expression alone."], bullets: [
    "Calm","Busy","Tense","Playful","Proud","Lonely"
  ] },
  groupWork: "Each participant shows two photographs. The group describes the visual feeling before hearing the photographer’s intention.",
  challenge: { paras: ["Photograph one location using three visual rhythms:"], bullets: ["Repetition","Interruption","Movement"] },
  reflect: [
    "Which element carries the most visual weight?",
    "Does the frame feel balanced or intentionally unbalanced?",
    "What happens at the edges?",
    "Did the viewpoint make the image more personal?"
  ],
  assignment: { paras: ["Create a six-image visual alphabet using lines, shapes, colours, shadows, or repeated forms."] },
  materials: "Cameras or phones, display screen, printed frames, notebooks, pens.",
  ethics: "Do not create tension by surprising, cornering, or embarrassing a person."
},
{
  n: 10, month: 3, week: 10, outdoor: false, skill: "Lens",
  title: "Lenses, Distance, Perspective, and Sharpness",
  format: "Indoor and nearby practice", duration: "3 hours",
  question: "How do lens choice and camera distance change space, faces, and relationships?",
  goals: [
    "Recognise wide, normal, and telephoto views",
    "Understand that distance affects perspective",
    "Avoid unflattering close wide-angle portraits",
    "Use wide views for context",
    "Use longer views for visual compression",
    "Improve technical sharpness",
    "Select focus mode for a subject"
  ],
  vocab: "Focal length, wide angle, normal lens, telephoto, perspective, distortion, compression, autofocus mode, single focus, continuous focus.",
  teaching: [
    { paras: ["Explain that focal length changes the field of view. Camera distance changes perspective."] },
    { h: "A wide lens", bullets: [
      "Includes more of the scene","Can exaggerate distance","Makes near objects appear larger","Works well for small spaces and environmental scenes","Can distort a face when used too close"
    ] },
    { h: "A normal lens", bullets: [
      "Gives a natural field of view","Works for everyday documentary photography","Balances person and place"
    ] },
    { h: "A telephoto lens", bullets: [
      "Narrows the field of view","Can isolate a subject","Makes distant elements appear closer together","Can support respectful distance, but must not become secretive surveillance"
    ] },
    { h: "Sharpness depends on", bullets: [
      "Correct focus point","Suitable shutter speed","Camera stability","Subject movement","Lens cleanliness","Sufficient contrast","Appropriate autofocus mode","Depth of field"
    ] }
  ],
  demo: "Photograph the same person with wide, normal, and telephoto views while adjusting camera position to keep the person similar in size. Compare the background and facial appearance.",
  individual: { paras: ["Create three images of the same person or object:"], bullets: [
    "Wide environmental view","Normal relationship view","Tight detail view"
  ] },
  groupWork: { paras: ["Diagnose ten sample problems:"], bullets: [
    "Camera shake","Subject movement","Missed focus","Too little depth of field","Lens obstruction","Low contrast focus failure"
  ] },
  challenge: "Make a three-image sequence titled Place, Person, Detail.",
  reflect: [
    "How close was I to the subject?",
    "Did the lens make the space feel larger or smaller?",
    "Is the sharpest area the most important area?",
    "Could I improve the image by moving rather than zooming?"
  ],
  assignment: { paras: ["Photograph one subject from three distances. Keep notes on how the relationship changes."] },
  materials: "Cameras with two or three lenses where available, phones with lens options, lens cloth, notebooks, pens.",
  ethics: "A longer lens does not remove the need for consent. Do not hide while making close images of private moments."
},
{
  n: 11, month: 3, week: 11, outdoor: false, skill: "Portrait",
  title: "Portraits, Trust, Consent, and Collaboration",
  format: "Indoor workshop", duration: "3 hours",
  question: "How can a portrait be made with someone rather than taken from them?",
  goals: [
    "Introduce themselves clearly",
    "Explain the project",
    "Request informed consent",
    "Collaborate on location, pose, gesture, and background",
    "Use light and composition for a portrait",
    "Make close and environmental portraits",
    "Review images with the person photographed"
  ],
  vocab: "Portrait, environmental portrait, consent, collaboration, representation, pose, gesture, expression, context, trust.",
  teaching: [
    { paras: ["A portrait is not only a face. It can include posture, hands, clothing, objects, environment, relationships, light, and distance."] },
    { h: "A simple consent conversation", bullets: [
      "Greet the person.",
      "Introduce yourself.",
      "Explain the project in clear language.",
      "Explain where the photograph may appear.",
      "Ask whether they agree.",
      "Accept the answer.",
      "Ask whether there is anything they do not want photographed.",
      "Show the image when possible.",
      "Record the person’s name correctly if they want to be identified.",
      "Respect later concerns."
    ] },
    { h: "Power", paras: ["A person may say yes because they feel pressured, confused, younger, dependent, or unable to refuse. The photographer must create space for a real choice."] },
    { h: "Portrait approaches", bullets: [
      "Direct portrait","Environmental portrait","Activity portrait","Detail portrait","Collaborative self-portrait","Portrait without showing the face"
    ] }
  ],
  demo: "Make a portrait twice: first without conversation or planning, then through collaboration. Compare body language, background, trust, and meaning.",
  individual: { paras: ["Participants work in pairs. Each person makes:"], bullets: [
    "A direct portrait","An environmental portrait","A portrait without showing the face"
  ], after: "The person being photographed chooses one image and explains why." },
  groupWork: "Write a respectful one-sentence introduction and practise it aloud.",
  challenge: "Create a portrait titled What I Want You to Know About Me.",
  reflect: [
    "Did the person understand the project?",
    "Did they have a real chance to say no?",
    "What choices did they make?",
    "Does the portrait protect dignity?",
    "What information should remain private?"
  ],
  assignment: { paras: ["With clear consent, create a three-image portrait story of someone you know. Include one quote in their own words."] },
  materials: "Cameras or phones, window light or a doorway, consent script cards, notebooks, pens.",
  ethics: "Never photograph children, vulnerable people, private interiors, illness, grief, conflict, or sensitive situations without appropriate consent and facilitator guidance."
},
{
  n: 12, month: 3, week: 12, outdoor: true, skill: "Portrait",
  title: "Outdoor Practical: Collaborative Portrait Walk",
  format: "Outdoor photography practical", duration: "3 to 4 hours",
  question: "How can trust, light, place, and collaboration shape a portrait?",
  goals: [
    "Approach a person respectfully",
    "Use a consent script",
    "Choose suitable portrait light",
    "Simplify or use the background",
    "Direct without controlling",
    "Make a portrait sequence",
    "Record names and quotes accurately"
  ],
  vocab: "Consent script, collaboration, environmental portrait, attribution, quote.",
  teaching: [
    { h: "Briefing", paras: [
      "Participants work in small groups. They may photograph people already connected to the group, such as family members, shopkeepers, artists, workers, friends, coaches, teachers, neighbours, or community members who agree.",
      "No participant must photograph a stranger."
    ] },
    { h: "Portrait checklist", paras: ["Create:"], bullets: [
      "A direct portrait",
      "An environmental portrait",
      "Hands or detail",
      "The person doing an activity",
      "A wider view of place",
      "A portrait chosen by the person photographed",
      "A short quote",
      "A photograph of an object that matters to them"
    ] },
    { h: "Collaboration prompt", paras: ["Ask the person:"], bullets: [
      "Where would you like to be photographed?",
      "Is there an object you want to include?",
      "What should the photograph say about you?",
      "Which image feels most like you?",
      "How would you like your name written?",
      "Is there anything you do not want shared?"
    ] }
  ],
  groupWork: "Each participant creates a five-image portrait sequence. The person photographed should have a chance to see it where practical.",
  challenge: "Make one portrait where the person photographed chose the location, the object, and the pose.",
  reflect: [
    "What changed when I asked and listened?",
    "Which portrait did the person prefer, and why?",
    "What did I learn about my own approach?"
  ],
  assignment: { paras: ["Write a 100-word reflection called What Changed When I Asked and Listened."] },
  materials: "Cameras or phones, consent script cards, notebook for names and quotes, water, facilitator contact list.",
  ethics: "Do not promise publication, payment, or outcomes that the project cannot guarantee. Record consent honestly."
}
];
