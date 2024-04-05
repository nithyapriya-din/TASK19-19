

// this api 100 data only get 


//  window.addEventListener("scroll",()=>{
      
//     if(window.innerHeight+window.scrollY>document.body.offsetHeight){
//         count=count+10
//         console.log(count)
//     }
   
// })

var loading = document.querySelector("#img_tag")
var loadingHeight = loading.innerHTML
function namtaha(){
    var loading_icon = document.createElement("div")
     loading_icon.innerHTML=`<div class="overlay">
     <div class="overlay__inner">
         <div class="overlay__content"><span class="spinner spinner_2 ">Welcome to<br><h1 class="spinner">Yours Cat</h1></span></div>
     </div>
 </div>`
    var bodystyle = document.querySelector('body')
    bodystyle.append(loading_icon)

    

  setTimeout(()=>{
    getcatapi()
    var loading = document.querySelector("#img_tag")
    if(!loading.innerHTML==''){
       var remove_icon = document.querySelector(".overlay")
       var remove_icon_2 = remove_icon.parentElement
       remove_icon_2.remove()
    }
    
  },5000)


}
namtaha()





async function  getcatapi(){
   // this api 100 data only get
var count = 100;

var api = `https://api.thecatapi.com/v1/images/search?limit=${count}&api_key=a7d0a86f-60d2-4526-b1fb-976fe91a9e83`
   try{var cat_api = await fetch(api)
    var cat_final = await cat_api.json()
    console.log(cat_final)
     for(i=0; i<cat_final.length; i++){
    // console.log(cat_final[i].id)
    var api2 =`https://meowfacts.herokuapp.com/?id=${cat_final[i].id}&count=2`
    var cat_data = await fetch (api2);
    var cat_date_final = await cat_data.json()
    console.log(cat_date_final)
    // var img_main =document.createElement('img')
    // img_main.classList.add("col-md-3")
    // img_main.setAttribute("src",cat_final[i].url)
    var div_main = document.querySelector("#img_tag")
    var div_ = document.querySelector(".nav-item")
    var div_final = document.createElement('div');
    div_final.innerHTML=`  <div class="card overflow" style="width: 18rem; height:25rem;">
    <img src="${cat_final[i].url}" class="card-img-top col-md-3" alt="...">
    <div class="card-body">
      <p class="card-text">${cat_date_final.data}</p>
    </div>
  </div>
    `
    div_main.append(div_final)

     }
   }
   catch(rej){
console.log(rej)
 console.log("error")
   };
  
 
}





