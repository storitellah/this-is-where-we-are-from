# READY-TO-PASTE BUILD PROMPT

## Project title

THIS IS WHERE WE'RE FROM: Six-Month Photography Learning Hub

## Core instruction

Create a complete, production-ready, responsive learning website for the participatory youth photography and storytelling project called THIS IS WHERE WE'RE FROM.

The website will be deployed on Cloudflare Pages. Build it as a static website using semantic HTML, modern CSS, and vanilla JavaScript. Do not require a database, paid service, server, login system, or build process. It must work after uploading the project folder directly to Cloudflare Pages.

The website is a six-month photography curriculum for 10 to 12 young people aged 12 to 19 in Kibera, Nairobi. There is one lesson every week, four lessons each month, for a total of 24 lessons. Every month must include an outdoor photography practical. Arrange all lessons in chronological order.

Do not use placeholder lesson text. Write and display the complete lesson content supplied in this prompt.

The project is participatory, community-led, youth-centred, visual, practical, honest, and fun. The young people are not subjects being spoken about. They are photographers and authors telling stories from their own lives.

## Project background

THIS IS WHERE WE'RE FROM is a participatory youth photography and storytelling project in Kibera, Nairobi, led by photographer Brian Otieno. It builds on his long-term Kibera Stories work, which began in 2013.

The project helps young people build photography, writing, editing, sequencing, and presentation skills. Participants document identity, home, family, friendship, community, dreams, creativity, pride, belonging, resilience, change, and hope.

The project challenges narrow images of Kibera that focus only on poverty, crime, hardship, and neglect. Participants create work that shows everyday life with complexity, dignity, humour, pride, and personal meaning.

The six-month learning journey should lead to:

- A strong personal photography portfolio for every participant
- A collaborative digital and printed photo-zine
- A community photography exhibition
- A set of personal reflections, captions, quotes, and short stories
- A final public presentation led by the participants
- Greater confidence in using photography to represent home and community

## Reference materials supplied with the project

Use the visual direction and content principles found in these supplied files:

- Application Preview.pdf
- Photography Training by Brian Otieno.pptx
- Brand Identity.pdf
- Logo-01.png through Logo-08.png

Use the logo files as provided. Do not redraw, distort, stretch, outline, rotate, recolour, or add effects to the logo.

## Website goals

The website must:

1. Present all 24 lessons in chronological order.
2. make each lesson easy for a trainer and participant to use.
3. include indoor lessons and outdoor photography practicals.
4. include a working exposure triangle simulation.
5. include interactive worksheets, reflection fields, image placeholders, and photo review activities.
6. save participant progress and notes in the browser with localStorage.
7. work well on phones, tablets, laptops, classroom screens, and printed pages.
8. feel like a youth photography zine, not an NGO report or generic online course.
9. use vector visuals wherever possible.
10. support keyboard navigation, touch interaction, and screen readers.
11. remain useful when the internet connection is slow.
12. print cleanly in A4 format.
13. avoid stock photography and generic AI-looking illustrations.
14. use project-specific examples based on daily life, relationships, streets, homes, schools, shops, public spaces, transport, work, play, and creativity in Kibera.

## Required project files

Create this file structure:

```text
/
  index.html
  styles.css
  app.js
  manifest.webmanifest
  favicon.png
  /assets
    Logo-01.png
    Logo-02.png
    Logo-03.png
    Logo-04.png
    Logo-05.png
    Logo-06.png
    Logo-07.png
    Logo-08.png
  /icons
    camera.svg
    aperture.svg
    shutter.svg
    iso.svg
    focus.svg
    portrait.svg
    story.svg
    ethics.svg
    edit.svg
    zine.svg
    exhibition.svg
```

The main page can behave like a single-page learning platform. Keep the code organised so that lesson data can be edited without rebuilding the whole interface.

## Brand design guidelines

### Brand tone

Use a tone that is:

- Youthful
- Warm
- Grounded
- Visual
- Community-led
- Editorial
- Zine-inspired
- Honest
- Simple
- Proud
- Practical
- Encouraging

Do not make the project look corporate, clinical, childish, or charity-focused.

### Brand colours

Use these colours exactly:

- Project yellow: `#FBB03B`
- Charcoal: `#333333`
- White: `#FFFFFF`
- Deep black: `#0F0F0F`

Suggested functional use:

- `#FBB03B` for highlights, active tabs, buttons, progress marks, focus states, badges, icons, and key learning points.
- `#333333` for body text, cards, secondary panels, and captions.
- `#FFFFFF` for page backgrounds, text on dark sections, and print layouts.
- `#0F0F0F` for the hero, navigation, footer, dark lesson panels, and high-contrast text.

Do not introduce unrelated bright colours. For charts and simulation states, use opacity, patterns, line thickness, labels, and the existing brand palette instead of adding many new colours.

### Typography

Use:

- Bobby Jones for the main title, display headings, month numbers, lesson numbers, and large calls to action.
- TT Norms for body text, buttons, labels, navigation, forms, cards, and interface text.
- TT Norms Pro Serif for long participant reflections, quotes, short essays, exhibition statements, and zine-style reading sections.

Only load these fonts when the licensed webfont files are supplied. Use suitable system fallbacks when font files are unavailable.

Suggested fallbacks:

```css
--font-display: "Bobby Jones", "Arial Rounded MT Bold", "Trebuchet MS", sans-serif;
--font-body: "TT Norms", Inter, Arial, sans-serif;
--font-serif: "TT Norms Pro Serif", Georgia, serif;
```

### Logo use

- Use Logo-01.png or Logo-05.png as the full dark-text logo on white or pale backgrounds.
- Use Logo-02.png or Logo-06.png as the white-text logo on dark backgrounds.
- Use Logo-03.png, Logo-04.png, Logo-07.png, or Logo-08.png as compact icon marks, buttons, mobile navigation marks, favicons, or progress stamps.
- Preserve clear space around every logo.
- Keep the logo readable at small sizes.
- Use the full logo in the hero and footer.
- Use the icon mark for the favicon and mobile menu.

### Visual system

Create the visual feeling of a handmade photo-zine with clean digital behaviour.

Use:

- Thick black outlines
- Paper-like white cards
- Yellow labels and tape-style tabs
- Numbered lesson stamps
- Contact sheet layouts
- Film frame references
- Crop marks
- Handwritten annotation lines drawn as SVG
- Bold blocks of text
- Full-bleed image placeholders
- Off-centre layouts that still remain readable
- Rounded corners only where they support touch controls
- Small bits of rotation on decorative cards, not on body copy
- Clear grids for learning content
- Large spacing around images and reflections

Do not use:

- Glassmorphism
- Neon gradients
- Corporate dashboard charts
- Generic blobs
- Excessive shadows
- Stock illustrations
- Fake social proof
- AI-style decorative faces
- Busy animation
- Autoplay audio or video

## Required vector visuals

Create original inline SVG visuals for:

- A camera body with labelled controls
- A camera sensor and light path
- Aperture blades opening and closing
- A shutter curtain and moving subject
- ISO grain increasing and decreasing
- A focus plane
- Rule of thirds grid
- Leading lines
- Foreground, middle ground, and background layers
- Portrait consent flow
- Photo sequence timeline
- Contact sheet
- Editing before and after comparison
- Zine page spread
- Exhibition wall
- Reflection speech bubble
- Safety shield
- Progress badges

Use SVG for diagrams, icons, arrows, grids, labels, and lesson illustrations. Use Canvas only for the exposure preview when needed. Keep all vector elements accessible with titles, descriptions, and meaningful labels.

## Main website structure

### 1. Sticky navigation

Include:

- Home
- Six-Month Roadmap
- Exposure Lab
- Lessons
- Assignments
- Photo Review
- Zine and Exhibition
- Safety and Ethics
- Glossary
- About

Add a visible progress indicator showing completed lessons out of 24.

### 2. Hero section

Display:

- Full project logo
- Title: THIS IS WHERE WE'RE FROM
- Subtitle: A six-month photography and storytelling journey
- Supporting line: Young photographers documenting identity, home, community, creativity, and belonging from their own point of view.
- Primary button: Start the Journey
- Secondary button: Open Exposure Lab
- A vector contact sheet containing empty photo frames labelled Home, Friendship, Light, Work, Play, Pride, Change, and Hope
- A month-by-month progress strip

### 3. Project introduction

Explain the project in simple language:

Photography is more than pressing a button. It is a way to notice, question, remember, and share. In this project, young people photograph the places, people, objects, routines, and moments that shape their lives. Each image should come from curiosity, care, and personal connection.

Show three principles:

- We photograph from within the community, not from a distance.
- We ask for consent and protect people’s dignity.
- We tell stories that are specific, honest, and connected to lived experience.

### 4. Six-month roadmap

Create a visual timeline with six chapters:

1. Month One: Learning to See
2. Month Two: Controlling Light
3. Month Three: Building Visual Language
4. Month Four: Telling Community Stories
5. Month Five: Editing and Writing
6. Month Six: Publishing and Sharing

Each month must expand to show four lesson cards. Outdoor practicals must carry a clear OUTDOOR PRACTICAL label.

### 5. Exposure Triangle Lab

Place this high on the page and also link to it from Month Two.

Build a complete interactive simulation as described later in this prompt.

### 6. Lesson library

Create 24 expandable lesson sections using the full curriculum below.

Each lesson section must contain:

