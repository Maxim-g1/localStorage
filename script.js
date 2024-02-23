console.log(localStorage)

//сохранение данных в LS
localStorage.setItem('key',[100,200,300])

//получить данные из LS
let str = localStorage.getItem('key')
console.log(typeof(str))

localStorage.setItem('key1',32542)
localStorage.setItem('key2',88888)
localStorage.setItem('key3',979797)

let key1 = +localStorage.getItem("key1")
let key2 = +localStorage.getItem("key2")
let key3 = +localStorage.getItem("key3")

console.log(key1+key2+key3)

//однократное сохранение в LS
let time = localStorage.getItem('time')
 
if(time===null){
    let now=Date.now() /60000
    localStorage.setItem('time', now)
}else{
    let count=Date.now()-time
    console.log(`С предыдущего входа прощло ${count/60000} минут`)
}