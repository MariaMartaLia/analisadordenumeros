
    let num = document.getElementById('num')
    let val = document.getElementById('validado')
    let res =document.getElementById('analise')
    let valores=[]

   function isNumero(n){
    if(Number(n) >=1 && Number(n)<=100){
        return true
    } else{
        return false
    }}
    function inLista(n,l){
        if(l.indexOf(Number(n)) != -1) {
            return true
        }else{
            return false
        }
    }
    function adicionar(){
        if(isNumero(num.value) && !inLista( num.value, valores)){
           valores.push(Number(num.value))
           let item = document.createElement('option')
           item.text =`valor ${num.value} adicionado.`
           val.appendChild(item)
           res.innerHTML=``
           } else{
               window.alert('Valor invalido ou ja encontrado na lista.')
           }
           num.value=``
           num.focus()
    }
    function analisar(){
        if( valores.length == 0){
            window.alert('Adicione valores para analese!')
        } else{
            let total=valores.length
            let maior= valores[0]
            let menor=valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
                if(valores[pos] > maior)
                maior = valores[pos]
            if ( valores[pos]< menor)
            menor =valores[pos]
            }
            media = soma/total
            res.innerHTML=``
            res.innerHTML +=`<p> Ao todo temos ${total} números cadastrados. `
            res.innerHTML+=`<p>O maior valor informado foi ${maior}`
            res.innerHTML+=`<p> O menor valor informado foi ${menor}`
            res.innerHTML+=`<p> Somando todos os valores ${soma}`
            res.innerHTML+=`<p> A media dos valores são ${media}`


        }

    }

   
