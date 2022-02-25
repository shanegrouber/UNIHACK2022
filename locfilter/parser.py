import requests
import json

in_file = open("top-headlines.json")

data = json.load(in_file)


titles = [i['title'] for i in data['articles']]

descriptions = [i['description'] for i in data['articles']]

sources = [i['source'] for i in data['articles']]

content = [i['content'] for i in data['articles']]

for i in range (0,len(sources)):
    sources[i] = sources[i]['name']

print(titles)
print(" ")
print(descriptions)
print(" ")
print(content)
print(" ")
print(sources)

in_file.close()

