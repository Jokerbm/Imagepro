python3 retrain.py \
  --bottleneck_dir=data_identify/bottlenecks \
  --how_many_training_steps=500 \
  --model_dir=models \
  --summaries_dir=data_identify/training_summaries/basic \
  --output_graph=data_identify/retrained_graph.pb \
  --output_labels=data_identify/retrained_labels.txt \
  --image_dir=training_upload