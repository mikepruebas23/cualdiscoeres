
var objFinalResponse =  {
    url: "url",
    nombre: "name"
};

var response = "";

function selectButton(e){
    let blockElement = 0;
    let id = e.srcElement.id;
    id = parseInt(id);

    switch (id) {
        case 1:
            response = response + "A";
            document.getElementById("el1").classList.add("dnone");
            document.getElementById("4").disabled = false;
            document.getElementById("4").classList.remove("blockElement");
            document.getElementById("5").disabled = false;
            document.getElementById("5").classList.remove("blockElement");
            document.getElementById("6").disabled = false;
            document.getElementById("6").classList.remove("blockElement");
            
        break;
        case 2:
            response = response + "B";
            document.getElementById("el1").classList.add("dnone");
            document.getElementById("4").disabled = false;
            document.getElementById("4").classList.remove("blockElement");
            document.getElementById("5").disabled = false;
            document.getElementById("5").classList.remove("blockElement");
            document.getElementById("6").disabled = false;
            document.getElementById("6").classList.remove("blockElement");
        break;
        case 3:
            response = response + "C";
            document.getElementById("el1").classList.add("dnone");
            document.getElementById("4").disabled = false;
            document.getElementById("4").classList.remove("blockElement");
            document.getElementById("5").disabled = false;
            document.getElementById("5").classList.remove("blockElement");
            document.getElementById("6").disabled = false;
            document.getElementById("6").classList.remove("blockElement");
        break;
        case 4:
            response = response + "15";
            document.getElementById("el2").classList.add("dnone");
            document.getElementById("7").disabled = false;
            document.getElementById("7").classList.remove("blockElement");
            document.getElementById("8").disabled = false;
            document.getElementById("8").classList.remove("blockElement");
            document.getElementById("9").disabled = false;
            document.getElementById("9").classList.remove("blockElement");
        break;
        case 5:
            response = response + "18";
            document.getElementById("el2").classList.add("dnone");
            document.getElementById("7").disabled = false;
            document.getElementById("7").classList.remove("blockElement");
            document.getElementById("8").disabled = false;
            document.getElementById("8").classList.remove("blockElement");
            document.getElementById("9").disabled = false;
            document.getElementById("9").classList.remove("blockElement");
        break;
        case 6:
            response = response + "25";
            document.getElementById("el2").classList.add("dnone");
            document.getElementById("7").disabled = false;
            document.getElementById("7").classList.remove("blockElement");
            document.getElementById("8").disabled = false;
            document.getElementById("8").classList.remove("blockElement");
            document.getElementById("9").disabled = false;
            document.getElementById("9").classList.remove("blockElement");
        break;
        case 7:
            response = response + "XA";
            document.getElementById("el3").classList.add("dnone");
            document.getElementById("10").disabled = false;
            document.getElementById("10").classList.remove("blockElement");
            document.getElementById("11").disabled = false;
            document.getElementById("11").classList.remove("blockElement");
            document.getElementById("12").disabled = false;
            document.getElementById("12").classList.remove("blockElement");
        break;
        case 8:
            response = response + "GM";
            document.getElementById("el3").classList.add("dnone");
            document.getElementById("10").disabled = false;
            document.getElementById("10").classList.remove("blockElement");
            document.getElementById("11").disabled = false;
            document.getElementById("11").classList.remove("blockElement");
            document.getElementById("12").disabled = false;
            document.getElementById("12").classList.remove("blockElement");
        break;
        case 9:
            response = response + "R";
            document.getElementById("el3").classList.add("dnone");
            document.getElementById("10").disabled = false;
            document.getElementById("10").classList.remove("blockElement");
            document.getElementById("11").disabled = false;
            document.getElementById("11").classList.remove("blockElement");
            document.getElementById("12").disabled = false;
            document.getElementById("12").classList.remove("blockElement");
        break;
        case 10:
            response = response + "1";
            document.getElementById("el4").classList.add("dnone");
            document.getElementById("13").disabled = false;
            document.getElementById("13").classList.remove("blockElement");
            document.getElementById("14").disabled = false;
            document.getElementById("14").classList.remove("blockElement");
            document.getElementById("15").disabled = false;
            document.getElementById("15").classList.remove("blockElement");
        break;
        case 11:
            response = response + "2";
            document.getElementById("el4").classList.add("dnone");
            document.getElementById("13").disabled = false;
            document.getElementById("13").classList.remove("blockElement");
            document.getElementById("14").disabled = false;
            document.getElementById("14").classList.remove("blockElement");
            document.getElementById("15").disabled = false;
            document.getElementById("15").classList.remove("blockElement");
        break;
        case 12:
            response = response + "3";
            document.getElementById("el4").classList.add("dnone");
            document.getElementById("13").disabled = false;
            document.getElementById("13").classList.remove("blockElement");
            document.getElementById("14").disabled = false;
            document.getElementById("14").classList.remove("blockElement");
            document.getElementById("15").disabled = false;
            document.getElementById("15").classList.remove("blockElement");
        break;
        case 13:
            response = response + "V";
            document.getElementById("el5").classList.add("dnone");
            document.getElementById("showR").classList.add("dblock");
        break;
        case 14:
            response = response + "A";
            document.getElementById("el5").classList.add("dnone");
            document.getElementById("showR").classList.add("dblock");
        break;
        case 15:
            response = response + "R";
            document.getElementById("el5").classList.add("dnone");
            document.getElementById("showR").classList.add("dblock");
        break;
    
        default:
            break;
    }
}

