
import requests

def sendnews():
    r = requests.get("https://hottopicscanner.herokuapp.com/customers/get")

    print(r.json())


sendnews()