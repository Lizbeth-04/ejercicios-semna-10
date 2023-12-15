'use strict'
let codigo= '01.24';
let size = codigo.length
let start = codigo.indexOf("0");
let end = codigo.indexOf ("1",start)
alert(size)
alert(codigo.slice (start,end+1))