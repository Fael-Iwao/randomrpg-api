var appearance = ['Masculino', 'Feminino', 'Androgêno', 'Travesti'];
var color = ['Branco' ,'Verde' ,'Amarelo' ,'Vermelho' ,'Azul' ,'Violeta' ,'Laranja' ,'Preto'];
var weapon1 = ['Nenhuma' ,'Espada de uma mão' ,'Machado' ,'Martelo de Guerra' ,'Adaga' ,'Adaga de Sacrificio' ,'Espada de duas mãos' ,'Machado de Guerra' ,'Clava' ,'Manopla' ,'Pique' ,'Arco Curto' ,'Arco Médio' ,'Arco Longo' ,'Besta Leve' ,'Besta Pesada' ,'Espada dupla' ,'Adaga Dupla' ,'Chicote' ,'Maça' ,'Lança' ,'Bastão'];
var weapon2 = ['Nenhuma','Adaga','Manopla','Pique','Chicote','Arco Curto','Arco Longo','Besta','Machete','Faca']
var items = ['Nenhuma','Frasco Pequeno','Frasco Médio','Frasco Grande','Mochila','Saco','Bolsa','Bandoleira','Capuz','Sobretudo','Botas','Caneca','Luneta','Óculos','Chapéu']
var rpgClass = ['Nenhuma' ,'Mago' ,'Feiticeiro' ,'Bruxo' ,'Druida' ,'Necromante' ,'Bardo' ,'Camponês' ,'Pirata' ,'Templário' ,'Ranger' ,'Ladrão' ,'Assassino' ,'Berserker' ,'Vikings' ,'Guerreiro' ,'Bárbaro' ,'Gladiador' ,'Clérigo' ,'Monge' ,'Sacerdote' ,'Paladino' ,'Psionico' ,'Espadachim' ,'Antipaladino' ,'Alquimista' ,'Domador de fera' ,'Golem' ,'Lutador' ,'Arqueiro' ,'Xamã' ,'Caçador' ,'Amazona' ,'Bandoleiro' ,'Soldado']
var breed = ['Humano','Orc','Elfo','Goblin','Criatura alada','Duende','Fada','Dêmonio','Diabo','Diabrete','Gênio','Homem fera','Lobisomem','Ninfa','Draconiano','Hobbit','Sátiro','Sereia','Vampiro','Ogro','Ghoul','Espectro','Morto Vivo','Gigante','Zumbi','Troll','Ent','Gnomo','Centauro','Minotauro','Anão','Tritão']

rollDices = (dice, qtd, mod) => {
    let rolls = [];
    let coin;
    dice == 2 ? coin = 0 : coin = 1;
    for(let i = 0; i < qtd; i ++){
        rolls.push((Math.floor(Math.random() * dice) + coin) + parseInt(mod));
    }
    return rolls;
    

}

randomize = (maxValue) => Math.floor(Math.random() * maxValue)

module.exports = {
    async rollDice(req, res){
        let mod;
        let dice = req.query.dice;
        let qtd = req.query.qtd;
        
        
        req.query.mod === undefined ? mod = 0: mod = req.query.mod;
        console.log(mod)
        let rolls = {
            dice : "D"+dice,
            qtd,
            mod,
        }
        if(dice == 2 || dice == 4 || dice == 6|| dice == 8 || dice == 10|| dice == 12|| dice == 20|| dice == 100){
            
            rolls.success = true;
            rolls.values = rollDices(dice, qtd, mod),
            rolls.message = "rolado(s) com sucesso"
             
        }else{
            rolls.sucess= false;
            rolls.message = "Valor de dado inválido!"
        }
        return res.json(rolls) 
        

    },

    async randomizeAppearance(req, res){
        let maxValue = appearance.length; 
        let appearanceSelected = appearance[randomize(maxValue)];
        
        return res.json(appearanceSelected);
    },
    async randomizeColor(req, res){
        let maxValue = color.length; 
        let colorSelected = color[randomize(maxValue)];
        
        return res.json(colorSelected);
    },
    async randomizeRpgClass(req, res){
        let maxValue = rpgClass.length; 
        let rpgClassSelected = rpgClass[randomize(maxValue)];
        
        return res.json(rpgClassSelected);
    },
    async randomizeBreed(req, res){
        let maxValue = breed.length; 
        let breedSelected = breed[randomize(maxValue)];
        
        return res.json(breedSelected);
    },
    async randomizeWeapon1(req, res){
        let maxValue = weapon1.length; 
        let weapon1Selected = weapon1[randomize(maxValue)];
        
        return res.json(weapon1Selected);
    },
    async randomizeWeapon2(req, res){
        let maxValue = weapon2.length; 
        let weapon2Selected = weapon2[randomize(maxValue)];
        
        return res.json(weapon2Selected);
    },
    async randomizeItens(req, res){
        let itemsSelected = [];
        let qtd = 1;
        let maxValue = items.length; 

        req.query.qtd == undefined ? qtd = 1 : qtd = req.query.qtd;
        
        for(let i = 0; i < qtd; i ++){
            itemsSelected.push(items[randomize(maxValue)])
        }
        console.log(itemsSelected);
        
        return res.json(itemsSelected);
    },

}