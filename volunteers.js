function addVolunteer() {
    // Retrieve values from the input fields
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    // Check if both fields are filled
    if (firstName && lastName) {
        // Combine names and add to the list
        const volunteerList = document.getElementById("volunteerList");
        volunteerList.value += `${firstName} ${lastName}\n`;

        // Clear input fields and focus on first name for the next entry
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("firstName").focus();
    } else {
        alert("Please enter both first and last names.");
    }
}

function clearVolunteers() {
    document.getElementById("volunteerList").value = "";
}

function sortVolunteers() {
    const volunteerList = document.getElementById("volunteerList");
    const volunteers = volunteerList.value.trim().split("\n");

    if (volunteers[0]) {
        volunteers.sort();
        volunteerList.value = volunteers.join("\n");
    }
}
