function displayProfileDropDown() {
    document.getElementById("Head_DropMenu").style.display = "block";
}

$("#Head_Item_Right_Image").hover(
    function () {
        $(this).removeClass('out').addClass('over');
    },
    function () {
        $(this).removeClass('over').addClass('out');
    }
);

$(".class").hover(
    function () {
        $(this).removeClass('out').addClass('over');
    },
    function () {
        $(this).removeClass('over').addClass('out');
    }
);

document.getElementById("Head_Menu").style.background-color="red";