import { NextFunction, Request, Response } from 'express';
import { ErrorTypes } from '../errors/catalog';

const validateId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (id.length !== 24) {
    throw new Error(ErrorTypes.InvalidMongoId);
  }

  next();
};

export default validateId;