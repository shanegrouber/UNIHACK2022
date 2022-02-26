import requests
import json
import numpy as np
import pandas as pd

in_file = open('top-headlines.json')

data = json.load(in_file)


titles = [i['title'] for i in data['articles']]

descriptions = [i['description'] for i in data['articles']]

sources = [i['source'] for i in data['articles']]

content = [i['content'] for i in data['articles']]

for i in range (0,len(sources)):
    sources[i] = sources[i]['name']

titles = np.array(titles)

descriptions = np.array(descriptions)

sources = np.array(sources)

contents = np.array(content)


contents = contents[contents != None] #remove nonetype elements in array

df = pd.read_csv('cities.csv')
df['count'] = 0
cities = df['city']

df.set_index('city', inplace=True, drop=True)

print(sources)


for city in cities:
    for title in titles:
        isSource = False
        for source in sources:
            if source in title:
                isSource = True
        if city in title:
            if isSource is False:
                df.loc[city,'count'] += 1
    
    for desc in descriptions:
        if city in desc:
            df.loc[city,'count'] += 1
    
    for cont in contents:
        if city in cont:
            df.loc[city,'count'] += 1


df=df[df!=0].dropna()


out = df.to_json(orient='records')[1:-1].replace('},{', '} {')

print(out)
# df.to_csv('filtered.csv')


in_file.close()

