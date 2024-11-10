document.addEventListener("DOMContentLoaded", function () {
    var output = document.getElementById("resume-output");
    var resumeData = localStorage.getItem("resumeData");
    if (resumeData) {
        var data_1 = JSON.parse(resumeData);
        output.innerHTML = "\n      <div class=\"resume-header\">\n        <img src=\"".concat(data_1.profileimage, "\" alt=\"Profile image\" class=\"profile-image\">\n        <div class=\"personal-info\">\n          <h2 contenteditable=\"true\" class=\"editable\" data-field=\"name\">").concat(data_1.name, "</h2>\n          <p><strong>Email:</strong> <span contenteditable=\"true\" class=\"editable\" data-field=\"email\">").concat(data_1.email, "</span></p>\n        </div>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Education</h3>\n        <p contenteditable=\"true\" class=\"editable\" data-field=\"education\">").concat(data_1.education, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\" class=\"editable\" data-field=\"workExperience\">").concat(data_1.workExperience, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Skills</h3>\n        <p contenteditable=\"true\" class=\"editable\" data-field=\"skills\">").concat(data_1.skills, "</p>\n      </div>\n    ");
        var editableElements = document.querySelectorAll(".editable");
        editableElements.forEach(function (element) {
            element.addEventListener("blur", function () {
                var field = element.getAttribute("data-field");
                data_1[field] = element.textContent || "";
                localStorage.setItem("resumeData", JSON.stringify(data_1));
            });
        });
    }
});
