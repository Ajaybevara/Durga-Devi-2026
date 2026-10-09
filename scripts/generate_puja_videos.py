from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / ".media-tools"))

import imageio_ffmpeg

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
VIDEOS = [
    ("images/puja-scenes/panchamrutha.png", "puja-panchamrutha.mp4"),
    ("images/puja-scenes/deepalankarana.png", "puja-deepalankarana.mp4"),
    ("images/puja-scenes/rudrabhishekam.png", "puja-rudrabhishekam.mp4"),
    ("images/puja-scenes/harathulu.png", "puja-108-harathulu.mp4"),
    ("images/puja-scenes/narayana-samaradhana.png", "puja-narayana-samaradhana.mp4"),
    ("images/puja-scenes/thiruveedhi.png", "puja-thiruveedhi.mp4"),
]

for source_name, output_name in VIDEOS:
    source = ROOT / "public" / source_name
    output = ROOT / "public" / "videos" / "pujas" / output_name
    output.parent.mkdir(parents=True, exist_ok=True)
    video_filter = (
        "scale=900:900:force_original_aspect_ratio=increase,"
        "crop=900:900,"
        "zoompan=z='min(zoom+0.00075,1.10)':"
        "x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=150:s=720x720:fps=25,"
        "eq=saturation=1.10:contrast=1.04:brightness=0.015,"
        "fade=t=in:st=0:d=0.45,fade=t=out:st=5.35:d=0.65,format=yuv420p"
    )
    subprocess.run(
        [
            FFMPEG, "-y", "-loop", "1", "-i", str(source),
            "-vf", video_filter, "-frames:v", "150", "-an",
            "-c:v", "libx264", "-preset", "medium", "-crf", "24",
            "-movflags", "+faststart", str(output),
        ],
        check=True,
    )
    print(f"generated {output.relative_to(ROOT)}")
