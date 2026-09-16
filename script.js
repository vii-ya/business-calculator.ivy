<script>

const ACCESS_PASSWORD = "123456";

function checkPassword() {

    const enteredPassword =
        document.getElementById("passwordInput").value;

    if (enteredPassword === ACCESS_PASSWORD) {

        document.getElementById("loginScreen").style.display = "none";

        document.getElementById("appContent").style.display = "block";

    } else {

        document.getElementById("loginMessage").textContent =
            "❌ Wrong password";

    }

}

</script>
