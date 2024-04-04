// 9분

// // window??
// console.log(this)
// // window??
// function test(){
//     console.log(this);
// }
// test();

// var object = {
//     id : "xodnd7374",
//     pw : "1234",
//     hamsu : function(){
//         // 메소드
//         // 나를 포함하는 오브젝트들!
//         console.log(this);
//     }
// }
// // this를 object안에서 사용하면 그 함수를 가지고 있는 object를 뜻함 
// // {id: 'xodnd7374', pw: '1234', hamsu: ƒ} 출력결과
// object.hamsu();

// var data = {
//     type : {
//         type2 : function(){
//             console.log(this);
//         }
//     }
// }
// // {type2: ƒ} 출력결과 / 상위요소만 나타남
// data.type.type2();