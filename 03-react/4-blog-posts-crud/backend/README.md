# RTK Query Practice Backend

A small Express + MongoDB REST API to practice RTK Query `query`, `mutation`, CRUD, and cache refresh behavior.

## What you will practise

- `GET /api/posts` — query all posts
- `GET /api/posts/:id` — query one post
- `POST /api/posts` — create a post
- `PATCH /api/posts/:id` — update a post
- `DELETE /api/posts/:id` — delete a post
- MongoDB persistence (posts remain after the server restarts)
- Validation and API error responses
- Connecting a React/Vite frontend to a separate backend

## Requirements

- Node.js 18+
- MongoDB running locally, or a MongoDB Atlas connection string

## Setup

1. Extract the ZIP and open this folder in your terminal.
2. Install packages:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env`.
4. Set `MONGODB_URI` in `.env`.

   For local MongoDB, the example is:

   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/rtk_query_practice
   ```

   If you use MongoDB Atlas, replace it with your own connection string. Do not share or commit your `.env` file.

5. Start the server:

   ```bash
   npm run dev
   ```

6. Check this URL in your browser:

   `http://localhost:5000/api/health`

   Expected response:

   ```json
   { "message": "RTK Query practice API is running" }
   ```

## API examples

### Get all posts

`GET http://localhost:5000/api/posts`

### Create a post

`POST http://localhost:5000/api/posts`

Header: `Content-Type: application/json`

Body:

```json
{
  "title": "Learning RTK Query",
  "body": "I am practising queries and mutations with my own backend."
}
```

### Update a post

`PATCH http://localhost:5000/api/posts/POST_ID`

Body:

```json
{
  "title": "Learning RTK Query properly"
}
```

Replace `POST_ID` with the `_id` returned by the API.

### Delete a post

`DELETE http://localhost:5000/api/posts/POST_ID`

### Get one post

`GET http://localhost:5000/api/posts/POST_ID`

You can test these endpoints using Postman, Thunder Client, or your frontend.

## Folder structure

```text
src/
  config/
    db.js
  controllers/
    postController.js
  middleware/
    errorHandler.js
  models/
    Post.js
  routes/
    postRoutes.js
  server.js
```

- `server.js`: starts Express and connects middleware/routes.
- `config/db.js`: connects to MongoDB.
- `models/Post.js`: defines the post's database shape and validation.
- `routes/postRoutes.js`: maps HTTP methods and URLs to controller functions.
- `controllers/postController.js`: contains the CRUD logic.
- `middleware/errorHandler.js`: returns consistent error responses.

## Connect it to RTK Query

In the frontend API service, use this base URL:

```js
baseQuery: fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/",
})
```

Then an endpoint can use `query: () => "posts"`.

For development, the frontend and backend run in separate terminals. Start the backend with `npm run dev` in this folder, and start the Vite frontend with `npm run dev` in the frontend folder.

## Important: how cache behaves with other users

RTK Query cache is local to the running frontend app; it is not a shared database and it does not automatically know when another user changes a record.

- A mutation with `invalidatesTags` can cause queries in *this same app instance* to refetch.
- To see changes made by other users, use a refetch strategy such as `pollingInterval`, `refetchOnFocus`, or a real-time channel such as WebSocket/SSE.
- The MongoDB database is the shared source of truth. When the frontend fetches again, it receives the current server data.

This practice backend does not implement authentication, authorization, rate limiting, or production deployment hardening. Add those before using it for a real public application.
