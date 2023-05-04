import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = z.object({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
}).merge(VehicleZodSchema);

type ICar = z.infer<typeof CarZodSchema>;

export { ICar };
export { CarZodSchema };