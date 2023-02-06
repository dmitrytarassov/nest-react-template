import { ConsoleService } from 'nestjs-console';
export declare class AppService {
    private readonly consoleService;
    constructor(consoleService: ConsoleService);
    listContent: (directory: string) => void;
    getHello(): string;
}
