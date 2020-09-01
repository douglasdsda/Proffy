import { container } from 'tsyringe';

import '../providers';

import UsersTokensRepository from '../repositories/UsersTokenRepository';
import IUsersTokensRepository from '../interfaces/IUsersTokensRepository';
import IShedulesRepository from '../interfaces/IShedulesRepository';
import SheduleRepository from '../repositories/SheduleRepository';
import UsersRepository from '../repositories/UsersRepository';
import IUsersRepository from '../interfaces/IUsersRepository';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
    'UsersTokensRepository',
    UsersTokensRepository,
);

container.registerSingleton<IShedulesRepository>(
    'SheduleRepository',
    SheduleRepository,
);
