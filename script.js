// Simulasi penyimpanan data user (misalnya di localStorage atau sessionStorage)
// Anda dapat mengembangkan lebih lanjut untuk backend nyata.

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulasi validasi login
    if(username === "user" && password === "password") {
        alert("Login berhasil!");
        window.location.href = 'dashboard.html';
    } else {
        alert("Username atau password salah!");
    }
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulasi pendaftaran (simpan di localStorage)
    localStorage.setItem('username', username);
    localStorage.setItem('fullname', fullname);
    
    alert("Registrasi berhasil! Silakan login.");
    window.location.href = 'login.html';
});

document.getElementById('deposit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    
    // Simulasi penyimpanan uang
    let saldo = parseInt(localStorage.getItem('saldo') || '0');
    saldo += parseInt(amount);
    localStorage.setItem('saldo', saldo);
    
    alert(`Berhasil menyimpan Rp ${amount}`);
    window.location.href = 'dashboard.html';
});

document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const loanAmount = document.getElementById('loan-amount').value;
    
    // Simulasi pinjaman
    alert(`Pinjaman Rp ${loanAmount} telah diajukan.`);
});