- Lesson number and title
- Month and week
- Indoor or outdoor label
- Suggested duration
- Core question
- Learning goals
- Key vocabulary
- Trainer preparation
- Full teaching content
- Demonstration
- Individual activity
- Group activity
- Practical challenge
- Reflection questions
- Assignment
- Materials
- Safety and ethics reminder
- Completion checkbox
- Participant notes field
- Trainer notes field
- Add image button with drag-and-drop support
- Print lesson button

### 7. Assignments area

Show all weekly assignments in one place. Add filters by month, skill, indoor, outdoor, completed, and not completed.

### 8. Photo Review area

Create an interactive review panel where a participant can:

- Add one or more photos
- View them as a contact sheet
- Mark each image as Keep, Maybe, or Remove
- Add a short reason
- Rate focus, light, composition, moment, story, and ethics
- Write what they noticed
- Write what they would change
- Save decisions locally
- Print a review sheet

Do not permanently upload images. Keep all images in the browser session unless the user exports them.

### 9. Zine and Exhibition area

Include:

- A simple zine sequencing board
- Drag-and-drop image order
- Cover, opening, middle, closing, and back cover labels
- Space for titles, captions, quotes, and reflections
- A vector exhibition wall planner
- Print size labels
- A participant checklist
- A final curation voting tool that does not rank participants against each other

### 10. Safety and ethics section

Make this permanent and easy to find.

### 11. Glossary

Include clear definitions for all key photography terms.

### 12. Footer

Use a dark footer with the white project logo.

Include this exact information:

`©️ Brian Otieno. All learning content is copyrighted. All rights reserved.`

Add these links:

