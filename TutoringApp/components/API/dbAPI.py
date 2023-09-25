from flask import Flask, request, jsonify
import httpx

app = Flask(__name__)

DB_URL = "https://qunwadbiwbycvmgscyyg.supabase.co"
API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1bndhZGJpd2J5Y3ZtZ3NjeXlnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTM0MDE2NywiZXhwIjoyMDEwOTE2MTY3fQ.3IGl2d2Ai7rn7sEBaEbhoOmwskUpG_B2BOCaDXiu19g"


async def DataBaseGet(table_name):
    async with httpx.AsyncClient() as client:
        response = await client.get('f{DB_URL}/{table_name}', headers={'apikey':API_KEY})
        if response.status_code == 200:
            data = response.json()
            return data
        else:
            return None

async def DataBasePost(table_name, data): 
    async with httpx.AsyncClient() as client:
        response = await client.post('f{DB_URL}/{table_name}', headers={'apikey': API_KEY}, json=data)
        if response.status_code == 201:
            return True 
        else:
            return False

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
    if 'user_id' not in data or 'names' not in data or 'email' not in data or 'password_hash' not in data or 'last_name' not in data:
        return jsonify({'mesage: user_id, name, email, password_hash and last_name are required'}), 400
    
    success = await DataBasePost('users', data)
    if success:
        return jsonify({'message': 'User created successfully'}), 201
    else:
        return jsonify({'message': 'Error creating user'}), 500

@app.route('/courses', methods=['GET'])
async def GetCourses():
    courses = DataBaseGet('courses')
    if courses is not None:
        return jsonify(courses)
    else:
        return jsonify({'message': 'Error fetching courses'}), 500

@app.route('/courses', methods=['POST'])
async def CreateCourses():
    data = request.get_json()
    if 'course_id' not in data or 'course_name' not in data:
        return jsonify({'mesage: course_id and course_name are required'}), 400
    success = await DataBasePost('courses', data)
    if success:
        return jsonify({'message': 'Course created successfully'}), 201
    else:
        return jsonify({'message': 'Error creating course'}), 500

@app.route('/classschedules', methods=['GET'])
async def GetClassSchedule():
    schedules = DataBaseGet('classschedules')
    if schedules is not None:
        return jsonify(schedules)
    else:
        return jsonify({'message': 'Error fetching course schedules'}), 500

@app.route('/classschedules', methods=['POST'])
async def create_course_schedule():
    data = request.get_json()
    if 'schedule_id' not in data or 'start_time' not in data or 'end_time' not in data:
        return jsonify({'mesage: schedule_id, start_time and end_time are required'}), 400
    success = await DataBasePost('classschedules', data)
    if success:
        return jsonify({'message': 'Course schedule created successfully'}), 201
    else:
        return jsonify({'message': 'Error creating course schedule'}), 500

if __name__ == '__main__':
    app.run(debug=True)