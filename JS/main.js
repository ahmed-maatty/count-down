let MyDate = new Date ("Mar 22, 2023 23:59:59").getTime() ;

let Counter = setInterval( () => {

    let DateNow = new Date().getTime() ;

    let DateDiff = MyDate - DateNow ;

    let Days = Math.floor( DateDiff / ( 1000 * 60 * 60 * 24 ));

    document.getElementById("dayes").innerHTML = Days < 10 ? `0${Days}` : Days ;

    let Hours = Math.floor(DateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) ;

    document.getElementById("houres").innerHTML = Hours < 10 ? `0${Hours}` : Hours ;

    let Minutes = Math.floor(DateDiff % (1000 * 60 * 60) / (1000 * 60)) ;

    document.getElementById("minutes").innerHTML = Minutes < 10 ? `0${Minutes}` : Minutes ;

    let Seconds = Math.floor(DateDiff % (1000 * 60) / (1000)) ;

    document.getElementById("seconds").innerHTML = Seconds < 10 ? `0${Seconds}` : Seconds ;

    if(DateDiff < 0) {

        clearInterval()
    };

} ,1000) ;