from private.db import db
from flask import Blueprint
from logging import getLogger
from sqlalchemy.exc import SQLAlchemyError

from private.db.entities import Category

cli = Blueprint('cli', __name__)
logger = getLogger('controllers.cli')


@cli.cli.command("recreate-db")
def recreate_db():
    logger.info("Переинициализируем базу")
    try:
        db.drop_all()
        db.create_all()

        db.session.add(Category(name='123'))
        db.session.commit()

    except SQLAlchemyError as e:
        logger.error(e, exc_info=True)
        db.session.rollback()