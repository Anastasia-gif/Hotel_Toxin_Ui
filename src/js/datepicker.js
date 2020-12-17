let arrival = $("#arrival");
let departure = $("#departure");
let datepicker = $("#datepicker");

datepicker.datepicker({
    range: true,
    onSelect: function (e) {
        let dates = e.split(',');
        arrival.val(dates[0]);
        departure.val(dates[1]);
    }
})

function setPosDatepicker() {
    let pos=arrival.position();
    datepicker.css({
        position: "absolute",
        marginLeft: 0, marginTop: 0,
        top: pos.top, left: pos.left
    })
}

departure.click(function () {
    setPosDatepicker();
    datepicker.focus()
})
arrival.click(function () {
    setPosDatepicker();
    datepicker.focus()
})