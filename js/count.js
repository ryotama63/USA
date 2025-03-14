// HTMLの表示領域の取得
const timer = document.getElementById("timer");

// ミリ秒を渡すと「分」や「秒」に直して画面に表示する
function updateTimer(milliSecond) {
    let d = new Date(milliSecond);
    let m = d.getMinutes(); // 分を取得
    let s = d.getSeconds(); // 秒を取得

    // 表示用に整形
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);

    // HTMLで表示する
    timer.textContent = m + ":" + s;
}
