let btn=document.querySelector("#btn");
btn.addEventListener("click",(e)=>{
    let curr=e.target.dataset;
    console.log(curr);
    let sub=document.querySelector(".subcontent").innerHTML="";
    if(curr?.name){
        const city=document.getElementById("inp").value;
        const base_url=`http://api.weatherapi.com/v1/current.json?key=20a7043b367545f7a9a213512251010&q=${city}&aqi=yes`;
        const p= fetch(base_url);
        p.then((response)=>{
        console.log(response);
        return response.json();
        })
        .then((data)=> {
        console.log(data);
        console.log(data.location);
        console.log(data.current.temp_c);
        
      if(city!="none"){
        let sub=document.querySelector(".subcontent");
        sub.style.display="flex";
        let circle=document.createElement("div");
        circle.style.width="50px";
        circle.style.height="50px";
        circle.style.border="2px solid black";
        circle.style.margin="20px 0 0 20px";
        circle.style.borderRadius="40px";
        circle.style.backgroundColor="rgb(101, 174, 219)";
        circle.innerText=`Temp:\n${data.current.temp_c}'C`;
        circle.style.padding="5px";
        circle.style.textShadow="5px 5px 5px red";
        circle.style.alignContent="center";
        sub.appendChild(circle);
        let temp=document.createElement("div");
        temp.style.width="300px";
        temp.style.height="70px";
        temp.style.borderRadius="10px"
        temp.style.margin="10px 0 0 20px";
        temp.style.border="2px solid rgb(101, 174, 219)";
        temp.style.color="rgb(238, 122, 6)";
        sub.appendChild(temp);
        temp.style.padding="5px";
        temp.style.fontSize="17px";
        temp.innerText=`${data.location.name},${data.location.region}(${data.location.country})\n Condition:${data.current.condition.text}
        Humidity:${data.current.humidity}`;

      }
      else if(city=="none"){
        console.log("hello");
     }
    });
    p.catch((error)=>{
    console.log("Error");
  });
}
});
      let div=document.getElementById("div");
        div.innerText=Date();
        div.style.color="rgb(238, 122, 6)";
        let ele=Date();
        console.log(ele);
        let word=ele.slice(0,3);
        console.log(word);
        let div1=document.querySelector(".merge");
          let h1=document.createElement("h1");
          div1.appendChild(h1);
        if(word="Sun"){
          console.log("sunday");
          h1.innerText="Sunday";   
        }
        else if(word="Mon"){
          console.log("Monday");
          h1.innerText="Monday";
        }
        else if(word="Tues"){
          console.log("Tuesday");
          h1.innerText="Tuesday";
        }
        else if(word="Wed"){
          console.log("Wednesday");
          h1.innerText="Wednesday";
        }
        else if(word="Thurs"){
          console.log("Thursday");
          h1.innerText="Thursday";
        }
        else if(word="Fri"){
          console.log("Friday");
          h1.innerText="Friday";
        }
        else if(word="Sat"){
          console.log("Saturday");
          h1.innerText="Saturday";
        }
        else{
          console.log("Welcome")
        }