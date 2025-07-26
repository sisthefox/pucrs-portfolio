// Class for RPG characters
class Character {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }

  // Reduces the HP
  takeDamage(amount) {
    this.hp -= amount;
    if (this.hp < 0) this.hp = 0;
  }

  // Checks if character is still alive
  isAlive() {
    return this.hp > 0;
  }

  // Performs an attack on a target
  performAttack(target) {
    const damage = Math.floor(Math.random() * this.attack);
    target.takeDamage(damage);
    return `-> <strong>${this.name}</strong> deals <strong>${damage}</strong> damage to <strong>${target.name}</strong>.`;
  }

  // Returns a table row with character current stats
  getDescriptionRow(roleEmoji, role) {
    return `
      <tr>
        <td>${roleEmoji}</td>
        <td><strong>${this.name}</strong></td>
        <td><strong>${role}</strong></td>
        <td>${this.hp}</td>
        <td>${this.attack}</td>
      </tr>`;
  }
}

// Warrior class
class Warrior extends Character {
  constructor(name) {
    super(name, 120, 20);
  }

  performAttack(target) {
    const base = super.performAttack(target);
    return `${base} (💥 Warrior strike!)`;
  }
}

// Mage class
class Mage extends Character {
  constructor(name) {
    super(name, 80, 30);
  }

  performAttack(target) {
    const base = super.performAttack(target);
    return `${base} (✨ Magic blast!)`;
  }
}

// Archer class
class Archer extends Character {
  constructor(name) {
    super(name, 100, 25);
  }

  performAttack(target) {
    const base = super.performAttack(target);
    return `${base} (🏹 Arrow shot!)`;
  }
}

// Simulates the battle between the warrior and two enemies
function simulateBattle() {
  const warrior = new Warrior("The Might Warrior");
  const mage = new Mage("Fire Mage");
  const archer = new Archer("Legolas the Archer");

  const enemies = [mage, archer];
  const log = [];

  // Table with the character stats
  const table = `
    <h3>🧙‍♂️ Character Stats</h3>
    <table>
      <tr>
        <th>Emoji</th>
        <th>Name</th>
        <th>Class</th>
        <th>HP</th>
        <th>ATK</th>
      </tr>
      ${warrior.getDescriptionRow('🛡️', 'Warrior')}
      ${mage.getDescriptionRow('🧙‍♀️', 'Mage')}
      ${archer.getDescriptionRow('🏹', 'Archer')}
    </table>
  `;
  log.push(table);

  log.push(`<h3>⚔️ Battle Log</h3>`);

  // Battle loop
  while (enemies.some(e => e.isAlive()) && warrior.isAlive()) {
    for (let enemy of enemies) {
      if (enemy.isAlive()) {
        log.push(warrior.performAttack(enemy));
      }
    }

    for (let enemy of enemies) {
      if (enemy.isAlive()) {
        log.push(enemy.performAttack(warrior));
      }
    }
  }

  // Final result
  log.push(`<br><strong> Battle finished </strong>`);
  log.push(
    warrior.isAlive()
      ? "🏆 <strong>The Might Warrior wins!</strong>"
      : "💀 <strong>The Enemies win!</strong>"
  );

  // Display results
  document.getElementById("result").innerHTML = log.join("<br>");
}
