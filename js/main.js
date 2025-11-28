// Mostrar/ocultar la contraseña
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('input[name="password"]');
togglePassword.addEventListener('click', function () {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// Validación simple al enviar el formulario
document.getElementById('registerForm').addEventListener('submit', function (e) {
    const nombre = this.nombre.value.trim();
    const email = this.email.value.trim();
    const password = this.password.value;
    const fecha = this.fecha.value;
    if (!nombre || !email || !password || !fecha) {
        alert('Por favor, complete todos los campos.');
        e.preventDefault();
    } else if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        e.preventDefault();
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Ingrese un correo electrónico válido.');
        e.preventDefault();
    }
});
