// Single source of truth for Tri Lotus content — faithful to the existing
// trilotustherapy.com homepage (same copy, structure, images, menu).

export const clinic = {
  name: "Tri Lotus Psychotherapy",
  shortName: "Tri Lotus",
  phone: "587-741-2289",
  phoneHref: "tel:+15877412289",
  email: "hello@trilotustherapy.com",
  emailHref: "mailto:hello@trilotustherapy.com",
  address: {
    line1: "7370 Sierra Morena Blvd SW #102",
    city: "Calgary, AB T3H 4H9",
    full: "7370 Sierra Morena Blvd SW #102, Calgary, AB T3H 4H9",
    mapHref: "https://maps.google.com/?q=7370+Sierra+Morena+Blvd+SW+102+Calgary+AB+T3H+4H9",
  },
  booking: { url: "https://trilotuspsych.janeapp.com" },
  clientLogin: "https://trilotuspsych.janeapp.com",
  social: {
    instagram: "https://www.instagram.com/trilotuspsych",
    facebook: "https://www.facebook.com/trilotuspsych",
    linkedin: "https://www.linkedin.com/company/tri-lotus-psychotherapy",
  },
};

export const announcement = {
  text: "NOW ACCEPTING NEW CLIENTS: In-Person in Calgary & Online across Alberta",
  ctaLabel: "Book a Free 20min Introductory Call!",
};

export const hours = [
  { day: "Monday", time: "5:00pm to 8:00pm" },
  { day: "Tuesday", time: "1:00pm to 8:00pm" },
  { day: "Wednesday", time: "8:00am to 8:00pm" },
  { day: "Thursday", time: "8:00am to 8:00pm" },
  { day: "Friday", time: "11:30am to 4:30pm" },
  { day: "Saturday", time: "9:00am to 3:00pm" },
];

// Full navigation, mirroring the original site menu. This is a single-page
// showcase, so links resolve to on-page section anchors (no separate pages).
export const nav = [
  { label: "Home", href: "#top" },
  {
    label: "Meet Our Team",
    href: "#team",
    children: [
      { label: "Sarah K. Albers", href: "#team" },
      { label: "Brianna Spulnick", href: "#team" },
      { label: "Kaylee Garside", href: "#team" },
      { label: "Melissa Katona", href: "#team" },
      { label: "Kaylee Procter", href: "#team" },
      { label: "Rhylee Redden", href: "#team" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Individual Therapy", href: "#services" },
      { label: "Couples Therapy", href: "#services" },
      { label: "Anxiety Therapy", href: "#services" },
      { label: "Teen Therapy", href: "#services" },
      { label: "Trauma Therapy", href: "#services" },
      { label: "Postpartum Therapy", href: "#services" },
      { label: "Stress & Burnout Therapy", href: "#services" },
      { label: "ADHD Therapy", href: "#services" },
      { label: "Grief Support Therapy", href: "#services" },
      { label: "Family Therapy", href: "#services" },
      { label: "Parenting Support Therapy", href: "#services" },
      { label: "Perfectionism & People Pleasing Therapy", href: "#services" },
    ],
  },
  {
    label: "Assessment",
    href: "#services",
    children: [{ label: "ADHD Assessment", href: "#services" }],
  },
  {
    label: "Therapy Approach",
    href: "#why",
    children: [
      { label: "Acceptance and Commitment Therapy", href: "#why" },
      { label: "Cognitive Behavioural Therapy", href: "#why" },
      { label: "EMDR Therapy", href: "#why" },
      { label: "Emotionally Focused Therapy", href: "#why" },
      { label: "Compassion Focused Therapy", href: "#why" },
      { label: "Mindfulness-Based Therapy", href: "#why" },
      { label: "Gottman Method for Couples", href: "#why" },
    ],
  },
  {
    label: "Resources",
    href: "#faq",
    children: [
      { label: "Free Stuff", href: "#resource" },
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "#faq" },
    ],
  },
  { label: "Contact Us", href: "#contact" },
];

