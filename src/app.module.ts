import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import { DiamondsModule } from './diamonds/diamonds.module';
import { ConfigModule } from '@nestjs/config';
import { PriceEngineModule } from './price-engine/price-engine.module';
import { SharedModule } from './shared/shared.module';
import { SimilarEngineModule } from './similar-engine/similar-engine.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables:true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true
    }),
    DiamondsModule,
    PriceEngineModule,
    SharedModule,
    SimilarEngineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
