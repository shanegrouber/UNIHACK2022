import json
import numpy as np
import pandas as pd
import simplejson

def parse():
    in_file = open('top-headlines.json')

    data = json.load(in_file)

    titles = np.array([])

    descriptions = np.array([])

    sources = np.array([])

    contents = np.array([])

    urls = np.array([])

    for i in range(0,len(data)):
        titles = np.append(titles, data[i]['title'])
        # sources = np.append(sources, data[i]['source'])
        urls = np.append(urls, data[i]['url'])
        # contents = np.append(contents, data[i]['content'])
        descriptions = np.append(descriptions, data[i]['description'])

    descriptions = descriptions[descriptions != None]
    contents = contents[contents != None] #remove nonetype elements in array

    df = pd.read_csv('filtered_cities.csv')
    df['count'] = 0
    cities = df['city']

    df.set_index('city', inplace=True, drop=True)

    titlesaslist = titles.tolist()
    for city in cities:
        check_city = f" {city} "
        relarticle = [] #hold associated articles with city
        relurl = []
        for title in titles:
            if check_city in title:
                df.loc[city,'count'] += 1
                relarticle += [title]
                index = titlesaslist.index(title)
                relurl += [urls[index]]
                df.at[city,'urls'] = relurl
                df.at[city,'articles'] = relarticle # Append array of articles that mentions the city to locationdata.json
        
        for desc in descriptions:
            if check_city in desc:
                df.loc[city,'count'] += 1

    df=df[df!=0].dropna()

    df = df.sort_values(by=['count'],ascending=False)

    df.reset_index(drop=False, inplace=True)

    df = df.drop('Unnamed: 0', 1)


    df.index.name = 'id'
    
    out = df.to_dict('index')


    obj = json.dumps(out, indent = 4)


    with open("locationdata.json", "w") as outfile:
        outfile.write(obj)


    print(df)

    
    in_file.close()
    outfile.close()
