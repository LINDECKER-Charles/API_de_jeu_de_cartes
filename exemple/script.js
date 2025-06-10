/* console.log("OK"); */

const timerStart = new Date().getTime();

/* Fait la diférence entre l'apelle et le moment ou le script js à été lancé */
function getCurrMs() {
    return `[${new Date().getTime() - timerStart} ms]`;
}

async function wait1Sec() {
    
    console.log(getCurrMs() + "wait1Sec - start");

    /* On crée une nouvelle promesse qu'on return une fois la fonction terminé */
    return new Promise ((resolve, reject) => 
        setTimeout(
            () => {
                console.log(getCurrMs() + "wait1Sec - end");

                resolve("OK");
            }, 1000
        )
    
    );
}

async function syncOrAsyncCallWait1Sec(isAsync) {
    console.log(getCurrMs() + "syncOrAsyncCallWait1Sec - start");

    /* Si Async alors on n'attend pas que wait1sec se termine et on continue sinon on attend */
    if(isAsync){
        await wait1Sec();
    }else{
        wait1Sec();
    }


    console.log(getCurrMs() + "syncOrAsyncCallWait1Sec - end");
}

syncOrAsyncCallWait1Sec(true); /* Test, changer le bool pour voir la différence */