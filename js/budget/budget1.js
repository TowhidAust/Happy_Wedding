
// Budget and Choose tab on the top 
$(document).ready(function () {
 
    $(".Btn_Budget").click(function () {
        // over
        setTimeout(() => {
            $(".Main_Budget_Body").css("display", "none")  
        }, 300);   
    }
);

$(".Btn_Choose").click(function () {
    // over
    setTimeout(() => {
        $(".Main_Budget_Body").css("display", "block")
    }, 300);   
}
);

});

