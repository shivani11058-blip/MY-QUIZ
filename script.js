
const questions = [

    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Processing Utility",
            "Central Program Unit",
            "Computer Program Utility"
        ],
        answer: 0,
        category: "TECHNICAL",
        difficulty: "EASY",
        hint: "It is often called the brain of a computer."
    },

    {
        question: "Which language is mainly used to structure a web page?",
        options: [
            "HTML",
            "Python",
            "SQL",
            "C++"
        ],
        answer: 0,
        category: "WEB",
        difficulty: "EASY",
        hint: "It uses elements such as headings and paragraphs."
    },

    {
        question: "What is 15% of 200?",
        options: [
            "20",
            "25",
            "30",
            "35"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Convert the percentage into a fraction of 200."
    },

    {
        question: "Which device is commonly used to connect different networks?",
        options: [
            "Keyboard",
            "Router",
            "Monitor",
            "Printer"
        ],
        answer: 1,
        category: "NETWORKING",
        difficulty: "EASY",
        hint: "It forwards data between networks."
    },

    {
        question: "If 5 pens cost ₹50, what is the cost of one pen?",
        options: [
            "₹5",
            "₹8",
            "₹10",
            "₹15"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Divide the total cost by the number of pens."
    },

    {
        question: "Which symbol starts a single-line comment in JavaScript?",
        options: [
            "//",
            "/*",
            "#",
            "<!--"
        ],
        answer: 0,
        category: "JAVASCRIPT",
        difficulty: "EASY",
        hint: "It uses two forward slashes."
    },

    {
        question: "What is the binary representation of decimal 2?",
        options: [
            "01",
            "10",
            "11",
            "100"
        ],
        answer: 1,
        category: "COMPUTING",
        difficulty: "EASY",
        hint: "Binary uses only 0 and 1."
    },

    {
        question: "Which type of memory is volatile?",
        options: [
            "ROM",
            "SSD",
            "RAM",
            "Hard Disk"
        ],
        answer: 2,
        category: "COMPUTER",
        difficulty: "EASY",
        hint: "Its contents disappear when power is removed."
    },

    {
        question: "A car travels at 60 km/h for 3 hours. How far does it travel?",
        options: [
            "120 km",
            "150 km",
            "180 km",
            "200 km"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Distance = speed × time."
    },

    {
        question: "What is CSS mainly used for?",
        options: [
            "Database management",
            "Web page styling",
            "Operating systems",
            "Computer networking"
        ],
        answer: 1,
        category: "WEB",
        difficulty: "EASY",
        hint: "Think about colors, layouts and fonts."
    },

    {
        question: "Which data structure follows FIFO?",
        options: [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],
        answer: 1,
        category: "DATA STRUCTURES",
        difficulty: "EASY",
        hint: "The first item added is the first one removed."
    },

    {
        question: "Which data structure follows LIFO?",
        options: [
            "Queue",
            "Array",
            "Stack",
            "Graph"
        ],
        answer: 2,
        category: "DATA STRUCTURES",
        difficulty: "EASY",
        hint: "Think of a stack of plates."
    },

    {
        question: "What does RAM stand for?",
        options: [
            "Random Access Memory",
            "Read Access Machine",
            "Rapid Application Memory",
            "Random Application Module"
        ],
        answer: 0,
        category: "COMPUTER",
        difficulty: "EASY",
        hint: "It is the computer's temporary working memory."
    },

    {
        question: "Which protocol is used for secure web browsing?",
        options: [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        answer: 2,
        category: "NETWORKING",
        difficulty: "EASY",
        hint: "It is the secure version of HTTP."
    },

    {
        question: "What is 25 × 4?",
        options: [
            "75",
            "90",
            "100",
            "125"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "25 multiplied by four gives a round number."
    },

    {
        question: "Which language is widely used in AI and data science?",
        options: [
            "Python",
            "HTML",
            "CSS",
            "XML"
        ],
        answer: 0,
        category: "PROGRAMMING",
        difficulty: "EASY",
        hint: "It is known for simple and readable syntax."
    },

    {
        question: "Which SQL command is used to retrieve data?",
        options: [
            "INSERT",
            "DELETE",
            "SELECT",
            "UPDATE"
        ],
        answer: 2,
        category: "DATABASE",
        difficulty: "EASY",
        hint: "It asks the database to return records."
    },

    {
        question: "What does URL stand for?",
        options: [
            "Uniform Resource Locator",
            "Universal Record Link",
            "Unified Resource Link",
            "Uniform Reference Location"
        ],
        answer: 0,
        category: "INTERNET",
        difficulty: "EASY",
        hint: "It identifies the location of a resource on the web."
    },

    {
        question: "What is the percentage increase from 100 to 120?",
        options: [
            "10%",
            "15%",
            "20%",
            "25%"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Compare the increase with the original value."
    },

    {
        question: "Which CPU component performs arithmetic and logical operations?",
        options: [
            "RAM",
            "ALU",
            "ROM",
            "Cache"
        ],
        answer: 1,
        category: "COMPUTER",
        difficulty: "MEDIUM",
        hint: "Its name contains Arithmetic and Logic."
    },

    {
        question: "Which HTML element creates a hyperlink?",
        options: [
            "<p>",
            "<img>",
            "<a>",
            "<div>"
        ],
        answer: 2,
        category: "HTML",
        difficulty: "EASY",
        hint: "The tag is called the anchor element."
    },

    {
        question: "What is 12²?",
        options: [
            "124",
            "134",
            "144",
            "154"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Multiply 12 by itself."
    },

    {
        question: "What does a modem primarily help with?",
        options: [
            "Processing images",
            "Modulating and demodulating signals",
            "Storing files",
            "Printing documents"
        ],
        answer: 1,
        category: "NETWORKING",
        difficulty: "MEDIUM",
        hint: "Its name comes from two signal-related operations."
    },

    {
        question: "Which CSS property changes the text color?",
        options: [
            "font-size",
            "background",
            "color",
            "text-style"
        ],
        answer: 2,
        category: "CSS",
        difficulty: "EASY",
        hint: "The property has the same name as what you want to change."
    },

    {
        question: "What percentage is 3/4?",
        options: [
            "50%",
            "60%",
            "75%",
            "80%"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Convert the fraction into a decimal first."
    },

    {
        question: "Which is an open-source operating system?",
        options: [
            "Linux",
            "Windows",
            "iOS",
            "macOS"
        ],
        answer: 0,
        category: "OPERATING SYSTEM",
        difficulty: "EASY",
        hint: "It is widely used on servers and embedded systems."
    },

    {
        question: "An AND gate outputs 1 when:",
        options: [
            "Both inputs are 1",
            "Both inputs are 0",
            "Any input is 1",
            "Inputs are different"
        ],
        answer: 0,
        category: "DIGITAL ELECTRONICS",
        difficulty: "MEDIUM",
        hint: "AND requires every input condition to be true."
    },

    {
        question: "10 workers complete a job in 6 days. How many worker-days are required?",
        options: [
            "16",
            "30",
            "60",
            "100"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "MEDIUM",
        hint: "Multiply workers by days."
    },

    {
        question: "Which language is mainly associated with relational databases?",
        options: [
            "SQL",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        answer: 0,
        category: "DATABASE",
        difficulty: "EASY",
        hint: "It stands for Structured Query Language."
    },

    {
        question: "What does AI stand for?",
        options: [
            "Automatic Internet",
            "Artificial Intelligence",
            "Advanced Interface",
            "Application Integration"
        ],
        answer: 1,
        category: "ARTIFICIAL INTELLIGENCE",
        difficulty: "EASY",
        hint: "It refers to machines performing tasks associated with human intelligence."
    },

    {
        question: "What is the average of 10, 20 and 30?",
        options: [
            "15",
            "20",
            "25",
            "30"
        ],
        answer: 1,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Add the numbers and divide by three."
    },

    {
        question: "What does HTTP status code 404 usually mean?",
        options: [
            "Success",
            "Forbidden",
            "Not Found",
            "Server Started"
        ],
        answer: 2,
        category: "WEB",
        difficulty: "MEDIUM",
        hint: "It commonly appears when a requested page cannot be found."
    },

    {
        question: "Which sorting algorithm repeatedly selects the smallest remaining element?",
        options: [
            "Bubble Sort",
            "Selection Sort",
            "Merge Sort",
            "Quick Sort"
        ],
        answer: 1,
        category: "ALGORITHMS",
        difficulty: "MEDIUM",
        hint: "Its name describes choosing an element."
    },

    {
        question: "What comes next: 2, 4, 8, 16, ?",
        options: [
            "20",
            "24",
            "30",
            "32"
        ],
        answer: 3,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Each number is multiplied by the same value."
    },

    {
        question: "Which storage device generally has no moving mechanical parts?",
        options: [
            "SSD",
            "Floppy Disk",
            "Hard Disk Drive",
            "Magnetic Tape"
        ],
        answer: 0,
        category: "COMPUTER",
        difficulty: "MEDIUM",
        hint: "It uses flash memory."
    },

    {
        question: "Which JavaScript variable declaration is block-scoped and reassignable?",
        options: [
            "var",
            "let",
            "const",
            "static"
        ],
        answer: 1,
        category: "JAVASCRIPT",
        difficulty: "MEDIUM",
        hint: "It was introduced with modern JavaScript syntax."
    },

    {
        question: "What is the angle between the hands of a clock at exactly 3:00?",
        options: [
            "45°",
            "60°",
            "90°",
            "180°"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "The hands form a right angle."
    },

    {
        question: "Which network topology uses a central device?",
        options: [
            "Bus",
            "Ring",
            "Star",
            "Mesh"
        ],
        answer: 2,
        category: "NETWORKING",
        difficulty: "EASY",
        hint: "All nodes connect to one central point."
    },

    {
        question: "Which number is prime?",
        options: [
            "21",
            "27",
            "29",
            "33"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "A prime number has exactly two positive factors."
    },

    {
        question: "Which CSS layout system is designed for two-dimensional layouts?",
        options: [
            "Flexbox",
            "Grid",
            "Float",
            "Position"
        ],
        answer: 1,
        category: "CSS",
        difficulty: "MEDIUM",
        hint: "It works with rows and columns."
    },

    {
        question: "What does IoT stand for?",
        options: [
            "Internet of Things",
            "Input of Technology",
            "Interface of Tools",
            "Internet of Terminals"
        ],
        answer: 0,
        category: "TECHNOLOGY",
        difficulty: "EASY",
        hint: "It connects physical objects to networks."
    },

    {
        question: "An ₹800 item has a 10% discount. What is the discount amount?",
        options: [
            "₹40",
            "₹60",
            "₹80",
            "₹100"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Find 10% of the original price."
    },

    {
        question: "Which protocol is commonly used for sending email?",
        options: [
            "SMTP",
            "HTTP",
            "FTP",
            "SSH"
        ],
        answer: 0,
        category: "NETWORKING",
        difficulty: "MEDIUM",
        hint: "It stands for Simple Mail Transfer Protocol."
    },

    {
        question: "What is the typical time complexity of accessing an array element by index?",
        options: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n²)"
        ],
        answer: 0,
        category: "ALGORITHMS",
        difficulty: "MEDIUM",
        hint: "Direct indexing does not require scanning the array."
    },

    {
        question: "What comes next: 5, 10, 15, 20, ?",
        options: [
            "22",
            "25",
            "30",
            "35"
        ],
        answer: 1,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Look at the constant difference."
    },

    {
        question: "Which technology mainly controls the presentation and layout of web pages?",
        options: [
            "HTML",
            "CSS",
            "SQL",
            "Python"
        ],
        answer: 1,
        category: "WEB",
        difficulty: "EASY",
        hint: "It controls colors, spacing, fonts and layouts."
    },

    {
        question: "Which is an example of permanent data storage?",
        options: [
            "RAM",
            "CPU Register",
            "Storage Drive",
            "Cache"
        ],
        answer: 2,
        category: "COMPUTER",
        difficulty: "EASY",
        hint: "It keeps data even after power is removed."
    },

    {
        question: "A vehicle travels 240 km in 4 hours. What is its average speed?",
        options: [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Speed equals distance divided by time."
    },

    {
        question: "Which format is designed for scalable vector graphics on the web?",
        options: [
            "JPG",
            "PNG",
            "SVG",
            "GIF"
        ],
        answer: 2,
        category: "WEB",
        difficulty: "MEDIUM",
        hint: "Its name contains the words Vector Graphics."
    },

    {
        question: "A router primarily forwards packets based on:",
        options: [
            "IP addresses",
            "File names",
            "Screen resolution",
            "Keyboard input"
        ],
        answer: 0,
        category: "NETWORKING",
        difficulty: "MEDIUM",
        hint: "Routers work at the network layer."
    },

    {
        question: "What is 2⁵?",
        options: [
            "16",
            "24",
            "32",
            "64"
        ],
        answer: 2,
        category: "APTITUDE",
        difficulty: "EASY",
        hint: "Multiply 2 by itself five times."
    },

    {
        question: "What does polymorphism mean in object-oriented programming?",
        options: [
            "One interface with different implementations",
            "Deleting all objects",
            "Using only one class",
            "Storing data permanently"
        ],
        answer: 0,
        category: "PROGRAMMING",
        difficulty: "MEDIUM",
        hint: "The word means having multiple forms."
    },

    {
        question: "What is phishing?",
        options: [
            "A programming language",
            "A method of tricking users into revealing sensitive information",
            "A database system",
            "A network cable"
        ],
        answer: 1,
        category: "CYBER SECURITY",
        difficulty: "MEDIUM",
        hint: "It is commonly associated with fake messages or websites."
    },

    {
        question: "The ratio of boys to girls is 2:3. If there are 10 boys, how many girls are there?",
        options: [
            "12",
            "15",
            "18",
            "20"
        ],
        answer: 1,
        category: "APTITUDE",
        difficulty: "MEDIUM",
        hint: "Scale both parts of the ratio by the same factor."
    },

    {
        question: "What type of learning uses labeled training examples?",
        options: [
            "Unsupervised learning",
            "Supervised learning",
            "Random learning",
            "Manual learning"
        ],
        answer: 1,
        category: "ARTIFICIAL INTELLIGENCE",
        difficulty: "MEDIUM",
        hint: "The training data already contains target answers."
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;
let score = 0;
let xp = 0;
let lives = 3;
let streak = 0;
let bestStreak = 0;
let timeLeft = 20;
let timer = null;
let answered = false;
let hintsUsed = 0;


/* =========================================
   ELEMENTS
========================================= */

const questionNumber = document.getElementById("questionNumber");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const difficultyElement = document.getElementById("difficulty");
const categoryElement = document.getElementById("category");

const timerElement = document.getElementById("timer");

const livesElement = document.getElementById("lives");
const streakElement = document.getElementById("streak");
const xpElement = document.getElementById("xp");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const feedback = document.getElementById("feedback");

const nextBtn = document.getElementById("nextBtn");

const scoreElement = document.getElementById("score");

const hintBtn = document.getElementById("hintBtn");
const hintBox = document.getElementById("hintBox");

const quizContainer = document.getElementById("quizContainer");
const catCelebration = document.getElementById("catCelebration");

const resultScreen = document.getElementById("resultScreen");

const finalScore = document.getElementById("finalScore");
const accuracy = document.getElementById("accuracy");
const finalStreak = document.getElementById("finalStreak");
const finalXP = document.getElementById("finalXP");

const rank = document.getElementById("rank");
const resultMessage = document.getElementById("resultMessage");

const restartBtn = document.getElementById("restartBtn");

const astroCursor = document.getElementById("astroCursor");


/* =========================================
   CURSOR
========================================= */

document.addEventListener("mousemove", (event) => {

    astroCursor.style.left = event.clientX + "px";
    astroCursor.style.top = event.clientY + "px";

});


/* =========================================
   SOUND SYSTEM
========================================= */

function playSound(type) {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContext) return;

    const audio = new AudioContext();

    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.connect(gain);
    gain.connect(audio.destination);

    if (type === "correct") {

        oscillator.frequency.setValueAtTime(
            500,
            audio.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            900,
            audio.currentTime + 0.15
        );

        gain.gain.setValueAtTime(
            0.08,
            audio.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audio.currentTime + 0.4
        );

        oscillator.start();
        oscillator.stop(audio.currentTime + 0.4);

    } else {

        oscillator.frequency.setValueAtTime(
            180,
            audio.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            70,
            audio.currentTime + 0.25
        );

        gain.gain.setValueAtTime(
            0.09,
            audio.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audio.currentTime + 0.35
        );

        oscillator.start();
        oscillator.stop(audio.currentTime + 0.35);
    }
}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    clearInterval(timer);

    answered = false;

    timeLeft = 20;

    const q = questions[currentQuestion];

    questionNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0");

    questionElement.textContent = q.question;

    categoryElement.textContent = q.category;

    difficultyElement.textContent = q.difficulty;

    timerElement.textContent = timeLeft;

    scoreElement.textContent = score;

    progressText.textContent =
        Math.round(
            ((currentQuestion) / questions.length) * 100
        ) + "%";

    progressFill.style.width =
        ((currentQuestion) / questions.length) * 100 + "%";


    /* HINT RESET */

    hintBox.classList.remove("show");

    hintBox.textContent = q.hint;

    hintBtn.style.display = "inline-block";


    /* FEEDBACK RESET */

    feedback.textContent = "";

    feedback.className = "feedback";


    /* NEXT BUTTON */

    nextBtn.style.display = "none";


    /* OPTIONS */

    optionsElement.innerHTML = "";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.innerHTML = `
            <span class="option-letter">
                ${String.fromCharCode(65 + index)}
            </span>

            <span>${option}</span>
        `;

        button.addEventListener(
            "click",
            () => checkAnswer(index)
        );

        optionsElement.appendChild(button);

    });


    startTimer();
}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent = timeLeft;

        if (timeLeft <= 5) {

            timerElement.style.color = "#ff5d83";

        } else {

            timerElement.style.color = "#9ff9ff";

        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            timeOut();

        }

    }, 1000);
}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(selected) {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    const q = questions[currentQuestion];

    const optionButtons =
        document.querySelectorAll(".option");

    optionButtons.forEach(button => {

        button.classList.add("disabled");

    });


    if (selected === q.answer) {

        correctAnswer(selected);

    } else {

        wrongAnswer(selected, q.answer);

    }

}


/* =========================================
   CORRECT
========================================= */

function correctAnswer(selected) {

    const optionButtons =
        document.querySelectorAll(".option");

    optionButtons[selected].classList.add("correct");

    score++;

    streak++;

    if (streak > bestStreak) {
        bestStreak = streak;
    }

    const bonus = Math.max(5, timeLeft);

    xp += 20 + bonus;

    streakElement.textContent = streak;

    xpElement.textContent = xp;

    scoreElement.textContent = score;

    feedback.textContent =
        "✨ Excellent! Correct answer!";

    feedback.className =
        "feedback correct";

    playSound("correct");

    showDancingCat();

    createStars();

    nextBtn.style.display = "block";

}


/* =========================================
   WRONG
========================================= */

function wrongAnswer(selected, correct) {

    const optionButtons =
        document.querySelectorAll(".option");

    optionButtons[selected].classList.add("wrong");

    optionButtons[correct].classList.add("correct");

    lives--;

    streak = 0;

    livesElement.textContent =
        "❤️".repeat(Math.max(0, lives));

    streakElement.textContent = 0;

    feedback.textContent =
        "💥 Not quite! The correct answer is highlighted.";

    feedback.className =
        "feedback wrong";

    quizContainer.classList.add("shake");

    setTimeout(() => {

        quizContainer.classList.remove("shake");

    }, 600);

    playSound("wrong");

    nextBtn.style.display = "block";

    if (lives <= 0) {

        nextBtn.textContent =
            "VIEW FINAL RESULT 🏆";

    }

}


/* =========================================
   TIME OUT
========================================= */

function timeOut() {

    if (answered) return;

    answered = true;

    const q = questions[currentQuestion];

    const optionButtons =
        document.querySelectorAll(".option");

    optionButtons.forEach(button => {

        button.classList.add("disabled");

    });

    optionButtons[q.answer].classList.add("correct");

    lives--;

    streak = 0;

    livesElement.textContent =
        "❤️".repeat(Math.max(0, lives));

    streakElement.textContent = 0;

    feedback.textContent =
        "⏰ Time's up! The correct answer is highlighted.";

    feedback.className =
        "feedback wrong";

    quizContainer.classList.add("shake");

    setTimeout(() => {

        quizContainer.classList.remove("shake");

    }, 600);

    playSound("wrong");

    nextBtn.style.display = "block";

}


/* =========================================
   NEXT QUESTION
========================================= */

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (
        currentQuestion >= questions.length ||
        lives <= 0
    ) {

        showResult();

        return;

    }

    nextBtn.textContent =
        "NEXT QUESTION 🚀";

    loadQuestion();

});


/* =========================================
   HINT
========================================= */

hintBtn.addEventListener("click", () => {

    hintBox.classList.toggle("show");

    if (hintBox.classList.contains("show")) {

        hintsUsed++;

        hintBtn.textContent =
            "💡 HIDE HINT";

    } else {

        hintBtn.textContent =
            "💡 SHOW HINT";

    }

});


/* =========================================
   CAT CELEBRATION
========================================= */

function showDancingCat() {

    catCelebration.classList.add("show");

    setTimeout(() => {

        catCelebration.classList.remove("show");

    }, 1800);

}


/* =========================================
   STAR PARTICLES
========================================= */

function createStars() {

    for (let i = 0; i < 15; i++) {

        const star =
            document.createElement("div");

        star.textContent = "✦";

        star.style.position = "fixed";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        star.style.color =
            Math.random() > 0.5
                ? "#00eaff"
                : "#ff71e7";

        star.style.fontSize =
            Math.random() * 15 + 8 + "px";

        star.style.pointerEvents = "none";

        star.style.zIndex = "999";

        document.body.appendChild(star);

        star.animate(
            [
                {
                    transform: "scale(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        "scale(1.5) rotate(180deg) translateY(-80px)",
                    opacity: 0
                }
            ],
            {
                duration: 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {

            star.remove();

        }, 1000);

    }

}


/* =========================================
   RESULT
========================================= */

function showResult() {

    clearInterval(timer);

    quizContainer.style.display = "none";

    catCelebration.classList.remove("show");

    resultScreen.classList.add("show");

    const total = questions.length;

    const percent =
        Math.round((score / total) * 100);

    finalScore.textContent =
        `${score}/${total}`;

    accuracy.textContent =
        `${percent}%`;

    finalStreak.textContent =
        bestStreak;

    finalXP.textContent =
        xp;


    let playerRank;
    let message;

    if (percent >= 90) {

        playerRank = "GALAXY MASTER";

        message =
            "🌌 Outstanding performance! You have mastered the TechSprint galaxy.";

    } else if (percent >= 75) {

        playerRank = "STAR COMMANDER";

        message =
            "🚀 Great job! Your technical and aptitude skills are shining brightly.";

    } else if (percent >= 60) {

        playerRank = "SPACE EXPLORER";

        message =
            "🪐 Nice work! Keep practicing and your next mission can go even further.";

    } else if (percent >= 40) {

        playerRank = "COSMIC CADET";

        message =
            "🌠 Good attempt! Explore the topics again and launch another mission.";

    } else {

        playerRank = "SPACE ROOKIE";

        message =
            "🚀 Every engineer starts somewhere. Practice, learn and try again!";

    }

    rank.textContent = playerRank;

    resultMessage.textContent = message;

    createResultStars();

}


/* =========================================
   RESULT STARS
========================================= */

function createResultStars() {

    for (let i = 0; i < 30; i++) {

        const star =
            document.createElement("div");

        star.textContent =
            Math.random() > 0.5 ? "✦" : "·";

        star.style.position = "fixed";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        star.style.color =
            Math.random() > 0.5
                ? "#00eaff"
                : "#ff6de2";

        star.style.fontSize =
            Math.random() * 18 + 7 + "px";

        star.style.pointerEvents = "none";

        star.style.zIndex = "10";

        document.body.appendChild(star);

        star.animate(
            [
                {
                    opacity: 0,
                    transform: "scale(0)"
                },
                {
                    opacity: 1,
                    transform: "scale(1.5)"
                },
                {
                    opacity: 0,
                    transform: "scale(0)"
                }
            ],
            {
                duration:
                    1200 + Math.random() * 1500,
                iterations: 2
            }
        );

        setTimeout(() => {

            star.remove();

        }, 4500);

    }

}


/* =========================================
   RESTART
========================================= */

restartBtn.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    xp = 0;

    lives = 3;

    streak = 0;

    bestStreak = 0;

    hintsUsed = 0;

    livesElement.textContent = "❤️❤️❤️";

    streakElement.textContent = "0";

    xpElement.textContent = "0";

    resultScreen.classList.remove("show");

    quizContainer.style.display = "block";

    nextBtn.textContent =
        "NEXT QUESTION 🚀";

    loadQuestion();

});


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener("keydown", (event) => {

    if (answered) return;

    const key = event.key;

    if (
        key === "1" ||
        key === "2" ||
        key === "3" ||
        key === "4"
    ) {

        const index =
            parseInt(key) - 1;

        const optionButtons =
            document.querySelectorAll(".option");

        if (optionButtons[index]) {

            optionButtons[index].click();

        }

    }

});




loadQuestion();
