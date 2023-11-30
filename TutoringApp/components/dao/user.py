import psycopg2

class UserDAO:

    def __init__(self, host, port, database, user, password):
        self.connection = psycopg2.connect(
            host=host,
            port=port,
            database=database,
            user=user,
            password=password
        )
        self.cursor = self.connection.cursor()

    def close_connection(self):
        self.cursor.close()
        self.connection.close()

    def execute_query(self, query, values=None):
        self.cursor.execute(query, values)
        return self.cursor.fetchall()

    def commit_query(self, query, values=None):
        self.cursor.execute(query, values)
        self.connection.commit()

    def get_all_users(self):
        query = "SELECT * FROM public.users"
        return self.execute_query(query)

    def get_user_by_id(self, user_id):
        query = "SELECT * FROM public.users WHERE user_id = %s"
        return self.execute_query(query, (user_id,))

    def add_new_user(self, names, email, password_hash, is_student=True, is_tutor=False,
                     last_name=None, student_rating=None, tutor_rating=None, specialty=None,
                     user_description=None, pfp_image=None):
        query = """
        INSERT INTO public.users
        (names, email, password_hash, is_student, is_tutor, last_name, "studentRating",
         tutor_rating, specialty, user_description, pfp_image)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        RETURNING user_id
        """
        values = (names, email, password_hash, is_student, is_tutor, last_name,
                  student_rating, tutor_rating, specialty, user_description, pfp_image)
        self.commit_query(query, values)
        return self.cursor.fetchone()[0]

    # Add methods for other functionalities like getting friends, premium status, etc.
    # ...

    def get_user_by_email(self, email):
        query = "SELECT * FROM public.users WHERE email = %s"
        return self.execute_query(query, (email,))
    
    def get_user_by_email_and_password(self, email, password_hash):
        query = "SELECT * FROM public.users WHERE email = %s AND password_hash = %s"
        return self.execute_query(query, (email, password_hash))
    
    def get_user_by_email_and_password_hash(self, email, password_hash):
        query = "SELECT * FROM public.users WHERE email = %s AND password_hash = %s"
        return self.execute_query(query, (email, password_hash))
    
    def get_user_page_by_id(self, user_id):
        query = "SELECT * FROM public.user_page WHERE user_id = %s"
        return self.execute_query(query, (user_id,))
