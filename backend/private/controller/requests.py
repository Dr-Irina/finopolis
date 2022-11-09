from dataclasses import dataclass
from typing import List

from flask import Blueprint, request, jsonify
from logging import getLogger

from pymorphy2 import MorphAnalyzer

from private.db import db
from private.db.entities import CustomerRequest, Category
import re

logger = getLogger('app.controller.requests')
morph = MorphAnalyzer(lang='ru')
requests_api = Blueprint("requests", __name__, url_prefix="/requests")


@requests_api.route('/', methods=['POST'])
def save_request():
    body = request.get_json()
    text = body['text']
    clean_text = re.sub('[,.\s]', ' ', text)

    normalized_words = [_normalize(word) for word in clean_text.split(' ')]
    print(normalized_words[0])
    categorization_result = _categorize(normalized_words)
    if categorization_result.categorisation_options:
        return jsonify({
            'options':
                [{'id': option.id, 'name': option.name} for option in categorization_result.categorisation_options]
        })

    db.session.add(CustomerRequest(raw_text=text, category_id=categorization_result.category_id))
    db.session.commit()
    return jsonify(
        {'category_id': categorization_result.category_id}
    )


@requests_api.route('/update', methods=['POST'])
def update_already_loaded_request():
    body = request.get_json()
    text = body['text']
    chosen_category_id = body['category_id']
    children = db.session.query(Category).filter(Category.parent_id == chosen_category_id).fetchall()
    if children:
        return jsonify({
            'options': [{'id': child.id, 'name': child.name} for child in children]
        })
    db.session.add(CustomerRequest(raw_text=text, category_id=chosen_category_id))
    db.session.commit()
    return jsonify(
        {'category_id': chosen_category_id}
    )


@dataclass
class CategorisationOption:
    id: int
    name: str


@dataclass
class CategorizationResult:
    category_id: int
    categorisation_options: List[CategorisationOption]


def _categorize(normalized_words: List[str]) -> CategorizationResult:
    """
    Return either category_id or options to specify it
    :param normalized_words:
    :return:
    """
    all_categories = db.session.query(Category)
    # TODO algorithm
    return CategorizationResult(1, [])


def _normalize(word):
    matched_word = morph.parse(word)[0]
    return matched_word.normal_form.encode('utf8')