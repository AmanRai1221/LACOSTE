from PIL import Image

def process_logo(input_path, output_path):
    try:
        # Re-open original if we messed it up? I'll assume we modified the file in place.
        # But wait, we already made white pixels transparent. The black pixels are still there.
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            r, g, b, a = item
            if a == 0:
                newData.append(item)
            elif r < 50 and g < 50 and b < 50: # Black text
                newData.append((255, 255, 255, 255)) # Turn white
            else:
                newData.append(item) # Keep crocodile green
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Successfully inverted black text to white and kept background transparent.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo("public/logo.png", "public/logo.png")
