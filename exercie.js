
// function inverseword(str) {
// let reversedWord=str.toLowerCase().split(' ').reverse().join('')
// if(str.toLowerCase()===reversedWord){
//     return true
// }else {return false }

// }
// console.log(inverseword('kayak'))
	

function inverse(str){
    let istr=str.toLowerCase().split(' ').reverse().join('')
    if(str.toLowerCase()===istr){return true}
    else{return false}

}
console.log(inverse('kayak'))