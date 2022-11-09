from . import db
from sqlalchemy import Column, Integer, String, ForeignKey



# class WordMappings(Base):
#     id = Column(Integer, primary_key=True)


class Category(db.Model):
    __tablename__ = "category"
    id = Column(Integer, primary_key=True)
    name = Column(String(200))
    parent_id = Column(Integer, ForeignKey("category.id"), nullable=True)


class CustomerRequest(db.Model):
    id = Column(Integer, primary_key=True)
    raw_text = Column(String(200))
    category_id = Column(Integer, ForeignKey("category.id"), nullable=False)
