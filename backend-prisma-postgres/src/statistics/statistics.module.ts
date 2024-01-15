import { Module } from '@nestjs/common'
import { PrismaService } from './../prisma.service'
import { UserService } from './../user/user.service'
import { StatisticsController } from './statistics.controller'
import { StatisticsService } from './statistics.service'

@Module({
	controllers: [StatisticsController],
	providers: [StatisticsService, PrismaService, UserService]
})
export class StatisticsModule {}
