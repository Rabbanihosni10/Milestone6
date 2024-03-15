
for(var i=0; i<5;i++){
    console.log(i);
}
console.log('Outside',i);
print5();
print10();
console.log(print10);
function print5(){
    console.log('Inside Print5',5);
}
// const print10=function(){
var print10=function(){
    console.log('Inside Print10',10);
}
