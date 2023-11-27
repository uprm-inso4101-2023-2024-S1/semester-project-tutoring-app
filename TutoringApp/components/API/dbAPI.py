from flask import Flask, request, jsonify
import httpx

app = Flask(__name__)

DB_URL = "https://supabase.com/dashboard/project/qunwadbiwbycvmgscyyg/editor/"
API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1bndhZGJpd2J5Y3ZtZ3NjeXlnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTM0MDE2NywiZXhwIjoyMDEwOTE2MTY3fQ.3IGl2d2Ai7rn7sEBaEbhoOmwskUpG_B2BOCaDXiu19g"


async def DataBaseGet(table_name):
    async with httpx.AsyncClient() as client:
        response = await client.get(f'{DB_URL}/{table_name}', headers={'apikey': API_KEY})
        if response.status_code == 200:
            data = response.json()
            return data
        else:
            return None

async def DataBasePost(table_name, data):
    async with httpx.AsyncClient() as client:
        response = await client.post(f'{DB_URL}/{table_name}', headers={'apikey': API_KEY}, json=data)
        if response.status_code == 201:
            return True
        else:
            return False

async def DataBasePut(table_name, data):
    #needs more testing
    async with httpx.AsyncClient() as client:
        response = await client.patch(f'{DB_URL}/{table_name}', headers={'apikey': API_KEY}, json=data)
        if response.status_code == 200:
            return True
        else:
            return False

async def DataBaseDelete(table_name, data):
    #needs more testing
    async with httpx.AsyncClient() as client:
        response = await client.delete(f'{DB_URL}/{table_name}', headers={'apikey': API_KEY}, json=data)
        return response

@app.route('/users', methods=['GET'])
async def GetUsers():
    users = await DataBaseGet('users')
    if users is not None:
        return jsonify(users)
    else:
        return jsonify({'message': 'Error fetching users'}), 500

@app.route('/users', methods=['POST'])
async def CreateUser():
    data = await request.get_json()
    if 'user_id' not in data or 'email' not in data:
        return jsonify({'message': 'user_id  and email are required'}), 400

    success = await DataBasePost('users', data)
    if success:
        return jsonify({'message': 'User created successfully'}), 201
    else:
        return jsonify({'message': 'Error creating user'}), 500


@app.route('/users/<int:user_id>', methods=['PUT'])
async def update_user():
    #needs more testing
    data = request.get_json()
    user_id = data['user_id']
    success = await DataBasePut(f'users/{user_id}', data)
    if success:
        return jsonify({'message': 'User updated successfully'}), 200
    else:
        return jsonify({'message': 'Error updating user'}), 500


@app.route('/users/<int:user_id>', methods=['DELETE'])
async def delete_user():
    #needs more testing
    data = request.get_json()
    user_id = data['user_id']
    if 'user_id' not in data:
        return jsonify({'message': 'user_id is required'}), 400
    response = await DataBaseDelete(f'users/{user_id}', data)
    if response.status_code == 204:
        return jsonify({'message': 'User deleted successfully'}), 204
    else:
        return jsonify({'message': 'Error deleting user'}), response.status_code

# Courses

@app.route('/courses', methods=['GET'])
async def GetCourses():
    courses = await DataBaseGet('courses')
    if courses is not None:
        return jsonify(courses)
    else:
        return jsonify({'message': 'Error fetching courses'}), 500

@app.route('/courses', methods=['POST'])
async def CreateCourses():
    data = await request.get_json()
    if 'course_id' not in data or 'course_name' not in data:
        return jsonify({'message': 'course_id and course_name are required'}), 400
    success = await DataBasePost('courses', data)
    if success:
        return jsonify({'message': 'Course created successfully'}), 201
    else:
        return jsonify({'message': 'Error creating course'}), 500

@app.route('/courses/<text:course_id>', methods=['PUT'])
async def update_course():
    #needs more testing
    data = request.get_json()
    course_id = data['course_id']
    if 'course_id' not in data or 'course_name' not in data or "description" not in data:
        return jsonify({'message': 'course_id, course_name, and description are required'}), 400
    success = await DataBasePut(f'courses/{course_id}', data)
    if success:
        return jsonify({'message': 'Course updated successfully'}), 200
    else:
        return jsonify({'message': 'Error updating course'}), 500

@app.route('/courses/<text:course_id>', methods=['DELETE'])
async def delete_course():
    #needs more testing
    data = request.get_json()
    course_id = data['course_id']
    if 'course_id' not in data:
        return jsonify({'message': 'course_id is required'}), 400
    response = await DataBaseDelete(f'courses/{course_id}', data)
    if response.status_code == 204:
        return jsonify({'message': 'Course deleted successfully'}), 204
    else:
        return jsonify({'message': 'Error deleting course'}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
