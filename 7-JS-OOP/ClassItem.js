const GlobalDamageType = [
  "physical",
  "poison",
  "fire",
  "water",
  "air",
  "earth",
];

const GlobalConsumableType = ["minor", "medium", "big"];

class Item {
    
  constructor(id, name) {
    this.id = id = Math.random().toString(16).slice(2);
    this.name = name;

    if (typeof this.name !== "string") {
      throw new Error("The name must be a string !");
    }

    if (this.name.length < 3 || this.name.length > 50) {
      throw new Error("The name must be between 3 and 50 characters");
    }
  }

  getItemInfo() {
    return `Item ${this.id} - ${this.name}`;
  }
}

let newItem = new Item(this.id, "mech");
console.log(newItem.getItemInfo());

class Weapon extends Item {

    chance = Math.floor(Math.random() * (50 - 5 + 1)) + 5;

  constructor(id, name, attack, damageType, twoHanded, chance) {
    super(id, name);

    if (GlobalDamageType.includes(damageType)) {
      this.damageType = damageType;
    } else {
      throw new Error(
        "The damage type should be one of the following : physical, poison, fire, water, air, earth"
      );
    }

    if (isNaN(attack) || attack < 1 || attack > 30000) {
      throw new Error("The damage must be a number between 1 and 30000");
    }
    this.attack = attack;

    if (typeof twoHanded !== "boolean") {
      throw new Error("twoHanded should be a boolean");
    }
    this.twoHanded = twoHanded;

    if (chance < 5 || chance > 50) {
      throw new Error("the chance must be a number between 5 and 50");
    }
  }

  getItemInfo() {
    return (
      super.getItemInfo() + ` has ${this.attack} of ${this.damageType} damage`
    );
  }
}

let newWeapon = new Weapon(this.id, "mech", 15, "physical", true);
console.log(newWeapon.getItemInfo());

class Sword extends Weapon {
  constructor(id, name, attack, damageType, twoHanded, chance) {
    super(id, name, attack, damageType, twoHanded, chance);

    if (twoHanded === true) {
      this.cripple = "cripple";
    } else {
      this.bleed = "bleed";
    }
  }

  getItemInfo() {
    return (
      super.getItemInfo() +
      ` and has ${this.chance}% to ${this.cripple || this.bleed}`
    );
  }
}
let newSword = new Sword(this.id, "mech", 15, "physical", false);
console.log(newSword.getItemInfo());

class Bow extends Weapon {
  constructor(id, name, attack, damageType, twoHanded, chance, arrowType) {
    if (twoHanded == false) {
      throw new Error("The bow can only be two handed");
    }

    super(id, name, attack, damageType, twoHanded, chance);

    if (arrowType === "normal") {
      this.pierce = true;
      this.critical = false;
      this.arrowType = "normal";
    } else if (arrowType === "special") {
      this.pierce = false;
      this.critical = true;
      this.arrowType = "special";
    } else {
      throw new Error("The arrow type must be either normal or special");
    }
  }

  getItemInfo() {
    return (
      super.getItemInfo() +
      ` and has ${this.chance}% to apply ${
        this.arrowType === "normal" ? "pierce" : "critical"
      }`
    );
  }
}

let newBow = new Bow(
  this.id,
  "bowname",
  30,
  "physical",
  true,
  this.chance,
  "special"
);
console.log(newBow.getItemInfo());
let newBow1 = new Bow(
  this.id,
  "bowname",
  30,
  "physical",
  true,
  this.chance,
  "normal"
);
console.log(newBow1.getItemInfo());

class Staff extends Weapon {
  constructor(id, name, attack, damageType, twoHanded, chance) {
    if (twoHanded == false) {
      throw new Error("The staff must be two handed");
    }

    if (damageType === "physical") {
      throw new Error("The staff cannot have physical damage");
    }

    super(id, name, attack, damageType, twoHanded, chance);

    if (GlobalDamageType.includes(damageType)) {
      this.damageType = damageType;
    } else {
      throw new Error(
        "The damage type should be one of the following : burn, poison, cold, electrify, tremor"
      );
    }

    if (damageType === "fire") {
      this.burn = true;
    } else {
      this.burn = false;
    }

    if (damageType === "poison") {
      this.poison = true;
    } else {
      this.poison = false;
    }

    if (damageType === "water") {
      this.cold = true;
    } else {
      this.cold = false;
    }

    if (damageType === "air") {
      this.electrify = true;
    } else {
      this.electrify = false;
    }

    if (damageType === "earth") {
      this.tremor = true;
    } else {
      this.tremor = false;
    }
  }

