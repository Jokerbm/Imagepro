import cv2
import glob

sucess = 0
fail = 0
count = 1

path = "/Users/japanapi/Desktop/FaceCrop/photo/*.*"
for file in glob.glob(path):
    image = cv2.imread(file)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    faces = faceCascade.detectMultiScale(gray,scaleFactor=1.3,minNeighbors=3,minSize=(30, 30))
    if len(faces) > 0:
        for (x, y, w, h) in faces:
            cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
            roi_color = image[y:y + h, x:x + w]
            for _ in range(50):
                cv2.imwrite('/Users/japanapi/Desktop/FaceCrop/success/{}.jpg'.format(count), roi_color)
                count += 1
                print("{} Success".format(count))
            sucess += 1
    else:
        fail += 1
        print("{} Fail".format(count))
print("Fail = ", fail, "Success = ", sucess)


"""
import cv2

sucess = 0
fail = 0

for i in range(7386, 7407):
    image = cv2.imread("/Users/japanapi/Desktop/FaceCrop/photo/IMG_{}.JPG".format(i))
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    faces = faceCascade.detectMultiScale(gray,scaleFactor=1.3,minNeighbors=3,minSize=(30, 30))
    if len(faces) > 0:
        for (x, y, w, h) in faces:
            cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)
            roi_color = image[y:y + h, x:x + w] 
            cv2.imwrite('/Users/japanapi/Desktop/FaceCrop/Crop/{}.jpg'.format(i), roi_color) 
            sucess += 1
            print("{} Success".format(i))
    else:
        fail += 1
        print("{} Fail".format(i))
print("Fail = ", fail, "Success = ", sucess)
"""