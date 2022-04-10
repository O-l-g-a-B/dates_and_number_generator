let date = new Date("2022-04-10, 20:56");
let now = (new Date() - date) / 1000 / 60; // минуты
let now1 = Math.round(now);
let now2 = (new Date() - date) / 1000; //секунды
let now3 = Math.round(now2);
let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: "numeric",
};

function formatDate() {
    if (now3 < 1) {
        alert('прямо сейчас');
    }
    if (now3 > 1 && now3 < 60) {
        alert(now3 + ' сек. назад');
    }
    if (now1 > 1 && now1 < 60) {
        alert(now1 + ' мин. назад');
    }
    if (now1 > 60) {
        alert(new Date().toLocaleString("ru", options));
    }
}