  getItemInfo() {
    return (
      super.getItemInfo() +
      ` and has ${this.chance}% to apply ${
        this.damageType === "fire"
          ? "burn"
          : this.damageType === "poison"
          ? "poison"
          : this.damageType === "water"
          ? "cold"
          : this.damageType === "air"
          ? "electrify"
          : this.damageType === "earth"
          ? "tremor"
          : "error"
      }`
    );
  }
}
let newStaff = new Staff(
  this.id,
  "staffname",
  30,
  "earth",
  true,
  this.chance,
  "special"
);
console.log(newStaff.getItemInfo());

class Armor extends Item {
  constructor(id, name, defense, resistance, chance) {
    if (isNaN(defense) || defense < 1 || defense > 10000) {
      throw new Error("the defense must be a number between 1 and 10000");
    }

    super(id, name);
    this.defense = defense;

    this.chance = chance = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    if (chance < 10 || chance > 100) {
      throw new Error("the chance should be a number between 10 and 100");
    }
    if (GlobalDamageType.includes(resistance)) {
      this.resistance = resistance;
    } else {
      throw new Error(
        "the resistance type should be one of the following: physical, poison, fire, water, air, earth"
      );
    }
  }

  getItemInfo() {
    return (
      super.getItemInfo() +
      ` has ${this.defense} defense and ${this.chance}% ${this.resistance} resistance`
    );
  }
}

let newArmor = new Armor(this.id, "armorname", 50, "physical", this.chance);
console.log(newArmor.getItemInfo());

class Helm extends Armor {
  constructor(id, name, defense, resistance, chance, attractiveness) {
    if (isNaN(attractiveness) || attractiveness < -5 || attractiveness > 5) {
      throw new Error("The attractiveness must be between -5 and 5");
    }

    super(id, name, defense, resistance, chance);
    this.attractiveness = attractiveness;
  }

  getItemInfo() {
    return (
      super.getItemInfo() + ` and adds ${this.attractiveness} attractiveness`
    );
  }
}
let newHelm = new Helm(this.id, "helmname", 50, "physical", this.chance, -5);
console.log(newHelm.getItemInfo());

class Boots extends Armor {
  constructor(id, name, defense, resistance, chance, speed) {
    super(id, name, defense, resistance, chance);

    if (speed < 1 || speed > 10) {
      throw new Error("the speed must be between 1 and 10");
    }
    this.speed = speed;
  }

  getItemInfo() {
    return super.getItemInfo() + ` and adds ${this.speed} speed`;
  }
}
let newBoots = new Boots(this.id, "bootsname", 50, "physical", this.chance, 5);
console.log(newBoots.getItemInfo());

class Gloves extends Armor {
  constructor(id, name, defense, resistance, chance, crafting) {
    if (isNaN(crafting) || crafting < 1 || crafting > 10) {
      throw new Error("The crafting should be a number between 1 and 10");
    }

    super(id, name, defense, resistance, chance);

    this.crafting = crafting;
  }

  getItemInfo() {
    return super.getItemInfo() + ` and adds ${this.crafting} crafting`;
  }
}
let newGloves = new Gloves(
  this.id,
  "glovesname",
  50,
  "physical",
  this.chance,
  2
);
console.log(newGloves.getItemInfo());

class Robe extends Armor {
  constructor(id, name, defense, resistance, chance, reputation) {
    if (isNaN(reputation) || reputation < 1 || reputation > 10) {
      throw new Error("The reputation should be a number between 1 and 10");
    }
    super(id, name, defense, resistance, chance);

    this.reputation = reputation;
  }

  getItemInfo() {
    return super.getItemInfo() + ` and adds ${this.reputation} reputation`;
  }
}
let newRobe = new Robe(this.id, "robename", 20, "physical", this.chance, 10);
console.log(newRobe.getItemInfo());

class Consumable extends Item {
  constructor(id, name, heals, type) {
    super(id, name);
    if (typeof heals !== "boolean") {
      throw new Error("heals should be a boolean");
    }
    this.heals = heals;

    if (GlobalConsumableType.includes(type)) {
      this.type = type;
    } else {
      throw new Error(
        "The consumable type should be one of the following : minor, medium, big"
      );
    }

    this.effect =
      type === "minor"
        ? Math.floor(Math.random() * 10) + 1
        : (this.efect =
            type === "medium"
              ? Math.floor(Math.random() * 10) + 11
              : Math.floor(Math.random() * 10) + 21);
  }

  getItemInfo() {
    return (
      super.getItemInfo() +
      ` it is ${this.type} potion and ${this.heals ? "heals" : "damages"} for ${
        this.effect
      }`
    );
  }
}
let newConsumable = new Consumable(this.id, "potionname", false, "minor");
console.log(newConsumable.getItemInfo());
let newConsumable1 = new Consumable(this.id, "potionname1", true, "big");
console.log(newConsumable1.getItemInfo());
