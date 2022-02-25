import requests

key = "57ab90aa755b49a1ad9adef24f77d931" # 0b72d82a9dd6438c8356d5a28fdc4fd9

params = {
    'apiKey': key,
    'language':'en'
}
r = requests.get("https://newsapi.org/v2/top-headlines", params=params)
print(r.json())