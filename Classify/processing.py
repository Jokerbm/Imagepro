import tensorflow as tf
import sys

image_path = sys.argv[1]
image_data = tf.compat.v1.gfile.FastGFile(image_path, 'rb').read()

label_lines = [line.rstrip() for line in tf.io.gfile.GFile("data_identify/retrained_labels.txt")]

with tf.compat.v1.gfile.GFile("data_identify/retrained_graph.pb", 'rb') as f:
    graph_def = tf.compat.v1.GraphDef()
    graph_def.ParseFromString(f.read())
    _ = tf.import_graph_def(graph_def, name='')

with tf.compat.v1.Session() as sess:
    softmax_tensor = sess.graph.get_tensor_by_name('final_result:0')
    predictions = sess.run(softmax_tensor,{'DecodeJpeg/contents:0': image_data})
    top_k = predictions[0].argsort()[-len(predictions[0]):][::-1]

    for node_id in top_k:
        human_string = label_lines[node_id]
        score = predictions[0][node_id]
        print('%s (score = %.5f)' % (human_string, score))
