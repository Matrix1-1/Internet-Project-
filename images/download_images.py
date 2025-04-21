import os
import requests
from urllib.parse import urlparse

# Create images directory if it doesn't exist
os.makedirs('images', exist_ok=True)

# List of image URLs to download
image_urls = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Campus 1
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',  # Campus 2
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Campus 3
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',  # News 1
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # News 2
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',  # News 3
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # Contact hero
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',  # President
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',  # VP Academic
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644',  # VP Research
]

# Download each image
for i, url in enumerate(image_urls):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            # Get the filename from the URL
            filename = f'image_{i+1}.jpg'
            filepath = os.path.join('images', filename)
            
            # Save the image
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f'Downloaded {filename}')
    except Exception as e:
        print(f'Error downloading {url}: {str(e)}')

print('Image download complete!') 