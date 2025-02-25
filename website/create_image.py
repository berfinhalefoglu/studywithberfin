from PIL import Image, ImageDraw, ImageFont
import random

# Görsel boyutları
width = 1920
height = 1080

# Görsel oluştur
image = Image.new("RGB", (width, height), "black")
draw = ImageDraw.Draw(image)

# Yazı tipi ayarları (sistemde font yüklü olmalı)
try:
    font = ImageFont.truetype("arial.ttf", 14)  # Yazı boyutunu burada değiştirebilirsiniz
except IOError:
    font = ImageFont.load_default()

# Rastgele 1 ve 0 desenini oluştur
for y in range(0, height, 20):  # Y aralığı (satır yüksekliği)
    for x in range(0, width, 14):  # X aralığı (sütun genişliği)
        value = str(random.choice([0, 1]))  # Rastgele 1 veya 0 seç
        draw.text((x, y), value, font=font, fill="green")  # Metni yeşil renkte ekle

# Görseli kaydet
image.save("binary_background.png")
image.show()
