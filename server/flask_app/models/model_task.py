from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import json

class Task:
    def __init__(self, data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.is_completed = data['is_completed']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def save(cls, data):
        query = "INSERT INTO tasks (name) VALUES (%(name)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM tasks;"
        results = connectToMySQL(DATABASE).query_db(query)
        if not results:
            return False
        tasks = []
        for task in results:
            tasks.append(cls(task))
        return tasks
    
    @classmethod
    def get_all_serialized(cls):
        query = "SELECT * FROM tasks;"
        results = connectToMySQL(DATABASE).query_db(query)
        if not results:
            return False
        return results