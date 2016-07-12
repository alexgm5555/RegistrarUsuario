$(document).ready(function() {
    $("#phone_number").kendoMaskedTextBox({
        mask: "(999) 000-0000"
    });

    $("#credit_card").kendoMaskedTextBox({
        mask: "0000 0000 0000 0000"
    });

    $("#ssn").kendoMaskedTextBox({
        mask: "000-00-0000"
    });

    $("#postcode").kendoMaskedTextBox({
        mask: "L0L 0LL"
    });
});