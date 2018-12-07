from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

##############################################################################
# Model definitions

class User(db.Model):
	"""User of the web app."""

	__tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_name = db.Column(db.String(64), nullable=True)
    email = db.Column(db.String(64), nullable=True)
    password = db.Column(db.String(64), nullable=True)


    def __repr__(self):
    	"""Provide helpful representatio when printed."""

    	return f"<User user_id={self.user_id} email={self.email}>"


class Article(db.Model):
	"""Articles available to the users"""

	__tablename__ = "articles"

	article_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    article_title = db.Column(db.String(64), nullable=True)
    news_source = db.Column(db.String(64), nullable=True)
    geo_id = db.Column(db.Integer, autoincrement=True, nullable=True)
    category_id = 


##############################################################################
# Helper functions

def connect_to_db(app):
    """Connect the database to our Flask app."""

    # Configure to use our PostgreSQL database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///readings'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":

    from server import app
    connect_to_db(app)
    print("Connected to DB.")