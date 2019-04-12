import face_recognition
from flask import Flask, jsonify, request, redirect
from facerec_from_webcam import startRec

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def startFaceRec():
    name = startRec()
    return jsonify(name)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5001)
