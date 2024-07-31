//使用name，取得元素內容
// let myDranks = document.getElementsByName('drinks');
// console.log(myDranks);

// for (let i = 0; i < myDranks.length; i++) {
//     console.log(myDranks.item(i).value);
// }

//取得勾選的項目內容
//1.找到按鈕
let myBtn = document.querySelector('#btn');
//2.監聽否被按下
myBtn.addEventListener('click', function () {
    let arrResult = [];
    let arrResultn = [];
    let myDranks = document.getElementsByName('drinks');
    //逐一檢查是否被勾選 => checked
    for (let i = 0; i < myDranks.length; i++) {
        if (myDranks[i].checked) {
            arrResult.push(myDranks[i].value);
        } else {
            arrResultn.push(myDranks[i].value);
        }
    }


    //被勾選
    let str1 = "";
    if(arrResult.length>0){
        str1 = '<div><ul>被勾選項目';
        //被選取的li
        for (let i = 0; i < arrResult.length; i++) {
            str1 = str1 + `<li>${arrResult[i]}</li>`
        }
        str1 = str1 + '</ul></div>';
    }

    //沒有被勾選
    let str2 = "";
    if(arrResultn.length>0){
        str2 = `<div><ul>被勾選項目`;
        //沒被選取的li
        for (let i = 0; i < arrResultn.length; i++) {
            str2 = str2 + `<li>${arrResultn[i]}</li>`
        }
        str2 = str2 + `</ul></div>`;
    }

    //取得顯示資料的位置
    let getDiv = document.getElementById('showData');
    getDiv.innerHTML = str1 + str2;




});