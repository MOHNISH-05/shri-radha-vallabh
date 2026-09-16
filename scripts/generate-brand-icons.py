"""Create favicon assets from the existing official 512px SRV crest.

Run from the repository root with Pillow installed. No creative changes or
cropping are applied: all output sizes retain the source's square framing.
"""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/assets/srv-logo.png"
PUBLIC = ROOT / "public"
BRAND = PUBLIC / "assets/brand"

with Image.open(SOURCE) as original:
    crest = original.convert("RGBA")
    if crest.size != (512, 512):
        raise ValueError(f"Expected official 512px square crest; got {crest.size}")

    BRAND.mkdir(parents=True, exist_ok=True)
    crest.save(BRAND / "srv-logo-512.png", format="PNG", optimize=True)

    for size in (48, 96, 192):
        resized = crest.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(PUBLIC / f"favicon-{size}.png", format="PNG", optimize=True)

    crest.resize((180, 180), Image.Resampling.LANCZOS).save(
        PUBLIC / "apple-touch-icon.png", format="PNG", optimize=True
    )

    crest.save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )
