from collections import namedtuple
from functools import lru_cache

import torch
from pymorphy2 import MorphAnalyzer
from transformers import AutoModelForSequenceClassification
from transformers import BertTokenizerFast

morph = MorphAnalyzer(lang='ru')

@lru_cache
def init_models():
    return BertTokenizerFast.from_pretrained(
        'blanchefort/rubert-base-cased-sentiment'
    ), AutoModelForSequenceClassification.from_pretrained('blanchefort/rubert-base-cased-sentiment', return_dict=True)


PredictResult = namedtuple('PredictResult', ['neutral', 'negative', 'positive'])


@torch.no_grad()
def predict(text):
    tokenizer, model = init_models()
    inputs = tokenizer(text, max_length=512, padding=True, truncation=True, return_tensors='pt')
    outputs = model(**inputs)
    predicted = torch.nn.functional.softmax(outputs.logits, dim=1)[0]
    predicted = list(map(lambda t: float(t) * 100, predicted))
    return PredictResult(int(predicted[0]), int(predicted[2]), int(predicted[1]))
