document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#studentForm");
  
    form.addEventListener("submit", function (e) {
      // Get form values
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const program = document.getElementById("program").value;
      const qualification = document.getElementById("qualification").value.trim();
      const percentage = document.getElementById("percentage").value.trim();
      const documentFile = document.getElementById("document").files[0];
  
      // Basic validations
      if (!firstName || !lastName || !email || !phone || !program || !qualification || !percentage || !documentFile) {
        alert("Please fill out all required fields.");
        e.preventDefault();
        return;
      }
  
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
      }
  
      // Percentage should be a number
      if (isNaN(percentage)) {
        alert("Please enter a valid numeric value for Percentage/CGPA.");
        e.preventDefault();
        return;
      }
  
      // Optional file size check (max 2MB)
      if (documentFile.size > 2 * 1024 * 1024) {
        alert("Uploaded file should not exceed 2MB.");
        e.preventDefault();
        return;
      }
  
      // If everything is valid
      alert("Thank you! Your details have been submitted.");
    });
  });
  