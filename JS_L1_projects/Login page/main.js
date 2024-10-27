const button = document.getElementsByClassName("toggleButton")
const sidebar=document.querySelector(".sidebar");
function toggle(){

    if (sidebar.style.display === "flex") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "flex";
    }
}


function checkPassword(){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const predefinedUsername = 'Nexcentia';
    const predefinedPassword = '1234';
    if (username === predefinedUsername && password === predefinedPassword) {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'shopping.html'; // Redirect to another page after 1 second
        }, 500);
    } else {
        messageElement.textContent = 'Invalid username or password';
        messageElement.style.color = 'red';
    }
}