console.log('this is mod.js');
function average(arr){
    let sum =0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
// module.exports ={
    //     avg:average,
    //     name:"sam",
    //     repo:"GitHub"
    // 
// }
// here obj is created
    
module.exports.name="sam";