import { Injectable } from '@nestjs/common';
import { ConsoleService } from 'nestjs-console';

@Injectable()
export class AppService {
  constructor(private readonly consoleService: ConsoleService) {
    // get the root cli
    const cli = this.consoleService.getCli();

    // create a single command (See [npm commander arguments/options for more details])
    this.consoleService.createCommand(
      {
        command: 'list <directory>',
        description: 'description',
      },
      this.listContent,
      cli, // attach the command to the cli
    );
  }

  listContent = (directory: string): void => {
    console.log(`Listing files in directory ${directory}`);
  };

  getHello(): string {
    return 'Hello World!';
  }
}
