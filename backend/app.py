from flask import Flask, request, jsonify
import os
import cv2
import numpy as np
from flask_cors import CORS
from werkzeug.utils import secure_filename
import logging

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'mp4', 'avi', 'mov'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Configure logging
logging.basicConfig(level=logging.INFO)

def allowed_file(filename):
    """Check if the file has an allowed extension."""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def extract_frames(video_path, max_frames=10):
    """Extracts frames from a video for analysis."""
    cap = cv2.VideoCapture(video_path)
    frames = []

    if not cap.isOpened():
        logging.error(f"Failed to open video file: {video_path}")
        return []

    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    interval = max(1, frame_count // max_frames)

    for i in range(0, frame_count, interval):
        cap.set(cv2.CAP_PROP_POS_FRAMES, i)
        ret, frame = cap.read()
        if ret:
            frames.append(frame)

    cap.release()
    return frames

def detect_image(image_path):
    """Detects if an image is real or fake."""
    try:
        # Replace this logic with your new model or detection logic
        logging.info(f"Analyzing image: {image_path}")
        # Placeholder logic: Randomly decide real or fake
        is_fake = np.random.choice([True, False])
        return "Fake Image" if is_fake else "Real Image"
    except Exception as e:
        logging.error(f"Error analyzing image: {e}")
        return "Error in Image Analysis"

def detect_video(video_path):
    """Detects if a video is real or fake."""
    frames = extract_frames(video_path)

    if not frames:
        return "Invalid Video"

    fake_count = 0
    for frame in frames:
        try:
            # Replace this logic with your new model or detection logic
            logging.info("Analyzing frame...")
            # Placeholder logic: Randomly decide real or fake for each frame
            is_fake = np.random.choice([True, False])
            if is_fake:
                fake_count += 1
        except Exception as e:
            logging.warning(f"Error analyzing frame: {e}")
            continue

    threshold = len(frames) * 0.5
    return "Fake Video" if fake_count >= threshold else "Real Video"

@app.route('/detect', methods=['POST'])
def detect():
    if 'file' not in request.files:
        return jsonify({"message": "No file uploaded"}), 400

    file = request.files['file']
    if not allowed_file(file.filename):
        return jsonify({"message": "Unsupported file format"}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    try:
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            result = detect_image(filepath)
        elif filename.lower().endswith(('.mp4', '.avi', '.mov')):
            result = detect_video(filepath)
        else:
            result = "Unsupported file format"
    finally:
        if os.path.exists(filepath):
            os.remove(filepath)

    return jsonify({"message": result})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
