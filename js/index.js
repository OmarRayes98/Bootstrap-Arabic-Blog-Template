const sr  = ScrollReveal ({
    origin : 'top',
    distance:'60px',
    duration:1500,
    delay :400,
    // reset:true

})

sr.reveal('.home , .news , .subscribe , footer');
sr.reveal('.about__img', {reset:true,origin: 'left'});
sr.reveal('.about__item', {reset:true,origin:'right'});