function showResponse(){

    document.getElementById("showR").classList.remove("dblock");
    let random = Math.floor(Math.random() * 13) + 1  ;
    switch (random) {
        case 1:
            objFinalResponse = {
                url: 'https://sites.google.com/site/saantarm/_/rsrc/1349100587695/discografia/1.jpg?height=708&width=498',
                nombre: '14 DE FEBRERAP'
            };
        break;
        case 2:
            objFinalResponse = {
                url: 'https://sites.google.com/site/saantarm/_/rsrc/1349100789032/discografia/2.jpg?height=345&width=397',
                nombre: 'MI KUENTO DE HADAZ'
            };
        break;
        case 3:
            objFinalResponse = {
                url: 'https://sites.google.com/site/saantarm/_/rsrc/1349101013028/discografia/4.jpg?height=479&width=397',
                nombre: 'AMOR EN TIEMPOS DE ODIO'
            };
        break;
        case 4:
            objFinalResponse = {
                url: 'https://sites.google.com/site/saantarm/_/rsrc/1349101160832/discografia/6.jpg?height=852&width=790',
                nombre: 'RAMO DE PROSAS'
            };
        break;
        case 6:
            objFinalResponse = {
                url: 'https://sites.google.com/site/saantarm/_/rsrc/1349100704317/discografia/1.1.jpg?height=257&width=448',
                nombre: 'EVOLUCION'
            };
        break;
        case 5:
            objFinalResponse = {
                url: 'https://images.genius.com/264d661f4e2184c2db0a41df69187b71.1000x1000x1.jpg',
                nombre: 'MALA ORTOGRAFIA'
            };
        break;
        case 7:
            objFinalResponse = {
                url: 'https://sites.google.com/site/saantarm/_/rsrc/1349100924555/discografia/3.jpg?height=294&width=374',
                nombre: 'MANCHANDO AL MUNDO DE TINTA'
            };
        break;
        case 8:
            objFinalResponse = {
                url: 'https://images.genius.com/264d661f4e2184c2db0a41df69187b71.1000x1000x1.jpg',
                nombre: 'BAJO ZERO'
            };
        break;
        case 9:
            objFinalResponse = {
                url: 'https://assets.audiomack.com/santa-rm/d3ff0b9105c8bfcd0b34cc344c2e16f443f6092ad3be9845efb60dfe644fc368.jpeg?width=1000&height=1000&max=true',
                nombre: 'SESIONES PERDIDAS'
            };
        break;
        case 10:
            objFinalResponse = {
                url: 'https://i.ytimg.com/vi/inhBiBF0dOM/maxresdefault.jpg',
                nombre: 'LISTO PARA LO QUE VENGA'
            };
        break;
        case 11:
            objFinalResponse = {
                url: 'https://images.genius.com/264d661f4e2184c2db0a41df69187b71.1000x1000x1.jpg',
                nombre: 'BAJO ZERO'
            };
        break;
        case 12:
            objFinalResponse = {
                url: 'https://mp3.hhgroups.com/albumes/Santa-RM-y-Kryz-La-cara-B-46061_front.jpg',
                nombre: 'LA CARA B'
            };
        break;
        case 12:
            objFinalResponse = {
                url: 'https://i.ytimg.com/vi/Op70BxBgNNc/maxresdefault.jpg',
                nombre: 'KRAKEN'
            };
        break;
        case 13:
            objFinalResponse = {
                url: 'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/03/27/43/032743b2-8e72-1b2f-fbb6-d151d05818e7/638865086886.jpg/600x600bf.png',
                nombre: 'RAPEATE ALGO'
            };
        break;
        

    
        default:
            objFinalResponse = {
                url: 'https://images.genius.com/264d661f4e2184c2db0a41df69187b71.1000x1000x1.jpg',
                nombre: 'MALA ORTOGRAFIA'
            };
            break;
    }

    document.getElementById("quiz").classList.add("dnone");
    document.getElementById("showR").classList.add("dnone");
    document.getElementById("quiz").classList.remove("dblock");
    document.getElementById("result").classList.add("dblock");
    document.getElementById("result").classList.remove("dnone");

    document.getElementById("ndisco").innerHTML = objFinalResponse.nombre;
    document.getElementById("imgdisco").src = objFinalResponse.url;


  console.log(objFinalResponse);
}