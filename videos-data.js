// Control Systems Mastery - All 62 Videos Data
// No API key needed - all data hardcoded from transcript file

const VIDEOS_DATA = [
    {
        id: 1,
        videoId: "7MzlIX4JhXA",
        title: "Solving for Vout with Unit Ramp Input and Transfer Function",
        url: "https://www.youtube.com/watch?v=7MzlIX4JhXA",
        embedUrl: "https://www.youtube.com/embed/7MzlIX4JhXA",
        thumbnail: "https://img.youtube.com/vi/7MzlIX4JhXA/maxresdefault.jpg",
        topics: ["Transfer Functions", "Unit Ramp", "Laplace Transform", "Partial Fractions"],
        difficulty: "Intermediate",
        description: "Learn how to solve for Vout with unit ramp input using transfer functions. Topics covered: unit ramp function (1/s²), transfer function multiplication, partial fraction decomposition, and inverse Laplace transform. Practical problem-solving with t=6.8 seconds evaluation.",
        transcript: "Complete walkthrough of solving V_out using unit ramp input with transfer function G(s)=4/(s+0.25)². Learn the step-by-step process: identifying unit ramp as 1/s², multiplying with transfer function, applying partial fractions, taking inverse Laplace transform, and evaluating at specific time values."
    },
    {
        id: 2,
        videoId: "l_a7eL0lR4g",
        title: "Solving for Vout with Impulse Input and Transfer Function",
        url: "https://www.youtube.com/watch?v=l_a7eL0lR4g",
        embedUrl: "https://www.youtube.com/embed/l_a7eL0lR4g",
        thumbnail: "https://img.youtube.com/vi/l_a7eL0lR4g/maxresdefault.jpg",
        topics: ["Transfer Functions", "Impulse Input", "Laplace Transform"],
        difficulty: "Intermediate",
        description: "Understand how to solve for Vout with impulse input, checking Laplace tables and applying partial fractions.",
        transcript: "Learn to solve V_out with impulse input using transfer functions. Key concepts: impulse function in s-domain equals 1, transfer function G(s)=4/(s+0.25)², checking Laplace transform tables for matching forms, applying partial fraction decomposition when needed, and taking inverse Laplace transform to find time-domain solution."
    },
    {
        id: 3,
        videoId: "4vEjBgz8U-Q",
        title: "Solving First-Order Differential Equation in R-L Circuit",
        url: "https://www.youtube.com/watch?v=4vEjBgz8U-Q",
        embedUrl: "https://www.youtube.com/embed/4vEjBgz8U-Q",
        thumbnail: "https://img.youtube.com/vi/4vEjBgz8U-Q/maxresdefault.jpg",
        topics: ["Differential Equations", "R-L Circuits", "First-Order Systems"],
        difficulty: "Beginner",
        description: "Step-by-step solution of first-order differential equations in R-L circuits. Learn to apply KVL (Kirchhoff's Voltage Law), set up the differential equation E = VR(t) + VL(t), and solve with initial conditions i(0)=0.",
        transcript: "Practical R-L circuit analysis with 40V battery, 2mH inductor, and 10Ω resistor. Master the process: writing loop equations using E = I(t)R + L(di/dt), applying initial conditions, and solving the first-order differential equation to find current as a function of time."
    },
    {
        id: 4,
        videoId: "clYQlPOFVjY",
        title: "Applying Initial Conditions with Laplace Transform for Differential Equations",
        url: "https://www.youtube.com/watch?v=clYQlPOFVjY",
        embedUrl: "https://www.youtube.com/embed/clYQlPOFVjY",
        thumbnail: "https://img.youtube.com/vi/clYQlPOFVjY/maxresdefault.jpg",
        topics: ["Laplace Transform", "Initial Conditions", "Differential Equations"],
        difficulty: "Intermediate",
        description: "Learn how to apply initial conditions when using Laplace transforms to solve differential equations."
    },
    {
        id: 5,
        videoId: "mQD0oiXmICY",
        title: "Electrical Circuit Analysis Basics | RLC Circuits & Impedance in Laplace Domain",
        url: "https://www.youtube.com/watch?v=mQD0oiXmICY",
        embedUrl: "https://www.youtube.com/embed/mQD0oiXmICY",
        thumbnail: "https://img.youtube.com/vi/mQD0oiXmICY/maxresdefault.jpg",
        topics: ["RLC Circuits", "Impedance", "Laplace Domain", "Circuit Analysis"],
        difficulty: "Beginner",
        description: "Master the basics of electrical circuit analysis including RLC circuits and impedance in the Laplace domain."
    },
    {
        id: 6,
        videoId: "hBJrJrKiD64",
        title: "Calculating Damping Ratio and Natural Frequency in Second-Order Systems",
        url: "https://www.youtube.com/watch?v=hBJrJrKiD64",
        embedUrl: "https://www.youtube.com/embed/hBJrJrKiD64",
        thumbnail: "https://img.youtube.com/vi/hBJrJrKiD64/maxresdefault.jpg",
        topics: ["Damping Ratio", "Natural Frequency", "Second-Order Systems"],
        difficulty: "Intermediate",
        description: "Calculate damping ratio and natural frequency in second-order control systems."
    },
    {
        id: 7,
        videoId: "IAB0MNLRNu8",
        title: "Simplifying Blocks in Control Systems: Cascade, Parallel, and Feedback Connections",
        url: "https://www.youtube.com/watch?v=IAB0MNLRNu8",
        embedUrl: "https://www.youtube.com/embed/IAB0MNLRNu8",
        thumbnail: "https://img.youtube.com/vi/IAB0MNLRNu8/maxresdefault.jpg",
        topics: ["Block Diagrams", "Control Systems", "Feedback"],
        difficulty: "Intermediate",
        description: "Learn to simplify block diagrams using cascade, parallel, and feedback connections."
    },
    {
        id: 8,
        videoId: "vjD8zOV_-3Y",
        title: "Understanding Laplace Transform and Inverse Laplace Transform",
        url: "https://www.youtube.com/watch?v=vjD8zOV_-3Y",
        embedUrl: "https://www.youtube.com/embed/vjD8zOV_-3Y",
        thumbnail: "https://img.youtube.com/vi/vjD8zOV_-3Y/maxresdefault.jpg",
        topics: ["Laplace Transform", "Inverse Laplace"],
        difficulty: "Beginner",
        description: "Comprehensive introduction to Laplace transforms and their inverses."
    },
    {
        id: 9,
        videoId: "d1Z7erRr7fw",
        title: "Solving for Current and Transfer Function in R-L-C Circuits | Loop Analysis",
        url: "https://www.youtube.com/watch?v=d1Z7erRr7fw",
        embedUrl: "https://www.youtube.com/embed/d1Z7erRr7fw",
        thumbnail: "https://img.youtube.com/vi/d1Z7erRr7fw/maxresdefault.jpg",
        topics: ["RLC Circuits", "Loop Analysis", "Transfer Functions"],
        difficulty: "Intermediate",
        description: "Solve for current and derive transfer functions in RLC circuits using loop analysis."
    },
    {
        id: 10,
        videoId: "Bb8UDdNg1Hs",
        title: "Solving for Current and Voltage in R-L-C Circuits | Loop Analysis and Kirchhoff's Law",
        url: "https://www.youtube.com/watch?v=Bb8UDdNg1Hs",
        embedUrl: "https://www.youtube.com/embed/Bb8UDdNg1Hs",
        thumbnail: "https://img.youtube.com/vi/Bb8UDdNg1Hs/maxresdefault.jpg",
        topics: ["RLC Circuits", "KVL", "KCL", "Loop Analysis"],
        difficulty: "Intermediate",
        description: "Apply Kirchhoff's laws to solve for current and voltage in RLC circuits."
    },
    {
        id: 11,
        videoId: "75BTLSiQsgQ",
        title: "Solving for Voltage and Current in Parallel R-L-C Circuits | Loop Analysis",
        url: "https://www.youtube.com/watch?v=75BTLSiQsgQ",
        embedUrl: "https://www.youtube.com/embed/75BTLSiQsgQ",
        thumbnail: "https://img.youtube.com/vi/75BTLSiQsgQ/maxresdefault.jpg",
        topics: ["RLC Circuits", "Parallel Circuits", "Loop Analysis"],
        difficulty: "Intermediate",
        description: "Analyze parallel RLC circuits to solve for voltage and current."
    },
    {
        id: 12,
        videoId: "xtK2RizbGyE",
        title: "Finding the Transfer Function in R-L Circuits | Step-by-Step Derivation",
        url: "https://www.youtube.com/watch?v=xtK2RizbGyE",
        embedUrl: "https://www.youtube.com/embed/xtK2RizbGyE",
        thumbnail: "https://img.youtube.com/vi/xtK2RizbGyE/maxresdefault.jpg",
        topics: ["Transfer Functions", "R-L Circuits"],
        difficulty: "Beginner",
        description: "Step-by-step derivation of transfer functions in R-L circuits."
    },
    {
        id: 13,
        videoId: "oNB41eBnuU8",
        title: "Force in Mechanical Systems | Derivation of the Equation with Mass, Stiffness, and Damping",
        url: "https://www.youtube.com/watch?v=oNB41eBnuU8",
        embedUrl: "https://www.youtube.com/embed/oNB41eBnuU8",
        thumbnail: "https://img.youtube.com/vi/oNB41eBnuU8/maxresdefault.jpg",
        topics: ["Mechanical Systems", "Mass-Spring-Damper", "Force Analysis"],
        difficulty: "Intermediate",
        description: "Derive force equations in mechanical systems with mass, stiffness, and damping."
    },
    {
        id: 14,
        videoId: "90zEzk2fdWM",
        title: "Solving for Current in R-L Circuits | Using KVL and Laplace Transform",
        url: "https://www.youtube.com/watch?v=90zEzk2fdWM",
        embedUrl: "https://www.youtube.com/embed/90zEzk2fdWM",
        thumbnail: "https://img.youtube.com/vi/90zEzk2fdWM/maxresdefault.jpg",
        topics: ["R-L Circuits", "KVL", "Laplace Transform"],
        difficulty: "Beginner",
        description: "Use KVL and Laplace transforms to solve for current in R-L circuits."
    },
    {
        id: 15,
        videoId: "5sJVaKBNydY",
        title: "Solving R-C Circuit with Initial Conditions | Time and S-Domain Analysis",
        url: "https://www.youtube.com/watch?v=5sJVaKBNydY",
        embedUrl: "https://www.youtube.com/embed/5sJVaKBNydY",
        thumbnail: "https://img.youtube.com/vi/5sJVaKBNydY/maxresdefault.jpg",
        topics: ["R-C Circuits", "Initial Conditions", "S-Domain"],
        difficulty: "Intermediate",
        description: "Solve R-C circuits with initial conditions in both time and S-domain."
    },
    {
        id: 16,
        videoId: "hZxTKSzb52U",
        title: "Solving Capacitor Loop Circuits | Voltage and Current Analysis with KVL & KCL",
        url: "https://www.youtube.com/watch?v=hZxTKSzb52U",
        embedUrl: "https://www.youtube.com/embed/hZxTKSzb52U",
        thumbnail: "https://img.youtube.com/vi/hZxTKSzb52U/maxresdefault.jpg",
        topics: ["Capacitor Circuits", "KVL", "KCL"],
        difficulty: "Intermediate",
        description: "Analyze capacitor loop circuits using KVL and KCL methods."
    },
    {
        id: 17,
        videoId: "c2UKpabYqz8",
        title: "Solving Complex Transfer Functions in Operational Amplifier Circuits | Step-by-Step Guide",
        url: "https://www.youtube.com/watch?v=c2UKpabYqz8",
        embedUrl: "https://www.youtube.com/embed/c2UKpabYqz8",
        thumbnail: "https://img.youtube.com/vi/c2UKpabYqz8/maxresdefault.jpg",
        topics: ["Op-Amps", "Transfer Functions", "Operational Amplifiers"],
        difficulty: "Advanced",
        description: "Master complex transfer functions in operational amplifier circuits."
    },
    {
        id: 18,
        videoId: "V-eq821MQRM",
        title: "Solving Complex Transfer Functions in Multi-Stage Operational Amplifier Circuits | Step-by-Step",
        url: "https://www.youtube.com/watch?v=V-eq821MQRM",
        embedUrl: "https://www.youtube.com/embed/V-eq821MQRM",
        thumbnail: "https://img.youtube.com/vi/V-eq821MQRM/maxresdefault.jpg",
        topics: ["Op-Amps", "Multi-Stage", "Transfer Functions"],
        difficulty: "Advanced",
        description: "Analyze multi-stage op-amp circuits with complex transfer functions."
    },
    {
        id: 19,
        videoId: "z9UiispugMU",
        title: "Single-Mass Mechanical System Analysis | Differential Equations & Force Calculation",
        url: "https://www.youtube.com/watch?v=z9UiispugMU",
        embedUrl: "https://www.youtube.com/embed/z9UiispugMU",
        thumbnail: "https://img.youtube.com/vi/z9UiispugMU/maxresdefault.jpg",
        topics: ["Mechanical Systems", "Differential Equations", "Force Analysis"],
        difficulty: "Intermediate",
        description: "Analyze single-mass mechanical systems using differential equations."
    },
    {
        id: 20,
        videoId: "oL_mtycI05c",
        title: "Solving Two-Mass Mechanical Systems | Force & Vibration Analysis",
        url: "https://www.youtube.com/watch?v=oL_mtycI05c",
        embedUrl: "https://www.youtube.com/embed/oL_mtycI05c",
        thumbnail: "https://img.youtube.com/vi/oL_mtycI05c/maxresdefault.jpg",
        topics: ["Mechanical Systems", "Vibration", "Two-Mass Systems"],
        difficulty: "Advanced",
        description: "Comprehensive analysis of two-mass mechanical systems and vibrations."
    },
    {
        id: 21,
        videoId: "fesRRHazjm4",
        title: "Solving Two-Mass Systems | Differential Equations & Force Analysis",
        url: "https://www.youtube.com/watch?v=fesRRHazjm4",
        embedUrl: "https://www.youtube.com/embed/fesRRHazjm4",
        thumbnail: "https://img.youtube.com/vi/fesRRHazjm4/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "Differential Equations", "Force Analysis"],
        difficulty: "Advanced",
        description: "Solve complex two-mass systems using differential equations."
    },
    {
        id: 22,
        videoId: "oEMxeLKmmf0",
        title: "Solving for Current in Parallel R-L-C Circuits | Using KVL and Laplace Transform",
        url: "https://www.youtube.com/watch?v=oEMxeLKmmf0",
        embedUrl: "https://www.youtube.com/embed/oEMxeLKmmf0",
        thumbnail: "https://img.youtube.com/vi/oEMxeLKmmf0/maxresdefault.jpg",
        topics: ["RLC Circuits", "Parallel Circuits", "KVL", "Laplace Transform"],
        difficulty: "Intermediate",
        description: "Solve for current in parallel RLC circuits using KVL and Laplace."
    },
    {
        id: 23,
        videoId: "_B7sd1SivcI",
        title: "Converting Time Domain to S-Domain in System Analysis | Step-by-Step Process",
        url: "https://www.youtube.com/watch?v=_B7sd1SivcI",
        embedUrl: "https://www.youtube.com/embed/_B7sd1SivcI",
        thumbnail: "https://img.youtube.com/vi/_B7sd1SivcI/maxresdefault.jpg",
        topics: ["Time Domain", "S-Domain", "Laplace Transform"],
        difficulty: "Intermediate",
        description: "Learn the process of converting from time domain to S-domain."
    },
    {
        id: 24,
        videoId: "hDY-rKN5Ct8",
        title: "Deriving the Transfer Function in Parallel R-C Circuits | Step-by-Step Analysis",
        url: "https://www.youtube.com/watch?v=hDY-rKN5Ct8",
        embedUrl: "https://www.youtube.com/embed/hDY-rKN5Ct8",
        thumbnail: "https://img.youtube.com/vi/hDY-rKN5Ct8/maxresdefault.jpg",
        topics: ["Transfer Functions", "R-C Circuits", "Parallel Circuits"],
        difficulty: "Intermediate",
        description: "Step-by-step derivation of transfer functions in parallel R-C circuits."
    },
    {
        id: 25,
        videoId: "cbDVX4NcOQE",
        title: "Understanding Operational Amplifiers (Op-Amps) | Amplifying Weak Signals",
        url: "https://www.youtube.com/watch?v=cbDVX4NcOQE",
        embedUrl: "https://www.youtube.com/embed/cbDVX4NcOQE",
        thumbnail: "https://img.youtube.com/vi/cbDVX4NcOQE/maxresdefault.jpg",
        topics: ["Op-Amps", "Amplifiers", "Signal Processing"],
        difficulty: "Beginner",
        description: "Introduction to operational amplifiers and how they amplify weak signals."
    },
    {
        id: 26,
        videoId: "UwBjEnnZDZ8",
        title: "Understanding Amplifiers | How Amplifiers Work and Why They're Essential",
        url: "https://www.youtube.com/watch?v=UwBjEnnZDZ8",
        embedUrl: "https://www.youtube.com/embed/UwBjEnnZDZ8",
        thumbnail: "https://img.youtube.com/vi/UwBjEnnZDZ8/maxresdefault.jpg",
        topics: ["Amplifiers", "Electronics"],
        difficulty: "Beginner",
        description: "Understand the fundamentals of amplifiers and their importance."
    },
    {
        id: 27,
        videoId: "5yWY9nRFb5o",
        title: "Differentiator Circuit with Operational Amplifiers | Transfer Function & Laplace Transform",
        url: "https://www.youtube.com/watch?v=5yWY9nRFb5o",
        embedUrl: "https://www.youtube.com/embed/5yWY9nRFb5o",
        thumbnail: "https://img.youtube.com/vi/5yWY9nRFb5o/maxresdefault.jpg",
        topics: ["Differentiator", "Op-Amps", "Transfer Functions"],
        difficulty: "Intermediate",
        description: "Learn about differentiator circuits using op-amps and Laplace transforms."
    },
    {
        id: 28,
        videoId: "RGOWDN-XH0k",
        title: "Solving for Current in R-L Circuits | Using KVL and Laplace Transform",
        url: "https://www.youtube.com/watch?v=RGOWDN-XH0k",
        embedUrl: "https://www.youtube.com/embed/RGOWDN-XH0k",
        thumbnail: "https://img.youtube.com/vi/RGOWDN-XH0k/maxresdefault.jpg",
        topics: ["R-L Circuits", "KVL", "Laplace Transform"],
        difficulty: "Beginner",
        description: "Apply KVL and Laplace transforms to solve R-L circuit problems."
    },
    {
        id: 29,
        videoId: "k9NDblRDEFY",
        title: "Solving Two-Mass System Equations | Differential Equations & Vibration Analysis",
        url: "https://www.youtube.com/watch?v=k9NDblRDEFY",
        embedUrl: "https://www.youtube.com/embed/k9NDblRDEFY",
        thumbnail: "https://img.youtube.com/vi/k9NDblRDEFY/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "Vibration", "Differential Equations"],
        difficulty: "Advanced",
        description: "Solve two-mass system equations with vibration analysis."
    },
    {
        id: 30,
        videoId: "6hIZnLzInRM",
        title: "Solving Two-Mass Systems | Force Equations & Differential Equations",
        url: "https://www.youtube.com/watch?v=6hIZnLzInRM",
        embedUrl: "https://www.youtube.com/embed/6hIZnLzInRM",
        thumbnail: "https://img.youtube.com/vi/6hIZnLzInRM/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "Force Analysis", "Differential Equations"],
        difficulty: "Advanced",
        description: "Master force equations in two-mass mechanical systems."
    },
    {
        id: 31,
        videoId: "_q5QTGoloT0",
        title: "Solving Two-Mass Mechanical Systems | Deriving Equations & S-Domain Conversion",
        url: "https://www.youtube.com/watch?v=_q5QTGoloT0",
        embedUrl: "https://www.youtube.com/embed/_q5QTGoloT0",
        thumbnail: "https://img.youtube.com/vi/_q5QTGoloT0/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "S-Domain", "Mechanical Systems"],
        difficulty: "Advanced",
        description: "Derive equations and convert to S-domain for two-mass systems."
    },
    {
        id: 32,
        videoId: "iMPjM_o0Vyc",
        title: "Solving for the Integrator in Operational Amplifiers | Transfer Function Breakdown",
        url: "https://www.youtube.com/watch?v=iMPjM_o0Vyc",
        embedUrl: "https://www.youtube.com/embed/iMPjM_o0Vyc",
        thumbnail: "https://img.youtube.com/vi/iMPjM_o0Vyc/maxresdefault.jpg",
        topics: ["Integrator", "Op-Amps", "Transfer Functions"],
        difficulty: "Intermediate",
        description: "Understand integrator circuits in op-amps with transfer function analysis."
    },
    {
        id: 33,
        videoId: "kdyLpeq3JTM",
        title: "Solving for Vout with Unit Step Input and Transfer Function",
        url: "https://www.youtube.com/watch?v=kdyLpeq3JTM",
        embedUrl: "https://www.youtube.com/embed/kdyLpeq3JTM",
        thumbnail: "https://img.youtube.com/vi/kdyLpeq3JTM/maxresdefault.jpg",
        topics: ["Unit Step", "Transfer Functions", "Vout"],
        difficulty: "Intermediate",
        description: "Solve for output voltage with unit step input and transfer functions."
    },
    {
        id: 34,
        videoId: "boGdI35rbPc",
        title: "Solving for Force in Mechanical Systems | Equation Derivation and Analysis",
        url: "https://www.youtube.com/watch?v=boGdI35rbPc",
        embedUrl: "https://www.youtube.com/embed/boGdI35rbPc",
        thumbnail: "https://img.youtube.com/vi/boGdI35rbPc/maxresdefault.jpg",
        topics: ["Mechanical Systems", "Force Analysis"],
        difficulty: "Intermediate",
        description: "Derive and analyze force equations in mechanical systems."
    },
    {
        id: 35,
        videoId: "vmE0-Oy4eno",
        title: "Solving Two-Mass System Equations | Force, Vibration & Differential Equations",
        url: "https://www.youtube.com/watch?v=vmE0-Oy4eno",
        embedUrl: "https://www.youtube.com/embed/vmE0-Oy4eno",
        thumbnail: "https://img.youtube.com/vi/vmE0-Oy4eno/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "Vibration", "Differential Equations"],
        difficulty: "Advanced",
        description: "Complete analysis of two-mass systems including force and vibration."
    },
    {
        id: 36,
        videoId: "F7qKkoeQ5SY",
        title: "Solving for Force in Two-Mass Mechanical Systems | Differential Equations and Vibration Analysis",
        url: "https://www.youtube.com/watch?v=F7qKkoeQ5SY",
        embedUrl: "https://www.youtube.com/embed/F7qKkoeQ5SY",
        thumbnail: "https://img.youtube.com/vi/F7qKkoeQ5SY/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "Force Analysis", "Vibration"],
        difficulty: "Advanced",
        description: "Detailed force and vibration analysis in two-mass systems."
    },
    {
        id: 37,
        videoId: "-b1OlE0ywTk",
        title: "Solving Two-Mass System Equations | Vibration Analysis & Differential Equations",
        url: "https://www.youtube.com/watch?v=-b1OlE0ywTk",
        embedUrl: "https://www.youtube.com/embed/-b1OlE0ywTk",
        thumbnail: "https://img.youtube.com/vi/-b1OlE0ywTk/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "Vibration", "Differential Equations"],
        difficulty: "Advanced",
        description: "Advanced vibration analysis in two-mass mechanical systems."
    },
    {
        id: 38,
        videoId: "yb5o1FHUY7A",
        title: "Mechanical System Dynamics | Equations of Motion, Derivatives & S-Domain Conversion",
        url: "https://www.youtube.com/watch?v=yb5o1FHUY7A",
        embedUrl: "https://www.youtube.com/embed/yb5o1FHUY7A",
        thumbnail: "https://img.youtube.com/vi/yb5o1FHUY7A/maxresdefault.jpg",
        topics: ["Mechanical Dynamics", "Equations of Motion", "S-Domain"],
        difficulty: "Advanced",
        description: "Comprehensive mechanical system dynamics with S-domain conversion."
    },
    {
        id: 39,
        videoId: "WyHKabxCyZ8",
        title: "Introduction to Differential Equations and First-Order Systems",
        url: "https://www.youtube.com/watch?v=WyHKabxCyZ8",
        embedUrl: "https://www.youtube.com/embed/WyHKabxCyZ8",
        thumbnail: "https://img.youtube.com/vi/WyHKabxCyZ8/maxresdefault.jpg",
        topics: ["Differential Equations", "First-Order Systems"],
        difficulty: "Beginner",
        description: "Introduction to differential equations and first-order control systems."
    },
    {
        id: 40,
        videoId: "EJWe4I0Sk-s",
        title: "Solving for Vout Using Partial Fractions and Inverse Laplace Transform",
        url: "https://www.youtube.com/watch?v=EJWe4I0Sk-s",
        embedUrl: "https://www.youtube.com/embed/EJWe4I0Sk-s",
        thumbnail: "https://img.youtube.com/vi/EJWe4I0Sk-s/maxresdefault.jpg",
        topics: ["Partial Fractions", "Inverse Laplace", "Vout"],
        difficulty: "Intermediate",
        description: "Use partial fractions and inverse Laplace to solve for Vout."
    },
    {
        id: 41,
        videoId: "aYb3ZVrWL6Q",
        title: "Finding the Transfer Function in R-L-C Circuits | Step-by-Step Derivation",
        url: "https://www.youtube.com/watch?v=aYb3ZVrWL6Q",
        embedUrl: "https://www.youtube.com/embed/aYb3ZVrWL6Q",
        thumbnail: "https://img.youtube.com/vi/aYb3ZVrWL6Q/maxresdefault.jpg",
        topics: ["Transfer Functions", "RLC Circuits"],
        difficulty: "Intermediate",
        description: "Step-by-step derivation of transfer functions in RLC circuits."
    },
    {
        id: 42,
        videoId: "lYQ0pGONFHg",
        title: "Introduction to Partial Fractions and Decomposition Techniques",
        url: "https://www.youtube.com/watch?v=lYQ0pGONFHg",
        embedUrl: "https://www.youtube.com/embed/lYQ0pGONFHg",
        thumbnail: "https://img.youtube.com/vi/lYQ0pGONFHg/maxresdefault.jpg",
        topics: ["Partial Fractions", "Decomposition"],
        difficulty: "Beginner",
        description: "Learn partial fraction decomposition techniques for control systems."
    },
    {
        id: 43,
        videoId: "UJyot6qxXwU",
        title: "Understanding Basic Functions in Dynamic System Analysis",
        url: "https://www.youtube.com/watch?v=UJyot6qxXwU",
        embedUrl: "https://www.youtube.com/embed/UJyot6qxXwU",
        thumbnail: "https://img.youtube.com/vi/UJyot6qxXwU/maxresdefault.jpg",
        topics: ["Dynamic Systems", "Basic Functions"],
        difficulty: "Beginner",
        description: "Understand basic functions used in dynamic system analysis."
    },
    {
        id: 44,
        videoId: "qljk-wHqIsE",
        title: "Transfer Function & V_out in Operational Amplifier Circuits | Parallel Resistor & Capacitor",
        url: "https://www.youtube.com/watch?v=qljk-wHqIsE",
        embedUrl: "https://www.youtube.com/embed/qljk-wHqIsE",
        thumbnail: "https://img.youtube.com/vi/qljk-wHqIsE/maxresdefault.jpg",
        topics: ["Op-Amps", "Transfer Functions", "R-C Circuits"],
        difficulty: "Intermediate",
        description: "Analyze transfer functions in op-amp circuits with parallel R-C."
    },
    {
        id: 45,
        videoId: "4nXSA5Paayw",
        title: "Deriving the Transfer Function in R-L-C Circuits | Series and Parallel Impedances",
        url: "https://www.youtube.com/watch?v=4nXSA5Paayw",
        embedUrl: "https://www.youtube.com/embed/4nXSA5Paayw",
        thumbnail: "https://img.youtube.com/vi/4nXSA5Paayw/maxresdefault.jpg",
        topics: ["Transfer Functions", "RLC Circuits", "Impedance"],
        difficulty: "Intermediate",
        description: "Derive transfer functions with series and parallel impedances."
    },
    {
        id: 46,
        videoId: "1bZq3OM2Kk8",
        title: "Solving Two-Mass System Equations | S-Domain Conversion & Force Analysis",
        url: "https://www.youtube.com/watch?v=1bZq3OM2Kk8",
        embedUrl: "https://www.youtube.com/embed/1bZq3OM2Kk8",
        thumbnail: "https://img.youtube.com/vi/1bZq3OM2Kk8/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "S-Domain", "Force Analysis"],
        difficulty: "Advanced",
        description: "S-domain conversion and force analysis in two-mass systems."
    },
    {
        id: 47,
        videoId: "lTsRpYPUKHo",
        title: "Solving for Voltage and Current in R-L-C Circuits | Using KVL and KCL",
        url: "https://www.youtube.com/watch?v=lTsRpYPUKHo",
        embedUrl: "https://www.youtube.com/embed/lTsRpYPUKHo",
        thumbnail: "https://img.youtube.com/vi/lTsRpYPUKHo/maxresdefault.jpg",
        topics: ["RLC Circuits", "KVL", "KCL"],
        difficulty: "Intermediate",
        description: "Solve for voltage and current using Kirchhoff's laws."
    },
    {
        id: 48,
        videoId: "2spOFm2orjk",
        title: "Modeling Mechanical Systems: Mass, Damper, and Elastic Force with Laplace Transform",
        url: "https://www.youtube.com/watch?v=2spOFm2orjk",
        embedUrl: "https://www.youtube.com/embed/2spOFm2orjk",
        thumbnail: "https://img.youtube.com/vi/2spOFm2orjk/maxresdefault.jpg",
        topics: ["Mechanical Systems", "Mass-Spring-Damper", "Laplace Transform"],
        difficulty: "Intermediate",
        description: "Model mechanical systems with mass, damper, and elastic forces."
    },
    {
        id: 49,
        videoId: "hItBIPJhHEE",
        title: "Solving for Force in Multi-Mass Mechanical Systems | Differential Equations & System Analysis",
        url: "https://www.youtube.com/watch?v=hItBIPJhHEE",
        embedUrl: "https://www.youtube.com/embed/hItBIPJhHEE",
        thumbnail: "https://img.youtube.com/vi/hItBIPJhHEE/maxresdefault.jpg",
        topics: ["Multi-Mass Systems", "Force Analysis", "Differential Equations"],
        difficulty: "Advanced",
        description: "Analyze forces in complex multi-mass mechanical systems."
    },
    {
        id: 50,
        videoId: "m3UssjhuCB0",
        title: "Understanding Unit Step, Impulse, and Ramp Functions in Signal Processing",
        url: "https://www.youtube.com/watch?v=m3UssjhuCB0",
        embedUrl: "https://www.youtube.com/embed/m3UssjhuCB0",
        thumbnail: "https://img.youtube.com/vi/m3UssjhuCB0/maxresdefault.jpg",
        topics: ["Unit Step", "Impulse", "Ramp Functions", "Signal Processing"],
        difficulty: "Beginner",
        description: "Comprehensive guide to unit step, impulse, and ramp functions."
    },
    {
        id: 51,
        videoId: "PsO2vL5MGG8",
        title: "Solving Second-Order Differential Equation Using Laplace Transform with Initial Conditions",
        url: "https://www.youtube.com/watch?v=PsO2vL5MGG8",
        embedUrl: "https://www.youtube.com/embed/PsO2vL5MGG8",
        thumbnail: "https://img.youtube.com/vi/PsO2vL5MGG8/maxresdefault.jpg",
        topics: ["Second-Order Systems", "Laplace Transform", "Initial Conditions"],
        difficulty: "Intermediate",
        description: "Solve second-order differential equations with Laplace transforms."
    },
    {
        id: 52,
        videoId: "7OnS7nY8oTI",
        title: "Solving for Force in Mechanical Systems | Equation Derivation with Mass and Displacement",
        url: "https://www.youtube.com/watch?v=7OnS7nY8oTI",
        embedUrl: "https://www.youtube.com/embed/7OnS7nY8oTI",
        thumbnail: "https://img.youtube.com/vi/7OnS7nY8oTI/maxresdefault.jpg",
        topics: ["Mechanical Systems", "Force Analysis", "Mass-Displacement"],
        difficulty: "Intermediate",
        description: "Derive force equations using mass and displacement relationships."
    },
    {
        id: 53,
        videoId: "whJs-BVk80k",
        title: "How to Solve Loop Circuit Problems | Voltage and Current Analysis",
        url: "https://www.youtube.com/watch?v=whJs-BVk80k",
        embedUrl: "https://www.youtube.com/embed/whJs-BVk80k",
        thumbnail: "https://img.youtube.com/vi/whJs-BVk80k/maxresdefault.jpg",
        topics: ["Loop Circuits", "Circuit Analysis"],
        difficulty: "Beginner",
        description: "Learn to solve loop circuit problems with voltage and current analysis."
    },
    {
        id: 54,
        videoId: "NXKaOd2KvIY",
        title: "Solving for Force in Two-Mass Systems | Differential Equations and Vibration Analysis",
        url: "https://www.youtube.com/watch?v=NXKaOd2KvIY",
        embedUrl: "https://www.youtube.com/embed/NXKaOd2KvIY",
        thumbnail: "https://img.youtube.com/vi/NXKaOd2KvIY/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "Force Analysis", "Vibration"],
        difficulty: "Advanced",
        description: "Force and vibration analysis in two-mass mechanical systems."
    },
    {
        id: 55,
        videoId: "me7-icFgo_E",
        title: "Solving Two-Mass Mechanical Systems | Differential Equations & Force Analysis",
        url: "https://www.youtube.com/watch?v=me7-icFgo_E",
        embedUrl: "https://www.youtube.com/embed/me7-icFgo_E",
        thumbnail: "https://img.youtube.com/vi/me7-icFgo_E/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "Differential Equations", "Force Analysis"],
        difficulty: "Advanced",
        description: "Complete analysis of two-mass systems with differential equations."
    },
    {
        id: 56,
        videoId: "TlFGCZrozaw",
        title: "Solving for Vout in R-C Circuit with Unit Ramp Input",
        url: "https://www.youtube.com/watch?v=TlFGCZrozaw",
        embedUrl: "https://www.youtube.com/embed/TlFGCZrozaw",
        thumbnail: "https://img.youtube.com/vi/TlFGCZrozaw/maxresdefault.jpg",
        topics: ["R-C Circuits", "Unit Ramp", "Vout"],
        difficulty: "Intermediate",
        description: "Solve for output voltage in R-C circuits with unit ramp input."
    },
    {
        id: 57,
        videoId: "IZKbQiUwwQ8",
        title: "Solving for Force in Single-Mass Mechanical Systems | Differential Equations & S-Domain Conversion",
        url: "https://www.youtube.com/watch?v=IZKbQiUwwQ8",
        embedUrl: "https://www.youtube.com/embed/IZKbQiUwwQ8",
        thumbnail: "https://img.youtube.com/vi/IZKbQiUwwQ8/maxresdefault.jpg",
        topics: ["Single-Mass Systems", "S-Domain", "Force Analysis"],
        difficulty: "Intermediate",
        description: "Analyze single-mass systems with S-domain conversion."
    },
    {
        id: 58,
        videoId: "_2a-w8-olJU",
        title: "Understanding System Response: First and Second Order Systems and Damping Ratio",
        url: "https://www.youtube.com/watch?v=_2a-w8-olJU",
        embedUrl: "https://www.youtube.com/embed/_2a-w8-olJU",
        thumbnail: "https://img.youtube.com/vi/_2a-w8-olJU/maxresdefault.jpg",
        topics: ["System Response", "First-Order", "Second-Order", "Damping Ratio"],
        difficulty: "Intermediate",
        description: "Comprehensive understanding of system responses and damping ratios."
    },
    {
        id: 59,
        videoId: "WzkSK0rhJAU",
        title: "Solving Two-Mass Mechanical System Equations | Differential Equations & Vibration Analysis",
        url: "https://www.youtube.com/watch?v=WzkSK0rhJAU",
        embedUrl: "https://www.youtube.com/embed/WzkSK0rhJAU",
        thumbnail: "https://img.youtube.com/vi/WzkSK0rhJAU/maxresdefault.jpg",
        topics: ["Two-Mass Systems", "Differential Equations", "Vibration"],
        difficulty: "Advanced",
        description: "Advanced two-mass system analysis with vibration dynamics."
    },
    {
        id: 60,
        videoId: "ZZHcWSmLRWM",
        title: "Solving Loop Circuit Equations | Current Analysis and Laplace Transform",
        url: "https://www.youtube.com/watch?v=ZZHcWSmLRWM",
        embedUrl: "https://www.youtube.com/embed/ZZHcWSmLRWM",
        thumbnail: "https://img.youtube.com/vi/ZZHcWSmLRWM/maxresdefault.jpg",
        topics: ["Loop Circuits", "Current Analysis", "Laplace Transform"],
        difficulty: "Intermediate",
        description: "Solve loop circuit equations using Laplace transforms."
    },
    {
        id: 61,
        videoId: "1466xlaY3W8",
        title: "Solving for Force in Mass-Spring-Damper Systems | S-Domain Conversion & Analysis",
        url: "https://www.youtube.com/watch?v=1466xlaY3W8",
        embedUrl: "https://www.youtube.com/embed/1466xlaY3W8",
        thumbnail: "https://img.youtube.com/vi/1466xlaY3W8/maxresdefault.jpg",
        topics: ["Mass-Spring-Damper", "S-Domain", "Force Analysis"],
        difficulty: "Intermediate",
        description: "Complete analysis of mass-spring-damper systems in S-domain."
    },
    {
        id: 62,
        videoId: "Yd0hKzuzvss",
        title: "Finding the Root Locus of a Control System Step-by-Step | Poles, Zeros & Asymptotes Explained",
        url: "https://www.youtube.com/watch?v=Yd0hKzuzvss",
        embedUrl: "https://www.youtube.com/embed/Yd0hKzuzvss",
        thumbnail: "https://img.youtube.com/vi/Yd0hKzuzvss/maxresdefault.jpg",
        topics: ["Root Locus", "Transfer Functions", "Poles and Zeros", "Asymptotes", "System Stability"],
        difficulty: "Intermediate",
        description: "Master the root locus plotting technique for control systems analysis. Learn to identify poles and zeros from transfer functions, calculate asymptote angles and center points, and understand how the root locus reveals system stability characteristics as gain varies.",
        transcript: "Complete walkthrough of finding the root locus of a control system with transfer function G(s)H(s) = K/[(s+2)(s+4)(s+9)(s+6)]. Learn the systematic approach: plot poles at -2, -4, -9 and zero at -6 on the s-plane, identify number of asymptotes (3 poles - 1 zero = 2 asymptotes), calculate asymptote angles using (2K+1)×180°/N formula (90° and 270°), find asymptote center point at (-15+6)/2 = -4.5, and understand how root locus branches emerge from poles and terminate at zeros or infinity along the asymptotes."
    }
];

