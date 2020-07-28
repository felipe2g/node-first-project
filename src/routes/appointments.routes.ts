import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO } from 'date-fns';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (req, res) => {
  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));

  const appointment = {
    id: uuid(),
    provider,
    parsedDate,
  };

  appointments.push(appointment);

  res.json({ appointment });
});

export default appointmentsRouter;
