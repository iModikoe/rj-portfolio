"""Build the fleet-predictive-maintenance cover from the project's own reports.

The card beside it already carries the title and headline metrics, so this image
is the chart alone. Points come from reports/test_predictions.csv (the 100
official NASA test engines) and the error band from reports/test_metrics.json.
Nothing here is invented.

Run with PROJ pointing at a checkout of
https://github.com/iModikoe/fleet-predictive-maintenance
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
PROJ = Path(os.environ.get("PROJ", SITE_ROOT.parent / "fleet-predictive-maintenance"))
OUT = Path(os.environ.get("OUT", SITE_ROOT / "public/assets/projects/fleet-predictive-maintenance.png"))

if not PROJ.exists():
    raise SystemExit(
        f"Source project not found at {PROJ}. "
        f"Clone https://github.com/iModikoe/fleet-predictive-maintenance beside this repo, "
        f"or run with PROJ=/path/to/fleet-predictive-maintenance"
    )

INK = "#101820"
INK_2 = "#3d4a54"
INK_3 = "#5a6771"
TEAL = "#097563"
TEAL_L = "#37e1bc"
PAPER = "#ffffff"
RULE = "#e2e6e4"

BOLD = "C:/Windows/Fonts/segoeuib.ttf"
SEMI = "C:/Windows/Fonts/seguisb.ttf"
REG = "C:/Windows/Fonts/segoeui.ttf"

W, H = 1600, 1200
PAD = 96
# Actual-vs-predicted needs an equal aspect for the identity line to read as
# 45 degrees, so the chart is square and the copy sits in the left column.
CHART_SIDE = 760
CHART_X = W - PAD - CHART_SIDE
CHART_Y = 210
TEXT_W = CHART_X - PAD - 56
DPI = 160

predictions = pd.read_csv(f"{PROJ}/reports/test_predictions.csv")
test = json.load(open(f"{PROJ}/reports/test_metrics.json"))
mae = test["mae"]
cap = 125

plt.rcParams.update({
    "font.family": "Segoe UI",
    "axes.edgecolor": RULE,
    "axes.labelcolor": INK_2,
    "xtick.color": INK_3,
    "ytick.color": INK_3,
    "text.color": INK_2,
})
fig, ax = plt.subplots(figsize=(CHART_SIDE / DPI, CHART_SIDE / DPI), dpi=DPI)
fig.patch.set_alpha(0)
ax.set_facecolor("none")

limit = [0, cap]
# ±MAE band around a perfect prediction
ax.fill_between(limit, [limit[0] - mae, limit[1] - mae], [limit[0] + mae, limit[1] + mae],
                color=TEAL_L, alpha=0.18, zorder=1, label=f"±{mae:.1f} cycles (MAE)")
ax.plot(limit, limit, linestyle=(0, (5, 4)), color=INK, linewidth=1.6, zorder=3,
        label="perfect prediction")
ax.scatter(predictions["actual_rul"], predictions["predicted_rul"], s=78, color=TEAL,
           alpha=0.62, edgecolor=PAPER, linewidth=1.2, zorder=4, label="engine")

ax.set_xlim(0, cap)
ax.set_ylim(0, cap)
ax.set_xlabel("Actual remaining useful life (cycles)", fontsize=13.5, labelpad=10)
ax.set_ylabel("Predicted (cycles)", fontsize=13.5, labelpad=10)
ax.grid(True, color=RULE, linewidth=1)
ax.set_axisbelow(True)
for side in ("top", "right"):
    ax.spines[side].set_visible(False)
ax.tick_params(labelsize=12)
ax.set_aspect("equal", adjustable="box")
legend = ax.legend(frameon=False, loc="upper left", fontsize=12, handlelength=1.6,
                   borderpad=0.2, labelspacing=0.5, framealpha=0)
for text in legend.get_texts():
    text.set_color(INK_2)
fig.tight_layout(pad=0.4)

buffer = BytesIO()
fig.savefig(buffer, format="png", transparent=True)
plt.close(fig)
chart = Image.open(buffer).convert("RGBA").resize((CHART_SIDE, CHART_SIDE), Image.LANCZOS)

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


f_eyebrow = ImageFont.truetype(SEMI, 25)
draw.line([(PAD, PAD + 60), (PAD + 48, PAD + 60)], fill=TEAL, width=3)
tracked((PAD + 70, PAD + 46), "OFFICIAL NASA TEST ENGINES", f_eyebrow, TEAL, 2.4)


def wrap(text, font, width):
    words, lines, line = text.split(), [], ""
    for word in words:
        trial = f"{line} {word}".strip()
        if draw.textlength(trial, font=font) <= width:
            line = trial
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


f_head = ImageFont.truetype(BOLD, 44)
y = PAD + 116
for line in wrap("Predicted against actual life for 100 held-out engines.", f_head, TEXT_W):
    draw.text((PAD, y), line, font=f_head, fill=INK)
    y += 58

f_body = ImageFont.truetype(REG, 30)
y += 18
for line in wrap("Whole engines were held out, so no cycle of a test engine was ever seen in training.",
                 f_body, TEXT_W):
    draw.text((PAD, y), line, font=f_body, fill=INK_3)
    y += 42

# Metric stack, left column
y += 46
f_value = ImageFont.truetype(BOLD, 50)
f_label = ImageFont.truetype(SEMI, 22)
for value, label in [
    (f"{test['mae']:.1f}", "MEAN ABSOLUTE ERROR (CYCLES)"),
    (f"{test['rmse']:.1f}", "RMSE (CYCLES)"),
    (f"{test['r2']:.2f}", "R² ON TEST ENGINES"),
]:
    draw.line([(PAD, y - 18), (PAD + TEXT_W, y - 18)], fill=RULE, width=2)
    draw.text((PAD, y), value, font=f_value, fill=TEAL)
    tracked((PAD + draw.textlength(value, font=f_value) + 22, y + 22), label, f_label, INK_3, 1.6)
    y += 96

card.paste(chart, (CHART_X, CHART_Y), chart)

f_caption = ImageFont.truetype(SEMI, 23)
tracked((PAD, H - PAD - 26), "HISTGRADIENTBOOSTING  ·  NASA C-MAPSS FD001", f_caption, INK_3, 1.8)

card.save(OUT, optimize=True)
print("saved", OUT, card.size)
