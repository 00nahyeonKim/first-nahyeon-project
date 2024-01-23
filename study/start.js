const readline = require('readline');

const todoList = [{}, {}, {}];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function init() {
  rl.question('명령하세요 : ', (command) => {
    readCommand(command);
    rl.close();
  });
}

function readCommand(command) {
  switch (command) {
    case 'show':
      console.log(command);
      break;

    case 'add':
      console.log(command);
      break;

    case 'delete':
      console.log(command);
      break;
    case 'update':
      console.log(command);
      break;

    default:
      throw new Error('올바르지 않은 명령입니다.');
  }
}

init();