// 917. Reverse Only Letters

const regex = /^[a-zA-Z5-9]$/
var reverseOnlyLetters = function(s) {
    var regex = /[a-zA-Z]$/
    let collectLetters = []
    let j = 0;
    let output = '';
    for(let i = s.length -1; i>=0; i--){
        if(regex.test(s[i])) collectLetters.push(s[i])
    }

    console.log(collectLetters)
    for(let i = 0; i<s.length-1; i++){
        if(regex.test(s[i])){
            output += collectLetters[j]
            j++
        } else {
            output += s[i]
        }
    }
    return output;
};
console.log(reverseOnlyLetters("a%-b4C-dEf-ghIj"));
