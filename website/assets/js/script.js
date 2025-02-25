//QUOTE İÇİN KODLAR
document.addEventListener('DOMContentLoaded', function () {
    const quoteContainer = document.querySelector('.quote-slider');

    // quotes.json dosyasından veri çek
    fetch('./quotes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON dosyası yüklenemedi!');
            }
            return response.json();
        })
        .then(data => {
            let currentIndex = 0;

            // Alıntıyı göster
            function showQuote(index) {
                quoteContainer.textContent = `"${data[index]}"`;
            }

            // Alıntıları 5 saniyede bir değiştir
            setInterval(() => {
                currentIndex = (currentIndex + 1) % data.length;
                showQuote(currentIndex);
            }, 10000);

            // İlk alıntıyı başlat
            showQuote(currentIndex);
        })
        .catch(error => {
            console.error('Hata:', error);
            quoteContainer.textContent = "Quotes could not be loaded.";
        });
});


fetch('./quotes.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
