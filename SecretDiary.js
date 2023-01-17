const prompt = require(`prompt-sync`);

class SecretDiary {

    #entries = [];
    #isLocked = true;
    #password = 'password';
    
    lock() {
        this.#isLocked = false;
    };

    unlock() {
        let input = prompt(`Please enter the password:`);
        if (this.#password === input)
        this.unlock();
    };

    getEntries() {
        if(!this.#isLocked)
        return console.log(this.#entries);
        else console.log(`The diary is locked.`);
    };

    addEntry(entry) {
        if(!this.#isLocked) this.#entries.push(entry)
        else console.log(`The diary is locked.`);
    };

    getLockStatus() {
        return this.#isLocked;
    }

}

module.exports = SecretDiary;