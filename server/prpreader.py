from pymongo import MongoClient

client = MongoClient()
db = client.testdb  # use a database called "test_database"
collection = db.files   # and inside that DB, a collection called "files"

f = open('prp12m.txt')  # open a file
text = f.read()    # read the entire contents, should be UTF-8 text

# build a document to be inserted
text_file_doc = {"file_name": "prp12m.txt", "contents" : text }
# insert the contents into the "file" collection
collection.insert_one(text_file_doc)