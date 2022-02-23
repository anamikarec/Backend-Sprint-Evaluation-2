# Backend-Sprint-Evaluation-2

#### Create a user collection which has following fields
```js
- name
- email
- password
- profile_photo_url
- roles ( student | admin | instructor )
```
##### Create a student collection which has following fields

- roll_number
- user ( references the user collection with user_id)
- batch
##### Create a lectures collection which has following fields

- title
- author_id ( references the user collection )
- batch
- user should have instructor, student and admin roles Create a user registration flow which contains below APIs

- Also allow the user to use register and login ( when creating the account and then log them in)

- use jwt tokens

- use bearer tokens for authentication

- use middlewares for authorization

- wherever necessary check if the user is the author

- Create below lectures endpoints
1. post "/users" => which will create a user and also the profile_photo has to be uploaded along with suitable role.
2. post "/lectures" => add a new book ( authentication required and only instructors and admins can create a new lecture)
3. get "/lectures" => get all lectures ( authentication not required for this endpoint).
4. patch "/lectures/:lecture_id" ( authentication required and only the instructor who created the lecture or admin can update a lecture )
5. delete "/lectures/:lecture_id" ( authentication required and only the instructor who created the lecture or admin can delete the lecture)
6. get "/lectures/:id" ( authentication not required )
- PLEASE NOTE :- MVC architecture has to be followed.

- clone the repo ```git clone https://github.com/anamikarec/Backend-Sprint-Evaluation-2.git```
- Do ```npm i``` to install the npm packages.
- Do a post request Signup with name, email, password, profile_photo_url and roles
```js
  localhost:4001/signup
```
- Note:~ A token will be generated.
- Do signin by post request with email and password
```js
  localhost:4001/signin
```
- Note:~ After successfully signin a token will be generated. that token we will use for authentication.
- For authentication, in the headers we will choose one header with key ```authorization``` and value ```Bearer <token>``` with the get request of ```localhost:4001/users```
