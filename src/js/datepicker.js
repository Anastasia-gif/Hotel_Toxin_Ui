function installRangeDatepicker(fieldFrom, fieldTo) {

    let arrival = $(fieldFrom);
    let departure = $(fieldTo);
    let datepicker = document.createElement("input");
    datepicker.style.visibility = 'hidden';
    datepicker.style.position = 'absolute';
    datepicker.style.margin = '0';
    datepicker.style.width = '0';
    arrival[0].parentNode.insertBefore(datepicker, arrival[0]);

    function setPosDatepicker() {
        let pos = arrival.position();
        $(datepicker).css({
            position: "absolute",
            marginLeft: 0, marginTop: 0,
            top: pos.top, left: pos.left
        })
    }

    departure.click(function () {
        setPosDatepicker();
        $(datepicker).focus();
    })
    arrival.click(function () {
        setPosDatepicker();
        $(datepicker).focus();
    })

    $(datepicker).datepicker({
        range: true,
        onSelect: function (e) {
            let dates = e.split(',');
            arrival.val(dates[0]);
            departure.val(dates[1]);
            // if(dates.length===2){
            //     datepicker.datepicker().data().datepicker.hide();
            // }
        },
        onRenderCell(date, cellType) {
            return {
                html: '<div><div>' + date.getDate() + '</div></div>',/// Кастомный контент ячейки
            }
        },
        clearButton: true,
    })

    let htmlCustomBtn = document.createElement("button");
    htmlCustomBtn.classList.add('datepicker--button');
    htmlCustomBtn.innerText = "Применить"
    htmlCustomBtn.onclick = function () {
        $(datepicker).data().datepicker.hide();
    };
    $(datepicker).data().datepicker.$datepicker[0]
        .getElementsByClassName( 'datepicker--buttons')[0]
        .appendChild(htmlCustomBtn);

}

installRangeDatepicker('#arrival', '#departure');