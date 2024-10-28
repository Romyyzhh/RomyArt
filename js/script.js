$(document).ready(function() {
    // Form Validation
    $("#registrationForm").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var package = $("#package").val();
        var terms = $("#terms").is(":checked");

        if (name === "" || email === "" || password === "" || !terms) {
            alert("Harap isi semua field dan setujui syarat dan ketentuan.");
        } else {
            // Submit form data (replace with your actual submission logic)
            alert("Form submitted successfully!");
        }
    });

    // Hover Effects
    $(".btn").hover(function() {
        $(this).addClass("animated-text");
    }, function() {
        $(this).removeClass("animated-text");
    });

    // Add elements to feature list
    $("#addFeatureBtn").click(function() {
        var feature = $("#newFeature").val();
        if (feature !== "") {
            $("#featureList").append("<li class='list-group-item'>" + feature + "</li>");
            $("#newFeature").val("");
        }
    });
});