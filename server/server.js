import express from 'express';
const app = express(); // create express app
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import connectPg from 'connect-pg-simple';
import pg from 'pg';

const POOL = new pg.Pool({
  user: process.env.user
})

const pgSession = connectPg(session);
app.use(session({
  store: new pgSession({
    createTableIfMissing: true, 
    POOL
  }),
  secret: 'make env variable',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}))

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api', (req, res) => {
  res.send({ message: 'response to get' });
})

app.post('/api/register', async (req, res) => {
  // check if already exists
  // if not, insert into db
  const username = req.body.username;
  const password = req.body.password;
  if (!username || username.length > 64) {
    res.send('invalid username')
    return
  }

  POOL.query('SELECT username FROM users WHERE username = $1', [username]).then(({ rows }) => {
    if (rows.length) {
      res.send('user already exists')
      return
    }
    POOL.query("INSERT INTO users VALUES ($1, crypt($2, gen_salt('bf')));", [username, password])
    .then((result) => {
      req.session.username = username
      res.send('Registered successfully')
      console.log('created new user', username)
    })
    .catch((err) => {
      console.error('error inserting user into db', err)
      res.send('error, please try again')
    })
  })
  .catch((err) => {
    console.error('error checking if user already exists', err)
    res.send('error, please try again')
  })

})
app.post('/api/signin', (req, res) => {
  res.send({message: 'Received post to /api/signin with data: ' + JSON.stringify(req.body)})
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});