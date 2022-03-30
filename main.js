const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let playerCoord = [0,0]
let field
let gameStatus = true;

class Field {

    Field(f){
        this.field = f;
    }

    static getRandomInt(max){
        return Math.floor(Math.random() * max)
    }
    
    static generateField( width, height, holePercentage ){

        //generate field and set character
        let generatedField = []
        for(let i = 0;i<height;i++){
            let tempArr = []
            for(let j = 0;j<width;j++){
                tempArr.push(fieldCharacter)
            }
            generatedField.push(tempArr)
        }
        generatedField[0][0] = pathCharacter


        //set holes
        if(holePercentage > 0){
            let numHoles = (holePercentage/100) * width * height
            for(let i = 0;i<numHoles;i++){
                let randx = this.getRandomInt(width)
                let randy = this.getRandomInt(height)
                if(randx != 0 || randy != 0){
                    generatedField[randy][randx] = hole
                }
            }     
        }

        //set hat position
        let randx = this.getRandomInt(width)
        let randy = this.getRandomInt(height)
        if(randx != 0 || randy != 0){
            generatedField[randy][randx] = hat
        }

        return generatedField
    }

    playGame(){
        gameStatus = true
        this.print
        while(gameStatus){
            let input = prompt('Enter direction you would like to move')
            this.readInput(input)
            if(gameStatus){
                this.print
            }
        }
    }
    
    print(){
        console.log(field)
        // for(let i = 0;i<field.length;i++){
        //     console.log(field[i].join(''))
        // }
    }

    readInput(input){
        if(input === 'u'){
            if(playerCoord[0] === 0){
                console.log("already at top")
            } else{
                this.movePlayer(playerCoord[0]-1, playerCoord[1])
            }
        }
        else if(input === 'd'){
            if(playerCoord[0] === field.length-1){
                console.log("already at bottom")
            } else{
                this.movePlayer(playerCoord[0]+1, playerCoord[1])
            }
        }
        else if(input === 'l'){
            if(playerCoord[1] === 0){
                console.log("already at border")
            } else{
                this.movePlayer(playerCoord[0], playerCoord[1]-1)
            }
        }
        else if(input === 'r'){
            if(playerCoord[1] === field[0].length-1){
                console.log("already at border")
            } else{
                this.movePlayer(playerCoord[0], playerCoord[1]+1)
            }
            
        } else{
            console.log("invalid input ( u = up , d = down, l = left, r = right )")
        }
    }

    movePlayer(x,y){
        if(field[x][y] === hole){
            this.lose
        }
        else if(field[x][y] === hat){
            this.win
        }
        else if(field[x][y] == fieldCharacter){
            field[playerCoord[0]][playerCoord[1]] = fieldCharacter;
            field[x][y] = pathCharacter;
            playerCoord = [x , y]
            this.print
        }

    }

    win(){
        console.log('you lost.')
        gameStatus = false;
    }

    lose(){
        console.log('you won.')
        gameStatus = false
    }
    
}

let fieldtemp = Field.generateField(5,10,30)


let myField = new Field(fieldtemp)

myField.playGame()



