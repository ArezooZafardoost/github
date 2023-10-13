const num1 = prompt("عدد اول را وارد کنید");
const num2 = prompt("عدد دوم را وارد کنید");
const num3 = prompt("عدد سوم را وارد کنید");

if(num1<num2<num3){
    console.log(num1);
}else if(num2<num1 && num2< num3){
    console.log(num2);
}else{
    console.log(num3);
}