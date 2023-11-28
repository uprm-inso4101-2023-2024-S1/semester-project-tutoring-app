from flask import jsonify
from dao.user import UserDAO


class UserHandler:

    def __init__(self, db_host, db_port, db_name, db_user, db_password):
        self.user_dao = UserDAO(db_host, db_port, db_name, db_user, db_password)

    def build_user_dict(self, row):
        result = {}
        result['user_id'] = row[0]
        result['names'] = row[1]
        result['email'] = row[2]
        result['password_hash'] = row[3]
        result['is_student'] = row[4]
        result['is_tutor'] = row[5]
        result['last_name'] = row[6]
        result['studentRating'] = row[7]
        result['tutor_rating'] = row[8]
        result['specialty'] = row[9]
        result['user_description'] = row[10]
        result['pfp_image'] = row[11]
        return result

    def build_user_attributes(self, user_id, names, email, password_hash, is_student, is_tutor,
                              last_name, student_rating, tutor_rating, specialty,
                              user_description, pfp_image):
        result = {}
        result['user_id'] = user_id
        result['names'] = names
        result['email'] = email
        result['password_hash'] = password_hash
        result['is_student'] = is_student
        result['is_tutor'] = is_tutor
        result['last_name'] = last_name
        result['studentRating'] = student_rating
        result['tutor_rating'] = tutor_rating
        result['specialty'] = specialty
        result['user_description'] = user_description
        result['pfp_image'] = pfp_image
        return result

    def get_all_users(self):
        users_list = self.user_dao.get_all_users()
        result_list = [self.build_user_dict(row) for row in users_list]
        return jsonify(Users=result_list)

    def get_user_by_id(self, user_id):
        user_list = self.user_dao.get_user_by_id(user_id)
        return jsonify(User=user_list)

    def add_new_user_json(self, json):
        names = json['names']
        email = json['email']
        password_hash = json['password_hash']
        is_student = json.get('is_student', True)
        is_tutor = json.get('is_tutor', False)
        last_name = json.get('last_name', None)
        student_rating = json.get('studentRating', None)
        tutor_rating = json.get('tutor_rating', None)
        specialty = json.get('specialty', None)
        user_description = json.get('user_description', None)
        pfp_image = json.get('pfp_image', None)

        user_id = self.user_dao.add_new_user(names, email, password_hash, is_student, is_tutor,
                                             last_name, student_rating, tutor_rating, specialty,
                                             user_description, pfp_image)

        result = self.build_user_attributes(user_id, names, email, password_hash, is_student, is_tutor,
                                            last_name, student_rating, tutor_rating, specialty,
                                            user_description, pfp_image)
        return jsonify(User=result), 201
    
    def get_user_by_email(self, email):
        user_list = self.user_dao.get_user_by_email(email)
        return jsonify(User=user_list)
    
    def get_user_by_email_and_password(self, email, password_hash):
        user_list = self.user_dao.get_user_by_email_and_password(email, password_hash)
        return jsonify(User=user_list)
    
    def get_user_page_by_id(self, user_id):
        user_list = self.user_dao.get_user_page_by_id(user_id)
        return jsonify(User=user_list)

    # Add methods for other functionalities like getting friends, premium status, etc.
    # ...
