"""Generate the social card, favicon and apple icon to match the live design.

Re-run this whenever the hero copy, the palette or the certification count
changes, so the share card never drifts from the site.
"""
import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

SITE_ROOT = Path(__file__).resolve().parents[1]
APP = SITE_ROOT / "app"

INK = "#101820"
INK_3 = "#5a6771"
TEAL = "#097563"
PAPER = "#ffffff"
RULE = "#e2e6e4"

BOLD = "C:/Windows/Fonts/segoeuib.ttf"
SEMI = "C:/Windows/Fonts/seguisb.ttf"
REG = "C:/Windows/Fonts/segoeui.ttf"


def read_facts() -> dict[str, str]:
    """Pull live values out of content/ so the card cannot go stale silently."""
    education = (SITE_ROOT / "content/education.ts").read_text(encoding="utf-8")
    experience = (SITE_ROOT / "content/experience.ts").read_text(encoding="utf-8")
    average = re.search(r'"Academic average", value: "([^"]+)"', education)
    started = re.search(r'dates:\s*"([^"]+?)\s*—', experience)
    certificates = len(re.findall(r'^\s{4}name:\s*"', education, flags=re.M))
    return {
        "since": (started.group(1) if started else "").replace("December", "Dec"),
        "average": average.group(1) if average else "",
        "certificates": str(certificates),
    }


def gradient_text(draw_size, text, font, start, end):
    """Ink-to-teal gradient text, matching the hero headline."""
    mask = Image.new("L", draw_size, 0)
    ImageDraw.Draw(mask).text((0, 0), text, font=font, fill=255)
    gradient = Image.new("RGB", draw_size, start)
    top = Image.new("RGB", draw_size, end)
    ramp = Image.new("L", draw_size)
    ramp.putdata([int(255 * (x / max(draw_size[0] - 1, 1))) for _ in range(draw_size[1]) for x in range(draw_size[0])])
    gradient = Image.composite(top, gradient, ramp)
    return gradient, mask


facts = read_facts()

# ---------- social card ----------
W, H = 1200, 630
card = Image.new("RGB", (W, H), PAPER)
glow = Image.new("RGB", (W, H), PAPER)
ImageDraw.Draw(glow).ellipse([W - 620, -380, W + 300, 520], fill="#d6f3eb")
card = Image.blend(card, glow.filter(ImageFilter.GaussianBlur(100)), 0.9)
draw = ImageDraw.Draw(card)
PAD = 72


def tracked(xy, text, font, fill, tracking=0.0):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


f_eyebrow = ImageFont.truetype(SEMI, 21)
draw.line([(PAD, PAD + 22), (PAD + 42, PAD + 22)], fill=TEAL, width=3)
tracked((PAD + 62, PAD + 10), "BASED IN CENTURION, SOUTH AFRICA", f_eyebrow, TEAL, 2.2)

f_title = ImageFont.truetype(BOLD, 86)
title_width = max(int(draw.textlength(line, font=f_title)) for line in ["JUNIOR DATA", "SCIENTIST"])
for index, line in enumerate(["JUNIOR DATA", "SCIENTIST"]):
    box = (title_width + 8, 120)
    gradient, mask = gradient_text(box, line, f_title, INK, TEAL)
    card.paste(gradient, (PAD - 4, PAD + 70 + index * 96), mask)
draw = ImageDraw.Draw(card)

f_name = ImageFont.truetype(SEMI, 25)
tracked((PAD, PAD + 282), "ITUMELENG RONALD JR MODIKOE", f_name, INK_3, 1.8)

f_lead = ImageFont.truetype(REG, 26)
draw.text((PAD, PAD + 326), "SQL, Python, machine learning and business intelligence —", font=f_lead, fill=INK)
draw.text((PAD, PAD + 360), "turning operational, customer and credit-risk data into decisions.", font=f_lead, fill=INK_3)

strip_y = H - 122
draw.line([(PAD, strip_y - 26), (W - PAD, strip_y - 26)], fill=RULE, width=2)
metrics = [
    (facts["since"], "AT DRIVE24 SINCE"),
    (facts["average"], "ACADEMIC AVERAGE"),
    (facts["certificates"], "CERTIFICATIONS"),
    ("NQF 8", "BCOM COMPUTING (BI)"),
]
f_value = ImageFont.truetype(BOLD, 40)
f_label = ImageFont.truetype(SEMI, 16)
cell = (W - PAD * 2) / len(metrics)
for index, (value, label) in enumerate(metrics):
    x = PAD + index * cell
    if index:
        draw.line([(x - 22, strip_y - 4), (x - 22, strip_y + 74)], fill=RULE, width=2)
    draw.text((x, strip_y), value, font=f_value, fill=TEAL if index < 3 else INK)
    tracked((x + 2, strip_y + 54), label, f_label, INK_3, 1.5)

card.save(APP / "opengraph-image.png", optimize=True)

# ---------- icons ----------
S = 512
icon = Image.new("RGBA", (S, S), (0, 0, 0, 0))
di = ImageDraw.Draw(icon)
di.rounded_rectangle([0, 0, S - 1, S - 1], radius=112, fill=TEAL)
fm = ImageFont.truetype(BOLD, 236)
left, top, right, bottom = di.textbbox((0, 0), "IM", font=fm)
di.text(((S - (right - left)) / 2 - left, (S - (bottom - top)) / 2 - top), "IM", font=fm, fill=PAPER)
icon.save(APP / "icon.png")

A = 180
apple = Image.new("RGB", (A, A), TEAL)
da = ImageDraw.Draw(apple)
fa = ImageFont.truetype(BOLD, 84)
left, top, right, bottom = da.textbbox((0, 0), "IM", font=fa)
da.text(((A - (right - left)) / 2 - left, (A - (bottom - top)) / 2 - top), "IM", font=fa, fill=PAPER)
apple.save(APP / "apple-icon.png")

print("regenerated social card and icons from live content:", facts)
