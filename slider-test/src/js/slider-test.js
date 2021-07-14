
let prev = $('.button-prev'),
next = $('.button-next');
let currNum= 0;
let sliders = $('li');


let posArr= [
    [[0,0,6],[452, 67, 5],[572,86, 4],[692, 67, 3],[812, 46, 2],[931,26, 1]],
    [[931,26, 1],[0,0,6],[452, 67, 5],[572,86, 4],[692, 67, 3],[812, 46, 2]],
    [[812, 46, 2],[931,26, 1],[0,0,6],[452, 67, 5],[572,86, 4],[692, 67, 3]],
    [[692, 67, 3],[812, 46, 2],[931,26, 1],[0,0,6],[452, 67, 5],[572,86, 4]],
    [[572,86, 4],[692, 67, 3],[812, 46, 2],[931,26, 1],[0,0,6],[452, 67, 5]],
    [[452, 67, 5],[572,86, 4],[692, 67, 3],[812, 46, 2],[931,26, 1],[0,0,6]],
]

// console.log(sliders.length, posArr[0][0]);
function setPos() {
    $.each(sliders,function(idx,item){
        $(item).css({ left: posArr[currNum][idx][0], top: posArr[currNum][idx][1] ,'z-index':posArr[currNum][idx][2]});
    })
    sliders.removeClass('active');
    sliders.eq(currNum).addClass('active');

    
}
setPos();
prev.on('click',function(){
    if(currNum<=0){
        currNum = sliders.length-1;
    }else{
        currNum--;
    }
    setPos();
})

next.on('click',function(){

    if(currNum < sliders.length-1){
        currNum++;
    }else{
        currNum = 0;
    }
    setPos();
  
})

sliders.on('click', function(){
    currNum =$(this).index();
    console.log($(this).index());
    setPos();
})


