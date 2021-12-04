from werkzeug.wrappers import request
from flask_app import app
from ..models import model_task
from flask import jsonify, request, json

@app.route("/api/get/tasks")
def get_tasks():
    tasks = model_task.Task.get_all_serialized()
    return jsonify(tasks)

@app.route("/api/create/tasks", methods=["POST"])
def create_task():
    data = request.json['data']
    print(data)
    id = model_task.Task.save(data)
    if not id:
        return jsonify(STATUS = 400)
    
    return jsonify(id)