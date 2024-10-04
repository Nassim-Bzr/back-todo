import { Injectable } from '@nestjs/common';
import ServiceFactory from '../ServiceFactory';
import DeleteTask from './DeleteTask/DeleteTask';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase'; // Ajoutez cette ligne

type UseCases = GetAllTasksUseCase | DeleteTask | SaveTaskUseCase; // Ajoutez SaveTaskUseCase ici

@Injectable()
export default class UseCaseFactory extends ServiceFactory<UseCases> {}
