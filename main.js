

var sitename = document.getElementById("sitename")
var url = document.getElementById("url")
var submit = document.getElementById('submit');
var form =document.getElementById("form")
var boxModal = document.querySelector(".box-info");
var close =document.getElementById("close")


var websites = [];

if(localStorage.websites != null){
    websites = JSON.parse(localStorage.websites)  
   
   //  When receiving data from a web server, the data is always a string.
   
   //  Parse the data with JSON.parse(), and the data becomes a JavaScript object.
   
   }else{
       websites = [];
   
   }


submit.onclick = function () {
 
  if (validation() === true) {

    var newwebsite ={
        sitename : sitename.value,
        url : url.value
    }


    // console.log("hiii");
    websites.push(newwebsite)
    localStorage.setItem("websites", JSON.stringify(websites))

    display()
    clearform()




  }else{
    console.log("worong");

 boxModal.classList.replace("d-none","d-flex");




  }
 

}





function display() {
    var cartoona = "";
    var i ;

    for (var i = 0; i < websites.length; i++) {
        
        cartoona = cartoona+ 
        ` 

        <tr>
					<td>${i+1}</td>
					<td>${websites[i].sitename}</td>

                    <td> 
                    <a href="${websites[i].url}"  target="_blank">
                    <button class=" btn btn-warning ">

                    <div class="d-flex align-items-center">
                    <i class="fa fa-eye me-2"></i>
                    <p>Visit</p>
                   </div>

                   </button>
                      </a>
                    </td>  
                   

                    <td> 
                    <button  onclick="deletewebsite(${i})"  class="btn btn-dark">

                     <div class="d-flex align-items-center">
                    <i class="fa fa-trash me-2"></i>
                    <p>Delete</p>

                  </div>

                  </button>
					</td>

				</tr>
        
        
        
        
        `

        document.getElementById("tbody").innerHTML = cartoona;
    }

   
    
}



display()




function clearform() {

    sitename.value="",

    url.value=""
} 





function deletewebsite(index) {
 websites.splice(index,1)
 localStorage.setItem('websites', JSON.stringify(websites))

 console.log("hii dletetd");
 display()


}



function validation() {
    
var pnamregex =/^[0-9A-Za-z ]{3,11}$/;
var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
var namevalue = sitename.value
var urlvalue = url.value
if (pnamregex.test(namevalue) == true  && expression.test(urlvalue)==true) {
    // console.log("match");

    return true;
    
}else{
    console.log("not match");
     

    return false;
}

}

                // close
                
                
close.onclick = function () {
    // console.log('close');

    boxModal.classList.replace("d-flex","d-none");
    



}
        


// function onFormSubmit(event) {
//     event.preventDefault();
 
// }