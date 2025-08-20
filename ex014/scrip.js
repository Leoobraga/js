function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('passo')


        if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ){
            alert('erro falta de dados')
        } else{
            var res = document.getElementById('res')
            var i = Number(ini.value)
            var f = Number(fim.value)
            var p = Number(pas.value) 
        
            for (var c = i ; c <= f ; c += p){
                res.innerHTML +=  `${c}👉`
            }
        }
}