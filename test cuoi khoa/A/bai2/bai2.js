function merge2String(s1, s2) {
    var i = ''
    var j = Math.min(s1.length, s2.length)
    var temp = ''
    for(i = 0; i < j; i++) {
        temp += s1[i] + s2[i]
    }
    return temp + s1.slice(i) + s2.slice(i)
}

console.log(merge2String('abc', '123'))
console.log(merge2String('abc', '0123'))
console.log(merge2String('abcd', '123'))