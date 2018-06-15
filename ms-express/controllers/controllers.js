module.exports = {
    generateRandomNumber: () => {
        return new Promise((resolve, reject) => {
            let randomNumber = Math.floor(Math.random() * 100);
        
            for(let i=0; i<10000; i++) {
                randomNumber += Math.random();
            };

            resolve(randomNumber);
        });
    }
}