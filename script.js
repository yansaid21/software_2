function getText(){
    text=document.getElementById('texto').value
return text;
}
function ascci(){
    var convertido=[];
    text=getText();
    for (let i = 0; i < text.length; i++) {
        convertido.push(text.charCodeAt(i)); 
    }
    //console.log(convertido);
    return convertido;
}

function binario(){
    var aux;
    var lista=[];
    var respuesta=[];
    lista=ascci();
    lista.toString(2);
    for (let i = 0; i < lista.length; i++) {
        if ((lista[i].toString(2)).length<8) {
            if ((lista[i].toString(2)).length<7) {
                aux="00"+lista[i].toString(2);
                console.log("aux ultimo problema",aux);
            }else{
                aux="0"+lista[i].toString(2);
            }
            respuesta.push(aux);
        }else{
        respuesta.push(lista[i].toString(2));
        }
        
    }
    console.log("este es aux",aux);

    return respuesta;
}

function mostrar(){
    let cabeza="<th>código ascci</th><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th>";
    document.getElementById('head').innerHTML=cabeza;
    var binarios=binario();
    var listado="";
    
        
        
    
    for (let i = 0; i < binarios.length; i++) {
        listado+="<tr>" ;
        console.log("aqui entro");
        listado+="<td>"+ascci()[i]+"</td>"
        for (let j = 0; j < 8; j++) {
            listado +="<td>"+binarios[i][j]+"</td>";
        }
        listado+= "</tr>";
    }
    console.log(listado);
    document.getElementById('tabla').innerHTML = listado;

}
function borrar(){
    var limpio="";
    document.getElementById('tabla').innerHTML = limpio;
    document.getElementById('texto').value=limpio;
    document.getElementById('head').innerHTML= limpio;
}
