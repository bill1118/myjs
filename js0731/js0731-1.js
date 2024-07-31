//取得送出按鈕
let myBtn = document.getElementById('btn')

//監聽按鈕是否被左鍵一下了
myBtn.addEventListener('click', function () {
    let result = "";
    //取得科目的全部
    let subjects = document.getElementsByName('subject');
    //使用迴圈逐一檢查是否被選取 => checked
    for (let i = 0; i < subjects.length; i++) {
        if(subjects[i].checked){
            //取得選項按鈕的值
            result = subjects[i].value;
            //因為是單選，所以找到後結束迴圈
            break;
        }
    }
    console.log('選擇的科目是:' + result);
});