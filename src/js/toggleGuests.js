window.onload = function () {
    let t = document.getElementById("guests");
    let idElem = $("#guests");
    let flag = true;
    idElem.click(function (e) {
        let x = t.clientWidth - e.clientX;
        if (x < 44) {
            $("#toggleMenu").slideToggle("slow");
            if (flag) {
                $(this).addClass("toggle-input-open");
                $("#toggleMenu").addClass("toggle-input-open");
            } else {
                $("#guests").removeClass("toggle-input-open");
                $("#toggleMenu").removeClass("toggle-input-open");
            }
            flag = !flag;
        }

    })
    idElem.mousemove(function (e) {
        let x = t.clientWidth - e.clientX;
        if (x < 44) {
            t.style.cursor = 'pointer';
        } else {
            t.style.cursor = 'default';
        }
    })
    let bgPlus = $(".bg-plus");
    let buttonClear = $(".button-clear-hidden");

    bgPlus.click(function (e) {
        let adultsUser = $(e.currentTarget.previousElementSibling);
        let buttonSub = e.currentTarget.previousElementSibling.previousElementSibling;
        let val = parseInt(adultsUser.val());
        if (val === 0) {
            buttonSub.classList.remove("bg-disabled")
        }
        adultsUser.val(val + 1);
        adultsUser.change();
        checkInput();
    })
    let bgSub = $(".bg-minus")
    bgSub.click(function (e) {
        let adultsUser = $(e.currentTarget.nextElementSibling);
        let buttonAdd = e.currentTarget.nextElementSibling.nextElementSibling;
        let val = parseInt(adultsUser.val());
        if (val === 0) {
            return;
        }
        val--;
        adultsUser.val(val);
        adultsUser.change();
        checkInput();
        if (val === 0) {
            e.currentTarget.classList.add("bg-disabled")
        }
    })
    function checkInput() {
        let elements = $(".toggle-menu__input");
        let flag = false;
        for (let e of elements) {
            if (+e.value != 0) {
                flag = true;
                break;
            }
        }
        if (flag) {
            buttonClear.removeClass("button-clear-hidden");
        } else {
            buttonClear.addClass("button-clear-hidden");
        }
    }
}