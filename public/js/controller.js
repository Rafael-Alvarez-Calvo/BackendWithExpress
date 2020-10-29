async function getText(){

    let texto = document.getElementById("miTexto").value;

    let response = await fetch('http://localhost:8080/getText?value=' + texto);
    let data = await response.json();  
    
}

document.getElementById("enviar").addEventListener("click", getText);