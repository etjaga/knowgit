// function add () {
//     var first_num = document.getElementById("result").innerHTML;
//     console.log(first_num)
//     // var second_num = amount.value;
//     // var total = Number(first_num) + Number(second_num);
//     // result.innerText = total;
// }
// function depo(){
//     var deposit = deposited.value
//     let customers = [
//         { 
//             depositedAmount:[deposit]
//         }
//     ]
//     localStorage.setItem("allCustomers", JSON.stringify(customers))
// }

// function add(){
//     var deduct = JSON.parse(localStorage.allCustomers);
//     var deduct = retrieveCustomer[0].depositedAmount;
//     alert(deduct)
// }
// function retrieveCustomer(){
//     var retrieveCustomer = JSON.parse(localStorage.allCustomers);
//     var resulte = retrieveCustomer[0].depositedAmount;
//     document.getElementById("result").innerHTML= "$"+ resulte;
// }

function signUp(){
    var fname = firstName.value
    var lname = lastName.value
    localStorage.setItem(`fname`, JSON.stringify(fname))
    userName.innerHTML = `${ JSON.parse(fname)}`
}