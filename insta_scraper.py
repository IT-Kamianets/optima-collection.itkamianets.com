import instaloader
import os
import json

def scrape_instagram(profile_name, count=12, output_dir='public/image/instagram'):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    L = instaloader.Instaloader(
        dirname_pattern=output_dir,
        filename_pattern='{shortcode}',
        download_videos=False,
        download_video_thumbnails=False,
        download_geotags=False,
        download_comments=False,
        save_metadata=False,
        compress_json=False
    )

    print(f"Завантаження профілю {profile_name}...")
    try:
        profile = instaloader.Profile.from_username(L.context, profile_name)
        
        downloaded_files = []
        i = 0
        for post in profile.get_posts():
            if i >= count:
                break
            
            print(f"Завантаження поста {i+1}: {post.shortcode}")
            L.download_post(post, target=profile_name)
            
            # Instaloader downloads to a folder named after the profile
            # We move it to our target directory
            # For simplicity, we just list files in the downloaded folder
            i += 1
            
        print(f"Завантаження завершено.")
    except Exception as e:
        print(f"Помилка при завантаженні: {e}")
        print("Instagram зазвичай вимагає авторизації для скрапінгу.")

if __name__ == "__main__":
    scrape_instagram("optima.collection.kp")
