let zainteresowanie = []
for(i=0;i<5;i++){
    zainteresowanie[i] = prompt("Podaj zainteresowanie")
    
}
for(i=0;i<5;i++){
    document.getElementById("punkt"+(i+1)).innerHTML = zainteresowanie[i]
}


