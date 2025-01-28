document.getElementById("form-id").addEventListener("click", async function(e) {
    e.preventDefault();
    const country=document.getElementById("country").value.trim();

    const outputDiv=document.getElementById("output");
    const apikey="87c13d56280472f6649e7175992bd61e";
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apikey}&units=metric`;

    outputDiv.innerHTML="";
    try {
        const another= await fetch(apiurl)
        if(!another.ok)  {
            outputDiv.innerHTML = `<p style="color: red;">Please enter a valid country name.</p>`;
            return;
            
            
        }
        const data = await another.json();
        const output=`  
               
                <p>sunrise:${data.sys.sunrise} </p>
                <p>Timezone: ${data.timezone} </P>
               
                <p>Temperature : ${data.main.temp_max}</p>
                <p> pressure : ${data.main.pressure}</p>
                <p>Humidity : ${data.main.humidity}
             



        `;
        outputDiv.innerHTML=output;

            
    }
    
    catch (error) {
        outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});