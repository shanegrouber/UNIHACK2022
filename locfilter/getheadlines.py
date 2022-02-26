from newsapi import NewsApiClient
import json


def fetchnews():

    newsapi = NewsApiClient(api_key='078b5bc2774b43938740f8858f4807ad')

    top_sources = "the-wall-street-journal, bbc-news, reuters"

    # /v2/top-headlines
    top_headlines = newsapi.get_top_headlines(sources=top_sources)


    top_headlines = json.dumps(top_headlines)
    with open('top-headlines.json', 'w') as f: 
        f.write(top_headlines)