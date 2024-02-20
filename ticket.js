document.getElementById("buy-ticket-btn").addEventListener('click', function () {
    document.getElementById("poribohon-section").scrollIntoView({ behavior: "smooth" });
});



let remainingButton = 40;
let selectedSeat = [];

function handleButtonClick(buttonIndex) {
    const button = document.getElementById(`button${buttonIndex}`);
    const spanTag = document.getElementById("spanTag");
    const badge = document.getElementById("badge");
    const totalBdt = document.getElementById("total-bdt");
    const grandTotal = document.getElementById("grand-total");
    const seatName = document.getElementById("seat-name");
    const phoneNumber = document.getElementById("phone-number");


    if (button && !button.disabled) {
        button.disabled = true;
        button.style.backgroundColor = "#1DD100"
        button.style.color = "white"

        spanTag.innerText = parseInt(spanTag.innerText) - 1;
        badge.innerText = parseInt(badge.innerText) + 1;
        totalBdt.innerText = parseInt(totalBdt.innerText) + 550;
        grandTotal.innerText = totalBdt.innerText;
        document.getElementById('seat-name').innerText = button.innerText;


        selectedSeat.push(buttonIndex);
        checkNextBtnStatus();


        remainingButton--;

        if (remainingButton === 0) {
            alert('All seat booked!');
        }
    }
}
function checkNextBtnStatus(){
    const phoneNumber = document.getElementById('phone-number').ariaValueMax.trim();
    const nextBtn = document.getElementById(next-btn);

    if (selectedSeat.length > 0 && phoneNumber !== " ") {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}
function handleNextBtn() {
    const successModal = document.getElementById("success-modal");
    successModal.style.display = "block";
}











mmmmmmmmm
// let selectedButton = -1;

// function handleButtonClick (buttonNumber) {
//     const button = document.getElementById(`button${buttonNumber}`);
//     if (button.disabled) {
//         return;
//     }
//     selectedButton = buttonNumber;
//     button.classList.add.apply("green");
//     document.getElementById('spanTag').innerText = 39 - buttonNumber;
//     document.getElementById("badge").innetText = 1;
//     document.getElementById('seat-name').innerText = button.innerText;
//     document.getElementById("total-bdt").innerText = 550;

//     let grandTotal = 0;
//     for ( let i = 0; i <= 40, i++) {
//         grandTotal += parseInt(document.getElementById(`total-bdt`).innerText)
//     }
//     document.getElementById('grand-total').innerText = grandTotal;

//     button.disabled = true;

// }
mmmmmmmmm


// const buttons = document.querySelectorAll('[id^="button"]');
// const spanTag = document.getElementById("spanTag");
// const badge = document.getElementById("badge");
// const seatName = document.getElementById("seat-name");
// const totalBdt = document.getElementById("total-bdt");
// const grandTotal = document.getElementById("grand-total");

// function handleButtonClick(index) {
//     const button = buttons[index];
//     if (!button.disabled) {
//         button.classList.add("selected");
//         spanTag.innerText = buttons.length - index;
//         badge.innerText = parseInt(badge.innerText) + 1;
//         seatName.innerText = `seat $ {buttons.length - index}`;
//         totalBdt.innerText = parseInt(totalBdt.innerText) + 550;
//         grandTotal.innerText = totalBdt.innerText;
//         button.disabled = true;
//     }
// };



