import { Module } from '@nestjs/common';
import { RouterController } from './router.controller';
import { RouterService } from './router.service';

@Module({
    imports: [],
    controllers: [RouterController],
    providers: [RouterService],
})
export class RouterModule { }
