let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah reload halaman

        // Ambil semua input dan textarea dari form
        const inputs = contactForm.querySelectorAll("input, textarea");
        let isFormValid = true;

        // Periksa setiap input dan textarea
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isFormValid = false;
                // Tambahkan pesan error (opsional: tampilkan notifikasi)
                alert("Please fill out the " + input.placeholder + " field.");
                input.focus();
                return;
            }
        });

        if (isFormValid) {
            // Simpan status bahwa form telah dikirim
            localStorage.setItem("formSubmitted", "true");

            // Arahkan ke halaman "Thank You"
            window.location.href = "../confirm/thank_you.html";
        }
    });
});

