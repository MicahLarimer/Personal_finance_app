from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Create a new instance of SQLAlchemy
db = SQLAlchemy()

def create_app():
    # Initialize the Flask application
    app = Flask(__name__)
    
    # Enable CORS
    CORS(app)

    # Set configuration for the database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///finance.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize the app with SQLAlchemy
    db.init_app(app)

    return app
