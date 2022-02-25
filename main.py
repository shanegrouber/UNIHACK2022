import requests

key = "9d8ac27362174fb1ae77114dc8ed8f97" # 0b72d82a9dd6438c8356d5a28fdc4fd9

params = {
    'apiKey': key,
    'language':'en',
    'from':'2022-02-25',
    # 'sources': 'abc-news,bbc-news'
}
# r = requests.get("https://newsapi.org/v2/top-headlines", params=params)
r = requests.get("https://newsapi.org/v2/everything", params=params)
try:
    print(len(r.json()['articles']))
except:
    print(r.text)