const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let field = [[]]

class Field {

    Field(field){
        this.field = field;
    }
    
    print(){
        for(let i = 0;i<field.length;i++){
            console.log(field[i].join(''))
        }
    }

    readInput(input){
        if(input === 'u'){

        }
        else if(input === 'd'){
            
        }
        else if(input === 'l'){
            
        }
        else if(input === 'r'){
            
        } else{
            console.log("invalid input ( u = up , d = down, l = left, r = right )")
        }
    }

    movePlayer(){
        

    }

    win(){
        console.log('you lost.')
        break
    }

    lose(){
        console.log('you won.')
        break
    }
    
}

