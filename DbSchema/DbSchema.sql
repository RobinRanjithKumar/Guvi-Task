Users
-----
user_id (PK)
name
email
password
role
created_at
updated_at

Courses
-------
course_id (PK)
course_name
description
mentor_id (FK -> Users)
created_at
updated_at

Modules
-------
module_id (PK)
module_name
course_id (FK -> Courses)
description
created_at
updated_at

Lessons
-------
lesson_id (PK)
lesson_name
module_id (FK -> Modules)
content
duration
created_at
updated_at

Enrollments
-----------
enrollment_id (PK)
user_id (FK -> Users)
course_id (FK -> Courses)
enrollment_date
completion_status

Assignments
-----------
assignment_id (PK)
course_id (FK -> Courses)
title
description
deadline
created_at
updated_at

Submissions
-----------
submission_id (PK)
assignment_id (FK -> Assignments)
user_id (FK -> Users)
submission_date
file_url
grade
feedback

Quizzes
-------
quiz_id (PK)
course_id (FK -> Courses)
title
description
created_at
updated_at

Questions
---------
question_id (PK)
quiz_id (FK -> Quizzes)
question_text
options
correct_answer
marks

Quiz Attempts
-------------
attempt_id (PK)
quiz_id (FK -> Quizzes)
user_id (FK -> Users)
attempt_date
score

Certificates
------------
certificate_id (PK)
user_id (FK -> Users)
course_id (FK -> Courses)
issue_date
certificate_url