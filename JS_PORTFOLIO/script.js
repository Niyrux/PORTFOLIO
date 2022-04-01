$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $("header").show(500) ;
    } else {
        $("header").hide(500);
    }
    this.previousTop = currentTop;

});



var typed = new Typed (".typing", {
    strings : ["Bonjour !  je m'appelle Samuel","Je suis","Débutant","Passionné"],
    typeSpeed : 60 ,
    backSpeed : 20 , 
    loop : true
});

const spanButtons = document.querySelector('.competence');
const bar = document.querySelector('.skills') ;

console.log(spanButtons);


    spanButtons.addEventListener('click', () => {
        if(bar.style.display==='none'){
        bar.style.display='flex'
    } else {
        bar.style.display='none'
    }
});

