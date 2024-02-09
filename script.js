function verificar() {
  var data = new Date
  var ano = data.getFullYear()
  var fano = document.getElementById('cnasc')
  var res = document.getElementById('resultado')
  
  if(fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente')
  }else {
   fsex = document.getElementsByName('tsexo')
   var idade = ano - Number(fano.value)
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')
   if(fsex[0].checked){
    genero = 'Um Homem'
    if(idade >=0 && idade <10){
      //criança
      img.setAttribute('src','criançamenino.jpg')
    }else if(idade < 21) {
      //jovem
      img.setAttribute('src','jovemmenino.jpg')
    }else if(idade < 50){
      //Adulto
      img.setAttribute('src','homem.jpg')
    }else {
      //idoso
      img.setAttribute('src','idosohomem.jpg')
    }
  }
    else if(fsex[1].checked) {
      genero = 'Uma Mulher'
      if(idade >=0 && idade <10){
        //criança
        img.setAttribute('src','criançamenina.jpg')
      }else if(idade < 21) {
        //jovem
        img.setAttribute('src','jovemmulher.jpg')
      }else if(idade < 50){
        //Adulto
        img.setAttribute('src','mulher.jpg')
      }else {
        //idoso
        img.setAttribute('src','idosamulher.jpg')
      }
    }
   }
   res.style.textAlign ='center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos`
   res.appendChild(img)
  }
 