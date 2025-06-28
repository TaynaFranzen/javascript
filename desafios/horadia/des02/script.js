function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if( fano.value.length == 0 || fano.value > ano)                  
        {window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 12 ) {
                //crianca 
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21){
                //jovem
img.setAttribute('src','imagens/jovemmenino.png')
            } else if ( idade < 60) {
                //homem adulto
        img.setAttribute('src','imagens/homem.png')
            }else if( idade > 61) {
                    //idoso 
    img.setAttribute('src.','imagens/idoso.png')
                
            } 
        } else if (fsex[1].checked){
        genero = 'Mulher'
            if(idade >=0 && idade < 12 ) {
                //crianca 
                img.setAttribute('src','imagens/menina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','imagens/jovemmenina.png')
            } else if ( idade < 60) {
                // adulta
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //idoso 
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos '+genero+ ' com '+idade+' anos.'
        res.appendChild(img)
    }
}
