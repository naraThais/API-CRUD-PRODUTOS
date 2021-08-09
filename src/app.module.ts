import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.model';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(), 
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "",
    database: 'produtos',
    autoLoadModels: true,
    synchronize: true,
  }),
  SequelizeModule.forFeature([Produto])
],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
