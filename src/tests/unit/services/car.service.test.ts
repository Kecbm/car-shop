import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import CarModel from '../../../models/Car';
import CarService from '../../../services/CarService';
import { carMockWithId, carMock, allCarsMock } from '../../mocks/carMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);
 
	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null);
		sinon.stub(carModel, 'read').resolves(allCarsMock);
	});

	after(() => {
		sinon.restore()
	});

	describe('Create car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const carCreated = await carService.readOne(carMockWithId._id);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.readOne(carMockWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

	describe('Read All Cars', () => {
		it('Success', async () => {
			const allCars = await carService.read();

			expect(allCars).to.be.deep.equal(allCarsMock);
		});
	});
} );