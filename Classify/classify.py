import tensorflow as tf
import sys
import os

import cv2
import math

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
i = 0

image_data = tf.compat.v1.gfile.GFile("screens/"+"alpha.png", 'rb').read()
label_lines = [line.rstrip() for line in tf.io.gfile.GFile("data_identify/retrained_labels.txt")]
with tf.compat.v1.gfile.GFile("data_identify/retrained_graph.pb", 'rb') as f:
    graph_def = tf.compat.v1.GraphDef()
    graph_def.ParseFromString(f.read())
    _ = tf.import_graph_def(graph_def, name='')

with tf.compat.v1.Session() as sess:
    video_capture = cv2.VideoCapture(0)
    video_capture.set(3, 640)
    video_capture.set(4, 480)
    while True:
        frame = video_capture.read()[1]
        frameId = video_capture.get(1)
        cv2.imwrite(filename="screens/"+"alpha.png", img=frame)
        image_data = tf.compat.v1.gfile.GFile("screens/"+"alpha.png", 'rb').read()
        softmax_tensor = sess.graph.get_tensor_by_name('final_result:0')
        predictions = sess.run(softmax_tensor,{'DecodeJpeg/contents:0': image_data})
        top_k = predictions[0].argsort()[-len(predictions[0]):][::-1]
        if i != 1:
            for node_id in top_k:
                detectface = label_lines[node_id]
                score = predictions[0][node_id]
                print('%s (score = %.5f)' % (detectface, score))
                if score >= 0.90:
                    print(detectface)
                    i += 1
            print("\n\n")
            cv2.imshow("image", frame)
            cv2.waitKey(1)
        else:
            break


video_capture.release()
cv2.destroyAllWindows()