- Instagram: [@thisiswherewearefrom](https://www.instagram.com/thisiswherewearefrom/)
- Website: [storitellah.com](https://storitellah.com)
- Email: [brian@storitellah.com](mailto:brian@storitellah.com)

Also include a link to the project website:

- [thisiswherewearefrom.com](https://thisiswherewearefrom.com)

Open external links in a new tab with secure link attributes.

## Curriculum delivery format

Each weekly session should take about 2.5 to 3 hours.

Suggested session rhythm:

1. Welcome and check-in, 10 minutes
2. Review of the previous assignment, 25 minutes
3. New concept and demonstration, 35 minutes
4. Short break, 10 minutes
5. Guided practice, 40 minutes
6. Group review, 30 minutes
7. Reflection and assignment, 20 minutes

Outdoor practicals can run for 3 to 4 hours, including briefing, walking time, photography, rest, and group review.

## Six-month curriculum

# MONTH ONE: LEARNING TO SEE

## Lesson 1. Welcome, Photography, and Our Point of View

Month: 1  
Week: 1  
Format: Indoor workshop  
Duration: 3 hours

### Core question

What can photography help us notice and say about where we are from?

### Learning goals

By the end of the lesson, participants should be able to:

- Explain the purpose of the project in their own words
- Describe photography as a way of noticing, remembering, and communicating
- Identify personal themes they care about
- Handle a camera or phone safely
- Understand the first rules of respect, consent, and dignity
- Make a first baseline photograph

### Key vocabulary

Photographer, subject, frame, story, point of view, consent, dignity, observation, memory.

### Trainer preparation

- Arrange cameras or phones
- Charge batteries
- Prepare memory cards
- Print or display project themes
- Prepare a simple participant agreement
- Create a table of everyday objects for the first exercise
- Prepare name labels
- Display the project logo and six-month roadmap

### Teaching content

Begin by introducing photography as a choice. A photographer chooses where to stand, what to include, what to leave out, and when to press the shutter. Two people can stand in the same place and create very different photographs because they notice different things.

Explain that the project does not ask participants to copy images that outsiders often make about Kibera. It asks them to pay attention to their own lives and decide what deserves to be seen, remembered, questioned, celebrated, or protected.

Introduce the project themes:

- Identity
- Home
- Family
- Friendship
- Community
- Dreams
- Creativity
- Pride
- Belonging
- Resilience
- Change
- Hope

Ask participants to select three themes that feel close to them. Let them explain their choices in pairs.

Introduce basic camera care:

- Use the strap
- Keep fingers away from the lens
- Hold the camera with two hands
- Keep equipment away from water, dust, crowds, and unsafe edges
- Ask before deleting another person’s images
- Return equipment in the condition received
- Check battery and storage before leaving

Introduce consent:

- Ask before making a close portrait
- Explain the project clearly
- Accept no as a complete answer
- Do not pressure people
- Do not photograph private, painful, or risky situations for the sake of a dramatic image
- Do not post another participant’s image without permission

### Demonstration

Place one object in the centre of the room. Photograph it from eye level, above, below, close, far, and through another object. Show how position changes meaning.

### Individual activity

Each participant chooses one object that says something about them. They make six different photographs of it.

### Group activity

Create a wall of first images. Ask:

- What did the photographer notice?
- What feels personal?
- What changed when the viewpoint changed?
- What information sits outside the frame?

### Practical challenge

Make one photograph titled This Is Me Without Showing My Face.

### Reflection

- What do I want people to understand about where I am from?
- What kind of photographer do I want to become?
- What felt easy today?
- What felt difficult?

### Assignment

Make five photographs during the week:

1. Something that represents home
2. Something that represents friendship
3. A place you pass often
4. An object with a personal story
5. A moment that made you stop

Write one sentence under each image explaining why you made it.

### Materials

Cameras or phones, straps, charged batteries, notebooks, pens, display screen, printed project themes.

### Safety and ethics reminder

A photograph is never more important than a person’s safety, privacy, or dignity.

---

## Lesson 2. Light, Focus, and Holding the Camera

Month: 1  
Week: 2  
Format: Indoor and nearby practice  
Duration: 3 hours

### Core question

How do light, focus, and camera movement affect what a photograph looks like?

### Learning goals

Participants should be able to:

- Identify hard light, soft light, front light, side light, and backlight
- Focus on the intended subject
- Hold a camera steadily
- Recognise common causes of blur
- Make simple exposure adjustments on a phone or camera
- Compare the same subject in different light

### Key vocabulary

Light, shadow, highlight, focus, autofocus, focus point, blur, camera shake, sharpness, contrast.

### Teaching content

Explain that cameras need light. Light can reveal shape, texture, emotion, movement, and time of day.

Show five types of light:

- Front light falls directly on the front of the subject. It gives clear detail but can look flat.
- Side light comes from one side. It reveals texture, shape, and depth.
- Backlight comes from behind the subject. It can create silhouettes, glowing edges, or low contrast.
- Hard light creates strong shadows with clear edges.
- Soft light creates gentle shadows and smooth transitions.

Explain focus. The camera must know which part of the scene matters most. On a phone, tap the screen where you want focus. On a camera, choose a focus point or use centre focus and recompose.

Explain blur:

- The focus point missed the subject
- The camera moved
- The subject moved
- The shutter speed was too slow
- The lens or camera had difficulty focusing in low light
- The lens was dirty

Show stable camera posture:

- Feet apart
- Elbows close to the body
- Left hand supporting the camera
- Right hand controlling the shutter
- Gentle shutter press
- Use a wall, table, post, or knee for support when needed

### Demonstration

Photograph the same face or object near a doorway, under direct sun, beside a window, and with backlight. Show the differences.

Make one sharp photograph and one intentionally blurred photograph. Ask participants to identify why each result happened.

### Individual activity

Participants photograph one object in four kinds of light. They tap or select a different focus point in each frame.

### Group activity

Create pairs. One person moves slowly while the other tries three approaches:

- Hold the camera still
- Follow the subject
- Ask the subject to pause

Compare the results.

### Practical challenge

Make:

- One photograph with clear sharp detail
- One silhouette
- One photograph where shadow becomes the main subject
- One intentional motion blur

### Reflection

- Which light made the subject feel most interesting?
- Where did the camera focus?
- Was blur a mistake or a useful choice?
- What helped make the camera steady?

### Assignment

Photograph one location at three different times of day. Write what changed in the light, colour, shadow, and mood.

### Safety and ethics reminder

Do not ask anyone to stand in dangerous traffic, unstable structures, railway areas, rooftops, drainage channels, or other unsafe places for a photograph.

---

## Lesson 3. Composition Foundations

Month: 1  
Week: 3  
Format: Indoor workshop  
Duration: 3 hours

### Core question

How can arrangement inside the frame guide the viewer’s attention?

### Learning goals

Participants should be able to:

- Use the rule of thirds
- Fill the frame
- Use negative space
- Find leading lines
- notice patterns and symmetry
- simplify a distracting background
- create depth using layers
- explain why a composition works

### Key vocabulary

Composition, frame, rule of thirds, leading lines, symmetry, pattern, negative space, background, foreground, middle ground, depth, framing, cropping.

### Teaching content

Explain that composition is the arrangement of visual information inside the frame. Composition does not have one perfect formula. It gives the photographer tools for making choices.

Teach these techniques:

#### Rule of thirds

Imagine two vertical and two horizontal lines dividing the frame into nine parts. Place an important subject near a line or intersection. This can create balance and leave useful space.

#### Leading lines

Roads, walls, shadows, railings, wires, paths, and rows of objects can guide the eye toward a subject.

#### Symmetry and patterns

Repeated shapes can create rhythm. A small break in the pattern can become the main point of attention.

#### Viewpoint

Move before taking the photograph. Try high, low, close, far, side, back, and through another object.

#### Background

A busy background can hide the subject. Take one step left, right, closer, lower, or higher to simplify it.

#### Depth

Use foreground, middle ground, and background. Overlapping objects help a flat image feel layered.

#### Framing

Use doorways, windows, shadows, hands, cloth, branches, or gaps to surround the subject.

#### Fill the frame

Move closer when the subject matters more than the surroundings.

#### Negative space

Leave an open area around the subject. Empty space can create calm, scale, direction, or tension.

#### Cropping

Remove information that weakens the image. Do not crop so tightly that the subject feels trapped unless that feeling supports the story.

### Vector demonstration

Create an interactive SVG scene with toggles for:

- Rule of thirds
- Leading line
- Background clutter
- Foreground layer
- Natural frame
- Negative space

The scene should update as each toggle is turned on.

### Individual activity

Give participants one object and ten minutes. They create one image for each composition technique.

### Group activity

Display photographs without names. The group identifies the technique and describes where the eye moves first.

### Practical challenge

Make a nine-image composition contact sheet:

1. Rule of thirds
2. Leading lines
3. Symmetry
4. Pattern break
5. Low viewpoint
6. Frame within a frame
7. Layered depth
8. Fill the frame
9. Negative space

### Reflection

- Where does the eye go first?
- What can be removed?
- Does the background support the subject?
- How does the viewpoint affect the meaning?
- Which composition feels most natural to me?

### Assignment

Choose one familiar place. Make four photographs of it using four different composition techniques. Do not repeat the same camera position.

### Safety and ethics reminder

Move carefully while looking through the camera. Stop walking before composing. Stay aware of people, traffic, steps, open drains, and obstacles.

---

## Lesson 4. Outdoor Practical: A Familiar Place Seen Differently

Month: 1  
Week: 4  
Format: Outdoor photography practical  
Duration: 3 to 4 hours

### Core question

How can we make new photographs in a place we already know?

### Learning goals

Participants should be able to:

- Apply focus, light, and composition skills outdoors
- Slow down and observe before photographing
- Work from a visual checklist
- Respect public and private boundaries
- Produce a short set of connected images
- Review work with constructive language

### Briefing

Explain that familiarity can make people stop noticing. The purpose of this walk is not to search for a dramatic event. It is to pay attention to ordinary details, changes, routines, gestures, colours, and relationships.

Divide participants into small groups with an adult facilitator where required. Set a clear route, time, meeting point, and emergency contact.

### Photo walk prompts

Each participant makes at least 20 photographs and selects 8 later.

Required prompts:

- A doorway that suggests a story
- A hand at work
- A repeated pattern
- A strong shadow
- A sign or handwritten message
- A quiet moment
- A reflection
- A high or low viewpoint
- Something changing
- Something people usually ignore
- A photograph with foreground, middle ground, and background
- A photograph titled This Is Where We’re From

### Pause and notice exercise

At three points on the route, stop for two minutes without photographing. Participants list:

- Five things they see
- Four sounds
- Three movements
- Two colours
- One unanswered question

They then make one photograph based on the list.

### Group review

Back in the classroom, each participant selects eight photographs.

Use these questions:

- Which image contains the strongest moment?
- Which image shows the place in a personal way?
- Which image has the clearest composition?
- Which image needs a different viewpoint?
- Which image gives useful context?
- What story begins to appear across the set?

### Assignment

Create a final sequence of five images titled A Place I Thought I Knew. Add a two-sentence reflection.

### Safety and ethics reminder

Stay within the agreed route. Do not separate from the group. Ask before entering homes or businesses. Do not photograph anyone in distress, receiving medical care, changing clothes, bathing, or dealing with a private situation.

# MONTH TWO: CONTROLLING LIGHT

## Lesson 5. The Exposure Triangle

Month: 2  
Week: 5  
Format: Indoor technical workshop  
Duration: 3 hours

### Core question

How do aperture, shutter speed, and ISO work together to control brightness and visual effect?

### Learning goals

Participants should be able to:

- Name the three parts of the exposure triangle
- Explain what each control changes
- Read a simple exposure meter
- Adjust one setting and compensate with another
- Predict depth of field, motion blur, and noise
- Use the Exposure Triangle Lab

### Key vocabulary

Exposure, aperture, f-number, shutter speed, ISO, underexposed, overexposed, exposure meter, stop, depth of field, motion blur, noise.

### Teaching content

Explain exposure as the amount of light recorded by the camera.

#### Aperture

Aperture is the opening inside the lens.

- A smaller f-number such as f/1.8 means a wider opening.
- A wider opening allows more light.
- A wider opening can create a shallow depth of field.
- A larger f-number such as f/16 means a smaller opening.
- A smaller opening allows less light.
- A smaller opening can keep more of the scene in focus.

#### Shutter speed

Shutter speed controls how long the sensor receives light.

- A fast shutter such as 1/1000 second allows less light and freezes movement.
- A slow shutter such as 1/15 second allows more light and records more movement.
- Slow shutter speeds can show motion blur or camera shake.

#### ISO

ISO controls the camera’s sensitivity or signal amplification.

- A low ISO such as 100 usually produces a cleaner image but needs more light.
- A high ISO such as 3200 brightens a low-light image but can add visible noise and reduce detail.

#### Balance

Changing one setting changes the exposure. The photographer can adjust another setting to keep the brightness similar.

Example:

- f/2.8, 1/500, ISO 200
- f/4, 1/250, ISO 200
- f/4, 1/500, ISO 400

These combinations can create similar brightness with different visual effects.

### Demonstration

Use the Exposure Triangle Lab. Move one control at a time. Ask participants to predict what will change before moving the slider.

### Individual activity

Complete six simulation challenges:

1. Bright outdoor portrait with a soft background
2. Football action frozen in daylight
3. Indoor family scene with low noise
4. Evening street scene with acceptable sharpness
5. Intentional movement trail
6. Group portrait with several faces in focus

### Group activity

Give each group a scenario card. They agree on aperture, shutter, and ISO settings, then explain their choice.

### Reflection

- Which setting do I choose first for a portrait?
- Which setting do I choose first for movement?
- When would I accept a high ISO?
- What does the exposure meter tell me?
- Which visual effect matters most in each situation?

### Assignment

Use manual mode, aperture priority, shutter priority, or a phone camera control app where available. Make three photographs with similar brightness but different combinations of aperture, shutter, and ISO. Record the settings.

### Safety and ethics reminder

Technical control should support the story. Do not place people in unsafe situations just to test settings.

---

## Lesson 6. Aperture, Depth of Field, and Visual Attention

Month: 2  
Week: 6  
Format: Indoor and nearby practice  
Duration: 3 hours

### Core question

How can depth of field direct attention and add context?

### Learning goals

Participants should be able to:

- Explain shallow and deep depth of field
- Identify how aperture, distance, and focal length affect focus depth
- Create a portrait with a soft background
- Create a layered scene with broad focus
- Select depth of field based on story needs

### Key vocabulary

Aperture, depth of field, shallow focus, deep focus, focus plane, focal length, subject distance, background distance, bokeh.

### Teaching content

Explain that depth of field is the area that appears acceptably sharp in front of and behind the focus point.

A shallow depth of field can:

- Separate a person from a busy background
- Direct attention
- Create intimacy
- Hide distracting information

A deep depth of field can:

- Show a person in their environment
- Keep several layers readable
- Connect the subject to place
- Support group photographs

Depth of field changes through:

- Aperture
- Distance between camera and subject
- Distance between subject and background
- Focal length
- Sensor and lens characteristics

Avoid teaching that one setting is always better. Ask what the story needs.

### Vector demonstration

Create a side-view SVG showing:

- Camera
- Subject
- Focus plane
- Near limit
- Far limit
- Background

Allow the participant to move the camera, subject, background, and aperture control. Update the focus zone.

### Individual activity

Make four portraits or object studies:

1. Wide aperture, close subject, distant background
2. Narrow aperture, subject inside a layered scene
3. Same aperture but different camera distance
4. Same distance but different aperture

### Group activity

Compare a close portrait and an environmental portrait. Discuss what each image tells us.

### Practical challenge

Create a two-image pair:

- Image one says Look at this person or object.
- Image two says Look at this person or object in this place.

### Reflection

- What information disappears when the background becomes soft?
- What information becomes useful when more of the scene is sharp?
- Is the focus point on the most important detail?
- Does the visual effect support the story?

### Assignment

Create a three-image depth study: shallow, medium, and deep focus. Use the same subject when possible.

### Safety and ethics reminder

Do not use a blurred background to remove context that viewers need to understand the situation honestly.

---

## Lesson 7. Shutter Speed, Movement, ISO, and Low Light

Month: 2  
Week: 7  
Format: Indoor technical workshop  
Duration: 3 hours

### Core question

How can we freeze, follow, or reveal movement in different light?

### Learning goals

Participants should be able to:

- Freeze movement with a fast shutter
- Create intentional motion blur
- Pan with a moving subject
- recognise camera shake
- use ISO as a practical compromise
- choose a minimum shutter speed for handheld work

### Key vocabulary

Fast shutter, slow shutter, motion blur, panning, camera shake, ISO, noise, stabilisation, burst mode.

### Teaching content

Explain three main ways to photograph movement.

#### Freeze

Use a fast shutter speed. This can preserve a brief gesture, jump, splash, running action, or flying object.

#### Blur

Use a slow shutter speed while the camera remains still. Moving parts record as trails or soft shapes.

#### Pan

Move the camera with the subject during the exposure. The subject can remain more recognisable while the background streaks.

Explain ISO as a practical choice. Raising ISO can help maintain a faster shutter in low light. The trade-off is increased noise. A noisy sharp image may still communicate better than a clean image with accidental blur.

Suggested starting points:

- Walking person: 1/250 second
- Running person: 1/500 second or faster
- Fast sport: 1/1000 second or faster
- Intentional handheld blur: 1/15 to 1/4 second
- Panning: 1/30 to 1/125 second, depending on speed

These are starting points, not fixed rules.

### Demonstration

Use an SVG moving subject crossing the frame. Let the participant change shutter speed. Show frozen movement, subject blur, background blur, and camera shake as separate effects.

### Individual activity

Photograph:

- A hand moving
- A person walking
- A person running
- A turning wheel
- Water movement
- A still object in low light

Use at least three shutter speeds.

### Group activity

Create a movement guessing game. Display images and ask the group to estimate whether the shutter was fast, slow, or panned.

### Practical challenge

Make a triptych called Still, Moving, and Passing.

### Reflection

- Did the blur communicate movement or confusion?
- Was the blur caused by the subject or the camera?
- What shutter speed would improve the next attempt?
- What did increasing ISO make possible?

### Assignment

Create a four-image motion series using freeze, blur, pan, and stillness.

### Safety and ethics reminder

Do not photograph moving vehicles from the road. Work from a safe position with clear visibility and facilitator guidance.

---

## Lesson 8. Outdoor Practical: Exposure Mission

Month: 2  
Week: 8  
Format: Outdoor photography practical  
Duration: 3 to 4 hours

### Core question

Can we control brightness, motion, depth, and noise while working in changing conditions?

### Learning goals

Participants should be able to:

- Change settings with purpose
- Read changing light
- make exposure decisions quickly
- record camera settings
- compare technical choices
- solve common exposure problems

### Briefing

Divide the route into light zones:

- Open sunlight
- Open shade
- Indoor doorway
- Moving street activity
- Darker interior with permission
- Backlit area

Participants work through mission cards.

### Mission cards

1. Freeze a jump or fast gesture.
2. Show movement with blur.
3. Make a portrait with shallow depth of field.
4. Make a scene with foreground, middle ground, and background in focus.
5. Photograph a backlit subject without losing all detail.
6. Make a clean low-ISO image.
7. Make a usable high-ISO image in low light.
8. Create two images with similar brightness but different settings.
9. Create one silhouette.
10. Create one image where shadow carries the story.

### Exposure log

For every selected image, record:

- Aperture
- Shutter speed
- ISO
- Light condition
- What the photographer wanted
- What worked
- What to change

### Mid-walk troubleshooting stop

Ask participants to show one image that is:

- Too bright
- Too dark
- Blurred
- Noisy
- Focused on the wrong area

Let the group propose a solution.

### Review

Select six images. Display the settings beside each image. Review the link between the setting and the result.

### Assignment

Create a four-image series titled Light Changes Everything.

### Safety and ethics reminder

Work in pairs. Do not enter dark or enclosed private spaces without clear permission and facilitator approval.

# MONTH THREE: BUILDING VISUAL LANGUAGE

## Lesson 9. Advanced Composition, Viewpoint, and Visual Rhythm

Month: 3  
Week: 9  
Format: Indoor workshop  
Duration: 3 hours

### Core question

How can composition create energy, calm, tension, rhythm, or surprise?

### Learning goals

Participants should be able to:

- Use repetition and pattern
- break a pattern for emphasis
- create visual rhythm
- balance visual weight
- use diagonal and curved lines
- choose viewpoint for meaning
- compose with edges and corners

### Key vocabulary

Visual rhythm, repetition, balance, visual weight, tension, diagonal, curve, edge, gesture, frame.

### Teaching content

Explain that visual language develops when technical decisions begin to carry feeling and meaning.

Teach:

- Repetition creates rhythm.
- A break in repetition creates attention.
- Large, dark, bright, sharp, or human elements can carry more visual weight.
- Diagonal lines can suggest movement.
- Horizontal lines can suggest calm or stability.
- Vertical lines can suggest height or strength.
- Curves can guide the eye gradually.
- Edge placement matters. Important hands, feet, signs, and faces should not be cut accidentally.
- Empty space can create direction. Leave space in front of a moving or looking subject when useful.
- Central composition can feel direct, formal, still, or confrontational.
- Off-centre composition can create movement, context, or uncertainty.

### Vector exercise

Create draggable shapes inside a frame. Let participants test balance, tension, repetition, and pattern breaks.

### Individual activity

Make one image for each feeling:

- Calm
- Busy
- Tense
- Playful
- Proud
- Lonely

Participants must use composition rather than facial expression alone.

### Group activity

Each participant shows two photographs. The group describes the visual feeling before hearing the photographer’s intention.

### Practical challenge

Photograph one location using three visual rhythms:

- Repetition
- Interruption
- Movement

### Reflection

- Which element carries the most visual weight?
- Does the frame feel balanced or intentionally unbalanced?
- What happens at the edges?
- Did the viewpoint make the image more personal?

### Assignment

Create a six-image visual alphabet using lines, shapes, colours, shadows, or repeated forms.

### Safety and ethics reminder

Do not create tension by surprising, cornering, or embarrassing a person.

---

## Lesson 10. Lenses, Distance, Perspective, and Sharpness

Month: 3  
Week: 10  
Format: Indoor and nearby practice  
Duration: 3 hours

### Core question

How do lens choice and camera distance change space, faces, and relationships?

### Learning goals

Participants should be able to:

- recognise wide, normal, and telephoto views
- understand that distance affects perspective
- avoid unflattering close wide-angle portraits
- use wide views for context
- use longer views for visual compression
- improve technical sharpness
- select focus mode for a subject

### Key vocabulary

Focal length, wide angle, normal lens, telephoto, perspective, distortion, compression, autofocus mode, single focus, continuous focus.

### Teaching content

Explain that focal length changes the field of view. Camera distance changes perspective.

A wide lens:

- Includes more of the scene
- Can exaggerate distance
- Makes near objects appear larger
- Works well for small spaces and environmental scenes
- Can distort a face when used too close

A normal lens:

- Gives a natural field of view
- Works for everyday documentary photography
- Balances person and place

A telephoto lens:

- Narrows the field of view
- Can isolate a subject
- Makes distant elements appear closer together
- Can support respectful distance, but must not become secretive surveillance

Sharpness depends on:

- Correct focus point
- Suitable shutter speed
- Camera stability
- Subject movement
- Lens cleanliness
- Sufficient contrast
- Appropriate autofocus mode
- Depth of field

### Demonstration

Photograph the same person with wide, normal, and telephoto views while adjusting camera position to keep the person similar in size. Compare the background and facial appearance.

### Individual activity

Create three images of the same person or object:

- Wide environmental view
- Normal relationship view
- Tight detail view

### Group activity

Diagnose ten sample problems:

- Camera shake
- Subject movement
- Missed focus
- Too little depth of field
- Lens obstruction
- Low contrast focus failure

### Practical challenge

Make a three-image sequence titled Place, Person, Detail.

### Reflection

- How close was I to the subject?
- Did the lens make the space feel larger or smaller?
- Is the sharpest area the most important area?
- Could I improve the image by moving rather than zooming?

### Assignment

Photograph one subject from three distances. Keep notes on how the relationship changes.

### Safety and ethics reminder

A longer lens does not remove the need for consent. Do not hide while making close images of private moments.

---

## Lesson 11. Portraits, Trust, Consent, and Collaboration

Month: 3  
Week: 11  
Format: Indoor workshop  
Duration: 3 hours

### Core question

How can a portrait be made with someone rather than taken from them?

### Learning goals

Participants should be able to:

- introduce themselves clearly
- explain the project
- request informed consent
- collaborate on location, pose, gesture, and background
- use light and composition for a portrait
- make close and environmental portraits
- review images with the person photographed

### Key vocabulary

Portrait, environmental portrait, consent, collaboration, representation, pose, gesture, expression, context, trust.

### Teaching content

A portrait is not only a face. It can include posture, hands, clothing, objects, environment, relationships, light, and distance.

Teach a simple consent conversation:

1. Greet the person.
2. Introduce yourself.
3. Explain the project in clear language.
4. Explain where the photograph may appear.
5. Ask whether they agree.
6. Accept the answer.
7. Ask whether there is anything they do not want photographed.
8. Show the image when possible.
9. Record the person’s name correctly if they want to be identified.
10. Respect later concerns.

Discuss power. A person may say yes because they feel pressured, confused, younger, dependent, or unable to refuse. The photographer must create space for a real choice.

Portrait approaches:

- Direct portrait
- Environmental portrait
- Activity portrait
- Detail portrait
- Collaborative self-portrait
- Portrait without showing the face

### Vector consent flow

Create an SVG flow with the steps Ask, Explain, Listen, Agree, Photograph, Review, Respect.

### Demonstration

Make a portrait twice:

- First without conversation or planning
- Then through collaboration

Compare body language, background, trust, and meaning.

### Individual activity

Participants work in pairs. Each person makes:

- A direct portrait
- An environmental portrait
- A portrait without showing the face

The person being photographed chooses one image and explains why.

### Group activity

Write a respectful one-sentence introduction and practice it aloud.

### Practical challenge

Create a portrait titled What I Want You to Know About Me.

### Reflection

- Did the person understand the project?
- Did they have a real chance to say no?
- What choices did they make?
- Does the portrait protect dignity?
- What information should remain private?

### Assignment

With clear consent, create a three-image portrait story of someone you know. Include one quote in their own words.

### Safety and ethics reminder

Never photograph children, vulnerable people, private interiors, illness, grief, conflict, or sensitive situations without appropriate consent and facilitator guidance.

---

## Lesson 12. Outdoor Practical: Collaborative Portrait Walk

Month: 3  
Week: 12  
Format: Outdoor photography practical  
Duration: 3 to 4 hours

### Core question

How can trust, light, place, and collaboration shape a portrait?

### Learning goals

Participants should be able to:

- approach a person respectfully
- use a consent script
- choose suitable portrait light
- simplify or use the background
- direct without controlling
- make a portrait sequence
- record names and quotes accurately

### Briefing

Participants work in small groups. They may photograph people already connected to the group, such as family members, shopkeepers, artists, workers, friends, coaches, teachers, neighbours, or community members who agree.

No participant must photograph a stranger.

### Portrait checklist

Create:

1. A direct portrait
2. An environmental portrait
3. Hands or detail
4. The person doing an activity
5. A wider view of place
6. A portrait chosen by the person photographed
7. A short quote
8. A photograph of an object that matters to them

### Collaboration prompt

Ask the person:

- Where would you like to be photographed?
- Is there an object you want to include?
- What should the photograph say about you?
- Which image feels most like you?
- How would you like your name written?
- Is there anything you do not want shared?

### Review

Each participant creates a five-image portrait sequence. The person photographed should have a chance to see it where practical.

### Assignment

Write a 100-word reflection called What Changed When I Asked and Listened.

### Safety and ethics reminder

Do not promise publication, payment, or outcomes that the project cannot guarantee. Record consent honestly.

# MONTH FOUR: TELLING COMMUNITY STORIES

## Lesson 13. The Single Image Story

Month: 4  
Week: 13  
Format: Indoor workshop  
Duration: 3 hours

### Core question

What makes one photograph feel like a complete story?

### Learning goals

Participants should be able to:

- identify subject, action, setting, and moment
- recognise gesture and relationship
- wait for a meaningful moment
- combine information and emotion
- write a simple story question before photographing
- distinguish description from interpretation

### Key vocabulary

Moment, gesture, relationship, context, detail, visual evidence, interpretation, ambiguity.

### Teaching content

A strong single image often contains several forms of information:

- Who or what is present
- What is happening
- Where it is happening
- What the relationships are
- What detail gives the image specificity
- What moment changes the scene
- What remains unanswered

Teach participants to avoid forcing a story onto an image. Describe what the photograph shows before explaining what it means.

Use the question:

What is happening in the frame, and why did this moment matter to the photographer?

Discuss gestures:

- A hand reaching
- A person turning
- Two people looking in different directions
- An object being carried
- A pause in activity
- A repeated action
- An exchange

### Individual activity

Participants review recent images and select:

- One image with a clear action
- One image with a clear relationship
- One image with a strong detail
- One image with an unanswered question

### Group activity

Use a silent reading exercise. Display one photograph for 30 seconds. Everyone writes what they see, then what they think. Separate observation from interpretation.

### Practical challenge

Create one image with the elements Person, Place, Action, and Detail.

### Reflection

- What happened one second before?
- What might happen one second after?
- What evidence is visible?
- What am I assuming?
- What detail makes the image specific?

### Assignment

Make one photograph each day for five days. Each photograph must contain a meaningful action or gesture.

### Safety and ethics reminder

Do not wait for harm, embarrassment, or conflict to become worse just to make a stronger photograph.

---

## Lesson 14. Photo Essays, Sequences, and Visual Structure

Month: 4  
Week: 14  
Format: Indoor workshop  
Duration: 3 hours

### Core question

How can several photographs work together to tell more than one photograph can?

### Learning goals

Participants should be able to:

- explain what a photo essay is
- identify opening, context, portrait, action, detail, transition, and closing images
- create visual variety
- avoid repetition
- arrange a simple sequence
- identify missing photographs

### Key vocabulary

Photo essay, sequence, opening image, establishing image, portrait, action, detail, transition, closing image, rhythm, repetition, edit.

### Teaching content

A photo essay is a group of connected images. Each image should add something new.

Teach common image roles:

- Opening image invites the viewer into the story.
- Establishing image shows place and context.
- Portrait introduces a person.
- Action image shows what happens.
- Relationship image shows connection.
- Detail image gives specificity.
- Transition image changes pace, time, or place.
- Closing image leaves a final feeling or question.

A useful sequence can move:

- Wide to medium to close
- Place to person to action to detail
- Morning to afternoon to evening
- Preparation to activity to result
- Question to discovery to reflection

Avoid selecting several images that repeat the same distance, moment, subject, or composition.

### Interactive sequence board

Create seven draggable frame cards. Participants can assign each image a role and rearrange the order. Add a Missing Image note field.

### Individual activity

Give participants twelve sample images. Ask them to build a seven-image sequence and explain the order.

### Group activity

Each group creates a different sequence from the same images. Compare how order changes meaning.

### Practical challenge

Create a paper storyboard for a five-image story about one routine.

### Reflection

- What new information does each image add?
- Where does the sequence slow down?
- Which image repeats information?
- What image is missing?
- Does the ending feel earned?

### Assignment

Plan and begin a seven-image story about a person, place, routine, relationship, or community activity.

### Safety and ethics reminder

A sequence can change meaning. Do not arrange images in a way that falsely suggests an event, cause, relationship, or timeline.

---

## Lesson 15. Listening, Quotes, Captions, and Personal Reflections

Month: 4  
Week: 15  
Format: Indoor workshop  
Duration: 3 hours

### Core question

How can words add information without repeating or controlling the photograph?

### Learning goals

Participants should be able to:

- ask open questions
- listen without interrupting
- record a short quote accurately
- write a factual caption
- write a personal reflection
- distinguish a quote, caption, opinion, and memory
- pair words and images with care

### Key vocabulary

Caption, quote, reflection, interview, open question, context, fact, opinion, memory, attribution.

### Teaching content

Teach four kinds of text.

#### Caption

A caption gives accurate information. It can include who, what, where, when, and relevant context.

#### Quote

A quote uses the person’s own words. Keep the meaning accurate. Do not change the speaker’s voice to sound more dramatic.

#### Personal reflection

A reflection explains what the photographer noticed, felt, remembered, questioned, or learned.

#### Interview snippet

A short interview excerpt can add a voice that the image cannot show.

Useful open questions:

- What is happening here?
- Why does this place matter to you?
- What do people often misunderstand?
- What has changed?
- What do you want people to remember?
- What are you proud of?
- What would you like to be different?
- What does home mean to you?

Caption formula:

Name or description of person + action + place + date or time context + why it matters.

Do not invent emotion. Write what is known.

### Individual activity

For one image, write:

- A factual caption
- A one-sentence quote
- A personal reflection
- A short title

Compare how each text changes the reading.

### Group activity

Practice interviews in pairs for five minutes. The listener may ask one question at a time and cannot interrupt.

### Practical challenge

Create an image and text pair where the words add information that is not visible.

### Reflection

- Which facts must be checked?
- Whose voice is speaking?
- Does the text respect the person?
- Does the text tell the viewer what to feel?
- What information should remain private?

### Assignment

Complete the first draft of a seven-image story with captions, one quote, and a 150-word personal reflection.

### Safety and ethics reminder

Do not publish phone numbers, exact home locations, school details, medical information, or other private details without a clear reason and permission.

---

## Lesson 16. Outdoor Practical: A Community Micro-Story

Month: 4  
Week: 16  
Format: Outdoor photography practical  
Duration: 4 hours

### Core question

How can we create a short, accurate, respectful story about something close to us?

### Learning goals

Participants should be able to:

- follow a simple story plan
- make visual variety
- listen and record information
- adapt when the scene changes
- work respectfully in a real environment
- produce a seven-image micro-story

### Story choices

Participants choose one:

- A morning routine
- A small business
- A creative practice
- A friendship
- A family activity
- A sports practice
- A school journey
- A community service
- A place changing over time
- A local maker or artist
- A quiet space
- A shared meal
- A transport story
- A repair process
- A game

### Required image list

1. Opening image
2. Wide context
3. Portrait
4. Action
5. Relationship
6. Detail
7. Closing image

Add:

- One accurate quote
- One factual caption for each image
- One personal reflection

### Field workflow

1. Introduce the project.
2. Ask for consent.
3. Learn before photographing.
4. Watch the routine once.
5. Plan visual positions.
6. Photograph without interrupting unnecessarily.
7. Record names and details.
8. Show selected images when possible.
9. Thank the people involved.
10. Review for safety and privacy before sharing.

### Review

Create a first edit of ten images, then reduce to seven. Identify one missing photograph and plan a reshoot where possible.

### Assignment

Complete the seven-image micro-story and prepare a two-minute spoken presentation.

### Safety and ethics reminder

The story must not expose anyone to ridicule, punishment, stigma, financial risk, legal risk, or unwanted attention.

# MONTH FIVE: EDITING AND WRITING

## Lesson 17. Contact Sheets, Selection, and Constructive Critique

Month: 5  
Week: 17  
Format: Indoor editing workshop  
Duration: 3 hours

### Core question

How do we choose photographs based on quality, meaning, and story rather than attachment alone?

### Learning goals

Participants should be able to:

- make a contact sheet
- separate technical quality from story value
- mark Keep, Maybe, and Remove
- identify near-duplicates
- explain a selection
- give useful critique
- accept feedback without losing authorship

### Key vocabulary

Contact sheet, edit, select, sequence, duplicate, critique, intention, evidence, consistency.

### Teaching content

Explain that editing means choosing, not only changing brightness or colour.

Teach a three-pass edit.

#### Pass one: Technical check

Look for:

- Missed focus
- Unwanted blur
- Accidental obstruction
- Extreme exposure problems
- Closed eyes where they weaken the image
- Repeated frames

Do not remove every imperfect image. A technically imperfect image can still contain an important moment.

#### Pass two: Story check

Ask:

- Does this image add new information?
- Is the moment meaningful?
- Is the relationship clear?
- Does the image feel specific?
- Is it honest?
- Is it needed?

#### Pass three: Sequence check

Ask:

- Is there enough visual variety?
- Are there too many similar portraits?
- Is place visible?
- Is there a beginning and ending?
- Is a key action missing?

Teach critique language:

- I notice...
- My eye goes to...
- The image becomes stronger when...
- I need more information about...
- I think this image adds...
- I think this image repeats...
- The photographer’s intention seems to be...

Avoid:

- This is bad.
- I do not like it.
- My photo is better.
- You should have photographed something more dramatic.

### Interactive review tool

Build the Keep, Maybe, Remove contact sheet tool described earlier.

### Individual activity

Edit 30 images to 12, then to 7.

### Group activity

Each participant receives feedback from two peers. The photographer makes the final decision.

### Practical challenge

Defend one difficult selection in 60 seconds.

### Reflection

- Which image was hardest to remove?
- Did I keep it because of memory or because it helps the story?
- Which image carries the strongest moment?
- What is missing?

### Assignment

Prepare a final seven-image edit and a backup group of three alternatives.

### Safety and ethics reminder

Remove images that create unnecessary harm, reveal private information, or were made without valid consent.

---

## Lesson 18. Ethical Photo Editing and Colour

Month: 5  
Week: 18  
Format: Indoor computer or phone workshop  
Duration: 3 hours

### Core question

How can editing improve clarity without changing the truth of the scene?

### Learning goals

Participants should be able to:

- crop with purpose
- adjust exposure, contrast, highlights, shadows, and white balance
- use colour and black and white with intention
- avoid excessive filters
- preserve important visual information
- explain ethical editing limits
- export a high-quality image

### Key vocabulary

Crop, exposure, contrast, highlights, shadows, white balance, saturation, black and white, resolution, export, metadata.

### Teaching content

Editing should help the photograph communicate clearly. It should not manufacture an event that did not happen.

Acceptable adjustments can include:

- Cropping
- Straightening
- Exposure correction
- Highlight and shadow recovery
- White balance correction
- Moderate contrast
- Moderate colour adjustment
- Dust spot removal
- Black and white conversion
- Noise reduction
- Sharpening
- Export resizing

Do not:

- Add or remove people
- Combine separate moments and present them as one documentary image
- Change signs, clothing, objects, or evidence
- Create false smoke, fire, crowds, weather, or damage
- use heavy skin smoothing
- change body shape
- change a person’s skin colour
- use filters that remove important context
- crop in a way that falsely changes relationships or events

Teach a simple workflow:

1. Save the original.
2. Select the image.
3. Crop and straighten.
4. Correct brightness.
5. Recover highlights and shadows.
6. Correct colour.
7. Use contrast carefully.
8. Check faces, signs, and edges.
9. Compare before and after.
10. Export a copy.

Suggested export:

- JPEG
- sRGB colour space
- High quality
- Long edge suitable for screen or print task
- Preserve an original high-resolution copy
- Use clear filenames

### Interactive before and after panel

Create a draggable comparison slider. Use a vector scene or local sample image.

### Individual activity

Edit one image three ways:

- Natural colour
- Black and white
- Deliberately excessive edit

Discuss which choices support or weaken the story.

### Group activity

Ethics cards. Decide whether each edit is acceptable, questionable, or misleading.

### Practical challenge

Create a print-ready version and a web-ready version of the same image.

### Reflection

- What did I change?
- Why did I change it?
- What information remained true?
- Did the edit make the image look more dramatic than the real situation?
- Could I explain every adjustment publicly?

### Assignment

Edit the final seven-image story with consistent colour and file naming.

### Safety and ethics reminder

Keep original files. Never overwrite the only copy.

---

## Lesson 19. Titles, Captions, Reflections, and Artist Statements

Month: 5  
Week: 19  
Format: Indoor writing and design workshop  
Duration: 3 hours

### Core question

How can we write clearly about photographs while keeping our own voice?

### Learning goals

Participants should be able to:

- create a working title
- write accurate captions
- edit a quote
- write a personal reflection
- write a short artist statement
- choose text length for a zine or exhibition
- proofread names and facts

### Key vocabulary

Title, caption, reflection, artist statement, context, voice, edit, proofread, attribution.

### Teaching content

Teach a simple title process:

- Start with a specific object, place, phrase, sound, routine, or question.
- Avoid titles that are too broad, such as Life or Community.
- Test whether the title opens the story without explaining everything.

Caption checklist:

- Who is shown?
- What are they doing?
- Where?
- When?
- Why is the action relevant?
- Is every name correct?
- Is the information verified?
- Does the person want to be named?

Reflection prompts:

- I made these photographs because...
- I kept returning to...
- Before this project, I thought...
- The camera helped me notice...
- One thing people misunderstand is...
- The hardest image to make was...
- I want viewers to remember...
- I changed my mind about...
- This place matters because...

Artist statement structure:

1. Introduce the subject.
2. Explain the personal connection.
3. Describe the approach.
4. Name the question or idea.
5. Explain what the photographer hopes viewers will consider.

Target length: 120 to 200 words.

### Individual activity

Write:

- Three title options
- Seven captions
- One verified quote
- One 150-word reflection
- One 150-word artist statement

### Group activity

Peer editing in pairs. The editor checks clarity, facts, repetition, and respect. The photographer keeps final control.

### Practical challenge

Reduce a 100-word caption to 40 words without losing essential information.

### Reflection

- Does the writing sound like me?
- Did I include facts that are not visible?
- Did I repeat what the image already shows?
- Did I describe a person with respect?
- Did I check every name?

### Assignment

Complete a polished text package for the seven-image story.

### Safety and ethics reminder

Remove sensitive identifying details that do not serve the story.

---

## Lesson 20. Outdoor Practical: Reshoot, Fill the Gaps, and Finalise the Story

Month: 5  
Week: 20  
Format: Outdoor photography and editing practical  
Duration: 4 hours

### Core question

What does the story still need?

### Learning goals

Participants should be able to:

- identify missing images
- plan a focused reshoot
- improve weak technical choices
- return respectfully to a subject
- confirm facts and consent
- complete a final story package

### Preparation

Each participant brings:

- Current seven-image sequence
- Three alternative images
- Missing image list
- Technical problems list
- Questions to verify
- Consent follow-up needs
- Equipment checklist

### Reshoot priorities

Possible missing images:

- Stronger opening
- Clearer place
- Better portrait
- Important action
- Relationship
- Detail
- Transition
- Closing image
- Different time of day
- Better light
- Correct name or quote
- Safer and more respectful alternative

### Field practice

Participants return only where permission and safety allow. They should not repeat the entire assignment. They should make specific images based on the edit.

### Final review

After the field session:

1. Import images.
2. Back up files.
3. Mark new images.
4. Compare old and new versions.
5. Update the sequence.
6. Recheck captions.
7. Recheck consent.
8. Export final images.
9. Save project files in organised folders.

### Practical challenge

Replace one weak image with a stronger image and explain exactly what improved.

### Reflection

- What did the first edit reveal?
- Did the reshoot improve the story?
- What did I understand only after returning?
- What should I stop photographing?
- What should I continue following?

### Assignment

Submit the complete final story package for zine and exhibition consideration.

### Safety and ethics reminder

Returning with a camera does not create automatic permission. Ask again and explain what you need.

# MONTH SIX: PUBLISHING AND SHARING

## Lesson 21. Zine Making, Sequencing, and Page Design

Month: 6  
Week: 21  
Format: Indoor design workshop  
Duration: 3 hours

### Core question

How can photographs and words become a publication with rhythm and meaning?

### Learning goals

Participants should be able to:

- explain what a zine is
- understand page order
- sequence images across spreads
- balance full-bleed images, white space, captions, and reflections
- create a cover and back cover
- make collaborative editorial decisions
- prepare files for print and digital viewing

### Key vocabulary

Zine, cover, spread, gutter, sequence, full bleed, margin, caption, folio, crop, proof, print.

### Teaching content

A zine is a small self-published work. It can combine photography, writing, drawing, quotes, maps, notes, and design.

Teach page roles:

- Cover creates the first invitation.
- Opening spread sets the tone.
- Full-bleed page creates impact.
- Quiet page creates rest.
- Pairing two images creates comparison or conversation.
- Text page adds voice and context.
- Closing image shapes the final feeling.
- Back cover can include project information and credits.

Teach sequencing principles:

- Visual connection
- Contrast
- Repetition
- Change of scale
- Change of pace
- Colour relationship
- Gesture relationship
- Time
- Place
- Theme

Teach design principles:

- Keep body text readable.
- Do not place important faces or words in the gutter.
- Use consistent margins.
- Give strong photographs enough space.
- Avoid placing every element at the same size.
- Keep captions connected to the correct image.
- Test the sequence by printing small thumbnails.

### Interactive zine board

Create:

- Drag-and-drop page thumbnails
- Single page and spread view
- Cover and back cover slots
- Add caption, quote, and reflection
- Fit and fill controls
- Page number toggle
- Print preview
- Save layout locally
- Export a JSON project file
- Print to PDF through the browser

### Individual activity

Each participant creates an eight-page mini-zine from their story.

### Group activity

Build a collective sequence using one or two images from each participant. Every participant explains their choice.

### Practical challenge

Create three different opening spreads and compare their effect.

### Reflection

- What should the viewer see first?
- Where does the publication need silence?
- Which images speak to each other?
- Is every participant represented fairly?
- What does the final page leave behind?

### Assignment

Complete a first zine proof and list corrections.

### Safety and ethics reminder

Publication increases reach. Recheck consent for every image and quote before final export.

---

## Lesson 22. Exhibition Design, Printing, and Public Presentation

Month: 6  
Week: 22  
Format: Indoor planning workshop  
Duration: 3 hours

### Core question

How can we create an exhibition that welcomes the community and protects the meaning of the work?

### Learning goals

Participants should be able to:

- select exhibition images
- plan print sizes
- arrange an exhibition wall
- write wall labels
- create a visitor journey
- prepare a short spoken introduction
- identify practical installation needs

### Key vocabulary

Exhibition, curation, print size, wall label, sequence, spacing, sightline, installation, proof, credit.

### Teaching content

An exhibition is not only a group of large prints. It is a physical sequence that people experience with their bodies.

Discuss:

- Entrance image
- Thematic groups
- Participant names
- Captions and reflections
- Print size
- Viewing distance
- Lighting
- Wall colour
- Accessibility
- Seating
- Audio or reading station
- Visitor feedback
- Credits
- Safety
- Print protection

Suggested print planning:

- Small prints for details and intimate moments
- Medium prints for most documentary images
- Large prints for key opening or anchor images
- Test prints before final production
- Use consistent colour management
- Check resolution at intended size
- Keep image files and captions clearly named

### Vector wall planner

Create a scalable exhibition wall with draggable frames. Show measurements, spacing, title panel, participant labels, and visitor path arrows.

### Individual activity

Each participant selects:

- One anchor image
- Two supporting images
- One caption
- One quote or reflection

### Group activity

Create three wall plans:

1. By participant
2. By theme
3. As one shared visual journey

Discuss strengths and risks.

### Public speaking practice

Each participant prepares a 60-second introduction:

- My name is...
- I photographed...
- This story matters to me because...
- One thing I want viewers to notice is...
- One thing I learned is...

### Assignment

Complete final image files, caption files, print sizes, and a spoken introduction.

### Safety and ethics reminder

Do not display exact private locations or information that could create risk after the exhibition opens.

---

## Lesson 23. Outdoor Practical: Final Field Production

Month: 6  
Week: 23  
Format: Outdoor final photography practical  
Duration: 4 hours

### Core question

What final image represents how my way of seeing has changed?

### Learning goals

Participants should be able to:

- plan and complete a final photograph
- use technical and storytelling skills together
- work independently within safety limits
- make intentional visual decisions
- write a final reflection
- prepare work for presentation

### Final assignment theme

This Is Where We’re From

Each participant creates a final set of three photographs:

1. A photograph about place
2. A photograph about relationship
3. A photograph about future, change, or hope

The three images should work together but must not repeat the same subject or composition.

### Planning card

Before leaving, complete:

- What do I want to photograph?
- Why does it matter to me?
- Who needs to give consent?
- What time gives useful light?
- What lens or camera setting might help?
- What safety concern should I plan for?
- What detail must I not forget?
- What words may accompany the image?

### Field requirements

Participants should use:

- Intentional exposure
- Deliberate viewpoint
- Clear focus choice
- Strong composition
- Respectful consent
- Accurate notes
- Visual variety
- Personal connection

### Closing circle

At the end of the walk, each participant chooses one frame on the camera and says:

- I made this because...
- I noticed...
- I changed...
- I still want to learn...

### Assignment

Edit the final three images, write captions, and complete a 200-word final reflection.

### Safety and ethics reminder

Follow the agreed route, check-in times, group system, and facilitator instructions.

---

## Lesson 24. Final Edit, Exhibition Rehearsal, Reflection, and Celebration

Month: 6  
Week: 24  
Format: Indoor final workshop and showcase  
Duration: 3 to 4 hours

### Core question

What have we learned, made, and changed through six months of photography?

### Learning goals

Participants should be able to:

- complete a final portfolio
- present a story clearly
- explain technical and ethical decisions
- participate in final curation
- reflect on personal growth
- give credit to collaborators
- identify next steps

### Final portfolio requirements

Each participant prepares:

- Seven-image personal story
- Three-image final assignment
- One portrait
- One movement image
- One composition study
- One image about home or belonging
- One image selected by the participant as their strongest work
- Accurate captions
- One quote where relevant
- Artist statement
- Final reflection
- Consent record confirmation

### Final edit process

1. Check focus and resolution.
2. Check colour consistency.
3. Check filenames.
4. Check captions and names.
5. Check consent.
6. Check print sizes.
7. Check zine sequence.
8. Check exhibition sequence.
9. Back up all final files.
10. Export final versions.

### Exhibition rehearsal

Participants practise:

- Welcoming visitors
- Introducing the project
- Presenting one image
- Answering a question
- Protecting private information
- Explaining consent
- Thanking collaborators

### Reflection questions

- What did I photograph at the beginning?
- What do I photograph now?
- What technical skill improved most?
- What did I learn about consent?
- What did I learn about my community?
- Which photograph changed how I see something?
- What story should I continue?
- What would I teach a new participant?
- What am I proud of?
- What comes next?

### Celebration activity

Create a non-competitive badge wall. Suggested badges:

- Light Finder
- Focus Keeper
- Moment Catcher
- Respectful Portrait Maker
- Story Builder
- Careful Editor
- Caption Writer
- Sequence Maker
- Community Listener
- Zine Maker
- Exhibition Guide
- Thoughtful Photographer

Every participant receives several badges based on effort, growth, care, collaboration, and completed work.

### Final group statement

Provide an editable group statement beginning with:

We are young photographers from Kibera. These photographs come from the places, people, routines, questions, and memories that shape our lives. We made them from our own point of view.

### Final assignment

Present the work at the community exhibition and contribute to the photo-zine.

### Safety and ethics reminder

Publication is not the end of responsibility. Continue listening to participants and people photographed after the work is shared.

# EXPOSURE TRIANGLE SIMULATION SPECIFICATION

Build a special interactive section called Exposure Lab.

## Simulation goal

Help a beginner understand how aperture, shutter speed, and ISO affect:

- Brightness
- Depth of field
- Subject motion
- Camera shake
- Image noise
- Exposure balance

## Simulation layout

Use a three-panel responsive layout on desktop and a stacked layout on mobile.

### Left panel: Controls

Include three large controls.

#### Aperture control

Values:

- f/1.4
- f/2
- f/2.8
- f/4
- f/5.6
- f/8
- f/11
- f/16
- f/22

Show:

- Wider opening at lower f-number
- More light at lower f-number
- Shallower depth of field at lower f-number
- Smaller opening at higher f-number
- Less light at higher f-number
- Deeper depth of field at higher f-number

Use an animated SVG aperture blade illustration.

#### Shutter speed control

Values:

- 30 seconds
- 15 seconds
- 8 seconds
- 4 seconds
- 2 seconds
- 1 second
- 1/2
- 1/4
- 1/8
- 1/15
- 1/30
- 1/60
- 1/125
- 1/250
- 1/500
- 1/1000
- 1/2000
- 1/4000

Show:

- More light at slower speed
- More movement recorded at slower speed
- Less light at faster speed
- More movement frozen at faster speed

Use an animated SVG person, bicycle wheel, football, or matatu-shaped movement example. Keep the visual respectful and simple.

#### ISO control

Values:

- 100
- 200
- 400
- 800
- 1600
- 3200
- 6400
- 12800

Show:

- Darker result at lower ISO when other settings remain fixed
- Cleaner result at lower ISO
- Brighter result at higher ISO
- More visible noise at higher ISO

Use a vector or Canvas grain overlay that increases with ISO.

### Centre panel: Live scene preview

Build a vector neighbourhood scene containing:

- A person in the foreground
- A moving subject in the middle ground
- Buildings or shops in the background
- A doorway
- A bright sky area
- A shadow area
- A small sign
- A patterned surface

The scene should visibly respond to the controls.

Aperture should change:

- Background blur
- Near and far focus
- Visible aperture icon

Shutter should change:

- Motion blur
- Freeze effect
- Camera shake warning at slower handheld speeds

ISO should change:

- Grain
- Fine detail
- Brightness

Overall exposure should change:

- Scene brightness
- Highlight warning
- Shadow warning
- Exposure meter

### Right panel: Explanation

Display live text such as:

- The image is two stops underexposed.
- The image is close to balanced.
- The background is soft because the aperture is wide.
- Movement is frozen because the shutter is fast.
- Visible noise is increasing because ISO is high.
- A tripod or support may help at this shutter speed.
- More of the scene is in focus at this aperture.

Use simple language.

## Exposure meter

Create a scale from -3 to +3.

- -3 means very dark
- 0 means balanced
- +3 means very bright

Use the project yellow for the current marker. Use patterns and labels for underexposed and overexposed ranges.

## Modes

Include:

- Manual
- Aperture Priority
- Shutter Priority
- Auto ISO

In priority modes, the simulation should adjust a second setting to keep exposure close to zero.

## Scene presets

Include:

1. Bright outdoor portrait
2. Open shade portrait
3. Indoor doorway
4. Evening street
5. Football action
6. Moving transport
7. Group portrait
8. Low-light family scene
9. Silhouette
10. Intentional motion trail

## Challenge mode

Create at least 12 challenges:

1. Freeze a football in daylight.
2. Blur a moving wheel.
3. Make a portrait with a soft background.
4. Keep a group in focus.
5. Photograph indoors without extreme noise.
6. Create a silhouette.
7. Keep the sky from becoming too bright.
8. Use panning.
9. Create a sharp handheld evening image.
10. Create a long-exposure light trail.
11. Use low ISO for a clean landscape.
12. Balance exposure after changing aperture.

Each challenge should:

- Give the goal
- Allow the participant to adjust controls
- Check the settings
- Explain what worked
- Offer a useful hint
- Award a non-competitive badge
- Allow retry

## Compare mode

Allow participants to save Setting A and Setting B, then compare:

- Brightness
- Depth
- Motion
- Noise
- Exposure value

## Accessibility

- Provide keyboard controls
- Label every slider
- Show current values in text
- Do not rely on colour alone
- Respect reduced motion settings
- Provide a static explanation when animation is disabled

# SAFETY, ETHICS, AND PARTICIPANT CARE

Create a permanent Safety and Ethics section with these principles.

## Consent

- Ask before making close portraits.
- Explain who you are and what the project is.
- Explain where the image may appear.
- Accept no.
- Allow people to change their mind where possible.
- Use age-appropriate consent and facilitator guidance for children.
- Do not assume that being in public removes all ethical responsibility.

## Dignity

- Do not use humiliation, suffering, injury, grief, poverty, or private difficulty as visual decoration.
- Do not ask people to repeat painful actions for the camera.
- Do not create false scenes.
- Do not reduce a person to one difficult moment.
- Show people as individuals with context and agency.

## Privacy

- Avoid unnecessary exact addresses, school details, phone numbers, documents, medical details, and private family information.
- Remove sensitive metadata before public sharing where needed.
- Do not publish a photograph that may expose someone to stigma, punishment, harassment, or danger.

## Physical safety

- Work in groups.
- Follow agreed routes.
- Keep emergency contacts.
- Do not stand in roads, railway areas, open drains, unstable buildings, roofs, restricted areas, or unsafe crowds.
- Stop walking before looking through the camera.
- Keep equipment discreet where required.
- Follow facilitator instructions.

## Emotional care

- Participants may photograph subjects connected to difficult memories.
- Allow anyone to pause, skip, or change an assignment.
- Do not force personal disclosure.
- Use private check-ins when needed.
- Avoid public critique that embarrasses a participant.
- Focus feedback on photographs and choices, not personal worth.

## Digital safety

- Do not upload participant images automatically.
- Keep local drafts private.
- Explain what export and sharing buttons do.
- Confirm consent before posting.
- Do not expose hidden file paths or metadata.
- Include a clear Reset Local Data control.

# GLOSSARY CONTENT

Include these definitions:

- Aperture: The adjustable opening in a lens that controls light and affects depth of field.
- Caption: Accurate written information that gives context to a photograph.
- Composition: The arrangement of visual elements inside the frame.
- Consent: A clear and informed agreement that can be refused.
- Contact sheet: A grid of images used for reviewing and selecting photographs.
- Crop: Removing outer parts of an image to improve framing or format.
- Depth of field: The range of distance that appears acceptably sharp.
- Documentary photography: Photography that records real people, places, events, and conditions with attention to accuracy and context.
- Exposure: The amount of light recorded in an image.
- Exposure triangle: The relationship between aperture, shutter speed, and ISO.
- Focal length: A lens measurement that affects field of view and image appearance.
- Focus: The area of the image that appears sharp.
- Frame: The visible boundary of a photograph.
- ISO: A camera control that affects image brightness and visible noise.
- Leading lines: Visual lines that guide the viewer’s eye.
- Metadata: Information stored with a digital file, such as date, camera settings, and location.
- Motion blur: The visible recording of movement during an exposure.
- Negative space: Open space around the main subject.
- Noise: Random grain or colour variation that becomes more visible at high ISO.
- Perspective: The way distance and spatial relationships appear from a camera position.
- Photo essay: A connected group of images that develops a story or idea.
- Portrait: A photograph that represents a person through face, body, activity, environment, object, or gesture.
- Reflection: Personal writing about what the photographer noticed, felt, questioned, or learned.
- Resolution: The amount of image detail available for display or printing.
- Rule of thirds: A composition guide that divides the frame into nine parts.
- Sequence: The order in which photographs are presented.
- Shutter speed: The length of time the camera records light.
- Visual storytelling: Communicating experience, information, feeling, or ideas through images and their order.
- White balance: A setting that corrects or changes how colour temperature appears.
- Zine: A small self-published work combining images, text, and design.

# INTERACTIVE FEATURES

Build these features with vanilla JavaScript.

## Progress

- Lesson completion checkboxes
- 24-step progress bar
- Month completion indicators
- Progress stored in localStorage
- Reset progress button with confirmation

## Notes

- Participant notes for every lesson
- Trainer notes for every lesson
- Auto-save locally
- Character count
- Print notes with lesson
- Export notes as a text file

## Image placeholders

- Drag and drop
- Click to browse
- Support JPEG, PNG, WebP, and HEIC where browser support exists
- Show image filename
- Fit, fill, and centre controls
- Rotate control
- Remove image control
- Keep images local
- Do not upload to a server

## Reflection journal

Provide dated entries with prompts:

- Today I noticed...
- I was thinking...
- I made this photograph because...
- I changed my mind about...
- I want to return to...
- I need help with...
- A photograph I am proud of...
- A question I still have...

## Photo prompt spinner

Create a fun random prompt tool using project themes.

Prompt examples:

- Photograph a colour that reminds you of home.
- Photograph a friendship without showing faces.
- Photograph a small act of care.
- Photograph a place from knee height.
- Photograph a reflection.
- Photograph hands making or repairing something.
- Photograph a repeated shape.
- Photograph a quiet corner.
- Photograph a sound.
- Photograph something that is changing.
- Photograph a sign that says something about the community.
- Photograph a dream without staging a person.
- Photograph a moment of play.
- Photograph one object from five viewpoints.
- Photograph a place at two different times.

## Badges

Use badges to recognise learning, care, and completion. Do not create a leaderboard.

## Print support

Create print styles for:

- Individual lesson
- Monthly plan
- Assignment sheet
- Exposure triangle reference
- Photo review sheet
- Reflection journal
- Zine plan
- Exhibition plan
- Final portfolio checklist

# ACCESSIBILITY AND RESPONSIVE DESIGN

Meet WCAG AA contrast.

Include:

- Visible focus states
- Skip link
- Semantic headings
- Button labels
- Form labels
- Alt text guidance
- Keyboard support
- Touch targets of at least 44 by 44 pixels
- Reduced motion support
- Clear error messages
- Responsive typography
- No horizontal scrolling on small screens
- Print-friendly layouts
- Screen-reader descriptions for SVG diagrams

# PERFORMANCE AND CLOUDFLARE REQUIREMENTS

- Use only static assets.
- Do not require Node.js at runtime.
- Do not require a database.
- Do not use remote image APIs.
- Keep JavaScript modular and readable.
- Use lazy loading for participant-added image previews where practical.
- Compress logo and icon assets without reducing visible quality.
- Include cache-friendly filenames where suitable.
- Add a web app manifest.
- Add a basic service worker only when it does not interfere with updates.
- Provide a clear deployment README section inside an HTML comment or separate README file.
- Ensure all internal paths work on Cloudflare Pages.
- Include a custom 404.html page using the project branding.
- Use relative paths.
- Test with JavaScript enabled and provide readable core lesson content if JavaScript fails.

# CONTENT RULES

- Use British English spelling.
- Use simple language suitable for participants aged 12 to 19.
- Do not use poverty-focused language as the default description of Kibera.
- Do not speak about participants as beneficiaries.
- Do not use the phrase giving voice. Participants already have voices.
- Do not call photographs captures when discussing people.
- Use make a photograph instead of take a photograph where natural.
- Do not add invented partners, funders, statistics, testimonials, or participant names.
- Do not use lorem ipsum.
- Do not replace the full curriculum with summaries.
- Do not add stock images.
- Keep Brian Otieno named as project lead and copyright holder.
- Keep the Instagram handle, website, and email exact.

# FINAL QUALITY CHECK

Before completing the website, verify:

- All 24 lessons appear.
- Lessons are in chronological order.
- Each month contains exactly four lessons.
- Every month includes an outdoor practical.
- The Exposure Lab works on mobile and desktop.
- Aperture affects depth of field.
- Shutter speed affects movement.
- ISO affects noise.
- The exposure meter responds to all three settings.
- Every lesson has notes, assignment, reflection, materials, and ethics.
- The project colours are exact.
- The logos are not distorted.
- The footer links work.
- The copyright line appears exactly.
- External links open safely.
- The site is printable.
- Progress saves locally.
- Images remain local.
- The design feels like THIS IS WHERE WE'RE FROM.
- The page can deploy directly to Cloudflare Pages.
