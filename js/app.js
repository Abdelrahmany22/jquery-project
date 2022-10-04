$(document).ready(function () {
         $('.con').animate({
            width:"100%",
         },2000,function(){
            $('.con').animate({
                height:"320vh",
            }, 2000,  function(){
                $('.con h1').slideDown(1000,
                    function(){
                        $('.con .card').eq(0).slideDown(2000,function(){
                            $('.con .card').eq(1).slideDown(2000,function(){
                                $('.con .card').eq(2).slideDown(2000 )
                            } )
                        } )
                    })
            })
         })

        })

