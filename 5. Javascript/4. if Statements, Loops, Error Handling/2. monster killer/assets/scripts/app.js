const attackValue = 10;
const strongAttackValue = 17;
const monsterAttackValue = 14;
const healValue = 20;

const log_event_player_attack = 'player_attack';
const log_event_player_strong_attack = 'player_strong_attack';
const log_event_monster_attack = 'monster_attack';
const log_event_player_heal = 'player_heal';
const log_event_game_over = 'game_over';

const enteredValue = prompt('Set Maximum life for you and the monster', '100');

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry;
  if (ev === log_event_player_attack) {
    logEntry = {
      event: ev,
      value: val,
      target: 'monster',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (ev === log_event_player_strong_attack) {
    logEntry = {
      event: ev,
      value: val,
      target: 'monster',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (ev === log_event_monster_attack) {
    logEntry = {
      event: ev,
      value: val,
      target: 'player',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (ev === log_event_player_heal) {
    logEntry = {
      event: ev,
      value: val,
      target: 'player',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (ev === log_event_game_over) {
    logEntry = {
      event: ev,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    log_event_monster_attack,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('you would be death but the bonus life saved you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
    writeToLog(
      log_event_game_over,
      'Player Won',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
    writeToLog(
      log_event_game_over,
      'Monster Won',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
    writeToLog(
      log_event_game_over,
      'Match Draw',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  let logEvent;
  if (mode === 'attack') {
    maxDamage = attackValue;
    logEvent = log_event_player_attack;
  } else if (mode === 'strongAttack') {
    maxDamage = strongAttackValue;
    logEvent = log_event_player_strong_attack;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster('attack');
}

function strongAttackHandler() {
  attackMonster('strongAttack');
}

function healPlayerHandler() {
  let heal_Value;
  if (currentPlayerHealth >= chosenMaxLife - healValue) {
    alert("You can't heal to more than your max health");
    heal_Value = chosenMaxLife - currentPlayerHealth;
  } else {
    heal_Value = healValue;
  }
  increasePlayerHealth(heal_Value);
  currentPlayerHealth += heal_Value;
  writeToLog(
    log_event_player_heal,
    heal_Value,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  for (let i = 0; i < 3; i++) {
    console.log('------------');
  }
  let i = 0;
  for (const logEntry of battleLog) {
    console.log(`#${i}`);
    for (const key in logEntry) {
      console.log(`${key} => ${logEntry[key]}`);
    }
    i++;
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
