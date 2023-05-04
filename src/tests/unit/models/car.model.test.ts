import { expect } from 'chai';
import * as sinon from 'sinon';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import {
	carMock,
  carMockWithId,
	allCarsMock,
} from '../../mocks/carMock';

describe('car model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
		sinon.stub(Model, 'find').resolves(allCarsMock);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

	describe('searching a car', () => {
		it('successfully found', async () => {
			const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('error');
			}
		});
	});

	describe('searching all cars', () => {
		it('successfully found all cars', async () => {
			const carsFound = await carModel.read();
			expect(carsFound).to.be.deep.equal(allCarsMock);
		});
	});
});