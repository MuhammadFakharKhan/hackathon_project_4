interface UserFormData {
  name: string;
  email: string;
  education: string;
  workExperience: string;
  skills: string;
  profileimage: string;
}

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("resume-output") as HTMLDivElement;
  const resumeData = localStorage.getItem("resumeData");

  if (resumeData) {
    const data: UserFormData = JSON.parse(resumeData);

    output.innerHTML = `
      <div class="resume-header">
        <img src="${data.profileimage}" alt="Profile image" class="profile-image">
        <div class="personal-info">
          <h2 contenteditable="true" class="editable" data-field="name">${data.name}</h2>
          <p><strong>Email:</strong> <span contenteditable="true" class="editable" data-field="email">${data.email}</span></p>
        </div>
      </div>
      <div class="resume-section">
        <h3>Education</h3>
        <p contenteditable="true" class="editable" data-field="education">${data.education}</p>
      </div>
      <div class="resume-section">
        <h3>Work Experience</h3>
        <p contenteditable="true" class="editable" data-field="workExperience">${data.workExperience}</p>
      </div>
      <div class="resume-section">
        <h3>Skills</h3>
        <p contenteditable="true" class="editable" data-field="skills">${data.skills}</p>
      </div>
    `;

    const editableElements = document.querySelectorAll(".editable");

    editableElements.forEach(element => {
      element.addEventListener("blur", () => {
        const field = element.getAttribute("data-field") as keyof UserFormData;
        data[field] = element.textContent || "";
        localStorage.setItem("resumeData", JSON.stringify(data));
      });
    });
  }
});


  
  