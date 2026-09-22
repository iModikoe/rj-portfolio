"""Build the project cover image from the project's own reported numbers.

The card beside it already carries the title and the headline metrics, so this
image is the chart alone — it should add information, not repeat it. The curves
come from reports/validation_threshold_analysis.csv; the chosen threshold from
reports/test_metrics.json. Nothing here is invented.
"""
import json
import os
from io import BytesIO
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import pandas as pd
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SITE_ROOT = Path(__file__).resolve().parents[1]
# The source project is expected as a sibling checkout of this repository.
# Override with PROJ=/path/to/checkout when it lives elsewhere.
PROJ = Path(os.environ.get("PROJ", SITE_ROOT.parent / "credit-default-risk"))
OUT = Path(os.environ.get("OUT", SITE_ROOT / "public/assets/projects/credit-default-risk.png"))

if not PROJ.exists():
    raise SystemExit(
        f"Source project not found at {PROJ}. "
        f"Clone https://github.com/iModikoe/credit-default-risk beside this repo, "
        f"or run with PROJ=/path/to/credit-default-risk"
    )

INK = "#101820"
INK_2 = "#3d4a54"
INK_3 = "#5a6771"
TEAL = "#097563"
TEAL_L = "#37e1bc"
INDIGO = "#4f46e5"
GREY = "#98a2a9"
PAPER = "#ffffff"
RULE = "#e2e6e4"

BOLD = "C:/Windows/Fonts/segoeuib.ttf"
SEMI = "C:/Windows/Fonts/seguisb.ttf"
REG = "C:/Windows/Fonts/segoeui.ttf"

W, H = 1600, 1200          # 4:3, matching the card aspect
PAD = 96
CHART_TOP = 250
CHART_BOTTOM = H - 210
CHART_W = W - PAD * 2
CHART_H = CHART_BOTTOM - CHART_TOP
DPI = 160

thresholds = pd.read_csv(f"{PROJ}/reports/validation_threshold_analysis.csv")
test = json.load(open(f"{PROJ}/reports/test_metrics.json"))
chosen = float(test["threshold"])

# ---- chart --------------------------------------------------------------
plt.rcParams.update({
    "font.family": "Segoe UI",
    "axes.edgecolor": RULE,
    "axes.labelcolor": INK_2,
    "xtick.color": INK_3,
    "ytick.color": INK_3,
    "text.color": INK_2,
})
fig, ax = plt.subplots(figsize=(CHART_W / DPI, CHART_H / DPI), dpi=DPI)
fig.patch.set_alpha(0)
ax.set_facecolor("none")

ax.fill_between(thresholds["threshold"], thresholds["precision"], thresholds["recall"],
                color=TEAL_L, alpha=0.14, zorder=1)
for column, colour, label in [("precision", TEAL, "Precision"),
                              ("recall", INDIGO, "Recall"),
                              ("f1", GREY, "F1")]:
    ax.plot(thresholds["threshold"], thresholds[column], color=colour, linewidth=3.4,
            solid_capstyle="round", label=label, zorder=3)

ax.axvline(chosen, color=INK, linewidth=1.5, linestyle=(0, (5, 4)), zorder=2)
row = thresholds.iloc[(thresholds["threshold"] - chosen).abs().argmin()]
for column, colour in [("precision", TEAL), ("recall", INDIGO)]:
    ax.scatter([chosen], [row[column]], s=90, color=colour, zorder=4,
               edgecolor=PAPER, linewidth=2.5)
ax.annotate(f"chosen threshold {chosen:.0%}", xy=(chosen, 0.975),
            xytext=(chosen + 0.012, 0.975), fontsize=13, color=INK, va="top")

ax.set_xlim(0.20, 0.75)
ax.set_ylim(0.0, 1.0)
ax.set_xlabel("Decision threshold", fontsize=13.5, labelpad=10)
ax.grid(True, color=RULE, linewidth=1)
ax.set_axisbelow(True)
for side in ("top", "right"):
    ax.spines[side].set_visible(False)
ax.tick_params(labelsize=12)
legend = ax.legend(frameon=False, loc="lower left", fontsize=13, ncol=3,
                   bbox_to_anchor=(0.0, 0.0), handlelength=1.7, columnspacing=2.0)
for text in legend.get_texts():
    text.set_color(INK_2)
fig.tight_layout(pad=0.4)

buffer = BytesIO()
fig.savefig(buffer, format="png", transparent=True)
plt.close(fig)
chart = Image.open(buffer).convert("RGBA").resize((CHART_W, CHART_H), Image.LANCZOS)

# ---- compose ------------------------------------------------------------
card = Image.new("RGB", (W, H), PAPER)
glow = Image.new("RGB", (W, H), PAPER)
ImageDraw.Draw(glow).ellipse([W - 760, -460, W + 380, 640], fill="#d6f3eb")
card = Image.blend(card, glow.filter(ImageFilter.GaussianBlur(120)), 0.9)
draw = ImageDraw.Draw(card)


def tracked(xy, text, font, fill, tracking=0.0):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


# Eyebrow
f_eyebrow = ImageFont.truetype(SEMI, 26)
draw.line([(PAD, PAD + 18), (PAD + 48, PAD + 18)], fill=TEAL, width=3)
tracked((PAD + 70, PAD + 4), "VALIDATION THRESHOLD TRADE-OFF", f_eyebrow, TEAL, 2.6)

# One explanatory line — what the reader should take from the chart.
f_lead = ImageFont.truetype(REG, 33)
draw.text((PAD, PAD + 66), "Raising the threshold buys precision and costs recall.", font=f_lead, fill=INK)
draw.text((PAD, PAD + 110), "50% was fixed before the test set was touched.", font=f_lead, fill=INK_3)

card.paste(chart, (PAD, CHART_TOP), chart)

# Footer caption
f_caption = ImageFont.truetype(SEMI, 23)
draw.line([(PAD, H - 132), (W - PAD, H - 132)], fill=RULE, width=2)
tracked((PAD, H - 104), "HISTGRADIENTBOOSTING  ·  VALIDATION SET  ·  4,800 CLIENTS", f_caption, INK_3, 1.8)

card.save(OUT, optimize=True)
print("saved", OUT, card.size)
