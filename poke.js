$(function(){
    let poke = [];
    let box = $(".box");
    let colorArr = ["s","h","d","c"];
    let flag = {};
    for (let i = 0; i < 52; i++){
        let index = Math.floor(Math.random()*colorArr.length);
        let color = colorArr[index];
        let number = Math.round(Math.random()*12+1);
        while (flag[color+"_"+number]) {
            index = Math.floor(Math.random()*colorArr.length);
            color = colorArr[index];
            number = Math.round(Math.random()*12+1);
        }
        poke.push({color,number});
        flag[color+"_"+number] = true;
    }

    let index = -1;
    for (let i = 0; i < 6; i++){
        for(let j = 0;j <= i; j++){
            index++;
            let obj = poke[index];
            let lefts = 350 - 50*i + 100*j,tops = 70 * i;
            $("<div>")
                .addClass("poke").appendTo(".box")
                .css({backgroundImage:`url(./imgs/${obj.number}${obj.color}.jpg)`})
                .attr({"id":i+"_"+j})
                .data("number",obj.number)
                .delay(index*30)
                .animate({left:lefts,top:tops,opacity:1})
        }
    }

    for(;index < 52; index++){
        let obj = poke[index];
        let lefts = 20*(index-19);
        $("<div>")
            .addClass("poke").addClass("left").appendTo(".box")
            .css({backgroundImage:`url(./imgs/${obj.number}${obj.color}.jpg)`})
            .attr({"id":index})
            .data("number",obj.number)
            .delay(index*30)
            .animate({left:lefts,top:520,opacity:1})
    }

    let first = null, itgo = true;
    box.on("click",".poke",function(){
        if (!itgo) {
            return;
        }
        itgo = false;
        let This = $(this);
        let [i,j] = This.attr("id").split("_");
        let id1 = i*1+1+"_"+j*1,  id2 = i*1+1+"_"+(j*1+1);

        //通过检测id1和id2的长度来检测是都有元素遮挡当前点击的id，有则人return；
        if ($("#"+id1).length || $("#"+id2).length) {
            return;
        }

        //判断是否动态添加了active类来实现点击第二次让其回到原位
        if (This.hasClass("active")) {
            This.removeClass("active").animate({top :"+=60"});
        }else {
            This.addClass("active").animate({top :"-=60"});
        }
        itgo = true;
        //定义first等于上次this，else中判断first与本次点击This是否符合设定条件
        if (!first) {
            first = This;
        }else{
            let number1 = first.data("number") , number2 = This.data("number");
            if (number1 + number2 ==14){
                $(".active").animate({top :0,left :700},function () {
                    $(this).remove();
                })
            }else{
                $(".active").animate({top :"+=50"},function () {
                    $(".active").removeClass("active");
                });
            }
            first = null;//两次点击之后回复first状态
        }

    })

    // let Z_index = 0;
    // $(".rightBtn").on("click",function(){
    //     $(".left").last().css("zIndex",Z_index++).animate({left:700},function(){
    //         $(this).removeClass("left").addClass("right");
    //     })
    // })
    // $(".leftBtn").on("click",function(){
    //     $(".right").first().css("zIndex",Z_index++).animate({left:0},function(){
    //         $(this).removeClass("right").addClass("left");
    //     })
    // })

})