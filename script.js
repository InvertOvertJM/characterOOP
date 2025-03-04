class Character{
    constructor(name, durability, atk, mana, level){
        this.name = name;
        this.durability = durability;
        this.atk = atk;
        this.mana = mana;
        this.level = level;
    }
    attack() {
        console.log(`${this.name} attacks with ${this.atk} damage!`)
    }
    overheal(){
        this.durability += 3;
        console.log(`${this.name} strengthens to ${this.durability} health!`)
        this.mana += -3;
        console.log(`${this.name} has ${this.mana} mana left!`)
    }
    defend(){
        this.durability -= Math.floor(Math.random() * 6);
        console.log(`${this.name} takes a hit and has ${this.durability} health!`)
    }
    levelUp(){
        this.level += 1;
        this.atk +=1;
        console.log(`${this.name} levels up to level ${this.level} and now deals ${this.atk} damage!`)
    }
}

class Superior extends Character{
    constructor(name, durability, atk, mana, charge){
        super(name, durability, atk, mana);
        this.charge = charge;
    }
    chargeUp() {
        this.charge += 1;
        console.log(`${this.name} charges up and has ${this.charge} charge`)
    }
    superAttack() {
        if(this.charge == 3){
            this.charge = 0;
            this.atk = (this.atk * 3);
            console.log(`${this.name} unleashes a powerful attack, dealing ${this.atk} damage!`)
            console.log(`${this.name} has ${this.charge} charge`)
        }
        else{
            console.log(`${this.name} doesn't have enough charge!`)
        }
    }
}

class minion extends Character{
    constructor(name, durability, atk, mana, type){
        super(name, durability, atk, mana, type);
        this.type = type;
    }
    wack(){
        console.log(`${this.name} unleashes a weak attack dealing ${this.atk} damage.`)
    }
}


let knight = new Character('Knight', 10, 6, 0, 4);
let wizard = new Character('Wizard', 6, 8, 12, 3);
let priest = new Character('Priest', 5, 2, 16, 5);
let commander = new Superior('Commander', 10, 5, 30, 0, 8);

let soldier = new minion('Soldier', 4, 2, 0, 'Swordsman')

knight.attack();
wizard.overheal();
priest.attack();

knight.defend();

soldier.wack();

wizard.levelUp();
wizard.levelUp();

commander.chargeUp();
commander.chargeUp();
commander.chargeUp();
//enough charge to use superattack
commander.superAttack();


//they run out of charge and cant use superattack
commander.superAttack();