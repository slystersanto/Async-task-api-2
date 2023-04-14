//DOM 
var container = document.createElement("div");
container.setAttribute("class","container");
container.innerHTML =`<div class="container">
<h1 id="title">திருக்குறள்</h1>
<div class="row">
    <div class="col-md-12">    
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%B5%E0%AE%B3%E0%AF%8D%E0%AE%B3%E0%AF%81%E0%AE%B5%E0%AE%B0%E0%AF%8D_%E0%AE%95%E0%AE%B2%E0%AF%88%E0%AE%AA%E0%AF%8D_%E0%AE%AA%E0%AE%9F%E0%AF%88%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%81.jpg" alt="Thiruvalluvar image">
        <h2 id="text">குறள்</h2>
        <h4 id="exp"></h4>
    </div>
</div>    
</div>
<button id="button">அடுத்தது</button>`
document.body.append(container);

//javascript
document.getElementById("button").addEventListener("click",kural);
//initial number for api
let count = 0;
//fetch the data 
async function kural(){
        count++;
        if(count<=1330){
                let data = await fetch(`https://api-thirukkural.vercel.app/api?num=${count}`);
                let data1 = await data.json();
                
                document.getElementById("title").innerHTML=`${data1.chap_tam}`;
                document.getElementById("text").innerHTML=`${data1.line1} <br> ${data1.line2}`;
                document.getElementById("exp").innerHTML=`<b>விளக்கம்:</b> ${data1.tam_exp}.`;

        }else{
                document.getElementById("text").innerHTML="நன்றி!";
                document.getElementById("title").innerHTML="திருக்குறள்";
                document.getElementById("exp").innerHTML=""; 
        }
}