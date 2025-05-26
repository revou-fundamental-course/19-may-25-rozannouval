// TYPEIT KONFIGURASI
new TypeIt("#typing", {
  speed: 50,
  waitUntilVisible: true,
})
  .type("Everything is relatuve", { delay: 300 })
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
  .type(" near the sun.")
  .pause(500)
  .break({ delay: 500 })
  .break({ delay: 500 })
  .type("<em>– Albert Einstein</em>")
  .go();

// AOS KONFIGURASI
AOS.init();

// FEATHER ICONS KONFIGURASI
feather.replace();
