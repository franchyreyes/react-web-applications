import express from 'express';
import cors from 'cors';
import uuid from 'uuid';

var fakeTodos = [{
    id: 'ae06181d-92c2-4fed-a29d-fb53a6301eb9',
    text: 'Add a banner',
    isCompleted: false,
    createdAt: new Date(),
}, {
    id: 'cda9165d-c263-4ef6-af12-3f1271af5fb4',
    text: 'Fix notesof the products',
    isCompleted: false,
    createdAt: new Date(Date.now() - 86400000 * 7),
}, {
    id: '2e538cc5-b734-4771-a109-dfcd204bb38b',
    text: 'Remove all the prices',
    isCompleted: true,
    createdAt: new Date(Date.now() - 86400000 * 14),
}];


var listPlayers = [{
    id: 'ae06181d-92c2-4fed-a29d-fb53a6301eb9',
    team: 'Chicago Bull',
    backNumber: 20,
    name: 'Franchy Reyes',
    color: '#CE1141',
    points: 52,
    mvp: 3,
    createdAt: new Date(),
}, {
    id: 'cda9165d-c263-4ef6-af12-3f1271af5fb4',
    team: 'Los Angeles Lakers',
    backNumber: 40,
    name: 'Luis Peña',
    color: '#552583',
    points: 20,
    mvp: 2,
    createdAt: new Date(Date.now() - 86400000 * 7),
},
{
    id: 'cda9165d-c263-4ef6-af12-3f1271af5fb4',
    team: 'Dallas Mavericks',
    backNumber: 21,
    name: 'Victor Rincon',
    color: '#00538C',
    points: 40,
    mvp: 1,
    createdAt: new Date(Date.now() - 86400000 * 7),
}
];

const app = express();

const corsOptions = {
    origin: '*',
}
app.use(express.urlencoded());
app.use(express.json());
app.use(cors(corsOptions));

// The route for getting a list of all Players
app.get('/players', (req, res) => {
    setTimeout(() => res.status(200).json(listPlayers), 1000);
    // res.status(200).json(listPlayers);
});

// The route for deleting a player item
app.delete('/players/:id', (req, res) => {
    const { id } = req.params;
    const removedPlayer = listPlayers.find(player => player.id === id);
    listPlayers = listPlayers.filter(player => player.id !== id);
    res.status(200).json(removedPlayer);
});


// The route for getting a list of all todos
app.get('/todos', (req, res) => {
    res.status(200).json(fakeTodos);
});

// The route for getting a list of all todos, but with a delay
// (to display the loading component better)
app.get('/todos-delay', (req, res) => {
    setTimeout(() => res.status(200).json(fakeTodos), 3000);
});

// The route for getting a specific todo
app.get('/todos/:id', (req, res) => {

    const { id } = req.params;
    const matchingTodo = fakeTodos.find(todo => todo.id === id);
    console.log(matchingTodo);
    if (matchingTodo !== undefined) {
        res.status(200).json(matchingTodo);
    }
    else {
        res.status(404).json({ message: 'There is no todo with that id' });
    }
});

// The route for creating new todo-list items
app.post('/todos', (req, res) => {
    const { text } = req.body;
    if (text) {
        const insertedTodo = {
            id: uuid(),
            createdAt: Date.now(),
            isCompleted: false,
            text,
        }
        fakeTodos.push(insertedTodo);
        res.status(201).json(insertedTodo);
    } else {
        res.status(400).json({ message: 'Request body should have a text property' });
    }
});

app.post('/todos/:id/completed', (req, res) => {
    const { id } = req.params;
    const matchingTodo = fakeTodos.find(todo => todo.id === id);
    const updatedTodo = {
        ...matchingTodo,
        isCompleted: true,
    }
    if (updatedTodo) {
        fakeTodos = fakeTodos.map(todo =>
            todo.id === id
                ? updatedTodo
                : todo);
        res.status(200).json(updatedTodo);
    } else {
        res.status(404).json({ message: 'There is no todo with that id' });
    }
})

// The route for deleting a todo-list item
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const removedTodo = fakeTodos.find(todo => todo.id === id);
    fakeTodos = fakeTodos.filter(todo => todo.id !== id);
    res.status(200).json(removedTodo);
});

app.listen(8080, () => console.log("Server listening on port 8080"));
