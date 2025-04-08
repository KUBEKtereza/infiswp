class Frage {
    constructor(frage, optionen, antwort) {
        this.frage = frage;
        this.optionen = optionen;
        this.antwort = antwort;
    }
}

const fs = require('fs');
const readline = require('readline');

fs.readFile('2025-04-01_Class/fragen.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const fragenArray = JSON.parse(data).map(item => new Frage(item.frage, item.optionen, item.antwort));
    
    let currentQuestionIndex = 0;

    function askQuestion() {
        const frage = fragenArray[currentQuestionIndex];
        console.log(`${currentQuestionIndex + 1}. ${frage.frage}`);
        frage.optionen.forEach((option, i) => {
            console.log(`   ${String.fromCharCode(65 + i)}: ${option}`);
        });

        rl.question('Bitte wählen Sie eine Antwort (A, B, C, D): ', (answer) => {
            if (answer.toUpperCase() === frage.antwort.charAt(0).toUpperCase()) {
                console.log('Richtig!');
            } else {
                console.log(`Falsch! Die richtige Antwort ist: ${frage.antwort}`);
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < fragenArray.length) {
                askQuestion();
            } else {
                console.log('Quiz beendet!');
                rl.close();
            }
        });
    }

    askQuestion();
});

});
