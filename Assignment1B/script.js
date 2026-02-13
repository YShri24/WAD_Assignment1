document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // DOB validation (must be 18+)
    let dobInput = document.getElementById("dob").value;
    let dob = new Date(dobInput);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
    }

    if (age < 18) {
    alert("You must be at least 18 years old .");
    return;
    }
    else if(age>60){
        alert("You must be at most 60 years old .");
        return;
    }

    // Get hobbies
    let hobbies = [];
    document.querySelectorAll(".hobby:checked").forEach(h => {
        hobbies.push(h.value);
    });

    // Other hobby
    if (document.getElementById("otherChk").checked) {
        let other = document.getElementById("otherText").value;
        if (other.trim() !== "") {
            hobbies.push(other);
        }
    }

    // Get gender
    let gender = document.querySelector("input[name='gender']:checked").value;

    // Collect form data
    let userData = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        dob: document.getElementById("dob").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        gender: gender,
        hobbies: hobbies
    };

    // Store in localStorage
    localStorage.setItem("user", JSON.stringify(userData));

   // Store in localStorage
localStorage.setItem("user", JSON.stringify(userData));

// Redirect to result page
window.location.href = "result.html";

});


// Show/Hide Password
document.getElementById("showPass").addEventListener("change", function() {
    let passField = document.getElementById("password");

    if (this.checked) {
        passField.type = "text";      // show password
    } else {
        passField.type = "password";  // hide password
    }
});

