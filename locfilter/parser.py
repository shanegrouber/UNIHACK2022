import json
import numpy as np
import pandas as pd
import simplejson

def getcount():
    in_file = open('top-headlines.json')

    data = json.load(in_file)

    titles = np.array([])

    descriptions = np.array([])

    sources = np.array([])

    contents = np.array([])

    urls = np.array([])

    for i in range(0,len(data)):
        titles = np.append(titles, data[i]['title'])
        sources = np.append(sources, data[i]['source'])
        urls = np.append(urls, data[i]['url'])
        contents = np.append(contents, data[i]['content'])
        descriptions = np.append(descriptions, data[i]['description'])

    descriptions = descriptions[descriptions != None]
    contents = contents[contents != None] #remove nonetype elements in array

    df = pd.read_csv('cities.csv')
    df['count'] = 0
    cities = df['city']

    df.set_index('city', inplace=True, drop=True)

    newsfeed = {'headline':[],'count':[],'source':[],'url':[]}

    df2 = pd.DataFrame(newsfeed)

    df2['headline'] = titles
    df2['count'] = 0
    df2['source'] = sources
    df2['url'] = urls

    df2.set_index('headline', inplace=True, drop=True)
    for city in cities:
        chk = f" {city} "
        for title in titles:
            if chk in title:
                df.loc[city,'count'] += 1
                df2.loc[title,'count'] += 1
        
        for desc in descriptions:
            if chk in desc:
                df.loc[city,'count'] += 1

    df=df[df!=0].dropna()
    df2=df2[df2!=0].dropna()
    df2.sort_values(['count'],  inplace=True, ascending=False)
    df.reset_index(drop=False, inplace=True)

    df = df.drop('Unnamed: 0', 1)


    df.index.name = 'id'
    
    out = df.to_dict('index')

    news = df2.to_dict('index')

    obj = json.dumps(out, indent = 4)

    obj2 = json.dumps(news, indent = 4)

    with open("locationdata.json", "w") as outfile:
        outfile.write(obj)

    with open("trending.json", "w") as outfile2:
        outfile2.write(obj2)

    print(df)

    print(df2)
    
    in_file.close()
    outfile.close()
    outfile2.close()