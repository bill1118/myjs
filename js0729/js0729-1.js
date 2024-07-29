//取的元素節點 
// 根據id屬性 
let myjs = document.getElementById('js');
console.log(typeof myjs);
console.log(myjs.textContent);

//根據html標籤
let myli = document.getElementsByTagName('li');
console.log(myli);
console.log(myli.item(1).textContent);
console.log(myli[1].textContent);

//顯示所以li
for (let i = 0; i < myli.length; i++) {
    console.log(myli.item(1).textContent);
    console.log(myli[1].textContent);
}

//用querySelector
console.log(document.querySelector('h1').textContent);

//使用類別名稱
let mySubJect = document.getElementsByClassName('subjects');
console.log(mySubJect);
for (let i = 0; i < mySubJect.length; i++) {
    console.log(mySubJect.item(i).textContent);
    console.log(mySubJect[i].textContent);
}

//顯示指定內容(必須有id名稱) => html
console.log(mySubJect['css'].textContent);

//取的id#p1的內容
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

//取得li的子元素中的p
let myp = document.querySelector('li>p');
console.log(myp);
console.log(myp[0].textContent);