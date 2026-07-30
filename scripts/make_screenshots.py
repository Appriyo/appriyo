"""Generate placeholder product screenshots as WebP files under 150KB.

Per docs/DESIGN.md §11, screenshots must be ≤150KB and remain legible.
These are explicit placeholders the user said they will replace later.
Each one renders a fake dashboard frame with a labeled "PLACEHOLDER" tag
visible so a reviewer can see at a glance that the real assets have not
arrived yet.
"""
from PIL import Image, ImageDraw, ImageFont
import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "img", "screenshots")
os.makedirs(OUT_DIR, exist_ok=True)

# Try a few common Windows font paths; fall back to default.
FONT_CANDIDATES = [
    r"C:\Windows\Fonts\segoeuib.ttf",  # bold
    r"C:\Windows\Fonts\segoeui.ttf",   # regular
    r"C:\Windows\Fonts\arial.ttf",
    r"C:\Windows\Fonts\consola.ttf",
]


def load_font(size):
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def make_image(filename, title, accent=(166, 57, 43)):
    width, height = 1280, 800
    img = Image.new("RGB", (width, height), (247, 245, 240))  # paper
    draw = ImageDraw.Draw(img)

    # Top bar
    draw.rectangle([0, 0, width, 56], fill=(255, 255, 255), outline=(218, 211, 194))
    draw.text((24, 18), title, font=load_font(20), fill=(27, 42, 58))

    # Sidebar
    draw.rectangle([0, 56, 220, height], fill=(255, 255, 255), outline=(218, 211, 194))
    for i, label in enumerate(["Dashboard", "Jobs", "Customers", "Reports", "Settings"]):
        draw.text((24, 90 + i * 44), label, font=load_font(16), fill=(76, 92, 110))

    # Stat cards
    card_y = 90
    for i in range(3):
        x0 = 260 + i * 320
        draw.rectangle([x0, card_y, x0 + 290, card_y + 110],
                        fill=(255, 255, 255), outline=(218, 211, 194))
        draw.text((x0 + 16, card_y + 14), f"Stat {i+1}", font=load_font(14), fill=(124, 136, 150))
        big = load_font(36)
        draw.text((x0 + 16, card_y + 40), "1,234", font=big, fill=(27, 42, 58))

    # Table placeholder
    table_top = 230
    draw.rectangle([260, table_top, width - 40, table_top + 36],
                    fill=(239, 235, 225), outline=(184, 175, 152))
    headers = ["Customer", "Device", "Status", "Drop-off", "Due"]
    col_x = [270, 460, 700, 870, 1040]
    for hx, h in zip(col_x, headers):
        draw.text((hx, table_top + 9), h, font=load_font(13), fill=(76, 92, 110))

    rows = [
        ("Rahim",   "iPhone 11",     "In progress", "2026-07-22", "2026-07-30"),
        ("Karim",   "Samsung A52",   "Ready",       "2026-07-20", "2026-07-27"),
        ("Selim",   "Realme 7",      "Received",    "2026-07-26", "2026-08-02"),
        ("Jasim",   "Xiaomi Note",   "Delivered",   "2026-07-18", "2026-07-24"),
        ("Mahmud",  "Oppo A15",      "In progress", "2026-07-25", "2026-08-01"),
    ]
    for i, row in enumerate(rows):
        y = table_top + 50 + i * 50
        if i % 2 == 0:
            draw.rectangle([260, y - 6, width - 40, y + 30], fill=(247, 245, 240))
        for cx, val in zip(col_x, row):
            draw.text((cx, y), val, font=load_font(14), fill=(27, 42, 58))

    # Big PLACEHOLDER stamp
    stamp_font = load_font(28)
    msg = "PLACEHOLDER — replace before launch"
    bbox = draw.textbbox((0, 0), msg, font=stamp_font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pad = 18
    sx0 = (width - tw) // 2 - pad
    sy0 = height - 100
    sx1 = sx0 + tw + pad * 2
    sy1 = sy0 + th + pad
    draw.rectangle([sx0, sy0, sx1, sy1], outline=accent, width=3)
    draw.text((sx0 + pad, sy0 + pad - 4), msg, font=stamp_font, fill=accent)

    out_path = os.path.join(OUT_DIR, filename)
    img.save(out_path, "WEBP", quality=80, method=6)
    size_kb = os.path.getsize(out_path) / 1024
    print(f"  {filename}: {size_kb:.1f} KB")


if __name__ == "__main__":
    make_image("amar-repair-dashboard.webp", "Amar Repair — Dashboard")
    make_image("amar-batch-dashboard.webp",  "Amar Batch — Dashboard")
    print("Done.")