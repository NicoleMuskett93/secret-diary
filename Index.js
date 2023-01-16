const SecretDiary = require(`./SecretDiary`);
const prompt = require(`prompt-sync`);

let diary = new SecretDiary();
diary.addEntry('Hello World');
//console.log(diary.getLockStatus());
diary.addEntry(`Goodbye!`);
diary.getEntries();

diary.unlock();
