import json
from pymongo import MongoClient

def updatedb():
    
    client = MongoClient("")
    db = client['unihack']
    collection_heatmap = db['heatmaps']

    with open('locationdata.json') as f:
        file_data = json.load(f)

    collection_heatmap.delete_many({})
    collection_heatmap.insert_one({"data":file_data})


    client.close()