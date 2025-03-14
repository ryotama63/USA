(function(){
const input = document.getElementById('input'); // 変数『input』に対象input要素を格納
let replaceMap = {
'0':'<img src="★★★">',
'1':'ｂと置き換える文字',
'2':'ｃと置き換える文字',
'3':'Ａと置き換える文字',
'4':'Ｂと置き換える文字',
'5':'ａと置き換える文字',
'6':'ｂと置き換える文字',
'7':'ｃと置き換える文字',
'8':'Ａと置き換える文字',
'9':'Ｂと置き換える文字'
}
input.onchange = () =>{
input.value = input.value.replace(/[a-zA-Z]/g,c=>replaceMap[c]||c)
};
}());
