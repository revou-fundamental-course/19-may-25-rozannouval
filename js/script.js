// TYPEIT KONFIGURASI
new TypeIt("#typing", {
  speed: 50,
  waitUntilVisible: true,
})
  .type('"Everything is relatuve', { delay: 300 })
  .move(-2)
  .delete(1)
  .type("i")
  .move(null, { to: "END" })
  .type(" even tempelu")
  .pause(300)
  .delete(2)
  .type("rature when yu're")
  .move(-4)
  .type("o")
  .move(null, { to: "END" })
  .type(' near the sun."')
  .pause(500)
  .break({ delay: 500 })
  .break({ delay: 500 })
  .type("<em>– Albert Einstein</em>")
  .go();

// AOS KONFIGURASI
AOS.init();

// FEATHER ICONS KONFIGURASI
feather.replace();

// Mode konversi: true = Celsius ke Fahrenheit, false = Fahrenheit ke Celsius
let modeCelsiusToFahrenheit = true;

// VARIABEL untuk menangkap id
let inputCelsius = document.getElementById("input-celsius");
let inputFahrenheit = document.getElementById("input-fahrenheit");
let penjelasanSuhu = document.getElementById("detail-suhu");

// Fungsi untuk KONVERSI suhu
function konversiSuhu() {
  // Ambil nilai input berdasarkan mode
  let inputSuhu = modeCelsiusToFahrenheit
    ? inputCelsius.value
    : inputFahrenheit.value;

  // Validasi input - pastikan input adalah angka
  if (inputSuhu === "" || isNaN(inputSuhu)) {
    alert("Mohon masukkan angka yang valid!");
    return;
  }

  // Konversi input ke number
  const suhu = parseFloat(inputSuhu);
  let hasil;
  let penjelasan;

  // Logic konversi berdasarkan mode
  if (modeCelsiusToFahrenheit) {
    // Celsius ke Fahrenheit: F = (C × 9/5) + 32
    hasil = (suhu * 9) / 5 + 32;
    penjelasan = `${suhu}°C dikonversi ke Fahrenheit:\n(${suhu} × 9/5) + 32 = ${hasil.toFixed(
      2
    )}°F`;

    // Tampilkan hasil di input Fahrenheit
    inputFahrenheit.value = hasil.toFixed(2);
  } else {
    // Fahrenheit ke Celsius: C = (F - 32) × 5/9
    hasil = ((suhu - 32) * 5) / 9;
    penjelasan = `${suhu}°F dikonversi ke Celsius:\n(${suhu} - 32) × 5/9 = ${hasil.toFixed(
      2
    )}°C`;

    // Tampilkan hasil di input Celsius
    inputCelsius.value = hasil.toFixed(2);
  }

  // Tampilkan penjelasan di textarea
  penjelasanSuhu.value = penjelasan;
}

// Fungsi untuk reset form
function resetForm() {
  inputCelsius.value = "";
  inputFahrenheit.value = "";
  penjelasanSuhu.value = "";
}

// Fungsi untuk reverse mode konversi
function reverseMode() {
  modeCelsiusToFahrenheit = !modeCelsiusToFahrenheit;

  // Reset form saat mode berubah
  resetForm();

  // Ubah readonly status input
  if (modeCelsiusToFahrenheit) {
    inputCelsius.readOnly = false;
    // readonly ada dua karena setAttribute butuh 2 parameter wajib
    // inputFahrenheit.setAttribute("readonly", "readonly");
    inputFahrenheit.readOnly = true;
    inputCelsius.placeholder = "Masukkan Celsius...";
    inputFahrenheit.placeholder = "Hasil Fahrenheit";
  } else {
    inputFahrenheit.readOnly = false;
    // inputCelsius.setAttribute("readonly", "readonly");
    inputCelsius.readOnly = true;
    inputFahrenheit.placeholder = "Masukkan Fahrenheit...";
    inputCelsius.placeholder = "Hasil Celsius";
  }
}

// Event listener ketika halaman sudah dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Event listener untuk tombol konversi
  const tombolKonversi = document.querySelector(".btn-konversi");
  if (tombolKonversi) {
    tombolKonversi.addEventListener("click", function (e) {
      e.preventDefault();
      konversiSuhu();
    });
  }

  // Event listener untuk tombol reset
  const tombolReset = document.querySelector(".btn-reset");
  if (tombolReset) {
    tombolReset.addEventListener("click", function (e) {
      e.preventDefault();
      resetForm();
    });
  }

  // Event listener untuk tombol reverse
  const tombolReverse = document.querySelector(".btn-reverse");
  if (tombolReverse) {
    tombolReverse.addEventListener("click", function (e) {
      e.preventDefault();
      reverseMode();
    });
  }

  // Event listener untuk Enter key
  inputCelsius.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      konversiSuhu();
    }
  });

  inputFahrenheit.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      konversiSuhu();
    }
  });
});

