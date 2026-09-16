import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

const courses = [
    {id: 1, title: 'Arquitectura de sistemas', capacity: 30},
    {id: 2, title: 'Estadistica', capacity: 20},
    {id: 3, title: 'Sistemas operativos', capacity: 33}
];

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok'});
});

app.get('/courses', (req, res) => {
  res.status(200).json(courses);
});

app.get('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id, 10);
    const course = courses.find((c) => c.id === courseId);

    if (!course) {
        return res.status(404).json({error: 'curso no encontrado'});
    }
    
    return res.status(200).json(course);
});

app.get('/version', (req, res) => {
    res.status(200).json({version: '1.0.0'});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