export const hero = {
  pre: "We help you feel more",
  emphasis: "at ease",
  post: ", both with yourself and in your relationships.",
  sub: "Providing in-person therapy for Adults, Children, Teens, Couples and Families in Calgary & Online across Alberta.",
  image: "/images/calgary-therapist-a.jpg",
  imageAlt: "Friends laughing together over coffee",
};

export const features = [
  { icon: "parking", lines: ["Free Parking &", "Convenient Booking"] },
  { icon: "clock", lines: ["Daytime, Evening &", "Weekend Appointments"] },
  { icon: "video", lines: ["In-Person &", "Virtual Sessions"] },
];

export const painPoints = {
  quotes: [
    "I feel so overwhelmed.",
    "I don't feel like myself.",
    "My mind won't shut off.",
    "My relationship is struggling.",
    "I feel like I'm failing as a parent.",
    "I'm not living the life that I want.",
  ],
  body: "Anxiety, relationship difficulties, past trauma, parenting struggles and difficulty navigating our emotions can impact our ability to enjoy life and connect with others.",
  lead: "At Tri Lotus Psychotherapy, we'll help you navigate the hurt, unravel the pain, and find a way through. We'll help you start enjoying life and your relationships.",
  image: "/images/calgary-psychologist-b.jpg",
  imageAlt: "A therapist listening to a client during a session",
};

export const feelings = {
  heading: "How would it feel to...",
  items: [
    { title: "Process past trauma", body: "So that it no longer impacts how you feel about yourself, your mental health, and your experience in relationships." },
    { title: "Detach from Racing Thoughts", body: "Learn to manage anxiety and free up space in your mind for the things that matter." },
    { title: "Break free from unhealthy relationship patterns", body: "Feel confident that your relationship is strong and you two can handle anything." },
    { title: "Navigate your emotions effectively", body: "Feel your feelings in a way that doesn't lead to overwhelm, so that they don't remain stuck in your body. Find calm again." },
    { title: "Take back control of your life", body: "Live a life aligned with your values. One that is dictated by what you want." },
    { title: "Face parenting challenges with calm and confidence", body: "Feel empowered to handle difficult behaviours and build a deeper connection with your child, knowing you have the tools and support you need." },
    { title: "Reconnect with your values", body: "Explore how you want to show up in your relationship with yourself, others, at work, school etc. Find practical ways to reconnect to those values and feel confident in your self-identity." },
  ],
};

export const services = [
  { id: "intro", icon: "phone", title: "Complimentary Introductory Calls", body: "A 20-minute no obligation phone consultation to “meet” your potential therapist and ask any questions you may have.", href: "#contact" },
  { id: "individual", icon: "leaf", title: "Individual Therapy", body: "Compassionate, inclusive, and evidence-based psychotherapy services for adults and teens. We personalize treatment to each individual client.", href: "#contact" },
  { id: "couples", icon: "rings", title: "Couples Therapy", body: "Strengthen your relationships, heal from past hurt, and improve your connection and communication. Our therapists are trained in couples therapy modalities that help you see results.", href: "#contact" },
  { id: "family", icon: "heart", title: "Family Therapy", body: "Compassionate, inclusive, and evidence-based psychotherapy services for families. Our therapists are trained in family counselling modalities to help you see results.", href: "#contact" },
  { id: "parenting", icon: "sprout", title: "Parenting Support Therapy", body: "Compassionate and inclusive support for parents navigating the complexities of parenting. Our therapists have lived experience and are trained in various strategies to help.", href: "#contact" },
  { id: "adhd", icon: "compass", title: "ADHD Assessment", body: "Providing comprehensive ADHD Assessments for adults and teens (16+). We offer both ADHD assessments and therapy for ADHD.", href: "#contact" },
];

export const whyChoose = {
  heading: "Why choose Tri Lotus Psychotherapy?",
  paragraphs: [
    { text: "We believe all pain is valid and worthy of care, there's no hierarchy here. We provide a safe space to practice vulnerability, fostering connection that can transform your relationships.", emphasis: "all pain is valid and worthy of care" },
    { text: "Therapy doesn't stop in the room; we equip you with practical tools for real-life change. All of our therapeutic approaches are based on evidence that they work.", emphasis: "practical tools for real-life change" },
    { text: "And with a blend of authenticity, compassion, and a touch of humour, we make therapy both effective and approachable. We believe that in order to heal, we must meet humans as humans. This means that your therapist will show up as relatable and authentic.", emphasis: "effective and approachable" },
  ],
  image: "/images/marriage-therapist-a.jpg",
  imageAlt: "Two people connecting warmly on a couch",
};

