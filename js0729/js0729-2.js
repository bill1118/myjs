//使用name，取得元素內容
let myDranks = document.getElementsByName('drinks');
console.log(myDranks);

for (let i = 0; i < myDranks.length; i++) {
    console.log(myDranks.item(i).value);
}

//取得勾選的項目內容
//1.找到按鈕
let myBtn = document.querySelector('#btn');
//2.監聽否被按下
myBtn.addEventListener('click',function(){
    let arrResult = [];
    let myDranks = document.getElementsByName('drinks');
    //逐一檢查是否被勾選 => checked
    for(let i=0;i<myDranks.length;i++){
        if(myDranks[i].checked){
            arrResult.push(myDranks[i].value);
        }
    }
    console.log(arrResult);
});