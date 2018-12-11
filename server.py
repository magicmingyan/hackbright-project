from jinja2 import StrictUndefined
from flask import Flask, render_template, jsonify
from flask_debugtoolbar import DebugToolbarExtension
import requests

# from model import connect_to_db, db, Bear

app = Flask(__name__)
app.secret_key = "ursusmaritimus"
app.jinja_env.undefined = StrictUndefined


def get_NYT_articles():

    parameters = {"api-key": "secret", 
                    "section": "World",
                    "time-period": "1"
                    }

    request_string = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/{}/{}.json".format(parameters["section"],parameters["time-period"])

    response = requests.get(request_string, params=parameters)

    unpacked_response = response.json()

    return unpacked_response['results']

    # for articles in unpacked_response['results']:
       #  geo_facet = articles["geo_facet"]
       #  print(geo_facet[0])

def article_location(list_of_articles):


    request_string = "https://api.nytimes.com/svc/semantic/v2/geocodes/query.json"


    for articles in list_of_articles:
        geo_facet = articles["geo_facet"][0]
        geo_facet = geo_facet.split('(')[0].title()  
        print(geo_facet)

        parameters = {"api-key": "secret", 
                      "name": geo_facet
                      }
        response = requests.get(request_string, params=parameters)
        unpacked_response = response.json()
        results = unpacked_response['results']
        print (results)

article_location(get_NYT_articles())



#---------------------------------------------------------------------#

@app.route('/')
def index():
    """Show homepage."""



    return render_template("base.html")


#---------------------------------------------------------------------#



if __name__ == "__main__":
    app.debug = True
    # connect_to_db(app)
    DebugToolbarExtension(app)

    app.run(host="0.0.0.0")
