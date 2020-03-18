let pizza = [
    {
        //id: 0,
        nome: "Pepperoni",
        ingredientes:["Pepperoni","Queijo", "Oregano"],
        valor: 50,
        tamanho:"Grande"
    },
    {        
        //id: 1,
        nome: "Marguerita",
        ingredientes:["Queijo","Tomate","Manjericão", "Oregano"],
        valor: 45,
        tamanho:"Grande"
    }
    
]

function listarPizzas(req, res){
    return res.send(pizza);
}

function mostrarPizza(){
    let{id} =req.params;
    return res.send(pizza[id]);
}

module.exports = {listarPizzas, mostrarPizza};