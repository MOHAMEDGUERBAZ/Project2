document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");

    function createCalendar() {
        for (let i = 1; i <= 31; i++) {
            const day = document.createElement("div");
            day.classList.add("day");
            day.innerText = i;

            if (i === 25) {
                day.classList.add("christmas");
                day.addEventListener("click", showChristmasSurprise);
            }

            calendar.appendChild(day);
        }
    }

    function showChristmasSurprise() {
        alert("🎅 Merry Christmas! 🎄");
    }

    createCalendar();
});
