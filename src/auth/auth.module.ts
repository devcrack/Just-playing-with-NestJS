import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

// We have to type "export" for this class will be availabe outside of
// this module and in that way we allow other files of our application
// to use it.
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [HttpModule],
})
export class AuthModule {}