// Helper functions
function getAllVideos() {
    return VIDEOS_DATA;
}

function getVideoById(id) {
    return VIDEOS_DATA.find(video => video.id === id);
}

function getVideoByYouTubeId(videoId) {
    return VIDEOS_DATA.find(video => video.videoId === videoId);
}

function filterVideosByTopic(topic) {
    return VIDEOS_DATA.filter(video =>
        video.topics.some(t => t.toLowerCase().includes(topic.toLowerCase()))
    );
}

function filterVideosByDifficulty(difficulty) {
    return VIDEOS_DATA.filter(video =>
        video.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
}

function searchVideos(query) {
    const lowerQuery = query.toLowerCase();
    return VIDEOS_DATA.filter(video =>
        video.title.toLowerCase().includes(lowerQuery) ||
        video.description.toLowerCase().includes(lowerQuery) ||
        video.topics.some(topic => topic.toLowerCase().includes(lowerQuery))
    );
}

// Get all unique topics
function getAllTopics() {
    const topicsSet = new Set();
    VIDEOS_DATA.forEach(video => {
        video.topics.forEach(topic => topicsSet.add(topic));
    });
    return Array.from(topicsSet).sort();
}

// Statistics
function getStats() {
    return {
        totalVideos: VIDEOS_DATA.length,
        totalTopics: getAllTopics().length,
        difficulties: {
            beginner: filterVideosByDifficulty('Beginner').length,
            intermediate: filterVideosByDifficulty('Intermediate').length,
            advanced: filterVideosByDifficulty('Advanced').length
        }
    };
}
