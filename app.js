// let show = document.querySelector('.show')
// let countNumber = 0

// function showBar(){
//     if(countNumber > 50){
//         clearInterval(clear)
//     }else{
//         show.style.width = `${countNumber}%`
//         show.innerHTML = countNumber++
//     }
// }
// let clear = setInterval(function(){
//    showBar()
// },100)

function massage(greet,name){
    function getName(){
        if(name){
            return name.split(' ')[0]
        }
    }
    let msg = `${greet}! ${getName()}`
    return msg
}

let show = massage('Hello','Rashika Taher')
console.log(show)