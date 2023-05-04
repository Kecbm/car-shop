import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'Jeep Compass',
  year: 2022,
  color: 'White', 
  status: true,
  buyValue: 350000, 
  doorsQty: 4,  
  seatsQty: 5,  
};

const carMockWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Jeep Compass',
  year: 2022,
  color: 'White', 
  status: true,
  buyValue: 350000, 
  doorsQty: 4,  
  seatsQty: 5, 
};

const allCarsMock: ICar[] & { _id: string }[] = [
	{
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Jeep Compass',
    year: 2022,
    color: 'White', 
    status: true,
    buyValue: 100000, 
    doorsQty: 4,  
    seatsQty: 5, 
  },
	{
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Lamborghini HURACAN',
    year: 2022,
    color: 'Green', 
    status: true,
    buyValue: 5800000, 
    doorsQty: 2,  
    seatsQty: 2, 
  }
];

export  { carMock, carMockWithId, allCarsMock };