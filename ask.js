let tarheb = document.getElementById("tarheb");
let change = document.getElementById("text");
let myInput = document.getElementById("input"); // اتأكد إن الـ ID في الـ HTML اسمه "input"
let message = document.getElementById("message");
let btn = document.getElementById("btn");

// 1. تسلسل ظهور العناصر (Animation -> Text -> Input)
tarheb.addEventListener("animationend", () => {
    change.style.display = "flex";
    setTimeout(() => {
        change.style.opacity = "1";
    }, 20);
});

change.addEventListener("transitionend", () => {
    if (change.style.opacity === "1") {
        myInput.style.display = "flex";
        setTimeout(() => {
            myInput.style.opacity = "1";
        }, 20);
    }
});

// 2. مراقبة الكتابة داخل الـ Input لإظهار الزرار
myInput.addEventListener("input", function() {
    // التعبير النمطي للاسم (عربي وإنجليزي)
    let pattern = /^(Asmaa Ayman|[أاإآ]سم[أاإآ]ء\s[أاإآ]يم+ن)$/i;

    if (pattern.test(myInput.value.trim())) {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto"; // عشان الزرار يكون قابل للضغط
    } else {
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none"; // عشان ميتداسش عليه وهو مخفي
    }
});

btn.onclick = function(){
    // أول واحد يختفي هو الزرار والـ Input
    setTimeout(()=> {
        message.style.display = "flex";
    message.style.opacity = "1"}, 4000)
    
    
    btn.style.opacity = "0";
    myInput.style.opacity = "0";

    // بعد نص ثانية يختفي النص
    setTimeout(() => {
        change.style.opacity = "0";
    }, 500);

    // بعد ثانية كاملة يختفي الترحيب
    setTimeout(() => {
        tarheb.style.opacity = "0";
        
        // هنا بقى ممكن تبدأ الـ setInterval بتاعتك
        startMyInterval(); 
    }, 500);
};

function startMyInterval() {
    setInterval(() => {
        console.log("شغال بعد ما كله اختفى");
    }, 500);
}
