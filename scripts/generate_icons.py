import zlib
import struct
import math
import os

def create_png(width, height, draw_fn, filename):
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0) # Filter type 0 (None)
        for x in range(width):
            r, g, b, a = draw_fn(x, y, width, height)
            raw_data.extend([r, g, b, a])
    
    compressed = zlib.compress(bytes(raw_data), 9)
    
    png = bytearray(b'\x89PNG\r\n\x1a\n')
    
    # IHDR
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_crc = struct.pack('>I', zlib.crc32(b'IHDR' + ihdr_data) & 0xffffffff)
    png.extend(struct.pack('>I', len(ihdr_data)))
    png.extend(b'IHDR')
    png.extend(ihdr_data)
    png.extend(ihdr_crc)
    
    # IDAT
    idat_crc = struct.pack('>I', zlib.crc32(b'IDAT' + compressed) & 0xffffffff)
    png.extend(struct.pack('>I', len(compressed)))
    png.extend(b'IDAT')
    png.extend(compressed)
    png.extend(idat_crc)
    
    # IEND
    iend_crc = struct.pack('>I', zlib.crc32(b'IEND') & 0xffffffff)
    png.extend(struct.pack('>I', 0))
    png.extend(b'IEND')
    png.extend(iend_crc)
    
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, 'wb') as f:
        f.write(png)
    print(f"Generated {filename}")

def draw_knot_icon(x, y, w, h, is_maskable=False):
    # Normalized coords -1 to 1
    nx = (x - w / 2) / (w / 2)
    ny = (y - h / 2) / (h / 2)
    dist = math.sqrt(nx * nx + ny * ny)
    
    # Base Navy Background #0B1329
    bg_r, bg_g, bg_b = 11, 19, 41
    
    # Subtle radial highlight towards center-top
    glow = max(0, 1 - math.sqrt(nx*nx + (ny+0.3)*(ny+0.3)) * 0.9)
    r = int(bg_r + glow * 20)
    g = int(bg_g + glow * 35)
    b = int(bg_b + glow * 55)
    
    # Safe zone scale for maskable icon vs regular
    scale = 0.65 if is_maskable else 0.8
    sx = nx / scale
    sy = ny / scale
    
    # Draw fishing knot motif (figure 8 / loop knot interlocking with teal & amber/cyan)
    # Loop 1: center (0, -0.2), radius 0.35, thickness 0.08
    d1 = math.sqrt(sx*sx + (sy + 0.25)*(sy + 0.25))
    in_loop1 = abs(d1 - 0.32) < 0.07 and sy < 0.25
    
    # Loop 2: lower interlock
    d2 = math.sqrt((sx - 0.05)*(sx - 0.05) + (sy - 0.25)*(sy - 0.25))
    in_loop2 = abs(d2 - 0.32) < 0.07 and sy > -0.25
    
    # Hook line vertical stem
    in_stem = abs(sx + 0.28) < 0.06 and -0.45 < sy < 0.5
    
    # Hook barb curve
    d_hook = math.sqrt((sx + 0.1)*(sx + 0.1) + (sy - 0.45)*(sy - 0.45))
    in_hook = abs(d_hook - 0.22) < 0.06 and sy > 0.35 and sx > -0.28
    
    # Accent colors
    # Primary line: vibrant teal #14B8A6 (20, 184, 166)
    # Tag line: bright coral/gold #F59E0B (245, 158, 11)
    if in_loop1:
        return (20, 184, 166, 255)
    elif in_loop2:
        return (45, 212, 191, 255)
    elif in_stem or in_hook:
        return (245, 158, 11, 255)
    
    return (min(255, r), min(255, g), min(255, b), 255)

if __name__ == '__main__':
    create_png(192, 192, lambda x,y,w,h: draw_knot_icon(x,y,w,h, False), 'public/pwa-192x192.png')
    create_png(512, 512, lambda x,y,w,h: draw_knot_icon(x,y,w,h, False), 'public/pwa-512x512.png')
    create_png(512, 512, lambda x,y,w,h: draw_knot_icon(x,y,w,h, True), 'public/pwa-maskable-512x512.png')
    create_png(180, 180, lambda x,y,w,h: draw_knot_icon(x,y,w,h, False), 'public/apple-touch-icon.png')
    create_png(64, 64, lambda x,y,w,h: draw_knot_icon(x,y,w,h, False), 'public/favicon.ico')
