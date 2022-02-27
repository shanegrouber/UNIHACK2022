import requests
import json

def fetchnews():

    r = requests.get("https://hottopicscanner.herokuapp.com/data")
    top_headlines = json.dumps(r.json())
    with open('top-headlines.json', 'w') as f: 
        f.write(top_headlines)

