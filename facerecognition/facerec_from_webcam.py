import face_recognition
import cv2

def startRec():
    video_capture = cv2.VideoCapture(0, cv2.CAP_V4L)

    # Load a sample picture and learn how to recognize it.
    sharma_image = face_recognition.load_image_file("./assets/sharma.jpg")
    sharma_face_encoding = face_recognition.face_encodings(sharma_image)[0]

    prem_image = face_recognition.load_image_file("./assets/prem.jpg")
    prem_face_encoding = face_recognition.face_encodings(prem_image)[0]

    mavi_image = face_recognition.load_image_file("./assets/mavi.jpg")
    mavi_face_encoding = face_recognition.face_encodings(mavi_image)[0]

    kunji_image = face_recognition.load_image_file("./assets/kunji.jpg")
    kunji_face_encoding = face_recognition.face_encodings(kunji_image)[0]

    # Create arrays of known face encodings and their names
    known_face_encodings = [
        sharma_face_encoding,
        prem_face_encoding,
        mavi_face_encoding,
        kunji_face_encoding
    ]
    known_face_names = [
        "Sharma",
        "Prem",
        "Mavi",
        "Kunji"
    ]
    known_voter_ids = [
        "S1AR9317",
        "PR0M4192",
        "MAV19812",
        "KU9N8853"
    ]

    # Initialize some variables
    face_locations = []
    face_encodings = []
    face_names = []
    process_this_frame = True

    while True:
        # Grab a single frame of video
        ret, frame = video_capture.read()

        # Resize frame of video to 1/4 size for faster face recognition processing
        small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

        # Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)
        rgb_small_frame = small_frame[:, :, ::-1]

        # Only process every other frame of video to save time
        if process_this_frame:
            # Find all the faces and face encodings in the current frame of video
            face_locations = face_recognition.face_locations(rgb_small_frame)
            face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

            face_names = []
            for face_encoding in face_encodings:
                # See if the face is a match for the known face(s)
                matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
                name = "Unknown"
                voterID = ""

                # If a match was found in known_face_encodings, just use the first one.
                if True in matches:
                    first_match_index = matches.index(True)
                    name = known_face_names[first_match_index]
                    voterID = known_voter_ids[first_match_index]

                face_names.append(name)

        process_this_frame = not process_this_frame


        # Display the results
        for (top, right, bottom, left), name in zip(face_locations, face_names):
            # Scale back up face locations since the frame we detected in was scaled to 1/4 size
            top *= 4
            right *= 4
            bottom *= 4
            left *= 4

            # Draw a box around the face
            cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

            # Draw a label with a name below the face
            cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
            font = cv2.FONT_HERSHEY_DUPLEX
            cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

        # Display the resulting image
        cv2.startWindowThread()
        cv2.imshow('Video', frame)

        # Hit 'q' on the keyboard to quit!
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release handle to the webcam
    video_capture.release()
    cv2.destroyAllWindows()

    return voterID