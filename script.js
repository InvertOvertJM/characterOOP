class Character{
    constructor(name, durability, atk, mana){
        this.name = name;
        this.durability = durability;
        this.atk = atk;
        this.mana = mana;
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

let knight = new Character('Knight', 10, 4, 0);
let wizard = new Character('Wizard', 6, 8, 12);
let priest = new Character('Priest', 5, 2, 16);
let commander = new Superior('Commander', 10, 5, 30, 0);

knight.attack();
wizard.overheal();
priest.attack();

commander.chargeUp();
commander.chargeUp();
commander.chargeUp();
//enough charge to use superattack
commander.superAttack();


//they run out of charge and cant use superattack
commander.superAttack();