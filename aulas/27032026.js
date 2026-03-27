// Criar Array 

const filaNumber = [1,2,3,4,5,6];

const filaStringAmigos = ["Ana Julia","Bob","Patrick"]

function lerAmigos(filaStringAmigos){
    console.log(`Você tem ${filaStringAmigos.length} amigos`)
    
    for(let i = 0; i < filaStringAmigos.length;i++){
        console.log(filaStringAmigos[i])
    if(filaStringAmigos[i] === "Bob"){
            console.log(`Index do seu melhor amigo é ${i}`)

        }
    }
}

