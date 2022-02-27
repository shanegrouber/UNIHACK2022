import pandas as pd
import numpy as np
locations = pd.read_csv('worldcities.csv')

data = {'city':[], 'country':[], 'lat':[], 'long':[], 'count':[], 'articles':[], 'urls':[], 'source':[], 'thumbnail':[], 'publishdate': []}

df = pd.DataFrame(data)

df[['city']] = locations[['city']]

df[['country']] = locations[['country']]

df[['lat']] = locations[['lat']]

df[['long']] = locations[['lng']]

df.drop(labels=0, axis=0)

df = df.drop_duplicates(['city'],keep='first')

df = df[df.city.str.len() > 3]

delete_list = ["Real", "Unions", "Mexico", "Russi", "Rubio", "Batman","Florida", "Meta", "Polk", "Star", "Victoria", "Hamilton", "Douglas", "Nancy", "Jackson", "St. Petersburg", "York", "David", "Rugby", "Mercedes", "University", "March", "Stone", "Street", "Media", "Most", "Jupiter", "Poland", "Wall", "Vladamir", "Union", "Police", "Russell", "Green", "Much"]

popular_names = pd.read_csv("top_names.csv")

name_list = popular_names['Name'].to_list()

j = 0
for name in name_list:
    index = name.index(';')
    name_list[j] = name[:index]
    j += 1
name_list = list(dict.fromkeys(name_list))

for i in delete_list:
    df = df[df.city != i]

for name in name_list:
    df = df[df.city != name]

print(df)

df.to_csv('filtered_cities.csv')