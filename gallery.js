const photocontainer = document.querySelector(".photos");
const photos = document.querySelectorAll('.photos img');
//moving variables
let counter = 1;
const size = photos[0].clientWidth;

photocontainer.style.transform = 'translateX('+ (-size * counter) + 'px)';

//buttons var
const nextbtn = document.querySelector('#nextbtn');
const prevbtn = document.querySelector('#prevbtn');

nextbtn.addEventListener('click' , function(){
    if(counter >= photos.length -1  ) return;
    photocontainer.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    photocontainer.style.transform = 'translateX('+ (-size * counter) + 'px)';
});
prevbtn.addEventListener('click' , function(){
    if(counter <= 0) return;
    photocontainer.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    photocontainer.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

photocontainer.addEventListener('transitionend' , function(){
    if(photos[counter].id === 'firstpc'){
       photocontainer.style.transition ='none';
       counter = 1;
       photocontainer.style.transform = 'translateX('+ (-size * counter) + 'px)';
    }
});

photocontainer.addEventListener('transitionend' , function(){
    if( photos[counter].id === 'lastpc'){
        photocontainer.style.transition = 'none';
        counter = photos.length - 2 ;
        photocontainer.style.transform = 'translateX('+ (-size * counter) + 'px)';
    }
});
