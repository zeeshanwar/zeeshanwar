let header = document.querySelector('.header');

console.log(header);

console.log(window.scrollY);

window.addEventListener('scroll', ()=>{

     console.log("scrolled");
     console.log(window.scrollY);

     header.classList.toggle('stickyheader', window.scrollY > 0);

})


console.log(document.getElementById('inputmail').value);


function SendMail(){
     
     
     Email.send({

          Host : "smtp.elasticemail.com",
          Username : "zeeshanwar524@gmail.com",
          Password : "E0423AF65A45DC48C48D81E7365F3551AF63",
          To : 'mdzeeshan4836@gmail.com',
          From : document.getElementById('inputmail').value ,
          Subject : "This is the subject",
          Body : "And this is the body"
      }).then(
     //    message => alert(message)
        message => alert("ThankYou for showing Interest! Your Response has been recorded")

      );
}
