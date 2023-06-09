import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }
    
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar> {
    const car = await this._car.readOne(_id);

    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    
    return car;
  }
}

export default CarService;