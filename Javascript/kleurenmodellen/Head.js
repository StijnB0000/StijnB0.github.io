document.addEventListener('visibilitychange', e=>{
    if (document.visibilityState === 'visible') {
        console.log("focus")
        document.title = "Kleurenmodellen"
  //gebruiker is op de pagina
   } else {
    console.log("unfocus")
            document.title = "kom terug!"
    //gebruiker zit op een andere pagina
   }  
})