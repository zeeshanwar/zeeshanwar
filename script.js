
let header = document.querySelector('.header');

console.log(header);

console.log(window.scrollY);

window.addEventListener('scroll', ()=>{

     console.log("scrolled");
     console.log(window.scrollY);

     header.classList.toggle('stickyheader', window.scrollY > 0);

})



let nameinput = document.getElementById('inputname');
let mailinput = document.getElementById('inputmail');
let messageinput = document.getElementById('inputmessage');


function SendMail(){

     console.log(nameinput.value);
     console.log(mailinput.value);
     console.log(messageinput.value);


     if(nameinput.value == "" || mailinput.value == "" || messageinput.value == ""){
          alert('Please fill out all the Fields Properly');
     }

     else{

          Email.send({

               Host : "smtp.elasticemail.com",
               Username : "zeeshanwar524@gmail.com",
               Password : "E0423AF65A45DC48C48D81E7365F3551AF63",
               To : 'mdzeeshan4836@gmail.com',
               From : document.getElementById('inputmail').value ,
               Subject : "This is the subject",
               Body : `Name: ${nameinput.value} <br>
                    Email: ${mailinput.value} <br>
                    Message: ${messageinput.value}`
                    
          }).then(
          //    message => alert(message)
          message => alert("ThankYou for showing Interest! Your Response has been recorded")

          );
     }
}
