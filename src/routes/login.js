import express from 'express';
import { selectSql } from '../database/sql';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const users = await selectSql.getUser();

    let loginSuccess = false;

    users.map((user) => {
        if (vars.id === user.userId && vars.password === user.password) {
            console.log('Login success!');
            req.session.user = { id: user.userId, checkLogin: true };
            loginSuccess = true;
        }
    });

    if (!loginSuccess) {
        console.log('Login failed!');
        res.send(`<script>
                    alert('Login failed!');
                    location.href='/';
                </script>`);
    } else {
        res.redirect('/home');
    }
});

export default router;
