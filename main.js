window.onload = function () {
    const menuBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');
    const nav = document.querySelector('.navigation');

    window.onscroll = function () {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            nav.style.backgroundColor = "rgb(53, 85, 146)";
            nav.style.transition = "0.5s";
            nav.style.width = "100%";
        } else {
            nav.style.backgroundColor = "rgba(53, 85, 146, 0)";
        }
    };

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });

    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            menuBtn.classList.remove('is-active');
            mobileMenu.classList.remove('is-active');
        }
    });
};

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const content1 = document.querySelector(".classes-content").innerHTML;
const content2 = `
<div id="btn2-content" class="classes-hero">

<div class="info-img">
    <img src="images/group.webp" alt="">
</div>

<div class="info-yoga">
    <h1>Yoga with Our Group</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga eaque est eligendi, animi itaque
                    doloremque esse quam voluptas possimus dolore blanditiis soluta quod laborum error et! Numquam, quia
                    et.</p>

    <h1>Group Yoga Schedule</h1>
    <p id="week-program">
        Sunday: 9:00am - 11:00am
        <br>Wednesday: 7:00am - 9:00am
        <br>Friday: 6:00pm - 8:00pm
    </p>
</div>


</div>`;
const content3 = `<div id="btn3" class="classes-hero">

<div class="info-yoga">
    <h1>For Those Who Prefer to Work Solo</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga eaque est eligendi, animi itaque
                    doloremque esse quam voluptas possimus dolore blanditiis soluta quod laborum error et! Numquam, quia
                    et.</p>

    <h1>Personal Yoga Schedule</h1>
    <p id="week-program">
        Monday & Wednesday: 7:00am - 9:00am
        <br>Thursday: 12:00pm - 2:00pm
        <br>Saturday: 4:00pm - 6:00pm
    </p>
</div>


<div class="info-img">
    <img src="images/solo.jpg" alt="">
</div>
</div>`;

const content4 = `<div id="btn4" class="classes-hero">

<div class="info-img">
    <img src="images/stret.webp" alt="">
</div>

<div class="info-yoga">
    <h1>Stretching Sessions</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga eaque est eligendi, animi itaque
                    doloremque esse quam voluptas possimus dolore blanditiis soluta quod laborum error et! Numquam, quia
                    et.</p>

    <h1>Stretching Session Schedule</h1>
    <p id="week-program">
        Tuesday & Thursday: 6:30pm - 8:00pm
        <br>Friday: 8:00am - 9:30am
        <br>Sunday: 11:00am - 12:30pm
    </p>
</div>


</div>`;


btn1.addEventListener("click", (e) => {
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content1;
});

btn2.addEventListener("click", (e) => {
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content2;
});

btn3.addEventListener("click", (e) => {
    btn3.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn4.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content3;
});

btn4.addEventListener("click", (e) => {
    btn4.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    document.querySelector(".classes-content").innerHTML = content4;
});

const yourWeight = document.querySelector(".input-weight");
const yourHeight = document.querySelector(".input-height");
const triangle = document.querySelector(".bmi-img img");
const bmiText = document.querySelector("#your-bmi");
const galaxyFold = window.matchMedia("(max-width: 360px)");


function calculateBMI() {
    let weight = parseFloat(yourWeight.value);
    let height = parseFloat(yourHeight.value);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        bmiText.innerHTML = "Please enter valid weight and height";
        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));

    let bmiRanges = [
        { min: 0, max: 18.5, text: "Underweight", minPercentage: 9, maxPercentage: 24 },
        { min: 18.5, max: 24.9, text: "Normal", minPercentage: 25, maxPercentage: 40 },
        { min: 25, max: 29.9, text: "Overweight", minPercentage: 42, maxPercentage: 57 },
        { min: 30, max: 35, text: "Obese", minPercentage: 58, maxPercentage: 73 },
        { min: 35, max: 40, text: "Extremely Obese", minPercentage: 75, maxPercentage: 89 },
        { min: 40, max: 100, text: "Dead", minPercentage: 89, maxPercentage: 89 }
    ];

    let bmiRangesForMax360px = [
        { min: 0, max: 18, text: "Underweight", minPercentage: 24, maxPercentage: 34 },
        { min: 18.5, max: 24.9, text: "Normal", minPercentage: 35, maxPercentage: 44 },
        { min: 25, max: 29.9, text: "Overweight", minPercentage: 45, maxPercentage: 54 },
        { min: 30, max: 35, text: "Obese", minPercentage: 55, maxPercentage: 64 },
        { min: 35, max: 40, text: "Extremely Obese", minPercentage: 66, maxPercentage: 75 },
        { min: 40, max: 100, text: "Dead", minPercentage: 75, maxPercentage: 75 }
    ];

    let ranges = galaxyFold.matches ? bmiRangesForMax360px : bmiRanges;

    let bmiRange = ranges.find(range => bmi >= range.min && bmi < range.max);
    if (!bmiRange) {
        bmiText.innerHTML = "BMI out of range";
        return;
    }

    let leftPercentage = ((bmi - bmiRange.min) / (bmiRange.max - bmiRange.min)) * (bmiRange.maxPercentage - bmiRange.minPercentage) + bmiRange.minPercentage;
    bmiText.innerHTML = Math.round(bmi) + " " + bmiRange.text;
    document.querySelector('.bmi-img').style.setProperty('--bmi-position', leftPercentage + '%');
}

yourHeight.addEventListener("input", calculateBMI);
yourWeight.addEventListener("input", calculateBMI);



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement =
            document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});


function initMap() {
    var courthouse = { lat: 36.8841, lng: 30.7036 };
    var map = new google.maps.Map(document.getElementById('google-maps-canvas'), {
        zoom: 16,
        center: courthouse
    });
    var marker = new google.maps.Marker({
        position: courthouse,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initMap();
});
