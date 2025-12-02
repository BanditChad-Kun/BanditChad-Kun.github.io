// ---------------- POWERS ---------------- //
const powers = [
    {
        name: "Shadow Weaving",
        desc: "You can pull shadows off walls and shape them into weapons, creatures, or cloaks."
    },
    {
        name: "Starborn Heartbeat",
        desc: "Your heartbeat emits energy waves capable of healing allies or obliterating foes."
    },
    {
        name: "Dream Manipulation",
        desc: "You enter dreams, leave random messages, and alter someone's mood when they wake."
    },
    {
        name: "Crystal Bone Armor",
        desc: "Your bones grow shimmering crystal plates that act as protective armor."
    },
    {
        name: "Abyssal Lantern",
        desc: "A floating lantern follows you, revealing your secrets… and attracting weird creatures."
    },
    {
        name: "Storm Pulse",
        desc: "You're a walkin storm that ruins everyone's day. Your day included."
    },
    {
        name: "Astral Threadwalking",
        desc: "You step between threads of reality, teleporting short distances."
    }
];

function generatePower() {
    const p = powers[Math.floor(Math.random() * powers.length)];
    document.getElementById("powerName").innerText = p.name;
    document.getElementById("powerDesc").innerText = p.desc;
}


// ---------------- DARK MODE ---------------- //
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
