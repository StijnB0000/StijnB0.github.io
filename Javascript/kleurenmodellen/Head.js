document.addEventListener('visibilitychange', e => { /* kijkt voor een event genaamd 'visibitychange' 
    en kijkt of die visisble is, 
    en zo niet dan zorgt de 'else' statement ervoor dat hij ervan uitgaat dat hij niet visible is.
    Hij verander de website titel als visibility state niet 'visible is' en veranderd hem weer terug als hij weer 'visible is'  */
    if (document.visibilityState === 'visible') {
        console.log("focus");
        document.title = "Kleurenmodellen";
        //gebruiker is op de pagina
    } else {
        console.log("unfocus");
        document.title = "kom terug!";
        //gebruiker zit op een andere pagina
    }
})