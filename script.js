var mqttvar="";

window.onload = record();   
setInterval(record,10000);  

function click(){
    this.style.color = "#ff0000";                  

}
var flagf=0;
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function assign(){   


}

function record() {
            var recognition = new webkitSpeechRecognition();
            recognition.lang = "en-GB";
            var x1,x2;

            recognition.onresult = function(event) {
                // console.log(event);
                x1 = event.results[0][0].transcript;
                x2=x1.toUpperCase();
                document.getElementById('speech').textContent = x2;
               
                if(x2.includes("BORED ONE") || x2.includes("BOARD ONE") || x2.includes("BORED 1") || x2.includes("BOARD 1")){
                   mqttvar+="1"; 
                   if(x2.includes("CH ONE")){
                    mqttvar+="1";
                        let img=document.querySelector(".s1 .ss1");
                        color(img,x2);
                    }
                    else if(x2.includes("CH TWO") || x2.includes("CH TO") || x2.includes("CH 2")){
                        mqttvar+="2";
                        let img=document.querySelector(".s1 .ss2");
                        color(img,x2);
                    }
                    else if(x2.includes("CH THREE") || x2.includes("CH 3")){
                        mqttvar+="3";
                        let img=document.querySelector(".s1 .ss3");
                        color(img,x2);
                    }
                    else if(x2.includes("CH FOUR") || x2.includes("CH 4")){
                        mqttvar+="4";
                        let img=document.querySelector(".s1 .ss4");
                        color(img,x2);
                    }          
            }
            else if(x2.includes("BORED TWO") || x2.includes("BOARD TWO") || x2.includes("BORED TO") || x2.includes("BOARD TO")){
                    mqttvar+="2";
                    if(x2.includes("CH ONE")){
                        mqttvar+="1";
                        let img=document.querySelector(".s2 .ss1");
                        color(img,x2);
                    }
                    else if(x2.includes("CH TWO") || x2.includes("CH TO") || x2.includes("CH 2")){
                        mqttvar+="2";
                        let img=document.querySelector(".s2 .ss2");
                        color(img,x2);
                    }
                    else if(x2.includes("CH THREE") || x2.includes("CH 3")){
                        mqttvar+="3";
                        let img=document.querySelector(".s2 .ss3");
                        color(img,x2);
                    }
                    else if(x2.includes("CH FOUR") || x2.includes("CH 4")){
                        mqttvar+="4";
                        let img=document.querySelector(".s2 .ss4");
                        color(img,x2);
                    }          
            }
            }
            recognition.start();
        
        }


function color(img,x2){
                        if(x2.includes('ON')){    
                            mqttvar+="1";              
                        /*  message = new Paho.MQTT.Message(mqttvar);
                            message.destinationName =  document.getElementById("topic").value;
                            client.send(message);   
                            */
                            img.style.color = "#03eaff";
                            x0='SWITCH TURNED ON ';
                            x=document.getElementById('resp');
                            x.textContent = x0;
                            mqttvar="";   
                        }
                        if(x2.includes('OF')){
                            mqttvar+="0";
                        /*  message = new Paho.MQTT.Message(mqttvar);
                            message.destinationName =  document.getElementById("topic").value;
                            client.send(message); 
                            */
                            img.style.color = "#6B7576";       
                            x0='SWITCH TURNED OFF '+mqttvar;
                            x=document.getElementById('resp');
                            x.textContent = x0;
                            mqttvar="";   
                        }
                     
}       



/*
//Connecting to MQTT

function startConnect() {
    clientID = "clientID-" + parseInt(Math.random() * 100);

   host = document.getElementById("ip").value;
    port = document.getElementById("port").value;

    document.getElementById("messages").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
    document.getElementById("messages").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';

    client = new Paho.MQTT.Client(host, Number(port), clientID);
 
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

     client.connect({ 
        onSuccess: onConnect,
    });
} 

function onConnect() {

    topic = document.getElementById("topic").value;

    // Print output for the user in the messages div
    //document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';
    document.getElementById("myForm").style.backgroundColor= "#58e835";
    client.subscribe(topic);
}

function onConnectionLost(responseObject) {
    document.getElementById("messages").innerHTML += '<span>ERROR: Connection lost</span><br/>';
    if (responseObject.errorCode !== 0) {
        document.getElementById("messages").innerHTML += '<span>ERROR: ' + + responseObject.errorMessage + '</span><br/>';
          document.getElementById("myForm").style.backgroundColor= "#ff2828"; 
    }
}

//Function for response from mqtt
/*


*/
