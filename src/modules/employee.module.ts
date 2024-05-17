import { Module } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { EmployeeController } from '../controllers/employee.controller';
import { Employee, EmployeeSchema } from '../schema/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Employee.name,
        schema: EmployeeSchema,
      },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
