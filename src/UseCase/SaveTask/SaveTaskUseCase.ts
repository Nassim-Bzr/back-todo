import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    try {
      const savedTask = await this.taskRepository.save({
        id: dto.id ?? undefined, 
        name: dto.name,
      });
      return savedTask;
    } catch (error) {
      throw new Error('Error while saving the task: ' + error.message);
    }
  }
}
