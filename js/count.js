//即時関数
(function () {
    var timer = document.getElementById('timer');
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');
    var reset = document.getElementById('reset');
    var start = document.getElementById('start');

    // スタートタイムを押した時の時間を入れる変数
    var startTime;

    // 残り時間を計算するための変数
    var timeLeft;

    // 現在時刻と表示形式を合わせるために * 1000
    var timeToCountDown = 300000;

    // clearTimeoutメソッドを使いたいので、その時用に変数定義
    var timerId;

    // カウントダウンの状態を管理できるようにする
    var isRunning = false;

    // 画像置換
    let replaceMap = {
    '0':'<img src="./image/0.png">',
    '1':'<img src="./image/1.png">',
    '2':'<img src="./image/2.png">',
    '3':'<img src="./image/3.png">',
    '4':'<img src="./image/4.png">',
    '5':'<img src="./image/5.png">',
    '6':'<img src="./image/6.png">',
    '7':'<img src="./image/7.png">',
    '8':'<img src="./image/8.png">',
    '9':'<img src="./image/9.png">',
    ':':'<img src="./image/colon.png">'
    }

    // 残り時間を表示するために、ミリ秒を渡すと、分や秒に直してくれる関数
    function updateTimer(t) {

        // 引数として渡されたtでデータオブジェクトを作りたいので変数dという変数名で作ってみる
        var d = new Date(t);
        var m = d.getMinutes();
        var s = d.getSeconds();
        m = ('0' + m).slice(-2);
        s = ('0' + s).slice(-2);
        var timertext = m + ':' + s;
        timer..innerHTML = timertext.replace(/[0-9:]/g,c=>replaceMap[c]||c);

    }


    function countDown() {

        // 10ミリ秒後に実行する
        timerId = setTimeout(function () {

            // 残り時間 = カウントされる時間 - 現在時刻
            timeLeft = timeToCountDown - (Date.now() - startTime);

            // 残り時間が0になった時の処理
            if (timeLeft < 0) {
                isRunning = false;
                start.textContent = 'スタート';
                clearTimeout(timerId);
                timeLeft = 0;

                timeToCountDown = 0;

                updateTimer(timeLeft);

                return;
            }

            // countDownを再帰的に呼び出すために記述
            updateTimer(timeLeft)
            countDown();

        }, 10);
    }

    // スタートを押したときの処理
    start.addEventListener('click', function () {

        if (isRunning === false) {
            isRunning = true;

            start.textContent = 'ストップ';
            
            startTime = Date.now();

            // カウントダウンの機能は再帰的に実行
            countDown();
        } else {
            isRunning = false;

            // 表記をStartに戻す
            start.textContent = 'スタート';

            // この時点のtimeLeftで更新してあげる
            timeToCountDown = timeLeft;

            // カウントを止めたいのでclearTimeoutする
            clearTimeout(timerId);
        }
    });

    // 分を押した時の処理
    min.addEventListener('click', function () {

        // カウントダウン中に設定時間を変更できないようにする
        if (isRunning === true) {
            return;
        }

        // 分 = 60秒なので
        timeToCountDown += 60 * 1000;

        // 60分、60秒を超えたら0にする
        if (timeToCountDown >= 60 * 60 * 1000) {
            timeToCountDown = 0;
        }

        // timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer(timeToCountDown);
    });


    // 秒を押した時の処理
    sec.addEventListener('click', function () {

        // カウントダウン中に設定時間を変更できないようにする
        if (isRunning === true) {
            return;
        }

        // 1秒なので
        timeToCountDown += 1000;

        if (timeToCountDown >= 60 * 60 * 1000) {
            timeToCountDown = 0;
        }

        // timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer(timeToCountDown);
    });


    // リセットを押した時の処理
    reset.addEventListener('click', function () {

        // カウントダウン中に設定時間を変更できないようにする
        if (isRunning === true) {
            return;
        }

        timeToCountDown = 300000;

        // timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer(timeToCountDown);
    });
})();
