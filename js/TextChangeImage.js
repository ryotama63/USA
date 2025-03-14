(function(){
const input = document.getElementById('timer'); // 変数『input』に対象input要素を格納
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
'9':'<img src="./image/colon.png">'
}
input.onchange = () =>{
input.value = input.value.replace(/[a-zA-Z]/g,c=>replaceMap[c]||c)
};
}());