export const resourceCta = {
  title: "Discover Quick Coping Strategies for Moments of Overwhelm",
  href: "#contact",
  image: "/images/calgary-therapist-b.jpg",
};

export const team = [
  { name: "Rhylee Redden", first: "Rhylee", href: "#contact", supports: "Supports Teens/Children (8+), Couples, Adults, Families", image: "/images/therapist-rhylee-redden.jpg" },
  { name: "Sarah K. Albers", first: "Sarah", href: "#contact", supports: "Supports Couples, Teens (9+), Adults, Families", image: "/images/therapist-sarah-albers.jpeg" },
  { name: "Brianna Spulnick", first: "Brianna", href: "#contact", supports: "Supports Adults and Teens (16+)", image: "/images/therapist-brianna-spulnick.jpg" },
  { name: "Kaylee Procter", first: "Kaylee P.", href: "#contact", supports: "Supports Adults and Couples", image: "/images/kaylee-b.jpg" },
  { name: "Kaylee Garside", first: "Kaylee G.", href: "#contact", supports: "Supports Adults, Couples, and Teens (14+)", image: "/images/kaylee-a.jpg" },
  { name: "Melissa Katona", first: "Melissa", href: "#contact", supports: "Supports Adults, Couples, Teens (12+)", image: "/images/therapist-melissa-katona.jpg", note: "Currently on maternity leave" },
];

export const faqs = [
  { q: "Do you only offer online therapy, or can I see a therapist in person?", a: "We offer both in-person therapy in Calgary and online therapy throughout Alberta! If you're looking for “a therapist in person near me,” you can book a free 20-minute introductory call to get started. From there, you can choose a therapist and schedule a session." },
  { q: "How do I know which therapist in person near me is the right fit?", a: "Check out our Meet Our Team page. If you're unsure who to choose, feel free to reach out to hello@trilotustherapy.com. We can help you find the right fit." },
  { q: "What should I expect during my first therapy session?", a: "The initial therapy session will focus on getting to know you. Your therapist will take some history, dig deeper into your current struggles, and we will develop therapy goals together. You are free to share whatever you are comfortable with." },
  { q: "How long are therapy sessions?", a: "We have 50-minute therapy sessions, which is the recommended session time by the Psychologists' Association of Alberta. If 50 minutes does not seem sufficient, Tri Lotus Psychotherapy also offers 75-minute session options." },
];

export const modalities = [
  { abbr: "ACT", name: "Acceptance and Commitment Therapy" },
  { abbr: "CBT", name: "Cognitive Behavioural Therapy" },
  { abbr: "EMDR", name: "EMDR Therapy" },
  { abbr: "EFT", name: "Emotionally Focused Therapy" },
  { abbr: "CFT", name: "Compassion Focused Therapy" },
  { abbr: "Mindfulness", name: "Mindfulness-Based Therapy" },
  { abbr: "Gottman", name: "Gottman Method for Couples" },
];

// Land acknowledgment, verbatim from the original site.
export const landAck =
  "Land Acknowledgment: I gratefully acknowledge and honour that where I live, work and play is within the traditional territories of the people of the Treaty 7 region in Southern Alberta, which includes the Blackfoot Confederacy (comprising the Siksika, Piikani, and Kainai First Nations) as well as the Tsuut'ina First Nation, and the Stoney Nakoda (including the Chiniki, Bearspaw, and Wesley First Nations); and Métis Nation of Alberta, Region 3. The traditional Blackfoot name of this place is “Mohkinstsis”, which is also known now as Calgary.";

export const connect = {
  heading: "Let's Connect",
  sub: "Please fill out the form to request an initial appointment or complimentary introductory call.",
  channelOptions: ["In-Person Therapy", "Online Therapy"],
};
