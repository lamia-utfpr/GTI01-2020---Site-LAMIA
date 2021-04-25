import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import Errors from 'v2/utils/Errors';
import { ApiConfig } from '../../../config/api';
import ICreateOfficeMemberDTO from '../dtos/ICreateOfficeMember.dto';
import { ISelectOrderOfficeMemberDTO } from '../dtos/IOrderOfficeMember.dto';
import { ServiceOfficeMember } from '../services/officeMember.service';
import { EntityOfficeMember } from '../typeorm/entities/officeMember.entity';

@ApiTags('offices')
@Controller(`${ApiConfig.version}/members/offices`)
export class ControllerOfficeMember {
  constructor(private readonly serviceOfficeMember: ServiceOfficeMember) {}

  @ApiCreatedResponse({
    description: 'Created Success',
    type: EntityOfficeMember,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiConflictResponse(Errors.Conflict)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() data: ICreateOfficeMemberDTO) {
    return this.serviceOfficeMember.createOfficeMember(data);
  }

  @ApiQuery({
    type: ISelectOrderOfficeMemberDTO,
  })
  @ApiResponse({
    status: 200,
    description: 'List of office members',
    type: EntityOfficeMember,
    isArray: true,
  })
  @ApiBadRequestResponse(Errors.BadRequest)
  @ApiInternalServerErrorResponse(Errors.InternalServer)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Query() order: ISelectOrderOfficeMemberDTO) {
    return this.serviceOfficeMember.findAll(order);
  }
}
