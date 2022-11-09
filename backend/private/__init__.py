from flask import Flask
from flask_jwt_extended import JWTManager
from flask_wtf import CSRFProtect

from private.controller import scoring_api
from private.controller.requests import requests_api
from private.util.db_creation import cli
from private.db import db
from logging.config import fileConfig

csrf = CSRFProtect()
jwt = JWTManager()


class Config:
    JWT_SECRET_KEY = 'dev_key'
    JWT_ALGORITHM = 'HS256'
    JWT_LEEWAY = 10000
    JWT_TOKEN_LOCATION = 'headers'
    JWT_ACCESS_COOKIE_NAME = 'JwtToken'
    JWT_COOKIE_CSRF_PROTECT = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://finopolis:finopolis@db:5432/techsupport'
    SECRET_KEY = 'dev_key'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    WTF_CSRF_CHECK_DEFAULT = False


fileConfig(fname='logging.ini', disable_existing_loggers=False)
application = Flask(__name__)
jwt.init_app(application)
csrf.init_app(application)
# дефолтный конфиг
application.config.from_object(Config)
# application.config.from_envvar('SETTINGS_FILE')
db.init_app(application)

application.register_blueprint(scoring_api)
application.register_blueprint(cli)
application.register_blueprint(requests_api)
# application.register_blueprint(user.user_api)
# application.register_blueprint(cli.cli)
# application.register_blueprint(news.news_api)
# application.register_blueprint(articles.articles_api)
# application.register_blueprint(reviews.reviews_api)


@application.route('/')
def redirect_to_login():
    return ('', 200)


@application.route('/ping')
def pong():
    return ('', 200)