import { Controller, Get, Post, Delete, Body, Query, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { RouterService } from './router.service';
// 加入swagger集成
import { SwaggerModule, ApiTags, ApiBody, ApiQuery, ApiProperty } from '@nestjs/swagger';
// 加入异常处理器
import { HttpExceptionFilter } from "../common/filters/http-exception .filter"
@ApiTags('api')
@Controller('/api')
export class RouterController {
  constructor(private readonly RouterService: RouterService) { }

  // 查询
  @Get('/getUserList')
  getUserList(): string {
    return this.RouterService.getUserList();
  }

  // 创建
  @Post('/createUser')
  @ApiBody({ description: '填写创建内容' })
  // @UseFilters(new HttpExceptionFilter())
  createUser(@Body() { name }): string {
    if (!name) {
      throw new HttpException({
        satatus: HttpStatus.BAD_REQUEST, message: "请求name 必传", errror: "name is required"
      }, HttpStatus.BAD_REQUEST)

    }
    return this.RouterService.createUser(name);
  }

  // 更新
  @Post('/updateUser')
  @ApiBody({ description: '填写内容' })
  updateUser(@Body() { name }): string {
    return this.RouterService.updateUser(name);
  }

  // 删除
  @Delete('/deleteUser')
  @ApiQuery({ name: 'name' })
  deleteUser(@Query() { name }): string {
    return this.RouterService.deleteUser(name);
  }
}
