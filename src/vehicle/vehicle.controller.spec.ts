import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { Vehicle } from '../Database/Vehicle/Vehicle.entity';

describe('VehicleController', () => {
  let controller: VehicleController;
  let service: VehicleService;
  let spyOnGetAllVehicles;

  const vehicleRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleController],
      providers: [
        VehicleService,
        { provide: getRepositoryToken(Vehicle), useValue: vehicleRepository },
      ],
    }).compile();

    controller = module.get<VehicleController>(VehicleController);
    service = module.get<VehicleService>(VehicleService);
    spyOnGetAllVehicles = jest
      .spyOn(service, 'getAllVehicles')
      .mockImplementation(async () => [new Vehicle()]);
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should call getAllVehicles on service when getAllVehicles is called', async () => {
    await controller.getAllVehicles();
    expect(spyOnGetAllVehicles).toHaveBeenCalled();
  });
});
