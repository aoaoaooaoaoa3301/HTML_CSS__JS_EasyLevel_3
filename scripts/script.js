let num_variant;
const variantButtons = document.querySelectorAll('.button_variant');
const selected_text = document.querySelector('.selected_text');



variantButtons.forEach(button => {
    button.addEventListener('click', function() {
        num_variant = this.getAttribute('name');
        selected_text.textContent = `You selected ${num_variant} out of 5`
        console.log(num_variant);
    });
});


document.querySelector(".button_submite").addEventListener("click", function() {
    document.querySelector(".main_show").className = "main";
    document.querySelector(".main_2").className = "main_2_show";

});

