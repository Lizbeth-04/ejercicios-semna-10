'use strict'
let https = 'https://docs.google.com/spreadsheets/d/1-ln8CeFOjXpFfF-7k8az6VNHnJHHRKAArv_t7Ua1HzY/edit?pli=1#gid=0'
let size=https.length
alert(https.length)
let start=https.indexOf('-')
alert(https.slice(start-1))