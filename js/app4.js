const N =parseInt(prompt("Input an integer :"));
for (let i=2;i<=10;i++){
    if (N<1 || N%i===0){
        console.log("NO");
        break;
    } else {
        console.log("YES")
    }
}