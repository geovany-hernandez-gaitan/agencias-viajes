import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { BookingsModule } from './bookings/bookings.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { DestinoModule } from './destino/destino.module';
import { VueloModule } from './vuelo/vuelo.module';
import { HotelesModule } from './hoteles/hoteles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'nest-travel-agency',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    FilesModule,
    BookingsModule,
    ComentariosModule,
    DestinoModule,
    VueloModule,
    HotelesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
