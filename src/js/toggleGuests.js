window.onload = function () {
    let t = document.getElementById("guests");
    let idElem = $("#guests");
    let flag = true;
    let elements = $(".toggle-menu__input");
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
            t.style.color = "rgba(31, 32, 65, 0.75)";
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

        adultsUser.val(val + 1);
        adultsUser.change();
        checkInput();
        sumFields();
    })
    let bgSub = $(".bg-minus")
    bgSub.click(function (e) {
        let adultsUser = $(e.currentTarget.nextElementSibling);
        let buttonAdd = e.currentTarget.nextElementSibling.nextElementSibling;
        let val = parseInt(adultsUser.val());
        if (val == 0) {
            return;
        }
        val--;
        adultsUser.val(val);
        adultsUser.change();
        checkInput();
        sumFields();
        if (val === 0) {
            e.currentTarget.classList.add("bg-disabled")
        }
    })

    function checkInput() {
        let flag = false;
        for (let e of elements) {
            let buttonSub=e.previousElementSibling;
            if (+e.value == 0) {
                buttonSub.classList.add("bg-disabled")
            } else {
                flag = true;
                buttonSub.classList.remove("bg-disabled")
            }
        }
        if (flag) {
            buttonClear.removeClass("button-clear-hidden");
        } else {
            buttonClear.addClass("button-clear-hidden");
        }
    }

    /**
     * суммируем поля
     */
    function sumFields() {
        let sum = 0;
        for (let e of elements) {
            sum += +e.value;
        }
        let t = sum + '';
        t = +t.charAt(t.length - 1);
        if (sum == 0) {
            sum = ""
        } else if (sum >= 5 && sum < 20) {
            sum += ' гостей'
        } else if (t == 1) {
            sum += ' гость'
        } else if (t < 5) {
            sum += ' гостя'
        } else {
            sum += ' гостей'
        }
        $("#guests").val(sum);
    }

    $("#butClear").click(function(){
        elements.val(0);
        checkInput();
        sumFields();
    })

    $("#butApple").click(function(){
        $("#toggleMenu").hide();
        $("#guests").removeClass("toggle-input-open");
    })
}